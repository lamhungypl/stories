__d(
  'goForceFullPageRedirectTo',
  ['ConstUriUtils', 'FBLogger', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var e =
        typeof a === 'string'
          ? d('ConstUriUtils').getUri(a)
          : d('ConstUriUtils').isConstUri(a);
      if (e)
        b === !0
          ? window.location.replace(e.toString())
          : (window.location = e.toString());
      else {
        b = 'Invalid URI ' + a.toString() + ' provided to goFullPageRedirectTo';
        c('FBLogger')('comet_infra').blameToPreviousFrame().mustfix(b);
      }
    }
    g['default'] = a;
  },
  98,
);
