__d(
  'react-relay/relay-hooks/usePreloadedQuery',
  [
    'invariant',
    'react',
    'react-relay/relay-hooks/loadQuery',
    'react-relay/relay-hooks/useLazyLoadQueryNode',
    'react-relay/relay-hooks/useMemoOperationDescriptor',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b('react-relay/relay-hooks/loadQuery').useTrackLoadQueryInRender;
    c = h || (h = b('react'));
    d = c.useDebugValue;
    f = b('relay-runtime').__internal;
    var j = f.fetchQueryDeduped,
      k = f.fetchQuery;
    function a(a, c, d) {
      i();
      var e = b('react-relay/relay-hooks/useRelayEnvironment')(),
        f = c.fetchKey,
        h = c.fetchPolicy,
        l = c.source,
        m = c.variables,
        n = c.networkCacheConfig,
        o = b('react-relay/relay-hooks/useMemoOperationDescriptor')(a, m, n);
      if (c.kind === 'PreloadedQuery_DEPRECATED')
        o.request.node.params.name === c.name ||
          g(0, 15566, o.request.node.params.name, c.name),
          (a = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchKey: f,
            fetchObservable: j(e, o.request.identifier, function () {
              if (e === c.environment && l != null)
                return e.executeWithSource({ operation: o, source: l });
              else return e.execute({ operation: o });
            }),
            fetchPolicy: h,
            query: o,
            renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
          });
      else {
        b('warning')(
          c.isDisposed === !1,
          'usePreloadedQuery(): Expected preloadedQuery to not be disposed yet. This is because disposing the query marks it for future garbage collection, and as such query results may no longer be present in the Relay store. In the future, this will become a hard error.',
        );
        m = k(e, o);
        l != null && e === c.environment
          ? (n = l.ifEmpty(m))
          : e !== c.environment
          ? (b('warning')(
              !1,
              'usePreloadedQuery(): usePreloadedQuery was passed a preloaded query that was created with a different environment than the one that is currently in context. In the future, this will become a hard error.',
            ),
            (n = m))
          : (n = m);
        a = {
          componentDisplayName: 'usePreloadedQuery()',
          fetchObservable: n,
          fetchKey: f,
          fetchPolicy: h,
          query: o,
          renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
        };
      }
      m = b('react-relay/relay-hooks/useLazyLoadQueryNode')(a);
      return m;
    }
    e.exports = a;
  },
  null,
);
