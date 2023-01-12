__d(
  'useVisibilityObserver',
  ['useViewportDuration'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = 0;
    d = [0, 0.25, 0.5, 0.75, 1];
    e = [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ];
    var h = { EXPENSIVE: e, LITE: b, MODERATE: d };
    function a(a) {
      var b = a.onHidden,
        d = a.onIntersection,
        e = a.onVisibilityDurationUpdated,
        f = a.onVisible;
      a = a.options;
      return c('useViewportDuration')({
        onHidden: b,
        onIntersection: d,
        onVisibilityDurationUpdated: e,
        onVisible: f,
        options: a,
        threshold:
          h[
            (b = a == null ? void 0 : a.thresholdOverride) != null ? b : 'LITE'
          ],
      });
    }
    g['default'] = a;
  },
  98,
);
