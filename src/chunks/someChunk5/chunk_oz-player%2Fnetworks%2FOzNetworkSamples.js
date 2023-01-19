__d(
  'oz-player/networks/OzNetworkSamples',
  ['oz-player/configs/OzGlobalConfig'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        (this.$1 = !1),
          (this.$2 = []),
          (this.$3 = []),
          (this.$4 = null),
          (this.$5 = null);
      }
      var b = a.prototype;
      b.setBandwidthCache = function (a) {
        this.$4 = a;
      };
      b.getRecentBandwidthSamples = function () {
        return this.$6().recentBandwidthSamples;
      };
      b.getRecentNavigationTimingSamples = function () {
        return this.$6().recentNavigationTimingSamples;
      };
      b.setBandwidthEstimateFromHeaders = function (a) {
        this.$5 = a;
      };
      b.getBandwidthEstimateFromHeaders = function () {
        return this.$5;
      };
      b.$6 = function () {
        if (
          !this.$1 &&
          this.$4 != null &&
          c('oz-player/configs/OzGlobalConfig').getNumber(
            'bandwidth_ttfb_samples_to_save',
            5,
          ) > 0
        ) {
          this.$1 = !0;
          var a = this.$4.getCachedSamples();
          a != null &&
            ((this.$2 = a.bandwidth), (this.$3 = a.navigationTiming));
        }
        return {
          recentBandwidthSamples: this.$2,
          recentNavigationTimingSamples: this.$3,
        };
      };
      b.addBandwidthSample = function (a) {
        this.$2.push(babelHelpers['extends']({}, a, { timestamp: Date.now() })),
          this.$2.length >
            c('oz-player/configs/OzGlobalConfig').getNumber(
              'max_bandwidth_sample_count',
              30,
            ) && this.$2.shift();
      };
      b.addNavigationTimingSample = function (a) {
        this.$3.push(babelHelpers['extends']({}, a, { timestamp: Date.now() })),
          this.$3.length >
            c('oz-player/configs/OzGlobalConfig').getNumber(
              'max_bandwidth_sample_count',
              30,
            ) && this.$3.shift();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
