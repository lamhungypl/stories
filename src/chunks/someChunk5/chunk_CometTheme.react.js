__d(
  'CometTheme.react',
  ['BaseTheme.react', 'CometStyleXSheet', 'react', 'useCurrentDisplayMode'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo,
      j = {
        root: {
          boxSizing: 'x1afcbsf',
          position: 'x1uhb9sk',
          zIndex: 'x1swf91x',
          $$css: !0,
        },
      },
      k = {
        dark: d('CometStyleXSheet').DARK_MODE_CLASS_NAME,
        light: d('CometStyleXSheet').LIGHT_MODE_CLASS_NAME,
        type: 'CLASSNAMES',
      };
    function a(a) {
      var b = a.theme,
        d = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['theme', 'xstyle']);
      var e = c('useCurrentDisplayMode')(),
        f = i(
          function () {
            return b === 'invert' ? (e === 'dark' ? 'light' : 'dark') : b;
          },
          [e, b],
        );
      return h.jsx(
        c('BaseTheme.react'),
        babelHelpers['extends'](
          { config: k, displayMode: f, xstyle: [j.root, d] },
          a,
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
