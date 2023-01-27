__d(
  'MakeHasteTranslationsMap',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = {};
    function a(a) {
      Object.assign(i, a);
    }
    function b(a) {
      a in i || h(0, 62571, a);
      return i[a];
    }
    g.setBatch = a;
    g.get = b;
  },
  98,
);
