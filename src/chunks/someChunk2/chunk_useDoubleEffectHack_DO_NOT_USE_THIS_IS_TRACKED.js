__d(
  'useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED',
  ['clearTimeout', 'err', 'react', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function a(a, b) {
      var d = i(null),
        e = i();
      h(function () {
        var b = d.current;
        b !== null
          ? (c('clearTimeout')(b), (d.current = null))
          : (e.current = a());
        return function () {
          function a() {
            d.current = null;
            var a = e.current;
            a && a();
          }
          d.current = c('setTimeout')(a, 0);
        };
      }, []);
    }
    e = h;
    f = e;
    g['default'] = f;
  },
  98,
);
