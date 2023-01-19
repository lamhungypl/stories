__d(
  'relay-runtime',
  [
    'Promise',
    'relay-runtime/handlers/RelayDefaultHandlerProvider',
    'relay-runtime/handlers/connection/ConnectionHandler',
    'relay-runtime/handlers/connection/ConnectionInterface',
    'relay-runtime/handlers/connection/MutationHandlers',
    'relay-runtime/mutations/RelayDeclarativeMutationConfig',
    'relay-runtime/mutations/applyOptimisticMutation',
    'relay-runtime/mutations/commitLocalUpdate',
    'relay-runtime/mutations/commitMutation',
    'relay-runtime/network/RelayNetwork',
    'relay-runtime/network/RelayObservable',
    'relay-runtime/network/RelayQueryResponseCache',
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/query/PreloadableQueryRegistry',
    'relay-runtime/query/fetchQuery',
    'relay-runtime/query/fetchQueryInternal',
    'relay-runtime/query/fetchQuery_DEPRECATED',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayConcreteVariables',
    'relay-runtime/store/RelayModernEnvironment',
    'relay-runtime/store/RelayModernOperationDescriptor',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayModernSelector',
    'relay-runtime/store/RelayModernStore',
    'relay-runtime/store/RelayOperationTracker',
    'relay-runtime/store/RelayRecordSource',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/store/ResolverFragments',
    'relay-runtime/store/ViewerPattern',
    'relay-runtime/store/createFragmentSpecResolver',
    'relay-runtime/store/createRelayContext',
    'relay-runtime/store/isRelayModernEnvironment',
    'relay-runtime/store/readInlineData',
    'relay-runtime/subscription/requestSubscription',
    'relay-runtime/util/RelayConcreteNode',
    'relay-runtime/util/RelayDefaultHandleKey',
    'relay-runtime/util/RelayError',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/RelayProfiler',
    'relay-runtime/util/RelayReplaySubject',
    'relay-runtime/util/createPayloadFor3DField',
    'relay-runtime/util/deepFreeze',
    'relay-runtime/util/getFragmentIdentifier',
    'relay-runtime/util/getPaginationMetadata',
    'relay-runtime/util/getPaginationVariables',
    'relay-runtime/util/getPendingOperationsForFragment',
    'relay-runtime/util/getRefetchMetadata',
    'relay-runtime/util/getRelayHandleKey',
    'relay-runtime/util/getRequestIdentifier',
    'relay-runtime/util/getValueAtPath',
    'relay-runtime/util/handlePotentialSnapshotErrors',
    'relay-runtime/util/isPromise',
    'relay-runtime/util/isScalarAndEqual',
    'relay-runtime/util/recycleNodesInto',
    'relay-runtime/util/stableCopy',
    'relay-runtime/util/withProvidedVariables',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g, h, i;
    a = b('relay-runtime/store/ClientID').generateClientID;
    c = b('relay-runtime/store/ClientID').generateUniqueClientID;
    d = b('relay-runtime/store/ClientID').isClientID;
    e.exports = {
      Environment: b('relay-runtime/store/RelayModernEnvironment'),
      Network: b('relay-runtime/network/RelayNetwork'),
      Observable: b('relay-runtime/network/RelayObservable'),
      QueryResponseCache: b('relay-runtime/network/RelayQueryResponseCache'),
      RecordSource: b('relay-runtime/store/RelayRecordSource'),
      Record: g || (g = b('relay-runtime/store/RelayModernRecord')),
      ReplaySubject: b('relay-runtime/util/RelayReplaySubject'),
      Store: b('relay-runtime/store/RelayModernStore'),
      areEqualSelectors: b('relay-runtime/store/RelayModernSelector')
        .areEqualSelectors,
      createFragmentSpecResolver: b(
        'relay-runtime/store/createFragmentSpecResolver',
      ),
      createNormalizationSelector: b('relay-runtime/store/RelayModernSelector')
        .createNormalizationSelector,
      createOperationDescriptor: b(
        'relay-runtime/store/RelayModernOperationDescriptor',
      ).createOperationDescriptor,
      createReaderSelector: b('relay-runtime/store/RelayModernSelector')
        .createReaderSelector,
      createRequestDescriptor: b(
        'relay-runtime/store/RelayModernOperationDescriptor',
      ).createRequestDescriptor,
      getArgumentValues: b('relay-runtime/store/RelayStoreUtils')
        .getArgumentValues,
      getDataIDsFromFragment: b('relay-runtime/store/RelayModernSelector')
        .getDataIDsFromFragment,
      getDataIDsFromObject: b('relay-runtime/store/RelayModernSelector')
        .getDataIDsFromObject,
      getNode: b('relay-runtime/query/GraphQLTag').getNode,
      getFragment: b('relay-runtime/query/GraphQLTag').getFragment,
      getInlineDataFragment: b('relay-runtime/query/GraphQLTag')
        .getInlineDataFragment,
      getModuleComponentKey: b('relay-runtime/store/RelayStoreUtils')
        .getModuleComponentKey,
      getModuleOperationKey: b('relay-runtime/store/RelayStoreUtils')
        .getModuleOperationKey,
      getPaginationFragment: b('relay-runtime/query/GraphQLTag')
        .getPaginationFragment,
      getPluralSelector: b('relay-runtime/store/RelayModernSelector')
        .getPluralSelector,
      getRefetchableFragment: b('relay-runtime/query/GraphQLTag')
        .getRefetchableFragment,
      getRequest: b('relay-runtime/query/GraphQLTag').getRequest,
      getRequestIdentifier: b('relay-runtime/util/getRequestIdentifier'),
      getSelector: b('relay-runtime/store/RelayModernSelector').getSelector,
      getSelectorsFromObject: b('relay-runtime/store/RelayModernSelector')
        .getSelectorsFromObject,
      getSingularSelector: b('relay-runtime/store/RelayModernSelector')
        .getSingularSelector,
      getStorageKey: b('relay-runtime/store/RelayStoreUtils').getStorageKey,
      getVariablesFromFragment: b('relay-runtime/store/RelayModernSelector')
        .getVariablesFromFragment,
      getVariablesFromObject: b('relay-runtime/store/RelayModernSelector')
        .getVariablesFromObject,
      getVariablesFromPluralFragment: b(
        'relay-runtime/store/RelayModernSelector',
      ).getVariablesFromPluralFragment,
      getVariablesFromSingularFragment: b(
        'relay-runtime/store/RelayModernSelector',
      ).getVariablesFromSingularFragment,
      handlePotentialSnapshotErrors: b(
        'relay-runtime/util/handlePotentialSnapshotErrors',
      ),
      graphql: b('relay-runtime/query/GraphQLTag').graphql,
      isFragment: b('relay-runtime/query/GraphQLTag').isFragment,
      isInlineDataFragment: b('relay-runtime/query/GraphQLTag')
        .isInlineDataFragment,
      isRequest: b('relay-runtime/query/GraphQLTag').isRequest,
      readInlineData: b('relay-runtime/store/readInlineData'),
      MutationTypes: b('relay-runtime/mutations/RelayDeclarativeMutationConfig')
        .MutationTypes,
      RangeOperations: b(
        'relay-runtime/mutations/RelayDeclarativeMutationConfig',
      ).RangeOperations,
      DefaultHandlerProvider: b(
        'relay-runtime/handlers/RelayDefaultHandlerProvider',
      ),
      ConnectionHandler: b(
        'relay-runtime/handlers/connection/ConnectionHandler',
      ),
      MutationHandlers: b('relay-runtime/handlers/connection/MutationHandlers'),
      VIEWER_ID: b('relay-runtime/store/ViewerPattern').VIEWER_ID,
      VIEWER_TYPE: b('relay-runtime/store/ViewerPattern').VIEWER_TYPE,
      applyOptimisticMutation: b(
        'relay-runtime/mutations/applyOptimisticMutation',
      ),
      commitLocalUpdate: b('relay-runtime/mutations/commitLocalUpdate'),
      commitMutation: b('relay-runtime/mutations/commitMutation'),
      fetchQuery: b('relay-runtime/query/fetchQuery'),
      fetchQuery_DEPRECATED: b('relay-runtime/query/fetchQuery_DEPRECATED'),
      isRelayModernEnvironment: b(
        'relay-runtime/store/isRelayModernEnvironment',
      ),
      requestSubscription: b('relay-runtime/subscription/requestSubscription'),
      ConnectionInterface: b(
        'relay-runtime/handlers/connection/ConnectionInterface',
      ),
      PreloadableQueryRegistry: b(
        'relay-runtime/query/PreloadableQueryRegistry',
      ),
      RelayProfiler: b('relay-runtime/util/RelayProfiler'),
      createPayloadFor3DField: b('relay-runtime/util/createPayloadFor3DField'),
      RelayConcreteNode: b('relay-runtime/util/RelayConcreteNode'),
      RelayError: b('relay-runtime/util/RelayError'),
      RelayFeatureFlags: b('relay-runtime/util/RelayFeatureFlags'),
      DEFAULT_HANDLE_KEY: b('relay-runtime/util/RelayDefaultHandleKey')
        .DEFAULT_HANDLE_KEY,
      FRAGMENTS_KEY: b('relay-runtime/store/RelayStoreUtils').FRAGMENTS_KEY,
      FRAGMENT_OWNER_KEY: b('relay-runtime/store/RelayStoreUtils')
        .FRAGMENT_OWNER_KEY,
      ID_KEY: b('relay-runtime/store/RelayStoreUtils').ID_KEY,
      REF_KEY: b('relay-runtime/store/RelayStoreUtils').REF_KEY,
      REFS_KEY: b('relay-runtime/store/RelayStoreUtils').REFS_KEY,
      ROOT_ID: b('relay-runtime/store/RelayStoreUtils').ROOT_ID,
      ROOT_TYPE: b('relay-runtime/store/RelayStoreUtils').ROOT_TYPE,
      TYPENAME_KEY: b('relay-runtime/store/RelayStoreUtils').TYPENAME_KEY,
      deepFreeze: h || (h = b('relay-runtime/util/deepFreeze')),
      generateClientID: a,
      generateUniqueClientID: c,
      getRelayHandleKey: b('relay-runtime/util/getRelayHandleKey'),
      isClientID: d,
      isPromise: b('relay-runtime/util/isPromise'),
      isScalarAndEqual: b('relay-runtime/util/isScalarAndEqual'),
      recycleNodesInto: b('relay-runtime/util/recycleNodesInto'),
      stableCopy: i || (i = b('relay-runtime/util/stableCopy')),
      getFragmentIdentifier: b('relay-runtime/util/getFragmentIdentifier'),
      getRefetchMetadata: b('relay-runtime/util/getRefetchMetadata'),
      getPaginationMetadata: b('relay-runtime/util/getPaginationMetadata'),
      getPaginationVariables: b('relay-runtime/util/getPaginationVariables'),
      getPendingOperationsForFragment: b(
        'relay-runtime/util/getPendingOperationsForFragment',
      ),
      getValueAtPath: b('relay-runtime/util/getValueAtPath'),
      __internal: {
        ResolverFragments: b('relay-runtime/store/ResolverFragments'),
        OperationTracker: b('relay-runtime/store/RelayOperationTracker'),
        createRelayContext: b('relay-runtime/store/createRelayContext'),
        getOperationVariables: b('relay-runtime/store/RelayConcreteVariables')
          .getOperationVariables,
        fetchQuery: b('relay-runtime/query/fetchQueryInternal').fetchQuery,
        fetchQueryDeduped: b('relay-runtime/query/fetchQueryInternal')
          .fetchQueryDeduped,
        getPromiseForActiveRequest: b('relay-runtime/query/fetchQueryInternal')
          .getPromiseForActiveRequest,
        getObservableForActiveRequest: b(
          'relay-runtime/query/fetchQueryInternal',
        ).getObservableForActiveRequest,
        withProvidedVariables: b('relay-runtime/util/withProvidedVariables'),
      },
    };
  },
  null,
);
