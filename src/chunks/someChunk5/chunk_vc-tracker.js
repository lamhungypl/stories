__d(
  'vc-tracker',
  [
    'ImageDownloadTracker',
    'VisualCompletionUtil',
    'performance',
    'performanceAbsoluteNow',
    'performanceNavigationStart',
    'performanceNowSinceAppStart',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h,
      i = document.visibilityState !== void 0 || document.hidden !== void 0;
    function j() {
      if (i)
        return document.visibilityState !== void 0
          ? document.visibilityState === 'hidden'
          : document.hidden;
      else return !1;
    }
    var k = 1e3,
      l = [],
      m = null;
    d = !1;
    var n = new Set();
    d || (j() && (m = 0), (d = !0));
    i &&
      document.addEventListener('visibilitychange', function (a) {
        var c =
          (a = a === null || a === void 0 ? void 0 : a.timeStamp) !== null &&
          a !== void 0
            ? a
            : b('performanceNowSinceAppStart')();
        o(c, j());
        n.forEach(function (a) {
          a(c, j());
        });
      });
    function o(a, b) {
      b
        ? (m = a)
        : m != null &&
          (l.push({ start: m, end: a }), l.length > k && l.shift(), (m = null));
    }
    function a(a) {
      n.add(a);
      return function () {
        n['delete'](a);
      };
    }
    function p(a, c) {
      var d = [];
      l.concat(
        m != null
          ? [{ start: m, end: b('performanceNowSinceAppStart')() }]
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
    var s = {
      ATTRIBUTE_NAME: 'data-visualcompletion',
      HERO_TRACING_HOLD: 'HeroTracing',
      HERO_LATE_PLACEHOLDER_DETECTION: 'HeroLatePlaceholderDetection',
      INTERACTION_TRACING_HOLD: 'InteractionTracing',
      IGNORE: 'ignore',
      IGNORE_DYNAMIC: 'ignore-dynamic',
      IGNORE_LATE_MUTATION: 'ignore-late-mutation',
      LOADING_STATE: 'loading-state',
      MEDIA_VC_IMAGE: 'media-vc-image',
      CSS_IMG: 'css-img',
    };
    f = s.ATTRIBUTE_NAME;
    f = {
      IGNORE: ((d = {}), (d[f] = s.IGNORE), d),
      IGNORE_DYNAMIC: ((d = {}), (d[f] = s.IGNORE_DYNAMIC), d),
      IGNORE_LATE_MUTATION: ((d = {}), (d[f] = s.IGNORE_LATE_MUTATION), d),
      LOADING_STATE: ((d = {}), (d[f] = s.LOADING_STATE), d),
      MEDIA_VC_IMAGE: ((d = {}), (d[f] = s.MEDIA_VC_IMAGE), d),
      CSS_IMG: ((d = {}), (d[f] = s.CSS_IMG), d),
    };
    var t = [],
      u =
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
          ? window.IntersectionObserver
          : null;
    function v(a) {
      return a.isIntersecting != null
        ? a.isIntersecting
        : a.intersectionRatio > 0 ||
            (a.intersectionRect &&
              (a.intersectionRect.height > 0 || a.intersectionRect.width > 0));
    }
    u == null && t.push('IntersectionObserver');
    var w = window.MutationObserver || window.WebKitMutationObserver;
    w == null && t.push('MutationObserver');
    i || t.push('VisibilityAPI');
    d = window.requestAnimationFrame;
    d == null && t.push('requestAnimationFrame');
    d == null && t.push('cancelAnimationFrame');
    var x = !1,
      y = !1;
    function z() {
      x ||
        (typeof ((g || (g = b('performance'))) === null ||
        (g || (g = b('performance'))) === void 0
          ? void 0
          : (g || (g = b('performance'))).getEntriesByName) !== 'function' ||
        typeof ((g || (g = b('performance'))) === null ||
        (g || (g = b('performance'))) === void 0
          ? void 0
          : (g || (g = b('performance'))).getEntriesByType) !== 'function'
          ? ((y = !1), (x = !0))
          : (g || (g = b('performance'))).getEntriesByType('resource').length >
              0 && ((y = !0), (x = !0)));
      return y;
    }
    function A(a) {
      if (typeof (g || (g = b('performance'))).getEntriesByName !== 'function')
        return null;
      var c = (g || (g = b('performance'))).getEntriesByName(a);
      c.length === 0 &&
        a.indexOf('#') >= 0 &&
        (c = (g || (g = b('performance'))).getEntriesByName(a.split('#')[0]));
      return c && c[0];
    }
    var B =
      typeof ((d = window.PerformanceObserver) === null || d === void 0
        ? void 0
        : (d = d.supportedEntryTypes) === null || d === void 0
        ? void 0
        : d.includes) === 'function' &&
      window.PerformanceObserver.supportedEntryTypes.includes('layout-shift');
    function C() {
      if (!B) return null;
      var a = 0,
        b = 0,
        c = [],
        d = new window.PerformanceObserver(function (d) {
          for (
            var d = d.getEntries(),
              e = Array.isArray(d),
              f = 0,
              d = e
                ? d
                : d[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var g;
            if (e) {
              if (f >= d.length) break;
              g = d[f++];
            } else {
              f = d.next();
              if (f.done) break;
              g = f.value;
            }
            g = g;
            if (!g.hadRecentInput) {
              var h = c[0],
                i = c[c.length - 1];
              b &&
              g.startTime - i.startTime < 1e3 &&
              g.startTime - h.startTime < 5e3
                ? ((b += g.value), c.push(g))
                : ((b = g.value), (c = [g]));
              b > a && (a = b);
            }
          }
        });
      d.observe({ buffered: !0, type: 'layout-shift' });
      return function () {
        d.disconnect();
        return a;
      };
    }
    var D =
      typeof ((d = window.PerformanceObserver) === null || d === void 0
        ? void 0
        : (d = d.supportedEntryTypes) === null || d === void 0
        ? void 0
        : d.includes) === 'function' &&
      window.PerformanceObserver.supportedEntryTypes.includes(
        'largest-contentful-paint',
      );
    function E() {
      if (!D) return null;
      var a = null,
        b = new window.PerformanceObserver(function (b) {
          for (
            var b = b.getEntries(),
              c = Array.isArray(b),
              d = 0,
              b = c
                ? b
                : b[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var e;
            if (c) {
              if (d >= b.length) break;
              e = b[d++];
            } else {
              d = b.next();
              if (d.done) break;
              e = d.value;
            }
            e = e;
            a = e;
          }
        });
      b.observe({ buffered: !0, type: 'largest-contentful-paint' });
      return function () {
        b.disconnect();
        return a == null ? null : { timestamp: a.startTime };
      };
    }
    var F = {
      JS: 'js',
      CSS: 'css',
      IMG: 'img',
      EMOJI: 'emoji',
      SCONTENT: 'scontent',
      SPRITED_IMG: 'spritedImg',
      UNSPRITED_IMG: 'unspritedImg',
      PREDICTED_SPRITE_IMG: 'predictedSpriteImg',
    };
    function G(a) {
      var b = a.indexOf('?');
      return b === -1 ? a : a.substring(0, b);
    }
    function H(a, b) {
      var c = b.substring(b.lastIndexOf('.') + 1);
      if (c === 'js') return F.JS;
      else if (c === 'css') return F.CSS;
      if (b.includes('rsrc') && c === 'png') {
        if (a === 'img') return F.UNSPRITED_IMG;
        return a === 'link' ? F.PREDICTED_SPRITE_IMG : F.SPRITED_IMG;
      }
      if (b.includes('emoji') && c === 'png') return F.EMOJI;
      return b.includes('scontent') && c !== 'kf' ? F.SCONTENT : a;
    }
    function I() {
      return Object.keys(F).reduce(function (a, b) {
        b = F[b];
        a[b] = {
          cacheCount: 0,
          encodedBodySize: 0,
          decodedBodySize: 0,
          totalCount: 0,
          transferSize: 0,
        };
        return a;
      }, {});
    }
    function J(a, c) {
      if (typeof (g || (g = b('performance'))).getEntriesByType !== 'function')
        return new Map();
      var d = I(),
        e = (g || (g = b('performance')))
          .getEntriesByType('resource')
          .filter(function (b) {
            return b.startTime >= a && b.startTime <= c;
          })
          .map(function (a) {
            return {
              encodedBodySize: a.encodedBodySize,
              decodedBodySize: a.decodedBodySize,
              transferSize: a.transferSize,
              type: H(a.initiatorType, G(a.name)),
            };
          })
          .filter(function (a) {
            return d[a.type];
          });
      e.forEach(function (a) {
        var b = d[a.type];
        b.encodedBodySize += a.encodedBodySize;
        b.decodedBodySize += a.decodedBodySize;
        b.transferSize += a.transferSize;
        b.totalCount++;
        a.transferSize === 0 && b.cacheCount++;
      });
      e = new Map();
      for (var f in d) {
        var h = d[f];
        for (var i in h) e.set(f + '_' + i, h[i]);
      }
      return e;
    }
    var K = [],
      L = [],
      M = {
        subscribe: function (a) {
          K.push(a);
        },
        subscribeStart: function (a) {
          L.push(a);
        },
        unsubscribe: function (a) {
          K = K.filter(function (b) {
            return b !== a;
          });
        },
        unsubscribeStart: function (a) {
          L = L.filter(function (b) {
            return b !== a;
          });
        },
        emit: function (a) {
          K.forEach(function (b) {
            return b(a);
          });
        },
        emitStart: function (a) {
          L.forEach(function (b) {
            return b(a);
          });
        },
      },
      N = /url\(.*(http.*)\)/gi,
      O = 4,
      P = 'manualVCPointCandidate';
    function Q() {
      return { bottom: 0, left: 0, right: 0, top: 0 };
    }
    function R(a) {
      return { bottom: a.bottom, left: a.left, right: a.right, top: a.top };
    }
    d = (function () {
      function a(a, c, d, e, f) {
        var g = this;
        this.$1 = 0;
        this.$2 = 0;
        this.cssBgScanOverhead = 0;
        this.initialScrollY = 0;
        this.scrolledVC = 0;
        this.reported = !1;
        this.measureOriginalViewport = !0;
        this.mutationRoots = new Set();
        this.mutatedElementCount = 0;
        this.scrollEventHandler = function () {
          (g.$13 = !0),
            g.markerPoints.has('scroll_start') ||
              g.addMarkerPoint(
                'scroll_start',
                b('performanceNowSinceAppStart')(),
              ),
            window.removeEventListener('scroll', g.scrollEventHandler);
        };
        this.config = f;
        this.$4 = new Map();
        this.$5 = new Map();
        this.$6 = [];
        this.$7 = [];
        this.cssBgElements = new Map();
        this.$8 = 0;
        this.$9 = [];
        this.$10 = new Set();
        this.startTime = a;
        this.$11 = { height: 0, width: 0 };
        this.initialScrollY = e === 'INITIAL_LOAD' ? 0 : window.scrollY;
        this.$12 = this.initialScrollY;
        this.currentScrollY = this.initialScrollY;
        this.navSequence = c;
        this.traceID = d;
        this.markerPoints = new Map();
        this.stateLog = new Map();
        this.annotations = {
          string: {},
          int: {},
          double: {},
          bool: {},
          string_array: {},
          int_array: {},
          double_array: {},
          bool_array: {},
        };
        this.tagSet = new Map();
        this.navDone = !1;
        this.interactionType = e;
        this.$13 = !1;
        this.$14 = C();
        e === 'INITIAL_LOAD' && (this.$15 = E());
        M.emitStart(e);
        try {
          window.addEventListener('scroll', this.scrollEventHandler, {
            passive: !0,
          });
        } catch (a) {
          if (a.message !== "can't access dead object") throw a;
        }
      }
      var c = a.prototype;
      c.addAnnotation = function (a, b) {
        this.annotations.string[a] = b;
      };
      c.addAnnotationInt = function (a, b) {
        this.annotations['int'][a] = b;
      };
      c.addAnnotationDouble = function (a, b) {
        this.annotations['double'][a] = b;
      };
      c.addAnnotationBoolean = function (a, b) {
        this.annotations.bool[a] = b;
      };
      c.addAnnotationIntArray = function (a, b) {
        this.annotations.int_array[a] = b;
      };
      c.addAnnotationDoubleArray = function (a, b) {
        this.annotations.double_array[a] = b;
      };
      c.addAnnotationStringArray = function (a, b) {
        this.annotations.string_array[a] = b;
      };
      c.addAnnotationBooleanArray = function (a, b) {
        this.annotations.bool_array[a] = b;
      };
      c.addFirstMarkerPoint = function (a, b, c) {
        c === void 0 && (c = {});
        var d = this.markerPoints.get(a);
        b >= this.startTime &&
          (!d || d.timestamp > b) &&
          this.markerPoints.set(a, { data: c, timestamp: b });
      };
      c.addMarkerPoint = function (a, b, c) {
        c === void 0 && (c = {}),
          b >= this.startTime &&
            this.markerPoints.set(a, { data: c, timestamp: b });
      };
      c.addVCPointCandidate = function (a, b) {
        b === void 0 && (b = {}), this.addMarkerPoint(P, a, b);
      };
      c.addVisualElement = function (a, b, c, d, e) {
        this.$13 &&
          ((this.currentScrollY = window.scrollY),
          (this.$13 = !1),
          window.addEventListener('scroll', this.scrollEventHandler, {
            passive: !0,
          }));
        a = {
          mutationSeq: a,
          element: b,
          timestamp: d,
          mutationType: c,
          scrollY: this.currentScrollY,
          visible: e,
        };
        b instanceof HTMLImageElement &&
          ((a.naturalWidth = b.naturalWidth),
          (a.naturalHeight = b.naturalHeight));
        this.$9.push(a);
      };
      c.trackPagelet = function (a, b, c, d, e, f) {
        f === void 0 && (f = !1),
          this.$5.set(a, {
            data: {},
            element: a,
            excludeFromMainVC: this.interactionType !== 'INTERACTION' && f,
            mutationSeq: 0,
            name: b,
            pageletTypeName: e,
            points: { hydration: c - this.startTime },
            vcCallback: d,
          });
      };
      c.addTag = function (a, b) {
        this.tagSet.has(a) || this.tagSet.set(a, new Set());
        a = this.tagSet.get(a);
        a && a.add(b);
      };
      c.checkViewport = function () {
        this.$11 = b('VisualCompletionUtil').getViewportSize();
      };
      c.calculate = function (a) {
        var c = this;
        a === void 0 && (a = !1);
        window.removeEventListener('scroll', this.scrollEventHandler);
        this.checkViewport();
        var d = b('performanceNowSinceAppStart')();
        this.$2 = 0;
        this.initTree();
        !a && z() && this.getBackgroundImages();
        this.calculatePaintedPixels();
        var e = {
          annotations: this.annotations,
          bgCheckLatency: this.cssBgScanOverhead,
          bgChecked: this.$8,
          bgNum: 0,
          bgPixels: 0,
          calcLatency: 0,
          compNum: 0,
          compPixels: 0,
          cssBgElements: Array.from(this.cssBgElements.values()),
          elements: this.$7,
          finalScrollY: this.$12,
          imgNum: 0,
          imgPixels: 0,
          initialScrollY: this.initialScrollY,
          interactionType: this.interactionType,
          markerPoints: this.markerPoints,
          navComplete: b('performanceNowSinceAppStart')(),
          navSequence: this.navSequence,
          pagelets: Array.from(this.$5.values()),
          paintedPixels: this.$2,
          scrollY: window.scrollY,
          scrolledVC: this.scrolledVC,
          speedIndex: 0,
          startTime: this.startTime,
          tagSet: this.tagSet,
          totalPixels: this.$1,
          traceId: this.traceID,
          tracePolicy: this.tracePolicy,
          stateLog: this.stateLog,
          vcWithoutImage: 0,
          viewport: this.$11,
          visuallyComplete: 0,
        };
        this.addAnnotationInt('mutationRootCount', this.mutationRoots.size);
        this.addAnnotationInt('mutatedElementCount', this.mutatedElementCount);
        this.addAnnotationInt('visualChangeRecordCount', this.$9.length);
        this.addAnnotationInt('paintedElementCount', this.$7.length);
        this.$7.length &&
          t.length === 0 &&
          (this.addMarkerPoint('FP', this.$7[this.$7.length - 1].timestamp),
          this.$7.forEach(function (a) {
            var b = a.element;
            if (!b) return;
            var d = a.pagelet;
            if (d !== null && d !== void 0 && d.excludeFromMainVC) {
              var f = 'vcIncluding' + d.name;
              c.markerPoints.has(f) ||
                e.markerPoints.set(f, {
                  timestamp: Math.max(a.latency, e.visuallyComplete),
                });
            } else {
              if (e.vcWithoutImage === 0 && a.type === 'component') {
                f = {
                  height: a.rectangle.bottom - a.rectangle.top,
                  mutationType: a.mutationType,
                  tagName: b.tagName || '',
                  type: a.type,
                  width: a.rectangle.right - a.rectangle.left,
                };
                d && (f.pagelet = d.name);
                e.vcWithoutImage = a.latency;
                e.markerPoints.set('vcWithoutImage', {
                  data: f,
                  element: b,
                  timestamp: a.latency + c.startTime,
                });
              }
              if (e.visuallyComplete === 0) {
                f = {
                  height: a.rectangle.bottom - a.rectangle.top,
                  mutationType: a.mutationType,
                  tagName: b.tagName || '',
                  type: a.type,
                  width: a.rectangle.right - a.rectangle.left,
                };
                d && (f.pagelet = d.name);
                e.visuallyComplete = a.latency;
                e.markerPoints.set('visuallyComplete', {
                  data: f,
                  element: b,
                  timestamp: a.latency + c.startTime,
                });
                e.scrollY = a.scrollY;
              }
            }
            e.speedIndex += (a.pixels / c.$2) * a.latency;
            switch (a.type) {
              case 'component':
                e.compNum++;
                e.compPixels += a.pixels;
                break;
              case 'img':
                e.imgNum++;
                e.imgPixels += a.pixels;
                break;
              case 'bg':
                e.bgNum++;
                e.bgPixels += a.pixels;
                break;
            }
          }));
        this.logPagelets();
        this.logPixelProgress();
        a &&
          ((e.visuallyComplete = e.vcWithoutImage =
            b('performanceNowSinceAppStart')() - this.startTime),
          e.markerPoints.set('visuallyComplete', {
            data: {},
            timestamp: e.visuallyComplete + this.startTime,
          }),
          e.markerPoints.set('vcWithoutImage', {
            data: {},
            timestamp: e.vcWithoutImage + this.startTime,
          }));
        e.calcLatency = b('performanceNowSinceAppStart')() - d;
        this.setupMetaData(e);
        this.logCssBgElementsMetaData();
        this.reported = !0;
        return e;
      };
      c.cleanupPaintedElements = function () {
        if (this.config.vc_deep_cleanup !== !0) {
          this.$7.forEach(function (a) {
            delete a.element;
          });
          return;
        }
        var a = new Set(),
          b = [].concat(this.$7);
        while (b.length > 0) {
          var c = b.pop();
          if (a.has(c)) continue;
          a.add(c);
          delete c.element;
          b.push.apply(b, c.children);
        }
      };
      c.tearDown = function () {
        this.$4.clear(),
          (this.$6 = []),
          (this.$9 = []),
          this.$10.clear(),
          this.mutationRoots.clear(),
          this.config.retain_element_reference ||
            (this.cleanupPaintedElements(),
            this.cssBgElements.forEach(function (a) {
              delete a.element;
            }),
            this.$5.forEach(function (a) {
              delete a.element;
            })),
          this.$5.clear(),
          this.markerPoints.forEach(function (a) {
            delete a.element;
          }),
          this.cssBgElements.clear();
      };
      c.findPagelet = function (a) {
        a = a;
        while (a) {
          if (this.$5.has(a)) return this.$5.get(a);
          a = a.parentElement;
        }
        return null;
      };
      c.findParent = function (a) {
        a = a.parentElement;
        while (a) {
          if (this.$4.has(a)) return this.$4.get(a);
          a = a.parentElement;
        }
        return null;
      };
      c.checkExcluded = function (a) {
        a = a;
        while (a) {
          if (this.$10.has(a)) return !0;
          else if (this.$4.has(a) || this.mutationRoots.has(a)) return !1;
          else if (
            typeof a.getAttribute === 'function' &&
            a.getAttribute(s.ATTRIBUTE_NAME) === s.IGNORE
          )
            return !0;
          a = a.parentElement;
        }
        return !1;
      };
      c.getBackgroundImages = function () {
        var c = this;
        this.cssBgElements.forEach(function (d) {
          if (d.element) {
            var e,
              f = d.element,
              g = c.findParent(f);
            if (!g) return;
            var h = b('VisualCompletionUtil').offsetTop(f, c.initialScrollY),
              i = c.getRelativeBoundingClientRect(
                f,
                c.measureOriginalViewport ? h : void 0,
              );
            i = b('VisualCompletionUtil').getRectIntersection(i, g.rectangle);
            var j = b('VisualCompletionUtil').getPixels(i);
            if (j === 0 || (c.measureOriginalViewport && h > c.$11.height))
              return;
            ((e = d.resourceTiming) === null || e === void 0
              ? void 0
              : e.responseEnd) == null && (d.resourceTiming = A(d.url));
            if (
              ((e = d.resourceTiming) === null || e === void 0
                ? void 0
                : e.responseEnd) != null
            ) {
              e = d.resourceTiming;
              d = e.responseEnd;
              var k = c.findPagelet(f);
              if (e.startTime >= c.startTime && d > g.timestamp) {
                e = {
                  children: [],
                  element: f,
                  hadLateMutationExpected: !1,
                  hadLateMutationUnexpected: !1,
                  latency: d - c.startTime,
                  mutationSeq: g.mutationSeq,
                  mutationType: 'bg',
                  offsetTop: h,
                  pagelet: k,
                  parent: g,
                  pixels:
                    k !== null && k !== void 0 && k.excludeFromMainVC ? 0 : j,
                  rectangle: i,
                  scrollY: g.scrollY,
                  timestamp: d,
                  type: 'bg',
                  veid: String(a.$3++),
                };
                g.children.push(e);
                c.$4.set(f, e);
                c.$7.push(e);
              }
            }
          }
        });
      };
      c.getRelativeBoundingClientRect = function (a, b) {
        var c = Q();
        if (typeof a.getBoundingClientRect !== 'function') return c;
        c = R(a.getBoundingClientRect());
        return {
          bottom: b != null ? b + (c.bottom - c.top) : c.bottom,
          left: c.left,
          right: c.right,
          top: b != null ? b : c.top,
        };
      };
      c.findFirstVisibleChild = function (a) {
        var c = this,
          d = [a];
        a = function () {
          var a = [],
            e = 0,
            f = void 0;
          d.forEach(function (d) {
            if (typeof d.getBoundingClientRect !== 'function') return;
            var g = R(d.getBoundingClientRect()),
              h = b('VisualCompletionUtil').getPixels(g);
            if (
              h > 0 &&
              (g.bottom <= 0 ||
                g.right <= 0 ||
                g.left >= c.$11.width ||
                g.top >= c.$11.height)
            )
              return;
            h > e && !c.checkExcluded(d) && ((e = h), (f = d));
            a = a.concat(Array.from(d.children));
          });
          if (e > 0 && f) return { v: f };
          d = a;
        };
        while (d && d.length) {
          var e = a();
          if (typeof e === 'object') return e.v;
        }
        return null;
      };
      c.getRectangle = function (a, c) {
        a = this.findFirstVisibleChild(a);
        if (a == null) return Q();
        a = this.getRelativeBoundingClientRect(a);
        var d = a.bottom,
          e = a.left,
          f = a.right;
        a = a.top;
        d = { bottom: d, left: e, right: f, top: a };
        return b('VisualCompletionUtil').getRectIntersection(d, c);
      };
      c.getStyleBackground = function (a) {
        if (typeof window.getComputedStyle !== 'function') return null;
        this.$8++;
        a = window.getComputedStyle(a);
        var b = a['background-image'];
        if (a.visibility !== 'hidden' && b && b !== 'none') {
          N.lastIndex = 0;
          a = N.exec(b);
          if (a && a.length > 1) return a[1].replace('"', '');
        }
        return null;
      };
      c.excludeElement = function (a) {
        this.$10.add(a);
      };
      c.initTree = function () {
        var c = this,
          d = {
            bottom: this.$11.height,
            left: 0,
            right: this.$11.width,
            top: -this.initialScrollY,
          };
        this.$9 = this.$9.sort(function (a, b) {
          return a.timestamp - b.timestamp;
        });
        var e = 0,
          f = 0;
        this.$9.forEach(function (g) {
          var h = g.element,
            i = g.mutationSeq,
            j = g.mutationType,
            k = g.naturalHeight,
            l = g.naturalWidth,
            m = g.scrollY,
            n = g.timestamp;
          g = g.visible;
          if (
            h.getAttribute(s.ATTRIBUTE_NAME) === s.MEDIA_VC_IMAGE &&
            g === !0 &&
            k != null &&
            l != null
          ) {
            g = k * l;
            var o = Number(g < e * O);
            l = {
              ignored: o,
              resolution: g,
              mutationType: j,
              naturalWidth: l,
              naturalHeight: k,
            };
            e > 0 && (l.ratio = g / e);
            c.addMarkerPoint('mediaVCImage_' + f++, n, l);
            if (o) return;
            else c.addMarkerPoint('ImageMediaVC', n), (e = g);
          }
          k = c.findFirstVisibleChild(h);
          if (k == null) return;
          l = b('VisualCompletionUtil').offsetTop(k, c.initialScrollY);
          o = c.getRelativeBoundingClientRect(
            k,
            c.measureOriginalViewport ? l : void 0,
          );
          g = b('VisualCompletionUtil').getRectIntersection(o, d);
          if (c.inAboveTheFold(k)) {
            n - c.startTime > c.scrolledVC &&
              ((c.scrolledVC = n - c.startTime), (c.$12 = m));
            if (c.measureOriginalViewport && l > c.$11.height) return;
            h = c.findPagelet(k);
            o = {
              children: [],
              element: k,
              hadLateMutationExpected: !1,
              hadLateMutationUnexpected: !1,
              latency: n - c.startTime,
              mutationSeq: i,
              mutationType: j,
              offsetTop: l,
              pagelet: h,
              parent: null,
              pixels:
                h !== null && h !== void 0 && h.excludeFromMainVC
                  ? 0
                  : b('VisualCompletionUtil').getPixels(g),
              rectangle: g,
              scrollY: m,
              timestamp: n,
              type:
                j === 'imgLoad' || j === 'mutationImageAttribute'
                  ? 'img'
                  : 'component',
              veid: String(a.$3++),
            };
            c.$4.set(k, o);
          }
        });
        this.$4.forEach(function (a) {
          var b = a.element;
          if (b) {
            b = c.findParent(b);
            b
              ? (a.type !== 'component' && (a.scrollY = b.scrollY),
                b.children.push(a),
                (a.parent = b))
              : c.$6.push(a);
          }
        });
        this.$4.forEach(function (a, b) {
          var d = a.parent;
          while (d) {
            if (a.timestamp < d.timestamp) {
              c.$4['delete'](b);
              return;
            }
            d = d.parent;
          }
          c.$7.push(a);
        });
      };
      c.logPixelProgress = function () {
        var a = this,
          b = new Map([
            ['vc98', 0.02],
            ['vc95', 0.05],
          ]),
          c = 0,
          d = 0,
          e = function (e) {
            var f = a.$7[e];
            c += f.pixels;
            if (b.size === 0) return 'break';
            b.forEach(function (b, d) {
              !a.markerPoints.has(d) &&
                c / a.$2 >= b &&
                a.addMarkerPoint(d, f.latency + a.startTime);
            });
            f.type === 'component' &&
              ((d += f.pixels),
              f.children.forEach(function (a) {
                a.type !== 'component' && (d += a.pixels);
              }),
              b.forEach(function (c, e) {
                !a.markerPoints.has(e + 'WithoutImage') &&
                  d / a.$2 >= c &&
                  (a.addMarkerPoint(
                    e + 'WithoutImage',
                    f.latency + a.startTime,
                  ),
                  b['delete'](e));
              }));
          };
        for (var f = 0; f < this.$7.length; f++) {
          var g = e(f);
          if (g === 'break') break;
        }
      };
      c.logPagelets = function () {
        var a = this;
        this.$5.forEach(function (b, c) {
          if (!a.inViewport(c)) {
            b.vcCallback != null && b.vcCallback(null, null, b.data);
            a.$5['delete'](c);
            return;
          }
          c = a.$4.has(c) ? a.$4.get(c) : a.findParent(c);
          if (c) {
            var d = c.latency + a.startTime;
            b.points.firstPaint = d;
            b.points.visuallyComplete = d;
            b.points.vcWithoutImage = d;
            b.mutationSeq = c.mutationSeq;
          }
        });
        this.$7.forEach(function (b) {
          var c = b.pagelet;
          while (c != null) {
            var d,
              e = b.latency + a.startTime;
            c.points.visuallyComplete = Math.max(
              (d = c.points.visuallyComplete) !== null && d !== void 0 ? d : 0,
              e,
            );
            if (b.type === 'component') {
              c.points.vcWithoutImage = Math.max(
                (d = c.points.vcWithoutImage) !== null && d !== void 0 ? d : 0,
                e,
              );
            }
            c =
              c.element && c.element.parentElement
                ? a.findPagelet(c.element.parentElement)
                : null;
          }
        });
        this.$5.forEach(function (b) {
          b.points.visuallyComplete != null &&
            b.pageletTypeName != null &&
            b.pageletTypeName !== '' &&
            a.markerPoints.set(b.pageletTypeName + 'VC', {
              timestamp: b.points.visuallyComplete,
            }),
            b.points.vcWithoutImage != null &&
              a.markerPoints.set('VC_' + b.name, {
                data: b.data,
                timestamp: b.points.vcWithoutImage,
              }),
            b.vcCallback != null &&
              b.points.visuallyComplete != null &&
              b.points.vcWithoutImage != null &&
              b.vcCallback(
                b.points.visuallyComplete,
                b.points.vcWithoutImage,
                b.data,
              ),
            a.config.retain_element_reference || delete b.element;
        });
      };
      c.calculatePaintedPixels = function () {
        var a = this;
        this.$7 = this.$7.sort(function (a, b) {
          return b.latency - a.latency;
        });
        this.$7.forEach(function (c) {
          var d = c.pixels,
            e = c.parent;
          while (e) {
            var f;
            c.rectangle = b('VisualCompletionUtil').getRectIntersection(
              c.rectangle,
              e.rectangle,
            );
            c.pixels =
              (f = c.pagelet) !== null && f !== void 0 && f.excludeFromMainVC
                ? 0
                : b('VisualCompletionUtil').getPixels(c.rectangle);
            d = Math.min(d, c.pixels, e.pixels);
            e = e.parent;
          }
          c.pixels = d;
          e = c.parent;
          while (e) (e.pixels -= d), (e = e.parent);
          a.$2 += d;
        });
        this.$1 = this.$2;
      };
      c.inAboveTheFold = function (a) {
        var c = b('VisualCompletionUtil').getViewportSize();
        a = b('VisualCompletionUtil').getPixels(
          this.getRectangle(a, {
            bottom: c.height,
            left: 0,
            right: c.width,
            top: -window.scrollY,
          }),
        );
        return a > 0;
      };
      c.inOriginalViewport = function (a) {
        return (
          this.inAboveTheFold(a) &&
          b('VisualCompletionUtil').offsetTop(a, this.initialScrollY) <=
            this.$11.height
        );
      };
      c.inViewport = function (a) {
        return this.measureOriginalViewport
          ? this.inOriginalViewport(a)
          : this.inAboveTheFold(a);
      };
      c.setInitialScrollY = function (a) {
        (this.initialScrollY = a), (this.currentScrollY = a);
      };
      c.setTracePolicy = function (a) {
        this.tracePolicy = a;
      };
      c.setupMetaData = function (a) {
        var c = this,
          d = this.markerPoints.get(P);
        d &&
          d.timestamp > a.visuallyComplete + a.startTime &&
          ((a.visuallyComplete = d.timestamp - a.startTime),
          this.markerPoints.set('visuallyComplete', d),
          (a.annotations['int'].isVCOverriden = 1));
        a.tracePolicy != null &&
          a.tracePolicy !== '' &&
          (a.annotations.string.tracePolicy = a.tracePolicy);
        a.annotations.string.interactionId = a.traceId;
        a.annotations['int'].height = a.viewport.height;
        a.annotations['int'].width = a.viewport.width;
        a.annotations['int'].scrollY = a.scrollY;
        typeof window.devicePixelRatio === 'number' &&
          (a.annotations['double'].devicePixelRatio = window.devicePixelRatio);
        a.annotations['int'].finalScrollY = a.finalScrollY;
        a.annotations['int'].initialScrollY = a.initialScrollY;
        a.annotations['double'].vcCalculationOverhead = a.calcLatency;
        a.annotations['double'].cssBgScanOverhead = a.bgCheckLatency;
        a.markerPoints.set('logVC', { timestamp: a.navComplete });
        a.speedIndex > 0 &&
          a.markerPoints.set('speedIndex', {
            timestamp: a.speedIndex + a.startTime,
          });
        a.navSequence === 1 &&
          (g || (g = b('performance'))) &&
          (g || (g = b('performance'))).timing &&
          (g || (g = b('performance'))).timing.responseStart &&
          a.markerPoints.set('TTFB', {
            timestamp:
              (g || (g = b('performance'))).timing.responseStart -
              b('performanceNavigationStart')(),
          });
        a.elements.length &&
          this.measureOriginalViewport &&
          a.scrolledVC > 0 &&
          a.markerPoints.set('scrolledVC', {
            timestamp: a.scrolledVC + a.startTime,
          });
        if (this.interactionType === 'INITIAL_LOAD') {
          d =
            (g || (g = b('performance'))) === null ||
            (g || (g = b('performance'))) === void 0
              ? void 0
              : (d = (g || (g = b('performance'))).getEntriesByType) === null ||
                d === void 0
              ? void 0
              : d.call(g || (g = b('performance')), 'paint');
          d &&
            d.forEach(function (a) {
              a.name === 'first-contentful-paint' &&
                c.addFirstMarkerPoint('FCP', a.startTime);
            });
        }
        d = p(a.startTime, a.visuallyComplete + a.startTime);
        d.length > 0 && this.addMarkerPoint('backgrounded', d[0].start);
        a.annotations['int'].hidden = Number(
          r(a.startTime, a.visuallyComplete + a.startTime),
        );
        d = J(a.startTime, a.startTime + a.visuallyComplete);
        d.forEach(function (b, c) {
          a.annotations['int'][c] = b;
        });
        t.forEach(function (a) {
          c.addTag('unavailableAPIs', a);
        });
        if (this.$14) {
          d = this.$14();
          a.annotations['double'].CLS = d;
        }
        if (this.$15) {
          d = this.$15();
          d && this.addMarkerPoint('LCP', d.timestamp);
        }
      };
      c.logCssBgElementsMetaData = function () {
        var a = 0;
        this.cssBgElements.forEach(function (b) {
          ((b = b.resourceTiming) === null || b === void 0
            ? void 0
            : b.responseEnd) != null && a++;
        });
        this.addAnnotationInt('cssBgElementCount', this.cssBgElements.size);
        this.addAnnotationInt('cssBgTimingCount', a);
      };
      return a;
    })();
    d.$3 = 1;
    var S = new Set(),
      T = new Map();
    function c() {
      return new Map(T);
    }
    var U = !1;
    !U &&
      i &&
      a(function (a, b) {
        b &&
          T.forEach(function (a) {
            a.pendingMutations.forEach(function (b, c) {
              a.addVisualElement(
                b.mutationSeq,
                c,
                b.mutationType,
                b.displayTimestamp,
              ),
                a.intersectionObserver && a.intersectionObserver.unobserve(c),
                a.unlock(b.lockId);
            }),
              a.pendingMutations.clear();
          });
      });
    U = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c, d, e, f, g) {
        var h;
        h = a.call(this, c, d, e, f, g) || this;
        h.pendingLocks = new Map();
        h.pendingImages = new Map();
        h.$VisualCompletionTraceBase1 = new Map();
        h.loadingStateObserver = null;
        h.$VisualCompletionTraceBase2 = [];
        h.pendingLoadingElements = new Map();
        h.$VisualCompletionTraceBase3 = 0;
        h.$VisualCompletionTraceBase4 = [];
        h.$VisualCompletionTraceBase5 = [];
        h.mutationSeq = 0;
        h.mutationObserver = null;
        h.mutationObserverConfig = {
          attributeFilter: ['hidden', 'style', 'href', 'src'],
          attributeOldValue: !0,
          attributes: !0,
          characterData: !0,
          childList: !0,
          subtree: !0,
        };
        h.intersectionObserver = null;
        h.pendingMutations = new Map();
        h.loggingScheduled = !1;
        h.intersectionObserverCallback = function (a) {
          Array.prototype.forEach.call(a, function (a) {
            var b = h.pendingMutations.get(a.target);
            b &&
              (h.addVisualElement(
                b.mutationSeq,
                a.target,
                b.mutationType,
                a.time,
                v(a),
              ),
              h.intersectionObserver != null &&
                h.intersectionObserver.unobserve(a.target),
              h.unlock(b.lockId),
              h.pendingMutations['delete'](a.target));
          });
        };
        h.mutationRecordHandler = function (a) {
          h.mutationSeq++;
          var c = [];
          Array.from(a).forEach(function (a) {
            if (
              a.target.nodeType !== Node.ELEMENT_NODE &&
              a.target.nodeType !== Node.TEXT_NODE
            )
              return;
            var d = a.target;
            if (a.type === 'childList' && a.addedNodes && a.addedNodes.length)
              Array.from(a.addedNodes).forEach(function (a) {
                a = a;
                if (h.shouldIgnoreMutation(a)) return;
                if (a.tagName === 'IMG' || a.tagName === 'image') {
                  h.trackImage(h.mutationSeq, a, 'imgLoad');
                  return;
                } else if (typeof a.querySelectorAll === 'function') {
                  var b = a.querySelectorAll('img, image');
                  Array.from(b).forEach(function (a) {
                    if (h.shouldIgnoreMutation(a)) return;
                    h.trackImage(h.mutationSeq, a, 'imgLoad');
                  });
                }
                if (a.nodeType === Node.ELEMENT_NODE)
                  c.push([a, 'mutationAdd']);
                else if (
                  h.config.observeTextMutation &&
                  a.nodeType === Node.TEXT_NODE
                ) {
                  b = h.getParentElementForTextNodeChange(a);
                  b != null && c.push([b, 'mutationTextAdd']);
                }
              });
            else if (a.type === 'attributes' && !h.shouldIgnoreMutation(d))
              if (a.attributeName === 'hidden')
                d.hasAttribute('hidden') ||
                  c.push([d, 'mutationHiddenAttribute']);
              else if (a.attributeName === 'style') {
                var e = d.getAttribute('style'),
                  f = a.oldValue;
                b('VisualCompletionUtil').checkInvisibleStyle(f) &&
                  !b('VisualCompletionUtil').checkInvisibleStyle(e) &&
                  c.push([d, 'mutationStyleAttribute']);
              } else
                ((d.tagName === 'image' && a.attributeName === 'href') ||
                  (d.tagName === 'IMG' && a.attributeName === 'src')) &&
                  h.trackImage(h.mutationSeq, d, 'mutationImageAttribute');
            else if (
              h.config.observeTextMutation &&
              a.type === 'characterData' &&
              d.nodeType === Node.TEXT_NODE
            ) {
              f = h.getParentElementForTextNodeChange(d, a.oldValue);
              f != null && c.push([f, 'mutationTextUpdate']);
            }
          });
          h.trackElements(c, h.mutationSeq);
        };
        h.loadingStateObserverCallback = function (a) {
          Array.from(a).forEach(function (a) {
            v(a)
              ? h.loadingElementAdded(a.target, a.time)
              : h.loadingElementRemoved(a.target, a.time);
          });
        };
        w && (h.mutationObserver = new w(h.mutationRecordHandler));
        u &&
          ((h.loadingStateObserver = new u(h.loadingStateObserverCallback)),
          (h.intersectionObserver = new u(h.intersectionObserverCallback)));
        T.set(e, babelHelpers.assertThisInitialized(h));
        (f === 'INITIAL_LOAD' || f === 'NAVIGATION') &&
          S.forEach(function (a) {
            h.observeMutation(a);
          });
        return h;
      }
      var d = c.prototype;
      d.addMutationRoot = function (a) {
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        this.mutationSeq++;
        this.trackElements([[a, 'mutationRoot']], this.mutationSeq);
        return this.observeMutation(a);
      };
      d.checkInvisibleStyleElement = function (a) {
        a = a;
        while (a) {
          if (
            (typeof a.getAttribute === 'function' &&
              b('VisualCompletionUtil').checkInvisibleStyle(
                a.getAttribute('style'),
              )) ||
            (typeof a.hasAttribute === 'function' && a.hasAttribute('hidden'))
          )
            return !0;
          a = a.parentElement;
        }
        return !1;
      };
      d.shouldIgnoreMutation = function (a) {
        if (this.checkInvisibleStyleElement(a)) return !0;
        var b = a;
        while (b) {
          if (this.mutationRoots.has(b)) return !1;
          if (typeof b.getAttribute === 'function') {
            var c = b.getAttribute(s.ATTRIBUTE_NAME);
            if (c === s.IGNORE) return !0;
            if (b !== a && c === s.IGNORE_DYNAMIC) {
              this.excludeElement(a);
              return !0;
            }
          }
          b = b.parentElement;
        }
        return !1;
      };
      d.dumpLocks = function () {
        return [
          this.pendingLocks,
          this.pendingLoadingElements,
          this.pendingImages,
        ];
      };
      d.lock = function (a) {
        var c = this;
        this.pendingLocks.set(a, b('performanceNowSinceAppStart')());
        return function () {
          c.unlock(a);
        };
      };
      d.imageDone = function (a) {
        var c = this.pendingImages.get(a);
        if (c == null) return;
        this.stateLog.set('imgLoad_' + this.$VisualCompletionTraceBase3++, [
          c,
          b('performanceNowSinceAppStart')(),
        ]);
        this.pendingImages['delete'](a);
        this.attemptMeasurement();
      };
      d.imageWait = function (a) {
        if (this.reported) return;
        this.pendingImages.set(a, b('performanceNowSinceAppStart')());
      };
      d.getParentElementForTextNodeChange = function (a, b) {
        if (
          a.nodeType === Node.TEXT_NODE &&
          !this.shouldIgnoreMutation(a) &&
          a.textContent != null &&
          a.parentElement != null
        ) {
          var c = a.parentElement;
          if (
            c.nodeType === Node.ELEMENT_NODE &&
            c.tagName !== 'SCRIPT' &&
            c.tagName !== 'STYLE'
          ) {
            a = a.textContent.trim();
            if (a !== '')
              if (b != null && b.trim() === a) return null;
              else return c;
          }
        }
        return null;
      };
      d.loadingElementRemoved = function (a, c) {
        var d = this.pendingLoadingElements.get(a);
        d != null &&
          (this.stateLog.set(
            'loadingState_' + this.$VisualCompletionTraceBase3++,
            [d, b('performanceNowSinceAppStart')()],
          ),
          this.pendingLoadingElements['delete'](a),
          this.addMarkerPoint('loadingState_end', c),
          this.attemptMeasurement());
      };
      d.loadingElementAdded = function (a, c) {
        if (this.reported) return;
        this.addFirstMarkerPoint('loadingState_start', c);
        this.pendingLoadingElements.set(a, b('performanceNowSinceAppStart')());
      };
      d.waitLoadingState = function (a) {
        var c = this;
        if (this.reported) return function () {};
        var d = this.$VisualCompletionTraceBase1.get(a);
        if (d)
          return function () {
            d(), c.loadingElementRemoved(a, b('performanceNowSinceAppStart')());
          };
        if (this.shouldIgnoreMutation(a)) return function () {};
        this.loadingStateObserver && this.loadingStateObserver.observe(a);
        ((i && !j()) || b('VisualCompletionUtil').isInAboveTheFold(a)) &&
          this.loadingElementAdded(a, b('performanceNowSinceAppStart')());
        var e = function () {
          c.loadingStateObserver && c.loadingStateObserver.unobserve(a),
            c.$VisualCompletionTraceBase1['delete'](a);
        };
        this.$VisualCompletionTraceBase1.set(a, e);
        return function () {
          e(), c.loadingElementRemoved(a, b('performanceNowSinceAppStart')());
        };
      };
      d.trackImage = function (a, c, d) {
        var e = this;
        if (c.complete) {
          c.getAttribute(s.ATTRIBUTE_NAME) === s.MEDIA_VC_IMAGE &&
            this.scheduleIntersectionObserver(
              a,
              c,
              d,
              b('performanceNowSinceAppStart')(),
            );
          return;
        }
        var f = c.currentSrc || c.src;
        if (c.tagName === 'image' && typeof c.getAttribute === 'function') {
          var g = c.getAttribute('xlink:href');
          g != null && (f = g);
        }
        if (f == null || f === '' || f.indexOf('http') !== 0) return;
        var h = function () {
          e.imageDone(c);
        };
        g = function () {
          e.imageWait(c);
        };
        if (this.config.use_image_download_tracker === !0)
          b('ImageDownloadTracker')(f, g)
            .then(function () {
              var f = b('performanceNowSinceAppStart')();
              e.scheduleIntersectionObserver(a, c, d, f);
              h();
            })
            ['catch'](function () {
              return h();
            });
        else {
          var i = function f() {
              var g = b('performanceNowSinceAppStart')();
              e.scheduleIntersectionObserver(a, c, d, g);
              h();
              c.removeEventListener('load', f);
              c.removeEventListener('error', j);
            },
            j = function a() {
              h(),
                c.removeEventListener('load', i),
                c.removeEventListener('error', a);
            };
          g();
          c.addEventListener('load', i);
          c.addEventListener('error', j);
        }
      };
      d.unlock = function (a) {
        var c = this.pendingLocks.get(a);
        if (c == null) return;
        this.pendingLocks['delete'](a);
        this.stateLog.set('Lock(' + a + ')', [
          c,
          b('performanceNowSinceAppStart')(),
        ]);
        this.attemptMeasurement();
      };
      d.checkLoadingStates = function (a) {
        var b = this;
        if (
          typeof a.getAttribute === 'function' &&
          a.getAttribute(s.ATTRIBUTE_NAME) === s.LOADING_STATE
        )
          this.waitLoadingState(a);
        else if (typeof a.querySelectorAll === 'function') {
          a = a.querySelectorAll(
            '[' + s.ATTRIBUTE_NAME + '=' + s.LOADING_STATE + ']',
          );
          Array.from(a).forEach(function (a) {
            b.waitLoadingState(a);
          });
        }
      };
      d.checkDuplicatedMutationRoot = function (a) {
        a = a;
        while (a != null) {
          if (this.mutationRoots.has(a)) return !0;
          a = a.parentElement;
        }
        return !1;
      };
      d.observeMutation = function (a) {
        var b = this;
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        a.nodeType === Node.ELEMENT_NODE &&
          this.mutationObserver &&
          this.mutationObserver.observe(a, this.mutationObserverConfig);
        this.mutationRoots.add(a);
        return function () {
          b.mutationRoots['delete'](a);
        };
      };
      d.registerNavigationMutationRoot = function (a) {
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        S.add(a);
        return function () {
          S['delete'](a);
        };
      };
      d.scheduleIntersectionObserver = function (a, c, d, e) {
        var f = this;
        if (this.reported) return;
        this.mutatedElementCount++;
        if (i && j()) this.addVisualElement(a, c, d, e);
        else if (u) {
          var g = this.pendingMutations.get(c);
          g &&
            (this.intersectionObserver &&
              this.intersectionObserver.unobserve(c),
            this.pendingMutations['delete'](c),
            this.pendingLocks['delete'](g.lockId));
          g = d + '_paint_' + this.$VisualCompletionTraceBase3++;
          this.intersectionObserver && this.intersectionObserver.observe(c);
          this.lock(g);
          this.pendingMutations.set(c, {
            displayTimestamp: e,
            lockId: g,
            mutationType: d,
            mutationSeq: a,
          });
        } else {
          var h = d + '_paint_' + this.$VisualCompletionTraceBase3++;
          this.lock(h);
          b('VisualCompletionUtil').foregroundRequestAnimationFrame(
            function () {
              f.addVisualElement(a, c, d, b('performanceNowSinceAppStart')()),
                f.unlock(h);
            },
          );
        }
      };
      d.trackElements = function (a, c) {
        var d = this,
          e = [];
        a.forEach(function (a) {
          var b = a[0];
          b.nodeType === Node.ELEMENT_NODE &&
            b.tagName !== 'IMG' &&
            b.tagName !== 'image' &&
            e.push(a);
        });
        var f = b('performanceNowSinceAppStart')();
        e.forEach(function (a) {
          var b = a[0];
          a = a[1];
          d.checkLoadingStates(b);
          d.scheduleIntersectionObserver(c, b, a, f);
        });
      };
      d.onBeforeComplete = function (a) {
        if (this.reported) return;
        this.$VisualCompletionTraceBase4.push(a);
      };
      d.onComplete = function (a) {
        if (this.reported) return;
        this.$VisualCompletionTraceBase5.push(a);
      };
      d.scanCssBgElements = function () {
        var a = this;
        if (this.reported) return;
        var c = b('performanceNowSinceAppStart')();
        this.checkViewport();
        this.mutationRoots.forEach(function (b) {
          if (b && typeof b.querySelectorAll === 'function') {
            b = b.querySelectorAll('div,i,span,li');
            Array.prototype.forEach.call(b, function (b) {
              if (
                b.textContent ||
                b.children.length ||
                a.cssBgElements.has(b) ||
                a.shouldIgnoreMutation(b) ||
                !a.inViewport(b)
              )
                return;
              var c = a.getStyleBackground(b);
              if (c == null) return;
              c = { element: b, url: c, resourceTiming: A(c) };
              a.cssBgElements.set(b, c);
            });
          }
        });
        this.cssBgScanOverhead = b('performanceNowSinceAppStart')() - c;
      };
      d.attemptMeasurement = function (a) {
        var b = this;
        a === void 0 && (a = !1);
        if (
          !a &&
          (this.loggingScheduled ||
            this.reported ||
            this.pendingLocks.size > 0 ||
            this.pendingLoadingElements.size > 0 ||
            this.pendingImages.size > 0)
        )
          return;
        this.loggingScheduled = !0;
        var c = function () {
            b.mutationObserver && b.mutationObserver.disconnect();
            b.$VisualCompletionTraceBase1.forEach(function (a) {
              a();
            });
            b.loadingStateObserver && b.loadingStateObserver.disconnect();
            b.$VisualCompletionTraceBase1.clear();
            b.$VisualCompletionTraceBase2.forEach(function (a) {
              a && a.disconnect();
            });
            T['delete'](b.traceID);
            b.intersectionObserver && b.intersectionObserver.disconnect();
            b.pendingMutations.clear();
            !a && z() && b.scanCssBgElements();
            var c = b.calculate(a);
            b.$VisualCompletionTraceBase4.forEach(function (a) {
              a(c);
            });
            b.$VisualCompletionTraceBase4 = [];
            M.emit(c);
            b.$VisualCompletionTraceBase5.forEach(function (a) {
              a(c);
            });
            b.$VisualCompletionTraceBase5 = [];
            b.tearDown();
          },
          d =
            this.config.defer_expensive_calculation && !a
              ? this.config.defer_expensive_calculation
              : function (a) {
                  return a();
                };
        d(c);
      };
      d.forceMeasurement = function () {
        var a = this;
        if (this.reported) return;
        this.pendingLocks.size > 0 &&
          (this.addAnnotationInt('incompleteLockCount', this.pendingLocks.size),
          this.pendingLocks.forEach(function (c, d) {
            a.addTag('incompleteLocks', d),
              a.stateLog.set('incomplete_' + d, [
                c,
                b('performanceNowSinceAppStart')(),
              ]);
          }));
        this.pendingLoadingElements.size > 0 &&
          (this.addAnnotationInt(
            'incompleteLoadingElementsCount',
            this.pendingLoadingElements.size,
          ),
          this.pendingLoadingElements.forEach(function (c) {
            a.stateLog.set(
              'incomplete_loadingState_' + a.$VisualCompletionTraceBase3++,
              [c, b('performanceNowSinceAppStart')()],
            );
          }));
        this.pendingImages.size > 0 &&
          (this.addAnnotationInt(
            'incompleteImageCount',
            this.pendingImages.size,
          ),
          this.pendingImages.forEach(function (c) {
            a.stateLog.set(
              'incomplete_imgLoad_' + a.$VisualCompletionTraceBase3++,
              [c, b('performanceNowSinceAppStart')()],
            );
          }));
        this.pendingLocks.clear();
        this.pendingLoadingElements.clear();
        this.pendingImages.clear();
        this.attemptMeasurement(!0);
      };
      return c;
    })(d);
    var V = null,
      W = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, d, e, f) {
          a = b.call(this, a, c, d, e, f) || this;
          V = babelHelpers.assertThisInitialized(a);
          f.measureOriginalViewportOnNavigation != null &&
            (a.measureOriginalViewport = f.measureOriginalViewportOnNavigation);
          return a;
        }
        a.excludeElement = function (a) {
          V != null && !V.reported && V.excludeElement(a);
        };
        return a;
      })(U);
    d = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f) {
        b = a.call(this, b, c, d, e, f) || this;
        b.measureOriginalViewport = !1;
        return b;
      }
      var c = b.prototype;
      c.trackElements = function (b, c) {
        var d = this;
        if (this.reported) return;
        a.prototype.trackElements.call(this, b, c);
        b.forEach(function (a) {
          a = a[0];
          d.interactionType === 'INTERACTION' && W.excludeElement(a);
        });
      };
      return b;
    })(U);
    U = {
      getCurrentVCTraces: c,
      performanceAbsoluteNow: h || (h = b('performanceAbsoluteNow')),
      performanceNavigationStart: b('performanceNavigationStart'),
      performanceNow: b('performanceNowSinceAppStart'),
      VisibilityState: { canUseVisibilityAPI: i, subscribe: a },
      VisualCompletionAttributes: f,
      VisualCompletionConstants: s,
      VisualCompletionTraceForInteraction: d,
      VisualCompletionTraceForNavigation: W,
      VisualCompletionTraceObserver: M,
    };
    e.exports = U;
  },
  null,
);
