__d(
  'useCometTheme',
  ['BaseThemeDisplayModeContext', 'react', 'useCurrentDisplayMode'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo,
      j = { dark: '__fb-dark-mode ', light: '__fb-light-mode ' };
    function a(a) {
      var b = c('useCurrentDisplayMode')(),
        d;
      a === 'invert' ? (d = b === 'light' ? 'dark' : 'light') : (d = a);
      b = i(
        function () {
          return function (a) {
            a = a.children;
            return h.jsx(c('BaseThemeDisplayModeContext').Provider, {
              value: d,
              children: a,
            });
          };
        },
        [d],
      );
      return [b, { theme: j[d] }];
    }
    g['default'] = a;
  },
  98,
);
