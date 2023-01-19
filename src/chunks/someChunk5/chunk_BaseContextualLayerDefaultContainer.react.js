__d(
  'BaseContextualLayerDefaultContainer.react',
  ['LegacyHidden', 'react', 'stylex', 'testID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      return h.jsx(c('LegacyHidden'), {
        htmlAttributes: babelHelpers['extends']({}, c('testID')(a.testid), {
          className: c('stylex')(a.xstyle),
        }),
        mode: a.hidden ? 'hidden' : 'visible',
        ref: b,
        children: a.children,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
