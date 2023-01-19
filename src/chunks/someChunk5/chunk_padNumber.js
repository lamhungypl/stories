__d(
  'padNumber',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      a = a.toString();
      return a.length >= b ? a : '0'.repeat(b - a.length) + a;
    }
    f['default'] = a;
  },
  66,
);
