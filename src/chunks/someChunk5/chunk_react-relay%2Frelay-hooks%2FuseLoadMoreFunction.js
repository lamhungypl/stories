__d(
  'react-relay/relay-hooks/useLoadMoreFunction',
  [
    'invariant',
    'react',
    'react-relay/relay-hooks/useFetchTrackingRef',
    'react-relay/relay-hooks/useIsMountedRef',
    'react-relay/relay-hooks/useIsOperationNodeActive',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    c = h || b('react');
    var i = c.useCallback,
      j = c.useEffect,
      k = c.useState,
      l = b('relay-runtime').ConnectionInterface,
      m = b('relay-runtime').__internal.fetchQuery,
      n = b('relay-runtime').createOperationDescriptor,
      o = b('relay-runtime').getPaginationVariables,
      p = b('relay-runtime').getSelector,
      q = b('relay-runtime').getValueAtPath;
    function a(a) {
      var c = a.direction,
        d = a.fragmentNode,
        e = a.fragmentRef,
        f = a.fragmentIdentifier,
        h = a.fragmentData,
        l = a.connectionPathInFragmentData,
        q = a.paginationRequest,
        s = a.paginationMetadata,
        t = a.componentDisplayName,
        u = a.observer,
        v = a.onReset,
        w = a.identifierField,
        x = b('react-relay/relay-hooks/useRelayEnvironment')();
      a = b('react-relay/relay-hooks/useFetchTrackingRef')();
      var y = a.isFetchingRef,
        z = a.startFetch,
        A = a.disposeFetch,
        B = a.completeFetch,
        C = w != null && h != null && typeof h === 'object' ? h[w] : null,
        D = b('react-relay/relay-hooks/useIsMountedRef')();
      a = k(x);
      var E = a[0];
      a = a[1];
      var F = k(f),
        G = F[0];
      F = F[1];
      var H = b('react-relay/relay-hooks/useIsOperationNodeActive')(d, e);
      E = x !== E || f !== G;
      E && (A(), v(), a(x), F(f));
      G = r(c, d, h, l);
      var I = G.cursor;
      E = G.hasMore;
      j(
        function () {
          return function () {
            A();
          };
        },
        [A],
      );
      v = i(
        function (a, f) {
          var i = f == null ? void 0 : f.onComplete;
          if (D.current !== !0) {
            b('warning')(
              !1,
              'Relay: Unexpected fetch on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.',
              d.name,
              t,
            );
            return { dispose: function () {} };
          }
          var j = p(d, e);
          if (y.current === !0 || h == null || H) {
            j == null &&
              b('warning')(
                !1,
                "Relay: Unexpected fetch while using a null fragment ref for fragment `%s` in `%s`. When fetching more items, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before paginating.",
                d.name,
                t,
                t,
              );
            i && i(null);
            return { dispose: function () {} };
          }
          (j != null && j.kind !== 'PluralReaderSelector') ||
            g(0, 14120, d.name, t);
          var k = j.owner.variables;
          j = j.variables;
          f = f == null ? void 0 : f.UNSTABLE_extraVariables;
          k = babelHelpers['extends']({}, k, j);
          j = o(c, a, I, k, babelHelpers['extends']({}, f), s);
          w != null &&
            (typeof C !== 'string' &&
              b('warning')(
                !1,
                'Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.',
                w,
                C,
              ),
            (j.id = C));
          a = n(q, j, { force: !0 });
          m(x, a).subscribe(
            babelHelpers['extends']({}, u, {
              start: function (a) {
                z(a), u.start && u.start(a);
              },
              complete: function () {
                B(), u.complete && u.complete(), i && i(null);
              },
              error: function (a) {
                B(), u.error && u.error(a), i && i(a);
              },
            }),
          );
          return { dispose: A };
        },
        [x, C, c, I, z, A, B, y, H, h, d.name, e, t],
      );
      return [v, E, A];
    }
    function r(a, b, c, d) {
      var e = l.get(),
        f = e.EDGES,
        h = e.PAGE_INFO,
        i = e.HAS_NEXT_PAGE,
        j = e.HAS_PREV_PAGE,
        k = e.END_CURSOR;
      e = e.START_CURSOR;
      c = q(c, d);
      if (c == null) return { cursor: null, hasMore: !1 };
      typeof c === 'object' || g(0, 14137, b.name, f, h, c);
      d = c[f];
      c = c[h];
      if (d == null || c == null) return { cursor: null, hasMore: !1 };
      Array.isArray(d) || g(0, 14138, b.name, f, d);
      typeof c === 'object' || g(0, 14139, b.name, h, c);
      h =
        a === 'forward'
          ? (f = c[k]) != null
            ? f
            : null
          : (d = c[e]) != null
          ? d
          : null;
      h === null || typeof h === 'string' || g(0, 14140, b.name, e, h);
      a === 'forward'
        ? (k = h != null && c[i] === !0)
        : (k = h != null && c[j] === !0);
      return { cursor: h, hasMore: k };
    }
    e.exports = a;
  },
  null,
);
