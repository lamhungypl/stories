__d(
  'shallowEqual',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = Object.prototype.hasOwnProperty;
    function h(a, b) {
      if (a === b) return a !== 0 || b !== 0 || 1 / a === 1 / b;
      else return a !== a && b !== b;
    }
    function a(a, b) {
      if (h(a, b)) return !0;
      if (
        typeof a !== 'object' ||
        a === null ||
        typeof b !== 'object' ||
        b === null
      )
        return !1;
      var c = Object.keys(a),
        d = Object.keys(b);
      if (c.length !== d.length) return !1;
      for (d = 0; d < c.length; d++)
        if (!g.call(b, c[d]) || !h(a[c[d]], b[c[d]])) return !1;
      return !0;
    }
    f['default'] = a;
  },
  66,
); /*FB_PKG_DELIM*/