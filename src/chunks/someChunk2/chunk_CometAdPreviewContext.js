__d(
  'CometAdPreviewContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = h.createContext(!1);
    function a(a) {
      return h.jsx(j.Provider, { value: a.value, children: a.children });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b() {
      return i(j);
    }
    g.CometAdPreviewContextProvider = a;
    g.useCometAdPreviewContext = b;
  },
  98,
);
