__d(
  'cometCreateMulitActorEnvironmentConfig',
  [
    'CometMissingFieldHandlers',
    'CometRootInitServerFlag',
    'RelayFBFlightPayloadDeserializer',
    'RelayFBFlightServerErrorHandler',
    'RelayFBOperationLoader',
    'RelayRequiredFieldLogger',
    'cometHandlerProvider',
    'cr:1467370',
    'createCometRelayEnvironmentConfig',
    'createCometStore',
    'relayFBGetDataID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, e, f) {
      f === void 0 && (f = void 0);
      var g = d(
        'createCometRelayEnvironmentConfig',
      ).createCometRelayEventLogger(a);
      return {
        createConfigNameForActor: function (a) {
          return (
            d(
              'createCometRelayEnvironmentConfig',
            ).createCometEnvironmentConfigName(String(a), e) + ' (Multi Actor)'
          );
        },
        createNetworkForActor: function (a) {
          return d('createCometRelayEnvironmentConfig').createCometNetwork(
            String(a),
            f,
          );
        },
        createStoreForActor: function () {
          return c('createCometStore')(
            d('createCometRelayEnvironmentConfig').createCometStoreLoggerFn(g),
          );
        },
        getDataID: c('relayFBGetDataID'),
        handlerProvider: c('cometHandlerProvider'),
        isServer: d('CometRootInitServerFlag').isServerEnvironment(),
        logFn: d(
          'createCometRelayEnvironmentConfig',
        ).createCometEnvironmentLogFn(g),
        missingFieldHandlers: c('CometMissingFieldHandlers'),
        operationLoader: c('RelayFBOperationLoader'),
        reactFlightPayloadDeserializer: c('RelayFBFlightPayloadDeserializer'),
        reactFlightServerErrorHandler: c('RelayFBFlightServerErrorHandler'),
        requiredFieldLogger: d('RelayRequiredFieldLogger').create(),
        scheduler: b('cr:1467370'),
      };
    }
    g['default'] = a;
  },
  98,
);
