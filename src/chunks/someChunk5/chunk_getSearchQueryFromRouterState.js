__d(
  'getSearchQueryFromRouterState',
  [
    'getSearchCometResultsQuery',
    'getTopMostRouteInfo',
    'isSearchCometExploreTracePolicy',
    'isSearchCometGlobalResultPageTracePolicy',
    'isSearchCometScopedResultPageTracePolicy',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      a = c('getTopMostRouteInfo')(a);
      var b = a.route.tracePolicy;
      return b == null ||
        (!c('isSearchCometGlobalResultPageTracePolicy')(b) &&
          !c('isSearchCometScopedResultPageTracePolicy')(b) &&
          !c('isSearchCometExploreTracePolicy')(b))
        ? null
        : c('getSearchCometResultsQuery')(
            a.route.rootView.props,
            a.route.params,
          );
    }
    g['default'] = a;
  },
  98,
);
