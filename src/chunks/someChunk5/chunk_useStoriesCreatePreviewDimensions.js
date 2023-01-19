__d(
  'useStoriesCreatePreviewDimensions',
  [
    'CometAppNavigationConstants',
    'CometRouteRenderType',
    'StoriesCreateConstants',
    'useCometWindowSize',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var e = d('StoriesCreateConstants').PREVIEW_DIMENSIONS
          .COMET_PUSH_VIEW_HEIGHT,
        f = d('StoriesCreateConstants').PREVIEW_DIMENSIONS
          .CONTAINER_HORIZONTAL_PADDING,
        g = d('StoriesCreateConstants').PREVIEW_DIMENSIONS.CONTAINER_MAX_WIDTH,
        h = d('StoriesCreateConstants').PREVIEW_DIMENSIONS
          .CONTAINER_VERTICAL_PADDING,
        i = d('StoriesCreateConstants').PREVIEW_DIMENSIONS
          .CONTENT_HEADER_HEIGHT,
        j = d('StoriesCreateConstants').PREVIEW_DIMENSIONS
          .CONTENT_HORIZONTAL_PADDING,
        k = d('StoriesCreateConstants').PREVIEW_DIMENSIONS
          .CONTENT_VERTICAL_PADDING,
        l = d('StoriesCreateConstants').PREVIEW_DIMENSIONS.SIDE_PANE_WIDTH,
        m = d('CometRouteRenderType').useIsPushView(),
        n = c('useCometWindowSize')(),
        o = n.innerHeight;
      n = n.innerWidth;
      g = Math.min(g, n - f - j - l);
      n = o - h - k - i - a - b;
      n -= m ? e : d('CometAppNavigationConstants').HEADER_HEIGHT;
      return { containerRectHeight: n, containerRectWidth: g };
    }
    g['default'] = a;
  },
  98,
);
