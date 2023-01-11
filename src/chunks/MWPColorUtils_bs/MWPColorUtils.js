function h(a) {
  const numberToInt32 = c('bs_caml_int64').to_int32(a);
  const b = (numberToInt32 & 16711680) >>> 16;
  const d = (numberToInt32 & 65280) >>> 8;
  const a2 = numberToInt32 & 255;
  const e = (num) => {
    return num.toString(16).padStart(2, '0');
  };
  return `#${e(b) + (e(d) + e(a2))}`;
}
function a(a, b, d) {
  const d = a
    .sort(({ gradientIndex }, { gradientIndex }) => {
      return (
        (c('bs_caml_int64').to_int32(gradientIndex) -
          c('bs_caml_int64').to_int32(gradientIndex)) |
        0
      );
    })
    .map(({ color }) => {
      return h(color);
    });
  const length = d.length;
  if (length !== 1) {
    if (length !== 0) {
      const someCheck = c('bs_belt_Option').isSome(b);
      const styles = [];
      if (b !== void 0) {
        styles.push(
          `${d[0]} calc(100vh - ${String(b.totalHeight)}px + ${String(
            b.headerHeight,
          )}px)`,
        );
      }
      for (
        var f = someCheck ? 1 : 0,
          someLength = (d.length - (someCheck ? 2 : 1)) | 0;
        f <= someLength;
        ++f
      ) {
        styles.push(d[f]);
      }

      if (b !== void 0) {
        styles.push(
          `${d[(d.length - 1) | 0]} calc(100% - ${String(b.footerHeight)}px)`,
        ),
          styles.push(d[(d.length - 1) | 0]);
      }

      const styleString = styles.join(', ');
      return `linear-gradient(${styleString})`;
    }
    c('recoverableViolation')(
      'Not enough colors for a gradient',
      'messenger_comet',
    );
    return '';
  }
  c('recoverableViolation')(
    'Not enough colors for a gradient',
    'messenger_comet',
  );
  return '';
}
function MWPColorUtils(a, b, c, d, e, f, g) {
  b = h;
  d = a;
  g.int64ToHex = b;
  g.gradient = d;
}
