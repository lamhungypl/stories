__d(
  'storiesDominantColorPicker',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 8;
    function h() {
      return { blue: 0, clusterSize: 0, green: 0, red: 0 };
    }
    function i(a, b, c, d) {
      return (
        (a.red - b) * (a.red - b) +
        (a.green - c) * (a.green - c) +
        (a.blue - d) * (a.blue - d)
      );
    }
    function j() {
      var a = 0,
        b = 255 / 4,
        c = new Array(g);
      for (var d = 0; d < 2; d++)
        for (var e = 0; e < 2; e++)
          for (var f = 0; f < 2; f++) {
            var h = {
              blue: b * f + b / 2,
              clusterSize: 0,
              green: b * e + b / 2,
              red: b * d + b / 2,
            };
            c[a] = h;
            a++;
          }
      return c;
    }
    function k(a, b, c) {
      var d = !1,
        e = a.length / 4;
      for (var f = 0, j = 0; f < e; f++, j += 4) {
        var k = a[j],
          l = a[j + 1],
          m = a[j + 2],
          n = h(),
          o = Infinity,
          p = 0;
        for (var q = 0; q < g; q++) {
          var r = i(b[q], k, l, m);
          r < o && ((o = r), (p = q), (n = b[q]));
        }
        n.clusterSize++;
        c[f] !== p && ((c[f] = p), (d = !0));
      }
      return d;
    }
    function l(a, b, c) {
      var d = new Array(g),
        e = new Array(g),
        f = new Array(g);
      d.fill(0);
      e.fill(0);
      f.fill(0);
      var h = a.length / 4;
      for (var i = 0, j = 0; i < h; i++, j += 4) {
        var k = a[j],
          l = a[j + 1],
          m = a[j + 2],
          n = c[i];
        d[n] += k;
        e[n] += l;
        f[n] += m;
      }
      for (k = 0; k < g; k++) {
        l = b[k];
        l.clusterSize > 0 &&
          ((l.red = d[k] / l.clusterSize),
          (l.green = e[k] / l.clusterSize),
          (l.blue = f[k] / l.clusterSize),
          (l.clusterSize = 0));
      }
    }
    function a(a) {
      var b = a.length,
        c = j();
      b = new Array(b);
      b.fill(-1);
      while (k(a, c, b)) l(a, c, b);
      return c.sort(function (a, b) {
        return b.clusterSize - a.clusterSize;
      });
    }
    f['default'] = a;
  },
  66,
);
