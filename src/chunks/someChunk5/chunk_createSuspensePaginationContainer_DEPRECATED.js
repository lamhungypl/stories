__d(
  'createSuspensePaginationContainer_DEPRECATED',
  [
    'areEqual',
    'createSuspenseFragmentContainer_DEPRECATED',
    'forEachObject',
    'mapObject',
    'react',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
    'unrecoverableViolation',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useReducer,
      m = b.useRef,
      n = 'forward';
    function a(a, b, e) {
      var f = a.displayName || a.name || 'Unknown',
        g = c('mapObject')(b, d('relay-runtime').getFragment),
        h = r(g),
        i = d('relay-runtime').getRequest(e.query);
      h = p(a, f, h.direction, s(h), e.getVariables);
      h = c('createSuspenseFragmentContainer_DEPRECATED')(h, b);
      return o(a, f, g, e.getFragmentRefsFromResponse, i, h);
    }
    function o(a, b, e, f, g, k) {
      var n = 'RelaySuspensePaginationContainer(' + b + ')';
      a = function (a, b) {
        var o = c('react-relay/relay-hooks/useRelayEnvironment')(),
          p = {};
        c('forEachObject')(e, function (b, c) {
          b = d('relay-runtime').getSelector(b, a[c]);
          b =
            b != null && b.kind === 'PluralReaderSelector'
              ? (c =
                  (c = b.selectors[0]) == null ? void 0 : c.owner.variables) !=
                null
                ? c
                : {}
              : (c = b == null ? void 0 : b.owner.variables) != null
              ? c
              : {};
          p = babelHelpers['extends']({}, p, b);
        });
        var r = d('relay-runtime').getDataIDsFromObject(e, a),
          s = l(q, {
            dataIDs: r,
            mirroredEnvironment: o,
            mirroredParentVariables: p,
            refetchFragmentRefs: {},
            refetchVariables: null,
          }),
          t = s[0],
          u = s[1],
          v = m(!1),
          w = m(null),
          x = function () {
            w.current && (w.current.dispose(), (w.current = null));
          };
        j(function () {
          return function () {
            (v.current = !0), x();
          };
        }, []);
        (o !== t.mirroredEnvironment ||
          !c('areEqual')(p, t.mirroredParentVariables) ||
          !c('areEqual')(t.dataIDs, r)) &&
          (x(),
          u({ dataIDs: r, environment: o, parentVariables: p, type: 'reset' }));
        s = i(
          function (a, b) {
            if (v.current === !0) {
              c('warning')(
                !1,
                'Relay: Unexpected fetch on unmounted component `%s`. It looks like some instances of your container still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.',
                n,
              );
              return null;
            }
            a = d('relay-runtime').__internal.getOperationVariables(
              g.operation,
              g.params.providedVariables,
              a,
            );
            var e = b && b.force ? { force: !0 } : {},
              h = d('relay-runtime').createOperationDescriptor(g, a, e),
              i = null,
              j = o.retain(h),
              k = {
                dispose: function () {
                  var a = i;
                  i = null;
                  a && a.unsubscribe();
                  j.dispose();
                },
              };
            e = function () {
              var a = {
                complete: function () {
                  x(),
                    u({ type: 'complete' }),
                    b && b.onComplete && b.onComplete(null);
                },
                error: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  x(),
                    u({ type: 'abort' }),
                    b && b.onComplete && b.onComplete(a);
                }),
                next: function () {
                  var a = o.lookup(h.fragment);
                  u({ fragmentRefs: f(a.data), type: 'next' });
                },
                unsubscribe: function () {
                  if (v.current === !0) return;
                  x();
                  u({ type: 'abort' });
                },
              };
              i = d('relay-runtime').__internal.fetchQuery(o, h).subscribe(a);
              return k;
            };
            x();
            w.current = e();
            u({ refetchVariables: a, type: 'fetch' });
            return k;
          },
          [o],
        );
        return h.jsx(
          k,
          babelHelpers['extends']({}, a, t.refetchFragmentRefs, {
            forwardedRef: b,
            isLoading: w.current != null,
            parentVariables: (r = t.refetchVariables) != null ? r : p,
            refetch: s,
          }),
        );
      };
      a.displayName = n;
      b = h.forwardRef(a);
      return b;
    }
    function p(a, b, e, f, g) {
      return function (j) {
        var l,
          m = j.forwardedRef,
          o = j.isLoading,
          p = j.parentVariables,
          q = j.refetch;
        j.relay;
        var r = babelHelpers.objectWithoutPropertiesLoose(j, [
            'forwardedRef',
            'isLoading',
            'parentVariables',
            'refetch',
            'relay',
          ]),
          s = c('react-relay/relay-hooks/useRelayEnvironment')();
        j = f(r);
        var u = t(b, e, j),
          v = i(
            function (a, b) {
              if (u == null || !u.hasMore) {
                b && b.onComplete && b.onComplete(null);
                return null;
              }
              var f = d('relay-runtime').ConnectionInterface.get(),
                h = f.END_CURSOR;
              f = f.START_CURSOR;
              var i = u.cursor;
              c('warning')(
                i,
                'Relay: Cannot `loadMore` without valid `%s` (got `%s`)',
                e === n ? h : f,
                i,
              );
              return q(g(r, { count: a, cursor: i }, p), b);
            },
            [u, q, r, p],
          ),
          w = i(
            function (a, b, c) {
              return q(
                g(
                  r,
                  { count: a, cursor: null },
                  babelHelpers['extends']({}, p, b || {}),
                ),
                babelHelpers['extends']({}, c, { force: !0 }),
              );
            },
            [q, r, p],
          ),
          x = !!(u && u.hasMore && u.cursor);
        j = k(
          function () {
            return {
              environment: s,
              hasMore: x,
              isLoading: o,
              loadMore: v,
              refetchConnection: w,
            };
          },
          [s, x, o, v, w],
        );
        return h.jsx(
          a,
          babelHelpers['extends']({}, r, {
            ref: (l = r.componentRef) != null ? l : m,
            relay: j,
          }),
        );
      };
    }
    function q(a, b) {
      var c;
      switch (b.type) {
        case 'reset':
          c = {
            dataIDs: b.dataIDs,
            mirroredEnvironment: b.environment,
            mirroredParentVariables: b.parentVariables,
            refetchFragmentRefs: {},
            refetchVariables: null,
          };
          break;
        case 'fetch':
          c = babelHelpers['extends']({}, a, {
            refetchVariables: b.refetchVariables,
          });
          break;
        case 'abort':
          c = babelHelpers['extends']({}, a);
          break;
        case 'next':
          c = babelHelpers['extends']({}, a, {
            refetchFragmentRefs: b.fragmentRefs,
          });
          break;
        case 'complete':
        default:
          c = babelHelpers['extends']({}, a);
          break;
      }
      return c;
    }
    function r(a) {
      var b = null;
      for (var d in a) {
        var e = a[d];
        e = e && e.metadata && e.metadata.connection;
        if (e != null) {
          if (!Array.isArray(e))
            throw c('unrecoverableViolation')(
              'SuspensePaginationContainer: Expected metadata to be array, got ' +
                ('`' + typeof e + '` instead.'),
              'relay',
            );
          if (e.length !== 1)
            throw c('unrecoverableViolation')(
              'SuspensePaginationContainer: Only a single @connection is ' +
                ('supported, `' + d + '` has ' + e.length + '.'),
              'relay',
            );
          if (b)
            throw c('unrecoverableViolation')(
              'SuspensePaginationContainer: Only a single fragment with @connection is supported.',
              'relay',
            );
          b = babelHelpers['extends']({}, e[0], { fragmentName: d });
        }
      }
      if (b === null)
        throw c('unrecoverableViolation')(
          'SuspensePaginationContainer: A @connection directive must be present.',
          'relay',
        );
      return b;
    }
    function s(a) {
      var b = a.path;
      if (!b)
        throw c('unrecoverableViolation')(
          'SuspensePaginationContainer: Unable to synthesize a getConnectionFromProps function.',
          'relay',
        );
      return function (c) {
        c = c[a.fragmentName];
        for (var d = 0; d < b.length; d++) {
          if (!c || typeof c !== 'object') return null;
          c = c[b[d]];
        }
        return c;
      };
    }
    function t(a, b, e) {
      if (e == null) return null;
      var f = d('relay-runtime').ConnectionInterface.get(),
        g = f.EDGES,
        h = f.END_CURSOR,
        i = f.HAS_NEXT_PAGE,
        j = f.HAS_PREV_PAGE,
        k = f.PAGE_INFO;
      f = f.START_CURSOR;
      if (typeof e !== 'object')
        throw c('unrecoverableViolation')(
          'SuspensePaginationContainer: Expected `getConnectionFromProps()` in ' +
            ('`' + a + '` to return `null` or a plain object with ') +
            (g + ' and ' + k + ' properties, got `' + e + '`.'),
          'relay',
        );
      var l = e[g];
      e = e[k];
      if (l == null || e == null) return null;
      if (!Array.isArray(l))
        throw c('unrecoverableViolation')(
          'SuspensePaginationContainer: Expected `getConnectionFromProps()` in ' +
            ('`' + a + '` to return an object with ' + g + ': Array, got ') +
            ('`' + l + '`.'),
          'relay',
        );
      if (typeof e !== 'object')
        throw c('unrecoverableViolation')(
          'SuspensePaginationContainer: Expected `getConnectionFromProps()` in ' +
            ('`' + a + '` to return an object with ' + k + ': Object, ') +
            ('got `' + e + '`.'),
          'relay',
        );
      g = b === n ? e[i] : e[j];
      e = b === n ? e[h] : e[f];
      if (typeof g !== 'boolean' || (l.length !== 0 && e === void 0)) {
        c('warning')(
          !1,
          'Relay: Cannot paginate without %s fields in `%s`. Be sure to fetch %s (got `%s`) and %s (got `%s`).',
          k,
          a,
          b === n ? i : j,
          g,
          b === n ? h : f,
          e,
        );
        return null;
      }
      return { cursor: e, edgeCount: l.length, hasMore: g };
    }
    g['default'] = a;
  },
  98,
);
