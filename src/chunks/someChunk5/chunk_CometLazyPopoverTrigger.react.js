__d(
  'CometLazyPopoverTrigger.react',
  [
    'BasePopoverTrigger.react',
    'CometPopoverLoadingState.react',
    'lazyLoadComponent',
    'react',
    'tracePolicyFromResource',
    'useCometPopoverInteractionTracing',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      var b = a.fallback,
        d = a.popoverResource,
        e = a.preloadTrigger,
        f = a.tracePolicy;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'fallback',
        'popoverResource',
        'preloadTrigger',
        'tracePolicy',
      ]);
      var g = i(
        function () {
          return c('lazyLoadComponent')(d);
        },
        [d],
      );
      f = c('useCometPopoverInteractionTracing')(
        (f = f) != null ? f : c('tracePolicyFromResource')('comet.popover', d),
        'lazy',
        e,
      );
      return h.jsx(
        c('BasePopoverTrigger.react'),
        babelHelpers['extends'](
          {
            fallback:
              (b = b) != null
                ? b
                : h.jsx(c('CometPopoverLoadingState.react'), { withArrow: !0 }),
            interactionTracker: f,
            popover: g,
            popoverPreloadResource: d,
            preloadTrigger: e,
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
