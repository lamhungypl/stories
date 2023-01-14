__d(
  'usePartialViewImpression',
  ['useVisibilityObserver'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.onImpressionEnd;
      a = a.onImpressionStart;
      return c('useVisibilityObserver')({
        onHidden: b,
        onVisible: a,
        options: { hiddenWhenCSSStyleHidden: !0, hiddenWhenZeroArea: !0 },
      });
    }
    g['default'] = a;
  },
  98,
);
