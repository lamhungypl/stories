__d(
  'react-relay/relay-hooks/useSubscription',
  ['react', 'react-relay/relay-hooks/useRelayEnvironment', 'relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    var h = c.useEffect,
      i = b('relay-runtime').requestSubscription;
    function a(a, c) {
      var d = (c = c) != null ? c : i,
        e = b('react-relay/relay-hooks/useRelayEnvironment')();
      h(
        function () {
          var b = d(e, a);
          b = b.dispose;
          return b;
        },
        [e, a, d],
      );
    }
    e.exports = a;
  },
  null,
);
