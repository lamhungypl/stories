__d(
  'wrapFunction',
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    function a(a, b, c) {
      var d = b in g ? g[b](a, c) : a;
      return function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        return d.apply(this, b);
      };
    }
    a.setWrapper = function (a, b) {
      g[b] = a;
    };
    f['default'] = a;
  },
  66,
);
