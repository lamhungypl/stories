__d(
  'ReactFlightDOMRelayClientIntegration',
  ['RelayFBModuleLoader'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return d('RelayFBModuleLoader').getModuleReference(a);
    }
    function b(a) {
      a.preload();
    }
    function c(a) {
      return d('RelayFBModuleLoader').read(a);
    }
    g.resolveModuleReference = a;
    g.preloadModule = b;
    g.requireModule = c;
  },
  98,
);
