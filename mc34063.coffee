# https://ronlinu.github.io/ms34063

RIPPLE = 0.1  # default ripple in volts

window.onload = ->
    document.getElementById('vinField').focus()

    # Retrieve saved values from localStorage
    storedData = localStorage.getItem("mc34063")
    if storedData
        # Restore values in all fields
        values = JSON.parse(storedData)
        for key, value of values
            document.getElementById( key + "Field").value = value

# --------------------------------------
saveBtn = document.getElementById('save')

saveBtn.onclick = ->
    values = getFieldsValues()

    # Only clear any red background color in fields
    for key of values
        field = document.getElementById(key + 'Field')
        field.style.backgroundColor = ''

    # Accept only valid field values before saving
    if areValidNumbers(values) and areWithinLimits(values)
        localStorage.setItem("mc34063", JSON.stringify(values))
        msg = 'Field values ​​have been saved as new default values'
        showAlert('', 'info', 'center', msg)
    else
        clear_results()

# --------------------------------------
calculateBtn = document.getElementById('calculate')

calculateBtn.onclick = ->
    # Read field values
    values = getFieldsValues()

    # Clear previous on-screen results (if any)
    clear_results values

    if areValidNumbers(values) and areWithinLimits(values)
        calculate values
        calculateBtn.disabled = true;

# --------------------------------------
do ->
    # Catch input changes by user in any field
    onInputChange = (event) ->
        clear_results()
        calculateBtn.disabled = false;

    # Create an event listener for each input field
    inputs = document.querySelectorAll 'form input'
    for input in inputs
        input.addEventListener 'input', onInputChange

# ---------------------------------------------------------------------
showAlert = (title, icon, textalign, msg) ->
    new Promise (resolve) ->
        Swal.fire
            title: title
            html: "<div style='text-align: #{textalign}; font-size: 16px;'>#{msg}</div>"
            icon: icon
            confirmButtonText: 'OK'
            position: 'center'
            animation: true
            willClose: resolve

# --------------------------------------
getFieldsValues = ->
    values =
        vin  : document.getElementById('vinField').value
        vout : document.getElementById('voutField').value
        iout : document.getElementById('ioutField').value
        freq : document.getElementById('freqField').value
        res1 : document.getElementById('res1Field').value

    return values
    
# --------------------------------------
clear_results = (values) ->
    document.getElementById('results').innerHTML = ''
    document.getElementById("results").style.color = ''
    document.getElementById('regulator-name').innerHTML = 'Regulator name'
    document.getElementById('theImage').src = 'mc34063/splash.png'

    # Remove red background color, if any, in all fields
    for key of values
        field = document.getElementById(key + 'Field')
        field.style.backgroundColor = ''

# --------------------------------------
isValidFloat = (str) ->
    regex = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/
    return regex.test(str.trim())

# --------------------------------------
str_to_float = (values) ->
    nums =
        vin  : Number(values.vin)
        vout : Number(values.vout)
        iout : Number(values.iout)
        freq : Number(values.freq)
        res1 : Number(values.res1)
        
    return nums
    
# --------------------------------------
areValidNumbers = (values) ->
    count = 0

    for key, value of values
        if not isValidFloat(value)
            count++
            field = document.getElementById(key + 'Field')
            field.style.backgroundColor = 'LightPink';

    if count
        msg = '<br>Invalid number in '
        msg += if count == 1 then 'one field' else "#{count} fields"
        showAlert('', 'error', 'center', msg)

    return count == 0   # true if all values are valid numbers

# --------------------------------------
areWithinLimits = (values) ->
    showLimitsError = (id) ->
        count++
        field = document.getElementById(id)
        field.style.backgroundColor = 'LightPink';

    count = 0
    nums = str_to_float(values)

    if not (5 <= nums.vin <= 40)
        showLimitsError 'vinField'

    if not ((-40 <= nums.vout <= -3) or (3 <= nums.vout <= 40))
         showLimitsError 'voutField'

    if not (5 <= nums.iout <= 1000)
        showLimitsError 'ioutField'

    if not (20 <= nums.freq <= 100)
        showLimitsError 'freqField'

    if not (1 <= nums.res1 <= 50)
        showLimitsError 'res1Field'

    if count
        msg = '<br>Value out of range in '
        msg += if count == 1 then 'one field' else "#{count} fields"
        showAlert('', 'error', 'center', msg)

    return count == 0   # true if all numbers are in within their limits

# ---------------------------------------------------------------------
calculate = (values) ->
    nums = str_to_float(values)

    if nums.vout < 0
        inverter nums
    else if nums.vout < nums.vin
        step_down nums
    else
        step_up nums

# --------------------------------------
format_results = (lmin, ct, cout, rsc, r2, rb) ->
    results =
        lmin : (lmin * 1e6).toFixed(0)
        ct   : (ct * 1e12).toFixed(0)
        cout : (cout * 1e6).toFixed(0)
        rsc  : rsc.toFixed(1)
        r2   : r2.toFixed(1)
        rb   : rb.toFixed(0)

    return results
    
# --------------------------------------
show_results = (results, name, schematic) ->
    footer = document.getElementById('results')
    resultStr = '<pre>'
    resultStr += "<u>#{name}</u>\n"
    resultStr += "L   = #{results.lmin} uH (min)\n"
    resultStr += "Ct  = #{results.ct} pF\n"
    resultStr += "Co  = #{results.cout} uF (min)\n"
    resultStr += "Rsc = #{results.rsc} Ω\n"
    resultStr += "R2  = #{results.r2} KΩ\n"
    resultStr += "Rb  = #{results.rb} Ω\n" if results.rb isnt "0"
    resultStr += '</pre>'
    footer.innerHTML = resultStr

    document.getElementById('regulator-name').innerHTML = name
    document.getElementById('theImage').src = "mc34063/#{schematic}"

# --------------------------------------
step_down = (nums) ->
    ratio   = (nums.vout + 0.8) / (nums.vin - 0.8 - nums.vout)
    tontoff = 1.0 / (nums.freq * 1e3)
    toff    = tontoff / (ratio + 1)
    ton_max = tontoff - toff
    ipeak   = nums.iout / 1e3 * 2.0

    lmin  = (nums.vin - 1 - nums.vout) / ipeak * ton_max
    ct    = ton_max * 4e-5
    cout  = (ipeak * tontoff) / (8 * RIPPLE)
    rsc   = 0.33 / ipeak
    r2    = (nums.vout - 1.25) / 1.25 * nums.res1    # R1 & R2 are in Kohms
    rb    = 0.0

    resultStr = format_results(lmin, ct, cout, rsc, r2, rb)
    show_results resultStr, 'Step-Down regulator', 'step_down.png'

# --------------------------------------
step_up = (nums) ->
    ratio   = (nums.vout + 0.8 - nums.vin) / (nums.vin - 1)
    tontoff = 1.0 / (nums.freq * 1e3)
    toff    = tontoff / (ratio + 1)
    ton_max = tontoff - toff
    ipeak   = nums.iout / 1e3 * (ratio + 1) * 2.0
    ib      = ipeak / 20 + 5e-3

    lmin  = (nums.vin - 1) / ipeak * ton_max
    ct    = ton_max * 4e-5
    cout  = (nums.iout / 1e3 * ton_max) / RIPPLE
    rsc   = 0.33 / ipeak
    r2    = ((nums.vout - 1.25) / 1.25) * nums.res1
    rb    = ((nums.vin - 1) - ipeak) * rsc / ib

    resultStr = format_results(lmin, ct, cout, rsc, r2, rb)
    show_results resultStr, 'Step-Up regulator', 'step_up.png'

# --------------------------------------
inverter = (nums) ->
    ratio   = (Math.abs(nums.vout) + 0.8) / (nums.vin - 0.8)
    tontoff = 1.0 / (nums.freq * 1e3)
    toff    = tontoff / (ratio + 1)
    ton     = tontoff - toff
    ipeak   = 2 * nums.iout / 1e3 # 2 * nums.iout * (ratio + 1) 

    lmin  = (nums.vin - 0.8) / ipeak * ton
    ct    = ton * 4e-5
    cout  = (nums.iout / 1e3 * ton) / RIPPLE
    rsc   = 0.33 / ipeak
    r2    = ( (Math.abs(nums.vout) - 1.25) / 1.25) * nums.res1
    rb    = 0

    resultStr = format_results(lmin, ct, cout, rsc, r2, rb)
    show_results resultStr, 'Inverter regulator', 'inverter.png'
