__d(
  'relay-runtime/mutations/readUpdatableFragment',
  [
    'invariant',
    'relay-runtime/mutations/createUpdatableProxy',
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/store/RelayModernSelector',
    'relay-runtime/store/RelayStoreUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/query/GraphQLTag').getFragment,
      i = b('relay-runtime/store/RelayModernSelector').getVariablesFromFragment,
      j = b('relay-runtime/store/RelayStoreUtils').ID_KEY,
      k = b(
        'relay-runtime/mutations/createUpdatableProxy',
      ).createUpdatableProxy;
    function a(a, b, c, d) {
      a = h(a);
      var e = i(a, b);
      b = b[j];
      b = c.get(b);
      b != null || g(0, void 0);
      return { updatableData: k(b, e, a.selections, c, d) };
    }
    e.exports = { readUpdatableFragment: a };
  },
  null,
);
