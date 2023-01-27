__d(
  'qplTimingsServerJS',
  ['nowServerJS'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {};
    function a(a, b, d) {
      if (a == null) return h;
      h[a] == null && (h[a] = {});
      if (b != null) {
        h[a][b] = (a = d) != null ? a : c('nowServerJS')();
      }
    }
    g['default'] = a;
  },
  98,
);
