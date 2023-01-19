__d(
  'relay-runtime/multi-actor-environment/MultiActorEnvironment',
  [
    'relay-runtime/handlers/RelayDefaultHandlerProvider',
    'relay-runtime/multi-actor-environment/ActorSpecificEnvironment',
    'relay-runtime/network/RelayObservable',
    'relay-runtime/store/OperationExecutor',
    'relay-runtime/store/RelayModernStore',
    'relay-runtime/store/RelayRecordSource',
    'relay-runtime/store/defaultGetDataID',
    'relay-runtime/store/defaultRequiredFieldLogger',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        var c;
        this.$1 = new Map();
        this.$12 = a.operationLoader;
        this.$3 = a.createNetworkForActor;
        this.$16 = a.scheduler;
        this.$6 =
          (c = a.getDataID) != null
            ? c
            : b('relay-runtime/store/defaultGetDataID');
        this.$7 = a.handlerProvider
          ? a.handlerProvider
          : b('relay-runtime/handlers/RelayDefaultHandlerProvider');
        this.$9 = (c = a.logFn) != null ? c : g;
        this.$11 = new Map();
        this.$15 =
          (c = a.requiredFieldLogger) != null
            ? c
            : b('relay-runtime/store/defaultRequiredFieldLogger');
        this.$17 = a.shouldProcessClientComponents;
        this.$18 = (c = a.treatMissingFieldsAsNull) != null ? c : !1;
        this.$8 = (c = a.isServer) != null ? c : !1;
        this.$10 = (c = a.missingFieldHandlers) != null ? c : [];
        this.$4 = a.createStoreForActor;
        this.$13 = a.reactFlightPayloadDeserializer;
        this.$14 = a.reactFlightServerErrorHandler;
        this.$2 = a.createConfigNameForActor;
        this.$5 = (c = a.defaultRenderPolicy) != null ? c : 'partial';
      }
      var c = a.prototype;
      c.forActor = function (a) {
        var c = this.$1.get(a);
        if (c == null) {
          var d = new (b(
            'relay-runtime/multi-actor-environment/ActorSpecificEnvironment',
          ))({
            configName: this.$2 ? this.$2(a) : null,
            actorIdentifier: a,
            multiActorEnvironment: this,
            logFn: this.$9,
            requiredFieldLogger: this.$15,
            store:
              this.$4 != null
                ? this.$4(a)
                : new (b('relay-runtime/store/RelayModernStore'))(
                    b('relay-runtime/store/RelayRecordSource').create(),
                  ),
            network: this.$3(a),
            handlerProvider: this.$7,
            defaultRenderPolicy: this.$5,
            missingFieldHandlers: this.$10,
          });
          this.$1.set(a, d);
          return d;
        } else return c;
      };
      c.check = function (a, c) {
        var d = this;
        return this.$10 == null || this.$10.length === 0
          ? a.getStore().check(c, {
              handlers: [],
              defaultActorIdentifier: a.actorIdentifier,
              getSourceForActor: function (a) {
                return d.forActor(a).getStore().getSource();
              },
              getTargetForActor: function () {
                return b('relay-runtime/store/RelayRecordSource').create();
              },
            })
          : this.$19(a, c, this.$10);
      };
      c.$19 = function (a, c, d) {
        var e = this,
          f = new Map([
            [
              a.actorIdentifier,
              b('relay-runtime/store/RelayRecordSource').create(),
            ],
          ]);
        c = a.getStore().check(c, {
          handlers: d,
          defaultActorIdentifier: a.actorIdentifier,
          getSourceForActor: function (a) {
            return e.forActor(a).getStore().getSource();
          },
          getTargetForActor: function (a) {
            var c = f.get(a);
            c == null &&
              ((c = b('relay-runtime/store/RelayRecordSource').create()),
              f.set(a, c));
            return c;
          },
        });
        a = function () {
          if (h) {
            if (i >= g.length) return 'break';
            d = g[i++];
          } else {
            i = g.next();
            if (i.done) return 'break';
            d = i.value;
          }
          var a = d,
            b = a[0],
            c = a[1];
          c.size() > 0 &&
            e.$20(function () {
              var a = e.forActor(b).getPublishQueue();
              a.commitSource(c);
              a.run();
            });
        };
        for (
          var g = f,
            h = Array.isArray(g),
            i = 0,
            g = h
              ? g
              : g[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var j = a();
          if (j === 'break') break;
        }
        return c;
      };
      c.subscribe = function (a, b, c) {
        return a.getStore().subscribe(b, c);
      };
      c.retain = function (a, b) {
        return a.getStore().retain(b);
      };
      c.applyUpdate = function (a, b) {
        var c = this,
          d = a.getPublishQueue();
        a = function () {
          c.$20(function () {
            d.revertUpdate(b), d.run();
          });
        };
        this.$20(function () {
          d.applyUpdate(b), d.run();
        });
        return { dispose: a };
      };
      c.revertUpdate = function (a, b) {
        var c = a.getPublishQueue();
        this.$20(function () {
          c.revertUpdate(b), c.run();
        });
      };
      c.replaceUpdate = function (a, b, c) {
        var d = a.getPublishQueue();
        this.$20(function () {
          d.revertUpdate(b), d.applyUpdate(c), d.run();
        });
      };
      c.applyMutation = function (a, c) {
        var d = this.$21(a, {
          createSource: function () {
            return b('relay-runtime/network/RelayObservable').create(function (
              a,
            ) {});
          },
          isClientPayload: !1,
          operation: c.operation,
          optimisticConfig: c,
          updater: null,
        }).subscribe({});
        return {
          dispose: function () {
            return d.unsubscribe();
          },
        };
      };
      c.commitUpdate = function (a, b) {
        var c = a.getPublishQueue();
        this.$20(function () {
          c.commitUpdate(b), c.run();
        });
      };
      c.commitPayload = function (a, c, d) {
        this.$21(a, {
          createSource: function () {
            return b('relay-runtime/network/RelayObservable').from({ data: d });
          },
          isClientPayload: !0,
          operation: c,
          optimisticConfig: null,
          updater: null,
        }).subscribe({});
      };
      c.lookup = function (a, b) {
        return a.getStore().lookup(b);
      };
      c.execute = function (a, b) {
        var c = b.operation;
        return this.$21(a, {
          createSource: function () {
            return a
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
      c.executeSubscription = function (a, b) {
        var c = b.operation;
        b = b.updater;
        return this.$21(a, {
          createSource: function () {
            return a
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
          updater: b,
        });
      };
      c.executeMutation = function (a, b) {
        var c = b.operation,
          d = b.optimisticResponse,
          e = b.optimisticUpdater,
          f = b.updater,
          g = b.uploadables,
          h;
        (d || e) && (h = { operation: c, response: d, updater: e });
        return this.$21(a, {
          createSource: function () {
            return a
              .getNetwork()
              .execute(
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
      c.executeWithSource = function (a, b) {
        return this.$21(a, {
          createSource: function () {
            return b.source;
          },
          isClientPayload: !1,
          operation: b.operation,
          optimisticConfig: null,
          updater: null,
        });
      };
      c.isRequestActive = function (a, b) {
        a = this.$11.get(b);
        return a === 'active';
      };
      c.isServer = function () {
        return this.$8;
      };
      c.$21 = function (a, c) {
        var d = this,
          e = c.createSource,
          f = c.isClientPayload,
          g = c.operation,
          h = c.optimisticConfig,
          i = c.updater;
        return b('relay-runtime/network/RelayObservable').create(function (c) {
          var j = b('relay-runtime/store/OperationExecutor').execute({
            actorIdentifier: a.actorIdentifier,
            getDataID: d.$6,
            isClientPayload: f,
            operation: g,
            operationExecutions: d.$11,
            operationLoader: d.$12,
            operationTracker: a.getOperationTracker(),
            optimisticConfig: h,
            getPublishQueue: function (a) {
              return d.forActor(a).getPublishQueue();
            },
            reactFlightPayloadDeserializer: d.$13,
            reactFlightServerErrorHandler: d.$14,
            scheduler: d.$16,
            shouldProcessClientComponents: d.$17,
            sink: c,
            source: e(),
            getStore: function (a) {
              return d.forActor(a).getStore();
            },
            treatMissingFieldsAsNull: d.$18,
            updater: i,
            log: d.$9,
          });
          return function () {
            return j.cancel();
          };
        });
      };
      c.$20 = function (a) {
        var b = this.$16;
        b != null ? b.schedule(a) : a();
      };
      c.commitMultiActorUpdate = function (a) {
        var b = function () {
          if (d) {
            if (e >= c.length) return 'break';
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) return 'break';
            f = e.value;
          }
          var b = f,
            g = b[0],
            h = b[1];
          h.commitUpdate(function (b) {
            a(g, h, b);
          });
        };
        for (
          var c = this.$1,
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f,
            g = b();
          if (g === 'break') break;
        }
      };
      c.getScheduler = function () {
        return this.$16;
      };
      return a;
    })();
    function g() {}
    e.exports = a;
  },
  null,
);
