__d(
  'MWXacGating.bs',
  ['IgMsgrXacGatingManager', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return c('IgMsgrXacGatingManager').is_xac_enabled_for_viewer;
    }
    function b(a) {
      if (c('IgMsgrXacGatingManager').is_groups_xac_enabled_for_viewer)
        return c('gkx')('5102');
      else return !1;
    }
    g.isOneToOneEnabled = a;
    g.isGroupsEnabled = b;
  },
  98,
);
