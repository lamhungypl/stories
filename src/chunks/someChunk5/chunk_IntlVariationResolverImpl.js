__d(
  'IntlVariationResolverImpl',
  ['invariant', 'FbtHooks', 'IntlNumberType', 'IntlVariations'],
  function (a, b, c, d, e, f, g) {
    var h,
      i = '_1';
    a = {
      EXACTLY_ONE: i,
      getNumberVariations: function (a) {
        var c = b('IntlNumberType')
          .get((h || (h = b('FbtHooks'))).getViewerContext().locale)
          .getVariation(a);
        c & b('IntlVariations').BITMASK_NUMBER || g(0, 11647, c, typeof c);
        return a === 1 ? [i, c, '*'] : [c, '*'];
      },
      getGenderVariations: function (a) {
        a & b('IntlVariations').BITMASK_GENDER || g(0, 11648, a, typeof a);
        return [a, '*'];
      },
    };
    e.exports = a;
  },
  null,
);
