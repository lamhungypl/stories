__d(
  'BaseStyledButton.react',
  [
    'BaseRow.react',
    'BaseRowItem.react',
    'CometPressable.react',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useRef,
      j = 0.96,
      k = 10,
      l = {
        button: {
          boxSizing: 'x9f619',
          display: 'x3nfvp2',
          flexDirection: 'xdt5ytf',
          justifyContent: 'xl56j7k',
          position: 'x1n2onr6',
          width: 'xh8yej3',
          $$css: !0,
        },
        content: {
          borderTopStartRadius: 'xi112ho',
          borderTopEndRadius: 'x17zwfj4',
          borderBottomEndRadius: 'x585lrc',
          borderBottomStartRadius: 'x1403ito',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          boxSizing: 'x9f619',
          paddingEnd: 'xn6708d',
          paddingStart: 'x1ye3gou',
          $$css: !0,
        },
        disabled: { backgroundColor: 'xwcfey6', $$css: !0 },
        item: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          flexShrink: 'x2lah0s',
          marginEnd: 'x1fbi1t2',
          marginStart: 'xl8fo4v',
          $$css: !0,
        },
        offset: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          marginEnd: 'x1608yet',
          marginStart: 'xljgi0e',
          width: 'x1e0frkt',
          $$css: !0,
        },
        paddingWide: {
          paddingEnd: 'xbxaen2',
          paddingStart: 'x1u72gb5',
          $$css: !0,
        },
        sizeLargeItem: {
          marginEnd: 'x185m5pd',
          marginStart: 'xmly5ks',
          $$css: !0,
        },
        sizeLargeOffset: {
          marginEnd: 'x3fpzix',
          marginStart: 'xxdpisx',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.addOnAbsolute,
        e = a.addOnEnd,
        f = a.addOnStart,
        g = a.content,
        m = a.contentXstyle,
        n = a.disabled,
        o = n === void 0 ? !1 : n;
      n = a.display;
      n = n === void 0 ? 'inline' : n;
      var p = a.focusable,
        q = a.icon,
        r = a.id,
        s = a.linkProps,
        t = a.onFocusIn,
        u = a.onFocusOut,
        v = a.onHoverIn,
        w = a.onHoverOut,
        x = a.onPress,
        y = a.onPressIn,
        z = a.onPressOut,
        A = a.overlayHoveredStyle,
        B = a.overlayPressedStyle,
        C = a.padding,
        D = C === void 0 ? 'normal' : C;
      C = a.size;
      var E = C === void 0 ? 'medium' : C;
      C = a.suppressHydrationWarning;
      C = C === void 0 ? !1 : C;
      var F = a.testid;
      F = a.testOnly_pressed;
      F = F === void 0 ? !1 : F;
      var G = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'addOnAbsolute',
        'addOnEnd',
        'addOnStart',
        'content',
        'contentXstyle',
        'disabled',
        'display',
        'focusable',
        'icon',
        'id',
        'linkProps',
        'onFocusIn',
        'onFocusOut',
        'onHoverIn',
        'onHoverOut',
        'onPress',
        'onPressIn',
        'onPressOut',
        'overlayHoveredStyle',
        'overlayPressedStyle',
        'padding',
        'size',
        'suppressHydrationWarning',
        'testid',
        'testOnly_pressed',
        'xstyle',
      ]);
      var H = i(null),
        I = function (a) {
          if (H.current != null) {
            var b = H.current;
            b.style.transform =
              'scale(' + Math.max(j, (b.offsetWidth - k) / b.offsetWidth) + ')';
          }
          typeof y === 'function' && y(a);
        },
        J = function (a) {
          if (H.current != null) {
            var b = H.current;
            b.style.transform = 'none';
          }
          typeof z === 'function' && z(a);
        };
      G = c('stylex').compose(G);
      var K = G.alignSelf,
        L = G.flexBasis,
        M = G.flexGrow,
        N = G.flexShrink,
        O = G.height,
        P = G.justifySelf,
        Q = G.margin,
        R = G.marginBottom,
        S = G.marginEnd,
        T = G.marginStart,
        U = G.marginTop,
        V = G.maxHeight,
        W = G.maxWidth,
        X = G.minHeight,
        Y = G.minWidth,
        Z = G.position,
        aa = G.width,
        ba = babelHelpers.objectWithoutPropertiesLoose(G, [
          'alignSelf',
          'flexBasis',
          'flexGrow',
          'flexShrink',
          'height',
          'justifySelf',
          'margin',
          'marginBottom',
          'marginEnd',
          'marginStart',
          'marginTop',
          'maxHeight',
          'maxWidth',
          'minHeight',
          'minWidth',
          'position',
          'width',
        ]),
        $ = [l.item, E === 'large' && l.sizeLargeItem];
      G = function (a) {
        a = a.overlay;
        return h.jsxs(c('BaseRow.react'), {
          align: 'center',
          ref: H,
          verticalAlign: 'center',
          xstyle: [
            l.content,
            D === 'wide' && l.paddingWide,
            o && l.disabled,
            ba,
            m,
          ],
          children: [
            h.jsxs('div', {
              className: c('stylex')([
                l.offset,
                E === 'large' && l.sizeLargeOffset,
              ]),
              children: [
                f != null
                  ? h.jsx(c('BaseRowItem.react'), {
                      useDeprecatedStyles: !0,
                      xstyle: $,
                      children: f,
                    })
                  : q != null
                  ? h.jsx(c('BaseRowItem.react'), {
                      useDeprecatedStyles: !0,
                      xstyle: $,
                      children: q,
                    })
                  : null,
                g != null
                  ? h.jsx(c('BaseRowItem.react'), {
                      useDeprecatedStyles: !0,
                      xstyle: $,
                      children: g,
                    })
                  : null,
                e != null
                  ? h.jsx(c('BaseRowItem.react'), {
                      useDeprecatedStyles: !0,
                      xstyle: $,
                      children: e,
                    })
                  : null,
              ],
            }),
            a,
            d != null ? d : null,
          ],
        });
      };
      return h.jsx(
        c('CometPressable.react'),
        babelHelpers['extends']({}, a, {
          disabled: o,
          display: n,
          focusable: p,
          id: r,
          linkProps: s,
          onFocusIn: t,
          onFocusOut: u,
          onHoverIn: v,
          onHoverOut: w,
          onPress: x,
          onPressIn: I,
          onPressOut: J,
          overlayHoveredStyle: A,
          overlayPressedStyle: B,
          ref: b,
          suppressHydrationWarning: C,
          testOnly_pressed: F,
          testid: void 0,
          xstyle: [
            l.button,
            {
              alignSelf: K,
              flexBasis: L,
              flexGrow: M,
              flexShrink: N,
              height: O,
              justifySelf: P,
              margin: Q,
              marginBottom: R,
              marginEnd: S,
              marginStart: T,
              marginTop: U,
              maxHeight: V,
              maxWidth: W,
              minHeight: X,
              minWidth: Y,
              position: Z,
              width: aa,
            },
          ],
          children: G,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
