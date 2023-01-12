__d(
  'StoriesCreateFormFooterBase.react',
  [
    'fbt',
    'StoriesCreateConstants',
    'TetraButton.react',
    'react',
    'useStoriesCreateFormHandler',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useState;
    function a(a) {
      var b = a.isUploading,
        e = a.onError,
        f = a.onNavigate,
        g = a.onSuccess;
      a = a.qplEvent;
      var k = j(!1),
        l = k[0],
        m = k[1];
      k = c('useStoriesCreateFormHandler')(b, e, f, g, a, l);
      e = k.handleDiscard;
      var n = k.handleSubmit;
      f = k.submitDisabled;
      g = d('StoriesCreateConstants').LEAVE_TEXT.DEFAULT;
      return i.jsxs('div', {
        className:
          'x6s0dn4 x1jx94hy x10h3on x78zum5 x1q0g3np xy75621 x1qughib x1ye3gou xn6708d',
        children: [
          i.jsx('div', {
            className: 'x1iyjqo2 x1vqgdyp xsgj6o6 xw3qccf',
            children: i.jsx(c('TetraButton.react'), {
              disabled: b,
              label: g.CONFIRM,
              onPress: e,
              size: 'medium',
              type: 'secondary',
            }),
          }),
          i.jsx('div', {
            className: 'x1iyjqo2 x1vqgdyp xsgj6o6 xw3qccf',
            children: i.jsx(c('TetraButton.react'), {
              disabled: f,
              label: h._('__JHASH__Hma_aNaVwIc__JHASH__'),
              onPress: function () {
                n(), m(!0);
              },
              size: 'medium',
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withStoriesCreateViewStatePart')(a, function (a) {
      return { isUploading: (a = a.isUploading) != null ? a : !1 };
    });
    g['default'] = b;
  },
  98,
);
