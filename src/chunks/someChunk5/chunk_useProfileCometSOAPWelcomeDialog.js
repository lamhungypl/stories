__d(
  'useProfileCometSOAPWelcomeDialog',
  [
    'CometNUXManagerContext',
    'JSResourceForInteraction',
    'gkx',
    'react',
    'useCometLazyDialog',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext,
      i = '9388',
      j = c('JSResourceForInteraction')(
        'ProfileCometSOAPOnboardingDialog.react',
      ).__setRef('useProfileCometSOAPWelcomeDialog');
    function a() {
      var a = c('useCometLazyDialog')(j),
        b = a[0];
      a = h(c('CometNUXManagerContext'));
      var d = a.registerNUX,
        e = c('gkx')('2528');
      return function (a) {
        e &&
          d(i, function (c) {
            c && b({ onExit: a });
          });
      };
    }
    g['default'] = a;
  },
  98,
);
