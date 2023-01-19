__d(
  'RequestStreamHandler',
  ['err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = a.onData,
          c = a.onTermination,
          d = a.onLog,
          e = a.onFlowStatus;
        a = a.onRetryUpdateRequestBody;
        this.$1 = b || function (a) {};
        this.$2 = c || function (a) {};
        this.$3 = d || function (a) {};
        this.$4 = e;
        this.$5 = a;
      }
      var b = a.prototype;
      b.onFlowStatus = function (a) {
        this.$4(a);
      };
      b.onData = function (a) {
        this.$1(a);
      };
      b.onTermination = function (a) {
        this.$2(c('err')(a));
      };
      b.onLog = function (a) {
        this.$3(a);
      };
      b.onRetryUpdateRequestBody = function () {
        if (this.$5 != null) return this.$5();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
