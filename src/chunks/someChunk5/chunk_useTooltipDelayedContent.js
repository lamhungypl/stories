__d(
  'useTooltipDelayedContent',
  ['clearTimeout', 'react', 'setTimeout', 'useLayoutEffect_SAFE_FOR_SSR'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useRef,
      i = b.useState;
    function a(a) {
      var b = a.delayContentMs,
        d = a.isVisible,
        e = h(d),
        f = h(null);
      a = i(function () {
        return d === !0 && e.current === !1 && b > 0;
      });
      var g = a[0],
        j = a[1];
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          if (d === !0 && e.current === !1 && b > 0) {
            j(!0);
            f.current = c('setTimeout')(function () {
              j(!1), (f.current = null);
            }, b);
            return function () {
              c('clearTimeout')(f.current), (f.current = null);
            };
          } else
            f.current != null &&
              (j(!1), c('clearTimeout')(f.current), (f.current = null));
          e.current = d;
        },
        [b, d, e],
      );
      return { isPending: g };
    }
    g['default'] = a;
  },
  98,
);
