__d(
  'FbtHooksImpl',
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    a = {
      getErrorListener: function (a) {
        return g.errorListener == null ? void 0 : g.errorListener(a);
      },
      logImpression: function (a) {
        g.logImpression == null ? void 0 : g.logImpression(a);
      },
      onTranslationOverride: function (a) {
        g.onTranslationOverride == null ? void 0 : g.onTranslationOverride(a);
      },
      getFbsResult: function (a) {
        return g.getFbsResult(a);
      },
      getFbtResult: function (a) {
        return g.getFbtResult(a);
      },
      getTranslatedInput: function (a) {
        var b;
        return (b =
          g.getTranslatedInput == null ? void 0 : g.getTranslatedInput(a)) !=
          null
          ? b
          : a;
      },
      getViewerContext: function () {
        return g.getViewerContext();
      },
      register: function (a) {
        Object.assign(g, a);
      },
    };
    e.exports = a;
  },
  null,
);