__d(
  'CometClickIDParameterUtils',
  [
    'ConstUriUtils',
    'isCdnURI',
    'isClickIDBlacklistSVDomainURI',
    'isFacebookSVDomainURI',
    'isFacebookURI',
    'isFbDotComURI',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'fbclid';
    b = 'doubleclick.net';
    var i =
      ((e = {}),
      (e[b] = [
        {
          extractor: function (a) {
            a = a.getQueryString();
            return a != null && a.startsWith('http')
              ? d('ConstUriUtils').getUri(a)
              : null;
          },
          injector: function (a, b, c) {
            b = b.addQueryParam(h, c);
            if (b != null) {
              c = new Map();
              c.set(b.toString(), null);
              b = a.replaceQueryParams(c);
              if (b != null) return b;
            }
            return a;
          },
        },
      ]),
      e);
    function j(a) {
      return a.getOrigin() !== '://';
    }
    function k(a) {
      var b = Object.keys(i).filter(function (b) {
        return a.getDomain().endsWith(b);
      });
      b = b[0] || null;
      b = b != null ? i[b] : null;
      if (b == null) return null;
      b = b
        .map(function (b) {
          var c = b.extractor(a);
          return c == null ? null : { injector: b.injector, uri: c };
        })
        .filter(function (a) {
          return a != null;
        });
      return b[0] || null;
    }
    function l(a) {
      var b = c('isClickIDBlacklistSVDomainURI')(a);
      if (b) return !0;
      b = k(a);
      return b != null ? l(b.uri) : !1;
    }
    function m(a) {
      return (
        !c('isFacebookURI')(a) &&
        !c('isFacebookSVDomainURI')(a) &&
        !c('isCdnURI')(a) &&
        !c('isFbDotComURI')(a) &&
        j(a) &&
        ['http', 'https'].includes(a.getProtocol()) &&
        !l(a)
      );
    }
    function n(a, b) {
      var c = k(a);
      if (c != null) return c.injector(a, c.uri, b);
      c = a.addQueryParam(h, b);
      return c != null ? c : a;
    }
    function a(a, b) {
      return m(a) ? n(a, b) : a;
    }
    g.appendClickIDQueryParam = a;
  },
  98,
);
