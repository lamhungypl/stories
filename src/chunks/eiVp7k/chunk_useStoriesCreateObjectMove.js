__d(
  'useStoriesCreateObjectMove',
  [
    'react',
    'useStoriesCreateObjectAlign',
    'useStoriesCreateObjectMoveKeyboard',
    'useStoriesCreateObjectMoveMouse',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = b.useState;
    function m(a, b, c, d, e) {
      if (
        a == null ||
        b == null ||
        a.width === 0 ||
        a.height === 0 ||
        b.width === 0 ||
        b.height === 0
      )
        return null;
      c = c * b.width;
      d = d * b.height;
      return {
        maxX: (c + Math.max(b.right - a.left, 0) - e.right) / b.width,
        maxY: (d + Math.max(b.bottom - a.top, 0) - e.bottom) / b.height,
        minX: (c - Math.max(a.right - b.left, 0) + e.left) / b.width,
        minY: (d - Math.max(a.bottom - b.top, 0) + e.top) / b.height,
      };
    }
    function a(a) {
      var b = a.alignableProps,
        d = a.autoAdjust,
        e = a.buffer,
        f = a.canMoveOutsideFrame,
        g = f === void 0 ? !1 : f,
        n = a.overlayRect,
        o = a.targetRect,
        p = k({
          initialBounds: { maxX: 0, maxY: 0, minX: 0, minY: 0 },
          initialDx: 0,
          initialDy: 0,
          x: 0,
          y: 0,
        });
      f = l(0);
      var q = f[0],
        r = f[1];
      a = l(0);
      var s = a[0],
        t = a[1];
      f = l(!1);
      var u = f[0],
        v = f[1];
      a = l(!1);
      f = a[0];
      var w = a[1],
        x = c('useStoriesCreateObjectAlign')(o, n, b, u),
        y = (a = n == null ? void 0 : n.width) != null ? a : 0,
        z = (a = n == null ? void 0 : n.height) != null ? a : 0,
        A = (a = n == null ? void 0 : n.right) != null ? a : 0,
        B = (a = n == null ? void 0 : n.left) != null ? a : 0,
        C = (a = n == null ? void 0 : n.top) != null ? a : 0,
        D = (a = n == null ? void 0 : n.bottom) != null ? a : 0,
        E = q * y,
        F = s * z,
        G = j(
          function () {
            return m(o, n, q, s, e);
          },
          [e, q, s, n, o],
        );
      i(
        function () {
          if (g || u || G == null || !d) return;
          var a = G.maxX,
            b = G.maxY,
            c = G.minX,
            e = G.minY;
          r(Math.max(Math.min(q, a), c));
          t(Math.max(Math.min(s, b), e));
        },
        [d, G, g, q, s, u],
      );
      var H = h(
        function (a, b) {
          p.current = {
            initialBounds: m(o, n, q, s, e),
            initialDx: E,
            initialDy: F,
            x: (a = a) != null ? a : E,
            y: (a = b) != null ? a : F,
          };
        },
        [e, q, s, n, E, F, o],
      );
      a = h(
        function (a, c, d) {
          var e,
            f = p.current,
            h = f.initialDx,
            i = f.initialDy,
            j = f.x;
          f = f.y;
          e = (e = G) != null ? e : { maxX: 0, maxY: 0, minX: 0, minY: 0 };
          var k = e.maxX,
            l = e.maxY,
            m = e.minX;
          e = e.minY;
          var n = q,
            o = s,
            u = !0,
            v = !0;
          g && a != null && ((u = c < A && c > B), (v = d > C && d < D));
          u && (n = Math.max(Math.min((c - j + h) / y, k), m));
          v && (o = Math.max(Math.min((d - f + i) / z, l), e));
          if (b != null) {
            u = x(c, d, n, o);
            j = u.alignDx;
            h = u.alignDy;
            r(j);
            t(h);
          } else r(n), t(o);
          a != null && a.preventDefault();
        },
        [G, q, s, g, b, A, B, C, D, y, z, x],
      );
      var I = function (a) {
          if (u) return;
          v(!0);
          H(a == null ? void 0 : a.x, a == null ? void 0 : a.y);
        },
        J = h(function () {
          v(!1), w(!1);
        }, []);
      c('useStoriesCreateObjectMoveMouse')({
        isKeyboard: f,
        isMoving: u,
        onMove: a,
        setKeyboard: w,
        setMoving: v,
      });
      f = c('useStoriesCreateObjectMoveKeyboard')({
        isKeyboard: f,
        isMoving: u,
        onMove: a,
        scaledDx: E,
        scaledDy: F,
        setKeyboard: w,
        setMoving: v,
        updateMoveOrigin: H,
      });
      return {
        dx: E,
        dy: F,
        isMoving: u,
        keyCommands: f,
        onBlur: J,
        onPressDown: I,
      };
    }
    g['default'] = a;
  },
  98,
);
