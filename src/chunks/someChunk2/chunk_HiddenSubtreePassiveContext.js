__d(
  'HiddenSubtreePassiveContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({
      getCurrentState: function () {
        return {
          backgrounded: !1,
          hidden: !1,
          hiddenOrBackgrounded: !1,
          hiddenOrBackgrounded_FIXME: !1,
        };
      },
      subscribeToChanges: function (a) {
        return { remove: function () {} };
      },
    });
    g['default'] = b;
  },
  98,
);
