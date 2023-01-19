__d(
  'configureRelayForWWW',
  [
    'FBLogger',
    'configureRelayFeatureFlagsForWWW',
    'configureRelayForFB',
    'cr:3832',
    'qex',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = !1;
    function a() {
      if (h) return;
      h = !0;
      c('configureRelayForFB')();
      c('configureRelayFeatureFlagsForWWW')();
      c('qex')._('858') &&
        (b('cr:3832') == null ? void 0 : b('cr:3832').inject());
      d('relay-runtime').Observable.onUnhandledError(function (a, b) {
        var d = c('FBLogger')('relay');
        a instanceof Error
          ? (d.catching(a),
            b
              ? d.mustfix(
                  'An uncaught error was thrown inside `RelayObservable`.',
                )
              : d.warn('An error was caught inside `RelayObservable`.'))
          : b
          ? d.mustfix(
              'An uncaught error was thrown inside `RelayObservable` but it was not an instance of `Error`. Please change your code so that it throws a bonafide `Error` object instead of `%s`.',
              a,
            )
          : d.warn(
              'An error was caught inside `RelayObservable` but it was not aninstance of `Error`. Please change your code so that it throws a bonafide `Error` object instead of `%s`.',
              a,
            );
      });
    }
    g['default'] = a;
  },
  98,
);
