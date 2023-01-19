__d(
  'isFacebookSVDomainURI',
  ['FBDomainsSVConfig'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = ['http', 'https'];
    function a(a) {
      if (g.indexOf(a.getProtocol()) === -1) return !1;
      a = b('FBDomainsSVConfig').domains.get(a.getDomain());
      return a != null;
    }
    e.exports = a;
  },
  null,
);
