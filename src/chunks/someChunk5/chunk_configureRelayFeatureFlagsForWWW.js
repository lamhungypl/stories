__d(
  'configureRelayFeatureFlagsForWWW',
  ['ReactFlightGating.hybrid', 'gkx', 'qex', 'relay-runtime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a;
      d('relay-runtime').RelayFeatureFlags.ENABLE_PARTIAL_RENDERING_DEFAULT =
        c('gkx')('1969466');
      d('relay-runtime').RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = !0;
      d('relay-runtime').RelayFeatureFlags.ENABLE_CLIENT_EDGES = !0;
      d('relay-runtime').RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD =
        c('ReactFlightGating.hybrid').isReactFlightEnabledGlobally();
      d('relay-runtime').RelayFeatureFlags.ENABLE_FRIENDLY_QUERY_NAME_GQL_URL =
        c('gkx')('1723588');
      d('relay-runtime').RelayFeatureFlags.ENABLE_LOAD_QUERY_REQUEST_DEDUPING =
        c('gkx')('1872325');
      d('relay-runtime').RelayFeatureFlags.ENABLE_DO_NOT_WRAP_LIVE_QUERY = !0;
      d(
        'relay-runtime',
      ).RelayFeatureFlags.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT = !0;
      d('relay-runtime').RelayFeatureFlags.STRING_INTERN_LEVEL = c('gkx')(
        '3140',
      )
        ? 2
        : 0;
      d('relay-runtime').RelayFeatureFlags.MAX_DATA_ID_LENGTH = 100;
      d('relay-runtime').RelayFeatureFlags.USE_REACT_CACHE =
        (a = c('qex')._('858')) != null ? a : !1;
    }
    g['default'] = a;
  },
  98,
);
