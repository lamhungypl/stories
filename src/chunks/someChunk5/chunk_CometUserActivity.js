__d(
  'CometUserActivity',
  ['BaseEventEmitter', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 5e3,
      i = 500,
      j = -5,
      k = Date.now(),
      l = k,
      m = !1,
      n = Date.now(),
      o = document.hasFocus ? document.hasFocus() : !0,
      p = 0,
      q = Date.now(),
      r = -1,
      s = -1,
      t = !1,
      u = !1,
      v = new (c('BaseEventEmitter'))();
    function b(a) {
      var b = w(function (c, d) {
        b.unsubscribe(), a(d);
      });
      return b;
    }
    function w(a) {
      var b = v.addListener('user_activity', function (b) {
        return a('user_activity', b);
      });
      return {
        unsubscribe: function () {
          return b.remove();
        },
      };
    }
    function d(a) {
      return new Date() - k < (a != null ? a : h);
    }
    function e() {
      return o;
    }
    function f() {
      return m;
    }
    function x() {
      (o = !0), (m = !1);
    }
    function y() {
      return n;
    }
    function z() {
      return k;
    }
    function A(a) {
      p = a;
    }
    function B() {
      return q;
    }
    function C() {
      return t;
    }
    function D() {
      return u;
    }
    function E() {
      return l;
    }
    function F() {
      (k = Date.now()),
        (l = k),
        (m = !1),
        (n = Date.now()),
        (o = document.hasFocus ? document.hasFocus() : !0),
        (p = 0),
        (q = Date.now()),
        (r = -1),
        (s = -1),
        (t = !1),
        (u = !1);
    }
    function G(a) {
      a.unsubscribe();
    }
    function H(a) {
      J(a, i);
    }
    function I(a) {
      J(a, 0);
    }
    function J(b, c) {
      c === void 0 && (c = 0);
      var d = a.MouseEvent,
        e = a.KeyboardEvent;
      if (d && b instanceof d) {
        if (
          /^mouse(enter|leave|move|out|over)$/.test(b.type) &&
          b.pageX == r &&
          b.pageY == s
        )
          return;
        r = b.pageX;
        s = b.pageY;
      } else e && b instanceof e && (u = !0);
      (b.type === 'click' ||
        b.type === 'dblclick' ||
        b.type === 'contextmenu') &&
        (t = !0);
      k = Date.now();
      d = k - l;
      d >= c
        ? ((l = k),
          o || (q = k),
          d >= (p || h) && ((m = !0), (n = k)),
          v.emit('user_activity', { event: b, idleness: d, last_inform: l }))
        : d < j && (l = k);
    }
    function K(a) {
      (o = !0), (n = Date.now()), I(a);
    }
    function L() {
      (o = !1), (m = !0), (q = Date.now());
    }
    window.addEventListener('scroll', H, { capture: !0, passive: !0 });
    window.addEventListener('focus', K, {
      capture: !c('gkx')('1352'),
      passive: !0,
    });
    window.addEventListener('blur', L, {
      capture: !c('gkx')('1352'),
      passive: !0,
    });
    (function () {
      var a = document.documentElement;
      if (a == null) return;
      ['keydown', 'mouseover', 'mousemove', 'click'].forEach(function (b) {
        a.addEventListener(b, H, { capture: !0, passive: !0 });
      });
    })();
    g.EVENT_INTERVAL_MS = i;
    g.subscribeOnce = b;
    g.subscribe = w;
    g.isActive = d;
    g.isOnTab = e;
    g.hasBeenInactive = f;
    g.resetActiveStatus = x;
    g.getLastInActiveEnds = y;
    g.getLastActive = z;
    g.setIdleTime = A;
    g.getLastLeaveTime = B;
    g.hasClicked = C;
    g.hasInteractedWithKeyboard = D;
    g.getLastInformTime = E;
    g.reset = F;
    g.unsubscribe = G;
  },
  98,
);
