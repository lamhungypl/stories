__d(
  'useCometLexicalSubscription',
  ['react', 'useLayoutEffect_SAFE_FOR_SSR', 'useUnsafeRef_DEPRECATED'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useState;
    function a(a) {
      var b = c('useUnsafeRef_DEPRECATED')(a.initialValueFn()),
        d = h(b.current),
        e = d[0],
        f = d[1];
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var c = a.initialValueFn,
            d = a.subscribe;
          c = c();
          b.current !== c && ((b.current = c), f(c));
          return d(function (a) {
            (b.current = a), f(a);
          });
        },
        [a],
      );
      return e;
    }
    g['default'] = a;
  },
  98,
);
