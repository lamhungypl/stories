__d(
  'react-relay/relay-hooks/useIsParentQueryActive',
  [
    'react-relay/relay-hooks/useIsOperationNodeActive',
    'react-relay/relay-hooks/useStaticFragmentNodeWarning',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime').getFragment;
    function a(a, c) {
      a = g(a);
      b('react-relay/relay-hooks/useStaticFragmentNodeWarning')(
        a,
        'first argument of useIsParentQueryActive()',
      );
      return b('react-relay/relay-hooks/useIsOperationNodeActive')(a, c);
    }
    e.exports = a;
  },
  null,
);
