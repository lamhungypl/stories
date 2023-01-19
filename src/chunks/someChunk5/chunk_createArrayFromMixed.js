__d(
  'createArrayFromMixed',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    function i(a) {
      var b = a.length;
      (!Array.isArray(a) &&
        (typeof a === 'object' || typeof a === 'function')) ||
        h(0, 3914);
      typeof b === 'number' || h(0, 3915);
      b === 0 || b - 1 in a || h(0, 3916);
      typeof a.callee !== 'function' || h(0, 3917);
      if (a.hasOwnProperty)
        try {
          return Array.prototype.slice.call(a);
        } catch (a) {}
      var c = Array(b);
      for (var d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    function j(a) {
      return (
        !!a &&
        (typeof a === 'object' || typeof a === 'function') &&
        'length' in a &&
        !('setInterval' in a) &&
        typeof a.nodeType !== 'number' &&
        (Array.isArray(a) || 'callee' in a || 'item' in a)
      );
    }
    function a(a) {
      if (!j(a)) return [a];
      else if (Array.isArray(a)) return a.slice();
      else return i(a);
    }
    g['default'] = a;
  },
  98,
);
