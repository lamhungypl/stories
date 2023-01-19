__d(
  'ThrottlingClient',
  [
    'EmptyStream',
    'Promise',
    'RtiWebRequestStreamClient',
    'TransportSelectingClientUtils',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this.$2 = c('RtiWebRequestStreamClient').ThrottledMethods),
          (this.$1 = a);
      }
      var e = a.prototype;
      e.createStream = function (a, e, f, g, h) {
        var i = d('TransportSelectingClientUtils').getMethodContextForCC(
          a.method,
          a.topic,
        );
        if (c('gkx')('1682') && this.$2[i]) {
          g.onTermination(
            'RequestStream method ' + i + ' has been throttled on this client',
          );
          return b('Promise').resolve(c('EmptyStream'));
        }
        return this.$1.createStream(a, e, f, g, h);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
