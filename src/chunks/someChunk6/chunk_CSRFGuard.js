__d(
  'CSRFGuard',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    c = 'for (;;);';
    var g = /^for ?\(;;\);/;
    d = c.length;
    function a(a) {
      return !!a.match(g);
    }
    function b(a) {
      var b = a.match(g);
      return b ? a.substr(b[0].length) : b;
    }
    f.regex = g;
    f.length = d;
    f.exists = a;
    f.clean = b;
  },
  66,
);
