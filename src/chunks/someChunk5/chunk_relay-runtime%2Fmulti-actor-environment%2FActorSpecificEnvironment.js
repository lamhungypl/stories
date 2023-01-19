__d(
  'relay-runtime/multi-actor-environment/ActorSpecificEnvironment',
  [
    'relay-runtime/network/wrapNetworkWithLogObserver',
    'relay-runtime/store/RelayOperationTracker',
    'relay-runtime/store/RelayPublishQueue',
    'relay-runtime/store/StoreInspector',
    'relay-runtime/store/defaultGetDataID',
    'relay-runtime/util/registerEnvironmentWithDevTools',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        var c = this;
        this.configName = a.configName;
        this.actorIdentifier = a.actorIdentifier;
        this.multiActorEnvironment = a.multiActorEnvironment;
        this.__log = a.logFn;
        this.requiredFieldLogger = a.requiredFieldLogger;
        this.$3 = new (b('relay-runtime/store/RelayOperationTracker'))();
        this.$5 = a.store;
        this.$2 = b('relay-runtime/network/wrapNetworkWithLogObserver')(
          this,
          a.network,
        );
        this.$4 = new (b('relay-runtime/store/RelayPublishQueue'))(
          a.store,
          a.handlerProvider,
          b('relay-runtime/store/defaultGetDataID'),
          a.missingFieldHandlers,
        );
        this.$1 = a.defaultRenderPolicy;
        this.options = { actorID: this.actorIdentifier };
        this['@@RelayModernEnvironment'] = !0;
        b('relay-runtime/util/registerEnvironmentWithDevTools')(this);
      }
      var c = a.prototype;
      c.getPublishQueue = function () {
        return this.$4;
      };
      c.UNSTABLE_getDefaultRenderPolicy = function () {
        return this.$1;
      };
      c.applyMutation = function (a) {
        return this.multiActorEnvironment.applyMutation(this, a);
      };
      c.applyUpdate = function (a) {
        return this.multiActorEnvironment.applyUpdate(this, a);
      };
      c.revertUpdate = function (a) {
        return this.multiActorEnvironment.revertUpdate(this, a);
      };
      c.replaceUpdate = function (a, b) {
        return this.multiActorEnvironment.replaceUpdate(this, a, b);
      };
      c.check = function (a) {
        return this.multiActorEnvironment.check(this, a);
      };
      c.subscribe = function (a, b) {
        return this.multiActorEnvironment.subscribe(this, a, b);
      };
      c.retain = function (a) {
        return this.multiActorEnvironment.retain(this, a);
      };
      c.commitUpdate = function (a) {
        return this.multiActorEnvironment.commitUpdate(this, a);
      };
      c.commitPayload = function (a, b) {
        return this.multiActorEnvironment.commitPayload(this, a, b);
      };
      c.getNetwork = function () {
        return this.$2;
      };
      c.getStore = function () {
        return this.$5;
      };
      c.getOperationTracker = function () {
        return this.$3;
      };
      c.getScheduler = function () {
        return this.multiActorEnvironment.getScheduler();
      };
      c.lookup = function (a) {
        return this.multiActorEnvironment.lookup(this, a);
      };
      c.execute = function (a) {
        return this.multiActorEnvironment.execute(this, a);
      };
      c.executeSubscription = function (a) {
        return this.multiActorEnvironment.executeSubscription(this, a);
      };
      c.executeMutation = function (a) {
        return this.multiActorEnvironment.executeMutation(this, a);
      };
      c.executeWithSource = function (a) {
        return this.multiActorEnvironment.executeWithSource(this, a);
      };
      c.isRequestActive = function (a) {
        return this.multiActorEnvironment.isRequestActive(this, a);
      };
      c.isServer = function () {
        return this.multiActorEnvironment.isServer();
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
