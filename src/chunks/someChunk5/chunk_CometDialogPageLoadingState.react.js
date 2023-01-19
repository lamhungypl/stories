__d(
  'CometDialogPageLoadingState.react',
  [
    'CometDialogHeader.react',
    'CometDialogLoadingStateImpl.react',
    'CometDialogPage.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.onClose;
      return h.jsx(c('CometDialogPage.react'), {
        footer: null,
        header: h.jsx(c('CometDialogHeader.react'), { onClose: a }),
        children: h.jsx(c('CometDialogLoadingStateImpl.react'), {}),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
