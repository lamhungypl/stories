__d(
  'configureRelayFlight',
  ['RelayFlight.hybrid', 'RelayFlightClientImpl.client'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      d('RelayFlight.hybrid').isServer_INTERNAL_DO_NOT_USE() ||
        d('RelayFlight.hybrid').initialize_INTERNAL_DO_NOT_USE(
          c('RelayFlightClientImpl.client'),
        );
    }
    g['default'] = a;
  },
  98,
);
