__d(
  'CometGlobalPanelGating',
  ['CometGlobalPanelGating.entrypointutils', 'gkx', 'qex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a;
      return (a = c('qex')._('296')) != null ? a : !0;
    }
    function b() {
      return Boolean(c('gkx')('6258'));
    }
    g.isCommunityPanelEMCopresenceEnabled = d(
      'CometGlobalPanelGating.entrypointutils',
    ).isCommunityPanelEMCopresenceEnabled;
    g.isCommunityPanelHovercardCopresenceEnabled = d(
      'CometGlobalPanelGating.entrypointutils',
    ).isCommunityPanelHovercardCopresenceEnabled;
    g.isGlobalPanelEnabled = d(
      'CometGlobalPanelGating.entrypointutils',
    ).isGlobalPanelEnabled;
    g.isGlobalPanelHidden = d(
      'CometGlobalPanelGating.entrypointutils',
    ).isGlobalPanelHidden;
    g.isGlobalPanelVisible = d(
      'CometGlobalPanelGating.entrypointutils',
    ).isGlobalPanelVisible;
    g.shouldShowGroupsInGlobalPanel = a;
    g.shouldUseFaviconLogo = b;
  },
  98,
);
