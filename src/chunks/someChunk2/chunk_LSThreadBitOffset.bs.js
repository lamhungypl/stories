__d(
  'LSThreadBitOffset.bs',
  ['LSBitFlag.bs', 'MWCMThreadTypes.bs', 'bs_caml', 'bs_caml_int64'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      if (d('MWCMThreadTypes.bs').isUnjoinedCMThread(b.threadType)) return !1;
      if (c('bs_caml').i64_ge(a, [0, 128])) {
        var e = c('bs_caml_int64').sub(a, [0, 128]);
        e = c('bs_caml_int64').lsl_(
          c('bs_caml_int64').one,
          c('bs_caml_int64').to_int32(e),
        );
        return d('LSBitFlag.bs').has(e, b.capabilities3);
      }
      if (c('bs_caml').i64_ge(a, [0, 64])) {
        e = c('bs_caml_int64').sub(a, [0, 64]);
        e = c('bs_caml_int64').lsl_(
          c('bs_caml_int64').one,
          c('bs_caml_int64').to_int32(e),
        );
        return d('LSBitFlag.bs').has(e, b.capabilities2);
      }
      e = c('bs_caml_int64').lsl_(
        c('bs_caml_int64').one,
        c('bs_caml_int64').to_int32(a),
      );
      return d('LSBitFlag.bs').has(e, b.capabilities);
    }
    function b(a, b, e, f) {
      return a.reduce(
        function (e, f) {
          var b = e[2],
            a = e[1];
          e = e[0];
          if (c('bs_caml').i64_ge(f, [0, 128])) {
            var g = c('bs_caml_int64').sub(f, [0, 128]);
            g = c('bs_caml_int64').lsl_(
              c('bs_caml_int64').one,
              c('bs_caml_int64').to_int32(g),
            );
            return [e, a, d('LSBitFlag.bs').set(g, b)];
          }
          if (c('bs_caml').i64_ge(f, [0, 64])) {
            g = c('bs_caml_int64').sub(f, [0, 64]);
            g = c('bs_caml_int64').lsl_(
              c('bs_caml_int64').one,
              c('bs_caml_int64').to_int32(g),
            );
            return [e, d('LSBitFlag.bs').set(g, a), b];
          }
          g = c('bs_caml_int64').lsl_(
            c('bs_caml_int64').one,
            c('bs_caml_int64').to_int32(f),
          );
          return [d('LSBitFlag.bs').set(g, e), a, b];
        },
        [b, e, f],
      );
    }
    function e(a, b, e, f) {
      return a.reduce(
        function (e, f) {
          var b = e[2],
            a = e[1];
          e = e[0];
          if (c('bs_caml').i64_ge(f, [0, 128])) {
            var g = c('bs_caml_int64').sub(f, [0, 128]);
            g = c('bs_caml_int64').lsl_(
              c('bs_caml_int64').one,
              c('bs_caml_int64').to_int32(g),
            );
            return [e, a, d('LSBitFlag.bs').clear(g, b)];
          }
          if (c('bs_caml').i64_ge(f, [0, 64])) {
            g = c('bs_caml_int64').sub(f, [0, 64]);
            g = c('bs_caml_int64').lsl_(
              c('bs_caml_int64').one,
              c('bs_caml_int64').to_int32(g),
            );
            return [e, d('LSBitFlag.bs').clear(g, a), b];
          }
          g = c('bs_caml_int64').lsl_(
            c('bs_caml_int64').one,
            c('bs_caml_int64').to_int32(f),
          );
          return [d('LSBitFlag.bs').clear(g, e), a, b];
        },
        [b, e, f],
      );
    }
    f = a;
    a = b;
    b = e;
    g.empty = c('bs_caml_int64').zero;
    g.has = f;
    g.set = a;
    g.clear = b;
  },
  98,
);
