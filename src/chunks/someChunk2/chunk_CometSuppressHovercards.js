__d(
  'CometSuppressHovercards',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = h.createContext(!1);
    function a(a) {
      a = a.children;
      return h.jsx(j.Provider, { value: !0, children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b() {
      return i(j);
    }
    g.CometSuppressHovercardsContext = j;
    g.CometSuppressHovercardsProvider = a;
    g.useIsHovercardSuppressed = b;
  },
  98,
);
