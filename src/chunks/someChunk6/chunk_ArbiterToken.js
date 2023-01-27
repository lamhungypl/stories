__d(
  'ArbiterToken',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.unsubscribe = function () {
          for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
          this.$2.length = 0;
        }),
          (this.$1 = a),
          (this.$2 = b);
      }
      var b = a.prototype;
      b.isForArbiterInstance = function (a) {
        this.$1 || h(0, 2506);
        return this.$1 === a;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
