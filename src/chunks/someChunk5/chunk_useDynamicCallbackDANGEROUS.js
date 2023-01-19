__d(
  'useDynamicCallbackDANGEROUS',
  ['react', 'useLayoutEffect_SAFE_FOR_SSR'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useRef;
    function a(a) {
      var b = i(a);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          b.current = a;
        },
        [a],
      );
      return h(function () {
        return b.current.apply(b, arguments);
      }, []);
    }
    g['default'] = a;
  },
  98,
);
