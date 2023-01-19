__d(
  'CometRelayPerfStore',
  ['CometRelayPerfStoreCommon', 'ExecutionEnvironment'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (!c('ExecutionEnvironment').canUseDOM) return;
      d('CometRelayPerfStoreCommon').log(a);
    }
    g.log = a;
  },
  98,
);
