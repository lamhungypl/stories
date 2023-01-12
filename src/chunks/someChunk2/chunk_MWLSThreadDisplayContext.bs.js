__d(
  'MWLSThreadDisplayContext.bs',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = h.createContext();
    function a(a) {
      var b = a.children;
      a = a.value;
      return h.createElement(i.Provider, { children: b, value: a });
    }
    c = { make: a };
    function b(a) {
      return h.useContext(i);
    }
    g.context = i;
    g.Provider = c;
    g.useHook = b;
  },
  98,
);
