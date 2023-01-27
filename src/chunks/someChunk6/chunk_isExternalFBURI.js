__d(
  'isExternalFBURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)externalfb\\.com$', 'i');
    function a(a) {
      return g.test(a.getDomain());
    }
    f['default'] = a;
  },
  66,
);
