__d(
  'react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE',
  [
    'invariant',
    'Promise',
    'react',
    'react-relay/relay-hooks/QueryResource',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b(
        'react-relay/relay-hooks/QueryResource',
      ).getQueryResourceForEnvironment;
    c = h || (h = b('react'));
    d = c.useDebugValue;
    var j = c.useEffect,
      k = c.useMemo,
      l = c.useRef,
      m = c.useState,
      n = b('relay-runtime').__internal.fetchQuery,
      o = b('relay-runtime').areEqualSelectors,
      p = b('relay-runtime').createOperationDescriptor,
      q = b('relay-runtime').getPendingOperationsForFragment,
      r = b('relay-runtime').getSelector,
      s = b('relay-runtime').getVariablesFromFragment,
      t = b('relay-runtime').handlePotentialSnapshotErrors,
      u = b('relay-runtime').recycleNodesInto;
    function v(a) {
      if (a.kind === 'bailout') return !1;
      else if (a.kind === 'singular') return a.snapshot.isMissingData;
      else
        return a.snapshots.some(function (a) {
          return a.isMissingData;
        });
    }
    function w(a) {
      if (a.kind === 'bailout') return null;
      else if (a.kind === 'singular') {
        var b;
        return (b = a.snapshot.missingClientEdges) != null ? b : null;
      } else {
        b = null;
        for (
          var a = a.snapshots,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          if (e.missingClientEdges) {
            var f;
            b = (f = b) != null ? f : [];
            for (
              var f = e.missingClientEdges,
                e = Array.isArray(f),
                g = 0,
                f = e
                  ? f
                  : f[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var h;
              if (e) {
                if (g >= f.length) break;
                h = f[g++];
              } else {
                g = f.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              b.push(h);
            }
          }
        }
        return b;
      }
    }
    function x(a) {
      if (a.kind === 'bailout') return null;
      else if (a.kind === 'singular') {
        var b;
        return (b = a.snapshot.missingLiveResolverFields) != null ? b : null;
      } else {
        b = null;
        for (
          var a = a.snapshots,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          if (e.missingLiveResolverFields) {
            var f;
            b = (f = b) != null ? f : [];
            for (
              var f = e.missingLiveResolverFields,
                e = Array.isArray(f),
                g = 0,
                f = e
                  ? f
                  : f[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var h;
              if (e) {
                if (g >= f.length) break;
                h = f[g++];
              } else {
                g = f.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              b.push(h);
            }
          }
        }
        return b;
      }
    }
    function y(a, b) {
      if (b.kind === 'singular')
        t(a, b.snapshot.missingRequiredFields, b.snapshot.relayResolverErrors);
      else if (b.kind === 'plural')
        for (
          var b = b.snapshots,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
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
          t(a, e.missingRequiredFields, e.relayResolverErrors);
        }
    }
    function z(a, b) {
      if (b.kind === 'bailout') return null;
      var c = a.getStore().getEpoch();
      if (c === b.epoch) return null;
      if (b.kind === 'singular') {
        var d = a.lookup(b.snapshot.selector),
          e = u(b.snapshot.data, d.data);
        d = {
          data: e,
          isMissingData: d.isMissingData,
          missingClientEdges: d.missingClientEdges,
          missingLiveResolverFields: d.missingLiveResolverFields,
          seenRecords: d.seenRecords,
          selector: d.selector,
          missingRequiredFields: d.missingRequiredFields,
          relayResolverErrors: d.relayResolverErrors,
        };
        return [
          e !== b.snapshot.data,
          { kind: 'singular', snapshot: d, epoch: c },
        ];
      } else {
        e = !1;
        d = [];
        for (var f = 0; f < b.snapshots.length; f++) {
          var h = b.snapshots[f],
            i = a.lookup(h.selector),
            j = u(h.data, i.data);
          i = {
            data: j,
            isMissingData: i.isMissingData,
            missingClientEdges: i.missingClientEdges,
            missingLiveResolverFields: i.missingLiveResolverFields,
            seenRecords: i.seenRecords,
            selector: i.selector,
            missingRequiredFields: i.missingRequiredFields,
            relayResolverErrors: i.relayResolverErrors,
          };
          j !== h.data && (e = !0);
          d.push(i);
        }
        d.length === b.snapshots.length || g(0, 61222);
        return [e, { kind: 'plural', snapshots: d, epoch: c }];
      }
    }
    function A(a, b, c, d, e) {
      b = s(b, c);
      c = babelHelpers['extends']({}, b, { id: d.clientEdgeDestinationID });
      b = p(d.request, c, e == null ? void 0 : e.networkCacheConfig);
      d = i(a);
      return d.prepare(b, n(a, b), e == null ? void 0 : e.fetchPolicy);
    }
    function B(a, b, c) {
      if (b.kind === 'bailout') return function () {};
      else if (b.kind === 'singular') {
        var d = a.subscribe(b.snapshot, function (b) {
          c(function (c) {
            return c.kind !== 'singular' || c.snapshot.selector !== b.selector
              ? c
              : {
                  kind: 'singular',
                  snapshot: b,
                  epoch: a.getStore().getEpoch(),
                };
          });
        });
        return function () {
          d.dispose();
        };
      } else {
        var e = b.snapshots.map(function (b, d) {
          return a.subscribe(b, function (b) {
            c(function (c) {
              var e;
              if (
                c.kind !== 'plural' ||
                ((e = c.snapshots[d]) == null ? void 0 : e.selector) !==
                  b.selector
              )
                return c;
              e = [].concat(c.snapshots);
              e[d] = b;
              return {
                kind: 'plural',
                snapshots: e,
                epoch: a.getStore().getEpoch(),
              };
            });
          });
        });
        return function () {
          for (
            var a = e,
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
            d.dispose();
          }
        };
      }
    }
    function C(a, b) {
      if (b == null) return { kind: 'bailout' };
      else if (b.kind === 'PluralReaderSelector')
        return {
          kind: 'plural',
          snapshots: b.selectors.map(function (b) {
            return a.lookup(b);
          }),
          epoch: a.getStore().getEpoch(),
        };
      else
        return {
          kind: 'singular',
          snapshot: a.lookup(b),
          epoch: a.getStore().getEpoch(),
        };
    }
    function a(a, c, d, e, f) {
      var h,
        n = k(
          function () {
            return r(a, c);
          },
          [a, c],
        );
      h =
        (a == null ? void 0 : (h = a.metadata) == null ? void 0 : h.plural) ===
        !0;
      h
        ? c == null ||
          Array.isArray(c) ||
          g(
            0,
            13793,
            f != null ? ' for key `' + f + '`' : '',
            a.name,
            typeof c,
            a.name,
          )
        : Array.isArray(c) &&
          g(
            0,
            57387,
            f != null ? ' for key `' + f + '`' : '',
            a.name,
            typeof c,
            a.name,
          );
      c == null ||
        (h && Array.isArray(c) && c.length === 0) ||
        n != null ||
        g(
          0,
          37286,
          a.name,
          a.name,
          d,
          a.name,
          f == null ? 'a fragment reference' : 'the `' + f + '`',
          d,
        );
      var p = b('react-relay/relay-hooks/useRelayEnvironment')();
      f = m(function () {
        return C(p, n);
      });
      d = f[0];
      var s = f[1],
        t = d;
      f = m(t);
      d = f[0];
      f = f[1];
      var u = d;
      d = m(n);
      var D = d[0];
      d = d[1];
      var E = m(p),
        F = E[0];
      E = E[1];
      if (!o(n, D) || p !== F) {
        d(n);
        E(p);
        D = C(p, n);
        s(D);
        f(D);
        t = D;
        u = D;
      }
      var G = l(!1);
      j(
        function () {
          G.current = n;
        },
        [n],
      );
      if (((F = a.metadata) == null ? void 0 : F.hasClientEdges) === !0) {
        var H = k(
          function () {
            var d = w(t),
              b;
            if (d == null ? void 0 : d.length) {
              b = [];
              for (
                var d = d,
                  f = Array.isArray(d),
                  g = 0,
                  d = f
                    ? d
                    : d[
                        typeof Symbol === 'function'
                          ? Symbol.iterator
                          : '@@iterator'
                      ]();
                ;

              ) {
                var h;
                if (f) {
                  if (g >= d.length) break;
                  h = d[g++];
                } else {
                  g = d.next();
                  if (g.done) break;
                  h = g.value;
                }
                h = h;
                b.push(A(p, a, c, h, e));
              }
            }
            return b;
          },
          [t, p, a, c, e],
        );
        j(
          function () {
            var a = i(p);
            if (H == null ? void 0 : H.length) {
              var b = [];
              for (
                var c = H,
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
                var f;
                if (d) {
                  if (e >= c.length) break;
                  f = c[e++];
                } else {
                  e = c.next();
                  if (e.done) break;
                  f = e.value;
                }
                f = f;
                b.push(a.retain(f));
              }
              return function () {
                for (var a = 0; a < b.length; a++) {
                  var c = b[a];
                  c.dispose();
                }
              };
            }
          },
          [p, H],
        );
      }
      if (v(t)) {
        d = x(t);
        if (d != null && d.length > 0)
          throw b('Promise').all(
            d.map(function (a) {
              a = a.liveStateID;
              return p.getStore().getLiveResolverPromise(a);
            }),
          );
        if (!G.current || !o(G.current, n)) {
          n != null || g(0, 57388);
          E =
            n.kind === 'PluralReaderSelector' ? n.selectors[0].owner : n.owner;
          f = q(p, a, E);
          if (f) throw f.promise;
        }
        y(p, t);
      }
      j(
        function () {
          var a = u,
            b = z(p, u);
          if (b !== null) {
            var c = b[0];
            b = b[1];
            c && s(b);
            a = b;
          }
          return B(p, a, s);
        },
        [p, u],
      );
      if (h) {
        var I = c == null;
        D = k(
          function () {
            if (t.kind === 'bailout') return I ? null : [];
            else {
              t.kind === 'plural' || g(0, 61167);
              return t.snapshots.map(function (a) {
                return a.data;
              });
            }
          },
          [t, I],
        );
      } else
        t.kind === 'bailout'
          ? (D = null)
          : (t.kind === 'singular' || g(0, 61166), (D = t.snapshot.data));
      return D;
    }
    e.exports = a;
  },
  null,
);
