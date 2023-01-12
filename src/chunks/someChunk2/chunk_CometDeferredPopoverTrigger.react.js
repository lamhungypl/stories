__d(
  'CometDeferredPopoverTrigger.react',
  [
    'BasePopoverTrigger.react',
    'CometPopoverLoadingState.react',
    'deferredLoadComponent',
    'react',
    'tracePolicyFromResource',
    'useCometPopoverInteractionTracing',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.doNotCloseOnOutsideClick,
        d = a.fallback,
        e = a.popoverProps,
        f = a.popoverResource,
        g = a.preloadTrigger,
        i = a.tracePolicy;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'doNotCloseOnOutsideClick',
        'fallback',
        'popoverProps',
        'popoverResource',
        'preloadTrigger',
        'tracePolicy',
      ]);
      var j = c('deferredLoadComponent')(f);
      i = c('useCometPopoverInteractionTracing')(
        (i = i) != null ? i : c('tracePolicyFromResource')('comet.popover', f),
        'deferred',
        g,
      );
      return h.jsx(
        c('BasePopoverTrigger.react'),
        babelHelpers['extends'](
          {
            doNotCloseOnOutsideClick: b,
            fallback:
              (b = d) != null
                ? b
                : h.jsx(c('CometPopoverLoadingState.react'), { withArrow: !0 }),
            interactionTracker: i,
            popover: j,
            popoverPreloadResource: f,
            popoverProps: babelHelpers['extends']({}, e, {
              loadImmediately: !0,
            }),
            preloadTrigger: g,
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
