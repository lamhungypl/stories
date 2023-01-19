__d(
  'flipObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return Object.entries(a).reduce(function (b, c) {
        var d = c[0];
        c = c[1];
        Object.prototype.hasOwnProperty.call(a, d) &&
          typeof c !== 'object' &&
          typeof c !== 'function' &&
          c != null &&
          (b[String(c)] = d);
        return b;
      }, {});
    }
    f['default'] = a;
  },
  66,
); /*FB_PKG_DELIM*/
