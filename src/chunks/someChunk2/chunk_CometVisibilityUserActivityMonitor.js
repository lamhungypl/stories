__d(
  'CometVisibilityUserActivityMonitor',
  ['Visibility'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      isUserActive: function () {
        return c('Visibility').isHidden() === !1;
      },
      subscribe: function (a) {
        var b = c('Visibility').addListener(
            c('Visibility').HIDDEN,
            function () {
              return a && a(!1);
            },
          ),
          d = c('Visibility').addListener(c('Visibility').VISIBLE, function () {
            return a && a(!0);
          });
        return function () {
          b && b.remove(), d && d.remove();
        };
      },
    };
    g['default'] = a;
  },
  98,
);
