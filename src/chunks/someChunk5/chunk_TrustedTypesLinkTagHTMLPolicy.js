__d(
  'TrustedTypesLinkTagHTMLPolicy',
  ['TrustedTypes', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      createHTML: function (a) {
        if (a === '<link />') return a;
        throw c('err')(
          "Violating Trusted Type policies. Only works for '<link />' strings.",
        );
      },
    };
    b = c('TrustedTypes').createPolicy('link-tag-html', a);
    d = b;
    g['default'] = d;
  },
  98,
);
