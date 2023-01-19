__d(
  'useCometConfirmationDialog',
  [
    'CometDialogLoadingState.react',
    'react',
    'requireDeferred',
    'useCometDeferredDialog',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useCallback,
      j = c('requireDeferred')('CometConfirmationDialogImpl.react').__setRef(
        'useCometConfirmationDialog',
      );
    function k() {
      return h.jsx(c('CometDialogLoadingState.react'), {});
    }
    k.displayName = k.name + ' [from ' + f.id + ']';
    function a() {
      var a = c('useCometDeferredDialog')(j, k);
      return i(
        function (b, c, d) {
          d === void 0 && (d = function () {}),
            a(b, function (a) {
              a ? c() : d();
            });
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
