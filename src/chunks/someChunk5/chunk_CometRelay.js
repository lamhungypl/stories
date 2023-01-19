__d(
  'CometRelay',
  [
    'CometRelayQueryProfiler',
    'RelayFBCometMutations',
    'RelayFBEnvironmentActorID',
    'RelayFBMatchContainer',
    'RelayFBModuleResource',
    'RelayFBSubscription',
    'RelayFlight.hybrid',
    'configureRelayForWWW',
    'createSuspenseFragmentContainer_DEPRECATED',
    'createSuspensePaginationContainer_DEPRECATED',
    'createSuspenseQueryRenderer_DEPRECATED',
    'enqueueMutation',
    'isRelayFBLocalEnvironment',
    'react',
    'react-relay/relay-hooks/EntryPointContainer.react',
    'react-relay/relay-hooks/ProfilerContext',
    'react-relay/relay-hooks/RelayEnvironmentProvider',
    'react-relay/relay-hooks/loadEntryPoint',
    'react-relay/relay-hooks/loadQuery',
    'react-relay/relay-hooks/useBlockingPaginationFragment',
    'react-relay/relay-hooks/useEntryPointLoader',
    'react-relay/relay-hooks/useFragment',
    'react-relay/relay-hooks/useIsParentQueryActive',
    'react-relay/relay-hooks/useLazyLoadQuery',
    'react-relay/relay-hooks/usePaginationFragment',
    'react-relay/relay-hooks/useRelayEnvironment',
    'react-relay/relay-hooks/useSubscribeToInvalidationState',
    'relay-runtime',
    'useFBMutation',
    'useFBSubscription',
    'usePreloadedQuery__TEMPORARY',
    'useQueryLoader__TEMPORARY',
    'useRefetchableFragment__TEMPORARY',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    a = b('RelayFBEnvironmentActorID').getActorID;
    c = b('enqueueMutation').enqueueMutation;
    g || (g = b('react'));
    d = b('react-relay/relay-hooks/loadQuery').loadQuery;
    f = b('relay-runtime').ConnectionHandler;
    var h = b('relay-runtime').MutationTypes,
      i = b('relay-runtime').RangeOperations,
      j = b('relay-runtime').RelayFeatureFlags,
      k = b('relay-runtime').VIEWER_ID,
      l = b('relay-runtime').applyOptimisticMutation,
      m = b('relay-runtime').commitLocalUpdate,
      n = b('relay-runtime').commitMutation,
      o = b('relay-runtime').createPayloadFor3DField,
      p = b('relay-runtime').fetchQuery,
      q = b('relay-runtime').generateUniqueClientID,
      r = b('relay-runtime').graphql,
      s = b('relay-runtime').readInlineData,
      t = b('relay-runtime').requestSubscription;
    t = b('RelayFBSubscription').addFBisms(t);
    b('configureRelayForWWW')();
    b('RelayFlight.hybrid').isServer_INTERNAL_DO_NOT_USE() ||
      b('CometRelayQueryProfiler').install();
    e.exports = {
      ConnectionHandler: f,
      EntryPointContainer: b(
        'react-relay/relay-hooks/EntryPointContainer.react',
      ),
      MatchContainer: b('RelayFBMatchContainer'),
      ModuleResource: b('RelayFBModuleResource'),
      MutationTypes: h,
      ProfilerContext: b('react-relay/relay-hooks/ProfilerContext'),
      RangeOperations: i,
      RelayEnvironmentProvider: b(
        'react-relay/relay-hooks/RelayEnvironmentProvider',
      ),
      RelayFeatureFlags: j,
      VIEWER_ID: k,
      applyOptimisticMutation: l,
      commitLocalUpdate: m,
      commitMutation: b('RelayFBCometMutations').addFBisms(n),
      createPayloadFor3DField: o,
      createSuspenseFragmentContainer_DEPRECATED: b(
        'createSuspenseFragmentContainer_DEPRECATED',
      ),
      createSuspensePaginationContainer_DEPRECATED: b(
        'createSuspensePaginationContainer_DEPRECATED',
      ),
      createSuspenseQueryRenderer_DEPRECATED: b(
        'createSuspenseQueryRenderer_DEPRECATED',
      ),
      enqueueMutation: b('RelayFBCometMutations').addFBisms(c),
      fetchQuery: p,
      generateUniqueClientID: q,
      getActorID: a,
      graphql: r,
      isLocalEnvironment: b('isRelayFBLocalEnvironment'),
      loadEntryPoint: b('react-relay/relay-hooks/loadEntryPoint'),
      loadQuery: d,
      readInlineData: s,
      requestSubscription: t,
      useBlockingPaginationFragment: b(
        'react-relay/relay-hooks/useBlockingPaginationFragment',
      ),
      useEntryPointLoader: b('react-relay/relay-hooks/useEntryPointLoader'),
      useFragment: b('react-relay/relay-hooks/useFragment'),
      useIsParentQueryActive: b(
        'react-relay/relay-hooks/useIsParentQueryActive',
      ),
      useLazyLoadQuery: b('react-relay/relay-hooks/useLazyLoadQuery'),
      useMutation: b('useFBMutation'),
      usePaginationFragment: b('react-relay/relay-hooks/usePaginationFragment'),
      usePreloadedQuery: b('usePreloadedQuery__TEMPORARY'),
      usePreloadedQuery__TEMPORARY: b('usePreloadedQuery__TEMPORARY'),
      useQueryLoader: b('useQueryLoader__TEMPORARY'),
      useQueryLoader__TEMPORARY: b('useQueryLoader__TEMPORARY'),
      useRefetchableFragment: b('useRefetchableFragment__TEMPORARY'),
      useRefetchableFragment__TEMPORARY: b('useRefetchableFragment__TEMPORARY'),
      useRelayEnvironment: function () {
        return b('react-relay/relay-hooks/useRelayEnvironment')();
      },
      useSubscribeToInvalidationState: b(
        'react-relay/relay-hooks/useSubscribeToInvalidationState',
      ),
      useSubscription: b('useFBSubscription'),
    };
  },
  null,
);
