__d(
  'useStoriesCreateFormSteps',
  [
    'CometRelay',
    'StoriesCreateFormReducer',
    'useStoriesCreateFormEditorRoot',
    'useStoriesCreateFormSteps.graphql',
    'useStoriesCreateFormTypeChooser',
    'useStoriesCreateReducer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = h !== void 0 ? h : (h = b('useStoriesCreateFormSteps.graphql'));
    function a(a) {
      c('useStoriesCreateReducer')(c('StoriesCreateFormReducer'));
      a = d('CometRelay').useFragment(i, a);
      var b = c('useStoriesCreateFormTypeChooser')(a);
      a = c('useStoriesCreateFormEditorRoot')(a);
      return [b, a];
    }
    g['default'] = a;
  },
  98,
);
