__d(
  'lazyLoadComponent',
  ['BootloaderResource', 'react', 'useHeroBootloadedComponent'],
  function (a, b, c, d, e, f, g) {
    var h = d('react'),
      i = new Map();
    function j(a, b) {
      i.set(a, b);
    }
    function k(a) {
      return i.get(a);
    }
    function a(a) {
      var b = k(a);
      if (b) return b;
      function e(b, e) {
        e === void 0 && (e = void 0);
        var f = d('BootloaderResource').read(a);
        c('useHeroBootloadedComponent')(a);
        return h.jsx(f, babelHelpers['extends']({}, b, { ref: e }));
      }
      e.displayName = e.name + ' [from ' + f.id + ']';
      e.displayName = 'lazyLoadComponent(' + a.getModuleId() + ')';
      b = h.forwardRef(e);
      j(a, b);
      return b;
    }
    g['default'] = a;
  },
  98,
);
