__d(
  'CometDialogLoadingState.react',
  [
    'fbt',
    'CometDialog.react',
    'CometDialogLoadingStateContext',
    'CometDialogLoadingStateHeader.react',
    'CometDialogLoadingStateImpl.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.id;
      a = a.onClose;
      return i.jsx(c('CometDialogLoadingStateContext').Provider, {
        value: !0,
        children: i.jsx(c('CometDialog.react'), {
          footer: null,
          header: i.jsx(c('CometDialogLoadingStateHeader.react'), {
            id: b,
            onClose: a,
          }),
          label: h._('__JHASH__6lD-XyRyuHe__JHASH__'),
          onClose: a,
          children: i.jsx(c('CometDialogLoadingStateImpl.react'), {}),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
