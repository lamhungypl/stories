__d(
  'useCometRouterLinkEventHandlers',
  [
    'JSScheduler',
    'gkx',
    'react',
    'useCometPreloader',
    'useCometRouterDispatcher',
    'useCometRouterLinkQueryPrefetcher',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    function a(a) {
      var b = a.dispatcherExtras,
        e = a.href,
        f = a.isRouterLink,
        g = a.onHoverEnd,
        m = a.onHoverStart,
        n = a.onPress,
        o = a.onPressStart,
        p = a.prefetchQueriesOnHover,
        q = a.preloadCodeOnMount,
        r = a.preventLocalNavigation,
        s = a.rel,
        t = a.target;
      a = p === !0 ? 'button_aggressive' : 'button';
      var u = c('useCometRouterDispatcher')(),
        v = k(null),
        w = j(
          function () {
            var a = t == null || t === '_self',
              b = !c('gkx')('708253') && s != null && s.match(l) != null;
            return f && r !== !0 && a && !b;
          },
          [f, r, t, s],
        );
      p = (p = b) != null ? p : {};
      p.onNavigate;
      p = babelHelpers.objectWithoutPropertiesLoose(p, ['onNavigate']);
      p = c('useCometRouterLinkQueryPrefetcher')({
        dispatcherExtras: p,
        href: e,
        preloadTriggerType: a,
        routeHandledByCometRouter: w,
      });
      var x = p.cancelPrefetchRouteQueries,
        y = p.getPrefetchedQueryContainerAndMarkAsUsed;
      p = p.prefetchRouteQueries;
      var z = function (a) {
          n && n(a);
          var c = !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
          if (c && w && u && e != null) {
            c = y();
            u.go(
              e,
              babelHelpers['extends'](
                { eventTimestamp: a.timeStamp, prefetcher: c },
                b,
              ),
            );
          }
        },
        A = b == null ? void 0 : b.target,
        B = h(
          function () {
            e != null &&
              v.current !== e &&
              w &&
              d('JSScheduler').scheduleSpeculativeCallback(function () {
                u != null &&
                  v.current !== e &&
                  ((v.current = e), u.preloadRouteCode(e, A));
              });
          },
          [u, e, A, w],
        );
      i(
        function () {
          e != null &&
            w &&
            (q === !0
              ? B()
              : d('JSScheduler').scheduleSpeculativeCallback(function () {
                  u == null ? void 0 : u.prefetchRouteDefinition(e);
                }));
        },
        [B, q, u, w, e],
      );
      a = c('useCometPreloader')(a, B, p, x);
      var C = a[0],
        D = a[1],
        E = a[2];
      p = function (a) {
        o && o(a), E(a);
      };
      x = function (a) {
        m && m(a);
        if (!f) return;
        C(a);
      };
      a = function (a) {
        g && g(a), D();
      };
      return { onHoverEnd: a, onHoverStart: x, onPress: z, onPressStart: p };
    }
    g['default'] = a;
  },
  98,
);
