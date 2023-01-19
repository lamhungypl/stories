__d(
  'relay-runtime/store/readInlineData',
  [
    'invariant',
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/store/RelayStoreUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/query/GraphQLTag').getInlineDataFragment,
      i = b('relay-runtime/store/RelayStoreUtils').FRAGMENTS_KEY;
    function a(a, b) {
      a = h(a);
      if (b == null) return b;
      typeof b === 'object' || g(0, 17729, typeof b);
      b = (b = b[i]) == null ? void 0 : b[a.name];
      b != null || g(0, 17728, a.name);
      return b;
    }
    e.exports = a;
  },
  null,
);
