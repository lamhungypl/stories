__d(
  'useDelayedState',
  ['clearTimeout', 'emptyFunction', 'react', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      a = k(a);
      var b = a[0],
        d = a[1],
        e = j(null);
      i(function () {
        return function () {
          return c('clearTimeout')(e.current);
        };
      }, []);
      a = h(function (a, b, f) {
        b === void 0 && (b = 0),
          f === void 0 && (f = c('emptyFunction')),
          c('clearTimeout')(e.current),
          (e.current = null),
          b === 0
            ? (d(a), f(a))
            : (e.current = c('setTimeout')(function () {
                d(a), f(a), (e.current = null);
              }, b));
      }, []);
      return [b, a];
    }
    g['default'] = a;
  },
  98,
);
