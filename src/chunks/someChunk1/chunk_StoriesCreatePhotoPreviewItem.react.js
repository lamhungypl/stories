__d(
  'StoriesCreatePhotoPreviewItem.react',
  [
    'StoriesCreatePhotoPreviewFallback.react',
    'StoriesCreateUploadingOrUploadedPhotoItem.react',
    'TetraText.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var d = a.attachment,
        e = a.frameWidth,
        f = a.onError,
        g = a.onLoad;
      a = a.xstyle;
      switch (d.state) {
        case 'NEW':
        case 'CLIENT_PROCESSING':
        case 'CLIENT_PROCESSING_COMPLETE':
          return h.jsx(c('StoriesCreatePhotoPreviewFallback.react'), {
            filename: d.file.name,
            frameWidth: e,
          });
        case 'QUEUED':
        case 'UPLOADING':
        case 'UPLOADED':
          if (d.file != null)
            return h.jsx(c('StoriesCreateUploadingOrUploadedPhotoItem.react'), {
              attachment: d,
              frameWidth: e,
              onError: f,
              onLoad: g,
              ref: b,
              xstyle: a,
            });
          else return null;
        case 'FAILED':
          return h.jsxs(h.Fragment, {
            children: [
              d.file.name,
              d.error != null
                ? h.jsxs(h.Fragment, {
                    children: [
                      h.jsx('br', {}),
                      h.jsx(c('TetraText.react'), {
                        color: 'negative',
                        type: 'body4',
                        children: d.error,
                      }),
                    ],
                  })
                : null,
            ],
          });
      }
      return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
