__d(
  'isCometAltpayJsSdkIframeAllowedDomain',
  ['CometAltpayJsSdkIframeAllowedDomains', 'URI'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = Object.freeze(c('CometAltpayJsSdkIframeAllowedDomains'));
    var h = Object.freeze(b.allowed_domains);
    function a() {
      var a = new (c('URI'))(window.location.href);
      if (h == null || h.length <= 0) return !1;
      var b = h.some(function (b) {
        b = new (c('URI'))(b);
        return b == null ? !1 : a.isSameOrigin(b);
      });
      return b ? !0 : !1;
    }
    g['default'] = a;
  },
  98,
);
