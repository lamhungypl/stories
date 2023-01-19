__d(
  'cometAsyncRequestHeaders',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = [];
    function a() {
      return g.reduce(function (a, b) {
        b = b();
        return Object.assign(b, a);
      }, {});
    }
    function b(a) {
      g.push(a);
    }
    f.getHeaders = a;
    f.registerHeaderProvider = b;
  },
  66,
);
