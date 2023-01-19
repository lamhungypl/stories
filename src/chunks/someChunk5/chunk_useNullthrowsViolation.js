__d(
  'useNullthrowsViolation',
  ['err', 'fb-error', 'useCometErrorProject'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      b === void 0 && (b = 'Unexpected null value');
      var d = c('useCometErrorProject')();
      if (d == null)
        throw c('err')(
          'useNullthrowsViolation can only be used if CometErrorProjectContext\n        has a provider in your component tree',
        );
      if (a != null) return a;
      a = c('err')(b);
      a.project = d;
      (b = a.taalOpcodes) == null
        ? void 0
        : b.push(c('fb-error').TAALOpcode.PREVIOUS_FRAME);
      throw a;
    }
    g['default'] = a;
  },
  98,
);
