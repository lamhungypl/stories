__d(
  'memoizeWithArgs',
  ['MemoizationInstrumentation'],
  function (a, b, c, d, e, f, g) {
    var h = Object.prototype.hasOwnProperty;
    function a(a, b, c) {
      var e,
        f = c || a.name || 'unknown';
      c = function () {
        e || (e = {});
        var c = d('MemoizationInstrumentation').onFunctionCall(
            'memoizeWithArgs',
            f,
          ),
          g = b.apply(void 0, arguments),
          i = !0;
        h.call(e, g) || ((i = !1), (e[g] = a.apply(void 0, arguments)));
        c && c(i);
        return e[g];
      };
      return c;
    }
    g['default'] = a;
  },
  98,
);
