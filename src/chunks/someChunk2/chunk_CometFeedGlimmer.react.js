__d(
  'CometFeedGlimmer.react',
  ['CometFeedStoryGlimmer.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      return h.jsxs('div', {
        ref: b,
        children: [
          h.jsx('div', {
            className: 'suspended-feed',
            style: { display: 'none' },
          }),
          h.jsx(c('CometFeedStoryGlimmer.react'), {}),
          h.jsx(c('CometFeedStoryGlimmer.react'), {}),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
