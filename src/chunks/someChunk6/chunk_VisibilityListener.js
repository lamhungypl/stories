__d(
  'VisibilityListener',
  ['Visibility', 'performanceNow'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = Date.now() - c('performanceNow')(),
      i = [],
      j = !1,
      k = 1e4;
    i.push({ key: h, value: c('Visibility').isHidden() });
    function l(a, b) {
      if (j || i.length > k) {
        j = !0;
        return;
      }
      i.push({ key: a + h, value: b });
    }
    c('Visibility').addListener(c('Visibility').VISIBLE, function (a) {
      l(a.changeTime, !1);
    });
    c('Visibility').addListener(c('Visibility').HIDDEN, function (a) {
      l(a.changeTime, !0);
    });
    function m(a, b) {
      if (j) return null;
      var d;
      for (a = i.length - 1; a >= 0; a--)
        if (i[a].key <= b) {
          d = i.slice(0, a + 1);
          break;
        }
      if (d === void 0) return null;
      d[d.length - 1].value !== c('Visibility').isHidden() &&
        (d[d.length] = { key: b, value: c('Visibility').isHidden() });
      return d;
    }
    function a(a, b) {
      var d = m(a, b);
      if (!d) return null;
      if (d.length < 2) return c('Visibility').isHidden() ? b - a : 0;
      var e = d.length - 1;
      b = d[e].value ? b - d[e].key : 0;
      for (--e; e > 0; e--)
        if (d[e].key > a) d[e].value && (b += d[e + 1].key - d[e].key);
        else break;
      d[e].value && (b = d[e + 1].key - a);
      return b;
    }
    function b() {
      return !0;
    }
    g.getHiddenTimings = m;
    g.getHiddenTime = a;
    g.supported = b;
  },
  99,
);
