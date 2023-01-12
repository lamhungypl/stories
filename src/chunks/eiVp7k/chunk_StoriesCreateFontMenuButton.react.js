__d(
  'StoriesCreateFontMenuButton.react',
  ['ix', 'CometPressable.react', 'TetraIcon.react', 'fbicon', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = {
        button: {
          alignItems: 'x6s0dn4',
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x178xt8z',
          borderEndWidth: 'xm81vs4',
          borderBottomWidth: 'xso031l',
          borderStartWidth: 'xy80clv',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          height: 'xnnlda6',
          justifyContent: 'x1nhvcw1',
          marginTop: 'x14vqqas',
          marginBottom: 'xod5an3',
          $$css: !0,
        },
        selectedFont: { position: 'x10l6tqk', start: 'x1x4e7r2', $$css: !0 },
        textIcon: { position: 'x10l6tqk', start: 'x16q8cke', $$css: !0 },
        triangleDownIcon: { end: 'x4p3wbt', position: 'x10l6tqk', $$css: !0 },
      };
    function a(a, b) {
      var e = a.label,
        f = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['label', 'xstyle']);
      return i.jsx(
        c('CometPressable.react'),
        babelHelpers['extends']({ hideFocusOverlay: !0 }, a, {
          ref: b,
          xstyle: [j.button, f],
          children: function () {
            return i.jsxs(i.Fragment, {
              children: [
                i.jsx('div', {
                  className: 'x10l6tqk x16q8cke',
                  children: i.jsx(c('TetraIcon.react'), {
                    color: 'secondary',
                    icon: d('fbicon')._(h('486061'), 16),
                  }),
                }),
                i.jsx('div', {
                  'aria-controls': 'StoriesCreateSATPFontMenu',
                  className: 'x10l6tqk x1x4e7r2',
                  children: e,
                }),
                i.jsx('div', {
                  className: 'x4p3wbt x10l6tqk',
                  children: i.jsx(c('TetraIcon.react'), {
                    color: 'primary',
                    icon: d('fbicon')._(h('481882'), 16),
                  }),
                }),
              ],
            });
          },
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = i.forwardRef(a);
    g['default'] = b;
  },
  98,
);
