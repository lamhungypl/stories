__d(
  'NetworkStatusImpl',
  ['FBLogger', 'NetworkHeartbeat', 'performanceNow'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = [],
      i = window.navigator.onLine,
      j = 2,
      k = 5e3,
      l = [],
      m = [],
      n = 0,
      o = !0,
      p = !1,
      q = function () {
        u(o, !0);
      },
      r = function () {
        u(p, !0);
      };
    function s() {
      var a = h.slice();
      a.forEach(function (a) {
        a({ online: i });
      });
    }
    function t(a) {
      a = h.indexOf(a);
      a > -1 && h.splice(a, 1);
    }
    function u(a, b) {
      b === void 0 && (b = !1);
      var e = i === a;
      b = !b && a === o && d('NetworkHeartbeat').isHeartbeatPending();
      if (e || b) return;
      i = a;
      c('FBLogger')('NetworkStatus').warn(
        'Network switched to ' + (a ? 'online' : 'offline'),
      );
      i || d('NetworkHeartbeat').maybeStartHeartbeat(q, r);
      s();
    }
    function v() {
      var a = c('performanceNow')();
      l = l.filter(function (b) {
        return w(b.startTime, a);
      });
      m = m.filter(function (b) {
        return w(b.startTime, a);
      });
      return m.length / l.length < j;
    }
    var w = function (a, b) {
      return a > b - k;
    };
    function a() {
      return i;
    }
    function b(a) {
      h.push(a);
      var b = !1;
      return {
        remove: function () {
          b || ((b = !0), t(a));
        },
      };
    }
    function e() {
      var a = c('performanceNow')();
      l.push({ startTime: a });
      d('NetworkHeartbeat').maybeStartHeartbeat(q, r, v);
    }
    function f() {
      var a = c('performanceNow')();
      m.push({ startTime: a });
      w(n, a) ||
        ((m = m.filter(function (b) {
          return w(b.startTime, a);
        })),
        (n = a));
    }
    window.addEventListener('online', function () {
      u(o);
    });
    window.addEventListener('offline', function () {
      u(p);
    });
    g.isOnline = a;
    g.onChange = b;
    g.reportError = e;
    g.reportSuccess = f;
  },
  98,
);
