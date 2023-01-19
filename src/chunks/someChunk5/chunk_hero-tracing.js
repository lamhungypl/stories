__d(
  'hero-tracing',
  [
    'ExecutionEnvironment',
    'HeroTracingCoreConfig',
    'HeroTracingCoreDependencies',
    'HiddenSubtreePassiveContext',
    'LegacyHidden',
    'Promise',
    'PromiseAnnotate',
    'RelayProfilerContext',
    'VisualCompletionUtil',
    'clearImmediate',
    'hero-tracing-placeholder',
    'interaction-tracing',
    'interaction-tracing-metrics',
    'mergeRefs',
    'objectEntries',
    'objectValues',
    'performanceNowSinceAppStart',
    'react',
    'setImmediateAcrossTransitions',
    'setTimeoutAcrossTransitions',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useStable',
    'uuid',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = g || b('react'),
      i = b('HeroTracingCoreDependencies').UserTimingUtils,
      j = {},
      k = 0,
      l = new Map();
    function a(a) {
      var b = k++;
      l.set(b, a);
      return function () {
        l['delete'](b);
      };
    }
    function m(a, c) {
      a = a !== null && a !== void 0 ? a : b('uuid')();
      if (
        b(
          'hero-tracing-placeholder',
        ).HeroPendingPlaceholderTracker.isInteractionActive(a)
      )
        return a;
      o(a, 'Interaction Start', c);
      b(
        'hero-tracing-placeholder',
      ).HeroPendingPlaceholderTracker.addInteraction(a);
      return a;
    }
    function n(a, c) {
      b(
        'hero-tracing-placeholder',
      ).HeroPendingPlaceholderTracker.removeInteraction(a);
      var d = b(
        'interaction-tracing-metrics',
      ).InteractionTracingMetricsCore.get(a);
      d != null &&
        (b(
          'interaction-tracing-metrics',
        ).InteractionTracingMetricsCore.addMarkerPoint(
          a,
          'HeroTrace_end',
          'AppTiming',
        ),
        c === 'ABORT' &&
          (b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.addAnnotationInt(a, 'aborted', 1),
          b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.addAnnotation(
            a,
            'cancelType',
            'aborted',
          )));
      b('interaction-tracing-metrics').InteractionTracingMetricsCore.complete(
        a,
      );
    }
    function o(a, c, d) {
      a = c + a;
      j[a] =
        d !== null && d !== void 0 ? d : b('performanceNowSinceAppStart')();
      i != null && i.measureStart(c);
    }
    function p(a, c, d, e, f) {
      d = d !== null && d !== void 0 ? d : b('performanceNowSinceAppStart')();
      o(a, c, d);
      var g;
      e != null && f != null
        ? (g = (e.length > 0 ? e[e.length - 1] : '') + ':' + f)
        : (g = c + '_' + a);
      b(
        'hero-tracing-placeholder',
      ).HeroPendingPlaceholderTracker.addPlaceholder(a, c, g);
      if (l.size) {
        var h = {
          placeholderID: c + a,
          interactionID: a,
          spanUUID: c,
          startTime: d,
          pageletStack: e,
          description: f,
        };
        l.forEach(function (a) {
          a.onStart(h);
        });
      }
    }
    function q(a, c, d, e, f, g, h) {
      var i = f + a;
      i = j[i];
      h = h !== null && h !== void 0 ? h : b('performanceNowSinceAppStart')();
      i != null && s(a, c, d, e, i, h, g);
      if (l.size) {
        var k = {
          placeholderID: f + a,
          interactionID: a,
          pageletStack: c,
          spanType: d,
          name: e,
          spanUUID: f,
          data: g,
          endTime: h,
        };
        l.forEach(function (a) {
          a.onEnd(k);
        });
      }
      b(
        'hero-tracing-placeholder',
      ).HeroPendingPlaceholderTracker.removePlaceholder(a, f);
    }
    function r(a, c, d, e, f, g, h) {
      q(a, c, d, e, f, g, h),
        b(
          'hero-tracing-placeholder',
        ).HeroPendingPlaceholderTracker.removePlaceholder(a, f);
    }
    function s(a, c, d, e, f, g, h) {
      g === void 0 && (g = b('performanceNowSinceAppStart')()),
        b(
          'interaction-tracing-metrics',
        ).InteractionTracingMetricsCore.addSubspan(
          a,
          e,
          'HeroTracing',
          f,
          g !== null && g !== void 0 ? g : b('performanceNowSinceAppStart')(),
          babelHelpers['extends']({}, h, {
            pagelet: c[c.length - 1],
            pageletStack: c,
            spanType: d,
          }),
        ),
        i != null &&
          i.measureModern(
            e + ('[' + a.slice(0, 3) + ']'),
            { end: g, start: f },
            d,
          );
    }
    a = Object.freeze({
      __proto__: null,
      subscribeToPlaceholders: a,
      genHeroInteractionUUIDAndMarkStart: m,
      endHeroInteraction: n,
      markStart: o,
      markStartPlaceholder: p,
      markEnd: q,
      markEndPlaceholder: r,
      measure: s,
    });
    var t = b('HeroTracingCoreConfig').enableReactProfiling,
      u = b('HeroTracingCoreConfig').logNestedReactUpdates,
      v = b('HeroTracingCoreDependencies').UserTimingUtils,
      w = function (a) {
        a = a.children;
        return a;
      };
    w.displayName = 'HeroReactProfilerNoOp';
    var x = 0;
    function y() {
      var a = x++;
      v === null || v === void 0
        ? void 0
        : v.measureModern(
            'Nested update ' + a,
            { duration: 100, start: b('performanceNowSinceAppStart')() },
            'ReactNestedUpdate',
          );
      console.trace('nested update ' + a);
    }
    function c(a) {
      var c = a.children,
        d = a.id,
        e = a.isPagelet,
        f = e === void 0 ? !1 : e;
      e = a.logDurationToQPL;
      var g = e === void 0 ? !1 : e,
        i = h.useContext(
          b('hero-tracing-placeholder').HeroInteractionContext.Context,
        ),
        j = h.useContext(
          b('hero-tracing-placeholder').HeroInteractionIDContext,
        );
      a = h.useCallback(
        function (a, c, d, e, h, k) {
          if (j == null) return;
          i.logReactRender(j, a, c, h, k, d, e, f, i.pageletStack);
          b(
            'interaction-tracing-metrics',
          ).InteractionTracingMetricsCore.addReactRender(j, a, h, k, d, e, c);
          g &&
            b('interaction-tracing')
              .InteractionTracingCore.getPendingInteractions()
              .forEach(function (b) {
                b = b.getTrace();
                if (b) {
                  var c = a.replace(/_[0-9]+$/, '_{N}');
                  c = 'ReactRenderDuration_' + c;
                  typeof b.annotations['int'][c] === 'number'
                    ? (b.annotations['int'][c] += d)
                    : (b.annotations['int'][c] = d);
                }
              });
        },
        [i, j, f, g],
      );
      e = h.useCallback(
        function (a, b, c, d) {
          j != null && i.logReactCommit(j, a, b, c, d, f, i.pageletStack);
        },
        [i, j, f],
      );
      var k = h.useCallback(
        function (a, b, c, d) {
          j != null && i.logReactPostCommit(j, a, b, c, d, f, i.pageletStack);
        },
        [i, j, f],
      );
      return h.createElement(
        h.Profiler,
        {
          id: d,
          onCommit: e,
          onNestedUpdateScheduled: u ? y : null,
          onPostCommit: k,
          onRender: a,
        },
        c,
      );
    }
    c.displayName = 'HeroReactProfiler';
    var z = h.Profiler != null && t ? c : w,
      A = b('HeroTracingCoreDependencies').VisualCompletion;
    function B(a) {
      var c = a.excludeFromMainVC,
        d = a.interactionUUID,
        e = a.isMutationRoot,
        f = a.observeTextMutation,
        g = a.pageletName,
        i = a.pageletType,
        j = a.vcCallback,
        k = a.vcSubtreeMutation,
        l = b('useStable')(function () {
          return typeof WeakMap === 'function' ? new WeakMap() : new Map();
        }),
        m = h.useRef(null),
        n = h.useRef(null);
      return h.useCallback(
        function (a) {
          if (a == null) return;
          var h;
          b('HeroTracingCoreConfig').trackPageletElementWeakly
            ? ((h = l.has(a)), l.set(a, !0))
            : ((h = m.current === a), (m.current = a));
          var o;
          if (d != null && n.current !== d) {
            var p = b(
              'interaction-tracing-metrics',
            ).InteractionTracingMetricsCore.get(d);
            p &&
              p.vcTracker &&
              ((o = p.vcTracker),
              e === !0 &&
                (f != null && (o.config.observeTextMutation = f),
                h && k === !0 ? o.observeMutation(a) : o.addMutationRoot(a)));
          } else
            !h &&
              d == null &&
              c === !0 &&
              A &&
              (o = A.getCurrentNavigationTrace());
          p = b('performanceNowSinceAppStart')();
          if (!h && d != null) {
            b(
              'interaction-tracing-metrics',
            ).InteractionTracingMetricsCore.addMountPoint(d, p, g);
            (h = o) === null || h === void 0
              ? void 0
              : h.trackPagelet(a, g, p, j, i, c);
          }
          n.current = d;
        },
        [c, d, e, f, g, i, l, j, k],
      );
    }
    var C = b('HeroTracingCoreDependencies').useTailLoadPageletTracker;
    t = function (a) {
      var c = a.vcCallback,
        d = a.excludeFromMainVC,
        e = a.isMutationRoot,
        f = a.interactionUUID,
        g = a.name,
        i = a.pageletName,
        j = a.observeTextMutation,
        k = a.pageletType,
        l = a.position,
        m = a.trackTailLoad;
      a = a.vcSubtreeMutation;
      var n = B({
          excludeFromMainVC: d,
          interactionUUID: f,
          isMutationRoot: e,
          observeTextMutation: j,
          pageletName: g,
          pageletType: k,
          vcCallback: c,
          vcSubtreeMutation: a,
        }),
        o = C(i, l, m);
      return h.useMemo(
        function () {
          return b('mergeRefs')(n, o);
        },
        [n, o],
      );
    };
    c = {
      HostInstanceTrackableComponent: b('LegacyHidden'),
      useHostInstanceTracking: t,
    };
    var D = c.useHostInstanceTracking;
    function d(a, c) {
      var d = a.children,
        e = a.excludeFromMainVC,
        f = a.isMutationRoot,
        g = a.name,
        i = a.pageletName,
        j = a.observeTextMutation,
        k = a.pageletType,
        l = a.position,
        m = a.trackTailLoad;
      a = a.vcSubtreeMutation;
      var n = h.useContext(
          b('hero-tracing-placeholder').HeroInteractionContext.Context,
        ),
        o = h.useContext(
          b('hero-tracing-placeholder').HeroInteractionIDContext,
        ),
        p = h.useMemo(
          function () {
            return babelHelpers['extends']({}, n, {
              pageletStack: [].concat(n.pageletStack, [g]),
            });
          },
          [n, g],
        ),
        q = h.useMemo(
          function () {
            return b('performanceNowSinceAppStart')();
          },
          [o],
        ),
        r = h.useCallback(
          function () {
            o != null &&
              (b(
                'interaction-tracing-metrics',
              ).InteractionTracingMetricsCore.addFirstMarkerPoint(
                o,
                'Queue_' + g,
                'VisualCompletion',
                q,
              ),
              b(
                'interaction-tracing-metrics',
              ).InteractionTracingMetricsCore.addFirstMarkerPoint(
                o,
                'Render_' + g,
                'VisualCompletion',
                b('performanceNowSinceAppStart')(),
              ));
            return null;
          },
          [o, g, q],
        ),
        s = h.useCallback(
          function (a, b) {
            o != null && p.logPageletVC(o, q, a, b, p.pageletStack);
          },
          [o, p, q],
        ),
        t = D({
          vcCallback: s,
          excludeFromMainVC: e,
          isMutationRoot: f,
          interactionUUID: o,
          name: g,
          pageletName: i,
          observeTextMutation: j,
          pageletType: k,
          position: l,
          trackTailLoad: m,
          vcSubtreeMutation: a,
        });
      s = h.useMemo(
        function () {
          return b('mergeRefs')(t, c);
        },
        [t, c],
      );
      return h.createElement(
        b('hero-tracing-placeholder').HeroInteractionContext.Context.Provider,
        { value: p },
        h.createElement(z, { id: g, isPagelet: !0 }, d(s, r)),
      );
    }
    d.displayName = 'HeroPagelet';
    var E = h.forwardRef(d),
      F = b('HeroTracingCoreDependencies').UserTimingUtils,
      G = (function () {
        function a() {
          this.$1 = new Map();
        }
        var b = a.prototype;
        b.logRender = function (a, b, c, d) {
          a = this.$2(a);
          a.set(b, { isNested: c === 'nested-update', renderDuration: d });
        };
        b.logCommit = function (a, b, c, d) {
          a = this.$2(a);
          var e = a.get(b);
          if (e == null || c !== 'nested-update') return;
          a.set(
            b,
            babelHelpers['extends']({}, e, { isNested: !0, layoutDuration: d }),
          );
        };
        b.logPostCommit = function (a, b, c, d) {
          a = this.$2(a);
          var e = a.get(b);
          if (e == null || c !== 'nested-update') return;
          a.set(
            b,
            babelHelpers['extends']({}, e, { effectDuration: d, isNested: !0 }),
          );
        };
        b.getPageletReport = function (a, b) {
          var c = this.$2(a);
          if (c.size === 0) return;
          var d = {
              cascadingRenderCount: 0,
              cascadingRenderTotalDuration: 0,
              maxChainedCascadingRenderCount: 0,
            },
            e = Array.from(c.keys()).reverse(),
            f = !1,
            g = 0;
          for (
            var e = e,
              h = Array.isArray(e),
              i = 0,
              e = h
                ? e
                : e[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var j;
            if (h) {
              if (i >= e.length) break;
              j = e[i++];
            } else {
              i = e.next();
              if (i.done) break;
              j = i.value;
            }
            j = j;
            var k;
            if (j > b) continue;
            k = (k = c.get(j)) !== null && k !== void 0 ? k : {};
            var l = k.effectDuration;
            l = l === void 0 ? 0 : l;
            var m = k.isNested;
            m = m === void 0 ? !1 : m;
            var n = k.layoutDuration;
            n = n === void 0 ? 0 : n;
            k = k.renderDuration;
            k = k === void 0 ? 0 : k;
            m &&
              ((d.cascadingRenderCount += 1),
              (d.cascadingRenderTotalDuration += l + k + n));
            F != null &&
              m &&
              F.measureModern(
                '\u26a0\ufe0f ' + a + ' [cascading commit block]',
                { end: j + k + n + l, start: j },
                'ReactCascadingRender',
              );
            m && f
              ? g++
              : ((d.maxChainedCascadingRenderCount = Math.max(
                  g,
                  d.maxChainedCascadingRenderCount,
                )),
                (g = 0));
            f = m;
          }
          return d;
        };
        b.cleanup = function (a) {
          this.$1['delete'](a);
        };
        b.$2 = function (a) {
          if (this.$1.has(a)) return this.$1.get(a);
          else {
            var b = new Map();
            this.$1.set(a, b);
            return b;
          }
        };
        return a;
      })();
    function e() {
      return b('useStable')(function () {
        return new G();
      });
    }
    var H = c.HostInstanceTrackableComponent;
    w = b('HeroTracingCoreConfig').enableCascadingRenderDetector;
    var I = b('HeroTracingCoreConfig').vcSubtreeMutation,
      J = b('HeroTracingCoreDependencies').UserTimingUtils,
      K = w
        ? e
        : function () {
            return null;
          },
      L = 'Interaction Start',
      M = 'root',
      N = new Set();
    function O(a, b) {
      o(a, b);
    }
    function P(a, b, c, d) {
      p(a, b, void 0, c, d);
    }
    function Q(a, b, c, d) {
      q(a, c, 'SuspensePromise', 'Promise Wait: ' + d, b);
    }
    function R(a, b, c, d) {
      r(a, c, 'PlaceholderWait', 'Placeholder Wait: ' + d, b);
    }
    function S(a, c, d) {
      b(
        'interaction-tracing-metrics',
      ).InteractionTracingMetricsCore.addHeroRelay(c, {
        pageletStack: d,
        queries: a,
      });
      for (
        var a = a,
          e = Array.isArray(a),
          f = 0,
          a = e
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= a.length) break;
          g = a[f++];
        } else {
          f = a.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        s(c, d, 'Relay', g.name, g.start, g.end);
        for (var h = 0; h < g.flushes.length; h++) {
          var i = g.flushes[h];
          s(c, d, 'RelayFlush', g.name + '(' + i.label + ')', g.start, i.time, {
            flush: i.label,
            queryName: g.name,
          });
        }
      }
    }
    function T(a, c, d) {
      b(
        'interaction-tracing-metrics',
      ).InteractionTracingMetricsCore.addHeroBootload(c, {
        moduleIDs: Array.from(a),
        pageletStack: d,
      });
    }
    function U(a) {
      if (!a) return 'No placeholder';
      var c = a.boundaryName != null ? '@' + a.boundaryName : '';
      a =
        b(
          'hero-tracing-placeholder',
        ).HeroPlaceholderUtils.createThenableDescription(a.thenables) ||
        'No Promises';
      return a + c;
    }
    function V(a, c) {
      if (a == null) return null;
      var d = {
        commitCount: 0,
        lastBaseDuration: 0,
        maxBaseDuration: 0,
        totalActualDuration: 0,
        totalCommitDuration: 0,
        totalPostCommitDuration: 0,
        zeroDurationCommitCount: 0,
        zeroDurationPostCommitCount: 0,
      };
      for (
        var a = b('objectEntries')(a),
          e = Array.isArray(a),
          f = 0,
          a = e
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= a.length) break;
          g = a[f++];
        } else {
          f = a.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = g[0];
        g = g[1];
        if (h > c) break;
        h = g.actualDuration;
        h = h === void 0 ? 0 : h;
        var i = g.baseDuration;
        i = i === void 0 ? 0 : i;
        var j = g.commitDuration;
        j = j === void 0 ? 0 : j;
        var k = g.postCommitDuration;
        k = k === void 0 ? 0 : k;
        d.commitCount++;
        g.commitDuration === 0 && d.zeroDurationCommitCount++;
        g.postCommitDuration === 0 && d.zeroDurationPostCommitCount++;
        d.maxBaseDuration = Math.max(d.maxBaseDuration, i);
        d.lastBaseDuration = i;
        d.totalActualDuration += h;
        d.totalCommitDuration += j;
        d.totalPostCommitDuration += k;
      }
      return d;
    }
    function W(a, c) {
      var d = a.children,
        e = a.excludeFromMainVC,
        f = a.hidden,
        g = a.htmlAttributes,
        i = a.interactionDesc,
        j = a.interactionUUID,
        k = a.observeTextMutation,
        l = a.pageletName,
        o = a.renderTrackedDOMElement;
      a = a.vcSubtreeMutation;
      var p = h.useContext(
          b('hero-tracing-placeholder').HeroInteractionContext.Context,
        ),
        r = h.useContext(
          b('hero-tracing-placeholder').HeroInteractionIDContext,
        ),
        t = h.useRef(null),
        u = h.useRef(null),
        v = h.useContext(b('HiddenSubtreePassiveContext')),
        w = i !== null && i !== void 0 ? i : 'No Description',
        x = h.useRef({}),
        y = h.useRef({}),
        z = h.useRef({}),
        A = h.useRef(null),
        B = h.useRef(r),
        C = b('useStable')(
          b('hero-tracing-placeholder').HeroPlaceholderUtils.getSimpleUUID,
        ),
        D = h.useMemo(
          function () {
            return [].concat(p.pageletStack, [
              l !== null && l !== void 0 ? l : M,
            ]);
          },
          [p.pageletStack, l],
        ),
        F = h.useRef([]),
        G = h.useRef(new Set()),
        W = K(),
        X = h.useCallback(function () {
          return b('objectValues')(x.current).some(function (a) {
            return a.shouldHold;
          });
        }, []),
        Y = h.useCallback(
          function (a, c, d) {
            u.current !== a &&
              t.current == null &&
              !v.getCurrentState().hidden &&
              !X() &&
              (t.current = b(
                'VisualCompletionUtil',
              ).foregroundRequestAnimationFrame(function () {
                (t.current = null),
                  !v.getCurrentState().hidden &&
                    u.current !== a &&
                    !X() &&
                    ((u.current = a),
                    q(a, D, 'Interaction', 'Interaction Done: ' + c, L),
                    d !== a && n(a, 'SUCCESS'),
                    p.unhold(a, a + '_' + C),
                    S(F.current, a, D),
                    T(G.current, a, D),
                    (F.current = []),
                    (G.current = new Set()));
              }));
          },
          [v, p, C, D, X],
        ),
        Z = h.useCallback(
          function () {
            var a = A.current;
            a != null && Y(a.interactionUUID, a.interactionDesc, r);
          },
          [r, Y],
        ),
        $ = h.useCallback(
          function (a, c, d) {
            var e;
            e =
              a != null &&
              ((e = b(
                'interaction-tracing-metrics',
              ).InteractionTracingMetricsCore.get(a.interactionUUID)) ===
                null || e === void 0
                ? void 0
                : e.annotations['int'].heroNestedRootsFix) === 1;
            var f = A.current;
            f != null &&
              u.current !== f.interactionUUID &&
              (q(
                f.interactionUUID,
                D,
                'Interaction',
                'Interaction Aborted (' + c + '): ' + f.interactionDesc,
                L,
              ),
              p.unhold(f.interactionUUID, f.interactionUUID + '_' + C),
              d !== f.interactionUUID
                ? n(f.interactionUUID, 'ABORT')
                : d != null &&
                  b(
                    'interaction-tracing-metrics',
                  ).InteractionTracingMetricsCore.addMetadata(
                    d,
                    'childInteractionAborted',
                    1,
                  ),
              a !== null &&
                f.interactionUUID === a.interactionUUID &&
                (m(a.interactionUUID),
                e ||
                  p.hold(
                    a.interactionUUID,
                    D,
                    'Sub Interaction:' + a.interactionDesc,
                    a.interactionUUID + '_' + C,
                  )));
            f != null &&
              (S(F.current, f.interactionUUID, D),
              T(G.current, f.interactionUUID, D));
            F.current = [];
            G.current = new Set();
            u.current = null;
            t.current && t.current();
            t.current = null;
            A.current = a;
            B.current = d;
            a !== null &&
              e &&
              p.hold(
                a.interactionUUID,
                D,
                'Sub Interaction:' + a.interactionDesc,
                a.interactionUUID + '_' + C,
              );
          },
          [p, C, D],
        );
      i = h.useRef(null);
      h.useEffect(
        function () {
          return function () {
            var a = function () {
              return $(null, 'Unmount');
            };
            a();
          };
        },
        [$],
      );
      b('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var a = null;
          j != null && (a = { interactionDesc: w, interactionUUID: j });
          $(a, 'New Interaction', r);
          j != null && Y(j, w, r);
        },
        [w, j, r, $, Y],
      );
      b('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          if (j != null) {
            var a = v.getCurrentState().hidden,
              b = v.subscribeToChanges(function (b) {
                b = b.hidden;
                a !== b &&
                  ((a = b),
                  b
                    ? $({ interactionDesc: w, interactionUUID: j }, 'Hidden')
                    : Y(j, w, r));
              });
            j != null && Y(j, w, r);
            return function () {
              return b.remove();
            };
          }
        },
        [v, j, w, $, Y, r],
      );
      i = h.useMemo(
        function () {
          var a = {
            consumeBootload: function (a) {
              G.current.add(a);
            },
            hold: function (c, d, e, f, g) {
              e === void 0 && (e = 'Hold');
              f =
                f !== null && f !== void 0
                  ? f
                  : b(
                      'hero-tracing-placeholder',
                    ).HeroPlaceholderUtils.getSimpleUUID();
              var h = new (b('Promise'))(function () {});
              b('PromiseAnnotate').setDisplayName(h, e);
              a.suspenseCallback(c, f, d, new Set([h]), g);
              a.registerPlaceholder(c, f, d);
              return f;
            },
            logHeroRender: function (a, b, c) {
              u.current !== a &&
                q(
                  a,
                  [].concat(c),
                  'HeroRendering',
                  'Hero Rendering: ' + b,
                  L,
                  void 0,
                );
            },
            logMetadata: function (a, b, c) {
              var d;
              c = c[c.length - 1];
              d =
                (d = y.current[c]) !== null && d !== void 0
                  ? d
                  : Object.create(null);
              b != null ? (d[a] = b) : delete d[a];
              y.current[c] = d;
            },
            logPageletVC: function (a, c, d, e, f) {
              var g = f[f.length - 1],
                h = y.current[g];
              h = h != null ? babelHelpers['extends']({}, h) : void 0;
              h &&
                b(
                  'interaction-tracing-metrics',
                ).InteractionTracingMetricsCore.addMountPointMetadata(a, g, h);
              e != null &&
                s(
                  a,
                  [].concat(f),
                  'VCWithoutImage',
                  'VCWithoutImage: ' + f[f.length - 1],
                  Math.min(c, e),
                  e,
                  h,
                );
              if (d != null) {
                h = Object.assign(
                  (e = h) !== null && e !== void 0
                    ? e
                    : babelHelpers['extends']({}, null),
                  V(z.current[g], d),
                  W === null || W === void 0
                    ? void 0
                    : W.getPageletReport(g, d),
                );
                z.current[g] = {};
                W === null || W === void 0 ? void 0 : W.cleanup(g);
                s(
                  a,
                  [].concat(f),
                  'VC',
                  'VC: ' + f[f.length - 1],
                  Math.min(c, d),
                  d,
                  h,
                );
              }
            },
            logReactCommit: function (a, b, c, d, e, f, g) {
              J && J.measureReactCommit(b, e, d);
              if (u.current !== a && f) {
                b = g[g.length - 1];
                W === null || W === void 0 ? void 0 : W.logCommit(b, e, c, d);
                f =
                  (a = z.current[b]) !== null && a !== void 0
                    ? a
                    : Object.create(null);
                c =
                  (g = f[e]) !== null && g !== void 0 ? g : Object.create(null);
                c.commitDuration = d;
                f[e] = c;
                z.current[b] = f;
              }
            },
            logReactPostCommit: function (a, b, c, d, e, f, g) {
              J && J.measureReactPostCommit(b, d);
              if (u.current !== a && f) {
                b = g[g.length - 1];
                W === null || W === void 0
                  ? void 0
                  : W.logPostCommit(b, e, c, d);
                f =
                  (a = z.current[b]) !== null && a !== void 0
                    ? a
                    : Object.create(null);
                c =
                  (g = f[e]) !== null && g !== void 0 ? g : Object.create(null);
                c.postCommitDuration = d;
                f[e] = c;
                z.current[b] = f;
              }
            },
            logReactRender: function (a, b, c, d, e, f, g, h, i) {
              if (u.current !== a) {
                s(a, [].concat(i), 'ReactRender', 'ReactRender: ' + b, d, e, {
                  actualDuration: f,
                  baseDuration: g,
                  phase: c,
                });
                if (h) {
                  a = i[i.length - 1];
                  W === null || W === void 0 ? void 0 : W.logRender(a, e, c, f);
                  d =
                    (b = z.current[a]) !== null && b !== void 0
                      ? b
                      : Object.create(null);
                  i =
                    (h = d[e]) !== null && h !== void 0
                      ? h
                      : Object.create(null);
                  i.actualDuration = f;
                  i.baseDuration = g;
                  d[e] = i;
                  z.current[a] = d;
                }
              }
            },
            pageletStack: p.pageletStack,
            registerPlaceholder: function (a, b, c) {
              var d = x.current[b];
              t.current && t.current();
              t.current = null;
              if (d != null) {
                d.shouldHold = !0;
                return;
              }
              d = new Set();
              x.current[b] = { pageletStack: c, shouldHold: !0, thenables: d };
              P(a, b, c, U(x.current[b]));
            },
            removePlaceholder: function (a, b) {
              var c = x.current[b] != null;
              if (!c) return;
              c = x.current[b];
              !c;
              delete x.current[b];
              Z();
              R(a, b, c.pageletStack, U(c));
            },
            suspenseCallback: function (a, c, d, e, f) {
              var g = x.current[c];
              f = {
                boundaryName: f,
                pageletStack: d,
                shouldHold:
                  (f = g === null || g === void 0 ? void 0 : g.shouldHold) !==
                    null && f !== void 0
                    ? f
                    : !1,
                thenables: e,
              };
              x.current[c] = f;
              f = U(f);
              g == null && P(a, c, d, f);
              e.forEach(function (c) {
                if (!N.has(c)) {
                  var e;
                  N.add(c);
                  b('ExecutionEnvironment').canUseDOM &&
                    b('setTimeoutAcrossTransitions')(function () {
                      N['delete'](c);
                    }, 6e4);
                  var f =
                      (e = b('PromiseAnnotate').getDisplayName(c)) !== null &&
                      e !== void 0
                        ? e
                        : 'Promise',
                    g = b(
                      'hero-tracing-placeholder',
                    ).HeroPlaceholderUtils.getSimpleUUID();
                  O(a, g);
                  c.then(function () {
                    Q(a, g, d, f);
                  });
                }
              });
              e = U(g);
              g != null && f !== e && (R(a, c, d, e), P(a, c, d, f));
            },
            unhold: function (b, c) {
              a.removePlaceholder(b, c);
            },
          };
          return a;
        },
        [W, p.pageletStack, Z],
      );
      var aa = h.useMemo(function () {
          return {
            consumeBootload: function (a) {
              G.current.add(a);
            },
            retainQuery: function (a) {
              F.current.push(a);
            },
            wrapPrepareQueryResource: function (a) {
              return a();
            },
          };
        }, []),
        ba = l !== null && l !== void 0 ? l : M;
      return h.createElement(
        b('hero-tracing-placeholder').HeroInteractionContext.Context.Provider,
        { value: i },
        h.createElement(
          b('hero-tracing-placeholder').HeroInteractionIDContext.Provider,
          { value: j },
          h.createElement(
            b('hero-tracing-placeholder')
              .HeroCurrentInteractionForLoggingContext.Provider,
            { value: A },
            h.createElement(
              b('RelayProfilerContext').Provider,
              { value: aa },
              h.createElement(
                E,
                {
                  excludeFromMainVC: e,
                  isMutationRoot: !0,
                  name: ba,
                  observeTextMutation: k,
                  ref: c,
                  vcSubtreeMutation: I || a === !0,
                },
                function (a, b) {
                  return o
                    ? h.createElement(
                        h.Fragment,
                        null,
                        o(a, d),
                        h.createElement(b, null),
                      )
                    : h.createElement(
                        H,
                        {
                          htmlAttributes: babelHelpers['extends']({}, g),
                          mode: f === !0 ? 'hidden' : 'visible',
                          ref: a,
                        },
                        h.createElement(b, null),
                        d,
                      );
                },
              ),
            ),
          ),
        ),
      );
    }
    W.displayName = 'HeroInteraction';
    t = h.forwardRef(W);
    f.HeroInteraction = t;
    f.HeroLogger = a;
    f.HeroPagelet = E;
    f.HeroReactProfiler = z;
  },
  null,
);
