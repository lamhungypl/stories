__d(
  'useCometGHLDisplayMonitor',
  ['CometGHLDisplayMonitor', 'GHLSurfaceContainerContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a, b) {
      var e = j(null),
        f = h(c('GHLSurfaceContainerContext'));
      i(
        function () {
          var c = null,
            g = Date.now();
          if (f === null) return;
          if (!a) return;
          c = d('CometGHLDisplayMonitor').m(f, {
            onLogBlockCallback: b,
            startTime: g,
            targetRef: e,
          });
          return function () {
            c && c.dispose();
          };
        },
        [f, a, b],
      );
      return e;
    }
    g['default'] = a;
  },
  98,
);
