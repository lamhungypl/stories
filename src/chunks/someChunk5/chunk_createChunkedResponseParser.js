__d(
  'createChunkedResponseParser',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = '\r\n',
      j = 2;
    function a(a, b) {
      var c = 0,
        d = function (d, e, f) {
          b && ((d = b(d)), d == null || typeof d === 'string' || h(0, 4071));
          if (d) {
            var g = d.length;
            while (c < g) {
              var k = d.indexOf(i, c);
              if (k < 0)
                if (f) k = g;
                else break;
              k = d.slice(c, k);
              c += k.length + j;
              a(k, e, f && c >= g);
            }
          } else f && a('', e, !0);
        };
      d.parseStreaming = !0;
      return d;
    }
    g['default'] = a;
  },
  98,
);
