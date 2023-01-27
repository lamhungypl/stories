__d(
  'DeferredJSResourceScheduler',
  ['Bootloader', 'CometResourceScheduler', 'JSScheduler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      d('CometResourceScheduler').onHighPriComplete(function () {
        c('JSScheduler').scheduleLoggingPriCallback(function () {
          c('Bootloader').loadResources(a);
        });
      });
    }
    g['default'] = a;
  },
  98,
);
