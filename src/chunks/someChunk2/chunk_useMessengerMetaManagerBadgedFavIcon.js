__d(
  'useMessengerMetaManagerBadgedFavIcon',
  ['useCometRouterState'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = c('useCometRouterState')();
      return (
        (b == null ? void 0 : b.main.route.tabKey) === 'messenger' && a > 0
      );
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
