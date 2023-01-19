__d(
  'useCometDisplayTimingTrackerForInteraction',
  ['InteractionTracingMetrics', 'cr:1791501', 'performanceNow', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = d('react');
    var h = e.useCallback,
      i = e.useRef;
    function a(a, d, e) {
      d === void 0 && (d = !1);
      var f = i(null);
      return h(
        function (g) {
          if (a != null && f.current !== g) {
            f.current = g;
            if (g) {
              var h = c('performanceNow')();
              e != null
                ? c('InteractionTracingMetrics').addMountPoint(e, h, a)
                : c('InteractionTracingMetrics')
                    .currentInteractionLogger()
                    .forEach(function (b) {
                      return c('InteractionTracingMetrics').addMountPoint(
                        b.traceId,
                        h,
                        a,
                      );
                    });
              if (!d && b('cr:1791501')) {
                var i = b('cr:1791501').getCurrentVCTraces();
                i.forEach(function (a) {
                  a.interactionType !== 'INTERACTION' && a.excludeElement(g);
                });
              }
            }
          }
        },
        [e, d, a],
      );
    }
    g['default'] = a;
  },
  98,
);
