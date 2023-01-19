__d(
  'CometLruCache',
  ['recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function () {
      function a(a) {
        (this.$1 = a),
          a <= 0 &&
            c('recoverableViolation')(
              'CometLruCache: Unable to create instance of cache with zero or negative capacity.',
              'CometLruCache',
            ),
          (this.$2 = new Map());
      }
      var b = a.prototype;
      b.set = function (a, b) {
        this.$2['delete'](a);
        this.$2.set(a, b);
        if (this.$2.size > this.$1) {
          a = this.$2.keys().next();
          a.done || this.$2['delete'](a.value);
        }
      };
      b.get = function (a) {
        var b = this.$2.get(a);
        b != null && (this.$2['delete'](a), this.$2.set(a, b));
        return b;
      };
      b.has = function (a) {
        return this.$2.has(a);
      };
      b['delete'] = function (a) {
        this.$2['delete'](a);
      };
      b.size = function () {
        return this.$2.size;
      };
      b.capacity = function () {
        return this.$1 - this.$2.size;
      };
      b.clear = function () {
        this.$2.clear();
      };
      return a;
    })();
    function a(a) {
      return new h(a);
    }
    g.create = a;
  },
  98,
);
