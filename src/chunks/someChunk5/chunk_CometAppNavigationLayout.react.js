__d(
  'CometAppNavigationLayout.react',
  [
    'CometAppNavigationTabBarContainer.react',
    'CometContextualLayerAnchorRoot.react',
    'CometTooltipGroup.react',
    'FocusInertRegion.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.children;
      a = a.inert;
      return h.jsx(c('FocusInertRegion.react'), {
        disabled: !a,
        children: h.jsx('div', {
          'aria-hidden': a,
          className: 'xds687c xixxii4 x17qophe x13vifvy x1vjfegm',
          children: h.jsx(c('CometAppNavigationTabBarContainer.react'), {
            children: h.jsx(c('CometContextualLayerAnchorRoot.react'), {
              children: h.jsx(c('CometTooltipGroup.react'), { children: b }),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
