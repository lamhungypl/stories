__d(
  'ScheduledApplyEach',
  ['JSScheduler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, c) {
      return a.map(function (a) {
        d('JSScheduler').deferUserBlockingRunAtCurrentPri_DO_NOT_USE(
          function () {
            b.apply(c, a);
          },
        );
      });
    }
    g['default'] = a;
  },
  98,
);
