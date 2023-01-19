__d(
  'getComputedStyle',
  ['getDefaultViewForNode'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var d = c('getDefaultViewForNode')(a);
      return d == null ? null : d.getComputedStyle(a, b);
    }
    g['default'] = a;
  },
  98,
);
