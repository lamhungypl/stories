__d(
  'useShouldShowMessagingEntrypointOnCurrentRoute',
  ['useCurrentRoute', 'useShouldShowMessagingEntrypoint'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = c('useCurrentRoute')();
      return c('useShouldShowMessagingEntrypoint')(b, a);
    }
    g['default'] = a;
  },
  98,
);
