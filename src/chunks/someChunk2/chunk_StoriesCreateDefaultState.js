__d(
  'StoriesCreateDefaultState',
  ['uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function getStoriesCreateInitialState() {
      return {
        composerSessionID: c('uuid')(),
        ctaLinkData: {
          ctaType: null,
          link: null,
          linkInputError: !1,
          page: null,
        },
        formData: { step: 0 },
        isObjectRotating: !1,
        isUploading: !1,
        mediaAttachments: null,
        overlayRef: { current: null },
        photoData: {
          bounds: { height: 0, width: 0, x: 0, y: 0 },
          displayedURI: null,
          offset: { dx: 0, dy: 0 },
          rotation: 0,
          scale: 1,
        },
        stickerData: {
          editingID: null,
          musicSticker: null,
          productSticker: null,
          shouldShowEntrypoint: !1,
          shouldShowGrid: !1,
          shouldShowProductTypeahead: !1,
          stickers: [],
        },
        storyID: 'add_later',
        videoData: {
          currentDuration: 0,
          duration: 0,
          initialDuration: 0,
          isPreviewable: null,
          isTrimming: !1,
          lastMutedUpdateReason: null,
          lastPlaybackUpdateReason: null,
          muted: null,
          paused: null,
          startTime: 0,
        },
      };
    }
    g.getStoriesCreateInitialState = getStoriesCreateInitialState;
  },
  98,
);
