__d(
  'setTimeoutCometInternals',
  ['JSScheduler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Map(),
      i = 0;
    function a(a) {
      if (a != null) {
        var b = h.get(a);
        b !== void 0 &&
          (h['delete'](a),
          d('JSScheduler').cancelDelayedCallback_DO_NOT_USE(b));
      }
    }
    function b(a) {
      if (a != null) {
        var b = h.get(a);
        b !== void 0 &&
          (h['delete'](a),
          d('JSScheduler').cancelDelayedCallback_DO_NOT_USE(b));
      }
    }
    function c(a, b, c) {
      for (
        var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3;
        g < e;
        g++
      )
        f[g - 3] = arguments[g];
      var j = i;
      i += 1;
      if (typeof b !== 'function') return j;
      var k = function e() {
          var g = d('JSScheduler').scheduleDelayedCallback_DO_NOT_USE(a, c, e);
          h.set(j, g);
          b.apply(void 0, f);
        },
        l = d('JSScheduler').scheduleDelayedCallback_DO_NOT_USE(a, c, k);
      h.set(j, l);
      return j;
    }
    function e(a, b, c) {
      for (
        var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3;
        g < e;
        g++
      )
        f[g - 3] = arguments[g];
      var j = i;
      i += 1;
      if (typeof b !== 'function') return j;
      var k = d('JSScheduler').scheduleDelayedCallback_DO_NOT_USE(
        a,
        c,
        function () {
          h['delete'](j), b.apply(void 0, f);
        },
      );
      h.set(j, k);
      return j;
    }
    g.clearInterval_DO_NOT_USE = a;
    g.clearTimeout_DO_NOT_USE = b;
    g.setIntervalAtPriority_DO_NOT_USE = c;
    g.setTimeoutAtPriority_DO_NOT_USE = e;
  },
  98,
);
