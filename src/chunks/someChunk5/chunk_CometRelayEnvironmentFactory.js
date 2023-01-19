__d(
  'CometRelayEnvironmentFactory',
  [
    'CometRelayMultiActorEnvironment',
    'RelayAPIConfig',
    'cometCreateLocalEnvironment',
    'cometHandlerProvider',
    'configureRelayFlight',
    'configureRelayForWWW',
    'createCometRelayEnvironmentConfig',
    'relay-runtime/multi-actor-environment',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    c('configureRelayForWWW')();
    c('configureRelayFlight')();
    function a(a, b) {
      return d('CometRelayMultiActorEnvironment').forActor(
        d('relay-runtime/multi-actor-environment').getActorIdentifier(a),
        b,
      );
    }
    e = a(c('RelayAPIConfig').actorID);
    function b(a) {
      return d('CometRelayMultiActorEnvironment').commitMultiActorUpdate(a);
    }
    g.createLocalEnvironment = c('cometCreateLocalEnvironment');
    g.configEnvironment = d(
      'createCometRelayEnvironmentConfig',
    ).createCometRelayEnvironmentConfig;
    g.cometHandlerProvider = c('cometHandlerProvider');
    g.commitLocalUpdateForEachEnvironment = b;
    g.defaultEnvironment = e;
    g.getForActorID = a;
  },
  98,
);
