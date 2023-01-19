__d(
  'useStoriesCreatePhotoFrame',
  ['StoriesCreateConstants', 'useStoriesCreateMediaFrame'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      return c('useStoriesCreateMediaFrame')({
        footerHeight: d('StoriesCreateConstants').PHOTO_PREVIEW_DIMENSIONS
          .FOOTER_HEIGHT,
        headerHeight: d('StoriesCreateConstants').PHOTO_PREVIEW_DIMENSIONS
          .HEADER_HEIGHT,
      });
    }
    g['default'] = a;
  },
  98,
);
