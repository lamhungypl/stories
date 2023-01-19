__d(
  'react-relay/relay-hooks/useRefetchableFragmentNode',
  [
    'invariant',
    'react',
    'react-relay/relay-hooks/FragmentResource',
    'react-relay/relay-hooks/ProfilerContext',
    'react-relay/relay-hooks/QueryResource',
    'react-relay/relay-hooks/useFragmentNode',
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
        'react-relay/relay-hooks/FragmentResource',
      ).getFragmentResourceForEnvironment,
      j = b(
        'react-relay/relay-hooks/QueryResource',
      ).getQueryResourceForEnvironment;
    c = h || (h = b('react'));
    var k = c.useCallback,
      l = c.useContext,
      m = c.useReducer,
      n = b('relay-runtime').__internal.fetchQuery,
      o = b('relay-runtime').createOperationDescriptor,
      p = b('relay-runtime').getFragmentIdentifier,
      q = b('relay-runtime').getRefetchMetadata,
      r = b('relay-runtime').getSelector,
      s = b('relay-runtime').getValueAtPath;
    function t(a, b) {
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
        f = q(a, d),
        h = f.refetchableRequest,
        k = f.fragmentRefPathInResponse;
      f = f.identifierField;
      var o = p(a, c),
        r = m(t, {
          fetchPolicy: void 0,
          mirroredEnvironment: e,
          mirroredFragmentIdentifier: o,
          onComplete: void 0,
          refetchEnvironment: null,
          refetchQuery: null,
          renderPolicy: void 0,
        }),
        v = r[0];
      r = r[1];
      var w = v.fetchPolicy,
        x = v.mirroredEnvironment,
        y = v.mirroredFragmentIdentifier,
        z = v.onComplete,
        A = v.refetchEnvironment,
        B = v.refetchQuery,
        C = v.renderPolicy;
      A = (v = A) != null ? v : e;
      var D = j(A);
      v = i(A);
      var E = l(b('react-relay/relay-hooks/ProfilerContext'));
      e = A !== x || o !== y;
      x = b('react-relay/relay-hooks/useQueryLoader')(h);
      var F = x[0];
      y = x[1];
      x = x[2];
      var G = c;
      if (e) r({ type: 'reset', environment: A, fragmentIdentifier: o }), x();
      else if (B != null && F != null) {
        var H,
          I = function (a) {
            z && z((a = a) != null ? a : null);
          },
          J = F.source != null ? F.source : n(A, B);
        e = E.wrapPrepareQueryResource(function () {
          return D.prepare(
            B,
            J,
            w,
            C,
            {
              error: I,
              complete: function () {
                I();
              },
            },
            F.fetchKey,
            E,
          );
        });
        A = v.read(e.fragmentNode, e.fragmentRef, d).data;
        A != null || g(0, 13942);
        v = s(A, k);
        G = v;
      }
      e = b('react-relay/relay-hooks/useFragmentNode')(a, G, d);
      A = e.data;
      v = e.disableStoreUpdates;
      e = e.enableStoreUpdates;
      d = u(d, r, x, A, o, a, k, f, y, c, h);
      return {
        fragmentData: A,
        fragmentRef: G,
        refetch: d,
        disableStoreUpdates: v,
        enableStoreUpdates: e,
      };
    }
    function u(a, c, d, e, f, g, h, i, j, l, m) {
      var n = b('react-relay/relay-hooks/useIsMountedRef')(),
        p = i != null && e != null && typeof e === 'object' ? e[i] : null;
      return k(
        function (e, f) {
          if (n.current !== !0) {
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
            k = f == null ? void 0 : f.fetchPolicy,
            q = f == null ? void 0 : f.UNSTABLE_renderPolicy;
          f = f == null ? void 0 : f.onComplete;
          var s = r(g, l),
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
          s = o(m, v, { force: !0 });
          j(s.request.variables, {
            fetchPolicy: k,
            __environment: h,
            __nameForWarning: 'refetch',
          });
          c({
            type: 'refetch',
            fetchPolicy: k,
            onComplete: f,
            refetchEnvironment: h,
            refetchQuery: s,
            renderPolicy: q,
          });
          return { dispose: d };
        },
        [f, c, d, p, j],
      );
    }
    var v;
    e.exports = a;
  },
  null,
);
