__d(
  'Pressable.react',
  [
    'Pressability',
    'PressableGroupContext',
    'UserAgent',
    'gkx',
    'joinClasses',
    'justknobx',
    'passiveEventListenerUtil',
    'react',
    'recoverableViolation',
    'stylex',
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
      n =
        c('UserAgent').isBrowser('Safari') ||
        c('UserAgent').isBrowser('Mobile Safari'),
      o = ['menuitem', 'tab', 'none'],
      p = {
        article: 'article',
        banner: 'header',
        complementary: 'aside',
        contentinfo: 'footer',
        figure: 'figure',
        form: 'form',
        heading: 'h1',
        label: 'label',
        link: 'a',
        list: 'ul',
        listitem: 'li',
        main: 'main',
        navigation: 'nav',
        none: 'div',
        region: 'section',
      };
    function q(a, b) {
      var c = 'div';
      if (o.includes(a) && b != null && b.url != null) c = 'a';
      else if (a != null) {
        b = p[a];
        b != null && (c = b);
      }
      return c;
    }
    function r(a) {
      switch (a) {
        case 'none':
          return 'presentation';
        case 'label':
          return void 0;
        default:
          return a;
      }
    }
    var s = function (a) {
      var b = a.target,
        c = b.tagName;
      c =
        b.isContentEditable ||
        (c === 'A' && b.href != null) ||
        c === 'BUTTON' ||
        c === 'INPUT' ||
        c === 'SELECT' ||
        c === 'TEXTAREA';
      if (b.tabIndex === 0 && !c) {
        c = a.key;
        if (c === 'Enter') return !0;
        a = b.getAttribute('role');
        if (
          (c === ' ' || c === 'Spacebar') &&
          (a === 'button' ||
            a === 'checkbox' ||
            a === 'combobox' ||
            a === 'menuitem' ||
            a === 'menuitemcheckbox' ||
            a === 'menuitemradio' ||
            a === 'option' ||
            a === 'radio' ||
            a === 'switch' ||
            a === 'tab')
        )
          return !0;
      }
      return !1;
    };
    function t(a) {
      a = a;
      while (a != null) {
        if (a.tagName === 'A' && a.href != null) return !0;
        a = a.parentNode;
      }
      return !1;
    }
    function u(a, b) {
      var d = a.altKey,
        e = a.ctrlKey,
        f = a.currentTarget,
        g = a.metaKey,
        h = a.shiftKey;
      a = a.target;
      var i = a;
      c('justknobx')._('450') && (i = document.contains(a) ? a : f);
      a = t(i);
      f = d || e || g || h;
      return b !== !1 && a && !f;
    }
    function a(a) {
      var b = l(null),
        e = m(!1),
        f = e[0];
      e = e[1];
      var g = m(!1),
        o = g[0];
      g = g[1];
      var p = m(!1),
        t = p[0];
      p = p[1];
      var x = m(!1),
        y = x[0];
      x = x[1];
      var z = j(c('PressableGroupContext')),
        A = a.accessibilityLabel,
        B = a.accessibilityRelationship,
        C = a.accessibilityRole,
        D = a.accessibilityState,
        E = a.accessibilityValue,
        F = a.children,
        G = a.className_DEPRECATED,
        H = a.disabled,
        I = a.forwardedRef,
        J = a.link,
        K = a.nativeID,
        L = a.onBlur,
        M = a.onContextMenu,
        N = a.onFocus,
        O = a.onFocusChange,
        P = a.onFocusVisibleChange,
        aa = a.onHoverChange,
        ba = a.onHoverEnd,
        ca = a.onHoverMove,
        da = a.onHoverStart,
        Q = a.onPress,
        ea = a.onPressChange,
        fa = a.onPressEnd,
        ga = a.onPressMove,
        ha = a.onPressStart,
        ia = a.preventContextMenu,
        R = a.preventDefault,
        S = a.style,
        T = a.suppressFocusRing;
      T = T === void 0 ? !1 : T;
      var U = a.tabbable,
        V = a.testID;
      V = a.testOnly_state;
      var W = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'accessibilityLabel',
        'accessibilityRelationship',
        'accessibilityRole',
        'accessibilityState',
        'accessibilityValue',
        'children',
        'className_DEPRECATED',
        'disabled',
        'forwardedRef',
        'link',
        'nativeID',
        'onBlur',
        'onContextMenu',
        'onFocus',
        'onFocusChange',
        'onFocusVisibleChange',
        'onHoverChange',
        'onHoverEnd',
        'onHoverMove',
        'onHoverStart',
        'onPress',
        'onPressChange',
        'onPressEnd',
        'onPressMove',
        'onPressStart',
        'preventContextMenu',
        'preventDefault',
        'style',
        'suppressFocusRing',
        'tabbable',
        'testID',
        'testOnly_state',
        'xstyle',
      ]);
      var X = q(C, J);
      H = H === !0 || (D == null ? void 0 : D.disabled) === !0;
      var Y = D == null ? void 0 : D.hidden,
        Z = X === 'a' && H !== !0;
      o = {
        disabled: H === !0 || (V == null ? void 0 : V.disabled) === !0 || !1,
        focusVisible: o || (V == null ? void 0 : V.focusVisible) === !0,
        focused: f || (V == null ? void 0 : V.focused) === !0,
        hovered: t || (V == null ? void 0 : V.hovered) === !0,
        pressed: y || (V == null ? void 0 : V.pressed) === !0,
      };
      f = typeof F === 'function' ? F(o) : F;
      t = typeof G === 'function' ? G(o) : G;
      y = typeof S === 'function' ? S(o) : S;
      V = typeof W === 'function' ? W(o) : W;
      d('Pressability').usePressability(b, {
        disabled: H,
        onBlur: L,
        onContextMenu: M,
        onFocus: N,
        onFocusChange: v(e, O),
        onFocusVisibleChange: v(g, P),
        onHoverChange: v(p, aa),
        onHoverEnd: ba,
        onHoverMove: ca,
        onHoverStart: da,
        onPressChange: v(x, ea),
        onPressEnd: fa,
        onPressMove: ga,
        onPressStart: ha,
        preventContextMenu: ia,
        preventDefault: R == null ? !0 : R,
      });
      var $ = i(
        function (a) {
          Q && Q(a),
            (Q || J != null) && a.stopPropagation(),
            u(a, R) && a.nativeEvent.preventDefault();
        },
        [J, Q, R],
      );
      F = i(
        function (a) {
          if (s(a)) {
            var b = a.key;
            (b === ' ' || b === 'Spacebar') && a.preventDefault();
            Q && (Q(a), a.stopPropagation());
          }
        },
        [Q],
      );
      G = i(
        function (a) {
          (b.current = a),
            typeof I === 'function' ? I(a) : I != null && (I.current = a);
        },
        [I],
      );
      k(
        function () {
          var a = b.current;
          if (!a || !a.addEventListener || !document.contains(a)) return;
          if (!z && !n && c('gkx')('3446')) return;
          z && z.register(a, $);
          var e = function (a) {
              z && (a.preventDefault(), z.onTouchStart());
              if (!n) return;
              var b =
                (a = window) == null
                  ? void 0
                  : (a = a.document) == null
                  ? void 0
                  : a.body;
              if (b == null) return;
              b.style.WebkitUserSelect = 'none';
              var c = d('passiveEventListenerUtil').makeEventOptions({
                passive: !0,
              });
              a = function a() {
                (b.style.WebkitUserSelect = null),
                  document.removeEventListener('touchend', a, c);
              };
              document.addEventListener('touchend', a, c);
            },
            f = d('passiveEventListenerUtil').makeEventOptions({ passive: !z });
          a.addEventListener('touchstart', e, f);
          return function () {
            z && z.unRegister(a), a.removeEventListener('touchstart', e, f);
          };
        },
        [z, $],
      );
      S = -1;
      c('gkx')('5403')
        ? Y !== !0 && U !== !1 && (S = 0)
        : H !== !0 && Y !== !0 && U !== !1 && (S = 0);
      W = J == null ? void 0 : J.download;
      L = (W === !0 || typeof W === 'string') && Z;
      return h.jsx(
        X,
        babelHelpers['extends']({}, a, {
          'aria-activedescendant': B == null ? void 0 : B.activedescendant,
          'aria-busy': D == null ? void 0 : D.busy,
          'aria-checked': D == null ? void 0 : D.checked,
          'aria-controls': B == null ? void 0 : B.controls,
          'aria-current': B == null ? void 0 : B.current,
          'aria-describedby': B == null ? void 0 : B.describedby,
          'aria-details': B == null ? void 0 : B.details,
          'aria-disabled': H === !0 ? H : void 0,
          'aria-errormessage': B == null ? void 0 : B.errormessage,
          'aria-expanded': D == null ? void 0 : D.expanded,
          'aria-haspopup': B == null ? void 0 : B.haspopup,
          'aria-hidden': Y,
          'aria-invalid': D == null ? void 0 : D.invalid,
          'aria-label': A,
          'aria-labelledby': B == null ? void 0 : B.labelledby,
          'aria-modal': D == null ? void 0 : D.modal,
          'aria-orientation': D == null ? void 0 : D.orientation,
          'aria-owns': B == null ? void 0 : B.owns,
          'aria-pressed': D == null ? void 0 : D.pressed,
          'aria-readonly': D == null ? void 0 : D.readonly,
          'aria-required': D == null ? void 0 : D.required,
          'aria-selected': D == null ? void 0 : D.selected,
          'aria-valuemax': E == null ? void 0 : E.max,
          'aria-valuemin': E == null ? void 0 : E.min,
          'aria-valuenow': E == null ? void 0 : E.now,
          'aria-valuetext': E == null ? void 0 : E.text,
          children: f,
          className: c('joinClasses')(
            c('stylex')(
              w.root,
              o.disabled && w.disabled,
              (!o.focusVisible || T === !0) && w.focusNotVisible,
              V,
              z && w.rootInGroup,
            ),
            t,
          ),
          'data-testid': void 0,
          download: L ? W : void 0,
          href: Z ? (J == null ? void 0 : J.url) : void 0,
          id: K,
          onClick: H ? void 0 : $,
          onKeyDown: H ? void 0 : F,
          ref: G,
          rel: Z ? (J == null ? void 0 : J.rel) : void 0,
          role: r(C),
          style: y,
          tabIndex: S,
          target: Z ? (J == null ? void 0 : J.target) : void 0,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function v(a, b) {
      return i(
        function (c) {
          a(c), b && b(c);
        },
        [b, a],
      );
    }
    var w = {
      disabled: { cursor: 'x1h6gzvc', $$css: !0 },
      focusNotVisible: { outlineStyle: 'x1t137rt', $$css: !0 },
      root: {
        WebkitTapHighlightColor: 'x1i10hfl',
        alignItems: 'x1qjc9v5',
        backgroundColor: 'xjbqb8w',
        borderTopColor: 'xjqpnuy',
        borderEndColor: 'xa49m3k',
        borderBottomColor: 'xqeqjp1',
        borderStartColor: 'x2hbi6w',
        borderTopStyle: 'x13fuv20',
        borderEndStyle: 'xu3j5b3',
        borderBottomStyle: 'x1q0q8m5',
        borderStartStyle: 'x26u7qi',
        borderTopWidth: 'x972fbf',
        borderEndWidth: 'xcfux6l',
        borderBottomWidth: 'x1qhh985',
        borderStartWidth: 'xm0m39n',
        boxSizing: 'x9f619',
        cursor: 'x1ypdohk',
        display: 'x78zum5',
        flexBasis: 'xdl72j9',
        flexDirection: 'xdt5ytf',
        flexShrink: 'x2lah0s',
        listStyle: 'xe8uvvx',
        marginTop: 'xdj266r',
        marginEnd: 'x11i5rnm',
        marginBottom: 'xat24cr',
        marginStart: 'x1mh8g0r',
        minHeight: 'x2lwn1j',
        minWidth: 'xeuugli',
        paddingTop: 'xexx8yu',
        paddingEnd: 'x4uap5',
        paddingBottom: 'x18d9i69',
        paddingStart: 'xkhd6sd',
        position: 'x1n2onr6',
        textAlign: 'x16tdsg8',
        textDecoration: 'x1hl2dhg',
        touchAction: 'xggy1nq',
        zIndex: 'x1ja2u2z',
        $$css: !0,
      },
      rootInGroup: { touchAction: 'x5ve5x3', $$css: !0 },
    };
    g['default'] = a;
  },
  98,
);
