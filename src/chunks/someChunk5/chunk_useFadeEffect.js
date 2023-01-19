__d(
  'useFadeEffect',
  [
    'clearTimeout',
    'react',
    'setTimeout',
    'useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED',
    'useLayoutEffect_SAFE_FOR_SSR',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useReducer,
      j = b.useRef,
      k = 1e3;
    function l(a, b) {
      switch (b.type) {
        case 'start':
          return { isTransitioning: !0, shouldBeVisible: b.shouldBeVisible };
        case 'finish':
          return { isTransitioning: !1, shouldBeVisible: a.shouldBeVisible };
        default:
          return a;
      }
    }
    function a(a) {
      var b = j(null),
        d = i(l, { isTransitioning: !1, shouldBeVisible: !1 }),
        e = d[0],
        f = e.isTransitioning;
      e = e.shouldBeVisible;
      var g = d[1],
        m = j(null),
        n = j(null);
      c('useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED')(function () {
        return function () {
          m.current != null && c('clearTimeout')(m.current),
            n.current != null && window.cancelAnimationFrame(n.current);
        };
      }, []);
      var o = h(function () {
          g({ type: 'finish' }),
            m.current != null && c('clearTimeout')(m.current),
            (m.current = null);
        }, []),
        p = h(
          function (a) {
            n.current != null && window.cancelAnimationFrame(n.current),
              (n.current = window.requestAnimationFrame(function () {
                g({ shouldBeVisible: a, type: 'start' }),
                  (n.current = null),
                  m.current != null && c('clearTimeout')(m.current),
                  (m.current = c('setTimeout')(o, k));
              }));
          },
          [o],
        ),
        q = j(!1);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          q.current !== a && (!a || b.current != null) && p(a), (q.current = a);
        },
        [a, p],
      );
      d = h(
        function (a) {
          var c = b.current;
          b.current = a;
          a != null
            ? (a.addEventListener != null &&
                (a.addEventListener('transitionend', o),
                a.addEventListener('webkitTransitionEnd', o)),
              q.current === !0 && p(!0))
            : c != null &&
              c.removeEventListener != null &&
              (c.removeEventListener('transitionend', o),
              c.removeEventListener('webkitTransitionEnd', o));
        },
        [o, p],
      );
      f = f || e || a;
      return [f, e, d];
    }
    g['default'] = a;
  },
  98,
);
