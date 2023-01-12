__d(
  'useStoriesCreateObjectAlign',
  ['StoriesCreateConstants', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = b.useState;
    function m(a) {
      var b, c, d;
      b = (b = a == null ? void 0 : a.width) != null ? b : 0;
      c = (c = a == null ? void 0 : a.height) != null ? c : 0;
      d = (d = a == null ? void 0 : a.left) != null ? d : 0;
      a = (a = a == null ? void 0 : a.top) != null ? a : 0;
      return { x: d + b / 2, y: a + c / 2 };
    }
    var n = 0,
      o = 0;
    function a(a, b, c, e) {
      var f = l(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE),
        g = f[0],
        p = f[1];
      f = l(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE);
      var q = f[0],
        r = f[1];
      f = l(0);
      var s = f[0],
        t = f[1];
      f = m(a);
      a = m(b);
      var u = k(q),
        v = k(g),
        w = f.x - a.x,
        x = h(
          function () {
            var a;
            Math.abs(w) <=
            ((a = c == null ? void 0 : c.alignmentZone) != null ? a : o)
              ? (p(
                  d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.HORIZONTAL,
                ),
                r(
                  d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.HORIZONTAL,
                ))
              : p(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE);
          },
          [c == null ? void 0 : c.alignmentZone, w],
        );
      i(
        function () {
          e ? x() : p(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE);
        },
        [e, x],
      );
      i(function () {
        g !== v.current &&
          (c == null ? void 0 : c.onOverlayAlign(g), (v.current = g));
      });
      return j(
        function () {
          return function (a, b, e, f) {
            switch (q) {
              case d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE:
                return { alignDx: e, alignDy: f };
              case d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE
                .HORIZONTAL:
                if (q !== u.current) t(a - w), (u.current = q);
                else if (
                  Math.abs(a - s) >
                  ((b = c == null ? void 0 : c.alignmentZone) != null ? b : o)
                ) {
                  r(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE);
                  u.current = d(
                    'StoriesCreateConstants',
                  ).OVERLAY_ALIGNMENT_TYPE.NONE;
                  return { alignDx: e, alignDy: f };
                }
                return { alignDx: n, alignDy: f };
              default:
                return { alignDx: e, alignDy: f };
            }
          };
        },
        [c == null ? void 0 : c.alignmentZone, q, s, w],
      );
    }
    g['default'] = a;
  },
  98,
);
