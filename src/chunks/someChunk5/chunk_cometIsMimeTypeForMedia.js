__d(
  'cometIsMimeTypeForMedia',
  ['FBLogger', 'UFICommentFileInputAcceptValues'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = { file: null, photo: null, video: null },
      i = { 'image/gif': 'video', 'image/webp': 'video' };
    function j(a) {
      return a
        .split(',')
        .map(function (a) {
          return a.trim();
        })
        .map(function (a) {
          return a.replace(/\/\*$/, '/');
        });
    }
    function k(a, b, d) {
      h[a] == null && (h[a] = j(d));
      d = h[a];
      if (d == null)
        throw c('FBLogger')('ufi2').mustfixThrow(
          "CometIsMimeTypeForMedia prefixes can't be null",
        );
      var e = i[b];
      return e != null
        ? e === a
        : d.some(function (a) {
            return b.startsWith(a);
          });
    }
    function a(a) {
      return k('photo', a, d('UFICommentFileInputAcceptValues').photos);
    }
    function b(a) {
      return k('video', a, d('UFICommentFileInputAcceptValues').videos);
    }
    function e(a) {
      return k('file', a, d('UFICommentFileInputAcceptValues').files);
    }
    g.mimeTypeAcceptStringToArray = j;
    g.isMimeTypeForPhoto = a;
    g.isMimeTypeForVideo = b;
    g.isMimeTypeForFile = e;
  },
  98,
);
