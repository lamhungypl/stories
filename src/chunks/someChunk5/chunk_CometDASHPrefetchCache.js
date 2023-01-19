__d(
  'CometDASHPrefetchCache',
  [
    'ConstUriUtils',
    'MosUtils',
    'OzSystemicRiskUtils',
    'clearTimeout',
    'oz-player/configs/OzGlobalConfig',
    'oz-player/networks/OzBandwidthEstimator',
    'oz-player/parsers/getMIMECodecs',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 6e4,
      i = 2e3,
      j = 500;
    a = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.fetch = function (a) {
        this.$1.size === 0 && (this.$2(a), this.$3(a));
      };
      b.clear = function () {
        var a = this;
        this.$1.forEach(function (b, c) {
          a.$4(c);
        });
        this.$1.clear();
      };
      b.hasCacheValue = function (a) {
        return this.$1.has(a);
      };
      b.getCacheValue = function (a) {
        var b = this.$1.get(a);
        b && (this.$4(a), this.$1['delete'](a));
        return b == null ? void 0 : b.request;
      };
      b.getCachedRepresentations = function () {
        var a = [];
        this.$1.forEach(function (b) {
          b = b.representationID;
          a.indexOf(b) === -1 && a.push(b);
        });
        return a;
      };
      b.$4 = function (a) {
        a = this.$1.get(a);
        a && a.cancelTimeoutID != null && c('clearTimeout')(a.cancelTimeoutID);
      };
      b.$3 = function (a) {
        a = a.find(function (a) {
          return a.mimeType.indexOf('audio') > -1;
        });
        if (a == null) return;
        this.$5(a);
      };
      b.$2 = function (a) {
        a = a.filter(function (a) {
          return a.mimeType.indexOf('video') > -1;
        });
        if (a.length === 0) return;
        var b = a[0];
        a.sort(function (a, b) {
          return a.bandwidth - b.bandwidth;
        });
        a = this.$6(a);
        if (a.length === 0) return;
        var e = c(
          'oz-player/networks/OzBandwidthEstimator',
        ).getBandwidthDiagnostics(c('oz-player/configs/OzGlobalConfig'));
        if (e == null) {
          this.$5(b);
          return;
        }
        b = null;
        for (var f = 0; f < a.length; f++) {
          var g = a[Math.max(f - 1, 0)],
            k = Math.min(g.height, g.width),
            l = null,
            m = c('oz-player/configs/OzGlobalConfig').getNumber(
              'systemic_risk_abr_prefetch_low_mos_resolution',
              0,
            );
          if (
            c('oz-player/configs/OzGlobalConfig').getBool(
              'systemic_risk_abr_parse_prefetch_mos',
              !1,
            )
          ) {
            g = d('MosUtils').parsePlaybackMos(g.playbackResolutionMOS);
            g != null && ((l = d('MosUtils').getMosValue(g, j)), (m = 0));
          }
          g = d('OzSystemicRiskUtils').getRiskFactorsForRepresentation({
            bandwidthDiagnostics: e,
            bitrate: a[f].bandwidth,
            bufferAhead: 0,
            config: c('oz-player/configs/OzGlobalConfig'),
            hasMadeInitialDecision: !1,
            initialRiskFactor: c('oz-player/configs/OzGlobalConfig').getNumber(
              'systemic_risk_abr_prefetch_initial_risk_factor',
              1,
            ),
            lowMosResolution: m,
            minWatchableMos: c('oz-player/configs/OzGlobalConfig').getNumber(
              'systemic_risk_abr_min_watchable_mos',
              0,
            ),
            previousMos: l,
            previousResolution: k,
            remainingVideoDurationMs: h,
            segmentFetchRangeDurationMs: i,
          });
          m = g.multiplier;
          if (isNaN(m)) break;
          l = d('OzSystemicRiskUtils').isEffectiveBitrateBelowBandwidthEstimate(
            a[f].bandwidth,
            m,
            i,
            e,
          );
          if (l) b = a[f];
          else break;
        }
        g = (k = b) != null ? k : a[0];
        this.$5(g);
      };
      b.$5 = function (a) {
        var b = this;
        a.segments.forEach(function (c) {
          c = b.$7(a.baseURL, c);
          if (c == null) return;
          var d = window.fetch(c).then(function (a) {
            return { initiator: 'FETCH', response: a };
          });
          d = d['catch'](function () {});
          b.$8(c, { representationID: a.representationID, request: d });
        });
      };
      b.$8 = function (a, b) {
        var d = this;
        this.$4(a);
        var e = c('oz-player/configs/OzGlobalConfig').getNumber(
            'prefetch_retention_duration_ms',
            0,
          ),
          f = null;
        e > 0 &&
          (f = c('setTimeout')(function () {
            d.$1['delete'](a);
          }, e));
        this.$1.set(a, babelHelpers['extends']({}, b, { cancelTimeoutID: f }));
      };
      b.$7 = function (a, b) {
        return (a = d('ConstUriUtils').getUri(a)) == null
          ? void 0
          : (a = a.addQueryParam('bytestart', b.start)) == null
          ? void 0
          : (a = a.addQueryParam('byteend', b.end)) == null
          ? void 0
          : a.toString();
      };
      b.$6 = function (a) {
        var b;
        a = a.filter(function (a) {
          var b;
          return (b = window.MediaSource) == null
            ? void 0
            : b.isTypeSupported(
                c('oz-player/parsers/getMIMECodecs')(a.mimeType, a.codecs),
              );
        });
        var d = (b = window.devicePixelRatio) != null ? b : 1,
          e = c('oz-player/configs/OzGlobalConfig').getNumber(
            'prefetch_resolution_threshold',
            0,
          );
        e === 0 && (e = Infinity);
        b = a.filter(function (a) {
          a = Math.min(a.width, a.height);
          return a / d <= e;
        });
        return b.length > 0 ? b : a.length > 0 ? [a[0]] : [];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
