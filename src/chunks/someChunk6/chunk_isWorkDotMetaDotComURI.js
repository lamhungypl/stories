__d(
  'isWorkDotMetaDotComURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)work\\.meta\\.com$', 'i'),
      h = ['https'];
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    f['default'] = a;
  },
  66,
);
