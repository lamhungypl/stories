__d(
  'CircularBuffer',
  ['unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        if (a <= 0)
          throw c('unrecoverableViolation')(
            'Buffer size should be a positive integer',
            'comet_infra',
          );
        this.$1 = a;
        this.$2 = 0;
        this.$3 = [];
        this.$4 = [];
      }
      var b = a.prototype;
      b.write = function (a) {
        var b = this;
        this.$3.length < this.$1
          ? this.$3.push(a)
          : (this.$4.forEach(function (a) {
              return a(b.$3[b.$2]);
            }),
            (this.$3[this.$2] = a),
            this.$2++,
            (this.$2 %= this.$1));
        return this;
      };
      b.onEvict = function (a) {
        this.$4.push(a);
        return this;
      };
      b.read = function () {
        return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
      };
      b.expand = function (a) {
        if (a > this.$1) {
          var b = this.read();
          this.$2 = 0;
          this.$3 = b;
          this.$1 = a;
        }
        return this;
      };
      b.dropFirst = function (a) {
        if (a <= this.$1) {
          var b = this.read();
          this.$2 = 0;
          b.splice(0, a);
          this.$3 = b;
        }
        return this;
      };
      b.clear = function () {
        this.$2 = 0;
        this.$3 = [];
        return this;
      };
      b.currentSize = function () {
        return this.$3.length;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
