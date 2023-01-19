__d(
  'useFXSwitcherSwitchedSuccessLogger',
  ['requireDeferred', 'useFXUserData'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')('SwitchedSuccessFalcoEvent').__setRef(
      'useFXSwitcherSwitchedSuccessLogger',
    );
    function a() {
      var a = c('useFXUserData')(),
        b = a.accountId,
        d = a.actorId;
      return function (a) {
        h.onReady(function (c) {
          c.log(function () {
            return babelHelpers['extends'](
              {
                entry_point: 'settings',
                is_cds: !0,
                target_account_id: b,
                target_identity_id: d,
              },
              a,
            );
          });
        });
      };
    }
    g['default'] = a;
  },
  98,
);
