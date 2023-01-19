__d(
  'ReactFbErrorUtils',
  ['ErrorGuard', 'TimeSlice'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {}
      a.invokeGuardedCallback = function (a, b, d, e, f, g, h, i, j) {
        var k = Array.prototype.slice.call(arguments, 3),
          l = this.onError;
        try {
          c('ErrorGuard').applyWithGuard(b, d, k, { onError: l, name: a });
        } catch (a) {
          l(a);
        }
      };
      a.wrapEventListener = function (a, b) {
        return c('TimeSlice').guard(b, a);
      };
      return a;
    })();
    a.onError = function () {};
    g['default'] = a;
  },
  98,
);
