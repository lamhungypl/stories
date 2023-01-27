__d(
  'performanceNavigationStart',
  ['performance'],
  function (a, b, c, d, e, f) {
    var g;
    if ((g || (g = b('performance'))).now)
      if (
        (g || (g = b('performance'))).timing &&
        (g || (g = b('performance'))).timing.navigationStart
      )
        a = function () {
          return (g || (g = b('performance'))).timing.navigationStart;
        };
      else {
        if (typeof window._cstart === 'number')
          a = function () {
            return window._cstart;
          };
        else {
          var h = Date.now();
          a = function () {
            return h;
          };
        }
        a.isPolyfilled = !0;
      }
    else
      (a = function () {
        return 0;
      }),
        (a.isPolyfilled = !0);
    e.exports = a;
  },
  null,
);
