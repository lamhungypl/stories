__d(
  'Random',
  ['Alea', 'ServerNonce'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 4294967296,
      h = b('ServerNonce').ServerNonce,
      i;
    function j() {
      i == null && (i = b('Alea')(h));
      return i;
    }
    var k = {
      random: (function () {
        var b = typeof Uint32Array === 'function' ? new Uint32Array(1) : null,
          c = a.crypto || a.msCrypto;
        if (b != null)
          try {
            var d = c == null ? void 0 : c.getRandomValues;
            if (typeof d === 'function') {
              var e = d.bind(c);
              return function () {
                try {
                  e(b);
                } catch (a) {
                  return j()();
                }
                return b[0] / g;
              };
            }
          } catch (a) {}
        return j();
      })(),
      uint32: function () {
        return Math.floor(k.random() * g);
      },
      coinflip: (function (a) {
        function b(b) {
          return a.apply(this, arguments);
        }
        b.toString = function () {
          return a.toString();
        };
        return b;
      })(function (a) {
        if (a === 0) return !1;
        return a <= 1 ? !0 : k.random() * a <= 1;
      }),
    };
    e.exports = k;
  },
  null,
);
