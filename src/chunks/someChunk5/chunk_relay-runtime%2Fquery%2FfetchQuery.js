__d(
  'relay-runtime/query/fetchQuery',
  [
    'invariant',
    'relay-runtime/network/RelayObservable',
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/query/fetchQueryInternal',
    'relay-runtime/store/RelayModernOperationDescriptor',
    'relay-runtime/util/handlePotentialSnapshotErrors',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b(
        'relay-runtime/store/RelayModernOperationDescriptor',
      ).createOperationDescriptor,
      i = b('relay-runtime/query/GraphQLTag').getRequest;
    function a(a, c, d, e) {
      c = i(c);
      c.params.operationKind === 'query' || g(0, 13332);
      var f = babelHelpers['extends'](
        { force: !0 },
        e == null ? void 0 : e.networkCacheConfig,
      );
      c = h(c, d, f);
      f = (d = e == null ? void 0 : e.fetchPolicy) != null ? d : 'network-only';
      function k(c) {
        b('relay-runtime/util/handlePotentialSnapshotErrors')(
          a,
          c.missingRequiredFields,
          c.relayResolverErrors,
        );
        return c.data;
      }
      switch (f) {
        case 'network-only':
          return j(a, c).map(k);
        case 'store-or-network':
          return a.check(c).status === 'available'
            ? b('relay-runtime/network/RelayObservable')
                .from(a.lookup(c.fragment))
                .map(k)
            : j(a, c).map(k);
        default:
          f;
          throw new Error('fetchQuery: Invalid fetchPolicy ' + f);
      }
    }
    function j(a, c) {
      return b('relay-runtime/query/fetchQueryInternal')
        .fetchQuery(a, c)
        .map(function () {
          return a.lookup(c.fragment);
        });
    }
    e.exports = a;
  },
  null,
);
