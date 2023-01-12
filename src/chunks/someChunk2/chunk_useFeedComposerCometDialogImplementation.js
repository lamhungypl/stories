__d(
  'useFeedComposerCometDialogImplementation',
  ['FeedComposerCometDialog.entrypoint', 'useCometComposerEntryPointDialog'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return c('useCometComposerEntryPointDialog')(
        babelHelpers['extends']({}, a, {
          composerDialogEntryPoint: c('FeedComposerCometDialog.entrypoint'),
        }),
      );
    }
    g['default'] = a;
  },
  98,
);
