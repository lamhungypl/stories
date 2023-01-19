__d(
  'useCometRouterLinkQueryPrefetcher',
  ['ODS', 'react', 'useCometRouterDispatcher'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.startTransition,
      i = b.useCallback,
      j = b.useRef;
    function a(a) {
      var b = a.dispatcherExtras,
        e = a.href,
        f = a.preloadTriggerType,
        g = a.routeHandledByCometRouter,
        k = c('useCometRouterDispatcher')(),
        l = j(null);
      a = i(function () {
        var a = l.current;
        a &&
          (h(function () {
            a.cancel();
          }),
          (l.current = null));
      }, []);
      var m = i(
          function () {
            var a = l.current;
            l.current = null;
            a != null &&
              d('ODS').bumpEntityKey(
                2994,
                'comet_preloading',
                'prefetch_route_queries.' + f + '.used',
              );
            return a;
          },
          [f],
        ),
        n = i(
          function () {
            if (k != null && e != null && g && l.current == null) {
              var a;
              l.current = k.prefetchRouteQueries(e, (a = b) != null ? a : {});
              d('ODS').bumpEntityKey(
                2994,
                'comet_preloading',
                'prefetch_route_queries.' + f + '.preloaded',
              );
            }
          },
          [k, e, g, b, f],
        );
      return {
        cancelPrefetchRouteQueries: a,
        getPrefetchedQueryContainerAndMarkAsUsed: m,
        prefetchRouteQueries: n,
      };
    }
    g['default'] = a;
  },
  98,
);
