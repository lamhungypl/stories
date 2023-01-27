__d(
  'bx',
  ['unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    var h = {};
    function a(a) {
      var b = h[a];
      if (!b)
        throw c('unrecoverableViolation')(
          'bx' + ('(...): Unknown file path "' + a + '"'),
          'staticresources',
        );
      return b;
    }
    a.add = function (a, b) {
      var c = !1;
      for (c in a)
        b && b.entry++,
          !(c in h)
            ? ((a[c].loggingID = c), (h[c] = a[c]))
            : b && b.dup_entry++;
    };
    a.getURL = function (a) {
      return a.uri;
    };
    g['default'] = a;
  },
  98,
);
