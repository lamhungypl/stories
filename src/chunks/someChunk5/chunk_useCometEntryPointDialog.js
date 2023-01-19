__d(
  'useCometEntryPointDialog',
  [
    'CometDialogContext',
    'CometDialogLoadingState.react',
    'CometRelay',
    'CometSuspendedDialogImpl.react',
    'react',
    'tracePolicyFromResource',
    'useCometEntryPointPrerendererWithQueryTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext;
    function k(a) {
      var b = a.onClose,
        c = a.onHide,
        e = a.otherProps;
      a = a.preloadedEntryPoint;
      e = babelHelpers['extends']({}, e, { onClose: b, onHide: c });
      return h.jsx(d('CometRelay').EntryPointContainer, {
        entryPointReference: a,
        props: e,
      });
    }
    k.displayName = k.name + ' [from ' + f.id + ']';
    var l = function (a) {
      return h.jsx(c('CometDialogLoadingState.react'), { onClose: a });
    };
    function a(a, b, d, e, f) {
      var g = j(c('CometDialogContext')),
        h = k;
      b = c('useCometEntryPointPrerendererWithQueryTimeout')(a, b, d, f);
      var m = b[0];
      f = b[1];
      var n = b[2];
      b = b[3];
      var o = i(
        function (b, f, i) {
          m(function (f, j) {
            g(
              c('CometSuspendedDialogImpl.react'),
              {
                dialog: h,
                dialogProps: { otherProps: b, preloadedEntryPoint: f },
                fallback: (f = e) != null ? f : l,
              },
              {
                loadType: 'entrypoint',
                preloadTrigger: d,
                tracePolicy:
                  (f = i) != null
                    ? f
                    : c('tracePolicyFromResource')('comet.dialog', a.root),
              },
              j,
            );
          }, f);
        },
        [g, h, a.root, e, d, m],
      );
      return [o, f, n, b];
    }
    g['default'] = a;
  },
  98,
);
