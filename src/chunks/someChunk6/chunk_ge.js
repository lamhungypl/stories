__d(
  'ge',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      if (typeof a !== 'string') return a;
      else if (!b) return document.getElementById(a);
      else return g(a, b, c);
    }
    function g(a, b, c) {
      var d;
      if (h(b) == a) return b;
      else if (b.getElementsByTagName) {
        c = b.getElementsByTagName(c || '*');
        for (d = 0; d < c.length; d++) if (h(c[d]) == a) return c[d];
      } else {
        c = b.childNodes;
        for (d = 0; d < c.length; d++) {
          b = g(a, c[d]);
          if (b) return b;
        }
      }
      return null;
    }
    function h(a) {
      return a.getAttribute ? a.getAttribute('id') : null;
    }
    f['default'] = a;
  },
  66,
);
