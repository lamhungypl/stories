__d(
  'sendImpressionEnterActionValidationData',
  [
    'CometMetricsChannel2ViewabilityFalcoEvent',
    'CometTimeSpentNavigation',
    'WebSession',
    'getCentralImpressionScrollSpeed',
    'getCentralImpressionTimeAfterRefresh',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e, f) {
      var g = b.impressedAt,
        h = c('CometTimeSpentNavigation').getPathInfo(),
        i = c('uuid')(),
        j = c('getCentralImpressionScrollSpeed')(),
        k = d('WebSession').getId(),
        l = {
          intersect_rect: b.intersectionRect,
          root: b.rootBounds,
          target_rect: b.boundingClientRect,
        };
      c('CometMetricsChannel2ViewabilityFalcoEvent').logImmediately(
        function () {
          return {
            csp: f.csp != null ? String(f.csp) : '',
            cts: g.toString(),
            eid: f.eid != null ? String(f.eid) : '',
            event_trace_id: i,
            framework: a,
            me: h ? h.name : null,
            pre_rs: e ? e.invisibleReason : null,
            rects: l,
            scroll_speed: j.toString(),
            sk: k,
            time_from_load: c(
              'getCentralImpressionTimeAfterRefresh',
            )().toString(),
            vp: b.visiblePercentage.toString(),
            xt: f.xt != null ? String(f.xt) : '',
          };
        },
      );
    }
    g['default'] = a;
  },
  98,
);
