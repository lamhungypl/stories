__d(
  'getReactComponentStackFromDOMElement_THIS_CAN_BREAK',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      var b = Object.keys(a).find(function (a) {
        return a.startsWith('__reactFiber$');
      });
      return b == null ? null : a[b];
    }
    function h(a) {
      var b;
      b = (b = a.displayName) != null ? b : a.name;
      if (b == null) return null;
      a = b.match(/.*\[from (.*)\.react\]/);
      return (a && a[1]) || b;
    }
    function a(a) {
      try {
        var b = [];
        a = g(a);
        while (a) {
          var c = a.type;
          if (c == null || typeof c === 'string') {
            a = a['return'];
            continue;
          }
          var d = h(c);
          d == null && c.render != null && (d = h(c.render));
          d != null && d !== '' && b.push(d);
          a = a['return'];
        }
        return b;
      } catch (a) {
        return null;
      }
    }
    f['default'] = a;
  },
  66,
);