__d(
  'createSuspenseQueryRenderer_DEPRECATED',
  [
    'react',
    'react-relay/ReactRelayContext',
    'react-relay/relay-hooks/useLazyLoadQueryNode',
    'react-relay/relay-hooks/useMemoOperationDescriptor',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      var b = d('relay-runtime').getRequest(a),
        e = 'RelaySuspenseQueryRenderer(' + b.params.name + ')';
      function g(b) {
        var f = b.UNSTABLE_renderPolicy,
          g = b.children,
          k = b.fetchKey,
          l = b.fetchPolicy;
        b = b.variables;
        var m = c('react-relay/relay-hooks/useRelayEnvironment')();
        b = c('react-relay/relay-hooks/useMemoOperationDescriptor')(a, b, {
          force: !0,
        });
        var n = i(
            function () {
              return j(m);
            },
            [m],
          ),
          o = c('react-relay/relay-hooks/useLazyLoadQueryNode')({
            componentDisplayName: e,
            fetchKey: k,
            fetchObservable: d('relay-runtime').__internal.fetchQuery(m, b),
            fetchPolicy: l,
            query: b,
            renderPolicy: f,
          });
        return h.jsx(c('react-relay/ReactRelayContext').Provider, {
          value: n,
          children: i(
            function () {
              return g(o);
            },
            [g, o],
          ),
        });
      }
      g.displayName = g.name + ' [from ' + f.id + ']';
      g.displayName = e;
      return g;
    }
    function j(a) {
      return { environment: a };
    }
    g['default'] = a;
  },
  98,
);
