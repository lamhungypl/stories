__d(
  'RelayAPIRequest',
  [
    'invariant',
    'NetworkStatus',
    'URI',
    'XHRHttpError',
    'XHRRequest',
    'createChunkedResponseParser',
    'createRelayChunkedResponseParser',
    'forEachObject',
    'getRelayAPIRequestHandler',
    'getSameOriginTransport',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function i(a) {
      return (
        a === b('XHRHttpError').HTTP_TRANSPORT_ERROR ||
        a === b('XHRHttpError').HTTP_SERVER_ERROR
      );
    }
    a = (function () {
      function a(a, c, d) {
        (this.$1 = !1),
          this.setURI(a),
          this.setMethod('POST'),
          this.setTransportBuilder(b('getSameOriginTransport')),
          (this.$16 = c),
          (this.$17 = d);
      }
      var c = a.prototype;
      c.setURI = function (a) {
        this.$1 && g(0, 2124);
        this.$2 = new (h || (h = b('URI')))(a);
        return this;
      };
      c.setMethod = function (a) {
        this.$1 && g(0, 2125);
        this.$3 = a;
        return this;
      };
      c.setData = function (a) {
        this.$1 && g(0, 2126);
        this.$4 = a;
        return this;
      };
      c.setDataSerializer = function (a) {
        this.$5 = a;
        return this;
      };
      c.setRawData = function (a) {
        this.$1 && g(0, 2127);
        this.$6 = a;
        return this;
      };
      c.setTrackingName = function (a) {
        this.$9 = a;
        return this;
      };
      c.setPerformanceLogger = function (a) {
        this.$18 = a;
        return this;
      };
      c.setRequestHeaders = function (a) {
        this.$1 && g(0, 2128);
        this.$7 = a;
        return this;
      };
      c.setTransportBuilder = function (a) {
        var b = this;
        this.$1 && g(0, 2129);
        var c = a;
        this.$10 = function () {
          var a = c();
          a.setTrackingName && a.setTrackingName(b.$9);
          a.setPerformanceLogger && b.$18 && a.setPerformanceLogger(b.$18);
          return a;
        };
        return this;
      };
      c.setResponseFilter = function (a) {
        this.$1 && g(0, 2130);
        this.$11 = a;
        return this;
      };
      c.setResponseChunkHandler = function (a) {
        this.$1 && g(0, 2131);
        this.$12 == null || g(0, 42544);
        this.$13 = a;
        return this;
      };
      c.setResponseBatchChunkHandler = function (a) {
        this.$1 && g(0, 2131);
        this.$13 == null || g(0, 42545);
        this.$12 = a;
        return this;
      };
      c.setErrorHandler = function (a) {
        this.$1 && g(0, 2132);
        this.$14 = a;
        return this;
      };
      c.setTimeoutHandler = function (a) {
        this.$1 && g(0, 2133);
        this.$15 = a;
        return this;
      };
      c.setSkipRetry = function (a) {
        this.$8 = a;
        return this;
      };
      c.send = function () {
        var a = this;
        this.$1 && g(0, 2134);
        this.$1 = !0;
        if (!this.$2 || !this.$2.toString()) {
          this.$14 &&
            this.$14({
              errorCode: 'HTTP_CLIENT_ERROR',
              errorType: 'HTTP',
              errorMsg:
                'No uri provided - make sure RelayAPIConfig is properly setup.',
            });
          return { abort: function () {} };
        }
        var c,
          d = 0,
          e = 0,
          f,
          h = function () {
            return !a.$8 && d <= a.$16.length;
          },
          j = function () {
            var b = a.$16[d - 1];
            b = e + b;
            var f = setTimeout(function () {
              c = k();
            }, b - Date.now());
            c = {
              abort: function () {
                clearTimeout(f);
              },
            };
          },
          k = function () {
            d++;
            e = Date.now();
            var g;
            a.$12
              ? ((g = b('createRelayChunkedResponseParser')(a.$12, a.$11)),
                (g = b('getRelayAPIRequestHandler')(g)))
              : a.$13 &&
                ((g = b('createChunkedResponseParser')(a.$13, a.$11)),
                (g = b('getRelayAPIRequestHandler')(g)));
            var k = a.$14,
              l = function (a) {
                h() && i(a.errorCode)
                  ? (b('warning')(
                      !1,
                      'RelayAPIRequest: Transient HTTP error, retrying. %s %s %s',
                      a.errorType || '',
                      a.errorCode || '',
                      a.errorMsg || '',
                    ),
                    !b('NetworkStatus').isOnline()
                      ? ((f = b('NetworkStatus').onChange(function (a) {
                          a = a.online;
                          a && (j(), f.remove());
                        })),
                        (c = {
                          abort: function () {
                            f.remove();
                          },
                        }))
                      : j())
                  : k && k(a);
              },
              m = a.$15,
              n = function () {
                h()
                  ? (b('warning')(
                      !1,
                      'RelayAPIRequest: HTTP timeout, retrying.',
                    ),
                    j())
                  : m && m();
              },
              o = new (b('XHRRequest'))(a.$2)
                .setMethod(a.$3)
                .setData(a.$4)
                .setTransportBuilder(a.$10)
                .setErrorHandler(l)
                .setResponseHandler(g)
                .setTimeout(a.$17)
                .setTimeoutHandler(n);
            a.$6 != null && o.setRawData(a.$6);
            a.$5 != null && o.setDataSerializer(a.$5);
            a.$7 &&
              b('forEachObject')(a.$7, function (a, b) {
                o.setRequestHeader(b, a);
              });
            o.send();
            return o;
          };
        c = k();
        return {
          abort: function () {
            c && c.abort();
          },
        };
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
