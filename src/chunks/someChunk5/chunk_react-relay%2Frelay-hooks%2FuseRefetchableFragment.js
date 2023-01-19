__d(
  'react-relay/relay-hooks/useRefetchableFragment',
  [
    'react',
    'react-relay/relay-hooks/HooksImplementation',
    'react-relay/relay-hooks/useRefetchableFragmentNode',
    'react-relay/relay-hooks/useStaticFragmentNodeWarning',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    d = c.useDebugValue;
    var h = b('relay-runtime').getFragment;
    function i(a, c) {
      a = h(a);
      b('react-relay/relay-hooks/useStaticFragmentNodeWarning')(
        a,
        'first argument of useRefetchableFragment()',
      );
      a = b('react-relay/relay-hooks/useRefetchableFragmentNode')(
        a,
        c,
        'useRefetchableFragment()',
      );
      c = a.fragmentData;
      a = a.refetch;
      return [c, a];
    }
    function a(a, c) {
      var d = b('react-relay/relay-hooks/HooksImplementation').get();
      if (d) return d.useRefetchableFragment(a, c);
      else return i(a, c);
    }
    e.exports = a;
  },
  null,
);
