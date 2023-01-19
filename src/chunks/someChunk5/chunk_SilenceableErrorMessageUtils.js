__d(
  'SilenceableErrorMessageUtils',
  ['killswitch'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      return c('killswitch')('COMET_HIDE_SILENT_ERROR_MESSAGE')
        ? !1
        : a.is_silent === !0;
    }
    function i(a) {
      if (typeof a === 'object' && a instanceof Error) {
        var b = a.description,
          c = a.message,
          d = a.source;
        return {
          code: d == null ? void 0 : d.code,
          is_silent: d == null ? void 0 : d.is_silent,
          message: (d = b) != null ? d : c,
          timestamp: Date.now(),
        };
      }
      return {
        is_silent: (b = a.source) == null ? void 0 : b.is_silent,
        message: a.description,
      };
    }
    function a(a, b) {
      var c,
        d = a.description,
        e = a.message,
        f = a.source;
      c =
        (f =
          (c =
            (c =
              f == null
                ? void 0
                : (c = f.exception) == null
                ? void 0
                : c.message) != null
              ? c
              : f == null
              ? void 0
              : f.description) != null
            ? c
            : d) != null
          ? f
          : e;
      h(i(a)) && b(c);
    }
    g.shouldHideErrorMessage = h;
    g.getMetadataFromError = i;
    g.handleSilentError = a;
  },
  98,
);
