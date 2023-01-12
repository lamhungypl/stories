__d(
  'react-0.0.0',
  ['React'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return a && typeof a === 'object' && 'default' in a ? a['default'] : a;
    }
    var g = a(b('React'));
    d = {};
    var h = { exports: d };
    function i() {
      h.exports = g;
    }
    var j = !1;
    function k() {
      j || ((j = !0), i());
      return h.exports;
    }
    function c(a) {
      switch (a) {
        case void 0:
          return k();
      }
    }
    e.exports = c;
  },
  null,
);
