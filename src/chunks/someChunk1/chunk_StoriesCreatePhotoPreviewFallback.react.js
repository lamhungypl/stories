__d(
  'StoriesCreatePhotoPreviewFallback.react',
  ['CollageItemFallback.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.filename,
        d = a.frameWidth;
      a = a.percentComplete;
      return h.jsx('div', {
        className: 'x1ey2m1c x10l6tqk xtzzx4i x13vifvy xuuh30',
        style: { width: d + 'px' },
        children: h.jsx(c('CollageItemFallback.react'), {
          fileType: 'PHOTO',
          filename: b,
          percentComplete: a,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
