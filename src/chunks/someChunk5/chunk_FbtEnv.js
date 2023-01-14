__d(
  'FbtEnv',
  [
    'FbtErrorListenerWWW',
    'FbtHooks',
    'IntlViewerContext',
    'getFbsResult',
    'getFbtResult',
    'getTranslatedInput',
    'promiseDone',
    'requireDeferred',
    'translationOverrideListener',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = c('requireDeferred')('FbtLogging').__setRef('FbtEnv'),
      j = !1;
    function a() {
      if (j) return;
      j = !0;
      (h || (h = b('FbtHooks'))).register({
        errorListener: function (a) {
          return new (c('FbtErrorListenerWWW'))(a);
        },
        getFbsResult: c('getFbsResult'),
        getFbtResult: c('getFbtResult'),
        getTranslatedInput: c('getTranslatedInput'),
        onTranslationOverride: c('translationOverrideListener'),
        getViewerContext: function () {
          return c('IntlViewerContext');
        },
        logImpression: function (a) {
          return c('promiseDone')(
            i.load().then(function (b) {
              return b.logImpression == null ? void 0 : b.logImpression(a);
            }),
          );
        },
      });
    }
    g.setupOnce = a;
  },
  98,
);
