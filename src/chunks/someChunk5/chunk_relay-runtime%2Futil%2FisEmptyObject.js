__d(
  'relay-runtime/util/isEmptyObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = Object.prototype.hasOwnProperty;
    function a(a) {
      for (var b in a) if (g.call(a, b)) return !1;
      return !0;
    }
    e.exports = a;
  },
  null,
);
