__d(
  'LSCommunityBitOffset.bs',
  ['LSBitFlag.bs', 'bs_caml', 'bs_caml_int64'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
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
    b = a;
    g.has = b;
  },
  98,
);
