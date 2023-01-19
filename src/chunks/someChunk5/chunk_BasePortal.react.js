__d(
  'BasePortal.react',
  [
    'BaseDOMContainer.react',
    'BasePortalTargetContext',
    'BaseThemeProvider.react',
    'CometSSRClientRender',
    'CometSSRReactFizzEnvironment',
    'ExecutionEnvironment',
    'Promise',
    'ReactDOMComet',
    'react',
    'stylex',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    function a(a) {
      var e = a.children,
        f = a.hidden,
        g = f === void 0 ? !1 : f;
      f = a.target;
      var j = a.xstyle;
      a = i(c('BasePortalTargetContext'));
      f = f || a;
      var k = c('useStable')(function () {
        return c('ExecutionEnvironment').canUseDOM
          ? document.createElement('div')
          : null;
      });
      if (!c('ExecutionEnvironment').canUseDOM)
        if (d('CometSSRReactFizzEnvironment').isReactFizzEnvironment())
          throw d('CometSSRClientRender').CometSSRClientRender(
            'BasePortal: Portals are not currently supported by the server renderer.',
          );
        else throw b('Promise').reject();
      return f != null
        ? d('ReactDOMComet').createPortal(
            h.jsx(c('BaseThemeProvider.react'), {
              children: function (a, b) {
                return h.jsxs(
                  'div',
                  babelHelpers['extends']({}, g && { hidden: !0 }, {
                    className: c('stylex')(a, j) || void 0,
                    style: b,
                    children: [
                      h.jsx(c('BasePortalTargetContext').Provider, {
                        value: k,
                        children: e,
                      }),
                      h.jsx(c('BaseDOMContainer.react'), { node: k }),
                    ],
                  }),
                );
              },
            }),
            f,
          )
        : null;
    }
    g['default'] = a;
  },
  98,
);
