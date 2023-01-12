__d(
  'react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE',
  [
    'invariant',
    'react',
    'react-relay/relay-hooks/ProfilerContext',
    'react-relay/relay-hooks/QueryResource',
    'react-relay/relay-hooks/react-cache/readFragmentInternal_REACT_CACHE',
    'react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE',
    'react-relay/relay-hooks/useIsMountedRef',
    'react-relay/relay-hooks/useQueryLoader',
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
    var j = c.useCallback,
      k = c.useContext,
      l = c.useReducer,
      m = b('relay-runtime').__internal.fetchQuery,
      n = b('relay-runtime').createOperationDescriptor,
      o = b('relay-runtime').getFragmentIdentifier,
      p = b('relay-runtime').getRefetchMetadata,
      q = b('relay-runtime').getSelector,
      r = b('relay-runtime').getValueAtPath;
    function s(a, b) {
      switch (b.type) {
        case 'refetch':
          var c;
          return babelHelpers['extends']({}, a, {
            fetchPolicy: b.fetchPolicy,
            mirroredEnvironment:
              (c = b.refetchEnvironment) != null ? c : a.mirroredEnvironment,
            onComplete: b.onComplete,
            refetchEnvironment: b.refetchEnvironment,
            refetchQuery: b.refetchQuery,
            renderPolicy: b.renderPolicy,
          });
        case 'reset':
          return {
            fetchPolicy: void 0,
            mirroredEnvironment: b.environment,
            mirroredFragmentIdentifier: b.fragmentIdentifier,
            onComplete: void 0,
            refetchQuery: null,
            renderPolicy: void 0,
          };
        default:
          b.type;
          throw new Error('useRefetchableFragmentNode: Unexpected action type');
      }
    }
    function a(a, c, d) {
      var e = b('react-relay/relay-hooks/useRelayEnvironment')(),
        f = p(a, d),
        h = f.refetchableRequest,
        j = f.fragmentRefPathInResponse;
      f = f.identifierField;
      var n = o(a, c),
        q = l(s, {
          fetchPolicy: void 0,
          mirroredEnvironment: e,
          mirroredFragmentIdentifier: n,
          onComplete: void 0,
          refetchEnvironment: null,
          refetchQuery: null,
          renderPolicy: void 0,
        }),
        u = q[0];
      q = q[1];
      var v = u.fetchPolicy,
        w = u.mirroredEnvironment,
        x = u.mirroredFragmentIdentifier,
        y = u.onComplete,
        z = u.refetchEnvironment,
        A = u.refetchQuery,
        B = u.renderPolicy;
      z = (u = z) != null ? u : e;
      var C = i(z),
        D = k(b('react-relay/relay-hooks/ProfilerContext'));
      u = z !== w || n !== x;
      e = b('react-relay/relay-hooks/useQueryLoader')(h);
      var E = e[0];
      w = e[1];
      x = e[2];
      e = c;
      if (u) q({ type: 'reset', environment: z, fragmentIdentifier: n }), x();
      else if (A != null && E != null) {
        var F,
          G = function (a) {
            y && y((a = a) != null ? a : null);
          },
          H = E.source != null ? E.source : m(z, A);
        u = D.wrapPrepareQueryResource(function () {
          return C.prepare(
            A,
            H,
            v,
            B,
            {
              error: G,
              complete: function () {
                G();
              },
            },
            E.fetchKey,
            D,
          );
        });
        z = b(
          'react-relay/relay-hooks/react-cache/readFragmentInternal_REACT_CACHE',
        )(z, u.fragmentNode, u.fragmentRef, d).data;
        z != null || g(0, 13942);
        u = r(z, j);
        e = u;
      }
      z = b(
        'react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE',
      )(a, e, d);
      u = t(d, q, x, z, n, a, j, f, w, c, h);
      return { fragmentData: z, fragmentRef: e, refetch: u };
    }
    function t(a, c, d, e, f, g, h, i, k, l, m) {
      var o = b('react-relay/relay-hooks/useIsMountedRef')(),
        p = i != null && e != null && typeof e === 'object' ? e[i] : null;
      return j(
        function (e, f) {
          if (o.current !== !0) {
            b('warning')(
              !1,
              'Relay: Unexpected call to `refetch` on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.',
              g.name,
              a,
            );
            return { dispose: function () {} };
          }
          l == null &&
            b('warning')(
              !1,
              "Relay: Unexpected call to `refetch` while using a null fragment ref for fragment `%s` in `%s`. When calling `refetch`, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before calling `refetch`, or make sure you pass all required variables to `refetch`.",
              g.name,
              a,
              a,
            );
          var h = f == null ? void 0 : f.__environment,
            j = f == null ? void 0 : f.fetchPolicy,
            r = f == null ? void 0 : f.UNSTABLE_renderPolicy;
          f = f == null ? void 0 : f.onComplete;
          var s = q(g, l),
            t,
            u;
          if (s == null) (t = {}), (u = {});
          else if (s.kind === 'PluralReaderSelector') {
            var v;
            t =
              (v = (v = s.selectors[0]) == null ? void 0 : v.owner.variables) !=
              null
                ? v
                : {};
            u =
              (v = (v = s.selectors[0]) == null ? void 0 : v.variables) != null
                ? v
                : {};
          } else (t = s.owner.variables), (u = s.variables);
          v = babelHelpers['extends']({}, t, u, e);
          i != null &&
            !Object.prototype.hasOwnProperty.call(e, 'id') &&
            (typeof p !== 'string' &&
              b('warning')(
                !1,
                'Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.',
                i,
                p,
              ),
            (v.id = p));
          s = n(m, v, { force: !0 });
          k(s.request.variables, {
            fetchPolicy: j,
            __environment: h,
            __nameForWarning: 'refetch',
          });
          c({
            type: 'refetch',
            fetchPolicy: j,
            onComplete: f,
            refetchEnvironment: h,
            refetchQuery: s,
            renderPolicy: r,
          });
          return { dispose: d };
        },
        [f, c, d, p, k],
      );
    }
    var u;
    e.exports = a;
  },
  null,
);
