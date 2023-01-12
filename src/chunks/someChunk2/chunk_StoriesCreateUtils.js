__d(
  'StoriesCreateUtils',
  [
    'fbt',
    'StoriesCreateMediaTypeEnum',
    'StoriesGating',
    'cometIsMimeTypeForMedia',
    'cometPushToast',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    b = {
      getStoriesBeginningViewState: function (a) {
        if (a != null) {
          var b;
          a = Array(a)[0];
          b = String((b = a == null ? void 0 : a.uploadID) != null ? b : '');
          b = {
            data: { id: b },
            file: a,
            fileObjectURL: URL.createObjectURL(a),
            fileType: 'PHOTO',
            percentComplete: 100,
            state: 'UPLOADING',
          };
          return {
            formData: {
              mediaType: c('StoriesCreateMediaTypeEnum').PHOTO,
              step: 1,
            },
            mediaAttachments: [b],
          };
        }
        return null;
      },
    };
    function a(a) {
      if (a.length > 0)
        for (var b = 0; b < a.length; b++) {
          var c = a[b].type;
          c =
            !(
              d('cometIsMimeTypeForMedia').isMimeTypeForVideo(c) &&
              d('StoriesGating').isCometStoriesVideoProductionEnabled()
            ) && !d('cometIsMimeTypeForMedia').isMimeTypeForPhoto(c);
          if (c) {
            c = d('StoriesGating').isCometStoriesVideoProductionEnabled()
              ? h._('__JHASH__oUAKwa69b9c__JHASH__')
              : h._('__JHASH__UnAt1CvX1LT__JHASH__');
            d('cometPushToast').cometPushErrorToast({ message: c });
            return;
          }
        }
    }
    g.StoriesCreateUtils = b;
    g.IsFileSupported = a;
  },
  98,
);
