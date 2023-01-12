__d(
  'coerceRouteParams',
  ['coerceRouteParam'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      return Object.keys(b).reduce(function (d, e) {
        var f = b[e];
        if (f != null) {
          var g = c('coerceRouteParam')(a[e], f.coercibleType, f.enumType),
            h = g.valid;
          g = g.value;
          var i = (g = g) != null ? g : f['default'];
          h && (d[e] = i);
          f.legacyNames.forEach(function (a) {
            d[a] = i;
          });
        }
        return d;
      }, {});
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
