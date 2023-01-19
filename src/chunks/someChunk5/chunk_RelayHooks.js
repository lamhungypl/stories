__d(
  'RelayHooks',
  [
    'RelayFBEnvironmentActorID',
    'configureRelayForWWW',
    'react-relay/relay-hooks/EntryPointContainer.react',
    'react-relay/relay-hooks/RelayEnvironmentProvider',
    'react-relay/relay-hooks/loadEntryPoint',
    'react-relay/relay-hooks/loadQuery',
    'react-relay/relay-hooks/preloadQuery_DEPRECATED',
    'react-relay/relay-hooks/prepareEntryPoint_DEPRECATED',
    'react-relay/relay-hooks/useClientQuery',
    'react-relay/relay-hooks/useEntryPointLoader',
    'react-relay/relay-hooks/useFragment',
    'react-relay/relay-hooks/useLazyLoadQuery',
    'react-relay/relay-hooks/usePaginationFragment',
    'react-relay/relay-hooks/useRelayEnvironment',
    'react-relay/relay-hooks/useSubscribeToInvalidationState',
    'relay-runtime',
    'relay-runtime/query/PreloadableQueryRegistry',
    'useFBMutation',
    'useFBSubscription',
    'usePreloadedQuery__TEMPORARY',
    'useQueryLoader__TEMPORARY',
    'useRefetchableFragment__TEMPORARY',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('RelayFBEnvironmentActorID').useActorID;
    c = b('react-relay/relay-hooks/loadQuery').loadQuery;
    d = b('relay-runtime').fetchQuery;
    f = b('relay-runtime').graphql;
    var g = b('relay-runtime').readInlineData;
    b('configureRelayForWWW')();
    e.exports = {
      EntryPointContainer: b(
        'react-relay/relay-hooks/EntryPointContainer.react',
      ),
      PreloadableQueryRegistry: b(
        'relay-runtime/query/PreloadableQueryRegistry',
      ),
      RelayEnvironmentProvider: b(
        'react-relay/relay-hooks/RelayEnvironmentProvider',
      ),
      fetchQuery: d,
      graphql: f,
      loadQuery: c,
      loadEntryPoint: b('react-relay/relay-hooks/loadEntryPoint'),
      preloadQuery_DEPRECATED: b(
        'react-relay/relay-hooks/preloadQuery_DEPRECATED',
      ),
      prepareEntryPoint_DEPRECATED: b(
        'react-relay/relay-hooks/prepareEntryPoint_DEPRECATED',
      ),
      readInlineData: g,
      useActorID: a,
      useClientQuery: b('react-relay/relay-hooks/useClientQuery'),
      useFragment: b('react-relay/relay-hooks/useFragment'),
      useLazyLoadQuery: b('react-relay/relay-hooks/useLazyLoadQuery'),
      useEntryPointLoader: b('react-relay/relay-hooks/useEntryPointLoader'),
      useQueryLoader: b('useQueryLoader__TEMPORARY'),
      usePaginationFragment: b('react-relay/relay-hooks/usePaginationFragment'),
      useMutation: b('useFBMutation'),
      usePreloadedQuery: b('usePreloadedQuery__TEMPORARY'),
      usePreloadedQuery__TEMPORARY: b('usePreloadedQuery__TEMPORARY'),
      useRefetchableFragment: b('useRefetchableFragment__TEMPORARY'),
      useRefetchableFragment__TEMPORARY: b('useRefetchableFragment__TEMPORARY'),
      useRelayEnvironment: b('react-relay/relay-hooks/useRelayEnvironment'),
      useSubscribeToInvalidationState: b(
        'react-relay/relay-hooks/useSubscribeToInvalidationState',
      ),
      useSubscription: b('useFBSubscription'),
    };
  },
  null,
);
