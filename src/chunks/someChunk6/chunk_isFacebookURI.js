__d(
  'isFacebookURI',
  [],
  function (a, b, c, d, e, f) {
    var g = null,
      h = ['http', 'https'];
    function a(a) {
      g || (g = new RegExp('(^|\\.)facebook\\.com$', 'i'));
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !0
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    a.setRegex = function (a) {
      g = a;
    };
    f['default'] = a;
  },
  66,
);
