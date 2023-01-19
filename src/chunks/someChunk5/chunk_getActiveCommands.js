__d(
  'getActiveCommands',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c) {
      var d = new Map();
      function e(a) {
        a.forEach(function (a, b) {
          var c = d.get(b);
          if (c) {
            var e = c.every(function (a) {
              return a.shouldStopPropagation === !1;
            });
            e && c.push(a);
          } else d.set(b, [a]);
        });
      }
      a = a;
      while (a != null) {
        var f = a && a.getCommandMap();
        e(f);
        a = a && a.getParent();
      }
      b && e(b.getCommandMap());
      c && e(c.getCommandMap());
      return d;
    }
    f['default'] = a;
  },
  66,
);
