__d(
  'CometRootInitServerFlag',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = !1;
    function a() {
      g = !0;
    }
    function b() {
      return g;
    }
    f.enableServerEnvironment = a;
    f.isServerEnvironment = b;
  },
  66,
);
