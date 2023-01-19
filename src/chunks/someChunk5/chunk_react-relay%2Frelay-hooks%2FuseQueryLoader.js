__d(
  'react-relay/relay-hooks/useQueryLoader',
  [
    'react',
    'react-relay/relay-hooks/loadQuery',
    'react-relay/relay-hooks/useIsMountedRef',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('react-relay/relay-hooks/loadQuery').loadQuery,
      i = b('react-relay/relay-hooks/loadQuery').useTrackLoadQueryInRender;
    c = g || (g = b('react'));
    var j = c.useCallback,
      k = c.useEffect,
      l = c.useRef,
      m = c.useState,
      n = b('relay-runtime').getRequest,
      o = { kind: 'NullQueryReference' };
    function p(a) {
      if (a.kind === 'PreloadableConcreteRequest')
        return a.params.metadata.live !== void 0;
      a = n(a);
      return a.params.metadata.live !== void 0;
    }
    function a(a, c) {
      var d = (c = c) != null ? c : o,
        e = b('react-relay/relay-hooks/useRelayEnvironment')();
      i();
      var f = b('react-relay/relay-hooks/useIsMountedRef')(),
        g = l(new Set([d]));
      c = m(function () {
        return d;
      });
      var n = c[0],
        q = c[1];
      c = m(function () {
        return d;
      });
      var r = c[0];
      c = c[1];
      d !== r && (g.current.add(d), c(d), q(d));
      r = j(
        function () {
          f.current && (g.current.add(o), q(o));
        },
        [f],
      );
      var s = j(
          function (b, c) {
            var d =
              c != null &&
              Object.prototype.hasOwnProperty.call(c, '__environment')
                ? {
                    fetchPolicy: c.fetchPolicy,
                    networkCacheConfig: c.networkCacheConfig,
                    __nameForWarning: c.__nameForWarning,
                  }
                : c;
            if (f.current) {
              c = h(
                (c = c == null ? void 0 : c.__environment) != null ? c : e,
                a,
                b,
                d,
              );
              g.current.add(c);
              q(c);
            }
          },
          [e, a, q, f],
        ),
        t = l(!1);
      k(function () {
        return function () {
          t.current = !0;
        };
      }, []);
      k(
        function () {
          if (t.current === !0) {
            t.current = !1;
            n.kind !== 'NullQueryReference' &&
              s(n.variables, {
                fetchPolicy: n.fetchPolicy,
                networkCacheConfig: n.networkCacheConfig,
              });
            return;
          }
          var b = g.current;
          if (f.current)
            for (
              var c = b,
                d = Array.isArray(c),
                e = 0,
                c = d
                  ? c
                  : c[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var h;
              if (d) {
                if (e >= c.length) break;
                h = c[e++];
              } else {
                e = c.next();
                if (e.done) break;
                h = e.value;
              }
              h = h;
              if (h === n) break;
              b['delete'](h);
              h.kind !== 'NullQueryReference' &&
                (p(a)
                  ? h.dispose && h.dispose()
                  : h.releaseQuery && h.releaseQuery());
            }
        },
        [n, f, s, a],
      );
      k(
        function () {
          return function () {
            for (
              var b = g.current,
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
              e.kind !== 'NullQueryReference' &&
                (p(a)
                  ? e.dispose && e.dispose()
                  : e.releaseQuery && e.releaseQuery());
            }
          };
        },
        [a],
      );
      return [n.kind === 'NullQueryReference' ? null : n, s, r];
    }
    e.exports = a;
  },
  null,
);
