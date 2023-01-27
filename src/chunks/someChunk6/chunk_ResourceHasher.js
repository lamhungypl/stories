__d(
  'ResourceHasher',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = 0;
    function a(a) {
      return 'async:' + a;
    }
    function b() {
      return 'ejs:' + i++;
    }
    function c(a) {
      typeof a === 'string' || h(0, 19551, a);
      return a;
    }
    g.getAsyncHash = a;
    g.createExternalJSHash = b;
    g.getValidResourceHash = c;
  },
  98,
);
