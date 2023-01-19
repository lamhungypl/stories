__d(
  'BladeRunnerDeferredClient',
  ['Promise', 'nullthrows', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a() {
        this.$1 = null;
      }
      var d = a.prototype;
      d.requestStream = function (a, b, d, e) {
        this.$2();
        return c('nullthrows')(this.$1).then(function (c) {
          return c.requestStream(a, b, d, e);
        });
      };
      d.logInfo = function (a) {
        this.$2();
        return c('nullthrows')(this.$1).then(function (b) {
          b.logInfo(a);
        });
      };
      d.bumpCounter = function (a) {
        this.$2();
        return c('nullthrows')(this.$1).then(function (b) {
          b.bumpCounter(a);
        });
      };
      d.$2 = function () {
        this.$1 == null &&
          (this.$1 = new (b('Promise'))(function (a) {
            c('requireDeferred')('BladeRunnerClient')
              .__setRef('BladeRunnerDeferredClient')
              .onReady(function (b) {
                a(new b());
              });
          }));
      };
      return a;
    })();
    d = new a();
    g['default'] = d;
  },
  98,
);
