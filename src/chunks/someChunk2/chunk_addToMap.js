__d(
  'addToMap',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c) {
      if (a.get(b) === c) return a;
      a = new Map(a);
      a.set(b, c);
      return a;
    }
    f['default'] = a;
  },
  66,
);
