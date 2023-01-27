__d(
  'flattenPHPQueryData',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      return i(a, '', {});
    }
    function i(a, b, c) {
      if (a == null) c[b] = void 0;
      else if (typeof a === 'object') {
        typeof a.appendChild !== 'function' || h(0, 2616);
        for (var d in a)
          d !== '$$typeof' &&
            Object.prototype.hasOwnProperty.call(a, d) &&
            a[d] !== void 0 &&
            i(a[d], b ? b + '[' + d + ']' : d, c);
      } else c[b] = a;
      return c;
    }
    g['default'] = a;
  },
  98,
);
