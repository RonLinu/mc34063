import "package:web/web.dart"; // to install: dart pub add web
import 'dart:js_interop'; // for .toJS
import 'dart:async'; // for Future

// -------------------------------------
Future<String> showDialog(
  String msg, {
  String ok = 'Ok', // Only Ok button by default
  String cancel = '', // No Cancel button by default
  int maxwidth = 400, // Default maximum width
  bool escapeKey = true, // Escape key enabled by default
}) {
  final dialog = window.document.createElement('dialog') as HTMLDialogElement;
  dialog.style.maxWidth = '${maxwidth}px'; // default to 400

  dialog.style.borderRadius = '15px';
  dialog.style.overflow = 'hidden'; // optional, to clip content
  dialog.style.border = '1px solid #000'; //'1px solid #ccc';
  dialog.style.boxShadow = '0 4px 16px rgba(0,0,0,.2)';

  var content = '${msg} <center><br><button id="okBtn">${ok}</button>';

  if (cancel.isNotEmpty)
    content += '&ensp;&ensp;<button id="cancelBtn">${cancel}</button>';
  content += '</center>';

  dialog.innerHTML = content.toJS;

  // ----- OK button
  final okBtn = dialog.querySelector('#okBtn') as HTMLButtonElement;
  okBtn.style.padding = '2px 15px';
  okBtn.style.fontSize = '16px';

  okBtn.onClick.listen((_) {
    dialog.close('ok');
  });

  // ----- Cancel button (if enabled)
  if (cancel.isNotEmpty) {
    final cancelBtn = dialog.querySelector('#cancelBtn') as HTMLButtonElement;
    cancelBtn.style.padding = '2px 15px';
    cancelBtn.style.fontSize = '16px';

    cancelBtn.onClick.listen((_) {
      dialog.close('cancel');
    });
  }

  // Listen for dialog close event
  final completer = Completer<String>();

  dialog.addEventListener(
    'close',
    ((Event _) {
      completer.complete(dialog.returnValue);
      dialog.remove();
    }).toJS,
  );

  // Prevent Escape key to close the dialog
  if (!escapeKey) {
    dialog.addEventListener(
      'keydown',
      ((KeyboardEvent event) {
        if (event.key == 'Escape') {
          event.preventDefault();
          event.stopPropagation();
        }
      }).toJS,
      true.toJS, // capture phase — important!
    );
  }

  window.document.body!.append(dialog);
  dialog.showModal();

  return completer.future;
}

// -------------------------------------
// Simple dialog to have user wait for an operation that takes some time
HTMLDialogElement showWait(String msg) {
  final dialog = window.document.createElement('dialog') as HTMLDialogElement;

  dialog.style.maxWidth = '400px'; // default to 400

  dialog.style.borderRadius = '15px';
  dialog.style.overflow = 'hidden'; // optional, to clip content
  dialog.style.border = '1px solid #000'; //'1px solid #ccc';
  dialog.style.boxShadow = '0 4px 16px rgba(0,0,0,.2)';

  dialog.innerHTML = msg.toJS;

  // Prevent Escape key to close the wait dialog
  dialog.addEventListener(
    'keydown',
    ((KeyboardEvent event) {
      if (event.key == 'Escape') {
        event.preventDefault();
        event.stopPropagation();
      }
    }).toJS,
    true.toJS, // capture phase — important!
  );

  window.document.body!.append(dialog);
  dialog.showModal();

  return dialog; // Caller uses this reference to close the dialog later
}
