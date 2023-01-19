__d(
  'handleCheckpointRedirect',
  ['ConstUriUtils', 'goForceFullPageRedirectTo'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      a =
        (a = d('ConstUriUtils').getUri(a)) == null
          ? void 0
          : a.addQueryParam('next', location.toString());
      c('goForceFullPageRedirectTo')((a = a) != null ? a : '/');
    }
    g['default'] = a;
  },
  98,
);
