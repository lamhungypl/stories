__d(
  'liveQueryFetch',
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
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('RelayRuntime').Observable,
      i = b('RelayRuntime').RelayError;
    function a(a, c, d) {
      if (!l() || k(d.config_id))
        return h.create(function (a) {
          a.complete();
          return;
        });
      var e = Date.now(),
        f = 0;
      a.id != null || g(0, 13279);
      var m = j();
      a.metadata.live != null &&
        (typeof a.metadata.live.live_query_request_id === 'string' &&
          (m = a.metadata.live.live_query_request_id),
        typeof a.metadata.live.timeStamp === 'number' &&
          (e = a.metadata.live.timeStamp));
      var n = {
        doc_id: b('nullthrows')(a.id),
        config_id: d.config_id,
        actor_id: d.actor_id,
        variables: c,
        live_query_request_id: m,
      };
      d.access_token !== '' &&
        (n = babelHelpers['extends']({}, n, { access_token: d.access_token }));
      var o = b('LiveQueryEventsLoggingResolver').tempResolveLoggingContext();
      o != null &&
        ((o = babelHelpers['extends']({}, o, {
          client_send_request_timestamp: e,
        })),
        (n = babelHelpers['extends']({}, n, { logging_context: o })));
      return h.create(function (a) {
        var c = b('makeGraphQLLiveQueryRequest')(n)
          .onResponse(function (c) {
            var d = Date.now(),
              h;
            try {
              (h = b('RelayGraphQLRequestUtils').parsePayload(c)),
                typeof h === 'object' || g(0, 12937);
            } catch (c) {
              b('LiveQueryEventsLoggingResolver').logEvent(
                'client_update',
                'error_parsing_response',
                n.doc_id,
                n.config_id,
                m,
                o,
                c.message,
              );
              return a.error(c);
            }
            if (!('errors' in h) && !('data' in h)) {
              b('LiveQueryEventsLoggingResolver').logEvent(
                'client_update',
                'error_empty_response',
                n.doc_id,
                n.config_id,
                m,
                o,
                'Parsed network response is empty',
              );
              return a.error(
                i.createWarning(
                  'EmptyResponseError',
                  'Parsed network response is empty',
                ),
              );
            }
            if (h.errors)
              for (
                var c = h.errors,
                  j = Array.isArray(c),
                  k = 0,
                  c = j
                    ? c
                    : c[
                        typeof Symbol === 'function'
                          ? Symbol.iterator
                          : '@@iterator'
                      ]();
                ;

              ) {
                var l;
                if (j) {
                  if (k >= c.length) break;
                  l = c[k++];
                } else {
                  k = c.next();
                  if (k.done) break;
                  l = k.value;
                }
                l = l;
                if (l.severity === 'CRITICAL') {
                  l = b('RelayGraphQLRequestUtils').createErrorFromPayload(l);
                  b('LiveQueryEventsLoggingResolver').logEvent(
                    'client_update',
                    'error_in_response',
                    n.doc_id,
                    n.config_id,
                    m,
                    o,
                    l.message,
                  );
                  return a.error(l);
                }
              }
            f == 0
              ? b('LiveQueryEventsLoggingResolver').logEvent(
                  'client_update',
                  'live_query_initial',
                  n.doc_id,
                  n.config_id,
                  m,
                  o,
                  null,
                  d - e,
                )
              : b('LiveQueryEventsLoggingResolver').logEvent(
                  'client_update',
                  'regular_response_update',
                  n.doc_id,
                  n.config_id,
                  m,
                  o,
                );
            f += 1;
            a.closed || a.next(h);
          })
          .onError(function (a) {
            b('LiveQueryEventsLoggingResolver').logEvent(
              'client_update',
              'error_received',
              n.doc_id,
              n.config_id,
              m,
              o,
              a.message,
            );
          })
          .onActive(function () {
            b('LiveQueryEventsLoggingResolver').logEvent(
              'client_subscribe',
              'initial_subscribe_request',
              n.doc_id,
              n.config_id,
              m,
              o,
            );
          })
          .onPause(function (a, c) {
            b('LiveQueryEventsLoggingResolver').logEvent(
              'client_unsubscribe',
              'subscription_paused',
              n.doc_id,
              n.config_id,
              m,
              o,
            );
          })
          .onResume(function (a) {
            b('LiveQueryEventsLoggingResolver').logEvent(
              'client_subscribe',
              'subscription_resumed',
              n.doc_id,
              n.config_id,
              m,
              o,
            );
          })
          .send();
        return function () {
          b('promiseDone')(c, function (a) {
            a.cancel(),
              b('LiveQueryEventsLoggingResolver').logEvent(
                'client_unsubscribe',
                'regular_unsubscribe',
                n.doc_id,
                n.config_id,
                m,
                o,
              );
          });
        };
      });
    }
    function j() {
      return b('uuid')();
    }
    function k(a) {
      for (
        var c = b('LiveQueryWebRelayKillList').liveQueryWebRelayKillList,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        if (a === f) return !0;
      }
      return !1;
    }
    function l() {
      return 'WebSocket' in window;
    }
    e.exports = a;
  },
  null,
);
