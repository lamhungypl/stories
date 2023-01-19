__d(
  'QPLUserFlow',
  [
    'ErrorMetadata',
    'ErrorPubSub',
    'QPLEvent',
    'QPLJoinUtils',
    'QuickPerformanceLogger',
    'cr:1752405',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      if (b === null) {
        var c;
        return (c = a) != null ? c : null;
      }
      a = (c = a) != null ? c : {};
      a.string || (a.string = {});
      a.string.uf_debug_info = b;
      return a;
    }
    a = (function () {
      function a() {
        var a = this;
        b('cr:1752405')();
        c('ErrorPubSub').unshiftListener(function (b) {
          if (b.type !== 'fatal') return;
          var d = a.getActiveFlowIDs();
          if (d.length === 0) return;
          var e = new (c('ErrorMetadata'))();
          e.clearEntries();
          d.forEach(function (a) {
            e.addEntry('QPL', 'ACTIVE_FLOW_ID', a.toString());
          });
          d = e.format();
          b.metadata
            ? (b.metadata = [].concat(b.metadata, d))
            : (b.metadata = d);
        });
        this.$1 = new Map();
      }
      var e = a.prototype;
      e.$2 = function (a, b, c, e, f) {
        var g = this,
          h;
        if (e == null) return;
        e = window.setTimeout(function () {
          f != null && f(a, b, c),
            g.endTimeout(a, { instanceKey: b, joinID: c });
        }, e);
        this.$1.has(d('QPLEvent').getMarkerId(a)) ||
          this.$1.set(d('QPLEvent').getMarkerId(a), new Map());
        (h = this.$1.get(d('QPLEvent').getMarkerId(a))) == null
          ? void 0
          : h.set(b, e);
      };
      e.start = function (a, b) {
        b = b === void 0 ? {} : b;
        var e = b.instanceKey;
        e = e === void 0 ? 0 : e;
        var f = b.annotations,
          g = b.cancelExisting;
        g = g === void 0 ? !1 : g;
        var h = b.cancelOnUnload;
        h = h === void 0 ? !0 : h;
        var i = b.timestamp,
          j = b.trackedForLoss;
        j = j === void 0 ? !0 : j;
        var k = b.joinID,
          l = b.timeoutInMs,
          m = b.onFlowTimeout;
        b = b.qplInternalDoNotUseAbsoluteTimeOrigin;
        c('QuickPerformanceLogger').markerStart(a, e, i, {
          cancelExisting: g,
          cancelOnUnload: h,
          trackedForLoss: j,
          type: 2,
          samplingBasis: k,
          qplInternalDoNotUseAbsoluteTimeOrigin: b,
        });
        this.$2(a, e, k, l, m);
        f &&
          c('QuickPerformanceLogger').markerAnnotate(a, f, { instanceKey: e });
        k != null &&
          (d('QPLJoinUtils').setJoinId(c('QuickPerformanceLogger'), a, k, {
            instanceKey: e,
          }),
          d('QPLJoinUtils').markJoinRequest(c('QuickPerformanceLogger'), a, k, {
            instanceKey: e,
          }));
      };
      e.startFromNavStart = function (a, b) {
        b = b === void 0 ? {} : b;
        var d = b.instanceKey;
        d = d === void 0 ? 0 : d;
        var e = b.annotations,
          f = b.cancelExisting;
        f = f === void 0 ? !1 : f;
        var g = b.cancelOnUnload;
        g = g === void 0 ? !0 : g;
        var h = b.trackedForLoss;
        h = h === void 0 ? !0 : h;
        var i = b.joinID,
          j = b.timeoutInMs,
          k = b.onFlowTimeout;
        b = b.qplInternalDoNotUseConvertToTimeOnServer;
        c('QuickPerformanceLogger').markerStartFromNavStart(a, d, {
          cancelExisting: f,
          cancelOnUnload: g,
          trackedForLoss: h,
          type: 2,
          samplingBasis: i,
          qplInternalDoNotUseConvertToTimeOnServer: b,
        });
        this.$2(a, d, i, j, k);
        e &&
          c('QuickPerformanceLogger').markerAnnotate(a, e, { instanceKey: d });
      };
      e.endSuccess = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.instanceKey;
        c = c === void 0 ? 0 : c;
        var d = b.annotations,
          e = b.joinID;
        b = b.timestamp;
        this.$3(a, 2, c, e, d, b);
      };
      e.endFailure = function (a, b, c) {
        c = c === void 0 ? {} : c;
        var d = c.instanceKey;
        d = d === void 0 ? 0 : d;
        var e = c.debugInfo,
          f = c.annotations,
          g = c.joinID,
          h = c.timestamp;
        c = c.error;
        this.markError(a, b, { debugInfo: e, instanceKey: d, error: c });
        this.$3(a, 3, d, g, f, h);
      };
      e.endValidationFailure_DO_NOT_USE = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.instanceKey;
        c = c === void 0 ? 0 : c;
        var d = b.debugInfo,
          e = b.annotations,
          f = b.joinID;
        b = b.timestamp;
        this.markError(a, 'validation_failed', {
          debugInfo: d,
          instanceKey: c,
        });
        this.$3(a, 7952, c, f, e, b);
      };
      e.endTimeout = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.instanceKey;
        c = c === void 0 ? 0 : c;
        var d = b.annotations,
          e = b.joinID;
        b = b.timestamp;
        this.$3(a, 113, c, e, d, b);
      };
      e.endCancel = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.instanceKey;
        c = c === void 0 ? 0 : c;
        var d = b.cancelReason;
        d = d === void 0 ? 4 : d;
        var e = b.annotations,
          f = b.joinID;
        b = b.timestamp;
        this.$3(a, d, c, f, e, b);
      };
      e.$3 = function (a, b, e, f, g, h) {
        var i;
        i =
          (i = this.$1.get(d('QPLEvent').getMarkerId(a))) == null
            ? void 0
            : i.get(e);
        if (i != null) {
          window.clearTimeout(i);
          (i = this.$1.get(d('QPLEvent').getMarkerId(a))) == null
            ? void 0
            : i['delete'](e);
        }
        g &&
          c('QuickPerformanceLogger').markerAnnotate(a, g, { instanceKey: e });
        f != null &&
          (h != null
            ? d('QPLJoinUtils').markJoinResponse(
                c('QuickPerformanceLogger'),
                a,
                f,
                { instanceKey: e, timestamp: h },
              )
            : d('QPLJoinUtils').markJoinResponse(
                c('QuickPerformanceLogger'),
                a,
                f,
                { instanceKey: e },
              ));
        h != null
          ? c('QuickPerformanceLogger').markerEnd(a, b, e, h)
          : c('QuickPerformanceLogger').markerEnd(a, b, e);
      };
      e.addAnnotations = function (a, b, d) {
        d = d === void 0 ? {} : d;
        d = d.instanceKey;
        c('QuickPerformanceLogger').markerAnnotate(a, b, { instanceKey: d });
      };
      e.addPoint = function (a, b, d) {
        d = d === void 0 ? {} : d;
        var e = d.instanceKey,
          f = d.debugInfo,
          g = d.data;
        d = d.timestamp;
        f = h(g, (g = f) != null ? g : null);
        c('QuickPerformanceLogger').markerPoint(a, b, {
          data: f,
          instanceKey: e,
          timestamp: d,
        });
      };
      e.markError = function (a, b, d) {
        d = d === void 0 ? {} : d;
        var e = d.debugInfo,
          f = d.instanceKey;
        d = d.error;
        c('QuickPerformanceLogger').markerAnnotate(
          a,
          babelHelpers['extends']({}, this.$4(d), {
            bool: ((d = {}), (d.uf_has_error = !0), d),
          }),
          { instanceKey: f },
        );
        this.addPoint(a, b, { debugInfo: e, instanceKey: f });
      };
      e.storeBeforeNavigation = function (a, b) {
        b = b === void 0 ? {} : b;
        b = b.instanceKey;
        b = b === void 0 ? 0 : b;
        c('QuickPerformanceLogger').markerStoreBeforeNavigation(a, {
          instanceKey: b,
        });
      };
      e.getActiveFlowIDs = function () {
        return c('QuickPerformanceLogger').getActiveMarkerIds({ type: 2 });
      };
      e.$4 = function (a) {
        var b;
        if (a == null) return {};
        var c = { int: {}, string: {} };
        c.string.uf_error_name = a.name;
        a = a;
        (a == null ? void 0 : (b = a.source) == null ? void 0 : b.code) !=
          null &&
          (c['int'].uf_graphql_error_code = a == null ? void 0 : a.source.code);
        if (
          (a == null
            ? void 0
            : (b = a.source) == null
            ? void 0
            : (b = b.exception) == null
            ? void 0
            : b['class']) != null
        ) {
          c.string.uf_graphql_exception_class =
            a == null
              ? void 0
              : (b = a.source) == null
              ? void 0
              : (a = b.exception) == null
              ? void 0
              : a['class'];
        }
        return c;
      };
      return a;
    })();
    e = new a();
    g['default'] = e;
  },
  98,
);
