__d(
  'isLinkshimURI',
  ['isBulletinDotComURI', 'isFacebookURI', 'isMessengerDotComURI'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.getPath();
      return (b === '/l.php' ||
        b.indexOf('/si/ajax/l/') === 0 ||
        b.indexOf('/l/') === 0 ||
        b.indexOf('l/') === 0) &&
        (c('isFacebookURI')(a) ||
          c('isMessengerDotComURI')(a) ||
          c('isBulletinDotComURI')(a))
        ? !0
        : !1;
    }
    g['default'] = a;
  },
  98,
);
