__d(
  'LiveQueryEventsLoggingResolver',
  [
    'GraphqlLiveQueryEventFalcoEvent',
    'Random',
    'RealtimeFrameworksCounterFalcoEvent',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    var h = 'default',
      i = 'without_sampling';
    function a() {
      if (c('gkx')('1133447'))
        return {
          force_log_context: i,
          sampling_rate: 1,
          client_has_ods_usecase_counters: !0,
        };
      else if (d('Random').coinflip(1e4))
        return {
          force_log_context: h,
          sampling_rate: 1e4,
          client_has_ods_usecase_counters: !0,
        };
    }
    function b(a, b, d, e, f, g, h, i) {
      g != null &&
        g.sampling_rate != null &&
        c('GraphqlLiveQueryEventFalcoEvent').log(function () {
          return {
            event: a,
            event_source: 'web',
            event_reason: b,
            config_id: e,
            doc_id_str: d,
            force_log_context: g.force_log_context,
            logging_sampling_rate: g.sampling_rate,
            live_query_request_id: f,
            error_info: h,
            initial_response_latency_ms: i,
          };
        }),
        c('RealtimeFrameworksCounterFalcoEvent').log(function () {
          return {
            event: a,
            event_detail: b,
            use_case: e,
            use_case_type: 'live_query',
          };
        });
    }
    g.tempResolveLoggingContext = a;
    g.logEvent = b;
  },
  98,
);
