__d(
  'TetraIcon.react',
  ['CometIcon.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      return h.jsx(
        c('CometIcon.react'),
        babelHelpers['extends']({}, a, { ref: b }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
