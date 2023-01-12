__d(
  'CometPivotLinkPile.react',
  ['CometRow.react', 'CometRowItem.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        defaultWidth: { maxWidth: 'xthy2uy', $$css: !0 },
        fullWidth: { maxWidth: 'x193iq5w', $$css: !0 },
      };
    function a(a) {
      var b = a.align;
      b = b === void 0 ? 'center' : b;
      var d = a.children,
        e = a.isFullWidth,
        f = e === void 0 ? !1 : e;
      e = babelHelpers.objectWithoutPropertiesLoose(a, [
        'align',
        'children',
        'isFullWidth',
      ]);
      return h.jsx(
        c('CometRow.react'),
        babelHelpers['extends'](
          {},
          e,
          e.paddingVertical == null ? { paddingTop: 8 } : null,
          {
            align: b,
            spacing: 8,
            wrap: 'forward',
            children: h.Children.map(d, function (a) {
              return h.jsx(c('CometRowItem.react'), {
                xstyle: f ? i.fullWidth : i.defaultWidth,
                children: a,
              });
            }),
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
