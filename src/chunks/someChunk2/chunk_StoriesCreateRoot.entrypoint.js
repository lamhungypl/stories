__d(
  'StoriesCreateRoot.entrypoint',
  [
    'JSResourceForInteraction',
    'StoriesCreateQuery$Parameters',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            storiesCreateQueryReference: {
              parameters: b('StoriesCreateQuery$Parameters'),
              variables: {
                satpScale: d('WebPixelRatio').get() + 1,
                scale: d('WebPixelRatio').get(),
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')('StoriesCreateRoot.react').__setRef(
        'StoriesCreateRoot.entrypoint',
      ),
    };
    g['default'] = a;
  },
  98,
);
