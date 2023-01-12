__d(
  'CometPulse.react',
  [
    'CometContextualLayer.react',
    'CometPulsePressable.react',
    'react',
    'useCometDisplayTimingTrackerForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.contextualLayerProps,
        d = a.pulseProps;
      a = a.targetRef;
      var e = c('useCometDisplayTimingTrackerForInteraction')('pulse-mount');
      return a == null || b == null
        ? null
        : h.jsx(c('CometContextualLayer.react'), {
            align: b.align,
            contextRef: a,
            disableAutoAlign: b.disableAutoAlign,
            disableAutoFlip: b.disableAutoFlip,
            position: b.position,
            ref: e,
            children: h.jsx(
              c('CometPulsePressable.react'),
              babelHelpers['extends']({}, d),
            ),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
