__d(
  'CometDialogFooter.react',
  [
    'CometDialogFooterContainer.react',
    'CometDialogFooterSingleButtonItem.react',
    'CometDialogMetaTextItem.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.expanding,
        d = a.meta,
        e = a.metaPosition;
      e = e === void 0 ? 'above' : e;
      var f = a.primary;
      a = a.size;
      var g = d != null && e === 'above',
        i = d != null && e === 'below';
      return h.jsxs(c('CometDialogFooterContainer.react'), {
        children: [
          g &&
            h.jsx(c('CometDialogMetaTextItem.react'), {
              meta: d,
              metaPosition: e,
            }),
          h.jsx(c('CometDialogFooterSingleButtonItem.react'), {
            expanding: b,
            primary: f,
            size: a,
          }),
          i &&
            h.jsx(c('CometDialogMetaTextItem.react'), {
              meta: d,
              metaPosition: e,
            }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
