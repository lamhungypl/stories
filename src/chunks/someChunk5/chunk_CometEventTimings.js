__d(
  'CometEventTimings',
  ['performanceNavigationStart', 'performanceNow'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = c('performanceNow')(),
        d = null,
        e =
          document.createEvent('MouseEvent').timeStamp <
          c('performanceNavigationStart')();
      e && a != null && a < b && ((d = b - a), (b = a));
      return [b, d];
    }
    g.getCurrentQueueTime = a;
  },
  98,
);
