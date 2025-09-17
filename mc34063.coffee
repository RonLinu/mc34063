# https://github.com/RonLinu/mc34063.git

RIPPLE = 0.1  # default ripple in volts

window.onload = ->
  document.getElementById('vinField').focus()

calcBtn = document.getElementById 'calculate'

calcBtn.onclick = ->
    # Read fields values
    values =
        vin  : document.getElementById('vinField').value
        vout : document.getElementById('voutField').value
        iout : document.getElementById('ioutField').value
        freq : document.getElementById('freqField').value
        res1 : document.getElementById('res1Field').value

    # Restore units labels (from any previous error messages)
    for key, _ of values
        label = document.getElementById(key+"FieldUnit")
        text = label.innerText
        index = text.indexOf(" ")
        if index != -1 then text = text.substring(0,index)
        label.innerHTML = text
        label.style.color = "black" 

    if validNumbers(values) and withinLimits(values)
        calculate values
    else
        clear_results()

# --------------------------------------
clear_results = ->
    document.getElementById('results').innerHTML = ""
    document.getElementById('regulator-name').innerHTML = "Regulator name"
    document.getElementById('theImage').src = "mc34063/splash.png"

# --------------------------------------
isValidFloat = (str) ->
  regex = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/
  regex.test(str.trim())

# --------------------------------------
str_to_float = (values) ->
    nums = {
        vin  : Number(values.vin)
        vout : Number(values.vout)
        iout : Number(values.iout)
        freq : Number(values.freq)
        res1 : Number(values.res1)
    }

# --------------------------------------
format_results = (lmin, ct, cout, rsc, r2, rb) ->
    results = {
        lmin : (lmin * 1e6).toFixed(0)
        ct   : (ct * 1e12).toFixed(0)
        cout : (cout * 1e6).toFixed(0)
        rsc  : rsc.toFixed(1)
        r2   : r2.toFixed(1)
        rb   : rb.toFixed(1)
    }

# --------------------------------------
validNumbers = (values) ->
    good = true

    for key, value of values
        unless isValidFloat(value)
            good = false
            label = document.getElementById(key+"FieldUnit")
            unit = label.innerText
            label.innerHTML = "#{unit} \u2190 invalid number"
            label.style.color = "darkred" 

    good

# --------------------------------------
withinLimits = (values) ->
    showLimitsError = (id, msg) ->
        label = document.getElementById(id)
        unit = label.innerText
        label.innerHTML = "#{unit} \u2190 range #{msg}"
        label.style.color = "darkred" 

    within = true
    nums = str_to_float values

    unless (5 <= nums.vin <= 40)
        within = false
        showLimitsError "vinFieldUnit", "5...40"
    unless (-40 <= nums.vout <= 40)
         within = false
         showLimitsError "voutFieldUnit", "-40...40"
    unless (5 <= nums.iout <= 1000)
        within = false
        showLimitsError "ioutFieldUnit", "5...1000"
    unless (25 <= nums.freq <= 500)
        within = false
        showLimitsError "freqFieldUnit", "25...500"
    unless (1 <= nums.res1 <= 100)
        within = false
        showLimitsError "res1FieldUnit", "1...100"
        
    within

# --------------------------------------
show_results = (r, name, schematic) ->
    footer = document.getElementById 'results'
    results = "<pre>"
    results += "L&nbsp;&nbsp;&nbsp;= #{r.lmin} uH\n"
    results += "Ct&nbsp;&nbsp;= #{r.ct} pF\n"
    results += "Co&nbsp;&nbsp;= #{r.cout} uF\n"
    results += "Rsc&nbsp;= #{r.rsc} Ω\n"
    results += "R2&nbsp;&nbsp;= #{r.r2} KΩ\n"
    if r.rb is "0.0"
        results += "&nbsp;\n"
    else
        results += "Rb&nbsp;&nbsp;= #{r.rb} Ω\n"
    results += "</pre>"
    footer.innerHTML = results

    document.getElementById('regulator-name').innerHTML = name
    document.getElementById('theImage').src = "mc34063/#{schematic}"


# --------------------------------------
calculate = (values) ->
    nums = str_to_float values

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
    cout  = ipeak * tontoff / (8 * RIPPLE)
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
    cout  = (n.iout / 1e3 * ton_max / RIPPLE) * 9
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
    cout  = (n.iout / 1e3 * ton_max / RIPPLE) * 9
    rsc   = 0.33 / ipeak
    r2    = ( (Math.abs(n.vout) - 1.25) / 1.25) * n.res1
    rb    = 0

    results = format_results lmin, ct, cout, rsc, r2, rb
    show_results results, "Inverter regulator", "inverter.png"

# ---------------------------------------------------------------------

# Do this at start up HERE, not in html file anymore
clear_results()
