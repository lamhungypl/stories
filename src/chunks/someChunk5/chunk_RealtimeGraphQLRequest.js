__d(
  'RealtimeGraphQLRequest',
  [
    'invariant',
    'RTISubscriptionManagerConfig',
    'RequestStreamCommonRequestStreamCommonTypes',
    'TransportSelectingClientSingleton',
    'nullthrows',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = this,
          e = a.method,
          f = a.doc_id,
          g = a.is_intern,
          i = a.extra_headers;
        a = a.body;
        this.$11 = function (a) {
          switch (a) {
            case d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
              .Started:
              if (b.$10) {
                b.$9 != null || h(0, 13576);
                a = Date.now() - c('nullthrows')(b.$9);
                b.$7 != null && b.$7(a);
              } else (b.$10 = !0), b.$5 != null && b.$5();
              break;
            case d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
              .Stopped:
              b.$9 = Date.now();
              b.$6 != null && b.$6(!1, !1);
              break;
            default:
              break;
          }
        };
        this.$10 = !1;
        e = { method: e, doc_id: f };
        g =
          typeof g === 'boolean'
            ? g
            : (f = c('RTISubscriptionManagerConfig').is_intern) != null
            ? f
            : !1;
        g && (e = babelHelpers['extends']({}, e, { www_tier: 'intern' }));
        i != null && (e = babelHelpers['extends']({}, e, i));
        this.$1 = e;
        this.$2 = JSON.stringify(a);
      }
      var e = a.prototype;
      e.onResponse = function (a) {
        this.$3 = a;
        return this;
      };
      e.onError = function (a) {
        this.$4 = a;
        return this;
      };
      e.onActive = function (a) {
        this.$5 = a;
        return this;
      };
      e.onPause = function (a) {
        this.$6 = a;
        return this;
      };
      e.onResume = function (a) {
        this.$7 = a;
        return this;
      };
      e.onRetryUpdateRequestBody = function (a) {
        this.$8 = a;
        this.$1 = babelHelpers['extends']({}, this.$1, {
          request_stream_retry: 'false',
        });
        return this;
      };
      e.send = function () {
        var a, d;
        return b('regeneratorRuntime').async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  this.$3 != null || h(0, 33593);
                  a = { onData: c('nullthrows')(this.$3) };
                  this.$4 != null &&
                    (a = babelHelpers['extends']({}, a, {
                      onTermination: this.$4,
                    }));
                  a = babelHelpers['extends']({}, a, {
                    onFlowStatus: this.$11,
                  });
                  this.$8 != null &&
                    (a = babelHelpers['extends']({}, a, {
                      onRetryUpdateRequestBody: this.$8,
                    }));
                  e.next = 7;
                  return b('regeneratorRuntime').awrap(
                    c('TransportSelectingClientSingleton').requestStream(
                      this.$1,
                      this.$2,
                      a,
                    ),
                  );
                case 7:
                  d = e.sent;
                  return e.abrupt('return', {
                    cancel: function () {
                      d.cancel();
                    },
                    amendExperimental: function (a) {
                      try {
                        d.amendWithoutAck(JSON.stringify(a));
                        return !0;
                      } catch (a) {
                        return !1;
                      }
                    },
                  });
                case 9:
                case 'end':
                  return e.stop();
              }
          },
          null,
          this,
        );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
