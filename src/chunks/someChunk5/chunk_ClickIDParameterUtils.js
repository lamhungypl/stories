__d(
  'ClickIDParameterUtils',
  [
    'URI',
    'compactArray',
    'first',
    'isCdnURI',
    'isClickIDBlacklistSVDomainURI',
    'isFacebookSVDomainURI',
    'isFacebookURI',
    'isFbDotComURI',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Set(['http', 'https']);
    function i(a) {
      return h.has(a.getProtocol());
    }
    var j = 'fbclid';
    b = 'doubleclick.net';
    var k =
      ((d = {}),
      (d[b] = [
        {
          extractor: function (a) {
            a = a.getQueryString();
            return a != null && a.startsWith('http') ? new (c('URI'))(a) : null;
          },
          injector: function (a, b, c) {
            b = b.addQueryData(j, c);
            return a.setQueryString(b.toString());
          },
        },
      ]),
      d);
    function l(a) {
      var b = a.getProtocol(),
        c = a.getDomain();
      a = a.getPort();
      return (
        (b !== null && b.length > 0) ||
        (c !== null && c.length > 0) ||
        a !== null
      );
    }
    function m(a) {
      var b = c('first')(
        Object.keys(k).filter(function (b) {
          return a.getDomain().endsWith(b);
        }),
      );
      b = b != null ? k[b] : null;
      return b == null
        ? null
        : c('first')(
            c('compactArray')(
              b.map(function (b) {
                var c = b.extractor(a);
                return c == null ? null : { injector: b.injector, uri: c };
              }),
            ),
          );
    }
    function n(a) {
      return (
        !c('isFacebookURI')(a) &&
        !c('isFacebookSVDomainURI')(a) &&
        !c('isCdnURI')(a) &&
        !c('isFbDotComURI')(a) &&
        l(a) &&
        i(a) &&
        !o(a)
      );
    }
    function o(a) {
      var b = c('isClickIDBlacklistSVDomainURI')(a);
      if (b) return !0;
      b = m(a);
      return b != null ? o(b.uri) : !1;
    }
    function p(a, b) {
      var c = m(a);
      return c != null ? c.injector(a, c.uri, b) : a.addQueryData(j, b);
    }
    function a(a, b) {
      return n(a) ? p(a, b) : a;
    }
    g.QUERY_PARAM = j;
    g.appendClickIDQueryParam = a;
  },
  98,
);
