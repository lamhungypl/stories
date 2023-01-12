__d(
  'previousProfileIdForToastSessionStorage',
  ['WebStorage'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      get: function () {
        var a;
        return (a = c('WebStorage').getSessionStorage()) == null
          ? void 0
          : a.getItem('previous_profile_id');
      },
      remove: function () {
        var a;
        (a = c('WebStorage').getSessionStorage()) == null
          ? void 0
          : a.removeItem('previous_profile_id');
      },
      set: function (a) {
        c('WebStorage').setItemGuarded(
          c('WebStorage').getSessionStorage(),
          'previous_profile_id',
          a,
        );
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
