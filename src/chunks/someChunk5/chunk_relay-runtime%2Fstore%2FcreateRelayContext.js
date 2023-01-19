__d(
  'relay-runtime/store/createRelayContext',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h, i;
    function a(a) {
      h || ((h = a.createContext(null)), (i = a));
      a === i || g(0, 52255, a.version);
      return h;
    }
    e.exports = a;
  },
  null,
);
