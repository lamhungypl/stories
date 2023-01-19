__d(
  'relay-runtime/util/RelayProfiler',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = {},
      h = { stop: function () {} };
    a = {
      profile: function (a, b) {
        var c = g[a];
        if (c && c.length > 0) {
          var d = [];
          for (var e = c.length - 1; e >= 0; e--) {
            var f = c[e](a, b);
            d.unshift(f);
          }
          return {
            stop: function (a) {
              d.forEach(function (b) {
                return b(a);
              });
            },
          };
        }
        return h;
      },
      attachProfileHandler: function (a, b) {
        Object.prototype.hasOwnProperty.call(g, a) || (g[a] = []), g[a].push(b);
      },
      detachProfileHandler: function (a, b) {
        Object.prototype.hasOwnProperty.call(g, a) && i(g[a], b);
      },
    };
    function i(a, b) {
      b = a.indexOf(b);
      b !== -1 && a.splice(b, 1);
    }
    e.exports = a;
  },
  null,
);
