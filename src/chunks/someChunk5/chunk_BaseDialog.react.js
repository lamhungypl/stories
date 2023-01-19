__d(
  'BaseDialog.react',
  [
    'BaseThemeProvider.react',
    'BaseView.react',
    'CometHideLayerOnEscape.react',
    'pointerEventDistance',
    'react',
    'stylex',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useRef,
      k = {
        anchor: {
          alignItems: 'x1cy8zhl',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          minHeight: 'x2lwn1j',
          minWidth: 'xeuugli',
          pointerEvents: 'x47corl',
          $$css: !0,
        },
        dialog: {
          boxSizing: 'x1afcbsf',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          outline: 'x1a2a7pz',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          pointerEvents: 'x71s49j',
          $$css: !0,
        },
        root: {
          alignItems: 'x1qjc9v5',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          justifyContent: 'xl56j7k',
          $$css: !0,
        },
        rootWithDeprecatedStyles: {
          flexGrow: 'x1c4vz4f',
          minHeight: 'xg6iff7',
          $$css: !0,
        },
      };
    function a(a, b) {
      var e = a.anchorXStyle,
        f = a.children,
        g = a.disableClosingWithMask,
        l = g === void 0 ? !1 : g,
        m = a.onClose,
        n = a.rootXStyle;
      g = a.testid;
      g = a.themeConfig;
      var o = a.withDeprecatedStyles,
        p = o === void 0 ? !1 : o,
        q = a.xstyle,
        r = babelHelpers.objectWithoutPropertiesLoose(a, [
          'anchorXStyle',
          'children',
          'disableClosingWithMask',
          'onClose',
          'rootXStyle',
          'testid',
          'themeConfig',
          'withDeprecatedStyles',
          'xstyle',
        ]),
        s = j(null),
        t = j(null),
        u = j(null);
      i(
        function () {
          var a = s.current,
            b = t.current;
          if (a == null || b == null || l) return;
          function c(c) {
            return c instanceof Node && !b.contains(c) && a.contains(c);
          }
          var e = 'PointerEvent' in window;
          if (!e) {
            var f = function (a) {
              c(a.target) && m();
            };
            a.addEventListener('click', f);
            return function () {
              a.removeEventListener('click', f);
            };
          }
          var g = !1;
          function h(a) {
            if (a.isPrimary) {
              var b = c(a.target);
              g = b;
              u.current = a;
            }
          }
          function i(a) {
            var b = c(a.target);
            if (g && b && u.current != null && a.isPrimary) {
              b = d('pointerEventDistance').isWithinThreshold(u.current, a);
              b && m();
            }
            g = !1;
            u.current = null;
          }
          a.addEventListener('pointerup', i);
          a.addEventListener('pointerdown', h);
          return function () {
            a.removeEventListener('pointerup', i),
              a.removeEventListener('pointerdown', h);
          };
        },
        [l, m],
      );
      var v = c('useMergeRefs')(t, b);
      return h.jsx(c('CometHideLayerOnEscape.react'), {
        onHide: m,
        children: h.jsx(c('BaseThemeProvider.react'), {
          config: g,
          children: function (a, b) {
            return h.jsx('div', {
              className: c('stylex')([
                a,
                k.root,
                p && k.rootWithDeprecatedStyles,
                n,
              ]),
              ref: s,
              style: b,
              children: h.jsx('div', {
                className: c('stylex')(k.anchor, e),
                children: h.jsx(
                  c('BaseView.react'),
                  babelHelpers['extends']({}, r, {
                    ref: v,
                    role: 'dialog',
                    testid: void 0,
                    xstyle: [k.dialog, q],
                    children: f,
                  }),
                ),
              }),
            });
          },
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
