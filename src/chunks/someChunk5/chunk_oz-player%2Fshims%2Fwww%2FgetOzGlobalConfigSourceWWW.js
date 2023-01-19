__d(
  'oz-player/shims/www/getOzGlobalConfigSourceWWW',
  ['oz-player/configs/MockOzConfig', 'qex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
      allow_subsequent_prefetch: (b = c('qex')._('2085')) != null ? b : !0,
      clear_prefetch_on_unload: (d = c('qex')._('2086')) != null ? d : !1,
      systemic_risk_abr_prefetch_initial_risk_factor:
        (e = c('qex')._('2087')) != null ? e : 3,
      prefetch_retention_duration_ms: (f = c('qex')._('2088')) != null ? f : 0,
      prefetch_resolution_threshold: (b = c('qex')._('2089')) != null ? b : 1e3,
      systemic_risk_abr_prefetch_low_mos_resolution:
        (d = c('qex')._('2090')) != null ? d : 260,
      systemic_risk_abr_min_watchable_mos:
        (e = c('qex')._('2091')) != null ? e : 0,
      systemic_risk_abr_parse_prefetch_mos:
        (f = c('qex')._('2092')) != null ? f : !1,
    };
    function a() {
      return new (c('oz-player/configs/MockOzConfig'))(h);
    }
    g['default'] = a;
  },
  98,
);
