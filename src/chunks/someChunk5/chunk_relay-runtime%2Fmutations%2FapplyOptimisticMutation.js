__d(
  'relay-runtime/mutations/applyOptimisticMutation',
  [
    'invariant',
    'relay-runtime/mutations/RelayDeclarativeMutationConfig',
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/store/RelayModernOperationDescriptor',
    'relay-runtime/store/isRelayModernEnvironment',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/query/GraphQLTag').getRequest,
      i = b(
        'relay-runtime/store/RelayModernOperationDescriptor',
      ).createOperationDescriptor;
    function a(a, c) {
      b('relay-runtime/store/isRelayModernEnvironment')(a) || g(0, 18234);
      var d = h(c.mutation);
      if (d.params.operationKind !== 'mutation')
        throw new Error('commitMutation: Expected mutation operation');
      var e = c.optimisticUpdater,
        f = c.configs,
        j = c.optimisticResponse;
      c = c.variables;
      c = i(d, c);
      if (f) {
        f = b('relay-runtime/mutations/RelayDeclarativeMutationConfig').convert(
          f,
          d,
          e,
        );
        e = f.optimisticUpdater;
      }
      return a.applyMutation({ operation: c, response: j, updater: e });
    }
    e.exports = a;
  },
  null,
);
