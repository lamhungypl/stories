__d(
  'handleCometErrorCodeSideEffects',
  [
    'errorCode',
    'fbt',
    'CometDialogLoadingState.react',
    'CometErrorOverlay',
    'CometPlaceholder.react',
    'OutsideExceptionKeyCommandListener.react',
    'ServerHTML.react',
    'deferredLoadComponent',
    'handleCheckpointRedirect',
    'handleErrorCodeBasicSideEffects',
    'react',
    'requireDeferredForDisplay',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')('CometExceptionDialog.react').__setRef(
          'handleCometErrorCodeSideEffects',
        ),
      ),
      l = new Set();
    function m(a) {
      return (
        typeof a === 'object' &&
        a != null &&
        Object.prototype.hasOwnProperty.call(a, '__html')
      );
    }
    function n(a, b, e, f) {
      f === void 0 && (f = null);
      var g = e,
        h = b;
      g = j.jsx(c('ServerHTML.react'), { blob: g });
      m(h) && (h = i._('__JHASH__jgmXxuToE9n__JHASH__'));
      d('CometErrorOverlay').injectComponent(function (b) {
        return j.jsx(c('OutsideExceptionKeyCommandListener.react'), {
          children: j.jsx(c('CometPlaceholder.react'), {
            fallback: j.jsx(c('CometDialogLoadingState.react'), {}),
            children: j.jsx(k, {
              debugInfo: f,
              errorDescription: g,
              errorSummary: h,
              onClose: function () {
                l['delete'](a), b();
              },
              testid: void 0,
            }),
          }),
        });
      });
    }
    function a(a, b, d, e, f, g) {
      e === void 0 && (e = null),
        f === void 0 && (f = !0),
        g === void 0 && (g = null),
        c('handleErrorCodeBasicSideEffects')(a) ||
          (a === 1357053 && e != null
            ? c('handleCheckpointRedirect')(e)
            : l.has(a) || (l.add(a), f && n(a, b, d, g)));
    }
    g['default'] = a;
  },
  98,
);
