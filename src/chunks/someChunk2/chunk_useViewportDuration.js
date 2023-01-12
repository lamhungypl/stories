__d(
  'useViewportDuration',
  [
    'BaseViewportMarginsContext',
    'CometVisibilityUserActivityMonitor',
    'HiddenSubtreePassiveContext',
    'Run',
    'getIntersectionMarginFromViewportMargin',
    'getStyleProperty',
    'gkx',
    'intersectionObserverEntryIsIntersecting',
    'nullIntersectionObserverEntryLogger',
    'react',
    'useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED',
    'useIntersectionObserver',
    'useLayoutEffect_SAFE_FOR_SSR',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext,
      j = b.useMemo,
      k = b.useRef,
      l = function (a) {
        if (a.target == null) return null;
        if (c('getStyleProperty')(a.target, 'opacity') === '0')
          return 'TARGET_TRANSPARENT';
        return c('getStyleProperty')(a.target, 'visibility') === 'hidden'
          ? 'TARGET_HIDDEN'
          : null;
      },
      m = function (a) {
        return (
          a.boundingClientRect &&
          (a.boundingClientRect.height === 0 ||
            a.boundingClientRect.width === 0)
        );
      };
    function a(a) {
      var b,
        e,
        f,
        g = arguments,
        n,
        o,
        p = a.onHidden,
        q = a.onIntersection,
        r = a.onVisibilityDurationUpdated,
        s = a.onVisible,
        t = a.options,
        u = t === void 0 ? {} : t,
        v = a.threshold,
        w = (b = u.hiddenWhenZeroArea) != null ? b : !1,
        x = (e = u.hiddenWhenCSSStyleHidden) != null ? e : !1,
        y =
          (f = u.isEntryInViewport) != null
            ? f
            : c('intersectionObserverEntryIsIntersecting'),
        z = k(null),
        A = k(!1),
        B = k(null),
        C = k(null),
        D = k(null),
        E = i(c('HiddenSubtreePassiveContext')),
        F =
          u.activityMonitorOverride !== void 0
            ? u.activityMonitorOverride
            : c('CometVisibilityUserActivityMonitor'),
        G = h(
          function (a) {
            if (F && !F.isUserActive()) return 'USER_INACTIVE';
            var b = E.getCurrentState();
            if (b.hidden) return 'PUSH_VIEW_HIDDEN';
            if (b.backgrounded) return 'BACKGROUNDED';
            if (A.current === !1) return 'NOT_IN_VIEWPORT';
            if (w === !0 && m(a)) return 'TARGET_SIZE_0';
            if (x === !0) {
              b = l(a);
              if (b !== null) return b;
            }
            return null;
          },
          [F, E, x, w],
        ),
        H = h(
          function (a) {
            return G(a) === null;
          },
          [G],
        ),
        I = h(
          function (a, b, c) {
            var d = z.current != null;
            if (!d && c) {
              var e = Date.now();
              z.current = e;
              s != null && b != null && s({ entry: b, visibleTime: e });
            } else if (d && !c) {
              d = (e = z.current) != null ? e : 0;
              c = Date.now();
              if (p != null) {
                e = a || (b && G(b)) || 'UNKNOWN';
                p({
                  entry: b,
                  hiddenReason: e,
                  hiddenTime: c,
                  visibleDuration: c - d,
                  visibleTime: d,
                });
              }
              z.current = null;
            }
          },
          [G, p, r, s],
        ),
        J = k(I);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          J.current = I;
        },
        [I],
      );
      c('useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED')(function () {
        return function () {
          J.current('COMPONENT_UNMOUNTED', null, !1),
            B.current != null && (B.current(), (B.current = null)),
            D.current != null && (D.current.remove(), (D.current = null)),
            C.current != null && (C.current.remove(), (C.current = null));
        };
      }, []);
      var K = h(
          function (a) {
            c('nullIntersectionObserverEntryLogger')(
              a,
              'IntersectionObserverEntry is null. num_arguments=' + g.length,
            );
            var b = (A.current = y(a));
            q && q({ entry: a, isElementVisible: H(a) });
            B.current == null
              ? b &&
                ((B.current =
                  F &&
                  F.subscribe(function (b) {
                    return J.current('USER_INACTIVE', a, H(a));
                  })),
                (D.current = E.subscribeToChanges(function (b) {
                  return J.current(
                    b.hidden ? 'PUSH_VIEW_HIDDEN' : 'BACKGROUNDED',
                    a,
                    H(a),
                  );
                })),
                (C.current = d('Run').onBeforeUnload(function (a) {
                  J.current('PAGE_UNLOAD', null, !1);
                }, !1)))
              : b ||
                (B.current != null && (B.current(), (B.current = null)),
                D.current && (D.current.remove(), (D.current = null)),
                C.current != null && (C.current.remove(), (C.current = null)));
            J.current(null, a, H(a));
          },
          [H, F, E, y, q],
        ),
        L = i(c('BaseViewportMarginsContext')),
        M = j(
          function () {
            return {
              bottom: L.bottom + 1,
              left: L.left + 1,
              right: L.right + 1,
              top: L.top + 1,
            };
          },
          [L.bottom, L.left, L.right, L.top],
        ),
        N = (n = u.root) != null ? n : null,
        O =
          (o = u.rootMargin) != null
            ? o
            : c('getIntersectionMarginFromViewportMargin')(M);
      return c('useIntersectionObserver')(K, {
        root: N,
        rootMargin: O,
        threshold: v,
      });
    }
    g['default'] = a;
  },
  98,
);
