__d(
  'getAbsoluteUrl',
  ['ConstUriUtils', 'FBLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (a == null || a.trim() === '#') return a;
      a =
        (a = d('ConstUriUtils').getUri(a)) == null
          ? void 0
          : (a = a.getQualifiedUri()) == null
          ? void 0
          : a.toString();
      a == null &&
        c('FBLogger')('comet_infra')
          .blameToPreviousFrame()
          .mustfix('must pass a valid href to getAbsoluteUrl');
      return a;
    }
    g['default'] = a;
  },
  98,
);
