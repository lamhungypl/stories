__d(
  'useCometRoute',
  [
    'CometRouteStoreContext',
    'isCometRouterUrl',
    'normalizeCometRouterUrl',
    'promiseDone',
    'react',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useState;
    function a(a) {
      var b = h(c('CometRouteStoreContext')),
        d = j(
          function () {
            return a != null && c('isCometRouterUrl')(a)
              ? c('normalizeCometRouterUrl')(a)
              : null;
          },
          [a],
        ),
        e = k(function () {
          return d != null && b != null ? b.getRoute(d) : null;
        }),
        f = e[0],
        g = e[1];
      i(
        function () {
          if (d != null && b != null) {
            var e = !1;
            c('promiseDone')(
              b.fetchRoute(d),
              function (a) {
                e !== !0 && g(a);
              },
              function (b) {
                var d;
                c('recoverableViolation')(
                  'Something went wrong with fetching ' +
                    ((d = a) != null ? d : '<null>') +
                    ': ' +
                    (b == null ? void 0 : b.errorType) +
                    ', ' +
                    (b == null ? void 0 : b.errorMsg),
                  'comet_infra',
                );
              },
            );
            return function () {
              e = !0;
            };
          }
        },
        [b, d, a],
      );
      return (f == null ? void 0 : f.type) === 'valid_route' ? f : null;
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
