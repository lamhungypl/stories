__d(
  'useIsMountedRef',
  ['react', 'useLayoutEffect_SAFE_FOR_SSR'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useRef;
    function a() {
      var a = h(!1);
      c('useLayoutEffect_SAFE_FOR_SSR')(function () {
        a.current = !0;
        return function () {
          a.current = !1;
        };
      }, []);
      return a;
    }
    g['default'] = a;
  },
  98,
);
