__d(
  'useMWShouldCurrentRouteOverrideChatVisibility',
  ['MWChatVisibileRoutes', 'useCurrentRoute'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = c('useCurrentRoute')();
      a = a == null ? void 0 : a.tracePolicy;
      return a == null ? !1 : d('MWChatVisibileRoutes').ROUTES.has(a);
    }
    g['default'] = a;
  },
  98,
);
