__d(
  'CometSettingsJewelButton.react',
  [
    'CometCircleButton.react',
    'CometPressableOverlay.react',
    'TetraIcon.react',
    'mergeRefs',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo,
      j = {
        iconDisabled: {
          alignItems: 'x6s0dn4',
          backgroundColor: 'x1hr4nm9',
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          display: 'x78zum5',
          height: 'x1vqgdyp',
          justifyContent: 'xl56j7k',
          width: 'x100vrsf',
          $$css: !0,
        },
        pressableOverlayPressed: { backgroundColor: 'x1iutvsz', $$css: !0 },
      },
      k = { color: 'primary', iconType: 'normal' },
      l = { color: 'highlight', iconType: 'deemphasized-overlay' };
    function a(a, b) {
      var d = a.disabled,
        e = a.isSelected,
        f = a.linkProps,
        g = a.loggingRef,
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          'disabled',
          'isSelected',
          'linkProps',
          'loggingRef',
        ]),
        n = i(
          function () {
            return c('mergeRefs')(b, g);
          },
          [b, g],
        );
      return d === !0
        ? h.jsxs('div', {
            className:
              'x6s0dn4 x1hr4nm9 x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x1vqgdyp xl56j7k x100vrsf',
            children: [
              h.jsx(c('TetraIcon.react'), {
                color: 'highlight',
                icon: a.icon,
                size: 20,
              }),
              h.jsx(c('CometPressableOverlay.react'), {
                pressedStyle: j.pressableOverlayPressed,
                radius: '50%',
              }),
            ],
          })
        : h.jsx(
            c('CometCircleButton.react'),
            babelHelpers['extends']({}, m, {
              color: e ? l.color : k.color,
              linkProps: f,
              ref: n,
              size: 40,
              type: e ? l.iconType : k.iconType,
            }),
          );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
