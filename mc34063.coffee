# https://github.com/RonLinu/mc34063.git

RIPPLE = 0.1  # default ripple in volts

window.onload = ->
  document.getElementById('vinField').focus()

calcBtn = document.getElementById('calculate')

calcBtn.onclick = ->
    # Read fields values
    values =
        vin  : document.getElementById('vinField').value
        vout : document.getElementById('voutField').value
        iout : document.getElementById('ioutField').value
        freq : document.getElementById('freqField').value
        res1 : document.getElementById('res1Field').value

    # Clear error messages (if any)
    clear_results values

    if validNumbers(values) and withinLimits(values)
        calculate values

# --------------------------------------
clear_results = (values) ->
    document.getElementById('results').innerHTML = ""
    document.getElementById('regulator-name').innerHTML = "Regulator name"
    document.getElementById('theImage').src = "mc34063/splash.png"
    document.getElementById("results").style.color = ""


    for key, _ of values
        field = document.getElementById(key + "Field")
        field.style.backgroundColor = ""

# --------------------------------------
isValidFloat = (str) ->
  regex = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/
  regex.test(str.trim())

# --------------------------------------
str_to_float = (values) ->
    nums =
        vin  : Number(values.vin)
        vout : Number(values.vout)
        iout : Number(values.iout)
        freq : Number(values.freq)
        res1 : Number(values.res1)

# --------------------------------------
format_results = (lmin, ct, cout, rsc, r2, rb) ->
    results =
        lmin : (lmin * 1e6).toFixed(0)
        ct   : (ct * 1e12).toFixed(0)
        cout : (cout * 1e6).toFixed(0)  
        rsc  : rsc.toFixed(1)
        r2   : r2.toFixed(1)
        rb   : rb.toFixed(0)

# --------------------------------------
validNumbers = (values) ->
    count = 0

    for key, value of values
        if not isValidFloat(value)
            count++
            field = document.getElementById(key + "Field")
            field.style.backgroundColor = "LightPink";

    if count > 0
        msg = "<br>\u2192 Invalid number in one field \u2190"
        if count > 1 then msg = msg.replace("one field","#{count} fields")
        document.getElementById('results').innerHTML = msg
        document.getElementById("results").style.color = "DarkRed"

    return count == 0   # true if all values are valid numbers

# --------------------------------------
withinLimits = (values) ->
    showLimitsError = (id) ->
        count++
        field = document.getElementById(id)
        field.style.backgroundColor = "LightPink";

    count = 0
    nums = str_to_float(values)

    if not (5 <= nums.vin <= 40)
        showLimitsError "vinField"

    if not ((-40 <= nums.vout <= -3) or (3 <= nums.vout <= 40))
         showLimitsError "voutField"

    if not (5 <= nums.iout <= 1000)
        showLimitsError "ioutField"
        
    if not (20 <= nums.freq <= 100)
        showLimitsError "freqField"
        
    if not (1 <= nums.res1 <= 50)
        showLimitsError "res1Field"

    if count > 0
        msg = "<br>\u2192 Value out of range in one field \u2190"
        if count > 1 then msg = msg.replace("one field","#{count} fields")
        document.getElementById('results').innerHTML = msg
        document.getElementById("results").style.color = "DarkRed"
        
    return count == 0   # true if all numbers are in range

# --------------------------------------
show_results = (r, name, schematic) ->
    footer = document.getElementById('results')
    results = "<pre>"
    results += "Lmin = #{r.lmin} uH\n"
    results += "Ct   = #{r.ct} pF\n"
    results += "Co   = #{r.cout} uF\n"
    results += "Rsc  = #{r.rsc} Ω\n"
    results += "R2   = #{r.r2} KΩ\n"
    results += "Rb   = #{r.rb} Ω\n" if r.rb isnt "0"
    results += "</pre>"
    footer.innerHTML = results

    document.getElementById('regulator-name').innerHTML = name
    document.getElementById('theImage').src = "mc34063/#{schematic}"

# --------------------------------------
calculate = (values) ->
    nums = str_to_float(values)

    if nums.vout < 0
        inverter nums
    else if nums.vout < nums.vin
        step_down nums
    else
        step_up nums

# --------------------------------------
step_down = (n) ->
    ratio   = (n.vout + 0.8) / (n.vin - 0.8 - n.vout)
    tontoff = 1.0 / (n.freq * 1e3)
    toff    = tontoff / (ratio + 1)
    ton_max = tontoff - toff
    ipeak   = n.iout / 1e3 * 2.0

    lmin  = (n.vin - 1 - n.vout) / ipeak * ton_max
    ct    = ton_max * 4e-5
    cout  = (ipeak * tontoff) / (8 * RIPPLE)
    rsc   = 0.33 / ipeak
    r2    = (n.vout - 1.25) / 1.25 * n.res1    # R1 & R2 are in Kohms
    rb    = 0.0

    results = format_results lmin, ct, cout, rsc, r2, rb
    show_results results, "Stepdown regulator", "step_down.png"

# --------------------------------------
step_up = (n) ->
    ratio   = (n.vout + 0.8 - n.vin) / (n.vin - 1)
    tontoff = 1.0 / (n.freq * 1e3)
    toff    = tontoff / (ratio + 1)
    ton_max = tontoff - toff
    ipeak   = n.iout / 1e3 * (ratio + 1) * 2.0
    ib      = ipeak / 20 + 5e-3

    lmin  = (n.vin - 1) / ipeak * ton_max
    ct    = ton_max * 4e-5
    cout  = (n.iout / 1e3 * ton_max) / RIPPLE
    rsc   = 0.33 / ipeak
    r2    = ((n.vout - 1.25) / 1.25) * n.res1
    rb    = ((n.vin - 1) - ipeak) * rsc / ib

    results = format_results lmin, ct, cout, rsc, r2, rb
    show_results results, "Stepup regulator", "step_up.png"

# --------------------------------------
inverter = (n) ->
    ratio   = (Math.abs(n.vout) + 0.8) / (n.vin - 0.8 - n.vout)
    tontoff = 1.0 / (n.freq * 1e3)
    toff    = tontoff / (ratio + 1)
    ton_max = tontoff - toff
    ipeak   = n.iout / 1e3 * 2.0

    lmin  = (n.vin - 0.8) / ipeak * ton_max
    ct    = ton_max * 4e-5
    cout  = (n.iout / 1e3 * ton_max) / RIPPLE
    rsc   = 0.33 / ipeak
    r2    = ( (Math.abs(n.vout) - 1.25) / 1.25) * n.res1
    rb    = 0

    results = format_results lmin, ct, cout, rsc, r2, rb
    show_results results, "Inverter regulator", "inverter.png"
