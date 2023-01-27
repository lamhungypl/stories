__d(
  'ifRequired',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      var e;
      d &&
        d.call(null, [a], function (a) {
          e = a;
        });
      if (e && b) return b(e);
      else if (!e && c) return c();
    }
    f['default'] = a;
  },
  66,
);
