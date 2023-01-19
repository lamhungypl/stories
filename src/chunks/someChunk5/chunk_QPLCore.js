__d(
  'QPLCore',
  [
    'QPLEvent',
    'QPLTimestamp',
    'QPLUtils',
    'QuickPerformanceLoggerTypes',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b, c, d) {
      var e = b[a];
      if (!e || Object.entries(e).length === 0) return null;
      var f = {};
      Object.keys(e).forEach(function (a) {
        var b = e[a];
        b == null || b.length === 0
          ? delete e[a]
          : d
          ? (f[a] = d(b))
          : (f[a] = b);
      });
      return (b = {}), (b[a] = babelHelpers['extends']({}, c && c[a], f)), b;
    }
    function i(a, b) {
      if (a == null) return b;
      var c = babelHelpers['extends'](
        {},
        b,
        h('string', a, b),
        h('int', a, b, Math.trunc),
        h('double', a, b),
        h('bool', a, b),
        h('string_array', a, b),
        h('int_array', a, b, function (a) {
          return a.map(Math.trunc);
        }),
        h('double_array', a, b),
        h('bool_array', a, b),
      );
      Object.keys(c).forEach(function (a) {
        var b = c[a];
        (b == null || Object.entries(b).length === 0) && delete c[a];
      });
      return Object.entries(c).length !== 0 ? c : null;
    }
    function j(a, b) {
      var c = {};
      b.trackedForLoss === !0 && (c.tracked_for_loss = !0);
      typeof b.absoluteTimeOrigin === 'number' &&
        (c.absolute_time_origin_ns = d(
          'QPLTimestamp',
        ).timestampToSerializedNanoseconds(b.absoluteTimeOrigin));
      b = babelHelpers['extends']({}, a, c);
      return b;
    }
    function k(a, b) {
      if (!b) return a;
      var c = {};
      b.string && (c.annotations = b.string);
      b['int'] && (c.annotations_int = b['int']);
      b['double'] && (c.annotations_double = b['double']);
      b.bool && (c.annotations_bool = b.bool);
      b.string_array && (c.annotations_string_array = b.string_array);
      b.int_array && (c.annotations_int_array = b.int_array);
      b.double_array && (c.annotations_double_array = b.double_array);
      b.bool_array && (c.annotations_bool_array = b.bool_array);
      return babelHelpers['extends']({}, a, c);
    }
    var l = new Map([
      [
        d('QuickPerformanceLoggerTypes').EVENT_BASED_SAMPLING,
        'random_sampling',
      ],
      [d('QuickPerformanceLoggerTypes').USER_BASED_SAMPLING, 'per_user'],
    ]);
    function m(a, b) {
      if (a === 0) return !1;
      if (a <= 1) return !0;
      return typeof b === 'string'
        ? d('QPLUtils').unsignedCrc32(b) % a === 0
        : Math.random() * a <= 1;
    }
    a = (function () {
      function a(a) {
        this.$2 = 1;
        this.$3 = 100;
        this.$4 = new Map();
        this.$5 = new Map();
        this.$6 = null;
        this.$8 = new Map();
        this.activeMarkers = new Map();
        this.$1 = a;
        this.$7 = a.logger;
        this.$5 = (a = a.listenersWithMarker) != null ? a : new Map();
        this.$9 = new Map();
      }
      var b = a.prototype;
      b.getMarker = function (a, b) {
        a = this.$10(d('QPLEvent').getMarkerId(a));
        if (!a) return null;
        a = a.get(b);
        return !a ? null : a;
      };
      b.$10 = function (a) {
        return this.activeMarkers.get(a);
      };
      b.addMarker = function (a, b, c) {
        var d = this.activeMarkers.get(a);
        d || ((d = new Map()), this.activeMarkers.set(a, d));
        d.set(b, c);
      };
      b.deleteMarker = function (a, b) {
        (a = this.activeMarkers.get(a)) == null ? void 0 : a['delete'](b);
      };
      b.markerStart = function (a, b, c, e) {
        b === void 0 && (b = 0);
        c === void 0 && (c = this.currentTimestamp());
        e = e === void 0 ? {} : e;
        var f = e.cancelExisting;
        f = f === void 0 ? !1 : f;
        var g = e.cancelOnUnload;
        g = g === void 0 ? !1 : g;
        var h = e.trackedForLoss;
        h = h === void 0 ? !1 : h;
        var i = e.type;
        i = i === void 0 ? 1 : i;
        var j = e.samplingBasis;
        j = j === void 0 ? null : j;
        var k = e.qplInternalDoNotUseAbsoluteTimeOrigin;
        e = e.timeoutMS;
        e = e === void 0 ? null : e;
        var l = this.getMarker(a, b);
        if (l) {
          l = Math.round(c - l.timestamp);
          f &&
            (this.markerAnnotate(
              a,
              {
                string: { cancel_type: 'DUPLICATE_EVENT' },
                int: { time_between_markers_ms: l },
              },
              { instanceKey: b },
            ),
            this.markerEnd(a, 4, b, c));
        }
        f = this.$11(a, j);
        l = f[0];
        j = f[1];
        f = f[2];
        var m = {
          event: a,
          passesSampling: l,
          timestamp: c,
          sampleRate: j,
          samplingMethod: f,
          points: [],
          cancelOnUnload: g,
          trackedForLoss: h,
          type: i,
        };
        typeof k === 'number' && (m.absoluteTimeOrigin = k);
        this.$4.forEach(function (d) {
          d.onMarkerStart && d.onMarkerStart(a, b, c);
        });
        this.$5.forEach(function (d) {
          d.onMarkerStartWithMarker(a, b, c, m);
        });
        l &&
          (this.addMarker(d('QPLEvent').getMarkerId(a), b, m),
          e != null && this.$12(a, b, e));
        l &&
          h === !0 &&
          this.$13({
            marker_id: 27787271,
            action_id: 0,
            sample_rate: 1,
            annotations_int: {
              tracked_marker_id: d('QPLEvent').getMarkerId(a),
            },
            marker_type: 1,
          });
        l &&
          this.$4.forEach(function (d) {
            d.onMarkerStarted && d.onMarkerStarted(a, b, c);
          });
      };
      b.$14 = function (a, b) {
        var c = this.$9.get(a);
        c == null ? void 0 : c['delete'](b);
        (c == null ? void 0 : c.size) === 0 && this.$9['delete'](a);
      };
      b.$15 = function (a, b, c) {
        this.$9.has(a) || this.$9.set(a, new Map());
        a = this.$9.get(a);
        a == null ? void 0 : a.set(b, c);
      };
      b.$16 = function (a, b) {
        var c, d;
        c = (c = this.$9.get(a)) == null ? void 0 : c.get(b);
        if (!c) return;
        if (
          !((d = this.$1.runtimeAbstractionLayer) == null
            ? void 0
            : d.clearTimeout)
        )
          return;
        this.$1.runtimeAbstractionLayer.clearTimeout(c);
        this.$14(a, b);
      };
      b.$12 = function (a, b, c) {
        var e,
          f = this,
          g = d('QPLEvent').getMarkerId(a);
        this.$16(g, b);
        if (
          !((e = this.$1.runtimeAbstractionLayer) == null
            ? void 0
            : e.setTimeout)
        )
          return;
        e =
          (e = this.$1.runtimeAbstractionLayer) == null
            ? void 0
            : e.setTimeout(function () {
                f.$4.forEach(function (c) {
                  c.onTimeoutEvent != null &&
                    c.onTimeoutEvent({ event: a, instanceKey: b });
                }),
                  f.$14(g, b),
                  f.markerEnd(a, 113, b);
              }, c);
        this.$15(g, b, e);
      };
      b.markerAnnotate = function (a, b, c) {
        c = c === void 0 ? {} : c;
        c = c.instanceKey;
        var d = c === void 0 ? 0 : c;
        this.$4.forEach(function (c) {
          Object.keys(b).forEach(function (e) {
            var f = b[e];
            if (!f) return;
            Object.keys(f).forEach(function (b) {
              c.onAnnotation && c.onAnnotation(a, d, b, f[b]);
            });
          });
        });
        c = this.getMarker(a, d);
        if (!c) return;
        c.annotations = i(b, c.annotations);
      };
      b.markerPoint = function (a, b, c) {
        c = c === void 0 ? {} : c;
        var d = c.instanceKey,
          e = d === void 0 ? 0 : d,
          f = c.data;
        d = c.timestamp;
        var g = d === void 0 ? this.currentTimestamp() : d;
        this.$4.forEach(function (c) {
          c.onMarkerPoint && c.onMarkerPoint(a, e, b, f, g);
        });
        c = this.getMarker(a, e);
        if (!c) return;
        d = { name: b, timeSinceStart: Math.trunc(g - c.timestamp) };
        var h = i(f);
        h && (d.data = h);
        c.points.push(d);
      };
      b.markerEnd = function (a, b, c, e) {
        c === void 0 && (c = 0);
        e === void 0 && (e = this.currentTimestamp());
        var f = this.getMarker(a, c);
        if (!f) {
          this.$4.forEach(function (d) {
            var f = { durationMs: 0 };
            d.onMarkerEnd && d.onMarkerEnd(b, a, c, e, f);
          });
          return;
        }
        var g = {
          marker_id: d('QPLEvent').getMarkerId(a),
          action_id: b,
          instance_id: c,
          sample_rate: f.sampleRate,
          method: l.get(f.samplingMethod),
          duration_ns: d('QPLTimestamp').calculateDurationAsNanoseconds(
            f.timestamp,
            e,
          ),
          points: f.points,
          metadata: {
            application_analytics: {
              time_since_qpl_module_init: e - this.$1.moduleLoadTimestamp,
            },
          },
          marker_type: f.type,
          flags: 1,
          unique_marker_id_debug_only: f.uniqueMarkerDebugId,
        };
        g = k(g, f.annotations);
        var h = j(g, f);
        this.$4.forEach(function (d) {
          var g = { durationMs: f ? e - f.timestamp : 0, logData: h };
          d.onMarkerEnd && d.onMarkerEnd(b, a, c, e, g);
        });
        f.passesSampling &&
          (f.timestampIsApproximate !== !0 && this.$13(h),
          this.$6 === d('QPLEvent').getMarkerId(a) &&
            this.$1.onDebuggingIdEnded &&
            this.$1.onDebuggingIdEnded(),
          this.$16(d('QPLEvent').getMarkerId(a), c));
        this.deleteMarker(d('QPLEvent').getMarkerId(a), c);
      };
      b.markerDrop = function (a, b) {
        b === void 0 && (b = 0);
        this.deleteMarker(d('QPLEvent').getMarkerId(a), b);
        var c = this.currentTimestamp();
        this.$4.forEach(function (d) {
          d.onMarkerDrop && d.onMarkerDrop(a, b, c);
        });
      };
      b.markEvent = function (a, b, c, e) {
        e = e === void 0 ? {} : e;
        var f = e.timestamp,
          g = f === void 0 ? this.currentTimestamp() : f,
          h = e.annotations;
        this.$4.forEach(function (b) {
          b.onMarkEvent &&
            b.onMarkEvent({ event: a, timestamp: g, annotations: h });
        });
        if (
          (f = this.$1.quickLogConfigHelper) == null
            ? void 0
            : f.isKillswitchOn()
        )
          return;
        e = this.$11(a);
        f = e[0];
        var j = e[1];
        e = e[2];
        if (!f) return;
        f = i(typeof h === 'function' ? h() : h);
        j = {
          marker_id: d('QPLEvent').getMarkerId(a),
          action_id: 0,
          instance_id: 0,
          sample_rate: j,
          method: l.get(e),
          da_type: b,
          da_level: c,
          metadata: {
            application_analytics: {
              time_since_qpl_module_init: g - this.$1.moduleLoadTimestamp,
            },
          },
          marker_type: 1,
          flags: 1,
        };
        this.$13(k(j, f));
      };
      b.dropAllMarkers = function () {
        this.activeMarkers.clear();
      };
      b.setAlwaysOnSampleRate = function (a, b) {
        this.$8.set(a, b);
      };
      b.setDefaultSampleRate = function (a) {
        this.$3 = a;
      };
      b.currentTimestamp = function () {
        return this.$1.performanceNow();
      };
      b.enableDebug = function (a) {
        this.$6 = a;
      };
      b.disableDebug = function () {
        this.$6 = null;
      };
      b.addListener = function (a) {
        var b = this,
          c = this.$2++;
        this.$4.set(c, a);
        return {
          dispose: function () {
            b.$4['delete'](c);
          },
        };
      };
      b.$11 = function (a, b) {
        if (
          (this.$1.unsampleAllEvents && this.$1.unsampleAllEvents()) ||
          this.$6 === d('QPLEvent').getMarkerId(a)
        )
          return [!0, 1, d('QuickPerformanceLoggerTypes').EVENT_BASED_SAMPLING];
        var c = d('QPLEvent').getSampleRate(a),
          e = d('QPLEvent').getSamplingMethod(a);
        if (
          this.$8.get(a) == null &&
          c !== 0 &&
          e === d('QuickPerformanceLoggerTypes').USER_BASED_SAMPLING
        ) {
          var f;
          return [
            !0,
            (f = c) != null ? f : 1,
            d('QuickPerformanceLoggerTypes').USER_BASED_SAMPLING,
          ];
        }
        f = (a = (f = this.$8.get(a)) != null ? f : c) != null ? a : this.$3;
        a =
          (c = e) != null
            ? c
            : d('QuickPerformanceLoggerTypes').EVENT_BASED_SAMPLING;
        e = m(f, b);
        return [e, f, a];
      };
      b.$13 = function (a) {
        this.$4.forEach(function (b) {
          b.onUploadEvent && b.onUploadEvent(a);
        });
        var b = this.$1.decorateEventBeforeUpload
          ? this.$1.decorateEventBeforeUpload(a)
          : a;
        this.$1.sendEvent(a, b);
      };
      b.getActiveMarkerIds = function (a) {
        var b = a.type,
          c = new Set();
        this.activeMarkers.forEach(function (a, d) {
          a.forEach(function (a) {
            if (a.type === b) {
              c.add(d);
              return;
            }
          });
        });
        return Array.from(c);
      };
      b.forEachMarkerInstance = function (a, b) {
        a = this.$10(a);
        if (!a) return;
        for (
          var a = a.entries(),
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          b(f, e.event);
        }
      };
      b.getMarkerStartTs = function (a, b) {
        b = b === void 0 ? {} : b;
        b = b.instanceKey;
        b = b === void 0 ? 0 : b;
        a = this.getMarker(a, b);
        if (!a) return;
        return a.timestamp;
      };
      b.markerLogDebugPoints = function (a, b) {
        b = b === void 0 ? {} : b;
        b = b.instanceKey;
        b = b === void 0 ? 0 : b;
        var e = d('QPLEvent').getMarkerId(a);
        e = this.getMarker(a, b);
        if (!e) return;
        a = c('uuid')();
        e.uniqueMarkerDebugId = a;
      };
      return a;
    })();
    a.normalizeAnnotations = i;
    g['default'] = a;
  },
  98,
);
