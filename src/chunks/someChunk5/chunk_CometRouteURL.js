__d(
  'CometRouteURL',
  [
    'ConstUriUtils',
    'absoluteToRelative',
    'memoizeStringOnly',
    'useCurrentRoute',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('memoizeStringOnly')(function (a) {
        a = d('ConstUriUtils').getUri(a);
        return a != null ? a.getPath() : null;
      }),
      i = c('memoizeStringOnly')(function (a) {
        a = d('ConstUriUtils').getUri(a);
        return a != null ? Object.fromEntries(a.getQueryParams()) : null;
      });
    function j() {
      var a;
      if (window.location.href == null) return null;
      a =
        (a = d('ConstUriUtils').getUri(window.location.href)) == null
          ? void 0
          : a.toString();
      return a != null ? c('absoluteToRelative')(a) : null;
    }
    function a() {
      var a = j();
      return a != null ? i(a) : null;
    }
    function k() {
      var a = c('useCurrentRoute')();
      if (a != null) {
        var b;
        return (b = a.canonicalUrl) != null ? b : a.url;
      } else {
        return (b = j()) != null ? b : '';
      }
    }
    function b() {
      var a = k();
      return (a = h(a)) != null ? a : '';
    }
    function e() {
      var a = k();
      return (a = i(a)) != null ? a : {};
    }
    g.getWindowURL = j;
    g.getWindowURLParams = a;
    g.useRouteURL = k;
    g.useRouteURLPath = b;
    g.useRouteURLParams = e;
  },
  98,
);
