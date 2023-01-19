__d(
  'SecuredActionChallengePasswordDialog.entrypoint',
  [
    'JSResourceForInteraction',
    'SecuredActionChallengePasswordDialogQuery$Parameters',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            query: {
              options: { fetchPolicy: 'store-and-network' },
              parameters: c(
                'SecuredActionChallengePasswordDialogQuery$Parameters',
              ),
              variables: { height: 60, scale: 1, width: 60 },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'SecuredActionChallengePasswordDialog.react',
      ).__setRef('SecuredActionChallengePasswordDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
