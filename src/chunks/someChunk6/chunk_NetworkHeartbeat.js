__d(
  'NetworkHeartbeat',
  [
    'XHeartbeatController',
    'clearTimeout',
    'getSameOriginTransport',
    'killswitch',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('XHeartbeatController').getURIBuilder().getURI().toString(),
      i = 6400,
      j = 100,
      k = null,
      l = 0,
      m = null,
      n = c('killswitch')('DISABLE_HEARTBEAT_POLLING');
    function o(a, b) {
      (m = c('getSameOriginTransport')()),
        m.open('GET', h, !0),
        (m.onload = function () {
          m && m.status === 204 && (n = !0), q(a);
        }),
        (m.onerror = function () {
          r(a, b);
        }),
        (m.ontimeout = function () {
          r(a, b);
        }),
        m.send();
    }
    function p() {
      (m = null), (j = 100), (l = 0), c('clearTimeout')(k);
    }
    function q(a) {
      p(), a();
    }
    function r(a, b) {
      (k = c('setTimeout')(function () {
        s(a, b, void 0, !0);
      }, j)),
        l++,
        j < i && (j = Math.min(j * Math.pow(2, l), i)),
        b();
    }
    function s(a, b, c, d) {
      c === void 0 &&
        (c = function () {
          return !0;
        }),
        d === void 0 && (d = !1),
        n || ((d || (m == null && c())) && o(a, b));
    }
    function a() {
      return m != null;
    }
    g.maybeStartHeartbeat = s;
    g.isHeartbeatPending = a;
  },
  98,
);
