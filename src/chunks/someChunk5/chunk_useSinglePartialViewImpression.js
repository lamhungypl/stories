__d(
  'useSinglePartialViewImpression',
  ['react', 'usePartialViewImpression'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useRef;
    function a(a) {
      var b = a.onImpressionEnd,
        d = a.onImpressionStart,
        e = i(!1),
        f = i(!1);
      a = h(
        function (a) {
          if (f.current === !0) return;
          b && b(a);
          f.current = !0;
        },
        [b],
      );
      var g = h(
        function (a) {
          if (e.current === !0) return;
          d && d(a);
          e.current = !0;
        },
        [d],
      );
      return c('usePartialViewImpression')({
        onImpressionEnd: a,
        onImpressionStart: g,
      });
    }
    g['default'] = a;
  },
  98,
);
