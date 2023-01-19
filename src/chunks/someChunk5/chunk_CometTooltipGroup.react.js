__d(
  'CometTooltipGroup.react',
  ['BaseTooltipGroup.react', 'CometTooltipImpl.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsx(
        d('BaseTooltipGroup.react').Container,
        babelHelpers['extends']({}, a, {
          tooltipImpl: c('CometTooltipImpl.react'),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
