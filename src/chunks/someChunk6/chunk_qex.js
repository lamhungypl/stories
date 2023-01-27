__d(
  'qex',
  ['invariant', 'BanzaiLazyQueue'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = {},
      j = {};
    a = {
      _: function (a) {
        var b = i[a];
        b != null || h(0, 11799, a);
        var c = b.r;
        b = b.l;
        b != null &&
          !j[a] &&
          ((j[a] = !0), d('BanzaiLazyQueue').queuePost('qex', { l: b }));
        return c;
      },
      add: function (a, b) {
        for (var c in a)
          b && b.entry++, !(c in i) ? (i[c] = a[c]) : b && b.dup_entry++;
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
