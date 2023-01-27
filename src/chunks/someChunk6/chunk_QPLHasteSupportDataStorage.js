__d(
  'QPLHasteSupportDataStorage',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = {};
    a = {
      add: function (a, b) {
        Object.keys(a).forEach(function (c) {
          b && b.entry++;
          if (g[c] == null) {
            var d = a[c];
            g[c] = d;
          } else b && b.dup_entry++;
        });
      },
      get: function (a) {
        return g[a];
      },
    };
    f['default'] = a;
  },
  66,
);
