__d(
  'useSetAttributeRef',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a, b) {
      return h(
        function (c) {
          c != null && c.setAttribute(a, b);
        },
        [a, b],
      );
    }
    g['default'] = a;
  },
  98,
);
