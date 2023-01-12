__d(
  'useStoriesCreatePhotoPreviewBounds',
  ['StoriesCreateViewStateDispatcherContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect;
    function a(a, b, d) {
      var e = h(c('StoriesCreateViewStateDispatcherContext'));
      i(
        function () {
          if (b == null || d == null) return;
          var c = { x: 0, y: 0 };
          a % 180 === 0
            ? (a === 0
                ? (c = {
                    x: (b.left - d.left) / d.width,
                    y: (b.top - d.top) / d.height,
                  })
                : a === 180 &&
                  (c = {
                    x: (d.right - b.right) / d.width,
                    y: (d.bottom - b.bottom) / d.height,
                  }),
              e({
                bounds: {
                  height: b.height / d.height,
                  width: b.width / d.width,
                  x: c.x,
                  y: c.y,
                },
                type: 'photo_update_bounds',
              }))
            : (a === 90
                ? (c = {
                    x: (b.top - d.top) / d.height,
                    y: (d.right - b.right) / d.width,
                  })
                : a === 270 &&
                  (c = {
                    x: (d.bottom - b.bottom) / d.height,
                    y: (b.left - d.left) / d.width,
                  }),
              e({
                bounds: {
                  height: b.width / d.width,
                  width: b.height / d.height,
                  x: c.x,
                  y: c.y,
                },
                type: 'photo_update_bounds',
              }));
        },
        [e, b, d, a],
      );
    }
    g['default'] = a;
  },
  98,
);
