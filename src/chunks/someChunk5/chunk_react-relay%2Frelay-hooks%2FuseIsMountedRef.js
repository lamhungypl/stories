__d(
  'react-relay/relay-hooks/useIsMountedRef',
  ['react'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    var h = c.useEffect,
      i = c.useRef;
    function a() {
      var a = i(!0);
      h(function () {
        a.current = !0;
        return function () {
          a.current = !1;
        };
      }, []);
      return a;
    }
    e.exports = a;
  },
  null,
);
