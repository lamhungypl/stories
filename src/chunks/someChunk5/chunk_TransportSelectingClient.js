__d(
  'TransportSelectingClient',
  [
    'BladeRunnerDeferredClient',
    'DGWEnvUtil',
    'RequestStreamHandler',
    'ThrottlingClient',
    'TransportSelectingClientCCResolver',
    'TransportSelectingClientUtils',
    'cr:1987488',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a() {
        (this.$1 = null),
          b('cr:1987488') != null &&
            (this.$2 = new (c('ThrottlingClient'))(b('cr:1987488')));
      }
      var e = a.prototype;
      e.requestStream = function (a, e, f, g) {
        var h, i, j, k, l, m, n, o;
        return b('regeneratorRuntime').async(
          function (p) {
            while (1)
              switch ((p.prev = p.next)) {
                case 0:
                  i = new (c('RequestStreamHandler'))(f);
                  j = d('TransportSelectingClientUtils').getMethodContextForCC(
                    a.method,
                    a.topic,
                  );
                  k = this.$2;
                  if (
                    !(
                      k != null &&
                      c('DGWEnvUtil').isDGWEnvCompatible() &&
                      !d('TransportSelectingClientUtils').isBlockedMethod(j)
                    )
                  ) {
                    p.next = 17;
                    break;
                  }
                  p.next = 6;
                  return b('regeneratorRuntime').awrap(
                    c('TransportSelectingClientCCResolver').getCCGroupName(j),
                  );
                case 6:
                  l = p.sent;
                  if (
                    !(
                      d('TransportSelectingClientUtils').isDGWStream(l) ||
                      c('DGWEnvUtil').isDGWAsDefault() ||
                      d('TransportSelectingClientUtils').isDGWAllowedSKYTopic(l)
                    )
                  ) {
                    p.next = 17;
                    break;
                  }
                  p.next = 10;
                  return b('regeneratorRuntime').awrap(
                    c(
                      'TransportSelectingClientCCResolver',
                    ).getCCDGWUpsampleMultiplier(j),
                  );
                case 10:
                  m = p.sent;
                  p.next = 13;
                  return b('regeneratorRuntime').awrap(
                    k.createStream(a, e, g, i, { upsampleMultiplier: m }),
                  );
                case 13:
                  n = p.sent;
                  p.next = 16;
                  return b('regeneratorRuntime').awrap(n.start());
                case 16:
                  return p.abrupt('return', n);
                case 17:
                  p.next = 19;
                  return b('regeneratorRuntime').awrap(
                    c('BladeRunnerDeferredClient').requestStream(
                      a,
                      e,
                      d('TransportSelectingClientUtils').BRHandlerConverter(
                        i,
                        (h = a.method) != null ? h : 'unknown',
                      ),
                      g,
                    ),
                  );
                case 19:
                  o = p.sent;
                  return p.abrupt('return', o);
                case 21:
                case 'end':
                  return p.stop();
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
