__d(
  'BaseButton.react',
  [
    'BaseButtonPopoverContext',
    'Pressable.react',
    'PressableText.react',
    'react',
    'useFeedPressEventHandler',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    function a(a, b) {
      var d = a['aria-activedescendant'],
        e = a['aria-checked'],
        f = a['aria-controls'],
        g = a['aria-current'],
        j = a['aria-describedby'],
        k = a['aria-expanded'],
        l = a['aria-haspopup'],
        m = a['aria-hidden'],
        n = a['aria-invalid'],
        o = a['aria-label'],
        p = a['aria-labelledby'],
        q = a['aria-pressed'],
        r = a['aria-selected'],
        s = a.children,
        t = a.className_DEPRECATED,
        u = a.disabled;
      u = u === void 0 ? !1 : u;
      var v = a.display;
      v = v === void 0 ? 'inline' : v;
      var w = a.focusable,
        x = a.id,
        y = a.label,
        z = a.onBlur,
        A = a.onClick,
        B = a.onContextMenu,
        C = a.onFocus,
        D = a.onFocusChange,
        E = a.onFocusVisibleChange,
        F = a.onHoverChange,
        G = a.onHoverEnd,
        H = a.onHoverStart,
        I = a.onPressChange,
        J = a.onPressEnd,
        K = a.onPressStart,
        L = a.preventContextMenu,
        M = a.role,
        N = a.style,
        O = a.suppressFocusRing,
        P = a.suppressHydrationWarning,
        Q = a.testid,
        R = a.testOnly_pressed;
      R = R === void 0 ? !1 : R;
      a = a.xstyle;
      M = M === 'presentation' ? 'none' : M;
      o = M !== 'none' ? ((o = o) != null ? o : y) : void 0;
      y = b;
      b = A;
      var S = K,
        T = B;
      b = c('useFeedPressEventHandler')(A);
      S = c('useFeedPressEventHandler')(K);
      T = c('useFeedPressEventHandler')(B);
      A = i(c('BaseButtonPopoverContext'));
      K = {
        accessibilityLabel: o,
        accessibilityRelationship: {
          activedescendant: d,
          controls: f,
          current: g,
          describedby: j,
          haspopup: A != null && l == null ? A.haspopup : l,
          labelledby: p,
        },
        accessibilityState: {
          checked: e,
          disabled: u,
          expanded: A != null && k == null ? A.expanded : k,
          hidden: m,
          invalid: n,
          pressed: q,
          selected: r,
        },
        className_DEPRECATED: t,
        disabled: u,
        forwardedRef: y,
        nativeID: x,
        onBlur: z,
        onContextMenu: T,
        onFocus: C,
        onFocusChange: D,
        onFocusVisibleChange: E,
        onHoverChange: F,
        onHoverEnd: G,
        onHoverStart: H,
        onPress: b,
        onPressChange: I,
        onPressEnd: J,
        onPressStart: S,
        preventContextMenu: L,
        style: N,
        suppressHydrationWarning: P,
        testID: Q,
        testOnly_state: {
          disabled: !1,
          focused: !1,
          focusVisible: !1,
          hovered: !1,
          pressed: R,
        },
        xstyle: a,
      };
      if (v === 'block') {
        B =
          M === 'menuitem' ||
          M === 'none' ||
          M === 'gridcell' ||
          M === 'switch' ||
          M === 'combobox' ||
          M === 'checkbox' ||
          M === 'tab' ||
          M === 'radio' ||
          M === 'option'
            ? M
            : 'button';
        return h.jsx(
          c('Pressable.react'),
          babelHelpers['extends']({}, K, {
            accessibilityRole: B,
            suppressFocusRing: O,
            tabbable: w,
            children: s,
          }),
        );
      } else {
        o =
          M === 'combobox' ||
          M === 'menuitem' ||
          M === 'menuitemcheckbox' ||
          M === 'menuitemradio' ||
          M === 'option' ||
          M === 'none' ||
          M === 'tab'
            ? M
            : 'button';
        return h.jsx(
          c('PressableText.react'),
          babelHelpers['extends']({ focusable: w }, K, {
            accessibilityRole: o,
            direction: 'none',
            suppressFocusRing: O,
            children: s,
          }),
        );
      }
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
