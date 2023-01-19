__d(
  'mapObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a, b, c) {
      if (!a) return null;
      var d = {};
      Object.keys(a).forEach(function (e) {
        d[e] = b.call(c, a[e], e, a);
      });
      return d;
    }
    function a(a, b, c) {
      return g(a, b, c);
    }
    function b(a, b, c) {
      return g(a, b, c);
    }
    function c(a, b, c) {
      return g(a, b, c);
    }
    g.untyped = a;
    g.shape = b;
    g.self = c;
    f['default'] = g;
  },
  66,
);
