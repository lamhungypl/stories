__d(
  'react-relay/relay-hooks/react-cache/useFragment_REACT_CACHE',
  [
    'react',
    'react-relay/relay-hooks/loadQuery',
    'react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE',
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
    function a(a, c) {
      h();
      a = i(a);
      a = b(
        'react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE',
      )(a, c, 'useFragment()');
      return a;
    }
    e.exports = a;
  },
  null,
);
