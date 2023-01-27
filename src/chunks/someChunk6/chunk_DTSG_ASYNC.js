__d(
  'DTSG_ASYNC',
  ['DTSGInitData'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('DTSGInitData').async_get_token || null;
    function a() {
      return h;
    }
    function b(a) {
      h = a;
    }
    g.getToken = a;
    g.setToken = b;
  },
  98,
);
