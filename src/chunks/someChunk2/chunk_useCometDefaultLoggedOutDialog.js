__d(
  'useCometDefaultLoggedOutDialog',
  ['fbt', 'useCometLoggedOutPopupCTA', 'useIsLoggedOut'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a, b) {
      var d = c('useIsLoggedOut')(),
        e = h._('__JHASH__vhsTy3zwXSh__JHASH__');
      a = c('useCometLoggedOutPopupCTA')({
        legal_reporting_cta_type: a,
        legal_reporting_uri: b,
        title: e,
      });
      return d ? a : null;
    }
    g['default'] = a;
  },
  98,
);
