__d(
  'CometAppNavigationProfileSwitcherConfig',
  [
    'CometAppNavigationProfileSwitcherConfigQuery.graphql',
    'CometRelay',
    'CometSwitcherGating',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i =
        h !== void 0
          ? h
          : (h = b('CometAppNavigationProfileSwitcherConfigQuery.graphql'));
    function a(a) {
      var b;
      a = d('CometRelay').usePreloadedQuery(i, a);
      b =
        ((a == null
          ? void 0
          : (b = a.viewer) == null
          ? void 0
          : (b = b.actor) == null
          ? void 0
          : (b = b.profile_switcher_eligible_profiles) == null
          ? void 0
          : b.count) || 0) > 0;
      a =
        a == null
          ? void 0
          : (a = a.viewer) == null
          ? void 0
          : (a = a.actor) == null
          ? void 0
          : (a = a.profile_picture) == null
          ? void 0
          : a.uri;
      return {
        hideProfileNavigationLink:
          d('CometSwitcherGating').shouldShowSimpleDropdownHeader() || b,
        profilePictureUriForSettings: (b = a) != null ? b : null,
      };
    }
    g['default'] = a;
  },
  98,
);
