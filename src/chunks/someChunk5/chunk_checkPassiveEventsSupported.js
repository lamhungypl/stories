__d(
  'checkPassiveEventsSupported',
  ['gkx'],
  function (a, b, c, d, e, f, g) {
    a = !!(
      typeof window !== 'undefined' &&
      typeof window.document !== 'undefined' &&
      typeof window.document.createElement !== 'undefined'
    );
    b = !1;
    if (a && !c('gkx')('1703328'))
      try {
        d = {};
        Object.defineProperty(d, 'passive', {
          get: function () {
            b = !0;
          },
        });
        window.addEventListener('test', d, d);
        window.removeEventListener('test', d, d);
      } catch (a) {
        b = !1;
      }
    e = b;
    g['default'] = e;
  },
  98,
);
