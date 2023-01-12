__d(
  'useServerTime',
  ['JSScheduler', 'ServerTime', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useState,
      j = 6e4,
      k = new Set(),
      l = null,
      m = !1;
    function n() {
      k.forEach(function (a) {
        return a();
      }),
        (m = !1);
    }
    function o(a) {
      a === void 0 && (a = j),
        (l = window.setInterval(function () {
          m || ((m = !0), d('JSScheduler').scheduleSpeculativeCallback(n));
        }, a));
    }
    function p() {
      k.size === 0 && (window.clearInterval(l), (l = null));
    }
    function q(a, b) {
      b === void 0 && (b = j);
      k.add(a);
      l == null && o(b);
      return function () {
        k['delete'](a), p();
      };
    }
    function r() {
      return new Date(d('ServerTime').getMillis());
    }
    function a(a) {
      a === void 0 && (a = j);
      var b = i(function () {
          return r();
        }),
        c = b[0],
        d = b[1],
        e = function () {
          return d(r());
        };
      h(
        function () {
          return q(e, a);
        },
        [a],
      );
      return c;
    }
    g['default'] = a;
  },
  98,
);
