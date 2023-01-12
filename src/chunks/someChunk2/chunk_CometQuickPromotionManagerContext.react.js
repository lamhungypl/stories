__d(
  'CometQuickPromotionManagerContext.react',
  ['emptyFunction', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    var h = new Set(),
      i = new Map();
    b = a.createContext({
      registerQP: function (a, b) {
        if (h.has(a) || i.has(a)) return c('emptyFunction');
        b(!0);
        i.set(a, b);
        return function () {
          i['delete'](a);
        };
      },
      removeQP: function (a) {
        h.add(a), i.get(a) == null ? void 0 : i.get(a)(!1);
      },
    });
    g['default'] = b;
  },
  98,
);
