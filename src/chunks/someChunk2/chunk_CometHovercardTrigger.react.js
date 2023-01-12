__d(
  'CometHovercardTrigger.react',
  [
    'BaseHovercardTriggerWrapper.react',
    'CometHovercardSettingsContext',
    'CometRelay',
    'CometSuppressHovercards',
    'react',
    'useBaseHovercardTrigger',
    'useCometRelayEntrypointContextualEnvironmentProvider',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useRef,
      l = {};
    function m(a) {
      var b = a.popoverEntryPoint,
        e = a.popoverOtherProps;
      e = e === void 0 ? l : e;
      var f = a.popoverProps;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'popoverEntryPoint',
        'popoverOtherProps',
        'popoverProps',
      ]);
      var g = c('useCometRelayEntrypointContextualEnvironmentProvider')();
      g = d('CometRelay').useEntryPointLoader(g, b);
      b = g[0];
      var j = g[1];
      g = i(
        function () {
          j(f);
        },
        [j, f],
      );
      a = c('useBaseHovercardTrigger')(
        babelHelpers['extends']({}, a, { onLoadEntryPoint: g }),
      );
      g = a[0];
      return g(
        h.jsx(h.Fragment, {
          children:
            b != null &&
            h.jsx(d('CometRelay').EntryPointContainer, {
              entryPointReference: b,
              props: e,
            }),
        }),
      );
    }
    m.displayName = m.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = j(c('CometHovercardSettingsContext'));
      b = b.hovercardInteractionPreference;
      b = d('CometSuppressHovercards').useIsHovercardSuppressed() || b === 1;
      var e = k(null);
      return b
        ? h.jsx(c('BaseHovercardTriggerWrapper.react'), {
            display: a.display,
            children: a.children(e),
          })
        : h.jsx(m, babelHelpers['extends']({}, a));
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
