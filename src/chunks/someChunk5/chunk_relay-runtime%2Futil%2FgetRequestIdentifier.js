__d(
  'relay-runtime/util/getRequestIdentifier',
  ['invariant', 'relay-runtime/util/stableCopy'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a, c) {
      var d = a.cacheID != null ? a.cacheID : a.id;
      d != null || g(0, 22755, a.name);
      return (
        d + JSON.stringify((h || (h = b('relay-runtime/util/stableCopy')))(c))
      );
    }
    e.exports = a;
  },
  null,
);
