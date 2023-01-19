__d(
  'PushNotificationsEventEmitter',
  ['BaseEventEmitter', 'PushNotificationsEventEmitterQueue'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = new (c('BaseEventEmitter'))();
    b = a;
    a.once('openInstallPush', function () {
      for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
        b[d] = arguments[d];
      c('PushNotificationsEventEmitterQueue').push({
        args: b,
        type: 'openInstallPush',
      });
    });
    g['default'] = b;
  },
  98,
);
