__d(
  'StoriesCreateRoot.react',
  [
    'CometPlaceholder.react',
    'StoriesCreateContext',
    'StoriesCreateRootPlaceholder.react',
    'StoriesCreateUtils',
    'StoriesCreateViewStateContext',
    'StoriesCreateViewStateDispatcherContext',
    'StoriesCreateViewStateReducersContext',
    'deferredLoadComponent',
    'react',
    'requireDeferredForDisplay',
    'useRoutePassthroughProps',
    'useStoriesCreateViewStateAndRelayUpdater',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo,
      j = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')('StoriesCreate.react').__setRef(
          'StoriesCreateRoot.react',
        ),
      );
    function a(a) {
      a = a.queries;
      var e = b('useRoutePassthroughProps'),
        f = e(),
        g = d(
          'StoriesCreateUtils',
        ).StoriesCreateUtils.getStoriesBeginningViewState(
          f == null ? void 0 : f.media,
        );
      e = c('useStoriesCreateViewStateAndRelayUpdater')();
      var k = e[0],
        l = e[1];
      e = e[2];
      var m = i(
        function () {
          return f != null ? babelHelpers['extends']({}, k, g) : k;
        },
        [g, f, k],
      );
      return h.jsx(c('StoriesCreateViewStateReducersContext').Provider, {
        value: e,
        children: h.jsx(c('StoriesCreateViewStateContext').Provider, {
          value: m,
          children: h.jsx(
            c('StoriesCreateViewStateDispatcherContext').Provider,
            {
              value: l,
              children: h.jsx(c('StoriesCreateContext').Provider, {
                value: !0,
                children: h.jsx(c('CometPlaceholder.react'), {
                  fallback: h.jsx(c('StoriesCreateRootPlaceholder.react'), {}),
                  children: h.jsx(j, {
                    queryReference: a.storiesCreateQueryReference,
                  }),
                }),
              }),
            },
          ),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
