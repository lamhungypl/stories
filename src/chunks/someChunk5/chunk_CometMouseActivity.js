__d(
  'CometMouseActivity',
  ['clearTimeout', 'removeFromArray', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 50,
      i = [],
      j = [],
      k = null;
    function l() {
      i.length > 0 &&
        i.forEach(function (a) {
          return a();
        }),
        j.length > 0 &&
          (j.forEach(function (a) {
            return a();
          }),
          (j = [])),
        (k = null);
    }
    function m() {
      c('clearTimeout')(k),
        (k = c('setTimeout')(function () {
          l();
        }, h));
    }
    var n = !1;
    function o() {
      n || (window.addEventListener('mousemove', m), (n = !0));
      return function () {
        window.removeEventListener('mousemove', m);
      };
    }
    function a(a) {
      n || o();
      i.push(a);
      return function () {
        c('removeFromArray')(i, a);
      };
    }
    function b(a) {
      n || o();
      j.push(a);
      return function () {
        c('removeFromArray')(j, a);
      };
    }
    d = { addOnMouseStopCallback: a, addOnMouseStopCallbackOnce: b, init: o };
    e = d;
    g['default'] = e;
  },
  98,
);
