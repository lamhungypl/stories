__d(
  'createCometRelayEnvironmentConfig',
  [
    'ActorURIConfig',
    'CometMissingFieldHandlers',
    'CometRelayFlightEventLogger',
    'CometRelayPerfStore',
    'CometRootInitServerFlag',
    'RelayAPIConfig',
    'RelayFBFlightPayloadDeserializer',
    'RelayFBFlightServerErrorHandler',
    'RelayFBOperationLoader',
    'RelayRequiredFieldLogger',
    'cometHandlerProvider',
    'cometPrefetchVideoDashV2',
    'cometWrapNetworkObservable',
    'cr:1121434',
    'cr:1445039',
    'cr:1467370',
    'cr:851',
    'createCometStore',
    'createRelayFBNetwork',
    'createRelayFBNetworkFetch',
    'createRelayFBSubscribeFunction',
    'liveQueryFetch',
    'liveQueryFetchWithWWWInitial',
    'relay-runtime',
    'relayFBGetDataID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      var d = c('RelayAPIConfig').actorID === a && b == null ? ' DEFAULT' : '';
      b = b == null ? '' : ' - ' + b;
      return 'CometRelayEnvironment (' + String(a) + b + ')' + d;
    }
    function i(a, b) {
      return c('createRelayFBNetwork')(
        c('createRelayFBNetworkFetch')({
          actorID: a,
          batchResponseChunks: !0,
          getAdditionalData: function () {
            var b = {};
            a != null && (b[c('ActorURIConfig').PARAMETER_ACTOR] = a);
            c('RelayAPIConfig').useXController === !1 &&
              c('RelayAPIConfig').accessToken !== '' &&
              (b.access_token = c('RelayAPIConfig').accessToken);
            return b;
          },
          graphURI: b,
          liveQueryFetchFn: c('liveQueryFetch'),
          liveQueryFetchWithWWWInitialFn: c('liveQueryFetchWithWWWInitial'),
          wrapObservableFn: c('cometWrapNetworkObservable')(),
        }),
        c('createRelayFBSubscribeFunction')({ actorID: a }),
        null,
        c('cometPrefetchVideoDashV2'),
      );
    }
    function j(a) {
      return b('cr:1445039') != null
        ? b('cr:1445039').create(String(a), 2e3)
        : null;
    }
    function k(a) {
      var c = b('cr:1121434') != null ? b('cr:1121434')() : null;
      return function (e) {
        c && c(e),
          a && a.log(e),
          d('CometRelayPerfStore').log(e),
          d('CometRelayFlightEventLogger').log(e),
          b('cr:851') && b('cr:851').log(e);
      };
    }
    function l(a) {
      return a != null
        ? function (b) {
            return a.log(b);
          }
        : null;
    }
    function a(a) {
      var e = a.actorID,
        f = a.actorEnvironmentKey;
      a = a.graphURI;
      a = a === void 0 ? void 0 : a;
      var g = j(e);
      return {
        UNSTABLE_defaultRenderPolicy: 'partial',
        actorID: e,
        configName: h(e, f),
        getDataID: c('relayFBGetDataID'),
        handlerProvider: c('cometHandlerProvider'),
        isServer: d('CometRootInitServerFlag').isServerEnvironment(),
        log: k(g),
        missingFieldHandlers: c('CometMissingFieldHandlers'),
        network: i(e, a),
        operationLoader: c('RelayFBOperationLoader'),
        operationTracker: new (d(
          'relay-runtime',
        ).__internal.OperationTracker)(),
        reactFlightPayloadDeserializer: c('RelayFBFlightPayloadDeserializer'),
        reactFlightServerErrorHandler: c('RelayFBFlightServerErrorHandler'),
        requiredFieldLogger: d('RelayRequiredFieldLogger').create(),
        scheduler: b('cr:1467370'),
        store: c('createCometStore')(l(g)),
      };
    }
    g.createCometEnvironmentConfigName = h;
    g.createCometNetwork = i;
    g.createCometRelayEventLogger = j;
    g.createCometEnvironmentLogFn = k;
    g.createCometStoreLoggerFn = l;
    g.createCometRelayEnvironmentConfig = a;
  },
  98,
);
