__d(
  'react-relay/relay-hooks/react-cache/useRefetchableFragment_REACT_CACHE',
  [
    'react',
    'react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE',
    'react-relay/relay-hooks/useStaticFragmentNodeWarning',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    d = c.useDebugValue;
    var h = b('relay-runtime').getFragment;
    function a(a, c) {
      a = h(a);
      b('react-relay/relay-hooks/useStaticFragmentNodeWarning')(
        a,
        'first argument of useRefetchableFragment()',
      );
      a = b(
        'react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE',
      )(a, c, 'useRefetchableFragment()');
      c = a.fragmentData;
      a = a.refetch;
      return [c, a];
    }
    e.exports = a;
  },
  null,
);
