__d(
  'useEndCometNUXTour',
  [
    'CometNUXTourConsumerContext',
    'emptyFunction',
    'react',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      var a = h(c('CometNUXTourConsumerContext'));
      if (a == null) {
        c('recoverableViolation')(
          'Unable to retrieve nux tour context',
          'comet_ui',
        );
        return c('emptyFunction');
      }
      a = a.endTour;
      return a;
    }
    g['default'] = a;
  },
  98,
);
