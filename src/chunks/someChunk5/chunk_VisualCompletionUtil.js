__d(
  'VisualCompletionUtil',
  [
    'Visibility',
    'cancelAnimationFrame',
    'clearTimeout',
    'requestAnimationFrame',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (c('Visibility').isHidden()) {
        var b = c('setTimeout')(a, 0);
        return function () {
          c('clearTimeout')(b);
        };
      } else {
        var d = c('requestAnimationFrame')(a);
        return function () {
          c('cancelAnimationFrame')(d);
        };
      }
    }
    function h(a) {
      return (a.right - a.left) * (a.bottom - a.top);
    }
    function i(a, b) {
      return {
        bottom: Math.max(Math.min(a.bottom, b.bottom), b.top),
        left: Math.min(Math.max(a.left, b.left), b.right),
        right: Math.max(Math.min(a.right, b.right), b.left),
        top: Math.min(Math.max(a.top, b.top), b.bottom),
      };
    }
    function j() {
      return { height: window.innerHeight, width: window.innerWidth };
    }
    function b(a) {
      if (typeof a.getBoundingClientRect !== 'function') return !1;
      var b = j();
      a = a.getBoundingClientRect();
      var c = a.bottom,
        d = a.left,
        e = a.right;
      a = a.top;
      c = h(
        i(
          { bottom: c, left: d, right: e, top: a },
          { bottom: b.height, left: 0, right: b.width, top: -window.scrollY },
        ),
      );
      return c > 0;
    }
    function d(a, b) {
      var c = 0;
      a = a;
      while (a && a.offsetParent && typeof a.offsetTop === 'number')
        (c += a.offsetTop), (a = a.offsetParent);
      if (
        a &&
        a.offsetParent == null &&
        typeof a.getBoundingClientRect === 'function'
      ) {
        var d = a.getBoundingClientRect();
        d = d.top;
        d >= 0 ? (c += d) : a === document.body && (c -= b);
      }
      return c;
    }
    function e(a) {
      return a.split('#')[0];
    }
    function f(a) {
      if (a == null || a === '') return !1;
      a = a.replace(/ /g, '');
      return (
        a.indexOf('display:none') >= 0 ||
        a.indexOf('visibility:hidden') >= 0 ||
        a.indexOf('content-visibility:hidden') >= 0
      );
    }
    g.foregroundRequestAnimationFrame = a;
    g.getPixels = h;
    g.getRectIntersection = i;
    g.getViewportSize = j;
    g.isInAboveTheFold = b;
    g.offsetTop = d;
    g.trimHash = e;
    g.checkInvisibleStyle = f;
  },
  98,
);
