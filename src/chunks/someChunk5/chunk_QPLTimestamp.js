__d(
  'QPLTimestamp',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      if (a === 0) return '0';
      a = a.toFixed(6).split('.', 2);
      var b = a[0];
      a = a[1];
      return b === '0' ? a.replace(/^0+/, '') : b + a;
    }
    function a(a, b) {
      b = b - a;
      return g(b);
    }
    f.timestampToSerializedNanoseconds = g;
    f.calculateDurationAsNanoseconds = a;
  },
  66,
);
