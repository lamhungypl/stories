__d(
  'oz-player/configs/MockOzConfig',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        a === void 0 && (a = {}), (this.$1 = a);
      }
      var b = a.prototype;
      b.getBool = function (a, b) {
        return typeof this.$1[a] === 'boolean' ? this.$1[a] : b;
      };
      b.getNumber = function (a, b) {
        return typeof this.$1[a] === 'number' ? this.$1[a] : b;
      };
      b.getString = function (a, b) {
        return typeof this.$1[a] === 'string' ? this.$1[a] : b;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
