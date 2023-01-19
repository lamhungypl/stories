__d(
  'IntlVariationResolver',
  ['IntlVariationHoldout', 'IntlVariationResolverImpl'],
  function (a, b, c, d, e, f, g) {
    a = {
      getNumberVariations: function (a) {
        return d('IntlVariationHoldout').disable_variation
          ? a === 1
            ? [d('IntlVariationResolverImpl').EXACTLY_ONE, '*']
            : ['*']
          : d('IntlVariationResolverImpl').getNumberVariations(a);
      },
      getGenderVariations: function (a) {
        return d('IntlVariationHoldout').disable_variation
          ? ['*']
          : d('IntlVariationResolverImpl').getGenderVariations(a);
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
