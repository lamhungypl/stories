__d(
  'StoriesCreateTextOverlaysRoot.entrypoint',
  ['JSResourceForInteraction', 'StoriesCreateTextOverlaysRootQuery$Parameters'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            rootQueryReference: {
              parameters: b('StoriesCreateTextOverlaysRootQuery$Parameters'),
              variables: {},
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'StoriesCreateTextOverlaysRoot.react',
      ).__setRef('StoriesCreateTextOverlaysRoot.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
