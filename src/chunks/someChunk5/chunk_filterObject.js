__d(
  'filterObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = Object.prototype.hasOwnProperty;
    function a(a, b, c) {
      if (!a) return null;
      var d = {};
      for (var e in a) g.call(a, e) && b.call(c, a[e], e, a) && (d[e] = a[e]);
      return d;
    }
    f['default'] = a;
  },
  66,
);
