__d(
  'MetaConfigMap',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = {};
    a = {
      add: function (a, b) {
        for (var c in a)
          b && b.entry++, !(c in g) ? (g[c] = a[c]) : b && b.dup_entry++;
      },
      get: function (a) {
        return g[a];
      },
    };
    b = a;
    f['default'] = b;
  },
  66,
);
