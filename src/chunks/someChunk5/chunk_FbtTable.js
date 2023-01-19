__d(
  'FbtTable',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
      ARG: { INDEX: 0, SUBSTITUTION: 1 },
      access: function (a, b, c) {
        if (c >= b.length) {
          typeof a === 'string' ||
            Array.isArray(a) ||
            g(0, 21388, JSON.stringify(a));
          return a;
        }
        var d = b[c];
        d = d[h.ARG.INDEX];
        if (d == null) return h.access(a, b, c + 1);
        (typeof a !== 'string' && !Array.isArray(a)) || g(0, 20954, typeof a);
        for (var e = 0; e < d.length; ++e) {
          var f = a[d[e]];
          if (f == null) continue;
          f = h.access(f, b, c + 1);
          if (f != null) return f;
        }
        return null;
      },
    };
    e.exports = h;
  },
  null,
);
