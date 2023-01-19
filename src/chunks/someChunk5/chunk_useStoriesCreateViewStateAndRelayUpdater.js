__d(
  'useStoriesCreateViewStateAndRelayUpdater',
  [
    'StoriesCreateDefaultState',
    'StoriesCreatePreviewUpdater',
    'cr:1326771',
    'react',
    'reduceStoriesCreateViewState',
    'useDebouncedComet',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useReducer,
      j = b.useRef;
    function k(a) {
      a = a.storyID;
      a = babelHelpers['extends'](
        {},
        d('StoriesCreateDefaultState').getStoriesCreateInitialState(),
        { storyID: a },
      );
      d('StoriesCreatePreviewUpdater').updateStoriesPreview(a);
      return a;
    }
    function a() {
      var a = j(new Map()),
        b = c('useDebouncedComet')(
          function (a) {
            d('StoriesCreatePreviewUpdater').updateStoriesPreview(a);
          },
          { wait: 20 },
        ),
        e = h(
          function (d, e) {
            e = c('reduceStoriesCreateViewState')(a, d, e);
            e !== d && b(e);
            return e;
          },
          [b],
        );
      e = i(e, { storyID: 'add_later' }, k);
      var f = e[0];
      e = e[1];
      return [f, e, a];
    }
    g['default'] = a;
  },
  98,
);
