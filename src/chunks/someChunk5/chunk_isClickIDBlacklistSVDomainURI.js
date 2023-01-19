__d(
  'isClickIDBlacklistSVDomainURI',
  ['ClickIDDomainBlacklistSVConfig'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = ['http', 'https'];
    function a(a) {
      return !g.includes(a.getProtocol())
        ? !1
        : b('ClickIDDomainBlacklistSVConfig').domains.some(function (b) {
            if (a.isSubdomainOfDomain(b)) return !0;
            if (!b.includes('.')) {
              var c = a.getDomain().split('.');
              return c.includes(b);
            }
            return !1;
          });
    }
    e.exports = a;
  },
  null,
);
