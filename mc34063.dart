import 'package:web/web.dart'; // to install: dart pub add web
import 'dart:js_interop'; // for .toJS()
import 'dart:convert'; // for json conversions

import 'dialogs.dart';

class InputValues {
  double vin = 0;
  double vout = 0;
  double iout = 0;
  double freq = 0;
  double res1 = 0;
  double ripple = 0.1;
}

class Results {
  double lmin = 0;
  double ct = 0;
  double cout = 0;
  double rsc = 0;
  double r2 = 0;
  double rb = 0;
  String name = 'Regulator name';
  String schematic = 'splash.png';
}

// -----------------------------------------------------------------------------
void main() {
  var saveBtn = document.getElementById('save') as HTMLButtonElement;;
  var calculateBtn = document.getElementById('calculate') as HTMLButtonElement;

  restoreHtmlFields();
  greetings();
  setInputChangeDetection();

  // -------------------------  
  saveBtn.onClick.listen((_) {
    saveHtmlFields();
  });

  // -------------------------  
  calculateBtn.onClick.listen((_) {
    // Abort if results are already displayed on screen
    var htmlResults = document.getElementById('results')!.textContent;
    if (htmlResults!.isNotEmpty) {
      showDialog('Results are already up to date!');
      return;
    }
    
    // Clear results on screen
    var results = new Results();
    updatePage(results);

    // Read html fields and convert to floats
    var nums = readInputValues();
    
    // Check if values are within chip limits
    var errors = validateLimits(nums);

    if (errors.isNotEmpty) {
      var occurences = errors.split('-').length - 1;
      var plural = occurences > 1 ? 'these fields' : 'this field';
      showDialog('Value is out of range in $plural <hr> $errors');
      return;
    }

    // Dispatch regulator calculation
    if (nums.vout < 0)
      results = inverter(nums);
    else if (nums.vout < nums.vin)
      results = stepDown(nums);
    else
      results = stepUp(nums);

    updatePage(results);
  });
}

// -------------------------------------
void greetings() {
  const msg =
      '''<center><b>MC34063 calculator \u00A9 2025 - RonLinu</b></center><br>
        This application calculates the value of all parts required
        to build a switching regulator based on the MC34063.
        <br><br>
        The following configurations are supported:<br>
        - Step Down (buck)<br>
        - Step Up (boost)<br>
        - Inverter
    ''';

  showDialog(msg);
}

// -------------------------------------
void saveHtmlFields() {
  var fields = readInputValues();

  var values = {
    'vin': fields.vin.toString(),
    'vout': fields.vout.toString(),
    'iout': fields.iout.toString(),
    'freq': fields.freq.toString(),
    'res1': fields.res1.toString(),
  };

  var jsonString = jsonEncode(values);
  window.localStorage.setItem('mc34063', jsonString);

  showDialog('Fields have been saved!');
}

// -------------------------------------
void restoreHtmlFields() {
  var jsonString = window.localStorage.getItem('mc34063');
  if (jsonString == null) return;

  var fields = jsonDecode(jsonString);

  // Update fields on screen
  for (var field in fields.entries) {
    var fieldHandle = document.getElementById(field.key) as HTMLInputElement;
    fieldHandle.value = field.value;
  }
}

// -------------------------------------
InputValues readInputValues() {
  var fvin = (document.getElementById('vin') as HTMLInputElement).value;
  var fvout = (document.getElementById('vout') as HTMLInputElement).value;
  var fiout = (document.getElementById('iout') as HTMLInputElement).value;
  var ffreq = (document.getElementById('freq') as HTMLInputElement).value;
  var fres1 = (document.getElementById('res1') as HTMLInputElement).value;
    
  // Fields are expected to contain valid float numbers with html screening
  return InputValues()
    ..vin = double.parse(fvin)
    ..vout = double.parse(fvout)
    ..iout = double.parse(fiout)
    ..freq = double.parse(ffreq)
    ..res1 = double.parse(fres1);
}

// -------------------------------------
String validateLimits(InputValues nums) {
  var errors = '';

  if (nums.vin < 3.0 || nums.vin > 40) errors += '- Input voltage<br>';

  if ((nums.vout > -3 && nums.vout < 3) || nums.vout < -40 || nums.vout > 40)
    errors += '- Output voltage<br>';

  if ((nums.vin - nums.vout).abs() < 3)
    errors += '- Input/Output voltage differential<br>';

  if (nums.iout < 5 || nums.iout > 1000) errors += '- Output current<br>';
  if (nums.freq < 25 || nums.freq > 100) errors += '- Frequency<br>';
  if (nums.res1 < 1 || nums.res1 > 25) errors += '- Resistor R1<br>';

  return errors;
}

// -------------------------------------
Results stepDown(InputValues nums) {
  var ratio = (nums.vout + 0.8) / (nums.vin - 0.8 - nums.vout);
  var tontoff = 1.0 / (nums.freq * 1e3);
  var toff = tontoff / (ratio + 1);
  var ton_max = tontoff - toff;
  var ipeak = nums.iout / 1e3 * 2.0;

  return Results()
    ..lmin = (nums.vin - 1 - nums.vout) / ipeak * ton_max
    ..ct = ton_max * 4e-5
    ..cout = (ipeak * tontoff) / (8 * nums.ripple)
    ..rsc = 0.33 / ipeak
    ..r2 = (nums.vout - 1.25) / 1.25 * nums.res1
    ..rb = 0.0
    ..name = 'Step-down regulator'
    ..schematic = 'step_down.png';
}

// -------------------------------------
Results stepUp(InputValues nums) {
  var ratio = (nums.vout + 0.8 - nums.vin) / (nums.vin - 1);
  var tontoff = 1.0 / (nums.freq * 1e3);
  var toff = tontoff / (ratio + 1);
  var ton_max = tontoff - toff;
  var ipeak = nums.iout / 1e3 * (ratio + 1) * 2.0;
  var ib = ipeak / 20 + 5e-3;
  var rsc = 0.33 / ipeak;

  return Results()
    ..lmin = (nums.vin - 1) / ipeak * ton_max
    ..ct = ton_max * 4e-5
    ..cout = (nums.iout / 1e3 * ton_max) / nums.ripple
    ..rsc = rsc
    ..r2 = ((nums.vout - 1.25) / 1.25) * nums.res1
    ..rb = ((nums.vin - 1) - ipeak) * rsc / ib
    ..name = 'Step-up regulator'
    ..schematic = 'step_up.png';
}

// -------------------------------------
Results inverter(InputValues nums) {
  var ratio = ((nums.vout).abs() + 0.8) / (nums.vin - 0.8);
  var tontoff = 1.0 / (nums.freq * 1e3);
  var toff = tontoff / (ratio + 1);
  var ton = tontoff - toff;
  var ipeak = (2 * nums.iout / 1e3) * (ratio + 1);

  return Results()
    ..lmin = (nums.vin - 0.8) / ipeak * ton
    ..ct = ton * 4e-5
    ..cout = (nums.iout / 1e3 * ton) / nums.ripple
    ..rsc = 0.33 / ipeak
    ..r2 = (((nums.vout).abs() - 1.25) / 1.25) * nums.res1
    ..rb = 0.0
    ..name = 'Inverter regulator'
    ..schematic = 'inverter.png';
}

// -------------------------------------
String formatResults(Results results) {
  var str = '<pre><b>' +
      'L   = ${(results.lmin * 1e6).toStringAsFixed(0)} uH (min)<br>' +
      'Ct  = ${(results.ct * 1e12).toStringAsFixed(0)} pF <br>' +
      'Co  = ${(results.cout * 1e6).toStringAsFixed(0)} uF (min)<br>' +
      'Rsc = ${results.rsc.toStringAsFixed(1)} Ω<br>' +
      'R2  = ${results.r2.toStringAsFixed(1)} KΩ<br>';

  if (results.rb != 0.0)
    str += 'Rb  = ${results.rb.toStringAsFixed(1)} ohms<br>';

  str += '</b></pre>';

  return str;
}

// -------------------------------------
void updatePage(Results results) {
  var resultFmt = results.lmin != 0.0 ? formatResults(results) : '';

  document.getElementById('results')!.innerHTML = resultFmt.toJS;
  document.getElementById('regulator-name')!.innerHTML =
      '<b>${results.name}</b>'.toJS;

  var image = document.getElementById('schematic') as HTMLImageElement;
  image.src = 'resources/${results.schematic}';
}

// -------------------------------------
void setInputChangeDetection() {
  var form = document.getElementById('myForm') as HTMLFormElement;
  var results = new Results();

  void onFormModified(_) {
    // Clear results on screen
    updatePage(results);
  }

  // Fires when typing in any input field
  form.onInput.listen(onFormModified);
}
