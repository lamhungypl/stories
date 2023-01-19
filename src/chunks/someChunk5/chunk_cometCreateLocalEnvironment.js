__d(
  'cometCreateLocalEnvironment',
  [
    'CometMissingFieldHandlers',
    'cometHandlerProvider',
    'createCometStore',
    'createRelayFBLocalEnvironment',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      return c('createRelayFBLocalEnvironment')({
        configName: 'CometRelayLocalEnvironment',
        handlerProvider: c('cometHandlerProvider'),
        missingFieldHandlers: c('CometMissingFieldHandlers'),
        scheduler: null,
        store: c('createCometStore')(),
      });
    }
    g['default'] = a;
  },
  98,
);
