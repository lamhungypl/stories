__d(
  'SecuredActionUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 'Re-authentication canceled.';
    function a(a) {
      return (a == null ? void 0 : a.message) === g;
    }
    f.SECURED_ACTION_REAUTH_CANCELED_ERROR = g;
    f.isSecuredActionError = a;
  },
  66,
);
