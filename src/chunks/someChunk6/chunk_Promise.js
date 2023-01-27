__d(
  'Promise',
  ['cr:3769'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = (c = b('cr:3769')) != null ? c : a.Promise;
    g.allSettled ||
      (g.allSettled = function (a) {
        if (!Array.isArray(a))
          return g.reject(
            new TypeError('Promise.allSettled must be passed an array.'),
          );
        var b = Array(a.length),
          c = function (c, d) {
            var e = a[c];
            d =
              typeof e === 'object' &&
              e !== null &&
              typeof e.then === 'function';
            b[c] = d
              ? new g(function (a, b) {
                  e.then(
                    function (b) {
                      a({ status: 'fulfilled', value: b });
                    },
                    function (b) {
                      a({ status: 'rejected', reason: b });
                    },
                  );
                })
              : g.resolve({ status: 'fulfilled', value: e });
          };
        for (var d = 0, e = a.length; d < e; ++d) c(d, e);
        return g.all(b);
      });
    g.prototype['finally'] ||
      (g.prototype['finally'] = function (a) {
        return this.then(
          function (b) {
            return g.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return g.resolve(a()).then(function () {
              throw b;
            });
          },
        );
      });
    e.exports = g;
  },
  null,
);
