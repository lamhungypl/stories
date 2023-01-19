__d(
  'getCometKey',
  ['CometKeys'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
        8: 'Backspace',
        13: 'Enter',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        46: 'Delete',
      },
      i = new Set(Object.values(c('CometKeys')));
    function a(a) {
      var b = a.key;
      a = a.which || a.keyCode;
      ((a >= 48 && a <= 57) || (a >= 65 && a <= 90)) &&
        (b = String.fromCharCode(a));
      a >= 96 && a <= 105 && (b = String.fromCharCode(a - 48));
      if (b != null && b !== '') {
        b = b.toLowerCase();
        if (i.has(b)) return b;
      }
      if (Object.prototype.hasOwnProperty.call(h, a)) {
        b = h[a].toLowerCase();
        if (i.has(b)) return b;
      }
      return null;
    }
    g['default'] = a;
  },
  98,
);
