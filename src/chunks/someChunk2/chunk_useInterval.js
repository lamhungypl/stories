__d(
  'useInterval',
  ['clearInterval', 'react', 'setIntervalAcrossTransitions'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function a(a, b, d) {
      d === void 0 && (d = []);
      var e = i(a);
      h(
        function () {
          e.current = a;
        },
        [a],
      );
      var f = a != null;
      h(function () {
        if (!f || b <= 0) return;
        var a = c('setIntervalAcrossTransitions')(function () {
          var a = e.current;
          if (a == null) return;
          a();
        }, b);
        return function () {
          return c('clearInterval')(a);
        };
      }, [f, b].concat(d));
    }
    g['default'] = a;
  },
  98,
);
