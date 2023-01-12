__d(
  'CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion',
        },
        {
          alias: null,
          args: null,
          concreteType: 'StoryAttachment',
          kind: 'LinkedField',
          name: 'attachment',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'style_list',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'style_infos',
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: '__typename',
                  storageKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'Story',
                      kind: 'LinkedField',
                      name: 'fb_shorts_story',
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: 'FragmentSpread',
                          name: 'CometFeedStoryFBReelsAttachment_story',
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'enable_horizontal_ufi',
                      storageKey: null,
                    },
                  ],
                  type: 'FBShortsShareAttachmentStyleInfo',
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'StoryAttachmentFBReelsStyleRenderer',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
