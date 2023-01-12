__d(
  'StoriesCometSuspenseRoot.entrypoint',
  [
    'FBUnifiedStoriesTrayTypeUtils.facebook',
    'JSResourceForInteraction',
    'StoriesGatingEntrypoint.entrypointutils',
    'StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters',
    'StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var c = a.passthroughProps,
          e = a.routeParams;
        a = a.routeProps;
        var f = e.bucket_id,
          g = a.bucket_id_from_card_id;
        a = a.buckets_count;
        e = (e == null ? void 0 : e.source) === 'story_tray';
        c = d('FBUnifiedStoriesTrayTypeUtils.facebook').fromJSEnum(
          (c = c == null ? void 0 : c.storiesTrayType) != null
            ? c
            : 'TOP_OF_FEED_TRAY',
        );
        e = {
          bucketsCount: (a = a) != null ? a : 9,
          extendedViewerInitialBucketID: (a = f) != null ? a : '',
          includeInitialBucket: f !== '' && f !== null && !e,
          pinnedIDs: [(a = f) != null ? a : ''],
          scale: d('WebPixelRatio').get(),
          storiesTrayType: c,
        };
        c = d('StoriesGatingEntrypoint.entrypointutils').getContentPaneParams(
          (a = f) != null ? a : g,
        );
        return {
          queries: {
            storiesSuspenseContentPaneRootReference: {
              parameters: b(
                'StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters',
              ),
              variables: c,
            },
            storiesSuspenseNavigationPaneRootReference: {
              parameters: b(
                'StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters',
              ),
              variables: e,
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'StoriesCometSuspenseRoot.react',
      ).__setRef('StoriesCometSuspenseRoot.entrypoint'),
    };
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
