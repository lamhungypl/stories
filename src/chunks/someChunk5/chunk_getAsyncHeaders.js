__d(
  'getAsyncHeaders',
  ['LSD', 'ZeroCategoryHeader', 'isFacebookURI', 'killswitch'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = {},
        d = c('isFacebookURI')(a);
      d &&
        c('ZeroCategoryHeader').value &&
        (b[c('ZeroCategoryHeader').header] = c('ZeroCategoryHeader').value);
      d = h(a);
      d && (b['X-FB-LSD'] = d);
      return b;
    }
    function h(a) {
      if (c('killswitch')('SAF_JS_FB_X_LSD_HEADER')) return null;
      return !a.toString().startsWith('/') &&
        a.getOrigin() !== document.location.origin
        ? null
        : c('LSD').token;
    }
    g['default'] = a;
  },
  98,
);