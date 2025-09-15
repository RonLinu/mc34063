# https://github.com/RonLinu/mc34063.git

RIPPLE = 0.1  # default ripple in volts

calcBtn = document.getElementById 'calculate'
calcBtn.onclick = ->
    calculate()

document.getElementById('theImage').src = "mc34063/splash.png"

# --------------------------------------
calculate = ->
    values = {
        input_voltage  : document.getElementById('inputVoltage').value
        output_voltage : document.getElementById('outputVoltage').value
        output_current : document.getElementById('outputCurrent').value
        frequency      : document.getElementById('frequency').value
        resistor_R1    : document.getElementById('resistorR1').value
    }

    if areValidNumbers(values) and areWithinLimits(values)
        calculation values
    else
        clear_results()

# --------------------------------------
isValidFloat = (str) ->
  regex = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/
  regex.test(str.trim())

# --------------------------------------
str_to_float = (values) ->
    nums = {
        vin  : Number(values.input_voltage)
        vout : Number(values.output_voltage)
        iout : Number(values.output_current)
        freq : Number(values.frequency)
        res1 : Number(values.resistor_R1)
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
areValidNumbers = (values) ->
    msg = ''
    good = true

    for key, val of values
        unless isValidFloat(val)
            msg += key[0].toUpperCase() + key.slice(1).replace("_"," ") + "<br>"

    if msg
        good = false
        Swal.fire
            title: "Fields with invalid number"
            html: "<div style='text-align: center;'>#{msg}</div>"
            icon: "error"
            confirmButtonText: 'OK'
            position: 'top'
            # 'top', 'top-left', 'top-right', 'center', 'center-left',
            # 'center-right', 'bottom', 'bottom-left', and 'bottom-right'
    good



# --------------------------------------
areWithinLimits = (values) ->
    msg = ''
    within = true
    nums = str_to_float values

    if not (5 <= nums.vin <= 40) then msg    += "Input voltage \t(5V to 40V)<br>"
    if not (-40 <= nums.vout <= 40) then msg += "Output voltage \t(-40V to 40V)<br>"
    if not (1 <= nums.iout <= 1000) then msg += "Output current \t(1ma to 1000mA)<br>"
    if not (20 <= nums.freq <= 500) then msg += "Frequency \t\t(20KH to 500KHz)<br>"
    if not (1 <= nums.res1 <= 100) then msg  += "Resistor R1 \t\t(1K ot 100K)<br>"

    if msg
        within = false
        Swal.fire
            title: "Fields with out-of-limit values"
            html: "<div style='text-align: center;'>#{msg}</div>"
            icon: "error"
            confirmButtonText: 'OK'
            position: 'top'
    within

# --------------------------------------
show_results = (r, name, schematic) ->
    topList = document.getElementById 'results'
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
    topList.innerHTML = results

    title = document.getElementById 'regulator-name'
    title.innerHTML = "#{name}"
    document.getElementById('theImage').src = "mc34063/#{schematic}"

# --------------------------------------
clear_results = ->
    topList = document.getElementById 'results'
    results = "<pre>"
    for x in [1..6]
        results += "&nbsp;\n"
    results += "</pre>"
    topList.innerHTML = results

    title = document.getElementById 'regulator-name'
    title.innerHTML = "Regulator name"
    document.getElementById('theImage').src = "mc34063/splash.png"

# --------------------------------------
calculation = (values) ->
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
