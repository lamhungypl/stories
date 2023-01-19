__d(
  'CometAppNavigationTabBarContentWrapper.react',
  [
    'CometAppNavigationLayout.react',
    'CometErrorBoundary.react',
    'CometTopNav.react',
    'JSResource',
    'gkx',
    'lazyLoadComponent',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('lazyLoadComponent')(
        c('JSResource')(
          'CometAppNavigationFallbackTabBarContent.react',
        ).__setRef('CometAppNavigationTabBarContentWrapper.react'),
      );
    function a(a) {
      var b = a.children;
      a = a.inert;
      return h.jsx(c('CometAppNavigationLayout.react'), {
        inert: a,
        children: h.jsx(c('CometTopNav.react'), {
          children: c('gkx')('2204')
            ? h.jsx(c('CometErrorBoundary.react'), {
                fallback: function () {
                  return h.jsx(i, {});
                },
                children: b,
              })
            : b,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
