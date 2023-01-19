__d(
  'useIsCalledDuringRender',
  ['FBLogger', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = d('react').useCallback;
    function a() {
      var a;
      return h(
        function () {
          c('FBLogger')('comet_ui')
            .blameToPreviousFrame()
            .warn(
              'useIsCalledDuringRender should only be used for development purpose. It is implemented in a way that will not work correctly in production.',
            );
          return !1;
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
