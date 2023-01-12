__d(
  'useFBReelsSingleVideoClickLogger',
  [
    'CometRelay',
    'FBLogger',
    'requireDeferred',
    'useFBReelsSingleVideoClickLogger_story.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = c('requireDeferred')('FbShortsSingleVideoClickFalcoEvent').__setRef(
        'useFBReelsSingleVideoClickLogger',
      );
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useFBReelsSingleVideoClickLogger_story.graphql')),
        a,
      );
      var e = a == null ? void 0 : a.tracking,
        f =
          a == null
            ? void 0
            : (a = a.short_form_video_context) == null
            ? void 0
            : (a = a.video) == null
            ? void 0
            : a.id;
      return function (a) {
        i.onReady(function (b) {
          if (e == null) {
            c('FBLogger')('fb_reels_web').mustfix(
              'useFBReelsSingleVideoClickLogger gets a null tracking string.',
            );
            return;
          }
          if (f == null) {
            c('FBLogger')('fb_reels_web').mustfix(
              'useFBReelsSingleVideoClickLogger gets a null videoID.',
            );
            return;
          }
          b.log(function () {
            return { referral_source: a, tracking: e, video_id: f };
          });
        });
      };
    }
    g['default'] = a;
  },
  98,
);
