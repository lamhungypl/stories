__d(
  'useStoriesCreateFormEditorRoot.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useStoriesCreateFormEditorRoot',
      selections: [
        {
          kind: 'Defer',
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'StoriesCreateFormSATP',
            },
          ],
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'StoriesCreateFormBodyWrapper_data',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'StoriesCreateFormPhoto_data',
        },
      ],
      type: 'Query',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
