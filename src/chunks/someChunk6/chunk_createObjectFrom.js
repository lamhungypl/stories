__d(
  'createObjectFrom',
  [],
  function (a, b, c, d, e, f) {
    function g(a, b) {
      if (b === void 0) return g(a, !0);
      var c = {};
      if (Array.isArray(b))
        for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
      else for (d = a.length - 1; d >= 0; d--) c[a[d]] = b;
      return c;
    }
    f['default'] = g;
  },
  66,
);
