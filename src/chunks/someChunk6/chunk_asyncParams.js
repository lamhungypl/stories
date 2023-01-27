__d(
  'asyncParams',
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    function a(a, b) {
      g[a] = b;
    }
    function b() {
      return g;
    }
    f.add = a;
    f.get = b;
  },
  66,
);
