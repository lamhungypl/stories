__d(
  'useCometDeferredDialog',
  [
    'CometDialogContext',
    'CometDialogLoadingState.react',
    'CometSuspendedDialogImpl.react',
    'deferredLoadComponent',
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
      var d = j(c('CometDialogContext'));
      return i(
        function (e, f) {
          var g = c('deferredLoadComponent')(a);
          d(
            c('CometSuspendedDialogImpl.react'),
            {
              dialog: g,
              dialogProps: babelHelpers['extends']({}, e, {
                loadImmediately: !0,
              }),
              fallback: (g = b) != null ? g : k,
            },
            {
              loadType: 'deferred',
              tracePolicy: c('tracePolicyFromResource')('comet.dialog', a),
            },
            f,
          );
        },
        [d, a, b],
      );
    }
    g['default'] = a;
  },
  98,
);
