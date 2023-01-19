__d(
  'SnappyCompressUtil',
  ['SnappyCompress'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = {
      compressUint8ArrayToSnappy: function (c) {
        if (c == null) return null;
        var d = null;
        try {
          d = b('SnappyCompress').compress(c);
        } catch (a) {
          return null;
        }
        c = '';
        for (var e = 0; e < d.length; e++) c += String.fromCharCode(d[e]);
        return a.btoa(c);
      },
      compressStringToSnappy: function (b) {
        if (a.Uint8Array === void 0 || a.btoa === void 0) return null;
        var c = new a.Uint8Array(b.length);
        for (var d = 0; d < b.length; d++) {
          var e = b.charCodeAt(d);
          if (e > 127) return null;
          c[d] = e;
        }
        return g.compressUint8ArrayToSnappy(c);
      },
      compressStringToSnappyBinary: function (c) {
        if (a.Uint8Array === void 0) return null;
        var d = null;
        if (a.TextEncoder !== void 0) d = new TextEncoder().encode(c);
        else {
          d = new a.Uint8Array(c.length);
          for (var e = 0; e < c.length; e++) {
            var f = c.charCodeAt(e);
            if (f > 127) return null;
            d[e] = f;
          }
        }
        f = null;
        try {
          f = b('SnappyCompress').compress(d);
        } catch (a) {
          return null;
        }
        return f;
      },
    };
    e.exports = g;
  },
  null,
);
