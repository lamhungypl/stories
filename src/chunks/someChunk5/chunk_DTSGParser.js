__d(
  'DTSGParser',
  ['CSRFGuard', 'DTSG', 'DTSG_ASYNC'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      updateFromAsyncResponse: function (a) {
        if (!d('CSRFGuard').exists(a)) return;
        try {
          a = d('CSRFGuard').clean(a);
          a = JSON.parse(a);
          var b = a.dtsgToken;
          a = a.dtsgAsyncGetToken;
          b && d('DTSG').setToken(b);
          a && d('DTSG_ASYNC').setToken(a);
        } catch (a) {
          return;
        }
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
