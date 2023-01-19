__d(
  'CometSSRReactFizzEnvironment',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      window.__isReactFizzContext = a;
    }
    function b() {
      var a;
      return !!((a = window) == null ? void 0 : a.__isReactFizzContext);
    }
    f.setReactFizzEnvironment = a;
    f.isReactFizzEnvironment = b;
  },
  66,
);
