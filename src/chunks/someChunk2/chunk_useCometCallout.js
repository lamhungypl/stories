__d(
  'useCometCallout',
  [
    'BaseContextualLayerAnchorRootContext',
    'BaseScrollableAreaContext',
    'CometCalloutContext',
    'LayoutAnimationBoundaryContext',
    'react',
    'useCometUniqueID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a, b) {
      var d = h(c('CometCalloutContext')),
        e = h(c('BaseContextualLayerAnchorRootContext')),
        f = j(null),
        g = c('useCometUniqueID')(),
        k = h(c('BaseScrollableAreaContext')),
        l = h(c('LayoutAnimationBoundaryContext'));
      i(
        function () {
          if (d == null || f.current == null) return;
          if (a != null && b === !0) {
            d.addCallout({
              anchorRootRefContext: e,
              animationContext: l,
              calloutID: g,
              calloutProps: a,
              contextRef: f,
              scrollableAreaContext: k,
            });
            return function () {
              return d.removeCallout(g);
            };
          }
        },
        [l, e, d, g, a, b, k],
      );
      return f;
    }
    g['default'] = a;
  },
  98,
);
