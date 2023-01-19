__d(
  'react-relay/relay-hooks/RelayEnvironmentProvider',
  ['react', 'react-relay/ReactRelayContext'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = g || b('react'),
      i = h.useMemo;
    function a(a) {
      var c = a.children,
        d = a.environment,
        e = a.getEnvironmentForActor;
      a = i(
        function () {
          return { environment: d, getEnvironmentForActor: e };
        },
        [d, e],
      );
      return h.jsx(b('react-relay/ReactRelayContext').Provider, {
        value: a,
        children: c,
      });
    }
    a.displayName = a.name + ' [from ' + e.id + ']';
    e.exports = a;
  },
  null,
);
