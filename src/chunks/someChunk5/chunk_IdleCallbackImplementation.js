__d(
  'IdleCallbackImplementation',
  ['performanceNow', 'requestAnimationFramePolyfill'],
  function (a, b, c, d, e, f, g) {
    var h = [],
      i = 0,
      j = 0,
      k = -1,
      l = !1,
      m = 1e3 / 60,
      n = 2;
    function o(a) {
      return a;
    }
    function p(a) {
      return a;
    }
    function b(b, c) {
      var d = j++;
      h[d] = b;
      r();
      if (c != null && c.timeout > 0) {
        var e = o(d);
        a.setTimeout(function () {
          return x(e);
        }, c.timeout);
      }
      return o(d);
    }
    function q(a) {
      a = p(a);
      h[a] = null;
    }
    function r() {
      l ||
        ((l = !0),
        c('requestAnimationFramePolyfill')(function (a) {
          (l = !1), t(c('performanceNow')() - a);
        }));
    }
    function s(a) {
      var b = m - n;
      if (a < b) return b - a;
      a = a % m;
      if (a > b || a < n) return 0;
      else return b - a;
    }
    function t(a) {
      var b = c('performanceNow')();
      if (b > k) {
        a = s(a);
        if (a > 0) {
          b = b + a;
          w(b);
          k = b;
        }
      }
      u() && r();
    }
    function u() {
      return i < h.length;
    }
    function v() {
      while (u()) {
        var a = h[i];
        i++;
        if (a) return a;
      }
      return null;
    }
    function w(a) {
      var b;
      while (c('performanceNow')() < a && (b = v())) b(new y(a));
    }
    function x(a) {
      var b = p(a);
      b = h[b];
      b && (q(a), b(new y(null)));
    }
    var y = (function () {
      function a(a) {
        (this.didTimeout = a == null), (this.$1 = a);
      }
      var b = a.prototype;
      b.timeRemaining = function () {
        var a = this.$1;
        if (a != null) {
          var b = c('performanceNow')();
          if (b < a) return a - b;
        }
        return 0;
      };
      return a;
    })();
    g.requestIdleCallback = b;
    g.cancelIdleCallback = q;
  },
  98,
);
