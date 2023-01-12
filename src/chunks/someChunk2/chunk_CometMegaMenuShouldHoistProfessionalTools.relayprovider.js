__d(
  'CometMegaMenuShouldHoistProfessionalTools.relayprovider',
  ['CometGlobalPanelGating.entrypointutils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      get: function () {
        return d(
          'CometGlobalPanelGating.entrypointutils',
        ).isGlobalPanelVisible();
      },
    };
    g['default'] = a;
  },
  98,
);
