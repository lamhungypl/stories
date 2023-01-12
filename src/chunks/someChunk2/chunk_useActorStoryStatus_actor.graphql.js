__d(
  'useActorStoryStatus_actor.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          concreteType: 'Story',
          kind: 'LinkedField',
          name: 'first_story_to_show',
          plural: !1,
          selections: [
            a,
            {
              alias: null,
              args: null,
              concreteType: 'StoryCardSeenState',
              kind: 'LinkedField',
              name: 'story_card_seen_state',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_seen_by_viewer',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: !0, kind: 'LocalArgument', name: 'enabled' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'useActorStoryStatus_actor',
        selections: [
          {
            condition: 'enabled',
            kind: 'Condition',
            passingValue: !0,
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
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'pages_story_bucket_v2',
                    plural: !1,
                    selections: [a, b],
                    storageKey: null,
                  },
                ],
                type: 'Page',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    alias: null,
                    args: [{ kind: 'Literal', name: 'first', value: 1 }],
                    concreteType: 'DirectInboxBroadcastBucketConnection',
                    kind: 'LinkedField',
                    name: 'story_bucket',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'DirectMessageThreadBucket',
                        kind: 'LinkedField',
                        name: 'nodes',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'should_show_close_friend_badge',
                            storageKey: null,
                          },
                          a,
                          b,
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: 'story_bucket(first:1)',
                  },
                ],
                type: 'User',
                abstractKey: null,
              },
            ],
          },
        ],
        type: 'Actor',
        abstractKey: '__isActor',
      };
    })();
    e.exports = a;
  },
  null,
);
