__d(
  'getPrefersReducedMotion',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = null;
    function h(a) {
      g = a.matches;
    }
    function a() {
      if (g == null)
        if (typeof window.matchMedia === 'function') {
          var a = matchMedia('(prefers-reduced-motion: reduce)');
          g = a.matches;
          a.addListener(h);
        } else g = !1;
      return g;
    }
    f['default'] = a;
  },
  66,
);
