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
    let h = d('react');
    let useMemo = d('react').useMemo;
    let j = c('deferredLoadComponent')(
      c('requireDeferredForDisplay')('StoriesCreate.react').__setRef(
        'StoriesCreateRoot.react',
      ),
    );
    function Component(a) {
      let a = a.queries;

      let e = b('useRoutePassthroughProps'),
        f = e(),
        g = d(
          'StoriesCreateUtils',
        ).StoriesCreateUtils.getStoriesBeginningViewState(
          f == null ? void 0 : f.media,
        );

      let e = c('useStoriesCreateViewStateAndRelayUpdater')();

      let k = e[0];
      let l = e[1];
      let e = e[2];

      let m = useMemo(
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
    Component.displayName = Component.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
