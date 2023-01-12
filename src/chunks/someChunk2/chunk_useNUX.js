__d(
  'useNUX',
  [
    'CometNUXManagerContext',
    'react',
    'recoverableViolation',
    'useNUXLoggers',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useState;
    function a(a, b) {
      b === void 0 && (b = !0);
      var d = c('useStable')(function () {
        return a;
      });
      if (d !== a) {
        var e;
        c('recoverableViolation')(
          'Error nux changed at runtime from ' +
            ((e = d) != null ? e : 'null') +
            ' to ' +
            ((e = a) != null ? e : 'null') +
            ', this is not supported and will lead to erratic behavior, we have continued to use your initially supplied nux',
          'comet_ui',
        );
      }
      e = j(!1);
      var f = e[0],
        g = e[1];
      e = h(c('CometNUXManagerContext'));
      var k = e.registerNUX;
      e = e.removeNUX;
      i(
        function () {
          if (d == null || !b) return;
          return k(d, g);
        },
        [d, k, b],
      );
      e = c('useNUXLoggers')(d, e, b);
      return [f, e];
    }
    g['default'] = a;
  },
  98,
);
