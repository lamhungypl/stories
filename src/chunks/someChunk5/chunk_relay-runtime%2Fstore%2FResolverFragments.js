__d(
  'relay-runtime/store/ResolverFragments',
  [
    'invariant',
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/store/RelayModernSelector',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/query/GraphQLTag').getFragment,
      i = b('relay-runtime/store/RelayModernSelector').getSelector,
      j = [];
    function a(a, b) {
      j.push(a);
      try {
        return b();
      } finally {
        j.pop();
      }
    }
    function c(a, b) {
      if (!j.length)
        throw new Error(
          'readFragment should be called only from within a Relay Resolver function.',
        );
      var c = j[j.length - 1];
      a = h(a);
      a = i(a, b);
      a != null || g(0, void 0);
      a.kind === 'SingularReaderSelector' || g(0, void 0);
      c = c.getDataForResolverFragment(a, b);
      a = c.data;
      b = c.isMissingData;
      if (b) throw k;
      return a;
    }
    var k = {};
    e.exports = {
      readFragment: c,
      withResolverContext: a,
      RESOLVER_FRAGMENT_MISSING_DATA_SENTINEL: k,
    };
  },
  null,
);
