__d(
  'isWorkplaceDotComURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)workplace\\.com$', 'i');
    function a(a) {
      return a.getProtocol() === 'https' && g.test(a.getDomain());
    }
    f['default'] = a;
  },
  66,
);
