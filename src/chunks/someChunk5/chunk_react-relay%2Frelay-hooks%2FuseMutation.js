__d(
  'react-relay/relay-hooks/useMutation',
  [
    'react',
    'react-relay/relay-hooks/useIsMountedRef',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    var h = b('relay-runtime').commitMutation,
      i = c.useState,
      j = c.useEffect,
      k = c.useRef,
      l = c.useCallback;
    function a(a, c) {
      c === void 0 && (c = h);
      var d = b('react-relay/relay-hooks/useRelayEnvironment')(),
        e = b('react-relay/relay-hooks/useIsMountedRef')(),
        f = k(d),
        g = k(a),
        m = k(new Set()),
        n = i(!1),
        o = n[0],
        p = n[1],
        q = l(
          function (b) {
            f.current === d &&
              g.current === a &&
              (m.current['delete'](b), e.current && p(m.current.size > 0));
          },
          [d, e, a],
        );
      j(
        function () {
          (f.current !== d || g.current !== a) &&
            ((m.current = new Set()),
            e.current && p(!1),
            (f.current = d),
            (g.current = a));
        },
        [d, e, a],
      );
      n = l(
        function (b) {
          e.current && p(!0);
          var f = c(
            d,
            babelHelpers['extends']({}, b, {
              mutation: a,
              onCompleted: function (a, c) {
                q(f), b.onCompleted == null ? void 0 : b.onCompleted(a, c);
              },
              onError: function (a) {
                q(f), b.onError == null ? void 0 : b.onError(a);
              },
              onUnsubscribe: function () {
                q(f), b.onUnsubscribe == null ? void 0 : b.onUnsubscribe();
              },
              onNext: function () {
                b.onNext == null ? void 0 : b.onNext();
              },
            }),
          );
          m.current.add(f);
          return f;
        },
        [q, c, d, e, a],
      );
      return [n, o];
    }
    e.exports = a;
  },
  null,
);
