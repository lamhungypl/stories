__d(
  'relay-runtime/util/RelayError',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a, b, c) {
      for (
        var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3;
        f < d;
        f++
      )
        e[f - 3] = arguments[f];
      var g = 0,
        h = c.replace(/%s/g, function () {
          return String(e[g++]);
        }),
        i = new Error(h),
        j = Object.assign(i, {
          name: b,
          messageFormat: c,
          messageParams: e,
          type: a,
          taalOpcodes: [2, 2],
        });
      if (j.stack === void 0)
        try {
          throw j;
        } catch (a) {}
      return j;
    }
    e.exports = {
      create: function (a, b) {
        for (
          var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
          e < c;
          e++
        )
          d[e - 2] = arguments[e];
        return g.apply(void 0, ['error', a, b].concat(d));
      },
      createWarning: function (a, b) {
        for (
          var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
          e < c;
          e++
        )
          d[e - 2] = arguments[e];
        return g.apply(void 0, ['warn', a, b].concat(d));
      },
    };
  },
  null,
);
