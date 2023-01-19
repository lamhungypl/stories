__d(
  'isCometRouterUrl',
  [
    'ConstUriUtils',
    'Env',
    'isFacebookURI',
    'isLinkshimURI',
    'memoizeStringOnly',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return (
          a === '/l.php' ||
          a.startsWith('/si/ajax/l/') ||
          a.startsWith('/l/') ||
          a.startsWith('l/')
        );
      },
      i = function (a) {
        var b = a.getDomain();
        return b == null ? !1 : c('isFacebookURI')(a) && b.startsWith('www');
      },
      j = /^(\/\w)/;
    a = c('memoizeStringOnly')(function (a) {
      if (a == null || a.startsWith('#') || !d('ConstUriUtils').isValidUri(a))
        return !1;
      var b = null,
        e = !1;
      b = d('ConstUriUtils').getUri(a);
      if (b != null) {
        if (!h(b.getPath()) && j.test(a)) return !0;
        a = d('ConstUriUtils').getUri(window.location.href);
        e = (a && b.isSameOriginOrRelativePath_DEPRECATED(a)) || !1;
      }
      return b != null
        ? !c('isLinkshimURI')(b) &&
            (e ||
              (Boolean(c('Env').isCometSubdomain) && i(b)) ||
              (Boolean(c('Env').isStoryGallery) && i(b)) ||
              (Boolean(c('Env').isAdsPreviewTool) && i(b)))
        : !1;
    });
    g['default'] = a;
  },
  98,
);
