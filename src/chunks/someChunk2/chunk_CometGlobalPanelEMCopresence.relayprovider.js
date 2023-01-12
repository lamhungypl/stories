__d(
  'CometGlobalPanelEMCopresence.relayprovider',
  ['CometGlobalPanelGating.entrypointutils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      get: function () {
        return d(
          'CometGlobalPanelGating.entrypointutils',
        ).isCommunityPanelEMCopresenceEnabled();
      },
    };
    g['default'] = a;
  },
  98,
);
