__d(
  'StoriesCreateInlineErrorRenderer.react',
  [
    'JSResourceForInteraction',
    'lazyLoadComponent',
    'react',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerInlineErrorRenderer.react',
        ).__setRef('StoriesCreateInlineErrorRenderer.react'),
      );
    function a(a) {
      var b = a.errorMessage;
      a = a.xstyle;
      return b != null && h.jsx(i, { error: b, xstyle: a });
    }
    b = c('withStoriesCreateViewStatePart')(a, function (a) {
      return { errorMessage: a.errorMessage };
    });
    g['default'] = b;
  },
  98,
);
