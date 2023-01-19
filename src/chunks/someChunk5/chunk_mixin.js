__d(
  'mixin',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = function () {},
        b = 0,
        c;
      while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
        c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
        for (var d in c)
          Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
        b += 1;
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
