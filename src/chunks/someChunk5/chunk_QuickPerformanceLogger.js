__d(
  'QuickPerformanceLogger',
  [
    'Arbiter',
    'Bootloader',
    'Env',
    'FBLogger',
    'PerfFalcoEvent',
    'PerfXSharedFields',
    'Promise',
    'QPLCore',
    'QPLEvent',
    'Run',
    'USID',
    'WebStorage',
    'cr:1984081',
    'cr:686',
    'gkx',
    'performanceAbsoluteNow',
    'performanceNavigationStart',
    'performanceNow',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      var b = c('PerfXSharedFields').getCommonData();
      b = {
        memory_stats: {
          total_mem: b.ram_gb != null ? b.ram_gb * 1073741824 : null,
        },
        network_stats: {
          downlink_megabits: b.downlink_megabits,
          network_subtype: b.effective_connection_type,
          rtt_ms: b.rtt_ms,
        },
        sitedata_info: {
          client_push_phase: b.client_push_phase,
          client_revision: b.client_revision,
          server_revision: b.server_revision,
        },
        locale_info: { locale: b.locale, isRTL: b.isRTL },
      };
      c('gkx')('1224637') &&
        (b.workplace_info = { is_gemini: c('gkx')('1217157') });
      if (
        c('gkx')('3752') &&
        typeof window.__sapienzMetadataCallback__ === 'function'
      ) {
        var d = window.__sapienzMetadataCallback__();
        b.sapienz = {
          request_id: String(d.requestId),
          config_name: String(d.configName),
        };
      }
      c('gkx')('4075') &&
        (b.usid = { usid_override: c('USID').get().serializeForRequest() });
      return babelHelpers['extends']({}, a, {
        metadata: babelHelpers['extends']({}, a.metadata, b),
      });
    }
    function i(a, b, c) {
      return { i: a, m: c, r: b };
    }
    function j(a, d) {
      return new (b('Promise'))(function () {
        var b = d || a;
        typeof window.__je2e_recordQPLMarker === 'function' &&
          window.__je2e_recordQPLMarker(b);
        c('Env').enable_qplinspector === !0 &&
          c('Bootloader').loadModules(
            ['QPLInspector'],
            function (a) {
              a.appendLog(b);
            },
            'QuickPerformanceLogger',
          );
        c('gkx')('1554827') || c('gkx')('708253') || c('gkx')('3831')
          ? c('PerfFalcoEvent').logImmediately(function () {
              return b;
            })
          : c('gkx')('2772')
          ? c('PerfFalcoEvent').logCritical(function () {
              return b;
            })
          : c('PerfFalcoEvent').log(function () {
              return b;
            });
      });
    }
    function k(a) {
      a = babelHelpers['extends']({}, a, {
        config_type: c('gkx')('8126') ? 'alpha_beta' : 'prod',
      });
      return h(a);
    }
    function l() {
      return (
        c('Env').enable_qplinspector === !0 ||
        typeof window.__je2e_recordQPLMarker === 'function' ||
        c('gkx')('1738486')
      );
    }
    function m() {
      c('Arbiter').inform('qpl_debugger_finished');
    }
    var n = c('performanceAbsoluteNow')();
    typeof window.__je2e_felabsTracePlugin_setQplInit === 'function' &&
      window.__je2e_felabsTracePlugin_setQplInit(c('performanceNow')());
    var o = {
        debug: function (a, b, c) {},
        warn: function (a) {
          c('FBLogger')('qpl').blameToPreviousDirectory().warn(a);
        },
      },
      p = 'qpl';
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var b;
        b =
          a.call(this, {
            decorateEventBeforeUpload: k,
            unsampleAllEvents: l,
            onDebuggingIdEnded: m,
            performanceNow: c('performanceAbsoluteNow'),
            moduleLoadTimestamp: n,
            logger: o,
            sendEvent: j,
            runtimeAbstractionLayer: {
              setTimeout: window.setTimeout,
              clearTimeout: window.clearTimeout,
            },
            debugLoggingEnabled: c('Env').qpl_debug_logging,
          }) || this;
        var e = c('gkx')('2772') ? d('Run').onBeforeUnload : d('Run').onUnload;
        e(function () {
          b.$QuickPerformanceLogger1(),
            b.$QuickPerformanceLogger2(706, {
              respectUnloadPolicy: !0,
              timestamp: b.currentTimestamp(),
            });
        });
        b.$QuickPerformanceLogger3();
        b.initQplFlipperPlugin();
        b.initQplSapienzPlugin();
        return b;
      }
      var f = e.prototype;
      f.$QuickPerformanceLogger3 = function () {
        var a = this,
          b = c('WebStorage').getSessionStorageForRead();
        if (!b) {
          this.$QuickPerformanceLogger4(
            '_loadSavedState',
            'sessionStorage is not available',
          );
          return;
        }
        var d = b.getItem(p);
        if (d == null) return;
        b.removeItem(p);
        b = JSON.parse(d);
        if (b == null) {
          this.$QuickPerformanceLogger4(
            '_loadSavedState',
            'Saved state failed to deserialize',
          );
          return;
        }
        if (b.markers == null || b.markers.length === 0) {
          this.$QuickPerformanceLogger4(
            '_loadSavedState',
            'No saved markers found',
          );
          return;
        }
        b.markers.forEach(function (b) {
          var c = b[0],
            d = b[1];
          b = b[2];
          a.addMarker(c, d, b);
          a.$QuickPerformanceLogger4(
            '_loadSavedState',
            'Marker ' + c + ' (instanceKey: ' + d + ') resumed',
          );
        });
      };
      f.$QuickPerformanceLogger1 = function () {
        var a = this,
          b = [];
        this.activeMarkers.forEach(function (a, c) {
          a.forEach(function (a, d) {
            a.resumeAfterNavigation === !0 &&
              (delete a.resumeAfterNavigation, b.push([c, d, a]));
          });
        });
        if (b.length > 0) {
          var d = { markers: b },
            e = c('WebStorage').getSessionStorage();
          e = c('WebStorage').setItemGuarded(e, p, JSON.stringify(d));
          e &&
            (b.forEach(function (b) {
              var c = b[0],
                d = b[1];
              b = b[2];
              c = i(c, b.sampleRate, b.samplingMethod);
              a.markerEnd(c, 96, d);
            }),
            this.$QuickPerformanceLogger4(
              '_storeSavedState',
              'Failed to store saved state: ' + e.message,
            ),
            c('FBLogger')('qpl')
              .catching(e)
              .warn(
                'Failed to store QPL state: ' + JSON.stringify(d, null, 2),
              ));
          b.forEach(function (b) {
            var c = b[0];
            b = b[1];
            a.deleteMarker(c, b);
          });
        }
      };
      f.markerStoreBeforeNavigation = function (a, b) {
        b = b === void 0 ? {} : b;
        b = b.instanceKey;
        b = b === void 0 ? 0 : b;
        var c = d('QPLEvent').getMarkerId(a);
        a = this.getMarker(a, b);
        if (!a) {
          this.$QuickPerformanceLogger4(
            'markerStoreBeforeNavigation',
            'Failed to set marker to store on page unload. Could not find marker ' +
              c +
              ', instancekey=' +
              b,
          );
          return;
        }
        a.resumeAfterNavigation = !0;
        this.$QuickPerformanceLogger4(
          'markerStoreBeforeNavigation',
          'Set marker ' + c + ' to store on page unload, instancekey=' + b,
        );
      };
      f.markerStartFromNavStart = function (a, b, d) {
        b === void 0 && (b = 0);
        d = d === void 0 ? {} : d;
        var e = d.cancelExisting;
        e = e === void 0 ? !1 : e;
        var f = d.cancelOnUnload;
        f = f === void 0 ? !1 : f;
        var g = d.trackedForLoss;
        g = g === void 0 ? !1 : g;
        var h = d.type;
        h = h === void 0 ? 1 : h;
        d = d.qplInternalDoNotUseConvertToTimeOnServer;
        var i = c('performanceNavigationStart')();
        d = typeof d === 'function' ? d(i) : void 0;
        this.markerStart(a, b, i, {
          cancelExisting: e,
          cancelOnUnload: f,
          trackedForLoss: g,
          type: h,
          qplInternalDoNotUseAbsoluteTimeOrigin: d,
        });
        if (c('performanceNavigationStart').isPolyfilled) {
          i = this.getMarker(a, b);
          i && (i.timestampIsApproximate = !0);
        }
      };
      f.$QuickPerformanceLogger2 = function (a, b) {
        var c = this;
        b = b === void 0 ? {} : b;
        var d = b.timestamp,
          e = b.respectUnloadPolicy;
        this.activeMarkers.forEach(function (b, f) {
          b.forEach(function (b, g) {
            if (!e || b.cancelOnUnload === !0) {
              b = i(f, b.sampleRate, b.samplingMethod);
              c.markerEnd(b, a, g, d);
            }
          });
        });
      };
      f.$QuickPerformanceLogger4 = function (a, b, c) {
        o.debug(a, b, c);
      };
      f.initQplFlipperPlugin = function () {
        b('cr:686') != null &&
          this.addListener(b('cr:686').qplFlipperPlugin.listener());
      };
      f.initQplSapienzPlugin = function () {
        b('cr:1984081') != null &&
          this.addListener(b('cr:1984081').getQplSapienzListener());
      };
      return e;
    })(c('QPLCore'));
    e = new a();
    f.exports = e;
  },
  34,
);
