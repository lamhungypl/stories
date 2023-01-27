__d(
  'ServerJSDefine',
  ['BitMap', 'replaceTransportMarkers'],
  function (a, b, c, d, e, f, g) {
    var h = 2,
      i = 8,
      j = new (c('BitMap'))(),
      k = {
        getLoadedModuleHash: function () {
          return j.toCompressedString();
        },
        getModuleNameAndHash: function (a) {
          a = a.split('@');
          return { hash: a[1], name: a[0] };
        },
        handleDefine: function (a, b, d, e, g) {
          e >= 0 && j.set(e),
            define(
              a,
              b,
              function (h, i, j, k, b) {
                h = { data: d };
                c('replaceTransportMarkers')({ relativeTo: g }, h);
                if (e === -42) {
                  i = d != null && typeof d === 'object' && d.__throw8367__;
                  throw new Error(a + ': ' + (typeof i === 'string' ? i : ''));
                }
                b.exports = h.data;
              },
              h | i,
            );
        },
        handleDefines: function (a, b) {
          a.forEach(function (a) {
            var c;
            b != null ? (c = [].concat(a, [b])) : (c = [].concat(a, [null]));
            k.handleDefine.apply(null, c);
          });
        },
      };
    a = k;
    g['default'] = a;
  },
  98,
);
