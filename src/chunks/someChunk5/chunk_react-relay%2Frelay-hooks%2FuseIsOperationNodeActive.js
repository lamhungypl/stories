__d(
  'react-relay/relay-hooks/useIsOperationNodeActive',
  [
    'invariant',
    'react',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    c = h || b('react');
    var i = b('relay-runtime').__internal.getObservableForActiveRequest,
      j = b('relay-runtime').getSelector,
      k = c.useEffect,
      l = c.useState,
      m = c.useMemo;
    function a(a, c) {
      var d = b('react-relay/relay-hooks/useRelayEnvironment')(),
        e = m(
          function () {
            var b = j(a, c);
            if (b == null) return null;
            b.kind === 'SingularReaderSelector' || g(0, 21191);
            return i(d, b.owner);
          },
          [d, a, c],
        ),
        f = l(e != null),
        h = f[0],
        n = f[1];
      k(
        function () {
          var a;
          n(e != null);
          if (e != null) {
            var b = function () {
              n(!1);
            };
            a = e.subscribe({ complete: b, error: b });
          }
          return function () {
            a && a.unsubscribe();
          };
        },
        [e],
      );
      return h;
    }
    e.exports = a;
  },
  null,
);
