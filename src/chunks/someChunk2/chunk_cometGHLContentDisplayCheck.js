__d(
  'cometGHLContentDisplayCheck',
  ['cr:1824699'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = !0,
      i = !1;
    function a(a) {
      var c = document.body;
      c = c == null || !c.contains(a);
      b('cr:1824699') && b('cr:1824699').flap(a, { notMounted: c });
      if (c) return h;
      c = a.offsetHeight === 0;
      b('cr:1824699') && b('cr:1824699').flap(a, { zeroHeight: c });
      if (c) return i;
      c = Array.from(a.getElementsByTagName('img'));
      var d = c.length === 0;
      b('cr:1824699') && b('cr:1824699').flap(a, { noImages: d });
      if (c.length === 0) return h;
      d = c.find(j) != null;
      b('cr:1824699') && b('cr:1824699').flap(a, { hasImageWithSize: d });
      if (d) return h;
      c = Array.from(a.getElementsByTagName('svg'));
      if (c.find(k) != null) return h;
      d = Array.from(a.getElementsByTagName('i'));
      if (d.find(k) != null) return h;
      b('cr:1824699') && b('cr:1824699').flap(a, { noSuccessfulChecks: !0 });
      return i;
    }
    var j = function (a) {
        return a.offsetHeight + a.offsetWidth > 0;
      },
      k = function (a) {
        a = a.getBoundingClientRect();
        return a.height * a.width > 0;
      };
    g['default'] = a;
  },
  98,
);
