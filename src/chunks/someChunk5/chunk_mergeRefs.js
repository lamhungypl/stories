__d(
  'mergeRefs',
  ['recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
        b[d] = arguments[d];
      return function (a) {
        b.forEach(function (b) {
          if (b == null) return;
          if (typeof b === 'function') {
            b(a);
            return;
          }
          if (typeof b === 'object') {
            b.current = a;
            return;
          }
          c('recoverableViolation')(
            'mergeRefs cannot handle Refs of type boolean, number or string, received ref ' +
              String(b),
            'comet_ui',
          );
        });
      };
    }
    g['default'] = a;
  },
  98,
);
