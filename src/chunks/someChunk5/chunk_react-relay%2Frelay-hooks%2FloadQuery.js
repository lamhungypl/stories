__d(
  'react-relay/relay-hooks/loadQuery',
  ['invariant', 'react', 'relay-runtime', 'warning'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = h || b('react'),
      j = b('relay-runtime').Observable,
      k = b('relay-runtime').PreloadableQueryRegistry,
      l = b('relay-runtime').RelayFeatureFlags,
      m = b('relay-runtime').ReplaySubject,
      n = b('relay-runtime').__internal.fetchQueryDeduped,
      o = b('relay-runtime').createOperationDescriptor,
      p = b('relay-runtime').getRequest,
      q = b('relay-runtime').getRequestIdentifier,
      r = null,
      s = 100001;
    function a() {
      if (r === null) {
        var a;
        r =
          (a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null
            ? void 0
            : (a = a.ReactCurrentDispatcher) == null
            ? void 0
            : a.current;
      }
    }
    function c(a, c, d, e, f) {
      var h;
      h =
        (h = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null
          ? void 0
          : (h = h.ReactCurrentDispatcher) == null
          ? void 0
          : h.current;
      b('warning')(
        r == null || h !== r,
        'Relay: `%s` should not be called inside a React render function.',
        (h = e == null ? void 0 : e.__nameForWarning) != null ? h : 'loadQuery',
      );
      s++;
      var t =
          (h = e == null ? void 0 : e.fetchPolicy) != null
            ? h
            : 'store-or-network',
        u = babelHelpers['extends'](
          {},
          e == null ? void 0 : e.networkCacheConfig,
          { force: !0 },
        ),
        v,
        w = !1,
        x = function (c, b) {
          w = !0;
          return a.executeWithSource({ operation: c, source: b });
        },
        y = new m();
      h = j.create(function (a) {
        return y.subscribe(a);
      });
      var z,
        A = null;
      e = !1;
      var B = function (b) {
          e = !0;
          var c = new m();
          if (l.ENABLE_LOAD_QUERY_REQUEST_DEDUPING === !0) {
            var f = 'raw-network-request-' + q(b, d);
            f = n(a, f, function () {
              var c = a.getNetwork();
              return c.execute(b, d, u);
            });
          } else {
            var g = a.getNetwork();
            f = g.execute(b, d, u);
          }
          g = f.subscribe({
            error: function (a) {
              (A = a), c.error(a);
            },
            next: function (a) {
              c.next(a);
            },
            complete: function () {
              c.complete();
            },
          });
          f = g.unsubscribe;
          z = f;
          return j.create(function (a) {
            var b = c.subscribe(a);
            return function () {
              b.unsubscribe(), z();
            };
          });
        },
        C,
        D = function (b, c) {
          l.ENABLE_LOAD_QUERY_REQUEST_DEDUPING === !0 && (e = !0);
          b = n(a, b.request.identifier, c).subscribe({
            error: function (a) {
              y.error(a);
            },
            next: function (a) {
              y.next(a);
            },
            complete: function () {
              y.complete();
            },
          });
          C = b.unsubscribe;
        },
        E = function (b) {
          var c = o(b, d, u);
          v = a.retain(c);
          if (t === 'store-only') return;
          var e = t !== 'store-or-network' || a.check(c).status !== 'available';
          e &&
            D(c, function () {
              var a = B(b.params);
              a = x(c, a);
              return a;
            });
        },
        F;
      if (c.kind === 'PreloadableConcreteRequest') {
        var G = c;
        G = G.params;
        var H = G;
        H = H.id;
        H !== null || g(0, 22441, G.name);
        var I = k.get(H);
        if (I != null) E(I);
        else {
          var J = t === 'store-only' ? null : B(G);
          I = k.onLoad(H, function (b) {
            F();
            var c = o(b, d, u);
            v = a.retain(c);
            J != null &&
              D(c, function () {
                return x(c, J);
              });
          });
          F = I.dispose;
        }
      } else {
        I = c;
        c = p(I);
        G = c.params;
        H = G.cacheID != null ? G.cacheID : G.id;
        E(c);
      }
      var K = !1,
        L = !1,
        M = !1,
        N = function () {
          if (L) return;
          v && v.dispose();
          L = !0;
        },
        O = function () {
          if (M) return;
          w ? C && C() : z && z();
          F && F();
          M = !0;
        };
      return {
        kind: 'PreloadedQuery',
        environment: a,
        environmentProviderOptions: f,
        dispose: function () {
          if (K) return;
          N();
          O();
          K = !0;
        },
        releaseQuery: N,
        cancelNetworkRequest: O,
        fetchKey: s,
        id: H,
        get isDisposed() {
          return K || L;
        },
        get networkError() {
          return A;
        },
        name: G.name,
        networkCacheConfig: u,
        fetchPolicy: t,
        source: e ? h : void 0,
        variables: d,
      };
    }
    e.exports = { loadQuery: c, useTrackLoadQueryInRender: a };
  },
  null,
);
