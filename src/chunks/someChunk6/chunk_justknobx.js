__d(
  'justknobx',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = {};
    a = {
      getBool: function (a) {
        h(0, 47459);
      },
      getInt: function (a) {
        h(0, 47459);
      },
      _: function (a) {
        var b = i[a];
        b != null || h(0, 47458, a);
        return b.r;
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
