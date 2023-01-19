__d(
  'react-relay/relay-hooks/EntryPointContainer.react',
  [
    'react',
    'react-relay/relay-hooks/ProfilerContext',
    'react-relay/relay-hooks/useRelayEnvironment',
    'warning',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = g || (g = b('react'));
    c = g;
    var i = c.useContext,
      j = c.useEffect;
    function a(a) {
      var c = a.entryPointReference;
      a = a.props;
      b('warning')(
        c.isDisposed === !1,
        '<EntryPointContainer>: Expected entryPointReference to not be disposed yet. This is because disposing the entrypoint marks it for future garbage collection, and as such may no longer be present in the Relay store. In the future, this will become a hard error.',
      );
      var d = c.getComponent,
        e = c.queries,
        f = c.entryPoints,
        g = c.extraProps,
        k = c.rootModuleID;
      c = d();
      var l = i(b('react-relay/relay-hooks/ProfilerContext')),
        m = b('react-relay/relay-hooks/useRelayEnvironment')();
      j(
        function () {
          m.__log({
            name: 'entrypoint.root.consume',
            profilerContext: l,
            rootModuleID: k,
          });
        },
        [m, l, k],
      );
      return h.jsx(c, { entryPoints: f, extraProps: g, props: a, queries: e });
    }
    a.displayName = a.name + ' [from ' + e.id + ']';
    e.exports = a;
  },
  null,
);
