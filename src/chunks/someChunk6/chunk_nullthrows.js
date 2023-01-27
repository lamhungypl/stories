__d(
  'nullthrows',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      b === void 0 && (b = 'Got unexpected null or undefined');
      if (a != null) return a;
      a = new Error(b);
      a.framesToPop = 1;
      throw a;
    }
    f['default'] = a;
  },
  66,
);
