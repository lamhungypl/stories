__d(
  'ReactUseEvent.react',
  [
    'ReactDOMComet',
    'gkx',
    'react',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react').useRef;
    function a(a, b) {
      var e = c('useUnsafeRef_DEPRECATED')(null),
        f = e.current;
      c('gkx')('1703328') && b && (b.passive = void 0);
      if (f === null) {
        var g = d('ReactDOMComet').unstable_createEventHandle(a, b),
          h = new Map();
        f = {
          setListener: function (a, b) {
            var c = h.get(a);
            c !== void 0 && c();
            if (b === null) {
              h['delete'](a);
              return;
            }
            c = g(a, b);
            h.set(a, c);
          },
          clear: function () {
            var a = Array.from(h.values());
            for (var b = 0; b < a.length; b++) a[b]();
            h.clear();
          },
        };
        e.current = f;
      }
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          return function () {
            f !== null && f.clear(), (e.current = null);
          };
        },
        [f],
      );
      return f;
    }
    g['default'] = a;
  },
  98,
);
