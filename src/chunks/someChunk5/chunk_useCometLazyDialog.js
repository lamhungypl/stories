__d(
  'useCometLazyDialog',
  [
    'CometDialogContext',
    'CometDialogLoadingState.react',
    'CometSuspendedDialogImpl.react',
    'lazyLoadComponent',
    'react',
    'tracePolicyFromResource',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = c('react'),
      i = b.useCallback,
      j = b.useContext,
      k = function (a) {
        return h.jsx(c('CometDialogLoadingState.react'), { onClose: a });
      };
    function a(a, b) {
      var d = j(c('CometDialogContext')),
        e = i(
          function (e, f) {
            var g = c('lazyLoadComponent')(a);
            d(
              c('CometSuspendedDialogImpl.react'),
              { dialog: g, dialogProps: e, fallback: (g = b) != null ? g : k },
              {
                loadType: 'lazy',
                tracePolicy: c('tracePolicyFromResource')('comet.dialog', a),
              },
              f,
            );
          },
          [d, a, b],
        ),
        f = i(
          function () {
            a.preload();
          },
          [a],
        );
      return [e, f];
    }
    g['default'] = a;
  },
  98,
);
