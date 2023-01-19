__d(
  'relay-runtime/util/stableCopy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      if (!a || typeof a !== 'object') return a;
      if (Array.isArray(a)) return a.map(g);
      var b = Object.keys(a).sort(),
        c = {};
      for (var d = 0; d < b.length; d++) c[b[d]] = g(a[b[d]]);
      return c;
    }
    e.exports = g;
  },
  null,
);
