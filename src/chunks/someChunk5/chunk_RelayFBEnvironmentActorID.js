__d(
  'RelayFBEnvironmentActorID',
  ['invariant', 'react-relay/relay-hooks/useRelayEnvironment'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      var b = a.options;
      (b != null && b.actorID != null) ||
        g(
          0,
          47961,
          b == null ? 'missing options' : 'missing options.actorID',
          typeof a.configName === 'string' ? a.configName : '<missing>',
        );
      typeof b.actorID === 'string' || g(0, void 0);
      return b.actorID;
    }
    function a() {
      var a = b('react-relay/relay-hooks/useRelayEnvironment')();
      return h(a);
    }
    e.exports = { getActorID: h, useActorID: a };
  },
  null,
);
