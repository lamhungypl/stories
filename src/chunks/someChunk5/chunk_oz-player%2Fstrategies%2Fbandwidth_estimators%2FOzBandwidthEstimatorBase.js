__d(
  'oz-player/strategies/bandwidth_estimators/OzBandwidthEstimatorBase',
  [
    'oz-player/configs/OzGlobalConfig',
    'oz-player/networks/OzBandwidthCache',
    'oz-player/networks/OzBandwidthUtils',
    'oz-player/networks/OzNetworkSamples',
    'oz-player/shims/OzEventEmitter',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1e6,
      i = 'bandwidthEstimate',
      j = 'bandwidthAndTTFBSamples';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b;
        b = a.call(this) || this;
        b.$OzBandwidthEstimatorBase2 = new (c(
          'oz-player/networks/OzNetworkSamples',
        ))();
        b.$OzBandwidthEstimatorBase1 = new (c(
          'oz-player/networks/OzBandwidthCache',
        ))(
          i,
          j,
          function () {
            return b.getAdjustedBandwidth(
              c('oz-player/configs/OzGlobalConfig'),
            );
          },
          function () {
            return {
              bandwidth:
                b.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples(),
              navigationTiming:
                b.$OzBandwidthEstimatorBase2.getRecentNavigationTimingSamples(),
            };
          },
        );
        b.$OzBandwidthEstimatorBase2.setBandwidthCache(
          b.$OzBandwidthEstimatorBase1,
        );
        return b;
      }
      var e = b.prototype;
      e.getNetworkSamples = function () {
        return this.$OzBandwidthEstimatorBase2;
      };
      e.getStandardDeviationOfBandwidth = function () {
        return d(
          'oz-player/networks/OzBandwidthUtils',
        ).getStandardDeviationOfBandwidth(
          this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples(),
        );
      };
      e.getSampleCount = function () {
        return this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples()
          .length;
      };
      e.getAdjustedBandwidth = function (a) {
        return this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples()
          .length === 0
          ? this.getDefaultEstimate(a)
          : this.$OzBandwidthEstimatorBase3(a);
      };
      e.getBandwidthDiagnostics = function (a) {
        throw new Error('must be implementd by subclasses');
      };
      e.getBandwidth = function (a) {
        throw new Error('must be implementd by subclasses');
      };
      e.getBandwidthDiagnosticsFromHeaders = function (a) {
        a = this.getBandwidthDiagnostics(a);
        if (a == null) return null;
        var b =
          this.$OzBandwidthEstimatorBase2.getBandwidthEstimateFromHeaders();
        if (b == null) return a;
        var c, d;
        if (a != null)
          (c = a.timeToFirstByteMsEstimate),
            (d = a.timeToFirstByteMsStandardDeviation),
            (a = a.timeToFirstByteMsTotalWeight);
        else return null;
        return {
          bandwidthEstimate: b.meanEstimate,
          bandwidthStandardDeviation: b.standardDeviationEstimate,
          bandwidthTotalWeight: 1,
          timeToFirstByteMsEstimate: c,
          timeToFirstByteMsStandardDeviation: d,
          timeToFirstByteMsTotalWeight: a,
        };
      };
      e.getDefaultEstimate = function (a) {
        var b = this.$OzBandwidthEstimatorBase1.getCachedBandwidth();
        return typeof b === 'number' && b > 0
          ? b
          : a.getNumber('default_bandwidth_estimate', h);
      };
      e.$OzBandwidthEstimatorBase3 = function (a) {
        return this.getBandwidth(a);
      };
      e.addBandwidthSample = function (a, b) {
        this.$OzBandwidthEstimatorBase2.addBandwidthSample({
          bytes: a,
          timeInMs: b,
        }),
          this.emit('bandwidth_sampled');
      };
      e.addNavigationTimingSample = function (a, b, c) {
        a = { timeToFirstByteMs: a, timeToLastByteMs: b, bytes: c };
        this.enqueueNavigationTimingSample(a);
        this.$OzBandwidthEstimatorBase2.addNavigationTimingSample(a);
      };
      e.enqueueNavigationTimingSample = function (a) {};
      e.setBandwidthEstimateFromHeaders = function (a) {
        this.$OzBandwidthEstimatorBase2.setBandwidthEstimateFromHeaders(a);
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
