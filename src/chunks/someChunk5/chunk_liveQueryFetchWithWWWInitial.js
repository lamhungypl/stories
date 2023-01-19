__d(
  'liveQueryFetchWithWWWInitial',
  [
    'invariant',
    'LiveQueryEventsLoggingResolver',
    'LiveQueryWebRelayKillList',
    'RelayGraphQLRequestUtils',
    'RelayRuntime',
    'makeGraphQLLiveQueryRequest',
    'nullthrows',
    'promiseDone',
    'uuid',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a, b, e, f) {
      if (!k() || j(e.config_id)) return f;
      var g = Date.now();
      a.id != null || h(0, 13279);
      var l = i();
      a.metadata.live != null &&
        (typeof a.metadata.live.live_query_request_id === 'string' &&
          (l = a.metadata.live.live_query_request_id),
        typeof a.metadata.live.timeStamp === 'number' &&
          (g = a.metadata.live.timeStamp));
      var m = {
        doc_id: c('nullthrows')(a.id),
        config_id: e.config_id,
        actor_id: e.actor_id,
        variables: b,
        live_query_request_id: l,
      };
      e.access_token !== '' &&
        (m = babelHelpers['extends']({}, m, { access_token: e.access_token }));
      var n = d('LiveQueryEventsLoggingResolver').tempResolveLoggingContext();
      n != null && (m = babelHelpers['extends']({}, m, { logging_context: n }));
      return d('RelayRuntime').Observable.create(function (a) {
        var b = !1,
          e = null;
        f.subscribe({
          next: function (c) {
            var e = Date.now();
            if (c.extensions != null && c.extensions.is_final === !0) {
              d('LiveQueryEventsLoggingResolver').logEvent(
                'client_update',
                'www_initials_is_final',
                m.doc_id,
                m.config_id,
                l,
                n,
                null,
                e - g,
              );
              if (c.extensions != null && c.extensions.live_query != null) {
                e = c.extensions.live_query;
                typeof e.priming_token === 'string' &&
                  (m = babelHelpers['extends']({}, m, {
                    priming_token: e.priming_token,
                  }));
                typeof e.response_digest === 'string' &&
                  (m = babelHelpers['extends']({}, m, {
                    last_response_digest: e.response_digest,
                  }));
                typeof e.disable === 'boolean' && (b = e.disable);
              }
            }
            a.next(c);
          },
          error: function (b) {
            a.error(b);
          },
          complete: function () {
            if (b) {
              a.complete();
              return function () {};
            }
            e = c('makeGraphQLLiveQueryRequest')(m)
              .onResponse(function (b) {
                var e;
                try {
                  (e = c('RelayGraphQLRequestUtils').parsePayload(b)),
                    typeof e === 'object' || h(0, 12937);
                } catch (b) {
                  d('LiveQueryEventsLoggingResolver').logEvent(
                    'client_update',
                    'error_parsing_response',
                    m.doc_id,
                    m.config_id,
                    l,
                    n,
                    b.message,
                  );
                  return a.error(b);
                }
                if (!('errors' in e) && !('data' in e)) {
                  d('LiveQueryEventsLoggingResolver').logEvent(
                    'client_update',
                    'error_empty_response',
                    m.doc_id,
                    m.config_id,
                    l,
                    n,
                    'Parsed network response is empty',
                  );
                  return a.error(
                    d('RelayRuntime').RelayError.createWarning(
                      'EmptyResponseError',
                      'Parsed network response is empty',
                    ),
                  );
                }
                if (e.errors)
                  for (
                    var b = e.errors,
                      f = Array.isArray(b),
                      g = 0,
                      b = f
                        ? b
                        : b[
                            typeof Symbol === 'function'
                              ? Symbol.iterator
                              : '@@iterator'
                          ]();
                    ;

                  ) {
                    var i;
                    if (f) {
                      if (g >= b.length) break;
                      i = b[g++];
                    } else {
                      g = b.next();
                      if (g.done) break;
                      i = g.value;
                    }
                    i = i;
                    if (i.severity === 'CRITICAL') {
                      i = c('RelayGraphQLRequestUtils').createErrorFromPayload(
                        i,
                      );
                      d('LiveQueryEventsLoggingResolver').logEvent(
                        'client_update',
                        'error_in_response',
                        m.doc_id,
                        m.config_id,
                        l,
                        n,
                        i.message,
                      );
                      return a.error(i);
                    }
                  }
                d('LiveQueryEventsLoggingResolver').logEvent(
                  'client_update',
                  'regular_response_update',
                  m.doc_id,
                  m.config_id,
                  l,
                  n,
                );
                a.closed || a.next(e);
              })
              .onError(function (a) {
                d('LiveQueryEventsLoggingResolver').logEvent(
                  'client_update',
                  'error_received',
                  m.doc_id,
                  m.config_id,
                  l,
                  n,
                  a.message,
                );
              })
              .onActive(function () {
                d('LiveQueryEventsLoggingResolver').logEvent(
                  'client_subscribe',
                  'initial_subscribe_request',
                  m.doc_id,
                  m.config_id,
                  l,
                  n,
                );
              })
              .onPause(function (a, b) {
                d('LiveQueryEventsLoggingResolver').logEvent(
                  'client_unsubscribe',
                  'subscription_paused',
                  m.doc_id,
                  m.config_id,
                  l,
                  n,
                );
              })
              .onResume(function (a) {
                d('LiveQueryEventsLoggingResolver').logEvent(
                  'client_subscribe',
                  'subscription_resumed',
                  m.doc_id,
                  m.config_id,
                  l,
                  n,
                );
              })
              .send();
          },
        });
        return function () {
          e != null &&
            c('promiseDone')(e, function (a) {
              a.cancel(),
                d('LiveQueryEventsLoggingResolver').logEvent(
                  'client_unsubscribe',
                  'regular_unsubscribe',
                  m.doc_id,
                  m.config_id,
                  l,
                  n,
                );
            });
        };
      });
    }
    function i() {
      return c('uuid')();
    }
    function j(a) {
      for (
        var b = c('LiveQueryWebRelayKillList').liveQueryWebRelayKillList,
          d = Array.isArray(b),
          e = 0,
          b = d
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= b.length) break;
          f = b[e++];
        } else {
          e = b.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        if (a === f) return !0;
      }
      return !1;
    }
    function k() {
      return 'WebSocket' in window;
    }
    g['default'] = a;
  },
  98,
);
