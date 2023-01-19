__d(
  'Log',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = -1;
    b = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
    c = function (a, b, c) {
      for (
        var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3;
        f < d;
        f++
      )
        e[f - 3] = arguments[f];
      var h = 0,
        i = c.replace(/%s/g, function () {
          return String(e[h++]);
        }),
        j = window.console;
      j && g >= b && j[a in j ? a : 'log'](i);
    };
    function a(a) {
      g = a;
    }
    d = c.bind(null, 'debug', b.DEBUG);
    e = c.bind(null, 'info', b.INFO);
    var h = c.bind(null, 'warn', b.WARNING),
      i = c.bind(null, 'error', b.ERROR);
    f.Level = b;
    f.log = c;
    f.setLevel = a;
    f.debug = d;
    f.info = e;
    f.warn = h;
    f.error = i;
  },
  66,
);
