__d(
  'isRoomsURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)msngr\\.com$', 'i'),
      h = new RegExp('(^|\\.)fbaud\\.io$', 'i'),
      i = new RegExp('(^|\\.)fb\\.audio$', 'i'),
      j = ['https'];
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : j.indexOf(a.getProtocol()) !== -1 &&
            (g.test(a.getDomain()) ||
              h.test(a.getDomain()) ||
              i.test(a.getDomain()));
    }
    f['default'] = a;
  },
  66,
);
