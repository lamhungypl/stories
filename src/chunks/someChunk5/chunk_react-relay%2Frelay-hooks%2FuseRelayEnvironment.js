__d(
  'react-relay/relay-hooks/useRelayEnvironment',
  ['invariant', 'react', 'react-relay/ReactRelayContext'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    c = h || b('react');
    var i = c.useContext;
    function a() {
      var a = i(b('react-relay/ReactRelayContext'));
      a != null || g(0, 21945);
      return a.environment;
    }
    e.exports = a;
  },
  null,
);
