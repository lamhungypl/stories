__d(
  'useMenuButtonVisibilityState',
  ['FocusManager', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useReducer,
      j = { btnFocused: !1, btnHovered: !1, itemHovered: !1, menuOpened: !1 };
    function k(a, b) {
      switch (b.type) {
        case 'menubtnhover':
          return babelHelpers['extends']({}, a, { btnHovered: b.value });
        case 'menubtnfocus':
          return babelHelpers['extends']({}, a, { btnFocused: b.value });
        case 'listitemhover':
          return babelHelpers['extends'](
            {},
            a,
            { itemHovered: b.value },
            !b.value && { btnFocused: !1 },
          );
        case 'menuopen':
          return !b.value
            ? {
                btnFocused: a.btnFocused,
                btnHovered: !1,
                itemHovered: !1,
                menuOpened: !1,
              }
            : babelHelpers['extends']({}, a, { menuOpened: b.value });
        default:
          return a;
      }
    }
    function a(a) {
      a === void 0 && (a = !1);
      var b = i(k, j),
        c = b[0],
        e = c.btnFocused,
        f = c.btnHovered,
        g = c.itemHovered;
      c = c.menuOpened;
      var l = b[1];
      b = h(function (a) {
        l({ type: 'menubtnhover', value: a });
      }, []);
      var m = h(function (a) {
          l({ type: 'listitemhover', value: a });
        }, []),
        n = h(function (a) {
          l({ type: 'menuopen', value: a });
        }, []),
        o = h(
          function (b) {
            b
              ? (a || !d('FocusManager').isFocusingWithoutUserIntent()) &&
                l({ type: 'menubtnfocus', value: !0 })
              : l({ type: 'menubtnfocus', value: !1 });
          },
          [a],
        );
      e = e || f || g || c;
      return [
        e,
        {
          setListItemHovered: m,
          setMenuBtnFocused: o,
          setMenuBtnHovered: b,
          setMenuOpened: n,
        },
      ];
    }
    g['default'] = a;
  },
  98,
);
