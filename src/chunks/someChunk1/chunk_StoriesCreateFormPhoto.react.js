__d(
  'StoriesCreateFormPhoto.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'QPLUserFlow',
    'RelayHooks',
    'StoriesCreateCTALink.react',
    'StoriesCreateFormAddDataButton',
    'StoriesCreateFormPhoto_data.graphql',
    'StoriesCreatePhotoReducer',
    'StoriesCreateTextOverlaysReducer',
    'StoriesCreateViewStateDispatcherContext',
    'TetraIcon.react',
    'cr:3482',
    'fbicon',
    'qpl',
    'react',
    'useStoriesCreateReducer',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react'),
      l = d('react').useContext,
      m = j !== void 0 ? j : (j = b('StoriesCreateFormPhoto_data.graphql'));
    function a(a) {
      a = a.dataRef;
      c('useStoriesCreateReducer')(c('StoriesCreatePhotoReducer'));
      a = d('RelayHooks').useFragment(m, a);
      return k.jsxs('div', {
        children: [
          k.jsx(n, {}),
          k.jsx(d('CometRelay').MatchContainer, {
            match: a == null ? void 0 : a.stories_create_sticker_button_render,
          }),
          b('cr:3482') != null ? k.jsx(b('cr:3482'), {}) : null,
          k.jsx(c('StoriesCreateCTALink.react'), { dataRef: a }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function n() {
      c('useStoriesCreateReducer')(c('StoriesCreateTextOverlaysReducer'));
      var a = l(c('StoriesCreateViewStateDispatcherContext')),
        b = function () {
          window.requestAnimationFrame(function () {
            a({ type: 'text_overlay_create_new' });
          }),
            c('QPLUserFlow').addPoint(
              c('qpl')._(13250512, '1219'),
              'Add text button pressed',
            );
        };
      return k.jsx(c('StoriesCreateFormAddDataButton'), {
        icon: k.jsx(c('TetraIcon.react'), {
          color: 'primary',
          icon: d('fbicon')._(i('486061'), 16),
        }),
        label: h._('__JHASH__32RwbLUu4ba__JHASH__'),
        onPress: b,
      });
    }
    n.displayName = n.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
