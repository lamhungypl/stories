__d(
  'StoriesGatingEntrypoint.entrypointutils',
  ['WebPixelRatio', 'qex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b, e, f, g;
      b = (b = c('qex')._('1598')) != null ? b : !1;
      e = (e = c('qex')._('68')) != null ? e : !1;
      f = (f = c('qex')._('573')) != null ? f : !1;
      g = (g = c('qex')._('276')) != null ? g : !1;
      return {
        UFI2CommentsProvider_commentsKey:
          'StoriesSuspenseContentPaneRootWithEntryPointQuery',
        blur: d('WebPixelRatio').get() * 10,
        bucketID: a || '',
        displayCommentsContextEnableComment: !0,
        displayCommentsContextIsAdPreview: !1,
        displayCommentsContextIsAggregatedShare: !1,
        displayCommentsContextIsStorySet: !1,
        displayCommentsFeedbackContext: null,
        feedbackSource: 65,
        feedLocation: 'COMET_MEDIA_VIEWER',
        focusCommentID: null,
        initialBucketID: a || '',
        initialLoad: !0,
        isStoryCommentingEnabled: f,
        scale: d('WebPixelRatio').get(),
        shouldDeferLoad: g,
        shouldEnableArmadilloStoryReply: e,
        shouldEnableLiveInStories: b,
      };
    }
    function b(a) {
      var b, e;
      b = (b = c('qex')._('1598')) != null ? b : !1;
      e = (e = c('qex')._('68')) != null ? e : !1;
      return {
        UFI2CommentsProvider_commentsKey:
          'StoriesSuspenseCarouselCenterPaneRootWithEntryPointQuery',
        blur: d('WebPixelRatio').get() * 10,
        bucketID: a || '',
        displayCommentsContextEnableComment: !0,
        displayCommentsContextIsAdPreview: !1,
        displayCommentsContextIsAggregatedShare: !1,
        displayCommentsContextIsStorySet: !1,
        displayCommentsFeedbackContext: null,
        feedbackSource: 65,
        feedLocation: 'COMET_MEDIA_VIEWER',
        focusCommentID: null,
        initialBucketID: a || '',
        initialLoad: !0,
        scale: d('WebPixelRatio').get(),
        shouldEnableArmadilloStoryReply: e,
        shouldEnableLiveInStories: b,
      };
    }
    function h() {
      var a;
      a = (a = c('qex')._('1585')) != null ? a : 4;
      return Math.ceil(a / 2) * 2;
    }
    function e(a, b) {
      var c = [];
      a != null && c.push(a);
      b != null && b.length > 0 && (c = b);
      a = Math.max(h(), c.length);
      return {
        blur: d('WebPixelRatio').get() * 10,
        bucketsCount: a,
        pinnedIDs: c,
        scale: d('WebPixelRatio').get(),
      };
    }
    g.getContentPaneParams = a;
    g.getCarouselContentPaneParams = b;
    g.getSidePaneParam = e;
  },
  98,
);
