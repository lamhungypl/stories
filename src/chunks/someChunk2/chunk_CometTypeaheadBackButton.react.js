__d(
  'CometTypeaheadBackButton.react',
  [
    'fbt',
    'ArrowLeftFilled20IconSvg.react',
    'ArrowRightFilled20IconSvg.react',
    'CometVisualCompletionAttributes',
    'Locale',
    'TetraIcon.react',
    'emptyFunction',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.onPress;
      b = b === void 0 ? c('emptyFunction') : b;
      a = a.testid;
      a = d('Locale').isRTL()
        ? c('ArrowRightFilled20IconSvg.react')
        : c('ArrowLeftFilled20IconSvg.react');
      return i.jsx(
        'div',
        babelHelpers['extends'](
          { className: 'x14qfxbe' },
          c('CometVisualCompletionAttributes').IGNORE,
          {
            children: i.jsx('div', {
              className: 'xgd8bvy',
              children: i.jsx(c('TetraIcon.react'), {
                'aria-hidden': !0,
                'aria-label': h._('__JHASH__NKkDGC_RZTZ__JHASH__'),
                color: 'secondary',
                focusable: !1,
                icon: a,
                onPress: b,
                size: 20,
                testid: void 0,
              }),
            }),
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
