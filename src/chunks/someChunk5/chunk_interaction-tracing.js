__d(
  'interaction-tracing',
  [
    'JSScheduler',
    'MemoryUtils',
    'NetworkStatus',
    'Promise',
    'QPLEvent',
    'QuickLogActionType',
    'clearTimeout',
    'hero-tracing',
    'hero-tracing-placeholder',
    'interaction-tracing-metrics',
    'one-trace',
    'performance',
    'performanceNavigationStart',
    'performanceNowSinceAppStart',
    'regeneratorRuntime',
    'setTimeoutAcrossTransitions',
    'uuid',
    'vc-tracker',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = document.visibilityState !== void 0 || document.hidden !== void 0;
    function i() {
      if (h)
        return document.visibilityState !== void 0
          ? document.visibilityState === 'hidden'
          : document.hidden;
      else return !1;
    }
    var j = 1e3,
      k = [],
      l = null;
    f = !1;
    var m = new Set();
    f || (i() && (l = 0), (f = !0));
    h &&
      document.addEventListener('visibilitychange', function (a) {
        var c =
          (a = a === null || a === void 0 ? void 0 : a.timeStamp) !== null &&
          a !== void 0
            ? a
            : b('performanceNowSinceAppStart')();
        n(c, i());
        m.forEach(function (a) {
          a(c, i());
        });
      });
    function n(a, b) {
      b
        ? (l = a)
        : l != null &&
          (k.push({ start: l, end: a }), k.length > j && k.shift(), (l = null));
    }
    function o(a) {
      m.add(a);
      return function () {
        m['delete'](a);
      };
    }
    function p(a, c) {
      var d = [];
      k.concat(
        l != null
          ? [{ start: l, end: b('performanceNowSinceAppStart')() }]
          : [],
      ).forEach(function (b) {
        b.start <= a && b.end > a
          ? b.end <= c
            ? d.push({ start: a, end: b.end })
            : d.push({ start: a, end: c })
          : b.start > a &&
            b.start <= c &&
            (b.end <= c
              ? d.push({ start: b.start, end: b.end })
              : d.push({ start: b.start, end: c }));
      });
      return d;
    }
    function q(a, b) {
      var c = 0;
      a = p(a, b);
      a.forEach(function (a) {
        c += a.end - a.start;
      });
      return c;
    }
    function r(a, b) {
      a = q(a, b);
      return a > 0;
    }
    function aa(a) {
      window.addEventListener('beforeunload', a);
      return {
        remove: function () {
          try {
            window.removeEventListener('beforeunload', a);
          } catch (a) {
            if (a.message !== "can't access dead object") throw a;
          }
        },
      };
    }
    var s = 600,
      t = 150,
      u = 5;
    function v(a) {
      var c =
        a === null || a === void 0 ? void 0 : a.annotations.string.tracePolicy;
      return (
        ((a =
          a !== null && a !== void 0 && a.qplEvent
            ? b('QPLEvent').getMarkerId(a.qplEvent)
            : null) !== null && a !== void 0
          ? a
          : 'unknown') +
        ':' +
        (typeof c === 'string' ? c : 'unknown')
      );
    }
    function w(a, c, d, e, f) {
      var g;
      if (d.interactionID !== a.traceId) g = 'OtherInteraction';
      else if (c.has(d.placeholderID)) g = 'LatePlaceholder';
      else if (!e) g = 'IncompletePlaceholder';
      else return;
      c = {};
      c.type = g;
      e !== null &&
        e !== void 0 &&
        e.spanType &&
        (c.spanType = e === null || e === void 0 ? void 0 : e.spanType);
      if (g === 'OtherInteraction') {
        var h = b(
          'interaction-tracing-metrics',
        ).InteractionTracingMetricsCore.get(d.interactionID);
        c.interactionType = v(h);
      }
      h =
        (h = e === null || e === void 0 ? void 0 : e.endTime) !== null &&
        h !== void 0
          ? h
          : f;
      f =
        (e =
          (f = e === null || e === void 0 ? void 0 : e.name) !== null &&
          f !== void 0
            ? f
            : d.description) !== null && e !== void 0
          ? e
          : '[No Description]';
      b('interaction-tracing-metrics').InteractionTracingMetricsCore.addSubspan(
        a.traceId,
        g === 'OtherInteraction' ? 'OtherInteraction: ' + f : f,
        g === 'OtherInteraction' ? 'HeroDebug' : 'LatePlaceholder',
        d.startTime,
        Math.max(h, d.startTime),
        c,
      );
    }
    var x = 'LatePlaceholder';
    function ba(a, c, d) {
      if (!(c.heroLatePlaceholderDetection || c.heroDebugTracing)) return;
      var e = a.getTraceId(),
        f = b('interaction-tracing-metrics').InteractionTracingMetricsCore.get(
          e,
        );
      if (!f) return;
      var g = f,
        h = new Map(),
        i = new Map(),
        j = new Set(),
        k = 0,
        l = b('hero-tracing').HeroLogger.subscribeToPlaceholders({
          onStart: function (a) {
            if (a.interactionID !== e && !c.heroDebugTracing) return;
            a.interactionID === e &&
              g.completed != null &&
              j.add(a.placeholderID);
            h.set(a.placeholderID, a);
          },
          onEnd: function (a) {
            if (a.interactionID !== e && !c.heroDebugTracing) return;
            i.set(a.placeholderID, a);
          },
        });
      function m() {
        l(), a.unlockInteractionLogging(x);
      }
      function n() {
        var a = b('performanceNowSinceAppStart')(),
          d = new Set();
        h.forEach(function (b) {
          var c = i.get(b.placeholderID);
          b.interactionID !== e && d.add(b.interactionID);
          w(g, j, b, c, a);
        });
        c.heroDebugTracing &&
          d.forEach(function (c) {
            var d = b(
              'interaction-tracing-metrics',
            ).InteractionTracingMetricsCore.get(c);
            if (d) {
              b(
                'interaction-tracing-metrics',
              ).InteractionTracingMetricsCore.addSubspan(
                e,
                'OtherInteraction: ' + v(d),
                'HeroDebug',
                Math.max(d.start, g.start),
                Math.min((d = d.completed) !== null && d !== void 0 ? d : a, a),
                { otherInteractionID: c },
              );
            }
          });
        m();
      }
      function o() {
        k === 0 ||
        (k <= u &&
          Array.from(j).some(function (a) {
            return !i.has(a);
          }))
          ? (setTimeout(o, k === 0 ? s : t), k++)
          : n();
      }
      a.lockInteractionLogging(x);
      a.onCompleteSync(function () {
        if (!d()) {
          m();
          return;
        }
        c.heroLatePlaceholderDetection
          ? setTimeout(function () {
              o();
            })
          : n();
      });
    }
    var y = /^((server_)?adp_|Relay_)/,
      z = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/),
      A = new Set([
        'AppTiming',
        'TierFlush',
        'NavigationTiming',
        'VisualCompletion',
        'TestMetrics',
      ]),
      B = 4;
    function C(a, b, c, d) {
      a.QuickPerformanceLogger.markerAnnotate(
        b,
        { int: { numReactCommit: c.size } },
        { instanceKey: d },
      );
    }
    function D(a, b, c, d, e) {
      a.QuickPerformanceLogger.markerAnnotate(
        b,
        { string_array: ((a = {}), (a[c] = d), a) },
        { instanceKey: e },
      );
    }
    function E(a, b, c, d, e, f) {
      a.QuickPerformanceLogger.markerPoint(b, c, {
        data: d != null ? { string: { __key: d } } : null,
        instanceKey: e,
        timestamp: f,
      });
    }
    function F(a, b, c, d) {
      a.QuickPerformanceLogger.markerAnnotate(b, c.annotations, {
        instanceKey: d,
      });
      for (var e in c.tagSet) {
        var f = Array.from(c.tagSet[e]).sort();
        D(a, b, e, f, d);
      }
    }
    function G(b, c, d, e, f, a) {
      for (var g in e) {
        var h = e[g],
          i = h.data,
          j = h.timestamp;
        h = h.type;
        if (!A.has(h) || a.exec(g)) continue;
        h = i;
        z.test(g) &&
          g !== 'late_mutation/unexpected_1' &&
          i !== null &&
          i !== void 0 &&
          i.reactStack &&
          (h = H(e[g], ['reactStack']));
        E(
          c,
          d,
          g,
          h && Object.keys(h).length ? JSON.stringify(h) : void 0,
          f,
          j + b.appStart,
        );
      }
    }
    function H(a, b) {
      a = a.data;
      var c = a != null ? JSON.parse(JSON.stringify(a)) : null;
      c != null &&
        b.forEach(function (a) {
          return delete c[a];
        });
      return c;
    }
    function I(b, c, d, e, f, a) {
      for (var g in e) {
        if (a.exec(g)) continue;
        for (var h = 0; h < e[g].length; h++) {
          var i = e[g][h],
            j = i.data,
            k = i.end,
            l = i.start;
          i = i.type;
          if (!A.has(i)) continue;
          i = e[g].length === 1 ? g : g + '_' + (h >= B ? 'MAX' : h + 1);
          E(c, d, i + '_start', void 0, f, l + b.appStart);
          E(
            c,
            d,
            i + '_end',
            Object.keys(j).length ? JSON.stringify(j) : void 0,
            f,
            k + b.appStart,
          );
        }
      }
    }
    function ca(a, b, c, d, e, f) {
      f =
        f !== null && f !== void 0 && f.qplMarkerType
          ? { type: f.qplMarkerType }
          : babelHelpers['extends']({}, null);
      b.QuickPerformanceLogger.markerStart(c, e, d + a.appStart, f);
    }
    function da(a, c, d, e, f, g) {
      C(c, d, f.commitSet, g);
      F(c, d, f, g);
      G(a, c, d, f.markerPoints, g, y);
      I(a, c, d, f.subSpans, g, y);
      f = a.qplActionMap[e];
      c.QuickPerformanceLogger.markerEnd(
        d,
        f,
        g,
        b('performanceNowSinceAppStart')() + a.appStart,
      );
      return f;
    }
    function a(a, c, d, e, f) {
      var h = typeof window.qpl_inl === 'function' ? window.qpl_inl() : {};
      h = h[d + '-server'];
      if (h) {
        d =
          ((g || (g = b('performance'))) === null ||
          (g || (g = b('performance'))) === void 0
            ? void 0
            : (g || (g = b('performance'))).timing) || {};
        var i = 0;
        if (d.requestStart && d.responseStart && h.earlyFlush) {
          var j = d.requestStart - b('performanceNavigationStart')();
          d = d.responseStart - b('performanceNavigationStart')();
          i = (j + d - h.earlyFlush) / 2;
        }
        a.QuickPerformanceLogger.markerStart(c, 0, i + f);
        F(a, c, e, 0);
        j = 0;
        for (d in h)
          (j = Math.max(j, h[d])),
            a.QuickPerformanceLogger.markerPoint(c, d, {
              timestamp: h[d] + i + f,
            });
        a.QuickPerformanceLogger.markerEnd(
          c,
          b('QuickLogActionType').SUCCESS,
          0,
          j + i + f,
        );
      }
    }
    function ea(a, b, c) {
      if (a.UserTimingUtils == null) return;
      if (b.markerPoints.visuallyComplete) {
        var d;
        (d = a.UserTimingUtils) === null || d === void 0
          ? void 0
          : d.measureModern(
              'VisuallyComplete(' + c + ')[' + b.traceId.slice(0, 3) + ']',
              {
                end: b.markerPoints.visuallyComplete.timestamp,
                start: b.start,
              },
              'VC',
            );
      }
      if (b.markerPoints.vcWithoutImage) {
        (d = a.UserTimingUtils) === null || d === void 0
          ? void 0
          : d.measureModern(
              'VCWithoutImage(' + c + ')[' + b.traceId.slice(0, 3) + ']',
              { end: b.markerPoints.vcWithoutImage.timestamp, start: b.start },
              'VCWithoutImage',
            );
      }
    }
    var J = b('vc-tracker').VisualCompletionConstants;
    function K(a, b, c, d) {
      L(c, d) && (fa(c, d), ia(a, b, c), ka(c), la(c));
    }
    function L(a, b) {
      a = a.interactionType === 'INITIAL_LOAD';
      b = Object.prototype.hasOwnProperty.call(b.markerPoints, 'ssr_shown');
      return a && b;
    }
    function M(a, b, c) {
      b = b.getReactComponentStackFromDOMElement;
      var d = !1;
      for (var e = c.elements.length - 1; e >= 0; e--) {
        var f = c.elements[e];
        if (
          a.logLateMutationReactStack &&
          b &&
          f.element &&
          (f.hadLateMutationExpected || f.hadLateMutationUnexpected)
        ) {
          var g = b(f.element);
          if (g != null) {
            var h = g.indexOf('HeroPagelet');
            h >= 0 && g.splice(h);
            !d &&
              f.hadLateMutationUnexpected &&
              ((c.annotations.string.lateMutationStack = g.join(',')),
              (d = !0));
            f.reactStack = g;
          }
        }
      }
    }
    function fa(a, b) {
      var c = null;
      a.pagelets.forEach(function (a) {
        a.name === 'root' && (c = a.mutationSeq);
      });
      a.elements.forEach(function (a) {
        var d = a.pagelet;
        d != null &&
          c != null &&
          a.mutationSeq > c &&
          a.type === 'component' &&
          (ga(a, b)
            ? ((d.data.hadLateMutationExpected = 1),
              (a.hadLateMutationExpected = !0))
            : ((d.data.hadLateMutationUnexpected = 1),
              (a.hadLateMutationUnexpected = !0)));
      });
    }
    function ga(a, b) {
      var c;
      return (
        ((c = a.pagelet) === null || c === void 0
          ? void 0
          : c.excludeFromMainVC) || ha(a, b)
      );
    }
    function ha(a, b) {
      a = a.element;
      while (a) {
        if (
          a.getAttribute(J.ATTRIBUTE_NAME) === J.IGNORE_LATE_MUTATION ||
          b.lateMutationIgnoreElements.has(a)
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    function ia(a, b, c) {
      M(a, b, c);
      a = 10;
      b = 0;
      var d = 0,
        e = 0;
      for (var f = c.elements.length - 1; f >= 0; f--) {
        var g = c.elements[f];
        (g.hadLateMutationExpected || g.hadLateMutationUnexpected) &&
          ((d += g.hadLateMutationExpected ? 1 : 0),
          (e += g.hadLateMutationUnexpected ? 1 : 0),
          (b = g.hadLateMutationExpected && d + e >= a ? 1 : 0));
      }
      c.annotations.bool.hadLateMutationExpected = d > 0;
      c.annotations.bool.hadLateMutationUnexpected = e > 0;
      c.annotations['int'].lmCountExpected = d;
      c.annotations['int'].lmCountUnexpected = e;
      g = a - e - b;
      f = [];
      var h;
      b = !1;
      var i = 1;
      d = 1;
      e = 1;
      for (var j = c.elements.length - 1; j >= 0; j--) {
        var k = c.elements[j];
        if (k.hadLateMutationUnexpected || k.hadLateMutationExpected) {
          var l = {
            hadLateMutationExpected: k.hadLateMutationExpected,
            hadLateMutationUnexpected: k.hadLateMutationUnexpected,
            mutationType: k.mutationType,
            type: k.type,
            height: k.rectangle.bottom - k.rectangle.top,
            width: k.rectangle.right - k.rectangle.left,
          };
          k.element && (l.tagName = k.element.tagName);
          k.pagelet && (l.pagelet = k.pagelet.name);
          !b &&
            k.hadLateMutationUnexpected &&
            ((l.reactStack = k.reactStack), (b = !0));
          h = {
            markerPointData: l,
            markerPointTitle: ja(l, k.hadLateMutationUnexpected ? e : d),
            element: k,
            timestamp: k.latency,
          };
          (d <= g || k.hadLateMutationUnexpected) &&
            i < a &&
            (k.hadLateMutationUnexpected ? e++ : d++, f.push(h), i++);
        }
      }
      h && i === a && f.push(h);
      l = f.length;
      if (l > 1) {
        k = f[l - 1];
        k.markerPointData.reactStack = k.element.reactStack;
      }
      f.forEach(function (a) {
        return c.markerPoints.set(a.markerPointTitle, {
          data: a.markerPointData,
          timestamp: a.timestamp,
        });
      });
    }
    function ja(a, b) {
      return (
        'late_mutation/' +
        (a.hadLateMutationUnexpected ? 'unexpected' : 'expected') +
        '_' +
        b
      );
    }
    function ka(a) {
      var b = a.pagelets.reduce(function (a, b) {
        return 'firstPaint' in b.points ? Math.min(a, b.points.firstPaint) : a;
      }, Number.MAX_SAFE_INTEGER);
      b != Number.MAX_SAFE_INTEGER &&
        (a.annotations['int'].progressiveRenderCost = a.vcWithoutImage - b);
    }
    function la(a) {
      var b = a.pagelets.reduce(function (a, b) {
          return 'firstPaint' in b.points && b.data.lateMutation
            ? Math.min(a, b.points.firstPaint)
            : a;
        }, Number.MAX_SAFE_INTEGER),
        c = a.pagelets.reduce(function (a, b) {
          return 'vcWithoutImage' in b.points && b.data.lateMutation
            ? Math.max(a, b.points.vcWithoutImage)
            : a;
        }, Number.MIN_SAFE_INTEGER);
      b !== Number.MAX_SAFE_INTEGER &&
        c !== Number.MIN_SAFE_INTEGER &&
        (a.annotations['int'].SsrPageletLmCost = c - b);
    }
    var N = 'InteractionTracingLogging',
      ma = b('performanceNavigationStart')(),
      O = new Set(),
      P,
      Q = null,
      R = 0,
      S = new Set(),
      na = 1;
    b('one-trace').subscribe('trace-end-before-logging', function (a) {
      if (a.traceType === 'LONGTASK' || a.traceType === 'INPUT_DELAY') {
        var c = a.traceType;
        O.forEach(function (d) {
          var e = b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.get(d.getTraceId());
          if (e) {
            b(
              'interaction-tracing-metrics',
            ).InteractionTracingMetricsCore.addSubspan(
              d.getTraceId(),
              c,
              c,
              Math.max(a.startTime, e.start),
              (d = a.endTime) !== null && d !== void 0
                ? d
                : b('performanceNowSinceAppStart')(),
              {},
            );
            if (e.type != null) {
              d =
                (d = a.annotations.string_array.affectedInteractions) !==
                  null && d !== void 0
                  ? d
                  : [];
              a.annotations.string_array.affectedInteractions = d.concat([
                e.type +
                  '(' +
                  ((d = e.tracePolicy) !== null && d !== void 0 ? d : '') +
                  ')',
              ]);
            }
          }
        });
      }
    });
    function oa(a, b) {
      if (typeof window.qpl_tag === 'function') {
        b.tagSet.CometTags || (b.tagSet.CometTags = new Set());
        var c = b.type === 'INITIAL_LOAD' || b.type === 'NAVIGATION',
          d = b.tagSet.CometTags;
        b = window.qpl_tag();
        b &&
          b.length &&
          b.forEach(function (b) {
            b &&
              b.length &&
              b.forEach(function (b) {
                d.add(b),
                  c &&
                    a.VisualCompletion &&
                    a.VisualCompletion.addTag('CometTags', b);
              });
          });
      }
    }
    function pa(c, d, e, f, g) {
      var a = p(d, e);
      b(
        'interaction-tracing-metrics',
      ).InteractionTracingMetricsCore.addHiddenTiming(c, a);
      a.length > 0 &&
        b(
          'interaction-tracing-metrics',
        ).InteractionTracingMetricsCore.addMarkerPoint(
          c,
          'backgrounded',
          'AppTiming',
          a[0].start,
        );
      f.annotations['int'].hidden === void 0 &&
        g.addAnnotationInt('hidden', Number(r(d, e)));
    }
    function qa(a, c) {
      var d;
      d =
        (d = c.completed) !== null && d !== void 0
          ? d
          : b('performanceNowSinceAppStart')();
      var e = c.markerPoints.visuallyComplete
          ? c.markerPoints.visuallyComplete.timestamp
          : d,
        f = [],
        g = null;
      a.forEach(function (a) {
        !a.isOnline
          ? ((g = a.timestamp), g < e && (c.wasOffline = !0))
          : g != null && (f.push({ end: a.timestamp, start: g }), (g = null));
      });
      g != null && f.push({ end: d, start: g });
      b(
        'interaction-tracing-metrics',
      ).InteractionTracingMetricsCore.addOfflineTiming(c.traceId, f);
    }
    function ra(a, c, d) {
      var e;
      d.interactionClass &&
        c.addAnnotation('interactionClass', d.interactionClass);
      var f = d.start;
      e =
        (e = d.completed) !== null && e !== void 0
          ? e
          : b('performanceNowSinceAppStart')();
      pa(d.traceId, f, e, d, c);
      c.addAnnotationInt('navStartOffset', d.start);
      if (a.getMetadata) {
        var g = a.getMetadata();
        Object.keys(g).forEach(function (a) {
          var b = g[a];
          typeof b === 'string'
            ? c.addAnnotation(a, b)
            : typeof b === 'number' && c.addAnnotationInt(a, b);
        });
      }
      a.pkgCohort != null && c.addAnnotation('pkg_cohort', a.pkgCohort);
    }
    function sa(a) {
      var c = a.traceId;
      a = b('hero-tracing-placeholder').HeroPendingPlaceholderTracker.dump(c);
      a.forEach(function (a) {
        b('interaction-tracing-metrics').InteractionTracingMetricsCore.addTag(
          c,
          'pendingPlaceholder',
          a,
        );
      });
    }
    function ta(a, b, c) {
      var d = b.getReactComponentStackFromDOMElement;
      d &&
        a.logVCReactStack &&
        c.onBeforeComplete(function (a) {
          a &&
            ['vcWithoutImage', 'visuallyComplete'].forEach(function (b) {
              b = a.markerPoints.get(b);
              if (b && b.element) {
                var c = d(b.element);
                if (c != null) {
                  var e = c.indexOf('HeroPagelet');
                  e >= 0 && c.splice(e);
                  e = b.data || {};
                  e.reactStack = c;
                  b.data = e;
                }
              }
            });
        });
    }
    function ua(a, b, c, d) {
      c.onBeforeComplete(function (c) {
        if (!c) return;
        K(a, b, c, d);
      });
    }
    function va(a, b) {
      var c;
      (c = a.vcTracker) === null || c === void 0
        ? void 0
        : c.onComplete(function (c) {
            if (c) {
              a.vcStateLog = c.stateLog;
              a.hasVcReport = !0;
              for (var d in c.annotations)
                for (var e in c.annotations[d])
                  a.annotations[d][e] = c.annotations[d][e];
              c.markerPoints.forEach(function (b, c) {
                var d = b.data;
                b = b.timestamp;
                a.markerPoints[c] = {
                  data: d,
                  timestamp: b,
                  type: 'VisualCompletion',
                };
              });
              c.tagSet.forEach(function (a, c) {
                a.forEach(function (a) {
                  b.addTag(c, a);
                });
              });
            }
          });
    }
    function T(a) {
      return a.annotations['int'].isError
        ? 'FAIL'
        : a.wasOffline
        ? 'OFFLINE'
        : a.annotations.string.cancelType === 'timeout'
        ? 'TIMEOUT'
        : a.wasCanceled || a.annotations['int'].aborted
        ? 'CANCEL'
        : 'SUCCESS';
    }
    function U(a) {
      a = a.replace(/\d{4,}/, '');
      return a;
    }
    var wa = 0,
      V = new Map(),
      W = {
        checkRevisit: function (a) {
          return a == null ? !1 : S.has(a);
        },
        checkAndMarkRevisit: function (a) {
          var b = W.checkRevisit(a);
          a != null && S.add(a);
          return b;
        },
        getCurrentTabTracePolicy: function () {
          var a;
          return (a = Q) !== null && a !== void 0 ? a : 'comet.app';
        },
        setCurrentTabTracePolicy: function (a) {
          Q = a;
        },
        onStartInteraction: function (a) {
          var b = wa++;
          V.set(b, a);
          return function () {
            V['delete'](b);
          };
        },
        startInteraction: function (a, c) {
          c === void 0 && (c = function () {});
          var d = b(
            'hero-tracing',
          ).HeroLogger.genHeroInteractionUUIDAndMarkStart(a.interactionID);
          return W.trace(
            a.cfg,
            a.deps,
            a.qplEvent,
            c,
            a.interactionClass,
            a.traceType,
            a.tracePolicy,
            d,
            a.startTime,
            a.eventQueueTime,
            a.debugName,
          );
        },
        trace: function (a, c, d, e, f, g, h, i, j, k, l) {
          i === void 0 && (i = b('uuid')());
          k === void 0 && (k = null);
          var m =
              j !== null && j !== void 0
                ? j
                : g === 'INITIAL_LOAD'
                ? 0
                : b('performanceNowSinceAppStart')(),
            n = [],
            p = Q,
            q = na++,
            r = h != null ? U(h) : null,
            s = a.enableMemoryLogging
              ? b('MemoryUtils').getCurrentMemory().usedJSHeapSize
              : null;
          P ||
            (P = aa(function () {
              O.forEach(function (a) {
                var b;
                ((b = a.getTrace()) === null || b === void 0
                  ? void 0
                  : b.annotations['int'].success_on_unload) === 1
                  ? a.forceCompleteTrace()
                  : a.cancelTrace('unload', !0);
              }),
                P && P.remove(),
                (P = null);
            }));
          function t(a, d) {
            var e;
            return b('regeneratorRuntime').async(
              function (f) {
                while (1)
                  switch ((f.prev = f.next)) {
                    case 0:
                      if (!(B != null)) {
                        f.next = 5;
                        break;
                      }
                      if (!(I.length > 0)) {
                        f.next = 4;
                        break;
                      }
                      f.next = 4;
                      return b('regeneratorRuntime').awrap(b('Promise').all(I));
                    case 4:
                      (e = c.WebLoom) === null || e === void 0
                        ? void 0
                        : e.endTraceForInteraction(a, d);
                    case 5:
                    case 'end':
                      return f.stop();
                  }
              },
              null,
              this,
            );
          }
          var u = new Set([N]);
          function v(a) {
            a === void 0 && (a = !1);
            var c = b(
              'interaction-tracing-metrics',
            ).InteractionTracingMetricsCore.get(i);
            if (!c || !O.has(w)) return;
            c.completed == null &&
              (c.completed = b('performanceNowSinceAppStart')());
            sa(c);
            var d = [].concat(E);
            E.length = 0;
            d.forEach(function (a) {
              a(c, !0);
            });
            a
              ? z(c, !0)
              : b('JSScheduler').scheduleLoggingPriCallback(function () {
                  z(c, !0);
                });
          }
          var w = {
              addGlobalMetadata: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addGlobalMetadata(i, a, c);
              },
              addLoomTraceEndDependency: function (a) {
                I.push(a);
              },
              addMarkerPoint: function (a, c, d, e) {
                d === void 0 && (d = b('performanceNowSinceAppStart')()),
                  b(
                    'interaction-tracing-metrics',
                  ).InteractionTracingMetricsCore.addMarkerPoint(i, a, c, d, e);
              },
              addSubspan: function (a, c, d, e, f) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addSubspan(
                  i,
                  a,
                  c,
                  d,
                  e,
                  f || {},
                );
              },
              addMetadata: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addMetadata(i, a, c);
              },
              addAnnotation: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addAnnotation(i, a, c);
              },
              addAnnotationInt: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addAnnotationInt(i, a, c);
              },
              addAnnotationDouble: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addAnnotationDouble(i, a, c);
              },
              addAnnotationBoolean: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addAnnotationBoolean(i, a, c);
              },
              addAnnotationStringArray: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addAnnotationStringArray(
                  i,
                  a,
                  c,
                );
              },
              addAnnotationIntArray: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addAnnotationIntArray(i, a, c);
              },
              addAnnotationDoubleArray: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addAnnotationDoubleArray(
                  i,
                  a,
                  c,
                );
              },
              addAnnotationBooleanArray: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addAnnotationBooleanArray(
                  i,
                  a,
                  c,
                );
              },
              addTag: function (a, c) {
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addTag(i, a, c);
              },
              lockInteractionLogging: function (a) {
                u.add(a);
              },
              unlockInteractionLogging: function (a) {
                u.has(a) && (u['delete'](a), u.size === 0 && x());
              },
              cancelTrace: function (a, c) {
                w.addAnnotation('cancelType', a);
                a = b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.get(i);
                if (!a || !O.has(w)) return;
                a.wasCanceled = !0;
                v(c);
              },
              forceCompleteTrace: function () {
                v(!0);
              },
              getTrace: function () {
                return b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.get(i);
              },
              getTraceId: function () {
                return i;
              },
              markTraceAsSuccessOnUnload: function () {
                w.addAnnotationInt('success_on_unload', 1);
              },
              observeMutation: function (a) {
                c.InteractionVC && c.InteractionVC.observeMutation(i, a);
              },
              onComplete: function (a) {
                D.push(a);
              },
              onCompleteSync: function (a) {
                E.push(a);
              },
              onLog: function (a) {
                F.push(a);
              },
              onBeforeLog: function (a) {
                G.push(a);
              },
              onVcMetricsComplete: function (a) {
                H.push(a);
              },
              setTracePolicy: function (e) {
                if (e == null) return;
                e = U(e);
                b('one-trace').setTracePolicy(i, e);
                r = e;
                w.addAnnotation('tracePolicy', r);
                if (B == null && a.disableLoomTrace !== !0) {
                  e =
                    (e = c.WebLoom) === null || e === void 0
                      ? void 0
                      : e.maybeStartTraceForInteraction(i, f, d, r, m);
                  B = e === null || e === void 0 ? void 0 : e.traceReferenceId;
                  C = e === null || e === void 0 ? void 0 : e.loomProviders;
                }
                e = b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.get(i);
                e &&
                  ((e.tracePolicy = r),
                  e.vcTracker && e.vcTracker.setTracePolicy(r));
              },
              setInstanceIdentifier: function (a) {},
            },
            x = function () {
              var e;
              if (!O.has(w)) return;
              var f = M;
              b('clearTimeout')(K);
              A.remove();
              O['delete'](w);
              qa(n, f);
              (e = c.HeroBootloadPerfStore) === null || e === void 0
                ? void 0
                : e.addStaticResourcesStats(f);
              e = [].concat(G);
              G.length = 0;
              e.forEach(function (a) {
                a(f);
              });
              e = T(f);
              var h = da(a, c, d, e, f, q);
              f.qplAction = h;
              f.traceStatus = e;
              f.debugName = l;
              e = [].concat(F);
              F.length = 0;
              e.forEach(function (a) {
                a(f, T(f));
              });
              delete f.vcTracker;
              f.lateMutationIgnoreElements.clear();
              t(f, h);
              ea(c, f, g);
              setTimeout(function () {
                b('interaction-tracing-metrics').InteractionTracingMetricsCore[
                  'delete'
                ](i);
              }, 30 * 6e4);
            };
          function y(a) {
            a
              ? u.forEach(function (a) {
                  w.unlockInteractionLogging(a);
                })
              : w.unlockInteractionLogging(N);
          }
          var z = function (d, e) {
            var f;
            if (!O.has(w)) return;
            w.addAnnotationInt('startTimestamp', m + ma);
            oa(c, d);
            w.addAnnotation(
              'tracePolicy',
              (f = r) !== null && f !== void 0 ? f : a.defaultTracePolicy,
            );
            p != null && w.addAnnotation('referrer', p);
            w.addAnnotation('interactionId', i);
            if (s != null) {
              f = b('MemoryUtils').getCurrentMemory().usedJSHeapSize;
              f != null &&
                (w.addAnnotationInt('usedJSHeapSizeStart', s),
                w.addAnnotationInt('usedJSHeapSizeEnd', f));
            }
            ra(a, w, d);
            c.VisualCompletion && J != null && J();
            f = [].concat(D);
            D.length = 0;
            f.forEach(function (a) {
              a(d, e);
            });
            B != null && w.addAnnotation('loomRefId', B);
            C != null &&
              C.forEach(function (a) {
                return w.addTag('loomProviders', a);
              });
            f = d.vcTracker;
            f && !d.hasVcReport
              ? (f.onComplete(function () {
                  y(e);
                }),
                e && f.forceMeasurement())
              : y(e);
          };
          b('NetworkStatus').isOnline() ||
            n.push({
              isOnline: !1,
              timestamp: b('performanceNowSinceAppStart')(),
            });
          var A = b('NetworkStatus').onChange(function (a) {
              n.push({
                isOnline: a.online,
                timestamp: b('performanceNowSinceAppStart')(),
              });
            }),
            B,
            C;
          if (r != null && a.disableLoomTrace !== !0) {
            h =
              (j = c.WebLoom) === null || j === void 0
                ? void 0
                : j.maybeStartTraceForInteraction(i, f, d, r, m);
            B = h === null || h === void 0 ? void 0 : h.traceReferenceId;
            C = h === null || h === void 0 ? void 0 : h.loomProviders;
          }
          ca(a, c, d, m, q, { qplMarkerType: a.qplMarkerType });
          var D = [],
            E = [],
            F = [],
            G = [],
            H = [],
            I = [],
            J = null;
          c.VisualCompletion &&
            (J = c.VisualCompletion.addTracedInteraction(g, i, d));
          b('one-trace').startTrace(i, r, g, m);
          w.onLog(function (a, c) {
            b('one-trace').endTrace(
              i,
              (c = a.completed) !== null && c !== void 0
                ? c
                : b('performanceNowSinceAppStart')(),
              T(a),
            );
          });
          var K = b('setTimeoutAcrossTransitions')(function () {
            w.cancelTrace('timeout', !1);
          }, a.timeout);
          if (a.cancelOnBackground === !0) {
            var L = o(function (a, b) {
              b && w.cancelTrace('background', !0);
            });
            w.onCompleteSync(function () {
              L();
            });
          }
          j = function (a, d) {
            d === void 0 && (d = !1);
            var e;
            if (!O.has(w)) return;
            c.VCTracker &&
              ((e = a.vcTracker) === null || e === void 0
                ? void 0
                : e.unlock(
                    c.VCTracker.VisualCompletionConstants
                      .INTERACTION_TRACING_HOLD,
                  ));
            a.completed == null &&
              (a.completed = b('performanceNowSinceAppStart')());
            e = [].concat(E);
            E.length = 0;
            e.forEach(function (b) {
              b(a);
            });
            if (
              a.type === 'INITIAL_LOAD' &&
              ((e = window) === null || e === void 0
                ? void 0
                : (e = e.document) === null || e === void 0
                ? void 0
                : e.readyState) === 'loading'
            ) {
              var f;
              e = function c() {
                var e;
                b('JSScheduler').scheduleLoggingPriCallback(function () {
                  z(a, d);
                });
                (e = window) === null || e === void 0
                  ? void 0
                  : (e = e.document) === null || e === void 0
                  ? void 0
                  : e.removeEventListener('DOMContentLoaded', c);
              };
              (f = window) === null || f === void 0
                ? void 0
                : (f = f.document) === null || f === void 0
                ? void 0
                : f.addEventListener('DOMContentLoaded', e);
            } else
              b('JSScheduler').scheduleLoggingPriCallback(function () {
                z(a, d);
              });
          };
          var M = b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.addTracedInteraction(i, m, j);
          b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.setInteractionType(i, f, g, d);
          switch (g) {
            case 'INITIAL_LOAD':
              w.addAnnotationInt('navSequence', ++R);
              if (c.VisualCompletion) {
                h = c.VisualCompletion.traceNavigation(i, 0, 'INITIAL_LOAD', R);
                M && (M.vcTracker = h);
                a.useDocumentBodyForVCRoot === !0 &&
                  window.document != null &&
                  (h.observeMutation(window.document.body),
                  h.registerNavigationMutationRoot(window.document.body));
              }
              break;
            case 'NAVIGATION':
              w.addAnnotationInt('navSequence', ++R);
              O.forEach(function (d) {
                var c = b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.get(d.getTraceId());
                if (
                  !a.navigationCancelsInteractions &&
                  c &&
                  c.type === 'INTERACTION'
                )
                  return;
                d.cancelTrace('navigation', !1);
              });
              if (c.VisualCompletion) {
                j = c.VisualCompletion.traceNavigation(i, m, 'NAVIGATION', R);
                M && (M.vcTracker = j);
                a.useDocumentBodyForVCRoot === !0 &&
                  window.document != null &&
                  (j.observeMutation(window.document.body),
                  j.registerNavigationMutationRoot(window.document.body));
              }
              break;
            case 'INTERACTION':
              if (c.InteractionVC) {
                h = c.InteractionVC.startVisualCompletionTrace(i, m, g);
                M && (M.vcTracker = h);
              }
              break;
          }
          O.add(w);
          ba(w, a, function () {
            return B != null;
          });
          a.heroNestedRootsFix && w.addAnnotationInt('heroNestedRootsFix', 1);
          r != null && w.setTracePolicy(r);
          if (M && M.vcTracker) {
            j = M.vcTracker;
            c.VCTracker &&
              j.lock(
                c.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD,
              );
            ta(a, c, j);
            ua(a, c, j, M);
            j.onComplete(function (a) {
              var b = [].concat(H);
              H.length = 0;
              a &&
                b.forEach(function (b) {
                  b(M, a);
                });
            });
            va(M, w);
            a.setupVcTracker && a.setupVcTracker(j);
          }
          e(w);
          V.forEach(function (a) {
            return a(w);
          });
          if (k != null) {
            h = m;
            b(
              'interaction-tracing-metrics',
            ).InteractionTracingMetricsCore.addSubspan(
              i,
              'EventQueued',
              'DOMEventTiming',
              h,
              h + k,
              {},
            );
          }
          return i;
        },
        getPendingInteractions: function () {
          return new Set(O);
        },
        getTraceStatus: T,
      },
      X = b('performanceNavigationStart')();
    function Y(a) {
      var c,
        d =
          ((g || (g = b('performance'))) === null ||
          (g || (g = b('performance'))) === void 0
            ? void 0
            : (g || (g = b('performance'))).timing) || {};
      c =
        ((g || (g = b('performance'))) === null ||
        (g || (g = b('performance'))) === void 0
          ? void 0
          : (c = (g || (g = b('performance'))).navigation) === null ||
            c === void 0
          ? void 0
          : c.redirectCount) || 0;
      b(
        'interaction-tracing-metrics',
      ).InteractionTracingMetricsCore.addAnnotationInt(a, 'redirectCount', c);
      c =
        typeof (g || (g = b('performance'))).getEntriesByType === 'function'
          ? (g || (g = b('performance'))).getEntriesByType('navigation')[0]
          : null;
      c !== null &&
        c !== void 0 &&
        c.nextHopProtocol &&
        b(
          'interaction-tracing-metrics',
        ).InteractionTracingMetricsCore.addAnnotation(
          a,
          'httpProtocol',
          c.nextHopProtocol,
        );
      c !== null && c !== void 0 && c.type
        ? b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.addAnnotation(
            a,
            'navigationType',
            c.type,
          )
        : ((c = (g || (g = b('performance'))).navigation) === null ||
          c === void 0
            ? void 0
            : c.type) != null &&
          b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.addAnnotation(
            a,
            'navigationType',
            (g || (g = b('performance'))).navigation.type,
          );
      for (c in d)
        typeof d[c] === 'number' &&
          d[c] >= X &&
          b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.addMarkerPoint(
            a,
            c,
            'NavigationTiming',
            d[c] - X,
          );
      b(
        'interaction-tracing-metrics',
      ).InteractionTracingMetricsCore.addAnnotationInt(
        a,
        'documentDOMElementCount',
        document.getElementsByTagName('*').length,
      );
    }
    function xa(a) {
      var c = document.referrer;
      if (typeof c === 'string') {
        c = /^\w+:\/\/[^\/]+/.exec(c);
        c &&
          c[0] &&
          b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.addAnnotation(a, 'referrer', c[0]);
      }
    }
    function Z(a, c) {
      if (c != null) {
        W.setCurrentTabTracePolicy(c);
        c = W.checkAndMarkRevisit(c);
        b(
          'interaction-tracing-metrics',
        ).InteractionTracingMetricsCore.addAnnotationInt(
          a,
          'revisit',
          Number(c),
        );
      }
    }
    function $(a, c) {
      if (c != null) {
        c = W.checkAndMarkRevisit(c);
        b(
          'interaction-tracing-metrics',
        ).InteractionTracingMetricsCore.addAnnotationInt(
          a,
          'instance_revisit',
          Number(c),
        );
      }
    }
    function c(a, c) {
      var d,
        e =
          (d = a.traceStartTime) !== null && d !== void 0
            ? d
            : b('performanceNowSinceAppStart')();
      return W.startInteraction(a, function (b) {
        var d = b.getTraceId();
        Z(d, a.tracePolicy);
        $(d, a.instanceIdentifier);
        b.setTracePolicy(a.tracePolicy);
        b.addMarkerPoint('traceStart', 'AppTiming', e);
        b.onComplete(function (a) {
          Y(d), xa(d);
        });
        c && c(b);
      });
    }
    function d(a, b) {
      return W.startInteraction(a, function (c) {
        try {
          var d = c.getTraceId(),
            e = a.tracePolicy;
          Z(d, a.tracePolicy);
          c.onComplete(function (a) {
            Y(d);
          });
          var f = babelHelpers['extends']({}, c, {
            setTracePolicy: function (a) {
              if (e == null) {
                a = a;
                Z(d, a);
                a != null && c.setTracePolicy(a);
              }
            },
            setInstanceIdentifier: function (a) {
              $(d, a);
            },
          });
          b && b(f);
        } catch (a) {
          if (a.message !== "can't access dead object") throw a;
        }
      });
    }
    f = { traceInitialLoad: c, traceNavigation: d };
    c = {
      InteractionTracingCore: W,
      NavigationTracing: f,
      logServerTimings: a,
    };
    e.exports = c;
  },
  null,
);
