__d(
  'getGlobalSearchQueryFromRouterState',
  [
    'getSearchQueryFromRouterState',
    'getTopMostRouteInfo',
    'isSearchCometExploreTracePolicy',
    'isSearchCometGlobalResultPageTracePolicy',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = c('getTopMostRouteInfo')(a);
      b = b.route.tracePolicy;
      return b == null ||
        (!c('isSearchCometGlobalResultPageTracePolicy')(b) &&
          !c('isSearchCometExploreTracePolicy')(b))
        ? null
        : c('getSearchQueryFromRouterState')(a);
    }
    g['default'] = a;
  },
  98,
);
