__d(
  'RelayWWWInitialRolloutResolver',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = new Set([
      'relay_snoop_case_details_live_container',
      'fake_live_config_id',
    ]);
    function a(a) {
      return g.has(a) ? !0 : !1;
    }
    f.disableWWWInitial = a;
  },
  66,
);
