__d(
  'FundraiserGKUtils.entrypointutils',
  ['gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h() {
      return c('gkx')('1122553');
    }
    function i() {
      return c('gkx')('781430');
    }
    function a() {
      return h() || i();
    }
    function b() {
      return c('gkx')('4524') && h();
    }
    function d() {
      return c('gkx')('708253');
    }
    g.canCreateP4CFundraiser = h;
    g.canCreateP4PFundraiser = i;
    g.canCreateFundraiser = a;
    g.canCreateChallenge = b;
    g.canSeeCometVoiceSwitcher = d;
  },
  98,
);
