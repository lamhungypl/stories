__d(
  'refine/Refine_API',
  ['recoil-shared/util/Recoil_err'],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a, c) {
      if (c != null) {
        var d = c.path.toString();
        c = c.message;
        throw b('recoil-shared/util/Recoil_err')(
          '[refine.js (path=' + d + ', message=' + c + ')]: ' + a,
        );
      }
      throw b('recoil-shared/util/Recoil_err')(
        '[refine.js (null result)]: ' + a,
      );
    }
    function a(a, b) {
      b === void 0 && (b = 'assertion error');
      return function (c) {
        c = a(c);
        return c.type === 'success' ? c.value : g(b, c);
      };
    }
    function c(a, b) {
      return function (c) {
        c = a(c);
        b != null && b(c);
        return c.type === 'success' ? c.value : null;
      };
    }
    e.exports = { assertion: a, coercion: c };
  },
  null,
);
