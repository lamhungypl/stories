__d(
  'isInstagramURI',
  [],
  function (a, b, c, d, e, f) {
    var g = null;
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      if (!a.getDomain() && !a.getProtocol()) return !1;
      if (a.getProtocol() !== 'https') return !1;
      g || (g = new RegExp('(^|\\.)instagram\\.com$', 'i'));
      return g.test(a.getDomain());
    }
    f['default'] = a;
  },
  66,
);
