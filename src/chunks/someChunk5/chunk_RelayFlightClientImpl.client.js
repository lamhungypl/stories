__d(
  'RelayFlightClientImpl.client',
  [
    'invariant',
    'react-relay/relay-hooks/useFragment',
    'react-relay/relay-hooks/useLazyLoadQuery',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a, b, d) {
      return c('react-relay/relay-hooks/useLazyLoadQuery')(a, b, {
        fetchPolicy: 'store-only',
        UNSTABLE_renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
      });
    }
    function b(a) {
      return a;
    }
    function e(a, b) {
      a = a.params.id;
      a != null || h(0, 23333);
      return { id: a, variables: b };
    }
    f = {
      loadFragmentForClient: b,
      loadQueryForClient: e,
      useFragment: c('react-relay/relay-hooks/useFragment'),
      useReadQuery: a,
      readInlineData: d('relay-runtime').readInlineData,
    };
    g['default'] = f;
  },
  98,
);
