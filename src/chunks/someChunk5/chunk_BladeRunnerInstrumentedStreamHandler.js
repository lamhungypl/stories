__d(
  'BladeRunnerInstrumentedStreamHandler',
  [
    'BladeRunnerDeferredClient',
    'BladeRunnerStreamHandler',
    'BladeRunnerStreamStatus',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    var h = 60 * 1e3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$BladeRunnerInstrumentedStreamHandler1 = b;
        e.$BladeRunnerInstrumentedStreamHandler2 = d;
        e.$BladeRunnerInstrumentedStreamHandler3 = Date.now();
        e.$BladeRunnerInstrumentedStreamHandler5 = c(
          'setTimeoutAcrossTransitions',
        )(function () {
          e.$BladeRunnerInstrumentedStreamHandler4 == null &&
            e.$BladeRunnerInstrumentedStreamHandler6(-1, Date.now());
        }, h);
        return e;
      }
      var e = b.prototype;
      e.onData = function (a) {
        c('BladeRunnerDeferredClient').bumpCounter(
          'received_data.' + this.$BladeRunnerInstrumentedStreamHandler2,
        ),
          this.$BladeRunnerInstrumentedStreamHandler1.onData(a);
      };
      e.onStatusUpdate = function (a) {
        this.$BladeRunnerInstrumentedStreamHandler6(a, Date.now()),
          this.$BladeRunnerInstrumentedStreamHandler1.onStatusUpdate(a);
      };
      e.onLog = function (a) {
        this.$BladeRunnerInstrumentedStreamHandler1.onLog(a);
      };
      e.onBatch = function (a) {
        this.$BladeRunnerInstrumentedStreamHandler1.onBatch(a);
      };
      e.onClientCancel = function () {
        this.$BladeRunnerInstrumentedStreamHandler6(
          d('BladeRunnerStreamStatus').StreamStatus.CLOSED,
          Date.now(),
        );
      };
      e.$BladeRunnerInstrumentedStreamHandler6 = function (a, b) {
        c('BladeRunnerDeferredClient').bumpCounter(
          'received_status_' +
            a +
            '.' +
            this.$BladeRunnerInstrumentedStreamHandler2,
        );
        if (this.$BladeRunnerInstrumentedStreamHandler4 == null) {
          this.$BladeRunnerInstrumentedStreamHandler4 = b;
          a = Math.max(
            this.$BladeRunnerInstrumentedStreamHandler4 -
              this.$BladeRunnerInstrumentedStreamHandler3,
            0,
          );
          b =
            a >= 1e4
              ? Math.round(Math.min(a / 1e4, 6)) * 10
              : Math.round(Math.min(a / 1e3, 10));
          c('BladeRunnerDeferredClient').bumpCounter(
            'status_latency.' +
              this.$BladeRunnerInstrumentedStreamHandler2 +
              '.' +
              b +
              '.s',
          );
        }
        clearTimeout(this.$BladeRunnerInstrumentedStreamHandler5);
      };
      return b;
    })(c('BladeRunnerStreamHandler'));
    g['default'] = a;
  },
  98,
);
