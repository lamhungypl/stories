__d(
  'TrustedTypesFacebookURIScriptURLPolicy',
  [
    'TrustedTypes',
    'URI',
    'err',
    'isCdnURI',
    'isExternalFBURI',
    'isFacebookDotNetURI',
    'isFacebookURI',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      createScriptURL: function (a) {
        var b = c('URI').tryParseURI(a);
        if (
          b != null &&
          (c('isFacebookURI')(b) ||
            c('isCdnURI')(b) ||
            c('isFacebookDotNetURI')(b) ||
            c('isExternalFBURI')(b))
        )
          return a;
        throw c('err')(
          'Violated policy TrustedTypesFacebookURIScriptURLPolicy: ' +
            a +
            ' is not a FB URI.',
        );
      },
    };
    b = c('TrustedTypes').createPolicy('fb-uri-script-urls', a);
    d = b;
    g['default'] = d;
  },
  98,
);
