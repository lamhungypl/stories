__d(
  'handleErrorCodeBasicSideEffects',
  ['errorCode', 'UserMismatchExpected'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a) {
      if (
        a === 1357032 &&
        d('UserMismatchExpected').getIsUserMismatchExpected() === !0
      )
        return !0;
      if (a === 1357001 || a === 1357032) {
        window.location.reload(!0);
        return !0;
      }
      return !1;
    }
    g['default'] = a;
  },
  98,
);
