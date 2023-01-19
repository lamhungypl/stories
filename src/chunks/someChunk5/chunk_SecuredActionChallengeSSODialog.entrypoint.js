__d(
  'SecuredActionChallengeSSODialog.entrypoint',
  [
    'JSResourceForInteraction',
    'SecuredActionChallengeSSODialogQuery$Parameters',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        a = a.return_uri;
        return {
          queries: {
            query: {
              options: { fetchPolicy: 'store-and-network' },
              parameters: c('SecuredActionChallengeSSODialogQuery$Parameters'),
              variables: { height: 60, return_uri: a, scale: 1, width: 60 },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'SecuredActionChallengeSSODialog.react',
      ).__setRef('SecuredActionChallengeSSODialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
