__d(
  'useStoriesCreateObjectMoveKeyboard',
  ['fbt', 'CometKeys', 'Locale', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    b = d('react');
    var i = b.useCallback,
      j = b.useMemo,
      k = 20;
    function a(a) {
      var b = a.isKeyboard,
        e = a.isMoving,
        f = a.onMove,
        g = a.scaledDx,
        l = a.scaledDy,
        m = a.setKeyboard,
        n = a.setMoving,
        o = a.updateMoveOrigin,
        p = i(
          function (a, c) {
            e || n(!0), (!e || !b) && m(!0), o(), f(null, g + a, l + c);
          },
          [b, e, f, g, l, m, n, o],
        );
      return j(
        function () {
          var a = d('Locale').isRTL(),
            b = h._('__JHASH__g2X9izB-zkI__JHASH__'),
            e = h._('__JHASH__NqTQSEjSrT___JHASH__'),
            f = function () {
              p(-k, 0);
            },
            g = function () {
              p(k, 0);
            };
          return [
            {
              command: { key: c('CometKeys').LEFT },
              description: a ? e : b,
              handler: a ? g : f,
            },
            {
              command: { key: c('CometKeys').RIGHT },
              description: a ? b : e,
              handler: a ? f : g,
            },
            {
              command: { key: c('CometKeys').UP },
              description: h._('__JHASH__T2ct9_ZRFgQ__JHASH__'),
              handler: function () {
                p(0, -k);
              },
            },
            {
              command: { key: c('CometKeys').DOWN },
              description: h._('__JHASH__2x6GVmh9xAY__JHASH__'),
              handler: function () {
                p(0, k);
              },
            },
          ];
        },
        [p],
      );
    }
    g['default'] = a;
  },
  98,
);
