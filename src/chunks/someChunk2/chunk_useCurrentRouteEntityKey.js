__d(
  'useCurrentRouteEntityKey',
  ['getCometEntityKey', 'react', 'useCurrentRoute'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a() {
      var a = c('useCurrentRoute')(),
        b = h(
          function () {
            return a ? c('getCometEntityKey')(a) : null;
          },
          [a],
        );
      return b;
    }
    g['default'] = a;
  },
  98,
);
