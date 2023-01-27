__d(
  'setHostSubdomain',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      a = a.split('.');
      a.length < 3 ? a.unshift(b) : (a[0] = b);
      return a.join('.');
    }
    f['default'] = a;
  },
  66,
);
