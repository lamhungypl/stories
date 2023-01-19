__d(
  'GraphQLSubscriptionsTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b('GeneratedLoggerUtils').log(
          'logger:GraphQLSubscriptionsLoggerConfig',
          this.$1,
          b('Banzai').BASIC,
          a,
        );
      };
      c.logVital = function (a) {
        b('GeneratedLoggerUtils').log(
          'logger:GraphQLSubscriptionsLoggerConfig',
          this.$1,
          b('Banzai').VITAL,
          a,
        );
      };
      c.logImmediately = function (a) {
        b('GeneratedLoggerUtils').log(
          'logger:GraphQLSubscriptionsLoggerConfig',
          this.$1,
          { signal: !0 },
          a,
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers['extends']({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers['extends']({}, this.$1, a);
        return this;
      };
      c.setAppBackgrounded = function (a) {
        this.$1.app_backgrounded = a;
        return this;
      };
      c.setAppState = function (a) {
        this.$1.app_state = a;
        return this;
      };
      c.setAppID = function (a) {
        this.$1.appid = a;
        return this;
      };
      c.setAppversion = function (a) {
        this.$1.appversion = a;
        return this;
      };
      c.setAttemptCount = function (a) {
        this.$1.attempt_count = a;
        return this;
      };
      c.setClientSampleWeight = function (a) {
        this.$1.client_sample_weight = a;
        return this;
      };
      c.setClientUserID = function (a) {
        this.$1.client_userid = a;
        return this;
      };
      c.setClienttime = function (a) {
        this.$1.clienttime = a;
        return this;
      };
      c.setDebugData = function (a) {
        this.$1.debug_data = a;
        return this;
      };
      c.setDeltaTime = function (a) {
        this.$1.delta_time = a;
        return this;
      };
      c.setErrorRecoveryPolicyName = function (a) {
        this.$1.error_recovery_policy_name = a;
        return this;
      };
      c.setErrorRetriesEnabled = function (a) {
        this.$1.error_retries_enabled = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setExceptionCategory = function (a) {
        this.$1.exception_category = a;
        return this;
      };
      c.setExceptionData = function (a) {
        this.$1.exception_data = a;
        return this;
      };
      c.setExceptionType = function (a) {
        this.$1.exception_type = a;
        return this;
      };
      c.setFilterChain = function (a) {
        this.$1.filter_chain = a;
        return this;
      };
      c.setForceLogContext = function (a) {
        this.$1.force_log_context = a;
        return this;
      };
      c.setHandleType = function (a) {
        this.$1.handle_type = a;
        return this;
      };
      c.setHeartbeatInterval = function (a) {
        this.$1.heartbeat_interval = a;
        return this;
      };
      c.setHeartbeatSequenceID = function (a) {
        this.$1.heartbeat_sequence_id = a;
        return this;
      };
      c.setIsemployee = function (a) {
        this.$1.isemployee = a;
        return this;
      };
      c.setMqttClientCheckpoint = function (a) {
        this.$1.mqtt_client_checkpoint = a;
        return this;
      };
      c.setMqttState = function (a) {
        this.$1.mqtt_state = a;
        return this;
      };
      c.setMutationType = function (a) {
        this.$1.mutation_type = a;
        return this;
      };
      c.setName = function (a) {
        this.$1.name = a;
        return this;
      };
      c.setPublishCluster = function (a) {
        this.$1.publish_cluster = a;
        return this;
      };
      c.setPublishID = function (a) {
        this.$1.publish_id = a;
        return this;
      };
      c.setPublishTimeMs = function (a) {
        this.$1.publish_time_ms = a;
        return this;
      };
      c.setQueryID = function (a) {
        this.$1.query_id = a;
        return this;
      };
      c.setQueryParams = function (a) {
        this.$1.query_params = b('GeneratedLoggerUtils').serializeMap(a);
        return this;
      };
      c.setRawclienttime = function (a) {
        this.$1.rawclienttime = a;
        return this;
      };
      c.setReason = function (a) {
        this.$1.reason = a;
        return this;
      };
      c.setResult = function (a) {
        this.$1.result = a;
        return this;
      };
      c.setSessionID = function (a) {
        this.$1.session_id = a;
        return this;
      };
      c.setShadowingPayloadCount = function (a) {
        this.$1.shadowing_payload_count = a;
        return this;
      };
      c.setSubscriptionCall = function (a) {
        this.$1.subscription_call = a;
        return this;
      };
      c.setSubscriptionLeg = function (a) {
        this.$1.subscription_leg = a;
        return this;
      };
      c.setSubscriptionPayloadCount = function (a) {
        this.$1.subscription_payload_count = a;
        return this;
      };
      c.setTimeSinceLastWindowShownMs = function (a) {
        this.$1.time_since_last_window_shown_ms = a;
        return this;
      };
      c.setTopic = function (a) {
        this.$1.topic = a;
        return this;
      };
      c.setTopicData = function (a) {
        this.$1.topic_data = b('GeneratedLoggerUtils').serializeMap(a);
        return this;
      };
      return a;
    })();
    c = {
      app_backgrounded: !0,
      app_state: !0,
      appid: !0,
      appversion: !0,
      attempt_count: !0,
      client_sample_weight: !0,
      client_userid: !0,
      clienttime: !0,
      debug_data: !0,
      delta_time: !0,
      error_recovery_policy_name: !0,
      error_retries_enabled: !0,
      event: !0,
      exception_category: !0,
      exception_data: !0,
      exception_type: !0,
      filter_chain: !0,
      force_log_context: !0,
      handle_type: !0,
      heartbeat_interval: !0,
      heartbeat_sequence_id: !0,
      isemployee: !0,
      mqtt_client_checkpoint: !0,
      mqtt_state: !0,
      mutation_type: !0,
      name: !0,
      publish_cluster: !0,
      publish_id: !0,
      publish_time_ms: !0,
      query_id: !0,
      query_params: !0,
      rawclienttime: !0,
      reason: !0,
      result: !0,
      session_id: !0,
      shadowing_payload_count: !0,
      subscription_call: !0,
      subscription_leg: !0,
      subscription_payload_count: !0,
      time_since_last_window_shown_ms: !0,
      topic: !0,
      topic_data: !0,
    };
    f['default'] = a;
  },
  66,
);
