__d(
  'maybeDisableAnimations',
  ['cx', 'shouldDisableAnimations'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a() {
      if (c('shouldDisableAnimations')()) {
        var a;
        (a = document.documentElement) == null
          ? void 0
          : a.classList.add('_8ykn');
      }
    }
    g['default'] = a;
  },
  98,
);
