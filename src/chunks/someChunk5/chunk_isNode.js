__d(
  'isNode',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b;
      b = a != null ? ((b = a.ownerDocument) != null ? b : a) : document;
      b = (b = b.defaultView) != null ? b : window;
      return !!(
        a != null &&
        (typeof b.Node === 'function'
          ? a instanceof b.Node
          : typeof a === 'object' &&
            typeof a.nodeType === 'number' &&
            typeof a.nodeName === 'string')
      );
    }
    f['default'] = a;
  },
  66,
);
