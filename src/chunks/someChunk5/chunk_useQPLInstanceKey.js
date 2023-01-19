__d(
  'useQPLInstanceKey',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useState,
      i = 0;
    function a() {
      return h(function () {
        return ++i;
      })[0];
    }
    g['default'] = a;
  },
  98,
);
