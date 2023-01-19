__d(
  'TimeSpentImmediateActiveSecondsLoggerComet',
  [
    'CometTimeSpentNavigation',
    'CurrentUser',
    'IasUtsClientDebuggingFalcoEvent',
    'WebImmediateActiveSecondsFalcoEvent',
    'crc32',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('CurrentUser').getID(),
      i = h !== '' || h !== '0' ? 2003 : 0,
      j = (c('crc32')(h) >>> 0) % i,
      k = 0;
    function l(a) {
      if (i <= 0) return !1;
      a = Math.floor(a / 1e3) % i;
      return a === j;
    }
    function a(a) {
      if (a >= k && a - k < 1e3) return;
      var b = l(a);
      if (b) {
        var d = c('CometTimeSpentNavigation').getPathInfo();
        c('WebImmediateActiveSecondsFalcoEvent').logImmediately(function () {
          return {
            activity_time_ms: a,
            last_activity_time_ms: k,
            script_path: d ? d.name : '',
          };
        });
      }
      c('gkx')('1427308') &&
        c('IasUtsClientDebuggingFalcoEvent').log(function () {
          return {
            activity_time: a,
            calculated_sampling_rate: i,
            client_user_id: h,
            ias_bucket: j,
            last_activity_time: k,
            should_report_ias: b,
            source: 'ias',
          };
        });
      k = Math.floor(a / 1e3) * 1e3;
    }
    g.maybeReportActiveSecond = a;
  },
  98,
);
