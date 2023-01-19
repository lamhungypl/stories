__d(
  'useDebouncedComet',
  ['CometDebounce', 'react', 'useLayoutEffect_SAFE_FOR_SSR', 'useStable'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function a(a, b) {
      var d = i(a);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          d.current = a;
        },
        [a],
      );
      var e = c('useStable')(function () {
        return c('CometDebounce')(function () {
          d.current.apply(void 0, arguments);
        }, b);
      });
      h(function () {
        return function () {
          e.reset();
        };
      }, []);
      return e;
    }
    g['default'] = a;
  },
  98,
);
