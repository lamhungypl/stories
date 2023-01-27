__d(
  'performanceNow',
  ['performance'],
  function (a, b, c, d, e, f, g) {
    if (c('performance').now)
      b = function () {
        return c('performance').now();
      };
    else {
      d = a._cstart;
      e = Date.now();
      var h = typeof d === 'number' && d < e ? d : e,
        i = 0;
      b = function () {
        var a = Date.now(),
          b = a - h;
        b < i && ((h -= i - b), (b = a - h));
        i = b;
        return b;
      };
    }
    f = b;
    g['default'] = f;
  },
  98,
);
