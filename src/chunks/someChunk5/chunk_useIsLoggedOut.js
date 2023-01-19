__d(
  'useIsLoggedOut',
  ['Actor'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = d('Actor').useActor();
      a = a[0];
      return a == null || a === '' || a === '0' || a === 0;
    }
    g['default'] = a;
  },
  98,
);
