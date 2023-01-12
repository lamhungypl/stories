__d(
  'useFBReelsSingleVideoClickLogger_story.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'renderLocation' }],
      kind: 'Fragment',
      metadata: null,
      name: 'useFBReelsSingleVideoClickLogger_story',
      selections: [
        {
          alias: null,
          args: [
            {
              kind: 'Variable',
              name: 'location',
              variableName: 'renderLocation',
            },
          ],
          concreteType: 'ShortFormVideoContext',
          kind: 'LinkedField',
          name: 'short_form_video_context',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'id',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'tracking',
          storageKey: null,
        },
      ],
      type: 'Story',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
