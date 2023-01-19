__d(
  'createCometRelayEntryPointEnvironmentProvider',
  ['CometRelayEnvironmentFactory'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      a === void 0 &&
        (a = d('CometRelayEnvironmentFactory').defaultEnvironment);
      var b = function (b) {
        b = b == null ? void 0 : b.actorID;
        return b == null
          ? a
          : d('CometRelayEnvironmentFactory').getForActorID(String(b));
      };
      return { getEnvironment: b };
    }
    g['default'] = a;
  },
  98,
);
