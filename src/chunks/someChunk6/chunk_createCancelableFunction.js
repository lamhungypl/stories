__d(
  'createCancelableFunction',
  ['emptyFunction'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = a;
      a = function () {
        for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
          c[d] = arguments[d];
        return b.apply(this, c);
      };
      a.cancel = function () {
        b = c('emptyFunction');
      };
      return a;
    }
    g['default'] = a;
  },
  98,
);
