__d(
  'react-relay/relay-hooks/useLazyLoadQuery',
  [
    'react-relay/relay-hooks/loadQuery',
    'react-relay/relay-hooks/useLazyLoadQueryNode',
    'react-relay/relay-hooks/useMemoOperationDescriptor',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('react-relay/relay-hooks/loadQuery').useTrackLoadQueryInRender,
      h = b('relay-runtime').__internal.fetchQuery;
    function a(a, c, d) {
      g();
      var e = b('react-relay/relay-hooks/useRelayEnvironment')();
      a = b('react-relay/relay-hooks/useMemoOperationDescriptor')(
        a,
        c,
        d && d.networkCacheConfig ? d.networkCacheConfig : { force: !0 },
      );
      c = b('react-relay/relay-hooks/useLazyLoadQueryNode')({
        componentDisplayName: 'useLazyLoadQuery()',
        fetchKey: d == null ? void 0 : d.fetchKey,
        fetchObservable: h(e, a),
        fetchPolicy: d == null ? void 0 : d.fetchPolicy,
        query: a,
        renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
      });
      return c;
    }
    e.exports = a;
  },
  null,
);
