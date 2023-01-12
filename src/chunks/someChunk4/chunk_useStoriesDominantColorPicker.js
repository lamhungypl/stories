__d(
  'useStoriesDominantColorPicker',
  ['react', 'recoverableViolation', 'storiesDominantColorPicker'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var useEffect = b.useEffect;
    var useState = b.useState;
    var j = 100;
    function useStoriesDominantColorPicker(props) {
      var defaultBottomColor = props.defaultBottomColor;
      var defaultTopColor = props.defaultTopColor;
      var imageURL = useColor.imageURL;
      let useColor = useState({
        bottomColor: defaultBottomColor ? colorToRGB(defaultBottomColor) : '',
        topColor: defaultTopColor ? colorToRGB(defaultTopColor) : '',
      });
      let stateColor = useColor[0];
      var setColor = useColor[1];

      useEffect(
        function () {
          if (imageURL == null) return;
          let image = new Image();
          image.crossOrigin = 'Anonymous';
          image.onload = function () {
            let canvasNode = document.createElement('canvas');
            let width = image.width;
            let height = image.height;
            let ratio = width / height;
            let dimension = Math.min(Math.max(width, height), j);

            if (width > dimension || height > dimension) {
              if (width > height) {
                width = dimension;
                height = width / ratio;
              } else {
                height = dimension;
                width = height * ratio;
              }
            }

            canvasNode.width = width;
            canvasNode.height = height;

            let context2DNode = canvasNode.getContext('2d');
            context2DNode.drawImage(image, 0, 0, width, height);
            try {
              let g = context2DNode.getImageData(
                0,
                0,
                width,
                Math.max(1, height * 0.05),
              );
              let b = context2DNode.getImageData(
                0,
                height - height * 0.05,
                width,
                Math.max(1, height * 0.05),
              );
              let h = c('storiesDominantColorPicker')(g.data);
              let d = c('storiesDominantColorPicker')(b.data);
              setColor({
                bottomColor: colorToRGB(d[0]),
                topColor: colorToRGB(h[0]),
              });
            } catch (a) {
              c('recoverableViolation')(
                'Stories Create Dominant Color Bg throws exception',
                'fb_stories_web',
                a,
              );
            }
          };
          image.src = imageURL;
          return function () {
            image.onload = null;
          };
        },
        [imageURL],
      );
      return stateColor;
    }
    const colorToRGB = (color) => {
      return `rgb(${color.red},${color.green}, ${color.blue})`;
    };

    g['default'] = useStoriesDominantColorPicker;
  },
  98,
);
