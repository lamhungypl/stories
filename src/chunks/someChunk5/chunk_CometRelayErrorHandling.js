__d(
  'CometRelayErrorHandling',
  ['errorCode', 'SilenceableErrorMessageUtils'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i;
    try {
      i = new WeakMap();
    } catch (a) {
      i = null;
    }
    function a(a) {
      var b;
      (b = i) == null ? void 0 : b.set(a, !0);
    }
    function b(a) {
      var b,
        c = a == null ? void 0 : a.source;
      b =
        (b = c == null ? void 0 : c.errorCode) != null
          ? b
          : c == null
          ? void 0
          : c.code;
      if (b === 1357001) return !1;
      return b === 1675030
        ? !0
        : ((c = i) == null ? void 0 : c.get(a)) === !0 ||
            d('SilenceableErrorMessageUtils').shouldHideErrorMessage(
              d('SilenceableErrorMessageUtils').getMetadataFromError(a),
            );
    }
    g.markErrorAsHandled = a;
    g.shouldSkipErrorSideEffects = b;
  },
  98,
);
