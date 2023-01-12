__d(
  'useStoriesCreateMediaFrame',
  ['react', 'useStoriesCreatePreviewDimensions'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useState;
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.footerHeight;
      a = a.headerHeight;
      var d = i(0),
        e = d[0],
        f = d[1];
      d = i(0);
      var g = d[0],
        j = d[1];
      d = c('useStoriesCreatePreviewDimensions')(
        (d = a) != null ? d : 0,
        (a = b) != null ? a : 0,
      );
      var k = d.containerRectHeight,
        l = d.containerRectWidth;
      h(
        function () {
          var a = k * 0.5625;
          j(a);
          f(Math.max(l - a, 0) / 2);
        },
        [k, l],
      );
      return {
        border: e,
        containerRectHeight: k,
        containerRectWidth: l,
        frameWidth: g,
      };
    }
    g['default'] = a;
  },
  98,
);
