__d(
  'CometFeedStoryFBReelsAttachmentStyle.react',
  [
    'CometFeedStoryFBReelsAttachment.react',
    'CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer.graphql',
    'CometRelay',
    'FBLogger',
    'react',
    'useCometFeedStoryAttachmentMatchDebugger',
    'useNullthrowsViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e,
        f = d('CometRelay').useFragment(
          h !== void 0
            ? h
            : (h = b(
                'CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer.graphql',
              )),
          a.styleTypeRenderer,
        );
      c('useCometFeedStoryAttachmentMatchDebugger')(f);
      e = c('useNullthrowsViolation')(
        f == null
          ? void 0
          : (e = f.attachment) == null
          ? void 0
          : e.style_infos,
        'attachment cannot be nullish in CometFeedStoryFBReelsAttachmentStyle',
      );
      if (e.length === 0)
        throw c('FBLogger')('fb_reels_web').mustfixThrow(
          'style_infos cannot be empty in order to show reels',
        );
      e = e.find(function (a) {
        a = a.__typename;
        return a === 'FBShortsShareAttachmentStyleInfo';
      });
      var g = e == null ? void 0 : e.fb_shorts_story;
      e = (e = e == null ? void 0 : e.enable_horizontal_ufi) != null ? e : !1;
      f =
        (f == null
          ? void 0
          : (f = f.attachment) == null
          ? void 0
          : (f = f.style_list) == null
          ? void 0
          : f.find(function (a) {
              return a === 'fb_shorts';
            })) != null;
      return i.jsx(c('CometFeedStoryFBReelsAttachment.react'), {
        adClientToken: a.adClientToken,
        adID: a.adID,
        hideVerticalUFI: e,
        isReshare: f,
        story: g,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
