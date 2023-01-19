__d(
  'isWorkAccountsURI',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = /(work|work-test)\.facebook\.com|(^|\.)work\.meta\.com$/i;
    function a(a) {
      return a.getProtocol() === 'https' && h(a.getDomain());
    }
    function h(a) {
      return g.test(a);
    }
    f.isWorkAccountsURI = a;
    f.isWorkAccountsDomain = h;
  },
  66,
);
