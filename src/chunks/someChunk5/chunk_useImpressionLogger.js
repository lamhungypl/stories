__d(
  'useImpressionLogger',
  [
    'BaseViewportMarginsContext',
    'getIntersectionMarginFromViewportMargin',
    'intersectionObserverEntryIsIntersecting',
    'react',
    'useIntersectionObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    b = d('react');
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef;
    function a(a, b) {
      var d = i(c('BaseViewportMarginsContext')),
        e = j(!1),
        f = h(
          function (d) {
            d = c('intersectionObserverEntryIsIntersecting')(d);
            if (e.current !== d) {
              e.current = d;
              if (e.current) {
                var f = new Date();
                e.current = !0;
                a.onReady(function (a) {
                  b(a, f);
                });
              }
            }
          },
          [b, a],
        );
      return c('useIntersectionObserver')(f, {
        root: null,
        rootMargin: c('getIntersectionMarginFromViewportMargin')(d),
        threshold: 0,
      });
    }
    g['default'] = a;
  },
  98,
);
