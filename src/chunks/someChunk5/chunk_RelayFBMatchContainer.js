__d(
  'RelayFBMatchContainer',
  ['RelayFBModuleLoader', 'react', 'react-relay/relay-hooks/MatchContainer'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.fallback,
        e = a.match;
      a = a.props;
      return h.jsx(c('react-relay/relay-hooks/MatchContainer'), {
        fallback: b,
        loader: d('RelayFBModuleLoader').read,
        match: e,
        props: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
