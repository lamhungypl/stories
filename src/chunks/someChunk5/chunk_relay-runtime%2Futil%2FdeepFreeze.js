__d(
  'relay-runtime/util/deepFreeze',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      Object.freeze(a);
      Object.getOwnPropertyNames(a).forEach(function (b) {
        b = a[b];
        b && typeof b === 'object' && !Object.isFrozen(b) && g(b);
      });
      return a;
    }
    e.exports = g;
  },
  null,
);
