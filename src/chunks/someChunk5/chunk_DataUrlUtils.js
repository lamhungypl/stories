__d(
  'DataUrlUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = /^data:.*/;
    function a(a) {
      return a == null ? !1 : g.test(a);
    }
    f.isDataUrl = a;
  },
  66,
);
