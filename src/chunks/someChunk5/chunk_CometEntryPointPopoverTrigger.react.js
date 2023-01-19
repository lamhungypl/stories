__d(
  'CometEntryPointPopoverTrigger.react',
  [
    'BasePopoverTrigger.react',
    'CometEntryPointPopoverContainer.react',
    'CometPopoverLoadingState.react',
    'CometRelay',
    'deepEquals',
    'react',
    'tracePolicyFromResource',
    'useCometPopoverInteractionTracing',
    'useCometRelayEntrypointContextualEnvironmentProvider',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useMemo,
      k = b.useRef;
    function a(a) {
      var b = a.doNotCloseOnOutsideClick,
        e = a.entryPointParams,
        f = a.fallback,
        g = a.onVisibilityChange,
        l = a.otherProps,
        m = a.popoverEntryPoint,
        n = a.preloadTrigger,
        o = a.tracePolicy;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'doNotCloseOnOutsideClick',
        'entryPointParams',
        'fallback',
        'onVisibilityChange',
        'otherProps',
        'popoverEntryPoint',
        'preloadTrigger',
        'tracePolicy',
      ]);
      o = c('useCometPopoverInteractionTracing')(
        (o = o) != null
          ? o
          : c('tracePolicyFromResource')('comet.popover', m.root),
        'entrypoint',
        n,
      );
      var p = c('useCometRelayEntrypointContextualEnvironmentProvider')();
      p = d('CometRelay').useEntryPointLoader(p, m);
      var q = p[0],
        r = p[1];
      p = p[2];
      var s = k(null),
        t = i(
          function () {
            if (e == null) return;
            if (q !== null && c('deepEquals')(s.current, e)) return;
            s.current = e;
            r(e);
          },
          [e, q, r],
        ),
        u = j(
          function () {
            return {
              entryPointParams: e,
              entryPointReference: q,
              load: t,
              otherProps: l,
            };
          },
          [e, q, t, l],
        ),
        v = i(
          function () {
            (arguments.length <= 0 ? void 0 : arguments[0]) && t(),
              g && g.apply(void 0, arguments);
          },
          [t, g],
        );
      return h.jsx(
        c('BasePopoverTrigger.react'),
        babelHelpers['extends'](
          {
            doNotCloseOnOutsideClick: b,
            fallback:
              (b = f) != null
                ? b
                : h.jsx(c('CometPopoverLoadingState.react'), { withArrow: !0 }),
            interactionTracker: o,
            onHighIntentPreload: t,
            onLayerDetached: p,
            onVisibilityChange: v,
            popover: c('CometEntryPointPopoverContainer.react'),
            popoverPreloadResource: m.root,
            popoverProps: u,
            preloadTrigger: n,
          },
          a,
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
