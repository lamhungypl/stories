__d(
  'StoriesCreateFormFooter.react',
  [
    'StoriesCreateFormFooterBase.react',
    'react',
    'useStoriesCreateFormUpload',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.composerSessionID;
      a = a.mediaType;
      b = c('useStoriesCreateFormUpload')(b, a);
      a = b.onError;
      var d = b.onNavigate,
        e = b.onSuccess;
      b = b.qplEvent;
      return h.jsx(c('StoriesCreateFormFooterBase.react'), {
        onError: a,
        onNavigate: d,
        onSuccess: e,
        qplEvent: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        composerSessionID: a.composerSessionID,
        mediaType: (a = a.formData) == null ? void 0 : a.mediaType,
      };
    });
    g['default'] = b;
  },
  98,
); /*FB_PKG_DELIM*/
