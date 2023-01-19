__d(
  'useCometAlertDialog',
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
      j = c('requireDeferred')('CometAlertDialogImpl.react').__setRef(
        'useCometAlertDialog',
      );
    function k() {
      return h.jsx(c('CometDialogLoadingState.react'), {});
    }
    k.displayName = k.name + ' [from ' + f.id + ']';
    function a() {
      var a = c('useCometDeferredDialog')(j, k);
      return i(
        function (b, c) {
          c === void 0 && (c = function () {}), a(b, c);
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
