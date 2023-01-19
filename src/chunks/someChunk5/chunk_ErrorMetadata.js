__d(
  'ErrorMetadata',
  ['fb-error'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      b.addGlobalMetadata = function (b, c, d) {
        a.addGlobalMetadata.call(this, b, c, d);
      };
      return b;
    })(c('fb-error').ErrorMetadata);
    g['default'] = a;
  },
  98,
);
