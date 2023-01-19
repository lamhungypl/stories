__d(
  'CometDialogConfirmationFooter.react',
  [
    'BaseRow.react',
    'BaseRowItem.react',
    'CometColumnItem.react',
    'CometDialogFooterContainer.react',
    'CometDialogMetaTextItem.react',
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
          '@media (max-width: 679px)_minWidth': 'x17ot9bj',
          $$css: !0,
        },
        secondary: { paddingEnd: 'x1sxyh0', $$css: !0 },
      };
    function a(a) {
      var b = a.meta,
        d = a.primary,
        e = a.secondary;
      a = a.size;
      a = a === void 0 ? 'medium' : a;
      return h.jsxs(c('CometDialogFooterContainer.react'), {
        children: [
          b != null && h.jsx(c('CometDialogMetaTextItem.react'), { meta: b }),
          h.jsx(c('CometColumnItem.react'), {
            paddingVertical: 16,
            children: h.jsxs(c('BaseRow.react'), {
              align: 'end',
              direction: 'backward',
              verticalAlign: 'stretch',
              wrap: 'forward',
              children: [
                h.jsx(c('BaseRowItem.react'), {
                  xstyle: i.item,
                  children: h.jsx(
                    c('TetraButton.react'),
                    babelHelpers['extends']({}, d, {
                      padding: 'wide',
                      size: a,
                    }),
                  ),
                }),
                h.jsx(c('BaseRowItem.react'), {
                  xstyle: [i.item, i.secondary],
                  children: h.jsx(
                    c('TetraButton.react'),
                    babelHelpers['extends'](
                      { reduceEmphasis: !0, type: 'secondary' },
                      e,
                      { size: a },
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
