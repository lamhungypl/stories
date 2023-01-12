__d(
  'StoriesCreatePhotoPreviewPlaceholder.react',
  [
    'CollageItemFallback.react',
    'Locale',
    'StoriesCreateConstants',
    'StoriesCreatePhotoPreviewFrame.react',
    'react',
    'useStoriesCreatePhotoFrame',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a() {
      var a = d('Locale').isRTL(),
        b = c('useStoriesCreatePhotoFrame')();
      b = b.frameWidth;
      var e = d('StoriesCreateConstants').PHOTO_PREVIEW_DIMENSIONS
          .FOOTER_HEIGHT,
        f = d('StoriesCreateConstants').PHOTO_PREVIEW_DIMENSIONS.HEADER_HEIGHT;
      return h.jsx('div', {
        className:
          'xal61yo x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1ey2m1c x10l6tqk x13vifvy xh8yej3',
        children: h.jsxs('div', {
          className:
            'x1lq5wgf xgqcy7u x30kzoy x9jhf4c x78zum5 x1qalc10 xl56j7k x6ikm8r x10wlt62 x10l6tqk xtzzx4i' +
            (a ? ' xitnhlw' : ' xuuh30'),
          style: {
            height: 'calc(100% - ' + (e + f) + 'px',
            top: f + 'px',
            width: b,
          },
          children: [
            h.jsx('div', {
              className: 'xh8yej3',
              children: h.jsx(c('CollageItemFallback.react'), {
                fileType: 'PHOTO',
              }),
            }),
            h.jsx(c('StoriesCreatePhotoPreviewFrame.react'), { frameWidth: b }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
