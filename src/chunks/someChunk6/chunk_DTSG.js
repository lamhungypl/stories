__d(
  'DTSG',
  ['invariant', 'DTSGInitialData'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('DTSGInitialData').token || null;
    function a() {
      return i;
    }
    function b(a) {
      i = a;
    }
    function c() {
      h(0, 5809);
    }
    g.getToken = a;
    g.setToken = b;
    g.refresh = c;
  },
  98,
);
