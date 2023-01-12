__d(
  'FeedComposerCometDialog.entrypoint',
  [
    'FeedComposerCometRootQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var c = a.profileID;
        a = a.storyID;
        return {
          queries: {
            composerQueryReference: {
              options: { fetchPolicy: 'store-or-network' },
              parameters: b('FeedComposerCometRootQuery$Parameters'),
              variables: {
                hasStory: a != null && a !== '',
                privacySelectorRenderLocation: 'COMET_COMPOSER',
                profileID: c,
                scale: d('WebPixelRatio').get(),
                storyID: (c = a) != null ? c : '',
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'FeedComposerCometDialog.react',
      ).__setRef('FeedComposerCometDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
