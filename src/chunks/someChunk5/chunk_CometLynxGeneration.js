__d(
  'CometLynxGeneration',
  ['ConstUriUtils', 'LinkshimHandlerConfig', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = c('LinkshimHandlerConfig').current_domain === 'oculus.com';
    var h = 'c',
      i = c('gkx')('1902661') || b ? 'e' : 'h',
      j = 'u',
      k = '__tn__';
    e = '/l.php';
    c('gkx')('1902661') && (e = '');
    b && (e = '/lynx/');
    var l = d('ConstUriUtils').getUri(e);
    l != null && (l = l.setDomain(c('LinkshimHandlerConfig').linkshim_host));
    function m(a) {
      return c('LinkshimHandlerConfig').always_use_https
        ? 'https'
        : a.getProtocol() === 'http'
        ? 'http'
        : 'https';
    }
    function n() {
      return l;
    }
    function a(a, b, c, d) {
      var e = m(a),
        f = n();
      f != null &&
        (f = f.addQueryParams(
          new Map([
            [j, d === !0 ? a.toStringPreserveQuery() : a.toString()],
            [i, b],
          ]),
        ));
      f != null && (f = f.setProtocol(e));
      d = c == null ? void 0 : c.trackingNodes;
      b = c == null ? void 0 : c.callbacks;
      d && d.length && f != null && (f = f.addQueryParam(k, d.join('')));
      b && b.length && f != null && (f = f.addQueryParam(h, b));
      return f != null ? f : a;
    }
    g.getLynxURIProtocol = m;
    g.getShimURI = n;
    g.getShimmedHref = a;
  },
  98,
);
