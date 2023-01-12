__d(
  'CometGlobalPanelGating.entrypointutils',
  ['qex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      return Boolean(c('qex')._('1742'));
    }
    function b() {
      return Boolean(c('qex')._('379'));
    }
    function h() {
      return Boolean(c('qex')._('19'));
    }
    function i() {
      return Boolean(c('qex')._('478'));
    }
    function d() {
      return h() && !i();
    }
    function e() {
      var a;
      return (a = c('qex')._('245')) != null ? a : !1;
    }
    g.isCommunityPanelEMCopresenceEnabled = a;
    g.isCommunityPanelHovercardCopresenceEnabled = b;
    g.isGlobalPanelEnabled = h;
    g.isGlobalPanelHidden = i;
    g.isGlobalPanelVisible = d;
    g.shouldUseBookmarkRanking = e;
  },
  98,
);
