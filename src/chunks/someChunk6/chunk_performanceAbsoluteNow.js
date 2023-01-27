__d(
  'performanceAbsoluteNow',
  ['performance'],
  function (a, b, c, d, e, f, g) {
    var h = function () {
      return Date.now();
    };
    function a(a) {
      h = a;
    }
    if (
      c('performance').now &&
      c('performance').timing &&
      c('performance').timing.navigationStart
    ) {
      var i = c('performance').timing.navigationStart;
      b = function () {
        return c('performance').now() + i;
      };
    } else
      b = function () {
        return h();
      };
    b.setFallback = a;
    d = b;
    g['default'] = d;
  },
  98,
);
