__d(
  'CometOnRefresh.react',
  ['CometRouterRefreshKeyContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = h(c('CometRouterRefreshKeyContext')),
        d = j(b);
      i(
        function () {
          b != null && b !== d.current && ((d.current = b), a());
        },
        [b, a],
      );
    }
    g.useOnRefresh = a;
  },
  98,
);
