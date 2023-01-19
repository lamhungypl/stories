__d(
  'RelayFBFlightPayloadDeserializer',
  ['ReactFlightDOMRelayClient'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      a = a;
      var b = c('ReactFlightDOMRelayClient').createResponse();
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        c('ReactFlightDOMRelayClient').resolveRow(b, e);
      }
      c('ReactFlightDOMRelayClient').close(b);
      return b;
    }
    b = a;
    g['default'] = b;
  },
  98,
);
