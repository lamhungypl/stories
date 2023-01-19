__d(
  'isWhatsAppURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)whatsapp\\.com$', 'i');
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      if (!a.getDomain() && !a.getProtocol()) return !1;
      return a.getProtocol() !== 'https' ? !1 : g.test(a.getDomain());
    }
    f['default'] = a;
  },
  66,
);
