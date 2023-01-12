__d(
  'CometPivotLink.react',
  [
    'CometPillBase.react',
    'CometPillBaseStyles',
    'CometPressable.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        deemphasized: { backgroundColor: 'xjbqb8w', $$css: !0 },
        normal: { backgroundColor: 'x1qhmfi1', $$css: !0 },
      },
      j = {
        selectedOnWashBackground: { backgroundColor: 'x1av1boa', $$css: !0 },
      };
    function a(a, b) {
      var e = a.ariaCurrentType;
      e = e === void 0 ? 'page' : e;
      a.hitSlop;
      var f = a.linkProps,
        g = a.onHoverIn,
        k = a.onPress,
        l = a.onWashBackground,
        m = l === void 0 ? !1 : l;
      l = a.role;
      var n = a.testid;
      n = a.testOnly_pressed;
      var o = a.type,
        p = o === void 0 ? 'normal' : o;
      o = babelHelpers.objectWithoutPropertiesLoose(a, [
        'ariaCurrentType',
        'hitSlop',
        'linkProps',
        'onHoverIn',
        'onPress',
        'onWashBackground',
        'role',
        'testid',
        'testOnly_pressed',
        'type',
      ]);
      var q = (a = o.selected) != null ? a : !1;
      a = (a = o.disabled) != null ? a : !1;
      e = f
        ? { 'aria-current': q ? e : void 0 }
        : l === 'button' || l == null
        ? { 'aria-pressed': q }
        : { 'aria-selected': q };
      return h.jsx(
        c('CometPressable.react'),
        babelHelpers['extends']({}, e, {
          disabled: a,
          display: 'inline',
          linkProps: f,
          onHoverIn: g,
          onPress: a ? void 0 : k,
          overlayRadius: d('CometPillBaseStyles').PIVOT_HEIGHT / 2,
          ref: b,
          role: l,
          testOnly_pressed: n,
          testid: void 0,
          xstyle: function (a) {
            a = a.pressed;
            return [
              d('CometPillBaseStyles').pillStyles.root,
              i[p],
              q === !0 &&
                (m
                  ? j.selectedOnWashBackground
                  : d('CometPillBaseStyles').pillStyles.selected),
              a && d('CometPillBaseStyles').pillStyles.pressed,
            ];
          },
          children: h.jsx(
            d('CometPillBase.react').CometPillBase,
            babelHelpers['extends']({}, o),
          ),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
