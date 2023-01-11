/*FB_PKG_DELIM*/

__d(
  'CometDialogStartAlignedTextHeader.react',
  [
    'fbt',
    'CometCircleButton.react',
    'CometDialogHeaderContainer.react',
    'CrossFilled24.svg.react',
    'TetraText.react',
    'emptyFunction',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.closeTestID;
      b = b === void 0 ? 'close-button' : b;
      b = a.disabled;
      b = b === void 0 ? !1 : b;
      var d = a.withCloseButton;
      d = d === void 0 ? !0 : d;
      var e = a.onClose;
      e = e === void 0 ? c('emptyFunction') : e;
      var f = a.text,
        g = a.id;
      a = a.withoutDivider;
      a = a === void 0 ? !0 : a;
      return i.jsxs(c('CometDialogHeaderContainer.react'), {
        withDivider: !a,
        children: [
          f != null &&
            i.jsx('div', {
              className: 'x1d52u69 xw7yly9 x1yztbdb',
              children: i.jsx(c('TetraText.react'), {
                align: 'start',
                id: g,
                isSemanticHeading: !0,
                type: 'headlineEmphasized2',
                children: f,
              }),
            }),
          i.jsx('div', {
            className: 'xqcrz7y x1d52u69 xktsk01 x14vqqas xod5an3',
            children: d
              ? i.jsx(c('CometCircleButton.react'), {
                  disabled: b,
                  icon: c('CrossFilled24.svg.react'),
                  label: h._('__JHASH__tnRfHlva-bL__JHASH__'),
                  onPress: e,
                  size: 36,
                  testid: void 0,
                })
              : i.jsx('div', {
                  className: 'xc9qbxq xw7yly9 x1yztbdb x14qfxbe',
                }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometAlertDialogImpl.react',
  [
    'fbt',
    'CometDialog.react',
    'CometDialogFooter.react',
    'CometDialogStartAlignedTextHeader.react',
    'TetraText.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.body,
        d = a.close,
        e = a.onClose;
      a = a.title;
      return i.jsx(c('CometDialog.react'), {
        footer: i.jsx(c('CometDialogFooter.react'), {
          expanding: !1,
          primary: {
            label: (d = d) != null ? d : h._('__JHASH__XzprMQh2D7n__JHASH__'),
            onPress: e,
            testid: 'CometAlertDialogImpl-closeButton',
          },
        }),
        header: i.jsx(c('CometDialogStartAlignedTextHeader.react'), {
          onClose: e,
          text: a,
        }),
        label: a,
        children: i.jsx('div', {
          className: 'x1swvt13 x1pi30zi x1n2onr6',
          children: i.jsx(c('TetraText.react'), { type: 'body3', children: b }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'BladeRunnerConfig',
  [
    'RTISubscriptionManagerConfig',
    'WebDriverConfig',
    'cr:3024',
    'gkx',
    'isEmpty',
  ],
  function (a, b, c, d, e, f, g) {
    var h = 'javascript-sandbox',
      i = 'OverrideServer',
      j = 'www_sandbox';
    a = (function () {
      function a() {}
      var d = a.prototype;
      d.patchRequestHeaders = function (a) {
        var d = {},
          e = c('RTISubscriptionManagerConfig').bladerunner_www_sandbox;
        if (!c('isEmpty')(c('WebDriverConfig').auxiliaryServiceInfo)) {
          var f;
          f =
            (f = c('WebDriverConfig').auxiliaryServiceInfo.BladeRunner) != null
              ? f
              : c('WebDriverConfig').auxiliaryServiceInfo[
                  'BladeRunner-sandcastle'
                ];
          f != null
            ? (typeof f.ip_address === 'string'
                ? (d[i] = f.ip_address + ':18295')
                : typeof f.hostname === 'string' &&
                  (d[i] = f.hostname + ':18295'),
              typeof c('WebDriverConfig').originHost === 'string' &&
                (d[j] = 'www.' + c('WebDriverConfig').originHost))
            : e != null && (d[h] = e);
        } else e != null && (d[h] = e);
        if (c('WebDriverConfig').isTestRunning && c('gkx')('5639')) {
          f = b('cr:3024') == null ? void 0 : b('cr:3024').get();
          f != null && ((d.is_test = '1'), (d.original_request_id = f));
        }
        c('gkx')('307') && (d['Accept-Ack'] = 'RSAck');
        for (e in a) d[e] = a[e];
        d.http_referer = window.location.href;
        return d;
      };
      return a;
    })();
    d = new a();
    e = d;
    g['default'] = e;
  },
  98,
);
__d(
  'BladeRunnerLogger',
  ['FBLogger', 'ODS'],
  function (a, b, c, d, e, f, g) {
    var h = 'bladerunner_js_client',
      i = { info: 'info', warning: 'warning', exception: 'exception' };
    a = (function () {
      function a() {
        this.setFBLoggerLevel(1);
      }
      var b = a.prototype;
      b.info = function (a) {
        this.$2 >= 2 && c('FBLogger')(h).info('BladeRunner info: %s', a),
          this.$3(i.info, a);
      };
      b.warn = function (a) {
        this.$2 >= 1 && c('FBLogger')(h).warn('BladeRunner warn: %s', a),
          this.$3(i.warning, a);
      };
      b.exception = function (a, b) {
        b === void 0 && (b = '');
        var d = b + ' ' + a.toString();
        this.$2 >= 0 &&
          c('FBLogger')(h).warn(
            'BladeRunner exception: %s, %s',
            b,
            a.toString(),
          );
        this.$3(i.exception, d);
      };
      b.trimForLogging = function (a) {
        var b = 1024;
        return typeof a === 'string' && a.length > b
          ? '[trimmed]:' + a.substring(0, b) + '...'
          : a;
      };
      b.bumpCounter = function (a, b) {
        b === void 0 && (b = 1),
          d('ODS').bumpEntityKey(2966, 'BladeRunnerClient', a, b);
      };
      b.setClientSessionId = function (a) {
        this.$1 = a;
      };
      b.setFBLoggerLevel = function (a) {
        this.$2 = a;
      };
      b.$3 = function (a, b) {};
      return a;
    })();
    b = new a();
    e = b;
    g['default'] = e;
  },
  98,
);
__d(
  'BladeRunnerTypes',
  [],
  function (a, b, c, d, e, f, g) {
    a = {
      REQUEST: 1,
      DATA: 2,
      DATA_ACK: 3,
      STATUS_UPDATE: 4,
      REWRITE_REQUEST: 5,
      LOG: 6,
    };
    b = { BLADE_RUNNER: 1, GATEWAY: 2 };
    g.StreamFrameType = a;
    g.StreamRequestType = b;
  },
  98,
);
__d(
  'BladeRunnerTypesInternal',
  ['Base64', 'BladeRunnerLogger', 'BladeRunnerTypes'],
  function (a, b, c, d, e, f, g) {
    var h = (function () {
        function a() {}
        var b = a.prototype;
        b.getHeaders = function () {
          if (this.headers != null) return this.headers;
          throw new Error('Expected headers');
        };
        b.getInstrumentationData = function () {
          if (
            this.instrumentationData != null &&
            this.instrumentationData.length > 0
          )
            try {
              return JSON.parse(this.instrumentationData);
            } catch (a) {
              return null;
            }
          else return null;
        };
        b.updateRetryRequestPayload = function (a) {
          a != null
            ? (this.payload = c('Base64').encode(a))
            : (this.payload = null);
        };
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.requestType = o(b.requestType);
          c.payload = r(b.payload);
          c.headers = u(b.headers);
          c.extraHeader = r(b.extraHeader);
          c.requestTarget = r(b.requestTarget);
          c.instrumentationData = r(b.instrumentationData);
          return c;
        };
        return a;
      })(),
      i = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.dataId = p(b.dataId);
          c.data = r(b.data);
          c.shouldAck = w(b.shouldAck);
          return c;
        };
        var b = a.prototype;
        b.rawData = function () {
          if (this.data == null) throw new Error('Expected data');
          return this.data;
        };
        b.rawDataSize = function () {
          return this.data == null ? 0 : this.data.length;
        };
        b.decodeData = function () {
          if (this.data == null) throw new Error('Expected data');
          return c('Base64').decode(this.data);
        };
        b.setData = function (a) {
          this.data = c('Base64').encode(a);
        };
        b.getInstrumentationData = function () {
          if (this.instrumentationData != null)
            return JSON.parse(this.instrumentationData);
          else return null;
        };
        return a;
      })(),
      j = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.dataId = o(b.dataId);
          c.success = v(b.success);
          c.message = r(b.message);
          c.code = p(b.code);
          return c;
        };
        return a;
      })();
    j.ACK_CODE_LANDED_AND_ACCEPTED = 20;
    j.ACK_CODE_LANDED_BUT_NOT_ACCEPTED = 21;
    j.ACK_CODE_FAILED_TO_LAND = 50;
    var k = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = p(b.streamId);
          c.message = r(b.message);
          return c;
        };
        return a;
      })(),
      l = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.status = o(b.status);
          c.message = r(b.message);
          c.code = p(b.code);
          c.shouldRetry = w(b.shouldRetry);
          c.retryDelayMs = p(b.retryDelayMs);
          return c;
        };
        return a;
      })(),
      m = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.newBody = r(b.newBody);
          c.newExtraHeader = r(b.newExtraHeader);
          c.patchExtraHeader = r(b.patchExtraHeader);
          c.killBody = w(b.killBody);
          c.temporary = w(b.temporary);
          return c;
        };
        return a;
      })(),
      n = (function () {
        function a() {}
        var b = a.prototype;
        b.getRequest = function () {
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.REQUEST &&
            this.request != null
          )
            return this.request;
          throw new Error('Expected request');
        };
        b.getData = function () {
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.DATA &&
            this.data != null
          )
            return this.data;
          throw new Error('Expected data');
        };
        b.getDataAck = function () {
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.DATA_ACK &&
            this.dataAck != null
          )
            return this.dataAck;
          throw new Error('Expected dataAck');
        };
        b.getStatusUpdate = function () {
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.STATUS_UPDATE &&
            this.statusUpdate != null
          )
            return this.statusUpdate;
          throw new Error('Expected status update');
        };
        b.getLog = function () {
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.LOG &&
            this.log != null
          )
            return this.log;
          throw new Error('Expected log');
        };
        b.getRewriteRequest = function () {
          if (
            this.type ==
              d('BladeRunnerTypes').StreamFrameType.REWRITE_REQUEST &&
            this.rewriteRequest != null
          )
            return this.rewriteRequest;
          throw new Error('Expected rewrite request');
        };
        b.getStreamId = function () {
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.REQUEST &&
            this.request != null
          )
            return this.request.streamId;
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.DATA &&
            this.data != null
          )
            return this.data.streamId;
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.STATUS_UPDATE &&
            this.statusUpdate != null
          )
            return this.statusUpdate.streamId;
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.LOG &&
            this.log != null
          )
            return this.log.streamId;
          if (
            this.type ==
              d('BladeRunnerTypes').StreamFrameType.REWRITE_REQUEST &&
            this.rewriteRequest != null
          )
            return this.rewriteRequest.streamId;
          if (
            this.type == d('BladeRunnerTypes').StreamFrameType.DATA_ACK &&
            this.dataAck != null
          )
            return this.dataAck.streamId;
          throw new Error('Frame with unexpected type');
        };
        b.isInstrumented = function () {
          if (this.type === d('BladeRunnerTypes').StreamFrameType.REQUEST)
            return this.getRequest().instrumentationData != null;
          else if (this.type === d('BladeRunnerTypes').StreamFrameType.DATA)
            return this.getData().instrumentationData != null;
          else return !1;
        };
        a.readObject = function (b) {
          var e = new a();
          e.type = o(b.type);
          switch (e.type) {
            case d('BladeRunnerTypes').StreamFrameType.REQUEST:
              e.request = h.readObject(s(b.request));
              break;
            case d('BladeRunnerTypes').StreamFrameType.DATA:
              e.data = i.readObject(s(b.data));
              break;
            case d('BladeRunnerTypes').StreamFrameType.DATA_ACK:
              e.dataAck = j.readObject(s(b.dataAck));
              break;
            case d('BladeRunnerTypes').StreamFrameType.STATUS_UPDATE:
              e.statusUpdate = l.readObject(s(b.statusUpdate));
              break;
            case d('BladeRunnerTypes').StreamFrameType.LOG:
              e.log = k.readObject(s(b.log));
              break;
            case d('BladeRunnerTypes').StreamFrameType.REWRITE_REQUEST:
              e.rewriteRequest = m.readObject(s(b.rewriteRequest));
              break;
            default:
              c('BladeRunnerLogger').warn(
                'Frame with unexpected type: ' + e.type,
              );
              return null;
          }
          return e;
        };
        a.newRequestFrame = function (b) {
          var c = new a();
          c.type = d('BladeRunnerTypes').StreamFrameType.REQUEST;
          c.request = b;
          return c;
        };
        a.newDataFrame = function (b) {
          var c = new a();
          c.type = d('BladeRunnerTypes').StreamFrameType.DATA;
          c.data = b;
          return c;
        };
        a.newDataAckFrame = function (b) {
          var c = new a();
          c.type = d('BladeRunnerTypes').StreamFrameType.DATA_ACK;
          c.dataAck = b;
          return c;
        };
        a.newStatusUpdateFrame = function (b) {
          var c = new a();
          c.type = d('BladeRunnerTypes').StreamFrameType.STATUS_UPDATE;
          c.statusUpdate = b;
          return c;
        };
        a.newLogFrame = function (b) {
          var c = new a();
          c.type = d('BladeRunnerTypes').StreamFrameType.LOG;
          c.log = b;
          return c;
        };
        a.newRewriteRequestFrame = function (b) {
          var c = new a();
          c.type = d('BladeRunnerTypes').StreamFrameType.REWRITE_REQUEST;
          c.rewriteRequest = b;
          return c;
        };
        return a;
      })();
    a = (function () {
      function a(a, b, c) {
        (this.batchId = a), (this.frames = b), (this.instrumentationData = c);
      }
      var b = a.prototype;
      b.getFrames = function () {
        if (this.frames != null) return this.frames;
        throw new Error('Expected frames');
      };
      b.getInstrumentationData = function () {
        if (this.instrumentationData != null)
          try {
            return JSON.parse(this.instrumentationData);
          } catch (a) {
            return null;
          }
        else return null;
      };
      b.getInstrumentationDataDfTraceId = function () {
        if (this.instrumentationData != null)
          try {
            var a = JSON.parse(this.instrumentationData);
            return (a = a.dataFlowTracingData) == null ? void 0 : a.traceId;
          } catch (a) {
            return null;
          }
        else return null;
      };
      b.write = function () {
        return JSON.stringify(this);
      };
      b.isInstrumented = function () {
        return this.getFrames().some(function (a) {
          return a.isInstrumented();
        });
      };
      a.read = function (b) {
        b = JSON.parse(b);
        var c = b.batchId || 0,
          d = [];
        for (
          var e = b.frames,
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          h = n.readObject(h);
          h != null && d.push(h);
        }
        h = b.instrumentationData || null;
        return new a(c, d, h);
      };
      return a;
    })();
    function o(a) {
      if (typeof a === 'number') return a;
      throw new Error('Expected number');
    }
    function p(a) {
      return a == null ? null : o(a);
    }
    function q(a) {
      if (typeof a === 'string') return a;
      throw new Error('Expected string');
    }
    function r(a) {
      return a == null ? null : q(a);
    }
    function s(a) {
      if (typeof a === 'object' && a != null) return a;
      throw new Error('Expected object');
    }
    function t(a) {
      if (typeof a === 'object' && a != null) {
        var b = a,
          c = {};
        Object.keys(b).forEach(function (a) {
          var d = b[a];
          typeof d === 'string' && d != null && (c[a] = d);
        });
        return c;
      }
      throw new Error('Expected string map');
    }
    function u(a) {
      return a == null ? null : t(a);
    }
    function v(a) {
      if (typeof a === 'boolean' && a != null) return a;
      throw new Error('Expected boolean');
    }
    function w(a) {
      return a == null ? null : v(a);
    }
    g.GatewayStreamRequest = h;
    g.GatewayStreamData = i;
    g.GatewayStreamDataAck = j;
    g.GatewayStreamLog = k;
    g.GatewayStreamStatusUpdate = l;
    g.GatewayStreamRewriteRequest = m;
    g.GatewayStreamFrame = n;
    g.GatewayStreamBatch = a;
  },
  98,
);
__d(
  'RequestStreamE2EClientLoggerEvent',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      RECEIVED: 'received',
      SENT: 'sent',
      FAILURE: 'failure',
      PUBACK: 'puback',
    });
    f['default'] = a;
  },
  66,
);
__d(
  'RequestStreamE2EClientLoggerMessageType',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      REQUEST_STREAM: 'request_stream',
      AMENDMENT: 'amendment',
      AMENDMENT_ACK: 'amendment_ack',
      CANCEL: 'cancel',
      RESPONSE: 'response',
      RESPONSE_ACK: 'response_ack',
      TIMED_REQUEST: 'timed_request',
      INTERRUPT: 'interrupt',
    });
    f['default'] = a;
  },
  66,
);
__d(
  'BladeRunnerEventHandler',
  [
    'BladeRunnerLogger',
    'BladeRunnerStreamStatus',
    'BladeRunnerTypes',
    'BladeRunnerTypesInternal',
    'RequestStreamE2EClientLoggerEvent',
    'RequestStreamE2EClientLoggerMessageType',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    var h = 1e3;
    a = (function () {
      function a(a, b, c) {
        (this.$2 = a), (this.$1 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.onProxyResponse = function (a) {
        this.$4(a);
        var b = [];
        for (
          var e = a.getFrames(),
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          this.$2.witnessFrame(h) && b.push(h);
        }
        h = this.$2.getRequest();
        (g = h.e2eLogger) == null
          ? void 0
          : g.logE2EEvent(
              c('RequestStreamE2EClientLoggerMessageType').RESPONSE,
              c('RequestStreamE2EClientLoggerEvent').SENT,
              {},
              (f = a.getInstrumentationData()) == null ? void 0 : f.auxId,
              null,
              a.getInstrumentationDataDfTraceId(),
            );
        b.length > 0 &&
          this.$5(
            new (d('BladeRunnerTypesInternal').GatewayStreamBatch)(
              a.batchId,
              b,
              a.instrumentationData,
            ),
          );
      };
      b.onDisconnect = function () {
        this.$2.resetErrors();
        var a = new (d('BladeRunnerTypesInternal').GatewayStreamStatusUpdate)();
        a.streamId = this.$2.getRequest().streamId;
        a.status = d('BladeRunnerStreamStatus').StreamStatus.CLOSED;
        a.shouldRetry = !0;
        a.retryDelayMs = 0;
        a = new (d('BladeRunnerTypesInternal').GatewayStreamBatch)(null, [
          d('BladeRunnerTypesInternal').GatewayStreamFrame.newStatusUpdateFrame(
            a,
          ),
        ]);
        this.onProxyResponse(a);
      };
      b.$4 = function (a) {
        var b = this;
        a = a.getFrames().filter(function (a) {
          return a.type == d('BladeRunnerTypes').StreamFrameType.STATUS_UPDATE;
        });
        for (
          var a = a,
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          g = g.getStatusUpdate();
          if (
            g.status == d('BladeRunnerStreamStatus').StreamStatus.CLOSED ||
            g.status == d('BladeRunnerStreamStatus').StreamStatus.REJECTED
          ) {
            this.$2.onError();
            var i = g.shouldRetry != null && g.shouldRetry,
              j = g.message != null ? g.message : 'null';
            if (i && this.$2.getErrorCount() <= this.$2.getRetriesAllowed()) {
              g.status = d('BladeRunnerStreamStatus').StreamStatus.STOPPED;
              var k = h;
              g.retryDelayMs != null && (k = g.retryDelayMs);
              c('BladeRunnerLogger').info(
                'Can retry: stream ' +
                  g.streamId +
                  ' closed with status ' +
                  g.status +
                  ', message ' +
                  j +
                  '. Error count: ' +
                  this.$2.getErrorCount() +
                  ', retryDelay ' +
                  k +
                  'ms. Already retrying: ' +
                  this.$2.getRetryRequestScheduled().toString(),
              );
              this.$2.getRetryRequestScheduled()
                ? c('BladeRunnerLogger').bumpCounter(
                    'stream_closed_already_retrying',
                  )
                : (c('BladeRunnerLogger').bumpCounter(
                    'stream_closed_will_retry',
                  ),
                  this.$2.setRetryRequestScheduled(!0),
                  k > 0
                    ? c('setTimeoutAcrossTransitions')(function () {
                        return b.$6();
                      }, k)
                    : this.$6());
            } else
              c('BladeRunnerLogger').info(
                'Will not retry: stream ' +
                  g.streamId +
                  ' closed with status ' +
                  g.status +
                  ', message ' +
                  j +
                  '. Error count: ' +
                  this.$2.getErrorCount() +
                  ', shouldRetry ' +
                  i.toString() +
                  '. Already retrying: ' +
                  this.$2.getRetryRequestScheduled().toString(),
              ),
                i
                  ? c('BladeRunnerLogger').bumpCounter(
                      'stream_closed_retry_exceeded',
                    )
                  : c('BladeRunnerLogger').bumpCounter(
                      'stream_closed_no_retry',
                    ),
                this.$3.removeStream(g.streamId);
          }
        }
      };
      b.$6 = function () {
        this.$2.setRetryRequestScheduled(!1);
        if (this.$2.isAlive()) {
          var a = this.$1.getUpdatedRequestBody();
          a != null && this.$2.updateRetryRequestPayload(a);
          this.$3.sendRetryStreamRequest(this.$2);
        }
      };
      b.$5 = function (a) {
        c('BladeRunnerLogger').bumpCounter('send_to_handler');
        var b = [];
        this.$1.onBatch(a);
        for (
          var a = a.getFrames(),
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          try {
            switch (g.type) {
              case d('BladeRunnerTypes').StreamFrameType.DATA:
                this.$1.onData(g.getData());
                b.push(g.getData());
                break;
              case d('BladeRunnerTypes').StreamFrameType.STATUS_UPDATE:
                this.$1.onStatusUpdate(g.getStatusUpdate().status);
                break;
              case d('BladeRunnerTypes').StreamFrameType.LOG:
                g = g.getLog().message;
                g != null && this.$1.onLog(g);
                break;
              case d('BladeRunnerTypes').StreamFrameType.DATA_ACK:
                break;
              default:
                throw new Error('Frame with unexpected type');
            }
          } catch (a) {
            c('BladeRunnerLogger').bumpCounter('send_to_handler_error'),
              c('BladeRunnerLogger').exception(
                a,
                'Failed sending frame to stream handler',
              );
          }
        }
        this.$7(b);
      };
      b.$7 = function (a) {
        var b = [];
        for (var c = 0; c < a.length; c++) {
          var e = a[c];
          if (e.shouldAck === !0 && e.dataId != null) {
            var f = new (d('BladeRunnerTypesInternal').GatewayStreamDataAck)();
            f.streamId = e.streamId;
            f.dataId = e.dataId;
            f.success = !0;
            b.push(f);
          }
        }
        this.$3.sendDataAcks(b);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'RtiRequestStreamE2eClientBatchFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('819');
    c = b('FalcoLoggerInternal').create(
      'rti_request_stream_e2e_client_batch',
      a,
    );
    e.exports = c;
  },
  null,
);
__d(
  'RtiRequestStreamE2eClientFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1857112');
    c = b('FalcoLoggerInternal').create('rti_request_stream_e2e_client', a);
    e.exports = c;
  },
  null,
);
__d(
  'RequestStreamE2ELogger',
  [
    'ConstUriUtils',
    'RequestStreamE2EClientLoggerEvent',
    'RequestStreamE2EClientLoggerMessageType',
    'RtiRequestStreamE2eClientBatchFalcoEvent',
    'RtiRequestStreamE2eClientFalcoEvent',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = [
        'FBGQLS:COMMENT_CREATE_SUBSCRIBE',
        'FBGQLS:COMMENT_LIKE_SUBSCRIBE',
        'FBGQLS:FEEDBACK_COMMENT_PERMISSION_TOGGLE_SUBSCRIBE',
        'FBGQLS:FEEDBACK_TYPING_SUBSCRIBE',
      ],
      i = 0;
    function j() {
      var a = Date.now();
      i >= a ? (i += 1) : (i = a);
      return i.toString();
    }
    var k = (function () {
      function a(a, b, c, e, f, g, h, i, j, k) {
        this.$10 = [];
        this.$11 = !1;
        this.$1 = a;
        this.$2 = b;
        this.$3 = c;
        this.$4 = e;
        this.$5 = f;
        this.$6 = g;
        this.$7 = h;
        this.$8 = i;
        this.$9 = j;
        this.$12 = (a = k) != null ? a : !1;
        b = d('ConstUriUtils').getUri(window.location.href);
        b && (this.$13 = b.getDomain());
      }
      var b = a.prototype;
      b.logE2EEvent = function (a, b, c, d, e, f) {
        c === void 0 && (c = null);
        d === void 0 && (d = null);
        e === void 0 && (e = null);
        f === void 0 && (f = null);
        if (this.$3 === 'Falco') return;
        e = {
          request_id: this.$1,
          resume_id: '0',
          retry_id: e,
          transport: this.$2,
          method: this.$3,
          use_case: this.$4,
          request_log_context: this.$5,
          force_log_context: this.$6,
          e2e_sample_rate: this.$7,
          message_type: a,
          event: b,
          timestamp_ms: j(),
          aux_id: d,
          additional_data: c,
          dgw_stream_group_logging_id: this.$8,
          dgw_count_prior_streams_in_group: this.$9,
          domain: this.$13,
          df_trace_id: f,
        };
        this.$14(e);
      };
      b.$14 = function (a) {
        if (!this.$12) {
          c('RtiRequestStreamE2eClientFalcoEvent').log(function () {
            return a;
          });
          return;
        }
        this.$10.push(a);
        if (
          this.$11 ||
          a.event == c('RequestStreamE2EClientLoggerEvent').FAILURE ||
          a.message_type ==
            c('RequestStreamE2EClientLoggerMessageType').RESPONSE
        ) {
          var b = { events: this.$10 };
          c('RtiRequestStreamE2eClientBatchFalcoEvent').log(function () {
            return b;
          });
          this.$10 = [];
          this.$11 = !0;
        }
      };
      b.getRequestId = function () {
        return this.$1;
      };
      return a;
    })();
    function a(a, b, d) {
      if (a == null || a.method == null) return null;
      var e = !1;
      h.includes(a.method) && !c('gkx')('2810') && (e = !0);
      if (b == null || b.length == 0) return null;
      b = JSON.parse(b);
      return b.requestId == null
        ? null
        : new k(
            b.requestId,
            d,
            a.method,
            l(a.method, a),
            b.requestLogContext,
            b.forceLogContext,
            b.sampleRate,
            b.dgwStreamGroupLoggingId,
            b.dgwCountPriorStreamsInGroup,
            e,
          );
    }
    function l(a, b) {
      if (a === 'FBLQ' && b.config_id) return b.config_id;
      if (a === 'SKY') {
        if (b.topic) {
          var c = b.topic.lastIndexOf('/');
          return c > 0 ? b.topic.substr(0, c) : b.topic;
        }
        return;
      }
      return a;
    }
    function b(a, b, d, e, f, g) {
      f === void 0 && (f = null);
      g === void 0 && (g = null);
      if (a == null || a.requestId == null || a.clientLoggingDisabled != null)
        return;
      var h = {
        request_id: a.requestId,
        resume_id: '0',
        transport: b,
        e2e_sample_rate: a.sampleRate,
        message_type: d,
        event: e,
        timestamp_ms: j(),
        aux_id: a.auxId,
        additional_data: f,
        df_trace_id: g,
      };
      c('RtiRequestStreamE2eClientFalcoEvent').log(function () {
        return h;
      });
    }
    g.RequestStreamE2ELogger = k;
    g.createStreamLogger = a;
    g.logRequestStreamE2EEventStatic = b;
  },
  98,
);
__d(
  'RequestStreamTransport',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('$InternalEnum').Mirrored([
      'WEB_BR_MQTT',
      'WEB_RS_MQTT',
      'WEB_RS_STARGATE',
    ]);
    f.RequestStreamTransport = a;
  },
  66,
);
__d(
  'BladeRunnerSocket',
  [
    'BladeRunnerEventHandler',
    'BladeRunnerLogger',
    'BladeRunnerStreamStatus',
    'BladeRunnerTypes',
    'BladeRunnerTypesInternal',
    'CurrentUser',
    'FBMqttChannel',
    'MqttPublishListener',
    'Promise',
    'RequestStreamE2EClientLoggerEvent',
    'RequestStreamE2EClientLoggerMessageType',
    'RequestStreamE2ELogger',
    'RequestStreamTransport',
    'justknobx',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'Connected',
      i = 'Disconnected',
      j = '/br_sr',
      k = '/sr_res',
      l = null;
    function m(a) {
      var b;
      switch (a.type) {
        case d('BladeRunnerTypes').StreamFrameType.REQUEST:
          return (b = a.request) == null ? void 0 : b.getInstrumentationData();
        case d('BladeRunnerTypes').StreamFrameType.DATA:
          return (b = a.data) == null ? void 0 : b.getInstrumentationData();
      }
      return null;
    }
    function n(a) {
      switch (a.type) {
        case d('BladeRunnerTypes').StreamFrameType.REQUEST:
          return c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM;
        case d('BladeRunnerTypes').StreamFrameType.DATA:
          return c('RequestStreamE2EClientLoggerMessageType').AMENDMENT;
      }
      return null;
    }
    function o(a) {
      if (a === null) return null;
      switch (a) {
        case d('BladeRunnerStreamStatus').StreamStatus.ACCEPTED:
          return 'Accepted';
        case d('BladeRunnerStreamStatus').StreamStatus.REJECTED:
          return 'Rejected';
        case d('BladeRunnerStreamStatus').StreamStatus.STARTED:
          return 'Started';
        case d('BladeRunnerStreamStatus').StreamStatus.STOPPED:
          return 'Stopped';
        case d('BladeRunnerStreamStatus').StreamStatus.CLOSED:
          return 'Closed';
      }
      return null;
    }
    function p(a) {
      var b = {};
      a == null
        ? void 0
        : (a = a.frames) == null
        ? void 0
        : a.forEach(function (a) {
            if (
              a.type === d('BladeRunnerTypes').StreamFrameType.STATUS_UPDATE
            ) {
              a = (a = a.statusUpdate) == null ? void 0 : a.status;
              a = o(a);
              a !== null && (b.flow_status = a);
            }
          });
      return b;
    }
    function q(a, b) {
      var c;
      switch (a.type) {
        case d('BladeRunnerTypes').StreamFrameType.REQUEST:
          b.data_base64_size =
            (c = a.request) == null
              ? void 0
              : (c = c.payload) == null
              ? void 0
              : (c = c.length) == null
              ? void 0
              : c.toString();
          break;
        case d('BladeRunnerTypes').StreamFrameType.DATA:
          b.data_base64_size =
            (c = a.data) == null
              ? void 0
              : (b = c.rawDataSize()) == null
              ? void 0
              : b.toString();
          break;
      }
      return null;
    }
    function r(a, b, e) {
      var f = m(a);
      if (f == null) return;
      var g = n(a);
      if (g == null) return;
      var h = null;
      switch (b) {
        case d('MqttPublishListener').MqttPublishEvent.SENT:
          h = c('RequestStreamE2EClientLoggerEvent').SENT;
          break;
        case d('MqttPublishListener').MqttPublishEvent.ACKED:
          h = c('RequestStreamE2EClientLoggerEvent').PUBACK;
          break;
        case d('MqttPublishListener').MqttPublishEvent.NOT_ACKED:
        case d('MqttPublishListener').MqttPublishEvent.NOT_CONNECTED:
        case d('MqttPublishListener').MqttPublishEvent.PUBLISH_ERROR:
          h = c('RequestStreamE2EClientLoggerEvent').FAILURE;
          e.reason == null && (e.reason = b);
          break;
      }
      if (h == null) return;
      q(a, e);
      if (
        ((b = a.request) == null ? void 0 : b.e2eLogger) != null &&
        f.clientLoggingDisabled == null
      ) {
        (b = a.request) == null
          ? void 0
          : b.e2eLogger.logE2EEvent(g, h, e, f.auxId);
      } else
        d('RequestStreamE2ELogger').logRequestStreamE2EEventStatic(
          f,
          d('RequestStreamTransport').RequestStreamTransport.WEB_BR_MQTT,
          g,
          h,
          e,
        );
    }
    a = (function () {
      function a(a) {
        (this.$1 = []),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = null),
          (this.$5 = 0),
          (this.$6 = new Map()),
          (this.$7 = a != null ? a : c('FBMqttChannel')),
          (this.$8 = new Map()),
          c('BladeRunnerLogger').setClientSessionId(c('uuid')()),
          this.$9();
      }
      a.get = function () {
        l == null && (l = new a(c('FBMqttChannel')));
        return l;
      };
      var e = a.prototype;
      e.sendNewStreamRequest = function (b, d) {
        d = new (c('BladeRunnerEventHandler'))(b, d, this);
        var e = b.getRequest();
        this.$6.set(e.streamId, d);
        if (!this.$10()) {
          this.$11(d, e.streamId);
          return;
        }
        this.getStreamCount() <= a.maxStreamCount
          ? this.$12(e)
          : (c('BladeRunnerLogger').bumpCounter(
              'socket_request_throttled_max_streams',
            ),
            c('BladeRunnerLogger').warn(
              'Maximum stream count reached, will not send request: ' +
                JSON.stringify(b.getRequest().getHeaders()),
            ),
            this.$11(d, e.streamId));
      };
      e.sendRetryStreamRequest = function (a) {
        this.$12(a.getRequest());
      };
      e.sendCancel = function (a) {
        c('BladeRunnerLogger').bumpCounter('socket_send_cancel');
        var b = new (d('BladeRunnerTypesInternal').GatewayStreamStatusUpdate)();
        b.streamId = a.streamId;
        b.status = d('BladeRunnerStreamStatus').StreamStatus.CLOSED;
        this.$13(b, a);
        this.removeStream(a.streamId);
      };
      e.sendAmendment = function (a, b, e) {
        c('BladeRunnerLogger').bumpCounter('socket_send_amendment');
        var f = new (d('BladeRunnerTypesInternal').GatewayStreamData)();
        f.streamId = a;
        f.setData(b);
        e != null && (f.instrumentationData = e);
        this.$14(f);
      };
      e.sendAmendmentWithAck = function (a, e, f) {
        var g = this;
        c('BladeRunnerLogger').bumpCounter('socket_send_amendment');
        var h = this.$15(),
          i = new (d('BladeRunnerTypesInternal').GatewayStreamData)();
        i.streamId = a;
        i.setData(e);
        i.shouldAck = !0;
        i.dataId = h;
        f != null && (i.instrumentationData = f);
        a = new (b('Promise'))(function (a, b) {
          g.$8.set(h, { resolve: a, reject: b });
        });
        this.$14(i);
        return a;
      };
      e.$14 = function (a) {
        this.$1.push(
          d('BladeRunnerTypesInternal').GatewayStreamFrame.newDataFrame(a),
        ),
          this.$16();
      };
      e.sendDataAcks = function (a) {
        c('BladeRunnerLogger').bumpCounter('socket_send_data_ack', a.length),
          this.$17(a);
      };
      e.removeStream = function (a) {
        this.$6['delete'](a);
      };
      e.getStreamCount = function () {
        return this.$6.size;
      };
      e.getNextStreamId = function () {
        this.$5++;
        return this.$5;
      };
      e.onMQTTStateChanged = function (a) {
        this.$16();
        if ((a != i && a != h) || this.$4 == a) return;
        this.$4 = a;
        c('BladeRunnerLogger').info('MQTTStateChanged: ' + a);
        a == i
          ? (c('BladeRunnerLogger').bumpCounter('mqtt_state_disconnected'),
            this.$18())
          : a == h &&
            c('BladeRunnerLogger').bumpCounter('mqtt_state_connected');
      };
      e.$12 = function (a) {
        c('BladeRunnerLogger').bumpCounter('socket_send_request');
        this.$1.push(
          d('BladeRunnerTypesInternal').GatewayStreamFrame.newRequestFrame(a),
        );
        if (!this.$16()) {
          (a = a.e2eLogger) == null
            ? void 0
            : a.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
                c('RequestStreamE2EClientLoggerEvent').FAILURE,
                { reason: 'MQTT Not Connected' },
              );
        }
      };
      e.$13 = function (a, b) {
        this.$1.push(
          d('BladeRunnerTypesInternal').GatewayStreamFrame.newStatusUpdateFrame(
            a,
          ),
        );
        if (this.$16()) {
          (a = b.e2eLogger) == null
            ? void 0
            : a.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').CANCEL,
                c('RequestStreamE2EClientLoggerEvent').SENT,
              );
        }
      };
      e.$17 = function (a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          this.$1.push(
            d('BladeRunnerTypesInternal').GatewayStreamFrame.newDataAckFrame(c),
          );
        }
        this.$16();
      };
      e.$19 = function () {
        this.$2++;
        return this.$2;
      };
      e.$15 = function () {
        this.$3++;
        return this.$3;
      };
      e.$16 = function () {
        var a = !1;
        if (this.$7.getConnectionState() === h && this.$1.length > 0)
          try {
            this.$20(this.$1), (a = !0);
          } catch (a) {
          } finally {
            this.$1 = [];
          }
        return a;
      };
      e.$20 = function (a) {
        var b = this,
          e = new (d('BladeRunnerTypesInternal').GatewayStreamBatch)(
            this.$19(),
            a,
          ),
          f = e.write();
        if (f.length > this.$21()) {
          var g = Math.floor(a.length / 2);
          if (g === 0) {
            a.forEach(function (a) {
              return r(
                a,
                d('MqttPublishListener').MqttPublishEvent.PUBLISH_ERROR,
                { reason: 'too long' },
              );
            });
            var h = new Error('Publish is too long: ' + f.length);
            h.stack;
            this.$22(e, h, 'Publish is too long');
            throw h;
          }
          this.$20(a.slice(0, g));
          this.$20(a.slice(g, a.length));
        } else
          try {
            c('BladeRunnerLogger').info(
              'send message to ' + j + ' (' + f.length + ' bytes)',
            );
            h = { qos: 1, skipBuffer: !1 };
            if (e.isInstrumented()) {
              var i = Date.now();
              h.listener = {
                onEvent: function (b) {
                  var c = (Date.now() - i).toString();
                  a.forEach(function (a) {
                    r(a, b, { latency: c });
                  });
                },
              };
            }
            this.$7.publish(j, f, h)['catch'](function (a) {
              b.$22(e, a, 'Failed publishing to MQTT');
            });
            c('BladeRunnerLogger').bumpCounter('mqtt_publish_success');
          } catch (a) {
            this.$22(e, a, 'Failed publishing to MQTT');
            throw a;
          }
      };
      e.$9 = function () {
        var a = this;
        c('BladeRunnerLogger').info(
          'Starting socket with endpoint ' +
            this.$7.getEndpoint() +
            ' useragent ' +
            navigator.userAgent,
        );
        this.onMQTTStateChanged(this.$7.getConnectionState());
        this.$7.subscribeChannelEvents({
          onMQTTStateChanged: function (b) {
            a.onMQTTStateChanged(b);
          },
          onJSError: function (a) {
            var b =
              a != null && typeof a.isRecoverable === 'boolean'
                ? a.isRecoverable
                : !1;
            b
              ? c('BladeRunnerLogger').bumpCounter(
                  'mqtt_channel_recoverable_error',
                )
              : (c('BladeRunnerLogger').warn(
                  'JS error in MQTTChannel: ' +
                    (typeof a == 'object' && a != null
                      ? a.toString()
                      : 'unknown error') +
                    ', ' +
                    JSON.stringify(a),
                ),
                c('BladeRunnerLogger').bumpCounter('mqtt_channel_error'));
          },
        });
        this.$7.subscribe(j, function (a) {
          throw new Error('Unexpected response: ' + j + ' ' + a.toString());
        });
        this.$7.subscribe(k, function (b) {
          a.$23(b);
        });
      };
      e.$23 = function (a) {
        a = d('BladeRunnerTypesInternal').GatewayStreamBatch.read(a);
        this.processBatch(a);
      };
      e.$22 = function (a, b, e) {
        for (
          var a = a.getFrames(),
            f = Array.isArray(a),
            g = 0,
            a = f
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= a.length) break;
            h = a[g++];
          } else {
            g = a.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          if (h.type === d('BladeRunnerTypes').StreamFrameType.REQUEST) {
            var i = h.getRequest(),
              j = this.$6.get(i.streamId);
            j != null &&
              this.$24(
                j,
                i.streamId,
                d('BladeRunnerStreamStatus').StreamStatus.CLOSED,
                !0,
                null,
              );
          } else if (h.type === d('BladeRunnerTypes').StreamFrameType.DATA) {
            j = h.getData();
            i = j.dataId;
            if (j.shouldAck != null && j.shouldAck && i != null) {
              h = new (d('BladeRunnerTypesInternal').GatewayStreamDataAck)();
              h.streamId = j.streamId;
              h.dataId = i;
              h.success = !1;
              h.code = d(
                'BladeRunnerTypesInternal',
              ).GatewayStreamDataAck.ACK_CODE_FAILED_TO_LAND;
              h.message = e;
              this.$25(h);
            }
          }
        }
        c('BladeRunnerLogger').info('Failed publishing to MQTT: ' + b.message);
        c('BladeRunnerLogger').bumpCounter('mqtt_publish_error');
      };
      e.$25 = function (a) {
        var b = this.$8.get(a.dataId);
        b != null &&
          (this.$8['delete'](a.dataId),
          a.success
            ? b.resolve(!0)
            : a.code ===
              d('BladeRunnerTypesInternal').GatewayStreamDataAck
                .ACK_CODE_LANDED_BUT_NOT_ACCEPTED
            ? b.resolve(!1)
            : b.reject(a.message));
      };
      e.processBatch = function (a) {
        try {
          d('RequestStreamE2ELogger').logRequestStreamE2EEventStatic(
            a.getInstrumentationData(),
            d('RequestStreamTransport').RequestStreamTransport.WEB_BR_MQTT,
            c('RequestStreamE2EClientLoggerMessageType').RESPONSE,
            c('RequestStreamE2EClientLoggerEvent').RECEIVED,
            p(a),
            a.getInstrumentationDataDfTraceId(),
          );
          c('BladeRunnerLogger').bumpCounter('socket_process_batch');
          var b = JSON.stringify(a);
          c('BladeRunnerLogger').info(
            'Received batch (' + b.length + ' bytes)',
          );
          b = null;
          for (
            var e = a.getFrames(),
              f = Array.isArray(e),
              g = 0,
              e = f
                ? e
                : e[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var h;
            if (f) {
              if (g >= e.length) break;
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) break;
              h = g.value;
            }
            h = h;
            var i = h.getStreamId();
            b == null && (b = i);
            if (i != null && b != i)
              throw new Error(
                'Received batch with frames for multiple streams',
              );
            h.type == d('BladeRunnerTypes').StreamFrameType.DATA_ACK &&
              this.$25(h.getDataAck());
          }
          if (b != null) {
            i = this.$6.get(b);
            i != null
              ? i.onProxyResponse(a)
              : c('BladeRunnerLogger').info(
                  'Received batch with frames for unknown stream id: ' + b,
                );
          } else c('BladeRunnerLogger').info('Received batch with no frames');
        } catch (a) {
          c('BladeRunnerLogger').exception(
            a,
            'Failed processing batch from MQTT',
          );
          c('BladeRunnerLogger').bumpCounter('socket_process_batch_error');
          throw a;
        }
      };
      e.$18 = function () {
        this.$6.forEach(function (a, b, c) {
          a.onDisconnect();
        });
      };
      e.$11 = function (a, b) {
        this.$24(
          a,
          b,
          d('BladeRunnerStreamStatus').StreamStatus.REJECTED,
          !1,
          0,
        );
      };
      e.$24 = function (a, b, c, e, f) {
        var g = new (d('BladeRunnerTypesInternal').GatewayStreamStatusUpdate)();
        g.streamId = b;
        g.status = c;
        g.shouldRetry = e;
        g.retryDelayMs = f;
        b = new (d('BladeRunnerTypesInternal').GatewayStreamBatch)(null, [
          d('BladeRunnerTypesInternal').GatewayStreamFrame.newStatusUpdateFrame(
            g,
          ),
        ]);
        a.onProxyResponse(b);
      };
      e.$10 = function () {
        if (!c('CurrentUser').isLoggedIn()) {
          c('BladeRunnerLogger').bumpCounter('request_stream_user_logged_out');
          return !1;
        }
        return !0;
      };
      e.$21 = function () {
        var a = 1024 * 1024,
          b = 512 * 1024;
        try {
          var d = c('justknobx')._('317');
          b = d * a;
        } catch (a) {}
        return Math.max(b - 1024, 0);
      };
      return a;
    })();
    a.maxStreamCount = 2e3;
    g['default'] = a;
  },
  98,
);
__d(
  'BladeRunnerStream',
  ['Promise', 'regeneratorRuntime'],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var c = a.prototype;
      c.getStreamHandler = function () {
        return this.$1;
      };
      c.cancel = function () {};
      c.amendWithAck = function (a) {
        return b('regeneratorRuntime').async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  return a.abrupt('return', !1);
                case 1:
                case 'end':
                  return a.stop();
              }
          },
          null,
          this,
        );
      };
      c.amendFireAndForget = function (a) {};
      c.amendWithoutAck = function (a) {};
      c.start = function () {
        return b('Promise').resolve();
      };
      c.isAlive = function () {
        return !1;
      };
      c.canAmend = function () {
        return !1;
      };
      c.getStatus = function () {
        return null;
      };
      c.getStreamId = function () {
        return 0;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'BladeRunnerStreamState',
  ['BladeRunnerLogger', 'BladeRunnerStreamStatus', 'BladeRunnerTypes'],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this.$1 = a),
          (this.$2 = null),
          (this.$3 = 0),
          (this.$4 = !1),
          (this.$5 = 0),
          (this.$6 = !1);
      }
      var b = a.prototype;
      b.getRequest = function () {
        return this.$1;
      };
      b.updateRetryRequestPayload = function (a) {
        this.$1.updateRetryRequestPayload(a);
      };
      b.isAlive = function () {
        return !(
          this.$2 == d('BladeRunnerStreamStatus').StreamStatus.CLOSED ||
          this.$2 == d('BladeRunnerStreamStatus').StreamStatus.REJECTED
        );
      };
      b.canAmend = function () {
        return (
          this.$2 == d('BladeRunnerStreamStatus').StreamStatus.ACCEPTED ||
          this.$2 == d('BladeRunnerStreamStatus').StreamStatus.STARTED ||
          this.$2 == d('BladeRunnerStreamStatus').StreamStatus.STOPPED
        );
      };
      b.getLastStatus = function () {
        return this.$2;
      };
      b.setLastStatus = function (a) {
        this.$2 = a;
      };
      b.onError = function () {
        this.$3 += 1;
      };
      b.getErrorCount = function () {
        return this.$3;
      };
      b.resetErrors = function () {
        this.$3 = 0;
      };
      b.getRetryRequestScheduled = function () {
        return this.$6;
      };
      b.setRetryRequestScheduled = function (a) {
        this.$6 = a;
      };
      b.witnessFrame = function (a) {
        switch (a.type) {
          case d('BladeRunnerTypes').StreamFrameType.STATUS_UPDATE:
            var b = a.getStatusUpdate(),
              c = !0;
            switch (b.status) {
              case d('BladeRunnerStreamStatus').StreamStatus.ACCEPTED:
                c = !this.$4;
                this.$4 || (this.$4 = !0);
                break;
              case d('BladeRunnerStreamStatus').StreamStatus.STARTED:
                c =
                  this.getLastStatus() !=
                  d('BladeRunnerStreamStatus').StreamStatus.STARTED;
                break;
              case d('BladeRunnerStreamStatus').StreamStatus.STOPPED:
                c =
                  this.getLastStatus() ==
                  d('BladeRunnerStreamStatus').StreamStatus.STARTED;
                break;
              case d('BladeRunnerStreamStatus').StreamStatus.CLOSED:
              case d('BladeRunnerStreamStatus').StreamStatus.REJECTED:
              default:
                c = !0;
            }
            this.setLastStatus(b.status);
            return c;
          case d('BladeRunnerTypes').StreamFrameType.REWRITE_REQUEST:
            this.$7(a.getRewriteRequest());
            return !1;
          default:
            return !0;
        }
      };
      b.setRetriesAllowed = function (a) {
        this.$5 = a;
      };
      b.getRetriesAllowed = function () {
        return this.$5;
      };
      b.$7 = function (a) {
        if (!(a.temporary != null || a.temporary == !0)) {
          a.newBody != null && (this.$1.payload = a.newBody);
          a.newExtraHeader != null &&
            ((this.$1.extraHeader = a.newExtraHeader),
            (this.$1.headers = JSON.parse(a.newExtraHeader)));
          if (a.patchExtraHeader != null)
            try {
              var b = JSON.parse(a.patchExtraHeader),
                d =
                  this.$1.extraHeader != null
                    ? JSON.parse(this.$1.extraHeader)
                    : {};
              this.$1.headers == null && (this.$1.headers = {});
              var e = Object.keys(b);
              for (var f = 0; f < e.length; f++) {
                var g = e[f];
                this.$1.headers[g] = b[g];
                d[g] = b[g];
              }
              this.$1.extraHeader = JSON.stringify(d);
            } catch (b) {
              c('BladeRunnerLogger').warn(
                'Failed to patch header: ' + a.patchExtraHeader,
              );
            }
          a.killBody != null && a.killBody == !0 && (this.$1.payload = null);
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'BladeRunnerSocketStream',
  [
    'BladeRunnerStream',
    'BladeRunnerStreamState',
    'BladeRunnerStreamStatus',
    'Promise',
    'RequestStreamE2EClientLoggerEvent',
    'RequestStreamE2EClientLoggerMessageType',
    'regeneratorRuntime',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    var h = 4,
      i = { reason: 'stream_dead' };
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b, d, e) {
        b = a.call(this, b) || this;
        b.$BladeRunnerSocketStream1 = e;
        b.$BladeRunnerSocketStream2 = new (c('BladeRunnerStreamState'))(d);
        b.$BladeRunnerSocketStream2.setRetriesAllowed(h);
        return b;
      }
      var f = e.prototype;
      f.start = function () {
        var a = this;
        return new (b('Promise'))(function (b) {
          a.send(), b();
        });
      };
      f.send = function () {
        var a,
          b = this.$BladeRunnerSocketStream2.getRequest();
        (a = b.e2eLogger) == null
          ? void 0
          : a.logE2EEvent(
              c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
              c('RequestStreamE2EClientLoggerEvent').RECEIVED,
              {
                data_base64_size:
                  (a = b.payload) == null
                    ? void 0
                    : (b = a.length) == null
                    ? void 0
                    : b.toString(),
              },
            );
        this.$BladeRunnerSocketStream1.sendNewStreamRequest(
          this.$BladeRunnerSocketStream2,
          this.getStreamHandler(),
        );
      };
      f.amendWithAck = function (a) {
        var d, e, f, g, h, j, k;
        return b('regeneratorRuntime').async(
          function (l) {
            while (1)
              switch ((l.prev = l.next)) {
                case 0:
                  e = this.$BladeRunnerSocketStream2.getRequest();
                  f = e.getInstrumentationData();
                  f &&
                    ((f.auxId = c('uuid')()),
                    (g = e.e2eLogger) == null
                      ? void 0
                      : g.logE2EEvent(
                          c('RequestStreamE2EClientLoggerMessageType')
                            .AMENDMENT,
                          c('RequestStreamE2EClientLoggerEvent').RECEIVED,
                          {
                            data_size:
                              a == null
                                ? void 0
                                : (h = a.length) == null
                                ? void 0
                                : h.toString(),
                          },
                          f.auxId,
                        ));
                  if (!this.canAmend()) {
                    l.next = 6;
                    break;
                  }
                  f &&
                    ((j = e.e2eLogger) == null
                      ? void 0
                      : j.logE2EEvent(
                          c('RequestStreamE2EClientLoggerMessageType')
                            .AMENDMENT,
                          c('RequestStreamE2EClientLoggerEvent').SENT,
                          {
                            data_size:
                              a == null
                                ? void 0
                                : (k = a.length) == null
                                ? void 0
                                : k.toString(),
                          },
                          f.auxId,
                        ));
                  return l.abrupt(
                    'return',
                    this.$BladeRunnerSocketStream1.sendAmendmentWithAck(
                      e.streamId,
                      this.$BladeRunnerSocketStream3(a),
                      f == null ? null : JSON.stringify(f),
                    ),
                  );
                case 6:
                  (d = e.e2eLogger) == null
                    ? void 0
                    : d.logE2EEvent(
                        c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
                        c('RequestStreamE2EClientLoggerEvent').FAILURE,
                        i,
                        f == null ? void 0 : f.auxId,
                      );
                  return l.abrupt(
                    'return',
                    b('Promise').reject('Stream is closed or not accepted'),
                  );
                case 8:
                case 'end':
                  return l.stop();
              }
          },
          null,
          this,
        );
      };
      f.amendFireAndForget = function (a) {
        var b = this.$BladeRunnerSocketStream2.getRequest(),
          d = b.getInstrumentationData();
        if (d) {
          var e;
          d.auxId = c('uuid')();
          (e = b.e2eLogger) == null
            ? void 0
            : e.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
                c('RequestStreamE2EClientLoggerEvent').RECEIVED,
                {
                  data_size:
                    a == null
                      ? void 0
                      : (e = a.length) == null
                      ? void 0
                      : e.toString(),
                },
                d.auxId,
              );
        }
        if (this.canAmend()) {
          this.$BladeRunnerSocketStream1.sendAmendment(
            this.$BladeRunnerSocketStream2.getRequest().streamId,
            this.$BladeRunnerSocketStream3(a),
            d == null ? null : JSON.stringify(d),
          );
          if (d) {
            (e = b.e2eLogger) == null
              ? void 0
              : e.logE2EEvent(
                  c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
                  c('RequestStreamE2EClientLoggerEvent').SENT,
                  {
                    data_size:
                      a == null
                        ? void 0
                        : (e = a.length) == null
                        ? void 0
                        : e.toString(),
                  },
                  d.auxId,
                );
          }
        } else {
          (a = b.e2eLogger) == null
            ? void 0
            : a.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
                c('RequestStreamE2EClientLoggerEvent').FAILURE,
                i,
                d == null ? void 0 : d.auxId,
              );
          throw new Error('Stream is closed or not accepted');
        }
      };
      f.amendWithoutAck = function (a) {
        this.amendFireAndForget(a);
      };
      f.$BladeRunnerSocketStream3 = function (a) {
        return typeof a == 'object'
          ? btoa(new TextDecoder('utf8').decode(a))
          : a;
      };
      f.cancel = function () {
        var a = this.$BladeRunnerSocketStream2.getRequest();
        (a = a.e2eLogger) == null
          ? void 0
          : a.logE2EEvent(
              c('RequestStreamE2EClientLoggerMessageType').CANCEL,
              c('RequestStreamE2EClientLoggerEvent').RECEIVED,
            );
        this.isAlive() &&
          (this.$BladeRunnerSocketStream1.sendCancel(
            this.$BladeRunnerSocketStream2.getRequest(),
          ),
          this.$BladeRunnerSocketStream2.setLastStatus(
            d('BladeRunnerStreamStatus').StreamStatus.CLOSED,
          ),
          this.getStreamHandler().onClientCancel());
      };
      f.isAlive = function () {
        return this.$BladeRunnerSocketStream2.isAlive();
      };
      f.canAmend = function () {
        return this.$BladeRunnerSocketStream2.canAmend();
      };
      f.getStatus = function () {
        return this.$BladeRunnerSocketStream2.getLastStatus();
      };
      f.getStreamId = function () {
        return this.$BladeRunnerSocketStream2.getRequest().streamId;
      };
      return e;
    })(c('BladeRunnerStream'));
    g['default'] = a;
  },
  98,
);
__d(
  'RequestStreamE2ESampling',
  ['invariant', 'Random', 'RequestStreamE2EClientSamplingConfig', 'uuid'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function i(a) {
      return a == null
        ? !1
        : a.requestId != null &&
            typeof a.requestId == 'string' &&
            a.forceLogContext != null &&
            typeof a.forceLogContext == 'string';
    }
    function j(a, b) {
      var d = c('RequestStreamE2EClientSamplingConfig').sampleRate;
      if (d > 1 && a != null) {
        a = c('RequestStreamE2EClientSamplingConfig')
          .methodToSamplingMultiplier[a];
        a == 0 ? (d = 0) : a != null && (d /= a);
      }
      return d == 1 ? 1 : d / b;
    }
    function k(a, b, d, e) {
      var f = c('uuid')();
      (b.requestId == null ||
        b.requestId === '' ||
        typeof b.requestId != 'string') &&
        (a.requestId != null && typeof a.requestId == 'string'
          ? (b.requestId = a.requestId)
          : (b.requestId = f));
      b.requestId += '/_' + f.substring(0, 4);
      b.resumeId = '0';
      d != null ? (b.sampleRate = d) : (b.sampleRate = void 0);
      f = '';
      e != null && e.length > 0 && (f = e);
      f.length > 0 &&
        (b.requestLogContext != null && b.requestLogContext.length > 0
          ? (b.requestLogContext += ':')
          : (b.requestLogContext = ''),
        (b.requestLogContext += f));
      (a == null ? void 0 : a.method) === 'Falco' &&
        (b.clientLoggingDisabled = 'Falco');
      d = {};
      for (
        e = Object.keys(b).sort(),
          f = Array.isArray(e),
          a = 0,
          e = f
            ? e
            : e[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (f) {
          if (a >= e.length) break;
          g = e[a++];
        } else {
          a = e.next();
          if (a.done) break;
          g = a.value;
        }
        g = g;
        d[g] = b[g];
      }
      return JSON.stringify(d);
    }
    function a(a, b, d, e) {
      b &&
        ((!b.requestId.includes('/') && !b.requestId.includes('#')) ||
          h(0, 41721));
      e = j(a.method, (e = e) != null ? e : 1);
      if (c('Random').coinflip(e)) return k(a, b || { requestId: '' }, e, d);
      return i(b) ? k(a, b || { requestId: '' }, null, d) : '';
    }
    g.isForceLogged = i;
    g.getSampleRateForLogging = j;
    g.normalizeInstrumentationData = k;
    g.validateInstrumentationData = a;
  },
  98,
);
__d(
  'BladeRunnerClient',
  [
    'Base64',
    'BladeRunnerConfig',
    'BladeRunnerLogger',
    'BladeRunnerSocket',
    'BladeRunnerSocketStream',
    'BladeRunnerTypes',
    'BladeRunnerTypesInternal',
    'RequestStreamE2ELogger',
    'RequestStreamE2ESampling',
    'RequestStreamTransport',
    'cr:2046346',
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b) {
        (this.$2 = d(
          'RequestStreamTransport',
        ).RequestStreamTransport.WEB_BR_MQTT),
          (this.$1 = a != null ? a : c('BladeRunnerSocket').get()),
          b && (this.$2 = b);
      }
      var e = a.prototype;
      e.createStream = function (a, b, c, d) {
        return this.$3(a, b, c, d);
      };
      e.requestStream = function (a, c, d, e) {
        a = this.$3(a, c, d, e);
        a.send();
        b('cr:2046346') != null && b('cr:2046346').startPulsarTest();
        return a;
      };
      e.logInfo = function (a) {
        c('BladeRunnerLogger').info(a);
      };
      e.bumpCounter = function (a) {
        c('BladeRunnerLogger').bumpCounter(a);
      };
      e.$3 = function (a, b, e, f) {
        var g = new (d('BladeRunnerTypesInternal').GatewayStreamRequest)();
        g.streamId = this.$1.getNextStreamId();
        g.requestType = d('BladeRunnerTypes').StreamRequestType.BLADE_RUNNER;
        g.headers = c('BladeRunnerConfig').patchRequestHeaders(a);
        g.extraHeader = JSON.stringify(g.headers);
        g.payload = b != null ? c('Base64').encode(b) : null;
        f != null && (f.transport = 'WEB_RS_MQTT');
        g.instrumentationData = d(
          'RequestStreamE2ESampling',
        ).validateInstrumentationData(g.headers || {}, f);
        g.e2eLogger = d('RequestStreamE2ELogger').createStreamLogger(
          g.headers,
          g.instrumentationData,
          this.$2,
        );
        return new (c('BladeRunnerSocketStream'))(e, g, this.$1);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'InflightAmends',
  ['Deferred', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'inflight_amends_timeout',
      i = 'inflight_amends_duplicate_id';
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$3 = b), (this.$4 = c), (this.$2 = new Map());
      }
      var b = a.prototype;
      b.add = function (a) {
        var b = this;
        if (this.$2.has(a)) throw c('err')(i);
        var d = new (c('Deferred'))(),
          e = Date.now(),
          f = setTimeout(function () {
            b.$2.has(a) && b.reject(a, c('err')(h));
          }, this.$1);
        this.$2.set(a, {
          id: a,
          deferred: d,
          createdTimestampMs: e,
          timeoutId: f,
        });
        return d.getPromise();
      };
      b.getPromise = function (a) {
        return (a = this.$5(a)) == null ? void 0 : a.deferred.getPromise();
      };
      b.resolve = function (a, b) {
        a = this.$5(a);
        a &&
          (a.deferred.resolve == null ? void 0 : a.deferred.resolve(b),
          this.$3(a.id, Date.now() - a.createdTimestampMs),
          this.$6(a));
      };
      b.reject = function (a, b) {
        a = this.$5(a);
        a &&
          (a.deferred.reject == null ? void 0 : a.deferred.reject(b),
          this.$4(a.id, b),
          this.$6(a));
      };
      b.rejectAll = function (a) {
        for (
          var b = this.$2.entries(),
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e[1];
          this.reject(f, a);
        }
      };
      b.getSize = function () {
        return this.$2.size;
      };
      b.getAllPromises = function () {
        var a = [];
        for (
          var b = this.$2.values(),
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          a.push(e.deferred.getPromise());
        }
        return a;
      };
      b.$6 = function (a) {
        clearTimeout(a.timeoutId), this.$2['delete'](a.id);
      };
      b.$5 = function (a) {
        return this.$2.get(a);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'RequestStreamCloseReason',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('$InternalEnum').Mirrored([
      'UserIntention',
      'StartStreamFailure',
      'StreamError',
      'RemoteTermination',
      'ServerDataEnd',
      'ServerDrain',
      'ReestablishError',
      'ClientError',
    ]);
    f.RequestStreamCloseReason = a;
  },
  66,
);
__d(
  'jsbi',
  [],
  function (a, b, c, d, e, f) {
    (function (a, b) {
      'object' == typeof f && 'undefined' != typeof e
        ? (e.exports = b())
        : 'function' == typeof define && define.amd
        ? define(b)
        : (a.JSBI = b());
    })(this, function () {
      'use strict';
      function a(b) {
        return (
          (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    'function' == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? 'symbol'
                    : typeof a;
                }),
          a(b)
        );
      }
      function b(a, b) {
        if (!(a instanceof b))
          throw new TypeError('Cannot call a class as a function');
      }
      function c(a, b) {
        for (var c, d = 0; d < b.length; d++)
          (c = b[d]),
            (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            'value' in c && (c.writable = !0),
            Object.defineProperty(a, c.key, c);
      }
      function d(a, b, d) {
        return b && c(a.prototype, b), d && c(a, d), a;
      }
      function e(a, b) {
        if ('function' != typeof b && null !== b)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, writable: !0, configurable: !0 },
        })),
          b && g(a, b);
      }
      function f(a) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (a) {
                return a.__proto__ || Object.getPrototypeOf(a);
              }),
          f(a)
        );
      }
      function g(a, b) {
        return (
          (g =
            Object.setPrototypeOf ||
            function (a, b) {
              return (a.__proto__ = b), a;
            }),
          g(a, b)
        );
      }
      function h() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {}),
            ),
            !0
          );
        } catch (a) {
          return !1;
        }
      }
      function i() {
        return (
          (i = h()
            ? Reflect.construct
            : function (a, b, c) {
                var d = [null];
                d.push.apply(d, b);
                b = Function.bind.apply(a, d);
                a = new b();
                return c && g(a, c.prototype), a;
              }),
          i.apply(null, arguments)
        );
      }
      function j(a) {
        return -1 !== Function.toString.call(a).indexOf('[native code]');
      }
      function k(a) {
        var b = 'function' == typeof Map ? new Map() : void 0;
        return (
          (k = function (a) {
            function c() {
              return i(a, arguments, f(this).constructor);
            }
            if (null === a || !j(a)) return a;
            if ('function' != typeof a)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            if ('undefined' != typeof b) {
              if (b.has(a)) return b.get(a);
              b.set(a, c);
            }
            return (
              (c.prototype = Object.create(a.prototype, {
                constructor: {
                  value: c,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              g(c, a)
            );
          }),
          k(a)
        );
      }
      function l(a) {
        if (void 0 === a)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return a;
      }
      function m(a, b) {
        return b && ('object' == typeof b || 'function' == typeof b) ? b : l(a);
      }
      var n = (function (c) {
        var h = Math.abs,
          i = Math.max,
          j = Math.imul,
          k = Math.clz32;
        function g(a, c) {
          if ((b(this, g), a > g.__kMaxLength))
            throw new RangeError('Maximum BigInt size exceeded');
          return (a = m(this, f(g).call(this, a))), (a.sign = c), a;
        }
        return (
          e(g, c),
          d(
            g,
            [
              {
                key: 'toDebugString',
                value: function () {
                  var a = ['BigInt['],
                    b = !0,
                    c = !1,
                    d = void 0;
                  try {
                    for (
                      var e, e, f = this[Symbol.iterator]();
                      !(b = (e = f.next()).done);
                      b = !0
                    )
                      (e = e.value),
                        a.push((e ? (e >>> 0).toString(16) : e) + ', ');
                  } catch (a) {
                    (c = !0), (d = a);
                  } finally {
                    try {
                      b || null == f['return'] || f['return']();
                    } finally {
                      if (c) throw d;
                    }
                  }
                  return a.push(']'), a.join('');
                },
              },
              {
                key: 'toString',
                value: function () {
                  var a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 10;
                  if (2 > a || 36 < a)
                    throw new RangeError(
                      'toString() radix argument must be between 2 and 36',
                    );
                  return 0 === this.length
                    ? '0'
                    : 0 == (a & (a - 1))
                    ? g.__toStringBasePowerOfTwo(this, a)
                    : g.__toStringGeneric(this, a, !1);
                },
              },
              {
                key: '__copy',
                value: function () {
                  for (
                    var a = new g(this.length, this.sign), b = 0;
                    b < this.length;
                    b++
                  )
                    a[b] = this[b];
                  return a;
                },
              },
              {
                key: '__trim',
                value: function () {
                  for (var a = this.length, b = this[a - 1]; 0 === b; )
                    a--, (b = this[a - 1]), this.pop();
                  return 0 === a && (this.sign = !1), this;
                },
              },
              {
                key: '__initializeDigits',
                value: function () {
                  for (var a = 0; a < this.length; a++) this[a] = 0;
                },
              },
              {
                key: '__clzmsd',
                value: function () {
                  return k(this[this.length - 1]);
                },
              },
              {
                key: '__inplaceMultiplyAdd',
                value: function (a, b, c) {
                  c > this.length && (c = this.length);
                  for (
                    var d = 65535 & a,
                      a = a >>> 16,
                      e = 0,
                      f = 65535 & b,
                      b = b >>> 16,
                      i = 0;
                    i < c;
                    i++
                  ) {
                    var n = this.__digit(i),
                      m = 65535 & n;
                    n = n >>> 16;
                    var o = j(m, d);
                    m = j(m, a);
                    var p = j(n, d);
                    n = j(n, a);
                    var q = f + (65535 & o);
                    o =
                      b +
                      e +
                      (q >>> 16) +
                      (o >>> 16) +
                      (65535 & m) +
                      (65535 & p);
                    (f = (m >>> 16) + (p >>> 16) + (65535 & n) + (o >>> 16)),
                      (e = f >>> 16),
                      (f &= 65535),
                      (b = n >>> 16);
                    this.__setDigit(i, (65535 & q) | (o << 16));
                  }
                  if (0 !== e || 0 !== f || 0 !== b)
                    throw new Error('implementation bug');
                },
              },
              {
                key: '__inplaceAdd',
                value: function (a, b, c) {
                  for (var d, e = 0, f = 0; f < c; f++)
                    (d = this.__halfDigit(b + f) + a.__halfDigit(f) + e),
                      (e = d >>> 16),
                      this.__setHalfDigit(b + f, d);
                  return e;
                },
              },
              {
                key: '__inplaceSub',
                value: function (a, b, c) {
                  var d = 0;
                  if (1 & b) {
                    b >>= 1;
                    for (
                      var e = this.__digit(b), f = 65535 & e, k = 0;
                      k < (c - 1) >>> 1;
                      k++
                    ) {
                      var l = a.__digit(k),
                        m = (e >>> 16) - (65535 & l) - d;
                      (d = 1 & (m >>> 16)),
                        this.__setDigit(b + k, (m << 16) | (65535 & f)),
                        (e = this.__digit(b + k + 1)),
                        (f = (65535 & e) - (l >>> 16) - d),
                        (d = 1 & (f >>> 16));
                    }
                    m = a.__digit(k);
                    l = (e >>> 16) - (65535 & m) - d;
                    (d = 1 & (l >>> 16)),
                      this.__setDigit(b + k, (l << 16) | (65535 & f));
                    if (b + k + 1 >= this.length)
                      throw new RangeError('out of bounds');
                    0 == (1 & c) &&
                      ((e = this.__digit(b + k + 1)),
                      (f = (65535 & e) - (m >>> 16) - d),
                      (d = 1 & (f >>> 16)),
                      this.__setDigit(
                        b + a.length,
                        (4294901760 & e) | (65535 & f),
                      ));
                  } else {
                    b >>= 1;
                    for (l = 0; l < a.length - 1; l++) {
                      k = this.__digit(b + l);
                      m = a.__digit(l);
                      e = (65535 & k) - (65535 & m) - d;
                      d = 1 & (e >>> 16);
                      f = (k >>> 16) - (m >>> 16) - d;
                      (d = 1 & (f >>> 16)),
                        this.__setDigit(b + l, (f << 16) | (65535 & e));
                    }
                    k = this.__digit(b + l);
                    m = a.__digit(l);
                    f = (65535 & k) - (65535 & m) - d;
                    d = 1 & (f >>> 16);
                    e = 0;
                    0 == (1 & c) &&
                      ((e = (k >>> 16) - (m >>> 16) - d), (d = 1 & (e >>> 16))),
                      this.__setDigit(b + l, (e << 16) | (65535 & f));
                  }
                  return d;
                },
              },
              {
                key: '__inplaceRightShift',
                value: function (a) {
                  if (0 !== a) {
                    for (
                      var b,
                        c = this.__digit(0) >>> a,
                        d = this.length - 1,
                        e = 0;
                      e < d;
                      e++
                    )
                      (b = this.__digit(e + 1)),
                        this.__setDigit(e, (b << (32 - a)) | c),
                        (c = b >>> a);
                    this.__setDigit(d, c);
                  }
                },
              },
              {
                key: '__digit',
                value: function (a) {
                  return this[a];
                },
              },
              {
                key: '__unsignedDigit',
                value: function (a) {
                  return this[a] >>> 0;
                },
              },
              {
                key: '__setDigit',
                value: function (a, b) {
                  this[a] = 0 | b;
                },
              },
              {
                key: '__setDigitGrow',
                value: function (a, b) {
                  this[a] = 0 | b;
                },
              },
              {
                key: '__halfDigitLength',
                value: function () {
                  var a = this.length;
                  return 65535 >= this.__unsignedDigit(a - 1)
                    ? 2 * a - 1
                    : 2 * a;
                },
              },
              {
                key: '__halfDigit',
                value: function (a) {
                  return 65535 & (this[a >>> 1] >>> ((1 & a) << 4));
                },
              },
              {
                key: '__setHalfDigit',
                value: function (a, b) {
                  var c = a >>> 1,
                    d = this.__digit(c);
                  a =
                    1 & a
                      ? (65535 & d) | (b << 16)
                      : (4294901760 & d) | (65535 & b);
                  this.__setDigit(c, a);
                },
              },
            ],
            [
              {
                key: 'BigInt',
                value: function (b) {
                  var c = Math.floor,
                    d = Number.isFinite;
                  if ('number' == typeof b) {
                    if (0 === b) return g.__zero();
                    if ((0 | b) === b)
                      return 0 > b ? g.__oneDigit(-b, !0) : g.__oneDigit(b, !1);
                    if (!d(b) || c(b) !== b)
                      throw new RangeError(
                        'The number ' +
                          b +
                          ' cannot be converted to BigInt because it is not an integer',
                      );
                    return g.__fromDouble(b);
                  }
                  if ('string' == typeof b) {
                    d = g.__fromString(b);
                    if (null === d)
                      throw new SyntaxError(
                        'Cannot convert ' + b + ' to a BigInt',
                      );
                    return d;
                  }
                  if ('boolean' == typeof b)
                    return !0 === b ? g.__oneDigit(1, !1) : g.__zero();
                  if ('object' === a(b)) {
                    if (b.constructor === g) return b;
                    c = g.__toPrimitive(b);
                    return g.BigInt(c);
                  }
                  throw new TypeError('Cannot convert ' + b + ' to a BigInt');
                },
              },
              {
                key: 'toNumber',
                value: function (a) {
                  var b = a.length;
                  if (0 === b) return 0;
                  if (1 === b) {
                    var c = a.__unsignedDigit(0);
                    return a.sign ? -c : c;
                  }
                  c = a.__digit(b - 1);
                  var d = k(c),
                    e = 32 * b - d;
                  if (1024 < e) return a.sign ? -Infinity : 1 / 0;
                  e = e - 1;
                  c = c;
                  b = b - 1;
                  d = d + 1;
                  var f = 32 === d ? 0 : c << d;
                  f >>>= 12;
                  var h = d - 12,
                    i = 12 <= d ? 0 : c << (20 + d);
                  d = 20 + d;
                  0 < h &&
                    0 < b &&
                    (b--,
                    (c = a.__digit(b)),
                    (f |= c >>> (32 - h)),
                    (i = c << h),
                    (d = h)),
                    0 < d &&
                      0 < b &&
                      (b--,
                      (c = a.__digit(b)),
                      (i |= c >>> (32 - d)),
                      (d -= 32));
                  h = g.__decideRounding(a, d, b, c);
                  if (
                    (1 === h || (0 === h && 1 == (1 & i))) &&
                    ((i = (i + 1) >>> 0),
                    0 === i && (f++, 0 != f >>> 20 && ((f = 0), e++, 1023 < e)))
                  )
                    return a.sign ? -Infinity : 1 / 0;
                  d = a.sign ? -2147483648 : 0;
                  return (
                    (e = (e + 1023) << 20),
                    (g.__kBitConversionInts[1] = d | e | f),
                    (g.__kBitConversionInts[0] = i),
                    g.__kBitConversionDouble[0]
                  );
                },
              },
              {
                key: 'unaryMinus',
                value: function (a) {
                  if (0 === a.length) return a;
                  var b = a.__copy();
                  return (b.sign = !a.sign), b;
                },
              },
              {
                key: 'bitwiseNot',
                value: function (a) {
                  return a.sign
                    ? g.__absoluteSubOne(a).__trim()
                    : g.__absoluteAddOne(a, !0);
                },
              },
              {
                key: 'exponentiate',
                value: function (a, b) {
                  if (b.sign) throw new RangeError('Exponent must be positive');
                  if (0 === b.length) return g.__oneDigit(1, !1);
                  if (0 === a.length) return a;
                  if (1 === a.length && 1 === a.__digit(0))
                    return a.sign && 0 == (1 & b.__digit(0))
                      ? g.unaryMinus(a)
                      : a;
                  if (1 < b.length) throw new RangeError('BigInt too big');
                  b = b.__unsignedDigit(0);
                  if (1 === b) return a;
                  if (b >= g.__kMaxLengthBits)
                    throw new RangeError('BigInt too big');
                  if (1 === a.length && 2 === a.__digit(0)) {
                    var c = 1 + (b >>> 5),
                      d = a.sign && 0 != (1 & b);
                    d = new g(c, d);
                    d.__initializeDigits();
                    var e = 1 << (31 & b);
                    return d.__setDigit(c - 1, e), d;
                  }
                  c = null;
                  e = a;
                  for (0 != (1 & b) && (c = a), b >>= 1; 0 !== b; b >>= 1)
                    (e = g.multiply(e, e)),
                      0 != (1 & b) &&
                        (null === c ? (c = e) : (c = g.multiply(c, e)));
                  return c;
                },
              },
              {
                key: 'multiply',
                value: function (a, b) {
                  if (0 === a.length) return a;
                  if (0 === b.length) return b;
                  var c = a.length + b.length;
                  32 <= a.__clzmsd() + b.__clzmsd() && c--;
                  c = new g(c, a.sign !== b.sign);
                  c.__initializeDigits();
                  for (var d = 0; d < a.length; d++)
                    g.__multiplyAccumulate(b, a.__digit(d), c, d);
                  return c.__trim();
                },
              },
              {
                key: 'divide',
                value: function (a, b) {
                  if (0 === b.length) throw new RangeError('Division by zero');
                  if (0 > g.__absoluteCompare(a, b)) return g.__zero();
                  var c = a.sign !== b.sign,
                    d = b.__unsignedDigit(0);
                  if (1 === b.length && 65535 >= d) {
                    if (1 === d) return c === a.sign ? a : g.unaryMinus(a);
                    d = g.__absoluteDivSmall(a, d, null);
                  } else d = g.__absoluteDivLarge(a, b, !0, !1);
                  return (d.sign = c), d.__trim();
                },
              },
              {
                key: 'remainder',
                value: function (a, b) {
                  if (0 === b.length) throw new RangeError('Division by zero');
                  if (0 > g.__absoluteCompare(a, b)) return a;
                  var c = b.__unsignedDigit(0);
                  if (1 === b.length && 65535 >= c) {
                    if (1 === c) return g.__zero();
                    c = g.__absoluteModSmall(a, c);
                    return 0 === c ? g.__zero() : g.__oneDigit(c, a.sign);
                  }
                  c = g.__absoluteDivLarge(a, b, !1, !0);
                  return (c.sign = a.sign), c.__trim();
                },
              },
              {
                key: 'add',
                value: function (a, b) {
                  var c = a.sign;
                  return c === b.sign
                    ? g.__absoluteAdd(a, b, c)
                    : 0 <= g.__absoluteCompare(a, b)
                    ? g.__absoluteSub(a, b, c)
                    : g.__absoluteSub(b, a, !c);
                },
              },
              {
                key: 'subtract',
                value: function (a, b) {
                  var c = a.sign;
                  return c === b.sign
                    ? 0 <= g.__absoluteCompare(a, b)
                      ? g.__absoluteSub(a, b, c)
                      : g.__absoluteSub(b, a, !c)
                    : g.__absoluteAdd(a, b, c);
                },
              },
              {
                key: 'leftShift',
                value: function (a, b) {
                  return 0 === b.length || 0 === a.length
                    ? a
                    : b.sign
                    ? g.__rightShiftByAbsolute(a, b)
                    : g.__leftShiftByAbsolute(a, b);
                },
              },
              {
                key: 'signedRightShift',
                value: function (a, b) {
                  return 0 === b.length || 0 === a.length
                    ? a
                    : b.sign
                    ? g.__leftShiftByAbsolute(a, b)
                    : g.__rightShiftByAbsolute(a, b);
                },
              },
              {
                key: 'unsignedRightShift',
                value: function () {
                  throw new TypeError(
                    'BigInts have no unsigned right shift; use >> instead',
                  );
                },
              },
              {
                key: 'lessThan',
                value: function (a, b) {
                  return 0 > g.__compareToBigInt(a, b);
                },
              },
              {
                key: 'lessThanOrEqual',
                value: function (a, b) {
                  return 0 >= g.__compareToBigInt(a, b);
                },
              },
              {
                key: 'greaterThan',
                value: function (a, b) {
                  return 0 < g.__compareToBigInt(a, b);
                },
              },
              {
                key: 'greaterThanOrEqual',
                value: function (a, b) {
                  return 0 <= g.__compareToBigInt(a, b);
                },
              },
              {
                key: 'equal',
                value: function (a, b) {
                  if (a.sign !== b.sign) return !1;
                  if (a.length !== b.length) return !1;
                  for (var c = 0; c < a.length; c++)
                    if (a.__digit(c) !== b.__digit(c)) return !1;
                  return !0;
                },
              },
              {
                key: 'notEqual',
                value: function (a, b) {
                  return !g.equal(a, b);
                },
              },
              {
                key: 'bitwiseAnd',
                value: function (a, b) {
                  if (!a.sign && !b.sign) return g.__absoluteAnd(a, b).__trim();
                  if (a.sign && b.sign) {
                    var c = i(a.length, b.length) + 1;
                    c = g.__absoluteSubOne(a, c);
                    var d = g.__absoluteSubOne(b);
                    return (
                      (c = g.__absoluteOr(c, d, c)),
                      g.__absoluteAddOne(c, !0, c).__trim()
                    );
                  }
                  if (a.sign) {
                    d = [b, a];
                    (a = d[0]), (b = d[1]);
                  }
                  return g.__absoluteAndNot(a, g.__absoluteSubOne(b)).__trim();
                },
              },
              {
                key: 'bitwiseXor',
                value: function (a, b) {
                  if (!a.sign && !b.sign) return g.__absoluteXor(a, b).__trim();
                  if (a.sign && b.sign) {
                    var c = i(a.length, b.length);
                    c = g.__absoluteSubOne(a, c);
                    var d = g.__absoluteSubOne(b);
                    return g.__absoluteXor(c, d, c).__trim();
                  }
                  d = i(a.length, b.length) + 1;
                  if (a.sign) {
                    c = [b, a];
                    (a = c[0]), (b = c[1]);
                  }
                  c = g.__absoluteSubOne(b, d);
                  return (
                    (c = g.__absoluteXor(c, a, c)),
                    g.__absoluteAddOne(c, !0, c).__trim()
                  );
                },
              },
              {
                key: 'bitwiseOr',
                value: function (a, b) {
                  var c = i(a.length, b.length);
                  if (!a.sign && !b.sign) return g.__absoluteOr(a, b).__trim();
                  if (a.sign && b.sign) {
                    var d = g.__absoluteSubOne(a, c),
                      e = g.__absoluteSubOne(b);
                    return (
                      (d = g.__absoluteAnd(d, e, d)),
                      g.__absoluteAddOne(d, !0, d).__trim()
                    );
                  }
                  if (a.sign) {
                    e = [b, a];
                    (a = e[0]), (b = e[1]);
                  }
                  d = g.__absoluteSubOne(b, c);
                  return (
                    (d = g.__absoluteAndNot(d, a, d)),
                    g.__absoluteAddOne(d, !0, d).__trim()
                  );
                },
              },
              {
                key: 'asIntN',
                value: function (a, b) {
                  if (0 === b.length) return b;
                  if (0 === a) return g.__zero();
                  if (a >= g.__kMaxLengthBits) return b;
                  var c = (a + 31) >>> 5;
                  if (b.length < c) return b;
                  var d = b.__unsignedDigit(c - 1),
                    e = 1 << (31 & (a - 1));
                  if (b.length === c && d < e) return b;
                  if (!((d & e) === e)) return g.__truncateToNBits(a, b);
                  if (!b.sign)
                    return g.__truncateAndSubFromPowerOfTwo(a, b, !0);
                  if (0 == (d & (e - 1))) {
                    for (var f = c - 2; 0 <= f; f--)
                      if (0 !== b.__digit(f))
                        return g.__truncateAndSubFromPowerOfTwo(a, b, !1);
                    return b.length === c && d === e
                      ? b
                      : g.__truncateToNBits(a, b);
                  }
                  return g.__truncateAndSubFromPowerOfTwo(a, b, !1);
                },
              },
              {
                key: 'asUintN',
                value: function (a, b) {
                  if (0 === b.length) return b;
                  if (0 === a) return g.__zero();
                  if (b.sign) {
                    if (a > g.__kMaxLengthBits)
                      throw new RangeError('BigInt too big');
                    return g.__truncateAndSubFromPowerOfTwo(a, b, !1);
                  }
                  if (a >= g.__kMaxLengthBits) return b;
                  var c = (a + 31) >>> 5;
                  if (b.length < c) return b;
                  var d = 31 & a;
                  if (b.length == c) {
                    if (0 == d) return b;
                    c = b.__digit(c - 1);
                    if (0 == c >>> d) return b;
                  }
                  return g.__truncateToNBits(a, b);
                },
              },
              {
                key: 'ADD',
                value: function (a, b) {
                  if (
                    ((a = g.__toPrimitive(a)),
                    (b = g.__toPrimitive(b)),
                    'string' == typeof a)
                  )
                    return 'string' != typeof b && (b = b.toString()), a + b;
                  if ('string' == typeof b) return a.toString() + b;
                  if (
                    ((a = g.__toNumeric(a)),
                    (b = g.__toNumeric(b)),
                    g.__isBigInt(a) && g.__isBigInt(b))
                  )
                    return g.add(a, b);
                  if ('number' == typeof a && 'number' == typeof b)
                    return a + b;
                  throw new TypeError(
                    'Cannot mix BigInt and other types, use explicit conversions',
                  );
                },
              },
              {
                key: 'LT',
                value: function (a, b) {
                  return g.__compare(a, b, 0);
                },
              },
              {
                key: 'LE',
                value: function (a, b) {
                  return g.__compare(a, b, 1);
                },
              },
              {
                key: 'GT',
                value: function (a, b) {
                  return g.__compare(a, b, 2);
                },
              },
              {
                key: 'GE',
                value: function (a, b) {
                  return g.__compare(a, b, 3);
                },
              },
              {
                key: 'EQ',
                value: function (b, c) {
                  for (;;) {
                    if (g.__isBigInt(b))
                      return g.__isBigInt(c) ? g.equal(b, c) : g.EQ(c, b);
                    if ('number' == typeof b) {
                      if (g.__isBigInt(c)) return g.__equalToNumber(c, b);
                      if ('object' !== a(c)) return b == c;
                      c = g.__toPrimitive(c);
                    } else if ('string' == typeof b) {
                      if (g.__isBigInt(c))
                        return (
                          (b = g.__fromString(b)), null !== b && g.equal(b, c)
                        );
                      if ('object' !== a(c)) return b == c;
                      c = g.__toPrimitive(c);
                    } else if ('boolean' == typeof b) {
                      if (g.__isBigInt(c)) return g.__equalToNumber(c, +b);
                      if ('object' !== a(c)) return b == c;
                      c = g.__toPrimitive(c);
                    } else if ('symbol' === a(b)) {
                      if (g.__isBigInt(c)) return !1;
                      if ('object' !== a(c)) return b == c;
                      c = g.__toPrimitive(c);
                    } else if ('object' === a(b)) {
                      if ('object' === a(c) && c.constructor !== g)
                        return b == c;
                      b = g.__toPrimitive(b);
                    } else return b == c;
                  }
                },
              },
              {
                key: 'NE',
                value: function (a, b) {
                  return !g.EQ(a, b);
                },
              },
              {
                key: '__zero',
                value: function () {
                  return new g(0, !1);
                },
              },
              {
                key: '__oneDigit',
                value: function (a, b) {
                  b = new g(1, b);
                  return b.__setDigit(0, a), b;
                },
              },
              {
                key: '__decideRounding',
                value: function (a, b, c, d) {
                  if (0 < b) return -1;
                  if (0 > b) b = -b - 1;
                  else {
                    if (0 === c) return -1;
                    c--, (d = a.__digit(c)), (b = 31);
                  }
                  b = 1 << b;
                  if (0 == (d & b)) return -1;
                  if (((b -= 1), 0 != (d & b))) return 1;
                  for (; 0 < c; ) if ((c--, 0 !== a.__digit(c))) return 1;
                  return 0;
                },
              },
              {
                key: '__fromDouble',
                value: function (a) {
                  g.__kBitConversionDouble[0] = a;
                  var b,
                    c = 2047 & (g.__kBitConversionInts[1] >>> 20);
                  c = c - 1023;
                  var d = (c >>> 5) + 1;
                  a = new g(d, 0 > a);
                  var e = (1048575 & g.__kBitConversionInts[1]) | 1048576,
                    f = g.__kBitConversionInts[0],
                    k = 20;
                  c = 31 & c;
                  var n = 0;
                  if (c < k) {
                    var m = k - c;
                    (n = m + 32),
                      (b = e >>> m),
                      (e = (e << (32 - m)) | (f >>> m)),
                      (f <<= 32 - m);
                  } else if (c === k) (n = 32), (b = e), (e = f);
                  else {
                    m = c - k;
                    (n = 32 - m),
                      (b = (e << m) | (f >>> (32 - m))),
                      (e = f << m);
                  }
                  a.__setDigit(d - 1, b);
                  for (c = d - 2; 0 <= c; c--)
                    0 < n ? ((n -= 32), (b = e), (e = f)) : (b = 0),
                      a.__setDigit(c, b);
                  return a.__trim();
                },
              },
              {
                key: '__isWhitespace',
                value: function (a) {
                  return (
                    !!(13 >= a && 9 <= a) ||
                    (159 >= a
                      ? 32 == a
                      : 131071 >= a
                      ? 160 == a || 5760 == a
                      : 196607 >= a
                      ? ((a &= 131071),
                        10 >= a ||
                          40 == a ||
                          41 == a ||
                          47 == a ||
                          95 == a ||
                          4096 == a)
                      : 65279 == a)
                  );
                },
              },
              {
                key: '__fromString',
                value: function (a) {
                  var b =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    c = 0,
                    d = a.length,
                    e = 0;
                  if (e === d) return g.__zero();
                  for (var f = a.charCodeAt(e); g.__isWhitespace(f); ) {
                    if (++e === d) return g.__zero();
                    f = a.charCodeAt(e);
                  }
                  if (43 === f) {
                    if (++e === d) return null;
                    (f = a.charCodeAt(e)), (c = 1);
                  } else if (45 === f) {
                    if (++e === d) return null;
                    (f = a.charCodeAt(e)), (c = -1);
                  }
                  if (0 === b) {
                    if (((b = 10), 48 === f)) {
                      if (++e === d) return g.__zero();
                      if (((f = a.charCodeAt(e)), 88 === f || 120 === f)) {
                        if (((b = 16), ++e === d)) return null;
                        f = a.charCodeAt(e);
                      } else if (79 === f || 111 === f) {
                        if (((b = 8), ++e === d)) return null;
                        f = a.charCodeAt(e);
                      } else if (66 === f || 98 === f) {
                        if (((b = 2), ++e === d)) return null;
                        f = a.charCodeAt(e);
                      }
                    }
                  } else if (16 === b && 48 === f) {
                    if (++e === d) return g.__zero();
                    if (((f = a.charCodeAt(e)), 88 === f || 120 === f)) {
                      if (++e === d) return null;
                      f = a.charCodeAt(e);
                    }
                  }
                  for (; 48 === f; ) {
                    if (++e === d) return g.__zero();
                    f = a.charCodeAt(e);
                  }
                  var m = d - e,
                    i = g.__kMaxBitsPerChar[b],
                    j = g.__kBitsPerCharTableMultiplier - 1;
                  if (m > 1073741824 / i) return null;
                  var k = (i * m + j) >>> g.__kBitsPerCharTableShift,
                    l = new g((k + 31) >>> 5, !1),
                    n = 10 > b ? b : 10,
                    o = 10 < b ? b - 10 : 0;
                  if (0 == (b & (b - 1))) {
                    i >>= g.__kBitsPerCharTableShift;
                    var p = [],
                      q = [],
                      r = !1;
                    do {
                      for (var s, t = 0, u = 0; ; ) {
                        if ((void 0, (f - 48) >>> 0 < n)) s = f - 48;
                        else if (((32 | f) - 97) >>> 0 < o) s = (32 | f) - 87;
                        else {
                          r = !0;
                          break;
                        }
                        if (((u += i), (t = (t << i) | s), ++e === d)) {
                          r = !0;
                          break;
                        }
                        if (((f = a.charCodeAt(e)), 32 < u + i)) break;
                      }
                      p.push(t), q.push(u);
                    } while (!r);
                    g.__fillFromParts(l, p, q);
                  } else {
                    l.__initializeDigits();
                    var v = !1,
                      w = 0;
                    do {
                      for (var x, y = 0, z = 1; ; ) {
                        if ((void 0, (f - 48) >>> 0 < n)) x = f - 48;
                        else if (((32 | f) - 97) >>> 0 < o) x = (32 | f) - 87;
                        else {
                          v = !0;
                          break;
                        }
                        var A = z * b;
                        if (4294967295 < A) break;
                        if (((z = A), (y = y * b + x), w++, ++e === d)) {
                          v = !0;
                          break;
                        }
                        f = a.charCodeAt(e);
                      }
                      j = 32 * g.__kBitsPerCharTableMultiplier - 1;
                      var B = (i * w + j) >>> (g.__kBitsPerCharTableShift + 5);
                      l.__inplaceMultiplyAdd(z, y, B);
                    } while (!v);
                  }
                  if (e !== d) {
                    if (!g.__isWhitespace(f)) return null;
                    for (e++; e < d; e++)
                      if (((f = a.charCodeAt(e)), !g.__isWhitespace(f)))
                        return null;
                  }
                  return 0 !== c && 10 !== b
                    ? null
                    : ((l.sign = -1 === c), l.__trim());
                },
              },
              {
                key: '__fillFromParts',
                value: function (a, b, c) {
                  for (var d = 0, e = 0, f = 0, k = b.length - 1; 0 <= k; k--) {
                    var l = b[k],
                      m = c[k];
                    (e |= l << f),
                      (f += m),
                      32 === f
                        ? (a.__setDigit(d++, e), (f = 0), (e = 0))
                        : 32 < f &&
                          (a.__setDigit(d++, e),
                          (f -= 32),
                          (e = l >>> (m - f)));
                  }
                  if (0 !== e) {
                    if (d >= a.length) throw new Error('implementation bug');
                    a.__setDigit(d++, e);
                  }
                  for (; d < a.length; d++) a.__setDigit(d, 0);
                },
              },
              {
                key: '__toStringBasePowerOfTwo',
                value: function (a, b) {
                  var c = a.length,
                    d = b - 1;
                  (d = (85 & (d >>> 1)) + (85 & d)),
                    (d = (51 & (d >>> 2)) + (51 & d)),
                    (d = (15 & (d >>> 4)) + (15 & d));
                  d = d;
                  b = b - 1;
                  var e = a.__digit(c - 1),
                    f = k(e);
                  f = 0 | ((32 * c - f + d - 1) / d);
                  if ((a.sign && f++, 268435456 < f))
                    throw new Error('string too long');
                  for (
                    var h = Array(f), f = f - 1, l = 0, n = 0, o = 0;
                    o < c - 1;
                    o++
                  ) {
                    var p = a.__digit(o),
                      q = (l | (p << n)) & b;
                    h[f--] = g.__kConversionChars[q];
                    q = d - n;
                    for (l = p >>> q, n = 32 - q; n >= d; )
                      (h[f--] = g.__kConversionChars[l & b]),
                        (l >>>= d),
                        (n -= d);
                  }
                  p = (l | (e << n)) & b;
                  for (
                    h[f--] = g.__kConversionChars[p], l = e >>> (d - n);
                    0 !== l;

                  )
                    (h[f--] = g.__kConversionChars[l & b]), (l >>>= d);
                  if ((a.sign && (h[f--] = '-'), -1 !== f))
                    throw new Error('implementation bug');
                  return h.join('');
                },
              },
              {
                key: '__toStringGeneric',
                value: function (a, b, c) {
                  var d = a.length;
                  if (0 === d) return '';
                  if (1 === d) {
                    var e = a.__unsignedDigit(0).toString(b);
                    return !1 === c && a.sign && (e = '-' + e), e;
                  }
                  e = 32 * d - k(a.__digit(d - 1));
                  d = g.__kMaxBitsPerChar[b];
                  d = d - 1;
                  e = e * g.__kBitsPerCharTableMultiplier;
                  (e += d - 1), (e = 0 | (e / d));
                  var f;
                  d = (e + 1) >> 1;
                  e = g.exponentiate(g.__oneDigit(b, !1), g.__oneDigit(d, !1));
                  var h = e.__unsignedDigit(0);
                  if (1 === e.length && 65535 >= h) {
                    (f = new g(a.length, !1)), f.__initializeDigits();
                    for (var i, j = 0, l = 2 * a.length - 1; 0 <= l; l--)
                      (i = (j << 16) | a.__halfDigit(l)),
                        f.__setHalfDigit(l, 0 | (i / h)),
                        (j = 0 | i % h);
                    i = j.toString(b);
                  } else {
                    h = g.__absoluteDivLarge(a, e, !0, !0);
                    f = h.quotient;
                    l = h.remainder.__trim();
                    i = g.__toStringGeneric(l, b, !0);
                  }
                  f.__trim();
                  for (j = g.__toStringGeneric(f, b, !0); i.length < d; )
                    i = '0' + i;
                  return !1 === c && a.sign && (j = '-' + j), j + i;
                },
              },
              {
                key: '__unequalSign',
                value: function (a) {
                  return a ? -1 : 1;
                },
              },
              {
                key: '__absoluteGreater',
                value: function (a) {
                  return a ? -1 : 1;
                },
              },
              {
                key: '__absoluteLess',
                value: function (a) {
                  return a ? 1 : -1;
                },
              },
              {
                key: '__compareToBigInt',
                value: function (a, b) {
                  var c = a.sign;
                  if (c !== b.sign) return g.__unequalSign(c);
                  a = g.__absoluteCompare(a, b);
                  return 0 < a
                    ? g.__absoluteGreater(c)
                    : 0 > a
                    ? g.__absoluteLess(c)
                    : 0;
                },
              },
              {
                key: '__compareToNumber',
                value: function (a, b) {
                  if (!0 | b) {
                    var c = a.sign,
                      d = 0 > b;
                    if (c !== d) return g.__unequalSign(c);
                    if (0 === a.length) {
                      if (d) throw new Error('implementation bug');
                      return 0 === b ? 0 : -1;
                    }
                    if (1 < a.length) return g.__absoluteGreater(c);
                    d = h(b);
                    var e = a.__unsignedDigit(0);
                    return e > d
                      ? g.__absoluteGreater(c)
                      : e < d
                      ? g.__absoluteLess(c)
                      : 0;
                  }
                  return g.__compareToDouble(a, b);
                },
              },
              {
                key: '__compareToDouble',
                value: function (a, b) {
                  if (b !== b) return b;
                  if (b === 1 / 0) return -1;
                  if (b === -Infinity) return 1;
                  var c = a.sign;
                  if (c !== 0 > b) return g.__unequalSign(c);
                  if (0 === b)
                    throw new Error(
                      'implementation bug: should be handled elsewhere',
                    );
                  if (0 === a.length) return -1;
                  g.__kBitConversionDouble[0] = b;
                  b = 2047 & (g.__kBitConversionInts[1] >>> 20);
                  if (2047 == b)
                    throw new Error('implementation bug: handled elsewhere');
                  b = b - 1023;
                  if (0 > b) return g.__absoluteGreater(c);
                  var d = a.length,
                    e = a.__digit(d - 1),
                    f = k(e),
                    l = 32 * d - f;
                  b = b + 1;
                  if (l < b) return g.__absoluteLess(c);
                  if (l > b) return g.__absoluteGreater(c);
                  b = 1048576 | (1048575 & g.__kBitConversionInts[1]);
                  var m = g.__kBitConversionInts[0],
                    o = 20;
                  f = 31 - f;
                  if (f !== (l - 1) % 31) throw new Error('implementation bug');
                  var p;
                  l = 0;
                  if (f < o) {
                    var q = o - f;
                    (l = q + 32),
                      (p = b >>> q),
                      (b = (b << (32 - q)) | (m >>> q)),
                      (m <<= 32 - q);
                  } else if (f === o) (l = 32), (p = b), (b = m);
                  else {
                    q = f - o;
                    (l = 32 - q),
                      (p = (b << q) | (m >>> (32 - q))),
                      (b = m << q);
                  }
                  if (((e >>>= 0), (p >>>= 0), e > p))
                    return g.__absoluteGreater(c);
                  if (e < p) return g.__absoluteLess(c);
                  for (f = d - 2; 0 <= f; f--) {
                    0 < l
                      ? ((l -= 32), (p = b >>> 0), (b = m), (m = 0))
                      : (p = 0);
                    o = a.__unsignedDigit(f);
                    if (o > p) return g.__absoluteGreater(c);
                    if (o < p) return g.__absoluteLess(c);
                  }
                  if (0 !== b || 0 !== m) {
                    if (0 === l) throw new Error('implementation bug');
                    return g.__absoluteLess(c);
                  }
                  return 0;
                },
              },
              {
                key: '__equalToNumber',
                value: function (a, b) {
                  return b | (0 === b)
                    ? 0 === b
                      ? 0 === a.length
                      : 1 === a.length &&
                        a.sign === 0 > b &&
                        a.__unsignedDigit(0) === h(b)
                    : 0 === g.__compareToDouble(a, b);
                },
              },
              {
                key: '__comparisonResultToBool',
                value: function (a, b) {
                  switch (b) {
                    case 0:
                      return 0 > a;
                    case 1:
                      return 0 >= a;
                    case 2:
                      return 0 < a;
                    case 3:
                      return 0 <= a;
                  }
                  throw new Error('unreachable');
                },
              },
              {
                key: '__compare',
                value: function (a, b, c) {
                  if (
                    ((a = g.__toPrimitive(a)),
                    (b = g.__toPrimitive(b)),
                    'string' == typeof a && 'string' == typeof b)
                  )
                    switch (c) {
                      case 0:
                        return a < b;
                      case 1:
                        return a <= b;
                      case 2:
                        return a > b;
                      case 3:
                        return a >= b;
                    }
                  if (g.__isBigInt(a) && 'string' == typeof b)
                    return (
                      (b = g.__fromString(b)),
                      null !== b &&
                        g.__comparisonResultToBool(g.__compareToBigInt(a, b), c)
                    );
                  if ('string' == typeof a && g.__isBigInt(b))
                    return (
                      (a = g.__fromString(a)),
                      null !== a &&
                        g.__comparisonResultToBool(g.__compareToBigInt(a, b), c)
                    );
                  if (
                    ((a = g.__toNumeric(a)),
                    (b = g.__toNumeric(b)),
                    g.__isBigInt(a))
                  ) {
                    if (g.__isBigInt(b))
                      return g.__comparisonResultToBool(
                        g.__compareToBigInt(a, b),
                        c,
                      );
                    if ('number' != typeof b)
                      throw new Error('implementation bug');
                    return g.__comparisonResultToBool(
                      g.__compareToNumber(a, b),
                      c,
                    );
                  }
                  if ('number' != typeof a)
                    throw new Error('implementation bug');
                  if (g.__isBigInt(b))
                    return g.__comparisonResultToBool(
                      g.__compareToNumber(b, a),
                      2 ^ c,
                    );
                  if ('number' != typeof b)
                    throw new Error('implementation bug');
                  return 0 === c
                    ? a < b
                    : 1 === c
                    ? a <= b
                    : 2 === c
                    ? a > b
                    : 3 === c
                    ? a >= b
                    : void 0;
                },
              },
              {
                key: '__absoluteAdd',
                value: function (a, b, c) {
                  if (a.length < b.length) return g.__absoluteAdd(b, a, c);
                  if (0 === a.length) return a;
                  if (0 === b.length) return a.sign === c ? a : g.unaryMinus(a);
                  var d = a.length;
                  (0 === a.__clzmsd() ||
                    (b.length === a.length && 0 === b.__clzmsd())) &&
                    d++;
                  for (var d = new g(d, c), c = 0, e = 0; e < b.length; e++) {
                    var f = b.__digit(e),
                      h = a.__digit(e),
                      m = (65535 & h) + (65535 & f) + c;
                    h = (h >>> 16) + (f >>> 16) + (m >>> 16);
                    (c = h >>> 16), d.__setDigit(e, (65535 & m) | (h << 16));
                  }
                  for (; e < a.length; e++) {
                    f = a.__digit(e);
                    m = (65535 & f) + c;
                    h = (f >>> 16) + (m >>> 16);
                    (c = h >>> 16), d.__setDigit(e, (65535 & m) | (h << 16));
                  }
                  return e < d.length && d.__setDigit(e, c), d.__trim();
                },
              },
              {
                key: '__absoluteSub',
                value: function (a, b, c) {
                  if (0 === a.length) return a;
                  if (0 === b.length) return a.sign === c ? a : g.unaryMinus(a);
                  for (
                    var c = new g(a.length, c), d = 0, e = 0;
                    e < b.length;
                    e++
                  ) {
                    var f = a.__digit(e),
                      l = b.__digit(e),
                      m = (65535 & f) - (65535 & l) - d;
                    d = 1 & (m >>> 16);
                    f = (f >>> 16) - (l >>> 16) - d;
                    (d = 1 & (f >>> 16)),
                      c.__setDigit(e, (65535 & m) | (f << 16));
                  }
                  for (; e < a.length; e++) {
                    l = a.__digit(e);
                    m = (65535 & l) - d;
                    d = 1 & (m >>> 16);
                    f = (l >>> 16) - d;
                    (d = 1 & (f >>> 16)),
                      c.__setDigit(e, (65535 & m) | (f << 16));
                  }
                  return c.__trim();
                },
              },
              {
                key: '__absoluteAddOne',
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length;
                  null === c ? (c = new g(d, b)) : (c.sign = b);
                  for (var e = !0, f = 0; f < d; f++) {
                    var k = a.__digit(f),
                      l = -1 === k;
                    e && (k = 0 | (k + 1)), (e = l), c.__setDigit(f, k);
                  }
                  return e && c.__setDigitGrow(d, 1), c;
                },
              },
              {
                key: '__absoluteSubOne',
                value: function (a, b) {
                  var c = a.length;
                  b = b || c;
                  for (var d = new g(b, !1), e = !0, f = 0; f < c; f++) {
                    var k = a.__digit(f),
                      l = 0 === k;
                    e && (k = 0 | (k - 1)), (e = l), d.__setDigit(f, k);
                  }
                  for (l = c; l < b; l++) d.__setDigit(l, 0);
                  return d;
                },
              },
              {
                key: '__absoluteAnd',
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length,
                    e = b.length,
                    f = e;
                  if (d < e) {
                    f = d;
                    var m = a,
                      n = d;
                    (a = b), e, (b = m), n;
                  }
                  var k = f;
                  null === c ? (c = new g(k, !1)) : (k = c.length);
                  for (var l = 0; l < f; l++)
                    c.__setDigit(l, a.__digit(l) & b.__digit(l));
                  for (; l < k; l++) c.__setDigit(l, 0);
                  return c;
                },
              },
              {
                key: '__absoluteAndNot',
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length,
                    e = b.length,
                    f = e;
                  d < e && (f = d);
                  var k = d;
                  null === c ? (c = new g(k, !1)) : (k = c.length);
                  for (var l = 0; l < f; l++)
                    c.__setDigit(l, a.__digit(l) & ~b.__digit(l));
                  for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                  for (; l < k; l++) c.__setDigit(l, 0);
                  return c;
                },
              },
              {
                key: '__absoluteOr',
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length,
                    e = b.length,
                    f = e;
                  if (d < e) {
                    f = d;
                    var m = a,
                      n = d;
                    (a = b), (d = e), (b = m), n;
                  }
                  var k = d;
                  null === c ? (c = new g(k, !1)) : (k = c.length);
                  for (var l = 0; l < f; l++)
                    c.__setDigit(l, a.__digit(l) | b.__digit(l));
                  for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                  for (; l < k; l++) c.__setDigit(l, 0);
                  return c;
                },
              },
              {
                key: '__absoluteXor',
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length,
                    e = b.length,
                    f = e;
                  if (d < e) {
                    f = d;
                    var m = a,
                      n = d;
                    (a = b), (d = e), (b = m), n;
                  }
                  var k = d;
                  null === c ? (c = new g(k, !1)) : (k = c.length);
                  for (var l = 0; l < f; l++)
                    c.__setDigit(l, a.__digit(l) ^ b.__digit(l));
                  for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                  for (; l < k; l++) c.__setDigit(l, 0);
                  return c;
                },
              },
              {
                key: '__absoluteCompare',
                value: function (a, b) {
                  var c = a.length - b.length;
                  if (0 != c) return c;
                  for (
                    c = a.length - 1;
                    0 <= c && a.__digit(c) === b.__digit(c);

                  )
                    c--;
                  return 0 > c
                    ? 0
                    : a.__unsignedDigit(c) > b.__unsignedDigit(c)
                    ? 1
                    : -1;
                },
              },
              {
                key: '__multiplyAccumulate',
                value: function (a, b, c, d) {
                  if (0 !== b) {
                    for (
                      var e = 65535 & b,
                        b = b >>> 16,
                        f = 0,
                        g = 0,
                        k = 0,
                        l = 0;
                      l < a.length;
                      l++, d++
                    ) {
                      var m = c.__digit(d),
                        n = 65535 & m,
                        o = m >>> 16,
                        p = a.__digit(l),
                        q = 65535 & p;
                      p = p >>> 16;
                      var r = j(q, e);
                      q = j(q, b);
                      var s = j(p, e);
                      p = j(p, b);
                      (n += g + (65535 & r)),
                        (o +=
                          k +
                          f +
                          (n >>> 16) +
                          (r >>> 16) +
                          (65535 & q) +
                          (65535 & s)),
                        (f = o >>> 16),
                        (g = (q >>> 16) + (s >>> 16) + (65535 & p) + f),
                        (f = g >>> 16),
                        (g &= 65535),
                        (k = p >>> 16),
                        (m = (65535 & n) | (o << 16)),
                        c.__setDigit(d, m);
                    }
                    for (; 0 !== f || 0 !== g || 0 !== k; d++) {
                      r = c.__digit(d);
                      q = (65535 & r) + g;
                      s = (r >>> 16) + (q >>> 16) + k + f;
                      (g = 0),
                        (k = 0),
                        (f = s >>> 16),
                        (r = (65535 & q) | (s << 16)),
                        c.__setDigit(d, r);
                    }
                  }
                },
              },
              {
                key: '__internalMultiplyAdd',
                value: function (a, b, c, d, e) {
                  for (var c = c, f = 0, h = 0; h < d; h++) {
                    var l = a.__digit(h),
                      m = j(65535 & l, b),
                      n = (65535 & m) + f + c;
                    c = n >>> 16;
                    l = j(l >>> 16, b);
                    m = (65535 & l) + (m >>> 16) + c;
                    (c = m >>> 16),
                      (f = l >>> 16),
                      e.__setDigit(h, (m << 16) | (65535 & n));
                  }
                  if (e.length > d)
                    for (e.__setDigit(d++, c + f); d < e.length; )
                      e.__setDigit(d++, 0);
                  else if (0 !== c + f) throw new Error('implementation bug');
                },
              },
              {
                key: '__absoluteDivSmall',
                value: function (a, b, c) {
                  null === c && (c = new g(a.length, !1));
                  for (var d = 0, e = 2 * a.length - 1; 0 <= e; e -= 2) {
                    var f = ((d << 16) | a.__halfDigit(e)) >>> 0,
                      k = 0 | (f / b);
                    (d = 0 | f % b),
                      (f = ((d << 16) | a.__halfDigit(e - 1)) >>> 0);
                    var l = 0 | (f / b);
                    (d = 0 | f % b), c.__setDigit(e >>> 1, (k << 16) | l);
                  }
                  return c;
                },
              },
              {
                key: '__absoluteModSmall',
                value: function (a, b) {
                  for (var c, d = 0, e = 2 * a.length - 1; 0 <= e; e--)
                    (c = ((d << 16) | a.__halfDigit(e)) >>> 0), (d = 0 | c % b);
                  return d;
                },
              },
              {
                key: '__absoluteDivLarge',
                value: function (a, b, c, d) {
                  var f = b.__halfDigitLength(),
                    e = b.length,
                    n = a.__halfDigitLength() - f,
                    i = null;
                  c && ((i = new g((n + 2) >>> 1, !1)), i.__initializeDigits());
                  var l = new g((f + 2) >>> 1, !1);
                  l.__initializeDigits();
                  var m = g.__clz16(b.__halfDigit(f - 1));
                  0 < m && (b = g.__specialLeftShift(b, m, 0));
                  for (
                    var a = g.__specialLeftShift(a, m, 1),
                      k = b.__halfDigit(f - 1),
                      o = 0,
                      n = n;
                    0 <= n;
                    n--
                  ) {
                    var p = 65535,
                      q = a.__halfDigit(n + f);
                    if (q !== k) {
                      q = ((q << 16) | a.__halfDigit(n + f - 1)) >>> 0;
                      p = 0 | (q / k);
                      for (
                        var q = 0 | q % k,
                          r = b.__halfDigit(f - 2),
                          s = a.__halfDigit(n + f - 2);
                        j(p, r) >>> 0 > ((q << 16) | s) >>> 0 &&
                        (p--, (q += k), !(65535 < q));

                      );
                    }
                    g.__internalMultiplyAdd(b, p, 0, e, l);
                    r = a.__inplaceSub(l, n, f + 1);
                    0 !== r &&
                      ((r = a.__inplaceAdd(b, n, f)),
                      a.__setHalfDigit(n + f, a.__halfDigit(n + f) + r),
                      p--),
                      c &&
                        (1 & n ? (o = p << 16) : i.__setDigit(n >>> 1, o | p));
                  }
                  return d
                    ? (a.__inplaceRightShift(m),
                      c ? { quotient: i, remainder: a } : a)
                    : c
                    ? i
                    : void 0;
                },
              },
              {
                key: '__clz16',
                value: function (a) {
                  return k(a) - 16;
                },
              },
              {
                key: '__specialLeftShift',
                value: function (a, b, c) {
                  var e = a.length,
                    d = new g(e + c, !1);
                  if (0 === b) {
                    for (var f = 0; f < e; f++) d.__setDigit(f, a.__digit(f));
                    return 0 < c && d.__setDigit(e, 0), d;
                  }
                  for (var j, f = 0, l = 0; l < e; l++)
                    (j = a.__digit(l)),
                      d.__setDigit(l, (j << b) | f),
                      (f = j >>> (32 - b));
                  return 0 < c && d.__setDigit(e, f), d;
                },
              },
              {
                key: '__leftShiftByAbsolute',
                value: function (a, b) {
                  b = g.__toShiftAmount(b);
                  if (0 > b) throw new RangeError('BigInt too big');
                  var c = b >>> 5;
                  b = 31 & b;
                  var d = a.length,
                    e = 0 !== b && 0 != a.__digit(d - 1) >>> (32 - b),
                    f = d + c + (e ? 1 : 0),
                    m = new g(f, a.sign);
                  if (0 === b) {
                    for (var n = 0; n < c; n++) m.__setDigit(n, 0);
                    for (; n < f; n++) m.__setDigit(n, a.__digit(n - c));
                  } else {
                    for (n = 0, f = 0; f < c; f++) m.__setDigit(f, 0);
                    for (var o, f = 0; f < d; f++)
                      (o = a.__digit(f)),
                        m.__setDigit(f + c, (o << b) | n),
                        (n = o >>> (32 - b));
                    if (e) m.__setDigit(d + c, n);
                    else if (0 !== n) throw new Error('implementation bug');
                  }
                  return m.__trim();
                },
              },
              {
                key: '__rightShiftByAbsolute',
                value: function (a, b) {
                  var c = a.length,
                    d = a.sign;
                  b = g.__toShiftAmount(b);
                  if (0 > b) return g.__rightShiftByMaximum(d);
                  var e = b >>> 5;
                  b = 31 & b;
                  var f = c - e;
                  if (0 >= f) return g.__rightShiftByMaximum(d);
                  var i = !1;
                  if (d)
                    if (0 != (a.__digit(e) & ((1 << b) - 1))) i = !0;
                    else
                      for (var m = 0; m < e; m++)
                        if (0 !== a.__digit(m)) {
                          i = !0;
                          break;
                        }
                  if (i && 0 === b) {
                    m = a.__digit(c - 1);
                    0 == ~m && f++;
                  }
                  m = new g(f, d);
                  if (0 === b)
                    for (f = e; f < c; f++) m.__setDigit(f - e, a.__digit(f));
                  else {
                    for (
                      var n, d = a.__digit(e) >>> b, f = c - e - 1, c = 0;
                      c < f;
                      c++
                    )
                      (n = a.__digit(c + e + 1)),
                        m.__setDigit(c, (n << (32 - b)) | d),
                        (d = n >>> b);
                    m.__setDigit(f, d);
                  }
                  return i && (m = g.__absoluteAddOne(m, !0, m)), m.__trim();
                },
              },
              {
                key: '__rightShiftByMaximum',
                value: function (a) {
                  return a ? g.__oneDigit(1, !0) : g.__zero();
                },
              },
              {
                key: '__toShiftAmount',
                value: function (a) {
                  if (1 < a.length) return -1;
                  a = a.__unsignedDigit(0);
                  return a > g.__kMaxLengthBits ? -1 : a;
                },
              },
              {
                key: '__toPrimitive',
                value: function (b) {
                  var c =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : 'default';
                  if ('object' !== a(b)) return b;
                  if (b.constructor === g) return b;
                  var d = b[Symbol.toPrimitive];
                  if (d) {
                    var e = d(c);
                    if ('object' !== a(e)) return e;
                    throw new TypeError(
                      'Cannot convert object to primitive value',
                    );
                  }
                  var f = b.valueOf;
                  if (f) {
                    var k = f.call(b);
                    if ('object' !== a(k)) return k;
                  }
                  var l = b.toString;
                  if (l) {
                    var m = l.call(b);
                    if ('object' !== a(m)) return m;
                  }
                  throw new TypeError(
                    'Cannot convert object to primitive value',
                  );
                },
              },
              {
                key: '__toNumeric',
                value: function (a) {
                  return g.__isBigInt(a) ? a : +a;
                },
              },
              {
                key: '__isBigInt',
                value: function (b) {
                  return 'object' === a(b) && b.constructor === g;
                },
              },
              {
                key: '__truncateToNBits',
                value: function (a, b) {
                  for (
                    var c = (a + 31) >>> 5,
                      d = new g(c, b.sign),
                      c = c - 1,
                      e = 0;
                    e < c;
                    e++
                  )
                    d.__setDigit(e, b.__digit(e));
                  e = b.__digit(c);
                  if (0 != (31 & a)) {
                    b = 32 - (31 & a);
                    e = (e << b) >>> b;
                  }
                  return d.__setDigit(c, e), d.__trim();
                },
              },
              {
                key: '__truncateAndSubFromPowerOfTwo',
                value: function (a, b, c) {
                  for (
                    var d = Math.min,
                      e = (a + 31) >>> 5,
                      c = new g(e, c),
                      f = 0,
                      e = e - 1,
                      h = 0,
                      d = d(e, b.length);
                    f < d;
                    f++
                  ) {
                    var j = b.__digit(f),
                      l = 0 - (65535 & j) - h;
                    h = 1 & (l >>> 16);
                    j = 0 - (j >>> 16) - h;
                    (h = 1 & (j >>> 16)),
                      c.__setDigit(f, (65535 & l) | (j << 16));
                  }
                  for (; f < e; f++) c.__setDigit(f, 0 | -h);
                  l = e < b.length ? b.__digit(e) : 0;
                  j = 31 & a;
                  if (0 === j) {
                    d = 0 - (65535 & l) - h;
                    h = 1 & (d >>> 16);
                    f = 0 - (l >>> 16) - h;
                    b = (65535 & d) | (f << 16);
                  } else {
                    a = 32 - j;
                    l = (l << a) >>> a;
                    d = 1 << (32 - a);
                    f = (65535 & d) - (65535 & l) - h;
                    h = 1 & (f >>> 16);
                    j = (d >>> 16) - (l >>> 16) - h;
                    (b = (65535 & f) | (j << 16)), (b &= d - 1);
                  }
                  return c.__setDigit(e, b), c.__trim();
                },
              },
              {
                key: '__digitPow',
                value: function (a, b) {
                  for (var c = 1; 0 < b; )
                    1 & b && (c *= a), (b >>>= 1), (a *= a);
                  return c;
                },
              },
            ],
          ),
          g
        );
      })(k(Array));
      return (
        (n.__kMaxLength = 33554432),
        (n.__kMaxLengthBits = n.__kMaxLength << 5),
        (n.__kMaxBitsPerChar = [
          0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126,
          128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156,
          158, 159, 160, 162, 163, 165, 166,
        ]),
        (n.__kBitsPerCharTableShift = 5),
        (n.__kBitsPerCharTableMultiplier = 1 << n.__kBitsPerCharTableShift),
        (n.__kConversionChars = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z',
        ]),
        (n.__kBitConversionBuffer = new ArrayBuffer(8)),
        (n.__kBitConversionDouble = new Float64Array(n.__kBitConversionBuffer)),
        (n.__kBitConversionInts = new Int32Array(n.__kBitConversionBuffer)),
        n
      );
    });
  },
  null,
);
__d(
  'TCompactProtocolPolyfill',
  ['StringToUtf8', 'ThriftTypes', 'Utf8ToString', 'jsbi'],
  function (a, b, c, d, e, f, g) {
    var h = Object.freeze({
        CT_STOP: 0,
        CT_BOOLEAN_TRUE: 1,
        CT_BOOLEAN_FALSE: 2,
        CT_BYTE: 3,
        CT_I16: 4,
        CT_I32: 5,
        CT_I64: 6,
        CT_DOUBLE: 7,
        CT_BINARY: 8,
        CT_LIST: 9,
        CT_SET: 10,
        CT_MAP: 11,
        CT_STRUCT: 12,
        CT_FLOAT: 13,
      }),
      i = Object.freeze({
        NONE: -1,
        CT_BOOLEAN_TRUE: h.CT_BOOLEAN_TRUE,
        CT_BOOLEAN_FALSE: h.CT_BOOLEAN_FALSE,
      }),
      j = [
        h.CT_STOP,
        0,
        h.CT_BOOLEAN_TRUE,
        h.CT_BYTE,
        h.CT_DOUBLE,
        0,
        h.CT_I16,
        0,
        h.CT_I32,
        0,
        h.CT_I64,
        h.CT_BINARY,
        h.CT_STRUCT,
        h.CT_MAP,
        h.CT_SET,
        h.CT_LIST,
        0,
        0,
        0,
        h.CT_FLOAT,
      ],
      k = Math.pow(2, 7) - 1,
      l = -1 * Math.pow(2, 7),
      m = Math.pow(2, 15) - 1,
      n = -1 * Math.pow(2, 15),
      o = Math.pow(2, 31) - 1,
      p = -1 * Math.pow(2, 31),
      q = Math.pow(2, 32) - 1,
      r = c('jsbi').BigInt('9223372036854775807'),
      s = c('jsbi').BigInt('-9223372036854775808'),
      t = c('jsbi').BigInt('18446744073709551615'),
      u = c('jsbi').BigInt(63),
      v = c('jsbi').BigInt(1),
      w = c('jsbi').BigInt(0),
      x = c('jsbi').BigInt(7),
      y = c('jsbi').BigInt(70),
      z = c('jsbi').BigInt(127),
      A = c('jsbi').BigInt(128),
      B = Math.pow(2, 4);
    a = (function () {
      function a(a) {
        (this.$4 = null),
          (this.$5 = null),
          (this.$1 = a),
          (this.$2 = []),
          (this.$3 = 0),
          (this.$6 = new DataView(new ArrayBuffer(1)));
      }
      var b = a.prototype;
      b.readStructBegin = function () {
        this.$2.push(this.$3), (this.$3 = 0);
      };
      b.readStructEnd = function () {
        this.$3 = this.$2.pop();
        return 0;
      };
      b.writeStructBegin = function (a) {
        this.$2.push(this.$3);
        this.$3 = 0;
        return 0;
      };
      b.writeStructEnd = function () {
        this.$3 = this.$2.pop();
        return 0;
      };
      b.writeFieldBegin = function (a) {
        if (a.ftype === c('ThriftTypes').BOOL) {
          this.$4 = { fid: a.fid, fname: a.fname, ftype: a.ftype };
          return 0;
        } else return this.$7(a, i.NONE);
      };
      b.writeListBegin = function (a) {
        return this.$8(a);
      };
      b.writeListEnd = function () {
        return 0;
      };
      b.writeSetBegin = function (a) {
        return this.$8(a);
      };
      b.writeSetEnd = function () {
        return 0;
      };
      b.writeMapBegin = function (a) {
        var b = 0;
        if (a.size === 0) b += this.$1.writeByte(0);
        else {
          b += this.writeVarint32(a.size);
          if (a.ktype != null && a.vtype != null)
            b += this.$1.writeByte((this.$9(a.ktype) << 4) | this.$9(a.vtype));
          else
            throw new Error('received invalid map info: ' + JSON.stringify(a));
        }
        return b;
      };
      b.writeMapEnd = function () {
        return 0;
      };
      b.$7 = function (a, b) {
        var c = 0;
        b = b === i.NONE ? this.$9(a.ftype) : b;
        a.fid > this.$3 && a.fid - this.$3 <= B - 1
          ? (c += this.$1.writeByte(((a.fid - this.$3) << 4) | b))
          : ((c += this.$1.writeByte(b)), (c += this.writeI16(a.fid)));
        this.$3 = a.fid;
        return c;
      };
      b.$8 = function (a) {
        var b = 0,
          c = this.$9(a.etype);
        a.size <= B - 2
          ? (b += this.$1.writeByte((a.size << 4) | c))
          : ((b += this.$1.writeByte(240 | c)),
            (b += this.writeVarint32(a.size)));
        return b;
      };
      b.readFieldBegin = function () {
        var a = this.$1.readByte(),
          b = a & 15;
        if (b === c('ThriftTypes').STOP)
          return { ftype: c('ThriftTypes').STOP, fid: 0 };
        a = (a & 240) >>> 4;
        var d;
        a === 0 ? (d = this.readI16()) : (d = this.$3 + a);
        a = this.$10(b);
        (b === h.CT_BOOLEAN_TRUE || b === h.CT_BOOLEAN_FALSE) &&
          (this.$5 = b === h.CT_BOOLEAN_TRUE);
        this.$3 = d;
        return { ftype: a, fid: d };
      };
      b.readListBegin = function () {
        return this.$11();
      };
      b.readListEnd = function () {
        return 0;
      };
      b.readSetBegin = function () {
        return this.$11();
      };
      b.readSetEnd = function () {
        return 0;
      };
      b.readMapBegin = function () {
        var a = this.readVarint32();
        if (a > 0) {
          var b = this.$1.readByte(),
            c = this.$12(b >> 4, 'readMapBegin:key');
          b = this.$12(b & 15, 'readMapBegin:value');
          return { ktype: this.$10(c), vtype: this.$10(b), size: a };
        }
        return { size: a };
      };
      b.readMapEnd = function () {
        return 0;
      };
      b.$12 = function (a, b) {
        if (a < 0 || a > 13)
          throw new Error(b + ' read invalid compact type: ' + a);
        return a;
      };
      b.$11 = function () {
        var a = this.$1.readByte(),
          b = this.$12(a & 15, '_readListOrSetBegin');
        b = this.$10(b);
        a = (a >> 4) & 15;
        a === 15 && (a = this.readVarint32());
        return { etype: b, size: a };
      };
      b.readFieldEnd = function () {
        return 0;
      };
      b.readByte = function () {
        this.$6.setUint8(0, this.$1.readByte());
        return this.$6.getInt8(0);
      };
      b.writeByte = function (a) {
        if (a < l || a > k)
          throw new Error('byte to write is out of range: ' + a);
        this.$6.setInt8(0, a);
        return this.$1.writeByte(this.$6.getUint8(0));
      };
      b.readFloat = function () {
        return this.$1.readFloatBE();
      };
      b.writeFloat = function (a) {
        return this.$1.writeFloatBE(a);
      };
      b.readDouble = function () {
        return this.$1.readDoubleBE();
      };
      b.writeDouble = function (a) {
        return this.$1.writeDoubleBE(a);
      };
      b.writeString = function (a) {
        return this.writeBinary(d('StringToUtf8').StringToUtf8(a));
      };
      b.skip = function (a) {
        switch (a) {
          case c('ThriftTypes').STOP:
            return;
          case c('ThriftTypes').BOOL:
            this.readBool();
            break;
          case c('ThriftTypes').BYTE:
            this.readByte();
            break;
          case c('ThriftTypes').DOUBLE:
            this.readDouble();
            break;
          case c('ThriftTypes').I16:
            this.readI16();
            break;
          case c('ThriftTypes').I32:
            this.readI32();
            break;
          case c('ThriftTypes').I64:
            this.readI64();
            break;
          case c('ThriftTypes').STRING:
            this.readString();
            break;
          case c('ThriftTypes').STRUCT:
            this.readStructBegin();
            var b;
            while (!0) {
              b = this.readFieldBegin();
              if (b.ftype === c('ThriftTypes').STOP) break;
              this.skip(b.ftype);
            }
            this.readStructEnd();
            break;
          case c('ThriftTypes').MAP:
            b = this.readMapBegin();
            if (b.size > 0 && b.ktype != null && b.vtype != null) {
              var d = b.ktype,
                e = b.vtype;
              for (var f = 0; f < b.size; f++) this.skip(d), this.skip(e);
            }
            break;
          case c('ThriftTypes').SET:
          case c('ThriftTypes').LIST:
            f = this.$11();
            for (d = 0; d < f.size; d++) this.skip(f.etype);
            break;
          case c('ThriftTypes').FLOAT:
            this.readFloat();
            break;
          default:
            throw new Error('encoutered unknow thrift type: ' + a + ' in skip');
        }
      };
      b.toByteArray = function () {
        return this.$1.toByteArray();
      };
      b.writeFieldEnd = function () {
        return 0;
      };
      b.writeFieldStop = function () {
        return this.$1.writeByte(c('ThriftTypes').STOP);
      };
      b.writeI16 = function (a) {
        if (a < n || a > m)
          throw new Error('trying to write i16 out of range: ' + a);
        return this.writeVarint32(this.i32ToZigzag(a));
      };
      b.readI16 = function () {
        var a = this.zigzagToI32(this.readVarint32());
        if (a < n || a > m) throw new Error('read invalid i16: ' + a);
        return a;
      };
      b.writeI32 = function (a) {
        if (a < p || a > o) throw new Error('i32 out of range: ' + a);
        return this.writeVarint32(this.i32ToZigzag(a));
      };
      b.readI32 = function () {
        return this.zigzagToI32(this.readVarint32());
      };
      b.writeI64 = function (a) {
        return this.writeVarint64(this.i64ToZigzag(a));
      };
      b.readI64 = function () {
        return this.zigzagToI64(this.readVarint64());
      };
      b.readBool = function () {
        var a;
        this.$5 != null
          ? ((a = this.$5), (this.$5 = null))
          : (a = this.$1.readByte() === h.CT_BOOLEAN_TRUE);
        return a;
      };
      b.writeBool = function (a) {
        var b = 0;
        this.$4 != null
          ? ((b += this.$7(
              this.$4,
              a ? i.CT_BOOLEAN_TRUE : i.CT_BOOLEAN_FALSE,
            )),
            (this.$4 = null))
          : (b += this.$1.writeByte(
              a ? h.CT_BOOLEAN_TRUE : h.CT_BOOLEAN_FALSE,
            ));
        return b;
      };
      b.readBinary = function () {
        var a = this.readVarint32();
        return a === 0 ? new Uint8Array(0) : this.$1.readBytes(a);
      };
      b.writeBinary = function (a) {
        var b = 0;
        b += this.writeVarint32(a.length);
        b += this.$1.write(a);
        return b;
      };
      b.i32ToZigzag = function (a) {
        if (a < p || a > o)
          throw new Error('number: ' + a + ' is out of range of i32');
        return ((a << 1) ^ (a < 0 ? 4294967295 : 0)) >>> 0;
      };
      b.zigzagToI32 = function (a) {
        if (a < 0 || a > q)
          throw new Error('number: ' + a + ' is out of range of uint32');
        return (a >>> 1) ^ (-1 * (a & 1));
      };
      b.i64ToZigzag = function (a) {
        if (c('jsbi').greaterThan(a, r) || c('jsbi').lessThan(a, s))
          throw new Error('i64 out of range: ' + a.toString());
        return c('jsbi').bitwiseXor(
          c('jsbi').signedRightShift(a, u),
          c('jsbi').leftShift(a, v),
        );
      };
      b.zigzagToI64 = function (a) {
        if (c('jsbi').lessThan(a, 0) || c('jsbi').greaterThan(a, t))
          throw new Error('invalid uint64: ' + a.toString());
        return c('jsbi').equal(c('jsbi').bitwiseAnd(a, v), v)
          ? c('jsbi').bitwiseNot(c('jsbi').signedRightShift(a, v))
          : c('jsbi').signedRightShift(a, v);
      };
      b.writeVarint32 = function (a) {
        if (a < 0 || a > q)
          throw new Error('writeVarint32 received out of range uint32: ' + a);
        a = a;
        var b = 0;
        while (!0)
          if (a >>> 7 === 0) {
            this.$1.writeByte(a);
            b++;
            break;
          } else this.$1.writeByte((a & 127) | 128), b++, (a >>>= 7);
        return b;
      };
      b.readVarint32 = function () {
        var a = 0,
          b = 0,
          c;
        while (!0) {
          c = this.$1.readByte();
          a = (a | ((c & 127) << b)) >>> 0;
          b += 7;
          if ((c & 128) == 0) {
            if (b === 35 && (c & 240) != 0)
              throw new Error('result exceeded 32 bit limit');
            break;
          }
          if (b > 28) throw new Error('result exceeded 32 bit limit');
        }
        return a;
      };
      b.writeVarint64 = function (a) {
        if (c('jsbi').lessThan(a, w) || c('jsbi').greaterThan(a, t))
          throw new Error('invalid uint64: ' + a.toString());
        a = a;
        var b = 0;
        while (!0)
          if (c('jsbi').equal(c('jsbi').signedRightShift(a, x), w)) {
            this.$1.writeByte(c('jsbi').toNumber(a));
            b++;
            break;
          } else {
            var d = c('jsbi').toNumber(
              c('jsbi').bitwiseOr(c('jsbi').bitwiseAnd(a, z), A),
            );
            this.$1.writeByte(d);
            b++;
            a = c('jsbi').signedRightShift(a, x);
          }
        return b;
      };
      b.readVarint64 = function () {
        var a = w,
          b = w,
          d;
        while (!0) {
          d = c('jsbi').BigInt(this.$1.readByte());
          a = c('jsbi').bitwiseOr(
            a,
            c('jsbi').leftShift(c('jsbi').bitwiseAnd(d, z), b),
          );
          b = c('jsbi').add(b, x);
          if (c('jsbi').equal(c('jsbi').bitwiseAnd(d, A), w)) {
            if (c('jsbi').equal(b, y) && c('jsbi').notEqual(d, v))
              throw new Error('result exceeded 64 bit limit');
            break;
          }
          if (c('jsbi').greaterThan(b, u))
            throw new Error('result exceeded 64 bit limit');
        }
        return a;
      };
      b.readString = function () {
        return d('Utf8ToString').Utf8ToString(this.readBinary());
      };
      b.getLastFieldId = function () {
        return this.$3;
      };
      b.getLastField = function () {
        return this.$2;
      };
      b.getBooleanFieldInfo = function () {
        return this.$4;
      };
      b.getBooleanValue = function () {
        return this.$5;
      };
      b.$9 = function (a) {
        return j[a];
      };
      b.$10 = function (a) {
        switch (a) {
          case h.CT_STOP:
            return c('ThriftTypes').STOP;
          case h.CT_BOOLEAN_FALSE:
          case h.CT_BOOLEAN_TRUE:
            return c('ThriftTypes').BOOL;
          case h.CT_BYTE:
            return c('ThriftTypes').BYTE;
          case h.CT_I16:
            return c('ThriftTypes').I16;
          case h.CT_I32:
            return c('ThriftTypes').I32;
          case h.CT_I64:
            return c('ThriftTypes').I64;
          case h.CT_DOUBLE:
            return c('ThriftTypes').DOUBLE;
          case h.CT_FLOAT:
            return c('ThriftTypes').FLOAT;
          case h.CT_BINARY:
            return c('ThriftTypes').STRING;
          case h.CT_LIST:
            return c('ThriftTypes').LIST;
          case h.CT_SET:
            return c('ThriftTypes').SET;
          case h.CT_MAP:
            return c('ThriftTypes').MAP;
          case h.CT_STRUCT:
            return c('ThriftTypes').STRUCT;
          default:
            throw new Error("don't know what type");
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'CompactSerializerPolyfill',
  [
    'TCompactProtocolPolyfill',
    'TNoOpWriteBuffer',
    'TReadBuffer',
    'TWriteBuffer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      a = new (c('TReadBuffer'))(a);
      a = new (c('TCompactProtocolPolyfill'))(a);
      return b(a);
    }
    function a(a, b, c) {
      try {
        return h(a, b);
      } catch (a) {
        c != null && c(a);
      }
      return null;
    }
    function i(a, b, d) {
      d === void 0 && (d = !1);
      if (d) {
        d = new (c('TNoOpWriteBuffer'))();
        var e = new (c('TCompactProtocolPolyfill'))(d);
        b(a, e);
        e = new (c('TWriteBuffer'))(d.currentSize());
      } else e = new (c('TWriteBuffer'))();
      d = new (c('TCompactProtocolPolyfill'))(e);
      b(a, d);
      return d.toByteArray();
    }
    function b(a, b, c, d) {
      c === void 0 && (c = !1);
      try {
        return i(a, b, c);
      } catch (a) {
        d != null && d(a);
      }
      return null;
    }
    g.deserialize = h;
    g.deserializeNoThrow = a;
    g.serialize = i;
    g.serializeNoThrow = b;
  },
  98,
);
__d(
  'DGWRequestStreamUtils',
  ['Base64', 'WebDriverConfig', 'cr:3024', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, d, e, f) {
      var g = {};
      a = Object.entries(a);
      for (var h = 0; h < a.length; h++) {
        var i = a[h],
          j = i[0];
        i = i[1];
        typeof i == 'string'
          ? (g['XRSS-' + j] = i)
          : typeof i == 'number'
          ? (g['XRSN-' + j] = i.toString())
          : typeof i == 'boolean'
          ? (g['XRSB-' + j] = i.toString())
          : typeof i == 'object' &&
            i != null &&
            (g['XRSO-' + j] = c('Base64').encode(JSON.stringify(i)));
      }
      d && (g['xrs-body'] = 'true');
      e != null &&
        e.length > 0 &&
        (g['xrs-instrumentation'] = c('Base64').encode(e));
      g['XRS-Accept-Ack'] = 'RSAck';
      f != null &&
        f.ackTimeoutSec != null &&
        (g['XRS-SRAck-Timeout'] = f.ackTimeoutSec.toString());
      g['XRSS-http_referer'] = window.location.href;
      if (c('WebDriverConfig').isTestRunning && c('gkx')('5639')) {
        j = b('cr:3024') == null ? void 0 : b('cr:3024').get();
        j != null &&
          ((g['XRSS-is_test'] = '1'), (g['XRSS-original_request_id'] = j));
      }
      return g;
    }
    function h(a) {
      return Object.keys(a).reduce(function (b, c) {
        (typeof a[c] === 'string' ||
          typeof a[c] === 'boolean' ||
          typeof a[c] === 'number' ||
          typeof a[c] === 'object') &&
          (b[c] = a[c]);
        return b;
      }, {});
    }
    function d(a) {
      if (
        a.response &&
        a.response.instrumentation_data != null &&
        a.response.instrumentation_data.length > 0
      )
        try {
          a = JSON.parse(
            new TextDecoder('utf-8').decode(a.response.instrumentation_data),
          );
          return {
            auxId: a.auxId,
            dfTraceId: (a = a.dataFlowTracingData) == null ? void 0 : a.traceId,
          };
        } catch (a) {}
      return null;
    }
    function e(a, b) {
      var c = a.headers;
      a = a.body;
      b.kill_body === !0 && (a = null);
      b.new_body != null && (a = b.new_body);
      if (b.new_headers != null)
        try {
          c = h(JSON.parse(b.new_headers));
        } catch (a) {}
      if (b.patch_headers != null)
        try {
          c = babelHelpers['extends']({}, c, h(JSON.parse(b.patch_headers)));
        } catch (a) {}
      return { headers: c, body: a };
    }
    g.convertHeaders = a;
    g.cleanHeaders = h;
    g.getInstrumentationDataFieldsFromPayload = d;
    g.transformContextWithRewriteDelta = e;
  },
  98,
);
__d(
  'DGWStream',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('$InternalEnum').Mirrored([
      'ABNORMAL_CLOSURE',
      'GOING_AWAY',
      'SERVER_INTERNAL_ERROR',
      'PREMATURE_CLOSE',
      'UNKNOWN_ERROR',
      'KEEPALIVE_TIMEOUT',
      'TRANSPORT_CLOSED_BEFORE_STREAM_INIT',
      'ESTABLISHMENT_TIMEOUT',
      'UNAUTHORIZED',
      'REJECTED',
      'BAD_REQUEST',
      'DGW_SERVER_ERROR',
      'ESTABLISHMENT_ERROR',
    ]);
    function a(a) {
      switch (a) {
        case g.UNAUTHORIZED:
        case g.REJECTED:
        case g.BAD_REQUEST:
        case g.UNKNOWN_ERROR:
        case g.SERVER_INTERNAL_ERROR:
          return !1;
        default:
          return !0;
      }
    }
    f.StreamError = g;
    f.isRetryableError = a;
  },
  66,
);
__d(
  'DGWStreamHandler',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b, c, d, e) {
        (this.$2 = a),
          (this.$3 = b),
          (this.$4 = c),
          (this.$5 = d),
          (this.$6 = e),
          (this.$1 = !0);
      }
      var b = a.prototype;
      b.onClose = function (a) {
        if (!this.$1) return;
        this.$2(a);
      };
      b.onDataReceived = function (a) {
        if (!this.$1) return;
        this.$3(a);
      };
      b.onError = function (a) {
        if (!this.$1) return;
        this.$4(a);
      };
      b.onStreamMustDrain = function (a, b) {
        if (!this.$1) return;
        this.$5(a, b);
      };
      b.onServerHasFinishedSendingData = function (a) {
        if (!this.$1) return;
        this.$6(a);
      };
      b.stop = function () {
        this.$1 = !1;
      };
      b.isStopped = function () {
        return !this.$1;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'RequestStreamCommonRequestStreamCommonSerializers',
  ['RequestStreamCommonRequestStreamCommonTypes', 'ThriftTypes', 'jsbi'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a() {
      return {};
    }
    function c() {
      return { bytes: Uint8Array.of() };
    }
    function d() {
      return { message: '' };
    }
    function e() {
      return {
        reason: b(
          'RequestStreamCommonRequestStreamCommonTypes',
        ).TerminationReason.cast(0),
      };
    }
    function g() {
      return {};
    }
    function h() {
      return {
        stream_id: '0',
        last_sequencer: 0,
        amendment_count: 0,
        last_status: b(
          'RequestStreamCommonRequestStreamCommonTypes',
        ).FlowStatus.cast(0),
      };
    }
    function i() {
      return { caller_timestamp_ms: '0' };
    }
    function j() {
      return { original_ping_timestamp_ms: '0' };
    }
    function k() {
      return {};
    }
    function l(a, c) {
      c.writeStructBegin('ResponseRewriteRequest'),
        a.new_headers != null &&
          (c.writeFieldBegin({
            fname: 'new_headers',
            ftype: b('ThriftTypes').STRING,
            fid: 1,
          }),
          c.writeString(a.new_headers),
          c.writeFieldEnd()),
        a.new_body != null &&
          (c.writeFieldBegin({
            fname: 'new_body',
            ftype: b('ThriftTypes').STRING,
            fid: 2,
          }),
          c.writeBinary(a.new_body),
          c.writeFieldEnd()),
        a.patch_headers != null &&
          (c.writeFieldBegin({
            fname: 'patch_headers',
            ftype: b('ThriftTypes').STRING,
            fid: 3,
          }),
          c.writeString(a.patch_headers),
          c.writeFieldEnd()),
        a.kill_body != null &&
          (c.writeFieldBegin({
            fname: 'kill_body',
            ftype: b('ThriftTypes').BOOL,
            fid: 4,
          }),
          c.writeBool(a.kill_body),
          c.writeFieldEnd()),
        a.temporary != null &&
          (c.writeFieldBegin({
            fname: 'temporary',
            ftype: b('ThriftTypes').BOOL,
            fid: 5,
          }),
          c.writeBool(a.temporary),
          c.writeFieldEnd()),
        c.writeFieldStop(),
        c.writeStructEnd();
    }
    function m(a, c) {
      c.writeStructBegin('ResponseData');
      c.writeFieldBegin({
        fname: 'bytes',
        ftype: b('ThriftTypes').STRING,
        fid: 1,
      });
      if (a.bytes != null) c.writeBinary(a.bytes);
      else {
        var d = Uint8Array.of();
        c.writeBinary(d);
      }
      c.writeFieldEnd();
      a.metadata != null &&
        (c.writeFieldBegin({
          fname: 'metadata',
          ftype: b('ThriftTypes').STRING,
          fid: 2,
        }),
        c.writeString(a.metadata),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function n(a, c) {
      c.writeStructBegin('LogMessage');
      c.writeFieldBegin({
        fname: 'message',
        ftype: b('ThriftTypes').STRING,
        fid: 1,
      });
      if (a.message != null) c.writeString(a.message);
      else {
        a = '';
        c.writeString(a);
      }
      c.writeFieldEnd();
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function o(a, c) {
      c.writeStructBegin('Termination');
      c.writeFieldBegin({
        fname: 'reason',
        ftype: b('ThriftTypes').I32,
        fid: 1,
      });
      if (a.reason != null) {
        var d;
        c.writeI32((d = a.reason) != null ? d : 0);
      } else {
        d = b(
          'RequestStreamCommonRequestStreamCommonTypes',
        ).TerminationReason.cast(0);
        c.writeI32((d = d) != null ? d : 0);
      }
      c.writeFieldEnd();
      a.message != null &&
        (c.writeFieldBegin({
          fname: 'message',
          ftype: b('ThriftTypes').STRING,
          fid: 2,
        }),
        c.writeString(a.message),
        c.writeFieldEnd());
      a.retry_delay_ms != null &&
        (c.writeFieldBegin({
          fname: 'retry_delay_ms',
          ftype: b('ThriftTypes').I64,
          fid: 3,
        }),
        c.writeI64(b('jsbi').BigInt(a.retry_delay_ms)),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function p(a, c) {
      c.writeStructBegin('AmendStreamAck'),
        a.amendment_id != null &&
          (c.writeFieldBegin({
            fname: 'amendment_id',
            ftype: b('ThriftTypes').I64,
            fid: 1,
          }),
          c.writeI64(b('jsbi').BigInt(a.amendment_id)),
          c.writeFieldEnd()),
        a.accepted != null &&
          (c.writeFieldBegin({
            fname: 'accepted',
            ftype: b('ThriftTypes').BOOL,
            fid: 2,
          }),
          c.writeBool(a.accepted),
          c.writeFieldEnd()),
        a.result != null &&
          (c.writeFieldBegin({
            fname: 'result',
            ftype: b('ThriftTypes').STRING,
            fid: 3,
          }),
          c.writeBinary(a.result),
          c.writeFieldEnd()),
        c.writeFieldStop(),
        c.writeStructEnd();
    }
    function q(a, c) {
      c.writeStructBegin('StreamCheck');
      c.writeFieldBegin({
        fname: 'stream_id',
        ftype: b('ThriftTypes').I64,
        fid: 1,
      });
      if (a.stream_id != null) c.writeI64(b('jsbi').BigInt(a.stream_id));
      else {
        var d = '0';
        c.writeI64(b('jsbi').BigInt(d));
      }
      c.writeFieldEnd();
      c.writeFieldBegin({
        fname: 'last_sequencer',
        ftype: b('ThriftTypes').I32,
        fid: 2,
      });
      if (a.last_sequencer != null) c.writeI32(a.last_sequencer);
      else {
        d = 0;
        c.writeI32(d);
      }
      c.writeFieldEnd();
      c.writeFieldBegin({
        fname: 'amendment_count',
        ftype: b('ThriftTypes').I32,
        fid: 4,
      });
      if (a.amendment_count != null) c.writeI32(a.amendment_count);
      else {
        d = 0;
        c.writeI32(d);
      }
      c.writeFieldEnd();
      c.writeFieldBegin({
        fname: 'last_status',
        ftype: b('ThriftTypes').I32,
        fid: 3,
      });
      if (a.last_status != null) {
        c.writeI32((d = a.last_status) != null ? d : 0);
      } else {
        a = b('RequestStreamCommonRequestStreamCommonTypes').FlowStatus.cast(0);
        c.writeI32((d = a) != null ? d : 0);
      }
      c.writeFieldEnd();
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function r(a, c) {
      c.writeStructBegin('Ping');
      c.writeFieldBegin({
        fname: 'caller_timestamp_ms',
        ftype: b('ThriftTypes').I64,
        fid: 1,
      });
      if (a.caller_timestamp_ms != null)
        c.writeI64(b('jsbi').BigInt(a.caller_timestamp_ms));
      else {
        var d = '0';
        c.writeI64(b('jsbi').BigInt(d));
      }
      c.writeFieldEnd();
      if (a.streams_to_check != null) {
        c.writeFieldBegin({
          fname: 'streams_to_check',
          ftype: b('ThriftTypes').LIST,
          fid: 2,
        });
        c.writeListBegin({
          etype: b('ThriftTypes').STRUCT,
          size: a.streams_to_check.length,
        });
        for (
          var d = a.streams_to_check,
            a = Array.isArray(d),
            e = 0,
            d = a
              ? d
              : d[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (a) {
            if (e >= d.length) break;
            f = d[e++];
          } else {
            e = d.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          q(f, c);
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function s(a, c) {
      c.writeStructBegin('Pong');
      c.writeFieldBegin({
        fname: 'original_ping_timestamp_ms',
        ftype: b('ThriftTypes').I64,
        fid: 1,
      });
      if (a.original_ping_timestamp_ms != null)
        c.writeI64(b('jsbi').BigInt(a.original_ping_timestamp_ms));
      else {
        var d = '0';
        c.writeI64(b('jsbi').BigInt(d));
      }
      c.writeFieldEnd();
      if (a.stream_ids_missing != null) {
        c.writeFieldBegin({
          fname: 'stream_ids_missing',
          ftype: b('ThriftTypes').LIST,
          fid: 2,
        });
        c.writeListBegin({
          etype: b('ThriftTypes').I64,
          size: a.stream_ids_missing.length,
        });
        for (
          var d = a.stream_ids_missing,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          c.writeI64(b('jsbi').BigInt(g));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      if (a.stream_ids_behind != null) {
        c.writeFieldBegin({
          fname: 'stream_ids_behind',
          ftype: b('ThriftTypes').LIST,
          fid: 3,
        });
        c.writeListBegin({
          etype: b('ThriftTypes').I64,
          size: a.stream_ids_behind.length,
        });
        for (
          g = a.stream_ids_behind,
            f = Array.isArray(g),
            e = 0,
            g = f
              ? g
              : g[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (f) {
            if (e >= g.length) break;
            d = g[e++];
          } else {
            e = g.next();
            if (e.done) break;
            d = e.value;
          }
          d = d;
          c.writeI64(b('jsbi').BigInt(d));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      if (a.stream_ids_with_lost_amendments != null) {
        c.writeFieldBegin({
          fname: 'stream_ids_with_lost_amendments',
          ftype: b('ThriftTypes').LIST,
          fid: 4,
        });
        c.writeListBegin({
          etype: b('ThriftTypes').I64,
          size: a.stream_ids_with_lost_amendments.length,
        });
        for (
          d = a.stream_ids_with_lost_amendments,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          c.writeI64(b('jsbi').BigInt(g));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      if (a.stream_ids_with_wrong_status != null) {
        c.writeFieldBegin({
          fname: 'stream_ids_with_wrong_status',
          ftype: b('ThriftTypes').LIST,
          fid: 5,
        });
        c.writeListBegin({
          etype: b('ThriftTypes').I64,
          size: a.stream_ids_with_wrong_status.length,
        });
        for (
          g = a.stream_ids_with_wrong_status,
            f = Array.isArray(g),
            e = 0,
            g = f
              ? g
              : g[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (f) {
            if (e >= g.length) break;
            d = g[e++];
          } else {
            e = g.next();
            if (e.done) break;
            d = e.value;
          }
          a = d;
          c.writeI64(b('jsbi').BigInt(a));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function t(a, c) {
      c.writeStructBegin('StreamResponseDelta');
      if (a.flow_status != null) {
        var d;
        c.writeFieldBegin({
          fname: 'flow_status',
          ftype: b('ThriftTypes').I32,
          fid: 1,
        });
        c.writeI32((d = a.flow_status) != null ? d : 0);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.log != null) {
        c.writeFieldBegin({
          fname: 'log',
          ftype: b('ThriftTypes').STRUCT,
          fid: 2,
        });
        n(a.log, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.rewrite != null) {
        c.writeFieldBegin({
          fname: 'rewrite',
          ftype: b('ThriftTypes').STRUCT,
          fid: 3,
        });
        l(a.rewrite, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.data != null) {
        c.writeFieldBegin({
          fname: 'data',
          ftype: b('ThriftTypes').STRUCT,
          fid: 4,
        });
        m(a.data, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.termination != null) {
        c.writeFieldBegin({
          fname: 'termination',
          ftype: b('ThriftTypes').STRUCT,
          fid: 5,
        });
        o(a.termination, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.amend_ack != null) {
        c.writeFieldBegin({
          fname: 'amend_ack',
          ftype: b('ThriftTypes').STRUCT,
          fid: 6,
        });
        p(a.amend_ack, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function u(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').STRING
              ? (c.new_headers = a.readString())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').STRING
              ? (c.new_body = a.readBinary())
              : a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').STRING
              ? (c.patch_headers = a.readString())
              : a.skip(e);
            break;
          case 4:
            e === b('ThriftTypes').BOOL
              ? (c.kill_body = a.readBool())
              : a.skip(e);
            break;
          case 5:
            e === b('ThriftTypes').BOOL
              ? (c.temporary = a.readBool())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return c;
    }
    function v(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').STRING
              ? (c.bytes = a.readBinary())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').STRING
              ? (c.metadata = a.readString())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.bytes === void 0 && (c.bytes = Uint8Array.of());
      return c;
    }
    function w(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').STRING
              ? (c.message = a.readString())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.message === void 0 && (c.message = '');
      return c;
    }
    function x(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').I32
              ? (c.reason = b(
                  'RequestStreamCommonRequestStreamCommonTypes',
                ).TerminationReason.cast(a.readI32()))
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').STRING
              ? (c.message = a.readString())
              : a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').I64
              ? (c.retry_delay_ms = a.readI64().toString())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.reason === void 0 &&
        (c.reason = b(
          'RequestStreamCommonRequestStreamCommonTypes',
        ).TerminationReason.cast(0));
      return c;
    }
    function y(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').I64
              ? (c.amendment_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').BOOL
              ? (c.accepted = a.readBool())
              : a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').STRING
              ? (c.result = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return c;
    }
    function z(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').I64
              ? (c.stream_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').I32
              ? (c.last_sequencer = a.readI32())
              : a.skip(e);
            break;
          case 4:
            e === b('ThriftTypes').I32
              ? (c.amendment_count = a.readI32())
              : a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').I32
              ? (c.last_status = b(
                  'RequestStreamCommonRequestStreamCommonTypes',
                ).FlowStatus.cast(a.readI32()))
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.stream_id === void 0 && (c.stream_id = '0');
      c.last_sequencer === void 0 && (c.last_sequencer = 0);
      c.amendment_count === void 0 && (c.amendment_count = 0);
      c.last_status === void 0 &&
        (c.last_status = b(
          'RequestStreamCommonRequestStreamCommonTypes',
        ).FlowStatus.cast(0));
      return c;
    }
    function A(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').I64
              ? (c.caller_timestamp_ms = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            if (e === b('ThriftTypes').LIST) {
              c.streams_to_check = [];
              d = a.readListBegin();
              for (var f = 0; f < d.size; f++) {
                var g = z(a);
                c.streams_to_check.push(g);
              }
            } else a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.caller_timestamp_ms === void 0 && (c.caller_timestamp_ms = '0');
      return c;
    }
    function B(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').I64
              ? (c.original_ping_timestamp_ms = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            if (e === b('ThriftTypes').LIST) {
              c.stream_ids_missing = [];
              d = a.readListBegin();
              for (var f = 0; f < d.size; f++) {
                var g = a.readI64().toString();
                c.stream_ids_missing.push(g);
              }
            } else a.skip(e);
            break;
          case 3:
            if (e === b('ThriftTypes').LIST) {
              c.stream_ids_behind = [];
              g = a.readListBegin();
              for (f = 0; f < g.size; f++) {
                d = a.readI64().toString();
                c.stream_ids_behind.push(d);
              }
            } else a.skip(e);
            break;
          case 4:
            if (e === b('ThriftTypes').LIST) {
              c.stream_ids_with_lost_amendments = [];
              d = a.readListBegin();
              for (f = 0; f < d.size; f++) {
                g = a.readI64().toString();
                c.stream_ids_with_lost_amendments.push(g);
              }
            } else a.skip(e);
            break;
          case 5:
            if (e === b('ThriftTypes').LIST) {
              c.stream_ids_with_wrong_status = [];
              g = a.readListBegin();
              for (f = 0; f < g.size; f++) {
                d = a.readI64().toString();
                c.stream_ids_with_wrong_status.push(d);
              }
            } else a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.original_ping_timestamp_ms === void 0 &&
        (c.original_ping_timestamp_ms = '0');
      return c;
    }
    function C(a) {
      var c,
        d = {};
      a.readStructBegin();
      while (!0) {
        var e = a.readFieldBegin(),
          f = e.ftype;
        e = e.fid;
        if (f === b('ThriftTypes').STOP) break;
        switch (e) {
          case 1:
            if (f === b('ThriftTypes').I32)
              if (c == null)
                (d.flow_status = b(
                  'RequestStreamCommonRequestStreamCommonTypes',
                ).FlowStatus.cast(a.readI32())),
                  (c = 'flow_status');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: StreamResponseDelta; current field: flow_status, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 2:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.log = w(a)), (c = 'log');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: StreamResponseDelta; current field: log, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 3:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.rewrite = u(a)), (c = 'rewrite');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: StreamResponseDelta; current field: rewrite, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 4:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.data = v(a)), (c = 'data');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: StreamResponseDelta; current field: data, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 5:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.termination = x(a)), (c = 'termination');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: StreamResponseDelta; current field: termination, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 6:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.amend_ack = y(a)), (c = 'amend_ack');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: StreamResponseDelta; current field: amend_ack, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          default:
            a.skip(f);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return d;
    }
    f.ResponseRewriteRequest$DefaultConstructor = a;
    f.ResponseData$DefaultConstructor = c;
    f.LogMessage$DefaultConstructor = d;
    f.Termination$DefaultConstructor = e;
    f.AmendStreamAck$DefaultConstructor = g;
    f.StreamCheck$DefaultConstructor = h;
    f.Ping$DefaultConstructor = i;
    f.Pong$DefaultConstructor = j;
    f.StreamResponseDelta$DefaultConstructor = k;
    f.serializeResponseRewriteRequest = l;
    f.serializeResponseData = m;
    f.serializeLogMessage = n;
    f.serializeTermination = o;
    f.serializeAmendStreamAck = p;
    f.serializeStreamCheck = q;
    f.serializePing = r;
    f.serializePong = s;
    f.serializeStreamResponseDelta = t;
    f.deserializeResponseRewriteRequest = u;
    f.deserializeResponseData = v;
    f.deserializeLogMessage = w;
    f.deserializeTermination = x;
    f.deserializeAmendStreamAck = y;
    f.deserializeStreamCheck = z;
    f.deserializePing = A;
    f.deserializePong = B;
    f.deserializeStreamResponseDelta = C;
  },
  66,
);
__d(
  'RequestStreamSingleChannelSingleChannelRequestStreamTypes',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('$InternalEnum')({
      Ignored: 100,
      Success: 200,
      Queued: 250,
      UnknownStream: 400,
      HandledUnknownResult: 450,
      Failure: 500,
    });
    c = b('$InternalEnum')({
      Request_headers: 'request_headers',
      Request_body: 'request_body',
      Amend: 'amend',
      Ack: 'ack',
      Response: 'response',
      Ping: 'ping',
      Pong: 'pong',
    });
    e.exports = { Ack: a, Payload$Types: c };
  },
  null,
);
__d(
  'RequestStreamSingleChannelSingleChannelRequestStreamSerializers',
  [
    'RequestStreamCommonRequestStreamCommonSerializers',
    'RequestStreamCommonRequestStreamCommonTypes',
    'RequestStreamSingleChannelSingleChannelRequestStreamTypes',
    'ThriftTypes',
    'jsbi',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    function a() {
      return {};
    }
    function c() {
      return { body: Uint8Array.of() };
    }
    function d() {
      return { amendment: Uint8Array.of() };
    }
    function e() {
      return {
        ack: b(
          'RequestStreamSingleChannelSingleChannelRequestStreamTypes',
        ).Ack.cast(0),
      };
    }
    function g() {
      return { delta: [] };
    }
    function h() {
      return {};
    }
    function i(a, c) {
      c.writeStructBegin('RequestStreamHeaders'),
        a.headers != null &&
          (c.writeFieldBegin({
            fname: 'headers',
            ftype: b('ThriftTypes').STRING,
            fid: 1,
          }),
          c.writeBinary(a.headers),
          c.writeFieldEnd()),
        a.instrumentation_data != null &&
          (c.writeFieldBegin({
            fname: 'instrumentation_data',
            ftype: b('ThriftTypes').STRING,
            fid: 2,
          }),
          c.writeBinary(a.instrumentation_data),
          c.writeFieldEnd()),
        c.writeFieldStop(),
        c.writeStructEnd();
    }
    function j(a, c) {
      c.writeStructBegin('RequestStreamBody');
      c.writeFieldBegin({
        fname: 'body',
        ftype: b('ThriftTypes').STRING,
        fid: 1,
      });
      if (a.body != null) c.writeBinary(a.body);
      else {
        a = Uint8Array.of();
        c.writeBinary(a);
      }
      c.writeFieldEnd();
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function k(a, c) {
      c.writeStructBegin('AmendStream');
      a.amendment_id != null &&
        (c.writeFieldBegin({
          fname: 'amendment_id',
          ftype: b('ThriftTypes').I64,
          fid: 1,
        }),
        c.writeI64(b('jsbi').BigInt(a.amendment_id)),
        c.writeFieldEnd());
      c.writeFieldBegin({
        fname: 'amendment',
        ftype: b('ThriftTypes').STRING,
        fid: 2,
      });
      if (a.amendment != null) c.writeBinary(a.amendment);
      else {
        var d = Uint8Array.of();
        c.writeBinary(d);
      }
      c.writeFieldEnd();
      a.is_query != null &&
        (c.writeFieldBegin({
          fname: 'is_query',
          ftype: b('ThriftTypes').BOOL,
          fid: 3,
        }),
        c.writeBool(a.is_query),
        c.writeFieldEnd());
      a.instrumentation_data != null &&
        (c.writeFieldBegin({
          fname: 'instrumentation_data',
          ftype: b('ThriftTypes').STRING,
          fid: 4,
        }),
        c.writeBinary(a.instrumentation_data),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function l(a, c) {
      c.writeStructBegin('StreamResponseAck');
      a.response_id != null &&
        (c.writeFieldBegin({
          fname: 'response_id',
          ftype: b('ThriftTypes').I64,
          fid: 1,
        }),
        c.writeI64(b('jsbi').BigInt(a.response_id)),
        c.writeFieldEnd());
      c.writeFieldBegin({ fname: 'ack', ftype: b('ThriftTypes').I32, fid: 2 });
      if (a.ack != null) {
        var d;
        c.writeI32((d = a.ack) != null ? d : 0);
      } else {
        d = b(
          'RequestStreamSingleChannelSingleChannelRequestStreamTypes',
        ).Ack.cast(0);
        c.writeI32((d = d) != null ? d : 0);
      }
      c.writeFieldEnd();
      a.query_result != null &&
        (c.writeFieldBegin({
          fname: 'query_result',
          ftype: b('ThriftTypes').STRING,
          fid: 3,
        }),
        c.writeBinary(a.query_result),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function m(a, c) {
      c.writeStructBegin('StreamResponse');
      a.response_id != null &&
        (c.writeFieldBegin({
          fname: 'response_id',
          ftype: b('ThriftTypes').I64,
          fid: 1,
        }),
        c.writeI64(b('jsbi').BigInt(a.response_id)),
        c.writeFieldEnd());
      c.writeFieldBegin({
        fname: 'delta',
        ftype: b('ThriftTypes').LIST,
        fid: 2,
      });
      if (a.delta != null) {
        c.writeListBegin({
          etype: b('ThriftTypes').STRUCT,
          size: a.delta.length,
        });
        for (
          var d = a.delta,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          b(
            'RequestStreamCommonRequestStreamCommonSerializers',
          ).serializeStreamResponseDelta(g, c);
        }
        c.writeListEnd();
      } else {
        g = [];
        c.writeListBegin({ etype: b('ThriftTypes').STRUCT, size: g.length });
        for (f = 0; f < g.length; f++) {
          e = g[f];
          b(
            'RequestStreamCommonRequestStreamCommonSerializers',
          ).serializeStreamResponseDelta(e, c);
        }
        c.writeListEnd();
      }
      c.writeFieldEnd();
      if (a.ack_level != null) {
        c.writeFieldBegin({
          fname: 'ack_level',
          ftype: b('ThriftTypes').I32,
          fid: 3,
        });
        c.writeI32((d = a.ack_level) != null ? d : 0);
        c.writeFieldEnd();
      }
      a.query_request != null &&
        (c.writeFieldBegin({
          fname: 'query_request',
          ftype: b('ThriftTypes').STRING,
          fid: 4,
        }),
        c.writeBinary(a.query_request),
        c.writeFieldEnd());
      a.instrumentation_data != null &&
        (c.writeFieldBegin({
          fname: 'instrumentation_data',
          ftype: b('ThriftTypes').STRING,
          fid: 5,
        }),
        c.writeBinary(a.instrumentation_data),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function n(a, c) {
      c.writeStructBegin('Payload');
      if (a.request_headers != null) {
        c.writeFieldBegin({
          fname: 'request_headers',
          ftype: b('ThriftTypes').STRUCT,
          fid: 1,
        });
        i(a.request_headers, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.request_body != null) {
        c.writeFieldBegin({
          fname: 'request_body',
          ftype: b('ThriftTypes').STRUCT,
          fid: 2,
        });
        j(a.request_body, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.amend != null) {
        c.writeFieldBegin({
          fname: 'amend',
          ftype: b('ThriftTypes').STRUCT,
          fid: 3,
        });
        k(a.amend, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.ack != null) {
        c.writeFieldBegin({
          fname: 'ack',
          ftype: b('ThriftTypes').STRUCT,
          fid: 4,
        });
        l(a.ack, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.response != null) {
        c.writeFieldBegin({
          fname: 'response',
          ftype: b('ThriftTypes').STRUCT,
          fid: 5,
        });
        m(a.response, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.ping != null) {
        c.writeFieldBegin({
          fname: 'ping',
          ftype: b('ThriftTypes').STRUCT,
          fid: 6,
        });
        b('RequestStreamCommonRequestStreamCommonSerializers').serializePing(
          a.ping,
          c,
        );
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.pong != null) {
        c.writeFieldBegin({
          fname: 'pong',
          ftype: b('ThriftTypes').STRUCT,
          fid: 7,
        });
        b('RequestStreamCommonRequestStreamCommonSerializers').serializePong(
          a.pong,
          c,
        );
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function o(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').STRING
              ? (c.headers = a.readBinary())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').STRING
              ? (c.instrumentation_data = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return c;
    }
    function p(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').STRING
              ? (c.body = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.body === void 0 && (c.body = Uint8Array.of());
      return c;
    }
    function q(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').I64
              ? (c.amendment_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').STRING
              ? (c.amendment = a.readBinary())
              : a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').BOOL
              ? (c.is_query = a.readBool())
              : a.skip(e);
            break;
          case 4:
            e === b('ThriftTypes').STRING
              ? (c.instrumentation_data = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.amendment === void 0 && (c.amendment = Uint8Array.of());
      return c;
    }
    function r(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').I64
              ? (c.response_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').I32
              ? (c.ack = b(
                  'RequestStreamSingleChannelSingleChannelRequestStreamTypes',
                ).Ack.cast(a.readI32()))
              : a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').STRING
              ? (c.query_result = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.ack === void 0 &&
        (c.ack = b(
          'RequestStreamSingleChannelSingleChannelRequestStreamTypes',
        ).Ack.cast(0));
      return c;
    }
    function s(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').I64
              ? (c.response_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            if (e === b('ThriftTypes').LIST) {
              c.delta = [];
              d = a.readListBegin();
              for (var f = 0; f < d.size; f++) {
                var g = b(
                  'RequestStreamCommonRequestStreamCommonSerializers',
                ).deserializeStreamResponseDelta(a);
                c.delta.push(g);
              }
            } else a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').I32
              ? (c.ack_level = b(
                  'RequestStreamCommonRequestStreamCommonTypes',
                ).AckLevel.cast(a.readI32()))
              : a.skip(e);
            break;
          case 4:
            e === b('ThriftTypes').STRING
              ? (c.query_request = a.readBinary())
              : a.skip(e);
            break;
          case 5:
            e === b('ThriftTypes').STRING
              ? (c.instrumentation_data = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.delta === void 0 && (c.delta = []);
      return c;
    }
    function t(a) {
      var c,
        d = {};
      a.readStructBegin();
      while (!0) {
        var e = a.readFieldBegin(),
          f = e.ftype;
        e = e.fid;
        if (f === b('ThriftTypes').STOP) break;
        switch (e) {
          case 1:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null)
                (d.request_headers = o(a)), (c = 'request_headers');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: Payload; current field: request_headers, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 2:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.request_body = p(a)), (c = 'request_body');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: Payload; current field: request_body, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 3:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.amend = q(a)), (c = 'amend');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: Payload; current field: amend, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 4:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.ack = r(a)), (c = 'ack');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: Payload; current field: ack, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 5:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null) (d.response = s(a)), (c = 'response');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: Payload; current field: response, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 6:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null)
                (d.ping = b(
                  'RequestStreamCommonRequestStreamCommonSerializers',
                ).deserializePing(a)),
                  (c = 'ping');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: Payload; current field: ping, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          case 7:
            if (f === b('ThriftTypes').STRUCT)
              if (c == null)
                (d.pong = b(
                  'RequestStreamCommonRequestStreamCommonSerializers',
                ).deserializePong(a)),
                  (c = 'pong');
              else
                throw new Error(
                  'more than one field have been deserialized in union type: Payload; current field: pong, previous deserialized field: ' +
                    c,
                );
            else a.skip(f);
            break;
          default:
            a.skip(f);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return d;
    }
    f.RequestStreamHeaders$DefaultConstructor = a;
    f.RequestStreamBody$DefaultConstructor = c;
    f.AmendStream$DefaultConstructor = d;
    f.StreamResponseAck$DefaultConstructor = e;
    f.StreamResponse$DefaultConstructor = g;
    f.Payload$DefaultConstructor = h;
    f.serializeRequestStreamHeaders = i;
    f.serializeRequestStreamBody = j;
    f.serializeAmendStream = k;
    f.serializeStreamResponseAck = l;
    f.serializeStreamResponse = m;
    f.serializePayload = n;
    f.deserializeRequestStreamHeaders = o;
    f.deserializeRequestStreamBody = p;
    f.deserializeAmendStream = q;
    f.deserializeStreamResponseAck = r;
    f.deserializeStreamResponse = s;
    f.deserializePayload = t;
  },
  66,
);
__d(
  'RequestStreamState',
  ['RequestStreamCommonRequestStreamCommonTypes'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      switch (b) {
        case d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
          .Accepted:
          return a.seenAccepted
            ? a
            : {
                flowStatus: d('RequestStreamCommonRequestStreamCommonTypes')
                  .FlowStatus.Accepted,
                seenAccepted: !0,
              };
        default:
          if (!a.seenAccepted || a.flowStatus === b) return a;
          else return { flowStatus: b, seenAccepted: !0 };
      }
    }
    g.getNextState = a;
  },
  98,
);
__d(
  'DGWRequestStreamRef',
  [
    'CompactSerializerPolyfill',
    'DGWRequestStreamUtils',
    'DGWStream',
    'DGWStreamHandler',
    'InflightAmends',
    'Promise',
    'RTISubscriptionManagerConfig',
    'RequestStreamCloseReason',
    'RequestStreamCommonRequestStreamCommonTypes',
    'RequestStreamE2EClientLoggerEvent',
    'RequestStreamE2EClientLoggerMessageType',
    'RequestStreamE2ELogger',
    'RequestStreamE2ESampling',
    'RequestStreamSingleChannelSingleChannelRequestStreamSerializers',
    'RequestStreamSingleChannelSingleChannelRequestStreamTypes',
    'RequestStreamState',
    'RequestStreamTransport',
    'err',
    'gkx',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 4,
      i = 0,
      j = 1e3,
      k = 2,
      l = c('gkx')('2674') ? 3e4 : 5e3,
      m = 'dgw_stream_send_ack_failure',
      n = 'javascript-sandbox';
    function o(a) {
      if (!a) {
        a = c('err')(m);
        a.stack;
        throw a;
      }
    }
    function p(a, b) {
      if (a == null || a.length === 0) return null;
      a = JSON.parse(a);
      a.auxId = b;
      return new TextEncoder().encode(JSON.stringify(a));
    }
    function q(a) {
      var b = {};
      a = a.delta;
      a.forEach(function (a) {
        if (a.flow_status) {
          b.type = d(
            'RequestStreamCommonRequestStreamCommonTypes',
          ).StreamResponseDelta$Types.Flow_status;
          switch (a.flow_status) {
            case d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
              .Accepted:
              b.flow_status = 'Accepted';
              break;
            case d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
              .Started:
              b.flow_status = 'Started';
              break;
            case d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
              .Stopped:
              b.flow_status = 'Stopped';
              break;
          }
        } else a.log ? (b.type = d('RequestStreamCommonRequestStreamCommonTypes').StreamResponseDelta$Types.Log) : a.rewrite ? (b.type = d('RequestStreamCommonRequestStreamCommonTypes').StreamResponseDelta$Types.Rewrite) : a.data ? (b.type = d('RequestStreamCommonRequestStreamCommonTypes').StreamResponseDelta$Types.Data) : a.termination ? (b.type = d('RequestStreamCommonRequestStreamCommonTypes').StreamResponseDelta$Types.Termination) : a.amend_ack && (b.type = d('RequestStreamCommonRequestStreamCommonTypes').StreamResponseDelta$Types.Amend_ack);
      });
      return b;
    }
    a = (function () {
      function a(a, b, e, f, g, i) {
        var j = this;
        this.$6 = null;
        this.$7 = {};
        this.$10 = !1;
        this.$15 = 0;
        this.$16 = 0;
        this.$17 = 0;
        this.$20 = 0;
        var k = null;
        typeof b == 'string'
          ? (k = new TextEncoder().encode(b))
          : typeof b == 'object' && (k = b);
        this.$1 = { headers: a, body: k };
        this.$3 = e;
        this.$4 = f;
        this.$12 = h;
        this.$9 = !1;
        this.$14 = !1;
        this.$19 = i;
        g != null &&
          (this.$21() ||
            (g.dgwStreamGroupLoggingId = this.$19.getStreamGroupLoggingId()),
          (g.dgwCountPriorStreamsInGroup =
            this.$19.guessStreamGroupPriorStreamCount()),
          (g.transport = 'WEB_RS_STARGATE'));
        this.$5 = d('RequestStreamE2ESampling').validateInstrumentationData(
          a,
          g,
          f == null ? void 0 : f.requestLogContext,
          f == null ? void 0 : f.upsampleMultiplier,
        );
        !this.$21()
          ? (this.$6 = d('RequestStreamE2ELogger').createStreamLogger(
              a,
              this.$5,
              d('RequestStreamTransport').RequestStreamTransport
                .WEB_RS_STARGATE,
            ))
          : (this.$7.disableFalcoLogging = !0);
        this.$6 && (this.$7.loggingId = this.$6.getRequestId());
        f && f.overrideUrl != null && (this.$7.overrideUrl = f.overrideUrl);
        this.$8 = {
          flowStatus: d('RequestStreamCommonRequestStreamCommonTypes')
            .FlowStatus.Stopped,
          seenAccepted: !1,
        };
        this.$18 = new (c('InflightAmends'))(
          l,
          function (a, b) {
            var d;
            (d = j.$6) == null
              ? void 0
              : d.logE2EEvent(
                  c('RequestStreamE2EClientLoggerMessageType').AMENDMENT_ACK,
                  c('RequestStreamE2EClientLoggerEvent').RECEIVED,
                  babelHelpers['extends']({}, j.$22(), {
                    latency: b.toString(),
                  }),
                  a,
                );
          },
          function (a, b) {
            if (b.message !== m) {
              var d;
              (d = j.$6) == null
                ? void 0
                : d.logE2EEvent(
                    c('RequestStreamE2EClientLoggerMessageType').AMENDMENT_ACK,
                    c('RequestStreamE2EClientLoggerEvent').FAILURE,
                    babelHelpers['extends']({}, j.$22(), { reason: b.message }),
                    a,
                  );
            }
          },
        );
        (k = this.$6) == null
          ? void 0
          : k.logE2EEvent(
              c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
              c('RequestStreamE2EClientLoggerEvent').RECEIVED,
              {
                data_size:
                  (i =
                    b == null
                      ? void 0
                      : (e = b.length) == null
                      ? void 0
                      : e.toString()) != null
                    ? i
                    : '0',
              },
              '0',
              '0',
            );
      }
      var e = a.prototype;
      e.getInstrumentationData = function () {
        return this.$5;
      };
      e.getE2EClientLogger = function () {
        return this.$6;
      };
      e.amendWithAck = function (a) {
        a = this.$23(a, !0);
        return a === null || a === void 0
          ? b('Promise').resolve(!1)
          : this.$18.getPromise(a) || b('Promise').resolve(!1);
      };
      e.amendWithoutAck = function (a) {
        this.$23(a, !1);
      };
      e.cancel = function () {
        var a;
        (a = this.$6) == null
          ? void 0
          : a.logE2EEvent(
              c('RequestStreamE2EClientLoggerMessageType').CANCEL,
              c('RequestStreamE2EClientLoggerEvent').RECEIVED,
            );
        this.$9 = !0;
        this.$24(
          d('RequestStreamCloseReason').RequestStreamCloseReason.UserIntention,
          'user cancel the stream',
          !0,
        );
      };
      e.start = function (a) {
        var e = this;
        a === void 0 && (a = !1);
        var f = String(this.$15++),
          g = Date.now();
        return this.$25(f)
          .then(function () {
            var a;
            e.$14 = !1;
            e.$20 = 0;
            var b = (Date.now() - g).toString();
            (a = e.$6) == null
              ? void 0
              : a.logE2EEvent(
                  c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
                  c('RequestStreamE2EClientLoggerEvent').PUBACK,
                  { latency: b },
                  f,
                  String(e.$17),
                );
          })
          ['catch'](function (g) {
            g.stack;
            if (g.message === m && e.$10) return;
            e.$14 = !1;
            if (
              c('gkx')('1799') ||
              g !== d('DGWStream').StreamError.ESTABLISHMENT_ERROR
            ) {
              var h;
              (h = e.$6) == null
                ? void 0
                : h.logE2EEvent(
                    c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
                    c('RequestStreamE2EClientLoggerEvent').FAILURE,
                    { reason: g.message },
                    f,
                    String(e.$17),
                  );
              e.$24(
                a
                  ? d('RequestStreamCloseReason').RequestStreamCloseReason
                      .ReestablishError
                  : d('RequestStreamCloseReason').RequestStreamCloseReason
                      .StartStreamFailure,
                g.message,
                !0,
              );
              throw g;
            } else {
              (h = e.$6) == null
                ? void 0
                : h.logE2EEvent(
                    c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
                    c('RequestStreamE2EClientLoggerEvent').FAILURE,
                    { reason: (h = g.message) != null ? h : g },
                    f,
                    String(e.$17),
                  );
              var i = j * Math.pow(k, e.$20);
              return new (b('Promise'))(function (a) {
                return setTimeout(a, i);
              }).then(function () {
                e.$20++;
                e.$17++;
                return e.start();
              });
            }
          });
      };
      e.getFlowStatus = function () {
        return this.$8.flowStatus;
      };
      e.shouldTerminateOrRetry = function (a, e, f, g) {
        var h = this;
        if (this.$14) return;
        var j = e;
        this.$12 ||
          (j =
            'cannot retry for error: ' +
            e +
            ' because of hit max retry limitation');
        if (
          a !==
          d('RequestStreamCloseReason').RequestStreamCloseReason.ClientError
        ) {
          (e = this.$6) == null
            ? void 0
            : e.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
                c('RequestStreamE2EClientLoggerEvent').FAILURE,
                { reason: j },
                null,
                String(this.$17),
              );
        }
        e = f && this.$12;
        this.$24(a, j, !e);
        if (e) {
          var k = (f = g) != null ? f : i;
          this.$14 = !0;
          return new (b('Promise'))(function (a) {
            return setTimeout(a, k);
          })
            .then(function () {
              return h.$26();
            })
            ['catch'](function (a) {});
        }
      };
      e.$27 = function () {
        return this.$11 != null;
      };
      e.$23 = function (a, b) {
        var e,
          f = this,
          g = typeof a == 'string' ? new TextEncoder().encode(a) : a,
          h = String(this.$16++);
        (e = this.$6) == null
          ? void 0
          : e.logE2EEvent(
              c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
              c('RequestStreamE2EClientLoggerEvent').RECEIVED,
              {},
              h,
            );
        e = p(this.$5, h);
        g = { amend: { amendment: g, instrumentation_data: e } };
        b && g.amend && (g.amend.amendment_id = h);
        e = d('CompactSerializerPolyfill').serialize(
          g,
          d('RequestStreamSingleChannelSingleChannelRequestStreamSerializers')
            .serializePayload,
        );
        var i = Date.now();
        if (this.$28() && this.$11 != null) {
          b && this.$18.add(h);
          this.$11
            .send(e)
            .then(function (a) {
              var b;
              o(a);
              a = (Date.now() - i).toString();
              (b = f.$6) == null
                ? void 0
                : b.logE2EEvent(
                    c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
                    c('RequestStreamE2EClientLoggerEvent').PUBACK,
                    { latency: a },
                    h,
                  );
            })
            ['catch'](function (a) {
              var b;
              (b = f.$6) == null
                ? void 0
                : b.logE2EEvent(
                    c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
                    c('RequestStreamE2EClientLoggerEvent').FAILURE,
                    { reason: a.message },
                    h,
                  );
              f.$18.reject(h, a);
            });
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
                c('RequestStreamE2EClientLoggerEvent').SENT,
                {
                  data_size:
                    (e =
                      a == null
                        ? void 0
                        : (b = a.length) == null
                        ? void 0
                        : b.toString()) != null
                      ? e
                      : '0',
                },
                h,
              );
          return h;
        } else {
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').AMENDMENT,
                c('RequestStreamE2EClientLoggerEvent').FAILURE,
                { reason: 'not_started' },
                h,
              );
        }
      };
      e.$25 = function (a) {
        var e = this,
          f,
          g,
          i,
          j,
          k,
          l,
          m;
        return b('regeneratorRuntime').async(
          function (n) {
            while (1)
              switch ((n.prev = n.next)) {
                case 0:
                  if (this.$9) {
                    n.next = 36;
                    break;
                  }
                  g = this.$2 || this.$1;
                  n.prev = 2;
                  i = this.$29();
                  this.$13 = i;
                  j = d('DGWRequestStreamUtils').convertHeaders(
                    babelHelpers['extends']({}, g.headers, this.$30()),
                    g.body != null,
                    this.$5,
                  );
                  n.next = 8;
                  return b('regeneratorRuntime').awrap(
                    this.$19.establishStream(j, i, this.$7),
                  );
                case 8:
                  this.$11 = n.sent;
                  n.next = 23;
                  break;
                case 11:
                  n.prev = 11;
                  n.t0 = n['catch'](2);
                  if (
                    !(n.t0 === d('DGWStream').StreamError.ESTABLISHMENT_ERROR)
                  ) {
                    n.next = 15;
                    break;
                  }
                  throw n.t0;
                case 15:
                  if (
                    !(
                      d('DGWStream').StreamError.isValid(n.t0) &&
                      !d('DGWStream').isRetryableError(n.t0)
                    )
                  ) {
                    n.next = 19;
                    break;
                  }
                  throw new Error('StreamError: ' + n.t0);
                case 19:
                  if (
                    !(
                      d('DGWStream').StreamError.isValid(n.t0) &&
                      d('DGWStream').isRetryableError(n.t0)
                    )
                  ) {
                    n.next = 22;
                    break;
                  }
                  this.$31(n.t0);
                  return n.abrupt('return');
                case 22:
                  throw n.t0;
                case 23:
                  if (!this.$9) {
                    n.next = 26;
                    break;
                  }
                  this.$24(
                    d('RequestStreamCloseReason').RequestStreamCloseReason
                      .UserIntention,
                    'user cancel the stream',
                    !0,
                  );
                  return n.abrupt('return');
                case 26:
                  k = new Uint8Array([]);
                  g.body != null &&
                    ((l = { request_body: { body: g.body } }),
                    (k = d('CompactSerializerPolyfill').serialize(
                      l,
                      d(
                        'RequestStreamSingleChannelSingleChannelRequestStreamSerializers',
                      ).serializePayload,
                    )));
                  if (this.$11) {
                    n.next = 30;
                    break;
                  }
                  throw new Error('dgwstream_is_null');
                case 30:
                  m = this.$11.send(k).then(function (a) {
                    o(a),
                      e.$9 &&
                        e.$24(
                          d('RequestStreamCloseReason').RequestStreamCloseReason
                            .UserIntention,
                          'user cancel the stream',
                          !0,
                        );
                  });
                  (f = this.$6) == null
                    ? void 0
                    : f.logE2EEvent(
                        c('RequestStreamE2EClientLoggerMessageType')
                          .REQUEST_STREAM,
                        c('RequestStreamE2EClientLoggerEvent').SENT,
                        {},
                        a,
                        String(this.$17),
                      );
                  this.$12 = h;
                  return n.abrupt('return', m);
                case 36:
                  throw new Error('stream_already_canceled');
                case 37:
                case 'end':
                  return n.stop();
              }
          },
          null,
          this,
          [[2, 11]],
        );
      };
      e.$28 = function () {
        return (
          this.$8.flowStatus ===
            d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
              .Started ||
          this.$8.flowStatus ===
            d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus.Accepted
        );
      };
      e.$24 = function (a, b, e) {
        var f;
        this.$11 &&
          a !==
            d('RequestStreamCloseReason').RequestStreamCloseReason
              .StreamError &&
          a !==
            d('RequestStreamCloseReason').RequestStreamCloseReason
              .RemoteTermination &&
          this.$11.close();
        c('gkx')('574') &&
          this.$18.rejectAll(c('err')('stream terminating: ' + b));
        (f = this.$13) == null ? void 0 : f.stop();
        this.$11 = null;
        this.$10 = !0;
        this.$32(
          d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus.Stopped,
        ) &&
          this.$3.onFlowStatus(
            d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus.Stopped,
          );
        e &&
          !this.$9 &&
          this.$3.onTermination(
            'terminate stream because ' + a + ' with msg : ' + b,
          );
      };
      e.$32 = function (a) {
        var b = this.$8;
        this.$8 = d('RequestStreamState').getNextState(b, a);
        return b !== this.$8;
      };
      e.$26 = function () {
        this.$12--;
        this.$17++;
        return this.start(!0);
      };
      e.$33 = function (a) {
        var b = this;
        a = d('CompactSerializerPolyfill').deserialize(
          a,
          d('RequestStreamSingleChannelSingleChannelRequestStreamSerializers')
            .deserializePayload,
        );
        if (a.response) {
          var e = d(
              'DGWRequestStreamUtils',
            ).getInstrumentationDataFieldsFromPayload(a),
            f = e == null ? void 0 : e.auxId;
          e = e == null ? void 0 : e.dfTraceId;
          if (!this.$27()) {
            var g;
            (g = this.$6) == null
              ? void 0
              : g.logE2EEvent(
                  c('RequestStreamE2EClientLoggerMessageType').RESPONSE,
                  c('RequestStreamE2EClientLoggerEvent').FAILURE,
                  { reason: 'response_received_after_close' },
                  f,
                  String(this.$17),
                  e,
                );
            return;
          }
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').RESPONSE,
                c('RequestStreamE2EClientLoggerEvent').RECEIVED,
                q(a.response),
                f,
                String(this.$17),
                e,
              );
          g = a.response.delta;
          g.forEach(function (a) {
            if (a.data)
              b.$8.flowStatus ===
                d('RequestStreamCommonRequestStreamCommonTypes').FlowStatus
                  .Started &&
                b.$3.onData(new TextDecoder('utf-8').decode(a.data.bytes));
            else if (a.flow_status) {
              var c = a.flow_status;
              b.$32(c) && b.$3.onFlowStatus(c);
            } else if (a.termination) {
              c =
                (c = a.termination.message) != null
                  ? c
                  : 'unknown termination msg';
              b.$2 = null;
              b.shouldTerminateOrRetry(
                d('RequestStreamCloseReason').RequestStreamCloseReason
                  .RemoteTermination,
                c,
                a.termination.reason ===
                  d('RequestStreamCommonRequestStreamCommonTypes')
                    .TerminationReason.TryAgain,
                a.termination.retry_delay_ms != null
                  ? parseInt(a.termination.retry_delay_ms, 10)
                  : null,
              );
            } else if (a.log) b.$3.onLog(a.log.message);
            else if (a.amend_ack) {
              c = a.amend_ack.amendment_id;
              if (c != null) {
                var e = a.amend_ack.accepted || !1;
                b.$18.resolve(c, e);
              }
            } else if (a.rewrite) {
              c = d('DGWRequestStreamUtils').transformContextWithRewriteDelta(
                b.$1,
                a.rewrite,
              );
              a.rewrite.temporary === !0 ? (b.$2 = c) : (b.$1 = c);
            }
          });
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').RESPONSE,
                c('RequestStreamE2EClientLoggerEvent').SENT,
                q(a.response),
                f,
                String(this.$17),
                e,
              );
          a.response.ack_level ===
            d('RequestStreamCommonRequestStreamCommonTypes').AckLevel.Device &&
            a.response.response_id != null &&
            this.$34(a.response.response_id, f);
        } else {
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').RESPONSE,
                c('RequestStreamE2EClientLoggerEvent').FAILURE,
                { reason: 'unexpected_payload_type' },
                null,
                String(this.$17),
              );
        }
      };
      e.$34 = function (a, b) {
        a = {
          ack: {
            response_id: a,
            ack: d('RequestStreamSingleChannelSingleChannelRequestStreamTypes')
              .Ack.Success,
          },
        };
        a = d('CompactSerializerPolyfill').serialize(
          a,
          d('RequestStreamSingleChannelSingleChannelRequestStreamSerializers')
            .serializePayload,
        );
        if (this.$11 != null) {
          this.$11.send(a);
          (a = this.$6) == null
            ? void 0
            : a.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').RESPONSE_ACK,
                c('RequestStreamE2EClientLoggerEvent').SENT,
                {},
                b,
                String(this.$17),
              );
        } else {
          (a = this.$6) == null
            ? void 0
            : a.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').RESPONSE_ACK,
                c('RequestStreamE2EClientLoggerEvent').FAILURE,
                { reason: 'not_started' },
                b,
                String(this.$17),
              );
        }
      };
      e.$21 = function () {
        return this.$1.headers.method === 'Falco';
      };
      e.$29 = function () {
        return new (c('DGWStreamHandler'))(
          this.$35.bind(this),
          this.$36.bind(this),
          this.$31.bind(this),
          this.$37.bind(this),
          this.$38.bind(this),
        );
      };
      e.$38 = function (a) {
        (a = this.$6) == null
          ? void 0
          : a.logE2EEvent(
              c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
              c('RequestStreamE2EClientLoggerEvent').FAILURE,
              { reason: 'OnClose: Server Has FinishedSendingData' },
              null,
              String(this.$17),
            );
        this.$24(
          d('RequestStreamCloseReason').RequestStreamCloseReason.ServerDataEnd,
          'Client receive OnServerHasFinishedSendingData and Server will not send more data',
          !0,
        );
      };
      e.$35 = function (a) {
        (a = this.$6) == null
          ? void 0
          : a.logE2EEvent(
              c('RequestStreamE2EClientLoggerMessageType').REQUEST_STREAM,
              c('RequestStreamE2EClientLoggerEvent').FAILURE,
              { reason: 'OnClose: Server Close Connection' },
              null,
              String(this.$17),
            );
        this.$24(
          d('RequestStreamCloseReason').RequestStreamCloseReason
            .RemoteTermination,
          'Client receive OnClose and Server will not send more data',
          !0,
        );
      };
      e.$36 = function (a) {
        try {
          this.$33(a);
        } catch (b) {
          (a = this.$6) == null
            ? void 0
            : a.logE2EEvent(
                c('RequestStreamE2EClientLoggerMessageType').RESPONSE,
                c('RequestStreamE2EClientLoggerEvent').FAILURE,
                { reason: b.message },
                null,
                String(this.$17),
              );
          this.shouldTerminateOrRetry(
            d('RequestStreamCloseReason').RequestStreamCloseReason.ClientError,
            b.message,
            !1,
          );
        }
      };
      e.$31 = function (a) {
        var b = '',
          c = d('DGWStream').isRetryableError(a);
        b = 'StreamError: Received ' + a;
        this.shouldTerminateOrRetry(
          d('RequestStreamCloseReason').RequestStreamCloseReason.StreamError,
          b,
          c,
        );
      };
      e.$37 = function (a, b) {
        this.shouldTerminateOrRetry(
          d('RequestStreamCloseReason').RequestStreamCloseReason.ServerDrain,
          b,
          !0,
        );
      };
      e.$30 = function () {
        var a = {},
          b = c('RTISubscriptionManagerConfig').bladerunner_www_sandbox;
        b != null && (a[n] = b);
        return a;
      };
      e.$22 = function () {
        var a = {};
        c('gkx')('1626') &&
          (a.pending_amendments_size = this.$18.getSize().toString());
        return a;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'DGWAuth',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('$InternalEnum')({
      TEST: '0:0',
      FACEBOOK: '1:0',
      INTERNALFB: '2:0',
      ENTERPRISEFB: '7:0',
      RECRUITINGFB: '8:0',
      INSTAGRAM: '6:0',
      BULLETIN: '9:0',
    });
    function a(a) {
      if (a === 'TEST') return g.TEST;
      else if (a === 'FACEBOOK') return g.FACEBOOK;
      else if (a === 'INTERNALFB') return g.INTERNALFB;
      else if (a === 'ENTERPRISEFB') return g.ENTERPRISEFB;
      else if (a === 'RECRUITINGFB') return g.RECRUITINGFB;
      else if (a === 'INSTAGRAM') return g.INSTAGRAM;
      else if (a === 'BULLETIN') return g.BULLETIN;
      else {
        a = new Error('failed to convert string (' + a + ') to DGWAuth Type');
        a.stack;
        throw a;
      }
    }
    function c(a) {
      if (a === g.FACEBOOK) return 'FACEBOOK';
      else if (a === g.INTERNALFB) return 'INTERNALFB';
      else if (a === g.ENTERPRISEFB) return 'ENTERPRISEFB';
      else if (a === g.RECRUITINGFB) return 'RECRUITINGFB';
      else if (a === g.INSTAGRAM) return 'INSTAGRAM';
      else if (a === g.BULLETIN) return 'BULLETIN';
      else return 'TEST';
    }
    f.DGWAuth = g;
    f.fromStringToDGWAuth = a;
    f.fromDGWAuthToString = c;
  },
  66,
);
__d(
  'DgwClientFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1755537');
    c = b('FalcoLoggerInternal').create('dgw_client', a);
    e.exports = c;
  },
  null,
);
__d(
  'DGWLoggingContext',
  ['$InternalEnum', 'DgwClientFalcoEvent', 'ODS', 'Random'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = 'dgw_client';
    var h = b('$InternalEnum')({
      STREAM_GROUP_COMPONENT: 'WebStreamGroup',
      GROUPED_STREAM_COMPONENT: 'GroupedWebStream',
      WEBSOCKET_TRANSPORT_COMPONENT: 'WebSocketTransport',
      ACK_MANAGER_COMPONENT: 'WebStreamAckManager',
      CODEC_COMPONENT: 'WebCodec',
    });
    function i(a) {
      switch (a) {
        case h.GROUPED_STREAM_COMPONENT:
        case h.ACK_MANAGER_COMPONENT:
          return !0;
        default:
          return !1;
      }
    }
    e = (function () {
      function a(a, b, c, d, e, f, g) {
        f === void 0 && (f = !1),
          g === void 0 && (g = !1),
          (this.$5 = '' + a),
          (this.$1 = b),
          (this.$4 = c),
          (this.$3 = d),
          (this.$6 = e),
          (this.$2 = f),
          (this.$7 = g);
      }
      var b = a.prototype;
      b.bumpODSKey = function (a, b, c) {
        c === void 0 && (c = 1);
        if (!d('Random').coinflip(c)) return;
        a = a + '.' + b;
        d('ODS').bumpEntityKey(3589, 'dgw_web_client', a, c);
      };
      b.logEvent = function (a, b, c, d) {
        d === void 0 && (d = !1), this.$2 || this.$8(a, b, null, c, d);
      };
      b.$8 = function (a, b, d, e, f) {
        var g = this;
        f === void 0 && (f = !1);
        if (f && !this.$7) return;
        ((i(a) && this.$1 != null) || (!i(a) && this.$6 != null)) &&
          c('DgwClientFalcoEvent').log(function () {
            return {
              event: b,
              logging_id: g.$1,
              dgw_version: g.$5,
              error: d,
              uuid: g.$3,
              dgw_component: a,
              extra_info: e,
              destination_tier: g.$4,
              sg_transport_id: g.$6,
            };
          });
      };
      b.logError = function (a, b, c, d, e) {
        e === void 0 && (e = !1), this.$2 || this.$8(a, b, c, d, e);
      };
      b.logWarn = function (a, b, c, d, e) {
        e === void 0 && (e = !1), this.$2 || this.$8(a, b, c, d, e);
      };
      return a;
    })();
    g.DGW_MODULE = a;
    g.DGWLoggingComponent = h;
    g.DGWLoggingContext = e;
  },
  98,
);
__d(
  'DGWCppBridge',
  [],
  function (l, m, n, o, p, q) {
    var r = (function () {
      var l =
        typeof document !== 'undefined' && document.currentScript
          ? document.currentScript.src
          : void 0;
      return function (m) {
        m = m || {};
        var m = typeof m !== 'undefined' ? m : {},
          n = (function () {
            function m() {}
            function n(l, m) {
              return function () {
                l.apply(m, arguments);
              };
            }
            function l(m) {
              if (!(this instanceof l))
                throw new TypeError('Promises must be constructed via new');
              if (typeof m !== 'function')
                throw new TypeError('not a function');
              this._state = 0;
              this._handled = !1;
              this._value = void 0;
              this._deferreds = [];
              t(m, this);
            }
            function o(m, n) {
              while (m._state === 3) m = m._value;
              if (m._state === 0) {
                m._deferreds.push(n);
                return;
              }
              m._handled = !0;
              l._immediateFn(function () {
                var l = m._state === 1 ? n.onFulfilled : n.onRejected;
                if (l === null) {
                  (m._state === 1 ? p : q)(n.promise, m._value);
                  return;
                }
                var o;
                try {
                  o = l(m._value);
                } catch (l) {
                  q(n.promise, l);
                  return;
                }
                p(n.promise, o);
              });
            }
            function p(m, o) {
              try {
                if (o === m)
                  throw new TypeError(
                    'A promise cannot be resolved with itself.',
                  );
                if (o && (typeof o === 'object' || typeof o === 'function')) {
                  var p = o.then;
                  if (o instanceof l) {
                    m._state = 3;
                    m._value = o;
                    r(m);
                    return;
                  } else if (typeof p === 'function') {
                    t(n(p, o), m);
                    return;
                  }
                }
                m._state = 1;
                m._value = o;
                r(m);
              } catch (l) {
                q(m, l);
              }
            }
            function q(l, m) {
              (l._state = 2), (l._value = m), r(l);
            }
            function r(m) {
              m._state === 2 &&
                m._deferreds.length === 0 &&
                l._immediateFn(function () {
                  m._handled || l._unhandledRejectionFn(m._value);
                });
              for (var n = 0, p = m._deferreds.length; n < p; n++)
                o(m, m._deferreds[n]);
              m._deferreds = null;
            }
            function s(l, m, n) {
              (this.onFulfilled = typeof l === 'function' ? l : null),
                (this.onRejected = typeof m === 'function' ? m : null),
                (this.promise = n);
            }
            function t(l, m) {
              var n = !1;
              try {
                l(
                  function (l) {
                    if (n) return;
                    n = !0;
                    p(m, l);
                  },
                  function (l) {
                    if (n) return;
                    n = !0;
                    q(m, l);
                  },
                );
              } catch (l) {
                if (n) return;
                n = !0;
                q(m, l);
              }
            }
            l.prototype['catch'] = function (l) {
              return this.then(null, l);
            };
            l.prototype.then = function (l, n) {
              var p = new this.constructor(m);
              o(this, new s(l, n, p));
              return p;
            };
            l.all = function (m) {
              return new l(function (l, n) {
                if (!Array.isArray(m))
                  return n(new TypeError('Promise.all accepts an array'));
                var o = Array.prototype.slice.call(m);
                if (o.length === 0) return l([]);
                var p = o.length;
                function q(m, r) {
                  try {
                    if (
                      r &&
                      (typeof r === 'object' || typeof r === 'function')
                    ) {
                      var s = r.then;
                      if (typeof s === 'function') {
                        s.call(
                          r,
                          function (l) {
                            q(m, l);
                          },
                          n,
                        );
                        return;
                      }
                    }
                    o[m] = r;
                    --p === 0 && l(o);
                  } catch (l) {
                    n(l);
                  }
                }
                for (var r = 0; r < o.length; r++) q(r, o[r]);
              });
            };
            l.resolve = function (m) {
              return m && typeof m === 'object' && m.constructor === l
                ? m
                : new l(function (l) {
                    l(m);
                  });
            };
            l.reject = function (m) {
              return new l(function (l, n) {
                n(m);
              });
            };
            l.race = function (m) {
              return new l(function (n, o) {
                if (!Array.isArray(m))
                  return o(new TypeError('Promise.race accepts an array'));
                for (var p = 0, q = m.length; p < q; p++)
                  l.resolve(m[p]).then(n, o);
              });
            };
            l._immediateFn =
              (typeof setImmediate === 'function' &&
                function (l) {
                  setImmediate(l);
                }) ||
              function (l) {
                setTimeout(l, 0);
              };
            l._unhandledRejectionFn = function (l) {
              typeof console !== 'undefined' && console;
            };
            return l;
          })(),
          o,
          s;
        m.ready = new n(function (l, m) {
          (o = l), (s = m);
        });
        var t = {},
          u;
        for (u in m)
          Object.prototype.hasOwnProperty.call(m, u) && (t[u] = m[u]);
        var v = [];
        (function (l, m) {
          throw m;
        });
        var w = !0,
          x = !1,
          y = '';
        function z(l) {
          return m.locateFile ? m.locateFile(l, y) : y + l;
        }
        var A;
        (w || x) &&
          (x
            ? (y = self.location.href)
            : typeof document !== 'undefined' &&
              document.currentScript &&
              (y = document.currentScript.src),
          l && (y = l),
          y.indexOf('blob:') !== 0
            ? (y = y.substr(0, y.lastIndexOf('/') + 1))
            : (y = ''),
          (function (l) {
            try {
              var m = new XMLHttpRequest();
              m.open('GET', l, !1);
              m.send(null);
              return m.responseText;
            } catch (n) {
              m = ga(l);
              if (m) return fa(m);
              throw n;
            }
          },
          x &&
            (A = function (l) {
              try {
                var m = new XMLHttpRequest();
                m.open('GET', l, !1);
                m.responseType = 'arraybuffer';
                m.send(null);
                return new Uint8Array(m.response);
              } catch (n) {
                m = ga(l);
                if (m) return m;
                throw n;
              }
            }),
          function (l, m, n) {
            var o = new XMLHttpRequest();
            o.open('GET', l, !0);
            o.responseType = 'arraybuffer';
            o.onload = function () {
              if (o.status == 200 || (o.status == 0 && o.response)) {
                m(o.response);
                return;
              }
              var p = ga(l);
              if (p) {
                m(p.buffer);
                return;
              }
              n();
            };
            o.onerror = n;
            o.send(null);
          }),
          function (l) {
            document.title = l;
          });
        m.print || emptyFunction.bind(console);
        var B = m.printErr || emptyFunction.bind(console);
        for (u in t)
          Object.prototype.hasOwnProperty.call(t, u) && (m[u] = t[u]);
        t = null;
        m.arguments && (v = m.arguments);
        m.thisProgram && m.thisProgram;
        m.quit && m.quit;
        var C;
        m.wasmBinary && (C = m.wasmBinary);
        m.noExitRuntime || !0;
        var D = {
          Memory: function (l) {
            this.buffer = new ArrayBuffer(l.initial * 65536);
          },
          Module: function (l) {},
          Instance: function (l, m) {
            this.exports = (function (l) {
              function m(l) {
                l.set = function (l, m) {
                  this[l] = m;
                };
                l.get = function (l) {
                  return this[l];
                };
                return l;
              }
              var n,
                o = new Uint8Array(123);
              for (var p = 25; p >= 0; --p)
                (o[48 + p] = 52 + p), (o[65 + p] = p), (o[97 + p] = 26 + p);
              o[43] = 62;
              o[47] = 63;
              function q(m, n, p) {
                var q,
                  r,
                  l = 0,
                  s = n,
                  t = p.length;
                n = n + ((t * 3) >> 2) - (p[t - 2] == '=') - (p[t - 1] == '=');
                for (; l < t; l += 4)
                  (q = o[p.charCodeAt(l + 1)]),
                    (r = o[p.charCodeAt(l + 2)]),
                    (m[s++] = (o[p.charCodeAt(l)] << 2) | (q >> 4)),
                    s < n && (m[s++] = (q << 4) | (r >> 2)),
                    s < n && (m[s++] = (r << 6) | o[p.charCodeAt(l + 3)]);
              }
              function r(l) {
                q(
                  n,
                  1024,
                  'U3Q5dHlwZV9pbmZvAAAAAOAEAAAABAAATjEwX19jeHhhYml2MTE2X19zaGltX3R5cGVfaW5mb0UAAAAACAUAABgEAAAQBAAATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAAAACAUAAEgEAAA8BAAATjEwX19jeHhhYml2MTE3X19wYmFzZV90eXBlX2luZm9FAAAACAUAAHgEAAA8BAAATjEwX19jeHhhYml2MTE5X19wb2ludGVyX3R5cGVfaW5mb0UACAUAAKgEAACcBAAAAAAAAGwEAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAAAAABQBQAAAQAAAAkAAAADAAAABAAAAAUAAAAKAAAACwAAAAwAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAACAUAACgFAABsBA==',
                ),
                  q(n, 1372, 'gAkQ');
              }
              function s(l) {
                var o = l.a,
                  p = o.buffer;
                o.grow = xa;
                var q = new Int8Array(p),
                  s = new Int16Array(p),
                  t = new Int32Array(p),
                  u = new Uint8Array(p),
                  v = new Uint16Array(p),
                  w = new Uint32Array(p);
                new Float32Array(p);
                new Float64Array(p);
                var x = Math.imul;
                Math.fround;
                Math.abs;
                var y = Math.clz32;
                Math.min;
                Math.max;
                Math.floor;
                Math.ceil;
                Math.trunc;
                Math.sqrt;
                l.abort;
                NaN;
                Infinity;
                var z = l.b,
                  A = 1051008,
                  B;
                function C(o, p, l, r, m, n) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  r = r | 0;
                  m = m | 0;
                  n = n | 0;
                  var y = 0,
                    z = 0,
                    B;
                  y = (A - 80) | 0;
                  A = y;
                  t[(y + 72) >> 2] = o;
                  t[(y + 68) >> 2] = p;
                  t[(y + 64) >> 2] = l;
                  t[(y + 60) >> 2] = r;
                  t[(y + 56) >> 2] = m;
                  t[(y + 52) >> 2] = n;
                  a: {
                    if (
                      t[(y + 52) >> 2]
                        ? !t[(y + 56) >> 2] |
                          (!t[(y + 72) >> 2] |
                            !t[(y + 68) >> 2] |
                            (!t[(y + 64) >> 2] | !t[(y + 60) >> 2]))
                        : 1
                    ) {
                      t[(y + 76) >> 2] = 5;
                      break a;
                    }
                    t[t[(y + 64) >> 2] >> 2] = 0;
                    t[t[(y + 60) >> 2] >> 2] = 0;
                    p = t[(y + 68) >> 2];
                    l = t[(y + 56) >> 2];
                    r = t[(y + 52) >> 2];
                    o = (A + -64) | 0;
                    A = o;
                    t[(o + 56) >> 2] = t[(y + 72) >> 2];
                    t[(o + 52) >> 2] = p;
                    t[(o + 48) >> 2] = l;
                    t[(o + 44) >> 2] = r;
                    t[(o + 40) >> 2] = 0;
                    t[(o + 36) >> 2] = t[(o + 56) >> 2];
                    b: {
                      c: {
                        d: {
                          while (1) {
                            if (!t[(o + 52) >> 2]) break c;
                            t[(o + 32) >> 2] = t[(o + 36) >> 2];
                            q[(o + 31) | 0] = u[t[(o + 36) >> 2]];
                            t[(o + 52) >> 2] = t[(o + 52) >> 2] - 1;
                            t[(o + 36) >> 2] = t[(o + 36) >> 2] + 1;
                            if (
                              u[(o + 31) | 0] != 10
                                ? (u[(o + 31) | 0] == 2) |
                                  (u[(o + 31) | 0] == 4) |
                                  (u[(o + 31) | 0] == 9)
                                : 1
                            ) {
                              t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                              continue;
                            }
                            t[(o + 24) >> 2] = 1;
                            if (V(u[(o + 31) | 0]) & 1) {
                              (z = o),
                                (B = X(u[(o + 31) | 0]) & 1),
                                (q[(z + 23) | 0] = B);
                              t[(o + 16) >> 2] = q[(o + 23) | 0] & 1 ? 1 : 2;
                              if (w[(o + 52) >> 2] < w[(o + 16) >> 2]) {
                                t[t[(o + 48) >> 2] >> 2] = t[(o + 32) >> 2];
                                t[t[(o + 44) >> 2] >> 2] =
                                  t[(o + 52) >> 2] + t[(o + 24) >> 2];
                                break b;
                              }
                              t[(o + 52) >> 2] =
                                t[(o + 52) >> 2] - t[(o + 16) >> 2];
                              t[(o + 24) >> 2] =
                                t[(o + 16) >> 2] + t[(o + 24) >> 2];
                              t[(o + 36) >> 2] =
                                t[(o + 16) >> 2] + t[(o + 36) >> 2];
                              if (
                                !(u[(o + 31) | 0] != 14
                                  ? u[(o + 31) | 0] != 8
                                  : 0)
                              ) {
                                t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                                continue;
                              }
                            }
                            if (w[(o + 52) >> 2] < 3) break d;
                            t[(o + 12) >> 2] = 0;
                            p = t[(o + 36) >> 2];
                            l = u[p | 0] | (u[(p + 1) | 0] << 8);
                            q[(o + 12) | 0] = l;
                            q[(o + 13) | 0] = l >>> 8;
                            q[(o + 14) | 0] = u[(p + 2) | 0];
                            t[(o + 52) >> 2] = t[(o + 52) >> 2] - 3;
                            t[(o + 24) >> 2] = t[(o + 24) >> 2] + 3;
                            t[(o + 36) >> 2] = t[(o + 36) >> 2] + 3;
                            if (w[(o + 12) >> 2] <= w[(o + 52) >> 2]) {
                              t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                              t[(o + 36) >> 2] =
                                t[(o + 12) >> 2] + t[(o + 36) >> 2];
                              t[(o + 52) >> 2] =
                                t[(o + 52) >> 2] - t[(o + 12) >> 2];
                              continue;
                            }
                            break;
                          }
                          t[t[(o + 48) >> 2] >> 2] = t[(o + 32) >> 2];
                          t[t[(o + 44) >> 2] >> 2] =
                            t[(o + 52) >> 2] + t[(o + 24) >> 2];
                          break b;
                        }
                        t[t[(o + 48) >> 2] >> 2] = t[(o + 32) >> 2];
                        t[t[(o + 44) >> 2] >> 2] =
                          t[(o + 52) >> 2] + t[(o + 24) >> 2];
                        break b;
                      }
                      t[t[(o + 44) >> 2] >> 2] = t[(o + 52) >> 2];
                    }
                    t[(o + 60) >> 2] = t[(o + 40) >> 2];
                    A = (o - -64) | 0;
                    t[(y + 48) >> 2] = t[(o + 60) >> 2];
                    if (!t[(y + 48) >> 2]) {
                      t[(y + 76) >> 2] = 0;
                      break a;
                    }
                    (z = y),
                      (B = D(x(t[(y + 48) >> 2], 20))),
                      (t[(z + 44) >> 2] = B);
                    if (!t[(y + 44) >> 2]) {
                      t[(y + 76) >> 2] = 3;
                      break a;
                    }
                    t[(y + 40) >> 2] = t[(y + 44) >> 2];
                    t[(y + 36) >> 2] = t[(y + 72) >> 2];
                    t[(y + 32) >> 2] =
                      t[(y + 68) >> 2] - t[t[(y + 52) >> 2] >> 2];
                    t[(y + 28) >> 2] = 0;
                    while (1) {
                      if (w[(y + 28) >> 2] < w[(y + 48) >> 2]) {
                        if (w[(y + 32) >> 2] < 1) {
                          O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                          t[(y + 76) >> 2] = 1;
                          break a;
                        }
                        q[(y + 27) | 0] = u[t[(y + 36) >> 2]];
                        t[(y + 36) >> 2] = t[(y + 36) >> 2] + 1;
                        t[(y + 32) >> 2] = t[(y + 32) >> 2] - 1;
                        e: {
                          if (
                            !u[(y + 27) | 0] |
                            (u[(y + 27) | 0] == 1) |
                            ((u[(y + 27) | 0] == 2) | (u[(y + 27) | 0] == 3)) |
                            ((u[(y + 27) | 0] == 4) |
                              (u[(y + 27) | 0] == 9) |
                              (u[(y + 27) | 0] == 10))
                          )
                            break e;
                          if (V(u[(y + 27) | 0]) & 1) break e;
                          O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                          t[(y + 76) >> 2] = 6;
                          break a;
                        }
                        o = t[(y + 40) >> 2];
                        t[o >> 2] = (u[(y + 27) | 0] & 15) | (t[o >> 2] & -16);
                        f: {
                          if (
                            u[(y + 27) | 0] != 10
                              ? (u[(y + 27) | 0] == 2) |
                                (u[(y + 27) | 0] == 4) |
                                (u[(y + 27) | 0] == 9)
                              : 1
                          ) {
                            o = t[(y + 40) >> 2];
                            t[o >> 2] = t[o >> 2] & -268435441;
                            t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                            break f;
                          }
                          if (V(u[(y + 27) | 0]) & 1) {
                            o = (A - 48) | 0;
                            A = o;
                            t[(o + 40) >> 2] = t[(y + 40) >> 2];
                            t[(o + 36) >> 2] = y + 36;
                            t[(o + 32) >> 2] = y + 32;
                            g: {
                              if (!(V(t[t[(o + 40) >> 2] >> 2] & 15) & 1)) {
                                t[(o + 44) >> 2] = 1;
                                break g;
                              }
                              (z = o),
                                (B = X(t[t[(o + 40) >> 2] >> 2] & 15) & 1),
                                (q[(z + 31) | 0] = B);
                              t[(o + 24) >> 2] = q[(o + 31) | 0] & 1 ? 1 : 2;
                              if (w[t[(o + 32) >> 2] >> 2] < w[(o + 24) >> 2]) {
                                t[(o + 44) >> 2] = 1;
                                break g;
                              }
                              ba(
                                (t[(o + 40) >> 2] + 4) | 0,
                                t[t[(o + 36) >> 2] >> 2],
                                t[(o + 24) >> 2],
                              );
                              p = t[(o + 36) >> 2];
                              t[p >> 2] = t[(o + 24) >> 2] + t[p >> 2];
                              p = t[(o + 32) >> 2];
                              t[p >> 2] = t[p >> 2] - t[(o + 24) >> 2];
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 8) {
                                p = t[(o + 40) >> 2];
                                t[p >> 2] = t[p >> 2] & -268435441;
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 14) {
                                p = t[(o + 40) >> 2];
                                t[p >> 2] = t[p >> 2] & -268435441;
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if (w[t[(o + 32) >> 2] >> 2] < 3) {
                                t[(o + 44) >> 2] = 11;
                                break g;
                              }
                              t[(o + 20) >> 2] = 0;
                              p = t[t[(o + 36) >> 2] >> 2];
                              l = u[p | 0] | (u[(p + 1) | 0] << 8);
                              q[(o + 20) | 0] = l;
                              q[(o + 21) | 0] = l >>> 8;
                              q[(o + 22) | 0] = u[(p + 2) | 0];
                              p = t[(o + 36) >> 2];
                              t[p >> 2] = t[p >> 2] + 3;
                              p = t[(o + 32) >> 2];
                              t[p >> 2] = t[p >> 2] - 3;
                              p = t[(o + 40) >> 2];
                              t[p >> 2] =
                                (t[p >> 2] & -268435441) |
                                ((t[(o + 20) >> 2] & 16777215) << 4);
                              if (w[t[(o + 32) >> 2] >> 2] < w[(o + 20) >> 2]) {
                                t[(o + 44) >> 2] = 11;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 15) {
                                t[(t[(o + 40) >> 2] + 12) >> 2] =
                                  t[(o + 20) >> 2];
                                p = D(t[(o + 20) >> 2]);
                                t[(t[(o + 40) >> 2] + 8) >> 2] = p;
                                if (!t[(t[(o + 40) >> 2] + 8) >> 2]) {
                                  t[(o + 44) >> 2] = 3;
                                  break g;
                                }
                                ba(
                                  t[(t[(o + 40) >> 2] + 8) >> 2],
                                  t[t[(o + 36) >> 2] >> 2],
                                  t[(o + 20) >> 2],
                                );
                                p = t[(o + 36) >> 2];
                                t[p >> 2] = t[(o + 20) >> 2] + t[p >> 2];
                                p = t[(o + 32) >> 2];
                                t[p >> 2] = t[p >> 2] - t[(o + 20) >> 2];
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 5) {
                                t[(t[(o + 40) >> 2] + 12) >> 2] =
                                  t[(o + 20) >> 2];
                                p = D(t[(o + 20) >> 2]);
                                t[(t[(o + 40) >> 2] + 8) >> 2] = p;
                                if (!t[(t[(o + 40) >> 2] + 8) >> 2]) {
                                  t[(o + 44) >> 2] = 3;
                                  break g;
                                }
                                ba(
                                  t[(t[(o + 40) >> 2] + 8) >> 2],
                                  t[t[(o + 36) >> 2] >> 2],
                                  t[(o + 20) >> 2],
                                );
                                p = t[(o + 36) >> 2];
                                t[p >> 2] = t[(o + 20) >> 2] + t[p >> 2];
                                p = t[(o + 32) >> 2];
                                t[p >> 2] = t[p >> 2] - t[(o + 20) >> 2];
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              h: {
                                if (
                                  !((t[t[(o + 40) >> 2] >> 2] & 15) != 6
                                    ? (t[t[(o + 40) >> 2] >> 2] & 15) != 7
                                    : 0)
                                ) {
                                  (z = o),
                                    (B = Q(
                                      t[(o + 36) >> 2],
                                      t[(o + 32) >> 2],
                                      (o + 19) | 0,
                                      (o + 18) | 0,
                                    )),
                                    (t[(z + 12) >> 2] = B);
                                  if (t[(o + 12) >> 2]) {
                                    t[(o + 44) >> 2] = t[(o + 12) >> 2];
                                    break g;
                                  }
                                  break h;
                                }
                                if (
                                  !((t[t[(o + 40) >> 2] >> 2] & 15) != 13
                                    ? (t[t[(o + 40) >> 2] >> 2] & 15) != 12
                                    : 0)
                                ) {
                                  l = t[(o + 32) >> 2];
                                  p = (A - 32) | 0;
                                  t[(p + 24) >> 2] = t[(o + 36) >> 2];
                                  t[(p + 20) >> 2] = l;
                                  t[(p + 16) >> 2] = o + 19;
                                  t[(p + 12) >> 2] = o + 16;
                                  s[(p + 10) >> 1] = 0;
                                  i: {
                                    if (w[t[(p + 20) >> 2] >> 2] < 2) {
                                      t[(p + 28) >> 2] = 1;
                                      break i;
                                    }
                                    l = t[t[(p + 24) >> 2] >> 2];
                                    l = u[l | 0] | (u[(l + 1) | 0] << 8);
                                    q[(p + 10) | 0] = l;
                                    q[(p + 11) | 0] = l >>> 8;
                                    l = t[(p + 24) >> 2];
                                    t[l >> 2] = t[l >> 2] + 2;
                                    l = t[(p + 20) >> 2];
                                    t[l >> 2] = t[l >> 2] - 2;
                                    q[t[(p + 16) >> 2]] =
                                      (v[(p + 10) >> 1] & 32768) == 32768;
                                    s[t[(p + 12) >> 2] >> 1] =
                                      v[(p + 10) >> 1] & 32767;
                                    t[(p + 28) >> 2] = 0;
                                  }
                                  t[(o + 12) >> 2] = t[(p + 28) >> 2];
                                  if (t[(o + 12) >> 2]) {
                                    t[(o + 44) >> 2] = t[(o + 12) >> 2];
                                    break g;
                                  }
                                }
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 12) {
                                p = t[(o + 40) >> 2];
                                s[(p + 8) >> 1] =
                                  (s[(p + 8) >> 1] & 1) |
                                  (v[(o + 16) >> 1] << 1);
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 7) {
                                p = t[(o + 40) >> 2];
                                q[(p + 8) | 0] =
                                  (q[(p + 8) | 0] & 1) | (u[(o + 18) | 0] << 1);
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 13) {
                                l = t[(o + 32) >> 2];
                                r = t[(o + 20) >> 2];
                                m = (t[(o + 40) >> 2] + 12) | 0;
                                n = t[(o + 40) >> 2];
                                p = (A - 32) | 0;
                                A = p;
                                t[(p + 24) >> 2] = t[(o + 36) >> 2];
                                t[(p + 20) >> 2] = l;
                                t[(p + 16) >> 2] = r;
                                t[(p + 12) >> 2] = m;
                                t[(p + 8) >> 2] = n + 16;
                                j: {
                                  if (w[(p + 16) >> 2] < 2) {
                                    t[(p + 28) >> 2] = 9;
                                    break j;
                                  }
                                  t[t[(p + 8) >> 2] >> 2] =
                                    t[(p + 16) >> 2] - 2;
                                  if (
                                    w[t[(p + 20) >> 2] >> 2] <
                                    w[t[(p + 8) >> 2] >> 2]
                                  ) {
                                    t[(p + 28) >> 2] = 1;
                                    break j;
                                  }
                                  l = D(t[t[(p + 8) >> 2] >> 2]);
                                  t[t[(p + 12) >> 2] >> 2] = l;
                                  if (!t[t[(p + 12) >> 2] >> 2]) {
                                    t[(p + 28) >> 2] = 3;
                                    break j;
                                  }
                                  ba(
                                    t[t[(p + 12) >> 2] >> 2],
                                    t[t[(p + 24) >> 2] >> 2],
                                    t[t[(p + 8) >> 2] >> 2],
                                  );
                                  l = t[(p + 24) >> 2];
                                  t[l >> 2] =
                                    t[t[(p + 8) >> 2] >> 2] + t[l >> 2];
                                  l = t[(p + 20) >> 2];
                                  t[l >> 2] =
                                    t[l >> 2] - t[t[(p + 8) >> 2] >> 2];
                                  t[(p + 28) >> 2] = 0;
                                }
                                A = (p + 32) | 0;
                                t[(o + 8) >> 2] = t[(p + 28) >> 2];
                                if (t[(o + 8) >> 2]) {
                                  t[(o + 44) >> 2] = t[(o + 8) >> 2];
                                  break g;
                                }
                                p = t[(o + 40) >> 2];
                                s[(p + 8) >> 1] =
                                  (q[(o + 19) | 0] & 1) |
                                  (v[(p + 8) >> 1] & 65534);
                                p = t[(o + 40) >> 2];
                                s[(p + 8) >> 1] =
                                  (s[(p + 8) >> 1] & 1) |
                                  (v[(o + 16) >> 1] << 1);
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 6) {
                                (z = o),
                                  (B = M(
                                    t[(o + 36) >> 2],
                                    t[(o + 32) >> 2],
                                    t[(o + 20) >> 2],
                                    (t[(o + 40) >> 2] + 12) | 0,
                                    (t[(o + 40) >> 2] + 16) | 0,
                                  )),
                                  (t[(z + 4) >> 2] = B);
                                if (t[(o + 4) >> 2]) {
                                  t[(o + 44) >> 2] = t[(o + 4) >> 2];
                                  break g;
                                }
                                p = t[(o + 40) >> 2];
                                q[(p + 8) | 0] =
                                  (q[(o + 19) | 0] & 1) |
                                  (u[(p + 8) | 0] & 254);
                                p = t[(o + 40) >> 2];
                                q[(p + 8) | 0] =
                                  (q[(p + 8) | 0] & 1) | (u[(o + 18) | 0] << 1);
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              t[(o + 44) >> 2] = 1;
                            }
                            A = (o + 48) | 0;
                            t[(y + 20) >> 2] = t[(o + 44) >> 2];
                            if (!t[(y + 20) >> 2]) {
                              t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                              break f;
                            }
                            O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                            t[(y + 76) >> 2] = t[(y + 20) >> 2];
                            break a;
                          }
                          t[(y + 16) >> 2] = 0;
                          if (w[(y + 32) >> 2] < 3) {
                            O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                            t[(y + 76) >> 2] = 1;
                            break a;
                          }
                          o = t[(y + 36) >> 2];
                          p = u[o | 0] | (u[(o + 1) | 0] << 8);
                          q[(y + 16) | 0] = p;
                          q[(y + 17) | 0] = p >>> 8;
                          q[(y + 18) | 0] = u[(o + 2) | 0];
                          t[(y + 36) >> 2] = t[(y + 36) >> 2] + 3;
                          t[(y + 32) >> 2] = t[(y + 32) >> 2] - 3;
                          if (
                            !((t[(y + 16) >> 2] == 1) | (u[(y + 27) | 0] != 1))
                          ) {
                            O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                            t[(y + 76) >> 2] = 7;
                            break a;
                          }
                          o = t[(y + 40) >> 2];
                          t[o >> 2] =
                            (t[o >> 2] & -268435441) |
                            ((t[(y + 16) >> 2] & 16777215) << 4);
                          if (u[(y + 27) | 0] == 3) {
                            if (t[(y + 16) >> 2] != 1) {
                              O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                              t[(y + 76) >> 2] = 10;
                              break a;
                            }
                            q[(y + 15) | 0] = 0;
                            if (w[(y + 32) >> 2] < 1) {
                              J(t[(y + 44) >> 2]);
                              t[(y + 76) >> 2] = 1;
                              break a;
                            }
                            q[(y + 15) | 0] = u[t[(y + 36) >> 2]];
                            t[(y + 36) >> 2] = t[(y + 36) >> 2] + 1;
                            t[(y + 32) >> 2] = t[(y + 32) >> 2] - 1;
                            k: {
                              if (u[(y + 15) | 0] <= 4) {
                                q[(t[(y + 40) >> 2] + 4) | 0] = u[(y + 15) | 0];
                                break k;
                              }
                              q[(t[(y + 40) >> 2] + 4) | 0] = 4;
                            }
                            t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                            break f;
                          }
                          (z = y),
                            (B = Q(
                              (y + 36) | 0,
                              (y + 32) | 0,
                              (y + 14) | 0,
                              (y + 13) | 0,
                            )),
                            (t[(z + 8) >> 2] = B);
                          if (t[(y + 8) >> 2]) {
                            O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                            t[(y + 76) >> 2] = t[(y + 8) >> 2];
                            break a;
                          }
                          if (u[(y + 27) | 0] == 1) {
                            o = t[(y + 40) >> 2];
                            q[(o + 4) | 0] =
                              (q[(o + 4) | 0] & 1) | (u[(y + 13) | 0] << 1);
                            t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                            break f;
                          }
                          if (!u[(y + 27) | 0]) {
                            (z = y),
                              (B = M(
                                (y + 36) | 0,
                                (y + 32) | 0,
                                t[(y + 16) >> 2],
                                (t[(y + 40) >> 2] + 8) | 0,
                                (t[(y + 40) >> 2] + 12) | 0,
                              )),
                              (t[(z + 4) >> 2] = B);
                            if (t[(y + 4) >> 2]) {
                              O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                              t[(y + 76) >> 2] = t[(y + 4) >> 2];
                              break a;
                            }
                            o = t[(y + 40) >> 2];
                            q[(o + 4) | 0] =
                              (q[(y + 14) | 0] & 1) | (u[(o + 4) | 0] & 254);
                            o = t[(y + 40) >> 2];
                            q[(o + 4) | 0] =
                              (q[(o + 4) | 0] & 1) | (u[(y + 13) | 0] << 1);
                            t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                          }
                        }
                        t[(y + 28) >> 2] = t[(y + 28) >> 2] + 1;
                        continue;
                      }
                      break;
                    }
                    if (t[(y + 32) >> 2]) {
                      O(t[(y + 44) >> 2], t[(y + 48) >> 2]);
                      t[(y + 76) >> 2] = 1;
                      break a;
                    }
                    t[t[(y + 64) >> 2] >> 2] = t[(y + 44) >> 2];
                    t[t[(y + 60) >> 2] >> 2] = t[(y + 48) >> 2];
                    t[(y + 76) >> 2] = 0;
                  }
                  A = (y + 80) | 0;
                  return t[(y + 76) >> 2];
                }
                function D(o) {
                  var q = 0,
                    l = 0,
                    r = 0,
                    m = 0,
                    n = 0,
                    s = 0,
                    u = 0,
                    v,
                    w = 0,
                    x,
                    p;
                  w = 8;
                  a: {
                    b: {
                      if (o >>> 0 > 4294967239) break b;
                      while (1) {
                        w = w >>> 0 > 8 ? w : 8;
                        l = t[603];
                        n = l;
                        m = t[602];
                        u = m;
                        o = o >>> 0 > 8 ? (o + 3) & -4 : 8;
                        c: {
                          if (o >>> 0 <= 127) {
                            s = (((o >>> 3) | 0) - 1) | 0;
                            break c;
                          }
                          r = y(o);
                          s =
                            (((((o >>> (29 - r)) ^ 4) - (r << 2)) | 0) + 110) |
                            0;
                          if (o >>> 0 <= 4095) break c;
                          r =
                            (((((o >>> (30 - r)) ^ 2) - (r << 1)) | 0) + 71) |
                            0;
                          s = r >>> 0 < 63 ? r : 63;
                        }
                        q = s;
                        r = q & 31;
                        (q & 63) >>> 0 >= 32
                          ? ((q = 0), (l = (l >>> r) | 0))
                          : ((q = (l >>> r) | 0),
                            (l =
                              ((((1 << r) - 1) & l) << (32 - r)) | (u >>> r)));
                        r = q;
                        if (l | q) {
                          while (1) {
                            n = l;
                            q = r;
                            d: {
                              if (q | l) {
                                m = (q - 1) | 0;
                                v = (m + 1) | 0;
                                u = m;
                                m = (l - 1) | 0;
                                u = (m | 0) != -1 ? v : u;
                                m = (y(l ^ m) + 32) | 0;
                                l = y(q ^ u);
                                l = (l | 0) == 32 ? m : l;
                                q = (63 - l) | 0;
                                (0 - (l >>> 0 > 63)) | 0;
                                break d;
                              }
                              q = 64;
                            }
                            m = q;
                            q = m;
                            l = q & 31;
                            (q & 63) >>> 0 >= 32
                              ? ((q = 0), (u = (r >>> l) | 0))
                              : ((q = (r >>> l) | 0),
                                (u =
                                  ((((1 << l) - 1) & r) << (32 - l)) |
                                  (n >>> l)));
                            r = q;
                            s = (m + s) | 0;
                            n = s << 4;
                            q = t[(n + 1384) >> 2];
                            m = (n + 1376) | 0;
                            e: {
                              if ((q | 0) != (m | 0)) {
                                l = I(q, w, o);
                                if (l) break b;
                                l = t[(q + 4) >> 2];
                                t[(l + 8) >> 2] = t[(q + 8) >> 2];
                                t[(t[(q + 8) >> 2] + 4) >> 2] = l;
                                t[(q + 8) >> 2] = m;
                                l = (n + 1380) | 0;
                                t[(q + 4) >> 2] = t[l >> 2];
                                t[l >> 2] = q;
                                t[(t[(q + 4) >> 2] + 8) >> 2] = q;
                                s = (s + 1) | 0;
                                l = ((r & 1) << 31) | (u >>> 1);
                                r = (r >>> 1) | 0;
                                break e;
                              }
                              x = t[603];
                              q = s;
                              v = q & 63;
                              l = v;
                              n = l & 31;
                              l >>> 0 >= 32
                                ? ((l = 0), (m = (-1 >>> n) | 0))
                                : ((l = (-1 >>> n) | 0),
                                  (m =
                                    (((1 << n) - 1) << (32 - n)) | (-1 >>> n)));
                              m = m & -2;
                              n = v & 31;
                              v >>> 0 >= 32
                                ? ((l = m << n), (v = 0))
                                : ((l =
                                    (((1 << n) - 1) & (m >>> (32 - n))) |
                                    (l << n)),
                                  (v = m << n));
                              n = l;
                              m = (0 - q) & 63;
                              l = m;
                              q = l & 31;
                              l >>> 0 >= 32
                                ? ((l = -1 << q), (q = 0))
                                : ((l =
                                    (((1 << q) - 1) & (-1 >>> (32 - q))) |
                                    (-1 << q)),
                                  (q = -1 << q));
                              p = q & -2;
                              q = m & 31;
                              m >>> 0 >= 32
                                ? ((m = 0), (q = (l >>> q) | 0))
                                : ((m = (l >>> q) | 0),
                                  (q =
                                    ((((1 << q) - 1) & l) << (32 - q)) |
                                    (p >>> q)));
                              l = q | v;
                              B = n | m;
                              t[602] = t[602] & l;
                              t[603] = B & x;
                              l = u ^ 1;
                            }
                            if (l | r) continue;
                            break;
                          }
                          m = t[602];
                          n = t[603];
                        }
                        f: {
                          if (n | m) {
                            r = y(n);
                            r =
                              (63 - ((r | 0) == 32 ? (y(m) + 32) | 0 : r)) << 4;
                            q = (r + 1376) | 0;
                            r = t[(r + 1384) >> 2];
                            g: {
                              if (!n & (m >>> 0 < 1073741824)) break g;
                              s = 98;
                              if ((q | 0) == (r | 0)) break g;
                              while (1) {
                                l = I(r, w, o);
                                if (l) break b;
                                r = t[(r + 8) >> 2];
                                if (!s) break g;
                                s = (s - 1) | 0;
                                if ((q | 0) != (r | 0)) continue;
                                break;
                              }
                            }
                            if (G((o + 48) | 0)) break f;
                            if (!r | ((q | 0) == (r | 0))) break a;
                            while (1) {
                              l = I(r, w, o);
                              if (l) break b;
                              r = t[(r + 8) >> 2];
                              if ((q | 0) != (r | 0)) continue;
                              break;
                            }
                            break a;
                          }
                          if (!G((o + 48) | 0)) break a;
                        }
                        l = 0;
                        if (o >>> 0 > 4294967239) break b;
                        r = w;
                        q = 0;
                        while (1) {
                          s = q;
                          if (r) {
                            r = (r - 1) & r;
                            q = (q + 1) | 0;
                            continue;
                          }
                          break;
                        }
                        if (s >>> 0 <= 1) continue;
                        break;
                      }
                    }
                    return l;
                  }
                  return 0;
                }
                function E(o, p, l, r, m, n, x) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  r = r | 0;
                  m = m | 0;
                  n = n | 0;
                  x = x | 0;
                  var y = 0,
                    z = 0;
                  y = (A - 32) | 0;
                  A = y;
                  s[(y + 26) >> 1] = o;
                  t[(y + 20) >> 2] = p;
                  t[(y + 16) >> 2] = l;
                  q[(y + 15) | 0] = r;
                  s[(y + 12) >> 1] = m;
                  t[(y + 8) >> 2] = n;
                  t[(y + 4) >> 2] = x;
                  a: {
                    if (
                      !(!(q[(y + 15) | 0] & 1) | (v[(y + 12) >> 1] <= 32767))
                    ) {
                      t[(y + 28) >> 2] = 4;
                      break a;
                    }
                    p = t[(y + 20) >> 2];
                    l = t[(y + 16) >> 2];
                    r = t[(y + 8) >> 2];
                    m = t[(y + 4) >> 2];
                    n = q[(y + 15) | 0] & 1;
                    o = (A + -64) | 0;
                    A = o;
                    t[(o + 56) >> 2] = y + 26;
                    t[(o + 52) >> 2] = p;
                    t[(o + 48) >> 2] = l;
                    t[(o + 44) >> 2] = r;
                    t[(o + 40) >> 2] = m;
                    q[(o + 39) | 0] = 2;
                    q[(o + 38) | 0] = 13;
                    t[(o + 32) >> 2] = y + 12;
                    q[(o + 31) | 0] = n;
                    q[(o + 30) | 0] = 2;
                    b: {
                      c: {
                        if (
                          !(
                            !t[(o + 52) >> 2] |
                            (!t[(o + 44) >> 2] | !t[(o + 40) >> 2])
                          ) &&
                          w[(o + 48) >> 2] <= 16777215
                        )
                          break c;
                        t[(o + 60) >> 2] = 5;
                        break b;
                      }
                      t[(o + 24) >> 2] =
                        t[(o + 48) >> 2] +
                        ((u[(o + 39) | 0] + ((u[(o + 30) | 0] + 4) | 0)) | 0);
                      (z = o),
                        (x = D(t[(o + 24) >> 2])),
                        (t[(z + 20) >> 2] = x);
                      if (!t[(o + 20) >> 2]) {
                        t[(o + 60) >> 2] = 3;
                        break b;
                      }
                      t[(o + 16) >> 2] = t[(o + 20) >> 2];
                      q[t[(o + 16) >> 2]] = u[(o + 38) | 0];
                      t[(o + 16) >> 2] = t[(o + 16) >> 2] + 1;
                      ba(t[(o + 16) >> 2], t[(o + 56) >> 2], u[(o + 30) | 0]);
                      t[(o + 16) >> 2] = u[(o + 30) | 0] + t[(o + 16) >> 2];
                      t[(o + 12) >> 2] = u[(o + 39) | 0] + t[(o + 48) >> 2];
                      if (w[(o + 12) >> 2] < w[(o + 48) >> 2]) {
                        J(t[(o + 20) >> 2]);
                        t[(o + 60) >> 2] = 9;
                        break b;
                      }
                      p = t[(o + 16) >> 2];
                      l = u[(o + 12) | 0] | (u[(o + 13) | 0] << 8);
                      q[p | 0] = l;
                      q[(p + 1) | 0] = l >>> 8;
                      q[(p + 2) | 0] = u[(o + 14) | 0];
                      t[(o + 16) >> 2] = t[(o + 16) >> 2] + 3;
                      if (q[(o + 31) | 0] & 1)
                        d: {
                          if (u[(o + 38) | 0] == 6) {
                            p = t[(o + 32) >> 2];
                            q[p | 0] = u[p | 0] | 128;
                            break d;
                          }
                          e: {
                            if (u[(o + 38) | 0] == 13) {
                              p = t[(o + 32) >> 2];
                              s[p >> 1] = v[p >> 1] | 32768;
                              break e;
                            }
                            J(t[(o + 20) >> 2]);
                            t[(o + 60) >> 2] = 1;
                            break b;
                          }
                        }
                      ba(t[(o + 16) >> 2], t[(o + 32) >> 2], u[(o + 39) | 0]);
                      t[(o + 16) >> 2] = u[(o + 39) | 0] + t[(o + 16) >> 2];
                      ba(t[(o + 16) >> 2], t[(o + 52) >> 2], t[(o + 48) >> 2]);
                      t[t[(o + 44) >> 2] >> 2] = t[(o + 20) >> 2];
                      t[t[(o + 40) >> 2] >> 2] = t[(o + 24) >> 2];
                      t[(o + 60) >> 2] = 0;
                    }
                    A = (o - -64) | 0;
                    t[(y + 28) >> 2] = t[(o + 60) >> 2];
                  }
                  A = (y + 32) | 0;
                  return t[(y + 28) >> 2];
                }
                function F(o, p, l, r, m) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  r = r | 0;
                  m = m | 0;
                  var n = 0,
                    v = 0;
                  n = (A - 32) | 0;
                  A = n;
                  s[(n + 30) >> 1] = o;
                  t[(n + 24) >> 2] = p;
                  t[(n + 20) >> 2] = l;
                  t[(n + 16) >> 2] = r;
                  t[(n + 12) >> 2] = m;
                  p = t[(n + 24) >> 2];
                  l = t[(n + 20) >> 2];
                  r = t[(n + 16) >> 2];
                  m = t[(n + 12) >> 2];
                  o = (A - 48) | 0;
                  A = o;
                  t[(o + 40) >> 2] = n + 30;
                  t[(o + 36) >> 2] = p;
                  t[(o + 32) >> 2] = l;
                  t[(o + 28) >> 2] = r;
                  t[(o + 24) >> 2] = m;
                  q[(o + 23) | 0] = 2;
                  q[(o + 22) | 0] = 15;
                  a: {
                    if (!(t[(o + 24) >> 2] ? t[(o + 28) >> 2] : 0)) {
                      t[(o + 44) >> 2] = 5;
                      break a;
                    }
                    t[t[(o + 28) >> 2] >> 2] = 0;
                    t[t[(o + 24) >> 2] >> 2] = 0;
                    if (
                      !(w[(o + 32) >> 2] <= 16777215 ? t[(o + 36) >> 2] : 0)
                    ) {
                      t[(o + 44) >> 2] = 5;
                      break a;
                    }
                    t[(o + 16) >> 2] =
                      t[(o + 32) >> 2] + ((u[(o + 23) | 0] + 4) | 0);
                    (v = o), (r = D(t[(o + 16) >> 2])), (t[(v + 12) >> 2] = r);
                    if (!t[(o + 12) >> 2]) {
                      t[(o + 44) >> 2] = 3;
                      break a;
                    }
                    t[(o + 8) >> 2] = t[(o + 12) >> 2];
                    q[t[(o + 8) >> 2]] = u[(o + 22) | 0];
                    t[(o + 8) >> 2] = t[(o + 8) >> 2] + 1;
                    ba(t[(o + 8) >> 2], t[(o + 40) >> 2], u[(o + 23) | 0]);
                    t[(o + 8) >> 2] = u[(o + 23) | 0] + t[(o + 8) >> 2];
                    p = t[(o + 8) >> 2];
                    l = u[(o + 32) | 0] | (u[(o + 33) | 0] << 8);
                    q[p | 0] = l;
                    q[(p + 1) | 0] = l >>> 8;
                    q[(p + 2) | 0] = u[(o + 34) | 0];
                    t[(o + 8) >> 2] = t[(o + 8) >> 2] + 3;
                    ba(t[(o + 8) >> 2], t[(o + 36) >> 2], t[(o + 32) >> 2]);
                    t[(o + 8) >> 2] = t[(o + 32) >> 2] + t[(o + 8) >> 2];
                    t[t[(o + 28) >> 2] >> 2] = t[(o + 12) >> 2];
                    t[t[(o + 24) >> 2] >> 2] = t[(o + 16) >> 2];
                    t[(o + 44) >> 2] = 0;
                  }
                  A = (o + 48) | 0;
                  A = (n + 32) | 0;
                  return t[(o + 44) >> 2];
                }
                function G(o) {
                  var p = 0,
                    l,
                    r = 0,
                    m = 0,
                    n,
                    s = 0;
                  r = t[343];
                  l = (o + 3) & -4;
                  p = (r + l) | 0;
                  a: {
                    b: {
                      if (p >>> 0 <= r >>> 0 ? l : 0) break b;
                      if (p >>> 0 > (wa() << 16) >>> 0 && !(z(p | 0) | 0))
                        break b;
                      t[343] = p;
                      break a;
                    }
                    t[604] = 48;
                    r = -1;
                  }
                  if ((r | 0) != -1) {
                    l = (o + r) | 0;
                    p = (l - 16) | 0;
                    t[(p + 12) >> 2] = 16;
                    t[p >> 2] = 16;
                    o = t[600];
                    o ? (s = t[(o + 8) >> 2]) : (s = 0);
                    c: {
                      d: {
                        if ((s | 0) == (r | 0)) {
                          m = (r - (t[(r - 4) >> 2] & -2)) | 0;
                          n = t[(m - 4) >> 2];
                          t[(o + 8) >> 2] = l;
                          o = (m - (n & -2)) | 0;
                          l = -16;
                          if (!(q[(((o + t[o >> 2]) | 0) - 4) | 0] & 1))
                            break d;
                          l = t[(o + 4) >> 2];
                          t[(l + 8) >> 2] = t[(o + 8) >> 2];
                          t[(t[(o + 8) >> 2] + 4) >> 2] = l;
                          p = (p - o) | 0;
                          t[o >> 2] = p;
                          break c;
                        }
                        t[(r + 12) >> 2] = 16;
                        t[r >> 2] = 16;
                        t[(r + 8) >> 2] = l;
                        t[(r + 4) >> 2] = o;
                        t[600] = r;
                        l = 16;
                      }
                      o = (r + l) | 0;
                      p = (p - o) | 0;
                      t[o >> 2] = p;
                    }
                    t[((((p & -4) + o) | 0) - 4) >> 2] = p | 1;
                    s = o;
                    m = (t[o >> 2] - 8) | 0;
                    e: {
                      if (m >>> 0 <= 127) {
                        p = (((m >>> 3) | 0) - 1) | 0;
                        break e;
                      }
                      n = y(m);
                      p = (((((m >>> (29 - n)) ^ 4) - (n << 2)) | 0) + 110) | 0;
                      if (m >>> 0 <= 4095) break e;
                      p = (((((m >>> (30 - n)) ^ 2) - (n << 1)) | 0) + 71) | 0;
                      p = p >>> 0 < 63 ? p : 63;
                    }
                    l = p << 4;
                    t[(s + 4) >> 2] = l + 1376;
                    l = (l + 1384) | 0;
                    t[(o + 8) >> 2] = t[l >> 2];
                    t[l >> 2] = o;
                    t[(t[(o + 8) >> 2] + 4) >> 2] = o;
                    l = t[603];
                    o = p & 31;
                    (p & 63) >>> 0 >= 32
                      ? ((p = 1 << o), (o = 0))
                      : ((p = ((1 << o) - 1) & (1 >>> (32 - o))), (o = 1 << o));
                    t[602] = o | t[602];
                    t[603] = p | l;
                  }
                  return (r | 0) != -1;
                }
                function la(o, p, l, r) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  r = r | 0;
                  var m = 0,
                    n = 0;
                  m = (A - 16) | 0;
                  A = m;
                  s[(m + 10) >> 1] = o;
                  s[(m + 8) >> 1] = p;
                  t[(m + 4) >> 2] = l;
                  t[m >> 2] = r;
                  a: {
                    if (v[(m + 8) >> 1] > 32767) {
                      t[(m + 12) >> 2] = 4;
                      break a;
                    }
                    p = t[(m + 4) >> 2];
                    l = t[m >> 2];
                    o = (A - 48) | 0;
                    A = o;
                    t[(o + 40) >> 2] = m + 10;
                    t[(o + 36) >> 2] = p;
                    t[(o + 32) >> 2] = l;
                    q[(o + 31) | 0] = 2;
                    q[(o + 30) | 0] = 12;
                    t[(o + 24) >> 2] = m + 8;
                    q[(o + 23) | 0] = 2;
                    b: {
                      if (!(t[(o + 32) >> 2] ? t[(o + 36) >> 2] : 0)) {
                        t[(o + 44) >> 2] = 5;
                        break b;
                      }
                      t[(o + 16) >> 2] =
                        u[(o + 31) | 0] + ((u[(o + 23) | 0] + 4) | 0);
                      (n = o),
                        (r = D(t[(o + 16) >> 2])),
                        (t[(n + 12) >> 2] = r);
                      if (!t[(o + 12) >> 2]) {
                        t[(o + 44) >> 2] = 3;
                        break b;
                      }
                      t[(o + 8) >> 2] = t[(o + 12) >> 2];
                      q[t[(o + 8) >> 2]] = u[(o + 30) | 0];
                      t[(o + 8) >> 2] = t[(o + 8) >> 2] + 1;
                      ba(t[(o + 8) >> 2], t[(o + 40) >> 2], u[(o + 23) | 0]);
                      t[(o + 8) >> 2] = u[(o + 23) | 0] + t[(o + 8) >> 2];
                      t[(o + 4) >> 2] = u[(o + 31) | 0];
                      p = t[(o + 8) >> 2];
                      l = u[(o + 4) | 0] | (u[(o + 5) | 0] << 8);
                      q[p | 0] = l;
                      q[(p + 1) | 0] = l >>> 8;
                      q[(p + 2) | 0] = u[(o + 6) | 0];
                      t[(o + 8) >> 2] = t[(o + 8) >> 2] + 3;
                      ba(t[(o + 8) >> 2], t[(o + 24) >> 2], u[(o + 31) | 0]);
                      t[t[(o + 32) >> 2] >> 2] = t[(o + 16) >> 2];
                      t[t[(o + 36) >> 2] >> 2] = t[(o + 12) >> 2];
                      t[(o + 44) >> 2] = 0;
                    }
                    A = (o + 48) | 0;
                    t[(m + 12) >> 2] = t[(o + 44) >> 2];
                  }
                  A = (m + 16) | 0;
                  return t[(m + 12) >> 2];
                }
                function H(o, p, l) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  var q = 0,
                    m = 0,
                    n = 0,
                    r = 0,
                    s = 0;
                  n = (A + -64) | 0;
                  A = n;
                  m = 1;
                  a: {
                    if (R(o, p, 0)) break a;
                    m = 0;
                    if (!p) break a;
                    q = (A + -64) | 0;
                    A = q;
                    m = t[p >> 2];
                    r = t[(m - 4) >> 2];
                    s = t[(m - 8) >> 2];
                    t[(q + 20) >> 2] = 0;
                    t[(q + 16) >> 2] = 1084;
                    t[(q + 12) >> 2] = p;
                    t[(q + 8) >> 2] = 1132;
                    m = 0;
                    ca((q + 24) | 0, 39);
                    p = (p + s) | 0;
                    b: {
                      if (R(r, 1132, 0)) {
                        t[(q + 56) >> 2] = 1;
                        ka[t[(t[r >> 2] + 20) >> 2]](
                          r,
                          (q + 8) | 0,
                          p,
                          p,
                          1,
                          0,
                        );
                        m = t[(q + 32) >> 2] == 1 ? p : 0;
                        break b;
                      }
                      ka[t[(t[r >> 2] + 24) >> 2]](r, (q + 8) | 0, p, 1, 0);
                      c: switch (t[(q + 44) >> 2]) {
                        case 0:
                          m =
                            t[(q + 48) >> 2] == 1
                              ? t[(q + 36) >> 2] == 1
                                ? t[(q + 40) >> 2] == 1
                                  ? t[(q + 28) >> 2]
                                  : 0
                                : 0
                              : 0;
                          break b;
                        case 1:
                          break c;
                        default:
                          break b;
                      }
                      if (
                        t[(q + 48) >> 2] |
                        (t[(q + 36) >> 2] != 1) |
                        (t[(q + 40) >> 2] != 1)
                          ? t[(q + 32) >> 2] != 1
                          : 0
                      )
                        break b;
                      m = t[(q + 24) >> 2];
                    }
                    A = (q - -64) | 0;
                    p = m;
                    m = 0;
                    if (!p) break a;
                    ca((n + 8) | 4, 52);
                    t[(n + 56) >> 2] = 1;
                    t[(n + 20) >> 2] = -1;
                    t[(n + 16) >> 2] = o;
                    t[(n + 8) >> 2] = p;
                    ka[t[(t[p >> 2] + 28) >> 2]](p, (n + 8) | 0, t[l >> 2], 1);
                    o = t[(n + 32) >> 2];
                    (o | 0) == 1 && (t[l >> 2] = t[(n + 24) >> 2]);
                    m = (o | 0) == 1;
                  }
                  o = m;
                  A = (n - -64) | 0;
                  return o | 0;
                }
                function I(o, p, l) {
                  var q = 0,
                    m,
                    n = 0,
                    r = 0;
                  q = (o + 4) | 0;
                  m = (((q + p) | 0) - 1) & (0 - p);
                  p = t[o >> 2];
                  if ((m + l) >>> 0 <= (((p + o) | 0) - 4) >>> 0) {
                    n = t[(o + 4) >> 2];
                    t[(n + 8) >> 2] = t[(o + 8) >> 2];
                    t[(t[(o + 8) >> 2] + 4) >> 2] = n;
                    (q | 0) != (m | 0) &&
                      ((m = (m - q) | 0),
                      (n = (o - (t[(o - 4) >> 2] & -2)) | 0),
                      (q = (m + t[n >> 2]) | 0),
                      (t[n >> 2] = q),
                      (t[(((n + (q & -4)) | 0) - 4) >> 2] = q),
                      (o = (o + m) | 0),
                      (p = (p - m) | 0),
                      (t[o >> 2] = p));
                    a: {
                      if ((l + 24) >>> 0 <= p >>> 0) {
                        q = (((o + l) | 0) + 8) | 0;
                        p = (((p - l) | 0) - 8) | 0;
                        t[q >> 2] = p;
                        t[(((q + (p & -4)) | 0) - 4) >> 2] = p | 1;
                        r = q;
                        n = (t[q >> 2] - 8) | 0;
                        b: {
                          if (n >>> 0 <= 127) {
                            m = (((n >>> 3) | 0) - 1) | 0;
                            break b;
                          }
                          p = y(n);
                          m =
                            (((((n >>> (29 - p)) ^ 4) - (p << 2)) | 0) + 110) |
                            0;
                          if (n >>> 0 <= 4095) break b;
                          p =
                            (((((n >>> (30 - p)) ^ 2) - (p << 1)) | 0) + 71) |
                            0;
                          m = p >>> 0 < 63 ? p : 63;
                        }
                        p = m;
                        m = p << 4;
                        t[(r + 4) >> 2] = m + 1376;
                        m = (m + 1384) | 0;
                        t[(q + 8) >> 2] = t[m >> 2];
                        t[m >> 2] = q;
                        t[(t[(q + 8) >> 2] + 4) >> 2] = q;
                        m = t[603];
                        q = p & 31;
                        (p & 63) >>> 0 >= 32
                          ? ((p = 1 << q), (r = 0))
                          : ((p = ((1 << q) - 1) & (1 >>> (32 - q))),
                            (r = 1 << q));
                        t[602] = r | t[602];
                        t[603] = p | m;
                        p = (l + 8) | 0;
                        t[o >> 2] = p;
                        t[((((p & -4) + o) | 0) - 4) >> 2] = p;
                        break a;
                      }
                      t[(((o + p) | 0) - 4) >> 2] = p;
                    }
                    o = (o + 4) | 0;
                  } else o = 0;
                  return o;
                }
                function J(o) {
                  var p = 0,
                    l,
                    q = 0,
                    m,
                    n = 0;
                  if (o) {
                    l = (o - 4) | 0;
                    m = t[l >> 2];
                    q = m;
                    p = l;
                    n = t[(o - 8) >> 2];
                    o = n & -2;
                    (o | 0) != (n | 0) &&
                      ((p = (l - o) | 0),
                      (q = t[(p + 4) >> 2]),
                      (t[(q + 8) >> 2] = t[(p + 8) >> 2]),
                      (t[(t[(p + 8) >> 2] + 4) >> 2] = q),
                      (q = (o + m) | 0));
                    o = (l + m) | 0;
                    l = t[o >> 2];
                    (l | 0) != t[(((o + l) | 0) - 4) >> 2] &&
                      ((m = t[(o + 4) >> 2]),
                      (t[(m + 8) >> 2] = t[(o + 8) >> 2]),
                      (t[(t[(o + 8) >> 2] + 4) >> 2] = m),
                      (q = (q + l) | 0));
                    t[p >> 2] = q;
                    t[((((q & -4) + p) | 0) - 4) >> 2] = q | 1;
                    n = p;
                    q = (t[p >> 2] - 8) | 0;
                    a: {
                      if (q >>> 0 <= 127) {
                        o = (((q >>> 3) | 0) - 1) | 0;
                        break a;
                      }
                      m = y(q);
                      o = (((((q >>> (29 - m)) ^ 4) - (m << 2)) | 0) + 110) | 0;
                      if (q >>> 0 <= 4095) break a;
                      o = (((((q >>> (30 - m)) ^ 2) - (m << 1)) | 0) + 71) | 0;
                      o = o >>> 0 < 63 ? o : 63;
                    }
                    l = o << 4;
                    t[(n + 4) >> 2] = l + 1376;
                    l = (l + 1384) | 0;
                    t[(p + 8) >> 2] = t[l >> 2];
                    t[l >> 2] = p;
                    t[(t[(p + 8) >> 2] + 4) >> 2] = p;
                    l = t[603];
                    p = o & 31;
                    (o & 63) >>> 0 >= 32
                      ? ((o = 1 << p), (p = 0))
                      : ((o = ((1 << p) - 1) & (1 >>> (32 - p))), (p = 1 << p));
                    t[602] = p | t[602];
                    t[603] = o | l;
                  }
                }
                function K(n, o, l) {
                  n = n | 0;
                  o = o | 0;
                  l = l | 0;
                  var p = 0,
                    m = 0;
                  p = (A - 48) | 0;
                  A = p;
                  t[(p + 40) >> 2] = n;
                  t[(p + 36) >> 2] = o;
                  t[(p + 32) >> 2] = l;
                  a: {
                    if (!(t[(p + 32) >> 2] ? t[(p + 36) >> 2] : 0)) {
                      t[(p + 44) >> 2] = 5;
                      break a;
                    }
                    if (w[(p + 40) >> 2] > 4) {
                      t[(p + 44) >> 2] = 8;
                      break a;
                    }
                    t[(p + 28) >> 2] = 5;
                    (m = p), (l = D(t[(p + 28) >> 2])), (t[(m + 24) >> 2] = l);
                    if (!t[(p + 24) >> 2]) {
                      t[(p + 44) >> 2] = 3;
                      break a;
                    }
                    t[(p + 20) >> 2] = t[(p + 24) >> 2];
                    q[(p + 19) | 0] = 3;
                    q[t[(p + 20) >> 2]] = u[(p + 19) | 0];
                    t[(p + 20) >> 2] = t[(p + 20) >> 2] + 1;
                    t[(p + 12) >> 2] = 1;
                    n = t[(p + 20) >> 2];
                    o = u[(p + 12) | 0] | (u[(p + 13) | 0] << 8);
                    q[n | 0] = o;
                    q[(n + 1) | 0] = o >>> 8;
                    q[(n + 2) | 0] = u[(p + 14) | 0];
                    t[(p + 20) >> 2] = t[(p + 20) >> 2] + 3;
                    q[(p + 11) | 0] = t[(p + 40) >> 2];
                    q[t[(p + 20) >> 2]] = u[(p + 11) | 0];
                    t[t[(p + 36) >> 2] >> 2] = t[(p + 24) >> 2];
                    t[t[(p + 32) >> 2] >> 2] = t[(p + 28) >> 2];
                    t[(p + 44) >> 2] = 0;
                  }
                  A = (p + 48) | 0;
                  return t[(p + 44) >> 2];
                }
                function L(n, o, l, p, m) {
                  n = n | 0;
                  o = o | 0;
                  l = l | 0;
                  p = p | 0;
                  m = m | 0;
                  if (R(n, t[(o + 8) >> 2], m)) {
                    da(o, l, p);
                    return;
                  }
                  a: {
                    if (R(n, t[o >> 2], m)) {
                      if (
                        !(t[(o + 20) >> 2] != (l | 0)
                          ? t[(o + 16) >> 2] != (l | 0)
                          : 0)
                      ) {
                        if ((p | 0) != 1) break a;
                        t[(o + 32) >> 2] = 1;
                        return;
                      }
                      t[(o + 32) >> 2] = p;
                      b: {
                        if (t[(o + 44) >> 2] == 4) break b;
                        s[(o + 52) >> 1] = 0;
                        n = t[(n + 8) >> 2];
                        ka[t[(t[n >> 2] + 20) >> 2]](n, o, l, l, 1, m);
                        if (u[(o + 53) | 0]) {
                          t[(o + 44) >> 2] = 3;
                          if (!u[(o + 52) | 0]) break b;
                          break a;
                        }
                        t[(o + 44) >> 2] = 4;
                      }
                      t[(o + 20) >> 2] = l;
                      t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                      if ((t[(o + 36) >> 2] != 1) | (t[(o + 24) >> 2] != 2))
                        break a;
                      q[(o + 54) | 0] = 1;
                      return;
                    }
                    n = t[(n + 8) >> 2];
                    ka[t[(t[n >> 2] + 24) >> 2]](n, o, l, p, m);
                  }
                }
                function M(o, p, l, q, m) {
                  var n = 0;
                  n = (A - 32) | 0;
                  A = n;
                  t[(n + 24) >> 2] = o;
                  t[(n + 20) >> 2] = p;
                  t[(n + 16) >> 2] = l;
                  t[(n + 12) >> 2] = q;
                  t[(n + 8) >> 2] = m;
                  a: {
                    if (w[(n + 16) >> 2] < 1) {
                      t[(n + 28) >> 2] = 9;
                      break a;
                    }
                    t[t[(n + 8) >> 2] >> 2] = t[(n + 16) >> 2] - 1;
                    if (w[t[(n + 20) >> 2] >> 2] < w[t[(n + 8) >> 2] >> 2]) {
                      t[(n + 28) >> 2] = 1;
                      break a;
                    }
                    o = D(t[t[(n + 8) >> 2] >> 2]);
                    t[t[(n + 12) >> 2] >> 2] = o;
                    if (!t[t[(n + 12) >> 2] >> 2]) {
                      t[(n + 28) >> 2] = 3;
                      break a;
                    }
                    ba(
                      t[t[(n + 12) >> 2] >> 2],
                      t[t[(n + 24) >> 2] >> 2],
                      t[t[(n + 8) >> 2] >> 2],
                    );
                    o = t[(n + 24) >> 2];
                    t[o >> 2] = t[t[(n + 8) >> 2] >> 2] + t[o >> 2];
                    o = t[(n + 20) >> 2];
                    t[o >> 2] = t[o >> 2] - t[t[(n + 8) >> 2] >> 2];
                    t[(n + 28) >> 2] = 0;
                  }
                  A = (n + 32) | 0;
                  return t[(n + 28) >> 2];
                }
                function N(n, o, l) {
                  n = n | 0;
                  o = o | 0;
                  l = l | 0;
                  var p = 0,
                    m = 0;
                  p = (A - 32) | 0;
                  A = p;
                  s[(p + 26) >> 1] = n;
                  t[(p + 20) >> 2] = o;
                  t[(p + 16) >> 2] = l;
                  t[t[(p + 16) >> 2] >> 2] = 3;
                  (m = p),
                    (l = D(t[t[(p + 16) >> 2] >> 2])),
                    (t[(m + 12) >> 2] = l);
                  a: {
                    if (!t[(p + 12) >> 2]) {
                      t[(p + 28) >> 2] = 3;
                      break a;
                    }
                    t[t[(p + 20) >> 2] >> 2] = t[(p + 12) >> 2];
                    q[(p + 11) | 0] = 14;
                    q[t[(p + 12) >> 2]] = u[(p + 11) | 0];
                    t[(p + 12) >> 2] = t[(p + 12) >> 2] + 1;
                    n = t[(p + 12) >> 2];
                    o = u[(p + 26) | 0] | (u[(p + 27) | 0] << 8);
                    q[n | 0] = o;
                    q[(n + 1) | 0] = o >>> 8;
                    t[(p + 28) >> 2] = 0;
                  }
                  A = (p + 32) | 0;
                  return t[(p + 28) >> 2];
                }
                function O(m, n) {
                  var l = 0;
                  l = (A - 16) | 0;
                  A = l;
                  t[(l + 12) >> 2] = m;
                  t[(l + 8) >> 2] = n;
                  t[(l + 4) >> 2] = 0;
                  while (1) {
                    if (w[(l + 4) >> 2] < w[(l + 8) >> 2]) {
                      t[l >> 2] = t[(l + 12) >> 2] + x(t[(l + 4) >> 2], 20);
                      a: {
                        if (!(t[t[l >> 2] >> 2] & 15)) {
                          J(t[(t[l >> 2] + 8) >> 2]);
                          break a;
                        }
                        b: {
                          if ((t[t[l >> 2] >> 2] & 15) == 5) {
                            J(t[(t[l >> 2] + 8) >> 2]);
                            break b;
                          }
                          (t[t[l >> 2] >> 2] & 15) == 6 &&
                            J(t[(t[l >> 2] + 12) >> 2]);
                        }
                      }
                      t[(l + 4) >> 2] = t[(l + 4) >> 2] + 1;
                      continue;
                    }
                    break;
                  }
                  J(t[(l + 12) >> 2]);
                  A = (l + 16) | 0;
                }
                function P(m, n, l, o) {
                  q[(m + 53) | 0] = 1;
                  a: {
                    if (t[(m + 4) >> 2] != (l | 0)) break a;
                    q[(m + 52) | 0] = 1;
                    l = t[(m + 16) >> 2];
                    if (!l) {
                      t[(m + 36) >> 2] = 1;
                      t[(m + 24) >> 2] = o;
                      t[(m + 16) >> 2] = n;
                      if (((o | 0) != 1) | (t[(m + 48) >> 2] != 1)) break a;
                      q[(m + 54) | 0] = 1;
                      return;
                    }
                    if ((n | 0) == (l | 0)) {
                      l = t[(m + 24) >> 2];
                      (l | 0) == 2 && ((t[(m + 24) >> 2] = o), (l = o));
                      if ((t[(m + 48) >> 2] != 1) | ((l | 0) != 1)) break a;
                      q[(m + 54) | 0] = 1;
                      return;
                    }
                    q[(m + 54) | 0] = 1;
                    t[(m + 36) >> 2] = t[(m + 36) >> 2] + 1;
                  }
                }
                function Q(n, o, l, p) {
                  var m;
                  m = (A - 32) | 0;
                  t[(m + 24) >> 2] = n;
                  t[(m + 20) >> 2] = o;
                  t[(m + 16) >> 2] = l;
                  t[(m + 12) >> 2] = p;
                  q[(m + 11) | 0] = 0;
                  a: {
                    if (w[t[(m + 20) >> 2] >> 2] < 1) {
                      t[(m + 28) >> 2] = 1;
                      break a;
                    }
                    q[(m + 11) | 0] = u[t[t[(m + 24) >> 2] >> 2]];
                    n = t[(m + 24) >> 2];
                    t[n >> 2] = t[n >> 2] + 1;
                    n = t[(m + 20) >> 2];
                    t[n >> 2] = t[n >> 2] - 1;
                    q[t[(m + 16) >> 2]] = (u[(m + 11) | 0] & 128) == 128;
                    q[t[(m + 12) >> 2]] = u[(m + 11) | 0] & 127;
                    t[(m + 28) >> 2] = 0;
                  }
                  return t[(m + 28) >> 2];
                }
                function ma(n, o, l, p, m) {
                  n = n | 0;
                  o = o | 0;
                  l = l | 0;
                  p = p | 0;
                  m = m | 0;
                  if (R(n, t[(o + 8) >> 2], m)) {
                    da(o, l, p);
                    return;
                  }
                  a: {
                    if (!R(n, t[o >> 2], m)) break a;
                    if (
                      !(t[(o + 20) >> 2] != (l | 0)
                        ? t[(o + 16) >> 2] != (l | 0)
                        : 0)
                    ) {
                      if ((p | 0) != 1) break a;
                      t[(o + 32) >> 2] = 1;
                      return;
                    }
                    t[(o + 20) >> 2] = l;
                    t[(o + 32) >> 2] = p;
                    t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                    (t[(o + 36) >> 2] != 1) | (t[(o + 24) >> 2] != 2) ||
                      (q[(o + 54) | 0] = 1);
                    t[(o + 44) >> 2] = 4;
                  }
                }
                function R(m, n, l) {
                  var o;
                  if (!l) return t[(m + 4) >> 2] == t[(n + 4) >> 2];
                  if ((m | 0) == (n | 0)) return 1;
                  l = t[(m + 4) >> 2];
                  m = u[l | 0];
                  n = t[(n + 4) >> 2];
                  o = u[n | 0];
                  a: {
                    if (!m | ((o | 0) != (m | 0))) break a;
                    while (1) {
                      o = u[(n + 1) | 0];
                      m = u[(l + 1) | 0];
                      if (!m) break a;
                      n = (n + 1) | 0;
                      l = (l + 1) | 0;
                      if ((m | 0) == (o | 0)) continue;
                      break;
                    }
                  }
                  return (m | 0) == (o | 0);
                }
                function na(m, n) {
                  m = m | 0;
                  n = n | 0;
                  var l = 0,
                    o = 0;
                  l = (A - 32) | 0;
                  A = l;
                  t[(l + 24) >> 2] = m;
                  t[(l + 20) >> 2] = n;
                  (o = l), (m = D(1)), (t[(o + 16) >> 2] = m);
                  a: {
                    if (!t[(l + 16) >> 2]) {
                      t[(l + 28) >> 2] = 3;
                      break a;
                    }
                    q[(l + 15) | 0] = 9;
                    q[t[(l + 16) >> 2]] = u[(l + 15) | 0];
                    t[t[(l + 24) >> 2] >> 2] = t[(l + 16) >> 2];
                    t[t[(l + 20) >> 2] >> 2] = 1;
                    t[(l + 28) >> 2] = 0;
                  }
                  A = (l + 32) | 0;
                  return t[(l + 28) >> 2];
                }
                function S(m, n) {
                  m = m | 0;
                  n = n | 0;
                  var l = 0,
                    o = 0;
                  l = (A - 32) | 0;
                  A = l;
                  t[(l + 24) >> 2] = m;
                  t[(l + 20) >> 2] = n;
                  (o = l), (m = D(1)), (t[(o + 16) >> 2] = m);
                  a: {
                    if (!t[(l + 16) >> 2]) {
                      t[(l + 28) >> 2] = 3;
                      break a;
                    }
                    q[(l + 15) | 0] = 10;
                    q[t[(l + 16) >> 2]] = u[(l + 15) | 0];
                    t[t[(l + 24) >> 2] >> 2] = t[(l + 16) >> 2];
                    t[t[(l + 20) >> 2] >> 2] = 1;
                    t[(l + 28) >> 2] = 0;
                  }
                  A = (l + 32) | 0;
                  return t[(l + 28) >> 2];
                }
                function T(m, n) {
                  m = m | 0;
                  n = n | 0;
                  var l = 0,
                    o = 0;
                  l = (A - 32) | 0;
                  A = l;
                  t[(l + 24) >> 2] = m;
                  t[(l + 20) >> 2] = n;
                  (o = l), (m = D(1)), (t[(o + 16) >> 2] = m);
                  a: {
                    if (!t[(l + 16) >> 2]) {
                      t[(l + 28) >> 2] = 3;
                      break a;
                    }
                    q[(l + 15) | 0] = 2;
                    q[t[(l + 16) >> 2]] = u[(l + 15) | 0];
                    t[t[(l + 24) >> 2] >> 2] = t[(l + 16) >> 2];
                    t[t[(l + 20) >> 2] >> 2] = 1;
                    t[(l + 28) >> 2] = 0;
                  }
                  A = (l + 32) | 0;
                  return t[(l + 28) >> 2];
                }
                function U(m, n) {
                  m = m | 0;
                  n = n | 0;
                  var l = 0,
                    o = 0;
                  l = (A - 32) | 0;
                  A = l;
                  t[(l + 24) >> 2] = m;
                  t[(l + 20) >> 2] = n;
                  (o = l), (m = D(1)), (t[(o + 16) >> 2] = m);
                  a: {
                    if (!t[(l + 16) >> 2]) {
                      t[(l + 28) >> 2] = 3;
                      break a;
                    }
                    q[(l + 15) | 0] = 4;
                    q[t[(l + 16) >> 2]] = u[(l + 15) | 0];
                    t[t[(l + 24) >> 2] >> 2] = t[(l + 16) >> 2];
                    t[t[(l + 20) >> 2] >> 2] = 1;
                    t[(l + 28) >> 2] = 0;
                  }
                  A = (l + 32) | 0;
                  return t[(l + 28) >> 2];
                }
                function V(l) {
                  var m = 0;
                  m = (A - 16) | 0;
                  A = m;
                  t[(m + 12) >> 2] = l;
                  l = 1;
                  a: {
                    if (X(t[(m + 12) >> 2]) & 1) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 15) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 13) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 12) break a;
                    l = t[(m + 12) >> 2] == 14;
                  }
                  A = (m + 16) | 0;
                  return l;
                }
                function W(m, n, l) {
                  var o;
                  o = t[(m + 16) >> 2];
                  if (!o) {
                    t[(m + 36) >> 2] = 1;
                    t[(m + 24) >> 2] = l;
                    t[(m + 16) >> 2] = n;
                    return;
                  }
                  a: {
                    if ((n | 0) == (o | 0)) {
                      if (t[(m + 24) >> 2] != 2) break a;
                      t[(m + 24) >> 2] = l;
                      return;
                    }
                    q[(m + 54) | 0] = 1;
                    t[(m + 24) >> 2] = 2;
                    t[(m + 36) >> 2] = t[(m + 36) >> 2] + 1;
                  }
                }
                function X(l) {
                  var m;
                  m = (A - 16) | 0;
                  t[(m + 12) >> 2] = l;
                  l = 1;
                  a: {
                    if (t[(m + 12) >> 2] == 5) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 6) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 7) break a;
                    l = t[(m + 12) >> 2] == 8;
                  }
                  return l;
                }
                function Y(o, p, l, q, m, n) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  q = q | 0;
                  m = m | 0;
                  n = n | 0;
                  if (R(o, t[(p + 8) >> 2], n)) {
                    P(p, l, q, m);
                    return;
                  }
                  o = t[(o + 8) >> 2];
                  ka[t[(t[o >> 2] + 20) >> 2]](o, p, l, q, m, n);
                }
                function Z() {
                  var m = 0,
                    n,
                    l;
                  while (1) {
                    n = m << 4;
                    l = (n + 1376) | 0;
                    t[(n + 1380) >> 2] = l;
                    t[(n + 1384) >> 2] = l;
                    m = (m + 1) | 0;
                    if ((m | 0) != 64) continue;
                    break;
                  }
                  G(48);
                }
                function $(m, n, l, o) {
                  m = m | 0;
                  n = n | 0;
                  l = l | 0;
                  o = o | 0;
                  if (R(m, t[(n + 8) >> 2], 0)) {
                    W(n, l, o);
                    return;
                  }
                  m = t[(m + 8) >> 2];
                  ka[t[(t[m >> 2] + 28) >> 2]](m, n, l, o);
                }
                function aa(o, p, l, q, m, n) {
                  (o = o | 0),
                    (p = p | 0),
                    (l = l | 0),
                    (q = q | 0),
                    (m = m | 0),
                    (n = n | 0),
                    R(o, t[(p + 8) >> 2], n) && P(p, l, q, m);
                }
                function ba(m, n, l) {
                  if (l)
                    while (1) {
                      q[m | 0] = u[n | 0];
                      m = (m + 1) | 0;
                      n = (n + 1) | 0;
                      l = (l - 1) | 0;
                      if (l) continue;
                      break;
                    }
                }
                function ca(l, m) {
                  if (m)
                    while (1) {
                      q[l | 0] = 0;
                      l = (l + 1) | 0;
                      m = (m - 1) | 0;
                      if (m) continue;
                      break;
                    }
                }
                function oa(m, n, l, o) {
                  (m = m | 0),
                    (n = n | 0),
                    (l = l | 0),
                    (o = o | 0),
                    R(m, t[(n + 8) >> 2], 0) && W(n, l, o);
                }
                function da(m, n, l) {
                  (t[(m + 28) >> 2] == 1) | (t[(m + 4) >> 2] != (n | 0)) ||
                    (t[(m + 28) >> 2] = l);
                }
                function pa(l, m) {
                  l = l | 0;
                  m = m | 0;
                  return (x(m, 20) + l) | 0;
                }
                function ea(l) {
                  l = l | 0;
                  return (v[(l + 8) >> 1] >>> 1) | 0;
                }
                function qa(l) {
                  l = l | 0;
                  return s[(l + 8) >> 1] & 1;
                }
                function fa(l) {
                  l = l | 0;
                  return t[(l + 12) >> 2];
                }
                function ra(l) {
                  l = l | 0;
                  return t[l >> 2] & 15;
                }
                function sa(l) {
                  l = l | 0;
                  return t[(l + 16) >> 2];
                }
                function ga(l) {
                  l = l | 0;
                  return v[(l + 4) >> 1];
                }
                function ha(l) {
                  l = l | 0;
                  return t[(l + 8) >> 2];
                }
                function ia(l) {
                  l = l | 0;
                  return u[(l + 4) | 0];
                }
                function ja(l) {
                  l = l | 0;
                  return l | 0;
                }
                function ta(l) {
                  return D(l);
                }
                function ua(l) {
                  (l = l | 0), J(l);
                }
                function va(l) {
                  l | 0;
                }
                n = u;
                r(l);
                var ka = m([null, ja, ua, va, va, H, aa, ma, oa, ua, Y, L, $]);
                function wa() {
                  return (p.byteLength / 65536) | 0;
                }
                function xa(l) {
                  l = l | 0;
                  var m = wa() | 0;
                  l = (m + l) | 0;
                  if (m < l && l < 65536) {
                    l = new ArrayBuffer(x(l, 65536));
                    var r = new Int8Array(l);
                    r.set(q);
                    q = new Int8Array(l);
                    s = new Int16Array(l);
                    t = new Int32Array(l);
                    u = new Uint8Array(l);
                    v = new Uint16Array(l);
                    w = new Uint32Array(l);
                    new Float32Array(l);
                    new Float64Array(l);
                    p = l;
                    o.buffer = p;
                    n = u;
                  }
                  return m;
                }
                return {
                  c: Z,
                  d: ta,
                  e: ua,
                  f: T,
                  g: U,
                  h: K,
                  i: F,
                  j: N,
                  k: E,
                  l: la,
                  m: na,
                  n: S,
                  o: C,
                  p: ra,
                  q: ia,
                  r: pa,
                  s: ga,
                  t: ha,
                  u: fa,
                  v: fa,
                  w: sa,
                  x: ea,
                  y: qa,
                  z: ea,
                  A: ka,
                };
              }
              return s(l);
            })(ha);
          },
          instantiate: function (l, m) {
            return {
              then: function (n) {
                var m = new D.Module(l);
                n({ instance: new D.Instance(m) });
              },
            };
          },
          RuntimeError: Error,
        };
        C = [];
        typeof D !== 'object' && Y('no native wasm support detected');
        var E,
          F = !1;
        function G(l, m) {
          l || Y('Assertion failed: ' + m);
        }
        function la(l, m) {
          l % m > 0 && (l += m - (l % m));
          return l;
        }
        var H, I;
        function J(l) {
          (H = l),
            (m.HEAP8 = new Int8Array(l)),
            (m.HEAP16 = new Int16Array(l)),
            (m.HEAP32 = new Int32Array(l)),
            (m.HEAPU8 = I = new Uint8Array(l)),
            (m.HEAPU16 = new Uint16Array(l)),
            (m.HEAPU32 = new Uint32Array(l)),
            (m.HEAPF32 = new Float32Array(l)),
            (m.HEAPF64 = new Float64Array(l));
        }
        u = m.INITIAL_MEMORY || 2097152;
        m.wasmMemory
          ? (E = m.wasmMemory)
          : (E = new D.Memory({
              initial: u / 65536,
              maximum: 2147483648 / 65536,
            }));
        E && (H = E.buffer);
        H.byteLength;
        J(H);
        var K,
          L = [],
          M = [],
          N = [];
        function O() {
          if (m.preRun) {
            typeof m.preRun == 'function' && (m.preRun = [m.preRun]);
            while (m.preRun.length) ma(m.preRun.shift());
          }
          da(L);
        }
        function P() {
          da(M);
        }
        function Q() {
          if (m.postRun) {
            typeof m.postRun == 'function' && (m.postRun = [m.postRun]);
            while (m.postRun.length) na(m.postRun.shift());
          }
          da(N);
        }
        function ma(l) {
          L.unshift(l);
        }
        function R(l) {
          M.unshift(l);
        }
        function na(l) {
          N.unshift(l);
        }
        (!Math.imul || Math.imul(4294967295, 5) !== -5) &&
          (Math.imul = function (l, m) {
            var n = l >>> 16;
            l = l & 65535;
            var o = m >>> 16;
            m = m & 65535;
            return (l * m + ((n * m + l * o) << 16)) | 0;
          });
        if (!Math.fround) {
          var S = new Float32Array(1);
          Math.fround = function (l) {
            S[0] = l;
            return S[0];
          };
        }
        Math.clz32 ||
          (Math.clz32 = function (l) {
            var m = 32,
              n = l >> 16;
            n && ((m -= 16), (l = n));
            n = l >> 8;
            n && ((m -= 8), (l = n));
            n = l >> 4;
            n && ((m -= 4), (l = n));
            n = l >> 2;
            n && ((m -= 2), (l = n));
            n = l >> 1;
            return n ? m - 2 : m - l;
          });
        Math.trunc ||
          (Math.trunc = function (l) {
            return l < 0 ? Math.ceil(l) : Math.floor(l);
          });
        var T = 0,
          U = null,
          V = null;
        function W(l) {
          T++, m.monitorRunDependencies && m.monitorRunDependencies(T);
        }
        function X(l) {
          T--;
          m.monitorRunDependencies && m.monitorRunDependencies(T);
          if (T == 0) {
            U !== null && (clearInterval(U), (U = null));
            if (V) {
              l = V;
              V = null;
              l();
            }
          }
        }
        m.preloadedImages = {};
        m.preloadedAudios = {};
        function Y(l) {
          m.onAbort && m.onAbort(l);
          l += '';
          B(l);
          F = !0;
          l = 'abort(' + l + '). Build with -s ASSERTIONS=1 for more info.';
          l = new D.RuntimeError(l);
          s(l);
          throw l;
        }
        var Z = 'data:application/octet-stream;base64,';
        function $(l) {
          return l.startsWith(Z);
        }
        var aa = 'dgwcppbridge.wasm';
        $(aa) || (aa = z(aa));
        function ba(l) {
          try {
            if (l == aa && C) return new Uint8Array(C);
            var m = ga(l);
            if (m) return m;
            if (A) return A(l);
            else throw 'both async and sync fetching of the wasm failed';
          } catch (l) {
            Y(l);
          }
        }
        function ca() {
          return !C && (w || x) && typeof fetch === 'function'
            ? fetch(aa, { credentials: 'same-origin' })
                .then(function (l) {
                  if (!l.ok)
                    throw "failed to load wasm binary file at '" + aa + "'";
                  return l.arrayBuffer();
                })
                ['catch'](function () {
                  return ba(aa);
                })
            : n.resolve().then(function () {
                return ba(aa);
              });
        }
        function oa() {
          var n = { a: ha };
          function o(n, l) {
            l = n.exports;
            m.asm = l;
            K = m.asm.A;
            R(m.asm.c);
            X('wasm-instantiate');
          }
          W('wasm-instantiate');
          function r(l) {
            o(l.instance);
          }
          function t(l) {
            return ca()
              .then(function (l) {
                l = D.instantiate(l, n);
                return l;
              })
              .then(l, function (l) {
                B('failed to asynchronously prepare wasm: ' + l), Y(l);
              });
          }
          function u() {
            if (
              !C &&
              typeof D.instantiateStreaming === 'function' &&
              !$(aa) &&
              typeof fetch === 'function'
            )
              return fetch(aa, { credentials: 'same-origin' }).then(function (
                l,
              ) {
                l = D.instantiateStreaming(l, n);
                return l.then(r, function (l) {
                  B('wasm streaming compile failed: ' + l);
                  B('falling back to ArrayBuffer instantiation');
                  return t(r);
                });
              });
            else return t(r);
          }
          if (m.instantiateWasm)
            try {
              var l = m.instantiateWasm(n, o);
              return l;
            } catch (l) {
              B('Module.instantiateWasm callback failed with error: ' + l);
              return !1;
            }
          u()['catch'](s);
          return {};
        }
        function da(l) {
          while (l.length > 0) {
            var n = l.shift();
            if (typeof n == 'function') {
              n(m);
              continue;
            }
            var o = n.func;
            typeof o === 'number'
              ? n.arg === void 0
                ? K.get(o)()
                : K.get(o)(n.arg)
              : o(n.arg === void 0 ? null : n.arg);
          }
        }
        function pa(l) {
          try {
            E.grow((l - H.byteLength + 65535) >>> 16);
            J(E.buffer);
            return 1;
          } catch (l) {}
        }
        function ea(l) {
          var m = I.length;
          l = l >>> 0;
          var n = 2147483648;
          if (l > n) return !1;
          for (var o = 1; o <= 4; o *= 2) {
            var p = m * (1 + 0.2 / o);
            p = Math.min(p, l + 100663296);
            p = Math.min(n, la(Math.max(l, p), 65536));
            p = pa(p);
            if (p) return !0;
          }
          return !1;
        }
        var qa = !1;
        function fa(l) {
          var m = [];
          for (var n = 0; n < l.length; n++) {
            var o = l[n];
            o > 255 &&
              (qa &&
                G(
                  !1,
                  'Character code ' +
                    o +
                    ' (' +
                    String.fromCharCode(o) +
                    ')  at offset ' +
                    n +
                    ' not in 0x00-0xFF.',
                ),
              (o &= 255));
            m.push(String.fromCharCode(o));
          }
          return m.join('');
        }
        var ra =
          typeof atob === 'function'
            ? atob
            : function (l) {
                var m =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                  n = '',
                  o,
                  p,
                  q,
                  r,
                  s,
                  t = 0;
                l = l.replace(/[^A-Za-z0-9\+\/\=]/g, '');
                do
                  (p = m.indexOf(l.charAt(t++))),
                    (q = m.indexOf(l.charAt(t++))),
                    (r = m.indexOf(l.charAt(t++))),
                    (s = m.indexOf(l.charAt(t++))),
                    (p = (p << 2) | (q >> 4)),
                    (q = ((q & 15) << 4) | (r >> 2)),
                    (o = ((r & 3) << 6) | s),
                    (n = n + String.fromCharCode(p)),
                    r !== 64 && (n = n + String.fromCharCode(q)),
                    s !== 64 && (n = n + String.fromCharCode(o));
                while (t < l.length);
                return n;
              };
        function sa(l) {
          try {
            l = ra(l);
            var m = new Uint8Array(l.length);
            for (var n = 0; n < l.length; ++n) m[n] = l.charCodeAt(n);
            return m;
          } catch (l) {
            throw new Error('Converting base64 string to bytes failed.');
          }
        }
        function ga(l) {
          if (!$(l)) return;
          return sa(l.slice(Z.length));
        }
        var ha = { b: ea, a: E };
        oa();
        m.___wasm_call_ctors = function () {
          return (m.___wasm_call_ctors = m.asm.c).apply(null, arguments);
        };
        m.__malloc = function () {
          return (m.__malloc = m.asm.d).apply(null, arguments);
        };
        m.__free = function () {
          return (m.__free = m.asm.e).apply(null, arguments);
        };
        m.__DgwCodecEncodeEmpty = function () {
          return (m.__DgwCodecEncodeEmpty = m.asm.f).apply(null, arguments);
        };
        m.__DgwCodecEncodeDeauth = function () {
          return (m.__DgwCodecEncodeDeauth = m.asm.g).apply(null, arguments);
        };
        m.__DgwCodecEncodeDrain = function () {
          return (m.__DgwCodecEncodeDrain = m.asm.h).apply(null, arguments);
        };
        m.__DgwCodecEncodeStreamGroup_EstabStream = function () {
          return (m.__DgwCodecEncodeStreamGroup_EstabStream = m.asm.i).apply(
            null,
            arguments,
          );
        };
        m.__DgwCodecEncodeStreamGroup_EndOfData = function () {
          return (m.__DgwCodecEncodeStreamGroup_EndOfData = m.asm.j).apply(
            null,
            arguments,
          );
        };
        m.__DgwCodecEncodeStreamGroup_Data = function () {
          return (m.__DgwCodecEncodeStreamGroup_Data = m.asm.k).apply(
            null,
            arguments,
          );
        };
        m.__DgwCodecEncodeStreamGroup_Ack = function () {
          return (m.__DgwCodecEncodeStreamGroup_Ack = m.asm.l).apply(
            null,
            arguments,
          );
        };
        m.__DgwCodecEncodePing = function () {
          return (m.__DgwCodecEncodePing = m.asm.m).apply(null, arguments);
        };
        m.__DgwCodecEncodePong = function () {
          return (m.__DgwCodecEncodePong = m.asm.n).apply(null, arguments);
        };
        m.__DgwCodecDecode = function () {
          return (m.__DgwCodecDecode = m.asm.o).apply(null, arguments);
        };
        m.__getFrameType = function () {
          return (m.__getFrameType = m.asm.p).apply(null, arguments);
        };
        m.__getDrainReasonFromDrainFrame = function () {
          return (m.__getDrainReasonFromDrainFrame = m.asm.q).apply(
            null,
            arguments,
          );
        };
        m.__getDGWFramePtr = function () {
          return (m.__getDGWFramePtr = m.asm.r).apply(null, arguments);
        };
        m.__getStreamIdFromStreamGroupFrame = function () {
          return (m.__getStreamIdFromStreamGroupFrame = m.asm.s).apply(
            null,
            arguments,
          );
        };
        m.__getEncodedParamsFromEstablishStreamFrame = function () {
          return (m.__getEncodedParamsFromEstablishStreamFrame = m.asm.t).apply(
            null,
            arguments,
          );
        };
        m.__getEncodedParamsSizeFromEstablishStreamFrame = function () {
          return (m.__getEncodedParamsSizeFromEstablishStreamFrame =
            m.asm.u).apply(null, arguments);
        };
        m.__getDataFromGroupedStreamDataFrame = function () {
          return (m.__getDataFromGroupedStreamDataFrame = m.asm.v).apply(
            null,
            arguments,
          );
        };
        m.__getDataSizeFromGroupedStreamDataFrame = function () {
          return (m.__getDataSizeFromGroupedStreamDataFrame = m.asm.w).apply(
            null,
            arguments,
          );
        };
        m.__getAckIdFromGroupedStreamDataFrame = function () {
          return (m.__getAckIdFromGroupedStreamDataFrame = m.asm.x).apply(
            null,
            arguments,
          );
        };
        m.__getRequiresAckFromGroupedStreamDataFrame = function () {
          return (m.__getRequiresAckFromGroupedStreamDataFrame = m.asm.y).apply(
            null,
            arguments,
          );
        };
        m.__getAckIdFromGroupedStreamAckFrame = function () {
          return (m.__getAckIdFromGroupedStreamAckFrame = m.asm.z).apply(
            null,
            arguments,
          );
        };
        var ia;
        V = function l() {
          ia || ja(), ia || (V = l);
        };
        function ja(l) {
          l || v;
          if (T > 0) return;
          O();
          if (T > 0) return;
          function n() {
            if (ia) return;
            ia = !0;
            m.calledRun = !0;
            if (F) return;
            P();
            o(m);
            m.onRuntimeInitialized && m.onRuntimeInitialized();
            Q();
          }
          m.setStatus
            ? (m.setStatus('Running...'),
              setTimeout(function () {
                setTimeout(function () {
                  m.setStatus('');
                }, 1),
                  n();
              }, 1))
            : n();
        }
        m.run = ja;
        if (m.preInit) {
          typeof m.preInit == 'function' && (m.preInit = [m.preInit]);
          while (m.preInit.length > 0) m.preInit.pop()();
        }
        ja();
        return m.ready;
      };
    })();
    typeof q === 'object' && typeof p === 'object'
      ? (p.exports = r)
      : typeof define === 'function' && define.amd
      ? define([], function () {
          return r;
        })
      : typeof q === 'object' && (q.Module = r);
  },
  null,
);
__d(
  'DGWUtils',
  [
    'Base64',
    'DGWConstants',
    'DGWCppBridge',
    'DGWLoggingContext',
    'Random',
    'URI',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 4;
    function a() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (a) {
          var b = (d('Random').random() * 16) | 0;
          a = a == 'x' ? b : (b & 3) | 8;
          return a.toString(16);
        },
      );
    }
    function i(a) {
      var b = new TextDecoder();
      b = b.decode(a);
      a = c('Base64').encode(b);
      b = a.replace(/\+/gi, '-').replace(/\//gi, '_').replace(/=/gi, '');
      return b;
    }
    var j = null;
    e = (function () {
      function a() {}
      a.initialize = function () {
        return b('regeneratorRuntime').async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  if (!(j != null)) {
                    a.next = 2;
                    break;
                  }
                  return a.abrupt('return');
                case 2:
                  a.next = 4;
                  return b('regeneratorRuntime').awrap(c('DGWCppBridge')());
                case 4:
                  j = a.sent;
                case 5:
                case 'end':
                  return a.stop();
              }
          },
          null,
          this,
        );
      };
      a.constructConnectUrl = function (a) {
        var b,
          e = a.appId,
          f = a.appVersion,
          g = a.authType,
          h = a.dgwVersion,
          j = a.fbId,
          k = a.tier,
          l = a.loggingId,
          m = a.headers,
          n = a.endpoint,
          o = a.serviceId,
          p = a.regionHint;
        a = a.establishStreamFrame;
        var q =
          ((b = {}),
          (b[d('DGWConstants').HEADER_CONSTANTS.HEADER_APPID] = e),
          (b[d('DGWConstants').HEADER_CONSTANTS.HEADER_APPVERSION] = f),
          (b[d('DGWConstants').HEADER_CONSTANTS.HEADER_AUTHTYPE] = g),
          (b[d('DGWConstants').HEADER_CONSTANTS.HEADER_DGW_VERSION] = '' + h),
          (b[d('DGWConstants').HEADER_CONSTANTS.HEADER_UUID] = j),
          (b[d('DGWConstants').HEADER_CONSTANTS.HEADER_TARGET_TIER] = k),
          b);
        a !== void 0 &&
          (q[
            d(
              'DGWConstants',
            ).HEADER_CONSTANTS.HEADER_ESTABLISH_STREAM_FRAME_BASE64
          ] = i(a));
        l !== void 0 &&
          (q[d('DGWConstants').HEADER_CONSTANTS.HEADER_LOGGING_ID] = l);
        p !== void 0 &&
          (q[d('DGWConstants').HEADER_CONSTANTS.HEADER_REGIONHINT] = p);
        Object.keys(m).forEach(function (a) {
          var b = d('DGWConstants').HEADER_CONSTANTS.APPHEADER_PREFIX + a;
          Object.prototype.hasOwnProperty.call(q, b) || (q[b] = m[a]);
        });
        e = new (c('URI'))(n);
        e.setQueryData(q);
        e.setPath(e.getPath() + '/' + o);
        e.toString().length > 2e3 &&
          (delete q[
            d('DGWConstants').HEADER_CONSTANTS
              .HEADER_ESTABLISH_STREAM_FRAME_BASE64
          ],
          e.setQueryData(q));
        return e.toString();
      };
      return a;
    })();
    f = (function () {
      function a(a, b, c) {
        (this.$1 = null), (this.$2 = a), (this.$3 = b), (this.$4 = c);
      }
      a.initialize = function () {
        return b('regeneratorRuntime').async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  if (!(j != null)) {
                    a.next = 2;
                    break;
                  }
                  return a.abrupt('return');
                case 2:
                  a.next = 4;
                  return b('regeneratorRuntime').awrap(c('DGWCppBridge')());
                case 4:
                  j = a.sent;
                case 5:
                case 'end':
                  return a.stop();
              }
          },
          null,
          this,
        );
      };
      var e = a.prototype;
      e.malloc = function (a) {
        try {
          a = j.__malloc(a);
          if (a === 0) {
            var b;
            (b = this.$2) == null
              ? void 0
              : b.logError(
                  d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                  'wasm malloc failure',
                  'malloc returned 0',
                );
            return -1;
          }
          return a;
        } catch (a) {
          (b = this.$2) == null
            ? void 0
            : b.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'wasm malloc failure',
                'exception during malloc',
                a.toString(),
              );
          return -1;
        }
      };
      e.free = function (a) {
        j.__free(a);
      };
      e.append = function (a) {
        if (this.$1 == null) {
          this.$1 = a;
          return;
        }
        var b = this.$1.length,
          c = new Uint8Array(b + a.length);
        c.set(this.$1, 0);
        c.set(a, b);
        this.$1 = c;
      };
      e.processData = function () {
        var a = this;
        if (this.$1 == null) return;
        var b = this.$1.length,
          c = this.malloc(b);
        if (c === -1) return;
        var e = j.HEAPU8.subarray(c, c + b);
        if (this.$1) for (var f = 0; f < e.length; ++f) e[f] = this.$1[f];
        f = this.malloc(h * 4);
        if (f === -1) return;
        e = f;
        var g = e + h,
          i = g + h,
          k = i + h;
        b = j.__DgwCodecDecode(c, b, e, g, i, k);
        this.free(c);
        if (
          b !== d('DGWConstants').DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          this.free(f);
          (i = this.$2) == null
            ? void 0
            : i.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'Codec Decode Failure',
                'Failed to decode Frame(s). Received error code ' +
                  d('DGWConstants').DgwCodecReturnCodeToString(b),
              );
          return;
        }
        c = j.HEAPU32.subarray(k / h, k / h + 1)[0];
        if (this.$1 == null) {
          this.free(f);
          return;
        }
        i = this.$1.length - c;
        if (this.$1 && this.$1.length > i) {
          this.$1 = new Uint8Array(
            ((b = this.$1) == null ? void 0 : b.subarray(i)) || [],
          );
        } else this.$1 = null;
        k = j.HEAPU32.subarray(g / h, g / h + 1)[0];
        c = j.HEAPU32.subarray(e / h, e / h + 1)[0];
        var l = [];
        for (b = 0; b < k; ++b) {
          var m = j.__getDGWFramePtr(c, b);
          i = j.__getFrameType(m);
          switch (i) {
            case d('DGWConstants').DgwFrameType.DgwFrameType_Drain:
              g = (function () {
                var b = j.__getDrainReasonFromDrainFrame(m),
                  c = d('DGWConstants').drainReasonToDrainReasonString(b);
                (b = a.$2) == null
                  ? void 0
                  : b.logEvent(
                      d('DGWLoggingContext').DGWLoggingComponent
                        .CODEC_COMPONENT,
                      'Received Drain Frame from server',
                      'DrainReason: ' + c,
                    );
                l.push(function () {
                  var b;
                  return (b = a.$3) == null ? void 0 : b.receivedDrainSignal(c);
                });
                return 'break';
              })();
              if (g === 'break') break;
            case d('DGWConstants').DgwFrameType
              .DgwFrameType_StreamGroup_EstabStream:
              e = (function () {
                var b = j.__getStreamIdFromStreamGroupFrame(m),
                  c = j.__getEncodedParamsFromEstablishStreamFrame(m),
                  d = new Uint8Array(
                    j.HEAPU8.subarray(
                      c,
                      c + j.__getEncodedParamsSizeFromEstablishStreamFrame(m),
                    ),
                  );
                a.free(c);
                l.push(function () {
                  var c;
                  return (c = a.$3) == null
                    ? void 0
                    : c.onGroupedStreamEstablishStreamReceived(b, d);
                });
                return 'break';
              })();
              if (e === 'break') break;
            case d('DGWConstants').DgwFrameType.DgwFrameType_StreamGroup_Data:
              i = (function () {
                var b = j.__getStreamIdFromStreamGroupFrame(m),
                  c = j.__getDataFromGroupedStreamDataFrame(m),
                  d = new Uint8Array(
                    j.HEAPU8.subarray(
                      c,
                      c + j.__getDataSizeFromGroupedStreamDataFrame(m),
                    ),
                  );
                a.free(c);
                var e = j.__getRequiresAckFromGroupedStreamDataFrame(m)
                  ? j.__getAckIdFromGroupedStreamDataFrame(m)
                  : null;
                l.push(function () {
                  var c;
                  return (c = a.$3) == null
                    ? void 0
                    : c.onGroupedStreamDataReceived(b, d, e);
                });
                return 'break';
              })();
              if (i === 'break') break;
            case d('DGWConstants').DgwFrameType.DgwFrameType_StreamGroup_Ack:
              g = (function () {
                var b = j.__getStreamIdFromStreamGroupFrame(m),
                  c = j.__getAckIdFromGroupedStreamAckFrame(m);
                l.push(function () {
                  var d;
                  return (d = a.$3) == null
                    ? void 0
                    : d.onGroupedStreamAckReceived(b, c);
                });
                return 'break';
              })();
              if (g === 'break') break;
            case d('DGWConstants').DgwFrameType
              .DgwFrameType_StreamGroup_EndOfData:
              e = (function () {
                var b = j.__getStreamIdFromStreamGroupFrame(m);
                l.push(function () {
                  var c;
                  return (c = a.$3) == null
                    ? void 0
                    : c.onGroupedStreamEndOfDataReceived(b);
                });
                return 'break';
              })();
              if (e === 'break') break;
            case d('DGWConstants').DgwFrameType.DgwFrameType_Ping:
              l.push(function () {
                var b;
                return (b = a.$3) == null ? void 0 : b.onPingReceived();
              });
              break;
            case d('DGWConstants').DgwFrameType.DgwFrameType_Pong:
              l.push(function () {
                var b;
                return (b = a.$3) == null ? void 0 : b.onPongReceived();
              });
              break;
            default:
              break;
          }
          this.free(m);
        }
        this.free(f);
        for (i = 0; i < l.length; i++) l[i]();
      };
      e.encodeData = function (a, b, c, e) {
        var f = this.malloc(a.length);
        if (f === -1) return null;
        var g = j.HEAPU8.subarray(f, f + a.length);
        for (var i = 0; i < g.length; ++i) g[i] = a[i];
        a = this.malloc(h * 2);
        i = a;
        var k = a + h;
        e = j.__DgwCodecEncodeStreamGroup_Data(e, f, g.length, b, c, i, k);
        this.free(f);
        if (
          e !== d('DGWConstants').DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          (g = this.$2) == null
            ? void 0
            : g.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'Data Frame encode failure',
                'Failed to decode DGW Data Frame. Received error code ' +
                  d('DGWConstants').DgwCodecReturnCodeToString(e),
              );
          return null;
        }
        b = j.HEAPU32.subarray(i / h, i / h + 1)[0];
        c = j.HEAPU32.subarray(k / h, k / h + 1)[0];
        f = new Uint8Array(j.HEAPU8.subarray(b, b + c));
        this.free(b);
        this.free(a);
        return f;
      };
      e.encodeAck = function (a, b) {
        var c = this.malloc(h * 2);
        if (c === -1) return null;
        var e = c,
          f = c + h;
        b = j.__DgwCodecEncodeStreamGroup_Ack(b, a, e, f);
        if (
          b !== d('DGWConstants').DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          (a = this.$2) == null
            ? void 0
            : a.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'ACK Frame encode failure',
                'Failed to encode ACK Frame. Received error code ' +
                  d('DGWConstants').DgwCodecReturnCodeToString(b),
              );
          return null;
        }
        a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
        b = j.HEAPU32.subarray(f / h, f / h + 1)[0];
        e = new Uint8Array(j.HEAPU8.subarray(a, a + b));
        this.free(a);
        this.free(c);
        return e;
      };
      e.encodeDrain = function (a) {
        var b = this.malloc(h * 2);
        if (b === -1) return null;
        var c = b,
          e = b + h;
        a = j.__DgwCodecEncodeDrain(a, c, e);
        if (
          a !== d('DGWConstants').DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          var f;
          (f = this.$2) == null
            ? void 0
            : f.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'Drain Frame encode failure',
                'Failed to encode Drain Frame. Received error code ' +
                  d('DGWConstants').DgwCodecReturnCodeToString(a),
              );
          return null;
        }
        f = j.HEAPU32.subarray(c / h, c / h + 1)[0];
        a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
        c = new Uint8Array(j.HEAPU8.subarray(f, f + a));
        this.free(f);
        this.free(b);
        return c;
      };
      e.encodeEstablishStream = function (a, b) {
        var c = this.malloc(b.length);
        if (c === -1) return null;
        var e = j.HEAPU8.subarray(c, c + b.length);
        for (var f = 0; f < b.length; ++f) e[f] = b[f];
        e = this.malloc(h * 2);
        f = e;
        var g = e + h;
        b = j.__DgwCodecEncodeStreamGroup_EstabStream(a, c, b.length, f, g);
        this.free(c);
        if (
          b !== d('DGWConstants').DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          (c = this.$2) == null
            ? void 0
            : c.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'EstablishStream Frame encode failure',
                'Failed to encode EstablishStream Frame. Received error code ' +
                  d('DGWConstants').DgwCodecReturnCodeToString(b) +
                  ' for StreamId ' +
                  a,
              );
          return null;
        }
        c = j.HEAPU32.subarray(f / h, f / h + 1)[0];
        b = j.HEAPU32.subarray(g / h, g / h + 1)[0];
        a = new Uint8Array(j.HEAPU8.subarray(c, c + b));
        this.free(c);
        this.free(e);
        return a;
      };
      e.encodeEndOfData = function (a) {
        var b = this.malloc(h * 2);
        if (b === -1) return null;
        var c = b,
          e = b + h;
        a = j.__DgwCodecEncodeStreamGroup_EndOfData(a, c, e);
        if (
          a !== d('DGWConstants').DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          var f;
          (f = this.$2) == null
            ? void 0
            : f.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'EndOfData Frame encode failure',
                'Failed to encode EndOfData Frame. Received error code ' +
                  d('DGWConstants').DgwCodecReturnCodeToString(a),
              );
          return null;
        }
        f = j.HEAPU32.subarray(c / h, c / h + 1)[0];
        a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
        c = new Uint8Array(j.HEAPU8.subarray(f, f + a));
        this.free(f);
        this.free(b);
        return c;
      };
      e.encodePing = function () {
        if (this.$5 != null) return this.$5;
        var a = this.malloc(h * 2);
        if (a === -1) return null;
        var b = a,
          c = a + h,
          e = j.__DgwCodecEncodePing(b, c);
        if (
          e !== d('DGWConstants').DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          var f;
          (f = this.$2) == null
            ? void 0
            : f.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'Ping Frame encode failure',
                'Failed to encode Ping Frame. Received error code ' +
                  d('DGWConstants').DgwCodecReturnCodeToString(e),
              );
          return null;
        }
        f = j.HEAPU32.subarray(b / h, b / h + 1)[0];
        e = j.HEAPU32.subarray(c / h, c / h + 1)[0];
        b = new Uint8Array(j.HEAPU8.subarray(f, f + e));
        this.free(f);
        this.free(a);
        this.$5 = b;
        return b;
      };
      e.encodePong = function () {
        if (this.$6 != null) return this.$6;
        var a = this.malloc(h * 2);
        if (a === -1) return null;
        var b = a,
          c = a + h,
          e = j.__DgwCodecEncodePong(b, c);
        if (
          e !== d('DGWConstants').DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          var f;
          (f = this.$2) == null
            ? void 0
            : f.logError(
                d('DGWLoggingContext').DGWLoggingComponent.CODEC_COMPONENT,
                'Pong Frame encode failure',
                'Failed to encode Pong Frame. Received error code ' +
                  d('DGWConstants').DgwCodecReturnCodeToString(e),
              );
          return null;
        }
        f = j.HEAPU32.subarray(b / h, b / h + 1)[0];
        e = j.HEAPU32.subarray(c / h, c / h + 1)[0];
        b = new Uint8Array(j.HEAPU8.subarray(f, f + e));
        this.free(f);
        this.free(a);
        this.$6 = b;
        return b;
      };
      return a;
    })();
    g.uuidv4 = a;
    g.Uint8ArrayToBase64UrlStr = i;
    g.DGWUtils = e;
    g.DGWCodec = f;
  },
  98,
);
__d(
  'DGWExponentialBackoff',
  ['Promise', 'regeneratorRuntime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = {
        maxRetries: 5,
        baseRetryInterval: 1e3,
        backoffFactor: Math.sqrt(2),
      },
      h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          a = b.call(this, a) || this;
          a.errors = c;
          return a;
        }
        return a;
      })(babelHelpers.wrapNativeSuper(Error));
    function a(a, c) {
      return b('regeneratorRuntime').async(
        function (d) {
          while (1)
            switch ((d.prev = d.next)) {
              case 0:
                c === void 0 && (c = g);
                d.prev = 1;
                d.next = 4;
                return b('regeneratorRuntime').awrap(i(a, c));
              case 4:
                return d.abrupt('return', d.sent);
              case 7:
                d.prev = 7;
                d.t0 = d['catch'](1);
                throw d.t0.errors[d.t0.errors.length - 1];
              case 10:
              case 'end':
                return d.stop();
            }
        },
        null,
        this,
        [[1, 7]],
      );
    }
    function i(a, c) {
      var d, e, f, g, i;
      return b('regeneratorRuntime').async(
        function (k) {
          while (1)
            switch ((k.prev = k.next)) {
              case 0:
                (d = 0),
                  (e = []),
                  (f = c.baseRetryInterval),
                  (g = c.backoffFactor);
              case 4:
                if (!(d <= c.maxRetries)) {
                  k.next = 20;
                  break;
                }
                k.prev = 5;
                k.next = 8;
                return b('regeneratorRuntime').awrap(a());
              case 8:
                i = k.sent;
                return k.abrupt('return', i);
              case 12:
                (k.prev = 12), (k.t0 = k['catch'](5)), e.push(k.t0);
              case 15:
                k.next = 17;
                return b('regeneratorRuntime').awrap(j(f * Math.pow(g, d)));
              case 17:
                ++d;
                k.next = 4;
                break;
              case 20:
                throw new h('Max call count exceeded', e);
              case 21:
              case 'end':
                return k.stop();
            }
        },
        null,
        this,
        [[5, 12]],
      );
    }
    function j(a) {
      return b('regeneratorRuntime').async(
        function (c) {
          while (1)
            switch ((c.prev = c.next)) {
              case 0:
                c.next = 2;
                return b('regeneratorRuntime').awrap(
                  new (b('Promise'))(function (b) {
                    return setTimeout(b, a);
                  }),
                );
              case 2:
              case 'end':
                return c.stop();
            }
        },
        null,
        this,
      );
    }
    f.callWithExponentialBackoff = a;
  },
  66,
);
__d(
  'DGWPinger',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$4 = b), (this.$5 = c), (this.$3 = !1);
      }
      var b = a.prototype;
      b.$6 = function () {
        var a = this;
        this.$3
          ? ((this.$3 = !1),
            this.$4(),
            (this.$2 = setTimeout(function () {
              a.$6();
            }, this.$1)))
          : this.$5();
      };
      b.reset = function () {
        var a = this;
        this.$3 = !0;
        this.$2 && (clearTimeout(this.$2), (this.$2 = null));
        this.$1 > 0 &&
          (this.$2 = setTimeout(function () {
            a.$6();
          }, this.$1));
      };
      b.cancel = function () {
        this.$2 && (clearTimeout(this.$2), (this.$2 = null));
      };
      return a;
    })();
    f.DGWPinger = a;
  },
  66,
);
__d(
  'DGWStreamGroupCallbacks',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('$InternalEnum')({
      TRANSPORT_SERVER_INTERNAL_ERROR: 0,
      TRANSPORT_ABNORMAL_CLOSURE: 1,
      TRANSPORT_GOING_AWAY: 2,
      TRANSPORT_UNKNOWN_ERROR: 3,
      TRANSPORT_KEEPALIVE_TIMEOUT: 4,
      TRANSPORT_UNAUTHORIZED: 5,
      TRANSPORT_REJECTED: 6,
      TRANSPORT_BAD_REQUEST: 7,
      TRANSPORT_DGW_SERVER_ERROR: 8,
    });
    c = (function () {
      function a() {}
      var b = a.prototype;
      b.onStreamGroupError = function () {};
      b.onStreamGroupMustDrain = function () {};
      b.onStreamGroupTransportClose = function () {};
      return a;
    })();
    f.DGWStreamGroupError = a;
    f.NoOpDGWStreamGroupCallbacks = c;
  },
  66,
);
__d(
  'DGWTransportEvents',
  ['DGWLoggingContext'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$3 = a;
      }
      var b = a.prototype;
      b.transportEstablished = function () {
        this.$3.logEvent(
          d('DGWLoggingContext').DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          'open',
        ),
          (this.$2 = Date.now());
      };
      b.transportEstablishmentPending = function () {
        (this.$1 = Date.now()),
          this.$3.logEvent(
            d('DGWLoggingContext').DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            'transportPending',
            null,
            !0,
          );
      };
      b.transportClosed = function (a, b) {
        (this.$4 = Date.now()),
          a
            ? (this.$3.bumpODSKey(
                d('DGWLoggingContext').DGWLoggingComponent
                  .WEBSOCKET_TRANSPORT_COMPONENT,
                'transport_close_graceful',
              ),
              this.$3.logEvent(
                d('DGWLoggingContext').DGWLoggingComponent
                  .WEBSOCKET_TRANSPORT_COMPONENT,
                'Transport closed gracefully',
                null,
                !0,
              ))
            : (this.$3.bumpODSKey(
                d('DGWLoggingContext').DGWLoggingComponent
                  .WEBSOCKET_TRANSPORT_COMPONENT,
                'transport_close_with_error',
              ),
              this.$3.logError(
                d('DGWLoggingContext').DGWLoggingComponent
                  .WEBSOCKET_TRANSPORT_COMPONENT,
                'Transport closed abnormally',
                b,
              ));
      };
      b.transportEstablishmentFailure = function (a) {
        this.$3.logError(
          d('DGWLoggingContext').DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          'WebSocket transport establishment failure',
          'WebSocket close code: ' + a,
        );
      };
      b.streamEstablishmentTimeout = function (a, b) {
        this.$3.logError(
          d('DGWLoggingContext').DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          'Grouped Stream establishment timeout',
          a,
          'streamId:' + b,
        );
      };
      b.streamEstablishmentPending = function (a) {
        this.$3.logEvent(
          d('DGWLoggingContext').DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          'Grouped Stream establishment pending',
          'streamId:' + a,
          !0,
        );
      };
      b.streamEstablishmentSuccess = function (a) {
        this.$3.logEvent(
          d('DGWLoggingContext').DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          'Grouped Stream establishment success',
          'streamId:' + a,
          !0,
        );
      };
      b.transportError = function (a, b, c) {
        this.$3.logError(
          d('DGWLoggingContext').DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          a,
          b,
          c,
        );
      };
      b.receivedFrameForInactiveStream = function (a, b, c) {
        this.$3.logWarn(
          d('DGWLoggingContext').DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          'Frame received for inactive stream',
          'frameType: ' + a + ', streamID: ' + b,
          c,
        );
      };
      b.ranOutOfStreamIds = function (a) {
        this.$3.logWarn(
          d('DGWLoggingContext').DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          'Hit max StreamId limit',
          'Hit max StreamId limit',
          a,
        );
      };
      return a;
    })();
    g.DGWTransportEvents = a;
  },
  98,
);
__d(
  'DGWWebSocketTransport',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      a = new WebSocket(a);
      a.binaryType = 'arraybuffer';
      a.onopen = function () {};
      a.onclose = function () {};
      a.onerror = function () {};
      return a;
    }
    f.getWebSocketConnection = a;
  },
  66,
);
__d(
  'DGWAckManager',
  ['DGWLoggingContext', 'Promise', 'regeneratorRuntime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function () {
      var b = a.prototype;
      b.stopTracking = function (a) {
        clearTimeout(this.$1), this.$3(a);
      };
      function a(a, b, c) {
        var d = this;
        this.$3 = c;
        this.sendId = a;
        this.$2 = b;
        this.handleAckReceived = function () {
          d.stopTracking(!0);
        };
        this.$1 = setTimeout(function () {
          d.stopTracking(!1);
        }, b);
      }
      return a;
    })();
    a = (function () {
      function a(a) {
        (this.$1 = new Map()), (this.$2 = a);
      }
      var c = a.prototype;
      c.waitForAck = function (a, c) {
        var e, f;
        return b('regeneratorRuntime').async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  e = this.$1;
                  g.prev = 1;
                  g.next = 4;
                  return b('regeneratorRuntime').awrap(
                    new (b('Promise'))(function (b, d) {
                      e.set(a, new h(a, c, b));
                    }),
                  );
                case 4:
                  f = g.sent;
                  f === !0
                    ? this.$2.logEvent(
                        d('DGWLoggingContext').DGWLoggingComponent
                          .ACK_MANAGER_COMPONENT,
                        'Received ACK',
                        'sendId: ' + a,
                        !0,
                      )
                    : this.$2.logWarn(
                        d('DGWLoggingContext').DGWLoggingComponent
                          .ACK_MANAGER_COMPONENT,
                        'ACK timeout',
                        'Request ' + a + ' timed out after ' + c + 'ms',
                      );
                  e['delete'](a);
                  return g.abrupt('return', f);
                case 10:
                  g.prev = 10;
                  g.t0 = g['catch'](1);
                  e['delete'](a);
                  throw g.t0;
                case 14:
                case 'end':
                  return g.stop();
              }
          },
          null,
          this,
          [[1, 10]],
        );
      };
      c.handleAckReceived = function (a) {
        var b = this.$1.get(a);
        if (b === void 0) {
          this.$2.logWarn(
            d('DGWLoggingContext').DGWLoggingComponent.ACK_MANAGER_COMPONENT,
            'untracked ACK',
            'Received ACK for ackId ' + a + ' which was not being tracked',
          );
          return;
        }
        b.handleAckReceived();
      };
      c.clearPendingAcks = function () {
        var a = this;
        this.$2.logEvent(
          d('DGWLoggingContext').DGWLoggingComponent.ACK_MANAGER_COMPONENT,
          'Clearing pending acks',
          'ACKs cleared size: ' + this.$1.size,
        );
        this.$1.forEach(function (b, c, e) {
          a.$2.logEvent(
            d('DGWLoggingContext').DGWLoggingComponent.ACK_MANAGER_COMPONENT,
            'Clearing pending ACK with ackId ' + b.sendId,
            null,
            !0,
          ),
            b.stopTracking(!1),
            e['delete'](c);
        });
      };
      return a;
    })();
    g.DGWAckManager = a;
  },
  98,
);
__d(
  'DGWStreamEvents',
  [],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, c) {
        (this.$4 = new Map()),
          (this.$5 = new Map()),
          (this.$6 = a),
          (this.$1 = b),
          c != null && (this.$8 = 'streamId:' + c + '::');
      }
      var b = a.prototype;
      b.streamEstablished = function () {
        this.$6.logEvent(this.$1, 'open', this.$8, !0),
          this.$6.bumpODSKey(this.$1, 'stream_establishment_success');
      };
      b.streamEstablishmentPending = function () {
        (this.$2 = Date.now()),
          this.$6.logEvent(this.$1, 'streamPending', this.$8, !0),
          this.$6.bumpODSKey(this.$1, 'stream_establishment_pending');
      };
      b.dataSent = function (a, b, c) {
        var d = c ? 'sendWithAckRequested' : 'sendWithoutAckRequested';
        this.$6.logEvent(
          this.$1,
          d,
          ((d = this.$8) != null ? d : '') +
            'sendId:' +
            a +
            ', payloadSize:' +
            b,
          !0,
        );
        this.$4.set(a, {
          ackRequested: c,
          payloadSize: b,
          sendTimestamp: Date.now(),
        });
      };
      b.ackReceived = function (a) {
        var b;
        this.$6.logEvent(
          this.$1,
          'AckReceived',
          ((b = this.$8) != null ? b : '') + 'sendId:' + a + '}',
          !0,
        );
        this.$6.bumpODSKey(this.$1, 'ack_received');
        b = this.$4.get(a);
        b != null && (b.ackReceivedTimestamp = Date.now());
      };
      b.ackSent = function (a) {
        var b;
        this.$6.bumpODSKey(this.$1, 'ack_sent');
        this.$6.logEvent(
          this.$1,
          'ACK sent',
          ((b = this.$8) != null ? b : '') + 'ackId: ' + a,
          !0,
        );
      };
      b.drainSent = function (a) {
        var b;
        this.$6.logEvent(
          this.$1,
          'Drain sent',
          ((b = this.$8) != null ? b : '') + 'drainReason: ' + a,
        );
      };
      b.dataReceived = function (a, b, c) {
        var d;
        this.$6.bumpODSKey(this.$1, 'data_received');
        this.$6.logEvent(
          this.$1,
          'Data received',
          ((d = this.$8) != null ? d : '') +
            'sendId: ' +
            ((d = c) != null ? d : 'null') +
            ', ackRequested: ' +
            b.toString() +
            ', payloadSize: ' +
            a,
          !0,
        );
        c != null &&
          this.$5.set(c, {
            ackRequested: b,
            payloadSize: a,
            receiveTimestamp: Date.now(),
          });
      };
      b.endOfDataReceived = function () {
        this.$6.bumpODSKey(this.$1, 'end_of_data_received'),
          this.$6.logEvent(this.$1, 'EndOfDataReceived', this.$8, !0);
      };
      b.endOfDataSent = function () {
        this.$6.bumpODSKey(this.$1, 'end_of_data_sent'),
          this.$6.logEvent(this.$1, 'EndOfDataSent', this.$8, !0);
      };
      b.streamClosed = function (a, b) {
        this.$7 = Date.now();
        var c = this.$9();
        if (a) {
          this.$6.bumpODSKey(this.$1, 'stream_closed_gracefully');
          this.$6.logEvent(
            this.$1,
            'Stream closed gracefully',
            '' + ((a = this.$8) != null ? a : '') + c,
          );
        } else {
          this.$6.bumpODSKey(this.$1, 'stream_closed_with_error');
          this.$6.logError(
            this.$1,
            'Stream closed abnormally',
            b,
            '' + ((a = this.$8) != null ? a : '') + c,
          );
        }
      };
      b.connectionEstablishmentFailure = function (a) {
        this.$6.logEvent(
          this.$1,
          'WebSocket connection establishment failure',
          'WebSocket close code: ' + a,
        );
      };
      b.streamEstablishmentFailure = function (a, b) {
        this.$6.logError(
          this.$1,
          'Failed to establish DGW Stream',
          'Last seen error: ' + a.toString(),
          '' + ((a = this.$8) != null ? a : '') + b,
        );
        this.$6.bumpODSKey(this.$1, 'stream_establishment_failure');
      };
      b.error = function (a, b) {
        b = { msg: b, state: this.$9() };
        this.$6.logError(this.$1, a, JSON.stringify(b), this.$8);
      };
      b.$9 = function () {
        var a = {
          currentNetworkCondition:
            window.navigator && window.navigator.onLine == !0,
          establishRequestTimestamp: this.$2,
          establishedTimestamp: this.$3,
          streamClosedTimestamp: this.$7,
          sendHistory: JSON.stringify(Array.from(this.$4.entries())),
          receiveHistory: JSON.stringify(Array.from(this.$5.entries())),
        };
        return JSON.stringify(a);
      };
      return a;
    })();
    g.DGWStreamEvents = a;
  },
  98,
);
__d(
  'GroupedStream',
  [
    'DGWAckManager',
    'DGWConstants',
    'DGWLoggingContext',
    'DGWStream',
    'DGWStreamEvents',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, c, e, f, g, h) {
        (this.$1 = a),
          (this.$3 = !1),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$6 = b),
          (this.$7 = c),
          (this.$8 = e),
          (this.$2 = g),
          (this.$9 = f),
          (this.$10 = new (d('DGWAckManager').DGWAckManager)(this.$9)),
          (this.$12 = new (d('DGWStreamEvents').DGWStreamEvents)(
            this.$9,
            d('DGWLoggingContext').DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            this.$1,
          )),
          (this.$11 = 0),
          (this.$13 = h);
      }
      var c = a.prototype;
      c.send = function (a, c) {
        var e, f, g;
        return b('regeneratorRuntime').async(
          function (h) {
            while (1)
              switch ((h.prev = h.next)) {
                case 0:
                  f = this.$11++ % d('DGWConstants').MAX_ACK_ID;
                  if (this.$14(a, !0, f)) {
                    h.next = 3;
                    break;
                  }
                  return h.abrupt('return', !1);
                case 3:
                  h.next = 5;
                  return b('regeneratorRuntime').awrap(
                    this.$10.waitForAck(
                      f,
                      (e = c) != null
                        ? e
                        : d('DGWConstants').DEFAULT_ACK_TIMEOUT_MS,
                    ),
                  );
                case 5:
                  g = h.sent;
                  return h.abrupt('return', g);
                case 7:
                case 'end':
                  return h.stop();
              }
          },
          null,
          this,
        );
      };
      c.sendAndForget = function (a) {
        return this.$14(a, !1);
      };
      c.close = function () {
        var a = this.$2.encodeEndOfData(this.$1);
        if (a == null) {
          this.$9.logError(
            d('DGWLoggingContext').DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            'Failed to encode EndOfData',
            'streamId: ' + this.$1,
          );
          return;
        }
        a = this.$8.send(a);
        if (!a) {
          this.$9.logError(
            d('DGWLoggingContext').DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            'Failed to send EndOfData',
            'streamId: ' +
              this.$1 +
              '. StreamGroupTransport not open during send',
          );
          return;
        }
        this.$12.endOfDataSent();
        this.$5 = !0;
        this.$4 && this.$15();
      };
      c.__sendDrain = function (a) {
        var b = d('DGWConstants').drainReasonToDrainReasonString(a);
        if (this.$5) return !1;
        a = this.$2.encodeDrain(a);
        if (a == null) return !1;
        this.$12.drainSent(b);
        b = this.$8.send(a);
        return b;
      };
      c.__transportCloseHook = function (a) {
        this.$13(),
          this.$10.clearPendingAcks(),
          a
            ? (this.$12.error('Received StreamError', 'StreamErrorType: ' + a),
              this.$6.onError(a))
            : this.$5 && this.$4
            ? this.$15()
            : (this.$12.streamClosed(
                !1,
                'Stream closed: ClosedLocally: ' +
                  this.$5.toString() +
                  ', EndOfDataReceived: ' +
                  this.$4.toString(),
              ),
              this.$6.onError(d('DGWStream').StreamError.PREMATURE_CLOSE));
      };
      c.$15 = function () {
        this.$13(),
          this.$12.streamClosed(!0, 'Graceful close'),
          this.$6.onClose(this);
      };
      c.__dataReceivedHook = function (a, b) {
        this.$12.dataReceived(a.length, b != null, b),
          b != null && this.$16(b),
          this.$6.onDataReceived(a);
      };
      c.__ackReceivedHook = function (a) {
        this.$12.ackReceived(a), this.$10.handleAckReceived(a);
      };
      c.__drainReceivedHook = function (a) {
        this.$3 === !1 && (this.$6.onStreamMustDrain(this, a), (this.$3 = !0));
      };
      c.__endOfDataHook = function () {
        this.$12.endOfDataReceived(),
          (this.$4 = !0),
          this.$5 ? this.$15() : this.$6.onServerHasFinishedSendingData(this);
      };
      c.$14 = function (a, b, c) {
        b === void 0 && (b = !1);
        c === void 0 && (c = 0);
        if (this.$5) {
          this.$9.logError(
            d('DGWLoggingContext').DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            'Failed to send data',
            'Stream closed locally',
          );
          return !1;
        }
        a = this.$2.encodeData(a, b, c, this.$1);
        if (a == null) return !1;
        var e = this.$8.send(a);
        if (!e) {
          this.$9.logError(
            d('DGWLoggingContext').DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            'Failed to send data',
            'ClosedLocally: ' + this.$5.toString(),
          );
          return !1;
        }
        this.$12.dataSent(c, a.length, b);
        return !0;
      };
      c.$16 = function (a) {
        var b = this.$2.encodeAck(a, this.$1);
        if (b == null) {
          this.$9.logError(
            d('DGWLoggingContext').DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            'Failed to encode ACK',
            'ackId: ' + a,
          );
          return !1;
        }
        b = this.$8.send(b);
        if (!b) {
          this.$9.logError(
            d('DGWLoggingContext').DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            'Failed to send ACK',
            'ackId: ' + a,
          );
          return !1;
        }
        this.$12.ackSent(a);
        return !0;
      };
      return a;
    })();
    g.GroupedStream = a;
  },
  98,
);
__d(
  'StreamIdGenerator',
  ['err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 65535;
    a = (function () {
      function a() {
        (this.$1 = new Set()), (this.$2 = 0), this.$1.add(this.$2);
      }
      var b = a.prototype;
      b.getNextStreamId = function () {
        var a;
        if (!this.streamIdAvailable())
          throw c('err')('Max number of stream IDs reached');
        if (this.$1.size === 0) return ++this.$2;
        a = (a = this.$1.values().next().value) != null ? a : 0;
        this.$1['delete'](a);
        return a;
      };
      b.putBackStreamId = function (a) {
        this.$1.add(a);
      };
      b.streamIdAvailable = function () {
        return this.$1.size > 0 || this.$2 < h;
      };
      return a;
    })();
    g.MAX_STREAM_ID = h;
    g.StreamIdGeneratorImpl = a;
  },
  98,
);
__d(
  'StreamGroupWebSocketTransport',
  [
    'DGWConstants',
    'DGWExponentialBackoff',
    'DGWLoggingContext',
    'DGWPinger',
    'DGWStream',
    'DGWStreamGroupCallbacks',
    'DGWTransportEvents',
    'DGWUtils',
    'DGWWebSocketTransport',
    'GroupedStream',
    'Promise',
    'StreamIdGenerator',
    'err',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a, b, c, e, f) {
      var g = this;
      this.groupedStream = a;
      this.$1 = setTimeout(function () {
        c(d('DGWStream').StreamError.ESTABLISHMENT_TIMEOUT);
      }, e);
      this.handleEstablishFrameReceived = function () {
        clearTimeout(g.$1), b(g.groupedStream);
      };
      this.abortStream = function (a) {
        f(), c(a);
      };
    };
    a = (function () {
      function a(b, e, f, g, h, i, j, k) {
        var l = this;
        this.$14 = h;
        this.$16 = this.__getStreamIdGenerator();
        this.$5 = new Map();
        this.$6 = new Map();
        this.$7 = g.keepAliveMs;
        this.$8 = !1;
        this.$3 = !0;
        this.$4 = !1;
        this.$12 = f;
        this.$10 = new TextEncoder();
        this.$11 = new TextDecoder();
        this.$13 = g;
        h = {
          onDataReceived: function () {},
          handleAckReceived: function () {},
          receivedDrainSignal: function (a) {
            l.$13.streamGroupCallbacks.onStreamGroupMustDrain(a),
              l.$5.forEach(function (b) {
                b.__drainReceivedHook(a);
              });
          },
          onGroupedStreamDataReceived: function (a, b, c) {
            if (l.$5.has(a)) {
              var d = l.$5.get(a);
              d == null ? void 0 : d.__dataReceivedHook(b, c);
            } else {
              l.$12.receivedFrameForInactiveStream(
                'Data',
                a,
                'sendAckID: ' + ((d = c) != null ? d : 'null'),
              );
            }
          },
          onGroupedStreamAckReceived: function (a, b) {
            if (l.$5.has(a)) {
              var c = l.$5.get(a);
              c == null ? void 0 : c.__ackReceivedHook(b);
            } else {
              l.$12.receivedFrameForInactiveStream(
                'ACK',
                a,
                'ackId: ' + ((c = b) != null ? c : 'null'),
              );
            }
          },
          onGroupedStreamEndOfDataReceived: function (a) {
            if (l.$5.has(a)) {
              var b = l.$5.get(a);
              b == null ? void 0 : b.__endOfDataHook();
            } else l.$12.receivedFrameForInactiveStream('EndOfData', a);
          },
          onGroupedStreamEstablishStreamReceived: function (a, b) {
            if (l.$6.has(a)) {
              var c = l.$6.get(a);
              l.$6['delete'](a);
              b = JSON.parse(l.$11.decode(b));
              (b.code === void 0 || b.code !== 200) &&
                (c == null
                  ? void 0
                  : c.abortStream(d('DGWStream').StreamError.ABNORMAL_CLOSURE));
              c == null ? void 0 : c.handleEstablishFrameReceived();
            } else
              l.$12.receivedFrameForInactiveStream(
                'EstablishStream',
                a,
                'EstablishStream received for non-inflight stream',
              );
          },
          onPingReceived: function () {
            var a = l.$2.encodePing();
            if (a == null) return;
            l.send(a);
          },
          onPongReceived: function () {},
        };
        this.$2 = new (d('DGWUtils').DGWCodec)(i, h, g.dgwVersion);
        if (g.enableFirstStreamOnWsHandshake) {
          if (j === void 0) throw c('err')('Missing grouped stream options');
          if (k === void 0) throw c('err')('Missing grouped stream callbacks');
          var m = this.$16.getNextStreamId();
          f = this.createEstablishStreamFrame(m, j);
          i = d('DGWUtils').DGWUtils.constructConnectUrl({
            appId: g.appId,
            appVersion: g.appVersion,
            authType: g.authType,
            dgwVersion: g.dgwVersion,
            fbId: g.fbId,
            tier: g.tier,
            loggingId: (i = g.loggingId) != null ? i : void 0,
            headers: a.__prefixAppHeaders(g.headers),
            endpoint: g.connectEndpoint,
            serviceId: g.serviceId,
            regionHint: (h = g.regionHint) != null ? h : void 0,
            establishStreamFrame: f,
          });
          this.$1 = e(i);
          if (
            !i.includes(
              d('DGWConstants').HEADER_CONSTANTS
                .HEADER_ESTABLISH_STREAM_FRAME_BASE64,
            )
          )
            return;
          this.$15 = this.waitForEstablishStream(
            m,
            k,
            j,
            new (d('DGWLoggingContext').DGWLoggingContext)(
              this.$13.dgwVersion,
              j.loggingId,
              this.$13.serviceId,
              this.$13.fbId,
              this.$13.loggingId,
              j.disableFalcoLogging,
            ),
            function (a) {
              l.$5.set(m, a);
            },
            function () {
              l.$16.putBackStreamId(m);
            },
          );
        } else this.$1 = e(b);
      }
      var e = a.prototype;
      e.send = function (a) {
        try {
          this.$1.send(a);
          return !0;
        } catch (a) {
          this.$12.transportError(
            'Failed to send over transport',
            'readyState: ' + this.$1.readyState,
            a.toString(),
          );
          return !1;
        }
      };
      e.close = function () {
        this.$1.close(d('DGWConstants').WebsocketCloseCodes.GRACEFUL_CLOSE);
      };
      e.abort = function (a, b, c, d) {
        (this.$8 = !0),
          this.$12.transportClosed(!1, d),
          this.$5.forEach(function (a) {
            a.__transportCloseHook(b);
          }),
          this.$6.forEach(function (a) {
            a.abortStream(b);
          }),
          this.$13.streamGroupCallbacks.onStreamGroupError(a),
          this.$5.clear(),
          this.$6.clear(),
          this.$1.close(c);
      };
      a.getTransportWithInitialStream = function (c, e, f, g, h) {
        var i, j, k, l;
        return b('regeneratorRuntime').async(
          function (m) {
            while (1)
              switch ((m.prev = m.next)) {
                case 0:
                  m.next = 2;
                  return b('regeneratorRuntime').awrap(
                    d('DGWUtils').DGWCodec.initialize(),
                  );
                case 2:
                  i = new (d('DGWTransportEvents').DGWTransportEvents)(g);
                  i.transportEstablishmentPending();
                  j = function () {
                    return a.$17('', f, i, h, g, c, e);
                  };
                  m.prev = 5;
                  m.next = 8;
                  return b('regeneratorRuntime').awrap(
                    d('DGWExponentialBackoff').callWithExponentialBackoff(j),
                  );
                case 8:
                  k = m.sent;
                  l =
                    k.$15 != void 0
                      ? k.$15
                      : k.establishGroupedStream(
                          e,
                          c,
                          new (d('DGWLoggingContext').DGWLoggingContext)(
                            f.dgwVersion,
                            c.loggingId,
                            f.serviceId,
                            f.fbId,
                            f.loggingId,
                            c.disableFalcoLogging,
                          ),
                        );
                  return m.abrupt('return', { transport: k, streamPromise: l });
                case 13:
                  m.prev = 13;
                  m.t0 = m['catch'](5);
                  throw m.t0;
                case 16:
                case 'end':
                  return m.stop();
              }
          },
          null,
          this,
          [[5, 13]],
        );
      };
      a.getTransport_DEPRECATED = function (c, e, f, g) {
        var h, i;
        return b('regeneratorRuntime').async(
          function (j) {
            while (1)
              switch ((j.prev = j.next)) {
                case 0:
                  j.next = 2;
                  return b('regeneratorRuntime').awrap(
                    d('DGWUtils').DGWCodec.initialize(),
                  );
                case 2:
                  h = new (d('DGWTransportEvents').DGWTransportEvents)(f);
                  h.transportEstablishmentPending();
                  i = function () {
                    return a.$17(c, e, h, g, f);
                  };
                  j.prev = 5;
                  j.next = 8;
                  return b('regeneratorRuntime').awrap(
                    d('DGWExponentialBackoff').callWithExponentialBackoff(i),
                  );
                case 8:
                  return j.abrupt('return', j.sent);
                case 11:
                  j.prev = 11;
                  j.t0 = j['catch'](5);
                  throw j.t0;
                case 14:
                case 'end':
                  return j.stop();
              }
          },
          null,
          this,
          [[5, 11]],
        );
      };
      e.establishGroupedStream = function (a, c, d) {
        var e = this,
          f,
          g,
          h,
          i,
          j;
        return b('regeneratorRuntime').async(
          function (k) {
            while (1)
              switch ((k.prev = k.next)) {
                case 0:
                  f = this.getStreamId();
                  g = this.createEstablishStreamFrame(f, c);
                  h = this.waitForEstablishStream(
                    f,
                    a,
                    c,
                    d,
                    function (a) {
                      e.$5.set(f, a);
                    },
                    function () {
                      e.$16.putBackStreamId(f);
                    },
                  );
                  if (this.send(g)) {
                    k.next = 7;
                    break;
                  }
                  i = new Error(
                    'Websocket connection closed before stream established',
                  );
                  i.stack;
                  throw i;
                case 7:
                  k.next = 9;
                  return b('regeneratorRuntime').awrap(h);
                case 9:
                  j = k.sent;
                  return k.abrupt('return', j);
                case 11:
                case 'end':
                  return k.stop();
              }
          },
          null,
          this,
        );
      };
      a.__prefixAppHeaders = function (a) {
        return Object.keys(a).reduce(function (b, c) {
          b['' + d('DGWConstants').HEADER_CONSTANTS.APPHEADER_PREFIX + c] =
            a[c];
          return b;
        }, {});
      };
      e.waitForEstablishStream = function (a, c, d, e, f, g) {
        var i = this,
          j,
          k;
        return b('regeneratorRuntime').async(
          function (l) {
            while (1)
              switch ((l.prev = l.next)) {
                case 0:
                  this.$12.streamEstablishmentPending(a);
                  j = this.__createGroupedStream(a, c, d, e);
                  l.prev = 2;
                  l.next = 5;
                  return b('regeneratorRuntime').awrap(
                    new (b('Promise'))(function (b, c) {
                      i.$6.set(
                        a,
                        new h(j, b, c, 3e4, function () {
                          i.streamEndCallback(a);
                        }),
                      );
                    }),
                  );
                case 5:
                  k = l.sent;
                  f(j);
                  this.$12.streamEstablishmentSuccess(a);
                  return l.abrupt('return', k);
                case 11:
                  l.prev = 11;
                  l.t0 = l['catch'](2);
                  g();
                  this.$12.streamEstablishmentTimeout(
                    'Stream establishment timeout',
                    a,
                  );
                  throw l.t0;
                case 16:
                case 'end':
                  return l.stop();
              }
          },
          null,
          this,
          [[2, 11]],
        );
      };
      a.$17 = function (c, e, f, g, h, i, j) {
        var k, l;
        return b('regeneratorRuntime').async(
          function (m) {
            while (1)
              switch ((m.prev = m.next)) {
                case 0:
                  k = new a(
                    c,
                    d('DGWWebSocketTransport').getWebSocketConnection,
                    f,
                    e,
                    g,
                    h,
                    i,
                    j,
                  );
                  k.$1.onmessage = a.$18(k);
                  k.$1.onopen = function () {
                    f.transportEstablished(),
                      (k.$3 = !1),
                      k.$7 != null &&
                        (k.$9 = new (d('DGWPinger').DGWPinger)(
                          k.$7,
                          function () {
                            k.$19();
                          },
                          function () {
                            k.abort(
                              d('DGWStreamGroupCallbacks').DGWStreamGroupError
                                .TRANSPORT_KEEPALIVE_TIMEOUT,
                              d('DGWStream').StreamError.KEEPALIVE_TIMEOUT,
                              d('DGWConstants').WebsocketCloseCodes
                                .KEEPALIVE_TIMEOUT,
                              'Aborting transport because of keepalive timeout',
                            );
                          },
                        ));
                  };
                  k.$1.onerror = function () {};
                  k.$1.onclose = a.$20(k);
                  m.next = 7;
                  return b('regeneratorRuntime').awrap(
                    a.getTransportPromise(k),
                  );
                case 7:
                  l = m.sent;
                  return m.abrupt('return', l);
                case 9:
                case 'end':
                  return m.stop();
              }
          },
          null,
          this,
        );
      };
      a.getTransportPromise = function (a) {
        var c;
        return b('regeneratorRuntime').async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  e.next = 2;
                  return b('regeneratorRuntime').awrap(
                    new (b('Promise'))(function (b, c) {
                      var e = a.$1.onerror,
                        f = a.$1.onopen;
                      a.$1.onerror = function () {
                        e(), c(d('DGWStream').StreamError.ESTABLISHMENT_ERROR);
                      };
                      a.$1.onopen = function () {
                        f(), b(a);
                      };
                    }),
                  );
                case 2:
                  c = e.sent;
                  return e.abrupt('return', c);
                case 4:
                case 'end':
                  return e.stop();
              }
          },
          null,
          this,
        );
      };
      a.$18 = function (a) {
        return function (b) {
          var c;
          (c = a.$9) == null ? void 0 : c.reset();
          if (!(b.data instanceof ArrayBuffer)) {
            a.$12.transportError(
              'Incorrect Data Protocol',
              'Received ' + typeof b.data + ' instead of ArrayBuffer',
            );
            return;
          }
          a.$2.append(new Uint8Array(b.data));
          a.$2.processData();
        };
      };
      a.$20 = function (a) {
        return function (b) {
          var c;
          (c = a.$9) == null ? void 0 : c.cancel();
          if (a.$8 === !0 || a.$4) return;
          if (a.$3 === !0) {
            a.$12.transportEstablishmentFailure(b.code);
            a.$5.clear();
            return;
          }
          a.$14();
          a.$3 = !0;
          if (b.code !== d('DGWConstants').WebsocketCloseCodes.GRACEFUL_CLOSE) {
            a.$12.transportClosed(
              !1,
              'Websocket connection failure with code ' + b.code,
            );
            c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
              .TRANSPORT_UNKNOWN_ERROR;
            var e = d('DGWStream').StreamError.UNKNOWN_ERROR;
            switch (b.code) {
              case d('DGWConstants').WebsocketCloseCodes.NORMAL_CLOSURE:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_ABNORMAL_CLOSURE;
                e = d('DGWStream').StreamError.ABNORMAL_CLOSURE;
                break;
              case d('DGWConstants').WebsocketCloseCodes.ABNORMAL_CLOSURE:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_ABNORMAL_CLOSURE;
                e = d('DGWStream').StreamError.ABNORMAL_CLOSURE;
                break;
              case d('DGWConstants').WebsocketCloseCodes.SERVER_INTERNAL_ERROR:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_SERVER_INTERNAL_ERROR;
                e = d('DGWStream').StreamError.SERVER_INTERNAL_ERROR;
                break;
              case d('DGWConstants').WebsocketCloseCodes.GOING_AWAY:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_GOING_AWAY;
                e = d('DGWStream').StreamError.GOING_AWAY;
                break;
              case d('DGWConstants').WebsocketCloseCodes.UNAUTHORIZED:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_UNAUTHORIZED;
                e = d('DGWStream').StreamError.UNAUTHORIZED;
                break;
              case d('DGWConstants').WebsocketCloseCodes.REJECTED:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_REJECTED;
                e = d('DGWStream').StreamError.REJECTED;
                break;
              case d('DGWConstants').WebsocketCloseCodes.BAD_REQUEST:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_BAD_REQUEST;
                e = d('DGWStream').StreamError.BAD_REQUEST;
                break;
              case d('DGWConstants').WebsocketCloseCodes.DGW_SERVER_ERROR:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_SERVER_INTERNAL_ERROR;
                e = d('DGWStream').StreamError.DGW_SERVER_ERROR;
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_DGW_SERVER_ERROR;
                break;
              default:
                c = d('DGWStreamGroupCallbacks').DGWStreamGroupError
                  .TRANSPORT_UNKNOWN_ERROR;
                e = d('DGWStream').StreamError.UNKNOWN_ERROR;
                break;
            }
            a.$13.streamGroupCallbacks.onStreamGroupError(c);
            a.$5.forEach(function (a) {
              a.__transportCloseHook(e);
            });
            a.$6.forEach(function (a) {
              a.abortStream(e);
            });
          } else
            a.$12.transportClosed(!0, ''),
              a.$13.streamGroupCallbacks.onStreamGroupTransportClose(),
              a.$5.forEach(function (a) {
                a.__transportCloseHook();
              }),
              a.$6.forEach(function (a) {
                a.abortStream(
                  d('DGWStream').StreamError
                    .TRANSPORT_CLOSED_BEFORE_STREAM_INIT,
                );
              });
          a.$5.clear();
          a.$6.clear();
        };
      };
      e.$19 = function () {
        var a = this.$2.encodePing();
        if (a == null) throw c('err')('Failed to encode Ping Frame');
        this.send(a);
      };
      e.isClosedLocally = function () {
        return this.$3 || this.$8 || this.$4;
      };
      e.streamEndCallback = function (a) {
        this.$5['delete'](a),
          this.$6['delete'](a),
          this.$16.putBackStreamId(a),
          this.$5.size === 0 &&
            this.$6.size === 0 &&
            (this.$13.streamGroupCallbacks.onStreamGroupTransportClose(),
            (this.$4 = !0),
            this.close());
      };
      e.canCreateGroupedStream = function () {
        return this.$16.streamIdAvailable();
      };
      e.createEstablishStreamFrame = function (b, d) {
        d = this.$2.encodeEstablishStream(
          b,
          new Uint8Array(
            this.$10.encode(
              JSON.stringify(a.__prefixAppHeaders(d.groupedStreamHeaders)),
            ),
          ),
        );
        if (d == null) {
          this.$16.putBackStreamId(b);
          throw c('err')('Failed to encode EstablishStreamFrame');
        }
        return d;
      };
      e.getStreamId = function () {
        try {
          return this.$16.getNextStreamId();
        } catch (a) {
          this.$12.ranOutOfStreamIds(
            'inFlightGroupedStreamSize: ' +
              this.$6.size +
              ' groupedStreamSize: ' +
              this.$5.size,
          );
          throw a;
        }
      };
      e.__createGroupedStream = function (a, b, c, e) {
        var f = this;
        return new (d('GroupedStream').GroupedStream)(
          a,
          b,
          c,
          this,
          e,
          this.$2,
          function () {
            f.streamEndCallback(a);
          },
        );
      };
      e.__getStreamIdGenerator = function () {
        return new (d('StreamIdGenerator').StreamIdGeneratorImpl)();
      };
      return a;
    })();
    g.StreamGroupWebSocketTransport = a;
  },
  98,
);
__d(
  'StreamGroup',
  [
    'DGWConstants',
    'DGWLoggingContext',
    'DGWUtils',
    'StreamGroupWebSocketTransport',
    'qex',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, e, f, g, h, i, j, k) {
        this.$2 = k;
        this.$1 = k.getNewStreamGroupId();
        k = (k = i.overrideUrl) != null ? k : g;
        this.$6 = null;
        this.$3 = {
          appId: a,
          appVersion: b,
          authType: e,
          dgwVersion: f,
          headers: i.streamGroupAppHeaders,
          tier:
            (g = i.serviceTier) != null
              ? g
              : d('DGWConstants').DEFAULT_SERVICE_TIER,
          connectEndpoint: k,
          fbId: h,
          loggingId: i.loggingId,
          serviceId: i.serviceId,
          streamGroupCallbacks: j,
          keepAliveMs: i.keepAliveMs,
          regionHint: i.regionHint,
          enableFirstStreamOnWsHandshake: c('qex')._('633') === !0,
        };
        this.$4 = i;
        this.$5 = new (d('DGWLoggingContext').DGWLoggingContext)(
          this.$3.dgwVersion,
          null,
          this.$3.serviceId,
          this.$3.fbId,
          this.$4.loggingId,
        );
      }
      var e = a.prototype;
      e.establishStream = function (a, c) {
        var e = this,
          f,
          g,
          h,
          i,
          j;
        return b('regeneratorRuntime').async(
          function (k) {
            while (1)
              switch ((k.prev = k.next)) {
                case 0:
                  if (!(this.$2.containsStreamGroup(this.$1) === !1)) {
                    k.next = 23;
                    break;
                  }
                  if (this.$3.enableFirstStreamOnWsHandshake) {
                    k.next = 18;
                    break;
                  }
                  h = d('DGWUtils').DGWUtils.constructConnectUrl({
                    appId: this.$3.appId,
                    appVersion: this.$3.appVersion,
                    authType: this.$3.authType,
                    dgwVersion: this.$3.dgwVersion,
                    fbId: this.$3.fbId,
                    headers: babelHelpers['extends']({}, this.$3.headers),
                    loggingId: (f = this.$3.loggingId) != null ? f : void 0,
                    tier: this.$3.tier,
                    serviceId: this.$3.serviceId,
                    endpoint: this.$3.connectEndpoint,
                    regionHint: (g = this.$3.regionHint) != null ? g : void 0,
                  });
                  this.$6 =
                    this.$6 ||
                    d(
                      'StreamGroupWebSocketTransport',
                    ).StreamGroupWebSocketTransport.getTransport_DEPRECATED(
                      h,
                      this.$3,
                      this.$5,
                      function () {
                        e.$2.removeStreamGroupAndTransport(e.$1);
                      },
                    );
                  k.prev = 4;
                  k.next = 7;
                  return b('regeneratorRuntime').awrap(this.$6);
                case 7:
                  i = k.sent;
                  this.$6 = null;
                  k.next = 15;
                  break;
                case 11:
                  k.prev = 11;
                  k.t0 = k['catch'](4);
                  this.$6 = null;
                  throw k.t0;
                case 15:
                  this.$2.containsStreamGroup(this.$1) ||
                    this.$2.setStreamGroupAndTransport(this.$1, i);
                  k.next = 23;
                  break;
                case 18:
                  k.next = 20;
                  return b('regeneratorRuntime').awrap(
                    d(
                      'StreamGroupWebSocketTransport',
                    ).StreamGroupWebSocketTransport.getTransportWithInitialStream(
                      a,
                      c,
                      this.$3,
                      this.$5,
                      function () {
                        e.$2.removeStreamGroupAndTransport(e.$1);
                      },
                    ),
                  );
                case 20:
                  j = k.sent;
                  this.$2.setStreamGroupAndTransport(this.$1, j.transport);
                  return k.abrupt('return', j.streamPromise);
                case 23:
                  return k.abrupt(
                    'return',
                    this.establishStreamWithTransport(a, c),
                  );
                case 24:
                case 'end':
                  return k.stop();
              }
          },
          null,
          this,
          [[4, 11]],
        );
      };
      e.establishStreamWithTransport = function (a, c) {
        var e, f, g;
        return b('regeneratorRuntime').async(
          function (h) {
            while (1)
              switch ((h.prev = h.next)) {
                case 0:
                  f = a.loggingId;
                  this.$5.logEvent(
                    d('DGWLoggingContext').DGWLoggingComponent
                      .STREAM_GROUP_COMPONENT,
                    'establishing Stream loggingId: ' +
                      ((e = f) != null ? e : ''),
                    null,
                    !0,
                  );
                  h.next = 4;
                  return b('regeneratorRuntime').awrap(
                    this.$2
                      .getStreamGroupTransport(this.$1)
                      .establishGroupedStream(
                        c,
                        a,
                        new (d('DGWLoggingContext').DGWLoggingContext)(
                          this.$3.dgwVersion,
                          f,
                          this.$3.serviceId,
                          this.$3.fbId,
                          this.$3.loggingId,
                          a.disableFalcoLogging,
                        ),
                      ),
                  );
                case 4:
                  g = h.sent;
                  return h.abrupt('return', g);
                case 6:
                case 'end':
                  return h.stop();
              }
          },
          null,
          this,
        );
      };
      e.canCreateGroupedStream = function () {
        if (this.$2.containsStreamGroup(this.$1) === !1) return !0;
        else {
          var a = this.$2.getStreamGroupTransport(this.$1);
          return a.canCreateGroupedStream();
        }
      };
      return a;
    })();
    g.StreamGroup = a;
  },
  98,
);
__d(
  'StreamGroupRegistry',
  ['Random', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        (this.$1 = new Map()), (this.$2 = new Set());
      }
      var b = a.prototype;
      b.setStreamGroupAndTransport = function (a, b) {
        this.$1.set(a, b);
      };
      b.containsStreamGroup = function (a) {
        return this.$1.has(a);
      };
      b.removeStreamGroupAndTransport = function (a) {
        this.$1['delete'](a);
      };
      b.getStreamGroupTransport = function (a) {
        a = this.$1.get(a);
        if (a == void 0) throw c('err')('No stream group transport');
        return a;
      };
      b.getNewStreamGroupId = function () {
        var a = d('Random').uint32();
        while (this.$2.has(a)) a = d('Random').uint32();
        this.$2.add(a);
        return a;
      };
      return a;
    })();
    g.StreamGroupRegistry = a;
  },
  98,
);
__d(
  'RawDGWClient',
  ['CurrentUser', 'StreamGroup', 'StreamGroupRegistry', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = a.appId,
          c = a.appVersion,
          e = a.authType,
          f = a.dgwVersion,
          g = a.endpoint;
        a = a.fbId;
        this.$1 = b;
        this.$2 = c;
        this.$3 = e;
        this.$4 = f;
        this.$5 = g;
        this.$6 = a;
        this.$7 = new (d('StreamGroupRegistry').StreamGroupRegistry)();
      }
      var b = a.prototype;
      b.createStreamGroup = function (a, b) {
        return new (d('StreamGroup').StreamGroup)(
          this.$1,
          this.$2,
          this.$3,
          this.$4,
          this.$5,
          this.$6,
          b,
          a,
          this.$7,
        );
      };
      b.handleUserChecks = function () {
        if (!c('CurrentUser').isLoggedInNow())
          throw c('err')('DGWClientError: User is not logged in');
      };
      return a;
    })();
    g.RawDGWClient = a;
  },
  98,
);
__d(
  'DGWClient',
  ['DGWAuth', 'DGWEnvUtil', 'DGWWebConfig', 'RawDGWClient', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new (d('RawDGWClient').RawDGWClient)({
      appId: c('DGWWebConfig').appId,
      appVersion: c('DGWWebConfig').appVersion,
      authType: d('DGWAuth').fromStringToDGWAuth(
        c('DGWEnvUtil').getDGWAuthType(),
      ),
      dgwVersion: c('DGWEnvUtil').getDGWVersion(),
      endpoint: c('DGWEnvUtil').getDGWEndpoint(),
      fbId: c('DGWWebConfig').fbId,
    });
    function a() {
      if (c('DGWEnvUtil').isDGWEnvCompatible()) return h;
      else throw c('err')('unsupported_environment_retry_with_mqtt');
    }
    g['default'] = a;
  },
  98,
);
__d(
  'DGWStreamGroupHandler',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.onStreamGroupError = function (a) {
        this.$1(a);
      };
      b.onStreamGroupMustDrain = function (a) {
        this.$2(a);
      };
      b.onStreamGroupTransportClose = function () {
        this.$3();
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'DGWStreamFactory',
  ['DGWClient', 'DGWStreamGroupHandler', 'gkx', 'uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'realtime',
      i = 1e4,
      j = null;
    a = (function () {
      function a() {
        (this.$3 = 0),
          (this.$1 = null),
          c('gkx')('2819') && (this.$2 = c('uuid')());
      }
      a.get = function () {
        j == null && (j = new a());
        return j;
      };
      var b = a.prototype;
      b.getStreamGroupLoggingId = function () {
        return this.$2;
      };
      b.guessStreamGroupPriorStreamCount = function () {
        return this.$3;
      };
      b.establishStream = function (a, b, d) {
        var e = this;
        if (this.$1 == null || !this.$1.canCreateGroupedStream()) {
          var f = {
            serviceId: h,
            disableFalcoLogging: d.disableFalcoLogging,
            streamGroupAppHeaders: { 'stream-group': 'group1' },
          };
          d.overrideUrl != null && (f.overrideUrl = d.overrideUrl);
          c('gkx')('871') && (f.keepAliveMs = i);
          c('gkx')('2819')
            ? ((this.$2 = c('uuid')()), (f.loggingId = this.$2))
            : (this.$2 = null);
          this.$3 = 0;
          this.$1 = c('DGWClient')().createStreamGroup(
            new (c('DGWStreamGroupHandler'))(
              function () {
                e.$1 = null;
              },
              function () {
                e.$1 = null;
              },
              function () {
                e.$1 = null;
              },
            ),
            f,
          );
        }
        this.$3++;
        return this.$1.establishStream(
          {
            loggingId: d.loggingId,
            disableFalcoLogging: d.disableFalcoLogging,
            groupedStreamHeaders: a,
          },
          b,
        );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'DGWRequestStreamClient',
  ['DGWRequestStreamRef', 'DGWStreamFactory', 'Promise', 'cr:2046346'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a != null ? a : c('DGWStreamFactory').get();
      }
      var d = a.prototype;
      d.createStream = function (a, d, e, f, g) {
        b('cr:2046346') != null && b('cr:2046346').startPulsarTest();
        return b('Promise').resolve(
          new (c('DGWRequestStreamRef'))(a, d, f, g, e, this.$1),
        );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigConstants',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = 1e3;
    b = ', ';
    c = {
      SAME: 'same',
      NULL: 'null',
      NNULL: 'nnull',
      CATCH_ALL: 'catch_all',
      EQ: 'eq',
      NEQ: 'neq',
      LT: 'lt',
      LTE: 'lte',
      GT: 'gt',
      GTE: 'gte',
      COR: 'cor',
      CONTAINS: 'contains',
      REGEX: 'regex',
      IN: 'in',
      NIN: 'nin',
    };
    d = {
      DENSE: 'dense',
      MULTI_OUTPUT_RESOLVED: 'multi-output-resolved',
      TABLE: 'table',
    };
    e = [];
    var g = [],
      h = [],
      i = {
        BAD_BOOLEAN_FORMAT: 'Bad boolean format',
        BAD_CONFIG: 'Bad config',
        BAD_CONTEXT_IDENTIFIER: 'Bad context identifier',
        BAD_CONTEXT_VALUE: 'Bad context value',
        BAD_MONITORED_CONTEXTS: 'Bad monitored contexts',
        BAD_NUMBER_FORMAT: 'Bad number format',
        BAD_OUTPUT_NAME: 'Bad output name',
        BAD_OUTPUT_TYPE: 'Bad output type',
        BAD_VALUE_ORDER: 'Bad values order',
        DUPLICATE_OUTPUT_NAME: 'Duplicate output name',
        ILLEGAL_BOOLEAN_STRATEGY: 'Illegal boolean strategy',
        ILLEGAL_BUCKET_VALUES: 'Illegal bucket values',
        ILLEGAL_NUMERIC_STRATEGY: 'Illegal numeric strategy',
        ILLEGAL_STRING_STRATEGY: 'Illegal string strategy',
        INVALID_BOOLEAN: 'Invalid boolean',
        INVALID_FLOAT: 'Invalid float',
        INVALID_INTEGER: 'Invalid integer',
        INVALID_STRING: 'Invalid string',
        INVALID_VALUE_TYPE: 'Invalid value type',
        MISMATCH_NUMBER_OF_VALUES: 'Mismatching number of values',
        MISSING_BUCKETS: 'Missing buckets',
        MISSING_BUCKET_MATCH: 'Missing bucket match',
        MISSING_BUCKET_NAME: 'Missing bucket name',
        MISSING_BUCKET_STRATEGY: 'Missing bucket strategy',
        MISSING_CONTEXT_IN_CONFIG: 'Missing context in config',
        MISSING_DEFAULT_VALUE: 'Missing default value',
        MISSING_OUTPUTS_DEFINITION: 'Missing outputs field definition',
        MISSING_RESULTS: 'Missing results',
        MISSING_TABLE: 'Missing table',
        MISSING_TABLE_ITEM_BUCKET: 'Missing table item bucket',
        MISSING_TABLE_ITEM_VALUES: 'Missing table item values',
        MISSING_VECTOR: 'Missing vector',
        REGEX_SYNTAX_ERROR: 'Regex syntax error',
        REQUESTED_PARAM_NOT_FOUND: 'Requested param not found',
        RESULTS_VECTOR_SIZE_MISMATCH: 'Results vector size mismatch',
        UNDECLARED_OUTPUT_PARAM: 'Undeclared output param',
        UNKNOWN_BUCKET_DEFINITION: 'Unknown bucket definition',
        UNKNOWN_CONFIG_TYPE: 'Unknown config type',
        UNSUPPORTED_CONFIG_VERSION: 'Unsupported config version',
      },
      j = 10,
      k = ', ',
      l = { BOOL: 'BOOL', FLOAT: 'FLOAT', INT: 'INT', STRING: 'STRING' };
    f.ANALYTICS_SAMPLE_RATE = a;
    f.BUCKET_DELIMITER = b;
    f.CONTEXT_BUCKET_STRATEGY = c;
    f.CONFIG_TYPE = d;
    f.EMPTY_RESOLVED_CONTEXTS = e;
    f.EMPTY_RESOLVED_MONITORS = g;
    f.EMPTY_RESULT_PARAMS = h;
    f.ERROR = i;
    f.JSON_SUB_SAMPLE_RATE = j;
    f.LIST_DELIMITER = k;
    f.TYPE = l;
  },
  66,
);
__d(
  'ContextualConfigResolvedContextsUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = function (a) {
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e = e.bucketIndex;
        if (e == void 0) break;
        b.push(e);
      }
      return b;
    };
    b = function (a) {
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e = e.bucketName;
        if (e === void 0) break;
        b.push(e);
      }
      return b;
    };
    var g = function (a) {
      return a.name;
    };
    c = function (a) {
      return a.map(g);
    };
    d = function (a) {
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e = e.value;
        if (e === void 0) break;
        b.push(e);
      }
      return b;
    };
    f.getBucketIndices = a;
    f.getBucketNames = b;
    f.getContextNames = c;
    f.getContextValues = d;
  },
  66,
);
__d(
  'ContextualConfigCollateExposureData',
  ['ContextualConfigConstants', 'ContextualConfigResolvedContextsUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = ['cfg_ver_timestamp', 'policy_id', 'version', 'sample_rate'],
      i = function (a) {
        return a.join(d('ContextualConfigConstants').LIST_DELIMITER);
      },
      j = function (a, b) {
        for (var c = 0; c < h.length; c++) {
          var d = h[c];
          b[d] != null && (a[d] = b[d]);
        }
        b.name && (a.config_name = b.name);
      },
      k = function (a, b) {
        var c = b[0],
          e = b[1],
          f = b[2];
        b = b[3];
        c != null && (a.exception = c.message);
        a.result =
          i(
            e.map(function (a) {
              return a.value;
            }),
          ) || 'INVALID';
        a.context = i(
          d('ContextualConfigResolvedContextsUtils').getContextNames(f),
        );
        a.context_value = i(
          d('ContextualConfigResolvedContextsUtils').getContextValues(f),
        );
        a.bucket_name = i(
          d('ContextualConfigResolvedContextsUtils').getBucketNames(f),
        );
        a.monitor = i(
          d('ContextualConfigResolvedContextsUtils').getContextNames(b),
        );
        a.monitor_value = i(
          d('ContextualConfigResolvedContextsUtils').getContextValues(b),
        );
      };
    function a(a, b, c) {
      var e = {
        sample_rate: d('ContextualConfigConstants').ANALYTICS_SAMPLE_RATE,
      };
      j(e, a);
      k(e, b);
      c && (e.config_contents = JSON.stringify(a));
      return e;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigExposureEvent',
  ['Random'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, c) {
        (this.$2 = a),
          (this.$4 = d('Random').random() < 1 / a.sample_rate),
          (this.$3 = b),
          (this.$1 = c);
      }
      var b = a.prototype;
      b.getData = function () {
        return this.$2;
      };
      b.log = function (a) {
        var b = this.$2,
          c = this.$3,
          d = this.$4;
        a && c(b);
        d && this.$1(b);
        return this;
      };
      b.isSampled = function () {
        return this.$4;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigExposureLoggerFactory',
  ['ContextualConfigExposureEvent'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function () {
      function a(a, b) {
        (this.$2 = a), (this.$1 = b);
      }
      var b = a.prototype;
      b.createEvent = function (a) {
        var b = this.$1,
          d = this.$2;
        a = new (c('ContextualConfigExposureEvent'))(a, d, b);
        return a;
      };
      return a;
    })();
    function a(a, b) {
      return new h(a, b);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigExposureLogger',
  ['ContextualConfigExposureLoggerFactory', 'MarauderLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = function (a) {};
    b = function (a) {
      d('MarauderLogger').log('contextual_config_exposure', '', a);
    };
    e = c('ContextualConfigExposureLoggerFactory')(a, b);
    g['default'] = e;
  },
  98,
);
__d(
  'ContextualConfigAssert',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      if (a === !1) throw new Error(b);
    }
    f['default'] = a;
  },
  66,
);
__d(
  'ContextualConfigValidators',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = function (a) {
      return Array.isArray(a);
    };
    b = function (a) {
      return typeof a === 'boolean';
    };
    c = function (a) {
      return a != null;
    };
    e = function (a) {
      return function (b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      };
    };
    f = function (a) {
      return i(a) && a % 1 === 0;
    };
    var h = function (a) {
        return j(a) && a.length > 0;
      },
      i = function (a) {
        return (
          typeof a === 'number' &&
          !isNaN(a) &&
          a !== Infinity &&
          a !== -Infinity
        );
      },
      j = function (a) {
        return typeof a === 'string';
      },
      k = function (a) {
        switch (a) {
          case d('ContextualConfigConstants').TYPE.BOOL:
          case d('ContextualConfigConstants').TYPE.FLOAT:
          case d('ContextualConfigConstants').TYPE.INT:
          case d('ContextualConfigConstants').TYPE.STRING:
            return !0;
          default:
            return !1;
        }
      };
    g.isArray = a;
    g.isBoolean = b;
    g.isDefined = c;
    g.isKey = e;
    g.isInteger = f;
    g.isNonEmptyString = h;
    g.isNumber = i;
    g.isString = j;
    g.isType = k;
  },
  98,
);
__d(
  'ContextualConfigParseBoolean',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      switch (a.toUpperCase()) {
        case 'TRUE':
          return !0;
        case 'FALSE':
          return !1;
        default:
          throw new Error(
            d('ContextualConfigConstants').ERROR.BAD_BOOLEAN_FORMAT,
          );
      }
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParsePredBoolean',
  ['ContextualConfigConstants', 'ContextualConfigParseBoolean'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var e;
      switch (b) {
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.SAME:
          var f = c('ContextualConfigParseBoolean')(a);
          e = function (a) {
            return a === f;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.NULL:
          e = function (a) {
            return a == null;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.NNULL:
          e = function (a) {
            return a != null;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          e = function (a) {
            return !0;
          };
          break;
        default:
          throw new Error(
            d('ContextualConfigConstants').ERROR.ILLEGAL_BOOLEAN_STRATEGY,
          );
      }
      return function (a) {
        return e(a);
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseFloat',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = /^[-\+]?([1-9]\d*|0)(\.\d+)?$/,
      i = function (a) {
        return h.test(a);
      };
    function a(a) {
      c('ContextualConfigAssert')(
        i(a),
        d('ContextualConfigConstants').ERROR.BAD_NUMBER_FORMAT,
      );
      a = parseFloat(a);
      c('ContextualConfigAssert')(
        d('ContextualConfigValidators').isNumber(a),
        d('ContextualConfigConstants').ERROR.BAD_NUMBER_FORMAT,
      );
      return a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseInteger',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = /^[-\+]?([1-9]\d*|0)$/,
      i = function (a) {
        return h.test(a);
      };
    function a(a) {
      c('ContextualConfigAssert')(
        i(a),
        d('ContextualConfigConstants').ERROR.BAD_NUMBER_FORMAT,
      );
      a = parseInt(a, 10);
      c('ContextualConfigAssert')(
        d('ContextualConfigValidators').isNumber(a),
        d('ContextualConfigConstants').ERROR.BAD_NUMBER_FORMAT,
      );
      return a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigPredAssertions',
  ['ContextualConfigAssert', 'ContextualConfigConstants'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = function (a) {
      return c('ContextualConfigAssert')(
        a > 0,
        d('ContextualConfigConstants').ERROR.MISMATCH_NUMBER_OF_VALUES,
      );
    };
    b = function (a, b) {
      return c('ContextualConfigAssert')(
        a === b,
        d('ContextualConfigConstants').ERROR.MISMATCH_NUMBER_OF_VALUES,
      );
    };
    e = function (a, b) {
      return c('ContextualConfigAssert')(
        a < b,
        d('ContextualConfigConstants').ERROR.BAD_VALUE_ORDER,
      );
    };
    g.assertHasValues = a;
    g.assertNumberOfValues = b;
    g.assertValueOrder = e;
  },
  98,
);
__d(
  'ContextualConfigParsePredNumeric',
  [
    'ContextualConfigConstants',
    'ContextualConfigParseFloat',
    'ContextualConfigParseInteger',
    'ContextualConfigPredAssertions',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e, f) {
      var g = e.map(
          f
            ? c('ContextualConfigParseInteger')
            : c('ContextualConfigParseFloat'),
        ),
        h;
      switch (b) {
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.SAME:
          var i = f
            ? c('ContextualConfigParseInteger')(a)
            : c('ContextualConfigParseFloat')(a);
          h = function (a) {
            return f && !d('ContextualConfigValidators').isInteger(a)
              ? !1
              : a === i;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.NULL:
          h = function (a) {
            return a == null;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.NNULL:
          h = function (a) {
            return a != null;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          h = function (a) {
            return !0;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.COR:
          d('ContextualConfigPredAssertions').assertNumberOfValues(g.length, 2);
          d('ContextualConfigPredAssertions').assertValueOrder(g[0], g[1]);
          h = function (a) {
            if (typeof a !== 'number') return !1;
            return f && !d('ContextualConfigValidators').isInteger(a)
              ? !1
              : a >= g[0] && a < g[1];
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.LT:
          d('ContextualConfigPredAssertions').assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== 'number') return !1;
            return f && !d('ContextualConfigValidators').isInteger(a)
              ? !1
              : a < g[0];
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.LTE:
          d('ContextualConfigPredAssertions').assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== 'number') return !1;
            return f && !d('ContextualConfigValidators').isInteger(a)
              ? !1
              : a <= g[0];
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.EQ:
          d('ContextualConfigPredAssertions').assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== 'number') return !1;
            return f && !d('ContextualConfigValidators').isInteger(a)
              ? !1
              : a === g[0];
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.NEQ:
          d('ContextualConfigPredAssertions').assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== 'number') return !1;
            return f && !d('ContextualConfigValidators').isInteger(a)
              ? !1
              : a !== g[0];
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.GT:
          d('ContextualConfigPredAssertions').assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== 'number') return !1;
            return f && !d('ContextualConfigValidators').isInteger(a)
              ? !1
              : a > g[0];
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.GTE:
          d('ContextualConfigPredAssertions').assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== 'number') return !1;
            return f && !d('ContextualConfigValidators').isInteger(a)
              ? !1
              : a >= g[0];
          };
          break;
        default:
          throw new Error(
            d('ContextualConfigConstants').ERROR.ILLEGAL_NUMERIC_STRATEGY,
          );
      }
      return function (a) {
        return h(a);
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseRegExp',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = /^\/(.+)\/(.*)$/;
    function a(a) {
      try {
        var b = a.match(h);
        if (b != null) return new RegExp(b[1], b[2]);
        else return new RegExp(a);
      } catch (a) {
        throw new Error(
          d('ContextualConfigConstants').ERROR.REGEX_SYNTAX_ERROR,
        );
      }
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParsePredString',
  [
    'ContextualConfigConstants',
    'ContextualConfigParseRegExp',
    'ContextualConfigPredAssertions',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        if (typeof a !== 'string')
          throw new Error(
            d('ContextualConfigConstants').ERROR.INVALID_VALUE_TYPE,
          );
        return a;
      },
      i = function (a) {
        var b = [];
        for (
          var a = a,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          b.push(h(e));
        }
        return b;
      };
    function a(a, b, e) {
      var f = i(e),
        g;
      switch (b) {
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.SAME:
          g = function (b) {
            return typeof b !== 'string' ? !1 : b === a;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.NULL:
          g = function (a) {
            return a == null;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.NNULL:
          g = function (a) {
            return a != null;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          g = function (a) {
            return !0;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.IN:
          d('ContextualConfigPredAssertions').assertHasValues(f.length);
          g = function (a) {
            return typeof a !== 'string' ? !1 : f.indexOf(a) !== -1;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.NIN:
          d('ContextualConfigPredAssertions').assertHasValues(f.length);
          g = function (a) {
            return typeof a !== 'string' ? !1 : f.indexOf(a) === -1;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.CONTAINS:
          d('ContextualConfigPredAssertions').assertNumberOfValues(f.length, 1);
          g = function (a) {
            return typeof a !== 'string' ? !1 : a.indexOf(f[0]) !== -1;
          };
          break;
        case d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY.REGEX:
          d('ContextualConfigPredAssertions').assertNumberOfValues(f.length, 1);
          var h = c('ContextualConfigParseRegExp')(f[0]);
          g = function (a) {
            return typeof a !== 'string' ? !1 : h.test(a);
          };
          break;
        default:
          throw new Error(
            d('ContextualConfigConstants').ERROR.ILLEGAL_STRING_STRATEGY,
          );
      }
      return function (a) {
        return g(a);
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseContextBuckets',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParsePredBoolean',
    'ContextualConfigParsePredNumeric',
    'ContextualConfigParsePredString',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isDefined(a),
          d('ContextualConfigConstants').ERROR.MISSING_BUCKETS,
        );
      },
      i = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a),
          d('ContextualConfigConstants').ERROR.MISSING_BUCKETS,
        );
      },
      j = d('ContextualConfigValidators').isKey(
        d('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY,
      ),
      k = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isString(a) && j(a.toUpperCase()),
          d('ContextualConfigConstants').ERROR.MISSING_BUCKET_STRATEGY,
        );
      },
      l = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a),
          d('ContextualConfigConstants').ERROR.ILLEGAL_BUCKET_VALUES,
        );
      },
      m = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isNonEmptyString(a),
          d('ContextualConfigConstants').ERROR.MISSING_BUCKET_NAME,
        );
      },
      n = function (a, b) {
        var e = b.name;
        m(e);
        var f = b.strategy;
        k(f);
        b = b.values || [];
        l(b);
        switch (a) {
          case d('ContextualConfigConstants').TYPE.BOOL:
            return c('ContextualConfigParsePredBoolean')(e, f);
          case d('ContextualConfigConstants').TYPE.FLOAT:
            return c('ContextualConfigParsePredNumeric')(e, f, b, !1);
          case d('ContextualConfigConstants').TYPE.INT:
            return c('ContextualConfigParsePredNumeric')(e, f, b, !0);
          case d('ContextualConfigConstants').TYPE.STRING:
            return c('ContextualConfigParsePredString')(e, f, b);
          default:
            throw new Error(
              d('ContextualConfigConstants').ERROR.UNKNOWN_BUCKET_DEFINITION,
            );
        }
      },
      o = function (a, b) {
        h(b);
        var c = b.name;
        m(c);
        return { name: c, pred: n(a, b) };
      };
    function a(a, b) {
      i(b);
      return b.map(function (b) {
        return o(a, b);
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseContexts',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseContextBuckets',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isDefined(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      i = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a) && a.length > 0,
          d('ContextualConfigConstants').ERROR.MISSING_CONTEXT_IN_CONFIG,
        );
      },
      j = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isNonEmptyString(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      k = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isType(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      l = function (a) {
        h(a);
        var b = a.name,
          d = a.type;
        a = a.buckets;
        j(b);
        k(d);
        return {
          name: b,
          type: d,
          buckets: c('ContextualConfigParseContextBuckets')(d, a),
        };
      };
    function a(a) {
      i(a);
      return a.map(l);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigIsEqualParams',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      if (a.length != b.length) return !1;
      for (var c = 0; c < a.length; c += 1) {
        var d = a[c],
          e = b[c];
        if (d.name !== e.name || d.type !== e.type) return !1;
      }
      return !0;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'ContextualConfigParseResultParamValue',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseBoolean',
    'ContextualConfigParseFloat',
    'ContextualConfigParseInteger',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
      return c('ContextualConfigAssert')(
        d('ContextualConfigValidators').isString(a),
        d('ContextualConfigConstants').ERROR.INVALID_STRING,
      );
    };
    function a(a, b) {
      h(b);
      switch (a) {
        case d('ContextualConfigConstants').TYPE.BOOL:
          return c('ContextualConfigParseBoolean')(b);
        case d('ContextualConfigConstants').TYPE.FLOAT:
          return c('ContextualConfigParseFloat')(b);
        case d('ContextualConfigConstants').TYPE.INT:
          return c('ContextualConfigParseInteger')(b);
        case d('ContextualConfigConstants').TYPE.STRING:
          return b;
        default:
          throw new Error(
            d('ContextualConfigConstants').ERROR.INVALID_VALUE_TYPE,
          );
      }
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseResultParams',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseResultParamValue',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a),
          d('ContextualConfigConstants').ERROR.MISSING_RESULTS,
        );
      },
      i = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isDefined(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_VALUE,
        );
      },
      j = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isNonEmptyString(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_VALUE,
        );
      },
      k = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isType(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_VALUE,
        );
      },
      l = function (a, b) {
        for (
          var a = a,
            c = Array.isArray(a),
            e = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (c) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (f.name === b) return f.type;
        }
        throw new Error(
          d('ContextualConfigConstants').ERROR.UNDECLARED_OUTPUT_PARAM,
        );
      },
      m = function (a) {
        return function (b) {
          i(b);
          var d = b.name;
          j(d);
          var e = l(a, d);
          k(e);
          b = c('ContextualConfigParseResultParamValue')(e, b.value);
          return { name: d, type: e, value: b };
        };
      };
    function a(a, b) {
      h(b);
      return b.map(m(a));
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseDenseResultParams',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigIsEqualParams',
    'ContextualConfigParseResultParams',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a, b) {
      return c('ContextualConfigAssert')(
        c('ContextualConfigIsEqualParams')(a, b),
        d('ContextualConfigConstants').ERROR.RESULTS_VECTOR_SIZE_MISMATCH,
      );
    };
    function a(a, b) {
      b = c('ContextualConfigParseResultParams')(
        a,
        b.map(function (b, c) {
          return { name: a[c].name, value: b };
        }),
      );
      h(a, b);
      return b;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseDenseDefaults',
  ['ContextualConfigConstants', 'ContextualConfigParseDenseResultParams'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      try {
        return c('ContextualConfigParseDenseResultParams')(a, b);
      } catch (a) {
        throw new Error(
          d('ContextualConfigConstants').ERROR.MISSING_DEFAULT_VALUE,
        );
      }
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseMonitors',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isDefined(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      i = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a),
          d('ContextualConfigConstants').ERROR.BAD_MONITORED_CONTEXTS,
        );
      },
      j = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isNonEmptyString(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      k = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isType(a),
          d('ContextualConfigConstants').ERROR.BAD_CONTEXT_IDENTIFIER,
        );
      },
      l = function (a) {
        h(a);
        var b = a.name;
        a = a.type;
        j(b);
        k(a);
        return { name: b, type: a };
      };
    function a(a) {
      i(a);
      return a.map(l);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseOutputParams',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    var h = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a),
          d('ContextualConfigConstants').ERROR.MISSING_OUTPUTS_DEFINITION,
        );
      },
      i = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isType(a),
          d('ContextualConfigConstants').ERROR.BAD_OUTPUT_TYPE,
        );
      },
      j = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isNonEmptyString(a),
          d('ContextualConfigConstants').ERROR.BAD_OUTPUT_NAME,
        );
      },
      k = function (a) {
        return c('ContextualConfigAssert')(
          l(a),
          d('ContextualConfigConstants').ERROR.DUPLICATE_OUTPUT_NAME,
        );
      },
      l = function (a) {
        var b = {};
        for (
          var a = a,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          if (b[e.name]) return !1;
          b[e.name] = !0;
        }
        return !0;
      },
      m = function (a) {
        j(a.name);
        i(a.type);
        return a;
      };
    function a(a) {
      h(a);
      a = a.map(m);
      k(a);
      return a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseVector',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseResultParamValue',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a),
          d('ContextualConfigConstants').ERROR.MISSING_VECTOR,
        );
      },
      i = function (a, b) {
        return c('ContextualConfigAssert')(
          a === b,
          d('ContextualConfigConstants').ERROR.RESULTS_VECTOR_SIZE_MISMATCH,
        );
      },
      j = function (a, b) {
        i(a.length, b.length);
        for (var d = 0; d < a.length; d += 1) {
          var e = a[d].type,
            f = b[d];
          c('ContextualConfigParseResultParamValue')(e, f);
        }
      },
      k = function (a) {
        return a.reduce(function (a, b) {
          b = b.buckets;
          return a * b.length;
        }, 1);
      };
    function a(a, b, c) {
      h(c);
      b = k(b);
      var d = a.length;
      i(b * d, c.length);
      for (var e = 0; e < b; e += 1) {
        var f = e * d;
        j(a, c.slice(f, f + d));
      }
      return c;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigResolveContexts',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a, b) {
      for (var c = 0; c < a.length; c += 1) {
        var d = a[c];
        try {
          if (d.pred(b)) return [d.name, c];
        } catch (a) {
          return null;
        }
      }
      return null;
    };
    function a(a, b, c) {
      var e = null;
      a = a.map(function (a) {
        var f = a.name,
          g = { name: f };
        if (e != null) return g;
        var i;
        c[f] != null ? (i = c[f]) : b[f] != null ? (i = b[f]()) : (i = null);
        g.value = i;
        if (a.buckets != null) {
          f = h(a.buckets, i);
          if (f == null) {
            e = new Error(
              d('ContextualConfigConstants').ERROR.MISSING_BUCKET_MATCH,
            );
            return g;
          }
          a = f[0];
          i = f[1];
          g.bucketName = a;
          g.bucketIndex = i;
        }
        return g;
      });
      return [e, a];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'DenseContextualConfig',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseContexts',
    'ContextualConfigParseDenseDefaults',
    'ContextualConfigParseDenseResultParams',
    'ContextualConfigParseMonitors',
    'ContextualConfigParseOutputParams',
    'ContextualConfigParseVector',
    'ContextualConfigResolveContexts',
    'ContextualConfigResolvedContextsUtils',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isDefined(a),
          d('ContextualConfigConstants').ERROR.BAD_CONFIG,
        );
      },
      i = function (a) {
        var b = [],
          c = 1;
        for (var d = a.length - 1; d >= 0; d -= 1)
          b.push(c), (c *= a[d].buckets.length);
        return b.reverse();
      },
      j = function (a, b, d, e) {
        try {
          b = b.slice(d, d + a.length);
          return [null, c('ContextualConfigParseDenseResultParams')(a, b)];
        } catch (a) {
          return [a, e];
        }
      },
      k = function (a, b, d) {
        try {
          d = d.reduce(function (b, d, e) {
            c('ContextualConfigAssert')(
              e < a.length,
              'Auxillery index out of range.',
            );
            return b + a[e] * d;
          }, 0);
          return [null, d * b];
        } catch (a) {
          return [a, -1];
        }
      };
    a = (function () {
      function a(a, b) {
        h(a);
        this.globalContextProviders = babelHelpers['extends']({}, b);
        b = c('ContextualConfigParseOutputParams')(a.outputs);
        var d = c('ContextualConfigParseContexts')(a.contexts);
        this.aux = i(d);
        this.contexts = d;
        this.defaults = c('ContextualConfigParseDenseDefaults')(
          b,
          a.vectorDefaults,
        );
        this.monitors =
          a.monitors != null
            ? c('ContextualConfigParseMonitors')(a.monitors)
            : [];
        this.outputs = b;
        this.vector = c('ContextualConfigParseVector')(b, d, a.vector);
      }
      var b = a.prototype;
      b.resolve = function (a) {
        try {
          return this.unsafeResolve(a);
        } catch (a) {
          return [
            a,
            this.defaults,
            d('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS,
            d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
          ];
        }
      };
      b.unsafeResolve = function (a) {
        var b = this.aux,
          e = this.globalContextProviders,
          f = this.contexts,
          g = this.defaults,
          h = this.monitors,
          i = this.outputs,
          l = this.vector;
        f = c('ContextualConfigResolveContexts')(f, e, a);
        var m = f[0];
        f = f[1];
        if (m != null)
          return [
            m,
            g,
            f,
            d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
          ];
        m = k(
          b,
          i.length,
          d('ContextualConfigResolvedContextsUtils').getBucketIndices(f),
        );
        b = m[0];
        m = m[1];
        if (b != null)
          return [
            b,
            g,
            f,
            d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
          ];
        b = j(i, l, m, g);
        i = b[0];
        l = b[1];
        if (i != null)
          return [
            i,
            l,
            f,
            d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
          ];
        m = c('ContextualConfigResolveContexts')(h, e, a);
        g = m[0];
        b = m[1];
        return g != null
          ? [g, l, f, d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS]
          : [null, l, f, b];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'MultiOutputResolvedContextualConfig',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseMonitors',
    'ContextualConfigParseOutputParams',
    'ContextualConfigParseResultParams',
    'ContextualConfigResolveContexts',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
      return c('ContextualConfigAssert')(
        d('ContextualConfigValidators').isDefined(a),
        d('ContextualConfigConstants').ERROR.BAD_CONFIG,
      );
    };
    a = (function () {
      function a(a, b) {
        h(a);
        this.globalContextProviders = babelHelpers['extends']({}, b);
        b = c('ContextualConfigParseOutputParams')(a.outputs);
        this.monitors =
          a.monitors != null
            ? c('ContextualConfigParseMonitors')(a.monitors)
            : [];
        this.values = c('ContextualConfigParseResultParams')(b, a.values);
      }
      var b = a.prototype;
      b.resolve = function (a) {
        try {
          return this.unsafeResolve(a);
        } catch (a) {
          return [
            a,
            this.values,
            d('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS,
            d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
          ];
        }
      };
      b.unsafeResolve = function (a) {
        var b = this.globalContextProviders,
          e = this.monitors,
          f = this.values;
        e = c('ContextualConfigResolveContexts')(e, b, a);
        b = e[0];
        a = e[1];
        return b != null
          ? [
              b,
              f,
              d('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS,
              d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
            ]
          : [
              null,
              f,
              d('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS,
              a,
            ];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigMergePartialResultParams',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = {};
      for (
        var b = b,
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
        c[f.name] = f;
      }
      f = [];
      for (
        e = a,
          d = Array.isArray(e),
          b = 0,
          e = d
            ? e
            : e[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        if (d) {
          if (b >= e.length) break;
          a = e[b++];
        } else {
          b = e.next();
          if (b.done) break;
          a = b.value;
        }
        a = a;
        var g = c[a.name];
        f.push(g != null && g.name === a.name && g.type === a.type ? g : a);
      }
      return f;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'ContextualConfigParseDefaults',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigIsEqualParams',
    'ContextualConfigParseResultParams',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a, b) {
      return c('ContextualConfigAssert')(
        c('ContextualConfigIsEqualParams')(a, b),
        d('ContextualConfigConstants').ERROR.MISSING_DEFAULT_VALUE,
      );
    };
    function a(a, b) {
      b = c('ContextualConfigParseResultParams')(a, b);
      h(a, b);
      return b;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseTable',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseResultParams',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a),
          d('ContextualConfigConstants').ERROR.MISSING_TABLE,
        );
      },
      i = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isDefined(a),
          d('ContextualConfigConstants').ERROR.MISSING_TABLE,
        );
      },
      j = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isNonEmptyString(a),
          d('ContextualConfigConstants').ERROR.MISSING_TABLE_ITEM_BUCKET,
        );
      },
      k = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isArray(a),
          d('ContextualConfigConstants').ERROR.MISSING_TABLE_ITEM_VALUES,
        );
      },
      l = function (a, b) {
        i(b);
        var d = b.bucket;
        b = b.values;
        j(d);
        k(b);
        return {
          bucket: d,
          values: c('ContextualConfigParseResultParams')(a, b),
        };
      };
    function a(a, b) {
      h(b);
      return b.reduce(function (b, c) {
        c = l(a, c);
        b[c.bucket] = c.values;
        return b;
      }, {});
    }
    g['default'] = a;
  },
  98,
);
__d(
  'TableContextualConfig',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigMergePartialResultParams',
    'ContextualConfigParseContexts',
    'ContextualConfigParseDefaults',
    'ContextualConfigParseMonitors',
    'ContextualConfigParseOutputParams',
    'ContextualConfigParseTable',
    'ContextualConfigResolveContexts',
    'ContextualConfigResolvedContextsUtils',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = [],
      i = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isDefined(a),
          d('ContextualConfigConstants').ERROR.BAD_CONFIG,
        );
      };
    a = (function () {
      function a(a, b) {
        i(a);
        this.globalContextProviders = babelHelpers['extends']({}, b);
        b = c('ContextualConfigParseOutputParams')(a.outputs);
        this.contexts = c('ContextualConfigParseContexts')(a.contexts);
        this.defaults = c('ContextualConfigParseDefaults')(b, a.defaults);
        this.monitors =
          a.monitors != null
            ? c('ContextualConfigParseMonitors')(a.monitors)
            : [];
        this.table = c('ContextualConfigParseTable')(b, a.table);
      }
      var b = a.prototype;
      b.resolve = function (a) {
        try {
          return this.unsafeResolve(a);
        } catch (a) {
          return [
            a,
            this.defaults,
            d('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS,
            d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
          ];
        }
      };
      b.unsafeResolve = function (a) {
        var b = this.globalContextProviders,
          e = this.contexts,
          f = this.defaults,
          g = this.monitors,
          i = this.table;
        e = c('ContextualConfigResolveContexts')(e, b, a);
        var j = e[0];
        e = e[1];
        if (j != null) return [j, f, e, []];
        j = d('ContextualConfigResolvedContextsUtils')
          .getBucketNames(e)
          .join(d('ContextualConfigConstants').BUCKET_DELIMITER);
        i = i[j] || h;
        j = c('ContextualConfigMergePartialResultParams')(f, i);
        f = c('ContextualConfigResolveContexts')(g, b, a);
        i = f[0];
        g = f[1];
        return i != null ? [i, j, e, []] : [null, j, e, g];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigParseConfig',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
    'DenseContextualConfig',
    'MultiOutputResolvedContextualConfig',
    'TableContextualConfig',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = [1],
      i = function (a) {
        return c('ContextualConfigAssert')(
          d('ContextualConfigValidators').isDefined(a) &&
            d('ContextualConfigValidators').isDefined(a.version),
          d('ContextualConfigConstants').ERROR.BAD_CONFIG,
        );
      },
      j = function (a) {
        return c('ContextualConfigAssert')(
          h.indexOf(a) !== -1,
          d('ContextualConfigConstants').ERROR.UNSUPPORTED_CONFIG_VERSION,
        );
      };
    function a(a, b) {
      i(a);
      j(a.version);
      switch (a.cctype) {
        case d('ContextualConfigConstants').CONFIG_TYPE.DENSE:
          return new (c('DenseContextualConfig'))(a, b);
        case d('ContextualConfigConstants').CONFIG_TYPE.MULTI_OUTPUT_RESOLVED:
          return new (c('MultiOutputResolvedContextualConfig'))(a, b);
        case d('ContextualConfigConstants').CONFIG_TYPE.TABLE:
          return new (c('TableContextualConfig'))(a, b);
        default:
          throw new Error(
            d('ContextualConfigConstants').ERROR.UNKNOWN_CONFIG_TYPE,
          );
      }
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfigWarn',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {}
    f['default'] = a;
  },
  66,
);
__d(
  'ContextualConfigResult',
  ['ContextualConfigConstants', 'ContextualConfigWarn'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        (this.$1 = a.reduce(function (a, b) {
          var c = b.name;
          b = b.value;
          a[c] = b;
          return a;
        }, {})),
          (this.$2 = a);
      }
      var b = a.prototype;
      b.get = function (a, b) {
        try {
          a = this.$1[a];
          if (typeof a !== typeof b) {
            c('ContextualConfigWarn')(
              d('ContextualConfigConstants').ERROR.REQUESTED_PARAM_NOT_FOUND,
            );
            return b;
          }
          return a;
        } catch (a) {
          c('ContextualConfigWarn')(a.message);
          return b;
        }
      };
      b.getParams = function () {
        return this.$2;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ErrorContextualConfig',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.error = a;
      }
      var b = a.prototype;
      b.resolve = function (a) {
        return [
          this.error,
          d('ContextualConfigConstants').EMPTY_RESULT_PARAMS,
          d('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS,
          d('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
        ];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ContextualConfig',
  [
    'ContextualConfigCollateExposureData',
    'ContextualConfigConstants',
    'ContextualConfigExposureLogger',
    'ContextualConfigParseConfig',
    'ContextualConfigResult',
    'ErrorContextualConfig',
    'Random',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1 / d('ContextualConfigConstants').JSON_SUB_SAMPLE_RATE,
      i = 1;
    a = (function () {
      function a(a, b) {
        b === void 0 && (b = {}),
          (this.isDebugLoggingEnabled = !1),
          (this.$3 = !1),
          (this.$4 = a),
          (this.$2 = b);
      }
      var b = a.prototype;
      b.$5 = function () {
        if (this.$1) return this.$1;
        var a = this.$2,
          b = this.$4;
        try {
          b = c('ContextualConfigParseConfig')(b, a);
        } catch (a) {
          b = new (c('ErrorContextualConfig'))(a);
        }
        this.$1 = b;
        return b;
      };
      b.$6 = function (a) {
        var b = this.isDebugLoggingEnabled,
          e = this.$4,
          f = this.$3;
        f = !f && d('Random').random() < h;
        f && (this.$3 = !0);
        e = c('ContextualConfigCollateExposureData')(e, a, f);
        a = c('ContextualConfigExposureLogger').createEvent(e);
        a.log(b);
      };
      b.resolve = function (a) {
        a === void 0 && (a = {});
        var b = this.$1 || this.$5();
        b = b.resolve(a);
        this.$6(b);
        return new (c('ContextualConfigResult'))(b[i]);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'SkywalkerUtils',
  ['CurrentLocale', 'RTISubscriptionManagerConfig'],
  function (a, b, c, d, e, f) {
    a = {
      patchContext: function (a) {
        a = a || {};
        a.locale = b('CurrentLocale').get();
        if (b('RTISubscriptionManagerConfig').assimilator) {
          var c = b('RTISubscriptionManagerConfig').assimilator;
          c.tierType != null && (a.tierType = c.tierType);
          c.sandboxIP != null &&
            c.sandboxPort != null &&
            c.sandboxHostname != null &&
            ((a.sandboxIP = c.sandboxIP),
            (a.sandboxPort = c.sandboxPort),
            (a.sandboxHostname = c.sandboxHostname));
        }
        return a;
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'MqttLongPollingHookCollection',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = new Set();
      }
      var b = a.prototype;
      b.addHook = function (a) {
        this.$1.add(a);
      };
      b.removeHook = function (a) {
        this.$1['delete'](a);
      };
      b.onPollRequestSent = function () {
        this.$1.forEach(function (a) {
          a.onPollRequestSent();
        });
      };
      b.onPollRequestSuccess = function () {
        this.$1.forEach(function (a) {
          a.onPollRequestSuccess();
        });
      };
      b.onPollResponse = function (a) {
        this.$1.forEach(function (b) {
          b.onPollResponse(a);
        });
      };
      b.onPollFinish = function () {
        this.$1.forEach(function (a) {
          a.onPollFinish();
        });
      };
      b.onPollRequestFailed = function (a) {
        this.$1.forEach(function (b) {
          b.onPollRequestFailed(a);
        });
      };
      b.onPollShutdownAbort = function () {
        this.$1.forEach(function (a) {
          a.onPollShutdownAbort();
        });
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'PromiseResult',
  ['Promise'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {
        var a = this;
        this.promise = new (b('Promise'))(function (b, c) {
          (a.$1 = b), (a.$2 = c);
        });
      }
      var c = a.prototype;
      c.resolve = function (a) {
        this.$1(a);
      };
      c.reject = function (a) {
        this.$2(a);
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'MqttFetchClient',
  [
    'MqttEnv',
    'MqttProtocolCodec',
    'MqttUserName',
    'MqttUtils',
    'Promise',
    'PromiseResult',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'fetch_pull',
      i = 'fetch_pull_finish',
      j = 'fetch_',
      k = 6e4,
      l = 'action',
      m = 'chunked',
      n = 'send',
      o = 'true',
      p = 5,
      q = 20,
      r = 10,
      s = 5e3;
    a = (function () {
      function a() {
        (this.$1 = ''),
          (this.$2 = d('MqttEnv').Env.getLoggerInstance()),
          (this.$3 = 0),
          (this.$4 = ''),
          (this.$5 = new (c('MqttUserName'))('', 0, 1, '', 0, !0)),
          (this.$6 = function () {}),
          (this.$7 = function (a) {}),
          (this.$8 = function () {}),
          (this.$9 = function (a) {}),
          (this.$10 = 0),
          (this.$11 = 0),
          (this.$12 = 0),
          (this.$13 = 0),
          (this.$14 = 'Ready'),
          (this.$15 = []),
          (this.$16 = []),
          (this.$17 = null),
          (this.$18 = !1),
          (this.$19 = 0);
      }
      a.isSupported = function () {
        return typeof window.fetch === 'function';
      };
      var e = a.prototype;
      e.run = function (a, b, d, e, f, g, h, i) {
        (this.$1 = c('MqttUtils').endpointWithSessionId(a, b)),
          (this.$3 = b),
          (this.$4 = d),
          (this.$5 = e),
          (this.$6 = f),
          (this.$7 = g),
          (this.$8 = h),
          (this.$9 = i),
          this.$20();
      };
      e.isTopicSupported = function (a) {
        return !0;
      };
      e.publish = function (a, d) {
        if (this.$14 !== 'ReceivingData') {
          this.$2.bumpCounter(j + 'publish.' + a + '.invalidstate');
          return b('Promise').reject('not connected');
        } else {
          this.$2.bumpCounter(j + 'publish.' + a + '.publish');
          var e = new (c('PromiseResult'))();
          a = { topic: a, payload: d, promiseResult: e };
          this.$15.push(a);
          this.$21();
          return e.promise;
        }
      };
      e.abort = function () {
        (this.$6 = function () {}),
          (this.$7 = function (a) {}),
          (this.$8 = function () {}),
          (this.$9 = function (a) {});
      };
      e.$22 = function (a) {
        var b = this;
        a.forEach(function (a) {
          b.$2.bumpCounter(j + 'publish.' + a.topic + '.resolved'),
            a.promiseResult.resolve();
        });
        this.$12 += a.length;
      };
      e.$23 = function (a, b) {
        var c = this;
        a.forEach(function (a) {
          c.$2.bumpCounter(j + 'publish.' + a.topic + '.rejected'),
            a.promiseResult.reject(b);
        });
      };
      e.$24 = function (a, b, c, d) {
        var e = a
          .map(function (a) {
            return a.topic;
          })
          .join(',');
        this.$2.debugTrace(
          'FetchClient',
          'Fetch publish request failed. Publishes:' + e + ', retry:' + c,
        );
        this.$2.bumpCounter(j + 'publish_request_failed');
        this.$14 !== 'ReceivingData' || c === p
          ? (this.$23(a, d),
            (this.$18 = !1),
            this.$2.bumpCounter(j + 'publish_request_failed_final'),
            this.$21())
          : this.$25(a, b, c + 1);
      };
      e.$26 = function (a, b, c, d) {
        if (!d.ok) {
          this.$2.bumpCounter(j + 'publish_request_failed.http.' + d.status);
          if (d.status === 409) {
            this.$19++;
            if (this.$19 >= r) {
              this.$2.bumpCounter(j + '409_reset');
              this.$27(new Error('Too many 409 errors'));
              return;
            }
          }
          this.$24(a, b, c, this.$28(d));
          return;
        }
        this.$2.bumpCounter(j + 'publish_request_success');
        b = a
          .map(function (a) {
            return a.topic;
          })
          .join(',');
        this.$2.debugTrace(
          'FetchClient',
          'Fetch publish request success. Publishes:' + b + ', retry:' + c,
        );
        this.$22(a);
        this.$18 = !1;
        this.$21();
      };
      e.$21 = function () {
        if (this.$14 !== 'ReceivingData') return;
        if (this.$18) return;
        if (this.$15.length === 0 && this.$16.length === 0) return;
        this.$18 = !0;
        var a = this.$15.slice(0, q);
        this.$15 = this.$15.slice(q, this.$15.length);
        this.$17 != null && d('MqttEnv').Env.clearTimeout(this.$17);
        this.$17 = null;
        var b = this.$16.slice(0, q);
        this.$16 = this.$16.slice(q, this.$16.length);
        this.$25(a, b, 0);
      };
      e.$25 = function (a, b, e) {
        var f = this,
          g = a
            .map(function (a) {
              return a.topic;
            })
            .join(',');
        this.$2.debugTrace(
          'FetchClient',
          'Fetch publish request sent. Publishes:' + g + ', retry:' + e,
        );
        g = c('MqttUtils').endpointWithExtraParameter(this.$1, l, n);
        var h = a.map(function (a) {
          return {
            topic: a.topic,
            payload: a.payload,
            qos: 0,
            messageId: d('MqttEnv').Env.random(),
          };
        });
        h = this.$5.gen(this.$3, [], h, b);
        this.$2.bumpCounter(j + 'publish_request');
        c('MqttUtils').promiseDoneWithTimeout(
          window.fetch(g, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            referrer: 'no-referrer',
            body: h,
            keepalive: !1,
          }),
          function (c) {
            return f.$26(a, b, e, c);
          },
          function (c) {
            return f.$24(a, b, e, c);
          },
          k,
        );
      };
      e.$29 = function (a) {
        a = a.message;
        this.$2.debugTrace(
          'FetchClient',
          'Fetch request failed with error:' + a,
        );
        this.$9(a);
        this.$30(!1, a);
        this.$2.bumpCounter(j + 'error');
        this.$14 = 'Error';
      };
      e.$31 = function (a) {
        var b = this;
        this.$2.debugTrace('FetchClient', 'Fetch response data received');
        a = d('MqttProtocolCodec').decodeByteMessages(new Uint8Array(a));
        a = a.messages;
        var c = a.filter(function (a) {
          return a.messageType === d('MqttProtocolCodec').MESSAGE_TYPE.PINGREQ;
        });
        a = a
          .filter(function (a) {
            return (
              a.messageType === d('MqttProtocolCodec').MESSAGE_TYPE.PUBLISH
            );
          })
          .map(function (a) {
            if (!(a instanceof d('MqttProtocolCodec').WireMessage.Publish))
              return {};
            a = a;
            a.qos === 1 &&
              a.messageIdentifier != null &&
              (b.$16.push(a.messageIdentifier),
              b.$17 == null &&
                (b.$17 = d('MqttEnv').Env.setTimeout(function () {
                  b.$21();
                }, s)));
            return { topic: a.topic, payload: a.payloadMessage, qos: a.qos };
          });
        for (
          var e = a,
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          this.$2.bumpCounter(
            j + 'response_' + ((h = h.topic) != null ? h : 'void'),
          );
        }
        a && a.length > 0 && ((this.$13 += a.length), this.$7(a));
        c && c.length > 0 && this.$32();
      };
      e.$32 = function () {
        this.$2.debugTrace('FetchClient', 'Got server ping request'),
          this.$2.bumpCounter(j + 'ping');
      };
      e.$27 = function (a) {
        this.$2.debugTrace(
          'FetchClient',
          'Fetch request ended: ' + a.toString(),
        ),
          this.$2.bumpCounter(j + 'done'),
          this.$33(a.message),
          this.$8(),
          (this.$14 = 'Done');
      };
      e.$34 = function (a, b, d) {
        var e = this;
        if (d != null)
          try {
            this.$31(d);
          } catch (a) {
            this.$27(a);
            this.$2.bumpCounter(j + 'dataDecodeException');
            return;
          }
        if (b) {
          this.$27(new Error('EOF'));
          return;
        }
        c('MqttUtils').promiseDone(
          a.read(),
          function (c) {
            var b = c.done;
            c = c.value;
            return e.$34(a, b, c);
          },
          function (a) {
            return e.$27(a);
          },
        );
      };
      e.$35 = function (a) {
        if (!a.ok) {
          this.$2.bumpCounter(j + 'error.http.' + a.status);
          this.$29(this.$28(a));
          return;
        }
        a = a.body;
        if (!a) {
          this.$29(new Error('Empty body'));
          return;
        }
        a = a.getReader();
        this.$6();
        this.$2.bumpCounter(j + 'success');
        this.$30(!0, null);
        this.$11 = Date.now();
        this.$14 = 'ReceivingData';
        this.$2.debugTrace('FetchClient', 'Fetch request success');
        this.$34(a, !1, null);
      };
      e.$33 = function (a) {
        this.$2.eventLogPullFinish({
          pullEventName: i,
          sessionID: this.$3,
          duration: Date.now() - this.$11,
          errorMessage: a,
          publishReceived: this.$13,
          publishSent: this.$12,
        });
      };
      e.$30 = function (a, b) {
        this.$2.eventLogPull({
          pullEventName: h,
          sessionID: this.$3,
          status: a,
          duration: Date.now() - this.$10,
          hostname: this.$1,
          errorMessage: b,
        });
      };
      e.$20 = function () {
        var a = this;
        if (this.$14 !== 'Ready') return;
        this.$2.debugTrace('FetchClient', 'Sending fetch request');
        this.$2.bumpCounter(j + 'request');
        this.$10 = Date.now();
        var b = c('MqttUtils').endpointWithExtraParameter(this.$1, m, o);
        c('MqttUtils').promiseDoneWithTimeout(
          window.fetch(b, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            referrer: 'no-referrer',
            body: this.$4,
            keepalive: !1,
          }),
          function (b) {
            return a.$35(b);
          },
          function (b) {
            return a.$29(b);
          },
          k,
        );
      };
      e.$28 = function (a) {
        return new Error('Http error, status=' + a.status);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'MqttLongPollingClient',
  [
    'MqttEnv',
    'MqttProtocolCodec',
    'MqttUserName',
    'Promise',
    'XHRRequest',
    'getCrossOriginTransport',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 120 * 1e3,
      i = 'simple_pull',
      j = 'longpolling_';
    a = (function () {
      function a() {
        (this.$3 = ''),
          (this.$4 = 0),
          (this.$2 = d('MqttEnv').Env.getLoggerInstance()),
          (this.$1 = 'Ready'),
          (this.$5 = ''),
          (this.$6 = new (c('MqttUserName'))('', 0, 1, '', 0, !0)),
          (this.$7 = function () {}),
          (this.$8 = function (a) {}),
          (this.$9 = function () {}),
          (this.$10 = function (a) {}),
          (this.$11 = 0),
          (this.$12 = null),
          (this.$13 = new Set([
            '/t_ms',
            '/messenger_sync_get_diffs',
            '/messenger_sync_create_queue',
            '/webrtc',
            '/rtc_multi',
          ]));
      }
      var e = a.prototype;
      e.run = function (a, b, c, d, e, f, g, h) {
        (this.$3 = a),
          (this.$4 = b),
          (this.$5 = c),
          (this.$6 = d),
          (this.$7 = e),
          (this.$8 = f),
          (this.$9 = g),
          (this.$10 = h),
          this.$14(this.$5);
      };
      e.isTopicSupported = function (a) {
        return this.$13.has(a);
      };
      e.publish = function (a, c) {
        return b('Promise').reject('not supported');
      };
      e.abort = function () {
        this.$12 != null && this.$12.abort('Disconnected');
      };
      e.$15 = function (a, b) {
        if (this.$1 === a) return;
        this.$1 = a;
        a === 'Error' && b != null && this.$10(b);
        this.$2.debugTrace('LongPollingClient', '_changeStatus : ' + a);
      };
      e.$16 = function (a) {
        if (this.$1 !== 'RequestSend') return;
        if (!a) {
          this.$17('EmptyResponse', null);
          return;
        }
        this.$7();
        this.$2.bumpCounter(j + 'success');
        this.$18(!0, null);
        this.$15('ResponseReceived');
        a = d('MqttProtocolCodec').decodeByteMessages(new Uint8Array(a));
        a = a.messages
          .filter(function (a) {
            return a instanceof d('MqttProtocolCodec').WireMessage.Publish;
          })
          .map(function (a) {
            if (a instanceof d('MqttProtocolCodec').WireMessage.Publish) {
              a = a;
              return { topic: a.topic, payload: a.payloadMessage, qos: a.qos };
            } else return {};
          });
        this.$8(a);
        this.$9();
      };
      e.$17 = function (a, b) {
        b = b != null ? b.message : 'null';
        this.$2.debugTrace(
          'LongPollingClient Error',
          'Poll failed with error:' + a + ', errorMsg:' + b,
        );
        this.$18(!1, a + ':' + b);
        this.$2.bumpCounter(j + 'error.' + a);
        this.$15('Error', a);
      };
      e.$18 = function (a, b) {
        this.$2.eventLogPull({
          pullEventName: i,
          sessionID: this.$4,
          status: a,
          duration: Date.now() - this.$11,
          hostname: this.$3,
          errorMessage: b,
        });
      };
      e.$14 = function (a) {
        var b = this;
        if (this.$1 !== 'Ready' || this.$12) return;
        this.$2.bumpCounter(j + 'request');
        try {
          (this.$11 = Date.now()),
            (this.$12 = new (c('XHRRequest'))(this.$3)
              .setResponseType('arraybuffer')
              .setRawData(a)
              .setTransportBuilder(c('getCrossOriginTransport').withCredentials)
              .setResponseHandler(function (a) {
                return b.$16(a);
              })
              .setNetworkFailureHandler(function (a) {
                b.$17('Network', a);
              })
              .setErrorHandler(function (a) {
                b.$17('Error', a);
              })
              .setAbortHandler(function (a) {
                b.$17('Abort', null);
              })
              .setTimeoutHandler(function () {
                b.$17('Timeout', null);
              })
              .setTimeout(h)
              .send()),
            this.$15('RequestSend');
        } catch (a) {
          this.$17('Error', a);
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'exponentialBackoff',
  ['MqttEnv'],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      b === void 0 && (b = null);
      var c = null,
        e = 0;
      function f() {
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        var i = function () {
          a.apply(b, g);
        };
        if (c === null) {
          var j = Math.max(
            0,
            Math.pow(2, Math.min(e, 6)) *
              (1e3 + d('MqttEnv').Env.random() * 100) -
              2e3,
          );
          c = d('MqttEnv').Env.setTimeout(function () {
            i(), (c = null);
          }, j);
        }
        e++;
      }
      f.reset = function () {
        (e = 0), c != null && (d('MqttEnv').Env.clearTimeout(c), (c = null));
      };
      f.isPending = function () {
        return c != null;
      };
      return f;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'MqttLongPollingRunner',
  [
    'MqttEnv',
    'MqttFetchClient',
    'MqttLongPollingClient',
    'MqttLongPollingHookCollection',
    'MqttTypes',
    'MqttUtils',
    'Promise',
    'exponentialBackoff',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 4,
      i = 1e3,
      j = 3e3,
      k = 'mqtt_should_longpoll',
      l = 'last_lp',
      m = 'yes',
      n = 'no';
    a = (function () {
      function a(a, b, e, f, g, h, i, j, k) {
        var l = this;
        this.$23 = function () {
          try {
            if (!l.$29()) return;
            l.$5.debugTrace(
              'LongPollingRunner',
              '_startPollingIfNecessary called',
            );
            var a = l.$30();
            l.$14 = a;
            var b = l.$9(),
              e = l.$10();
            b = b.filter(function (b) {
              return a.isTopicSupported(b);
            });
            e = e.filter(function (b) {
              return a.isTopicSupported(b.topic);
            });
            if (b.length === 0 && e.length === 0) {
              l.$5.debugTrace(
                'LongPollingRunner',
                'Poll skipped, nothing to do',
              );
              l.$14 = null;
              d('MqttEnv').Env.setTimeout(function () {
                l.$23();
              }, 1e3);
              return;
            }
            var f = c('MqttUtils').generateSessionId();
            a.run(
              l.$6,
              f,
              l.$7.gen(f, b, e),
              l.$7,
              function () {
                return l.$31();
              },
              function (a) {
                return l.$32(a);
              },
              function () {
                return l.$33();
              },
              function (a) {
                return l.$34(a);
              },
            );
            l.$19.onPollRequestSent();
            f = b.join(',');
            b = e
              .map(function (a) {
                return a.topic;
              })
              .join(',');
            l.$5.debugTrace(
              'LongPollingRunner',
              'Making a poll request to ' +
                l.$6 +
                '. SubscribedTopics:' +
                f +
                '. Publishes:' +
                b,
            );
          } catch (a) {
            a && l.$5.logErrorWarn(a, 'lp_js_error'),
              l.$11(
                new (d('MqttTypes').MqttChannelError)(!1, 'js error lp', a),
              ),
              l.$34('lp_js_error');
          }
        };
        this.$6 = a;
        this.$7 = b;
        this.$1 = f;
        this.$2 = 0;
        this.$3 = e;
        this.$4 = c('MqttUtils').hasWSSupport();
        this.$5 = d('MqttEnv').Env.getLoggerInstance();
        this.$8 = g;
        this.$9 = h;
        this.$10 = i;
        this.$11 = j;
        this.$12 = k;
        this.$13 = !1;
        this.$14 = null;
        this.$15 = 'LPInactive';
        this.$16 = 'NotSent';
        this.$17 = 0;
        this.$19 = new (c('MqttLongPollingHookCollection'))();
        this.$18 = c('exponentialBackoff')(this.$23, this);
        this.$20 = 0;
        this.$21 = n;
        a = d('MqttEnv').Env.genGk(d('MqttEnv').MqttGkNames.mqtt_lp_use_fetch);
        b = c('MqttFetchClient').isSupported();
        a
          ? this.$5.bumpCounter('fetch_gk_pass')
          : this.$5.bumpCounter('fetch_gk_fail');
        b
          ? this.$5.bumpCounter('fetch_api_supported')
          : this.$5.bumpCounter('fetch_api_not_supported');
        this.$22 = a && b;
      }
      var e = a.prototype;
      e.addHook = function (a) {
        this.$19.addHook(a);
      };
      e.start = function () {
        var a = this;
        this.$21 = d('MqttEnv').Env.configRead(l, n);
        this.$5.debugTrace(
          'LongPollingRunner',
          'Runner loaded, last status ' + this.$21,
        );
        this.$20 = Date.now();
        this.$23();
        d('MqttEnv').Env.setTimeout(function () {
          a.$23();
        }, i + 100);
        d('MqttEnv').Env.setTimeout(function () {
          a.$23();
        }, j + 100);
      };
      e.shutdown = function () {
        this.$5.debugTrace('LongPollingRunner', 'Shutdown called'),
          this.$14 && this.$14.abort(),
          this.$19.onPollShutdownAbort(),
          (this.$14 = null);
      };
      e.canPublish = function () {
        return this.$15 === 'LPActive' && this.$16 === 'ReceivingData';
      };
      e.publish = function (a, c, e) {
        return d('MqttEnv').Env.genGk(
          d('MqttEnv').MqttGkNames.mqtt_enable_publish_over_polling,
        ) &&
          this.$14 &&
          this.$14.isTopicSupported(a)
          ? this.$14.publish(a, c)
          : b('Promise').reject();
      };
      e.onConnectAttempt = function () {};
      e.onConnectFailure = function () {
        this.$2++, this.$23();
      };
      e.onConnected = function () {};
      e.onConnectSuccess = function () {
        (this.$1 = !0), d('MqttEnv').Env.configWrite(l, null);
      };
      e.onConnectionLost = function () {};
      e.onConnectionDisconnect = function () {};
      e.onSubscribe = function (a) {};
      e.onUnsubscribe = function (a) {};
      e.onPublish = function (a) {};
      e.onMessage = function (a) {};
      e.onWSFatal = function () {
        (this.$3 = !0), this.$23();
      };
      e.getStatus = function () {
        return this.$15;
      };
      e.getRequestStatus = function () {
        return this.$16;
      };
      e.$24 = function (a) {
        a !== this.$15 &&
          (this.$5.debugTrace(
            'LongPollingRunner',
            'status changed to ' + a + ' from ' + this.$15,
          ),
          (this.$15 = a),
          this.$12(this.$15, this.$16));
      };
      e.$25 = function (a) {
        if (!this.$22) return;
        a !== this.$16 &&
          (this.$5.debugTrace(
            'LongPollingRunner',
            'request status changed to ' + a + ' from ' + this.$16,
          ),
          (this.$16 = a),
          this.$12(this.$15, this.$16));
      };
      e.$26 = function () {
        this.$17 = 0;
      };
      e.$27 = function () {
        this.$17++, this.$17 >= h && this.$24('LPError');
      };
      e.$28 = function () {
        var a = d('MqttEnv').Env.genGk(
            d('MqttEnv').MqttGkNames.mqtt_lp_no_delay,
          ),
          b = d('MqttEnv').Env.genGk(
            d('MqttEnv').MqttGkNames.mqtt_ws_polling_enabled,
          ),
          c = d('MqttEnv').Env.genGk(d('MqttEnv').MqttGkNames.mqtt_fast_lp);
        this.$5.debugTrace(
          'LongPollingRunner',
          '_shouldPoll? pollNow:' +
            String(a) +
            ' enabled:' +
            String(b) +
            ' fastPoll:' +
            String(c) +
            ' hasWSSupport:' +
            String(this.$4) +
            ' hasWsSuccessBefore:' +
            String(this.$1) +
            ' failureCount:' +
            this.$2 +
            ' wsFatal:' +
            String(this.$3),
        );
        if (!b) return !1;
        if (a) {
          this.$5.bumpCounter(k + '.nd');
          return !0;
        }
        if (!this.$4) {
          this.$5.bumpCounter(k + '.na');
          return !0;
        }
        if (this.$3) {
          this.$5.bumpCounter(k + '.fatal');
          return !0;
        }
        if (this.$1) return !1;
        if (c) {
          b = Date.now() - this.$20;
          if (this.$21 === m) {
            if (this.$2 >= 1) return !0;
            if (b > i) {
              this.$5.bumpCounter(k + '.fastdelay');
              return !0;
            }
          } else if (b > j) {
            this.$5.bumpCounter(k + '.regulardelay');
            return !0;
          }
        }
        if (this.$2 >= 3) {
          this.$5.bumpCounter(k + '.failure');
          return !0;
        }
        return !1;
      };
      e.$29 = function () {
        if (this.$14 != null) return !1;
        var a = this.$28();
        !this.$13 &&
          a &&
          (this.$5.bumpCounter('polling_kickin'),
          (this.$13 = !0),
          this.$24('LPActive'),
          this.$26());
        this.$13 &&
          !a &&
          (this.$5.bumpCounter('polling_stopped'),
          (this.$13 = !1),
          this.$24('LPInactive'),
          this.$26());
        return a;
      };
      e.$30 = function () {
        if (this.$22) {
          this.$5.debugTrace(
            'LongPollingRunner',
            'Creating polling client using Fetch API',
          );
          return new (c('MqttFetchClient'))();
        } else {
          this.$5.debugTrace(
            'LongPollingRunner',
            'Creating regular Polling client',
          );
          return new (c('MqttLongPollingClient'))();
        }
      };
      e.$31 = function () {
        this.$5.debugTrace('LongPollingRunner', 'Poll success'),
          this.$19.onPollRequestSuccess(),
          this.$18.reset(),
          this.$24('LPActive'),
          this.$26(),
          d('MqttEnv').Env.configWrite(l, m),
          this.$25('ReceivingData');
      };
      e.$32 = function (a) {
        var b = a
          .map(function (a) {
            return a.topic;
          })
          .join(',');
        this.$5.debugTrace(
          'LongPollingRunner',
          'Poll response received, message received:' + b,
        );
        for (b = 0; b < a.length; b++) {
          var c = a[b];
          this.$19.onPollResponse(c.topic);
          this.$8(c.topic, c.payload, c.qos);
        }
      };
      e.$33 = function () {
        this.$5.debugTrace('LongPollingRunner', 'Poll finish'),
          this.$19.onPollFinish(),
          this.$14 && this.$14.abort(),
          (this.$14 = null),
          this.$23(),
          this.$25('NotSent');
      };
      e.$34 = function (a) {
        this.$19.onPollRequestFailed(a),
          this.$14 && this.$14.abort(),
          (this.$14 = null),
          this.$18(),
          this.$27(),
          this.$25('NotSent');
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
