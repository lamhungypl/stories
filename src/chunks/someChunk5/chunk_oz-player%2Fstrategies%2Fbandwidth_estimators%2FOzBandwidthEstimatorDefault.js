__d(
  'oz-player/strategies/bandwidth_estimators/OzBandwidthEstimatorDefault',
  [
    'oz-player/networks/OzBandwidthUtils',
    'oz-player/shims/OzVideoPlayerODS',
    'oz-player/strategies/bandwidth_estimators/OzBandwidthEstimatorBase',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.getBandwidthDiagnostics = function (a) {
        return d('oz-player/networks/OzBandwidthUtils').getBandwidthDiagnostics(
          this.getNetworkSamples().getRecentBandwidthSamples(),
          a.getNumber('bandwidth_estimator_half_life', 6),
          this.getNetworkSamples().getRecentNavigationTimingSamples(),
          a.getNumber('time_to_first_byte_estimate_half_life_ms', 500),
        );
      };
      c.getBandwidth = function (a) {
        var b = d('oz-player/networks/OzBandwidthUtils').getBandwidthEstimate(
          this.getNetworkSamples().getRecentBandwidthSamples(),
          a.getNumber('bandwidth_estimator_half_life', 6),
          a.getNumber('bandwidth_estimator_outlier_exclusion_factor', 50),
          a.getNumber('bandwidth_estimator_std_dev_penalty_factor', 0),
        );
        if (b > 0) return b;
        d('oz-player/shims/OzVideoPlayerODS').bumpEntityKey(
          'comet_video_player',
          'OzImplementation.bandwidth_estimate_invalid_default',
          1,
        );
        return this.getDefaultEstimate(a);
      };
      return b;
    })(c('oz-player/strategies/bandwidth_estimators/OzBandwidthEstimatorBase'));
    b = new a();
    e = b;
    g['default'] = e;
  },
  98,
);
