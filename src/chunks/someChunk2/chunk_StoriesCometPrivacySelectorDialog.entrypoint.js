__d(
  'StoriesCometPrivacySelectorDialog.entrypoint',
  [
    'JSResourceForInteraction',
    'StoriesCometPrivacySelectorDialogQuery$Parameters',
    'qex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            myQueryReference: {
              parameters: c(
                'StoriesCometPrivacySelectorDialogQuery$Parameters',
              ),
              variables: { isStoryCommentingEnabled: c('qex')._('573') },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'StoriesCometPrivacySelectorDialog.react',
      ).__setRef('StoriesCometPrivacySelectorDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
