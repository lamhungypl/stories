__d(
  'useCometPulseBase',
  ['CometPulse.react', 'react', 'useMergeRefs'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useRef;
    function a(a) {
      var b = a.additionalPulseProps,
        d = a.calloutRef,
        e = a.contextualLayerProps;
      a = a.shouldShowPulse;
      var f = i(null);
      d = c('useMergeRefs')(d, f);
      return {
        dismissNux: function () {},
        targetRef: d,
        view: a
          ? h.jsx(c('CometPulse.react'), {
              contextualLayerProps: e,
              pulseProps: b,
              targetRef: f,
            })
          : null,
      };
    }
    g['default'] = a;
  },
  98,
);
