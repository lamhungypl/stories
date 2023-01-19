__d(
  'react-relay/relay-hooks/useSubscribeToInvalidationState',
  ['react', 'react-relay/relay-hooks/useRelayEnvironment'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    var h = c.useEffect,
      i = c.useRef;
    function a(a, c) {
      var d = b('react-relay/relay-hooks/useRelayEnvironment')(),
        e = i(null),
        f = Array.from(a).sort().join('');
      h(
        function () {
          var b = d.getStore(),
            f = b.lookupInvalidationState(a),
            g = b.subscribeToInvalidationState(f, c);
          e.current = g;
          return function () {
            return g.dispose();
          };
        },
        [f, c, d],
      );
      return {
        dispose: function () {
          e.current != null && e.current.dispose();
        },
      };
    }
    e.exports = a;
  },
  null,
);
