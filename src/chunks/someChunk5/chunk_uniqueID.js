__d(
  'uniqueID',
  [],
  function (a, b, c, d, e, f) {
    var g = 'js_',
      h = 36,
      i = 0;
    function a(a, b) {
      a === void 0 && (a = g);
      b === void 0 && (b = !1);
      return b ? a : a + (i++).toString(h);
    }
    f['default'] = a;
  },
  66,
);
