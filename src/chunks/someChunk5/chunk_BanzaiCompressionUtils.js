__d(
  'BanzaiCompressionUtils',
  ['FBLogger', 'Promise', 'SnappyCompressUtil', 'once', 'performanceNow'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('once')(function () {
        if (a.CompressionStream == null) return !1;
        if (a.Response == null) return !1;
        try {
          new a.CompressionStream('deflate');
        } catch (a) {
          return !1;
        }
        return !0;
      }),
      i = {
        compressWad: function (a, c) {
          if (a.needs_compression !== !0) {
            delete a.needs_compression;
            return;
          }
          if (c === 'deflate') {
            i.compressWad(a, 'snappy');
            return;
          }
          var d = (g || (g = b('performanceNow')))(),
            e = JSON.stringify(a.posts),
            f;
          switch (c) {
            case 'snappy':
              f = b('SnappyCompressUtil').compressStringToSnappyBinary(e);
              break;
            case 'snappy_base64':
              f = b('SnappyCompressUtil').compressStringToSnappy(e);
              break;
            default:
              break;
          }
          f != null && f.length < e.length
            ? ((a.posts = f),
              (a.compression = c),
              (a.snappy_ms = Math.ceil((g || (g = b('performanceNow')))() - d)),
              a.snappy_ms < 0 &&
                b('FBLogger')('BanzaiCompressionUtils').warn(
                  'Expected positive snappy_ms but got %s',
                  a.snappy_ms,
                ))
            : (a.compression = '');
          delete a.needs_compression;
        },
        compressWadAsync: function (c, d) {
          if (d !== 'deflate') {
            i.compressWad(c, 'snappy');
            return b('Promise').resolve();
          }
          if (!h()) return i.compressWadAsync(c, 'snappy');
          var e = (g || (g = b('performanceNow')))(),
            f = JSON.stringify(c.posts),
            j = new Response(f).body;
          if (!j) {
            c.compression = '';
            delete c.needs_compression;
            return b('Promise').resolve();
          }
          j = j.pipeThrough(new a.CompressionStream('deflate'));
          return new Response(j)
            .arrayBuffer()
            .then(function (a) {
              a.byteLength < f.length
                ? ((c.posts = new Uint8Array(a)),
                  (c.compression = d),
                  (c.snappy_ms = Math.ceil(
                    (g || (g = b('performanceNow')))() - e,
                  )),
                  c.snappy_ms < 0 &&
                    b('FBLogger')('BanzaiCompressionUtils').warn(
                      'Expected positive snappy_ms but got %s',
                      c.snappy_ms,
                    ))
                : (c.compression = ''),
                delete c.needs_compression;
            })
            ['catch'](function () {
              (c.compression = ''), delete c.needs_compression;
            });
        },
        outOfBandsPosts: function (a) {
          var b = 0,
            c = {};
          for (var d = 0; d < a.length; d++) {
            var e = a[d],
              f = e.compression === 'snappy' || e.compression === 'deflate';
            if (f) {
              f = new Blob([e.posts], { type: 'application/octet-stream' });
              e.posts = String(b);
              c['post_' + String(b)] = f;
              b++;
            }
          }
          return c;
        },
      };
    e.exports = i;
  },
  null,
);
