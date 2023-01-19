__d(
  'cometWrapWithRetryOnError',
  ['relay-runtime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      return d('relay-runtime').Observable.create(function (c) {
        var d,
          e = function e() {
            d = a.subscribe({
              complete: c.complete,
              error: function (a) {
                var d = function (b) {
                  c.error((b = b) != null ? b : a);
                };
                d = b(a, e, d);
                d || c.error(a);
              },
              next: c.next,
            });
          };
        e();
        return function () {
          return d.unsubscribe();
        };
      });
    }
    g['default'] = a;
  },
  98,
);
