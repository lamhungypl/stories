__d(
  'CometBaseAppNavigation.react',
  [
    'CometContextualLayerAnchorRoot.react',
    'CometProductAttributionContextProvider.react',
    'CometSection.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.endSection,
        d = a.searchSection,
        e = a.startButtons;
      a = a.tabBar;
      return h.jsx(c('CometSection.react'), {
        role: 'banner',
        children: h.jsxs(c('CometProductAttributionContextProvider.react'), {
          value: 'topnav',
          children: [
            h.jsx('div', {
              className:
                'x6s0dn4 x9f619 x78zum5 x1iyjqo2 x1s65kcs x1d52u69 xixxii4 x17qophe x13vifvy xzkaem6',
              children: h.jsx(c('CometContextualLayerAnchorRoot.react'), {
                children: e,
              }),
            }),
            d,
            a,
            h.jsx('div', {
              className: 'xds687c x1pi30zi x1e558r4 xixxii4 x13vifvy xzkaem6',
              children: h.jsx(c('CometContextualLayerAnchorRoot.react'), {
                children: b,
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
