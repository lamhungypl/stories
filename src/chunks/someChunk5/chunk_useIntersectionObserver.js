__d(
  'useIntersectionObserver',
  [
    'DOMRectReadOnly',
    'ExecutionEnvironment',
    'JSScheduler',
    'observeIntersection',
    'react',
    'useDynamicCallbackDANGEROUS',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    e = d('react');
    var h = e.useCallback,
      i = e.useLayoutEffect,
      j = e.useRef,
      k = { bottom: 0, left: 0, right: 0, top: 0 },
      l = c('DOMRectReadOnly').fromRect(),
      m = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
      };
    function n(a) {
      var b;
      if (a == null) b = k;
      else if (typeof a === 'string') return a;
      else
        typeof a === 'number'
          ? (b = { bottom: a, left: a, right: a, top: a })
          : (b = babelHelpers['extends']({}, k, a));
      a = b;
      b = a.bottom;
      var c = a.left,
        d = a.right;
      a = a.top;
      return a + 'px ' + d + 'px ' + b + 'px ' + c + 'px';
    }
    function o(a, b, d, e) {
      var f = b.root,
        g = b.rootMargin,
        h = b.threshold;
      f = f === null ? null : f();
      var i =
        a == null ||
        a.element !== d ||
        a.onIntersect !== e ||
        a.observedRoot !== f ||
        a.rootMargin !== g ||
        a.threshold !== h;
      if (i) {
        a && a.subscription.remove();
        i = c('observeIntersection')(d, e, {
          root: f,
          rootMargin: n(g),
          threshold: h,
        });
        return babelHelpers['extends']({}, b, {
          element: d,
          observedRoot: f,
          onIntersect: e,
          subscription: i,
        });
      }
      return a;
    }
    function a(a, b) {
      var e = b.root,
        f = b.rootMargin,
        g = b.threshold,
        k = j(null),
        n = j(null),
        p = j(null),
        q = j(null),
        r = j(!1),
        s = c('useDynamicCallbackDANGEROUS')(a);
      b = h(
        function (a) {
          if (k.current === a) return;
          if (k.current != null && a == null) {
            q.current != null && d('JSScheduler').cancelCallback(q.current);
            var b = k.current;
            q.current = d('JSScheduler').scheduleImmediatePriCallback(
              function () {
                k.current === null &&
                  r.current === !1 &&
                  s({
                    boundingClientRect: m,
                    intersectionRatio: 0,
                    intersectionRect: m,
                    isIntersecting: !1,
                    isVisible: !1,
                    rootBounds: l,
                    target: b,
                    time: Date.now(),
                  }),
                  (q.current = null);
              },
            );
          }
          k.current = a;
          n.current != null &&
            (n.current.subscription.remove(), (n.current = null));
          p.current != null && d('JSScheduler').cancelCallback(p.current);
          p.current = d('JSScheduler').scheduleImmediatePriCallback(
            function () {
              k.current != null &&
                (n.current = o(
                  n.current,
                  { root: e, rootMargin: f, threshold: g },
                  k.current,
                  s,
                )),
                (p.current = null);
            },
          );
        },
        [s, e, f, g],
      );
      i(
        function () {
          p.current != null && d('JSScheduler').cancelCallback(p.current);
          p.current = d('JSScheduler').scheduleImmediatePriCallback(
            function () {
              k.current != null &&
                (n.current = o(
                  n.current,
                  { root: e, rootMargin: f, threshold: g },
                  k.current,
                  s,
                )),
                (p.current = null);
            },
          );
          return function () {
            n.current != null &&
              (n.current.subscription.remove(), (n.current = null)),
              p.current != null &&
                (d('JSScheduler').cancelCallback(p.current),
                (p.current = null));
          };
        },
        [s, e, f, g],
      );
      i(function () {
        r.current = !1;
        return function () {
          r.current = !0;
        };
      }, []);
      return b;
    }
    function b(a, b, c) {
      return function (a) {};
    }
    f = c('ExecutionEnvironment').canUseDOM ? a : b;
    g['default'] = f;
  },
  98,
);
