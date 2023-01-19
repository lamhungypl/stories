__d(
  'CometCircleButton.react',
  ['CometIcon.react', 'CometPressable.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        pressableOverlayPressed: { backgroundColor: 'x1lxk4cn', $$css: !0 },
        pressed: { transform: 'x1n5d1j9', $$css: !0 },
        root: {
          alignItems: 'x6s0dn4',
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x1n2onr6',
          $$css: !0,
        },
      },
      j = {
        24: { height: 'xxk0z11', width: 'xvy4d1p', $$css: !0 },
        28: { height: 'x1fgtraw', width: 'xgd8bvy', $$css: !0 },
        32: { height: 'x10w6t97', width: 'x1td3qas', $$css: !0 },
        36: { height: 'xc9qbxq', width: 'x14qfxbe', $$css: !0 },
        40: { height: 'x1vqgdyp', width: 'x100vrsf', $$css: !0 },
        48: { height: 'xsdox4t', width: 'x1useyqa', $$css: !0 },
      },
      k = {
        'dark-overlay': {
          backgroundColor: 'x18l40ae',
          color: 'x14ctfv',
          $$css: !0,
        },
        deemphasized: { backgroundColor: 'xjbqb8w', $$css: !0 },
        'deemphasized-overlay': { backgroundColor: 'x1hr4nm9', $$css: !0 },
        normal: { backgroundColor: 'x1qhmfi1', $$css: !0 },
        overlay: {
          backgroundColor: 'x9bbmet',
          boxShadow: 'x10f5nwc',
          color: 'xi81zsa',
          $$css: !0,
        },
        'overlay-floating': {
          backgroundColor: 'x1l31dnx',
          boxShadow: 'x1qeybcx',
          $$css: !0,
        },
        'overlay-raised': {
          backgroundColor: 'x9bbmet',
          boxShadow: 'x1k54i6l',
          color: 'xi81zsa',
          $$css: !0,
        },
        'primary-background-overlay': { backgroundColor: 'xtvsq51', $$css: !0 },
      },
      l = {
        'dark-overlay': { backgroundColor: 'x18l40ae', $$css: !0 },
        deemphasized: { backgroundColor: 'xjbqb8w', $$css: !0 },
        'deemphasized-overlay': { backgroundColor: 'x1f2gare', $$css: !0 },
        normal: { backgroundColor: 'xwcfey6', $$css: !0 },
        overlay: {
          backgroundColor: 'x1ahlmzr',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          boxShadow: 'xxnfx33',
          color: 'x1dntmbh',
          $$css: !0,
        },
        'primary-background-overlay': { backgroundColor: 'xtvsq51', $$css: !0 },
      },
      m =
        ((b = {}),
        (b[24] = 12),
        (b[28] = 16),
        (b[32] = 16),
        (b[36] = 20),
        (b[40] = 20),
        (b[48] = 24),
        b),
      n =
        ((e = {}),
        (e[24] = 20),
        (e[28] = 20),
        (e[32] = 24),
        (e[36] = 28),
        (e[40] = 32),
        (e[48] = 32),
        e);
    function a(a, b) {
      var d = a['aria-hidden'],
        e = a['aria-pressed'],
        f = a.color,
        g = a.dataAttributes,
        p = a.disabled,
        q = p === void 0 ? !1 : p;
      p = a.focusable;
      var r = a.icon,
        s = a.iconRatio,
        t = a.label,
        u = a.linkProps,
        v = a.onFocusIn,
        w = a.onFocusOut,
        x = a.onHoverIn,
        y = a.onHoverOut,
        z = a.onPress,
        A = a.onPressIn,
        B = a.onPressOut,
        C = a.overlayHoveredStyle,
        D = a.size,
        E = a.testid;
      E = a.testOnly_pressed;
      a = a.type;
      var F = a === void 0 ? 'normal' : a;
      a =
        g != null
          ? Object.keys(g).reduce(function (a, b) {
              a != null && b != null && (a['data-' + b] = g[b]);
              return a;
            }, {})
          : null;
      t = h.jsx(c('CometPressable.react'), {
        'aria-hidden': d,
        'aria-label': t,
        'aria-pressed': e,
        disabled: q,
        display: 'inline',
        focusable: p,
        linkProps: u,
        onFocusIn: v,
        onFocusOut: w,
        onHoverIn: x,
        onHoverOut: y,
        onPress: z,
        onPressIn: A,
        onPressOut: B,
        overlayHoveredStyle: C,
        overlayPressedStyle: i.pressableOverlayPressed,
        overlayRadius: '50%',
        ref: b,
        testOnly_pressed: E,
        testid: void 0,
        xstyle: function (a) {
          a = a.pressed;
          return [
            i.root,
            j[D],
            k[F],
            q &&
              l[
                F === 'overlay-raised' || F === 'overlay-floating'
                  ? 'overlay'
                  : F
              ],
            a && i.pressed,
          ];
        },
        children: h.jsx(c('CometIcon.react'), {
          color: q ? 'disabled' : (d = f) != null ? d : o(F),
          icon: r,
          size: s === 'large' ? n[D] : m[D],
        }),
      });
      return a != null
        ? h.jsx('div', babelHelpers['extends']({}, a, { children: t }))
        : t;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function o(a) {
      switch (a) {
        case 'dark-overlay':
          return 'white';
        case 'deemphasized-overlay':
          return 'highlight';
        default:
          return 'primary';
      }
    }
    d = h.forwardRef(a);
    g['default'] = d;
  },
  98,
);
