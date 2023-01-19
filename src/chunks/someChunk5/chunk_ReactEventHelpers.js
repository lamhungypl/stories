__d(
  'ReactEventHelpers',
  [],
  function (a, b, c, d, e, f) {
    b =
      typeof window !== 'undefined' && window.navigator != null
        ? /^Mac/.test(window.navigator.platform)
        : !1;
    c = typeof window !== 'undefined' && window.PointerEvent != null;
    function a(a, b) {
      return b == null
        ? !1
        : typeof a.containsNode === 'function'
        ? a.containsNode(b)
        : a.contains(b);
    }
    f.isMac = b;
    f.hasPointerEvents = c;
    f.isRelatedTargetWithin = a;
  },
  66,
);
