__d(
  'relay-runtime/network/RelayQueryResponseCache',
  ['invariant', 'relay-runtime/util/stableCopy'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    a = (function () {
      function a(a) {
        var b = a.size;
        a = a.ttl;
        b > 0 || g(0, 1167, b);
        a > 0 || g(0, 1168, a);
        this.$1 = new Map();
        this.$2 = b;
        this.$3 = a;
      }
      var b = a.prototype;
      b.clear = function () {
        this.$1.clear();
      };
      b.get = function (a, b) {
        var c = this;
        a = i(a, b);
        this.$1.forEach(function (a, b) {
          j(a.fetchTime, c.$3) || c.$1['delete'](b);
        });
        var d = this.$1.get(a);
        if (d == null) return null;
        return Array.isArray(d.payload)
          ? d.payload.map(function (a) {
              return babelHelpers['extends']({}, a, {
                extensions: babelHelpers['extends']({}, a.extensions, {
                  cacheTimestamp: d.fetchTime,
                }),
              });
            })
          : babelHelpers['extends']({}, d.payload, {
              extensions: babelHelpers['extends']({}, d.payload.extensions, {
                cacheTimestamp: d.fetchTime,
              }),
            });
      };
      b.set = function (a, b, c) {
        var d = Date.now();
        a = i(a, b);
        this.$1['delete'](a);
        this.$1.set(a, { fetchTime: d, payload: c });
        if (this.$1.size > this.$2) {
          b = this.$1.keys().next();
          b.done || this.$1['delete'](b.value);
        }
      };
      return a;
    })();
    function i(a, c) {
      return JSON.stringify(
        (h || (h = b('relay-runtime/util/stableCopy')))({
          queryID: a,
          variables: c,
        }),
      );
    }
    function j(a, b) {
      return a + b >= Date.now();
    }
    e.exports = a;
  },
  null,
);
