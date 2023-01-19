__d(
  'coerceImageishSprited',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (!a || typeof a !== 'object' || !a.sprited) return null;
      return a.sprited === 1
        ? {
            type: 'css',
            className: a.spriteMapCssClass + ' ' + a.spriteCssClass,
            identifier: a.loggingID,
          }
        : {
            type: 'cssless',
            style: {
              backgroundImage: "url('" + a.spi + "')",
              backgroundPosition: a.p,
              backgroundSize: a.sz,
              width: a.w + 'px',
              height: a.h + 'px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
            },
            identifier: a.loggingID,
          };
    }
    f['default'] = a;
  },
  66,
);
