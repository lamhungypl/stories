__d(
  'useRefetchablePreloadedQuery',
  [
    'CometRelay',
    'react',
    'react-relay/relay-hooks/preloadQuery_DEPRECATED',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useState;
    function a(a, b, e) {
      e === void 0 && (e = 'network-only');
      var f = d('CometRelay').useRelayEnvironment(),
        g = i({
          cacheBreaker: 0,
          currentQueryReference: b,
          originalQueryReference: b,
        }),
        j = g[0],
        k = g[1];
      j.originalQueryReference !== b &&
        k({
          cacheBreaker: 0,
          currentQueryReference: b,
          originalQueryReference: b,
        });
      var l = j.cacheBreaker;
      g = h(
        function (b) {
          if (e === 'store-only') {
            c('recoverableViolation')(
              'useRefetchablePreloadedQuery: `refetch()` does not support `store-only` fetchPolicy',
              'comet_feed',
            );
            return;
          }
          var d = l + 1,
            g = c('react-relay/relay-hooks/preloadQuery_DEPRECATED')(f, a, b, {
              fetchKey: d,
              fetchPolicy: e,
            });
          k(function (a) {
            return {
              cacheBreaker: d,
              currentQueryReference: g,
              originalQueryReference: a.originalQueryReference,
            };
          });
        },
        [l, f, a, e],
      );
      return [g, j.currentQueryReference, l];
    }
    g['default'] = a;
  },
  98,
);
