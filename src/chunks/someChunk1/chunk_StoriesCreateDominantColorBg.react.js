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
      useContext = d('react').useContext,
      defaultColor = { blue: 0, clusterSize: 0, green: 0, red: 0 };

    function Component(props) {
      let displayedURI = props.displayedURI;
      let frameWidth = props.frameWidth;
      let rounded = props.rounded;
      c('useStoriesCreateReducer')(c('StoriesCreateBlurredBgReducer'));

      let storiesCreateViewStateDispatcher = useContext(
        c('StoriesCreateViewStateDispatcherContext'),
      );
      let dominantColor = c('useStoriesDominantColorPicker')({
        imageURL: displayedURI,
      });

      if (displayedURI == null)
        return h.jsx('div', {
          className:
            'x5yr21d x6ikm8r x10wlt62 x10l6tqk xh8yej3' +
            (rounded ? ' x1lq5wgf xgqcy7u x30kzoy x9jhf4c' : ''),
          style: { width: frameWidth },
          children: h.jsx(c('StoriesGradientBackground.react'), {
            direction: d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM,
            from:
              'rgb(' +
              defaultColor.red +
              ', ' +
              defaultColor.green +
              ',' +
              defaultColor.blue,
            to:
              'rgb(' +
              defaultColor.red +
              ', ' +
              defaultColor.green +
              ',' +
              defaultColor.blue,
          }),
        });

      storiesCreateViewStateDispatcher({
        bottomColor: dominantColor.bottomColor,
        topColor: dominantColor.topColor,
        type: 'blurredBg_update_bg',
      });

      return h.jsx('div', {
        className: 'x5yr21d x6ikm8r x10wlt62 x10l6tqk xh8yej3',
        style: { width: frameWidth },
        children: h.jsx(c('StoriesGradientBackground.react'), {
          direction: d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM,
          from: dominantColor.topColor,
          to: dominantColor.bottomColor,
        }),
      });
    }

    Component.displayName = Component.name + ' [from ' + f.id + ']';

    let withStoriesComponent = c('withStoriesCreateViewStatePart')(
      a,
      function (a) {
        return {
          displayedURI: (a = a.photoData) == null ? void 0 : a.displayedURI,
        };
      },
    );
    g['default'] = withStoriesComponent;
  },
  98,
);
