__d(
  'isEmpty',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a) {
      if (Array.isArray(a)) return a.length === 0;
      else if (typeof a === 'object') {
        if (a) {
          !i(a) || a.size === void 0 || h(0, 1445);
          for (var b in a) return !1;
        }
        return !0;
      } else return !a;
    }
    function i(a) {
      return typeof Symbol === 'undefined'
        ? !1
        : a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] !=
            null;
    }
    g['default'] = a;
  },
  98,
);
