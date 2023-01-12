__d(
  'StoriesCreateDominantColorBg.react',
  [
    'StoriesCreateBlurredBgReducer',
    'StoriesCreateViewStateDispatcherContext',
    'StoriesEnums',
    'StoriesGradientBackground.react',
    'react',
    'useStoriesCreateReducer',
    'useStoriesDominantColorPicker',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = { blue: 0, clusterSize: 0, green: 0, red: 0 };
    function a(a) {
      var b = a.displayedURI,
        e = a.frameWidth;
      a = a.rounded;
      c('useStoriesCreateReducer')(c('StoriesCreateBlurredBgReducer'));
      var f = i(c('StoriesCreateViewStateDispatcherContext')),
        g = c('useStoriesDominantColorPicker')({ imageURL: b });
      if (b == null)
        return h.jsx('div', {
          className:
            'x5yr21d x6ikm8r x10wlt62 x10l6tqk xh8yej3' +
            (a ? ' x1lq5wgf xgqcy7u x30kzoy x9jhf4c' : ''),
          style: { width: e },
          children: h.jsx(c('StoriesGradientBackground.react'), {
            direction: d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM,
            from: 'rgb(' + j.red + ', ' + j.green + ',' + j.blue,
            to: 'rgb(' + j.red + ', ' + j.green + ',' + j.blue,
          }),
        });
      f({
        bottomColor: g.bottomColor,
        topColor: g.topColor,
        type: 'blurredBg_update_bg',
      });
      return h.jsx('div', {
        className: 'x5yr21d x6ikm8r x10wlt62 x10l6tqk xh8yej3',
        style: { width: e },
        children: h.jsx(c('StoriesGradientBackground.react'), {
          direction: d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM,
          from: g.topColor,
          to: g.bottomColor,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        displayedURI: (a = a.photoData) == null ? void 0 : a.displayedURI,
      };
    });
    g['default'] = b;
  },
  98,
);
