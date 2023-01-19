__d(
  'react-relay/relay-hooks/useEntryPointLoader',
  [
    'react',
    'react-relay/relay-hooks/loadEntryPoint',
    'react-relay/relay-hooks/loadQuery',
    'react-relay/relay-hooks/useIsMountedRef',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('react-relay/relay-hooks/loadQuery').useTrackLoadQueryInRender;
    c = g || (g = b('react'));
    var i = c.useCallback,
      j = c.useEffect,
      k = c.useRef,
      l = c.useState,
      m = { kind: 'NullEntryPointReference' };
    function a(a, c, d) {
      var e;
      h();
      e =
        (e =
          d == null
            ? void 0
            : (e = d.TEST_ONLY__initialEntryPointData) == null
            ? void 0
            : e.entryPointReference) != null
          ? e
          : m;
      d =
        (d =
          d == null
            ? void 0
            : (d = d.TEST_ONLY__initialEntryPointData) == null
            ? void 0
            : d.entryPointParams) != null
          ? d
          : null;
      var f = b('react-relay/relay-hooks/useIsMountedRef')(),
        g = k(new Set([e]));
      e = l(e);
      var n = e[0],
        o = e[1];
      e = l(d);
      var p = e[0],
        q = e[1];
      d = i(
        function () {
          if (f.current) {
            var a = { kind: 'NullEntryPointReference' };
            g.current.add(a);
            o(a);
          }
        },
        [o, f],
      );
      var r = i(
          function (d) {
            if (f.current) {
              var e = b('react-relay/relay-hooks/loadEntryPoint')(a, c, d);
              g.current.add(e);
              o(e);
              q(d);
            }
          },
          [a, c, o, f],
        ),
        s = k(!1);
      j(function () {
        return function () {
          s.current = !0;
        };
      }, []);
      j(
        function () {
          if (s.current === !0) {
            s.current = !1;
            n.kind !== 'NullEntryPointReference' && p != null && r(p);
            return;
          }
          var a = g.current;
          if (f.current)
            for (
              var b = a,
                c = Array.isArray(b),
                d = 0,
                b = c
                  ? b
                  : b[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var e;
              if (c) {
                if (d >= b.length) break;
                e = b[d++];
              } else {
                d = b.next();
                if (d.done) break;
                e = d.value;
              }
              e = e;
              if (e === n) break;
              a['delete'](e);
              e.kind !== 'NullEntryPointReference' && e.dispose();
            }
        },
        [n, p, r, f],
      );
      j(function () {
        return function () {
          for (
            var a = g.current,
              b = Array.isArray(a),
              c = 0,
              a = b
                ? a
                : a[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var d;
            if (b) {
              if (c >= a.length) break;
              d = a[c++];
            } else {
              c = a.next();
              if (c.done) break;
              d = c.value;
            }
            d = d;
            d.kind !== 'NullEntryPointReference' && d.dispose();
          }
        };
      }, []);
      return [n.kind === 'NullEntryPointReference' ? null : n, r, d];
    }
    e.exports = a;
  },
  null,
);
