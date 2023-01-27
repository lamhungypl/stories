__d(
  'isSocialPlugin',
  ['CSSCore'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      return !!document.body && d('CSSCore').hasClass(document.body, 'plugin');
    }
    g['default'] = a;
  },
  98,
);
