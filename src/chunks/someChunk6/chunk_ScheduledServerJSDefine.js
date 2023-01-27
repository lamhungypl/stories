__d(
  'ScheduledServerJSDefine',
  ['JSScheduler', 'ServerJSDefine'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      a.forEach(function (a) {
        var e = a;
        b != null && (e = [].concat(a, [b]));
        d('JSScheduler').deferUserBlockingRunAtCurrentPri_DO_NOT_USE(
          function () {
            c('ServerJSDefine').handleDefine.apply(null, e);
          },
        );
      });
    }
    g.handleDefines = a;
  },
  98,
);
