__d(
  'one-trace',
  [
    'clearTimeout',
    'performance',
    'performanceNowSinceAppStart',
    'setTimeoutAcrossTransitions',
    'setTimeoutCometLoggingPri',
    'uuid',
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
      l = null,
      m = !1,
      n = new Set();
    m || (i() && (l = 0), (m = !0));
    h &&
      document.addEventListener('visibilitychange', function (a) {
        var c =
          (a = a === null || a === void 0 ? void 0 : a.timeStamp) !== null &&
          a !== void 0
            ? a
            : b('performanceNowSinceAppStart')();
        o(c, i());
        n.forEach(function (a) {
          a(c, i());
        });
      });
    function o(a, b) {
      b
        ? (l = a)
        : l != null &&
          (k.push({ start: l, end: a }), k.length > j && k.shift(), (l = null));
    }
    function p(a) {
      n.add(a);
      return function () {
        n['delete'](a);
      };
    }
    function q(a, c) {
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
    function r(a, b) {
      var c = 0;
      a = q(a, b);
      a.forEach(function (a) {
        c += a.end - a.start;
      });
      return c;
    }
    function s(a, b) {
      a = r(a, b);
      return a > 0;
    }
    var t = null,
      u = null,
      v = new Map(),
      w = {
        'trace-start': new Set(),
        'trace-end': new Set(),
        'trace-end-before-logging': new Set(),
      },
      aa = 1,
      x = null;
    function a(a, b, c, d) {
      var e = aa++,
        f = {
          traceID: a,
          tracePolicy: b,
          traceType: c,
          instanceKey: e,
          status: 'START',
          startTime: d,
          endTime: null,
          annotations: {
            string: {},
            int: {},
            double: {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {},
          },
          markerPoints: {},
        };
      v.set(a, f);
      w['trace-start'].forEach(function (a) {
        return a(f);
      });
      c === 'INITIAL_LOAD' || c === 'NAVIGATION'
        ? (t = f)
        : c === 'INTERACTION' && (u = f);
      return f;
    }
    function c(a, b) {
      a = v.get(a);
      a && (a.tracePolicy = b);
    }
    function d(a) {
      x = a;
    }
    function f(a, b, c) {
      var d = v.get(a);
      if (d) {
        d.tracePolicy != null &&
          (d.annotations.string.tracePolicy = d.tracePolicy);
        var e = z();
        (e === null || e === void 0 ? void 0 : e.tracePolicy) != null &&
          (d.annotations.string.currentRouteTracePolicy = e.tracePolicy);
        e = ba();
        (e === null || e === void 0 ? void 0 : e.tracePolicy) != null &&
          (d.annotations.string.recentInteractionTracePolicy = e.tracePolicy);
        x != null && (d.annotations.string.lastNavigationTracePolicy = x);
        d.endTime = b;
        d.status = c;
        v['delete'](a);
        w['trace-end-before-logging'].forEach(function (a) {
          return a(d);
        });
        w['trace-end'].forEach(function (a) {
          return a(d);
        });
      }
      return d;
    }
    function y(a, b) {
      w[a].add(b);
      return function () {
        w[a]['delete'](b);
      };
    }
    function z() {
      return t;
    }
    function ba() {
      return u;
    }
    var A = {
      currentTraces: v,
      endTrace: f,
      subscribe: y,
      getLastNavigation: z,
      setLastNavigationTracePolicy: d,
      setTracePolicy: c,
      startTrace: a,
    };
    function ca(a) {
      a =
        (g || (g = b('performance'))) &&
        (g || (g = b('performance'))).getEntriesByName &&
        (g || (g = b('performance'))).getEntriesByName(a);
      return a && a[0];
    }
    function da(a) {
      a = a.match(/\.(\w+)(\?|$)/);
      if (a && a.length > 1) return a[1];
      else return '';
    }
    function ea(a) {
      var c,
        d = a.elementTiming;
      if (!d) return;
      var e = d.url,
        f = a.commitTime,
        g = d.renderTime,
        h = e != null ? ca(e) : null;
      typeof (h === null || h === void 0 ? void 0 : h.startTime) === 'number' &&
        (f = Math.min(f, h.startTime));
      typeof (h === null || h === void 0 ? void 0 : h.responseEnd) ===
        'number' && (g = Math.max(g, h.responseEnd));
      var i = b('uuid')(),
        j = A.startTrace(
          i,
          (c =
            (c = A.getLastNavigation()) === null || c === void 0
              ? void 0
              : c.tracePolicy) !== null && c !== void 0
            ? c
            : '',
          'IMAGE',
          f,
        );
      if (
        typeof ((c = a.element) === null || c === void 0
          ? void 0
          : c.getAttribute) === 'function'
      ) {
        c = a.element.getAttribute('data-imgperflogname');
        c != null && c !== '' && a.annotationString.set('imageName', c);
      }
      if (d.loadTime != null) {
        c = d.loadTime;
        a.points.set('loadTime', c);
        g = Math.max(g, c);
      }
      if (d.renderTime != null) {
        c = d.renderTime;
        a.points.set('paintTime', c);
        g = Math.max(g, c);
      }
      c = e != null ? da(e) : null;
      c != null && c !== '' && a.annotationString.set('fileExt', c);
      a.annotationInt.set('hidden', Number(s(f, g)));
      d.intersectionRect != null &&
        (a.annotationInt.set('naturalHeight', d.naturalHeight),
        a.annotationInt.set('naturalWidth', d.naturalWidth),
        a.annotationInt.set('height', d.intersectionRect.height),
        a.annotationInt.set('width', d.intersectionRect.width));
      a.element != null &&
        (a.annotationInt.set('viewWidth', a.element.clientWidth),
        a.annotationInt.set('viewHeight', a.element.clientHeight));
      a.annotationString.set('identifier', d.identifier);
      h != null &&
        ([
          'connectEnd',
          'connectStart',
          'domainLookupEnd',
          'domainLookupStart',
          'fetchStart',
          'redirectEnd',
          'redirectStart',
          'requestStart',
          'responseEnd',
          'responseStart',
          'secureConnectionStart',
          'startTime',
          'workerStart',
        ].forEach(function (a) {
          h != null &&
            typeof h[a] === 'number' &&
            h[a] >= f &&
            (j.markerPoints[a] = { timeSinceStart: h[a] });
        }),
        ['decodedBodySize', 'encodedBodySize', 'transferSize'].forEach(
          function (b) {
            h != null &&
              typeof h[b] === 'number' &&
              a.annotationInt.set(b, h[b]);
          },
        ),
        h != null &&
          typeof h.nextHopProtocol === 'string' &&
          a.annotationString.set('nextHopProtocol', h.nextHopProtocol));
      c = e != null ? e.match(/[?&]cb=([^&]+).*$/) : null;
      c && c.length > 1 && a.annotationString.set('cbParameter', c[1]);
      a.annotationString.forEach(function (a, b) {
        j.annotations.string[b] = a;
      });
      a.annotationInt.forEach(function (a, b) {
        j.annotations['int'][b] = a;
      });
      a.points.forEach(function (a, b) {
        j.markerPoints[b] = { timeSinceStart: a };
      });
      A.endTrace(i, g, 'SUCCESS');
    }
    var fa = 6e4,
      B = new Map(),
      C =
        typeof ((m = window.PerformanceObserver) === null || m === void 0
          ? void 0
          : (f = m.supportedEntryTypes) === null || f === void 0
          ? void 0
          : f.includes) === 'function' &&
        window.PerformanceObserver.supportedEntryTypes.includes('element'),
      D = !1,
      E = null;
    function ga() {
      if (D) return;
      D = !0;
      if (!C) return;
      typeof WeakSet === 'function' &&
        A.subscribe('trace-start', function (a) {
          (a.traceType === 'INITIAL_LOAD' || a.traceType === 'NAVIGATION') &&
            (E = new WeakSet());
        });
      var a = new window.PerformanceObserver(function (a) {
        a = a.getEntries();
        a.forEach(function (a) {
          var b = a.element;
          if (b) {
            b = B.get(b);
            b && ((b.elementTiming = a), ia(b));
          }
        });
      });
      a.observe({ buffered: !0, type: 'element' });
    }
    function ha(a, c, d, e) {
      a = a;
      if (!C || !D) return;
      if (!a.hasAttribute('elementtiming')) return;
      var f = B.get(a);
      if (f && f.url === d) return;
      if ((f = E) !== null && f !== void 0 && f.has(a)) return;
      var g = {
        annotationInt: new Map(),
        annotationString: new Map(),
        setTimeoutID: null,
        commitTime: c,
        element: a,
        points: new Map(),
        url: d,
      };
      Object.keys(e).forEach(function (a) {
        var b = e[a];
        typeof b === 'string'
          ? g.annotationString.set(a, b)
          : typeof b === 'number' && g.annotationInt.set(a, b);
      });
      g.points.set('commitTime', c);
      g.annotationString.set(
        'tracePolicy',
        (d =
          (f = A.getLastNavigation()) === null || f === void 0
            ? void 0
            : f.tracePolicy) !== null && d !== void 0
          ? d
          : '',
      );
      B.set(a, g);
      g.setTimeoutID = b('setTimeoutAcrossTransitions')(function () {
        F(g);
      }, fa);
    }
    function F(a) {
      a.setTimeoutID != null &&
        (clearTimeout(a.setTimeoutID), (a.setTimeoutID = null)),
        B['delete'](a.element);
    }
    function ia(a) {
      if (a.elementTiming != null && a.elementTiming.loadTime >= a.commitTime) {
        var b;
        (b = E) === null || b === void 0 ? void 0 : b.add(a.element);
        ea(a);
        F(a);
      }
    }
    var G =
        typeof ((y = window.PerformanceObserver) === null || y === void 0
          ? void 0
          : (d = y.supportedEntryTypes) === null || d === void 0
          ? void 0
          : d.includes) === 'function' &&
        window.PerformanceObserver.supportedEntryTypes.includes('longtask'),
      H = new Set(),
      I = !1;
    function ja() {
      if (!I) {
        if (G) {
          var a = new window.PerformanceObserver(function (a) {
            a = a.getEntries();
            a.forEach(function (a) {
              H.forEach(function (b) {
                b(a);
              });
            });
          });
          a.observe({ buffered: !0, type: 'longtask' });
        }
        I = !0;
      }
    }
    function J(a) {
      if (G) {
        H.add(a);
        return function () {
          H['delete'](a);
        };
      } else return function () {};
    }
    var K = window.requestAnimationFrame,
      L = window.cancelAnimationFrame;
    function ka(a) {
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
    var la = 100,
      ma = 3,
      na = ['click', 'keyup'],
      M = !1,
      N = 1,
      O =
        typeof ((c = window.PerformanceObserver) === null || c === void 0
          ? void 0
          : (a = c.supportedEntryTypes) === null || a === void 0
          ? void 0
          : a.includes) === 'function' &&
        window.PerformanceObserver.supportedEntryTypes.includes('event');
    function P(a) {
      var b = new Set();
      A.currentTraces.forEach(function (c) {
        c.traceID !== a.traceID &&
          c.traceType !== 'RESPONSIVENESS' &&
          b.add(c.traceType);
      });
      b.size > 0 &&
        (a.annotations.string_array.currentTraceTypes = Array.from(b).sort());
    }
    var Q = null;
    function R(a, b) {
      if (Q) {
        var c = Q.metrics.annotations;
        Q.navigationMetrics.endTime != null &&
          (Q.metrics.markerPoints.navigationEnd = {
            timeSinceStart: Q.navigationMetrics.endTime,
          });
        for (var d in Q.longtaskStat) {
          var e = Q.longtaskStat[d];
          c['int'][d + 'Count'] = e.count;
          c['int'][d + 'Total'] = e.total;
          c['int'][d + 'Max'] = e.max;
          c['int'][d + 'Avg'] = e.count > 0 ? e.total / e.count : 0;
        }
        c['int'].ST200 = Q.ST200;
        c['int'].ST500 = Q.ST500;
        c['int'].ST1000 = Q.ST1000;
        c.string.exitAction = a;
        Q.metrics.tracePolicy = Q.navigationMetrics.tracePolicy;
        A.endTrace(Q.metrics.traceID, b, 'SUCCESS');
      }
    }
    function S(a, b, c, d) {
      if (Q) {
        var e = Q.longtaskStat[a];
        e.count++;
        e.total += c;
        e.max = Math.max(e.max, c);
        var f = null;
        e.count === d
          ? (f = a + '_{n}')
          : e.count < d && (f = a + '_' + e.count);
        f != null &&
          ((Q.metrics.markerPoints[f + '_start'] = { timeSinceStart: b }),
          (Q.metrics.markerPoints[f + '_end'] = { timeSinceStart: b + c }));
      }
    }
    var T = null;
    function U(a, c) {
      if (T) {
        var d = T;
        d &&
          (Q = {
            metrics: A.startTrace(b('uuid')(), a, 'RESPONSIVENESS', c),
            navigationMetrics: d,
            longtaskStat: {
              inputDelay: { count: 0, total: 0, max: 0 },
              longtask: { count: 0, total: 0, max: 0 },
            },
            ST200: 0,
            ST500: 0,
            ST1000: 0,
          });
      }
    }
    function oa(a) {
      if (!M) {
        var c;
        M = !0;
        if (!O || !G) return;
        var d =
            (c = a.Responsiveness.overrideDelayThreshold) !== null &&
            c !== void 0
              ? c
              : la,
          e =
            (c = a.Responsiveness.overrideMaxSubspans) !== null && c !== void 0
              ? c
              : ma;
        J(function (c) {
          var f;
          if (c.duration < d) return;
          S('longtask', c.startTime, c.duration, e);
          if (N > a.Responsiveness.INSTANCE_COUNT_LIMIT) return;
          f = A.startTrace(
            b('uuid')(),
            (f = A.getLastNavigation()) === null || f === void 0
              ? void 0
              : f.tracePolicy,
            'LONGTASK',
            c.startTime,
          );
          f.annotations['int'].instanceNum = N++;
          P(f);
          A.endTrace(f.traceID, c.startTime + c.duration, 'SUCCESS');
        });
        if (O) {
          var f = new Set(
            (c = a.Responsiveness.overrideDelayedEventTypeFilter) !== null &&
            c !== void 0
              ? c
              : na,
          );
          c = new window.PerformanceObserver(function (c) {
            c.getEntries().forEach(function (c) {
              if (!f.has(c.name)) return;
              var g = c.processingStart - c.startTime;
              if (g >= d) {
                g = A.startTrace(
                  b('uuid')(),
                  (g = A.getLastNavigation()) === null || g === void 0
                    ? void 0
                    : g.tracePolicy,
                  'INPUT_DELAY',
                  c.startTime,
                );
                var h = c.processingStart - c.startTime;
                g.annotations.string.inputEventType = c.name;
                P(g);
                g.annotations['int'].hidden = Number(
                  s(c.startTime, c.processingStart),
                );
                if (
                  a.Responsiveness.getReactComponentStackFromDOMElement !=
                    null &&
                  c.target != null
                ) {
                  var i = a.Responsiveness.getReactComponentStackFromDOMElement,
                    j = c.target;
                  i = i(j);
                  if (i != null) {
                    j = i.indexOf('HeroPagelet');
                    j >= 0 && i.splice(j);
                    g.annotations.string_array.reactStack = i;
                  }
                }
                A.endTrace(g.traceID, c.processingStart, 'SUCCESS');
                S('inputDelay', c.startTime, h, e);
                Q != null &&
                  h >= 200 &&
                  ((Q.ST200 += h),
                  h >= 500 && ((Q.ST500 += h), h >= 1e3 && (Q.ST1000 += h)));
              }
            });
          });
          c.observe({ buffered: !0, type: 'event' });
        }
        A.subscribe('trace-start', function (a) {
          (a.traceType === 'INITIAL_LOAD' || a.traceType === 'NAVIGATION') &&
            (Q != null && R('navigation', a.startTime),
            (T = a),
            U(a.tracePolicy, a.startTime));
        });
        p(function (a) {
          var b;
          R('VisibilityState', a);
          b =
            (b = A.getLastNavigation()) === null || b === void 0
              ? void 0
              : b.tracePolicy;
          a = a;
          U(b, a);
        });
        ka(function () {
          R('unload', b('performanceNowSinceAppStart')());
        });
      }
    }
    var V = new Map(),
      W = 'data-scrolltracepolicy',
      pa = 200,
      qa = 500,
      ra = !1;
    function sa(a) {
      if (!ra) {
        a = function (a) {
          var c = V.get(a.target);
          c ||
            ((a.target === window.document ||
              (a.target instanceof Element &&
                typeof a.target.getAttribute === 'function' &&
                a.target.getAttribute(W) != null)) &&
              (c = ta(a)));
          c &&
            ((c.metrics.markerPoints.lastScrollEvent = {
              timeSinceStart: a.timeStamp,
            }),
            c.scrollEventCount++,
            c.debounceTimeoutID != null &&
              b('clearTimeout')(c.debounceTimeoutID),
            (c.debounceTimeoutID = b('setTimeoutCometLoggingPri')(
              ua,
              qa,
              c,
              a.target,
            )));
        };
        G && window.addEventListener('scroll', a, { capture: !0, passive: !0 });
        ra = !0;
      }
    }
    function ta(c) {
      var a = A.getLastNavigation(),
        d = c.timeStamp,
        e = b('uuid')(),
        f = a === null || a === void 0 ? void 0 : a.tracePolicy,
        g =
          c.target instanceof Element &&
          typeof c.target.getAttribute === 'function'
            ? c.target.getAttribute(W)
            : null;
      e = A.startTrace(e, g !== null && g !== void 0 ? g : f, 'SCROLL', d);
      var h = {
        longtasks: [],
        scrollEventCount: 0,
        metrics: e,
        unsubscribeLongtaskObserver: J(function (a) {
          h.longtasks.push(a);
        }),
      };
      e.annotations['int'].isNavigationPending = Number(
        !a || a.endTime == null,
      );
      e.annotations.string.traceType = 'SCROLL';
      e.markerPoints.firstScrollEvent = { timeSinceStart: d };
      e.markerPoints.handlerStart = {
        timeSinceStart: b('performanceNowSinceAppStart')(),
      };
      (a === null || a === void 0 ? void 0 : a.endTime) != null &&
        (e.annotations['int'].timeSinceLastNavigation = d - a.endTime);
      V.set(c.target, h);
      return h;
    }
    function ua(a, c) {
      var d = b('performanceNowSinceAppStart')(),
        e = a.metrics;
      e.endTime = d;
      e.annotations['int'].scrollDuration = d - e.startTime;
      e.annotations['int'].scrollEventCount = a.scrollEventCount;
      e.annotations['int'].longtaskCount = a.longtasks.length;
      var f = 0;
      if (a.longtasks.length > 0) {
        var g = 0,
          h = 0;
        a.longtasks.forEach(function (a) {
          a.duration >= pa && h++,
            a.startTime < e.startTime
              ? (f += a.duration - e.startTime + a.startTime)
              : (f += a.duration),
            a.duration > g && (g = a.duration);
        });
        e.annotations['int'].largeLongtaskCount = h;
        e.annotations['int'].maxLongtaskDuration = g;
        e.annotations['int'].avgLongtaskDuration = f / a.longtasks.length;
      }
      e.annotations['int'].totalLongtaskDuration = f;
      a.unsubscribeLongtaskObserver();
      V['delete'](c);
      A.endTrace(e.traceID, d, 'SUCCESS');
    }
    function va(c, d) {
      d === void 0 && (d = b('performanceNowSinceAppStart')());
      var a = A.getLastNavigation();
      if (!a || a.endTime == null) return function () {};
      var e = [],
        f = A.startTrace(b('uuid')(), c, 'SCROLL', d);
      f.annotations['int'].isNavigationPending = 0;
      f.annotations.string.traceType = 'SCROLL';
      var g = J(function (a) {
        e.push(a);
      });
      return function () {
        var a = b('performanceNowSinceAppStart')();
        g();
        f.endTime = a;
        f.annotations['int'].scrollDuration = a - f.startTime;
        f.annotations['int'].longtaskCount = e.length;
        if (e.length > 0) {
          var c = 0,
            d = 0,
            h = 0;
          e.forEach(function (a) {
            a.duration >= pa && h++,
              a.startTime < f.startTime
                ? (c += a.duration - f.startTime + a.startTime)
                : (c += a.duration),
              a.duration > d && (d = a.duration);
          });
          f.annotations['int'].largeLongtaskCount = h;
          f.annotations['int'].maxLongtaskDuration = d;
          f.annotations['int'].avgLongtaskDuration = c / e.length;
          f.annotations['int'].totalLongtaskDuration = c;
        }
        A.endTrace(f.traceID, a, 'SUCCESS');
      };
    }
    var wa = 2e3;
    function xa(a) {
      if (a.code === 'Space' && a.ctrlKey && a.metaKey) return !0;
      return a.code === 'Period' && a.getModifierState('OS') ? !0 : !1;
    }
    function ya(a, c, d) {
      var e = null,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = [],
        k = null,
        l = function () {
          f !== 0 &&
            d({
              allTimes: j,
              averageTimeToRender: g,
              keypresses: f,
              max: h,
              min: i,
            }),
            (f = 0),
            (g = 0),
            (h = 0),
            (i = 0),
            (j = []);
        },
        m = function () {
          (e = null), l();
        },
        n = za(a, function (d) {
          d = d.timestamps;
          e == null
            ? ((e = a), c && c())
            : e !== a &&
              (l(),
              k != null && (b('clearTimeout')(k), (k = null)),
              (e = a),
              c && c());
          d = d.finalRAF - d.keydown;
          d > 0 &&
            (f++,
            j.push(d),
            (g = (g * (f - 1) + d) / f),
            d > h && (h = d),
            (d < i || i === 0) && (i = d));
          k != null && b('clearTimeout')(k);
          k = b('setTimeoutAcrossTransitions')(m, wa);
        });
      return function () {
        n(), l(), k != null && (b('clearTimeout')(k), (k = null)), (e = null);
      };
    }
    var X = { lastRequestedAnimationFrame: null };
    function za(a, c) {
      var d = 20,
        e = new Float64Array(d),
        f = new Float64Array(d),
        g = new Float64Array(d),
        h = -1,
        i = -1,
        j = 0,
        k = !1,
        l = function (a) {
          (h = a.timeStamp),
            (i = b('performanceNowSinceAppStart')()),
            (k = xa(a));
        },
        m = function () {
          k = !0;
        },
        n = function () {
          k = !0;
        };
      a.addEventListener('keydown', l);
      a.addEventListener('paste', m);
      a.addEventListener('cut', n);
      var o = !1,
        p = new MutationObserver(function (l) {
          if (k) {
            k = !1;
            h = -1;
            i = -1;
            return;
          }
          if (j >= d) {
            h = -1;
            i = -1;
            return;
          }
          var m = b('performanceNowSinceAppStart')(),
            n = !1;
          for (
            var l = l,
              p = Array.isArray(l),
              q = 0,
              l = p
                ? l
                : l[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var r;
            if (p) {
              if (q >= l.length) break;
              r = l[q++];
            } else {
              q = l.next();
              if (q.done) break;
              r = q.value;
            }
            r = r;
            r =
              r.type === 'characterData' ||
              (r.type === 'childList' && r.addedNodes.length !== 0) ||
              (r.type === 'attributes' &&
                r.target.nodeName === 'INPUT' &&
                r.attributeName === 'value');
            if (!r || h === -1 || n) continue;
            e[j] = h;
            f[j] = i;
            g[j] = m;
            h = -1;
            i = -1;
            j++;
            n = !0;
            if (o) return;
            X.lastRequestedAnimationFrame = K(function (b) {
              o = !1;
              var d = g[0];
              if (b - d < 0)
                X.lastRequestedAnimationFrame = K(function (h) {
                  for (var i = 0; i < j; i++) {
                    var b = e[i],
                      d = g[i];
                    c({
                      delta: h - b,
                      element: a,
                      firedOnSecondRAF: !0,
                      mutations: j,
                      timestamps: { finalRAF: h, keydown: b, mutation: d },
                    });
                    e[i] = 0;
                    f[i] = 0;
                    g[i] = 0;
                  }
                  j = 0;
                });
              else {
                for (d = 0; d < j; d++) {
                  var h = e[d],
                    i = g[d];
                  c({
                    delta: b - h,
                    element: a,
                    firedOnSecondRAF: !0,
                    mutations: j,
                    timestamps: { finalRAF: b, keydown: h, mutation: i },
                  });
                  e[d] = 0;
                  f[d] = 0;
                  g[d] = 0;
                }
                j = 0;
              }
            });
            o = !0;
          }
        });
      p.observe(a, {
        attributeFilter: ['value'],
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0,
      });
      return function () {
        p.disconnect();
        a.removeEventListener('keydown', l);
        a.removeEventListener('paste', m);
        a.removeEventListener('cut', n);
        var b = X.lastRequestedAnimationFrame;
        b != null && L(b);
      };
    }
    var Aa = 2e3,
      Ba = new Set([
        'insertText',
        'insertCompositionText',
        'insertFromComposition',
        'insertLineBreak',
        'insertParagraph',
        'deleteCompositionText',
        'deleteContentBackward',
        'deleteByComposition',
        'deleteContent',
        'deleteContentForward',
        'deleteWordBackward',
        'deleteWordForward',
        'deleteHardLineBackward',
        'deleteSoftLineBackward',
        'deleteHardLineForward',
        'deleteSoftLineForward',
      ]);
    function Ca(a, c, d) {
      var e = null,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = [],
        k = null,
        l = function () {
          f !== 0 &&
            d({
              allTimes: j,
              averageTimeToRender: g,
              keypresses: f,
              max: h,
              min: i,
            }),
            (f = 0),
            (g = 0),
            (h = 0),
            (i = 0),
            (j = []);
        },
        m = function () {
          (e = null), l();
        },
        n = Ea(a, function (d) {
          e == null
            ? ((e = a), c && c())
            : e !== a &&
              (l(),
              k != null && (b('clearTimeout')(k), (k = null)),
              (e = a),
              c && c()),
            d > 0 &&
              (f++,
              j.push(d),
              (g = (g * (f - 1) + d) / f),
              d > h && (h = d),
              (d < i || i === 0) && (i = d)),
            k != null && b('clearTimeout')(k),
            (k = b('setTimeoutAcrossTransitions')(m, Aa));
        });
      return function () {
        n(), l(), k != null && (b('clearTimeout')(k), (k = null)), (e = null);
      };
    }
    var Da = { lastSetTimeout: null };
    function Ea(a, c) {
      var d = !1,
        e = function () {
          var a = b('performanceNowSinceAppStart')();
          Da.lastSetTimeout = window.setTimeout(function () {
            if (d) {
              d = !1;
              return;
            }
            var e = b('performanceNowSinceAppStart')();
            c(e - a);
          }, 0);
        },
        f = function (a) {
          if (!Ba.has(a.inputType) || d) {
            d = !1;
            return;
          }
          e();
        },
        g = function (a) {
          a = a.keyCode;
          (a === 8 || a === 13) && e();
        },
        h = function () {
          d = !0;
        },
        i = function () {
          d = !0;
        };
      a.addEventListener('keydown', g, !0);
      a.addEventListener('beforeinput', f, !0);
      a.addEventListener('paste', h, !0);
      a.addEventListener('cut', i, !0);
      return function () {
        a.removeEventListener('keydown', g, !0);
        a.removeEventListener('beforeinput', f, !0);
        a.removeEventListener('paste', h, !0);
        a.removeEventListener('cut', i, !0);
        var c = Da.lastSetTimeout;
        c != null && b('clearTimeout')(c);
      };
    }
    var Y = null;
    function Fa(a) {
      var b;
      return (b = (b = Y) === null || b === void 0 ? void 0 : b.has(a)) !==
        null && b !== void 0
        ? b
        : !1;
    }
    var Z = !1,
      Ga = K != null && L != null;
    function Ha() {
      Z || (typeof WeakMap === 'function' && (Y = new WeakMap()), (Z = !0));
    }
    function Ia(a, c, d, e, f) {
      f = f === !0 ? ya : Ca;
      if (Y == null || !Z || !Ga) return function () {};
      a !== d && d != null && Fa(d) && Ja(d);
      if (Fa(a)) return function () {};
      var g = null,
        h = f(
          a,
          function () {
            var a = b('uuid')();
            g = A.startTrace(
              a,
              c,
              'TYPING',
              b('performanceNowSinceAppStart')(),
            );
            a =
              (a = A.getLastNavigation()) === null || a === void 0
                ? void 0
                : a.tracePolicy;
            a != null && (g.annotations.string.routeTracePolicy = a);
            g.annotations.string.identifier = c;
          },
          function (a) {
            var c = a.allTimes,
              d = a.averageTimeToRender,
              f = a.keypresses,
              h = a.max;
            a = a.min;
            if (g) {
              var i = 0;
              c.forEach(function (a) {
                a < 50 && i++;
              });
              if (e)
                for (c in e)
                  typeof e[c] === 'string'
                    ? (g.annotations.string[c] = e[c])
                    : typeof e[c] === 'number' &&
                      (g.annotations['int'][c] = e[c]);
              g.annotations['double'].averageTimeToRender = d;
              g.annotations['double'].keypresses = f;
              g.annotations['double'].keypressesBelow50ms = i;
              g.annotations['double'].max = h;
              g.annotations['double'].min = a;
              A.endTrace(
                g.traceID,
                b('performanceNowSinceAppStart')(),
                'SUCCESS',
              );
            }
          },
        );
      d = function () {
        var b;
        h();
        (b = Y) === null || b === void 0 ? void 0 : b['delete'](a);
      };
      (f = Y) === null || f === void 0 ? void 0 : f.set(a, d);
      return d;
    }
    function Ja(a) {
      if (Y == null) return;
      a = Y.get(a);
      a && a();
    }
    var $ = null;
    function Ka(a) {
      $ == null &&
        (($ = Object.freeze(a)),
        ($.Scroll.enableTracking || $.Responsiveness.enableTracking) && ja(),
        $.Scroll.enableTracking && sa(),
        $.Responsiveness.enableTracking && oa($),
        $.Image.enableTracking && ga(),
        $.Typing.enableTracking && Ha());
    }
    m = babelHelpers['extends']({}, A, {
      setup: Ka,
      trackImagePerf: ha,
      customScrollTracker: va,
      unregisterTypingPerf: Ja,
      trackTypingPerf: Ia,
      SCROLL_PERF_ATTRIBUTE_NAME: W,
    });
    e.exports = m;
  },
  null,
);
