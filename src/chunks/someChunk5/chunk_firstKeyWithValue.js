__d(
  'firstKeyWithValue',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      for (var c in a) {
        var d = c;
        if (Object.prototype.hasOwnProperty.call(a, d) && a[d] === b) return d;
      }
      return null;
    }
    f['default'] = a;
  },
  66,
);
