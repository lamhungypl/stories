__d(
  'useRefEffect',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useRef;
    function a(a, b) {
      var c = i(null);
      return h(function (b) {
        c.current && (c.current(), (c.current = null)),
          b != null && (c.current = a(b));
      }, b);
    }
    g['default'] = a;
  },
  98,
);
