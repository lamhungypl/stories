__d(
  'CometFeedStoryFBReelsAttachment_story.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'renderLocation' }],
      kind: 'Fragment',
      metadata: null,
      name: 'CometFeedStoryFBReelsAttachment_story',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'FBReelsMediaContentContainer_reels',
        },
        {
          kind: 'Defer',
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'FBReelsFeedbackBar_feedback',
            },
          ],
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useFBReelsIsGroupReel_reel',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useFBReelsSingleVideoClickLogger_story',
        },
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
              kind: 'ScalarField',
              name: 'first_frame_thumbnail',
              storageKey: null,
            },
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
      ],
      type: 'Story',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
