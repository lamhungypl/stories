__d(
  'getElementRect',
  ['containsNode', 'normalizeBoundingClientRect'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b;
      b =
        a == null
          ? void 0
          : (b = a.ownerDocument) == null
          ? void 0
          : b.documentElement;
      return !a || !('getBoundingClientRect' in a) || !c('containsNode')(b, a)
        ? { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 }
        : c('normalizeBoundingClientRect')(a, a.getBoundingClientRect());
    }
    g['default'] = a;
  },
  98,
);
