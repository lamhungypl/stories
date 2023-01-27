__d(
  'isFacebookDotNetURI',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (a.getProtocol() !== 'http' && a.getProtocol() !== 'https') return !1;
      var b = Number(a.getPort());
      if (!!b && b !== 80 && b !== 443) return !1;
      return a.isSubdomainOfDomain('facebook.net') ? !0 : !1;
    }
    f['default'] = a;
  },
  66,
);
