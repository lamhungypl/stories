__d(
  'TrustedTypesBootloaderDataURIScriptURLPolicy',
  ['TrustedTypes'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      createScriptURL: function (a) {
        return a;
      },
    };
    b = c('TrustedTypes').createPolicy('bootloader-data-uri', a);
    d = b;
    g['default'] = d;
  },
  98,
);
