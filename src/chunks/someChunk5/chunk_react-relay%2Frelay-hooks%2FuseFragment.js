__d(
  'react-relay/relay-hooks/useFragment',
  [
    'react',
    'react-relay/relay-hooks/HooksImplementation',
    'react-relay/relay-hooks/loadQuery',
    'react-relay/relay-hooks/useFragmentNode',
    'react-relay/relay-hooks/useStaticFragmentNodeWarning',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('react-relay/relay-hooks/loadQuery').useTrackLoadQueryInRender;
    c = g || (g = b('react'));
    d = c.useDebugValue;
    var i = b('relay-runtime').getFragment;
    function j(a, c) {
      h();
      a = i(a);
      b('react-relay/relay-hooks/useStaticFragmentNodeWarning')(
        a,
        'first argument of useFragment()',
      );
      a = b('react-relay/relay-hooks/useFragmentNode')(a, c, 'useFragment()');
      c = a.data;
      return c;
    }
    function a(a, c) {
      var d = b('react-relay/relay-hooks/HooksImplementation').get();
      if (d) return d.useFragment(a, c);
      else return j(a, c);
    }
    e.exports = a;
  },
  null,
);
