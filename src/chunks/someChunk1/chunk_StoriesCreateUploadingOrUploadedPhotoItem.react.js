__d(
  'StoriesCreateUploadingOrUploadedPhotoItem.react',
  ['BaseImage.react', 'StoriesCreatePhotoPreviewFallback.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState;
    function a(a, b) {
      var d = a.attachment,
        e = a.frameWidth,
        f = a.onError,
        g = a.onLoad;
      a = a.xstyle;
      var j = i(!1),
        k = j[0],
        l = j[1],
        m = d.fileObjectURL;
      if (!k && m != null)
        if (d.useCDNPreview) l(!0);
        else
          return h.jsx(c('BaseImage.react'), {
            draggable: !1,
            onError: function () {
              l(!0), f && f(m);
            },
            onLoad: function () {
              g && g(m);
            },
            ref: b,
            src: m,
            xstyle: a,
          });
      if (k && d.fileType === 'PHOTO' && d.state === 'UPLOADED') {
        var n = d.uploadedImageURL;
        if (n != null)
          return h.jsx(c('BaseImage.react'), {
            draggable: !1,
            onLoad: function () {
              g && g(n);
            },
            ref: b,
            src: n,
            xstyle: a,
          });
      }
      return h.jsx(c('StoriesCreatePhotoPreviewFallback.react'), {
        filename: d.file.name,
        frameWidth: e,
        percentComplete: d.state === 'UPLOADING' ? d.percentComplete : void 0,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
