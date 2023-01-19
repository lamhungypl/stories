__d(
  'generateLiteTypedLogger',
  ['Banzai', 'JstlMigrationFalcoEvent', 'getDataWithLoggerOptions'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b, d) {
      var e = a.split(':')[0],
        f = a.split(':')[1];
      e == 'logger'
        ? c('JstlMigrationFalcoEvent').log(function () {
            return { logger_config_name: f, payload: b };
          })
        : c('Banzai').post(a, b, d);
    }
    function a(a) {
      return {
        log: function (b, d) {
          h(a, c('getDataWithLoggerOptions')(b, d), c('Banzai').BASIC);
        },
        logVital: function (b, d) {
          h(a, c('getDataWithLoggerOptions')(b, d), c('Banzai').VITAL);
        },
        logImmediately: function (b, d) {
          h(a, c('getDataWithLoggerOptions')(b, d), { signal: !0 });
        },
      };
    }
    g['default'] = a;
  },
  98,
);
