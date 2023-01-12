__d(
  'StoriesCreateTextOverlayEntrypointContainer.react',
  [
    'CometPlaceholder.react',
    'StoriesCreateTextOverlaysRoot.entrypoint',
    'react',
    'react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react',
    'useCometRelayEntrypointContextualEnvironmentProvider',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {};
    function a(a) {
      a = a.textOverlays;
      var b = c('useCometRelayEntrypointContextualEnvironmentProvider')();
      a = a != null && a.overlays.length > 0;
      if (a !== !0) return null;
      return a
        ? h.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: h.jsx(
              c(
                'react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react',
              ),
              {
                entryPoint: c('StoriesCreateTextOverlaysRoot.entrypoint'),
                entryPointParams: i,
                environmentProvider: b,
                props: i,
              },
            ),
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
