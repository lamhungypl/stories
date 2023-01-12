__d(
  'StoriesSuspensePauseContextProvider.react',
  ['StoriesSuspensePauseContext', 'react', 'useStoriesSuspensePause'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      a = a.children;
      var b = c('useStoriesSuspensePause')(),
        d = b[0],
        e = b[1];
      b = i(
        function () {
          return { isPaused: d, setPause: e };
        },
        [d, e],
      );
      return h.jsx(c('StoriesSuspensePauseContext').Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
