__d(
  'isElementFixedOrSticky',
  ['getComputedStyle'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a;
      while (b != null && b !== a.ownerDocument) {
        var d = c('getComputedStyle')(b);
        if (d == null) return !1;
        d = d.getPropertyValue('position');
        if (d === 'fixed' || d === 'sticky') return !0;
        b = b.parentElement;
      }
      return !1;
    }
    g['default'] = a;
  },
  98,
);
