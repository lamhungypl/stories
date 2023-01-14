__d(
  'getFbtResult',
  [
    'FbtResult',
    'FbtResultGK',
    'InlineFbtResult',
    'getUnwrappedFbt',
    'gkx',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    if (c('gkx')('708253') && c('FbtResultGK').inlineMode === 'TRANSLATION') {
      c('recoverableViolation')(
        'TransAppInlineMode=TRANSLATION should not happen on Comet yet. ' +
          ('[inlineMode=' +
            ((b = c('FbtResultGK').inlineMode) != null ? b : '') +
            ']') +
          ('[runtime_site_is_comet=' + String(c('gkx')('708253')) + ']'),
        'internationalization',
      );
    }
    function a(a) {
      var b = c('getUnwrappedFbt')(a);
      if (b != null) return b;
      b = a.contents;
      var d = a.patternString,
        e = a.patternHash;
      return c('FbtResultGK').inlineMode != null &&
        c('FbtResultGK').inlineMode !== 'NO_INLINE'
        ? new (c('InlineFbtResult'))(b, c('FbtResultGK').inlineMode, d, e)
        : c('FbtResult').get(a);
    }
    g['default'] = a;
  },
  98,
);
