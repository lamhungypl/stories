__d(
  'relay-runtime/util/withDuration',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g =
      typeof window !== 'undefined' &&
      typeof ((b = window) == null
        ? void 0
        : (c = b.performance) == null
        ? void 0
        : c.now) === 'function';
    function h() {
      return g ? window.performance.now() : Date.now();
    }
    function a(a) {
      var b = h();
      a = a();
      return [h() - b, a];
    }
    e.exports = a;
  },
  null,
);
