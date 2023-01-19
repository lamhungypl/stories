__d(
  'createRelayChunkedResponseParser',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = '\r\n',
      i = 2;
    function a(a, b) {
      var c = 0,
        d = function (d, e, f) {
          d = d;
          b && ((d = b(d)), d == null || typeof d === 'string' || g(0, 42548));
          if (d != null) {
            var j = d.length,
              k = [];
            while (c < j) {
              var l = d.indexOf(h, c);
              if (l < 0)
                if (f) l = j;
                else break;
              l = d.slice(c, l);
              c += l.length + i;
              k.push({
                responseText: l,
                responseHeaders: e,
                isComplete: f && c >= j,
              });
            }
            k.length > 0 && a(k);
          } else
            f && a([{ responseText: '', responseHeaders: e, isComplete: !0 }]);
        };
      d.parseStreaming = !0;
      return d;
    }
    e.exports = a;
  },
  null,
);
