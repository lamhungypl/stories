__d(
  'createRelayFBLocalEnvironment',
  [
    'RelayFBHandlerProvider',
    'RelayFBOperationLoader',
    'RelayRequiredFieldLogger',
    'RelayRuntime',
    'getRelayFBMissingFieldHandlers',
    'relayFBGetDataID',
    'resolveImmediate',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('RelayRuntime').Environment,
      h = b('RelayRuntime').RecordSource,
      i = b('RelayRuntime').Store,
      j = {
        execute: function (a) {
          throw new Error(
            'RelayFBLocalEnvironment: Network requests are not allowed in the local environment, got: ' +
              a.name,
          );
        },
      };
    function a(a) {
      var c = a.handlerProvider,
        d = a.missingFieldHandlers,
        e = a.scheduler,
        f = a.store,
        k = a.configName,
        l = a.log,
        m = a.operationTracker;
      a = a.getDataID;
      c = new g({
        configName: (k = k) != null ? k : 'RelayFBLocalEnvironment',
        handlerProvider: (k = c) != null ? k : b('RelayFBHandlerProvider'),
        missingFieldHandlers:
          (c = d) != null ? c : b('getRelayFBMissingFieldHandlers')(),
        operationLoader: b('RelayFBOperationLoader'),
        scheduler: e,
        store:
          (k = f) != null
            ? k
            : new i(new h(), {
                getDataID: b('relayFBGetDataID'),
                gcReleaseBufferSize: 10,
                gcScheduler: b('resolveImmediate'),
                operationLoader: b('RelayFBOperationLoader'),
              }),
        network: j,
        operationTracker: m,
        log: l,
        getDataID: (d = a) != null ? d : b('relayFBGetDataID'),
        options: { isLocal: !0 },
        requiredFieldLogger: b('RelayRequiredFieldLogger').create(),
      });
      return c;
    }
    e.exports = a;
  },
  null,
);
