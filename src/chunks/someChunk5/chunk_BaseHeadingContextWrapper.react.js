__d(
  'BaseHeadingContextWrapper.react',
  ['BaseHeadingContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    function a(a) {
      a = a.children;
      var b = i(c('BaseHeadingContext'));
      return h.jsx(c('BaseHeadingContext').Provider, {
        value: b + 1,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
