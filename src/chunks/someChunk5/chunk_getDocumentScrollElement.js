__d(
  'getDocumentScrollElement',
  ['FlowMigrationUtilsForLegacyFiles'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h =
      typeof navigator !== 'undefined' &&
      navigator.userAgent.indexOf('AppleWebKit') > -1;
    function a(a) {
      a = a || document;
      if (a.scrollingElement) return a.scrollingElement;
      a = !h && a.compatMode === 'CSS1Compat' ? a.documentElement : a.body;
      a ||
        d('FlowMigrationUtilsForLegacyFiles').invariantViolation(
          'null result in getDocumentScrollElement',
        );
      return a;
    }
    g['default'] = a;
  },
  98,
);
