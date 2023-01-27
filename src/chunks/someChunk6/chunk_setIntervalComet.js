__d(
  'setIntervalComet',
  ['JSScheduler', 'setTimeoutCometInternals'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var c =
        d('JSScheduler').getCurrentPriorityLevel() ===
        d('JSScheduler').priorities.unstable_Idle
          ? d('JSScheduler').priorities.unstable_Idle
          : d('JSScheduler').priorities.unstable_Low;
      for (
        var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2;
        g < e;
        g++
      )
        f[g - 2] = arguments[g];
      return d(
        'setTimeoutCometInternals',
      ).setIntervalAtPriority_DO_NOT_USE.apply(
        d('setTimeoutCometInternals'),
        [c, a, b].concat(f),
      );
    }
    g['default'] = a;
  },
  98,
);
