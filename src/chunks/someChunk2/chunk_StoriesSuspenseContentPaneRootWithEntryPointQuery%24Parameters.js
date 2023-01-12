__d(
  'StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters',
  [
    'StoriesIsCommentEnabled.relayprovider',
    'StoriesRing.relayprovider',
    'StoriesSuspenseContentPaneRootWithEntryPointQuery_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'StoriesSuspenseContentPaneRootWithEntryPointQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'StoriesSuspenseContentPaneRootWithEntryPointQuery',
        operationKind: 'query',
        text: null,
        providedVariables: {
          __relay_internal__pv__StoriesIsCommentEnabledrelayprovider: b(
            'StoriesIsCommentEnabled.relayprovider',
          ),
          __relay_internal__pv__StoriesRingrelayprovider: b(
            'StoriesRing.relayprovider',
          ),
        },
      },
    };
    e.exports = a;
  },
  null,
);
