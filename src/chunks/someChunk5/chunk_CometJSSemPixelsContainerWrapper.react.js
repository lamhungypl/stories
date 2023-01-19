__d(
  'CometJSSemPixelsContainerWrapper.react',
  [
    'CometDOMOnlyBoundary.react',
    'CometErrorBoundary.react',
    'CometHeroInteractionContextPassthrough.react',
    'CometPlaceholder.react',
    'deferredLoadComponent',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('deferredLoadComponent')(
        c('requireDeferred')('CometJSSemPixelsContainer.react').__setRef(
          'CometJSSemPixelsContainerWrapper.react',
        ),
      );
    function a() {
      return h.jsx(c('CometDOMOnlyBoundary.react'), {
        children: h.jsx(c('CometErrorBoundary.react'), {
          children: h.jsx(c('CometHeroInteractionContextPassthrough.react'), {
            clear: !0,
            children: h.jsx(c('CometPlaceholder.react'), {
              fallback: null,
              children: h.jsx(i, {}),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
