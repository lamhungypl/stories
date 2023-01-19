__d(
  'web-loom',
  [
    'Promise',
    'QPLEvent',
    'clamp',
    'interaction-tracing-metrics',
    'mapObject',
    'one-trace',
    'performanceNowSinceAppStart',
    'recoverableViolation',
    'regeneratorRuntime',
    'uuid',
    'vc-tracker',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = {
        js: 'js',
        css: 'css',
        wasm: 'wasm',
        woff: 'woff',
        woff2: 'woff2',
        otf: 'otf',
        eot: 'eot',
        ttf: 'ttf',
      };
    function i(a) {
      return Object.prototype.hasOwnProperty.call(h, a);
    }
    var j = new Map(),
      k = 0,
      l = /(\d{4,})/gm,
      m = /([a-f0-9]{8,})/gm;
    function n(a) {
      a = a.replace(l, '{N}');
      return a.replace(m, '{N}');
    }
    function o(a) {
      a = a.getPath();
      var b = a.lastIndexOf('.');
      return b === -1 ? '' : a.substring(b + 1);
    }
    function p() {
      return k++;
    }
    function q(a) {
      if (a.getProtocol() !== 'http' && a.getProtocol() !== 'https') return !1;
      var b = Number(a.getPort());
      if (!!b && b !== 80 && b !== 443) return !1;
      return a.isSubdomainOfDomain('fbcdn.net') ? !0 : !1;
    }
    function r(a, b) {
      b = new b.URI(a);
      a = o(b);
      b.setQueryString('');
      b.setFragment('');
      if (a === '' || a === 'php' || a === 'ico') {
        var c = n(b.getPath());
        c !== b.getPath() && b.setPath(c + '/sanitized-' + p());
      } else
        i(a) ||
          b.setPath('/sanitized' + (q(b) ? '-cdn' : '') + '-' + p() + '.' + a);
      return b.toString();
    }
    function s(a, b) {
      if (b.isBrowser('IE')) return '';
      j.has(a) || j.set(a, r(a, b));
      return j.get(a) || '';
    }
    function t(a) {
      return a.substr(0, 7) === 'http://' || a.substr(0, 8) === 'https://'
        ? !0
        : !1;
    }
    var u = (function () {
        var c = a.prototype;
        c.$1 = function (a) {
          return this.$2.sanitizeURIs && t(a) ? s(a, this.$3) : a;
        };
        c.$4 = function (a, b) {
          var c = this.$5;
          if (!c) return;
          c.buffer.addEvent(a, b + this.$2.appStart);
        };
        c.$6 = function (a, b) {
          var c = this,
            d = a.subSpans,
            e = function (e) {
              d[e].forEach(function (d, f) {
                f = {
                  blockName: e + '_' + f,
                  blockType: d.type,
                  execUnitName: e,
                  traceId: b,
                  traceType: a.type,
                };
                c.$4(
                  babelHelpers['extends'](
                    { type: 'INTERACTION_TRACE_START' },
                    f,
                  ),
                  d.start,
                );
                c.$4(
                  babelHelpers['extends'](
                    { blockAnnotations: d.data, type: 'INTERACTION_TRACE_END' },
                    f,
                  ),
                  d.end,
                );
              });
            };
          for (var f in d) e(f);
        };
        c.$7 = function (a, b) {
          var c = a.payloadResources;
          for (var d in c) {
            var e = c[d],
              f = this.$1(d),
              g = {
                blockName: f,
                blockType: 'PayloadResources',
                execUnitName: e.initiator,
                traceId: b,
                traceType: a.type,
              };
            this.$4(
              babelHelpers['extends']({ type: 'INTERACTION_TRACE_START' }, g),
              e.start,
            );
            this.$4(
              {
                blockName: f,
                execUnitName: e.initiator,
                pointAnnotations: {},
                pointName: 'requestStart',
                traceId: b,
                type: 'INTERACTION_TRACE_POINT',
              },
              e.requestStart,
            );
            this.$4(
              babelHelpers['extends'](
                {
                  blockAnnotations: {
                    refs: e.refs.join(','),
                    transferSize: e.transferSize,
                    url: this.$1(e.url),
                  },
                  type: 'INTERACTION_TRACE_END',
                },
                g,
              ),
              e.end,
            );
          }
        };
        c.$8 = function (a, b) {
          var c = a.imagePreloaderTimings;
          for (var d in c) {
            var e = c[d],
              f = this.$1(d),
              g = {
                blockName: f,
                blockType: 'ImagePreloaders',
                execUnitName: e.playloadName,
                traceId: b,
                traceType: a.type,
              };
            this.$4(
              babelHelpers['extends']({ type: 'INTERACTION_TRACE_START' }, g),
              e.start,
            );
            this.$4(
              {
                blockName: f,
                execUnitName: e.playloadName,
                pointAnnotations: {},
                pointName: 'requestStart',
                traceId: b,
                type: 'INTERACTION_TRACE_POINT',
              },
              e.requestStart,
            );
            this.$4(
              babelHelpers['extends'](
                { blockAnnotations: { url: f }, type: 'INTERACTION_TRACE_END' },
                g,
              ),
              e.end,
            );
          }
        };
        c.$9 = function (a, b) {
          var c = this,
            d = a.payloadTimings,
            e = function (e) {
              var f = d[e];
              if (f.start == null || f.end == null) return { v: void 0 };
              var g = {
                blockName: e,
                blockType: f.payloadType,
                execUnitName: e,
                traceId: b,
                traceType: a.type,
              };
              c.$4(
                babelHelpers['extends']({ type: 'INTERACTION_TRACE_START' }, g),
                f.start,
              );
              Object.keys(f.points).forEach(function (a) {
                c.$4(
                  {
                    blockName: e,
                    execUnitName: e,
                    pointAnnotations: {},
                    pointName: a,
                    traceId: b,
                    type: 'INTERACTION_TRACE_POINT',
                  },
                  f.points[a],
                );
              });
              var h = babelHelpers['extends']({}, f.data);
              for (var i in f.pkgStat) {
                var j = f.pkgStat[i];
                for (var k in j) h[i + '_' + k] = j[k];
              }
              c.$4(
                babelHelpers['extends'](
                  { blockAnnotations: h, type: 'INTERACTION_TRACE_END' },
                  g,
                ),
                f.end,
              );
            };
          for (var f in d) {
            var g = e(f);
            if (typeof g === 'object') return g.v;
          }
        };
        c.$10 = function (a, b) {
          var c = a.markerPoints;
          for (var d in c) {
            var e = c[d],
              f = e.timestamp,
              g = e.type;
            g = {
              blockName: d,
              blockType: g,
              execUnitName: d,
              traceId: b,
              traceType: a.type,
            };
            this.$4(
              babelHelpers['extends']({ type: 'INTERACTION_TRACE_START' }, g),
              f,
            );
            this.$4(
              babelHelpers['extends'](
                {
                  blockAnnotations: e.data || {},
                  type: 'INTERACTION_TRACE_END',
                },
                g,
              ),
              f,
            );
          }
        };
        c.$11 = function (a, b) {
          var c = a.requireDeferreds;
          for (var d in c) {
            var e = c[d],
              f = {
                blockName: d,
                blockType: 'RequireDeferreds',
                execUnitName: d,
                traceId: b,
                traceType: a.type,
              },
              g = e.end;
            if (g == null) continue;
            this.$4(
              babelHelpers['extends']({ type: 'INTERACTION_TRACE_START' }, f),
              e.start,
            );
            this.$4(
              babelHelpers['extends'](
                {
                  blockAnnotations: {
                    alreadyRequired: Boolean(e.alreadyRequired),
                  },
                  type: 'INTERACTION_TRACE_END',
                },
                f,
              ),
              g,
            );
          }
        };
        c.$12 = function (a, b, c, d) {
          for (var e = 0; e < d.length; e++) {
            var f = {
              blockName: a + '_' + e,
              blockType: a,
              execUnitName: a + '_' + e,
              traceId: c,
              traceType: b.type,
            };
            this.$4(
              babelHelpers['extends']({ type: 'INTERACTION_TRACE_START' }, f),
              d[e].start,
            );
            this.$4(
              babelHelpers['extends'](
                { blockAnnotations: {}, type: 'INTERACTION_TRACE_END' },
                f,
              ),
              d[e].end,
            );
          }
        };
        c.$13 = function (a) {
          var b = this;
          a.vcStateLog != null &&
            a.vcStateLog.forEach(function (c, d) {
              var e = c[0];
              c = c[1];
              d = {
                blockName: d,
                blockType: 'VCState',
                execUnitName: 'VCState',
                traceId: a.traceId,
                traceType: a.type,
              };
              b.$4(
                babelHelpers['extends']({ type: 'INTERACTION_TRACE_START' }, d),
                e,
              );
              b.$4(
                babelHelpers['extends'](
                  { blockAnnotations: {}, type: 'INTERACTION_TRACE_END' },
                  d,
                ),
                c,
              );
            });
        };
        c.$14 = function (a) {
          var b = this;
          a.factoryTimings.forEach(function (c) {
            var d = {
              blockName: c.name,
              blockType: 'Factories',
              execUnitName: 'Factories',
              traceId: a.traceId,
              traceType: a.type,
            };
            b.$4(
              babelHelpers['extends']({ type: 'INTERACTION_TRACE_START' }, d),
              c.start,
            );
            b.$4(
              babelHelpers['extends'](
                { blockAnnotations: {}, type: 'INTERACTION_TRACE_END' },
                d,
              ),
              c.end,
            );
          });
        };
        function a(a, b, c) {
          (this.$5 = a), (this.$3 = b), (this.$2 = c);
        }
        c.loomTraceWillEnd = function () {
          var a = this,
            c = this.$5;
          if (!c) return;
          var d = b(
              'interaction-tracing-metrics',
            ).InteractionTracingMetricsCore.dump(),
            e = [];
          if (
            c.triggerInfo.type === 'INTERACTION' &&
            c.triggerInfo.interaction_id != null
          )
            e.push(c.triggerInfo.interaction_id);
          else
            for (var f in d) {
              var g = d[f];
              g = g.completed != null ? this.$2.appStart + g.completed : null;
              (g == null || g > c.startTime) && e.push(f);
            }
          e.forEach(function (b) {
            var c = d[b];
            a.$6(c, b);
            a.$10(c, b);
            a.$11(c, b);
            a.$7(c, b);
            a.$8(c, b);
            a.$9(c, b);
            a.$12('hidden', c, b, c.hiddenTimings);
            a.$12('offline', c, b, c.offlineTimings);
            a.$14(c);
            a.$13(c);
          });
        };
        return a;
      })(),
      v = {
        getInstance: function (a, b, c) {
          return new u(a, b, c);
        },
        isSupported: function () {
          return !0;
        },
        loomProviderId: 'InteractionTracing',
      },
      w = (function () {
        function a(a, c) {
          var d = this;
          this.$1 = {};
          this.$2 = c.QuickPerformanceLogger.addListener({
            onMarkerStart: function (c, e, f) {
              c = b('QPLEvent').getMarkerId(c);
              f >= a.startTime &&
                a.buffer.addEvent(
                  { type: 'QPL_START', markerId: c, instanceKey: e },
                  f,
                );
              d.$1[c] || (d.$1[c] = {});
              d.$1[c][e] = f;
            },
            onMarkerEnd: function (c, d, e, f) {
              d = b('QPLEvent').getMarkerId(d);
              f >= a.startTime &&
                a.buffer.addEvent(
                  { type: 'QPL_END', action: c, markerId: d, instanceKey: e },
                  f,
                );
            },
            onMarkerPoint: function (c, d, e, f, g) {
              c = b('QPLEvent').getMarkerId(c);
              if (g >= a.startTime) {
                a.buffer.addEvent(
                  {
                    type: 'QPL_POINT',
                    markerId: c,
                    instanceKey: d,
                    name: e,
                    data:
                      f === null || f === void 0
                        ? void 0
                        : (c = f.string) === null || c === void 0
                        ? void 0
                        : c.__key,
                  },
                  g,
                );
              }
            },
            onAnnotation: function (c, e, f, g) {
              c = b('QPLEvent').getMarkerId(c);
              var h = d.$1[c];
              h = h === null || h === void 0 ? void 0 : h[e];
              h != null &&
                h >= a.startTime &&
                a.buffer.addEvent(
                  {
                    type: 'QPL_ANNOTATION',
                    markerId: c,
                    instanceKey: e,
                    annotationKey: f,
                    annotationValue: g,
                  },
                  h,
                );
            },
          });
        }
        var c = a.prototype;
        c.loomTraceWillEnd = function () {
          this.$2.dispose();
        };
        return a;
      })(),
      x = {
        loomProviderId: 'QPL',
        isSupported: function () {
          return !0;
        },
        getInstance: function (a, b) {
          return new w(a, b);
        },
      };
    function y(a, b) {
      b = b.substring(b.lastIndexOf('.') + 1);
      if (b == 'js' || b == 'css') return b;
      else if (a == 'img' || b == 'png' || b == 'jpg' || b == 'ico')
        return 'img';
      else return a;
    }
    var z = (function () {
        a.isSupported = function () {
          return (
            window.performance &&
            window.performance.getEntriesByType &&
            window.performance.timing &&
            window.performance.timing.navigationStart
          );
        };
        function a(a, b, c) {
          (this.$1 = a), (this.$2 = b), (this.$3 = c);
        }
        var c = a.prototype;
        c.$4 = function (a) {
          var c = this,
            d = a.entry,
            e = a.resourceName,
            f = a.resourceId,
            g = a.resourceType,
            h = a.startTime,
            i = a.endTime,
            j = this.$1;
          if (j != null) {
            a = d;
            j.buffer.addEvent(
              {
                type: 'RESOURCE_TIMING_START',
                resourceType: g,
                resourceId: f,
                resourceName: e,
                encodedSize:
                  a != null && typeof a.encodedBodySize === 'number'
                    ? a.encodedBodySize
                    : 0,
                decodedSize:
                  a != null && typeof a.decodedBodySize === 'number'
                    ? a.decodedBodySize
                    : 0,
                transferSize:
                  a != null && typeof a.transferSize === 'number'
                    ? a.transferSize
                    : 0,
              },
              h,
            );
            e = function (a, d) {
              d = d + c.$3.appStart;
              j.buffer.addEvent(
                {
                  type: 'RESOURCE_TIMING_POINT',
                  resourceType: g,
                  resourceId: f,
                  pointName: a,
                },
                b('clamp')(d, h, i),
              );
            };
            e('requestStart', d.requestStart);
            e('responseStart', d.responseStart);
            j.buffer.addEvent(
              { type: 'RESOURCE_TIMING_END', resourceType: g, resourceId: f },
              i,
            );
          }
        };
        c.$5 = function (a) {
          if (this.$3.sanitizeURIs) return s(a, this.$2);
          var b = a.indexOf('?');
          return b == -1 ? a : a.substring(0, b);
        };
        c.loomTraceWillEnd = function () {
          var a = this,
            c = this.$1;
          if (c != null) {
            var d = c.startTime,
              e = b('performanceNowSinceAppStart')() + this.$3.appStart;
            window.performance
              .getEntriesByType('resource')
              .filter(function (b) {
                return (
                  b.startTime < b.responseEnd &&
                  b.startTime + a.$3.appStart >= d &&
                  b.responseEnd + a.$3.appStart <= e
                );
              })
              .forEach(function (f, c) {
                var d = f.startTime + a.$3.appStart,
                  e = f.responseEnd + a.$3.appStart,
                  g = a.$5(f.name),
                  b = y(f.initiatorType, g);
                a.$4({
                  entry: f,
                  resourceName: g,
                  resourceId: c,
                  resourceType: b,
                  startTime: d,
                  endTime: e,
                });
              });
            c = window.performance.getEntriesByType('navigation')[0];
            c =
              typeof PerformanceNavigationTiming !== 'undefined' &&
              c instanceof PerformanceNavigationTiming
                ? c
                : null;
            if (
              c != null &&
              (c.responseEnd === 0 || c.responseEnd + this.$3.appStart >= d)
            ) {
              var f = 'document',
                g = -1,
                h = d > this.$3.appStart ? d : this.$3.appStart,
                i = c.responseEnd === 0 ? e : c.responseEnd + this.$3.appStart;
              this.$4({
                entry: c,
                resourceName: this.$5(location.href),
                resourceId: g,
                resourceType: f,
                startTime: h,
                endTime: i,
              });
            }
          }
          this.$1 = null;
        };
        return a;
      })(),
      A = {
        loomProviderId: 'ResourceTiming',
        isSupported: function () {
          return z.isSupported();
        },
        getInstance: function (a, b, c) {
          return new z(a, b, c);
        },
      },
      B = b('vc-tracker').VisualCompletionTraceObserver,
      C = (function () {
        a.isSupported = function () {
          return !0;
        };
        function a(a, b, c) {
          var d = this;
          this.$2 = function (a) {
            var b = d.$1;
            if (
              b != null &&
              a != null &&
              a.startTime + d.$3.appStart >= b.startTime
            ) {
              var c = new Map();
              a.elements.forEach(function (a) {
                var b;
                c.set(
                  a.timestamp,
                  ((b = c.get(a.timestamp)) !== null && b !== void 0 ? b : 0) +
                    a.pixels,
                );
              });
              Array.from(c.entries())
                .sort(function (a, b) {
                  return a[0] - b[0];
                })
                .reduce(function (c, e) {
                  var f = e[0];
                  e = e[1];
                  c = c + e;
                  b.buffer.addEvent(
                    {
                      progress: c / a.paintedPixels,
                      type: 'VISUAL_COMPLETION_PROGRESS',
                    },
                    f + d.$3.appStart,
                  );
                  return c;
                }, 0);
              d.$4(
                b,
                a,
                a.elements.filter(function (a) {
                  return a.parent == null;
                }),
                0,
              );
            }
          };
          this.$1 = a;
          B.subscribe(this.$2);
          this.$3 = c;
        }
        var b = a.prototype;
        b.$4 = function (a, b, c, d, e) {
          var f = this;
          e === void 0 && (e = null);
          c.slice()
            .sort(function (a, b) {
              return a.timestamp - b.timestamp;
            })
            .forEach(function (c) {
              var g = c.rectangle,
                h =
                  c.type === 'component' || e == null
                    ? c.timestamp
                    : Math.max(c.timestamp, e.timestamp);
              a.buffer.addEvent(
                {
                  depth: d,
                  elementType: c.type,
                  height: Math.floor(g.bottom - g.top),
                  mutationType: c.mutationType,
                  lateMutationType: c.hadLateMutationUnexpected
                    ? 'unexpected'
                    : c.hadLateMutationExpected
                    ? 'expected'
                    : void 0,
                  type: 'VISUAL_COMPLETION_RECT',
                  width: Math.floor(g.right - g.left),
                  x: Math.floor(g.left),
                  y: Math.floor(g.top),
                },
                h + f.$3.appStart,
              );
              c.children.length && f.$4(a, b, c.children, d + 1, c);
            });
        };
        b.loomTraceWillEnd = function () {
          B.unsubscribe(this.$2), (this.$1 = null);
        };
        return a;
      })(),
      D = {
        getInstance: function (a, b, c) {
          return new C(a, b, c);
        },
        isSupported: function () {
          return C.isSupported();
        },
        loomProviderId: 'VisualCompletion',
      },
      E = (function () {
        function a() {
          this.$1 = [];
        }
        var c = a.prototype;
        c.addEvent = function (a, c) {
          this.$1.push({
            event: a,
            timestamp:
              c !== null && c !== void 0
                ? c
                : b('performanceNowSinceAppStart')(),
          });
        };
        c.flushEvents = function () {
          return this.$1;
        };
        return a;
      })();
    function F(a, b, c, d) {
      b =
        b === 'QPL'
          ? a.samplingConfig.adaptive_config.qpl
          : a.samplingConfig.adaptive_config.interactions;
      a = d != null ? c + '.' + d : '' + c;
      d = b.events[a];
      if (d != null) return d;
      d = (a = b.modules[(c >> 16) & 65535]) !== null && a !== void 0 ? a : 0;
      return d;
    }
    function G() {
      return !window.Uint8Array || !window.btoa ? !1 : !0;
    }
    function H(a, b, c, d) {
      c = c.flushEvents();
      if (!G()) return null;
      var e = b.start_time_us,
        f = b.end_time_us,
        g = e / 1e3,
        h = f / 1e3;
      if (d != null) {
        var i = g - d.stats.timeOrigin,
          j = h - d.stats.timeOrigin;
        d.trace.samples = d.trace.samples.filter(function (a) {
          return a.timestamp >= i && a.timestamp <= j;
        });
      }
      var k = JSON.stringify(b) + '\n{}\n' + JSON.stringify(d || null) + '\n',
        l = 0;
      c.forEach(function (a) {
        var b = Math.round(a.timestamp * 1e3);
        if (b < e || b > f) return;
        var c = b - l;
        l = b;
        b = a.event;
        a = [c, b.type];
        switch (b.type) {
          case 'QPL_ANNOTATION':
            a.push(b.markerId);
            a.push(b.instanceKey);
            a.push(b.annotationKey);
            a.push(b.annotationValue);
            break;
          case 'QPL_START':
            a.push(b.markerId);
            a.push(b.instanceKey);
            break;
          case 'QPL_END':
            a.push(b.markerId);
            a.push(b.instanceKey);
            a.push(b.action);
            break;
          case 'QPL_POINT':
            a.push(b.markerId);
            a.push(b.instanceKey);
            a.push(b.name);
            b.data != null && a.push(b.data);
            break;
          case 'RESOURCE_TIMING_START':
            a.push(b.resourceType);
            a.push(b.resourceId);
            a.push(b.resourceName);
            a.push(b.encodedSize);
            a.push(b.decodedSize);
            a.push(b.transferSize);
            break;
          case 'RESOURCE_TIMING_END':
            a.push(b.resourceType);
            a.push(b.resourceId);
            break;
          case 'RESOURCE_TIMING_POINT':
            a.push(b.resourceType);
            a.push(b.resourceId);
            a.push(b.pointName);
            break;
          case 'INTERACTION_TRACE_START':
            a.push(b.traceId);
            a.push(b.execUnitName);
            a.push(b.blockName);
            a.push(b.blockType);
            a.push(b.traceType);
            break;
          case 'INTERACTION_TRACE_END':
            a.push(b.traceId);
            a.push(b.execUnitName);
            a.push(b.blockName);
            a.push(b.blockType);
            a.push(b.traceType);
            a.push(b.blockAnnotations);
            break;
          case 'INTERACTION_TRACE_POINT':
            a.push(b.traceId);
            a.push(b.execUnitName);
            a.push(b.blockName);
            a.push(b.pointName);
            a.push(b.pointAnnotations);
            break;
          case 'VISUAL_COMPLETION_RECT':
            a.push(b.elementType);
            a.push(b.depth);
            a.push(b.x);
            a.push(b.y);
            a.push(b.width);
            a.push(b.height);
            a.push(b.mutationType);
            a.push(b.lateMutationType);
            break;
          case 'VISUAL_COMPLETION_PROGRESS':
            a.push(b.progress);
            break;
          case 'JS_SCHEDULER_QUEUE':
            a.push(b.priority);
            a.push(b.queueSize);
            break;
        }
        k += JSON.stringify(a) + '\n';
      });
      return a.compressStringToSnappy(k);
    }
    var I = new Set(['InteractionTracing']);
    a = (function () {
      function a(a, c) {
        (this.$1 = a),
          (this.$2 = c),
          (this.$3 = [v, D, A, x]),
          (this.$4 = new Set(
            this.$3.map(function (a) {
              return a.loomProviderId;
            }),
          )),
          (this.$5 = new Set(
            this.$3.map(function (a) {
              return a.loomProviderId;
            }),
          )),
          (this.$6 = new Map()),
          (this.$7 = new Map()),
          (this.$8 = G()),
          (this.$9 = !1),
          (this.$10 = 1),
          (this.$11 = new Map()),
          (this.$12 = b('uuid')()),
          (this.$13 = 1);
      }
      var c = a.prototype;
      c.getNextSequenceNumber = function () {
        var a = this.$13;
        this.$13++;
        return a;
      };
      c.getSessionId = function () {
        return this.$12;
      };
      c.getActiveTraces = function () {
        return this.$6;
      };
      c.addProvider = function (a, b) {
        b === void 0 && (b = !0),
          this.$5.has(a.loomProviderId) ||
            (this.$3.push(a), this.$5.add(a.loomProviderId)),
          b && !this.$4.has(a.loomProviderId) && this.$4.add(a.loomProviderId);
      };
      c.addStatusListener = function (a) {
        var b = this,
          c = this.$10++;
        this.$11.set(c, a);
        return {
          dispose: function () {
            b.$11['delete'](c);
          },
        };
      };
      c.maybeStartTraceForInteraction = function (a, c, d, e, f) {
        d = b('QPLEvent').getMarkerId(d);
        var g = F(this.$1, 'INTERACTION', d, e);
        if (!this.$2.Random.coinflip(g)) return null;
        f = f + this.$1.appStart;
        c = {
          interaction_class: c,
          interaction_id: a,
          qpl_marker_id: '' + d,
          sample_rate: g,
          trace_policy: e,
          type: 'INTERACTION',
        };
        return this.startTrace(a, c, f, this.$1.useLiteTracing ? I : void 0);
      };
      c.endTraceForInteraction = function (a, c, d) {
        var e = a.traceId,
          f = babelHelpers['extends']({}, null);
        for (var h in a.annotations)
          for (var i in a.annotations[h]) f[i] = a.annotations[h][i];
        f.qpl_action = c;
        i = (g || (g = b('mapObject')))(a.tagSet, function (a) {
          return Array.from(a);
        });
        h = a.completed;
        c =
          (c = a.markerPoints.visuallyComplete) === null || c === void 0
            ? void 0
            : c.timestamp;
        a =
          (a = a.markerPoints.logVC) === null || a === void 0
            ? void 0
            : a.timestamp;
        h = Math.max(
          h !== null && h !== void 0 ? h : 0,
          c !== null && c !== void 0 ? c : 0,
          a !== null && a !== void 0 ? a : 0,
          d !== null && d !== void 0 ? d : 0,
        );
        c = h > 0 ? h : b('performanceNowSinceAppStart')();
        a = c + this.$1.appStart;
        return this.endTrace(e, a, f, i);
      };
      c.startTrace = function (a, c, d, e) {
        var f = this;
        e === void 0 && (e = this.$4);
        if (!this.$8) return null;
        if (this.$6.has(a)) {
          b('recoverableViolation')(
            'Already running trace for triggerId: ' + a,
            'web_loom',
          );
          return null;
        }
        var g = this.$13++,
          h = {
            buffer: new E(),
            triggerId: a,
            triggerInfo: c,
            startTime: d,
            sequenceNumber: g,
          },
          i = new Set(),
          j = [];
        this.$3.forEach(function (a) {
          e.has(a.loomProviderId) &&
            a.isSupported() &&
            (j.push(a.getInstance(h, f.$2, f.$1)), i.add(a.loomProviderId));
        });
        var k = 'STARTED';
        this.$6.set(a, {
          traceContext: h,
          providerInstances: j,
          status: k,
          startURI: window.location.href,
        });
        this.$11.forEach(function (a) {
          return a(h, k);
        });
        var l = this.$12 + '_' + g;
        b('one-trace') &&
          (this.$14 = b('one-trace').subscribe('trace-start', function (a) {
            (a.traceType === 'LONGTASK' || a.traceType === 'INPUT_DELAY') &&
              ((a.annotations.string.loomRefId = l),
              (a.annotations.string_array.loomProviders = Array.from(i)));
          }));
        return { traceReferenceId: l, loomProviders: i };
      };
      c.endTrace = function (a, c, d, e) {
        var f = this,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o;
        return b('regeneratorRuntime').async(
          function (p) {
            while (1)
              switch ((p.prev = p.next)) {
                case 0:
                  g = this.$6.get(a);
                  if (g) {
                    p.next = 4;
                    break;
                  }
                  b('recoverableViolation')(
                    'No trace running for triggerId: ' + a,
                    'web_loom',
                  );
                  return p.abrupt('return', !1);
                case 4:
                  h = g.traceContext.sequenceNumber;
                  this.$6['delete'](a);
                  this.$7.set(h, g);
                  this.$15(g, 'END_PENDING');
                  i = [];
                  g.providerInstances.forEach(function (a) {
                    a = a.loomTraceWillEnd();
                    a && i.push(a);
                  });
                  this.$14 && this.$14();
                  j = window.location.href;
                  p.prev = 12;
                  p.next = 15;
                  return b('regeneratorRuntime').awrap(b('Promise').all(i));
                case 15:
                  k = this.$1.perfXData;
                  l = g.traceContext.triggerInfo;
                  m = {
                    app_id: this.$1.appId,
                    start_time_us: Math.round(g.traceContext.startTime * 1e3),
                    end_time_us: Math.round(c * 1e3),
                    trigger_id: g.traceContext.triggerId,
                    trigger_info: l,
                    trigger_metadata: d,
                    trigger_metadata_sets: e,
                    client_push_phase: k.client_push_phase,
                    device_num_cores: k.num_cores,
                    device_ram_bytes:
                      k.ram_gb != null ? k.ram_gb * 1073741824 : null,
                    is_rtl: k.isRTL,
                    locale: k.locale,
                    network_effective_connection_type:
                      k.effective_connection_type,
                    network_downlink_bps:
                      k.downlink_megabits != null &&
                      k.downlink_megabits * 1e6 < 1e20
                        ? k.downlink_megabits * 1e6
                        : null,
                    network_rtt_ms: k.rtt_ms,
                    client_rev: this.$1.clientRev,
                    server_rev: this.$1.serverRev,
                    spin_mode: this.$1.spinMode,
                    start_uri: g.startURI,
                    end_uri: j,
                  };
                  n = H(
                    this.$2,
                    m,
                    g.traceContext.buffer,
                    g.traceContext.jsSelfProfilerData,
                  );
                  n != null
                    ? ((o = {
                        trace: n,
                        session_id: this.$12,
                        sequence_number: g.traceContext.sequenceNumber,
                        qpl_marker_id: l.qpl_marker_id,
                        trace_policy: l.trace_policy,
                        sample_rate: l.sample_rate,
                      }),
                      this.$2.Transport.post(o, {
                        onComplete: function () {
                          f.$15(g, 'COMPLETE'), f.$7['delete'](h);
                        },
                        isHighPri: this.$9,
                      }),
                      this.$15(g, 'UPLOAD_PENDING'))
                    : (this.$15(g, 'COMPLETE'), this.$7['delete'](h));
                  p.next = 26;
                  break;
                case 22:
                  (p.prev = 22),
                    (p.t0 = p['catch'](12)),
                    this.$15(g, 'ERROR'),
                    this.$7['delete'](h);
                case 26:
                  return p.abrupt('return', !0);
                case 27:
                case 'end':
                  return p.stop();
              }
          },
          null,
          this,
          [[12, 22]],
        );
      };
      c.flush = function (a) {
        var b = this,
          c = new Set(),
          d = new Set();
        this.$7.forEach(function (a) {
          a.status === 'END_PENDING'
            ? c.add(a.traceContext.sequenceNumber)
            : a.status === 'UPLOAD_PENDING' &&
              d.add(a.traceContext.sequenceNumber);
        });
        if (c.size > 0)
          var e = this.addStatusListener(function (d) {
            c['delete'](d.sequenceNumber),
              c.size === 0 && (b.$2.Transport.flush(a, a), e.dispose());
          });
        else d.size > 0 ? this.$2.Transport.flush(a, a) : a && a();
      };
      c.setIsDevToolsConnected = function (a) {
        this.$9 = a;
      };
      c.$15 = function (a, b) {
        (a.status = b),
          this.$11.forEach(function (b) {
            return b(a.traceContext, a.status);
          });
      };
      return a;
    })();
    f.WebLoomCore = a;
  },
  null,
);
