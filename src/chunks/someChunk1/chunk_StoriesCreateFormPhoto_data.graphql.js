__d(
  'StoriesCreateFormPhoto_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'StoriesCreateFormPhoto_data',
      selections: [
        { args: null, kind: 'FragmentSpread', name: 'StoriesCreateCTALink' },
        {
          alias: null,
          args: null,
          concreteType: 'StoriesCreateFormStickerButtonRender',
          kind: 'LinkedField',
          name: 'stories_create_sticker_button_render',
          plural: !1,
          selections: [
            {
              args: null,
              documentName: 'StoriesCreateFormPhoto_data',
              fragmentName: 'StoriesCreateFormStickerButton_data',
              fragmentPropName: 'data',
              kind: 'ModuleImport',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
