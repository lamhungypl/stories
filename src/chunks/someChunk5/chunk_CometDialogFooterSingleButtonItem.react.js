__d(
  'CometDialogFooterSingleButtonItem.react',
  [
    'BaseRow.react',
    'BaseRowItem.react',
    'CometColumnItem.react',
    'TetraButton.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        item: {
          flexBasis: 'x1r8uery',
          minWidth: 'xl9nvqe',
          '@media (max-width: 679px)_minWidth': 'xwfmwtl',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.expanding;
      b = b === void 0 ? !0 : b;
      var d = a.primary;
      a = a.size;
      a = a === void 0 ? 'medium' : a;
      return h.jsx(c('CometColumnItem.react'), {
        paddingVertical: 16,
        children: h.jsx(c('BaseRow.react'), {
          align: 'end',
          direction: 'backward',
          verticalAlign: 'stretch',
          wrap: 'forward',
          children: h.jsx(c('BaseRowItem.react'), {
            expanding: b,
            xstyle: i.item,
            children: h.jsx(
              c('TetraButton.react'),
              babelHelpers['extends']({}, d, { padding: 'wide', size: a }),
            ),
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
