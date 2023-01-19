__d(
  'react-relay/relay-hooks/useClientQuery',
  ['react-relay/relay-hooks/useLazyLoadQuery'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, c, d) {
      a = a;
      return b('react-relay/relay-hooks/useLazyLoadQuery')(
        a,
        c,
        babelHelpers['extends']({}, d, { fetchPolicy: 'store-only' }),
      );
    }
    e.exports = a;
  },
  null,
);
