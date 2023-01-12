__d(
  'useFXUserData',
  ['Actor', 'CurrentUser'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = d('Actor').useActor();
      a = a[0];
      return { accountId: c('CurrentUser').getAccountID(), actorId: a };
    }
    g['default'] = a;
  },
  98,
);
