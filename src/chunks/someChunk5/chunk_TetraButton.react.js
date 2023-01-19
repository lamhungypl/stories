__d(
  'TetraButton.react',
  [
    'BaseStyledButton.react',
    'CometGHLRenderingContext',
    'CometIcon.react',
    'CometTooltip.react',
    'TetraText.react',
    'isBlueprintStylesEnabled',
    'mergeRefs',
    'react',
    'useCometTheme',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useRef,
      k = {
        contentDisabled: { opacity: 'xuzhngd', $$css: !0 },
        darkOverlay: {
          backgroundColor: 'x18l40ae',
          color: 'x14ctfv',
          $$css: !0,
        },
        darkOverlayPressed: { backgroundColor: 'x1lxk4cn', $$css: !0 },
        disabled: { backgroundColor: 'xwcfey6', $$css: !0 },
        fdsOverrideBlack: { backgroundColor: 'xal61yo', $$css: !0 },
        fdsOverrideCollaborativePostCTA: {
          backgroundColor: 'x14hiurz',
          mixBlendMode: 'x1nor908',
          $$css: !0,
        },
        fdsOverrideNegative: { backgroundColor: 'x1ciooss', $$css: !0 },
        fdsOverridePositive: { backgroundColor: 'xv9rvxn', $$css: !0 },
        overlay: { backgroundColor: 'x14hiurz', $$css: !0 },
        overlayDeemphasized: { backgroundColor: 'x1f2gare', $$css: !0 },
        overlayDeemphasizedOverlayPressed: {
          backgroundColor: 'x1f2gare',
          $$css: !0,
        },
        overlayDisabled: { backgroundColor: 'x1ahlmzr', $$css: !0 },
        overlayOverlayPressed: { backgroundColor: 'xiwuv7k', $$css: !0 },
        paddingIconOnly: {
          paddingEnd: 'x1pi30zi',
          paddingStart: 'x1swvt13',
          $$css: !0,
        },
        primary: { backgroundColor: 'xtvsq51', $$css: !0 },
        primaryDeemphasized: { backgroundColor: 'x1hr4nm9', $$css: !0 },
        primaryDeemphasizedOverlayPressed: {
          backgroundColor: 'x18z898i',
          $$css: !0,
        },
        primaryOverlayPressed: { backgroundColor: 'x1iutvsz', $$css: !0 },
        secondary: { backgroundColor: 'x1qhmfi1', $$css: !0 },
        secondaryDeemphasized: { backgroundColor: 'xjbqb8w', $$css: !0 },
        secondaryDeemphasizedOverlayPressed: {
          backgroundColor: 'x18z898i',
          $$css: !0,
        },
        secondaryOverlayPressed: { backgroundColor: 'x1iutvsz', $$css: !0 },
        sizeLarge: { height: 'x1fq8qgq', $$css: !0 },
        sizeMedium: { height: 'x1r1pt67', $$css: !0 },
      },
      l = {
        sizeLarge: {
          borderTopStartRadius: 'x4dbc',
          borderTopEndRadius: 'x1y9341w',
          borderBottomEndRadius: 'x197fjye',
          borderBottomStartRadius: 'xjufhxy',
          height: 'x1whk3tm',
          $$css: !0,
        },
        sizeMedium: {
          borderTopStartRadius: 'xeqyu0i',
          borderTopEndRadius: 'x1grejt4',
          borderBottomEndRadius: 'x1xrrxpe',
          borderBottomStartRadius: 'x17se2pc',
          height: 'xfumdyt',
          $$css: !0,
        },
      },
      m = {
        ':deemphasized': {
          iconColor: 'highlight',
          overlayPressedStyle: k.primaryDeemphasizedOverlayPressed,
          textColor: 'highlight',
        },
        ':disabled': { iconColor: 'disabled', textColor: 'disabled' },
        iconColor: 'white',
        overlayPressedStyle: k.primaryOverlayPressed,
        textColor: 'white',
      },
      n = {
        ':deemphasized': {
          iconColor: 'highlight',
          overlayPressedStyle: k.secondaryDeemphasizedOverlayPressed,
          textColor: 'highlight',
        },
        ':disabled': { iconColor: 'disabled', textColor: 'disabled' },
        iconColor: 'primary',
        overlayPressedStyle: k.secondaryOverlayPressed,
        textColor: 'secondary',
      },
      o = {
        ':deemphasized': {
          iconColor: 'white',
          overlayPressedStyle: k.overlayDeemphasizedOverlayPressed,
          textColor: 'white',
        },
        ':disabled': { iconColor: 'disabled', textColor: 'disabled' },
        iconColor: 'primary',
        overlayPressedStyle: k.overlayOverlayPressed,
        textColor: 'primary',
      },
      p = {
        ':deemphasized': {
          iconColor: 'white',
          overlayPressedStyle: k.overlayDeemphasizedOverlayPressed,
          textColor: 'white',
        },
        ':disabled': { iconColor: 'disabled', textColor: 'disabled' },
        iconColor: 'white',
        overlayPressedStyle: k.darkOverlayPressed,
        textColor: 'white',
      };
    function q(a) {
      switch (a) {
        case 'fdsOverride_collaborativePostCTA':
        case 'secondary':
          return n;
        case 'overlay':
          return o;
        case 'dark-overlay':
          return p;
        case 'primary':
        default:
          return m;
      }
    }
    function r(a, b) {
      var c = b.disabled;
      b = b.reduceEmphasis;
      a = q(a);
      return (
        (c ? a[':disabled'] : null) || (b ? a[':deemphasized'] : null) || a
      );
    }
    function a(a, b) {
      var d,
        e = a.addOnPrimary,
        f = a.addOnSecondary,
        g = a.disabled;
      g = g === void 0 ? !1 : g;
      var m = a.icon,
        n = a.label,
        o = a.labelIsHidden;
      o = o === void 0 ? !1 : o;
      var p = a.linkProps,
        q = a.onFocusIn,
        s = a.onFocusOut,
        t = a.onHoverIn,
        u = a.onHoverOut,
        v = a.onPress,
        w = a.onPressIn,
        x = a.onPressOut,
        y = a.padding;
      y = y === void 0 ? 'normal' : y;
      var z = a.reduceEmphasis;
      z = z === void 0 ? !1 : z;
      var A = a.size;
      A = A === void 0 ? 'medium' : A;
      var B = a.suppressHydrationWarning;
      B = B === void 0 ? !1 : B;
      var C = a.testid;
      C = a.testOnly_pressed;
      C = C === void 0 ? !1 : C;
      var D = a.tooltip,
        E = a.tooltipPosition;
      E = E === void 0 ? 'above' : E;
      var F = a.type;
      F = F === void 0 ? 'primary' : F;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'addOnPrimary',
        'addOnSecondary',
        'disabled',
        'icon',
        'label',
        'labelIsHidden',
        'linkProps',
        'onFocusIn',
        'onFocusOut',
        'onHoverIn',
        'onHoverOut',
        'onPress',
        'onPressIn',
        'onPressOut',
        'padding',
        'reduceEmphasis',
        'size',
        'suppressHydrationWarning',
        'testid',
        'testOnly_pressed',
        'tooltip',
        'tooltipPosition',
        'type',
      ]);
      var G = r(F, { disabled: g, reduceEmphasis: z }),
        H = G.iconColor,
        I = G.overlayPressedStyle;
      G = G.textColor;
      var J = j(null),
        K = c('useCometTheme')('light'),
        L = K[0];
      K = K[1];
      var M = i(c('CometGHLRenderingContext'));
      M = p != null && M;
      d = (d = a['aria-label']) != null ? d : n;
      M = M ? void 0 : d;
      d = h.jsx(
        c('BaseStyledButton.react'),
        babelHelpers['extends']({}, a, {
          addOnEnd: f,
          addOnStart: e,
          'aria-label': M,
          content: o
            ? null
            : h.jsx(c('TetraText.react'), {
                color: G,
                numberOfLines: 1,
                type: A === 'large' ? 'button1' : 'button2',
                children: n,
              }),
          contentXstyle: [
            F === 'overlay' && g && k.contentDisabled,
            F === 'overlay' && K,
            A === 'medium' &&
              (c('isBlueprintStylesEnabled')() ? l.sizeMedium : k.sizeMedium),
            A === 'large' &&
              (c('isBlueprintStylesEnabled')() ? l.sizeLarge : k.sizeLarge),
            m != null && o && k.paddingIconOnly,
          ],
          disabled: g,
          icon:
            m && h.jsx(c('CometIcon.react'), { color: H, icon: m, size: 16 }),
          linkProps: p,
          onFocusIn: q,
          onFocusOut: s,
          onHoverIn: t,
          onHoverOut: u,
          onPress: v,
          onPressIn: w,
          onPressOut: x,
          overlayPressedStyle: I,
          padding: y,
          ref: c('mergeRefs')(J, b),
          suppressHydrationWarning: B,
          testOnly_pressed: C,
          testid: void 0,
          xstyle: [
            F === 'primary' && k.primary,
            F === 'primary' && z && k.primaryDeemphasized,
            F === 'secondary' && k.secondary,
            F === 'secondary' && z && k.secondaryDeemphasized,
            F === 'fdsOverride_black' && k.fdsOverrideBlack,
            F === 'fdsOverride_negative' && k.fdsOverrideNegative,
            F === 'fdsOverride_positive' && k.fdsOverridePositive,
            F === 'fdsOverride_collaborativePostCTA' &&
              k.fdsOverrideCollaborativePostCTA,
            F === 'overlay' && k.overlay,
            F === 'overlay' && z && k.overlayDeemphasized,
            g && k.disabled,
            F === 'overlay' && g && k.overlayDisabled,
            F === 'dark-overlay' && k.darkOverlay,
          ],
        }),
      );
      a = F === 'overlay' ? h.jsx(L, { children: d }) : d;
      return D != null
        ? h.jsx(c('CometTooltip.react'), {
            position: E,
            tooltip: D,
            children: a,
          })
        : a;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
