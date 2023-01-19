__d(
  'relay-runtime/query/PreloadableQueryRegistry',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {
        (this.$1 = new Map()), (this.$2 = new Map());
      }
      var b = a.prototype;
      b.set = function (a, b) {
        this.$1.set(a, b);
        a = this.$2.get(a);
        a != null &&
          a.forEach(function (a) {
            try {
              a(b);
            } catch (a) {
              setTimeout(function () {
                throw a;
              }, 0);
            }
          });
      };
      b.get = function (a) {
        return this.$1.get(a);
      };
      b.onLoad = function (a, b) {
        var c,
          d = (c = this.$2.get(a)) != null ? c : new Set();
        d.add(b);
        c = function () {
          d['delete'](b);
        };
        this.$2.set(a, d);
        return { dispose: c };
      };
      b.clear = function () {
        this.$1.clear();
      };
      return a;
    })();
    b = new a();
    e.exports = b;
  },
  null,
);
