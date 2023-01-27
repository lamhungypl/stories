__d(
  'CometResourceScheduler',
  ['Bootloader', 'ErrorGuard'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Set(),
      i = new Set(),
      j = [];
    function a(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        i.has(d) || (i.add(d), b.push(d));
      }
      b.length && k(b);
    }
    function b(a) {
      j.push(a), h.size === 0 && l();
    }
    function k(a) {
      a.forEach(function (a) {
        return h.add(a);
      }),
        c('Bootloader').loadResources(a, {
          onAll: function () {
            a.forEach(function (a) {
              return h['delete'](a);
            });
            if (h.size) return;
            l();
          },
        });
    }
    function l() {
      var a = j;
      j = [];
      a.forEach(function (a) {
        return c('ErrorGuard').applyWithGuard(a, null, []);
      });
    }
    g.registerHighPriHashes = a;
    g.onHighPriComplete = b;
  },
  98,
);
