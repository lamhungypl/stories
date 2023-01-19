__d(
  'StoriesComposerCometHeadlessMediaUploader.react',
  [
    'CometPlaceholder.react',
    'JSResourceForInteraction',
    'StoriesCreateMediaUploaderContext',
    'StoriesCreateViewStateDispatcherContext',
    'lazyLoadComponent',
    'react',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerHeadlessMediaUploaderImpl.react',
        ).__setRef('StoriesComposerCometHeadlessMediaUploader.react'),
      );
    function a(a) {
      var b = a.mediaAttachments;
      a = a.mediaUploadStatuses;
      var d = i(c('StoriesCreateViewStateDispatcherContext')),
        e = i(c('StoriesCreateMediaUploaderContext'));
      e = e.uploader;
      return e == null || b == null || b[0].fileType === 'VIDEO'
        ? null
        : h.jsx(c('CometPlaceholder.react'), {
            fallback: h.jsx('div', {}),
            children: h.jsx(j, {
              composerUploader: e,
              dispatch: d,
              mediaAttachments: b,
              mediaUploadStatuses: a,
              useOptimisticMediaPost: !1,
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        mediaAttachments: a.mediaAttachments,
        mediaUploadStatuses: a.mediaUploadStatuses,
      };
    });
    g['default'] = b;
  },
  98,
);
