__d(
  'sendImpressionExitActionValidationData',
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
        j = g ? Date.now() - g : null,
        k = {
          intersect_rect: b.intersectionRect,
          root: b.rootBounds,
          target_rect: b.boundingClientRect,
        };
      c('CometMetricsChannel2ViewabilityFalcoEvent').logImmediately(
        function () {
          return {
            csp: f.csp != null ? String(f.csp) : '',
            cts: String(g),
            duration: j != null ? String(j) : null,
            eid: f.eid != null ? String(f.eid) : '',
            event_trace_id: i,
            exit_rs: b.invisibleReason,
            framework: a,
            me: h ? h.name : null,
            pre_rs: Object.prototype.hasOwnProperty.call(f, 'pre_rs')
              ? String(f.pre_rs)
              : '',
            pre_vp: e ? String(e.visiblePercentage) : null,
            rects: k,
            scroll_speed: c('getCentralImpressionScrollSpeed')().toString(),
            sk: d('WebSession').getId(),
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
