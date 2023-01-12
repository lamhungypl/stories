__d(
  'CometSSRBackgroundImageUtils',
  ['CometSSRPreloadImageCollection', 'ExecutionEnvironment'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b;
      if (a === null || c('ExecutionEnvironment').canUseDOM) return;
      b = (b = (b = a.spi) != null ? b : a._spi) != null ? b : a.uri;
      if (!b) return;
      d('CometSSRPreloadImageCollection').addImage(b);
    }
    g.processSpritedImagesForSSRPreload = a;
  },
  98,
);
