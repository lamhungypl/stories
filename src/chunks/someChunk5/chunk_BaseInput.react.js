__d(
  'BaseInput.react',
  ['CometContainerPressableContext', 'Locale', 'react', 'stylex', 'testID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo,
      k = {
        root: {
          WebkitTapHighlightColor: 'x1i10hfl',
          boxSizing: 'x9f619',
          touchAction: 'xggy1nq',
          ':disabled_cursor': 'x1s07b3s',
          $$css: !0,
        },
        zIndex: { zIndex: 'x1vjfegm', $$css: !0 },
      },
      l = d('Locale').isRTL();
    function a(a, b) {
      var d = a.onChange,
        e = a.onClick,
        f = a.onValueChange,
        g = a.testid,
        m = a.type,
        n = m === void 0 ? 'text' : m;
      m = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'onChange',
        'onClick',
        'onValueChange',
        'testid',
        'type',
        'xstyle',
      ]);
      var o = j(
          function () {
            switch (n) {
              case 'switch':
                return 'checkbox';
              default:
                return n;
            }
          },
          [n],
        ),
        p = o === 'checkbox' || o === 'radio',
        q = o === 'textarea',
        r = i(c('CometContainerPressableContext')) != null;
      a = babelHelpers['extends'](
        { dir: l ? 'rtl' : 'ltr' },
        a,
        c('testID')(g),
        {
          className: c('stylex')(k.root, m, r && k.zIndex),
          onChange: function (a) {
            p || (f && f(a.target.value, a)), d && d(a);
          },
          onClick: function (a) {
            p && f && f(a.target.checked, a), e && e(a);
          },
        },
      );
      return q
        ? h.jsx(
            'textarea',
            babelHelpers['extends']({ suppressHydrationWarning: !0 }, a, {
              ref: b,
            }),
          )
        : h.jsx(
            'input',
            babelHelpers['extends']({ suppressHydrationWarning: !0 }, a, {
              ref: b,
              type: o,
            }),
          );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.memo(h.forwardRef(a));
    g['default'] = e;
  },
  98,
);
