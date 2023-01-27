__d(
  'isInternalFBURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)internalfb\\.com$', 'i');
    function a(a) {
      return g.test(a.getDomain());
    }
    f['default'] = a;
  },
  66,
);
