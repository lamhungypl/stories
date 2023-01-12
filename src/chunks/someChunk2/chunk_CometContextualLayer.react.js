__d(
  'CometContextualLayer.react',
  [
    'BaseContextualLayer.react',
    'react',
    'useCometVisualChangeTracker',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var d = c('useCometVisualChangeTracker')();
      b = c('useMergeRefs')(b, d);
      return h.jsx(
        c('BaseContextualLayer.react'),
        babelHelpers['extends']({}, a, { ref: b }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
