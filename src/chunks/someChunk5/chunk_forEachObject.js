__d(
  'forEachObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = Object.prototype.hasOwnProperty;
    function a(a, b, c) {
      for (var d in a) {
        var e = d;
        g.call(a, e) && b.call(c, a[e], e, a);
      }
    }
    f['default'] = a;
  },
  66,
);
