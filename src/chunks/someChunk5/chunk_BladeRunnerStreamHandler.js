__d(
  'BladeRunnerStreamHandler',
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a, b, c, d, e, f) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c || function (a) {}),
          (this.$4 = d || function (a) {}),
          (this.$5 = e || function (a) {}),
          (this.$6 = f);
      }
      var b = a.prototype;
      b.onData = function (a) {
        var b = this.$1,
          c = this.$2;
        if (b != null) b(a.decodeData());
        else if (c != null) {
          b = atob(a.rawData());
          a = new Uint8Array(b.length);
          for (var d = 0; d < b.length; d++) a[d] = b.charCodeAt(d);
          c(a.buffer);
        }
      };
      b.onStatusUpdate = function (a) {
        this.$3(a);
      };
      b.onLog = function (a) {
        this.$4(a);
      };
      b.onBatch = function (a) {
        this.$5(a);
      };
      b.onClientCancel = function () {};
      b.getUpdatedRequestBody = function () {
        if (this.$6 != null) return this.$6();
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
