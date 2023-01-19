__d(
  'CometTooltip.react',
  ['BaseTooltip.react', 'CometTooltipImpl.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.delayMs;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['delayMs']);
      return h.jsx(
        c('BaseTooltip.react'),
        babelHelpers['extends']({}, a, {
          delayTooltipMs: b,
          tooltipImpl: c('CometTooltipImpl.react'),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
