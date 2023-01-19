__d(
  'relay-runtime/mutations/commitMutation',
  [
    'invariant',
    'relay-runtime/mutations/RelayDeclarativeMutationConfig',
    'relay-runtime/mutations/validateMutation',
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayModernOperationDescriptor',
    'relay-runtime/store/isRelayModernEnvironment',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/query/GraphQLTag').getRequest,
      i = b('relay-runtime/store/ClientID').generateUniqueClientID,
      j = b(
        'relay-runtime/store/RelayModernOperationDescriptor',
      ).createOperationDescriptor;
    function a(a, c) {
      b('relay-runtime/store/isRelayModernEnvironment')(a) || g(0, 18234);
      var d = h(c.mutation);
      if (d.params.operationKind !== 'mutation')
        throw new Error('commitMutation: Expected mutation operation');
      if (d.kind !== 'Request')
        throw new Error(
          'commitMutation: Expected mutation to be of type request',
        );
      var e = c.optimisticResponse,
        f = c.optimisticUpdater,
        k = c.updater,
        l = c.configs,
        m = c.cacheConfig,
        n = c.onError,
        o = c.onUnsubscribe,
        p = c.variables,
        q = c.uploadables,
        r = j(d, p, m, i());
      typeof e === 'function' &&
        ((e = e()),
        b('warning')(
          !1,
          'commitMutation: Expected `optimisticResponse` to be an object, received a function.',
        ));
      if (l) {
        p = b('relay-runtime/mutations/RelayDeclarativeMutationConfig').convert(
          l,
          d,
          f,
          k,
        );
        f = p.optimisticUpdater;
        k = p.updater;
      }
      var s = [];
      m = a
        .executeMutation({
          operation: r,
          optimisticResponse: e,
          optimisticUpdater: f,
          updater: k,
          uploadables: q,
        })
        .subscribe({
          next: function (a) {
            Array.isArray(a)
              ? a.forEach(function (a) {
                  a.errors && s.push.apply(s, a.errors);
                })
              : a.errors && s.push.apply(s, a.errors),
              c.onNext == null ? void 0 : c.onNext();
          },
          complete: function () {
            var b = c.onCompleted;
            if (b) {
              var d = a.lookup(r.fragment);
              b(d.data, s.length !== 0 ? s : null);
            }
          },
          error: n,
          unsubscribe: o,
        });
      return { dispose: m.unsubscribe };
    }
    e.exports = a;
  },
  null,
);
