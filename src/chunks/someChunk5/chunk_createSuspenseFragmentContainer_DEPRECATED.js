__d(
  'createSuspenseFragmentContainer_DEPRECATED',
  [
    'mapObject',
    'react',
    'react-relay/assertFragmentMap',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
    'useFragmentNodes_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a, b) {
      var e = a.displayName || a.name || 'Unknown',
        f = 'RelaySuspenseFragmentContainer(' + e + ')';
      c('react-relay/assertFragmentMap')(e, b);
      e = b;
      var g = c('mapObject')(e, d('relay-runtime').getFragment);
      function j(b, d) {
        var e = c('react-relay/relay-hooks/useRelayEnvironment')(),
          j = i(
            function () {
              return { environment: e };
            },
            [e],
          ),
          k = c('useFragmentNodes_DEPRECATED')(g, b, f),
          l = k.data;
        k = k.shouldUpdateGeneration;
        return i(
          function () {
            var c;
            return h.jsx(
              a,
              babelHelpers['extends']({}, b, l, {
                ref: (c = b.componentRef) != null ? c : d,
                relay: j,
              }),
            );
          },
          [k, d],
        );
      }
      j.displayName = f;
      b = h.forwardRef(j);
      return b;
    }
    g['default'] = a;
  },
  98,
);
