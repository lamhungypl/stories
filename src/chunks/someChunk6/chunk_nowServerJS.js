__d(
  'nowServerJS',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a() {
      var a = window.performance;
      return a && a.now && a.timing && a.timing.navigationStart
        ? a.now() + a.timing.navigationStart
        : new Date().getTime();
    }
    f['default'] = a;
  },
  66,
);
