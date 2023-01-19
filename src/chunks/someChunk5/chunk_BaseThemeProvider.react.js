__d(
  'BaseThemeProvider.react',
  [
    'BaseThemeConfigContext',
    'BaseThemeDisplayModeContext',
    'react',
    'useCurrentDisplayMode',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.config;
      a = a.displayMode;
      var e = i(c('BaseThemeConfigContext')),
        f = c('useCurrentDisplayMode')(),
        g = (a = a) != null ? a : f;
      a = j(
        function () {
          var a;
          d != null && d.type === 'CLASSNAMES'
            ? (a = g === 'dark' ? d.dark : d.light)
            : (a = g === 'dark' ? e.darkClassName : e.lightClassName);
          return { theme: a };
        },
        [d, e.darkClassName, e.lightClassName, g],
      );
      f = j(
        function () {
          if (d != null)
            if (d.type === 'VARIABLES')
              return babelHelpers['extends']({}, e, {
                darkVariables: babelHelpers['extends'](
                  {},
                  e.darkVariables,
                  d.dark,
                ),
                lightVariables: babelHelpers['extends'](
                  {},
                  e.lightVariables,
                  d.light,
                ),
              });
            else if (d.type === 'CLASSNAMES')
              return babelHelpers['extends']({}, e, {
                darkClassName: d.dark,
                lightClassName: d.light,
              });
          return e;
        },
        [d, e],
      );
      var l = k(g === 'dark' ? f.darkVariables : f.lightVariables);
      return h.jsx(c('BaseThemeConfigContext').Provider, {
        value: f,
        children: h.jsx(c('BaseThemeDisplayModeContext').Provider, {
          value: g,
          children: b(a, l),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function k(a) {
      var b = {};
      Object.keys(a).forEach(function (c) {
        b['--' + c] = a[c];
      });
      return b;
    }
    g['default'] = a;
  },
  98,
);
