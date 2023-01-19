__d(
  'CometDialogContext',
  ['FBLogger', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    function a() {
      c('FBLogger')('comet_ui')
        .blameToPreviousFrame()
        .mustfix(
          'Attempted to imperatively render a dialog without CometTransientDialogProvider in the tree. This is not allowed. Please add a CometTransientDialogProvider to render a dialog (https://fburl.com/dialog-provider).',
        );
    }
    e = b.createContext(a);
    g['default'] = e;
  },
  98,
);
