__d(
  'createKeyCommand',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = ['alt', 'command', 'shift'];
    function a(a) {
      return g
        .filter(function (b) {
          return (a == null ? void 0 : a[b]) === !0;
        })
        .concat(a == null ? void 0 : a.key)
        .join(' ');
    }
    f['default'] = a;
  },
  66,
);
