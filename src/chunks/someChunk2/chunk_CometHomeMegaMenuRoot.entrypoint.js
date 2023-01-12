__d(
  'CometHomeMegaMenuRoot.entrypoint',
  [
    'CometGlobalPanelGating.entrypointutils',
    'CometHomeMegaMenuAllProductsQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            megaMenuTypeaheadQueryRef: {
              parameters: c('CometHomeMegaMenuAllProductsQuery$Parameters'),
              variables: {
                scale: d('WebPixelRatio').get(),
                shouldFetchRecents: d(
                  'CometGlobalPanelGating.entrypointutils',
                ).isGlobalPanelEnabled(),
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometHomeMegaMenuRoot.react',
      ).__setRef('CometHomeMegaMenuRoot.entrypoint'),
    };
    b = a;
    g['default'] = b;
  },
  98,
);
