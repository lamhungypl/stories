__d(
  'MosUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      if (a === 0 || b === 0) return 0;
      if (a < b) {
        var c = a;
        a = b;
        b = c;
      }
      c = a / b;
      return c > 16 / 9 ? Math.round(a / (16 / 9)) : b;
    }
    function b(a, b) {
      var c = null,
        d = null,
        e = null,
        f = null;
      for (var g = 0; g < a.length; g++) {
        var h = a[g].qualityLabel;
        if (h <= b) (e = a[g].mosValue), (c = h);
        else {
          f = a[g].mosValue;
          d = h;
          break;
        }
      }
      if (c === null && d === null) return 0;
      else if (c === null && f !== null) return f;
      else if (d === null && e !== null) return e;
      else if (f !== null && e !== null && c !== null && d !== null) {
        h = e + ((b - c) * (f - e)) / (d - c);
        return h < 0 ? 0 : h > 100 ? 100 : h;
      }
      return 0;
    }
    function c(a) {
      a = a.split(',');
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c].split(':');
        if (d.length !== 2) return null;
        var e = Number(d[0]);
        d = Number(d[1]);
        if (isNaN(e) || isNaN(d)) return null;
        b.push({ qualityLabel: e, mosValue: d });
      }
      return b;
    }
    f.getQualityLabel = a;
    f.getMosValue = b;
    f.parsePlaybackMos = c;
  },
  66,
);
