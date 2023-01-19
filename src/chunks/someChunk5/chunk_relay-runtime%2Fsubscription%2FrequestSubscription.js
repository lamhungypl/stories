__d(
  'relay-runtime/subscription/requestSubscription',
  [
    'relay-runtime/mutations/RelayDeclarativeMutationConfig',
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/store/RelayModernOperationDescriptor',
    'relay-runtime/store/RelayModernSelector',
    'warning',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime/query/GraphQLTag').getRequest,
      h = b(
        'relay-runtime/store/RelayModernOperationDescriptor',
      ).createOperationDescriptor,
      i = b('relay-runtime/store/RelayModernSelector').createReaderSelector;
    function a(a, c) {
      var d = g(c.subscription);
      if (d.params.operationKind !== 'subscription')
        throw new Error('requestSubscription: Must use Subscription operation');
      var e = c.configs,
        f = c.onCompleted,
        j = c.onError,
        k = c.onNext,
        l = c.variables,
        m = c.cacheConfig,
        n = h(d, l, m);
      b('warning')(
        !(c.updater && e),
        'requestSubscription: Expected only one of `updater` and `configs` to be provided',
      );
      l = e
        ? b('relay-runtime/mutations/RelayDeclarativeMutationConfig').convert(
            e,
            d,
            null,
            c.updater,
          )
        : c;
      m = l.updater;
      e = a.executeSubscription({ operation: n, updater: m }).subscribe({
        next: function (b) {
          if (k != null) {
            var c = n.fragment;
            if (Array.isArray(b)) {
              var d;
              d =
                (d = b[0]) == null
                  ? void 0
                  : (d = d.extensions) == null
                  ? void 0
                  : d.__relay_subscription_root_id;
            } else {
              d =
                (b = b.extensions) == null
                  ? void 0
                  : b.__relay_subscription_root_id;
            }
            typeof d === 'string' && (c = i(c.node, d, c.variables, c.owner));
            b = a.lookup(c).data;
            k(b);
          }
        },
        error: j,
        complete: f,
      });
      return { dispose: e.unsubscribe };
    }
    e.exports = a;
  },
  null,
);
