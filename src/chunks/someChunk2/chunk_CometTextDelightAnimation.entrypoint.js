__d(
  'CometTextDelightAnimation.entrypoint',
  ['CometTextDelightAnimationQuery$Parameters', 'JSResourceForInteraction'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        a = a.id;
        return {
          queries: {
            CometTextDelightAnimationQueryRef: {
              parameters: c('CometTextDelightAnimationQuery$Parameters'),
              variables: { id: a },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometTextDelightAnimation.react',
      ).__setRef('CometTextDelightAnimation.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
