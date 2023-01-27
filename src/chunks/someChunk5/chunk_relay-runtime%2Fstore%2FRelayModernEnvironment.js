__d(
  'relay-runtime/store/RelayModernEnvironment',
  [
    'invariant',
    'relay-runtime/handlers/RelayDefaultHandlerProvider',
    'relay-runtime/multi-actor-environment/ActorIdentifier',
    'relay-runtime/network/RelayObservable',
    'relay-runtime/network/wrapNetworkWithLogObserver',
    'relay-runtime/store/OperationExecutor',
    'relay-runtime/store/RelayOperationTracker',
    'relay-runtime/store/RelayPublishQueue',
    'relay-runtime/store/RelayRecordSource',
    'relay-runtime/store/StoreInspector',
    'relay-runtime/store/defaultGetDataID',
    'relay-runtime/store/defaultRequiredFieldLogger',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/registerEnvironmentWithDevTools',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b(
        'relay-runtime/multi-actor-environment/ActorIdentifier',
      ).INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      i = b(
        'relay-runtime/multi-actor-environment/ActorIdentifier',
      ).assertInternalActorIdentifier;
    a = (function () {
      function a(a) {
        var c,
          d = this;
        this.configName = a.configName;
        this.$13 = a.treatMissingFieldsAsNull === !0;
        var e = a.operationLoader,
          f = a.reactFlightPayloadDeserializer,
          g = a.reactFlightServerErrorHandler;
        this.__log = (c = a.log) != null ? c : k;
        this.requiredFieldLogger =
          (c = a.requiredFieldLogger) != null
            ? c
            : b('relay-runtime/store/defaultRequiredFieldLogger');
        this.$1 = (
          (c = a.UNSTABLE_defaultRenderPolicy) != null
            ? c
            : b('relay-runtime/util/RelayFeatureFlags')
                .ENABLE_PARTIAL_RENDERING_DEFAULT === !0
        )
          ? 'partial'
          : 'full';
        this.$2 = e;
        this.$14 = new Map();
        this.$6 = b('relay-runtime/network/wrapNetworkWithLogObserver')(
          this,
          a.network,
        );
        this.$12 =
          (c = a.getDataID) != null
            ? c
            : b('relay-runtime/store/defaultGetDataID');
        this.$10 = (e = a.missingFieldHandlers) != null ? e : [];
        this.$7 = new (b('relay-runtime/store/RelayPublishQueue'))(
          a.store,
          (c = a.handlerProvider) != null
            ? c
            : b('relay-runtime/handlers/RelayDefaultHandlerProvider'),
          this.$12,
          this.$10,
        );
        this.$8 = (e = a.scheduler) != null ? e : null;
        this.$9 = a.store;
        this.options = a.options;
        this.$15 = (c = a.isServer) != null ? c : !1;
        this.__setNet = function (a) {
          return (d.$6 = b('relay-runtime/network/wrapNetworkWithLogObserver')(
            d,
            a,
          ));
        };
        this.$11 =
          (e = a.operationTracker) != null
            ? e
            : new (b('relay-runtime/store/RelayOperationTracker'))();
        this.$3 = f;
        this.$4 = g;
        this.$5 = a.shouldProcessClientComponents;
        b('relay-runtime/util/registerEnvironmentWithDevTools')(this);
      }
      var c = a.prototype;
      c.getStore = function () {
        return this.$9;
      };
      c.getNetwork = function () {
        return this.$6;
      };
      c.getOperationTracker = function () {
        return this.$11;
      };
      c.getScheduler = function () {
        return this.$8;
      };
      c.isRequestActive = function (a) {
        a = this.$14.get(a);
        return a === 'active';
      };
      c.UNSTABLE_getDefaultRenderPolicy = function () {
        return this.$1;
      };
      c.applyUpdate = function (a) {
        var b = this,
          c = function () {
            b.$16(function () {
              b.$7.revertUpdate(a), b.$7.run();
            });
          };
        this.$16(function () {
          b.$7.applyUpdate(a), b.$7.run();
        });
        return { dispose: c };
      };
      c.revertUpdate = function (a) {
        var b = this;
        this.$16(function () {
          b.$7.revertUpdate(a), b.$7.run();
        });
      };
      c.replaceUpdate = function (a, b) {
        var c = this;
        this.$16(function () {
          c.$7.revertUpdate(a), c.$7.applyUpdate(b), c.$7.run();
        });
      };
      c.applyMutation = function (a) {
        var c = this.$17({
          createSource: function () {
            return b('relay-runtime/network/RelayObservable').create(function (
              a,
            ) {});
          },
          isClientPayload: !1,
          operation: a.operation,
          optimisticConfig: a,
          updater: null,
        }).subscribe({});
        return {
          dispose: function () {
            return c.unsubscribe();
          },
        };
      };
      c.check = function (a) {
        return this.$10.length === 0 && !j(a)
          ? this.$9.check(a)
          : this.$18(a, this.$10);
      };
      c.commitPayload = function (a, c) {
        this.$17({
          createSource: function () {
            return b('relay-runtime/network/RelayObservable').from({ data: c });
          },
          isClientPayload: !0,
          operation: a,
          optimisticConfig: null,
          updater: null,
        }).subscribe({});
      };
      c.commitUpdate = function (a) {
        var b = this;
        this.$16(function () {
          b.$7.commitUpdate(a), b.$7.run();
        });
      };
      c.lookup = function (a) {
        return this.$9.lookup(a);
      };
      c.subscribe = function (a, b) {
        return this.$9.subscribe(a, b);
      };
      c.retain = function (a) {
        return this.$9.retain(a);
      };
      c.isServer = function () {
        return this.$15;
      };
      c.$18 = function (a, c) {
        var d = this,
          e = b('relay-runtime/store/RelayRecordSource').create(),
          f = this.$9.getSource();
        a = this.$9.check(a, {
          handlers: c,
          defaultActorIdentifier: h,
          getSourceForActor: function (a) {
            i(a);
            return f;
          },
          getTargetForActor: function (a) {
            i(a);
            return e;
          },
        });
        e.size() > 0 &&
          this.$16(function () {
            d.$7.commitSource(e), d.$7.run();
          });
        return a;
      };
      c.$16 = function (a) {
        var b = this.$8;
        b != null ? b.schedule(a) : a();
      };
      c.execute = function (a) {
        var b = this,
          c = a.operation;
        return this.$17({
          createSource: function () {
            return b
              .getNetwork()
              .execute(
                c.request.node.params,
                c.request.variables,
                c.request.cacheConfig || {},
                null,
              );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: null,
          updater: null,
        });
      };
      c.executeSubscription = function (a) {
        var b = this,
          c = a.operation;
        a = a.updater;
        return this.$17({
          createSource: function () {
            return b
              .getNetwork()
              .execute(
                c.request.node.params,
                c.request.variables,
                c.request.cacheConfig || {},
                null,
              );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: null,
          updater: a,
        });
      };
      c.executeMutation = function (a) {
        var b = this,
          c = a.operation,
          d = a.optimisticResponse,
          e = a.optimisticUpdater,
          f = a.updater,
          g = a.uploadables,
          h;
        (d || e) && (h = { operation: c, response: d, updater: e });
        return this.$17({
          createSource: function () {
            return b.getNetwork().execute(
              c.request.node.params,
              c.request.variables,
              babelHelpers['extends']({}, c.request.cacheConfig, {
                force: !0,
              }),
              g,
            );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: h,
          updater: f,
        });
      };
      c.executeWithSource = function (a) {
        var b = a.operation,
          c = a.source;
        return this.$17({
          createSource: function () {
            return c;
          },
          isClientPayload: !1,
          operation: b,
          optimisticConfig: null,
          updater: null,
        });
      };
      c.toJSON = function () {
        var a;
        return (
          'RelayModernEnvironment(' +
          ((a = this.configName) != null ? a : '') +
          ')'
        );
      };
      c.$17 = function (a) {
        var c = this,
          d = a.createSource,
          e = a.isClientPayload,
          f = a.operation,
          g = a.optimisticConfig,
          j = a.updater,
          k = this.$7,
          l = this.$9;
        return b('relay-runtime/network/RelayObservable').create(function (a) {
          var m = b('relay-runtime/store/OperationExecutor').execute({
            actorIdentifier: h,
            getDataID: c.$12,
            isClientPayload: e,
            log: c.__log,
            operation: f,
            operationExecutions: c.$14,
            operationLoader: c.$2,
            operationTracker: c.$11,
            optimisticConfig: g,
            getPublishQueue: function (a) {
              i(a);
              return k;
            },
            reactFlightPayloadDeserializer: c.$3,
            reactFlightServerErrorHandler: c.$4,
            scheduler: c.$8,
            shouldProcessClientComponents: c.$5,
            sink: a,
            source: d(),
            getStore: function (a) {
              i(a);
              return l;
            },
            treatMissingFieldsAsNull: c.$13,
            updater: j,
          });
          return function () {
            return m.cancel();
          };
        });
      };
      return a;
    })();
    function j(a) {
      return (
        a.root.node.kind === 'Operation' &&
        a.root.node.clientAbstractTypes != null
      );
    }
    a.prototype['@@RelayModernEnvironment'] = !0;
    function k() {}
    e.exports = a;
  },
  null,
);
