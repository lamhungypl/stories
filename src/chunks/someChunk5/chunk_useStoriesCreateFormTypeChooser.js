__d(
  'useStoriesCreateFormTypeChooser',
  [
    'fbt',
    'CometRelay',
    'StoriesCreateFormBodyWrapper.react',
    'StoriesCreateInlineErrorRenderer.react',
    'StoriesCreateSettingButton.react',
    'react',
    'useStoriesCreateFormTypeChooser.graphql',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react'),
      k = {
        errorMessage: {
          marginStart: 'xmn8rco',
          marginEnd: 'x1h5jrl4',
          $$css: !0,
        },
      },
      l = i !== void 0 ? i : (i = b('useStoriesCreateFormTypeChooser.graphql'));
    function a(a) {
      a = d('CometRelay').useFragment(l, a);
      return {
        body: j.jsx(c('StoriesCreateFormBodyWrapper.react'), {
          dataRef: a,
          children: j.jsx('div', {}),
        }),
        footer: j.jsx(c('StoriesCreateInlineErrorRenderer.react'), {
          xstyle: k.errorMessage,
        }),
        hideBreadcrumb: !0,
        title: h._('__JHASH__rLp7PFpVEKR__JHASH__'),
        titleAddOn: j.jsx(c('StoriesCreateSettingButton.react'), {}),
      };
    }
    g['default'] = a;
  },
  98,
);
