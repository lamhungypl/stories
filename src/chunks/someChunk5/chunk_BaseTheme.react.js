__d(
  'BaseTheme.react',
  ['BaseThemeProvider.react', 'BaseView.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var d = a.config,
        e = a.displayMode,
        f = a.style,
        g = a.xstyle,
        i = babelHelpers.objectWithoutPropertiesLoose(a, [
          'config',
          'displayMode',
          'style',
          'xstyle',
        ]);
      return h.jsx(c('BaseThemeProvider.react'), {
        config: d,
        displayMode: e,
        children: function (a, d) {
          return h.jsx(
            c('BaseView.react'),
            babelHelpers['extends']({}, i, {
              ref: b,
              style: babelHelpers['extends']({}, d, f),
              xstyle: [a, g],
            }),
          );
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
