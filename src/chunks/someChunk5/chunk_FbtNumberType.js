__d(
  'FbtNumberType',
  [
    'FBLogger',
    'IntlNumberTypeConfig',
    'IntlVariations',
    'TrustedTypesNoOpPolicy_DO_NOT_USE',
    'TrustedTypesUnsafeFunctionScriptPolicy_DO_NOT_USE',
  ],
  function (a, b, c, d, e, f, g) {
    var h;
    try {
      h = d(
        'TrustedTypesUnsafeFunctionScriptPolicy_DO_NOT_USE',
      ).createTrustedFunction(
        c('TrustedTypesNoOpPolicy_DO_NOT_USE').createScript('IntlVariations'),
        c('TrustedTypesNoOpPolicy_DO_NOT_USE').createScript(
          '"use strict"; return (function(n) {' +
            c('IntlNumberTypeConfig').impl +
            '});',
        ),
      )(c('IntlVariations'));
    } catch (a) {
      throw c('FBLogger')('i18n.error', 'FbtNumberType')
        .catching(a)
        .mustfixThrow(
          'Unable to create variation number getter. Error=`%s`, IntlNumberTypeConfig=`%s`, IntlVariations=`%s`',
          a.message || a,
          JSON.stringify(c('IntlNumberTypeConfig')),
          JSON.stringify(c('IntlVariations')),
        );
    }
    a = { getVariation: h };
    b = a;
    g['default'] = b;
  },
  98,
);
