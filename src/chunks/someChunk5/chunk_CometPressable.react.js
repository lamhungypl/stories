__d(
  'CometPressable.react',
  [
    'BaseButton.react',
    'BaseFocusRing.react',
    'BaseLink.react',
    'CometContainerPressableContext',
    'CometDangerouslySuppressInteractiveElementsContext',
    'CometPressableOverlay.react',
    'gkx',
    'react',
    'stylex',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState,
      n = c('gkx')('1721477') || c('gkx')('1459'),
      o = {
        defaultCursor: { cursor: 'xt0e3qv', $$css: !0 },
        expanding: { display: 'x78zum5', $$css: !0 },
        hideOutline: { outline: 'x1a2a7pz', $$css: !0 },
        linkBase: { display: 'x1rg5ohu', $$css: !0 },
        root: {
          borderTopStartRadius: 'x1o1ewxj',
          borderTopEndRadius: 'x3x9cwd',
          borderBottomEndRadius: 'x1e5q0jg',
          borderBottomStartRadius: 'x13rtm0m',
          display: 'x3nfvp2',
          flexDirection: 'x1q0g3np',
          userSelect: 'x87ps6o',
          ':hover_textDecoration': 'x1lku1pv',
          $$css: !0,
        },
        root_DEPRECATED: {
          borderTopStartRadius: 'x1o1ewxj',
          borderTopEndRadius: 'x3x9cwd',
          borderBottomEndRadius: 'x1e5q0jg',
          borderBottomStartRadius: 'x13rtm0m',
          position: 'x1n2onr6',
          userSelect: 'x87ps6o',
          ':hover_textDecoration': 'x1lku1pv',
          $$css: !0,
        },
        zIndex: { zIndex: 'x1vjfegm', $$css: !0 },
      };
    function a(a, b) {
      var d = a.children,
        e = a.className_DEPRECATED,
        f = a.cursorDisabled;
      f = f === void 0 ? !1 : f;
      var g = a.xstyle,
        p = a.disabled;
      p = p === void 0 ? !1 : p;
      var q = a.display,
        r = a.expanding;
      r = r === void 0 ? q === 'block' : r;
      var s = a.hideFocusOverlay;
      s = s === void 0 ? !1 : s;
      var t = a.hideHoverOverlay;
      t = t === void 0 ? !1 : t;
      var u = a.isContainerTarget,
        v = u === void 0 ? !1 : u,
        w = a.linkProps,
        x = a.onFocusChange;
      u = a.onFocusIn;
      var y = a.onFocusOut,
        z = a.onFocusVisibleChange,
        A = a.onHoverChange,
        B = a.onHoverIn,
        C = a.onHoverOut,
        D = a.onPress,
        E = a.onPressChange,
        F = a.onPressIn,
        G = a.onPressOut,
        H = a.preventContextMenu,
        I = a.overlayDisabled;
      I = I === void 0 ? !1 : I;
      var J = a.overlayOffset,
        K = a.overlayFocusVisibleStyle,
        L = a.overlayHoveredStyle,
        M = a.overlayPressedStyle,
        N = a.overlayRadius,
        O = a.suppressFocusRing;
      O = O === void 0 ? !1 : O;
      var P = a.testOnly_pressed,
        Q = P === void 0 ? !1 : P;
      P = a.testid;
      P = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'className_DEPRECATED',
        'cursorDisabled',
        'xstyle',
        'disabled',
        'display',
        'expanding',
        'hideFocusOverlay',
        'hideHoverOverlay',
        'isContainerTarget',
        'linkProps',
        'onFocusChange',
        'onFocusIn',
        'onFocusOut',
        'onFocusVisibleChange',
        'onHoverChange',
        'onHoverIn',
        'onHoverOut',
        'onPress',
        'onPressChange',
        'onPressIn',
        'onPressOut',
        'preventContextMenu',
        'overlayDisabled',
        'overlayOffset',
        'overlayFocusVisibleStyle',
        'overlayHoveredStyle',
        'overlayPressedStyle',
        'overlayRadius',
        'suppressFocusRing',
        'testOnly_pressed',
        'testid',
      ]);
      a = m(Q);
      var R = a[0],
        S = a[1];
      a = m(!1);
      var T = a[0],
        U = a[1];
      a = m(!1);
      var V = a[0],
        W = a[1];
      a = m(!1);
      var X = a[0],
        aa = a[1];
      a = i(
        function (a) {
          S(a || Q), E && E(a);
        },
        [E, Q],
      );
      var ba = i(
          function (a) {
            U(a), x && x(a);
          },
          [x],
        ),
        ca = i(
          function (a) {
            W(a), z && z(a);
          },
          [z],
        ),
        da = i(
          function (a) {
            aa(a), A && A(a);
          },
          [A],
        );
      K = I
        ? null
        : h.jsx(c('CometPressableOverlay.react'), {
            focusVisible: !s && V,
            focusVisibleStyle: K,
            hovered: !t && X,
            hoveredStyle: L,
            offset: J,
            pressed: R,
            pressedStyle: M,
            radius: N,
            showFocusRing: !0,
          });
      t =
        typeof d === 'function'
          ? d({
              disabled: p,
              focused: T,
              focusVisible: V,
              hovered: X,
              overlay: K,
              pressed: R,
            })
          : h.jsxs(h.Fragment, { children: [d, K] });
      L =
        typeof g === 'function'
          ? g({
              disabled: p,
              focused: T,
              focusVisible: V,
              hovered: X,
              pressed: R,
            })
          : g;
      var Y = j(c('CometContainerPressableContext'));
      J = j(c('CometDangerouslySuppressInteractiveElementsContext'));
      M = V && (s || I) && !O;
      N = [
        q === 'inline' ? o.root_DEPRECATED : o.root,
        f === !0 && o.defaultCursor,
        r && o.expanding,
        w != null && o.linkBase,
        !V && o.hideOutline,
        L,
        M && c('BaseFocusRing.react').focusRingXStyle,
        Y != null && o.zIndex,
      ];
      d = {
        onBlur: y,
        onClick: D,
        onFocus: u,
        onFocusChange: ba,
        onFocusVisibleChange: ca,
        onHoverChange: da,
        onHoverEnd: C,
        onHoverStart: B,
        onPressChange: a,
        onPressEnd: G,
        onPressStart: F,
      };
      var ea = l(null),
        Z = l(null),
        $ = P.onContextMenu;
      k(
        function () {
          v &&
            Y &&
            Y.onMount(
              {
                onContextMenu: function (a) {
                  H === !0 && a.preventDefault(), $ != null && $(a);
                },
                onPress: function (a) {
                  a = Z.current;
                  a && a.click();
                },
                target: w == null ? void 0 : w.target,
                url: w == null ? void 0 : w.url,
              },
              ea,
            );
        },
        [
          Y,
          v,
          P,
          $,
          H,
          w == null ? void 0 : w.url,
          w == null ? void 0 : w.target,
        ],
      );
      K = c('useMergeRefs')(b, Z);
      if (J) {
        T = q === 'inline' ? 'span' : 'div';
        return h.jsx(
          T,
          babelHelpers['extends'](
            {
              className_DEPRECATED: e,
              display: q === 'inline' ? q : 'block',
              preventContextMenu: H,
            },
            P,
            {
              className: c('stylex')(N),
              'data-testid': void 0,
              ref: K,
              children: t,
            },
          ),
        );
      }
      if (w != null) {
        X = w.url;
        R = babelHelpers.objectWithoutPropertiesLoose(w, ['url']);
        g = babelHelpers['extends']({}, R, { href: X });
        return h.jsx(
          c('BaseLink.react'),
          babelHelpers['extends']({}, d, P, g, {
            className_DEPRECATED: e,
            disabled: p,
            display: q === 'inline' ? q : 'block',
            preventContextMenu: H,
            ref: K,
            suppressFocusRing: !M || n,
            testid: void 0,
            xstyle: N,
            children: t,
          }),
        );
      }
      return h.jsx(
        c('BaseButton.react'),
        babelHelpers['extends']({}, d, P, {
          className_DEPRECATED: e,
          disabled: p,
          display: q === 'inline' ? q : 'block',
          preventContextMenu: H,
          ref: K,
          suppressFocusRing: !M || n,
          testid: void 0,
          xstyle: N,
          children: t,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
