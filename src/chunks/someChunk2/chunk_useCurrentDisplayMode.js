__d(
  'useCurrentDisplayMode',
  ['BaseThemeDisplayModeContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext,
      i = 'light';
    function a() {
      var a;
      return (a = h(c('BaseThemeDisplayModeContext'))) != null ? a : i;
    }
    g['default'] = a;
  },
  98,
);
