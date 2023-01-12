__d(
  'CometUnitHeader.react',
  [
    'CometBase.react',
    'CometColumn.react',
    'CometColumnItem.react',
    'CometIcon.react',
    'CometPressable.react',
    'IconSource',
    'SVGIcon',
    'TetraText.react',
    'TetraTextPairing.react',
    'isBlueprintStylesEnabled',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState,
      j = 8,
      k = {
        action: {
          backgroundColor: 'x1k74hu9',
          borderTop: 'x76ihet',
          borderEnd: 'xwmqs3e',
          borderBottom: 'x112ta8',
          borderStart: 'xxxdfa6',
          borderTopStartRadius: 'x1lcm9me',
          borderTopEndRadius: 'x1yr5g0i',
          borderBottomEndRadius: 'xrt01vj',
          borderBottomStartRadius: 'x10y3i5r',
          display: 'x1rg5ohu',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x1n2onr6',
          verticalAlign: 'x3ajldb',
          $$css: !0,
        },
        actionButton: {
          color: 'x1fey0fg',
          cursor: 'x1ypdohk',
          textDecoration: 'x92akz8',
          $$css: !0,
        },
        actionHidden: { opacity: 'xg01cxk', $$css: !0 },
        hairline: {
          backgroundColor: 'x14nfmen',
          height: 'xjm9jq1',
          marginBottom: 'x1jyxor1',
          $$css: !0,
        },
        root: { paddingBottom: 'xjkvuk6', $$css: !0 },
        showActionOnHover: {
          visibility: 'xlshs6z',
          '@media (pointer: coarse)_visibility': 'xwtlbus',
          $$css: !0,
        },
      },
      l = {
        0: { paddingTop: 'xexx8yu', $$css: !0 },
        8: { paddingTop: 'x1y1aw1k', $$css: !0 },
        12: { paddingTop: 'xz9dl7a', $$css: !0 },
        16: { paddingTop: 'xyamay9', $$css: !0 },
        20: { paddingTop: 'x1cnzs8', $$css: !0 },
      };
    function a(a) {
      var b = a.action,
        e = a.actionAccessibilityLabel,
        f = a.actionDisabled;
      f = f === void 0 ? !1 : f;
      var g = a.actionHidden;
      g = g === void 0 ? !1 : g;
      var m = a.actionLinkProps,
        n = a.actionRef,
        o = a.actiontestid,
        p = a.actionWrapper,
        q = a.addOn_DEPRECATED,
        r = a.body,
        s = a.bodyColor;
      s = s === void 0 ? 'secondary' : s;
      var t = a.bodyLineLimit;
      t = t === void 0 ? 3 : t;
      var u = a.disabled,
        v = a.hasTopDivider;
      v = v === void 0 ? !1 : v;
      var w = a.headline,
        x = a.headlineColor;
      x = x === void 0 ? 'primary' : x;
      var y = a.iconColor;
      y = y === void 0 ? 'primary' : y;
      var z = a.iconSize;
      z = z === void 0 ? 16 : z;
      a.iconType;
      var A = a.isSemanticHeading;
      A = A === void 0 ? !0 : A;
      var B = a.level,
        C = a.linkProps,
        D = a.meta,
        E = a.metaColor;
      E = E === void 0 ? 'secondary' : E;
      var F = a.metaLocation,
        G = a.onActionHoverIn,
        H = a.onActionHoverOut,
        I = a.onActionPress,
        J = a.onActionPressIn,
        K = a.onActionPressOut,
        L = a.onPress,
        M = a.onPressIn,
        N = a.onPressOut,
        O = a.paddingHorizontal;
      O = O === void 0 ? 16 : O;
      var P = a.paddingTop;
      P = P === void 0 ? 20 : P;
      var Q = a.showActionOnHover;
      Q = Q === void 0 ? !1 : Q;
      var R = a.testOnly_actionPressed,
        S = a.testOnly_pressed;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'action',
        'actionAccessibilityLabel',
        'actionDisabled',
        'actionHidden',
        'actionLinkProps',
        'actionRef',
        'actiontestid',
        'actionWrapper',
        'addOn_DEPRECATED',
        'body',
        'bodyColor',
        'bodyLineLimit',
        'disabled',
        'hasTopDivider',
        'headline',
        'headlineColor',
        'iconColor',
        'iconSize',
        'iconType',
        'isSemanticHeading',
        'level',
        'linkProps',
        'meta',
        'metaColor',
        'metaLocation',
        'onActionHoverIn',
        'onActionHoverOut',
        'onActionPress',
        'onActionPressIn',
        'onActionPressOut',
        'onPress',
        'onPressIn',
        'onPressOut',
        'paddingHorizontal',
        'paddingTop',
        'showActionOnHover',
        'testOnly_actionPressed',
        'testOnly_pressed',
      ]);
      var T = i(!1),
        U = T[0];
      T = T[1];
      var V;
      if (b != null) {
        m = {
          'aria-label': e,
          disabled: f,
          linkProps: m,
          onHoverIn: G,
          onHoverOut: H,
          onPress: I,
          onPressIn: J,
          onPressOut: K,
          testid: o,
          testOnly_pressed: (e = R) != null ? e : !1,
        };
        b instanceof c('IconSource')
          ? (V = h.jsx(
              c('CometIcon.react'),
              babelHelpers['extends']({}, m, { color: y, icon: b, ref: n }),
            ))
          : b instanceof d('SVGIcon').SVGIcon
          ? (V = h.jsx(
              c('CometIcon.react'),
              babelHelpers['extends']({}, m, {
                color: y,
                icon: b,
                ref: n,
                size: z,
              }),
            ))
          : (V = h.jsx(
              c('CometPressable.react'),
              babelHelpers['extends']({}, m, {
                className_DEPRECATED: 'actionChildElement',
                onFocusVisibleChange: T,
                overlayOffset: j,
                overlayRadius: c('isBlueprintStylesEnabled')() ? 8 : 4,
                ref: n,
                xstyle: [
                  k.actionButton,
                  k.action,
                  g && !U && k.actionHidden,
                  Q && k.showActionOnHover,
                ],
                children: h.jsx(c('TetraText.react'), {
                  color: f ? 'disabled' : 'blueLink',
                  numberOfLines: 1,
                  type: B === 2 ? 'body2' : 'body3',
                  children: b,
                }),
              }),
            ));
      } else
        q != null &&
          (V = h.jsx('div', {
            className:
              'x1k74hu9 x76ihet xwmqs3e x112ta8 xxxdfa6 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1rg5ohu xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x3ajldb',
            children: q,
          }));
      if (p != null) {
        G = p.component;
        V = h.jsx(G, babelHelpers['extends']({}, p.props, { children: V }));
      }
      I = h.jsx(c('TetraTextPairing.react'), {
        body: r,
        bodyColor: s,
        bodyLineLimit: t,
        headline: w,
        headlineAddOn: V,
        headlineColor: x,
        headlineLineLimit: 2,
        isSemanticHeading: A,
        level: B,
        meta: D,
        metaColor: E,
        metaLineLimit: 1,
        metaLocation: (H = F) != null ? H : 'below',
      });
      K = h.jsx(
        c('CometColumn.react'),
        babelHelpers['extends']({}, a, {
          paddingHorizontal: v ? 0 : O,
          xstyle: [k.root, l[P]],
          children: h.jsx(c('CometColumnItem.react'), {
            children:
              L != null
                ? h.jsx(c('CometPressable.react'), {
                    disabled: u,
                    linkProps: C,
                    onPress: L,
                    onPressIn: M,
                    onPressOut: N,
                    overlayDisabled: !0,
                    ref: n,
                    testOnly_pressed: (J = S) != null ? J : !1,
                    children: I,
                  })
                : I,
          }),
        }),
      );
      return v
        ? h.jsxs(c('CometColumn.react'), {
            paddingHorizontal: O,
            children: [
              h.jsx(c('CometColumnItem.react'), {
                children: h.jsx(c('CometBase.react'), { xstyle: k.hairline }),
              }),
              K,
            ],
          })
        : K;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
