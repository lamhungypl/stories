__d(
  'useJSON',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a(a, b) {
      return h(
        function () {
          return JSON.parse(a, b);
        },
        [a, b],
      );
    }
    g['default'] = a;
  },
  98,
);
