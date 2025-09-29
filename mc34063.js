// https://ronlinu.github.io/ms34063
var RIPPLE, calcBtn, calculate, clear_results, format_results, getFieldsValues, i, input, inputs, inverter, isValidFloat, len, onInputChange, saveBtn, showAlert, show_results, step_down, step_up, str_to_float, validNumbers, withinLimits;

RIPPLE = 0.1; // default ripple in volts

window.onload = function() {
  var key, results1, storedData, value, values;
  document.getElementById('vinField').focus();
  
  // Retrieve saved values from localStorage (if any)
  storedData = localStorage.getItem("mc34063");
  if (storedData) {
    values = JSON.parse(storedData);
// Restore values in the fields
    results1 = [];
    for (key in values) {
      value = values[key];
      results1.push(document.getElementById(key + "Field").value = value);
    }
    return results1;
  }
};

// --------------------------------------
showAlert = function(title, icon, align, msg) {
  return new Promise(function(resolve) {
    return Swal.fire({
      title: title,
      html: `<div style='text-align: ${align}; font-size: 16px;'>${msg}</div>`,
      icon: icon,
      confirmButtonText: 'OK',
      position: align,
      animation: true,
      willClose: resolve
    });
  });
};

// --------------------------------------
saveBtn = document.getElementById('save');

saveBtn.onclick = function() {
  var _, field, key, msg, values;
  values = getFieldsValues();
// Just clear fields from error color, keep any results on screen
  for (key in values) {
    _ = values[key];
    field = document.getElementById(key + 'Field');
    field.style.backgroundColor = '';
  }
  if (!validNumbers(values) || !withinLimits(values)) {
    clear_results();
    return;
  }
  localStorage.setItem("mc34063", JSON.stringify(values));
  msg = 'Field values ​​have been saved as new default values';
  return showAlert('', 'info', 'center', msg);
};

// --------------------------------------
getFieldsValues = function() {
  var values;
  return values = {
    vin: document.getElementById('vinField').value.trim(),
    vout: document.getElementById('voutField').value.trim(),
    iout: document.getElementById('ioutField').value.trim(),
    freq: document.getElementById('freqField').value.trim(),
    res1: document.getElementById('res1Field').value.trim()
  };
};

// --------------------------------------
calcBtn = document.getElementById('calculate');

calcBtn.onclick = function() {
  var values;
  // Read fields values
  values = getFieldsValues();
  
  // Clear previous results (if any)
  clear_results(values);
  if (validNumbers(values) && withinLimits(values)) {
    return calculate(values);
  }
};

// --------------------------------------
// Function to handle input changes
onInputChange = function(event) {
  // If any change in fields
  return clear_results();
};

// Attach event listeners to all input fields in the form
inputs = document.querySelectorAll('form input');

for (i = 0, len = inputs.length; i < len; i++) {
  input = inputs[i];
  input.addEventListener('input', onInputChange);
}

// --------------------------------------
clear_results = function(values) {
  var _, field, key, results1;
  document.getElementById('results').innerHTML = '';
  document.getElementById("results").style.color = '';
  document.getElementById('regulator-name').innerHTML = 'Regulator name';
  document.getElementById('theImage').src = 'mc34063/splash.png';
  results1 = [];
  for (key in values) {
    _ = values[key];
    field = document.getElementById(key + 'Field');
    results1.push(field.style.backgroundColor = '');
  }
  return results1;
};

// --------------------------------------
isValidFloat = function(str) {
  var regex;
  regex = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/;
  return regex.test(str.trim());
};

// --------------------------------------
str_to_float = function(values) {
  var nums;
  return nums = {
    vin: Number(values.vin),
    vout: Number(values.vout),
    iout: Number(values.iout),
    freq: Number(values.freq),
    res1: Number(values.res1)
  };
};

// --------------------------------------
format_results = function(lmin, ct, cout, rsc, r2, rb) {
  var results;
  return results = {
    lmin: (lmin * 1e6).toFixed(0),
    ct: (ct * 1e12).toFixed(0),
    cout: (cout * 1e6).toFixed(0),
    rsc: rsc.toFixed(1),
    r2: r2.toFixed(1),
    rb: rb.toFixed(0)
  };
};

// --------------------------------------
validNumbers = function(values) {
  var count, field, key, msg, value;
  count = 0;
  for (key in values) {
    value = values[key];
    if (!isValidFloat(value)) {
      count++;
      field = document.getElementById(key + 'Field');
      field.style.backgroundColor = 'LightPink';
    }
  }
  if (count) {
    msg = '<br>Invalid number in ';
    msg += count === 1 ? 'one field' : `${count} fields`;
    showAlert('', 'error', 'center', msg);
  }
  return count === 0; // true if all values are valid numbers
};


// --------------------------------------
withinLimits = function(values) {
  var count, msg, nums, ref, ref1, ref2, ref3, ref4, ref5, showLimitsError;
  showLimitsError = function(id) {
    var field;
    count++;
    field = document.getElementById(id);
    return field.style.backgroundColor = 'LightPink';
  };
  count = 0;
  nums = str_to_float(values);
  if (!((5 <= (ref = nums.vin) && ref <= 40))) {
    showLimitsError('vinField');
  }
  if (!(((-40 <= (ref1 = nums.vout) && ref1 <= -3)) || ((3 <= (ref2 = nums.vout) && ref2 <= 40)))) {
    showLimitsError('voutField');
  }
  if (!((5 <= (ref3 = nums.iout) && ref3 <= 1000))) {
    showLimitsError('ioutField');
  }
  if (!((20 <= (ref4 = nums.freq) && ref4 <= 100))) {
    showLimitsError('freqField');
  }
  if (!((1 <= (ref5 = nums.res1) && ref5 <= 50))) {
    showLimitsError('res1Field');
  }
  if (count) {
    msg = '<br>Value out of range in ';
    msg += count === 1 ? 'one field' : `${count} fields`;
    showAlert('', 'error', 'center', msg);
  }
  return count === 0; // true if all numbers are in range
};


// --------------------------------------
show_results = function(results, name, schematic) {
  var footer, resultStr;
  footer = document.getElementById('results');
  resultStr = '<pre>';
  resultStr += `Lmin = ${results.lmin} uH\n`;
  resultStr += `Ct   = ${results.ct} pF\n`;
  resultStr += `Co   = ${results.cout} uF\n`;
  resultStr += `Rsc  = ${results.rsc} Ω\n`;
  resultStr += `R2   = ${results.r2} KΩ\n`;
  if (results.rb !== "0") {
    resultStr += `Rb   = ${results.rb} Ω\n`;
  }
  resultStr += '</pre>';
  footer.innerHTML = resultStr;
  document.getElementById('regulator-name').innerHTML = name;
  return document.getElementById('theImage').src = `mc34063/${schematic}`;
};

// --------------------------------------
calculate = function(values) {
  var nums;
  nums = str_to_float(values);
  if (nums.vout < 0) {
    return inverter(nums);
  } else if (nums.vout < nums.vin) {
    return step_down(nums);
  } else {
    return step_up(nums);
  }
};

// --------------------------------------
step_down = function(nums) {
  var cout, ct, ipeak, lmin, r2, ratio, rb, resultStr, rsc, toff, ton_max, tontoff;
  ratio = (nums.vout + 0.8) / (nums.vin - 0.8 - nums.vout);
  tontoff = 1.0 / (nums.freq * 1e3);
  toff = tontoff / (ratio + 1);
  ton_max = tontoff - toff;
  ipeak = nums.iout / 1e3 * 2.0;
  lmin = (nums.vin - 1 - nums.vout) / ipeak * ton_max;
  ct = ton_max * 4e-5;
  cout = (ipeak * tontoff) / (8 * RIPPLE);
  rsc = 0.33 / ipeak;
  r2 = (nums.vout - 1.25) / 1.25 * nums.res1; // R1 & R2 are in Kohms
  rb = 0.0;
  resultStr = format_results(lmin, ct, cout, rsc, r2, rb);
  return show_results(resultStr, 'Stepdown regulator', 'step_down.png');
};

// --------------------------------------
step_up = function(nums) {
  var cout, ct, ib, ipeak, lmin, r2, ratio, rb, resultStr, rsc, toff, ton_max, tontoff;
  ratio = (nums.vout + 0.8 - nums.vin) / (nums.vin - 1);
  tontoff = 1.0 / (nums.freq * 1e3);
  toff = tontoff / (ratio + 1);
  ton_max = tontoff - toff;
  ipeak = nums.iout / 1e3 * (ratio + 1) * 2.0;
  ib = ipeak / 20 + 5e-3;
  lmin = (nums.vin - 1) / ipeak * ton_max;
  ct = ton_max * 4e-5;
  cout = (nums.iout / 1e3 * ton_max) / RIPPLE;
  rsc = 0.33 / ipeak;
  r2 = ((nums.vout - 1.25) / 1.25) * nums.res1;
  rb = ((nums.vin - 1) - ipeak) * rsc / ib;
  resultStr = format_results(lmin, ct, cout, rsc, r2, rb);
  return show_results(resultStr, 'Stepup regulator', 'step_up.png');
};

// --------------------------------------
inverter = function(nums) {
  var cout, ct, ipeak, lmin, r2, ratio, rb, resultStr, rsc, toff, ton_max, tontoff;
  ratio = (Math.abs(nums.vout) + 0.8) / (nums.vin - 0.8 - nums.vout);
  tontoff = 1.0 / (nums.freq * 1e3);
  toff = tontoff / (ratio + 1);
  ton_max = tontoff - toff;
  ipeak = nums.iout / 1e3 * 2.0;
  lmin = (nums.vin - 0.8) / ipeak * ton_max;
  ct = ton_max * 4e-5;
  cout = (nums.iout / 1e3 * ton_max) / RIPPLE;
  rsc = 0.33 / ipeak;
  r2 = ((Math.abs(nums.vout) - 1.25) / 1.25) * nums.res1;
  rb = 0;
  resultStr = format_results(lmin, ct, cout, rsc, r2, rb);
  return show_results(resultStr, 'Inverter regulator', 'inverter.png');
};
