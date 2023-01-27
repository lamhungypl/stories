__d(
  'fb-error-lite',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = {
      PREVIOUS_FILE: 1,
      PREVIOUS_FRAME: 2,
      PREVIOUS_DIR: 3,
      FORCED_KEY: 4,
    };
    function a(a) {
      var b = new Error(a);
      if (b.stack === void 0)
        try {
          throw b;
        } catch (a) {}
      b.messageFormat = a;
      for (
        var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
        e < c;
        e++
      )
        d[e - 1] = arguments[e];
      b.messageParams = d.map(function (a) {
        return String(a);
      });
      b.taalOpcodes = [g.PREVIOUS_FRAME];
      return b;
    }
    b = { err: a, TAALOpcode: g };
    f['default'] = b;
  },
  66,
);
