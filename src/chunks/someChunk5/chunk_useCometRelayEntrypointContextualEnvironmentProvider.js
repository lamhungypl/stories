__d(
  'useCometRelayEntrypointContextualEnvironmentProvider',
  ['CometRelay', 'createCometRelayEntryPointEnvironmentProvider', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a() {
      var a = d('CometRelay').useRelayEnvironment();
      return h(
        function () {
          return c('createCometRelayEntryPointEnvironmentProvider')(a);
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
