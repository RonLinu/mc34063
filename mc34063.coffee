# https://ronlinu.github.io/ms34063

RIPPLE = 0.1  # default ripple in volts

window.onload = ->
    document.getElementById('vinField').focus()
    
    # Retrieve saved values from localStorage (if any)
    storedData = localStorage.getItem("mc34063")
    if storedData
        values = JSON.parse(storedData)
        # Restore values in the fields
        for key, value of values
            document.getElementById( key + "Field").value = value

# --------------------------------------
showAlert = (title, icon, align, msg) ->
    new Promise (resolve) ->
        Swal.fire
            title: title
            html: "<div style='text-align: #{align}; font-size: 16px;'>#{msg}</div>"
            icon: icon
            confirmButtonText: 'OK'
            position: align
            animation: true
            willClose: resolve

# --------------------------------------
saveBtn = document.getElementById('save')

saveBtn.onclick = ->
    values = getFieldsValues()

    # Just clear fields from error color, keep any results on screen
    for key, _ of values
        field = document.getElementById(key + 'Field')
        field.style.backgroundColor = ''

    if not validNumbers(values) or not withinLimits(values)
        clear_results()
        return

    localStorage.setItem("mc34063", JSON.stringify(values))
    msg = 'Field values ​​have been saved as new default values'
    showAlert('', 'info', 'center', msg)

# --------------------------------------
getFieldsValues = () ->
    values =
        vin  : document.getElementById('vinField').value.trim()
        vout : document.getElementById('voutField').value.trim()
        iout : document.getElementById('ioutField').value.trim()
        freq : document.getElementById('freqField').value.trim()
        res1 : document.getElementById('res1Field').value.trim()

# --------------------------------------
calcBtn = document.getElementById('calculate')

calcBtn.onclick = ->
    # Read fields values
    values = getFieldsValues()
    
    # Clear previous results (if any)
    clear_results values

    if validNumbers(values) and withinLimits(values)
        calculate values

# --------------------------------------
# Function to handle input changes
onInputChange = (event) ->
    # If any change in fields
    clear_results()

# Attach event listeners to all input fields in the form
inputs = document.querySelectorAll 'form input'
for input in inputs
    input.addEventListener 'input', onInputChange

# --------------------------------------
clear_results = (values) ->
    document.getElementById('results').innerHTML = ''
    document.getElementById("results").style.color = ''
    document.getElementById('regulator-name').innerHTML = 'Regulator name'
    document.getElementById('theImage').src = 'mc34063/splash.png'

    for key, _ of values
        field = document.getElementById(key + 'Field')
        field.style.backgroundColor = ''

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
            field = document.getElementById(key + 'Field')
            field.style.backgroundColor = 'LightPink';

    if count
        msg = '<br>Invalid number in '
        msg += if count == 1 then 'one field' else "#{count} fields"
        showAlert('', 'error', 'center', msg)

    return count == 0   # true if all values are valid numbers

# --------------------------------------
withinLimits = (values) ->
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
        
    return count == 0   # true if all numbers are in range

# --------------------------------------
show_results = (results, name, schematic) ->
    footer = document.getElementById('results')
    resultStr = '<pre>'
    resultStr += "Lmin = #{results.lmin} uH\n"
    resultStr += "Ct   = #{results.ct} pF\n"
    resultStr += "Co   = #{results.cout} uF\n"
    resultStr += "Rsc  = #{results.rsc} Ω\n"
    resultStr += "R2   = #{results.r2} KΩ\n"
    resultStr += "Rb   = #{results.rb} Ω\n" if results.rb isnt "0"
    resultStr += '</pre>'
    footer.innerHTML = resultStr

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
    show_results resultStr, 'Stepdown regulator', 'step_down.png'

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
    show_results resultStr, 'Stepup regulator', 'step_up.png'

# --------------------------------------
inverter = (nums) ->
    ratio   = (Math.abs(nums.vout) + 0.8) / (nums.vin - 0.8 - nums.vout)
    tontoff = 1.0 / (nums.freq * 1e3)
    toff    = tontoff / (ratio + 1)
    ton_max = tontoff - toff
    ipeak   = nums.iout / 1e3 * 2.0

    lmin  = (nums.vin - 0.8) / ipeak * ton_max
    ct    = ton_max * 4e-5
    cout  = (nums.iout / 1e3 * ton_max) / RIPPLE
    rsc   = 0.33 / ipeak
    r2    = ( (Math.abs(nums.vout) - 1.25) / 1.25) * nums.res1
    rb    = 0

    resultStr = format_results(lmin, ct, cout, rsc, r2, rb)
    show_results resultStr, 'Inverter regulator', 'inverter.png'
