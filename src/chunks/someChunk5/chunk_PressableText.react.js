__d(
  'PressableText.react',
  [
    'BaseFocusRing.react',
    'Pressability',
    'PressableGroupContext',
    'RecoverableViolationWithComponentStack.react',
    'UserAgent',
    'gkx',
    'joinClasses',
    'justknobx',
    'passiveEventListenerUtil',
    'react',
    'stylex',
    'useCometErrorProject',
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
      if (
        ((b == null ? void 0 : b.url) != null &&
          (b == null ? void 0 : b.url) !== '#') ||
        (o.includes(a) && (b == null ? void 0 : b.url) != null)
      )
        c = 'a';
      else if (a != null) {
        b = p[a];
        b != null && (c = b);
      }
      return c;
    }
    var r = function (a) {
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
            a === 'combobox' ||
            a === 'menuitem' ||
            a === 'menuitemradio' ||
            a === 'option')
        )
          return !0;
      }
      return !1;
    };
    function s(a) {
      a = a;
      while (a != null) {
        if (a.tagName === 'A' && a.href != null) return !0;
        a = a.parentNode;
      }
      return !1;
    }
    function t(a, b) {
      var d = a.altKey,
        e = a.ctrlKey,
        f = a.currentTarget,
        g = a.metaKey,
        h = a.shiftKey;
      a = a.target;
      var i = a;
      c('justknobx')._('450') && (i = document.contains(a) ? a : f);
      a = s(i);
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
        s = p[0];
      p = p[1];
      var w = m(!1),
        x = w[0];
      w = w[1];
      var y = j(c('PressableGroupContext')),
        z = a.accessibilityLabel,
        A = a.accessibilityRelationship,
        B = a.accessibilityRole,
        C = a.accessibilityState,
        D = a.children,
        E = a.className_DEPRECATED,
        F = a.direction,
        G = a.disabled,
        H = a.focusable,
        I = a.forwardedRef,
        J = a.link,
        K = a.nativeID,
        L = a.onBlur,
        M = a.onContextMenu,
        N = a.onFocus,
        O = a.onFocusChange,
        aa = a.onFocusVisibleChange,
        ba = a.onHoverChange,
        ca = a.onHoverEnd,
        da = a.onHoverMove,
        ea = a.onHoverStart,
        P = a.onPress,
        fa = a.onPressChange,
        ga = a.onPressEnd,
        ha = a.onPressMove,
        ia = a.onPressStart,
        ja = a.preventContextMenu,
        Q = a.preventDefault,
        ka = a.selectable,
        R = a.style,
        S = a.suppressFocusRing,
        T = a.testID;
      T = a.testOnly_state;
      var U = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'accessibilityLabel',
        'accessibilityRelationship',
        'accessibilityRole',
        'accessibilityState',
        'children',
        'className_DEPRECATED',
        'direction',
        'disabled',
        'focusable',
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
        'selectable',
        'style',
        'suppressFocusRing',
        'testID',
        'testOnly_state',
        'xstyle',
      ]);
      var V = q(B, J);
      G = G === !0 || (C == null ? void 0 : C.disabled) === !0;
      var W = C == null ? void 0 : C.hidden,
        X = V === 'a' && G !== !0;
      f = {
        disabled: G === !0 || (T == null ? void 0 : T.disabled) === !0 || !1,
        focused: f || (T == null ? void 0 : T.focused) === !0,
        focusVisible:
          (o && S !== !0) || (T == null ? void 0 : T.focusVisible) === !0,
        hovered: s || (T == null ? void 0 : T.hovered) === !0,
        pressed: x || (T == null ? void 0 : T.pressed) === !0,
      };
      o = typeof D === 'function' ? D(f) : D;
      S = typeof E === 'function' ? E(f) : E;
      s = typeof R === 'function' ? R(f) : R;
      x = typeof U === 'function' ? U(f) : U;
      d('Pressability').usePressability(b, {
        disabled: G,
        onBlur: L,
        onContextMenu: M,
        onFocus: N,
        onFocusChange: u(e, O),
        onFocusVisibleChange: u(g, aa),
        onHoverChange: u(p, ba),
        onHoverEnd: ca,
        onHoverMove: da,
        onHoverStart: ea,
        onPressChange: u(w, fa),
        onPressEnd: ga,
        onPressMove: ha,
        onPressStart: ia,
        preventContextMenu: ja,
        preventDefault: Q == null ? !0 : Q,
      });
      var Y = i(
        function (a) {
          P && P(a),
            (P || J != null) && a.stopPropagation(),
            t(a, Q) && a.nativeEvent.preventDefault();
        },
        [J, P, Q],
      );
      T = i(
        function (a) {
          if (r(a)) {
            var b = a.key;
            (b === ' ' || b === 'Spacebar') && a.preventDefault();
            P && (P(a), a.stopPropagation());
          }
        },
        [P],
      );
      var la, Z;
      switch (F) {
        case 'none':
          break;
        default:
          F != null && (Z = F);
          break;
      }
      D = c('useMergeRefs')(b, I);
      k(
        function () {
          var a,
            c = b.current,
            e =
              (a = window) == null
                ? void 0
                : (a = a.document) == null
                ? void 0
                : a.body;
          if (
            e == null ||
            c == null ||
            !e.contains(c) ||
            c.addEventListener == null
          )
            return;
          y && y.register(c, Y);
          var f = function (a) {
              y && (a.preventDefault(), y.onTouchStart());
              if (!n) return;
              if (e == null) return;
              e.style.WebkitUserSelect = 'none';
              var b = d('passiveEventListenerUtil').makeEventOptions({
                passive: !0,
              });
              a = function a() {
                (e.style.WebkitUserSelect = null),
                  document.removeEventListener('touchend', a, b);
              };
              document.addEventListener('touchend', a, b);
            },
            g = d('passiveEventListenerUtil').makeEventOptions({ passive: !y });
          c.addEventListener('touchstart', f, g);
          return function () {
            y && y.unRegister(c), c.removeEventListener('touchstart', f, g);
          };
        },
        [y, Y],
      );
      var $;
      E = V === 'a' || B === 'button';
      E
        ? W === !0 || H === !1 || (!c('gkx')('5403') && G === !0)
          ? ($ = -1)
          : ($ = 0)
        : c('gkx')('5403')
        ? W !== !0 && H !== !1 && B !== 'none' && ($ = 0)
        : G !== !0 && W !== !0 && H !== !1 && B !== 'none' && ($ = 0);
      R = J == null ? void 0 : J.download;
      U = (R === !0 || typeof R === 'string') && X;
      L = B === 'none' ? 'presentation' : B;
      M = h.jsx(
        V,
        babelHelpers['extends']({}, a, {
          'aria-activedescendant': A == null ? void 0 : A.activedescendant,
          'aria-busy': C == null ? void 0 : C.busy,
          'aria-checked': C == null ? void 0 : C.checked,
          'aria-controls': A == null ? void 0 : A.controls,
          'aria-current': A == null ? void 0 : A.current,
          'aria-describedby': A == null ? void 0 : A.describedby,
          'aria-details': A == null ? void 0 : A.details,
          'aria-disabled': G === !0 && L !== 'presentation' ? G : void 0,
          'aria-expanded': C == null ? void 0 : C.expanded,
          'aria-haspopup': A == null ? void 0 : A.haspopup,
          'aria-hidden': W,
          'aria-invalid': C == null ? void 0 : C.invalid,
          'aria-label': z,
          'aria-labelledby': A == null ? void 0 : A.labelledby,
          'aria-owns': A == null ? void 0 : A.owns,
          'aria-pressed': C == null ? void 0 : C.pressed,
          'aria-readonly': C == null ? void 0 : C.readonly,
          'aria-required': C == null ? void 0 : C.required,
          'aria-selected': C == null ? void 0 : C.selected,
          children: o,
          className: c('joinClasses')(
            c('stylex')(
              v.root,
              ka === !1 && v.notSelectable,
              f.disabled && v.disabled,
              !f.focusVisible && v.focusNotVisible,
              f.focusVisible &&
                E &&
                c('BaseFocusRing.react').linkFocusRingXStyle,
              x,
              y && v.rootInGroup,
            ),
            S,
          ),
          'data-testid': void 0,
          dir: Z,
          download: U ? R : void 0,
          href: X ? (J == null ? void 0 : J.url) : void 0,
          id: K,
          onClick: G ? void 0 : Y,
          onKeyDown: G ? void 0 : T,
          ref: D,
          rel: X ? (J == null ? void 0 : J.rel) : void 0,
          role: L,
          style: s,
          tabIndex: $,
          target: X ? (J == null ? void 0 : J.target) : void 0,
        }),
      );
      return M;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function u(a, b) {
      return i(
        function (c) {
          a(c), b && b(c);
        },
        [b, a],
      );
    }
    var v = {
      disabled: { cursor: 'x1h6gzvc', $$css: !0 },
      focusNotVisible: { outline: 'x1a2a7pz', $$css: !0 },
      notSelectable: { userSelect: 'x87ps6o', $$css: !0 },
      root: {
        WebkitTapHighlightColor: 'x1i10hfl',
        backgroundColor: 'xjbqb8w',
        borderTop: 'x6umtig',
        borderEnd: 'x1b1mbwd',
        borderBottom: 'xaqea5y',
        borderStart: 'xav7gou',
        boxSizing: 'x9f619',
        cursor: 'x1ypdohk',
        display: 'xt0psk2',
        listStyle: 'xe8uvvx',
        marginTop: 'xdj266r',
        marginEnd: 'x11i5rnm',
        marginBottom: 'xat24cr',
        marginStart: 'x1mh8g0r',
        paddingTop: 'xexx8yu',
        paddingEnd: 'x4uap5',
        paddingBottom: 'x18d9i69',
        paddingStart: 'xkhd6sd',
        textAlign: 'x16tdsg8',
        textDecoration: 'x1hl2dhg',
        touchAction: 'xggy1nq',
        $$css: !0,
      },
      rootInGroup: { touchAction: 'x5ve5x3', $$css: !0 },
    };
    g['default'] = a;
  },
  98,
);
