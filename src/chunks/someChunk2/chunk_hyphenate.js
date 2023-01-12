__d(
  'hyphenate',
  [],
  function (a, b, c, d, e, f) {
    var g = /([A-Z])/g;
    function a(a) {
      return a.replace(g, '-$1').toLowerCase();
    }
    f['default'] = a;
  },
  66,
);
