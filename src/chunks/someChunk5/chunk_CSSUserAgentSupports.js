__d(
  'CSSUserAgentSupports',
  ['UserAgent'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      webkitLineClamp: function () {
        return !(
          c('UserAgent').isBrowser('IE') ||
          c('UserAgent').isBrowser('Edge < 17') ||
          c('UserAgent').isBrowser('Firefox < 68')
        );
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
