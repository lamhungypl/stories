__d(
  'resolveImmediate',
  ['Promise'],
  function (a, b, c, d, e, f) {
    var g = b('Promise').resolve();
    function a(a) {
      g.then(a)['catch'](h);
    }
    function h(a) {
      setTimeout(function () {
        throw a;
      }, 0);
    }
    f['default'] = a;
  },
  66,
);
