__d(
  'LynxGeneration',
  ['LinkshimHandlerConfig', 'URI'],
  function (a, b, c, d, e, f, g) {
    var h = new (c('URI'))(c('LinkshimHandlerConfig').linkshim_path).setDomain(
        c('LinkshimHandlerConfig').linkshim_host,
      ),
      i = {
        getShimURI: function () {
          return new (c('URI'))(h);
        },
        getLynxURIProtocol: function (a) {
          return c('LinkshimHandlerConfig').always_use_https
            ? 'https'
            : a.getProtocol() === 'http'
            ? 'http'
            : 'https';
        },
        getShimmedHref: function (a, b, d) {
          var e;
          a = new (c('URI'))(a);
          var f = i.getLynxURIProtocol(a);
          a = i
            .getShimURI()
            .setQueryData(
              ((e = {}),
              (e[c('LinkshimHandlerConfig').linkshim_url_param] = a.toString()),
              (e[c('LinkshimHandlerConfig').linkshim_enc_param] = b),
              e),
            )
            .setProtocol(f);
          b = d == null ? void 0 : d.trackingNodes;
          e = d == null ? void 0 : d.callbacks;
          b && b.length && (a = a.addQueryData('__tn__', b.join('')));
          e && e.length && (a = a.addQueryData('c', e));
          return a;
        },
      };
    a = i;
    g['default'] = a;
  },
  98,
);
