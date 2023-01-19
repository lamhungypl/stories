__d(
  'ReactFiberErrorDialog',
  ['ErrorNormalizeUtils', 'ErrorPubSub', 'LogHistory', 'getErrorSafe'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    function a(a) {
      var c = a.componentStack,
        d = a.errorBoundary,
        e = b('getErrorSafe')(a.error);
      e.componentStack = a.componentStack;
      e.loggingSource = 'REACT_FIBER';
      if (d != null && d.suppressReactDefaultErrorLogging) return !1;
      a = b('LogHistory').getInstance('react_fiber_error_logger');
      a.error(
        'capturedError',
        JSON.stringify({
          componentStack: c,
          error: { name: e.name, message: e.message, stack: e.stack },
        }),
      );
      d = b('ErrorNormalizeUtils').normalizeError(e);
      (g || (g = b('ErrorPubSub'))).reportNormalizedError(d);
      return !1;
    }
    e.exports = { showErrorDialog: a };
  },
  null,
);
