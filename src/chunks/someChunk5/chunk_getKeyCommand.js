__d(
  'getKeyCommand',
  ['UserAgent', 'createKeyCommand', 'getCometKey'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = c('getCometKey')(a);
      if (b == null) return null;
      var d = !1;
      c('UserAgent').isPlatform('Mac OS X')
        ? a.metaKey && (d = !0)
        : a.ctrlKey && (d = !0);
      d = { alt: a.altKey, command: d, key: b, shift: a.shiftKey };
      return c('createKeyCommand')(d);
    }
    g['default'] = a;
  },
  98,
);
