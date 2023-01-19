__d(
  'LazyCometProfileVideoSection.react',
  [
    'CometPlaceholder.react',
    'CometProfileVideoGlimmer.react',
    'JSResourceForInteraction',
    'lazyLoadComponent',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometProfileVideoSection.react',
        ).__setRef('LazyCometProfileVideoSection.react'),
      );
    function a(a) {
      return h.jsx(c('CometPlaceholder.react'), {
        fallback: h.jsx(c('CometProfileVideoGlimmer.react'), { size: a.size }),
        children: h.jsx(i, babelHelpers['extends']({}, a)),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
