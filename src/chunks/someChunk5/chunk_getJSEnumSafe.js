__d(
  'getJSEnumSafe',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      if (b == null) return null;
      if (!Object.prototype.hasOwnProperty.call(a, b)) return null;
      b = b;
      return a[b];
    }
    f['default'] = a;
  },
  66,
);
