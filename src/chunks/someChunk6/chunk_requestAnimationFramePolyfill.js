__d(
  'requestAnimationFramePolyfill',
  ['nativeRequestAnimationFrame', 'performanceNow'],
  function (a, b, c, d, e, f, g) {
    var h = 0;
    b =
      c('nativeRequestAnimationFrame') ||
      function (b) {
        var d = c('performanceNow')(),
          e = Math.max(0, 16 - (d - h));
        h = d + e;
        return a.setTimeout(function () {
          b(c('performanceNow')());
        }, e);
      };
    d = b;
    g['default'] = d;
  },
  98,
);
