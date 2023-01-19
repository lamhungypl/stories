__d(
  'CometRouteRenderType',
  ['CometRouterRenderTypeContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      var a = h(c('CometRouterRenderTypeContext'));
      return a === 'pushView';
    }
    function b() {
      var a = h(c('CometRouterRenderTypeContext'));
      return a === 'hosted';
    }
    function e() {
      var a = h(c('CometRouterRenderTypeContext'));
      return a === 'main';
    }
    g.useIsPushView = a;
    g.useIsHosted = b;
    g.useIsMain = e;
  },
  98,
);
