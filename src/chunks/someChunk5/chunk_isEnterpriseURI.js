__d(
  'isEnterpriseURI',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      if (!a.getDomain() && !a.getProtocol()) return !1;
      return a.getProtocol() !== 'https'
        ? !1
        : a.getDomain().includes('facebookenterprise.com') ||
            a.getDomain().includes('metaenterprise.com');
    }
    f['default'] = a;
  },
  66,
);
