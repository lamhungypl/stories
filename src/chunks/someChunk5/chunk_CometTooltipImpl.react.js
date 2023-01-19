__d(
  'CometTooltipImpl.react',
  [
    'CometPlaceholder.react',
    'deferredLoadComponent',
    'react',
    'requireDeferredForDisplay',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')(
          'CometTooltipDeferredImpl.react',
        ).__setRef('CometTooltipImpl.react'),
      );
    function a(a) {
      return h.jsx(c('CometPlaceholder.react'), {
        fallback: null,
        children: h.jsx(i, babelHelpers['extends']({}, a)),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
