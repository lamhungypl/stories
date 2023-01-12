__d(
  'intlSummarizeNumber',
  [
    'FbtNumberType',
    'IntlCompactDecimalNumberFormatConfig',
    'IntlVariations',
    'intlNumUtils',
  ],
  function (a, b, c, d, e, f, g) {
    var h = 3,
      i = 14,
      j = { ROUND: 'ROUND', TRUNCATE: 'TRUNCATE' },
      k = { SHORT: 'SHORT', LONG: 'LONG' };
    function a(a, b, d, e) {
      d === void 0 && (d = k.SHORT);
      e === void 0 && (e = j.ROUND);
      d = c('IntlCompactDecimalNumberFormatConfig')[
        d === k.SHORT ? 'short_patterns' : 'long_patterns'
      ];
      var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
      f > i && (f = i);
      var g = l(a, f, b, e, d),
        m = g[0],
        n = g[1];
      g = g[2];
      if (g) {
        f += 1;
        g = l(a, f, b, e, d);
        m = g[0];
        n = g[1];
        g[2];
      }
      e =
        c('FbtNumberType').getVariation(m) || c('IntlVariations').NUMBER_OTHER;
      g = f.toString();
      g = d == null ? void 0 : (d = d[g]) == null ? void 0 : d[e.toString()];
      if (
        !g ||
        f < h ||
        (g.positive_prefix_pattern === '' && g.positive_suffix_pattern === '')
      ) {
        d = b === void 0 ? 0 : b;
        return c('intlNumUtils').formatNumberWithThousandDelimiters(a, d);
      }
      return g && g.min_integer_digits === 0 && m === 1
        ? g.positive_prefix_pattern + g.positive_suffix_pattern
        : ((g && g.positive_prefix_pattern) || '') +
            c('intlNumUtils').formatNumberWithThousandDelimiters(m, n) +
            ((g && g.positive_suffix_pattern) || '');
    }
    function l(a, b, d, e, f) {
      var g = b.toString();
      g =
        f == null
          ? void 0
          : (f = f[g]) == null
          ? void 0
          : f[c('IntlVariations').NUMBER_OTHER.toString()];
      f = (g && g.min_integer_digits) || b + 1;
      var h = b - f + 1;
      h = Math.abs(a) / Math.pow(10, h);
      var k = d != null;
      d = k ? d : g && g.min_fraction_digits;
      d == null && (d = b > 2 ? 1 : 0);
      g =
        e === j.TRUNCATE
          ? c('intlNumUtils').truncateLongNumber(h.toString(), d)
          : h.toFixed(d);
      e = parseFloat(g) * (a < 0 ? -1 : 1);
      return [
        e,
        e % 1 === 0 && !k ? 0 : d,
        g.length > f + (d > 0 ? d + 1 : 0) + (h >= 0 ? 0 : 1) && b < i,
      ];
    }
    g['default'] = a;
  },
  98,
);
