__d(
  'VideoBlurBackgroundContainer_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoBlurBackgroundContainer_video',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'VideoThumbnail',
          kind: 'LinkedField',
          name: 'preferred_thumbnail',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Image',
              kind: 'LinkedField',
              name: 'image',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'uri',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'image_preview_payload',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
