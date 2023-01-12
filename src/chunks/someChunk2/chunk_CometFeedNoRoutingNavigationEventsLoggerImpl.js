__d(
  'CometFeedNoRoutingNavigationEventsLoggerImpl',
  ['CometMetricsNavigationFalcoEvent', 'JSScheduler', 'gkx', 'react', 'uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a, b, e) {
      var f = h(
        function (d, f, g) {
          if (b == null || b === '') return;
          var h = c('uuid')();
          c('gkx')('5857')
            ? c('CometMetricsNavigationFalcoEvent').logCritical(function () {
                return {
                  dest_module: g,
                  event_trace_id: h,
                  extra_fields: e,
                  href: f,
                  tn: a.join(''),
                  ts: d.toString(),
                  xt: b,
                };
              })
            : c('CometMetricsNavigationFalcoEvent').logImmediately(function () {
                return {
                  dest_module: g,
                  event_trace_id: h,
                  extra_fields: e,
                  href: f,
                  tn: a.join(''),
                  ts: d.toString(),
                  xt: b,
                };
              });
        },
        [a, b, e],
      );
      return h(
        function (a, b, c) {
          d('JSScheduler').scheduleLoggingPriCallback(function () {
            return f(a, b, c);
          });
        },
        [f],
      );
    }
    g['default'] = a;
  },
  98,
);
