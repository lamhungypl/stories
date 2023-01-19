__d(
  'keyMirror',
  ['unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = {};
      if (!(a instanceof Object && !Array.isArray(a)))
        throw c('unrecoverableViolation')(
          'keyMirror(...): Argument must be an object.',
          'comet_infra',
        );
      for (var d in a) {
        if (!Object.prototype.hasOwnProperty.call(a, d)) continue;
        b[d] = d;
      }
      return b;
    }
    g['default'] = a;
  },
  98,
);
