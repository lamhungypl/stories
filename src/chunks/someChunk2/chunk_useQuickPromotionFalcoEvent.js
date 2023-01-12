__d(
  'useQuickPromotionFalcoEvent',
  ['react', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback,
      i = c('requireDeferred')('QpActionFalcoEvent').__setRef(
        'useQuickPromotionFalcoEvent',
      ),
      j = c('requireDeferred')('QpImpressionFalcoEvent').__setRef(
        'useQuickPromotionFalcoEvent',
      );
    function a(a) {
      var b = a.context_surface_id;
      a = a.context_trigger;
      var c = a === void 0 ? 'newsfeed' : a,
        d = function (a) {
          return a instanceof Map
            ? Object.fromEntries(a)
            : Object.entries((a = a) != null ? a : {}).reduce(function (a, b) {
                var c = b[0];
                b = b[1];
                a[c] = b;
                return a;
              }, {});
        };
      a = h(
        function (a, e, f, g) {
          if (e == null || f == null) return;
          var h = '' + b,
            j = d(g);
          i.onReady(function (b) {
            b = b.log;
            b(function () {
              return {
                action_type: a,
                context_surface_id: h,
                context_trigger: c,
                extra_client_data: j,
                instance_log_data: f,
                promotion_id: e,
              };
            });
          });
        },
        [b, c],
      );
      var e = h(
        function (a, e, f) {
          if (a == null || e == null) return;
          var g = '' + b,
            h = d(f);
          j.onReady(function (b) {
            b = b.log;
            b(function () {
              return {
                context_surface_id: g,
                context_trigger: c,
                extra_client_data: h,
                instance_log_data: e,
                promotion_id: a,
              };
            });
          });
        },
        [b, c],
      );
      return { logAction: a, logImpression: e };
    }
    g['default'] = a;
  },
  98,
);
