__d(
  'DGWRequestStreamDeferredClient',
  ['Promise', 'nullthrows', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = null;
      }
      var d = a.prototype;
      d.createStream = function (a, b, d, e, f) {
        this.$2();
        return c('nullthrows')(this.$1).then(function (c) {
          return c.createStream(a, b, d, e, f);
        });
      };
      d.$2 = function () {
        this.$1 == null &&
          (this.$1 = new (b('Promise'))(function (a) {
            c('requireDeferred')('DGWRequestStreamClient')
              .__setRef('DGWRequestStreamDeferredClient')
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