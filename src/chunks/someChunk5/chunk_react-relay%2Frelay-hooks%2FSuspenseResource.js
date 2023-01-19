__d(
  'react-relay/relay-hooks/SuspenseResource',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 5 * 60 * 1e3;
    a = (function () {
      function a(a) {
        var b = this;
        this.$1 = 0;
        this.$2 = null;
        this.$3 = null;
        this.$4 = function (c) {
          b.$1++;
          b.$1 === 1 && (b.$2 = a(c));
          return {
            dispose: function () {
              (b.$1 = Math.max(0, b.$1 - 1)),
                b.$1 === 0 &&
                  (b.$2 != null || g(0, 14187), b.$2.dispose(), (b.$2 = null));
            },
          };
        };
      }
      var b = a.prototype;
      b.temporaryRetain = function (a) {
        var b = this;
        if (a.isServer()) return { dispose: function () {} };
        var c = this.$4(a),
          d = null;
        a = function () {
          clearTimeout(d), (d = null), (b.$3 = null), c.dispose();
        };
        d = setTimeout(a, h);
        this.$3 == null ? void 0 : this.$3();
        this.$3 = a;
        return {
          dispose: function () {
            b.$3 == null ? void 0 : b.$3();
          },
        };
      };
      b.permanentRetain = function (a) {
        a = this.$4(a);
        this.releaseTemporaryRetain();
        return a;
      };
      b.releaseTemporaryRetain = function () {
        this.$3 == null ? void 0 : this.$3(), (this.$3 = null);
      };
      b.getRetainCount = function () {
        return this.$1;
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
