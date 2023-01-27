__d(
  'UriNeedRawQuerySVChecker',
  ['PHPQuerySerializer', 'URIBase', 'UriNeedRawQuerySVConfig'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h,
      i = ['http', 'https'];
    function a(a) {
      if (a == null) return !1;
      a =
        a instanceof (g || (g = b('URIBase')))
          ? a
          : (g || (g = b('URIBase'))).tryParse(
              a,
              h || (h = b('PHPQuerySerializer')),
            );
      if (a == null) return !1;
      var c = a.getProtocol();
      return !i.includes(c) ? !1 : j(a.getDomain());
    }
    function j(a) {
      return (
        a != null &&
        b('UriNeedRawQuerySVConfig').uris.some(function (c) {
          return (g || (g = b('URIBase'))).isDomainSubdomainOfDomain(
            a,
            c,
            h || (h = b('PHPQuerySerializer')),
          );
        })
      );
    }
    e.exports = { isUriNeedRawQuery: a, isDomainNeedRawQuery: j };
  },
  null,
);
