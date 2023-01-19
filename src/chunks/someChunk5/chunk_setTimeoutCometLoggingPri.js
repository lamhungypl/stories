__d(
  'setTimeoutCometLoggingPri',
  ['JSScheduler', 'setTimeoutCometInternals'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      for (
        var c = arguments.length, e = new Array(c > 2 ? c - 2 : 0), f = 2;
        f < c;
        f++
      )
        e[f - 2] = arguments[f];
      return d(
        'setTimeoutCometInternals',
      ).setTimeoutAtPriority_DO_NOT_USE.apply(
        d('setTimeoutCometInternals'),
        [d('JSScheduler').priorities.unstable_Low, a, b].concat(e),
      );
    }
    g['default'] = a;
  },
  98,
);
