__d(
  'hero-tracing-placeholder',
  [
    'PromiseAnnotate',
    'RelayProfilerContext',
    'react',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useStable',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = g || b('react'),
      i = function () {},
      j = {
        consumeBootload: i,
        hold: function () {
          return '';
        },
        logHeroRender: i,
        logMetadata: i,
        logPageletVC: i,
        logReactCommit: i,
        logReactPostCommit: i,
        logReactRender: i,
        pageletStack: [],
        registerPlaceholder: i,
        removePlaceholder: i,
        suspenseCallback: i,
        unhold: i,
      },
      k = h.createContext(j);
    i = Object.freeze({
      __proto__: null,
      DEFAULT_CONTEXT_VALUE: j,
      Context: k,
    });
    var l = h.createContext(null);
    function a(a) {
      var c = a.description,
        d = h.useContext(k),
        e = h.useContext(l);
      b('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          e != null && d.logHeroRender(e, c, d.pageletStack);
        },
        [c, d, e],
      );
      return null;
    }
    a.displayName = 'HeroComponent';
    a = h.memo(a);
    var m = h.createContext({ current: null });
    function c(a) {
      var c = a.description,
        d = a.hold,
        e = h.useContext(k),
        f = h.useContext(l);
      b('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          if (d && f != null) {
            var a = e.hold(f, e.pageletStack, c);
            return function () {
              e.unhold(f, a);
            };
          }
        },
        [c, e, f, d],
      );
      return null;
    }
    c.displayName = 'HeroHoldTrigger';
    var n = { current: null },
      o = {
        consumeBootload: function () {},
        retainQuery: function () {},
        wrapPrepareQueryResource: function (a) {
          return a();
        },
      };
    function d(a) {
      var c = a.children;
      a = a.clear;
      a = a === void 0 ? !0 : a;
      return !a
        ? c
        : h.createElement(
            k.Provider,
            { value: j },
            h.createElement(
              m.Provider,
              { value: n },
              h.createElement(
                l.Provider,
                { value: null },
                h.createElement(
                  b('RelayProfilerContext').Provider,
                  { value: o },
                  c,
                ),
              ),
            ),
          );
    }
    d.displayName = 'HeroInteractionContextPassthrough';
    var p = new Map();
    function e(a) {
      p.has(a) || p.set(a, new Map());
    }
    function q(a, b, c) {
      a = p.get(a);
      a && a.set(b, c);
    }
    function r(a) {
      a = p.get(a);
      var b = [];
      a &&
        a.forEach(function (a) {
          return b.push(a);
        });
      return b;
    }
    function s(a) {
      p['delete'](a);
    }
    function t(a, b) {
      a = p.get(a);
      a && a['delete'](b);
    }
    function u(a) {
      return p.has(a);
    }
    e = Object.freeze({
      __proto__: null,
      addInteraction: e,
      addPlaceholder: q,
      dump: r,
      removeInteraction: s,
      removePlaceholder: t,
      isInteractionActive: u,
    });
    function v(a) {
      var c = a.uuid,
        d = h.useContext(k),
        e = h.useContext(l);
      b('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          if (e != null) {
            d.registerPlaceholder(e, c, d.pageletStack);
            return function () {
              d.removePlaceholder(e, c);
            };
          }
        },
        [d, e, c],
      );
      return null;
    }
    v.displayName = 'HeroFallbackTracker';
    var w = 0;
    function x() {
      return String(w++);
    }
    function y(a) {
      if (a != null && a.size > 0)
        return Array.from(a)
          .map(function (a) {
            a = b('PromiseAnnotate').getDisplayName(a);
            if (a != null) return a;
            else return 'Promise';
          })
          .join(',');
      else return null;
    }
    q = Object.freeze({
      __proto__: null,
      getSimpleUUID: x,
      createThenableDescription: y,
    });
    r = function (a) {
      a = a.children;
      return a;
    };
    function z(a) {
      var c = a.cb,
        d = h.useRef(!1);
      b('useLayoutEffect_SAFE_FOR_SSR')(function () {
        d.current || (c(), (d.current = !0));
      });
      return null;
    }
    function HeroPlaceholder(a) {
      var c = a.children,
        d = a.fallback,
        e = a.name,
        f = a.unstable_avoidThisFallback,
        g = a.unstable_onSuspense,
        i = h.useContext(k),
        j = h.useContext(l),
        m = b('useStable')(x),
        n = b('useStable')(x),
        o = h.useRef(!1);
      a = c;
      c = h.useCallback(
        function (a) {
          j != null && i.suspenseCallback(j, m, i.pageletStack, a, e);
          if (g) {
            a = (a = y(a)) !== null && a !== void 0 ? a : '';
            g(a);
          }
        },
        [i, j, e, m, g],
      );
      b('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          if (o.current === !1 && j != null && j != null) {
            i.hold(j, i.pageletStack, 'Hydration', n, e);
            return function () {
              return i.unhold(j, n);
            };
          }
        },
        [i, j, e, n],
      );
      var p = function () {
        (o.current = !0), j != null && i.unhold(j, n);
      };
      return h.createElement(
        h.Suspense,
        {
          fallback: h.createElement(
            h.Fragment,
            null,
            d,
            h.createElement(z, { cb: p }),
            h.createElement(v, { uuid: m }),
          ),
          suspenseCallback: c,
          unstable_avoidThisFallback: f,
        },
        h.createElement(z, { cb: p }),
        a,
      );
    }
    HeroPlaceholder.displayName = 'HeroPlaceholder';
    f.HeroComponent = a;
    f.HeroCurrentInteractionForLoggingContext = m;
    f.HeroHoldTrigger = c;
    f.HeroInteractionContext = i;
    f.HeroInteractionContextPassthrough = d;
    f.HeroInteractionIDContext = l;
    f.HeroPendingPlaceholderTracker = e;
    f.HeroPlaceholder = HeroPlaceholder;
    f.HeroPlaceholderUtils = q;
  },
  null,
);
