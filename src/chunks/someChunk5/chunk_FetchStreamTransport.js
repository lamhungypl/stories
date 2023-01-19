__d(
  'FetchStreamTransport',
  [
    'ArbiterMixin',
    'FBLogger',
    'FetchStreamConfig',
    'StreamBlockReader',
    'TimeSlice',
    'URI',
    'mixin',
    'nullthrows',
    'regeneratorRuntime',
  ],
  function $module_FetchStreamTransport(
    global,
    require,
    importDefault,
    importNamespace,
    requireLazy,
    module,
    exports,
  ) {
    var instance_count = 0,
      FetchStreamTransport = (function (_ref) {
        babelHelpers.inheritsLoose(FetchStreamTransport, _ref);
        function FetchStreamTransport(uri) {
          var _this;
          if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder)
            throw new Error('fetch stream transport is not supported here');
          _this = _ref.call(this) || this;
          _this.$FetchStreamTransport6 = null;
          _this.$FetchStreamTransport1 = uri;
          _this.$FetchStreamTransport3 = !1;
          _this.$FetchStreamTransport4 = !1;
          _this.$FetchStreamTransport5 = !1;
          _this.$FetchStreamTransport2 = ++instance_count;
          return (
            babelHelpers.assertThisInitialized(_this) ||
            babelHelpers.assertThisInitialized(_this)
          );
        }
        var _proto = FetchStreamTransport.prototype;
        _proto.hasFinished = function hasFinished() {
          return this.$FetchStreamTransport5;
        };
        _proto.getRequestURI = function getRequestURI() {
          return new (importDefault('URI'))(
            this.$FetchStreamTransport1,
          ).addQueryData({
            __a: 1,
            __adt: this.$FetchStreamTransport2,
            __req: 'fetchstream_' + this.$FetchStreamTransport2,
            ajaxpipe_fetch_stream: 1,
          });
        };
        _proto.send = function send() {
          if (this.$FetchStreamTransport3)
            throw new Error(
              'FetchStreamTransport instances cannot be re-used.',
            );
          this.$FetchStreamTransport3 = !0;
          var req = new Request(this.getRequestURI().toString(), {
            mode: 'same-origin',
            credentials: 'include',
          });
          this.$FetchStreamTransport6 = importDefault(
            'TimeSlice',
          ).getGuardedContinuation(
            'FetchStreamTransport: waiting on first response',
          );
          var fetchPromise = self.fetch(req, { redirect: 'follow' });
          this.$FetchStreamTransport7(fetchPromise);
        };
        _proto.$FetchStreamTransport7 = function $FetchStreamTransport7(
          fetchPromise,
        ) {
          var _this = this,
            response,
            reader,
            first,
            _loop,
            _ret;
          return require('regeneratorRuntime').async(
            function $FetchStreamTransport7$(_context2) {
              while (1)
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return require('regeneratorRuntime').awrap(fetchPromise);
                  case 3:
                    response = _context2.sent;
                    _context2.next = 9;
                    break;
                  case 6:
                    (_context2.prev = 6),
                      (_context2.t0 = _context2['catch'](0)),
                      this.abort();
                  case 9:
                    if (!(!response || !response.body || !response.ok)) {
                      _context2.next = 12;
                      break;
                    }
                    this.abort();
                    return _context2.abrupt('return');
                  case 12:
                    (reader = new (importDefault('StreamBlockReader'))(
                      response.body,
                    )),
                      (first = !0),
                      (_loop = function _loop() {
                        var nextData;
                        return require('regeneratorRuntime').async(
                          function _loop$(_context) {
                            while (1)
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return require('regeneratorRuntime').awrap(
                                    reader.readUntilStringOrEnd(
                                      importDefault('FetchStreamConfig').delim,
                                    ),
                                  );
                                case 2:
                                  nextData = _context.sent;
                                  if (!_this.$FetchStreamTransport4) {
                                    _context.next = 5;
                                    break;
                                  }
                                  return _context.abrupt('return', 'break');
                                case 5:
                                  importDefault('nullthrows')(
                                    _this.$FetchStreamTransport6,
                                  )(function () {
                                    if (first && nextData.startsWith('<')) {
                                      importDefault('FBLogger')(
                                        'FetchStreamTransport',
                                      ).mustfix(
                                        'Endpoint: %s is sending a raw HTML response instead of properly formatted payload',
                                        _this.$FetchStreamTransport1.toString(),
                                      );
                                      var node = document.createElement('div');
                                      node.innerHTML = nextData;
                                      var scripts =
                                        node.getElementsByTagName('script');
                                      for (var i = 0; i < scripts.length; i++)
                                        eval(scripts[i].innerHTML);
                                      _this.$FetchStreamTransport5 = !0;
                                      return;
                                    }
                                    first = !1;
                                    var parsedResponse = JSON.parse(nextData);
                                    reader.isDone() || parsedResponse.finished
                                      ? (_this.$FetchStreamTransport5 = !0)
                                      : (_this.$FetchStreamTransport6 =
                                          importDefault(
                                            'TimeSlice',
                                          ).getGuardedContinuation(
                                            'FetchStreamTransport: waiting on next response',
                                          ));
                                    _this.inform(
                                      'response',
                                      parsedResponse.content,
                                    );
                                  });
                                case 6:
                                case 'end':
                                  return _context.stop();
                              }
                          },
                          null,
                          this,
                        );
                      });
                  case 15:
                    if (
                      !(
                        !this.$FetchStreamTransport5 &&
                        !this.$FetchStreamTransport4
                      )
                    ) {
                      _context2.next = 23;
                      break;
                    }
                    _context2.next = 18;
                    return require('regeneratorRuntime').awrap(_loop());
                  case 18:
                    _ret = _context2.sent;
                    if (!(_ret === 'break')) {
                      _context2.next = 21;
                      break;
                    }
                    return _context2.abrupt('break', 23);
                  case 21:
                    _context2.next = 15;
                    break;
                  case 23:
                  case 'end':
                    return _context2.stop();
                }
            },
            null,
            this,
            [[0, 6]],
          );
        };
        _proto.abort = function abort() {
          var _this2 = this;
          if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5)
            return;
          this.$FetchStreamTransport4 = !0;
          this.$FetchStreamTransport5 = !0;
          if (this.$FetchStreamTransport6) {
            var continuation = this.$FetchStreamTransport6;
            continuation(function () {
              _this2.inform('abort');
            });
          } else this.inform('abort');
        };
        return FetchStreamTransport;
      })(importDefault('mixin')(importDefault('ArbiterMixin')));
    exports['default'] = FetchStreamTransport;
  },
  98,
);
