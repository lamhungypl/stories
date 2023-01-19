__d(
  'OneTraceQPLLogger',
  [
    'QuickPerformanceLogger',
    'gkx',
    'performanceNavigationStart',
    'performanceNow',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
        CANCEL: 4,
        ERROR: 87,
        FAIL: 3,
        OFFLINE: 160,
        START: 1,
        SUCCESS: 2,
        TIMEOUT: 113,
      },
      i = c('gkx')('6196') ? 0 : c('performanceNavigationStart')();
    function a(a, b) {
      if (a == null) return;
      c('QuickPerformanceLogger').markerStart(
        a,
        b.instanceKey,
        b.startTime + i,
      );
    }
    function b(a, b) {
      if (a == null) return;
      c('QuickPerformanceLogger').markerAnnotate(a, b.annotations, {
        instanceKey: b.instanceKey,
      });
      for (var d in b.markerPoints)
        c('QuickPerformanceLogger').markerPoint(a, d, {
          data: b.markerPoints[d].data,
          instanceKey: b.instanceKey,
          timestamp: b.markerPoints[d].timeSinceStart + i,
        });
      d = h[b.status];
      c('QuickPerformanceLogger').markerEnd(
        a,
        d,
        b.instanceKey,
        (a = b.endTime) != null ? a : c('performanceNow')() + i,
      );
    }
    g.qplActionMap = h;
    g.initQPL = a;
    g.logQPL = b;
  },
  98,
);
