__d(
  'absoluteToRelative',
  ['memoizeStringOnly'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('memoizeStringOnly')(function (a) {
      return a.replace(/^https?:\/\/[^\/]+/i, '');
    });
    function a(a) {
      return h((a = a) != null ? a : '#');
    }
    g['default'] = a;
  },
  98,
);
