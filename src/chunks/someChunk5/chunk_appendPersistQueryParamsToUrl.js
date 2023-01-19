__d(
  'appendPersistQueryParamsToUrl',
  ['CometPersistQueryParams', 'ConstUriUtils', 'isRelativeURL'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      var c;
      return (b =
        (c = d('ConstUriUtils').getUri(a)) == null
          ? void 0
          : (c = c.addQueryParams(new Map(Object.entries(b)))) == null
          ? void 0
          : c.toString()) != null
        ? b
        : a;
    }
    function a(a) {
      var b = d('ConstUriUtils').getUri(a);
      if (b == null) return a;
      if (c('isRelativeURL')(a) || b.getDomain() === '')
        return h(a, c('CometPersistQueryParams').relative);
      b = b.getDomain().split('.').slice(-2).join('.');
      return c('CometPersistQueryParams').domain[b] != null
        ? h(a, c('CometPersistQueryParams').domain[b])
        : a;
    }
    g['default'] = a;
  },
  98,
);
