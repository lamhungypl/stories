__d(
  'Scroll',
  [],
  function (a, b, c, d, e, f) {
    function g(a, b) {
      return !!b && (a === b.documentElement || a === b.body);
    }
    function a(a) {
      var b;
      if (a == null) return 0;
      var c = a.ownerDocument;
      return g(a, c)
        ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) ||
            (c == null
              ? void 0
              : (b = c.documentElement) == null
              ? void 0
              : b.scrollTop) ||
            0
        : a.scrollTop || 0;
    }
    function b(a, b) {
      if (a == null) return;
      var c = a.ownerDocument;
      g(a, c)
        ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0),
          (c == null ? void 0 : c.documentElement) &&
            (c.documentElement.scrollTop = b || 0))
        : (a.scrollTop = b || 0);
    }
    function c(a) {
      var b,
        c = a.ownerDocument;
      return g(a, c)
        ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) ||
            (c == null
              ? void 0
              : (b = c.documentElement) == null
              ? void 0
              : b.scrollLeft) ||
            0
        : a.scrollLeft || 0;
    }
    function d(a, b) {
      var c = a.ownerDocument;
      g(a, c)
        ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0),
          (c == null ? void 0 : c.documentElement) &&
            (c.documentElement.scrollLeft = b || 0))
        : (a.scrollLeft = b || 0);
    }
    f.getTop = a;
    f.setTop = b;
    f.getLeft = c;
    f.setLeft = d;
  },
  66,
);
