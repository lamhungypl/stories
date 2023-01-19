__d(
  'RelayRTIUtils',
  [
    'ChannelClientID',
    'GqlsUseCaseSamplingRateMap',
    'GraphQLSubscriptionsTypedLogger',
    'GraphqlSubscriptionsDebugEventFalcoEvent',
    'GraphqlSubscriptionsVolumeEventFalcoEvent',
    'Random',
    'RealtimeFrameworksCounterFalcoEvent',
    'gkx',
    'md5',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1e4,
      i = 1,
      j = 1e4,
      k = 'web',
      l = '155160167952447';
    function a(a, b, e, f, g) {
      var j = null;
      switch (a) {
        case 'client_subscribe':
          j = 'client_subscribe';
          break;
        case 'client_unsubscribe':
          j = 'client_unsubscribe';
          break;
        case 'receivepayload':
          j = 'client_received_payload';
          break;
      }
      j !== null &&
        c('RealtimeFrameworksCounterFalcoEvent').log(function () {
          var a;
          return {
            event: (a = j) != null ? a : '',
            event_detail: 'null',
            use_case: b,
            use_case_type: 'gqls',
          };
        });
      c('gkx')('5564') &&
        c('GraphqlSubscriptionsDebugEventFalcoEvent').log(function () {
          return {
            event: a,
            event_source: k,
            subscription_name: b,
            query_param_string: JSON.stringify(e.input),
            handle_type: 'request_stream',
            query_id: g,
            skywalker_session_id: d('ChannelClientID').getID(),
          };
        });
      var l = m(b);
      d('Random').coinflip(l) &&
        c('GraphqlSubscriptionsVolumeEventFalcoEvent').log(function () {
          return {
            event: a,
            event_source: k,
            subscription_name: b,
            query_param_string: JSON.stringify(e.input),
            handle_type: 'request_stream',
            query_id: g,
            sampling_weight: String(l),
          };
        });
      var n = c('gkx')('1243442') || f != null ? i : h;
      if (!d('Random').coinflip(n)) return;
      var o = new (c('GraphQLSubscriptionsTypedLogger'))();
      o.setSubscriptionCall(b)
        .setQueryParams({ input: JSON.stringify(e.input) })
        .setForceLogContext(f)
        .setEvent(a)
        .setHandleType('request_stream')
        .setClienttime(Date.now() / 1e3)
        .setClientSampleWeight(n)
        .setQueryID(g)
        .setSessionID(d('ChannelClientID').getID())
        .log();
    }
    function b(a) {
      return a.split('/').reverse()[1];
    }
    function m(a) {
      var b = c('GqlsUseCaseSamplingRateMap').GqlsUseCaseSamplingRateMap;
      return b[a] || j;
    }
    function e(a, b) {
      b = babelHelpers['extends']({}, b);
      delete b.client_subscription_id;
      b = (JSON.stringify(b).match(/[a-zA-Z0-9\-_]+/g) || [])
        .concat(a)
        .sort()
        .join(':');
      return c('md5')(b);
    }
    function f(a) {
      return a === 'pegasus_comment_create_subscribe' ? !0 : !1;
    }
    function n(a) {
      return (a === 'group_post_deletion_subscribe' ||
        a === 'group_comment_delete_subscribe' ||
        a === 'group_post_creation_subscribe' ||
        a === 'group_post_edit_subscribe' ||
        a === 'group_comment_edit_subscribe' ||
        a === 'group_comment_creation_subscribe') &&
        c('gkx')('4096')
        ? 'resumption_lwg_subscription'
        : '';
    }
    g.GRAPH_SERVICES_SDK_APP_ID = l;
    g.logSubscriptionEvent = a;
    g.extractUseCaseFromTopic = b;
    g.computeRoutingHint = e;
    g.useJSScheduler = f;
    g.experimentPegasusResumptionGroup = n;
  },
  98,
);
