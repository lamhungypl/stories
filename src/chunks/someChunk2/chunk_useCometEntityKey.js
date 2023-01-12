__d(
  'useCometEntityKey',
  ['getCometEntityKey', 'getTopMostRoute', 'useCometRouterState'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = c('useCometRouterState')();
      if (a == null) return null;
      a = c('getTopMostRoute')(a);
      return c('getCometEntityKey')(a);
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
