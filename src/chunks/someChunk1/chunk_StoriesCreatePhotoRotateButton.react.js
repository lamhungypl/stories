__d(
  'StoriesCreatePhotoRotateButton.react',
  [
    'fbt',
    'ix',
    'StoriesCreateViewStateDispatcherContext',
    'TetraButton.react',
    'fbicon',
    'react',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useContext;
    function a(a) {
      var b = a.rotation,
        e = k(c('StoriesCreateViewStateDispatcherContext'));
      return j.jsx('div', {
        className: 'x1i64zmx',
        children: j.jsx(c('TetraButton.react'), {
          'aria-label':
            b > 0
              ? h._('__JHASH__E2EyxFUMMwe__JHASH__', [h._plural(b, 'number')])
              : void 0,
          icon: d('fbicon')._(i('1295657'), 16),
          label: h._('__JHASH__RJhnho3Xxdz__JHASH__'),
          onPress: function () {
            e({ type: 'photo_update_rotation', value: (b + 90) % 360 });
          },
          type: 'secondary',
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        rotation:
          (a = (a = a.photoData) == null ? void 0 : a.rotation) != null ? a : 0,
      };
    });
    g['default'] = b;
  },
  98,
);
