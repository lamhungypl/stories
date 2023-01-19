__d(
  'BaseTextContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    c = d('react');
    var i = c.useContext,
      j = c.useMemo,
      k = h.createContext(null);
    function a(a) {
      var b = a.children,
        c = a.nested;
      a = j(
        function () {
          return { nested: c };
        },
        [c],
      );
      return h.jsx(k.Provider, { value: a, children: b });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b() {
      return i(k);
    }
    g.BaseTextContextProvider = a;
    g.useBaseTextContext = b;
  },
  98,
);
