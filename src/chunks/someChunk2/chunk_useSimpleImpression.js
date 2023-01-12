__d(
  'useSimpleImpression',
  [
    'HiddenSubtreePassiveContext',
    'react',
    'useAfterPaint',
    'useDynamicCallbackDANGEROUS',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef;
    function a(a) {
      var b = i(c('HiddenSubtreePassiveContext')),
        d = j(!0),
        e = c('useDynamicCallbackDANGEROUS')(a);
      a = h(
        function () {
          var a = function (a) {
            a = a.hiddenOrBackgrounded_FIXME;
            a === !1 && d.current === !0 && e();
            a = b.getCurrentState();
            d.current = a.hiddenOrBackgrounded_FIXME;
          };
          a(b.getCurrentState());
          var c = b.subscribeToChanges(a);
          return function () {
            return c.remove();
          };
        },
        [b, e],
      );
      c('useAfterPaint')(a);
    }
    g['default'] = a;
  },
  98,
);
