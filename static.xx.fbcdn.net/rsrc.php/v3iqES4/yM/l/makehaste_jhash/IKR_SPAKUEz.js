/*FB_PKG_DELIM*/

__d(
  'BTManifestName',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum')({ MAIN: 'main', LONGTAIL: 'longtail' });
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'CometBTManifestLoader',
  [
    'BootloaderEvents',
    'ClientConsistencyEventEmitter',
    'FBLogger',
    'ODS',
    'Promise',
    'SiteData',
    'XHRRequest',
    'err',
    'promiseDone',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Set();
    function i(a, d, e, f) {
      var g;
      return b('regeneratorRuntime').async(
        function (h) {
          while (1)
            switch ((h.prev = h.next)) {
              case 0:
                h.next = 2;
                return b('regeneratorRuntime').awrap(
                  new (b('Promise'))(function (b, g) {
                    new (c('XHRRequest'))(
                      a + '/btmanifest/' + e + '/' + d + '/' + f,
                    )
                      .setMethod('GET')
                      .setResponseHandler(function (a) {
                        return b(a.toString());
                      })
                      .setErrorHandler(function (a) {
                        return g(a);
                      })
                      .send();
                  }),
                );
              case 2:
                g = h.sent;
                if (!(typeof g !== 'string')) {
                  h.next = 5;
                  break;
                }
                throw c('FBLogger')(
                  'binary_transparency',
                  'bt_invalid_manifest_response',
                ).mustfixThrow('Invalid response from BT manifest endpoint');
              case 5:
                return h.abrupt('return', g);
              case 6:
              case 'end':
                return h.stop();
            }
        },
        null,
        this,
      );
    }
    function j(a, b) {
      d('ODS').bumpEntityKey(
        454,
        'obc.www.all',
        'bt.comet_manifest_loader.' + a + '.' + b,
      );
    }
    function k(a, b, d) {
      var e;
      if (d instanceof Error) e = d;
      else if (typeof d === 'object') {
        var f = JSON.stringify(d);
        e = c('err')(
          '(XHRRequest): %s',
          f.slice(0, 300) + (f.length > 300 ? '...' : ''),
        );
      } else e = c('err')(d);
      c('FBLogger')('binary_transparency', 'bt_download_manifest_error')
        .catching(e)
        .mustfix(
          'Unable to download and inject BT manifest "%s" for rev: %s',
          b,
          a,
        );
    }
    function l(a, c) {
      var e, f, g;
      return b('regeneratorRuntime').async(
        function (l) {
          while (1)
            switch ((l.prev = l.next)) {
              case 0:
                if (
                  !(
                    !d('SiteData').manifest_origin ||
                    d('SiteData').manifest_base_uri == null
                  )
                ) {
                  l.next = 2;
                  break;
                }
                return l.abrupt('return');
              case 2:
                e = a + '_' + c;
                if (!h.has(e)) {
                  l.next = 5;
                  break;
                }
                return l.abrupt('return');
              case 5:
                j(c, 'start');
                h.add(e);
                l.prev = 7;
                g = document.createElement('script');
                l.next = 11;
                return b('regeneratorRuntime').awrap(
                  i(
                    d('SiteData').manifest_base_uri,
                    d('SiteData').manifest_origin,
                    a,
                    c,
                  ),
                );
              case 11:
                g.innerText = l.sent;
                g.type = 'application/json';
                g.setAttribute('name', 'binary-transparency-manifest');
                g.dataset.manifestRev = a.toString();
                g.dataset.manifestType = c;
                (f = document.head) == null ? void 0 : f.appendChild(g);
                j(c, 'complete');
                l.next = 25;
                break;
              case 20:
                (l.prev = 20),
                  (l.t0 = l['catch'](7)),
                  j(c, 'failed'),
                  k(a, c, l.t0),
                  h['delete'](e);
              case 25:
              case 'end':
                return l.stop();
            }
        },
        null,
        this,
        [[7, 20]],
      );
    }
    function a() {
      c('promiseDone')(l(d('SiteData').client_revision, 'main')),
        d('BootloaderEvents').onResourceInLongTailBTManifest(function () {
          c('promiseDone')(l(d('SiteData').client_revision, 'longtail'));
        }),
        c('ClientConsistencyEventEmitter').addListener(
          'newRevision',
          function (a) {
            c('promiseDone')(l(a, 'main')), c('promiseDone')(l(a, 'longtail'));
          },
        );
    }
    g.init = a;
  },
  98,
);
__d(
  'BDSignalBufferData',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {};
    b = a;
    f['default'] = b;
  },
  66,
);
__d(
  'BDSignalWrapper',
  ['BDSignalBufferData', 'SignalCollectorMap'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.signalFlags = a), (this.signalType = b);
      }
      var b = a.prototype;
      b.getSignalCollector = function () {
        return c('SignalCollectorMap').get(this.signalType);
      };
      b.getBufferConfig = function () {
        return c('BDSignalBufferData')[this.signalType];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'SignalValueContext',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        this.cn = a;
      }
      var b = a.prototype;
      b.getSignalValueContextName = function () {
        return this.cn;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'BDSignalCollectorBase',
  ['BDSignalBufferData', 'SignalValueContext', 'regeneratorRuntime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.signalType = a;
      }
      var d = a.prototype;
      d.executeSignalCollection = function () {
        throw new Error(
          'Child class responsibility to implement executeSignalCollection',
        );
      };
      d.executeAsyncSignalCollection = function () {
        var a;
        return b('regeneratorRuntime').async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  c.next = 2;
                  return b('regeneratorRuntime').awrap(
                    this.executeSignalCollection(),
                  );
                case 2:
                  a = c.sent;
                  return c.abrupt('return', a);
                case 4:
                case 'end':
                  return c.stop();
              }
          },
          null,
          this,
        );
      };
      a.getSanitizedURI = function () {
        var a = window.location.href,
          b = a.indexOf('?');
        return b < 0 ? a : a.substring(0, b);
      };
      d.getContext = function () {
        return new (c('SignalValueContext'))(a.getSanitizedURI());
      };
      d.throwIfNotInitialized = function () {
        if (!(this.signalType in c('BDSignalBufferData')))
          throw new Error('Signal is not intialized');
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'BDLoggingConstants',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = { ERROR: 'error', WARNING: 'warning', INFO: 'info' };
    b = {
      KEY_NOT_FOUND: 'key_not_found',
      APPEND_SIGNAL: 'bd_append_signal',
      APPEND_SIGNAL_FAIL: 'bd_append_signal_fail',
      HB_COLLECTED: 'append_hb',
      HB_COLLECTION_FAILED: 'hb_collection_failed',
      BD_EXCEPTION: 'bd_exception',
      SIGNAL_NOT_IMPLEMENTED: 'signal_not_implemented',
      SIGNAL_VALUE_NULL: 'signal_value_null',
      EMPTY_SIGNAL_CONFIG: 'empty_signal_config',
      INVALID_BUFFER_SIZE: 'invalid_buffer_size',
      INVALID_DURATION: 'invalid_duration',
      SIGNAL_FLAGS_MISSING: 'signal_flags_missing',
      DYNAMIC_SIGNAL_COLLECTION_STARTED: 'dynamic_signal_collection_started',
      BIOMETRIC_SIGNAL_COLLECTION_STARTED:
        'biometric_signal_collection_started',
      INVALID_GUID: 'invalid_guid',
      INVALID_LENGTH: 'invalid_length',
      GET_LOCAL_STORAGE_ERROR: 'get_local_storage_error',
      WEB_STORAGE: 'web_storage',
      PARSE_CONFIG_ERROR: 'parse_config_error',
      HB_START_FAILURE: 'hb_start_failure',
      HB_ALREADY_RUNNING: 'hb_already_running',
      TRY_RESTARTING_HB: 'try_restarting_hb',
      BANZAI_LOG_ERROR: 'banzai_log_error',
    };
    c = 'JS';
    f.LEVELS = a;
    f.OPERATIONS = b;
    f.COMPONENT_NAME = c;
  },
  66,
);
__d(
  'BDOperationTypedLogger',
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
          'logger:BDOperationLoggerConfig',
          this.$1,
          b('Banzai').BASIC,
          a,
        );
      };
      c.logVital = function (a) {
        b('GeneratedLoggerUtils').log(
          'logger:BDOperationLoggerConfig',
          this.$1,
          b('Banzai').VITAL,
          a,
        );
      };
      c.logImmediately = function (a) {
        b('GeneratedLoggerUtils').log(
          'logger:BDOperationLoggerConfig',
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
      c.setBdSessionID = function (a) {
        this.$1.bd_session_id = a;
        return this;
      };
      c.setComponent = function (a) {
        this.$1.component = a;
        return this;
      };
      c.setDurationUs = function (a) {
        this.$1.duration_us = a;
        return this;
      };
      c.setExceptionMessage = function (a) {
        this.$1.exception_message = a;
        return this;
      };
      c.setExceptionStackTrace = function (a) {
        this.$1.exception_stack_trace = a;
        return this;
      };
      c.setExceptionType = function (a) {
        this.$1.exception_type = a;
        return this;
      };
      c.setIntValue = function (a) {
        this.$1.int_value = a;
        return this;
      };
      c.setLevel = function (a) {
        this.$1.level = a;
        return this;
      };
      c.setOperation = function (a) {
        this.$1.operation = a;
        return this;
      };
      c.setOperationInfo = function (a) {
        this.$1.operation_info = b('GeneratedLoggerUtils').serializeMap(a);
        return this;
      };
      c.setSessionlets = function (a) {
        this.$1.sessionlets = b('GeneratedLoggerUtils').serializeVector(a);
        return this;
      };
      return a;
    })();
    c = {
      bd_session_id: !0,
      component: !0,
      duration_us: !0,
      exception_message: !0,
      exception_stack_trace: !0,
      exception_type: !0,
      int_value: !0,
      level: !0,
      operation: !0,
      operation_info: !0,
      sessionlets: !0,
    };
    f['default'] = a;
  },
  66,
);
__d(
  'BDOperationLogHelper',
  ['BDLoggingConstants', 'BDOperationTypedLogger', 'Random'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, c, e) {
      h(a, d('BDLoggingConstants').LEVELS.INFO, b, c, e);
    }
    function b(a, b, c, e) {
      h(a, d('BDLoggingConstants').LEVELS.WARNING, b, c, e);
    }
    function e(a, b, c, e) {
      h(a, d('BDLoggingConstants').LEVELS.ERROR, b, c, e);
    }
    function h(a, b, e, f, g) {
      f === void 0 && (f = {});
      if (d('Random').coinflip(i(e))) {
        if (f === null) throw new Error('opeartion info null');
        f.source = a;
        new (c('BDOperationTypedLogger'))()
          .setLevel(b)
          .setDurationUs(g)
          .setOperation(e)
          .setComponent(d('BDLoggingConstants').COMPONENT_NAME)
          .setOperationInfo(f)
          .log();
      }
    }
    function i(a) {
      var b = d('BDLoggingConstants').OPERATIONS;
      switch (a) {
        case b.APPEND_SIGNAL:
        case b.HB_COLLECTED:
        case b.GET_LOCAL_STORAGE_ERROR:
        case b.WEB_STORAGE:
        case b.SIGNAL_NOT_IMPLEMENTED:
        case b.BIOMETRIC_SIGNAL_COLLECTION_STARTED:
          return 1e3;
        default:
          return 1;
      }
    }
    g.logInfo = a;
    g.logWarning = b;
    g.logError = e;
    g.log = h;
    g.getFlipSamplingByOperation = i;
  },
  98,
);
__d(
  'SignalErrorValueTypeDef',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 'ec',
      h = 'en',
      i = 'es',
      j = 500;
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), c != null && (this.$3 = c.substr(0, j));
      }
      var b = a.prototype;
      b.getErrorCode = function () {
        return this.$1;
      };
      b.getErrorName = function () {
        return this.$2;
      };
      b.getErrorDetails = function () {
        return this.$3;
      };
      b.isEqual = function (a) {
        return (
          this.$1 === a.getErrorCode() &&
          this.$3 === a.getErrorDetails() &&
          this.$2 === a.getErrorName()
        );
      };
      b.toJSON = function () {
        var a = {};
        a[g] = this.$1;
        switch (this.$1) {
          case 0:
            a[h] = this.$2;
            a[i] = this.$3;
            break;
        }
        return a;
      };
      return a;
    })();
    f.SignalErrorValueTypeDef = a;
  },
  66,
);
__d(
  'SignalValueTypeDef',
  ['BDLoggingConstants', 'BDOperationLogHelper', 'SignalErrorValueTypeDef'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'SignalValueTypeDef',
      i = 't',
      j = 'ctx',
      k = 'v',
      l = 'e',
      m = {
        NUMBER: 'NUMBER',
        STRING: 'STRING',
        BOOLEAN: 'BOOLEAN',
        CUSTOM_OBJECT: 'CUSTOM_OBJECT',
        INT_ARRAY: 'INT_ARRAY',
        TOUCH: 'TOUCH',
        MAP: 'MAP',
        LIST: 'LIST',
        SENSOR: 'SENSOR',
        ERROR: 'ERROR',
      };
    a = (function () {
      function a(a, b, c, d, e) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e != null ? e : 0);
      }
      var b = a.prototype;
      b.getTimeStampMS = function () {
        return this.$1;
      };
      b.getSignalContext = function () {
        return this.$2;
      };
      b.getSignalValue = function () {
        return this.$3;
      };
      b.getSignalValueType = function () {
        return this.$4;
      };
      b.isEqual = function (a, b) {
        if (a == null) {
          d('BDOperationLogHelper').logWarning(
            h,
            d('BDLoggingConstants').OPERATIONS.SIGNAL_VALUE_NULL,
          );
          return !1;
        }
        if (this.getSignalValueType() !== a.getSignalValueType()) return !1;
        if (
          this.getSignalValueType() === m.ERROR &&
          a.getSignalValueType() === m.ERROR
        )
          return this.equalValue(a);
        var c = !1;
        b.has(128) && (c = this.equalValue(a));
        b.has(256) &&
          (c =
            c &&
            this.getSignalContext() != null &&
            a.getSignalContext() != null &&
            this.getSignalContext().getSignalValueContextName() ===
              a.getSignalContext().getSignalValueContextName());
        b.has(512) &&
          (c =
            c &&
            Math.abs(this.getTimeStampMS() - a.getTimeStampMS()) <= this.$5);
        return c;
      };
      b.equalValue = function (a) {
        if (this.isPrimitiveType())
          return this.getSignalValue() === a.getSignalValue();
        throw new Error('Must implement in the subclasses');
      };
      b.toJSON = function (a) {
        var b = {};
        a && ((b[i] = this.$1 / 1e3), this.$2 != null && (b[j] = this.$2));
        this.$3 == null
          ? (b[l] = new (d('SignalErrorValueTypeDef').SignalErrorValueTypeDef)(
              2,
            ))
          : this.addValueOrErrorToJSON(b);
        return b;
      };
      b.addValueOrErrorToJSON = function (a) {
        if (this.isPrimitiveType()) a[k] = this.$3;
        else throw new Error('Must implement in the subclasses');
      };
      b.isPrimitiveType = function () {
        switch (typeof this.$3) {
          case 'number':
          case 'boolean':
          case 'string':
            return !0;
          default:
            return !1;
        }
      };
      return a;
    })();
    g.BD_VALUE = k;
    g.BD_ERROR = l;
    g.VALUE_TYPES = m;
    g.SignalValueTypeDef = a;
  },
  98,
);
__d(
  'ErrorSignalValueType',
  ['SignalValueTypeDef'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(this, b, c, e, d('SignalValueTypeDef').VALUE_TYPES.ERROR) ||
          this
        );
      }
      var c = b.prototype;
      c.equalValue = function (a) {
        return this.getSignalValue().isEqual(a.getSignalValue());
      };
      c.addValueOrErrorToJSON = function (a) {
        a[d('SignalValueTypeDef').BD_ERROR] = this.getSignalValue().toJSON();
      };
      return b;
    })(d('SignalValueTypeDef').SignalValueTypeDef);
    g['default'] = a;
  },
  98,
);
__d(
  'NumberSignalValueType',
  ['SignalValueTypeDef'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(this, b, c, e, d('SignalValueTypeDef').VALUE_TYPES.NUMBER) ||
          this
        );
      }
      return b;
    })(d('SignalValueTypeDef').SignalValueTypeDef);
    g['default'] = a;
  },
  98,
);
__d(
  'BDConnectionRTTSignalCollector',
  [
    'BDSignalCollectorBase',
    'ErrorSignalValueType',
    'NumberSignalValueType',
    'SignalErrorValueTypeDef',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var e = a.prototype;
        e.executeSignalCollection = function () {
          if (
            navigator.connection != null &&
            navigator.connection.rtt != null
          ) {
            var a = navigator.connection.rtt;
            a = new (c('NumberSignalValueType'))(
              Date.now(),
              this.getContext(),
              a,
            );
          } else
            a = new (c('ErrorSignalValueType'))(
              Date.now(),
              this.getContext(),
              new (d('SignalErrorValueTypeDef').SignalErrorValueTypeDef)(
                3,
                'navigator.connection.rtt not supported',
              ),
            );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30004,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'CustomObjectSignalValueType',
  ['SignalValueTypeDef'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(
            this,
            b,
            c,
            e,
            d('SignalValueTypeDef').VALUE_TYPES.CUSTOM_OBJECT,
          ) || this
        );
      }
      var c = b.prototype;
      c.equalValue = function (a) {
        return this.getSignalValue().isEqual(a.getSignalValue());
      };
      c.addValueOrErrorToJSON = function (a) {
        a[d('SignalValueTypeDef').BD_VALUE] = this.getSignalValue().toJSON();
      };
      return b;
    })(d('SignalValueTypeDef').SignalValueTypeDef);
    g['default'] = a;
  },
  98,
);
__d(
  'HeartbeatObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {
        this.isAppForeground = !0;
      }
      var b = a.prototype;
      b.toJSON = function () {
        return { f: this.isAppForeground };
      };
      b.isEqual = function (a) {
        return !1;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'BDHeartbeatSignalCollector',
  ['BDSignalCollectorBase', 'CustomObjectSignalValueType', 'HeartbeatObject'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c('CustomObjectSignalValueType'))(
            Date.now(),
            this.getContext(),
            new (c('HeartbeatObject'))(),
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 38e3,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDBiometricSignalCollectorBase',
  ['BDSignalCollectorBase', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = 'biometric_signal_collected';
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.listenForSignals = function () {
        throw c('err')(
          'Child class responsibility to implement listenForSignals',
        );
      };
      d.executeSignalCollection = function () {
        throw c('err')(
          'executeAsyncSignalCollection and executeSignalCollection should not be called on biometric signals',
        );
      };
      return b;
    })(c('BDSignalCollectorBase'));
    g.BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME = a;
    g.BDBiometricSignalCollectorBase = b;
  },
  98,
);
__d(
  'KeyDownUpObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.action = null),
          (this.key_code = null),
          (this.action = a),
          (this.key_code = b);
      }
      var b = a.prototype;
      b.toJSON = function () {
        return { action: this.action, key_code: this.key_code };
      };
      b.isEqual = function (b) {
        return b instanceof a
          ? this.action === b.action && this.key_code === b.key_code
          : !1;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'BDKeyDownUpSignalCollector',
  [
    'BDBiometricSignalCollectorBase',
    'CustomObjectSignalValueType',
    'KeyDownUpObject',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var e = a.prototype;
        e.listenForSignals = function () {
          var a = this;
          c('gkx')('1652843') &&
            (document.addEventListener('keydown', function (b) {
              return a.collectSignals(2);
            }),
            document.addEventListener('keyup', function (b) {
              return a.collectSignals(1);
            }));
        };
        e.collectSignals = function (a) {
          a = new (c('CustomObjectSignalValueType'))(
            Date.now(),
            this.getContext(),
            new (c('KeyDownUpObject'))(a, 0),
          );
          a = { signalId: this.signalType, data: { valueOrError: a } };
          window.dispatchEvent(
            new CustomEvent(
              d(
                'BDBiometricSignalCollectorBase',
              ).BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
              { detail: a },
            ),
          );
        };
        return a;
      })(d('BDBiometricSignalCollectorBase').BDBiometricSignalCollectorBase),
      i = null,
      j = {
        signalType: 30100,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'StringArrayObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        (this.strings = []), (this.strings = a);
      }
      var b = a.prototype;
      b.toJSON = function () {
        return this.strings;
      };
      b.isEqual = function (b) {
        if (!(b instanceof a)) return !1;
        if (b.strings === this.strings) return !0;
        if (b.strings.length !== this.strings.length) return !1;
        for (var c = 0; c < this.strings.length; c++)
          if (this.strings[c] !== b.strings[c]) return !1;
        return !0;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'BDLanguagesSignalCollector',
  ['BDSignalCollectorBase', 'CustomObjectSignalValueType', 'StringArrayObject'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = [].concat(navigator.languages);
          a = new (c('CustomObjectSignalValueType'))(
            Date.now(),
            this.getContext(),
            new (c('StringArrayObject'))(a),
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30003,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDMimeTypeCountSignalCollector',
  ['BDSignalCollectorBase', 'NumberSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.mimeTypes ? navigator.mimeTypes.length : -1;
          a = new (c('NumberSignalValueType'))(
            Date.now(),
            this.getContext(),
            a,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30002,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BooleanSignalValueType',
  ['SignalValueTypeDef'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(this, b, c, e, d('SignalValueTypeDef').VALUE_TYPES.BOOLEAN) ||
          this
        );
      }
      return b;
    })(d('SignalValueTypeDef').SignalValueTypeDef);
    g['default'] = a;
  },
  98,
);
__d(
  'BDTouchOrMouseSignalCollectorBase',
  [
    'BDBiometricSignalCollectorBase',
    'BDLoggingConstants',
    'BDOperationLogHelper',
    'BooleanSignalValueType',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'BDTouchOrMouseSignalCollectorBase';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        var e;
        e = a.call(this, b) || this;
        e.eventsToSubscribe = [];
        e.pauseTimeout = 60 * 60 * 1e3;
        e.eventsToSubscribe = c;
        e.pauseTimeout = d;
        e.handler = function (a) {
          return e.collectSignals(a);
        };
        return e;
      }
      var e = b.prototype;
      e.listenForSignals = function () {
        this.collectSignals(), this.addListeners();
      };
      e.addListeners = function () {
        var a = this;
        this.eventsToSubscribe.forEach(function (b) {
          try {
            document.addEventListener(b, a.handler);
          } catch (a) {
            d('BDOperationLogHelper').logError(
              h,
              d('BDLoggingConstants').OPERATIONS.BD_EXCEPTION,
              { e: a },
            );
          }
        });
      };
      e.pauseListeners = function () {
        var a = this;
        this.eventsToSubscribe.forEach(function (b) {
          document.removeEventListener(b, a.handler);
        });
        window.setTimeout(function () {
          return a.addListeners();
        }, this.pauseTimeout);
      };
      e.collectSignals = function (a) {
        a = a != null;
        a && this.pauseListeners();
        a = new (c('BooleanSignalValueType'))(Date.now(), this.getContext(), a);
        a = { signalId: this.signalType, data: { valueOrError: a } };
        window.dispatchEvent(
          new CustomEvent(
            d(
              'BDBiometricSignalCollectorBase',
            ).BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
            { detail: a },
          ),
        );
      };
      return b;
    })(d('BDBiometricSignalCollectorBase').BDBiometricSignalCollectorBase);
    g['default'] = a;
  },
  98,
);
__d(
  'BDMousePresenceSignalCollector',
  ['BDTouchOrMouseSignalCollectorBase'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 60 * 60 * 1e3,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return (
            b.call(this, k.signalType, ['mousedown', 'mousemove'], h) || this
          );
        }
        return a;
      })(c('BDTouchOrMouseSignalCollectorBase')),
      j = null,
      k = {
        signalType: 30106,
        get: function () {
          j == null && (j = new i());
          return j;
        },
      };
    a = k;
    g['default'] = a;
  },
  98,
);
__d(
  'StringSignalValueType',
  ['SignalValueTypeDef'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(this, b, c, e, d('SignalValueTypeDef').VALUE_TYPES.STRING) ||
          this
        );
      }
      return b;
    })(d('SignalValueTypeDef').SignalValueTypeDef);
    g['default'] = a;
  },
  98,
);
__d(
  'BDNavigatorAppVersionSignalCollector',
  ['BDSignalCollectorBase', 'StringSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.appVersion;
          a = new (c('StringSignalValueType'))(
            Date.now(),
            this.getContext(),
            a,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30013,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDNavigatorHardwareConcurrencySignalCollector',
  ['BDSignalCollectorBase', 'NumberSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a;
          a = new (c('NumberSignalValueType'))(
            Date.now(),
            this.getContext(),
            (a = navigator.hardwareConcurrency) != null ? a : 0,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30018,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDNavigatorMaxTouchPointSignalCollector',
  ['BDSignalCollectorBase', 'NumberSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c('NumberSignalValueType'))(
            Date.now(),
            this.getContext(),
            navigator.maxTouchPoints,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30093,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDNavigatorNotificationPermissionSignalCollector',
  [
    'BDSignalCollectorBase',
    'ErrorSignalValueType',
    'SignalErrorValueTypeDef',
    'StringSignalValueType',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (e) {
        babelHelpers.inheritsLoose(a, e);
        function a() {
          return e.call(this, j.signalType) || this;
        }
        var f = a.prototype;
        f.executeAsyncSignalCollection = function () {
          var a, e;
          return b('regeneratorRuntime').async(
            function (f) {
              while (1)
                switch ((f.prev = f.next)) {
                  case 0:
                    f.prev = 0;
                    if (!navigator.permissions) {
                      f.next = 8;
                      break;
                    }
                    f.next = 4;
                    return b('regeneratorRuntime').awrap(
                      navigator.permissions.query({ name: 'notifications' }),
                    );
                  case 4:
                    e = f.sent;
                    a = new (c('StringSignalValueType'))(
                      Date.now(),
                      this.getContext(),
                      e.state,
                    );
                    f.next = 9;
                    break;
                  case 8:
                    a = new (c('ErrorSignalValueType'))(
                      Date.now(),
                      this.getContext(),
                      new (d(
                        'SignalErrorValueTypeDef',
                      ).SignalErrorValueTypeDef)(
                        3,
                        'navigator.permissions not supported',
                      ),
                    );
                  case 9:
                    f.next = 14;
                    break;
                  case 11:
                    (f.prev = 11),
                      (f.t0 = f['catch'](0)),
                      (a = new (c('ErrorSignalValueType'))(
                        Date.now(),
                        this.getContext(),
                        new (d(
                          'SignalErrorValueTypeDef',
                        ).SignalErrorValueTypeDef)(
                          3,
                          'notifications cannot be queried from navigator.permissions',
                        ),
                      ));
                  case 14:
                    return f.abrupt('return', { valueOrError: a });
                  case 15:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[0, 11]],
          );
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30008,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDNavigatorPlatformSignalCollector',
  ['BDSignalCollectorBase', 'StringSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c('StringSignalValueType'))(
            Date.now(),
            this.getContext(),
            navigator.platform,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30015,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDNavigatorPluginsFileExtensionsSignalCollector',
  [
    'BDSignalCollectorBase',
    'ErrorSignalValueType',
    'SignalErrorValueTypeDef',
    'StringArrayObject',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 10,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, k.signalType) || this;
        }
        var e = a.prototype;
        e.executeSignalCollection = function () {
          var a = null;
          try {
            var b = navigator.plugins ? navigator.plugins.length : 0,
              e = new Set();
            for (var f = 0; f < b; f++) {
              var g = navigator.plugins[f].filename;
              if (!g) continue;
              var i = g.indexOf('.');
              if (i == -1 || i == g.length - 1) continue;
              e.add(g.substr(i + 1));
              if (e.size >= h) break;
            }
            e.size && (a = new (c('StringArrayObject'))(Array.from(e)));
          } catch (b) {
            a = new (c('ErrorSignalValueType'))(
              Date.now(),
              this.getContext(),
              new (d('SignalErrorValueTypeDef').SignalErrorValueTypeDef)(
                3,
                'navigator.plugins is not defined',
              ),
            );
          }
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      j = null,
      k = {
        signalType: 30019,
        get: function () {
          j == null && (j = new i());
          return j;
        },
      };
    a = k;
    g['default'] = a;
  },
  98,
);
__d(
  'BDNavigatorUserAgentSignalCollector',
  ['BDSignalCollectorBase', 'StringSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c('StringSignalValueType'))(
            Date.now(),
            this.getContext(),
            navigator.userAgent,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30094,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDNavigatorVendorSignalCollector',
  ['BDSignalCollectorBase', 'StringSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.vendor;
          a = new (c('StringSignalValueType'))(
            Date.now(),
            this.getContext(),
            a,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30012,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDNotificationPermissionSignalCollector',
  [
    'BDSignalCollectorBase',
    'ErrorSignalValueType',
    'SignalErrorValueTypeDef',
    'StringSignalValueType',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var e = a.prototype;
        e.executeSignalCollection = function () {
          var a;
          window.Notification
            ? (a = new (c('StringSignalValueType'))(
                Date.now(),
                this.getContext(),
                Notification.permission,
              ))
            : (a = new (c('ErrorSignalValueType'))(
                Date.now(),
                this.getContext(),
                new (d('SignalErrorValueTypeDef').SignalErrorValueTypeDef)(
                  3,
                  'Notification not supported',
                ),
              ));
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30007,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDPluginCountSignalCollector',
  ['BDSignalCollectorBase', 'NumberSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.plugins ? navigator.plugins.length : -1;
          a = new (c('NumberSignalValueType'))(
            Date.now(),
            this.getContext(),
            a,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30001,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDTimezoneOffsetSignalCollector',
  ['BDSignalCollectorBase', 'NumberSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a;
          a = new (c('NumberSignalValueType'))(
            Date.now(),
            this.getContext(),
            (a = new Date().getTimezoneOffset()) != null ? a : 999,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30040,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDTouchPresenceSignalCollector',
  ['BDTouchOrMouseSignalCollectorBase'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 60 * 60 * 1e3,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return (
            b.call(this, k.signalType, ['touchstart', 'touchcancel'], h) || this
          );
        }
        return a;
      })(c('BDTouchOrMouseSignalCollectorBase')),
      j = null,
      k = {
        signalType: 30107,
        get: function () {
          j == null && (j = new i());
          return j;
        },
      };
    a = k;
    g['default'] = a;
  },
  98,
);
__d(
  'BDWebdriverSignalCollector',
  ['BDSignalCollectorBase', 'BooleanSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = !!navigator.webdriver;
          a = new (c('BooleanSignalValueType'))(
            Date.now(),
            this.getContext(),
            a,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 3e4,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDWebglSupportSignalCollector',
  ['BDSignalCollectorBase', 'BooleanSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = document.createElement('canvas'),
            b = null;
          try {
            b = a.getContext('webgl') || a.getContext('experimental-webgl');
          } catch (a) {}
          a = Boolean(b);
          b = new (c('BooleanSignalValueType'))(
            Date.now(),
            this.getContext(),
            a,
          );
          return { valueOrError: b };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30022,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDWindowHistoryLengthSignalCollector',
  ['BDSignalCollectorBase', 'NumberSignalValueType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c('NumberSignalValueType'))(
            Date.now(),
            this.getContext(),
            window.history ? window.history.length : 0,
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30095,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'DimensionObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.width = null),
          (this.height = null),
          (this.width = a),
          (this.height = b);
      }
      var b = a.prototype;
      b.toJSON = function () {
        return { w: this.width, h: this.height };
      };
      b.isEqual = function (b) {
        if (b instanceof a)
          return this.width === b.width && this.height === b.height;
        else return !1;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'BDWindowOuterDimensionSignalCollector',
  ['BDSignalCollectorBase', 'CustomObjectSignalValueType', 'DimensionObject'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = window.innerHeight,
            b = window.innerWidth;
          b = new (c('CustomObjectSignalValueType'))(
            Date.now(),
            this.getContext(),
            new (c('DimensionObject'))(b, a),
          );
          return { valueOrError: b };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 30005,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'SignalCollectorMap',
  [
    'BDConnectionRTTSignalCollector',
    'BDHeartbeatSignalCollector',
    'BDHeartbeatV2SignalCollector',
    'BDKeyDownUpSignalCollector',
    'BDLanguagesSignalCollector',
    'BDMimeTypeCountSignalCollector',
    'BDMousePresenceSignalCollector',
    'BDNavigatorAppVersionSignalCollector',
    'BDNavigatorHardwareConcurrencySignalCollector',
    'BDNavigatorMaxTouchPointSignalCollector',
    'BDNavigatorNotificationPermissionSignalCollector',
    'BDNavigatorPlatformSignalCollector',
    'BDNavigatorPluginsFileExtensionsSignalCollector',
    'BDNavigatorUserAgentSignalCollector',
    'BDNavigatorVendorSignalCollector',
    'BDNotificationPermissionSignalCollector',
    'BDPluginCountSignalCollector',
    'BDTimezoneOffsetSignalCollector',
    'BDTouchPresenceSignalCollector',
    'BDWebdriverSignalCollector',
    'BDWebglSupportSignalCollector',
    'BDWindowHistoryLengthSignalCollector',
    'BDWindowOuterDimensionSignalCollector',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      get: function (a) {
        switch (a) {
          case 3e4:
            return c('BDWebdriverSignalCollector').get();
          case 30001:
            return c('BDPluginCountSignalCollector').get();
          case 30002:
            return c('BDMimeTypeCountSignalCollector').get();
          case 30003:
            return c('BDLanguagesSignalCollector').get();
          case 30004:
            return c('BDConnectionRTTSignalCollector').get();
          case 30005:
            return c('BDWindowOuterDimensionSignalCollector').get();
          case 30007:
            return c('BDNotificationPermissionSignalCollector').get();
          case 30008:
            return c('BDNavigatorNotificationPermissionSignalCollector').get();
          case 30012:
            return c('BDNavigatorVendorSignalCollector').get();
          case 30013:
            return c('BDNavigatorAppVersionSignalCollector').get();
          case 30015:
            return c('BDNavigatorPlatformSignalCollector').get();
          case 30018:
            return c('BDNavigatorHardwareConcurrencySignalCollector').get();
          case 30019:
            return c('BDNavigatorPluginsFileExtensionsSignalCollector').get();
          case 30022:
            return c('BDWebglSupportSignalCollector').get();
          case 30040:
            return c('BDTimezoneOffsetSignalCollector').get();
          case 30093:
            return c('BDNavigatorMaxTouchPointSignalCollector').get();
          case 30094:
            return c('BDNavigatorUserAgentSignalCollector').get();
          case 30095:
            return c('BDWindowHistoryLengthSignalCollector').get();
          case 30100:
            return c('BDKeyDownUpSignalCollector').get();
          case 30106:
            return c('BDMousePresenceSignalCollector').get();
          case 30107:
            return c('BDTouchPresenceSignalCollector').get();
          case 38e3:
            return c('BDHeartbeatSignalCollector').get();
          case 38001:
            return c('BDHeartbeatV2SignalCollector').get();
        }
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'HeartbeatV2Object',
  ['HeartbeatObject'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.id = '';
        c.id = b;
        return c;
      }
      var c = b.prototype;
      c.toJSON = function () {
        return { f: this.isAppForeground, id: this.id };
      };
      return b;
    })(c('HeartbeatObject'));
    g['default'] = a;
  },
  98,
);
__d(
  'BDHeartbeatV2SignalCollector',
  [
    'BDClientConfig',
    'BDSignalCollectorBase',
    'CustomObjectSignalValueType',
    'HeartbeatV2Object',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c('CustomObjectSignalValueType'))(
            Date.now(),
            this.getContext(),
            new (c('HeartbeatV2Object'))(
              c('BDClientConfig').get().getHeartbeatVersion(),
            ),
          );
          return { valueOrError: a };
        };
        return a;
      })(c('BDSignalCollectorBase')),
      i = null,
      j = {
        signalType: 38001,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
__d(
  'BDClientConfig',
  ['BDLoggingConstants', 'BDOperationLogHelper', 'BDSignalWrapper'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'BDClientConfig',
      i = (function () {
        function a() {
          (this.staticSignalBufferSize = 1),
            (this.dynamicSignalBufferSize = 1),
            (this.biometricSignalBufferSize = 1),
            (this.staticSignals = []),
            (this.dynamicSignals = []),
            (this.biometricSignals = []),
            (this.biometricSignalsMap = new Map()),
            (this.heartbeatSignal = new (c('BDSignalWrapper'))([], 38001)),
            (this.bufferSizeBySignalIdMap = {}),
            (this.periodicCollectionIntervalMs = Number.MAX_SAFE_INTEGER),
            (this.signalConfigGenerationTimeStampMs = 0),
            (this.suspiciousTiersFlushDurationMs = Number.MAX_SAFE_INTEGER),
            (this.allTiersFlushDurationMs = Number.MAX_SAFE_INTEGER),
            (this.heartbeatIntervalMs = -1),
            (this.parsingDone = !1),
            (this.sid = -1),
            (this.hbVersion = ''),
            (this.bufferSizeBySignalIdMap[38001] = 1);
        }
        var b = a.prototype;
        b.setStaticSignalBufferSize = function (a) {
          a > 0
            ? (this.staticSignalBufferSize = a)
            : d('BDOperationLogHelper').logError(
                h,
                d('BDLoggingConstants').OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a.toString(), type: 's' },
              );
          return this;
        };
        b.getStaticSignalBufferSize = function () {
          return this.staticSignalBufferSize;
        };
        b.setDynamicSignalBufferSize = function (a) {
          a > 1
            ? (this.dynamicSignalBufferSize = a)
            : d('BDOperationLogHelper').logError(
                h,
                d('BDLoggingConstants').OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a.toString(), type: 'd' },
              );
          return this;
        };
        b.getDynamicSignalBufferSize = function () {
          return this.dynamicSignalBufferSize;
        };
        b.setBiometricSignalBufferSize = function (a) {
          a > 1
            ? (this.biometricSignalBufferSize = a)
            : d('BDOperationLogHelper').logError(
                h,
                d('BDLoggingConstants').OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a.toString(), type: 'b' },
              );
          return this;
        };
        b.setSID = function (a) {
          this.sid = a;
          return this;
        };
        b.setHeartbeatVersion = function (a) {
          this.hbVersion = a;
          return this;
        };
        b.getHeartbeatVersion = function () {
          return this.hbVersion;
        };
        b.getBiometricSignalBufferSize = function () {
          return this.biometricSignalBufferSize;
        };
        b.setConfigGenerationTimeStamp = function (a) {
          this.signalConfigGenerationTimeStampMs = a;
          return this;
        };
        b.getConfigGenerationTimeStamp = function () {
          return this.signalConfigGenerationTimeStampMs;
        };
        b.setHeartbeatIntervalMinutes = function (a) {
          this.heartbeatIntervalMs = a * 60 * 1e3;
          return this;
        };
        b.getHeartbeatIntervalMs = function () {
          return this.heartbeatIntervalMs;
        };
        b.setSuspiciousTiersFlushDurationMinutes = function (a) {
          a > 0
            ? (this.suspiciousTiersFlushDurationMs = a * 60 * 1e3)
            : d('BDOperationLogHelper').logError(
                h,
                d('BDLoggingConstants').OPERATIONS.INVALID_DURATION,
                { size: a.toString(), type: 'fds' },
              );
          return this;
        };
        b.getSuspiciousTiersFlushDurationMs = function () {
          return this.suspiciousTiersFlushDurationMs;
        };
        b.setAllTiersFlushDurationMinutes = function (a) {
          a > 0
            ? (this.allTiersFlushDurationMs = a * 60 * 1e3)
            : d('BDOperationLogHelper').logError(
                h,
                d('BDLoggingConstants').OPERATIONS.INVALID_DURATION,
                { size: a.toString(), type: 'fda' },
              );
          return this;
        };
        b.getAllTiersFlushDurationMs = function () {
          return this.allTiersFlushDurationMs;
        };
        b.addMultipleSignalsToClientConfig = function (a) {
          var b = this;
          a.forEach(function (a) {
            return b.addSignalToClientConfig(a);
          });
          return this;
        };
        b.addSignalToClientConfig = function (a) {
          var b = a.getSignalFlags(),
            d = a.getSignalId();
          if (d === 38e3) return this;
          var e = new (c('BDSignalWrapper'))(b, d);
          if (d === 38001) {
            this.heartbeatSignal = e;
            return this;
          }
          !b.includes(2)
            ? this.staticSignals.push(e)
            : b.includes(4)
            ? this.biometricSignals.push(e)
            : this.dynamicSignals.push(e);
          a.getBufferSize() > 0 &&
            (this.bufferSizeBySignalIdMap[a.getSignalId()] = a.getBufferSize());
          return this;
        };
        b.setPeriodicCollectionIntervalSeconds = function (a) {
          a > 0
            ? (this.periodicCollectionIntervalMs = a * 1e3)
            : d('BDOperationLogHelper').logError(
                h,
                d('BDLoggingConstants').OPERATIONS.INVALID_DURATION,
                { size: a.toString(), type: 'pi' },
              );
          return this;
        };
        b.getPeriodicCollectionIntervalMs = function () {
          return this.periodicCollectionIntervalMs;
        };
        b.getDynamicSignals = function () {
          return this.dynamicSignals;
        };
        b.getStaticSignals = function () {
          return this.staticSignals;
        };
        b.getBiometricSignals = function () {
          return this.biometricSignals;
        };
        b.getBiometricSignalsMap = function () {
          this.biometricSignalsMap.size === 0 &&
            this.biometricSignals.length > 0 &&
            (this.biometricSignalsMap = this.biometricSignals.reduce(function (
              a,
              b,
            ) {
              return a.set(b.signalType, b);
            },
            new Map()));
          return this.biometricSignalsMap;
        };
        b.getHeartbeatSignal = function () {
          return this.heartbeatSignal;
        };
        b.getBufferSizeBySignalId = function (a) {
          return this.bufferSizeBySignalIdMap[a];
        };
        b.setParsingDone = function (a) {
          this.parsingDone = a;
        };
        b.isParsingDone = function () {
          return this.parsingDone;
        };
        return a;
      })(),
      j = null;
    a = {
      get: function () {
        j == null && (j = new i());
        return j;
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'BDCollectionTypeEnum',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = Object.freeze({ STATIC: 0, DYNAMIC: 1, BIOMETRIC: 2 });
    f['default'] = a;
  },
  66,
);
__d(
  'BotDetection_SignalFlags',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ACTIVE: 1,
      DYNAMIC: 2,
      BIOMETRIC: 4,
      DEPRECATED: 8,
      WEB: 16,
      IOS_NATIVE: 32,
      ANDROID_NATIVE: 64,
      EQUAL_BY_VALUE: 128,
      EQUAL_BY_CONTEXT: 256,
      EQUAL_BY_TIMESTAMP: 512,
      SUSPICIOUS_TIER: 1024,
      PARANOID_TIER: 2048,
      RANDOM_SAMPLE_TIER_DEPRECATED: 4096,
      BENIGN_TIER: 262144,
      EMPLOYEES_TIER: 524288,
      BUNDLE: 8192,
      ONSITE: 16384,
      OFFSITE: 32768,
      OFFSITE_SENSITIVE: 65536,
      SENSITIVE: 131072,
    });
    f['default'] = a;
  },
  66,
);
__d(
  'BDServerSignalConfig',
  ['BDLoggingConstants', 'BDOperationLogHelper', 'BotDetection_SignalFlags'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'BDServerSignalConfig';
    a = (function () {
      function a(a, b, c) {
        (this.parsedSignalFlags = []),
          (this.signalId = a),
          (this.signalFlags = b),
          (this.bufferSize = c);
      }
      var b = a.prototype;
      b.getSignalId = function () {
        return this.signalId;
      };
      b.getSignalFlags = function () {
        var a = this;
        if (this.parsedSignalFlags.length === 0) {
          var b = Object.keys(c('BotDetection_SignalFlags'));
          b.forEach(function (b) {
            (c('BotDetection_SignalFlags')[b] & a.signalFlags) ===
              c('BotDetection_SignalFlags')[b] &&
              a.parsedSignalFlags.push(c('BotDetection_SignalFlags')[b]);
          });
        }
        this.parsedSignalFlags.length === 0 &&
          d('BDOperationLogHelper').logError(
            h,
            d('BDLoggingConstants').OPERATIONS.SIGNAL_FLAGS_MISSING,
            {
              id: this.signalId.toString(),
              flags: this.signalFlags.toString(),
            },
          );
        return this.parsedSignalFlags;
      };
      b.getBufferSize = function () {
        return this.bufferSize != null ? this.bufferSize : 0;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'BDServerConfig',
  [
    'BDClientConfig',
    'BDLoggingConstants',
    'BDOperationLogHelper',
    'BDServerSignalConfig',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'BDServerConfig';
    function a(a) {
      var b = [];
      try {
        var e = JSON.parse(a.sc),
          f = new Map(e.c);
        f.forEach(function (a, d) {
          return b.push(new (c('BDServerSignalConfig'))(d, a));
        });
        if (f.size === 0) {
          d('BDOperationLogHelper').logError(
            h,
            d('BDLoggingConstants').OPERATIONS.EMPTY_SIGNAL_CONFIG,
          );
          return;
        }
        f = c('BDClientConfig').get();
        f.setPeriodicCollectionIntervalSeconds(a.i)
          .addMultipleSignalsToClientConfig(b)
          .setConfigGenerationTimeStamp(e.t)
          .setAllTiersFlushDurationMinutes(a.fda)
          .setSuspiciousTiersFlushDurationMinutes(a.fds)
          .setHeartbeatIntervalMinutes(a.hbi)
          .setStaticSignalBufferSize(a.sbs)
          .setDynamicSignalBufferSize(a.dbs)
          .setBiometricSignalBufferSize(a.bbs)
          .setSID(a.sid)
          .setHeartbeatVersion(a.hbv)
          .setParsingDone(!0);
      } catch (a) {
        d('BDOperationLogHelper').logError(
          h,
          d('BDLoggingConstants').OPERATIONS.PARSE_CONFIG_ERROR,
          { e: a },
        );
      }
    }
    g.parseConfig = a;
  },
  98,
);
__d(
  'BDSignalBuffer',
  [
    'BDClientConfig',
    'BDCollectionTypeEnum',
    'BDLoggingConstants',
    'BDOperationLogHelper',
    'BDSignalBufferData',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'BDSignalBuffer';
    function a(a, b, d) {
      if (a in c('BDSignalBufferData')) return;
      var e = 1;
      b !== void 0 && (e = b);
      c('BDSignalBufferData')[a] = {
        values: [],
        max_buffer_size: e,
        signal_flags: (b = d) != null ? b : [],
      };
    }
    function i(a) {
      if (a in c('BDSignalBufferData')) c('BDSignalBufferData')[a].values = [];
      else
        throw new Error(
          'Tried to clear signal buffer that was not intialized:',
        );
    }
    function b(a, b) {
      if (a in c('BDSignalBufferData')) {
        var e = c('BDSignalBufferData')[a],
          f = e.max_buffer_size;
        e.values.length >= f && e.values.shift();
        e.values.push(b);
        d('BDOperationLogHelper').logInfo(
          h,
          d('BDLoggingConstants').OPERATIONS.APPEND_SIGNAL,
          { id: a.toString() },
        );
      } else {
        d('BDOperationLogHelper').logError(
          h,
          d('BDLoggingConstants').OPERATIONS.APPEND_SIGNAL_FAIL,
          { id: a.toString() },
        );
        throw new Error('Tried to append signal that was not intialized:');
      }
    }
    function e() {
      var a = c('BDClientConfig').get();
      a = a.getBiometricSignals();
      a.forEach(function (a) {
        a.signalType in c('BDSignalBufferData') && i(a.signalType);
      });
    }
    function f(a) {
      var b;
      a = c('BDSignalBufferData')[a];
      b = a == null ? void 0 : (b = a.values) == null ? void 0 : b.length;
      return b != null && b > 0 ? a.values[b - 1] : { valueOrError: void 0 };
    }
    function j(a) {
      return c('BDSignalBufferData')[a].values;
    }
    function k(a) {
      var b = {};
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        e in c('BDSignalBufferData') &&
          (b[e] = j(e).map(function (a) {
            return a.valueOrError;
          }));
      }
      return b;
    }
    function l(a) {
      a = m(a);
      return JSON.stringify(k(a));
    }
    function m(a) {
      var b = c('BDClientConfig').get(),
        d = [];
      a.forEach(function (a) {
        switch (a) {
          case c('BDCollectionTypeEnum').STATIC:
            d = [].concat(d, b.getStaticSignals());
            break;
          case c('BDCollectionTypeEnum').DYNAMIC:
            d = [].concat(d, b.getDynamicSignals());
            break;
          case c('BDCollectionTypeEnum').BIOMETRIC:
            d = [].concat(d, b.getBiometricSignals());
            break;
        }
      });
      return d.map(function (a) {
        return a.signalType;
      });
    }
    g.initialize = a;
    g.clearBuffer = i;
    g.appendSignal = b;
    g.clearBiometricSignals = e;
    g.getLastSignalFormatBySignalId = f;
    g.retrieveSignal = j;
    g.retrieveSignals = k;
    g.getSignalsAsJSONString = l;
    g._getSignalIdsByCollectionType = m;
  },
  98,
);
__d(
  'BDUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (a) {
          var b = (Math.random() * 16) | 0;
          a = a == 'x' ? b : (b & 3) | 8;
          return a.toString(16);
        },
      );
    }
    f.uuid = a;
  },
  66,
);
__d(
  'BdPdcSignalsFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1743095');
    c = b('FalcoLoggerInternal').create('bd_pdc_signals', a);
    e.exports = c;
  },
  null,
);
__d(
  'SignalCollectionManager',
  [
    'BDBiometricSignalCollectorBase',
    'BDClientConfig',
    'BDLoggingConstants',
    'BDOperationLogHelper',
    'BDSignalBuffer',
    'Promise',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'SignalCollectionManager',
      i = (function () {
        function a() {
          var a = this;
          this.$1 = !1;
          this.$6 = function (b) {
            if (
              b instanceof CustomEvent &&
              b.detail != null &&
              b.detail.data != null
            ) {
              var d = c('BDClientConfig')
                .get()
                .getBiometricSignalsMap()
                .get(b.detail.signalId);
              d != null && a.$4(b.detail.data, d);
            }
          };
        }
        var e = a.prototype;
        e.collectSignals = function (a) {
          var c = this,
            d;
          return b('regeneratorRuntime').async(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    d = [];
                    a.forEach(function (a) {
                      a.signalFlags.includes(4) ? c.$2(a) : d.push(c.$3(a));
                    });
                    e.next = 4;
                    return b('regeneratorRuntime').awrap(b('Promise').all(d));
                  case 4:
                  case 'end':
                    return e.stop();
                }
            },
            null,
            this,
          );
        };
        e.isEqualToLastCollectedSignal = function (a, b) {
          var c = d('BDSignalBuffer').getLastSignalFormatBySignalId(
            b.signalType,
          );
          return c.valueOrError == void 0
            ? !1
            : a.isEqual(c.valueOrError, new Set(b.signalFlags));
        };
        e.getCircularBufferSize = function (a) {
          var b = c('BDClientConfig').get(),
            d = b.getBufferSizeBySignalId(a.signalType);
          if (d != null && b.getBufferSizeBySignalId(a.signalType) > 0)
            return d;
          if (!a.signalFlags.includes(2)) return b.getStaticSignalBufferSize();
          else if (a.signalFlags.includes(4))
            return b.getBiometricSignalBufferSize();
          else return b.getDynamicSignalBufferSize();
        };
        e.$3 = function (a) {
          var c, e;
          return b('regeneratorRuntime').async(
            function (f) {
              while (1)
                switch ((f.prev = f.next)) {
                  case 0:
                    c = a.getSignalCollector();
                    if (!(c != null)) {
                      f.next = 12;
                      break;
                    }
                    f.prev = 2;
                    f.next = 5;
                    return b('regeneratorRuntime').awrap(
                      c.executeAsyncSignalCollection(),
                    );
                  case 5:
                    e = f.sent;
                    this.$4(e, a);
                    f.next = 12;
                    break;
                  case 9:
                    (f.prev = 9),
                      (f.t0 = f['catch'](2)),
                      d('BDOperationLogHelper').logError(
                        h,
                        d('BDLoggingConstants').OPERATIONS.BD_EXCEPTION,
                        { error: f.t0 },
                      );
                  case 12:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[2, 9]],
          );
        };
        e.$2 = function (a) {
          this.$5();
          a = a.getSignalCollector();
          a != null &&
            a instanceof
              d('BDBiometricSignalCollectorBase')
                .BDBiometricSignalCollectorBase &&
            a.listenForSignals();
        };
        e.$5 = function () {
          if (this.$1) return;
          window.addEventListener(
            d('BDBiometricSignalCollectorBase')
              .BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
            this.$6,
          );
          this.$1 = !0;
        };
        e.$4 = function (a, b) {
          b.getBufferConfig() == null &&
            d('BDSignalBuffer').initialize(
              b.signalType,
              this.getCircularBufferSize(b),
              b.signalFlags,
            ),
            a.valueOrError &&
              !this.isEqualToLastCollectedSignal(a.valueOrError, b) &&
              d('BDSignalBuffer').appendSignal(b.signalType, a);
        };
        return a;
      })(),
      j = null;
    a = {
      get: function () {
        j == null && (j = new i());
        return j;
      },
    };
    e = a;
    g['default'] = e;
  },
  98,
);
__d(
  'BDClientSignalCollectionTrigger',
  [
    'BDClientConfig',
    'BDCollectionTypeEnum',
    'BDLoggingConstants',
    'BDOperationLogHelper',
    'BDServerConfig',
    'BDSignalBuffer',
    'BDUtils',
    'BdPdcSignalsFalcoEvent',
    'Promise',
    'SignalCollectionManager',
    'WebStorage',
    'javascript-blowfish',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'BDClientSignalCollectionTrigger',
      i = 'signal_flush_timestamp',
      j = !1,
      k = !1,
      l = !1,
      m = 0,
      n = 0,
      o = 0,
      p = 30,
      q = 5,
      r,
      s,
      t = d('BDUtils').uuid(),
      u = c('BDClientConfig').get(),
      v = Object.freeze({ NONE: 0, VITAL: 1, CRITICAL: 2 }),
      w = {
        startSignalCollection: function (a) {
          return b('regeneratorRuntime').async(
            function (c) {
              while (1)
                switch ((c.prev = c.next)) {
                  case 0:
                    u.setSID(a.sid);
                    if (j) {
                      c.next = 15;
                      break;
                    }
                    j = !0;
                    d('BDServerConfig').parseConfig(a);
                    if (u.isParsingDone()) {
                      c.next = 8;
                      break;
                    }
                    d('BDOperationLogHelper').logError(
                      h,
                      d('BDLoggingConstants').OPERATIONS.PARSE_CONFIG_ERROR,
                      { config: JSON.stringify(a) },
                    );
                    j = !1;
                    return c.abrupt('return');
                  case 8:
                    a != null &&
                      ((n = a.hbcbc && a.hbcbc > 0 ? a.hbcbc : n),
                      (o = a.hbvbc && a.hbvbc > 0 ? a.hbvbc : o),
                      (p = a.hbbi && a.hbbi > 0 ? a.hbbi : p));
                    w.startHeartbeatDelayed();
                    s = new (b('Promise'))(function (a, b) {
                      try {
                        u.getDynamicSignals().length > 0 &&
                          (w.collectDynamicSignals(),
                          d('BDOperationLogHelper').logInfo(
                            h,
                            d('BDLoggingConstants').OPERATIONS
                              .DYNAMIC_SIGNAL_COLLECTION_STARTED,
                            { ts: Date.now().toString() },
                          )),
                          u.getBiometricSignals().length > 0 &&
                            (w.collectBiometricSignals(),
                            d('BDOperationLogHelper').logInfo(
                              h,
                              d('BDLoggingConstants').OPERATIONS
                                .BIOMETRIC_SIGNAL_COLLECTION_STARTED,
                              { ts: Date.now().toString() },
                            )),
                          a();
                      } catch (a) {
                        b(a);
                      }
                    });
                    c.next = 13;
                    return b('regeneratorRuntime').awrap(s);
                  case 13:
                    c.next = 15;
                    return b('regeneratorRuntime').awrap(
                      w.startSignalPosting(),
                    );
                  case 15:
                    j &&
                      !k &&
                      !l &&
                      q > 0 &&
                      ((q -= 1),
                      d('BDOperationLogHelper').logWarning(
                        h,
                        d('BDLoggingConstants').OPERATIONS.TRY_RESTARTING_HB,
                      ),
                      w.startHeartbeatDelayed());
                  case 16:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
          );
        },
        retrieveSignals: function () {
          return b('regeneratorRuntime').async(
            function (a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    a.next = 2;
                    return b('regeneratorRuntime').awrap(s);
                  case 2:
                    a.next = 4;
                    return b('regeneratorRuntime').awrap(
                      w.postSignals([
                        c('BDCollectionTypeEnum').DYNAMIC,
                        c('BDCollectionTypeEnum').BIOMETRIC,
                        c('BDCollectionTypeEnum').STATIC,
                      ]),
                    );
                  case 4:
                  case 'end':
                    return a.stop();
                }
            },
            null,
            this,
          );
        },
        postSignals: function (a) {
          return b('regeneratorRuntime').async(
            function (c) {
              while (1)
                switch ((c.prev = c.next)) {
                  case 0:
                    c.next = 2;
                    return b('regeneratorRuntime').awrap(
                      w.collectStaticSignals(),
                    );
                  case 2:
                    w._postSignalsHelper(
                      d('BDSignalBuffer').getSignalsAsJSONString(a),
                      v.NONE,
                    ) && w.setTimestampInStorage(Date.now(), i);
                  case 3:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
          );
        },
        _postSignalsHelper: function (a, b) {
          if (a.length <= 2) return !1;
          var e = u.getConfigGenerationTimeStamp(),
            f = w.encryptDataUsingAsid(t, a);
          a = function () {
            return { asid: t, ct: e, sjd: f, sid: u.sid };
          };
          var g = !1;
          try {
            b === v.CRITICAL
              ? c('BdPdcSignalsFalcoEvent').logCritical(a)
              : b === v.VITAL
              ? c('BdPdcSignalsFalcoEvent').logImmediately(a)
              : c('BdPdcSignalsFalcoEvent').log(a),
              (g = !0);
          } catch (a) {
            d('BDOperationLogHelper').logError(
              h,
              d('BDLoggingConstants').OPERATIONS.BANZAI_LOG_ERROR,
              a,
            ),
              (g = !1);
          } finally {
            return g;
          }
        },
        getInitialVector: function (a) {
          if (a.length !== 16) {
            d('BDOperationLogHelper').logError(
              h,
              d('BDLoggingConstants').OPERATIONS.INVALID_LENGTH,
            );
            return '';
          }
          var b = '';
          for (var c = 0; c < 8; c++)
            b += String.fromCharCode(a.charCodeAt(c) ^ a.charCodeAt(8 + c));
          return b;
        },
        encryptDataUsingAsid: function (a, b) {
          if (a.length !== 36) {
            d('BDOperationLogHelper').logError(
              h,
              d('BDLoggingConstants').OPERATIONS.INVALID_GUID,
            );
            return b;
          }
          a = a.slice(19, 23) + a.slice(24, 36);
          var e = w.getInitialVector(a);
          a = new (c('javascript-blowfish'))(a, 'cbc');
          return a.base64Encode(a.encrypt(b, e));
        },
        startSignalPosting: function () {
          var a, c;
          return b('regeneratorRuntime').async(
            function (d) {
              while (1)
                switch ((d.prev = d.next)) {
                  case 0:
                    a = w.getTimestampInStorage(i);
                    c = Date.now() - a;
                    if (!(c >= u.getAllTiersFlushDurationMs())) {
                      d.next = 7;
                      break;
                    }
                    d.next = 5;
                    return b('regeneratorRuntime').awrap(
                      w.postSignalsIntermittently(),
                    );
                  case 5:
                    d.next = 8;
                    break;
                  case 7:
                    window.setTimeout(function () {
                      w.postSignalsIntermittently();
                    }, u.getAllTiersFlushDurationMs() - c);
                  case 8:
                  case 'end':
                    return d.stop();
                }
            },
            null,
            this,
          );
        },
        postSignalsIntermittently: function () {
          w.postSignals([c('BDCollectionTypeEnum').STATIC]),
            window.setInterval(function () {
              w.postSignals([
                c('BDCollectionTypeEnum').STATIC,
                c('BDCollectionTypeEnum').DYNAMIC,
                c('BDCollectionTypeEnum').BIOMETRIC,
              ]);
            }, u.getAllTiersFlushDurationMs());
        },
        setTimestampInStorage: function (a, b) {
          var e = c('WebStorage').getLocalStorage();
          if (!e) {
            d('BDOperationLogHelper').logWarning(
              h,
              d('BDLoggingConstants').OPERATIONS.GET_LOCAL_STORAGE_ERROR,
            );
            return;
          }
          e = c('WebStorage').setItemGuarded(e, b, a.toString());
          e != null &&
            d('BDOperationLogHelper').logWarning(
              h,
              d('BDLoggingConstants').OPERATIONS.WEB_STORAGE,
              { error: e.message },
            );
        },
        getTimestampInStorage: function (a) {
          var b = c('WebStorage').getLocalStorage();
          if (!b) {
            d('BDOperationLogHelper').logWarning(
              h,
              d('BDLoggingConstants').OPERATIONS.GET_LOCAL_STORAGE_ERROR,
            );
            return 0;
          }
          b = b.getItem(a);
          if (b == null) return 0;
          a = Number.parseInt(b, 10);
          return Number.isFinite(a) ? a : 0;
        },
        resetHeartbeatStartedForTest: function () {
          (k = !1), (l = !1);
        },
        startHeartbeatDelayed: function () {
          if (k || l) return;
          var a = w.getTimestampInStorage(w.HEARTBEAT_TIMESTAMP_STORAGE_KEY);
          a = Date.now() - a;
          try {
            a >= u.getHeartbeatIntervalMs()
              ? w.startHeartbeat()
              : (window.setTimeout(function () {
                  return w.startHeartbeat();
                }, u.getHeartbeatIntervalMs() - a),
                (l = !0));
          } catch (b) {
            d('BDOperationLogHelper').logError(
              h,
              d('BDLoggingConstants').OPERATIONS.HB_START_FAILURE,
              {
                lastBeatSince: a.toString(),
                hbi: u.getHeartbeatIntervalMs().toString(),
                e: b,
              },
            );
          }
        },
        HEARTBEAT_TIMESTAMP_STORAGE_KEY: 'hb_timestamp',
        startHeartbeat: function () {
          !k &&
            u.getHeartbeatIntervalMs() > 0 &&
            (w.collectHeartbeatTimes(n, o),
            m !== 0 &&
              (window.clearInterval(m),
              d('BDOperationLogHelper').logWarning(
                h,
                d('BDLoggingConstants').OPERATIONS.HB_ALREADY_RUNNING,
              )),
            (m = window.setInterval(function () {
              return w.collectHeartbeatTimes(n, o);
            }, u.getHeartbeatIntervalMs())),
            (k = !0));
        },
        collectHeartbeatTimes: function (a, b) {
          if (a <= 0 && b <= 0) return;
          a > 0 && w.collectHeartbeat(v.CRITICAL);
          b > 0 && w.collectHeartbeat(v.VITAL);
          (a > 1 || b > 1) &&
            window.setTimeout(function () {
              return w.collectHeartbeatTimes(a - 1, b - 1);
            }, p * 1e3);
        },
        collectHeartbeat: function (a) {
          var b;
          b =
            u == null
              ? void 0
              : (b = u.getHeartbeatSignal()) == null
              ? void 0
              : (b = b.getSignalCollector()) == null
              ? void 0
              : b.executeSignalCollection();
          if (b == null) {
            d('BDOperationLogHelper').logError(
              h,
              d('BDLoggingConstants').OPERATIONS.HB_COLLECTION_FAILED,
              { urgency: a.toString() },
            );
            return;
          } else
            d('BDOperationLogHelper').logInfo(
              h,
              d('BDLoggingConstants').OPERATIONS.HB_COLLECTED,
              { urgency: a.toString() },
            );
          w.postHeartbeat(a, b) &&
            w.setTimestampInStorage(
              Date.now(),
              w.HEARTBEAT_TIMESTAMP_STORAGE_KEY,
            );
        },
        postHeartbeat: function (a, b) {
          var c = {};
          c[38001] = [b == null ? void 0 : b.valueOrError];
          b = JSON.stringify(c);
          return w._postSignalsHelper(b, a);
        },
        collectStaticSignals: function () {
          return b('regeneratorRuntime').async(
            function (a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    a.next = 2;
                    return b('regeneratorRuntime').awrap(
                      w.collectSignalsOneTime(u.getStaticSignals()),
                    );
                  case 2:
                  case 'end':
                    return a.stop();
                }
            },
            null,
            this,
          );
        },
        collectDynamicSignals: function () {
          w.stopDynamicSignalCollection(),
            (r = window.setInterval(function () {
              return b('regeneratorRuntime').async(
                function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        a.next = 2;
                        return b('regeneratorRuntime').awrap(
                          w.collectSignalsOneTime(u.getDynamicSignals()),
                        );
                      case 2:
                      case 'end':
                        return a.stop();
                    }
                },
                null,
                this,
              );
            }, u.getPeriodicCollectionIntervalMs()));
        },
        collectBiometricSignals: function () {
          w.collectSignalsOneTime(u.getBiometricSignals());
        },
        stopDynamicSignalCollection: function () {
          r != null && (window.clearInterval(r), (r = null));
        },
        collectSignalsOneTime: function (a) {
          return b('regeneratorRuntime').async(
            function (d) {
              while (1)
                switch ((d.prev = d.next)) {
                  case 0:
                    d.next = 2;
                    return b('regeneratorRuntime').awrap(
                      c('SignalCollectionManager').get().collectSignals(a),
                    );
                  case 2:
                  case 'end':
                    return d.stop();
                }
            },
            null,
            this,
          );
        },
      };
    a = w;
    g['default'] = a;
  },
  98,
);
__d(
  'BDCometSignalCollectionTrigger',
  ['BDClientSignalCollectionTrigger', 'BDSignalCollectionData'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      c('BDClientSignalCollectionTrigger').startSignalCollection(
        c('BDSignalCollectionData'),
      );
    }
    g.initSignalCollection = a;
  },
  98,
);
__d(
  'UsabilityTaskResult',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum').Mirrored(['FAIL', 'NOT_STARTED', 'SUCCESS']);
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'UsabilityUserResult',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum').Mirrored([
      'CANCELLED',
      'COMPLETED',
      'NOT_STARTED',
      'TIMEOUT',
    ]);
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'CometUBTLogger',
  ['DateConsts', 'QPLUserFlow', 'qpl', 'recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('qpl')._(42795009, '8382'),
      i = 'fb_url',
      j = 'V3';
    function a() {
      c('QPLUserFlow').start(h), k(0);
    }
    function k(a) {
      switch (a) {
        case 0:
          c('QPLUserFlow').addPoint(h, 'show_dialog_data_use');
          break;
        case 1:
          c('QPLUserFlow').addPoint(h, 'show_dialog_task_details');
          break;
        default:
          return;
      }
    }
    function b() {
      c('QPLUserFlow').addPoint(h, 'start_task');
    }
    function e(a) {
      c('QPLUserFlow').addPoint(h, 'task_status_success'),
        c('QPLUserFlow').addAnnotations(h, {
          string: { hit_success_marker_id: String(a) },
        });
    }
    function f(a, b) {
      a =
        a != null
          ? {
              double: {
                duration_to_success:
                  (Date.now() - a) / d('DateConsts').MS_PER_SEC,
              },
            }
          : void 0;
      c('QPLUserFlow').addAnnotations(
        h,
        babelHelpers['extends']({}, a, { int: { nav_steps_to_success: b } }),
      );
    }
    function l(a, b) {
      a =
        a != null
          ? {
              double: {
                duration_to_completion:
                  (Date.now() - a) / d('DateConsts').MS_PER_SEC,
              },
            }
          : void 0;
      q(b);
      c('QPLUserFlow').addAnnotations(
        h,
        babelHelpers['extends']({}, a, { int: { nav_steps_to_completion: b } }),
      );
    }
    function m() {
      c('QPLUserFlow').addPoint(h, 'task_status_timeout');
    }
    function n(a) {
      a = { string: { task_status: a } };
      c('QPLUserFlow').addAnnotations(h, a);
    }
    function o(a) {
      switch (a) {
        case 'CANCELLED':
          c('QPLUserFlow').addPoint(h, 'user_tapped_cancelled');
          return;
        case 'COMPLETED':
          c('QPLUserFlow').addPoint(h, 'user_tapped_completed');
          return;
        default:
          return;
      }
    }
    function p() {
      c('QPLUserFlow').addPoint(h, 'floating_button_was_tapped');
    }
    function q(a) {
      c('QPLUserFlow').addAnnotations(h, { int: { nav_steps: a } });
    }
    function r(a, b) {
      b = b === 0 ? 'navigate_from_' : 'navigate_to_';
      c('QPLUserFlow').addPoint(h, b + a);
    }
    function s(a, b, d) {
      if (a == null) {
        c('recoverableViolation')(
          'Task info cannot be null when logging end of task',
          'quality_programs',
        );
        return;
      }
      var e = a.taskRunID != null ? { run_id: a.taskRunID } : void 0;
      e = {
        string: babelHelpers['extends']({}, e, {
          source: (e = a.groupID) != null ? e : i,
          task_key: a.taskKey,
          ubt_version: j,
          user_status: d,
        }),
      };
      b === 'FAIL' && (d === 'COMPLETED' || d === 'CANCELLED')
        ? c('QPLUserFlow').addPoint(h, 'task_status_cancel')
        : d === 'TIMEOUT' && c('QPLUserFlow').addPoint(h, 'closed_on_timeout');
      c('QPLUserFlow').endSuccess(h, { annotations: e });
    }
    g.startUserFlow = a;
    g.updateUserFlowOnDialogPageChange = k;
    g.updateUserFlowOnStartTask = b;
    g.addSuccessMarkerHit = e;
    g.addSuccessLogging = f;
    g.addCompletionLogging = l;
    g.addTimeoutLogging = m;
    g.addTaskResultLogging = n;
    g.addDialogFooterAction = o;
    g.addPulseTapped = p;
    g.addNavStepsLogging = q;
    g.addNavigationPoint = r;
    g.updateUserFlowOnEndTask = s;
  },
  98,
);
__d(
  'handleCometUBTCheckSuccessMarker',
  ['requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')('CometUBTLogger').__setRef(
      'handleCometUBTCheckSuccessMarker',
    );
    function i(a, b) {
      if (a == null || a.length === 0) return !0;
      else if (b == null || b.length === 0) return !1;
      var c = !0;
      a.forEach(function (a) {
        var d,
          e = a.key;
        a = a.requiredValue;
        ((d = b.find(function (a) {
          return a.key === e;
        })) == null
          ? void 0
          : d.requiredValue) !== a && (c = !1);
      });
      return c;
    }
    function a(a, b, c, d, e) {
      if (d === 'SUCCESS') return;
      else if (b == null || c == null) return;
      c.some(function (c) {
        if (
          c.module.includes(b.module) &&
          c.event === b.event &&
          i(c.extraData, b.extraData)
        ) {
          e && e(c.id);
          h.onReadyImmediately(function (a) {
            return a.addSuccessMarkerHit(c.id);
          });
          a({ type: 'SET_TASK_RESULT', value: 'SUCCESS' });
          return !0;
        }
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'WebAssemblyMemorySingleton',
  ['ZenonAuditedCheckpointLogId', 'ZenonInfraActionsLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 64 * 1024;
    d = 5701632;
    e = 45 * h;
    var i = d + e,
      j = null,
      k = 0,
      l = 0;
    function a() {
      j == null &&
        ((j = new WebAssembly.Memory({
          initial: i / h,
          maximum: 2147483648 / h,
        })),
        (k = i));
      return j;
    }
    function b() {
      if (j != null) {
        var a = j.buffer.byteLength;
        a !== k &&
          (l++,
          c('ZenonInfraActionsLogger').logCheckpoint({
            auditId: c('ZenonAuditedCheckpointLogId').RP_ROOMS_INFRA_WWW__WASM,
            checkpoint:
              '[WASM] Memory reallocated from ' +
              k / 1024 +
              ' KB to ' +
              a / 1024 +
              ' KB, current reallocation count is ' +
              l,
          }),
          (k = a));
      }
      return { memory_reallocation_count: l, memory_size_kb: k / 1024 };
    }
    f = { INITIAL_MEMORY_ALLOCATED_IN_BYTES: i, get: a, getMetrics: b };
    g.WebAssemblyMemorySingleton = f;
  },
  98,
);
__d(
  'ZenonCallFalcoEventUtils',
  ['performanceNow'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
      return String(Math.trunc(a));
    };
    a = function () {
      return h(c('performanceNow')());
    };
    b = function (a) {
      return h((a = a) != null ? a : 0);
    };
    d = function (a) {
      return a == null ? null : h((a = a) != null ? a : 0);
    };
    e = function (a) {
      return (a = a) != null ? a : '';
    };
    g.truncateNumber = h;
    g.performanceNowParsed = a;
    g.nonNullIntNumber = b;
    g.intNumberOrNull = d;
    g.nonNullString = e;
  },
  98,
);
__d(
  'ZenonCallInfoManager',
  ['ChannelClientID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = a.callTrigger,
          c = a.conferenceName,
          e = a.isCaller,
          f = a.isVideo,
          g = a.localCallID,
          h = a.peerID,
          i = a.protocol,
          j = a.serverInfoData;
        a = a.signalingID;
        var k = d('ChannelClientID').getID();
        c = {
          callTrigger: (b = b) != null ? b : '',
          conferenceName: (b = c) != null ? b : '',
          deviceID: k,
          isCaller: e,
          isVideo: f,
          localCallID: g,
          peerID: h,
          protocol: i,
          signalingID: a,
        };
        this.$1 = babelHelpers['extends']({}, c, { serverInfoData: j });
      }
      var b = a.prototype;
      b.setDeviceID = function (a) {
        this.$1.deviceID = a;
      };
      b.setSharedCallId = function (a) {
        this.$1.serverInfoData = a;
      };
      b.getCallInfo = function () {
        return this.$1;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonCallLogger',
  ['ZenonInfraActionsLogger', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Set([
        'setMediaStats',
        'updateE2EEStats',
        'updateIceInfo',
        'setRemoteSdpOffer',
      ]),
      i = new Set([
        'atLeastOneParticipantAlerted',
        'atLeastOneParticipantAnswered',
      ]);
    a = (function () {
      function a(a, b, c) {
        var d = this;
        this.$1 = [];
        this.$3 = new Set();
        this.$2 = {
          clientSessionID: a.signalingID,
          localCallID: a.localCallID,
          peerID: a.peerID,
          sharedCallID: a.serverInfoData,
        };
        b.forEach(function (b) {
          return d.$1.push(
            new b(a, c, function (a) {
              Object.assign(d.$2, a);
            }),
          );
        });
      }
      var b = a.prototype;
      b.log = function (a) {
        this.$4(a),
          this.$1.forEach(function (b) {
            b.processEvent(a);
          });
      };
      b.$4 = function (a) {
        if (!c('gkx')('2890')) return;
        if (h.has(a.name)) return;
        if (i.has(a.name) && this.$3.has(a.name)) return;
        this.$3.add(a.name);
        c('ZenonInfraActionsLogger').logCheckpoint({
          checkpoint: '[ZP] ZenonCallLogger event: ' + a.name,
        });
      };
      b.getLogIdentifiers = function () {
        return this.$2;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonGenericLocalStorageStore',
  [
    'CacheStorage',
    'WebStorage',
    'ZenonInfraActionsLogger',
    'ZenonUserActionLogger',
    'areEqual',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 2e3,
      i = 3;
    a = (function () {
      function a(a, b, d) {
        (this.$1 = a), (this.$2 = new (c('CacheStorage'))(b, d));
      }
      var b = a.prototype;
      b.getLocalStorageObjects = function () {
        return this.$2.get(this.$1) || {};
      };
      b.removeLocalStorageObjects = function (a) {
        this.mutateLocalStorageObjects(function (b) {
          a.forEach(function (a) {
            var d = a.peerID;
            a = a.signalingID;
            c('ZenonInfraActionsLogger').logCheckpointEmployeesTestUsersOnly({
              checkpoint:
                'NSL - removeLocalStorageObjects peerID: ' +
                d +
                ' signalingID: ' +
                a,
            });
            b[d] &&
              b[d][a] &&
              (delete b[d][a],
              Object.entries(b[d]).length === 0 && delete b[d]);
          });
          return b;
        });
      };
      b.mutateLocalStorageObjects = function (a, b, d, e) {
        var f = this;
        b === void 0 && (b = i);
        d === void 0 && (d = !1);
        e === void 0 && (e = null);
        var g = this.getLocalStorageObjects(),
          j = this.getLocalStorageObjects();
        g = a(g);
        var k = this.getLocalStorageObjects();
        if (c('areEqual')(j, k))
          this.$2.set(this.$1, g),
            this.logStorageError(this.$2.getLastSetException(), e);
        else if (b > 0)
          if (d)
            c('setTimeout')(function () {
              var d;
              c('ZenonInfraActionsLogger').logCheckpointEmployeesTestUsersOnly({
                checkpoint:
                  'NSL - mutateLocalStorageObjects retry in timeout retryCount: ' +
                  b +
                  ' peerID: ' +
                  ((d = (d = e) == null ? void 0 : d.peerID) != null ? d : '') +
                  ' signalingID: ' +
                  ((d = (d = e) == null ? void 0 : d.signalingID) != null
                    ? d
                    : ''),
              });
              f.mutateLocalStorageObjects(a, b - 1, !0);
            }, h);
          else {
            c('ZenonInfraActionsLogger').logCheckpointEmployeesTestUsersOnly({
              checkpoint:
                'NSL - mutateLocalStorageObjects first try peerID: ' +
                ((k = (j = e) == null ? void 0 : j.peerID) != null ? k : '') +
                ' signalingID: ' +
                ((d = (g = e) == null ? void 0 : g.signalingID) != null
                  ? d
                  : ''),
            });
            this.mutateLocalStorageObjects(a, b - 1, !0);
          }
      };
      b.logStorageError = function (a, b) {
        a != null &&
          (d('ZenonUserActionLogger').logError({
            call_id: b == null ? void 0 : b.signalingID,
            error_domain:
              'ZenonGenericLocalStorageStore_storeLocalStorageObjects',
            error_type: a.name,
            peer_id: b == null ? void 0 : b.peerID,
          }),
          c('WebStorage').isLocalStorageQuotaExceeded() &&
            c('ZenonInfraActionsLogger').logCounter(
              'local_storage_quota_exceeded',
            ));
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonLSCallStartEventManager',
  ['ZenonCallFalcoEventUtils', 'ZenonCallInfoManager', 'ZenonPeerID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$ZenonLSCallStartEventManager1 = {}),
          (c.$ZenonLSCallStartEventManager2 = !1),
          (c.$ZenonLSCallStartEventManager3 = !1),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.updateEventTimestamp = function (a) {
        this.$ZenonLSCallStartEventManager1[a] == null &&
          (this.$ZenonLSCallStartEventManager1[a] = d(
            'ZenonCallFalcoEventUtils',
          ).performanceNowParsed());
      };
      c.receivedFromInvite = function () {
        this.$ZenonLSCallStartEventManager2 = !0;
      };
      c.receivedFromServer = function () {
        this.$ZenonLSCallStartEventManager3 = !0;
      };
      c.getStartEventData = function () {
        var a = this.getCallInfo();
        a = a.signalingID;
        var b = babelHelpers['extends'](
          {},
          this.getTimestamps(),
          this.$ZenonLSCallStartEventManager4(),
        );
        a !== '' && (b.local_signaling_id = a);
        return b;
      };
      c.$ZenonLSCallStartEventManager4 = function () {
        var a = this.getCallInfo(),
          b = a.deviceID,
          c = a.localCallID,
          e = a.peerID,
          f = a.serverInfoData;
        a = a.signalingID;
        return babelHelpers['extends'](
          {
            answer_sdp_received_from_server:
              this.$ZenonLSCallStartEventManager3,
            connection_logging_id: a,
            local_call_id: c,
            offer_sdp_received_from_invite: this.$ZenonLSCallStartEventManager2,
            peer_id: d('ZenonPeerID').convertPeerIDForLogging(e),
            protocol: 'multiway',
          },
          f != null && { shared_call_id: f },
          {
            steady_time_ms: d(
              'ZenonCallFalcoEventUtils',
            ).performanceNowParsed(),
            system_time_ms: String(Date.now()),
            web_device_id: b,
          },
        );
      };
      c.getTimestamps = function () {
        return this.$ZenonLSCallStartEventManager1;
      };
      c.save = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.storeCallStartEventManager(c, b, this);
      };
      c['delete'] = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.removeLocalStorageObjects([{ peerID: c, signalingID: b }]);
      };
      c.toJsonString = function () {
        var a = this.getCallInfo(),
          b = a.signalingID;
        a = {
          callInfo: a,
          connectionLoggingId: b,
          receivedFromInvite: this.$ZenonLSCallStartEventManager2,
          receivedFromServer: this.$ZenonLSCallStartEventManager3,
          timestamps: this.getTimestamps(),
        };
        return JSON.stringify(a);
      };
      b.fromJsonString = function (a) {
        var c;
        try {
          c = JSON.parse(a);
        } catch (a) {
          return null;
        }
        a = c.callInfo;
        a.deviceID;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['deviceID']);
        a = new b(a);
        a.$ZenonLSCallStartEventManager2 = c.receivedFromInvite;
        a.$ZenonLSCallStartEventManager3 = c.receivedFromServer;
        a.$ZenonLSCallStartEventManager1 = c.timestamps;
        return a;
      };
      return b;
    })(c('ZenonCallInfoManager'));
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonLSCallStartEventStore',
  ['ZenonGenericLocalStorageStore', 'ZenonLSCallStartEventManager'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'localstorage',
      i = 'RTC_LS_CALL_START_',
      j = 'ls_call_start',
      k = 3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, j, h, i) || this;
      }
      var d = b.prototype;
      d.retrieveCallStartEventManager = function (a, b) {
        var d = this.getLocalStorageObjects();
        d = d[a] ? d[a][b] : null;
        if (d) return c('ZenonLSCallStartEventManager').fromJsonString(d.__d);
        else return null;
      };
      d.storeCallStartEventManager = function (a, b, c) {
        this.mutateLocalStorageObjects(
          function (d) {
            d[a] || (d[a] = {});
            d[a][b] = { __d: c.toJsonString(), __t: Date.now(), __z: !0 };
            return d;
          },
          k,
          !1,
          { peerID: a, signalingID: b },
        );
      };
      return b;
    })(c('ZenonGenericLocalStorageStore'));
    b = new a();
    g.ZenonLSCallStartEventStoreInstance = b;
  },
  98,
);
__d(
  'ZenonDeviceInfoHelper',
  ['regeneratorRuntime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = -1,
      h = !1,
      i = {
        getBatteryStats: function () {
          var a, c;
          return b('regeneratorRuntime').async(
            function (d) {
              while (1)
                switch ((d.prev = d.next)) {
                  case 0:
                    d.next = 2;
                    return b('regeneratorRuntime').awrap(
                      i.internalGetWindow().navigator.getBattery,
                    );
                  case 2:
                    a = d.sent;
                    if (!(typeof a !== 'function')) {
                      d.next = 5;
                      break;
                    }
                    return d.abrupt('return', {
                      level: g,
                      placeholder: !0,
                      wasCharged: !1,
                    });
                  case 5:
                    d.next = 7;
                    return b('regeneratorRuntime').awrap(a.call(navigator));
                  case 7:
                    c = d.sent;
                    c.charging
                      ? (h = !0)
                      : (c.onchargingchange = function (a) {
                          a.target.charging && (h = !0),
                            (a.target.onchargingchange = null);
                        });
                    return d.abrupt('return', {
                      level: c.level * 100,
                      placeholder: !1,
                      wasCharged: h,
                    });
                  case 10:
                  case 'end':
                    return d.stop();
                }
            },
            null,
            this,
          );
        },
        internalGetWindow: function () {
          return window;
        },
      };
    a = i;
    f['default'] = a;
  },
  66,
);
__d(
  'ZenonLSCallSummary',
  [
    'ZenonCallFalcoEventUtils',
    'ZenonCallInfoManager',
    'ZenonDeviceInfoHelper',
    'ZenonDismissReason',
    'ZenonLoggingEventTypes',
    'ZenonPeerID',
    'performanceNow',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b) {
        var e;
        e = a.call(this, b) || this;
        e.$ZenonLSCallSummary1 = {
          call_answered_time: '-1',
          call_connected_time: '-1',
          call_created_time: '-1',
          call_ended_time: '-1',
          last_updated_time: '-1',
        };
        e.$ZenonLSCallSummary2 = !1;
        e.$ZenonLSCallSummary3 = null;
        e.$ZenonLSCallSummary6 = null;
        e.$ZenonLSCallSummary8 = null;
        e.$ZenonLSCallSummary9 = null;
        e.$ZenonLSCallSummary10 = null;
        e.$ZenonLSCallSummary11 = null;
        e.$ZenonLSCallSummary18 = !1;
        e.$ZenonLSCallSummary12 = b.callTrigger;
        e.$ZenonLSCallSummary7 = b.isVideo;
        e.$ZenonLSCallSummary4 = 0;
        e.$ZenonLSCallSummary14 =
          (b = b.joinMode) != null
            ? b
            : d('ZenonLoggingEventTypes').ZenonJoinMode.Primary;
        e.$ZenonLSCallSummary5 = c('performanceNow')();
        e.setTimestamp('call_created_time');
        e.updateLastUpdatedTime();
        e.updateBatteryStart();
        return e;
      }
      var f = e.prototype;
      f.setTimestamp = function (a) {
        if (this.$ZenonLSCallSummary1[a] !== '-1') return;
        this.$ZenonLSCallSummary1[a] = String(this.$ZenonLSCallSummary19());
      };
      f.getTimestamps = function () {
        return this.$ZenonLSCallSummary1;
      };
      f.getExtraInfo = function () {
        var a = {};
        this.$ZenonLSCallSummary9 != null &&
          !isNaN(this.$ZenonLSCallSummary9) &&
          (a.battery_end_level = String(this.$ZenonLSCallSummary9));
        this.$ZenonLSCallSummary8 != null &&
          !isNaN(this.$ZenonLSCallSummary8) &&
          (a.battery_start_level = String(this.$ZenonLSCallSummary8));
        this.$ZenonLSCallSummary10 != null &&
          (a.was_device_charged = this.$ZenonLSCallSummary10);
        this.$ZenonLSCallSummary11 != null &&
          (a.max_concurrent_connected_participant = this.$ZenonLSCallSummary11);
        return a;
      };
      f.getVideoStats = function () {
        var a = {};
        if (this.$ZenonLSCallSummary6 != null) {
          var b;
          isNaN(this.$ZenonLSCallSummary6.ld) ||
            (a.local_video_duration = String(this.$ZenonLSCallSummary6.ld));
          if (!isNaN((b = this.$ZenonLSCallSummary6) == null ? void 0 : b.rd)) {
            a.remote_video_duration = String(
              (b = (b = this.$ZenonLSCallSummary6) == null ? void 0 : b.rd) !=
                null
                ? b
                : 0,
            );
          }
        }
        return a;
      };
      f.getEndCallStats = function () {
        var a = {};
        this.$ZenonLSCallSummary15 != null &&
          (a.end_call_reason = d('ZenonDismissReason').dismissToEndCallReason(
            this.$ZenonLSCallSummary15,
          ));
        this.$ZenonLSCallSummary16 != null &&
          (a.end_call_subreason = this.$ZenonLSCallSummary16);
        this.$ZenonLSCallSummary18 != null &&
          (a.remote_ended = this.$ZenonLSCallSummary18);
        this.$ZenonLSCallSummary3 != null &&
          (a.is_connected_end = this.$ZenonLSCallSummary3);
        return a;
      };
      f.getLoggingArgs = function () {
        var a = this.getCallInfo(),
          b = a.deviceID,
          c = a.peerID,
          e = a.serverInfoData;
        a = a.signalingID;
        return {
          call_id: a,
          conf_name: (a = this.$ZenonLSCallSummary13) != null ? a : '',
          peer_id: d('ZenonPeerID').convertPeerIDForLogging(c),
          serv_info: (a = e) != null ? a : '',
          web_device_id: b,
        };
      };
      f.getSummaryLoggingInfo = function () {
        var a = this.getCallInfo(),
          b = a.deviceID,
          c = a.isCaller,
          e = a.localCallID,
          f = a.peerID;
        a = a.serverInfoData;
        return babelHelpers['extends'](
          {},
          this.getTimestamps(),
          this.getExtraInfo(),
          this.getVideoStats(),
          this.getEndCallStats(),
          a != null && { shared_call_id: a },
          {
            call_trigger: (a = this.$ZenonLSCallSummary12) != null ? a : '',
            invite_requested_video: this.$ZenonLSCallSummary7,
            is_caller: c,
            join_mode: String(this.$ZenonLSCallSummary14),
            local_call_id: e,
            peer_id: d('ZenonPeerID').convertPeerIDForLogging(f),
            steady_time: d('ZenonCallFalcoEventUtils').performanceNowParsed(),
            system_time: String(Date.now()),
            web_device_id: b,
          },
        );
      };
      f.onCallEscalated = function () {
        this.updateLastUpdatedTime();
      };
      f.onCallAccepted = function (a) {
        (this.$ZenonLSCallSummary12 = a),
          this.setTimestamp('call_answered_time'),
          this.updateLastUpdatedTime();
      };
      f.onCallConnected = function () {
        this.setTimestamp('call_connected_time'), this.updateLastUpdatedTime();
      };
      f.setMediaStats = function (a) {
        (this.$ZenonLSCallSummary6 = a.video), this.updateLastUpdatedTime();
      };
      f.setMaxConnectedParticipants = function (a) {
        (this.$ZenonLSCallSummary11 = d(
          'ZenonCallFalcoEventUtils',
        ).nonNullIntNumber(a)),
          this.updateLastUpdatedTime();
      };
      f.unsetEndCallFields = function () {
        this.$ZenonLSCallSummary17 === !0 &&
          ((this.$ZenonLSCallSummary15 = null),
          (this.$ZenonLSCallSummary16 = null),
          (this.$ZenonLSCallSummary18 = null),
          (this.$ZenonLSCallSummary3 = null),
          (this.$ZenonLSCallSummary1.call_ended_time = '-1'),
          (this.$ZenonLSCallSummary5 = 0),
          (this.$ZenonLSCallSummary17 = null));
      };
      f.onCallEnded = function (a, c, d, e) {
        return b('regeneratorRuntime').async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  this.$ZenonLSCallSummary15 = a;
                  this.$ZenonLSCallSummary16 = e;
                  this.$ZenonLSCallSummary17 = d;
                  this.$ZenonLSCallSummary18 = c;
                  this.$ZenonLSCallSummary3 == null &&
                    (this.$ZenonLSCallSummary3 = this.$ZenonLSCallSummary2);
                  f.next = 7;
                  return b('regeneratorRuntime').awrap(this.updateBatteryEnd());
                case 7:
                  this.setTimestamp('call_ended_time'),
                    this.updateLastUpdatedTime();
                case 9:
                case 'end':
                  return f.stop();
              }
          },
          null,
          this,
        );
      };
      f.onPCStateChange = function (a) {
        (this.$ZenonLSCallSummary2 = a), this.updateLastUpdatedTime();
      };
      f.updateBatteryStart = function () {
        var a, d, e;
        return b('regeneratorRuntime').async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  f.next = 2;
                  return b('regeneratorRuntime').awrap(
                    c('ZenonDeviceInfoHelper').getBatteryStats(),
                  );
                case 2:
                  (a = f.sent),
                    (d = a.level),
                    (e = a.placeholder),
                    e !== !0 && (this.$ZenonLSCallSummary8 = parseInt(d, 10));
                case 6:
                case 'end':
                  return f.stop();
              }
          },
          null,
          this,
        );
      };
      f.updateBatteryEnd = function () {
        var a, d, e, f;
        return b('regeneratorRuntime').async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  g.next = 2;
                  return b('regeneratorRuntime').awrap(
                    c('ZenonDeviceInfoHelper').getBatteryStats(),
                  );
                case 2:
                  (a = g.sent),
                    (d = a.level),
                    (e = a.placeholder),
                    (f = a.wasCharged),
                    e !== !0 &&
                      ((this.$ZenonLSCallSummary9 = parseInt(d, 10)),
                      this.setDeviceCharged(f));
                case 7:
                case 'end':
                  return g.stop();
              }
          },
          null,
          this,
        );
      };
      f.setDeviceCharged = function (a) {
        this.$ZenonLSCallSummary10 !== !0 && (this.$ZenonLSCallSummary10 = a);
      };
      f.setConferenceName = function (a) {
        (this.$ZenonLSCallSummary13 = a), this.updateLastUpdatedTime();
      };
      f.getDeviceCharged = function () {
        return this.$ZenonLSCallSummary10;
      };
      e.fromJsonString = function (a) {
        var b;
        try {
          b = JSON.parse(a);
        } catch (a) {
          return null;
        }
        a = b.callInfo;
        var c = a.deviceID;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['deviceID']);
        a = new e(a);
        a.setDeviceID(c);
        a.$ZenonLSCallSummary1 = b.timestamps;
        a.$ZenonLSCallSummary2 = b.pcIsConnected;
        a.$ZenonLSCallSummary3 = b.endIsConnected;
        a.$ZenonLSCallSummary15 = b.endCallReason;
        a.$ZenonLSCallSummary16 = b.endCallSubreason;
        a.$ZenonLSCallSummary18 = b.isRemoteEnded;
        a.$ZenonLSCallSummary7 = b.isVideo;
        a.$ZenonLSCallSummary6 = {
          ld: parseInt(b.videoStats.local_video_duration, 10),
          rd: parseInt(b.videoStats.remote_video_duration, 10),
        };
        a.$ZenonLSCallSummary8 = parseInt(b.extraInfo.battery_start_level, 10);
        a.$ZenonLSCallSummary9 = parseInt(b.extraInfo.battery_end_level, 10);
        b.extraInfo.was_device_charged != null &&
          (a.$ZenonLSCallSummary10 = b.extraInfo.was_device_charged);
        b.extraInfo.max_concurrent_connected_participant != null &&
          (a.$ZenonLSCallSummary11 =
            b.extraInfo.max_concurrent_connected_participant);
        b.unsetOnRetrieve != null &&
          (a.$ZenonLSCallSummary17 = b.unsetOnRetrieve);
        b.accumulatedCallTime != null &&
          (a.$ZenonLSCallSummary4 = b.accumulatedCallTime);
        b.conferenceName != null &&
          (a.$ZenonLSCallSummary13 = b.conferenceName);
        return a;
      };
      f.toJsonString = function () {
        var a = {
          accumulatedCallTime: this.$ZenonLSCallSummary19(),
          callInfo: this.getCallInfo(),
          conferenceName: this.$ZenonLSCallSummary13,
          endCallReason: this.$ZenonLSCallSummary15,
          endCallSubreason: this.$ZenonLSCallSummary16,
          endIsConnected: this.$ZenonLSCallSummary3,
          extraInfo: this.getExtraInfo(),
          isRemoteEnded: this.$ZenonLSCallSummary18,
          isVideo: this.$ZenonLSCallSummary7,
          joinMode: this.$ZenonLSCallSummary14,
          pcIsConnected: this.$ZenonLSCallSummary2,
          timestamps: this.getTimestamps(),
          unsetOnRetrieve: this.$ZenonLSCallSummary17,
          videoStats: this.getVideoStats(),
        };
        return JSON.stringify(a);
      };
      f.$ZenonLSCallSummary19 = function () {
        var a = c('performanceNow')() - this.$ZenonLSCallSummary5;
        return Math.floor(this.$ZenonLSCallSummary4 + a);
      };
      f.updateLastUpdatedTime = function () {
        this.$ZenonLSCallSummary1.last_updated_time = String(
          this.$ZenonLSCallSummary19(),
        );
      };
      f.save = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.storeCallSummary(c, b, this);
      };
      f.remove = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.removeLocalStorageObjects([{ peerID: c, signalingID: b }]);
      };
      return e;
    })(c('ZenonCallInfoManager'));
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonLSCallSummaryStore',
  ['ZenonGenericLocalStorageStore', 'ZenonLSCallSummary'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'localstorage',
      i = 'RTC_LS_CALL_SUMMARY_',
      j = 'ls_summary',
      k = 3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, j, h, i) || this;
      }
      var d = b.prototype;
      d.retrieveCallSummary = function (a, b) {
        var d = this.getLocalStorageObjects();
        d = d[a] ? d[a][b] : null;
        if (d) return c('ZenonLSCallSummary').fromJsonString(d.__d);
        else return null;
      };
      d.storeCallSummary = function (a, b, c) {
        this.mutateLocalStorageObjects(
          function (d) {
            d[a] || (d[a] = {});
            d[a][b] = { __d: c.toJsonString(), __t: Date.now(), __z: !0 };
            return d;
          },
          k,
          !1,
          { peerID: a, signalingID: b },
        );
      };
      return b;
    })(c('ZenonGenericLocalStorageStore'));
    b = new a();
    g.ZenonLSCallSummaryStoreInstance = b;
  },
  98,
);
__d(
  'E2eeMetricsSerializers',
  ['ThriftTypes'],
  function (a, b, c, d, e, f) {
    'use strict';
    function g() {
      return {};
    }
    function h() {
      return {};
    }
    function a() {
      return { p2p_e2ee: g(), group_e2ee: h() };
    }
    function i(a, c) {
      c.writeStructBegin('P2pE2eeMetrics');
      a.engine_type != null &&
        (c.writeFieldBegin({
          fname: 'engine_type',
          ftype: b('ThriftTypes').I32,
          fid: 1,
        }),
        c.writeI32(a.engine_type),
        c.writeFieldEnd());
      a.status != null &&
        (c.writeFieldBegin({
          fname: 'status',
          ftype: b('ThriftTypes').I32,
          fid: 2,
        }),
        c.writeI32(a.status),
        c.writeFieldEnd());
      a.version != null &&
        (c.writeFieldBegin({
          fname: 'version',
          ftype: b('ThriftTypes').I32,
          fid: 3,
        }),
        c.writeI32(a.version),
        c.writeFieldEnd());
      a.gen_prekey_bundle_time_ms != null &&
        (c.writeFieldBegin({
          fname: 'gen_prekey_bundle_time_ms',
          ftype: b('ThriftTypes').I32,
          fid: 4,
        }),
        c.writeI32(a.gen_prekey_bundle_time_ms),
        c.writeFieldEnd());
      a.encrypted_msg_time_ms != null &&
        (c.writeFieldBegin({
          fname: 'encrypted_msg_time_ms',
          ftype: b('ThriftTypes').I32,
          fid: 5,
        }),
        c.writeI32(a.encrypted_msg_time_ms),
        c.writeFieldEnd());
      a.decrypted_msg_time_ms != null &&
        (c.writeFieldBegin({
          fname: 'decrypted_msg_time_ms',
          ftype: b('ThriftTypes').I32,
          fid: 6,
        }),
        c.writeI32(a.decrypted_msg_time_ms),
        c.writeFieldEnd());
      a.process_sdp_crypto_time_ms != null &&
        (c.writeFieldBegin({
          fname: 'process_sdp_crypto_time_ms',
          ftype: b('ThriftTypes').I32,
          fid: 7,
        }),
        c.writeI32(a.process_sdp_crypto_time_ms),
        c.writeFieldEnd());
      a.create_crypto_offer_time_ms != null &&
        (c.writeFieldBegin({
          fname: 'create_crypto_offer_time_ms',
          ftype: b('ThriftTypes').I32,
          fid: 8,
        }),
        c.writeI32(a.create_crypto_offer_time_ms),
        c.writeFieldEnd());
      a.create_crypto_answer_time_ms != null &&
        (c.writeFieldBegin({
          fname: 'create_crypto_answer_time_ms',
          ftype: b('ThriftTypes').I32,
          fid: 9,
        }),
        c.writeI32(a.create_crypto_answer_time_ms),
        c.writeFieldEnd());
      a.get_ik_time_ms != null &&
        (c.writeFieldBegin({
          fname: 'get_ik_time_ms',
          ftype: b('ThriftTypes').I32,
          fid: 10,
        }),
        c.writeI32(a.get_ik_time_ms),
        c.writeFieldEnd());
      a.peer_id != null &&
        (c.writeFieldBegin({
          fname: 'peer_id',
          ftype: b('ThriftTypes').I32,
          fid: 11,
        }),
        c.writeI32(a.peer_id),
        c.writeFieldEnd());
      a.peer_connection_index != null &&
        (c.writeFieldBegin({
          fname: 'peer_connection_index',
          ftype: b('ThriftTypes').I32,
          fid: 12,
        }),
        c.writeI32(a.peer_connection_index),
        c.writeFieldEnd());
      a.srtp_crypto_suite != null &&
        (c.writeFieldBegin({
          fname: 'srtp_crypto_suite',
          ftype: b('ThriftTypes').I32,
          fid: 13,
        }),
        c.writeI32(a.srtp_crypto_suite),
        c.writeFieldEnd());
      a.engine_error != null &&
        (c.writeFieldBegin({
          fname: 'engine_error',
          ftype: b('ThriftTypes').I32,
          fid: 14,
        }),
        c.writeI32(a.engine_error),
        c.writeFieldEnd());
      a.libsignal_error != null &&
        (c.writeFieldBegin({
          fname: 'libsignal_error',
          ftype: b('ThriftTypes').I32,
          fid: 15,
        }),
        c.writeI32(a.libsignal_error),
        c.writeFieldEnd());
      a.identity_key_mode != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_mode',
          ftype: b('ThriftTypes').I32,
          fid: 16,
        }),
        c.writeI32(a.identity_key_mode),
        c.writeFieldEnd());
      a.identity_key_num_persistent != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_num_persistent',
          ftype: b('ThriftTypes').I32,
          fid: 17,
        }),
        c.writeI32(a.identity_key_num_persistent),
        c.writeFieldEnd());
      a.identity_key_num_validated != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_num_validated',
          ftype: b('ThriftTypes').I32,
          fid: 18,
        }),
        c.writeI32(a.identity_key_num_validated),
        c.writeFieldEnd());
      a.identity_key_num_saved != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_num_saved',
          ftype: b('ThriftTypes').I32,
          fid: 19,
        }),
        c.writeI32(a.identity_key_num_saved),
        c.writeFieldEnd());
      a.identity_key_num_existing != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_num_existing',
          ftype: b('ThriftTypes').I32,
          fid: 20,
        }),
        c.writeI32(a.identity_key_num_existing),
        c.writeFieldEnd());
      a.is_e2ee_mandated != null &&
        (c.writeFieldBegin({
          fname: 'is_e2ee_mandated',
          ftype: b('ThriftTypes').I32,
          fid: 21,
        }),
        c.writeI32(a.is_e2ee_mandated),
        c.writeFieldEnd());
      a.local_trace_id != null &&
        (c.writeFieldBegin({
          fname: 'local_trace_id',
          ftype: b('ThriftTypes').I32,
          fid: 22,
        }),
        c.writeI32(a.local_trace_id),
        c.writeFieldEnd());
      a.remote_trace_id != null &&
        (c.writeFieldBegin({
          fname: 'remote_trace_id',
          ftype: b('ThriftTypes').I32,
          fid: 23,
        }),
        c.writeI32(a.remote_trace_id),
        c.writeFieldEnd());
      a.local_device_id != null &&
        (c.writeFieldBegin({
          fname: 'local_device_id',
          ftype: b('ThriftTypes').I32,
          fid: 24,
        }),
        c.writeI32(a.local_device_id),
        c.writeFieldEnd());
      a.remote_device_id != null &&
        (c.writeFieldBegin({
          fname: 'remote_device_id',
          ftype: b('ThriftTypes').I32,
          fid: 25,
        }),
        c.writeI32(a.remote_device_id),
        c.writeFieldEnd());
      if (a.events != null) {
        c.writeFieldBegin({
          fname: 'events',
          ftype: b('ThriftTypes').LIST,
          fid: 26,
        });
        c.writeListBegin({
          etype: b('ThriftTypes').I32,
          size: a.events.length,
        });
        for (
          var a = a.events,
            d = Array.isArray(a),
            e = 0,
            a = d
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          c.writeI32(f);
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function j(a, c) {
      c.writeStructBegin('GroupE2eeMetrics');
      a.received_key_message_counter != null &&
        (c.writeFieldBegin({
          fname: 'received_key_message_counter',
          ftype: b('ThriftTypes').I64,
          fid: 1,
        }),
        c.writeI64(BigInt(a.received_key_message_counter)),
        c.writeFieldEnd());
      a.sent_key_message_counter != null &&
        (c.writeFieldBegin({
          fname: 'sent_key_message_counter',
          ftype: b('ThriftTypes').I64,
          fid: 2,
        }),
        c.writeI64(BigInt(a.sent_key_message_counter)),
        c.writeFieldEnd());
      a.cached_key_message_counter != null &&
        (c.writeFieldBegin({
          fname: 'cached_key_message_counter',
          ftype: b('ThriftTypes').I64,
          fid: 3,
        }),
        c.writeI64(BigInt(a.cached_key_message_counter)),
        c.writeFieldEnd());
      a.used_cached_key_counter != null &&
        (c.writeFieldBegin({
          fname: 'used_cached_key_counter',
          ftype: b('ThriftTypes').I64,
          fid: 4,
        }),
        c.writeI64(BigInt(a.used_cached_key_counter)),
        c.writeFieldEnd());
      a.unused_smu_counter != null &&
        (c.writeFieldBegin({
          fname: 'unused_smu_counter',
          ftype: b('ThriftTypes').I64,
          fid: 5,
        }),
        c.writeI64(BigInt(a.unused_smu_counter)),
        c.writeFieldEnd());
      a.missing_key_message_counter != null &&
        (c.writeFieldBegin({
          fname: 'missing_key_message_counter',
          ftype: b('ThriftTypes').I64,
          fid: 6,
        }),
        c.writeI64(BigInt(a.missing_key_message_counter)),
        c.writeFieldEnd());
      a.negotiate_off_status != null &&
        (c.writeFieldBegin({
          fname: 'negotiate_off_status',
          ftype: b('ThriftTypes').I64,
          fid: 7,
        }),
        c.writeI64(BigInt(a.negotiate_off_status)),
        c.writeFieldEnd());
      a.cipher_suite_status != null &&
        (c.writeFieldBegin({
          fname: 'cipher_suite_status',
          ftype: b('ThriftTypes').I64,
          fid: 8,
        }),
        c.writeI64(BigInt(a.cipher_suite_status)),
        c.writeFieldEnd());
      a.decrypt_used_cached_session_counter != null &&
        (c.writeFieldBegin({
          fname: 'decrypt_used_cached_session_counter',
          ftype: b('ThriftTypes').I64,
          fid: 9,
        }),
        c.writeI64(BigInt(a.decrypt_used_cached_session_counter)),
        c.writeFieldEnd());
      a.encrypt_used_cached_session_counter != null &&
        (c.writeFieldBegin({
          fname: 'encrypt_used_cached_session_counter',
          ftype: b('ThriftTypes').I64,
          fid: 10,
        }),
        c.writeI64(BigInt(a.encrypt_used_cached_session_counter)),
        c.writeFieldEnd());
      a.sent_ack_message_counter != null &&
        (c.writeFieldBegin({
          fname: 'sent_ack_message_counter',
          ftype: b('ThriftTypes').I64,
          fid: 11,
        }),
        c.writeI64(BigInt(a.sent_ack_message_counter)),
        c.writeFieldEnd());
      a.reuse_ackd_uid_counter != null &&
        (c.writeFieldBegin({
          fname: 'reuse_ackd_uid_counter',
          ftype: b('ThriftTypes').I64,
          fid: 12,
        }),
        c.writeI64(BigInt(a.reuse_ackd_uid_counter)),
        c.writeFieldEnd());
      a.total_uids_created_counter != null &&
        (c.writeFieldBegin({
          fname: 'total_uids_created_counter',
          ftype: b('ThriftTypes').I64,
          fid: 13,
        }),
        c.writeI64(BigInt(a.total_uids_created_counter)),
        c.writeFieldEnd());
      a.generate_chain_key_failed_error != null &&
        (c.writeFieldBegin({
          fname: 'generate_chain_key_failed_error',
          ftype: b('ThriftTypes').I64,
          fid: 14,
        }),
        c.writeI64(BigInt(a.generate_chain_key_failed_error)),
        c.writeFieldEnd());
      a.set_chain_key_failed_error != null &&
        (c.writeFieldBegin({
          fname: 'set_chain_key_failed_error',
          ftype: b('ThriftTypes').I64,
          fid: 15,
        }),
        c.writeI64(BigInt(a.set_chain_key_failed_error)),
        c.writeFieldEnd());
      a.key_provider_not_found_error != null &&
        (c.writeFieldBegin({
          fname: 'key_provider_not_found_error',
          ftype: b('ThriftTypes').I64,
          fid: 16,
        }),
        c.writeI64(BigInt(a.key_provider_not_found_error)),
        c.writeFieldEnd());
      a.key_message_parse_failed_error != null &&
        (c.writeFieldBegin({
          fname: 'key_message_parse_failed_error',
          ftype: b('ThriftTypes').I64,
          fid: 17,
        }),
        c.writeI64(BigInt(a.key_message_parse_failed_error)),
        c.writeFieldEnd());
      a.empty_pkb_result_error != null &&
        (c.writeFieldBegin({
          fname: 'empty_pkb_result_error',
          ftype: b('ThriftTypes').I64,
          fid: 18,
        }),
        c.writeI64(BigInt(a.empty_pkb_result_error)),
        c.writeFieldEnd());
      a.empty_encrypt_result_error != null &&
        (c.writeFieldBegin({
          fname: 'empty_encrypt_result_error',
          ftype: b('ThriftTypes').I64,
          fid: 19,
        }),
        c.writeI64(BigInt(a.empty_encrypt_result_error)),
        c.writeFieldEnd());
      a.empty_decrypt_result_error != null &&
        (c.writeFieldBegin({
          fname: 'empty_decrypt_result_error',
          ftype: b('ThriftTypes').I64,
          fid: 20,
        }),
        c.writeI64(BigInt(a.empty_decrypt_result_error)),
        c.writeFieldEnd());
      a.empty_version_error != null &&
        (c.writeFieldBegin({
          fname: 'empty_version_error',
          ftype: b('ThriftTypes').I64,
          fid: 21,
        }),
        c.writeI64(BigInt(a.empty_version_error)),
        c.writeFieldEnd());
      a.unsupported_version_error != null &&
        (c.writeFieldBegin({
          fname: 'unsupported_version_error',
          ftype: b('ThriftTypes').I64,
          fid: 22,
        }),
        c.writeI64(BigInt(a.unsupported_version_error)),
        c.writeFieldEnd());
      a.midcall_version_change_error != null &&
        (c.writeFieldBegin({
          fname: 'midcall_version_change_error',
          ftype: b('ThriftTypes').I64,
          fid: 23,
        }),
        c.writeI64(BigInt(a.midcall_version_change_error)),
        c.writeFieldEnd());
      a.inconsistent_remote_maps_error != null &&
        (c.writeFieldBegin({
          fname: 'inconsistent_remote_maps_error',
          ftype: b('ThriftTypes').I64,
          fid: 24,
        }),
        c.writeI64(BigInt(a.inconsistent_remote_maps_error)),
        c.writeFieldEnd());
      a.key_message_pkb_mismatch_error != null &&
        (c.writeFieldBegin({
          fname: 'key_message_pkb_mismatch_error',
          ftype: b('ThriftTypes').I64,
          fid: 25,
        }),
        c.writeI64(BigInt(a.key_message_pkb_mismatch_error)),
        c.writeFieldEnd());
      a.no_key_or_ack_in_e2ee_message_error != null &&
        (c.writeFieldBegin({
          fname: 'no_key_or_ack_in_e2ee_message_error',
          ftype: b('ThriftTypes').I64,
          fid: 26,
        }),
        c.writeI64(BigInt(a.no_key_or_ack_in_e2ee_message_error)),
        c.writeFieldEnd());
      a.receiver_key_provider_not_found_error != null &&
        (c.writeFieldBegin({
          fname: 'receiver_key_provider_not_found_error',
          ftype: b('ThriftTypes').I64,
          fid: 27,
        }),
        c.writeI64(BigInt(a.receiver_key_provider_not_found_error)),
        c.writeFieldEnd());
      a.pkb_parse_failed_error != null &&
        (c.writeFieldBegin({
          fname: 'pkb_parse_failed_error',
          ftype: b('ThriftTypes').I64,
          fid: 28,
        }),
        c.writeI64(BigInt(a.pkb_parse_failed_error)),
        c.writeFieldEnd());
      a.message_deserialized_failed_error != null &&
        (c.writeFieldBegin({
          fname: 'message_deserialized_failed_error',
          ftype: b('ThriftTypes').I64,
          fid: 29,
        }),
        c.writeI64(BigInt(a.message_deserialized_failed_error)),
        c.writeFieldEnd());
      a.decrypt_no_identity_key_and_cached_session_not_used_error != null &&
        (c.writeFieldBegin({
          fname: 'decrypt_no_identity_key_and_cached_session_not_used_error',
          ftype: b('ThriftTypes').I64,
          fid: 30,
        }),
        c.writeI64(
          BigInt(a.decrypt_no_identity_key_and_cached_session_not_used_error),
        ),
        c.writeFieldEnd());
      a.encrypt_no_identity_key_and_cached_session_not_used_error != null &&
        (c.writeFieldBegin({
          fname: 'encrypt_no_identity_key_and_cached_session_not_used_error',
          ftype: b('ThriftTypes').I64,
          fid: 31,
        }),
        c.writeI64(
          BigInt(a.encrypt_no_identity_key_and_cached_session_not_used_error),
        ),
        c.writeFieldEnd());
      a.decrypt_ack_wrong_message_error != null &&
        (c.writeFieldBegin({
          fname: 'decrypt_ack_wrong_message_error',
          ftype: b('ThriftTypes').I64,
          fid: 32,
        }),
        c.writeI64(BigInt(a.decrypt_ack_wrong_message_error)),
        c.writeFieldEnd());
      a.invalid_uid_received_error != null &&
        (c.writeFieldBegin({
          fname: 'invalid_uid_received_error',
          ftype: b('ThriftTypes').I64,
          fid: 33,
        }),
        c.writeI64(BigInt(a.invalid_uid_received_error)),
        c.writeFieldEnd());
      a.ack_for_absent_user != null &&
        (c.writeFieldBegin({
          fname: 'ack_for_absent_user',
          ftype: b('ThriftTypes').I64,
          fid: 34,
        }),
        c.writeI64(BigInt(a.ack_for_absent_user)),
        c.writeFieldEnd());
      a.uid_not_awaiting_ack_error != null &&
        (c.writeFieldBegin({
          fname: 'uid_not_awaiting_ack_error',
          ftype: b('ThriftTypes').I64,
          fid: 35,
        }),
        c.writeI64(BigInt(a.uid_not_awaiting_ack_error)),
        c.writeFieldEnd());
      a.decrypt_ack_error != null &&
        (c.writeFieldBegin({
          fname: 'decrypt_ack_error',
          ftype: b('ThriftTypes').I64,
          fid: 36,
        }),
        c.writeI64(BigInt(a.decrypt_ack_error)),
        c.writeFieldEnd());
      a.empty_decrypt_result_ack_error != null &&
        (c.writeFieldBegin({
          fname: 'empty_decrypt_result_ack_error',
          ftype: b('ThriftTypes').I64,
          fid: 37,
        }),
        c.writeI64(BigInt(a.empty_decrypt_result_ack_error)),
        c.writeFieldEnd());
      a.decrypt_ack_cached_session_not_used_error != null &&
        (c.writeFieldBegin({
          fname: 'decrypt_ack_cached_session_not_used_error',
          ftype: b('ThriftTypes').I64,
          fid: 38,
        }),
        c.writeI64(BigInt(a.decrypt_ack_cached_session_not_used_error)),
        c.writeFieldEnd());
      a.encrypt_ack_error != null &&
        (c.writeFieldBegin({
          fname: 'encrypt_ack_error',
          ftype: b('ThriftTypes').I64,
          fid: 39,
        }),
        c.writeI64(BigInt(a.encrypt_ack_error)),
        c.writeFieldEnd());
      a.empty_encrypt_result_ack_error != null &&
        (c.writeFieldBegin({
          fname: 'empty_encrypt_result_ack_error',
          ftype: b('ThriftTypes').I64,
          fid: 40,
        }),
        c.writeI64(BigInt(a.empty_encrypt_result_ack_error)),
        c.writeFieldEnd());
      a.invalid_message_type_error != null &&
        (c.writeFieldBegin({
          fname: 'invalid_message_type_error',
          ftype: b('ThriftTypes').I64,
          fid: 41,
        }),
        c.writeI64(BigInt(a.invalid_message_type_error)),
        c.writeFieldEnd());
      a.server_state_deserialized_failed_error != null &&
        (c.writeFieldBegin({
          fname: 'server_state_deserialized_failed_error',
          ftype: b('ThriftTypes').I64,
          fid: 42,
        }),
        c.writeI64(BigInt(a.server_state_deserialized_failed_error)),
        c.writeFieldEnd());
      a.crypto_engine_failure_error != null &&
        (c.writeFieldBegin({
          fname: 'crypto_engine_failure_error',
          ftype: b('ThriftTypes').I64,
          fid: 43,
        }),
        c.writeI64(BigInt(a.crypto_engine_failure_error)),
        c.writeFieldEnd());
      a.empty_e2ee_client_state_error != null &&
        (c.writeFieldBegin({
          fname: 'empty_e2ee_client_state_error',
          ftype: b('ThriftTypes').I64,
          fid: 44,
        }),
        c.writeI64(BigInt(a.empty_e2ee_client_state_error)),
        c.writeFieldEnd());
      a.group_e2ee_negotiated != null &&
        (c.writeFieldBegin({
          fname: 'group_e2ee_negotiated',
          ftype: b('ThriftTypes').I64,
          fid: 45,
        }),
        c.writeI64(BigInt(a.group_e2ee_negotiated)),
        c.writeFieldEnd());
      a.negotiation_mode_kn != null &&
        (c.writeFieldBegin({
          fname: 'negotiation_mode_kn',
          ftype: b('ThriftTypes').I64,
          fid: 46,
        }),
        c.writeI64(BigInt(a.negotiation_mode_kn)),
        c.writeFieldEnd());
      a.group_e2ee_setup_status != null &&
        (c.writeFieldBegin({
          fname: 'group_e2ee_setup_status',
          ftype: b('ThriftTypes').I64,
          fid: 47,
        }),
        c.writeI64(BigInt(a.group_e2ee_setup_status)),
        c.writeFieldEnd());
      a.enable_group_e2ee != null &&
        (c.writeFieldBegin({
          fname: 'enable_group_e2ee',
          ftype: b('ThriftTypes').I64,
          fid: 48,
        }),
        c.writeI64(BigInt(a.enable_group_e2ee)),
        c.writeFieldEnd());
      a.identity_key_mode_group != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_mode_group',
          ftype: b('ThriftTypes').I64,
          fid: 49,
        }),
        c.writeI64(BigInt(a.identity_key_mode_group)),
        c.writeFieldEnd());
      a.identity_key_num_persistent_group != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_num_persistent_group',
          ftype: b('ThriftTypes').I64,
          fid: 50,
        }),
        c.writeI64(BigInt(a.identity_key_num_persistent_group)),
        c.writeFieldEnd());
      a.identity_key_num_validated_group != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_num_validated_group',
          ftype: b('ThriftTypes').I64,
          fid: 51,
        }),
        c.writeI64(BigInt(a.identity_key_num_validated_group)),
        c.writeFieldEnd());
      a.identity_key_num_saved_group != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_num_saved_group',
          ftype: b('ThriftTypes').I64,
          fid: 52,
        }),
        c.writeI64(BigInt(a.identity_key_num_saved_group)),
        c.writeFieldEnd());
      a.identity_key_num_existing_group != null &&
        (c.writeFieldBegin({
          fname: 'identity_key_num_existing_group',
          ftype: b('ThriftTypes').I64,
          fid: 53,
        }),
        c.writeI64(BigInt(a.identity_key_num_existing_group)),
        c.writeFieldEnd());
      a.max_key_message_latency_ms != null &&
        (c.writeFieldBegin({
          fname: 'max_key_message_latency_ms',
          ftype: b('ThriftTypes').I64,
          fid: 54,
        }),
        c.writeI64(BigInt(a.max_key_message_latency_ms)),
        c.writeFieldEnd());
      a.max_key_message_latency_ms_joiner != null &&
        (c.writeFieldBegin({
          fname: 'max_key_message_latency_ms_joiner',
          ftype: b('ThriftTypes').I64,
          fid: 55,
        }),
        c.writeI64(BigInt(a.max_key_message_latency_ms_joiner)),
        c.writeFieldEnd());
      a.max_smu_to_key_message_latency_ms != null &&
        (c.writeFieldBegin({
          fname: 'max_smu_to_key_message_latency_ms',
          ftype: b('ThriftTypes').I64,
          fid: 56,
        }),
        c.writeI64(BigInt(a.max_smu_to_key_message_latency_ms)),
        c.writeFieldEnd());
      a.process_smu_time_ms != null &&
        (c.writeFieldBegin({
          fname: 'process_smu_time_ms',
          ftype: b('ThriftTypes').I64,
          fid: 57,
        }),
        c.writeI64(BigInt(a.process_smu_time_ms)),
        c.writeFieldEnd());
      a.decryption_total_frames != null &&
        (c.writeFieldBegin({
          fname: 'decryption_total_frames',
          ftype: b('ThriftTypes').I64,
          fid: 58,
        }),
        c.writeI64(BigInt(a.decryption_total_frames)),
        c.writeFieldEnd());
      a.decryption_total_error_frames != null &&
        (c.writeFieldBegin({
          fname: 'decryption_total_error_frames',
          ftype: b('ThriftTypes').I64,
          fid: 59,
        }),
        c.writeI64(BigInt(a.decryption_total_error_frames)),
        c.writeFieldEnd());
      a.decryption_error_frames_alloc != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_alloc',
          ftype: b('ThriftTypes').I64,
          fid: 60,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_alloc)),
        c.writeFieldEnd());
      a.decryption_error_frames_invalid_params != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_invalid_params',
          ftype: b('ThriftTypes').I64,
          fid: 61,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_invalid_params)),
        c.writeFieldEnd());
      a.decryption_error_frames_cipher != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_cipher',
          ftype: b('ThriftTypes').I64,
          fid: 62,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_cipher)),
        c.writeFieldEnd());
      a.decryption_error_frames_parse != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_parse',
          ftype: b('ThriftTypes').I64,
          fid: 63,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_parse)),
        c.writeFieldEnd());
      a.decryption_error_frames_invalid_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_invalid_key',
          ftype: b('ThriftTypes').I64,
          fid: 64,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_invalid_key)),
        c.writeFieldEnd());
      a.decryption_error_frames_missing_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_missing_key',
          ftype: b('ThriftTypes').I64,
          fid: 65,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_missing_key)),
        c.writeFieldEnd());
      a.decryption_error_frames_out_of_ratchet_space != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_out_of_ratchet_space',
          ftype: b('ThriftTypes').I64,
          fid: 66,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_out_of_ratchet_space)),
        c.writeFieldEnd());
      a.decryption_error_frames_cipher_auth != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_cipher_auth',
          ftype: b('ThriftTypes').I64,
          fid: 67,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_cipher_auth)),
        c.writeFieldEnd());
      a.decryption_error_frames_frame_too_old != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_frame_too_old',
          ftype: b('ThriftTypes').I64,
          fid: 68,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_frame_too_old)),
        c.writeFieldEnd());
      a.decryption_error_frames_seen_frame != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_seen_frame',
          ftype: b('ThriftTypes').I64,
          fid: 69,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_seen_frame)),
        c.writeFieldEnd());
      a.decryption_error_frames_invalid_frame != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_invalid_frame',
          ftype: b('ThriftTypes').I64,
          fid: 70,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_invalid_frame)),
        c.writeFieldEnd());
      a.decryption_error_frames_setting_invalid_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_setting_invalid_key',
          ftype: b('ThriftTypes').I64,
          fid: 71,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_setting_invalid_key)),
        c.writeFieldEnd());
      a.decryption_error_frames_setting_existing_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_setting_existing_key',
          ftype: b('ThriftTypes').I64,
          fid: 72,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_setting_existing_key)),
        c.writeFieldEnd());
      a.decryption_error_frames_escape_data != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_escape_data',
          ftype: b('ThriftTypes').I64,
          fid: 73,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_escape_data)),
        c.writeFieldEnd());
      a.decryption_error_frames_deescape_data != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_deescape_data',
          ftype: b('ThriftTypes').I64,
          fid: 74,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_deescape_data)),
        c.writeFieldEnd());
      a.decryption_error_frames_parse_frame_or_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_parse_frame_or_key',
          ftype: b('ThriftTypes').I64,
          fid: 75,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_parse_frame_or_key)),
        c.writeFieldEnd());
      a.decryption_error_frames_unknown != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_unknown',
          ftype: b('ThriftTypes').I64,
          fid: 76,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_unknown)),
        c.writeFieldEnd());
      a.decryption_unencrypted_frames != null &&
        (c.writeFieldBegin({
          fname: 'decryption_unencrypted_frames',
          ftype: b('ThriftTypes').I64,
          fid: 77,
        }),
        c.writeI64(BigInt(a.decryption_unencrypted_frames)),
        c.writeFieldEnd());
      a.encryption_total_frames != null &&
        (c.writeFieldBegin({
          fname: 'encryption_total_frames',
          ftype: b('ThriftTypes').I64,
          fid: 78,
        }),
        c.writeI64(BigInt(a.encryption_total_frames)),
        c.writeFieldEnd());
      a.encryption_error_frames != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames',
          ftype: b('ThriftTypes').I64,
          fid: 79,
        }),
        c.writeI64(BigInt(a.encryption_error_frames)),
        c.writeFieldEnd());
      a.encryption_escape_bytes != null &&
        (c.writeFieldBegin({
          fname: 'encryption_escape_bytes',
          ftype: b('ThriftTypes').I64,
          fid: 80,
        }),
        c.writeI64(BigInt(a.encryption_escape_bytes)),
        c.writeFieldEnd());
      a.encryption_total_error_frames != null &&
        (c.writeFieldBegin({
          fname: 'encryption_total_error_frames',
          ftype: b('ThriftTypes').I64,
          fid: 81,
        }),
        c.writeI64(BigInt(a.encryption_total_error_frames)),
        c.writeFieldEnd());
      a.encryption_error_frames_alloc != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_alloc',
          ftype: b('ThriftTypes').I64,
          fid: 82,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_alloc)),
        c.writeFieldEnd());
      a.encryption_error_frames_invalid_params != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_invalid_params',
          ftype: b('ThriftTypes').I64,
          fid: 83,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_invalid_params)),
        c.writeFieldEnd());
      a.encryption_error_frames_cipher != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_cipher',
          ftype: b('ThriftTypes').I64,
          fid: 84,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_cipher)),
        c.writeFieldEnd());
      a.encryption_error_frames_parse != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_parse',
          ftype: b('ThriftTypes').I64,
          fid: 85,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_parse)),
        c.writeFieldEnd());
      a.encryption_error_frames_invalid_key != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_invalid_key',
          ftype: b('ThriftTypes').I64,
          fid: 86,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_invalid_key)),
        c.writeFieldEnd());
      a.encryption_error_frames_cipher_auth != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_cipher_auth',
          ftype: b('ThriftTypes').I64,
          fid: 87,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_cipher_auth)),
        c.writeFieldEnd());
      a.encryption_error_frames_escape_data != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_escape_data',
          ftype: b('ThriftTypes').I64,
          fid: 88,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_escape_data)),
        c.writeFieldEnd());
      a.encryption_error_frames_unsupported_codec != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_unsupported_codec',
          ftype: b('ThriftTypes').I64,
          fid: 89,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_unsupported_codec)),
        c.writeFieldEnd());
      a.encryption_error_frames_unknown != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_unknown',
          ftype: b('ThriftTypes').I64,
          fid: 90,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_unknown)),
        c.writeFieldEnd());
      a.decryption_total_frames_data_channel != null &&
        (c.writeFieldBegin({
          fname: 'decryption_total_frames_data_channel',
          ftype: b('ThriftTypes').I64,
          fid: 91,
        }),
        c.writeI64(BigInt(a.decryption_total_frames_data_channel)),
        c.writeFieldEnd());
      a.decryption_total_error_frames_data_channel != null &&
        (c.writeFieldBegin({
          fname: 'decryption_total_error_frames_data_channel',
          ftype: b('ThriftTypes').I64,
          fid: 92,
        }),
        c.writeI64(BigInt(a.decryption_total_error_frames_data_channel)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_alloc != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_alloc',
          ftype: b('ThriftTypes').I64,
          fid: 93,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_alloc)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_invalid_params != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_invalid_params',
          ftype: b('ThriftTypes').I64,
          fid: 94,
        }),
        c.writeI64(
          BigInt(a.decryption_error_frames_data_channel_invalid_params),
        ),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_cipher != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_cipher',
          ftype: b('ThriftTypes').I64,
          fid: 95,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_cipher)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_parse != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_parse',
          ftype: b('ThriftTypes').I64,
          fid: 96,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_parse)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_invalid_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_invalid_key',
          ftype: b('ThriftTypes').I64,
          fid: 97,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_invalid_key)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_missing_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_missing_key',
          ftype: b('ThriftTypes').I64,
          fid: 98,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_missing_key)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_out_of_ratchet_space != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_out_of_ratchet_space',
          ftype: b('ThriftTypes').I64,
          fid: 99,
        }),
        c.writeI64(
          BigInt(a.decryption_error_frames_data_channel_out_of_ratchet_space),
        ),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_cipher_auth != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_cipher_auth',
          ftype: b('ThriftTypes').I64,
          fid: 100,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_cipher_auth)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_frame_too_old != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_frame_too_old',
          ftype: b('ThriftTypes').I64,
          fid: 101,
        }),
        c.writeI64(
          BigInt(a.decryption_error_frames_data_channel_frame_too_old),
        ),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_seen_frame != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_seen_frame',
          ftype: b('ThriftTypes').I64,
          fid: 102,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_seen_frame)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_invalid_frame != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_invalid_frame',
          ftype: b('ThriftTypes').I64,
          fid: 103,
        }),
        c.writeI64(
          BigInt(a.decryption_error_frames_data_channel_invalid_frame),
        ),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_setting_invalid_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_setting_invalid_key',
          ftype: b('ThriftTypes').I64,
          fid: 104,
        }),
        c.writeI64(
          BigInt(a.decryption_error_frames_data_channel_setting_invalid_key),
        ),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_setting_existing_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_setting_existing_key',
          ftype: b('ThriftTypes').I64,
          fid: 105,
        }),
        c.writeI64(
          BigInt(a.decryption_error_frames_data_channel_setting_existing_key),
        ),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_escape_data != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_escape_data',
          ftype: b('ThriftTypes').I64,
          fid: 106,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_escape_data)),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_deescape_data != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_deescape_data',
          ftype: b('ThriftTypes').I64,
          fid: 107,
        }),
        c.writeI64(
          BigInt(a.decryption_error_frames_data_channel_deescape_data),
        ),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_parse_frame_or_key != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_parse_frame_or_key',
          ftype: b('ThriftTypes').I64,
          fid: 108,
        }),
        c.writeI64(
          BigInt(a.decryption_error_frames_data_channel_parse_frame_or_key),
        ),
        c.writeFieldEnd());
      a.decryption_error_frames_data_channel_unknown != null &&
        (c.writeFieldBegin({
          fname: 'decryption_error_frames_data_channel_unknown',
          ftype: b('ThriftTypes').I64,
          fid: 109,
        }),
        c.writeI64(BigInt(a.decryption_error_frames_data_channel_unknown)),
        c.writeFieldEnd());
      a.decryption_unencrypted_frames_data_channel != null &&
        (c.writeFieldBegin({
          fname: 'decryption_unencrypted_frames_data_channel',
          ftype: b('ThriftTypes').I64,
          fid: 110,
        }),
        c.writeI64(BigInt(a.decryption_unencrypted_frames_data_channel)),
        c.writeFieldEnd());
      a.encryption_total_frames_data_channel != null &&
        (c.writeFieldBegin({
          fname: 'encryption_total_frames_data_channel',
          ftype: b('ThriftTypes').I64,
          fid: 111,
        }),
        c.writeI64(BigInt(a.encryption_total_frames_data_channel)),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel',
          ftype: b('ThriftTypes').I64,
          fid: 112,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_data_channel)),
        c.writeFieldEnd());
      a.encryption_total_error_frames_data_channel != null &&
        (c.writeFieldBegin({
          fname: 'encryption_total_error_frames_data_channel',
          ftype: b('ThriftTypes').I64,
          fid: 113,
        }),
        c.writeI64(BigInt(a.encryption_total_error_frames_data_channel)),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_alloc != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_alloc',
          ftype: b('ThriftTypes').I64,
          fid: 114,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_data_channel_alloc)),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_invalid_params != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_invalid_params',
          ftype: b('ThriftTypes').I64,
          fid: 115,
        }),
        c.writeI64(
          BigInt(a.encryption_error_frames_data_channel_invalid_params),
        ),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_cipher != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_cipher',
          ftype: b('ThriftTypes').I64,
          fid: 116,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_data_channel_cipher)),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_parse != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_parse',
          ftype: b('ThriftTypes').I64,
          fid: 117,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_data_channel_parse)),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_invalid_key != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_invalid_key',
          ftype: b('ThriftTypes').I64,
          fid: 118,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_data_channel_invalid_key)),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_cipher_auth != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_cipher_auth',
          ftype: b('ThriftTypes').I64,
          fid: 119,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_data_channel_cipher_auth)),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_escape_data != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_escape_data',
          ftype: b('ThriftTypes').I64,
          fid: 120,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_data_channel_escape_data)),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_unsupported_codec != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_unsupported_codec',
          ftype: b('ThriftTypes').I64,
          fid: 121,
        }),
        c.writeI64(
          BigInt(a.encryption_error_frames_data_channel_unsupported_codec),
        ),
        c.writeFieldEnd());
      a.encryption_error_frames_data_channel_unknown != null &&
        (c.writeFieldBegin({
          fname: 'encryption_error_frames_data_channel_unknown',
          ftype: b('ThriftTypes').I64,
          fid: 122,
        }),
        c.writeI64(BigInt(a.encryption_error_frames_data_channel_unknown)),
        c.writeFieldEnd());
      a.num_removed_data_decryptors != null &&
        (c.writeFieldBegin({
          fname: 'num_removed_data_decryptors',
          ftype: b('ThriftTypes').I64,
          fid: 123,
        }),
        c.writeI64(BigInt(a.num_removed_data_decryptors)),
        c.writeFieldEnd());
      a.num_frame_decryptor_with_unencrypted_data != null &&
        (c.writeFieldBegin({
          fname: 'num_frame_decryptor_with_unencrypted_data',
          ftype: b('ThriftTypes').I64,
          fid: 124,
        }),
        c.writeI64(BigInt(a.num_frame_decryptor_with_unencrypted_data)),
        c.writeFieldEnd());
      a.num_removed_decryptors != null &&
        (c.writeFieldBegin({
          fname: 'num_removed_decryptors',
          ftype: b('ThriftTypes').I64,
          fid: 125,
        }),
        c.writeI64(BigInt(a.num_removed_decryptors)),
        c.writeFieldEnd());
      a.data_channel_encryption_not_ready_in_mandated_calls_error != null &&
        (c.writeFieldBegin({
          fname: 'data_channel_encryption_not_ready_in_mandated_calls_error',
          ftype: b('ThriftTypes').I64,
          fid: 126,
        }),
        c.writeI64(
          BigInt(a.data_channel_encryption_not_ready_in_mandated_calls_error),
        ),
        c.writeFieldEnd());
      a.num_e2ee_message_total_encrypt != null &&
        (c.writeFieldBegin({
          fname: 'num_e2ee_message_total_encrypt',
          ftype: b('ThriftTypes').I64,
          fid: 127,
        }),
        c.writeI64(BigInt(a.num_e2ee_message_total_encrypt)),
        c.writeFieldEnd());
      a.num_e2ee_message_error_encrypt != null &&
        (c.writeFieldBegin({
          fname: 'num_e2ee_message_error_encrypt',
          ftype: b('ThriftTypes').I64,
          fid: 128,
        }),
        c.writeI64(BigInt(a.num_e2ee_message_error_encrypt)),
        c.writeFieldEnd());
      a.num_e2ee_message_total_decrypt != null &&
        (c.writeFieldBegin({
          fname: 'num_e2ee_message_total_decrypt',
          ftype: b('ThriftTypes').I64,
          fid: 129,
        }),
        c.writeI64(BigInt(a.num_e2ee_message_total_decrypt)),
        c.writeFieldEnd());
      a.num_e2ee_message_error_decrypt != null &&
        (c.writeFieldBegin({
          fname: 'num_e2ee_message_error_decrypt',
          ftype: b('ThriftTypes').I64,
          fid: 130,
        }),
        c.writeI64(BigInt(a.num_e2ee_message_error_decrypt)),
        c.writeFieldEnd());
      a.negotiate_off_time != null &&
        (c.writeFieldBegin({
          fname: 'negotiate_off_time',
          ftype: b('ThriftTypes').I64,
          fid: 131,
        }),
        c.writeI64(BigInt(a.negotiate_off_time)),
        c.writeFieldEnd());
      a.negotiated_version != null &&
        (c.writeFieldBegin({
          fname: 'negotiated_version',
          ftype: b('ThriftTypes').I64,
          fid: 132,
        }),
        c.writeI64(BigInt(a.negotiated_version)),
        c.writeFieldEnd());
      a.decryptor_removed_time != null &&
        (c.writeFieldBegin({
          fname: 'decryptor_removed_time',
          ftype: b('ThriftTypes').I64,
          fid: 133,
        }),
        c.writeI64(BigInt(a.decryptor_removed_time)),
        c.writeFieldEnd());
      a.is_e2ee_mandated_group != null &&
        (c.writeFieldBegin({
          fname: 'is_e2ee_mandated_group',
          ftype: b('ThriftTypes').I64,
          fid: 134,
        }),
        c.writeI64(BigInt(a.is_e2ee_mandated_group)),
        c.writeFieldEnd());
      if (a.events != null) {
        c.writeFieldBegin({
          fname: 'events',
          ftype: b('ThriftTypes').LIST,
          fid: 135,
        });
        c.writeListBegin({
          etype: b('ThriftTypes').I64,
          size: a.events.length,
        });
        for (
          var d = a.events,
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
          c.writeI64(BigInt(g));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      a.num_e2ee_message_received != null &&
        (c.writeFieldBegin({
          fname: 'num_e2ee_message_received',
          ftype: b('ThriftTypes').I64,
          fid: 136,
        }),
        c.writeI64(BigInt(a.num_e2ee_message_received)),
        c.writeFieldEnd());
      a.num_e2ee_message_error_decrypt_non_e2ee_received != null &&
        (c.writeFieldBegin({
          fname: 'num_e2ee_message_error_decrypt_non_e2ee_received',
          ftype: b('ThriftTypes').I64,
          fid: 137,
        }),
        c.writeI64(BigInt(a.num_e2ee_message_error_decrypt_non_e2ee_received)),
        c.writeFieldEnd());
      a.num_e2ee_message_error_decrypt_missing_sender != null &&
        (c.writeFieldBegin({
          fname: 'num_e2ee_message_error_decrypt_missing_sender',
          ftype: b('ThriftTypes').I64,
          fid: 138,
        }),
        c.writeI64(BigInt(a.num_e2ee_message_error_decrypt_missing_sender)),
        c.writeFieldEnd());
      a.num_e2ee_message_error_decrypt_exceeding_retry != null &&
        (c.writeFieldBegin({
          fname: 'num_e2ee_message_error_decrypt_exceeding_retry',
          ftype: b('ThriftTypes').I64,
          fid: 139,
        }),
        c.writeI64(BigInt(a.num_e2ee_message_error_decrypt_exceeding_retry)),
        c.writeFieldEnd());
      a.max_media_channel_key_message_retry_count != null &&
        (c.writeFieldBegin({
          fname: 'max_media_channel_key_message_retry_count',
          ftype: b('ThriftTypes').I64,
          fid: 140,
        }),
        c.writeI64(BigInt(a.max_media_channel_key_message_retry_count)),
        c.writeFieldEnd());
      a.g_e2ee_total_count_of_extra_decryptions != null &&
        (c.writeFieldBegin({
          fname: 'g_e2ee_total_count_of_extra_decryptions',
          ftype: b('ThriftTypes').I64,
          fid: 141,
        }),
        c.writeI64(BigInt(a.g_e2ee_total_count_of_extra_decryptions)),
        c.writeFieldEnd());
      a.g_e2ee_total_count_of_extra_decryptions_failures != null &&
        (c.writeFieldBegin({
          fname: 'g_e2ee_total_count_of_extra_decryptions_failures',
          ftype: b('ThriftTypes').I64,
          fid: 142,
        }),
        c.writeI64(BigInt(a.g_e2ee_total_count_of_extra_decryptions_failures)),
        c.writeFieldEnd());
      a.g_e2ee_total_count_of_extra_decryptions_failures_due_to_missing_key !=
        null &&
        (c.writeFieldBegin({
          fname:
            'g_e2ee_total_count_of_extra_decryptions_failures_due_to_missing_key',
          ftype: b('ThriftTypes').I64,
          fid: 143,
        }),
        c.writeI64(
          BigInt(
            a.g_e2ee_total_count_of_extra_decryptions_failures_due_to_missing_key,
          ),
        ),
        c.writeFieldEnd());
      a.g_e2ee_decryption_error_frames_empty_supported_codes != null &&
        (c.writeFieldBegin({
          fname: 'g_e2ee_decryption_error_frames_empty_supported_codes',
          ftype: b('ThriftTypes').I64,
          fid: 144,
        }),
        c.writeI64(
          BigInt(a.g_e2ee_decryption_error_frames_empty_supported_codes),
        ),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function c(a, c) {
      c.writeStructBegin('E2eeMetrics');
      c.writeFieldBegin({
        fname: 'p2p_e2ee',
        ftype: b('ThriftTypes').STRUCT,
        fid: 1,
      });
      if (a.p2p_e2ee != null) i(a.p2p_e2ee, c);
      else {
        var d = g();
        i(d, c);
      }
      c.writeFieldEnd();
      c.writeFieldBegin({
        fname: 'group_e2ee',
        ftype: b('ThriftTypes').STRUCT,
        fid: 2,
      });
      if (a.group_e2ee != null) j(a.group_e2ee, c);
      else {
        d = h();
        j(d, c);
      }
      c.writeFieldEnd();
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function k(a) {
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
              ? (c.engine_type = a.readI32())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').I32 ? (c.status = a.readI32()) : a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').I32 ? (c.version = a.readI32()) : a.skip(e);
            break;
          case 4:
            e === b('ThriftTypes').I32
              ? (c.gen_prekey_bundle_time_ms = a.readI32())
              : a.skip(e);
            break;
          case 5:
            e === b('ThriftTypes').I32
              ? (c.encrypted_msg_time_ms = a.readI32())
              : a.skip(e);
            break;
          case 6:
            e === b('ThriftTypes').I32
              ? (c.decrypted_msg_time_ms = a.readI32())
              : a.skip(e);
            break;
          case 7:
            e === b('ThriftTypes').I32
              ? (c.process_sdp_crypto_time_ms = a.readI32())
              : a.skip(e);
            break;
          case 8:
            e === b('ThriftTypes').I32
              ? (c.create_crypto_offer_time_ms = a.readI32())
              : a.skip(e);
            break;
          case 9:
            e === b('ThriftTypes').I32
              ? (c.create_crypto_answer_time_ms = a.readI32())
              : a.skip(e);
            break;
          case 10:
            e === b('ThriftTypes').I32
              ? (c.get_ik_time_ms = a.readI32())
              : a.skip(e);
            break;
          case 11:
            e === b('ThriftTypes').I32 ? (c.peer_id = a.readI32()) : a.skip(e);
            break;
          case 12:
            e === b('ThriftTypes').I32
              ? (c.peer_connection_index = a.readI32())
              : a.skip(e);
            break;
          case 13:
            e === b('ThriftTypes').I32
              ? (c.srtp_crypto_suite = a.readI32())
              : a.skip(e);
            break;
          case 14:
            e === b('ThriftTypes').I32
              ? (c.engine_error = a.readI32())
              : a.skip(e);
            break;
          case 15:
            e === b('ThriftTypes').I32
              ? (c.libsignal_error = a.readI32())
              : a.skip(e);
            break;
          case 16:
            e === b('ThriftTypes').I32
              ? (c.identity_key_mode = a.readI32())
              : a.skip(e);
            break;
          case 17:
            e === b('ThriftTypes').I32
              ? (c.identity_key_num_persistent = a.readI32())
              : a.skip(e);
            break;
          case 18:
            e === b('ThriftTypes').I32
              ? (c.identity_key_num_validated = a.readI32())
              : a.skip(e);
            break;
          case 19:
            e === b('ThriftTypes').I32
              ? (c.identity_key_num_saved = a.readI32())
              : a.skip(e);
            break;
          case 20:
            e === b('ThriftTypes').I32
              ? (c.identity_key_num_existing = a.readI32())
              : a.skip(e);
            break;
          case 21:
            e === b('ThriftTypes').I32
              ? (c.is_e2ee_mandated = a.readI32())
              : a.skip(e);
            break;
          case 22:
            e === b('ThriftTypes').I32
              ? (c.local_trace_id = a.readI32())
              : a.skip(e);
            break;
          case 23:
            e === b('ThriftTypes').I32
              ? (c.remote_trace_id = a.readI32())
              : a.skip(e);
            break;
          case 24:
            e === b('ThriftTypes').I32
              ? (c.local_device_id = a.readI32())
              : a.skip(e);
            break;
          case 25:
            e === b('ThriftTypes').I32
              ? (c.remote_device_id = a.readI32())
              : a.skip(e);
            break;
          case 26:
            if (e === b('ThriftTypes').LIST) {
              c.events = [];
              d = a.readListBegin();
              for (var f = 0; f < d.size; f++) {
                var g = a.readI32();
                c.events.push(g);
              }
            } else a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return c;
    }
    function l(a) {
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
              ? (c.received_key_message_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').I64
              ? (c.sent_key_message_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 3:
            e === b('ThriftTypes').I64
              ? (c.cached_key_message_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 4:
            e === b('ThriftTypes').I64
              ? (c.used_cached_key_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 5:
            e === b('ThriftTypes').I64
              ? (c.unused_smu_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 6:
            e === b('ThriftTypes').I64
              ? (c.missing_key_message_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 7:
            e === b('ThriftTypes').I64
              ? (c.negotiate_off_status = a.readI64().toString())
              : a.skip(e);
            break;
          case 8:
            e === b('ThriftTypes').I64
              ? (c.cipher_suite_status = a.readI64().toString())
              : a.skip(e);
            break;
          case 9:
            e === b('ThriftTypes').I64
              ? (c.decrypt_used_cached_session_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 10:
            e === b('ThriftTypes').I64
              ? (c.encrypt_used_cached_session_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 11:
            e === b('ThriftTypes').I64
              ? (c.sent_ack_message_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 12:
            e === b('ThriftTypes').I64
              ? (c.reuse_ackd_uid_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 13:
            e === b('ThriftTypes').I64
              ? (c.total_uids_created_counter = a.readI64().toString())
              : a.skip(e);
            break;
          case 14:
            e === b('ThriftTypes').I64
              ? (c.generate_chain_key_failed_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 15:
            e === b('ThriftTypes').I64
              ? (c.set_chain_key_failed_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 16:
            e === b('ThriftTypes').I64
              ? (c.key_provider_not_found_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 17:
            e === b('ThriftTypes').I64
              ? (c.key_message_parse_failed_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 18:
            e === b('ThriftTypes').I64
              ? (c.empty_pkb_result_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 19:
            e === b('ThriftTypes').I64
              ? (c.empty_encrypt_result_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 20:
            e === b('ThriftTypes').I64
              ? (c.empty_decrypt_result_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 21:
            e === b('ThriftTypes').I64
              ? (c.empty_version_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 22:
            e === b('ThriftTypes').I64
              ? (c.unsupported_version_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 23:
            e === b('ThriftTypes').I64
              ? (c.midcall_version_change_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 24:
            e === b('ThriftTypes').I64
              ? (c.inconsistent_remote_maps_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 25:
            e === b('ThriftTypes').I64
              ? (c.key_message_pkb_mismatch_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 26:
            e === b('ThriftTypes').I64
              ? (c.no_key_or_ack_in_e2ee_message_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 27:
            e === b('ThriftTypes').I64
              ? (c.receiver_key_provider_not_found_error = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 28:
            e === b('ThriftTypes').I64
              ? (c.pkb_parse_failed_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 29:
            e === b('ThriftTypes').I64
              ? (c.message_deserialized_failed_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 30:
            e === b('ThriftTypes').I64
              ? (c.decrypt_no_identity_key_and_cached_session_not_used_error = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 31:
            e === b('ThriftTypes').I64
              ? (c.encrypt_no_identity_key_and_cached_session_not_used_error = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 32:
            e === b('ThriftTypes').I64
              ? (c.decrypt_ack_wrong_message_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 33:
            e === b('ThriftTypes').I64
              ? (c.invalid_uid_received_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 34:
            e === b('ThriftTypes').I64
              ? (c.ack_for_absent_user = a.readI64().toString())
              : a.skip(e);
            break;
          case 35:
            e === b('ThriftTypes').I64
              ? (c.uid_not_awaiting_ack_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 36:
            e === b('ThriftTypes').I64
              ? (c.decrypt_ack_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 37:
            e === b('ThriftTypes').I64
              ? (c.empty_decrypt_result_ack_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 38:
            e === b('ThriftTypes').I64
              ? (c.decrypt_ack_cached_session_not_used_error = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 39:
            e === b('ThriftTypes').I64
              ? (c.encrypt_ack_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 40:
            e === b('ThriftTypes').I64
              ? (c.empty_encrypt_result_ack_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 41:
            e === b('ThriftTypes').I64
              ? (c.invalid_message_type_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 42:
            e === b('ThriftTypes').I64
              ? (c.server_state_deserialized_failed_error = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 43:
            e === b('ThriftTypes').I64
              ? (c.crypto_engine_failure_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 44:
            e === b('ThriftTypes').I64
              ? (c.empty_e2ee_client_state_error = a.readI64().toString())
              : a.skip(e);
            break;
          case 45:
            e === b('ThriftTypes').I64
              ? (c.group_e2ee_negotiated = a.readI64().toString())
              : a.skip(e);
            break;
          case 46:
            e === b('ThriftTypes').I64
              ? (c.negotiation_mode_kn = a.readI64().toString())
              : a.skip(e);
            break;
          case 47:
            e === b('ThriftTypes').I64
              ? (c.group_e2ee_setup_status = a.readI64().toString())
              : a.skip(e);
            break;
          case 48:
            e === b('ThriftTypes').I64
              ? (c.enable_group_e2ee = a.readI64().toString())
              : a.skip(e);
            break;
          case 49:
            e === b('ThriftTypes').I64
              ? (c.identity_key_mode_group = a.readI64().toString())
              : a.skip(e);
            break;
          case 50:
            e === b('ThriftTypes').I64
              ? (c.identity_key_num_persistent_group = a.readI64().toString())
              : a.skip(e);
            break;
          case 51:
            e === b('ThriftTypes').I64
              ? (c.identity_key_num_validated_group = a.readI64().toString())
              : a.skip(e);
            break;
          case 52:
            e === b('ThriftTypes').I64
              ? (c.identity_key_num_saved_group = a.readI64().toString())
              : a.skip(e);
            break;
          case 53:
            e === b('ThriftTypes').I64
              ? (c.identity_key_num_existing_group = a.readI64().toString())
              : a.skip(e);
            break;
          case 54:
            e === b('ThriftTypes').I64
              ? (c.max_key_message_latency_ms = a.readI64().toString())
              : a.skip(e);
            break;
          case 55:
            e === b('ThriftTypes').I64
              ? (c.max_key_message_latency_ms_joiner = a.readI64().toString())
              : a.skip(e);
            break;
          case 56:
            e === b('ThriftTypes').I64
              ? (c.max_smu_to_key_message_latency_ms = a.readI64().toString())
              : a.skip(e);
            break;
          case 57:
            e === b('ThriftTypes').I64
              ? (c.process_smu_time_ms = a.readI64().toString())
              : a.skip(e);
            break;
          case 58:
            e === b('ThriftTypes').I64
              ? (c.decryption_total_frames = a.readI64().toString())
              : a.skip(e);
            break;
          case 59:
            e === b('ThriftTypes').I64
              ? (c.decryption_total_error_frames = a.readI64().toString())
              : a.skip(e);
            break;
          case 60:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_alloc = a.readI64().toString())
              : a.skip(e);
            break;
          case 61:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_invalid_params = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 62:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_cipher = a.readI64().toString())
              : a.skip(e);
            break;
          case 63:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_parse = a.readI64().toString())
              : a.skip(e);
            break;
          case 64:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_invalid_key = a.readI64().toString())
              : a.skip(e);
            break;
          case 65:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_missing_key = a.readI64().toString())
              : a.skip(e);
            break;
          case 66:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_out_of_ratchet_space = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 67:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_cipher_auth = a.readI64().toString())
              : a.skip(e);
            break;
          case 68:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_frame_too_old = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 69:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_seen_frame = a.readI64().toString())
              : a.skip(e);
            break;
          case 70:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_invalid_frame = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 71:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_setting_invalid_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 72:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_setting_existing_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 73:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_escape_data = a.readI64().toString())
              : a.skip(e);
            break;
          case 74:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_deescape_data = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 75:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_parse_frame_or_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 76:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_unknown = a.readI64().toString())
              : a.skip(e);
            break;
          case 77:
            e === b('ThriftTypes').I64
              ? (c.decryption_unencrypted_frames = a.readI64().toString())
              : a.skip(e);
            break;
          case 78:
            e === b('ThriftTypes').I64
              ? (c.encryption_total_frames = a.readI64().toString())
              : a.skip(e);
            break;
          case 79:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames = a.readI64().toString())
              : a.skip(e);
            break;
          case 80:
            e === b('ThriftTypes').I64
              ? (c.encryption_escape_bytes = a.readI64().toString())
              : a.skip(e);
            break;
          case 81:
            e === b('ThriftTypes').I64
              ? (c.encryption_total_error_frames = a.readI64().toString())
              : a.skip(e);
            break;
          case 82:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_alloc = a.readI64().toString())
              : a.skip(e);
            break;
          case 83:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_invalid_params = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 84:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_cipher = a.readI64().toString())
              : a.skip(e);
            break;
          case 85:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_parse = a.readI64().toString())
              : a.skip(e);
            break;
          case 86:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_invalid_key = a.readI64().toString())
              : a.skip(e);
            break;
          case 87:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_cipher_auth = a.readI64().toString())
              : a.skip(e);
            break;
          case 88:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_escape_data = a.readI64().toString())
              : a.skip(e);
            break;
          case 89:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_unsupported_codec = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 90:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_unknown = a.readI64().toString())
              : a.skip(e);
            break;
          case 91:
            e === b('ThriftTypes').I64
              ? (c.decryption_total_frames_data_channel = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 92:
            e === b('ThriftTypes').I64
              ? (c.decryption_total_error_frames_data_channel = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 93:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_alloc = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 94:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_invalid_params = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 95:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_cipher = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 96:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_parse = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 97:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_invalid_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 98:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_missing_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 99:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_out_of_ratchet_space = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 100:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_cipher_auth = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 101:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_frame_too_old = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 102:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_seen_frame = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 103:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_invalid_frame = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 104:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_setting_invalid_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 105:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_setting_existing_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 106:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_escape_data = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 107:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_deescape_data = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 108:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_parse_frame_or_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 109:
            e === b('ThriftTypes').I64
              ? (c.decryption_error_frames_data_channel_unknown = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 110:
            e === b('ThriftTypes').I64
              ? (c.decryption_unencrypted_frames_data_channel = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 111:
            e === b('ThriftTypes').I64
              ? (c.encryption_total_frames_data_channel = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 112:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 113:
            e === b('ThriftTypes').I64
              ? (c.encryption_total_error_frames_data_channel = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 114:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_alloc = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 115:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_invalid_params = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 116:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_cipher = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 117:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_parse = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 118:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_invalid_key = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 119:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_cipher_auth = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 120:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_escape_data = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 121:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_unsupported_codec = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 122:
            e === b('ThriftTypes').I64
              ? (c.encryption_error_frames_data_channel_unknown = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 123:
            e === b('ThriftTypes').I64
              ? (c.num_removed_data_decryptors = a.readI64().toString())
              : a.skip(e);
            break;
          case 124:
            e === b('ThriftTypes').I64
              ? (c.num_frame_decryptor_with_unencrypted_data = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 125:
            e === b('ThriftTypes').I64
              ? (c.num_removed_decryptors = a.readI64().toString())
              : a.skip(e);
            break;
          case 126:
            e === b('ThriftTypes').I64
              ? (c.data_channel_encryption_not_ready_in_mandated_calls_error = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 127:
            e === b('ThriftTypes').I64
              ? (c.num_e2ee_message_total_encrypt = a.readI64().toString())
              : a.skip(e);
            break;
          case 128:
            e === b('ThriftTypes').I64
              ? (c.num_e2ee_message_error_encrypt = a.readI64().toString())
              : a.skip(e);
            break;
          case 129:
            e === b('ThriftTypes').I64
              ? (c.num_e2ee_message_total_decrypt = a.readI64().toString())
              : a.skip(e);
            break;
          case 130:
            e === b('ThriftTypes').I64
              ? (c.num_e2ee_message_error_decrypt = a.readI64().toString())
              : a.skip(e);
            break;
          case 131:
            e === b('ThriftTypes').I64
              ? (c.negotiate_off_time = a.readI64().toString())
              : a.skip(e);
            break;
          case 132:
            e === b('ThriftTypes').I64
              ? (c.negotiated_version = a.readI64().toString())
              : a.skip(e);
            break;
          case 133:
            e === b('ThriftTypes').I64
              ? (c.decryptor_removed_time = a.readI64().toString())
              : a.skip(e);
            break;
          case 134:
            e === b('ThriftTypes').I64
              ? (c.is_e2ee_mandated_group = a.readI64().toString())
              : a.skip(e);
            break;
          case 135:
            if (e === b('ThriftTypes').LIST) {
              c.events = [];
              d = a.readListBegin();
              for (var f = 0; f < d.size; f++) {
                var g = a.readI64().toString();
                c.events.push(g);
              }
            } else a.skip(e);
            break;
          case 136:
            e === b('ThriftTypes').I64
              ? (c.num_e2ee_message_received = a.readI64().toString())
              : a.skip(e);
            break;
          case 137:
            e === b('ThriftTypes').I64
              ? (c.num_e2ee_message_error_decrypt_non_e2ee_received = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 138:
            e === b('ThriftTypes').I64
              ? (c.num_e2ee_message_error_decrypt_missing_sender = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 139:
            e === b('ThriftTypes').I64
              ? (c.num_e2ee_message_error_decrypt_exceeding_retry = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 140:
            e === b('ThriftTypes').I64
              ? (c.max_media_channel_key_message_retry_count = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 141:
            e === b('ThriftTypes').I64
              ? (c.g_e2ee_total_count_of_extra_decryptions = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 142:
            e === b('ThriftTypes').I64
              ? (c.g_e2ee_total_count_of_extra_decryptions_failures = a
                  .readI64()
                  .toString())
              : a.skip(e);
            break;
          case 143:
            e === b('ThriftTypes').I64
              ? (c.g_e2ee_total_count_of_extra_decryptions_failures_due_to_missing_key =
                  a.readI64().toString())
              : a.skip(e);
            break;
          case 144:
            e === b('ThriftTypes').I64
              ? (c.g_e2ee_decryption_error_frames_empty_supported_codes = a
                  .readI64()
                  .toString())
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
    function d(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b('ThriftTypes').STOP) break;
        switch (d) {
          case 1:
            e === b('ThriftTypes').STRUCT ? (c.p2p_e2ee = k(a)) : a.skip(e);
            break;
          case 2:
            e === b('ThriftTypes').STRUCT ? (c.group_e2ee = l(a)) : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.p2p_e2ee === void 0 && (c.p2p_e2ee = g());
      c.group_e2ee === void 0 && (c.group_e2ee = h());
      return c;
    }
    f.P2pE2eeMetrics$DefaultConstructor = g;
    f.GroupE2eeMetrics$DefaultConstructor = h;
    f.E2eeMetrics$DefaultConstructor = a;
    f.serializeP2pE2eeMetrics = i;
    f.serializeGroupE2eeMetrics = j;
    f.serializeE2eeMetrics = c;
    f.deserializeP2pE2eeMetrics = k;
    f.deserializeGroupE2eeMetrics = l;
    f.deserializeE2eeMetrics = d;
  },
  66,
);
__d(
  'ZenonLSE2EEStatsManager',
  [
    'E2eeMetricsSerializers',
    'WebAssemblyMemorySingleton',
    'ZenonCallFalcoEventUtils',
    'ZenonCallInfoManager',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.$ZenonLSE2EEStatsManager1 = {
            error_count_decrypted: 0,
            error_count_encrypted: 0,
            frames_decrypted: 0,
            frames_encrypted: 0,
            group_e2ee_metrics: d(
              'E2eeMetricsSerializers',
            ).GroupE2eeMetrics$DefaultConstructor(),
            total_decrypt_time: 0,
            total_encrypt_time: 0,
            wasm_metrics: d(
              'WebAssemblyMemorySingleton',
            ).WebAssemblyMemorySingleton.getMetrics(),
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.updateE2eeStats = function (a) {
        this.$ZenonLSE2EEStatsManager1 = a;
      };
      c.getGroupE2eeMetricsInFalcoShape = function () {
        var a = this.getCallInfo(),
          b = a.deviceID,
          c = a.localCallID;
        a = a.serverInfoData;
        return babelHelpers['extends'](
          {
            g_e2ee_web_wasm_final_memory_usage_kb: String(
              this.$ZenonLSE2EEStatsManager1.wasm_metrics.memory_size_kb,
            ),
            g_e2ee_web_wasm_memory_reallocation_count: String(
              this.$ZenonLSE2EEStatsManager1.wasm_metrics
                .memory_reallocation_count,
            ),
            local_call_id: c,
          },
          a != null && { shared_call_id: a },
          {
            steady_time_ms: d(
              'ZenonCallFalcoEventUtils',
            ).performanceNowParsed(),
            system_time_ms: String(Date.now()),
            web_device_id: b,
          },
          this.$ZenonLSE2EEStatsManager1.group_e2ee_metrics,
        );
      };
      c.save = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.storeE2eeStats(c, b, this);
      };
      c['delete'] = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.removeLocalStorageObjects([{ peerID: c, signalingID: b }]);
      };
      c.toJsonString = function () {
        var a = {
          callInfo: this.getCallInfo(),
          groupE2eeMetrics: this.$ZenonLSE2EEStatsManager1.group_e2ee_metrics,
          wasmMetrics: this.$ZenonLSE2EEStatsManager1.wasm_metrics,
        };
        return JSON.stringify(a);
      };
      b.fromJsonString = function (a) {
        var c;
        try {
          c = JSON.parse(a);
        } catch (a) {
          return null;
        }
        a = c.callInfo;
        a.deviceID;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['deviceID']);
        a = new b(a);
        a.$ZenonLSE2EEStatsManager1 = {
          error_count_decrypted: 0,
          error_count_encrypted: 0,
          frames_decrypted: 0,
          frames_encrypted: 0,
          group_e2ee_metrics: c.groupE2eeMetrics,
          total_decrypt_time: 0,
          total_encrypt_time: 0,
          wasm_metrics: c.wasmMetrics,
        };
        return a;
      };
      return b;
    })(c('ZenonCallInfoManager'));
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonLSE2EEStore',
  ['ZenonGenericLocalStorageStore', 'ZenonLSE2EEStatsManager'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'localstorage',
      i = 'RTC_LS_E2EE_STATS_',
      j = 'ls_e2ee_stats',
      k = 3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, j, h, i) || this;
      }
      var d = b.prototype;
      d.retrieveE2eeStats = function (a, b) {
        var d = this.getLocalStorageObjects();
        d = d[a] ? d[a][b] : null;
        if (d) return c('ZenonLSE2EEStatsManager').fromJsonString(d.__d);
        else return null;
      };
      d.storeE2eeStats = function (a, b, c) {
        this.mutateLocalStorageObjects(
          function (d) {
            d[a] || (d[a] = {});
            d[a][b] = { __d: c.toJsonString(), __t: Date.now(), __z: !0 };
            return d;
          },
          k,
          !1,
          { peerID: a, signalingID: b },
        );
      };
      return b;
    })(c('ZenonGenericLocalStorageStore'));
    b = new a();
    g.ZenonLSE2EEStoreInstance = b;
  },
  98,
);
__d(
  'ZenonLSPeerConnectionSummary',
  [
    'ZenonCallFalcoEventUtils',
    'ZenonCallInfoManager',
    'ZenonIceStatsParser',
    'ZenonLoggingEventTypes',
    'ZenonMWMessageTypes',
    'ZenonPeerID',
    'immutable',
    'performanceNow',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this, b) || this;
        b.$ZenonLSPeerConnectionSummary1 = {
          CoreAudioMetrics: { isstall: '0', voice_detect_pct: [] },
          CoreVideoMetrics: {
            screen: {
              capture_stall: { is_stall: '0' },
              encode_stall: { is_stall: '0' },
              sent_stall: { is_stall: '0' },
            },
            video: {
              capture_stall: { is_stall: '0' },
              encode_stall: { is_stall: '0' },
              sent_stall: { is_stall: '0' },
            },
          },
          DebugAudioMetrics: { NetworkReceive: {} },
          ecv: {},
          extraInfo: {},
          receiver: {},
          receiver_pct: { audio: {} },
          sender: {},
          sender_pct: { screen: {}, video: {} },
          video: {},
        };
        b.$ZenonLSPeerConnectionSummary2 = {};
        b.$ZenonLSPeerConnectionSummary3 = {};
        b.$ZenonLSPeerConnectionSummary5 = -1;
        b.$ZenonLSPeerConnectionSummary8 = null;
        b.$ZenonLSPeerConnectionSummary9 = new Map();
        b.$ZenonLSPeerConnectionSummary11 = 'unknown';
        b.$ZenonLSPeerConnectionSummary6 = c('performanceNow')();
        b.$ZenonLSPeerConnectionSummary4 = 0;
        b.$ZenonLSPeerConnectionSummary7 = null;
        return b;
      }
      var e = b.prototype;
      e.$ZenonLSPeerConnectionSummary12 = function () {
        var a = this.$ZenonLSPeerConnectionSummary1.sender,
          b = a.codec;
        b = b === void 0 ? {} : b;
        var c = {
          gen0_ice_sent_host: d('ZenonCallFalcoEventUtils').nonNullIntNumber(
            this.$ZenonLSPeerConnectionSummary2.host,
          ),
          gen0_ice_sent_relay: d('ZenonCallFalcoEventUtils').nonNullIntNumber(
            this.$ZenonLSPeerConnectionSummary2.relay,
          ),
          gen0_ice_sent_srflx: d('ZenonCallFalcoEventUtils').nonNullIntNumber(
            this.$ZenonLSPeerConnectionSummary2.srflx,
          ),
        };
        b = b.www;
        b != null && (c.audio_send_codec = String(b));
        this.$ZenonLSPeerConnectionSummary13(
          c,
          'audio_send_bytes_sent',
          a.bytes,
        );
        this.$ZenonLSPeerConnectionSummary13(
          c,
          'audio_send_level_count',
          a.taulc,
        );
        this.$ZenonLSPeerConnectionSummary13(
          c,
          'audio_send_level_sum',
          a.tx_sum_lvl,
        );
        this.$ZenonLSPeerConnectionSummary13(
          c,
          'audio_send_packets_lost',
          a.plost,
        );
        this.$ZenonLSPeerConnectionSummary13(
          c,
          'audio_send_packets_sent',
          a.psent,
        );
        this.$ZenonLSPeerConnectionSummary13(
          c,
          'avg_video_uplink_bandwidth_estimate',
          a.ube_avg,
        );
        this.$ZenonLSPeerConnectionSummary13(
          c,
          'transport_conn_rtt_avg',
          a.avgrtt,
        );
        return c;
      };
      e.$ZenonLSPeerConnectionSummary13 = function (a, b, c) {
        c != null && (a[b] = d('ZenonCallFalcoEventUtils').truncateNumber(c));
      };
      e.$ZenonLSPeerConnectionSummary14 = function () {
        var a, b, c;
        a =
          (a = this.$ZenonLSPeerConnectionSummary1.video.sender) == null
            ? void 0
            : a.ss;
        b = (b = a == null ? void 0 : a.frames) != null ? b : 0;
        c = (c = a == null ? void 0 : a.eqps) != null ? c : 0;
        c = b > 0 && c > 0 ? c / b : null;
        b = {};
        this.$ZenonLSPeerConnectionSummary15(
          b,
          'avg_video_actual_encode_bitrate_ss',
          a == null ? void 0 : a.avbr,
        );
        this.$ZenonLSPeerConnectionSummary15(
          b,
          'avg_video_uplink_bandwidth_estimate_ss',
          a == null ? void 0 : a.avbw,
        );
        this.$ZenonLSPeerConnectionSummary15(
          b,
          'video_send_duration_ss',
          a == null ? void 0 : a.dur,
        );
        this.$ZenonLSPeerConnectionSummary15(
          b,
          'video_send_frames_send_to_encoder_ss',
          a == null ? void 0 : a.eiframes,
        );
        this.$ZenonLSPeerConnectionSummary15(
          b,
          'video_send_total_input_pixel_ss',
          a == null ? void 0 : a.video_sum_capture_pixel,
        );
        this.$ZenonLSPeerConnectionSummary15(
          b,
          'video_send_total_output_pixel_ss',
          a == null ? void 0 : a.video_sum_encoded_pixel,
        );
        this.$ZenonLSPeerConnectionSummary15(
          b,
          'video_send_frames_encoded_ss',
          a == null ? void 0 : a.frames,
        );
        this.$ZenonLSPeerConnectionSummary15(b, 'video_send_qp_sum_ss', c);
        return b;
      };
      e.$ZenonLSPeerConnectionSummary15 = function (a, b, c) {
        c != null && (a[b] = d('ZenonCallFalcoEventUtils').truncateNumber(c));
      };
      e.$ZenonLSPeerConnectionSummary16 = function () {
        var a = this.$ZenonLSPeerConnectionSummary1.video.bwe,
          b = {};
        this.$ZenonLSPeerConnectionSummary17(
          b,
          'avg_video_actual_encode_bitrate',
          a == null ? void 0 : a.avg_enc_bitrate,
        );
        this.$ZenonLSPeerConnectionSummary17(
          b,
          'avg_video_retransmit_bitrate',
          a == null ? void 0 : a.avg_retrans_bitrate,
        );
        this.$ZenonLSPeerConnectionSummary17(
          b,
          'avg_video_transmit_bitrate',
          a == null ? void 0 : a.avg_trans_bitrate,
        );
        this.$ZenonLSPeerConnectionSummary17(
          b,
          'avg_video_uplink_bandwidth_estimate',
          a == null ? void 0 : a.avg_send_bw,
        );
        return b;
      };
      e.$ZenonLSPeerConnectionSummary17 = function (a, b, c) {
        c != null && (a[b] = d('ZenonCallFalcoEventUtils').truncateNumber(c));
      };
      e.$ZenonLSPeerConnectionSummary18 = function () {
        var a;
        a =
          (a = this.$ZenonLSPeerConnectionSummary1.sender_pct.video) == null
            ? void 0
            : a.vqs;
        var b = {};
        (a == null ? void 0 : a.avg) != null &&
          (b.video_send_quality_score = d(
            'ZenonCallFalcoEventUtils',
          ).truncateNumber(a == null ? void 0 : a.avg));
        return b;
      };
      e.$ZenonLSPeerConnectionSummary19 = function () {
        var a = this.$ZenonLSPeerConnectionSummary1.video.sender,
          b = { video_send_codec: a == null ? void 0 : a.ename };
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_recv_firs_sent',
          a == null ? void 0 : a.fir,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_recv_nacks_sent',
          a == null ? void 0 : a.nack,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_recv_plis_sent',
          a == null ? void 0 : a.pli,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_frame_height',
          a == null ? void 0 : a.ah,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_frame_height_input',
          a == null ? void 0 : a.ch,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_frame_width',
          a == null ? void 0 : a.aw,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_frame_width_input',
          a == null ? void 0 : a.cw,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_frames_captured',
          a == null ? void 0 : a.fcap,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_frames_encoded',
          a == null ? void 0 : a.frames,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_frames_sent',
          a == null ? void 0 : a.fcsn,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_frames_send_to_encoder',
          a == null ? void 0 : a.eiframes,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_capture_duration_ms',
          this.$ZenonLSPeerConnectionSummary1.video.ld,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_key_frames_encoded',
          a == null ? void 0 : a.kframes,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_packets_lost',
          a == null ? void 0 : a.plost,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_packets_sent',
          a == null ? void 0 : a.psent,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_qp_sum',
          a == null ? void 0 : a.eqps,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_total_input_pixel',
          a == null ? void 0 : a.video_sum_capture_pixel,
        );
        this.$ZenonLSPeerConnectionSummary20(
          b,
          'video_send_total_output_pixel',
          a == null ? void 0 : a.video_sum_encoded_pixel,
        );
        return b;
      };
      e.$ZenonLSPeerConnectionSummary20 = function (a, b, c) {
        c != null && (a[b] = d('ZenonCallFalcoEventUtils').truncateNumber(c));
      };
      e.$ZenonLSPeerConnectionSummary21 = function () {
        var a,
          b = this.$ZenonLSPeerConnectionSummary1.video.receiver,
          c = { video_recv_codec: b == null ? void 0 : b.dname };
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'audio_recv_jitter_buffer_frames_assembled',
          b == null ? void 0 : b.jtasb,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'audio_recv_jitter_buffer_frames_out',
          b == null ? void 0 : b.jtfrm,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'audio_recv_jitter_buffer_keyframes_out',
          b == null ? void 0 : b.jtkey,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_agg_bytes_decoded',
          b == null ? void 0 : b.dec_bytes,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_agg_packets_lost',
          b == null ? void 0 : b.plost,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_agg_packets_recv',
          b == null ? void 0 : b.precv,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_av_sync_abs',
          b == null ? void 0 : b.avabs,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_avg_e2e_latency_ms',
          b == null ? void 0 : b.e2el,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_frame_height',
          b == null ? void 0 : b.rh,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_frame_width',
          b == null ? void 0 : b.rw,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_frames_decoded',
          b == null ? void 0 : b.frd,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_freeze_count',
          b == null ? void 0 : b.frcnt,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_freeze_duration',
          b == null ? void 0 : b.frdur,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_freeze_duration_above_500_ms',
          b == null ? void 0 : b.frdur500,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_pause_count',
          b == null ? void 0 : b.pact,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_pause_duration_ms',
          b == null ? void 0 : b.padur,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_qp_sum',
          b == null ? void 0 : b.qps,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_total_pixels_decoded',
          b == null ? void 0 : b.agg_video_sum_decoded_pixel,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_union_decode_time_ms',
          b == null ? void 0 : b.dec_time,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_send_firs_recv',
          b == null ? void 0 : b.fir,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_send_nacks_recv',
          b == null ? void 0 : b.nack,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_send_plis_recv',
          b == null ? void 0 : b.pli,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_weighted_vqs',
          b == null ? void 0 : (a = b.vqs) == null ? void 0 : a.avg,
        );
        a = b == null ? void 0 : b.dec_time_all_streams;
        b = b == null ? void 0 : b.dec_frame;
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_agg_decode_time_ms',
          a,
        );
        this.$ZenonLSPeerConnectionSummary22(
          c,
          'video_recv_agg_frames_decoded',
          b,
        );
        a != null &&
          a > 0 &&
          b != null &&
          b > 0 &&
          this.$ZenonLSPeerConnectionSummary22(
            c,
            'video_recv_framerate_decoded',
            (b * 1e3) / a,
          );
        return c;
      };
      e.$ZenonLSPeerConnectionSummary22 = function (a, b, c) {
        c != null && (a[b] = d('ZenonCallFalcoEventUtils').truncateNumber(c));
      };
      e.$ZenonLSPeerConnectionSummary23 = function () {
        var a,
          b,
          c =
            this.$ZenonLSPeerConnectionSummary1.DebugAudioMetrics.NetworkReceive
              .jb_nm;
        a = c == null ? void 0 : (a = c.neteq) == null ? void 0 : a.meanWait;
        b =
          c == null
            ? void 0
            : (b = c.speech_expand_rate) == null
            ? void 0
            : b.avg;
        c =
          c == null
            ? void 0
            : (c = c.speech_expand_rate) == null
            ? void 0
            : c.M;
        var d = {};
        a != null && (d.audio_recv_neteq_mean_wait_ms = String(a));
        b != null && (d.audio_recv_neteq_speech_expand_rate_avg = String(b));
        c != null && (d.audio_recv_neteq_speech_expand_rate_max = String(c));
        return d;
      };
      e.$ZenonLSPeerConnectionSummary24 = function () {
        var a = this.$ZenonLSPeerConnectionSummary1.CoreAudioMetrics,
          b = a.audio_device,
          c = a.isstall,
          d = a.sdur;
        a = a.astall;
        var e = {};
        b != null && (e.audio_device = String(b));
        c != null && (e.audio_device_is_stalled = String(c));
        d != null && (e.audio_device_stall_duration = String(d));
        a != null && (e.audio_device_total_stall = String(a));
        return e;
      };
      e.$ZenonLSPeerConnectionSummary25 = function () {
        var a,
          b = {};
        if (
          ((a = this.$ZenonLSPeerConnectionSummary1.ecv) == null
            ? void 0
            : a.ecv_neteq_wait_time_ms) != null
        ) {
          b.ecv_neteq_wait_time_ms = d(
            'ZenonCallFalcoEventUtils',
          ).truncateNumber(
            Number(
              (a = this.$ZenonLSPeerConnectionSummary1.ecv) == null
                ? void 0
                : a.ecv_neteq_wait_time_ms,
            ),
          );
        }
        if (
          ((a = this.$ZenonLSPeerConnectionSummary1.ecv) == null
            ? void 0
            : a.ecv_rtt_ms) != null
        ) {
          b.ecv_rtt_ms = d('ZenonCallFalcoEventUtils').truncateNumber(
            Number(
              (a = this.$ZenonLSPeerConnectionSummary1.ecv) == null
                ? void 0
                : a.ecv_rtt_ms,
            ),
          );
        }
        if (
          ((a = this.$ZenonLSPeerConnectionSummary1.ecv) == null
            ? void 0
            : a.ecv_plccng) != null
        ) {
          b.ecv_plccng = d('ZenonCallFalcoEventUtils').truncateNumber(
            Number(
              (a = this.$ZenonLSPeerConnectionSummary1.ecv) == null
                ? void 0
                : a.ecv_plccng,
            ),
          );
        }
        return b;
      };
      e.$ZenonLSPeerConnectionSummary26 = function () {
        var a = this.$ZenonLSPeerConnectionSummary1,
          b = a.receiver;
        a = a.receiver_pct;
        var c = null;
        b.codec != null && (c = String(Object.values(b.codec).pop()));
        var e = {
          gen0_ice_received_host: d(
            'ZenonCallFalcoEventUtils',
          ).nonNullIntNumber(this.$ZenonLSPeerConnectionSummary3.host),
          gen0_ice_received_relay: d(
            'ZenonCallFalcoEventUtils',
          ).nonNullIntNumber(this.$ZenonLSPeerConnectionSummary3.relay),
          gen0_ice_received_srflx: d(
            'ZenonCallFalcoEventUtils',
          ).nonNullIntNumber(this.$ZenonLSPeerConnectionSummary3.srflx),
        };
        c != null && (e.audio_recv_codec = String(c));
        this.$ZenonLSPeerConnectionSummary27(
          e,
          'audio_ctp_latency_avg_us',
          (c = a.audio.jbd) == null ? void 0 : c.avg,
          (c = a.audio.rtt) == null ? void 0 : c.avg,
        );
        this.$ZenonLSPeerConnectionSummary27(
          e,
          'audio_ctp_latency_p5_us',
          (c = a.audio.jbd) == null ? void 0 : c.p5,
          (c = a.audio.rtt) == null ? void 0 : c.p5,
        );
        this.$ZenonLSPeerConnectionSummary27(
          e,
          'audio_ctp_latency_p50_us',
          (c = a.audio.jbd) == null ? void 0 : c.p50,
          (c = a.audio.rtt) == null ? void 0 : c.p50,
        );
        this.$ZenonLSPeerConnectionSummary27(
          e,
          'audio_ctp_latency_p95_us',
          (c = a.audio.jbd) == null ? void 0 : c.p95,
          (c = a.audio.rtt) == null ? void 0 : c.p95,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_avg_e2e_latency_ms',
          b.e2el,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_bytes_recv',
          b.bytes,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_fec_packets_discarded',
          b.fecpd,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_fec_packets_received',
          b.fecpr,
        );
        this.$ZenonLSPeerConnectionSummary28(e, 'audio_recv_jitter', b.jitter);
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_jitter_buffer_flushes',
          b.dec_pack_flush,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_level_count',
          b.taulc,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_level_sum',
          b.rx_sum_lvl,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_total_samples_duration',
          b.sp_dur,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_neteq_accelerate',
          b.dec_ar,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_neteq_cng',
          b.dec_cng,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_neteq_normal',
          b.dec_normal,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_neteq_operations',
          b.neteq_calls,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_neteq_plc',
          b.dec_plc,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_neteq_plccng',
          b.dec_plc_cng,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_neteq_preemptive_expand',
          b.dec_per,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_packets_lost',
          b.plost,
        );
        this.$ZenonLSPeerConnectionSummary28(
          e,
          'audio_recv_packets_recv',
          b.precv,
        );
        return e;
      };
      e.$ZenonLSPeerConnectionSummary28 = function (a, b, c) {
        c != null && (a[b] = d('ZenonCallFalcoEventUtils').truncateNumber(c));
      };
      e.$ZenonLSPeerConnectionSummary29 = function () {
        var a = c('immutable').OrderedMap(this.$ZenonLSPeerConnectionSummary9),
          b = {};
        if (Object.keys(a).length === 0) return b;
        var e = 0,
          f = !1,
          g = 0,
          h = 0;
        a.forEach(function (a, b) {
          f !== a &&
            (a ? e > 0 && (h++, (g += b - e), (e = 0)) : (e = b), (f = a));
        });
        if (e > 0) {
          a = this.$ZenonLSPeerConnectionSummary5;
          a > -1 && a > e && (h++, (g += a - e));
        }
        b.transport_num_gaps = d('ZenonCallFalcoEventUtils').nonNullIntNumber(
          h,
        );
        b.transport_total_gap_duration_ms = d(
          'ZenonCallFalcoEventUtils',
        ).nonNullIntNumber(g);
        this.$ZenonLSPeerConnectionSummary8 != null &&
          (b.transport_connected = this.$ZenonLSPeerConnectionSummary8
            ? '1'
            : '0');
        return b;
      };
      e.onCallEnded = function () {
        (this.$ZenonLSPeerConnectionSummary5 =
          this.$ZenonLSPeerConnectionSummary30()),
          this.$ZenonLSPeerConnectionSummary8 == null &&
            (this.$ZenonLSPeerConnectionSummary8 =
              this.$ZenonLSPeerConnectionSummary7);
      };
      e.$ZenonLSPeerConnectionSummary27 = function (a, b, c, e) {
        var f = 0;
        c != null && (f += c);
        e != null && (f += e / 2);
        f > 0 && (a[b] = d('ZenonCallFalcoEventUtils').truncateNumber(f));
      };
      e.getPeerConnectionSummary = function () {
        var a = this.getCallInfo(),
          b = a.deviceID,
          c = a.localCallID,
          e = a.peerID;
        a = a.signalingID;
        return babelHelpers['extends'](
          {},
          this.$ZenonLSPeerConnectionSummary24(),
          this.$ZenonLSPeerConnectionSummary12(),
          this.$ZenonLSPeerConnectionSummary26(),
          this.$ZenonLSPeerConnectionSummary14(),
          this.$ZenonLSPeerConnectionSummary16(),
          this.$ZenonLSPeerConnectionSummary18(),
          this.$ZenonLSPeerConnectionSummary19(),
          this.$ZenonLSPeerConnectionSummary21(),
          this.$ZenonLSPeerConnectionSummary23(),
          this.$ZenonLSPeerConnectionSummary29(),
          this.$ZenonLSPeerConnectionSummary25(),
          this.$ZenonLSPeerConnectionSummary10 != null && {
            shared_call_id: this.$ZenonLSPeerConnectionSummary10,
          },
          {
            connection_logging_id: a,
            local_call_id: c,
            media_path: this.$ZenonLSPeerConnectionSummary11,
            peer_id: d('ZenonPeerID').convertPeerIDForLogging(e),
            protocol: 'multiway',
            steady_time_ms: d(
              'ZenonCallFalcoEventUtils',
            ).performanceNowParsed(),
            system_time_ms: String(Date.now()),
            web_device_id: b,
          },
        );
      };
      e.$ZenonLSPeerConnectionSummary30 = function () {
        var a = c('performanceNow')() - this.$ZenonLSPeerConnectionSummary6;
        return Math.floor(this.$ZenonLSPeerConnectionSummary4 + a);
      };
      e.updateIceInfo = function (a, b) {
        var c =
          b === d('ZenonLoggingEventTypes').ZenonUpdateIceInfoDirection.Send
            ? this.$ZenonLSPeerConnectionSummary2
            : this.$ZenonLSPeerConnectionSummary3;
        b = d('ZenonIceStatsParser').extractIceInfo(a);
        b.forEach(function (a) {
          var b = a.gen;
          a = a.type;
          b === 0 && (c[a] == null ? (c[a] = 1) : c[a]++);
        });
      };
      e.onPCStateChange = function (a) {
        this.$ZenonLSPeerConnectionSummary7 !== a &&
          ((this.$ZenonLSPeerConnectionSummary7 = a),
          this.$ZenonLSPeerConnectionSummary9.set(
            this.$ZenonLSPeerConnectionSummary30(),
            a,
          ));
      };
      e.$ZenonLSPeerConnectionSummary31 = function (a) {
        switch (a) {
          case d('ZenonMWMessageTypes').ZenonMWMediaPath.SFU:
            return 'sfu';
          case d('ZenonMWMessageTypes').ZenonMWMediaPath.P2P:
            return 'p2p';
          case d('ZenonMWMessageTypes').ZenonMWMediaPath.UNKNOWN:
          default:
            return 'unknown';
        }
      };
      e.setMediaPath = function (a) {
        this.$ZenonLSPeerConnectionSummary11 =
          this.$ZenonLSPeerConnectionSummary31(a);
      };
      e.setMediaStats = function (a) {
        this.$ZenonLSPeerConnectionSummary1 = a;
      };
      e.setSharedCallId = function (a) {
        this.$ZenonLSPeerConnectionSummary10 = a;
      };
      e.save = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.storePeerConnectionSummary(c, b, this);
      };
      e['delete'] = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.removeLocalStorageObjects([{ peerID: c, signalingID: b }]);
      };
      e.toJsonString = function () {
        var a = this.getCallInfo();
        a = a.signalingID;
        a = {
          accumulatedCallTime: this.$ZenonLSPeerConnectionSummary30(),
          callInfo: this.getCallInfo(),
          connectionLoggingId: a,
          endIsConnected: this.$ZenonLSPeerConnectionSummary8,
          gen0IceReceivedCount: this.$ZenonLSPeerConnectionSummary3,
          gen0IceSentCount: this.$ZenonLSPeerConnectionSummary2,
          mediaPath: this.$ZenonLSPeerConnectionSummary11,
          mediaStats: this.$ZenonLSPeerConnectionSummary1,
          pcIsConnected: this.$ZenonLSPeerConnectionSummary7,
          sharedCallId: this.$ZenonLSPeerConnectionSummary10,
        };
        return JSON.stringify(a);
      };
      b.fromJsonString = function (a) {
        var c, d;
        try {
          d = JSON.parse(a);
        } catch (a) {
          return null;
        }
        a = d.callInfo;
        a.deviceID;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['deviceID']);
        a = new b(a);
        a.$ZenonLSPeerConnectionSummary11 = d.mediaPath;
        a.$ZenonLSPeerConnectionSummary1 = d.mediaStats;
        a.$ZenonLSPeerConnectionSummary3 = d.gen0IceReceivedCount;
        a.$ZenonLSPeerConnectionSummary2 = d.gen0IceSentCount;
        a.$ZenonLSPeerConnectionSummary10 = d.sharedCallId;
        a.$ZenonLSPeerConnectionSummary7 =
          (c = d.pcIsConnected) != null ? c : null;
        a.$ZenonLSPeerConnectionSummary8 = d.endIsConnected;
        d.accumulatedCallTime != null &&
          (a.$ZenonLSPeerConnectionSummary4 = d.accumulatedCallTime);
        return a;
      };
      return b;
    })(c('ZenonCallInfoManager'));
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonLSPeerConnectionSummaryStore',
  ['ZenonGenericLocalStorageStore', 'ZenonLSPeerConnectionSummary'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'localstorage',
      i = 'RTC_LS_PCS_',
      j = 'ls_pcs',
      k = 3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, j, h, i) || this;
      }
      var d = b.prototype;
      d.retrievePeerConnectionSummary = function (a, b) {
        var d = this.getLocalStorageObjects();
        d = d[a] ? d[a][b] : null;
        if (d) return c('ZenonLSPeerConnectionSummary').fromJsonString(d.__d);
        else return null;
      };
      d.storePeerConnectionSummary = function (a, b, c) {
        this.mutateLocalStorageObjects(
          function (d) {
            d[a] || (d[a] = {});
            d[a][b] = { __d: c.toJsonString(), __t: Date.now(), __z: !0 };
            return d;
          },
          k,
          !1,
          { peerID: a, signalingID: b },
        );
      };
      return b;
    })(c('ZenonGenericLocalStorageStore'));
    b = new a();
    g.ZenonLSPeerConnectionSummaryStoreInstance = b;
  },
  98,
);
__d(
  'ZenonLSStarRatingsManager',
  ['ZenonCallInfoManager', 'ZenonPeerID', 'cr:1603', 'cr:1614'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var e = c.prototype;
      e.setRating = function (a) {
        var c = this.getCallInfo(),
          e = c.deviceID,
          f = c.localCallID,
          g = c.peerID;
        c = c.serverInfoData;
        var h = {
          local_call_id: f,
          peer_id: d('ZenonPeerID').convertPeerIDForLogging(g),
          shared_call_id: c,
          web_device_id: e,
        };
        b('cr:1614') == null
          ? void 0
          : b('cr:1614').logImmediately(function () {
              return babelHelpers['extends']({ star_rating: a }, h);
            });
      };
      e.setSurvey = function (a, c, e) {
        c === void 0 && (c = null);
        e === void 0 && (e = null);
        var f = this.getCallInfo(),
          g = f.deviceID,
          h = f.localCallID,
          i = f.peerID;
        f = f.serverInfoData;
        h = {
          local_call_id: h,
          peer_id: d('ZenonPeerID').convertPeerIDForLogging(i),
          shared_call_id: f,
          web_device_id: g,
        };
        i = Array.isArray(c) ? c : c != null ? [c] : [];
        var j = babelHelpers['extends'](
          {
            rtc_end_call_survey_issue:
              (g = (f = e) == null ? void 0 : f.toLocaleLowerCase()) != null
                ? g
                : '',
            rtc_end_call_survey_selected_options: i,
          },
          h,
        );
        a != null && (j.rtc_end_call_survey_freeform = a);
        b('cr:1603') == null
          ? void 0
          : b('cr:1603').log(function () {
              return j;
            });
      };
      e.save = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.storeStarRatings(c, b, this);
      };
      e['delete'] = function (a) {
        var b = this.getCallInfo(),
          c = b.peerID;
        b = b.signalingID;
        a.removeLocalStorageObjects([{ peerID: c, signalingID: b }]);
      };
      e.toJsonString = function () {
        var a = { callInfo: this.getCallInfo() };
        return JSON.stringify(a);
      };
      c.fromJsonString = function (a) {
        var b;
        try {
          b = JSON.parse(a);
        } catch (a) {
          return null;
        }
        a = b.callInfo;
        a.deviceID;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['deviceID']);
        return new c(a);
      };
      return c;
    })(c('ZenonCallInfoManager'));
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonLSStarRatingsStore',
  ['ZenonGenericLocalStorageStore', 'ZenonLSStarRatingsManager'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'localstorage',
      i = 'RTC_LS_STAR_RATINGS_',
      j = 'ls_star_ratings',
      k = 3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, j, h, i) || this;
      }
      var d = b.prototype;
      d.retrieveStarRatings = function (a, b) {
        var d = this.getLocalStorageObjects();
        d = d[a] ? d[a][b] : null;
        if (d) return c('ZenonLSStarRatingsManager').fromJsonString(d.__d);
        else return null;
      };
      d.storeStarRatings = function (a, b, c) {
        this.mutateLocalStorageObjects(
          function (d) {
            d[a] || (d[a] = {});
            d[a][b] = { __d: c.toJsonString(), __t: Date.now(), __z: !0 };
            return d;
          },
          k,
          !1,
          { peerID: a, signalingID: b },
        );
      };
      return b;
    })(c('ZenonGenericLocalStorageStore'));
    b = new a();
    g.ZenonLSStarRatingsStoreInstance = b;
  },
  98,
);
__d(
  'ZenonParentLSCallSummaryLogProcessor',
  [
    'ZenonDismissReason',
    'ZenonInfraActionsLogger',
    'ZenonLSCallStartEventManager',
    'ZenonLSCallStartEventStore',
    'ZenonLSCallSummary',
    'ZenonLSCallSummaryStore',
    'ZenonLSE2EEStatsManager',
    'ZenonLSE2EEStore',
    'ZenonLSPeerConnectionSummary',
    'ZenonLSPeerConnectionSummaryStore',
    'ZenonLSStarRatingsManager',
    'ZenonLSStarRatingsStore',
    'ZenonPeerID',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        (a.peerID = d('ZenonPeerID').ZenonMWPeerID),
          (this.$6 = a.protocol),
          (this.$1 = new (c('ZenonLSCallSummary'))(a)),
          (this.$2 = new (c('ZenonLSPeerConnectionSummary'))(a)),
          (this.$3 = new (c('ZenonLSCallStartEventManager'))(a)),
          (this.$4 = new (c('ZenonLSE2EEStatsManager'))(a)),
          (this.$5 = new (c('ZenonLSStarRatingsManager'))(a)),
          c('ZenonInfraActionsLogger').logCheckpointEmployeesTestUsersOnly({
            checkpoint: 'NSL - created call summaries in parent window',
          });
      }
      var e = a.prototype;
      e.processEvent = function (a) {
        return b('regeneratorRuntime').async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  c.t0 = a.name;
                  c.next =
                    c.t0 === 'callAccepted'
                      ? 3
                      : c.t0 === 'callEnded'
                      ? 10
                      : c.t0 === 'inviteReceived'
                      ? 13
                      : c.t0 === 'popupOpened'
                      ? 15
                      : 23;
                  break;
                case 3:
                  this.$1.onCallAccepted(a.trigger);
                  this.$1.save(
                    d('ZenonLSCallSummaryStore')
                      .ZenonLSCallSummaryStoreInstance,
                  );
                  this.$2.save(
                    d('ZenonLSPeerConnectionSummaryStore')
                      .ZenonLSPeerConnectionSummaryStoreInstance,
                  );
                  this.$3.save(
                    d('ZenonLSCallStartEventStore')
                      .ZenonLSCallStartEventStoreInstance,
                  );
                  this.$4.save(d('ZenonLSE2EEStore').ZenonLSE2EEStoreInstance);
                  this.$5.save(
                    d('ZenonLSStarRatingsStore')
                      .ZenonLSStarRatingsStoreInstance,
                  );
                  return c.abrupt('break', 23);
                case 10:
                  c.next = 12;
                  return b('regeneratorRuntime').awrap(this.$7(a));
                case 12:
                  return c.abrupt('break', 23);
                case 13:
                  this.$8(a);
                  return c.abrupt('break', 23);
                case 15:
                  c.next = 17;
                  return b('regeneratorRuntime').awrap(this.$9(a));
                case 17:
                  this.$1.save(
                    d('ZenonLSCallSummaryStore')
                      .ZenonLSCallSummaryStoreInstance,
                  );
                  this.$2.save(
                    d('ZenonLSPeerConnectionSummaryStore')
                      .ZenonLSPeerConnectionSummaryStoreInstance,
                  );
                  this.$3.save(
                    d('ZenonLSCallStartEventStore')
                      .ZenonLSCallStartEventStoreInstance,
                  );
                  this.$4.save(d('ZenonLSE2EEStore').ZenonLSE2EEStoreInstance);
                  this.$5.save(
                    d('ZenonLSStarRatingsStore')
                      .ZenonLSStarRatingsStoreInstance,
                  );
                  return c.abrupt('break', 23);
                case 23:
                case 'end':
                  return c.stop();
              }
          },
          null,
          this,
        );
      };
      e.$8 = function (a) {
        a = a.serverInfoData;
        if (a == null) return;
        this.$1.setSharedCallId(a);
        this.$2.setSharedCallId(a);
        this.$3.setSharedCallId(a);
        this.$4.setSharedCallId(a);
      };
      e.$9 = function (a) {
        return b('regeneratorRuntime').async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  c.next = 2;
                  return b('regeneratorRuntime').awrap(
                    this.$1.onCallEnded(
                      d('ZenonDismissReason').ZenonDismissReason.ClientError,
                      !1,
                      !0,
                      a.isPopupBlocked ? 'PopupBlocked' : 'PopupPending',
                    ),
                  );
                case 2:
                  this.$1.save(
                    d('ZenonLSCallSummaryStore')
                      .ZenonLSCallSummaryStoreInstance,
                  );
                case 3:
                case 'end':
                  return c.stop();
              }
          },
          null,
          this,
        );
      };
      e.$7 = function (a) {
        var c, e, f;
        return b('regeneratorRuntime').async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  if (!a.isRemoteEnded) {
                    g.next = 2;
                    break;
                  }
                  return g.abrupt('return');
                case 2:
                  (c = a.endCallReason),
                    (e = a.endCallSubreason),
                    (f = a.isRemoteEnded);
                  if (
                    !(
                      c ===
                        d('ZenonDismissReason').ZenonDismissReason
                          .OtherInstanceHandled && f
                    )
                  ) {
                    g.next = 5;
                    break;
                  }
                  return g.abrupt('return');
                case 5:
                  g.next = 7;
                  return b('regeneratorRuntime').awrap(
                    this.$1.onCallEnded(c, f, !1, e),
                  );
                case 7:
                  this.$1.save(
                    d('ZenonLSCallSummaryStore')
                      .ZenonLSCallSummaryStoreInstance,
                  ),
                    this.$2.save(
                      d('ZenonLSPeerConnectionSummaryStore')
                        .ZenonLSPeerConnectionSummaryStoreInstance,
                    ),
                    this.$3.save(
                      d('ZenonLSCallStartEventStore')
                        .ZenonLSCallStartEventStoreInstance,
                    ),
                    this.$4.save(
                      d('ZenonLSE2EEStore').ZenonLSE2EEStoreInstance,
                    ),
                    this.$5.save(
                      d('ZenonLSStarRatingsStore')
                        .ZenonLSStarRatingsStoreInstance,
                    );
                case 12:
                case 'end':
                  return g.stop();
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
__d(
  'TokenBucketRateLimit',
  ['DateConsts'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1e3;
    a = (function () {
      function a(a, b) {
        (this.$1 = a * h),
          (this.$2 = a * h),
          (this.$3 = Date.now()),
          (this.$4 = b * h);
      }
      var b = a.prototype;
      b.take = function (a) {
        a === void 0 && (a = 1);
        a = a * h;
        this.$5();
        if (this.$2 < a) return !1;
        this.$2 -= a;
        return !0;
      };
      b.$5 = function () {
        if (this.$2 >= this.$1) return;
        var a = Date.now(),
          b = (a - this.$3) / d('DateConsts').MS_PER_SEC;
        b = Math.round(b * this.$4);
        if (b === 0) return;
        this.$2 = Math.min(this.$1, this.$2 + b);
        this.$3 = a;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonSDKRateLimiter',
  ['TokenBucketRateLimit', 'ZenonPlatformRateLimitSitevarConfig'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.take = function (a, b) {
        b === void 0 && (b = 1);
        a = this.$2(a);
        return a.take(b);
      };
      b.$2 = function (a) {
        var b,
          d = this.$1.get(a);
        if (d) return d;
        b =
          (b = c('ZenonPlatformRateLimitSitevarConfig').buckets.get(a)) != null
            ? b
            : c('ZenonPlatformRateLimitSitevarConfig')['default'];
        d = new (c('TokenBucketRateLimit'))(b.bucket_size, b.refill_rate);
        this.$1.set(a, d);
        return d;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'OverlayConfigDefaults',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = Object.freeze([
      1, 0, 0, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 0, -1, 1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, 0,
      1, -1, -1, -1, -1, -1, -1, 1, 1, 0, 2e3, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, 1e3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 16e3, 2e4,
      0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, 6e4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      2e3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1,
    ]);
    e.exports = a;
  },
  null,
);
__d(
  'OverlayConfigDefaultsLayer',
  ['OverlayConfigDefaults', 'OverlayConfigLayerSource'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.getLayerSource = function () {
        return c('OverlayConfigLayerSource').DEFAULT;
      };
      b.getValue = function (a) {
        return c('OverlayConfigDefaults')[a];
      };
      b.logExposure = function (a) {};
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'OverlayConfigLayerManager',
  [
    'OverlayConfigConstants',
    'OverlayConfigDefaultsLayer',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = [new (c('OverlayConfigDefaultsLayer'))()];
      }
      var b = a.prototype;
      b.getValue = function (a) {
        for (var b = this.$1.length - 1; b >= 0; b--) {
          var e = this.$1[b].getValue(a);
          if (e > d('OverlayConfigConstants').OverlayConfigNotPresentFlagValue)
            return e;
        }
        throw c('unrecoverableViolation')(
          'OverlayConfigLayerManager: No value found for id ' + String(a),
          'rtc_www',
        );
      };
      b.addLayer = function (a) {
        this.$1.push(a);
        return this.$1.length - 1;
      };
      b.replaceLayer = function (a, b) {
        if (a === 0)
          throw c('unrecoverableViolation')(
            'OverlayConfigLayerManager: Tried to replace default layer!',
            'rtc_www',
          );
        else if (this.$1[a] == null)
          throw c('unrecoverableViolation')(
            'OverlayConfigLayerManager: Layer does not exist at index ' +
              String(a),
            'rtc_www',
          );
        this.$1[a] = b;
      };
      b.clone = function () {
        var b = new a();
        b.$1 = this.$1.slice();
        return b;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'StructuredConfigBase',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getBool = function (a) {
        return this.$1.getValue(a) > 0;
      };
      b.getInt = function (a) {
        return this.$1.getValue(a);
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'Configs',
  ['StructuredConfigBase'],
  function (a, b, c, d, e, f) {
    'use strict';
    c = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$ExampleConfig1 = c.getBool(0)),
          (c.$ExampleConfig2 = c.getBool(2)),
          (c.$ExampleConfig3 = c.getBool(1724)),
          (c.$ExampleConfig4 = c.getBool(2044)),
          (c.$ExampleConfig5 = c.getInt(1)),
          (c.$ExampleConfig6 = c.getInt(3)),
          (c.$ExampleConfig7 = c.getInt(2011)),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.updateParams = function () {
        (this.$ExampleConfig1 = this.getBool(0)),
          (this.$ExampleConfig2 = this.getBool(2)),
          (this.$ExampleConfig3 = this.getBool(1724)),
          (this.$ExampleConfig4 = this.getBool(2044)),
          (this.$ExampleConfig5 = this.getInt(1)),
          (this.$ExampleConfig6 = this.getInt(3)),
          (this.$ExampleConfig7 = this.getInt(2011));
      };
      c.isEnabled = function () {
        return this.$ExampleConfig1;
      };
      c.isSomeBoolean = function () {
        return this.$ExampleConfig2;
      };
      c.isSomeOtherIntegerHasValue = function () {
        return this.$ExampleConfig3;
      };
      c.isSomeOtherBoolean = function () {
        return this.$ExampleConfig4;
      };
      c.getSomeInteger = function () {
        return this.$ExampleConfig5;
      };
      c.getSomeOtherInteger = function () {
        return this.$ExampleConfig6;
      };
      c.getSomeDouble = function () {
        return this.$ExampleConfig7;
      };
      return b;
    })((a = b('StructuredConfigBase')));
    d = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$SimulcastOverSignalingConfig1 = c.getBool(651)),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.updateParams = function () {
        this.$SimulcastOverSignalingConfig1 = this.getBool(651);
      };
      c.isSimulcastOverSignalingEnabled = function () {
        return this.$SimulcastOverSignalingConfig1;
      };
      return b;
    })(a);
    f = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$ZenonSdpTransformConfig1 = c.getBool(244)),
          (c.$ZenonSdpTransformConfig2 = c.getBool(420)),
          (c.$ZenonSdpTransformConfig3 = c.getBool(421)),
          (c.$ZenonSdpTransformConfig4 = c.getBool(245)),
          (c.$ZenonSdpTransformConfig5 = c.getBool(246)),
          (c.$ZenonSdpTransformConfig6 = c.getBool(248)),
          (c.$ZenonSdpTransformConfig7 = c.getBool(1448)),
          (c.$ZenonSdpTransformConfig8 = c.getBool(1444)),
          (c.$ZenonSdpTransformConfig9 = c.getBool(1445)),
          (c.$ZenonSdpTransformConfig10 = c.getInt(1446)),
          (c.$ZenonSdpTransformConfig11 = c.getInt(1447)),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.updateParams = function () {
        (this.$ZenonSdpTransformConfig1 = this.getBool(244)),
          (this.$ZenonSdpTransformConfig2 = this.getBool(420)),
          (this.$ZenonSdpTransformConfig3 = this.getBool(421)),
          (this.$ZenonSdpTransformConfig4 = this.getBool(245)),
          (this.$ZenonSdpTransformConfig5 = this.getBool(246)),
          (this.$ZenonSdpTransformConfig6 = this.getBool(248)),
          (this.$ZenonSdpTransformConfig7 = this.getBool(1448)),
          (this.$ZenonSdpTransformConfig8 = this.getBool(1444)),
          (this.$ZenonSdpTransformConfig9 = this.getBool(1445)),
          (this.$ZenonSdpTransformConfig10 = this.getInt(1446)),
          (this.$ZenonSdpTransformConfig11 = this.getInt(1447));
      };
      c.isPreserveH264 = function () {
        return this.$ZenonSdpTransformConfig1;
      };
      c.isPreferH264ForMwCall = function () {
        return this.$ZenonSdpTransformConfig2;
      };
      c.isPreferSwH264 = function () {
        return this.$ZenonSdpTransformConfig3;
      };
      c.isAddAudioNack = function () {
        return this.$ZenonSdpTransformConfig4;
      };
      c.isDisableOpusStereo = function () {
        return this.$ZenonSdpTransformConfig5;
      };
      c.isPreferIsacForGroupAudio = function () {
        return this.$ZenonSdpTransformConfig6;
      };
      c.isEnableOpusFmtpMunging = function () {
        return this.$ZenonSdpTransformConfig7;
      };
      c.isSetOpusUsedtx = function () {
        return this.$ZenonSdpTransformConfig8;
      };
      c.isSetOpusUseinbandfec = function () {
        return this.$ZenonSdpTransformConfig9;
      };
      c.getSetOpusMaxplaybackrate = function () {
        return this.$ZenonSdpTransformConfig10;
      };
      c.getSetOpusMaxaveragebitrate = function () {
        return this.$ZenonSdpTransformConfig11;
      };
      return b;
    })(a);
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$ZenonPeerConnectionConfig1 = c.getBool(302)),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.updateParams = function () {
        this.$ZenonPeerConnectionConfig1 = this.getBool(302);
      };
      c.isRtpDataChannels = function () {
        return this.$ZenonPeerConnectionConfig1;
      };
      return b;
    })(a);
    var g = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a, c;
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          return (
            ((a = c = b.call.apply(b, [this].concat(e)) || this),
            (c.$ZenonStartCallImmediatelyConfig1 = c.getBool(308)),
            a) || babelHelpers.assertThisInitialized(c)
          );
        }
        var c = a.prototype;
        c.updateParams = function () {
          this.$ZenonStartCallImmediatelyConfig1 = this.getBool(308);
        };
        c.isEnabled = function () {
          return this.$ZenonStartCallImmediatelyConfig1;
        };
        return a;
      })(a),
      h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a, c;
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          return (
            ((a = c = b.call.apply(b, [this].concat(e)) || this),
            (c.$ZenonGeneralizedIdentityConfig1 = c.getInt(1891)),
            a) || babelHelpers.assertThisInitialized(c)
          );
        }
        var c = a.prototype;
        c.updateParams = function () {
          this.$ZenonGeneralizedIdentityConfig1 = this.getInt(1891);
        };
        c.getDuplicatedParticipantsProcessingMode = function () {
          return this.$ZenonGeneralizedIdentityConfig1;
        };
        return a;
      })(a),
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a, c;
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          return (
            ((a = c = b.call.apply(b, [this].concat(e)) || this),
            (c.$ZenonMultiCallSupportConfig1 = c.getInt(309)),
            a) || babelHelpers.assertThisInitialized(c)
          );
        }
        var c = a.prototype;
        c.updateParams = function () {
          this.$ZenonMultiCallSupportConfig1 = this.getInt(309);
        };
        c.getMaxConnectedCalls = function () {
          return this.$ZenonMultiCallSupportConfig1;
        };
        return a;
      })(a),
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a, c;
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          return (
            ((a = c = b.call.apply(b, [this].concat(e)) || this),
            (c.$ZenonPlatformSupportConfig1 = c.getBool(316)),
            (c.$ZenonPlatformSupportConfig2 = c.getBool(318)),
            (c.$ZenonPlatformSupportConfig3 = c.getBool(2251)),
            (c.$ZenonPlatformSupportConfig4 = c.getBool(1900)),
            (c.$ZenonPlatformSupportConfig5 = c.getInt(317)),
            (c.$ZenonPlatformSupportConfig6 = c.getInt(319)),
            a) || babelHelpers.assertThisInitialized(c)
          );
        }
        var c = a.prototype;
        c.updateParams = function () {
          (this.$ZenonPlatformSupportConfig1 = this.getBool(316)),
            (this.$ZenonPlatformSupportConfig2 = this.getBool(318)),
            (this.$ZenonPlatformSupportConfig3 = this.getBool(2251)),
            (this.$ZenonPlatformSupportConfig4 = this.getBool(1900)),
            (this.$ZenonPlatformSupportConfig5 = this.getInt(317)),
            (this.$ZenonPlatformSupportConfig6 = this.getInt(319));
        };
        c.isSupportsZenonPlatform = function () {
          return this.$ZenonPlatformSupportConfig1;
        };
        c.isStartImmediatelyEnabled = function () {
          return this.$ZenonPlatformSupportConfig2;
        };
        c.isUploadSummaryOnCallEnded = function () {
          return this.$ZenonPlatformSupportConfig3;
        };
        c.isMultiwayAvEscalationEnabled = function () {
          return this.$ZenonPlatformSupportConfig4;
        };
        c.getMaxConnectedCalls = function () {
          return this.$ZenonPlatformSupportConfig5;
        };
        c.getParentWindowConnectionTimeoutMs = function () {
          return this.$ZenonPlatformSupportConfig6;
        };
        return a;
      })(a),
      k = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a, c;
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          return (
            ((a = c = b.call.apply(b, [this].concat(e)) || this),
            (c.$ZenonSimulcastConfig1 = c.getBool(453)),
            a) || babelHelpers.assertThisInitialized(c)
          );
        }
        var c = a.prototype;
        c.updateParams = function () {
          this.$ZenonSimulcastConfig1 = this.getBool(453);
        };
        c.isSimulcastEnabled = function () {
          return this.$ZenonSimulcastConfig1;
        };
        return a;
      })(a),
      l = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a, c;
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          return (
            ((a = c = b.call.apply(b, [this].concat(e)) || this),
            (c.$DynamicRuleConfig1 = c.getBool(1342)),
            (c.$DynamicRuleConfig2 = c.getBool(1597)),
            (c.$DynamicRuleConfig3 = c.getBool(1821)),
            (c.$DynamicRuleConfig4 = c.getBool(1820)),
            (c.$DynamicRuleConfig5 = c.getInt(1359)),
            (c.$DynamicRuleConfig6 = c.getInt(1510)),
            (c.$DynamicRuleConfig7 = c.getInt(1612)),
            a) || babelHelpers.assertThisInitialized(c)
          );
        }
        var c = a.prototype;
        c.updateParams = function () {
          (this.$DynamicRuleConfig1 = this.getBool(1342)),
            (this.$DynamicRuleConfig2 = this.getBool(1597)),
            (this.$DynamicRuleConfig3 = this.getBool(1821)),
            (this.$DynamicRuleConfig4 = this.getBool(1820)),
            (this.$DynamicRuleConfig5 = this.getInt(1359)),
            (this.$DynamicRuleConfig6 = this.getInt(1510)),
            (this.$DynamicRuleConfig7 = this.getInt(1612));
        };
        c.isEnabled = function () {
          return this.$DynamicRuleConfig1;
        };
        c.isDebugLoggingEnabled = function () {
          return this.$DynamicRuleConfig2;
        };
        c.isDisableCallTypeConditional = function () {
          return this.$DynamicRuleConfig3;
        };
        c.isDisableAbweSubscriber = function () {
          return this.$DynamicRuleConfig4;
        };
        c.getProcessIntervalMs = function () {
          return this.$DynamicRuleConfig5;
        };
        c.getNetworkProcessIntervalMs = function () {
          return this.$DynamicRuleConfig6;
        };
        c.getDebugLoggingIntervalMs = function () {
          return this.$DynamicRuleConfig7;
        };
        return a;
      })(a);
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$SignalingPingConfig1 = c.getInt(1470)),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.updateParams = function () {
        this.$SignalingPingConfig1 = this.getInt(1470);
      };
      c.getPingIntervalMs = function () {
        return this.$SignalingPingConfig1;
      };
      return b;
    })(a);
    e.exports = {
      ExampleConfig: c,
      SimulcastOverSignalingConfig: d,
      ZenonSdpTransformConfig: f,
      ZenonPeerConnectionConfig: b,
      ZenonStartCallImmediatelyConfig: g,
      ZenonGeneralizedIdentityConfig: h,
      ZenonMultiCallSupportConfig: i,
      ZenonPlatformSupportConfig: j,
      ZenonSimulcastConfig: k,
      DynamicRuleConfig: l,
      SignalingPingConfig: a,
    };
  },
  null,
);
__d(
  'OverlayConfigManager',
  ['Configs', 'OverlayConfigLayerManager'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = (a = b('Configs')).ExampleConfig,
      h = a.SimulcastOverSignalingConfig,
      i = a.ZenonSdpTransformConfig,
      j = a.ZenonPeerConnectionConfig,
      k = a.ZenonStartCallImmediatelyConfig,
      l = a.ZenonGeneralizedIdentityConfig,
      m = a.ZenonMultiCallSupportConfig,
      n = a.ZenonPlatformSupportConfig,
      o = a.ZenonSimulcastConfig,
      p = a.DynamicRuleConfig,
      q = a.SignalingPingConfig;
    c = (function () {
      function a() {
        this.layerManager = new (b('OverlayConfigLayerManager'))();
      }
      var c = a.prototype;
      c.getExampleConfig = function () {
        return new g(this.layerManager);
      };
      c.getSimulcastOverSignalingConfig = function () {
        return new h(this.layerManager);
      };
      c.getZenonSdpTransformConfig = function () {
        return new i(this.layerManager);
      };
      c.getZenonPeerConnectionConfig = function () {
        return new j(this.layerManager);
      };
      c.getZenonStartCallImmediatelyConfig = function () {
        return new k(this.layerManager);
      };
      c.getZenonGeneralizedIdentityConfig = function () {
        return new l(this.layerManager);
      };
      c.getZenonMultiCallSupportConfig = function () {
        return new m(this.layerManager);
      };
      c.getZenonPlatformSupportConfig = function () {
        return new n(this.layerManager);
      };
      c.getZenonSimulcastConfig = function () {
        return new o(this.layerManager);
      };
      c.getDynamicRuleConfig = function () {
        return new p(this.layerManager);
      };
      c.getSignalingPingConfig = function () {
        return new q(this.layerManager);
      };
      return a;
    })();
    e.exports = c;
  },
  null,
);
__d(
  'OverlayConfigManagerWithServerLayer',
  ['OverlayConfigManager'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.$OverlayConfigManagerWithServerLayer1 = -1;
        b != null && (c.layerManager = b.layerManager.clone());
        return c;
      }
      var c = b.prototype;
      c.setServerLayer = function (a) {
        if (this.$OverlayConfigManagerWithServerLayer1 > -1) {
          this.layerManager.replaceLayer(
            this.$OverlayConfigManagerWithServerLayer1,
            a,
          );
          return;
        }
        this.$OverlayConfigManagerWithServerLayer1 =
          this.layerManager.addLayer(a);
      };
      return b;
    })(c('OverlayConfigManager'));
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonSignalingConstants',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = '/rtc_multi';
    b = 'signaling_channel';
    c = 'media_server_failover';
    d = 'sctp_negotiation';
    e = 'simulcast';
    var g = 'D3F4U1T_F8_TR4CK';
    f.RTC_MULTI_MQTT_TOPIC = a;
    f.SCTP_SIGNALING_TOPIC = b;
    f.SCTP_FAILOVER_TOPIC = c;
    f.SCTP_NEGOTIATION_STATE_SYNC_TOPIC = d;
    f.SIMULCAST_TOPIC = e;
    f.DEFAULT_TRACK = g;
  },
  66,
);
__d(
  'AggregateError',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(c, d) {
        var e;
        d = (d = d) != null ? d : g(c);
        e = a.call(this, d) || this;
        e.name = 'AggregateError';
        e.errors = c;
        e.message = d;
        Error.captureStackTrace &&
          Error.captureStackTrace(babelHelpers.assertThisInitialized(e), b);
        return e;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    function g(a) {
      if (a.length === 0) return 'No errors';
      return a.length === 1
        ? a[0].message
        : a
            .map(function (a) {
              return '- ' + a.message;
            })
            .join('\n');
    }
    f['default'] = a;
  },
  66,
);
__d(
  'promiseAny',
  ['invariant', 'AggregateError', 'Promise'],
  function (a, b, c, d, e, f, g, h) {
    function i(a) {
      return new (b('Promise'))(function (c, d) {
        return b('Promise').resolve(a).then(d, c);
      });
    }
    function a(a) {
      a.length !== 0 || h(0, 14837);
      return b('Promise')
        .all(a.map(i))
        .then(
          function (a) {
            throw new (c('AggregateError'))(a);
          },
          function (a) {
            return a;
          },
        );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonMessageSenderChain',
  ['promiseAny'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.sendMessage = function (a) {
        var b = this.$1.map(function (b) {
          return b.sendMessage(a);
        });
        return c('promiseAny')(b);
      };
      b.setMessageReceiver = function (a) {
        this.$1.forEach(function (b) {
          return b.setMessageReceiver(a);
        });
      };
      b.setLoggingEventHandler = function (a) {
        this.$1.forEach(function (b) {
          return b.setLoggingEventHandler(a);
        });
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonMqttMWMessageSender',
  [
    'Promise',
    'ZenonActorHooks',
    'ZenonDebugLogger',
    'ZenonMWMessageLogger',
    'ZenonMWMessageReliabilityLogger',
    'ZenonMWMessageTranslator',
    'ZenonMqttUtil',
    'ZenonSignalingConstants',
    'ZenonUserActionLogger',
    'ZenonValidateMWMessage',
    'err',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 15e3;
    a = (function () {
      function a() {}
      var e = a.prototype;
      e.waitForMqttConnected = function () {
        return new (b('Promise'))(function (a, b) {
          var e = d('ZenonMqttUtil').getMqttChannel();
          if (e.getConnectionState() === 'Connected') a();
          else {
            c('ZenonUserActionLogger').logCheckpoint({
              checkpoint: 'MQTT not connected, deferring sending MWS message',
            });
            c('ZenonUserActionLogger').startTimer('MQTT not connected');
            var f = {
                onMQTTStateChanged: function (b) {
                  b === 'Connected' &&
                    (c('ZenonUserActionLogger').stopTimer({
                      checkpointName:
                        'MQTT connected after deferring sending MWS message',
                      timerName: 'MQTT not connected',
                    }),
                    e.unsubscribeChannelEvents(f),
                    window.clearTimeout(g),
                    a());
                },
              },
              g = window.setTimeout(function () {
                e.unsubscribeChannelEvents(f),
                  c('ZenonUserActionLogger').stopTimer({
                    checkpointName:
                      'MQTT never connected. Current status: ' +
                      e.getConnectionState(),
                    timerName: 'MQTT not connected',
                  }),
                  b(c('err')('timeout'));
              }, h);
            e.subscribeChannelEvents(f);
          }
        });
      };
      e.$3 = function (a) {
        var e = this,
          f,
          g,
          h;
        return b('regeneratorRuntime').async(
          function (i) {
            while (1)
              switch ((i.prev = i.next)) {
                case 0:
                  f = !0;
                  i.next = 3;
                  return b('regeneratorRuntime').awrap(
                    this.waitForMqttConnected()['catch'](function (a) {
                      c('ZenonUserActionLogger').logCheckpoint({
                        checkpoint:
                          'Not sending MWS message through MQTT because MQTT could not connect. Error: ' +
                          a,
                      }),
                        (f = !1);
                    }),
                  );
                case 3:
                  if (f) {
                    i.next = 5;
                    break;
                  }
                  return i.abrupt('return');
                case 5:
                  g = c('ZenonDebugLogger').getInstance();
                  d('ZenonMWMessageReliabilityLogger').logSendingMessage(a);
                  g.logMWMessage('SENDING', 'MQTT', a);
                  this.$2 &&
                    d('ZenonMWMessageLogger').logSentMessage(a, this.$2);
                  h = d('ZenonMqttUtil').getMqttChannel();
                  i.prev = 10;
                  i.next = 13;
                  return b('regeneratorRuntime').awrap(
                    h
                      .publish(
                        d('ZenonSignalingConstants').RTC_MULTI_MQTT_TOPIC,
                        JSON.stringify(a),
                      )
                      .then(
                        function (b) {
                          d('ZenonMWMessageReliabilityLogger').logSentMessage(
                            a,
                          );
                        },
                        function (b) {
                          e.$4(a, b.toString());
                        },
                      ),
                  );
                case 13:
                  i.next = 18;
                  break;
                case 15:
                  (i.prev = 15),
                    (i.t0 = i['catch'](10)),
                    this.$4(a, i.t0.toString());
                case 18:
                case 'end':
                  return i.stop();
              }
          },
          null,
          this,
          [[10, 15]],
        );
      };
      e.$4 = function (a, b) {
        var e = c('ZenonDebugLogger').getInstance();
        b = b != null ? b : 'MQTT Message Send Error';
        d('ZenonMWMessageReliabilityLogger').logSendMessageFailed(
          a,
          '[MQTT] ' + b,
        );
        e.logSendMultiwayMessageFailure(b, a.jsonPayload.header.type);
      };
      e.sendMessage = function (a) {
        a = d('ZenonMWMessageTranslator').toMWMessage(a);
        if (!a || !c('ZenonValidateMWMessage')(a))
          return b('Promise').reject(c('err')('Invalid MW message'));
        return a.endpoint.userId !==
          d('ZenonActorHooks').ZenonActor.getAccountID() &&
          !d('ZenonActorHooks').ZenonActor.isInstagramUser()
          ? b('Promise').reject(
              c('err')("MQTT doesn't work with Page users yet"),
            )
          : this.$3(a);
      };
      e.setMessageReceiver = function (a) {
        this.$1 = a;
      };
      e.setLoggingEventHandler = function (a) {
        this.$2 = a;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebSignalingListener',
  [
    'FBLogger',
    'ZenonDebugLogger',
    'ZenonMWMessageReliabilityLogger',
    'ZenonMWMessageTranslator',
    'ZenonMqttUtil',
    'cr:2636',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        (this.$2 = null),
          (this.$1 = d('ZenonMqttUtil').getMqttChannel()),
          (this.$2 = b('cr:2636') ? new (b('cr:2636'))() : null);
      }
      var e = a.prototype;
      e.subscribe = function (a, b) {
        var e = this;
        this.$1.subscribe('/rtc_multi', function (f) {
          try {
            var g = JSON.parse(f),
              h = c('ZenonDebugLogger').getInstance();
            d('ZenonMWMessageReliabilityLogger').logReceivedMessage(g);
            h.logMWMessage('RECEIVED', 'MQTT', g);
            h = d('ZenonMWMessageTranslator').toSignalingMessage(g);
            a(h);
            b && e.$3(f, b);
            d('ZenonMWMessageReliabilityLogger').logProcessingMessage(g);
          } catch (a) {
            c('FBLogger')('rpweb')
              .catching(a)
              .warn('Error receiving MQTT message from /rtc_multi topic');
          }
        });
        this.$2 &&
          this.$1.subscribeBinary('/t_rtc_multi', function (f) {
            try {
              if (e.$2 == null) return;
              f = e.$2.toZenonMWMessage(f);
              if (f == null) return;
              var g = c('ZenonDebugLogger').getInstance();
              g.logMWMessage('RECEIVED', 'Binary', f);
              g = d('ZenonMWMessageTranslator').toSignalingMessage(f);
              a(g);
              b && b(f);
            } catch (a) {
              c('FBLogger')('rpweb')
                .catching(a)
                .warn(
                  'Error receiving binary MQTT message from /t_rtc_multi topic',
                );
            }
          });
      };
      e.unsubscribe = function () {
        this.$1.unsubscribeAll('/rtc_multi'),
          this.$2 && this.$1.unsubscribeAll('/t_rtc_multi');
      };
      e.$3 = function (a, b) {
        try {
          a = JSON.parse(a);
          b(a);
        } catch (a) {
          c('recoverableViolation')(
            'Signaling messages should be json parsable. error:' + a,
            'rtweb',
          );
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'isAdsExcelAddinURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)fbaddins\\.com$', 'i'),
      h = ['https'];
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    f['default'] = a;
  },
  66,
);
__d(
  'isValidAsyncSignalURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp(
        '((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)',
        'i',
      ),
      h = ['https'];
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.includes(a.getProtocol()) && g.test(a.getDomain());
    }
    f['default'] = a;
  },
  66,
);
__d(
  'AsyncSignal',
  [
    'ErrorGuard',
    'Promise',
    'QueryString',
    'Run',
    'TimeSlice',
    'TrackingConfig',
    'URI',
    'ZeroRewrites',
    'getAsyncParams',
    'isAdsExcelAddinURI',
    'isFacebookURI',
    'isMessengerDotComURI',
    'isValidAsyncSignalURI',
    'isWorkplaceDotComURI',
    'memoize',
    'promiseDone',
  ],
  function (a, b, c, d, e, f) {
    var g, h, i;
    function a(a, c) {
      (this.data = c || {}),
        (this.uri = a.toString()),
        b('TrackingConfig').domain &&
          this.uri.charAt(0) == '/' &&
          (this.uri = b('TrackingConfig').domain + this.uri);
    }
    a.prototype.setHandler = function (a) {
      this.handler = a;
      return this;
    };
    a.prototype.setTimeout = function (a) {
      this.timeout = a;
      return this;
    };
    a.prototype.send = function () {
      b('TimeSlice').guard(this._send.bind(this), 'AsyncSignal send', {
        propagationType: b('TimeSlice').PropagationType.ORPHAN,
      })();
    };
    a.prototype._send = function () {
      var a = this.handler,
        c = this.data;
      c.asyncSignal = ((Math.random() * 1e4) | 0) + 1;
      var d = b('ZeroRewrites').rewriteURI(new (g || (g = b('URI')))(this.uri));
      d =
        b('isFacebookURI')(d) ||
        b('isMessengerDotComURI')(d) ||
        b('isAdsExcelAddinURI')(d) ||
        b('isWorkplaceDotComURI')(d) ||
        b('isValidAsyncSignalURI')(d);
      if (d) Object.assign(c, b('getAsyncParams')('POST'));
      else
        throw new Error(
          "'" +
            this.uri +
            "' is an external URL, you should not send async signals to offsite links.",
        );
      var e = b('QueryString').appendToUrl(this.uri, c);
      i ||
        (i = new (b('Promise'))(function (a) {
          b('Run').onAfterLoad(a);
        }));
      d = i.then(function () {
        return new (b('Promise'))(function (a, b) {
          var c = new Image();
          c.onload = a;
          c.onerror = c.onabort = b;
          c.src = e;
        });
      });
      if (a) {
        var f = !1,
          j = b('memoize')(function () {
            (h || (h = b('ErrorGuard'))).applyWithGuard(a, null, [f]);
          });
        b('promiseDone')(
          d.then(function () {
            (f = !0), j();
          }, j),
        );
        this.timeout && setTimeout(j, this.timeout);
      }
      return this;
    };
    e.exports = a;
  },
  null,
);
__d(
  'Chromedome',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      if (
        top !== window ||
        document.domain == null ||
        !/(^|\.)facebook\.(com|sg)$/.test(document.domain)
      )
        return;
      a = h._('__JHASH__4REdQ6uuqzn__JHASH__');
      var b = h._('__JHASH__S8hqZ4zKptW__JHASH__'),
        c = h._('__JHASH__1jNE2MHDhX-__JHASH__', [
          h._param('url', 'https://www.facebook.com/selfxss'),
        ]);
      if (window.chrome || window.safari) {
        var d = 'font-family:helvetica; font-size:20px; ';
        [
          [
            a,
            d +
              'font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;',
          ],
          [b, d],
          [c, d],
          ['', ''],
        ].map(function (a) {
          window.setTimeout(
            console.log.bind(console, '\n%c' + a[0].toString(), a[1]),
          );
        });
      } else {
        a = [
          '',
          ' .d8888b.  888                       888',
          'd88P  Y88b 888                       888',
          'Y88b.      888                       888',
          ' "Y888b.   888888  .d88b.  88888b.   888',
          '    "Y88b. 888    d88""88b 888 "88b  888',
          '      "888 888    888  888 888  888  Y8P',
          'Y88b  d88P Y88b.  Y88..88P 888 d88P',
          ' "Y8888P"   "Y888  "Y88P"  88888P"   888',
          '                           888',
          '                           888',
          '                           888',
        ];
        d = ('' + b.toString()).match(/.{35}.+?\s+|.+$/g);
        if (d != null) {
          b = Math.floor(Math.max(0, (a.length - d.length) / 2));
          for (var e = 0; e < a.length || e < d.length; e++) {
            var f = a[e];
            a[e] = f + new Array(45 - f.length).join(' ') + (d[e - b] || '');
          }
        }
        console.log('\n\n\n' + a.join('\n') + '\n\n' + c.toString() + '\n');
        return;
      }
    }
    g.start = a;
  },
  98,
);
__d(
  'BootloaderEventsPerf',
  [
    'invariant',
    'Bootloader',
    'BootloaderEvents',
    'ResourceTimingStore',
    'objectEntries',
    'objectValues',
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = {
      total_count: 0,
      total_bytes: 0,
      downloaded_count: 0,
      downloaded_bytes: 0,
      cached_count: 0,
      cached_bytes: 0,
      inlined_count: 0,
      inlined_bytes: 0,
      duration: 0,
      missing_count: 0,
    };
    function j(a, b, c) {
      return Math.max(
        0,
        ((c = c) != null ? c : 0) - Math.max(a, (c = b) != null ? c : 0),
      );
    }
    function k() {
      return {
        blocking: babelHelpers['extends']({}, i),
        nonblocking: babelHelpers['extends']({}, i),
        default: babelHelpers['extends']({}, i),
      };
    }
    function l(a, b, c) {
      var e, f;
      if (c == null) (e = 0), (f = 'downloaded');
      else if (c[1]) (e = c[0].length), (f = 'inlined');
      else {
        c = d('ResourceTimingStore').getEntryForURL(c[0]);
        c
          ? ((e = c.encodedBodySize),
            (f = c.transferSize === 0 ? 'cached' : 'downloaded'))
          : ((e = 0), (f = 'downloaded'), a.missing_count++);
      }
      a.total_count++;
      a.total_bytes += e;
      if (!b) return;
      a.duration = Math.max(a.duration, b);
      switch (f) {
        case 'downloaded':
          a.downloaded_count++;
          a.downloaded_bytes += e;
          break;
        case 'inlined':
          a.inlined_count++;
          a.inlined_bytes += e;
          break;
        case 'cached':
          a.cached_count++;
          a.cached_bytes += e;
          break;
      }
    }
    function m(a, b, d, e, f) {
      var g = c('Bootloader').getResourceState(b);
      l(a, j(d, g.loadStart, g.loadEnd), e);
      g.loadError != null && f.add(b);
    }
    function n(a, b, d, e) {
      var f = k();
      for (
        var a = c('objectEntries')(a),
          g = Array.isArray(a),
          i = 0,
          a = g
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var j;
        if (g) {
          if (i >= a.length) break;
          j = a[i++];
        } else {
          i = a.next();
          if (i.done) break;
          j = i.value;
        }
        j = j;
        var l = j[0];
        j = j[1];
        for (
          var j = j,
            n = Array.isArray(j),
            o = 0,
            j = n
              ? j
              : j[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var p;
          if (n) {
            if (o >= j.length) break;
            p = j[o++];
          } else {
            o = j.next();
            if (o.done) break;
            p = o.value;
          }
          p = p;
          var q = p[0];
          p = p[1];
          var r = void 0,
            s = void 0;
          switch (p.type) {
            case 'async':
              s = null;
              r = d;
              break;
            case 'js':
            case 'css':
              s = [p.src, p.d === 1];
              r = f;
              break;
            default:
              p, h(0, 3721);
          }
          m(r[l], q, b, s, e);
        }
      }
      return f;
    }
    function o(a, b) {
      var e = {
        unpredicted: d('BootloaderEvents').newResourceMapSet(),
        ef: d('BootloaderEvents').newResourceMapSet(),
        overpredicted: d('BootloaderEvents').newResourceMapSet(),
      };
      for (
        var f = c('objectEntries')(b),
          g = Array.isArray(f),
          h = 0,
          f = g
            ? f
            : f[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var i;
        if (g) {
          if (h >= f.length) break;
          i = f[h++];
        } else {
          h = f.next();
          if (h.done) break;
          i = h.value;
        }
        i = i;
        var j = i[0];
        i = i[1];
        for (
          var i = i.entries(),
            k = Array.isArray(i),
            l = 0,
            i = k
              ? i
              : i[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var m;
          if (k) {
            if (l >= i.length) break;
            m = i[l++];
          } else {
            l = i.next();
            if (l.done) break;
            m = l.value;
          }
          m = m;
          var n = m[0];
          m = m[1];
          a[j].has(n) ? e.ef[j].set(n, m) : e.overpredicted[j].set(n, m);
        }
      }
      for (
        n = c('objectEntries')(a),
          m = Array.isArray(n),
          l = 0,
          n = m
            ? n
            : n[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        if (m) {
          if (l >= n.length) break;
          k = n[l++];
        } else {
          l = n.next();
          if (l.done) break;
          k = l.value;
        }
        i = k;
        j = i[0];
        h = i[1];
        for (
          g = h.entries(),
            f = Array.isArray(g),
            a = 0,
            g = f
              ? g
              : g[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (f) {
            if (a >= g.length) break;
            k = g[a++];
          } else {
            a = g.next();
            if (a.done) break;
            k = a.value;
          }
          i = k;
          h = i[0];
          k = i[1];
          b[j].has(h) || e.unpredicted[j].set(h, k);
        }
      }
      return e;
    }
    function a(a) {
      var b = a.efData,
        c = a.rsrcs,
        d = a.startTime,
        e = new Set(),
        f;
      if (b) {
        var g = o(c, b.tierOne);
        f = g.unpredicted;
        g = {
          ef: n(g.ef, b.fetchRsrcsStart, k(), e),
          overpredicted: n(g.overpredicted, b.fetchRsrcsStart, k(), e),
        };
        b = {
          ef_fetch_predictions: b.fetchPredictionsEnd - b.fetchPredictionsStart,
          ef_fetch_start_wait: b.fetchPredictionsEnd - b.fetchRsrcsStart,
          ef_head_start: d - b.fetchRsrcsStart,
        };
      } else (f = c), (g = {}), (b = {});
      c = babelHelpers['extends']({ unpredicted: n(f, d, k(), e) }, g);
      return {
        source: a.source,
        source_detail: a.sourceDetail,
        is_first_identical: a.isFirstIdentical,
        timeslice_context: (f = a.timesliceContext) == null ? void 0 : f.name,
        start_time: d,
        err_count: e.size,
        resources: c,
        durations: babelHelpers['extends'](
          {
            jsmods_wait: a.jsmodsStart - d,
            jsmods: a.jsmodsEnd - a.jsmodsStart,
            jsmods_done_wait: a.jsmodsEnd - d,
            download_done_wait: a.logTime - d,
          },
          b,
        ),
        payloadStats: a.payloadStats,
      };
    }
    function b(a) {
      var b = a.startTime,
        e = 0,
        f = 0,
        g = 0,
        h = 0;
      for (
        var i = a.components,
          m = Array.isArray(i),
          o = 0,
          i = m
            ? i
            : i[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var p;
        if (m) {
          if (o >= i.length) break;
          p = i[o++];
        } else {
          o = i.next();
          if (o.done) break;
          p = o.value;
        }
        p = p;
        p = c('Bootloader').getComponentTiming(p);
        var q = p.tierTwoStart,
          r = p.tierTwoEnd,
          s = p.tierThreeStart;
        p = p.tierThreeEnd;
        e = Math.max(e, j(b, q, r));
        f = Math.max(f, j(b, b, r));
        g = Math.max(g, j(b, s, p));
        h = Math.max(h, j(b, b, p));
      }
      q = new Set();
      r = k();
      s = n(a.tierOne, b, r, q);
      p = n(a.tierTwo, b, r, q);
      o = n(a.tierThree, b, r, q);
      m = r.blocking.downloaded_count != 0;
      i = k();
      var t = d('BootloaderEvents').newResourceMapSet(),
        u = new Set(),
        v = [a.tierOne, a.tierTwo, a.tierThree];
      for (var w = 0; w < v.length; w++) {
        var x = v[w];
        for (
          var x = c('objectValues')(x),
            y = Array.isArray(x),
            z = 0,
            x = y
              ? x
              : x[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var A;
          if (y) {
            if (z >= x.length) break;
            A = x[z++];
          } else {
            z = x.next();
            if (z.done) break;
            A = z.value;
          }
          A = A;
          for (
            var A = A.keys(),
              B = Array.isArray(A),
              C = 0,
              A = B
                ? A
                : A[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var D;
            if (B) {
              if (C >= A.length) break;
              D = A[C++];
            } else {
              C = A.next();
              if (C.done) break;
              D = C.value;
            }
            D = D;
            u.add(D);
          }
        }
      }
      D = 0;
      C = 0;
      B = 0;
      for (
        A = a.beRequests.values(),
          z = Array.isArray(A),
          y = 0,
          A = z
            ? A
            : A[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        if (z) {
          if (y >= A.length) break;
          x = A[y++];
        } else {
          y = A.next();
          if (y.done) break;
          x = y.value;
        }
        v = x;
        D += j(b, b, v.requestStart);
        C += v.serverGenTime;
        B += v.jsmodsEnd - v.jsmodsStart;
        l(i[m ? 'blocking' : 'nonblocking'], v.responseStart - v.requestStart, [
          v.uri,
          !1,
        ]);
        for (
          w = c('objectEntries')(v.rsrcs),
            x = Array.isArray(w),
            v = 0,
            w = x
              ? w
              : w[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var E;
          if (x) {
            if (v >= w.length) break;
            E = w[v++];
          } else {
            v = w.next();
            if (v.done) break;
            E = v.value;
          }
          E = E;
          var F = E[0];
          E = E[1];
          for (
            var E = E,
              G = Array.isArray(E),
              H = 0,
              E = G
                ? E
                : E[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var I;
            if (G) {
              if (H >= E.length) break;
              I = E[H++];
            } else {
              H = E.next();
              if (H.done) break;
              I = H.value;
            }
            I = I;
            var J = I[0];
            I = I[1];
            u.has(J) || t[F].set(J, I);
          }
        }
      }
      J = n(t, b, r, q);
      return {
        ref: a.ref,
        components: a.components,
        timeslice_context: (I = a.timesliceContext) == null ? void 0 : I.name,
        start_time: b,
        err_count: q.size,
        resources: { t1: s, t2: p, t3: o, be: i, unpredicted: J, async: r },
        durations: {
          fetch_start_wait: a.fetchStartTime - b,
          be_start_wait: D,
          be_server_gen: C,
          be_jsmods: B,
          callback_wait: a.callbackStart - b,
          callback: a.callbackEnd - a.callbackStart,
          bootload_done_wait: a.callbackEnd - b,
          rdfd_requirelazy: e,
          rdfd_done_wait: f,
          rd_requirelazy: g,
          rd_done_wait: h,
        },
      };
    }
    function e(a) {
      a.start_time;
      var b = a.resources,
        d = a.durations;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'start_time',
        'resources',
        'durations',
      ]);
      for (
        var b = c('objectEntries')(b),
          e = Array.isArray(b),
          f = 0,
          b = e
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= b.length) break;
          g = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = g[0];
        g = g[1];
        for (
          var g = c('objectEntries')(g),
            i = Array.isArray(g),
            j = 0,
            g = i
              ? g
              : g[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var k;
          if (i) {
            if (j >= g.length) break;
            k = g[j++];
          } else {
            j = g.next();
            if (j.done) break;
            k = j.value;
          }
          k = k;
          var l = k[0];
          k = k[1];
          for (
            var k = c('objectEntries')(k),
              m = Array.isArray(k),
              n = 0,
              k = m
                ? k
                : k[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var o;
            if (m) {
              if (n >= k.length) break;
              o = k[n++];
            } else {
              n = k.next();
              if (n.done) break;
              o = n.value;
            }
            o = o;
            var p = o[0];
            o = o[1];
            a[h + '_' + l + '_resources_' + p] = Math.round(Number(o));
          }
        }
      }
      for (
        p = c('objectEntries')(d),
          o = Array.isArray(p),
          n = 0,
          p = o
            ? p
            : p[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        if (o) {
          if (n >= p.length) break;
          m = p[n++];
        } else {
          n = p.next();
          if (n.done) break;
          m = n.value;
        }
        k = m;
        l = k[0];
        j = k[1];
        a[l + '_duration'] = Math.round(Number(j));
      }
      if (a.payloadStats) {
        for (
          i = c('objectEntries')(a.payloadStats),
            g = Array.isArray(i),
            h = 0,
            i = g
              ? i
              : i[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (g) {
            if (h >= i.length) break;
            f = i[h++];
          } else {
            h = i.next();
            if (h.done) break;
            f = h.value;
          }
          e = f;
          b = e[0];
          d = e[1];
          for (
            m = c('objectEntries')(d),
              k = Array.isArray(m),
              l = 0,
              m = k
                ? m
                : m[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            if (k) {
              if (l >= m.length) break;
              j = m[l++];
            } else {
              l = m.next();
              if (l.done) break;
              j = l.value;
            }
            n = j;
            o = n[0];
            p = n[1];
            a[b + '_' + o + '_count'] = Math.round(Number(p));
          }
        }
        delete a.payloadStats;
      }
      return a;
    }
    g.computeHRData = a;
    g.computeBLData = b;
    g.flattenData = e;
  },
  98,
);
__d(
  'LsRtcEndCallSurveyFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1743882');
    c = b('FalcoLoggerInternal').create('ls_rtc_end_call_survey', a);
    e.exports = c;
  },
  null,
);
__d(
  'LsRtcStarRatingFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1743884');
    c = b('FalcoLoggerInternal').create('ls_rtc_star_rating', a);
    e.exports = c;
  },
  null,
);
__d(
  'AccessibilityWebAssistiveTechTypedLoggerLite',
  ['generateLiteTypedLogger'],
  function (a, b, c, d, e, f) {
    'use strict';
    e.exports = b('generateLiteTypedLogger')(
      'logger:AccessibilityWebAssistiveTechLoggerConfig',
    );
  },
  null,
);
__d(
  'Queue',
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    a = (function () {
      function a(a) {
        (this._timeout = null),
          (this._interval = (a == null ? void 0 : a.interval) || 0),
          (this._processor = a == null ? void 0 : a.processor),
          (this._queue = []),
          (this._stopped = !0);
      }
      var b = a.prototype;
      b._dispatch = function (a) {
        var b = this;
        a === void 0;
        if (this._stopped || this._queue.length === 0) return;
        a = this._processor;
        if (a == null) {
          this._stopped = !0;
          throw new Error('No processor available');
        }
        var c = this._interval;
        if (c != null)
          a.call(this, this._queue.shift()),
            (this._timeout = setTimeout(function () {
              return b._dispatch();
            }, c));
        else while (this._queue.length) a.call(this, this._queue.shift());
      };
      b.enqueue = function (a) {
        this._processor && !this._stopped
          ? this._processor(a)
          : this._queue.push(a);
        return this;
      };
      b.start = function (a) {
        a && (this._processor = a);
        this._stopped = !1;
        this._dispatch();
        return this;
      };
      b.isStarted = function () {
        return !this._stopped;
      };
      b.dispatch = function () {
        this._dispatch(!0);
      };
      b.stop = function (a) {
        this._stopped = !0;
        a && this._timeout != null && clearTimeout(this._timeout);
        return this;
      };
      b.merge = function (a, b) {
        if (b) {
          (b = this._queue).unshift.apply(b, a._queue);
        } else {
          (b = this._queue).push.apply(b, a._queue);
        }
        a._queue = [];
        this._dispatch();
        return this;
      };
      b.getLength = function () {
        return this._queue.length;
      };
      a.get = function (b, c) {
        var d;
        b in g ? (d = g[b]) : (d = g[b] = new a(c));
        return d;
      };
      a.exists = function (a) {
        return a in g;
      };
      a.remove = function (a) {
        return delete g[a];
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'ErrorSetup',
  ['fb-error'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('fb-error').ErrorSetup;
  },
  98,
);
