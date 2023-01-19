__d(
  'CometRelayEnvironmentProvider',
  ['CometRelay', 'CometRelayEnvironment', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsx(d('CometRelay').RelayEnvironmentProvider, {
        environment: a.environment || c('CometRelayEnvironment'),
        children: a.children,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
