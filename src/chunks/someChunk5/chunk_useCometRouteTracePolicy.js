__d(
  'useCometRouteTracePolicy',
  ['useCurrentRoute'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'comet.app';
    function a() {
      var a;
      return (a =
        (a = c('useCurrentRoute')()) == null ? void 0 : a.tracePolicy) != null
        ? a
        : h;
    }
    g['default'] = a;
  },
  98,
);
