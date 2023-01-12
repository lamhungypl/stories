__d(
  'requireDeferred',
  ['RequireDeferredReference'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {};
    function i(a, b) {
      h[a] = b;
    }
    function j(a) {
      return h[a];
    }
    function a(a) {
      var b = j(a);
      if (b) return b;
      b = new (c('RequireDeferredReference'))(a);
      i(a, b);
      return b;
    }
    g['default'] = a;
  },
  98,
);
