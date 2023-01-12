__d(
  'getCentralImpressionTimeAfterRefresh',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = null;
    window.addEventListener(
      'load',
      function () {
        g = Date.now();
      },
      { passive: !0 },
    );
    function a() {
      return g != null ? Date.now() - g : 0;
    }
    f['default'] = a;
  },
  66,
);
