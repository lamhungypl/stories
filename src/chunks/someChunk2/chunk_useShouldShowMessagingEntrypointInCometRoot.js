__d(
  'useShouldShowMessagingEntrypointInCometRoot',
  ['useCometRouterState', 'useShouldShowMessagingEntrypoint'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = c('useCometRouterState')(),
        d = b == null ? void 0 : b.main;
      b = b == null ? void 0 : b.pushViewStack;
      b = b && b.length > 0 ? b[b.length - 1] : d;
      return c('useShouldShowMessagingEntrypoint')(
        b == null ? void 0 : b.route,
        a,
      );
    }
    g['default'] = a;
  },
  98,
);
