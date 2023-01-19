__d(
  'applyKeyCommand',
  ['getKeyCommand'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, d, e) {
      var f = c('getKeyCommand')(a);
      if (f == null) return !1;
      b = b;
      while (b != null) {
        if (b && b.applyCommand(f, a)) return !0;
        b = b && b.getParent();
      }
      if (d != null && d.applyCommand(f, a)) return !0;
      return e != null && e.applyCommand(f, a) ? !0 : !1;
    }
    g['default'] = a;
  },
  98,
);
