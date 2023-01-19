__d(
  'GQLSManager',
  [
    'MQTTRequestStreamUtils',
    'Promise',
    'RequestStreamCommonRequestStreamCommonTypes',
    'StreamStateMachineConstants',
    'TransportSelectingClientSingleton',
    'promiseDone',
    'regeneratorRuntime',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    var h = babelHelpers['extends'](
      {},
      d('StreamStateMachineConstants').events,
      { GQLS_STATE_TRANSIT_ON_REJECT: 'onReject' },
    );
    function i(a) {
      return 'FBGQLS:' + a.toUpperCase();
    }
    a = (function () {
      function a() {}
      var e = a.prototype;
      e.subscribeViaRequestStreamWithMobileStyleTopicTransform = function (
        a,
        b,
        d,
      ) {
        d === void 0 && (d = {});
        var e = this.$2(i(a), null, b, d);
        c('promiseDone')(e);
        return {
          getTopic: function () {
            var a = new Error(
              'Unimplemented getTopic called for mobile style GQLS',
            );
            a.stack;
            throw a;
          },
          getContext: function () {
            var a = new Error(
              'Unimplemented getContext called for mobile style GQLS',
            );
            a.stack;
            throw a;
          },
          isUnsubscribed: function () {
            return this.$3;
          },
          unsubscribe: function () {
            this.$3 = !0;
            return e.then(function (a) {
              return a.unsubscribe();
            });
          },
          $3: !1,
        };
      };
      e.$2 = function (a, e, f, g) {
        var i, j, k, l, m, n, o, p;
        return b('regeneratorRuntime').async(
          function (q) {
            while (1)
              switch ((q.prev = q.next)) {
                case 0:
                  q.next = 2;
                  return b('regeneratorRuntime').awrap(this.$4());
                case 2:
                  i = q.sent;
                  j = i.patchContext(g.context);
                  k = {};
                  g.headers != null &&
                    (k = babelHelpers['extends']({}, k, g.headers));
                  k = babelHelpers['extends']({}, k, { method: a });
                  e != null && (k.topic = e);
                  l = function (a) {
                    var b = JSON.parse(a);
                    if (
                      Object.prototype.hasOwnProperty.call(b, 'payload') &&
                      Object.prototype.hasOwnProperty.call(b, 'topic')
                    ) {
                      var c = e != null ? e : b.topic;
                      f({ topic: c, payload: b.payload });
                    } else f(a);
                  };
                  m = function (a) {};
                  n = function (a) {
                    switch (a) {
                      case d('RequestStreamCommonRequestStreamCommonTypes')
                        .FlowStatus.Accepted:
                        g.gqlsLifecycleHandler &&
                          g.gqlsLifecycleHandler(
                            h.GQLS_STATE_TRANSIT_ON_CREATE,
                          );
                        break;
                      case d('RequestStreamCommonRequestStreamCommonTypes')
                        .FlowStatus.Started:
                        g.gqlsLifecycleHandler &&
                          g.gqlsLifecycleHandler(
                            h.GQLS_STATE_TRANSIT_ON_ACTIVE,
                          );
                        break;
                      case d('RequestStreamCommonRequestStreamCommonTypes')
                        .FlowStatus.Stopped:
                        g.gqlsLifecycleHandler &&
                          g.gqlsLifecycleHandler(h.GQLS_STATE_TRANSIT_ON_PAUSE);
                        break;
                    }
                  };
                  o = {
                    onData: l,
                    onTermination: function (a) {
                      var b;
                      a.message ===
                        d('MQTTRequestStreamUtils').TERMINATION_REASON_CLOSED &&
                        (b = h.GQLS_STATE_TRANSIT_ON_TERMINATE);
                      a.message ===
                        d('MQTTRequestStreamUtils')
                          .TERMINATION_REASON_REJECTED &&
                        (b = h.GQLS_STATE_TRANSIT_ON_REJECT);
                      g.gqlsLifecycleHandler &&
                        b != null &&
                        g.gqlsLifecycleHandler(b);
                    },
                    onLog: m,
                    onFlowStatus: n,
                  };
                  q.next = 14;
                  return b('regeneratorRuntime').awrap(
                    c('TransportSelectingClientSingleton').requestStream(
                      k,
                      JSON.stringify(j),
                      o,
                      g.instrumentationData,
                    ),
                  );
                case 14:
                  p = q.sent;
                  g.onSubscribe && g.onSubscribe({ data: {}, error: null });
                  return q.abrupt('return', {
                    unsubscribe: function () {
                      return b('regeneratorRuntime').async(
                        function (a) {
                          while (1)
                            switch ((a.prev = a.next)) {
                              case 0:
                                g.onUnsubscribeEager && g.onUnsubscribeEager(),
                                  p.cancel(),
                                  g.onUnsubscribe &&
                                    g.onUnsubscribe({ data: {}, error: null });
                              case 3:
                              case 'end':
                                return a.stop();
                            }
                        },
                        null,
                        this,
                      );
                    },
                  });
                case 17:
                case 'end':
                  return q.stop();
              }
          },
          null,
          this,
        );
      };
      e.$4 = function () {
        var a, d;
        return b('regeneratorRuntime').async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!(this.$1 != null)) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return', this.$1);
                case 2:
                  a = new (b('Promise'))(function (a) {
                    c('requireDeferred')('SkywalkerUtils')
                      .__setRef('GQLSManager')
                      .onReady(function (b) {
                        a(b);
                      });
                  });
                  e.next = 5;
                  return b('regeneratorRuntime').awrap(a);
                case 5:
                  d = e.sent;
                  this.$1 = d;
                  return e.abrupt('return', d);
                case 8:
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
    e = new a();
    g['default'] = e;
  },
  98,
);
