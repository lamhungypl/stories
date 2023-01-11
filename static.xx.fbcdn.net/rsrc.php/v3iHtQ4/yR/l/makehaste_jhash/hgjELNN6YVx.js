/*FB_PKG_DELIM*/

__d(
  'SetHovercardInteractionPreferenceMutation_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '8371614642855977';
  },
  null,
);
__d(
  'SetHovercardInteractionPreferenceMutation.graphql',
  ['SetHovercardInteractionPreferenceMutation_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'input' }],
        c = [
          {
            alias: null,
            args: [{ kind: 'Variable', name: 'data', variableName: 'input' }],
            concreteType:
              'XFBSetHovercardInteractionPreferenceHovercardSettingsResponsePayload',
            kind: 'LinkedField',
            name: 'xfb_set_hovercard_interaction_preference_hovercard_settings',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'client_mutation_id',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'SetHovercardInteractionPreferenceMutation',
          selections: c,
          type: 'Mutation',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'SetHovercardInteractionPreferenceMutation',
          selections: c,
        },
        params: {
          id: b(
            'SetHovercardInteractionPreferenceMutation_facebookRelayOperation',
          ),
          metadata: {},
          name: 'SetHovercardInteractionPreferenceMutation',
          operationKind: 'mutation',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'LiveVideoCometNuxForCVCQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5349533685085225';
  },
  null,
);
__d(
  'LiveVideoCometNuxForCVCQuery.graphql',
  ['LiveVideoCometNuxForCVCQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          { defaultValue: null, kind: 'LocalArgument', name: 'nuxID' },
          { defaultValue: null, kind: 'LocalArgument', name: 'videoID' },
        ],
        c = [{ kind: 'Variable', name: 'nux_id', variableName: 'nuxID' }],
        d = {
          kind: 'InlineFragment',
          selections: [
            {
              args: null,
              documentName: 'LiveVideoCometNuxForCVCQuery',
              fragmentName: 'LiveVideoCometNuxForCVCInternal_nux',
              fragmentPropName: 'nux',
              kind: 'ModuleImport',
            },
          ],
          type: 'DefaultNUX',
          abstractKey: null,
        },
        e = [{ kind: 'Variable', name: 'id', variableName: 'videoID' }],
        f = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'LiveVideoCometNuxForCVCQuery',
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: [d],
              storageKey: null,
            },
            {
              alias: null,
              args: e,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'LiveVideoCometNuxForCVCInternal_video',
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'LiveVideoCometNuxForCVCQuery',
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: '__typename',
                  storageKey: null,
                },
                d,
                f,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: e,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_premiere',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_live_audio_room_v2_broadcast',
                  storageKey: null,
                },
                f,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b('LiveVideoCometNuxForCVCQuery_facebookRelayOperation'),
          metadata: {},
          name: 'LiveVideoCometNuxForCVCQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometBatchNotificationsStateChangeSubscription_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5374406885991869';
  },
  null,
);
__d(
  'CometBatchNotificationsStateChangeSubscription.graphql',
  ['CometBatchNotificationsStateChangeSubscription_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'environment',
        },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'input' },
        d = [
          {
            alias: null,
            args: [{ kind: 'Variable', name: 'data', variableName: 'input' }],
            concreteType:
              'BatchNotificationStateChangeSubscribeResponsePayload',
            kind: 'LinkedField',
            name: 'batch_notification_state_change_subscribe',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'Notification',
                kind: 'LinkedField',
                name: 'aggregated_notifications',
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'id',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'seen_state',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: [
                      {
                        kind: 'Variable',
                        name: 'environment',
                        variableName: 'environment',
                      },
                    ],
                    kind: 'ScalarField',
                    name: 'notifications_unseen_count',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'last_update_timestamp',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: 'Fragment',
          metadata: null,
          name: 'CometBatchNotificationsStateChangeSubscription',
          selections: d,
          type: 'Subscription',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [c, a],
          kind: 'Operation',
          name: 'CometBatchNotificationsStateChangeSubscription',
          selections: d,
        },
        params: {
          id: b(
            'CometBatchNotificationsStateChangeSubscription_facebookRelayOperation',
          ),
          metadata: {
            subscriptionName: 'batch_notification_state_change_subscribe',
          },
          name: 'CometBatchNotificationsStateChangeSubscription',
          operationKind: 'subscription',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsStateChangeSubscription_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4984136874957718';
  },
  null,
);
__d(
  'CometNotificationsStateChangeSubscription.graphql',
  ['CometNotificationsStateChangeSubscription_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'environment',
        },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'input' },
        d = [
          {
            alias: null,
            args: [{ kind: 'Variable', name: 'data', variableName: 'input' }],
            concreteType: 'NotificationStateChangeSubscribeResponsePayload',
            kind: 'LinkedField',
            name: 'notification_state_change_subscribe',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'Notification',
                kind: 'LinkedField',
                name: 'notification',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'id',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'seen_state',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: [
                      {
                        kind: 'Variable',
                        name: 'environment',
                        variableName: 'environment',
                      },
                    ],
                    kind: 'ScalarField',
                    name: 'notifications_unseen_count',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'last_update_timestamp',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: 'Fragment',
          metadata: null,
          name: 'CometNotificationsStateChangeSubscription',
          selections: d,
          type: 'Subscription',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [c, a],
          kind: 'Operation',
          name: 'CometNotificationsStateChangeSubscription',
          selections: d,
        },
        params: {
          id: b(
            'CometNotificationsStateChangeSubscription_facebookRelayOperation',
          ),
          metadata: { subscriptionName: 'notification_state_change_subscribe' },
          name: 'CometNotificationsStateChangeSubscription',
          operationKind: 'subscription',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'PresenceStatusProviderSubscriptionComponentQuery.graphql',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          { defaultValue: null, kind: 'LocalArgument', name: 'count' },
          { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        ],
        b = [{ kind: 'Variable', name: 'count', variableName: 'count' }],
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'status',
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'buddy_id',
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'PresenceStatusProviderSubscriptionComponentQuery',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: b,
                  concreteType: 'ChatSidebarRankedContact',
                  kind: 'LinkedField',
                  name: 'chat_sidebar_contact_rankings',
                  plural: !0,
                  selections: [
                    {
                      kind: 'InlineDataFragmentSpread',
                      name: 'PresenceStatusProviderSubscription_rankings',
                      selections: [
                        c,
                        d,
                        {
                          alias: null,
                          args: null,
                          concreteType: 'User',
                          kind: 'LinkedField',
                          name: 'user',
                          plural: !1,
                          selections: [
                            e,
                            {
                              args: [
                                {
                                  kind: 'Literal',
                                  name: 'enableMsys',
                                  value: !1,
                                },
                              ],
                              kind: 'FragmentSpread',
                              name: 'MWChatContact_profile',
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      args: null,
                      argumentDefinitions: [],
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'PresenceStatusProviderSubscriptionComponentQuery',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: b,
                  concreteType: 'ChatSidebarRankedContact',
                  kind: 'LinkedField',
                  name: 'chat_sidebar_contact_rankings',
                  plural: !0,
                  selections: [
                    c,
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: 'User',
                      kind: 'LinkedField',
                      name: 'user',
                      plural: !1,
                      selections: [
                        e,
                        {
                          kind: 'InlineFragment',
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'name',
                              storageKey: null,
                            },
                            {
                              kind: 'InlineFragment',
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: 'Literal',
                                      name: 'first',
                                      value: 1,
                                    },
                                  ],
                                  concreteType:
                                    'DirectInboxBroadcastBucketConnection',
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
                                        e,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: 'Story',
                                          kind: 'LinkedField',
                                          name: 'first_story_to_show',
                                          plural: !1,
                                          selections: [
                                            e,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                'StoryCardSeenState',
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
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: 'story_bucket(first:1)',
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: 'Literal',
                                      name: 'height',
                                      value: 36,
                                    },
                                    {
                                      kind: 'Variable',
                                      name: 'scale',
                                      variableName: 'scale',
                                    },
                                    {
                                      kind: 'Literal',
                                      name: 'width',
                                      value: 36,
                                    },
                                  ],
                                  concreteType: 'Image',
                                  kind: 'LinkedField',
                                  name: 'profile_picture',
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
                                  kind: 'ClientExtension',
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'availability',
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'last_active_time',
                                      storageKey: null,
                                    },
                                  ],
                                },
                              ],
                              type: 'User',
                              abstractKey: null,
                            },
                          ],
                          type: 'Profile',
                          abstractKey: '__isProfile',
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: '6054132501277619',
          metadata: {},
          name: 'PresenceStatusProviderSubscriptionComponentQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    b('relay-runtime').PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null,
);
__d(
  'PresenceStatusProviderSubscription_ContactProfilesQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '7188178894556645';
  },
  null,
);
__d(
  'PresenceStatusProviderSubscription_ContactProfilesQuery.graphql',
  [
    'PresenceStatusProviderSubscription_ContactProfilesQuery_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          { defaultValue: null, kind: 'LocalArgument', name: 'ids' },
          { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        ],
        c = [{ kind: 'Variable', name: 'ids', variableName: 'ids' }],
        d = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        f = {
          alias: null,
          args: [
            { kind: 'Literal', name: 'height', value: 36 },
            { kind: 'Variable', name: 'scale', variableName: 'scale' },
            { kind: 'Literal', name: 'width', value: 36 },
          ],
          concreteType: 'Image',
          kind: 'LinkedField',
          name: 'profile_picture',
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
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'PresenceStatusProviderSubscription_ContactProfilesQuery',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: c,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'chat_sidebar_contact_nodes',
                  plural: !0,
                  selections: [d, e, f],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'PresenceStatusProviderSubscription_ContactProfilesQuery',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: c,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'chat_sidebar_contact_nodes',
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                    d,
                    { kind: 'TypeDiscriminator', abstractKey: '__isProfile' },
                    e,
                    f,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b(
            'PresenceStatusProviderSubscription_ContactProfilesQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'PresenceStatusProviderSubscription_ContactProfilesQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5081675628568293';
  },
  null,
);
__d(
  'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql',
  [
    'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'chat_visibility',
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'has_converted_to_view_side_settings',
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: 'PresenceViewerBasedSettings',
                  kind: 'LinkedField',
                  name: 'presence_view_side_settings',
                  plural: !1,
                  selections: [c],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [],
          kind: 'Operation',
          name: 'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: 'PresenceViewerBasedSettings',
                  kind: 'LinkedField',
                  name: 'presence_view_side_settings',
                  plural: !1,
                  selections: [
                    c,
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
        },
        params: {
          id: b(
            'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'PresenceStatusProviderSubscription_rankings.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'InlineDataFragment',
      name: 'PresenceStatusProviderSubscription_rankings',
    };
    e.exports = a;
  },
  null,
);
__d(
  'RTWebCallBlockSettingHooksQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5713943828634945';
  },
  null,
);
__d(
  'RTWebCallBlockSettingHooksQuery.graphql',
  ['RTWebCallBlockSettingHooksQuery_facebookRelayOperation', 'relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          concreteType: 'Viewer',
          kind: 'LinkedField',
          name: 'viewer',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'call_blocked_until',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'RTWebCallBlockSettingHooksQuery',
          selections: a,
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [],
          kind: 'Operation',
          name: 'RTWebCallBlockSettingHooksQuery',
          selections: a,
        },
        params: {
          id: b('RTWebCallBlockSettingHooksQuery_facebookRelayOperation'),
          metadata: {},
          name: 'RTWebCallBlockSettingHooksQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    b('relay-runtime').PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null,
);
__d(
  'RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters',
  ['RTWebCometRoomIncomingCallDialog_DisclaimerQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'RTWebCometRoomIncomingCallDialog_DisclaimerQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'RTWebCometRoomIncomingCallDialog_DisclaimerQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'RTWebIncomingUnsupportedE2EEDialogNameQuery$Parameters',
  ['RTWebIncomingUnsupportedE2EEDialogNameQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'RTWebIncomingUnsupportedE2EEDialogNameQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'RTWebIncomingUnsupportedE2EEDialogNameQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerWithWatchAndScrollChainingWrapper_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerWithWatchAndScrollChainingWrapper_video',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'VideoPlayerWithWatchAndScrollChaining_video',
        },
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerWithWatchAndScrollChaining_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerWithWatchAndScrollChaining_video',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'CometWatchAndScrollChaining_video',
        },
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerWithWatchAndScrollWarningScreen_video.graphql',
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
      };
      return {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'VideoPlayerWithWatchAndScrollWarningScreen_video',
        selections: [
          {
            alias: null,
            args: [
              { kind: 'Literal', name: 'framework', value: 'WARNING_SCREENS' },
              { kind: 'Literal', name: 'location', value: 'video_channel' },
            ],
            concreteType: 'CIXScreen',
            kind: 'LinkedField',
            name: 'cix_screen',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: 'LinkedField',
                name: 'view_model',
                plural: !1,
                selections: [
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        args: null,
                        documentName:
                          'VideoPlayerWithWatchAndScrollWarningScreen_video',
                        fragmentName: 'CometWarningScreenOverlay_data',
                        fragmentPropName: 'data',
                        kind: 'ModuleImport',
                      },
                    ],
                    type: 'OverlayWarningScreenViewModel',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey:
              'cix_screen(framework:"WARNING_SCREENS",location:"video_channel")',
          },
          {
            alias: null,
            args: null,
            concreteType: 'Story',
            kind: 'LinkedField',
            name: 'container_story',
            plural: !1,
            selections: [a],
            storageKey: null,
          },
          a,
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
            ],
            storageKey: null,
          },
        ],
        type: 'Video',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerCaptionsControl_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'captions_url',
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'VideoPlayerCaptionsControl_video',
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'default_video_caption_locale',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'VideoCaptionLocale',
            kind: 'LinkedField',
            name: 'video_available_captions_locales',
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'localized_creation_method',
                storageKey: null,
              },
              a,
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'locale',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'localized_language',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'localized_country',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'Video',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerCaptionsSettingMutation_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4806273429427493';
  },
  null,
);
__d(
  'VideoPlayerCaptionsSettingMutation.graphql',
  ['VideoPlayerCaptionsSettingMutation_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'input' }],
        c = [
          {
            alias: null,
            args: [{ kind: 'Variable', name: 'data', variableName: 'input' }],
            concreteType: 'VideoPlayerCaptionsSettingResponsePayload',
            kind: 'LinkedField',
            name: 'video_player_captions_setting',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'success',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'VideoPlayerCaptionsSettingMutation',
          selections: c,
          type: 'Mutation',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'VideoPlayerCaptionsSettingMutation',
          selections: c,
        },
        params: {
          id: b('VideoPlayerCaptionsSettingMutation_facebookRelayOperation'),
          metadata: {},
          name: 'VideoPlayerCaptionsSettingMutation',
          operationKind: 'mutation',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerDefaultControlsImplLive_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerDefaultControlsImplLive_video',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'VideoPlayerLiveVideoControls_video',
        },
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerDefaultControlsImplNotLive_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerDefaultControlsImplNotLive_video',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'VideoPlayerScrubberPreview_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'VideoPlayerWatchAndScrollControl_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'VideoPlayerCaptionsControl_video',
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: 'Video',
          kind: 'LinkedField',
          name: 'if_viewer_can_use_clipping',
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                'VideoPlayerDefaultControlsImplNotLive_video_if_viewer_can_use_clipping',
              fragmentName: 'VideoPlayerClipVideoControl_video',
              fragmentPropName: 'video',
              kind: 'ModuleImport',
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
__d(
  'VideoPlayerLiveVideoControls_video.graphql',
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
      };
      return {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'VideoPlayerLiveVideoControls_video',
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'is_clipping_enabled',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'live_rewind_enabled',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'owner',
            plural: !1,
            selections: [a],
            storageKey: null,
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'VideoPlayerWatchAndScrollControl_video',
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'LiveVideoLatencyMenuContextProvider_video',
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'VideoPlayerCaptionsControl_video',
          },
          {
            alias: null,
            args: null,
            concreteType: 'Video',
            kind: 'LinkedField',
            name: 'if_viewer_can_see_community_moderation_tools',
            plural: !1,
            selections: [
              {
                args: null,
                documentName: 'VideoPlayerLiveVideoControls_video',
                fragmentName: 'VideoPlayerModeratorControl_video',
                fragmentPropName: 'video',
                kind: 'ModuleImport',
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'Video',
            kind: 'LinkedField',
            name: 'if_viewer_can_use_live_rewind',
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  'VideoPlayerLiveVideoControls_video_if_viewer_can_use_live_rewind',
                fragmentName: 'VideoPlayerLiveRewindControlsGroup_video',
                fragmentPropName: 'video',
                kind: 'ModuleImport',
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'Video',
            kind: 'LinkedField',
            name: 'if_viewer_can_use_clipping',
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  'VideoPlayerLiveVideoControls_video_if_viewer_can_use_clipping',
                fragmentName: 'VideoPlayerClipVideoControl_video',
                fragmentPropName: 'video',
                kind: 'ModuleImport',
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'Video',
            kind: 'LinkedField',
            name: 'if_viewer_can_see_costreaming_tools',
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  'VideoPlayerLiveVideoControls_video_if_viewer_can_see_costreaming_tools',
                fragmentName: 'VideoPlayerCostreamingControl_video',
                fragmentPropName: 'video',
                kind: 'ModuleImport',
              },
            ],
            storageKey: null,
          },
        ],
        type: 'Video',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerSkipControl_video.graphql',
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
      };
      return {
        argumentDefinitions: [
          { defaultValue: 'WNS', kind: 'LocalArgument', name: 'caller' },
          {
            defaultValue: 'WNS',
            kind: 'LocalArgument',
            name: 'channelEntryPoint',
          },
          { defaultValue: 1, kind: 'LocalArgument', name: 'count' },
          { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
          { defaultValue: null, kind: 'LocalArgument', name: 'seedVideoID' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'VideoPlayerSkipControl_video',
        selections: [
          a,
          {
            alias: null,
            args: [
              {
                kind: 'Variable',
                name: 'entry_point',
                variableName: 'channelEntryPoint',
              },
            ],
            concreteType: null,
            kind: 'LinkedField',
            name: 'video_channel',
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'after', variableName: 'cursor' },
                  { kind: 'Variable', name: 'caller', variableName: 'caller' },
                  {
                    kind: 'Variable',
                    name: 'exclude_video',
                    variableName: 'seedVideoID',
                  },
                  { kind: 'Variable', name: 'first', variableName: 'count' },
                ],
                concreteType: 'VideoChannelFeedConnection',
                kind: 'LinkedField',
                name: 'video_channel_feed',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'VideoChannelFeedEdge',
                    kind: 'LinkedField',
                    name: 'edges',
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'cursor',
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'node',
                        plural: !1,
                        selections: [
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'StoryAttachment',
                                kind: 'LinkedField',
                                name: 'attachments',
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'media',
                                    plural: !1,
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
                                          a,
                                          {
                                            args: null,
                                            kind: 'FragmentSpread',
                                            name: 'CometWatchAndScrollUpNextCard_video',
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: 'LinkedField',
                                            name: 'owner',
                                            plural: !1,
                                            selections: [a],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'url',
                                            storageKey: null,
                                          },
                                        ],
                                        type: 'Video',
                                        abstractKey: null,
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
                                name: 'click_tracking_linkshim_cb',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'encrypted_click_tracking',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'encrypted_tracking',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'viewability_config',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'CometClientViewConfig',
                                kind: 'LinkedField',
                                name: 'client_view_config',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'can_delay_log_impression',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'use_banzai_signal_imp',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'use_banzai_vital_imp',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            type: 'Story',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'Video',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerWatchAndScrollControl_video.graphql',
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
      };
      return {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'VideoPlayerWatchAndScrollControl_video',
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'playable_duration_in_ms',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'owner',
            plural: !1,
            selections: [
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'has_professional_features_for_watch',
                    storageKey: null,
                  },
                ],
                type: 'VideoOwner',
                abstractKey: '__isVideoOwner',
              },
              a,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'is_huddle',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'url',
            storageKey: null,
          },
        ],
        type: 'Video',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'useVideoPlayerWatchAndScrollControlNUXQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4901851916588521';
  },
  null,
);
__d(
  'useVideoPlayerWatchAndScrollControlNUXQuery.graphql',
  ['useVideoPlayerWatchAndScrollControlNUXQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ kind: 'Literal', name: 'nux_id', value: 9347 }],
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'should_show',
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useVideoPlayerWatchAndScrollControlNUXQuery',
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: [c],
              storageKey: 'nux(nux_id:9347)',
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [],
          kind: 'Operation',
          name: 'useVideoPlayerWatchAndScrollControlNUXQuery',
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: '__typename',
                  storageKey: null,
                },
                c,
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'id',
                  storageKey: null,
                },
              ],
              storageKey: 'nux(nux_id:9347)',
            },
          ],
        },
        params: {
          id: b(
            'useVideoPlayerWatchAndScrollControlNUXQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'useVideoPlayerWatchAndScrollControlNUXQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometWatchAndScrollChainingQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5586890634727556';
  },
  null,
);
__d(
  'CometWatchAndScrollChainingQuery.graphql',
  ['CometWatchAndScrollChainingQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          { defaultValue: null, kind: 'LocalArgument', name: 'caller' },
          { defaultValue: null, kind: 'LocalArgument', name: 'chainingCursor' },
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'channelEntryPoint',
          },
          { defaultValue: null, kind: 'LocalArgument', name: 'count' },
          { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
          { defaultValue: null, kind: 'LocalArgument', name: 'seedVideoID' },
        ],
        c = [{ kind: 'Variable', name: 'id', variableName: 'seedVideoID' }],
        d = [
          {
            kind: 'Variable',
            name: 'entry_point',
            variableName: 'channelEntryPoint',
          },
        ],
        e = [
          { kind: 'Variable', name: 'after', variableName: 'chainingCursor' },
          { kind: 'Variable', name: 'caller', variableName: 'caller' },
          {
            kind: 'Variable',
            name: 'exclude_video',
            variableName: 'seedVideoID',
          },
          { kind: 'Variable', name: 'first', variableName: 'count' },
        ],
        f = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'cursor',
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        i = [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'uri',
            storageKey: null,
          },
        ],
        j = {
          alias: null,
          args: [
            { kind: 'Literal', name: 'height', value: 202 },
            { kind: 'Literal', name: 'sizing', value: 'cover-fill-cropped' },
            { kind: 'Literal', name: 'width', value: 360 },
          ],
          concreteType: 'Image',
          kind: 'LinkedField',
          name: 'image',
          plural: !1,
          selections: i,
          storageKey: 'image(height:202,sizing:"cover-fill-cropped",width:360)',
        },
        k = [h],
        l = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'url',
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'click_tracking_linkshim_cb',
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'encrypted_click_tracking',
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'encrypted_tracking',
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'viewability_config',
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          concreteType: 'CometClientViewConfig',
          kind: 'LinkedField',
          name: 'client_view_config',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'can_delay_log_impression',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'use_banzai_signal_imp',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'use_banzai_vital_imp',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        r = {
          kind: 'InlineFragment',
          selections: k,
          type: 'Node',
          abstractKey: '__isNode',
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'CometWatchAndScrollChainingQuery',
          selections: [
            {
              alias: null,
              args: c,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: d,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'video_channel',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: e,
                      concreteType: 'VideoChannelFeedConnection',
                      kind: 'LinkedField',
                      name: 'video_channel_feed',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'VideoChannelFeedEdge',
                          kind: 'LinkedField',
                          name: 'edges',
                          plural: !0,
                          selections: [
                            f,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'node',
                              plural: !1,
                              selections: [
                                {
                                  kind: 'InlineFragment',
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'StoryAttachment',
                                      kind: 'LinkedField',
                                      name: 'attachments',
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: 'LinkedField',
                                          name: 'media',
                                          plural: !1,
                                          selections: [
                                            g,
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  kind: 'FragmentSpread',
                                                  name: 'CometWatchAndScrollContextSection_video',
                                                },
                                                h,
                                                j,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    'MusicVideoMetadata',
                                                  kind: 'LinkedField',
                                                  name: 'pmv_metadata',
                                                  plural: !1,
                                                  selections: [g],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: 'LinkedField',
                                                  name: 'owner',
                                                  plural: !1,
                                                  selections: k,
                                                  storageKey: null,
                                                },
                                                l,
                                              ],
                                              type: 'Video',
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    m,
                                    n,
                                    o,
                                    p,
                                    q,
                                  ],
                                  type: 'Story',
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'CometWatchAndScrollChainingQuery',
          selections: [
            {
              alias: null,
              args: c,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: d,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'video_channel',
                  plural: !1,
                  selections: [
                    g,
                    {
                      alias: null,
                      args: e,
                      concreteType: 'VideoChannelFeedConnection',
                      kind: 'LinkedField',
                      name: 'video_channel_feed',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'VideoChannelFeedEdge',
                          kind: 'LinkedField',
                          name: 'edges',
                          plural: !0,
                          selections: [
                            f,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'node',
                              plural: !1,
                              selections: [
                                g,
                                {
                                  kind: 'InlineFragment',
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'StoryAttachment',
                                      kind: 'LinkedField',
                                      name: 'attachments',
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: 'LinkedField',
                                          name: 'media',
                                          plural: !1,
                                          selections: [
                                            g,
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: 'ScalarField',
                                                  name: 'title_with_fallback',
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: 'LinkedField',
                                                  name: 'owner',
                                                  plural: !1,
                                                  selections: [
                                                    g,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: 'ScalarField',
                                                      name: 'name',
                                                      storageKey: null,
                                                    },
                                                    h,
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: 'Literal',
                                                          name: 'height',
                                                          value: 32,
                                                        },
                                                        {
                                                          kind: 'Variable',
                                                          name: 'scale',
                                                          variableName: 'scale',
                                                        },
                                                        {
                                                          kind: 'Literal',
                                                          name: 'width',
                                                          value: 32,
                                                        },
                                                      ],
                                                      concreteType: 'Image',
                                                      kind: 'LinkedField',
                                                      name: 'profile_picture',
                                                      plural: !1,
                                                      selections: i,
                                                      storageKey: null,
                                                    },
                                                    {
                                                      kind: 'InlineFragment',
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: 'ScalarField',
                                                          name: 'has_professional_features_for_watch',
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      type: 'VideoOwner',
                                                      abstractKey:
                                                        '__isVideoOwner',
                                                    },
                                                    {
                                                      kind: 'InlineFragment',
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: [
                                                            {
                                                              kind: 'Literal',
                                                              name: 'site',
                                                              value: 'www',
                                                            },
                                                          ],
                                                          kind: 'ScalarField',
                                                          name: 'url',
                                                          storageKey:
                                                            'url(site:"www")',
                                                        },
                                                      ],
                                                      type: 'User',
                                                      abstractKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                h,
                                                j,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    'MusicVideoMetadata',
                                                  kind: 'LinkedField',
                                                  name: 'pmv_metadata',
                                                  plural: !1,
                                                  selections: [g, h],
                                                  storageKey: null,
                                                },
                                                l,
                                              ],
                                              type: 'Video',
                                              abstractKey: null,
                                            },
                                            r,
                                            {
                                              kind: 'InlineFragment',
                                              selections: k,
                                              type: 'DynamicFeedAdAttachmentMedia',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: k,
                                              type: 'GenericAttachmentMedia',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: k,
                                              type: 'MontageImage',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: k,
                                              type: 'MontageVideo',
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    m,
                                    n,
                                    o,
                                    p,
                                    q,
                                  ],
                                  type: 'Story',
                                  abstractKey: null,
                                },
                                r,
                                {
                                  kind: 'InlineFragment',
                                  selections: k,
                                  type: 'FBShortsMidCardFeedUnit',
                                  abstractKey: null,
                                },
                                {
                                  kind: 'InlineFragment',
                                  selections: k,
                                  type: 'XFBDummyReelsInWatchIFU',
                                  abstractKey: null,
                                },
                                {
                                  kind: 'InlineFragment',
                                  selections: k,
                                  type: 'XFBSFTFeedUnit',
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    h,
                  ],
                  storageKey: null,
                },
                h,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b('CometWatchAndScrollChainingQuery_facebookRelayOperation'),
          metadata: {},
          name: 'CometWatchAndScrollChainingQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometWatchAndScrollChaining_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometWatchAndScrollChaining_video',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'CometWatchAndScrollFallbackCTAScreen_video',
        },
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometWatchAndScrollCloseButton_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometWatchAndScrollCloseButton_video',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'owner',
          plural: !1,
          selections: [
            {
              kind: 'InlineFragment',
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'has_professional_features_for_watch',
                  storageKey: null,
                },
              ],
              type: 'VideoOwner',
              abstractKey: '__isVideoOwner',
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
__d(
  'CometWatchAndScrollContainer_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometWatchAndScrollContainer_video',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoOriginalDimensionsRelay_video',
        },
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometWatchAndScrollContextSection_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'scale' }],
      kind: 'Fragment',
      metadata: null,
      name: 'CometWatchAndScrollContextSection_video',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'title_with_fallback',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'owner',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'name',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'id',
              storageKey: null,
            },
            {
              alias: null,
              args: [
                { kind: 'Literal', name: 'height', value: 32 },
                { kind: 'Variable', name: 'scale', variableName: 'scale' },
                { kind: 'Literal', name: 'width', value: 32 },
              ],
              concreteType: 'Image',
              kind: 'LinkedField',
              name: 'profile_picture',
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
              kind: 'InlineFragment',
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'has_professional_features_for_watch',
                  storageKey: null,
                },
              ],
              type: 'VideoOwner',
              abstractKey: '__isVideoOwner',
            },
            {
              kind: 'InlineFragment',
              selections: [
                {
                  alias: null,
                  args: [{ kind: 'Literal', name: 'site', value: 'www' }],
                  kind: 'ScalarField',
                  name: 'url',
                  storageKey: 'url(site:"www")',
                },
              ],
              type: 'User',
              abstractKey: null,
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
__d(
  'CometWatchAndScrollFallbackCTAScreen_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometWatchAndScrollFallbackCTAScreen_video',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'VideoPlayerReshareButton_video',
        },
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometWatchAndScrollTopBar_video.graphql',
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
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'uri_token',
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: 'RootArgument', name: 'scale' }],
        kind: 'Fragment',
        metadata: null,
        name: 'CometWatchAndScrollTopBar_video',
        selections: [
          a,
          b,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'title_with_fallback',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'url',
            storageKey: null,
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'CometWatchAndScrollCloseButton_video',
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'owner',
            plural: !1,
            selections: [
              b,
              a,
              {
                alias: null,
                args: [
                  { kind: 'Literal', name: 'height', value: 32 },
                  { kind: 'Variable', name: 'scale', variableName: 'scale' },
                  { kind: 'Literal', name: 'width', value: 32 },
                ],
                concreteType: 'Image',
                kind: 'LinkedField',
                name: 'profile_picture',
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
                kind: 'InlineFragment',
                selections: [
                  c,
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'page_vanity_url',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'vanity',
                    storageKey: null,
                  },
                ],
                type: 'Page',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [
                  c,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: [{ kind: 'Literal', name: 'site', value: 'www' }],
                        kind: 'ScalarField',
                        name: 'url',
                        storageKey: 'url(site:"www")',
                      },
                    ],
                    type: 'User',
                    abstractKey: null,
                  },
                ],
                type: 'VideoOwner',
                abstractKey: '__isVideoOwner',
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'Story',
            kind: 'LinkedField',
            name: 'creation_story',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'identifier_token',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'debug_info',
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
            storageKey: null,
          },
        ],
        type: 'Video',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometWatchAndScrollUpNextCard_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometWatchAndScrollUpNextCard_video',
      selections: [
        {
          alias: null,
          args: [
            { kind: 'Literal', name: 'height', value: 202 },
            { kind: 'Literal', name: 'sizing', value: 'cover-fill-cropped' },
            { kind: 'Literal', name: 'width', value: 360 },
          ],
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
          storageKey: 'image(height:202,sizing:"cover-fill-cropped",width:360)',
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'title_with_fallback',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'owner',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'name',
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
__d(
  'CometWatchAndScrollVideoQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5713148715472068';
  },
  null,
);
__d(
  'CometWatchAndScrollVideoQuery.graphql',
  ['CometWatchAndScrollVideoQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'chainingCursor',
        },
        c = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'chainingSeedVideoID',
        },
        d = { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        e = { defaultValue: null, kind: 'LocalArgument', name: 'videoID' },
        f = [{ kind: 'Variable', name: 'id', variableName: 'videoID' }],
        g = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'url',
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'has_professional_features_for_watch',
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'is_gaming_video',
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'is_soundbites_video',
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          concreteType: 'PayToAccessPaywall',
          kind: 'LinkedField',
          name: 'pay_to_access_paywall',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'should_show_paywall',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        m = [
          { kind: 'Variable', name: 'id', variableName: 'chainingSeedVideoID' },
        ],
        n = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'uri_token',
          storageKey: null,
        },
        p = [{ kind: 'Literal', name: 'site', value: 'www' }],
        q = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        r = [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'uri',
            storageKey: null,
          },
        ],
        s = [g],
        t = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'title_with_fallback',
          storageKey: null,
        },
        u = {
          kind: 'InlineFragment',
          selections: s,
          type: 'Node',
          abstractKey: '__isNode',
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e],
          kind: 'Fragment',
          metadata: null,
          name: 'CometWatchAndScrollVideoQuery',
          selections: [
            {
              alias: null,
              args: f,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                g,
                h,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'owner',
                  plural: !1,
                  selections: [
                    {
                      kind: 'InlineFragment',
                      selections: [i],
                      type: 'VideoOwner',
                      abstractKey: '__isVideoOwner',
                    },
                  ],
                  storageKey: null,
                },
                j,
                k,
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'CometWatchAndScrollContainer_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'VideoPlayerRelay_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'VideoPlayerWithLiveVideoEndscreen_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'VideoPlayerWithLiveVideoIndicator_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'CometWatchAndScrollTopBar_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'CometWatchAndScrollCloseButton_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'VideoPlayerWithWatchAndScrollWarningScreen_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'VideoPlayerWithAudioOverlay_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'VideoPlayerWithAudioBackground_video',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'VideoPlayerWithWatchAndScrollChainingWrapper_video',
                },
                l,
              ],
              storageKey: null,
            },
            {
              alias: 'chainingSeedVideo',
              args: m,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                {
                  kind: 'Defer',
                  selections: [
                    {
                      args: [
                        {
                          kind: 'Variable',
                          name: 'cursor',
                          variableName: 'chainingCursor',
                        },
                        {
                          kind: 'Variable',
                          name: 'seedVideoID',
                          variableName: 'chainingSeedVideoID',
                        },
                      ],
                      kind: 'FragmentSpread',
                      name: 'VideoPlayerSkipControl_video',
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [a, c, e, d],
          kind: 'Operation',
          name: 'CometWatchAndScrollVideoQuery',
          selections: [
            {
              alias: null,
              args: f,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                g,
                h,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'owner',
                  plural: !1,
                  selections: [
                    n,
                    {
                      kind: 'InlineFragment',
                      selections: [
                        i,
                        o,
                        {
                          kind: 'InlineFragment',
                          selections: [
                            {
                              alias: null,
                              args: p,
                              kind: 'ScalarField',
                              name: 'url',
                              storageKey: 'url(site:"www")',
                            },
                          ],
                          type: 'User',
                          abstractKey: null,
                        },
                      ],
                      type: 'VideoOwner',
                      abstractKey: '__isVideoOwner',
                    },
                    g,
                    q,
                    {
                      alias: null,
                      args: [
                        { kind: 'Literal', name: 'height', value: 32 },
                        {
                          kind: 'Variable',
                          name: 'scale',
                          variableName: 'scale',
                        },
                        { kind: 'Literal', name: 'width', value: 32 },
                      ],
                      concreteType: 'Image',
                      kind: 'LinkedField',
                      name: 'profile_picture',
                      plural: !1,
                      selections: r,
                      storageKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        o,
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'page_vanity_url',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'vanity',
                          storageKey: null,
                        },
                      ],
                      type: 'Page',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
                j,
                k,
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'original_width',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'original_height',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'original_rotation',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'animated_image_caption',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'width',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'height',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'broadcaster_origin',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'broadcast_id',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'broadcast_status',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'dash_manifest',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_live_streaming',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_live_trace_enabled',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_looping',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_video_broadcast',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_podcast_video',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'loop_count',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_spherical',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_spherical_enabled',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'unsupported_browser_message',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'MusicVideoMetadata',
                  kind: 'LinkedField',
                  name: 'pmv_metadata',
                  plural: !1,
                  selections: [n, g],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'LatencySensitiveConfig',
                  kind: 'LinkedField',
                  name: 'latency_sensitive_config',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'broadcast_latency_sensitivity',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'LivePlaybackInstrumentationConfigParams',
                  kind: 'LinkedField',
                  name: 'live_playback_instrumentation_configs',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'is_client_triggered_trace_enabled',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_ncsr',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'permalink_url',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'captions_url',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'dash_prefetch_experimental',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'VideoCaptionLocale',
                  kind: 'LinkedField',
                  name: 'video_available_captions_locales',
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'localized_creation_method',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'can_use_oz',
                  storageKey: null,
                },
                {
                  alias: 'playable_url_dash',
                  args: [
                    {
                      kind: 'Literal',
                      name: 'scrubbing_preference',
                      value: 'MPEG_DASH',
                    },
                  ],
                  kind: 'ScalarField',
                  name: 'playable_url',
                  storageKey: 'playable_url(scrubbing_preference:"MPEG_DASH")',
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'min_quality_preference',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_rss_podcast_video',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'VideoPlayerShakaLiveP2PInit',
                  kind: 'LinkedField',
                  name: 'video_player_shaka_live_p2p_init',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'json_encoded_video_data',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'playable_url',
                  storageKey: null,
                },
                {
                  alias: 'playable_url_quality_hd',
                  args: [{ kind: 'Literal', name: 'quality', value: 'HD' }],
                  kind: 'ScalarField',
                  name: 'playable_url',
                  storageKey: 'playable_url(quality:"HD")',
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'SphericalVideoFallbackUrls',
                  kind: 'LinkedField',
                  name: 'spherical_video_fallback_urls',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'hd',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'sd',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_latency_menu_enabled',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'fbls_tier',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_latency_sensitive_broadcast',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'comet_video_player_static_config',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'comet_video_player_context_sensitive_config',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'VideoPlayerShakaPerformanceLoggerInit',
                  kind: 'LinkedField',
                  name: 'video_player_shaka_performance_logger_init',
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        'useVideoPlayerShakaPerformanceLoggerRelayImpl_video',
                      fragmentName:
                        'useVideoPlayerShakaPerformanceLoggerRelayImpl_init',
                      fragmentPropName: 'init',
                      kind: 'ModuleImport',
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'video_player_shaka_performance_logger_should_sample',
                  storageKey: null,
                },
                {
                  alias: 'video_player_shaka_performance_logger_init2',
                  args: null,
                  concreteType: 'VideoPlayerShakaPerformanceLoggerInit',
                  kind: 'LinkedField',
                  name: 'video_player_shaka_performance_logger_init',
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        'useVideoPlayerShakaPerformanceLoggerBuilder_video',
                      fragmentName:
                        'useVideoPlayerShakaPerformanceLoggerBuilder_init',
                      fragmentPropName: 'init',
                      kind: 'ModuleImport',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'per_session_sampling_rate',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'autoplay_gating_result',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'viewer_autoplay_setting',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'can_autoplay',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'drm_info',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'VideoP2PSettings',
                  kind: 'LinkedField',
                  name: 'p2p_settings',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'ticket',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'VideoP2PSettingsConfig',
                      kind: 'LinkedField',
                      name: 'config',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'delay_p2p_until_play',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'disable_hivejava_for_livevc',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'VideoHiveCommunityInfo',
                      kind: 'LinkedField',
                      name: 'community_info',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'community_id',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'community_name',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'VideoHiveInitializationOptions',
                      kind: 'LinkedField',
                      name: 'hive_initialization_options',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'VideoHiveInitializationOptionHiveJava',
                          kind: 'LinkedField',
                          name: 'hive_java',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'min_version',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'hive_tech_order',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'debug_level',
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
                  concreteType: 'AudioSettings',
                  kind: 'LinkedField',
                  name: 'audio_settings',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'video_volume_setting',
                      storageKey: null,
                    },
                    g,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'CaptionsSettings',
                  kind: 'LinkedField',
                  name: 'captions_settings',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'always_show_captions',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'captions_background_color',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'captions_background_opacity',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'captions_text_color',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'captions_text_size',
                      storageKey: null,
                    },
                    g,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'VideoBroadcastLowLatencyConfig',
                  kind: 'LinkedField',
                  name: 'broadcast_low_latency_config',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'll_desired_latency_ms',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'll_latency_tolerance_ms',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'audio_availability',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'VideoMutedSegment',
                  kind: 'LinkedField',
                  name: 'muted_segments',
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'mute_start_time_in_sec',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'mute_end_time_in_sec',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'SphericalVideoRenderer',
                  kind: 'LinkedField',
                  name: 'spherical_video_renderer',
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        'VideoPlayerRelay_video_spherical_video_renderer',
                      fragmentName:
                        'VideoPlayerSphericalRelay_sphericalVideoRenderer',
                      fragmentPropName: 'sphericalVideoRenderer',
                      kind: 'ModuleImport',
                    },
                  ],
                  storageKey: null,
                },
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
                      selections: r,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'image_preview_payload',
                      storageKey: null,
                    },
                    g,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'VideoIMFData',
                  kind: 'LinkedField',
                  name: 'video_imf_data',
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        'useVideoPlayerIMFFromVideoMetadataRelay_video',
                      fragmentName:
                        'useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data',
                      fragmentPropName: 'video_imf_data',
                      kind: 'ModuleImport',
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'TextWithEntities',
                  kind: 'LinkedField',
                  name: 'live_end_text',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'text',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_huddle',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_live_audio_room_v2_broadcast',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'Event',
                  kind: 'LinkedField',
                  name: 'associated_paid_online_event',
                  plural: !1,
                  selections: s,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_paid_virtual_event_premium_content',
                  storageKey: null,
                },
                {
                  alias: 'breakingStatus',
                  args: null,
                  kind: 'ScalarField',
                  name: 'breaking_status',
                  storageKey: null,
                },
                {
                  alias: 'videoId',
                  args: null,
                  kind: 'ScalarField',
                  name: 'id',
                  storageKey: null,
                },
                {
                  alias: 'isPremiere',
                  args: null,
                  kind: 'ScalarField',
                  name: 'is_premiere',
                  storageKey: null,
                },
                {
                  alias: 'liveViewerCount',
                  args: null,
                  kind: 'ScalarField',
                  name: 'live_viewer_count_read_only',
                  storageKey: null,
                },
                {
                  alias: 'rehearsalInfo',
                  args: null,
                  concreteType: 'LiveVideoRehearsalInfo',
                  kind: 'LinkedField',
                  name: 'rehearsal_info',
                  plural: !1,
                  selections: [
                    {
                      alias: 'typeName',
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'publish_time',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'Video',
                  kind: 'LinkedField',
                  name: 'live_speaker_count_indicator',
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName: 'VideoPlayerWithLiveVideoIndicator_video',
                      fragmentName:
                        'HuddlesSpeakerCountIndicatorContainer_video',
                      fragmentPropName: 'video',
                      kind: 'ModuleImport',
                    },
                    g,
                  ],
                  storageKey: null,
                },
                q,
                t,
                {
                  alias: null,
                  args: null,
                  concreteType: 'Story',
                  kind: 'LinkedField',
                  name: 'creation_story',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'identifier_token',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'debug_info',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'tracking',
                      storageKey: null,
                    },
                    g,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'shareable',
                      plural: !1,
                      selections: [
                        n,
                        {
                          alias: 'wwwUrl',
                          args: p,
                          kind: 'ScalarField',
                          name: 'url',
                          storageKey: 'url(site:"www")',
                        },
                        u,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: 'Literal',
                      name: 'framework',
                      value: 'WARNING_SCREENS',
                    },
                    {
                      kind: 'Literal',
                      name: 'location',
                      value: 'video_channel',
                    },
                  ],
                  concreteType: 'CIXScreen',
                  kind: 'LinkedField',
                  name: 'cix_screen',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'view_model',
                      plural: !1,
                      selections: [
                        n,
                        {
                          kind: 'InlineFragment',
                          selections: [
                            {
                              args: null,
                              documentName:
                                'VideoPlayerWithWatchAndScrollWarningScreen_video',
                              fragmentName: 'CometWarningScreenOverlay_data',
                              fragmentPropName: 'data',
                              kind: 'ModuleImport',
                            },
                          ],
                          type: 'OverlayWarningScreenViewModel',
                          abstractKey: null,
                        },
                        u,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'cix_screen(framework:"WARNING_SCREENS",location:"video_channel")',
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'Story',
                  kind: 'LinkedField',
                  name: 'container_story',
                  plural: !1,
                  selections: s,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: 'Literal',
                      name: 'supported',
                      value: [
                        'CometVideoPlayerWithLiveAudioRoomV2OverlayRenderer',
                        'CometVideoPlayerWithHuddleOverlayRenderer',
                        'CometVideoPlayerWithPodcastOverlayRenderer',
                        'VideoPlayerWithMusicSproutOverlayRenderer',
                        'CometVideoPlayerWithSoundbiteOverlayRenderer',
                      ],
                    },
                  ],
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'comet_video_player_audio_overlay_renderer',
                  plural: !1,
                  selections: [
                    n,
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          args: null,
                          documentName: 'VideoPlayerWithAudioOverlay_video',
                          fragmentName:
                            'CometVideoPlayerWithLiveAudioRoomV2OverlayRenderer_renderer',
                          fragmentPropName: 'renderer',
                          kind: 'ModuleImport',
                        },
                      ],
                      type: 'CometVideoPlayerWithLiveAudioRoomV2OverlayRenderer',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          args: null,
                          documentName: 'VideoPlayerWithAudioOverlay_video',
                          fragmentName:
                            'CometVideoPlayerWithHuddleOverlayRenderer_renderer',
                          fragmentPropName: 'renderer',
                          kind: 'ModuleImport',
                        },
                      ],
                      type: 'CometVideoPlayerWithHuddleOverlayRenderer',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          args: null,
                          documentName: 'VideoPlayerWithAudioOverlay_video',
                          fragmentName:
                            'CometVideoPlayerWithPodcastOverlayRenderer_renderer',
                          fragmentPropName: 'renderer',
                          kind: 'ModuleImport',
                        },
                      ],
                      type: 'CometVideoPlayerWithPodcastOverlayRenderer',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          args: null,
                          documentName: 'VideoPlayerWithAudioOverlay_video',
                          fragmentName:
                            'VideoPlayerWithMusicSproutOverlayRenderer_renderer',
                          fragmentPropName: 'renderer',
                          kind: 'ModuleImport',
                        },
                      ],
                      type: 'VideoPlayerWithMusicSproutOverlayRenderer',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          args: null,
                          documentName: 'VideoPlayerWithAudioOverlay_video',
                          fragmentName:
                            'CometVideoPlayerWithSoundbiteOverlayRenderer_renderer',
                          fragmentPropName: 'renderer',
                          kind: 'ModuleImport',
                        },
                      ],
                      type: 'CometVideoPlayerWithSoundbiteOverlayRenderer',
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'comet_video_player_audio_overlay_renderer(supported:["CometVideoPlayerWithLiveAudioRoomV2OverlayRenderer","CometVideoPlayerWithHuddleOverlayRenderer","CometVideoPlayerWithPodcastOverlayRenderer","VideoPlayerWithMusicSproutOverlayRenderer","CometVideoPlayerWithSoundbiteOverlayRenderer"])',
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: 'Literal',
                      name: 'supported',
                      value: ['CometVideoPlayerWithHuddleBackgroundRenderer'],
                    },
                  ],
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'comet_video_player_audio_background_renderer',
                  plural: !1,
                  selections: [
                    n,
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          args: null,
                          documentName: 'VideoPlayerWithAudioBackground_video',
                          fragmentName:
                            'CometVideoPlayerWithHuddleBackgroundRenderer_renderer',
                          fragmentPropName: 'renderer',
                          kind: 'ModuleImport',
                        },
                      ],
                      type: 'CometVideoPlayerWithHuddleBackgroundRenderer',
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'comet_video_player_audio_background_renderer(supported:["CometVideoPlayerWithHuddleBackgroundRenderer"])',
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'can_viewer_share',
                  storageKey: null,
                },
                l,
                {
                  kind: 'ClientExtension',
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'selected_latency_setting',
                      storageKey: null,
                    },
                  ],
                },
                {
                  if: null,
                  kind: 'Defer',
                  label:
                    'VideoPlayerRelay_video$defer$InstreamVideoAdBreaksPlayer_video',
                  selections: [
                    g,
                    {
                      alias: null,
                      args: null,
                      concreteType: 'InstreamExtraConfig',
                      kind: 'LinkedField',
                      name: 'instream_extra_config',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'instream_halo_delay_time_seconds',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'InstreamVideoAdBreaks',
                      kind: 'LinkedField',
                      name: 'instream_video_ad_breaks_comet',
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            'InstreamVideoAdBreaksPlayer_video_instream_video_ad_breaks_comet',
                          fragmentName:
                            'InstreamVideoAdBreaksPlayerImpl_adBreaks',
                          fragmentPropName: 'adBreaks',
                          kind: 'ModuleImport',
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
            {
              alias: 'chainingSeedVideo',
              args: m,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
                {
                  if: null,
                  kind: 'Defer',
                  label:
                    'CometWatchAndScrollVideoQuery$defer$VideoPlayerSkipControl_video_izUbj',
                  selections: [
                    g,
                    {
                      alias: null,
                      args: [
                        { kind: 'Literal', name: 'entry_point', value: 'WNS' },
                      ],
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'video_channel',
                      plural: !1,
                      selections: [
                        n,
                        {
                          alias: null,
                          args: [
                            {
                              kind: 'Variable',
                              name: 'after',
                              variableName: 'chainingCursor',
                            },
                            { kind: 'Literal', name: 'caller', value: 'WNS' },
                            {
                              kind: 'Variable',
                              name: 'exclude_video',
                              variableName: 'chainingSeedVideoID',
                            },
                            { kind: 'Literal', name: 'first', value: 1 },
                          ],
                          concreteType: 'VideoChannelFeedConnection',
                          kind: 'LinkedField',
                          name: 'video_channel_feed',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'VideoChannelFeedEdge',
                              kind: 'LinkedField',
                              name: 'edges',
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'cursor',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: 'LinkedField',
                                  name: 'node',
                                  plural: !1,
                                  selections: [
                                    n,
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: 'StoryAttachment',
                                          kind: 'LinkedField',
                                          name: 'attachments',
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: 'LinkedField',
                                              name: 'media',
                                              plural: !1,
                                              selections: [
                                                n,
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    g,
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: 'Literal',
                                                          name: 'height',
                                                          value: 202,
                                                        },
                                                        {
                                                          kind: 'Literal',
                                                          name: 'sizing',
                                                          value:
                                                            'cover-fill-cropped',
                                                        },
                                                        {
                                                          kind: 'Literal',
                                                          name: 'width',
                                                          value: 360,
                                                        },
                                                      ],
                                                      concreteType: 'Image',
                                                      kind: 'LinkedField',
                                                      name: 'image',
                                                      plural: !1,
                                                      selections: r,
                                                      storageKey:
                                                        'image(height:202,sizing:"cover-fill-cropped",width:360)',
                                                    },
                                                    t,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: 'LinkedField',
                                                      name: 'owner',
                                                      plural: !1,
                                                      selections: [n, q, g],
                                                      storageKey: null,
                                                    },
                                                    h,
                                                  ],
                                                  type: 'Video',
                                                  abstractKey: null,
                                                },
                                                u,
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: s,
                                                  type: 'DynamicFeedAdAttachmentMedia',
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: s,
                                                  type: 'GenericAttachmentMedia',
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: s,
                                                  type: 'MontageImage',
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: s,
                                                  type: 'MontageVideo',
                                                  abstractKey: null,
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
                                          name: 'click_tracking_linkshim_cb',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'encrypted_click_tracking',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'encrypted_tracking',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'viewability_config',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: 'CometClientViewConfig',
                                          kind: 'LinkedField',
                                          name: 'client_view_config',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'can_delay_log_impression',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'use_banzai_signal_imp',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'use_banzai_vital_imp',
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: 'Story',
                                      abstractKey: null,
                                    },
                                    u,
                                    {
                                      kind: 'InlineFragment',
                                      selections: s,
                                      type: 'FBShortsMidCardFeedUnit',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: s,
                                      type: 'XFBDummyReelsInWatchIFU',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: s,
                                      type: 'XFBSFTFeedUnit',
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        g,
                      ],
                      storageKey: 'video_channel(entry_point:"WNS")',
                    },
                  ],
                },
                g,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b('CometWatchAndScrollVideoQuery_facebookRelayOperation'),
          metadata: {},
          name: 'CometWatchAndScrollVideoQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometRouteActorToasterQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4961682900536225';
  },
  null,
);
__d(
  'CometRouteActorToasterQuery.graphql',
  ['CometRouteActorToasterQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'scale' }],
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        e = {
          alias: 'toast_icon',
          args: [
            { kind: 'Literal', name: 'height', value: 32 },
            { kind: 'Variable', name: 'scale', variableName: 'scale' },
            { kind: 'Literal', name: 'width', value: 32 },
          ],
          concreteType: 'Image',
          kind: 'LinkedField',
          name: 'profile_picture',
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
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'CometRouteActorToasterQuery',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'actor',
                  plural: !1,
                  selections: [c, d, e],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'CometRouteActorToasterQuery',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'actor',
                  plural: !1,
                  selections: [
                    c,
                    d,
                    e,
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
        },
        params: {
          id: b('CometRouteActorToasterQuery_facebookRelayOperation'),
          metadata: {},
          name: 'CometRouteActorToasterQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometVirtualCursorStatus',
  ['UserAgent', 'cr:1345969', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = null,
      i = null;
    function j() {
      i ||
        (i = window.addEventListener('blur', function () {
          (h = null), k();
        }));
    }
    function k() {
      i && (i.remove(), (i = null));
    }
    function a(a) {
      (h = a.keyCode), j();
    }
    function d(a) {
      (h = null), k();
    }
    if (
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    ) {
      f = document.documentElement;
      if (f)
        if (f.addEventListener)
          f.addEventListener('keydown', a, !0),
            f.addEventListener('keyup', d, !0);
        else if (f.attachEvent) {
          f = f.attachEvent;
          f('onkeydown', a);
          f('onkeyup', d);
        }
    }
    var l = {
        getKeyDownCode: function () {
          return h;
        },
        isKeyDown: function () {
          return !!h;
        },
      },
      m = !1,
      n = !1,
      o = null,
      p = !1;
    function q(a) {
      var b = new Set(),
        d = l.isKeyDown(),
        e = a.WEBKIT_FORCE_AT_MOUSE_DOWN,
        f = a.clientX,
        g = a.clientY,
        h = a.isTrusted,
        i = a.mozInputSource,
        j = a.offsetX,
        k = a.offsetY,
        o = a.webkitForce;
      f === 0 &&
        g === 0 &&
        j >= 0 &&
        k >= 0 &&
        n &&
        h &&
        i == null &&
        b.add('Chrome');
      m &&
        n &&
        !d &&
        o != null &&
        o < e &&
        j === 0 &&
        k === 0 &&
        i == null &&
        b.add('Safari-edge');
      f === 0 &&
        g === 0 &&
        j < 0 &&
        k < 0 &&
        n &&
        i == null &&
        b.add('Safari-old');
      if (
        !m &&
        !n &&
        !d &&
        h &&
        c('UserAgent').isBrowser('IE >= 10') &&
        i == null
      ) {
        o = a.target;
        e = o.clientHeight;
        d = o.clientWidth;
        f < 0 && g < 0
          ? b.add('IE')
          : (j < 0 || j > d) && (k < 0 || k > e) && b.add('MSIE');
      }
      i === 0 && h && b.add('Firefox');
      return b;
    }
    function r() {
      (m = !0),
        c('setTimeout')(function () {
          m = !1;
        }, 0);
    }
    function s() {
      (n = !0),
        c('setTimeout')(function () {
          n = !1;
        }, 0);
    }
    function t(a) {
      p &&
        b('cr:1345969').log({
          extra_data: { source_app: 'comet' },
          indicated_browsers: o,
          is_virtual_cursor_action: a,
        });
    }
    function u(a) {
      o === null && (o = Array.from(q(a)));
      p = o != null && o.length > 0;
      a =
        a.target != null &&
        a.target.getAttribute != null &&
        a.target.getAttribute('data-accessibilityid') ===
          'virtual_cursor_trigger';
      t(a);
      c('setTimeout')(function () {
        (p = !1), (o = null);
      }, 0);
    }
    function e() {
      document.addEventListener('click', u, !0),
        document.addEventListener('mousedown', r, !0),
        document.addEventListener('mouseup', s, !0);
    }
    g.initLogging = e;
  },
  98,
);
__d(
  'XUpdateTimezoneControllerRouteBuilder',
  ['jsExtraRouteBuilder'],
  function (a, b, c, d, e, f, g) {
    a = c('jsExtraRouteBuilder')(
      '/ajax/autoset_timezone_ajax/',
      Object.freeze({ is_forced: !1 }),
      [
        '/ajax/autoset_timezone_ajax.php',
        '/ajax/timezone/update/',
        '/ajax/timezone/update.php',
      ],
      void 0,
    );
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'getBrowserTimezone',
  ['FBLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      try {
        var a;
        a =
          ((a = window.Intl) == null ? void 0 : a.DateTimeFormat) &&
          Intl.DateTimeFormat();
        a = (a == null ? void 0 : a.resolvedOptions) && a.resolvedOptions();
        return a == null ? void 0 : a.timeZone;
      } catch (a) {
        c('FBLogger')('TimezoneAutoset')
          .catching(a)
          .warn('Could not read IANA timezone from browser');
        return null;
      }
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometTimezoneUpdater',
  [
    'UserTimezoneServerTimeData',
    'XUpdateTimezoneControllerRouteBuilder',
    'cometAsyncFetch',
    'getBrowserGMTOffsetAdjustedForSkew',
    'getBrowserTimezone',
    'killswitch',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = d('UserTimezoneServerTimeData').force_update,
        b = d('UserTimezoneServerTimeData').server_gmt_offset,
        e = d('UserTimezoneServerTimeData').server_time,
        f = d('UserTimezoneServerTimeData').timezone;
      if (e == null || b == null) return;
      e = -c('getBrowserGMTOffsetAdjustedForSkew')(e);
      var g = c('killswitch')('TIMEZONE_SET_IANA_ZONE_NAME')
        ? null
        : c('getBrowserTimezone')();
      (a === !0 || e !== b || (g != null && g !== f)) &&
        c('cometAsyncFetch')(
          c('XUpdateTimezoneControllerRouteBuilder').buildExtraURL(
            '/ajax/timezone/update.php',
            {},
          ),
          { data: { gmt_off: e, is_forced: a, tz: g }, method: 'POST' },
        );
    }
    b = { updateTimezoneIfNecessary: a };
    e = b;
    g['default'] = e;
  },
  98,
);
__d(
  'SetHovercardInteractionPreference',
  ['CometRelay', 'SetHovercardInteractionPreferenceMutation.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a) {
      var c = a.environment;
      a = a.input;
      d('CometRelay').commitMutation(c, {
        mutation:
          h !== void 0
            ? h
            : (h = b('SetHovercardInteractionPreferenceMutation.graphql')),
        variables: a,
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'LogoutHandler.react',
  ['cr:11880'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = b('cr:11880');
  },
  98,
);
__d(
  'CometIconWirelessSlashFilled.react',
  ['CometSVGIcon.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsx(
        c('CometSVGIcon.react'),
        babelHelpers['extends']({ viewBox: '0 0 24 24' }, a, {
          children: h.jsx('path', {
            d: 'M23.7805.2195c.2925.293.2925.768 0 1.061l-22.5 22.5C1.134 23.927.942 24 .75 24c-.192 0-.384-.073-.5305-.2195-.2925-.293-.2925-.768 0-1.061l12.1967947-12.1971509c-2.3773758-.1150468-4.79162015.7286756-6.6038447 2.5401009-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.024 0-1.414 2.65728981-2.65728981 6.3696459-3.62280965 9.8005664-2.90852144l2.430738-2.43186193C11.7816792 4.58111626 6.15198938 5.65271062 2.27735 9.52735c-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.0235 0-1.414 4.6714534-4.67191574 11.571522-5.78608437 17.3096457-3.34843552L22.7195.2195c.293-.2925.768-.2925 1.061 0zM12 18.5c.6905 0 1.25.5595 1.25 1.25S12.6905 21 12 21s-1.25-.5595-1.25-1.25.5595-1.25 1.25-1.25zm1.4175-4.81495c.9705.2455 1.8905.741 2.6485 1.499.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.512-.0975-.707-.293-.7835333-.7835333-1.8301422-1.1445778-2.8581093-1.0880116L11.574 15.52855l1.8435-1.8435zm3.8154-3.8154c.848.4725 1.649 1.059 2.3685 1.779.391.39.391 1.023 0 1.414-.195.195-.451.293-.707.293-.2555 0-.5115-.098-.707-.293-.7285-.728-1.5575-1.291-2.439-1.7085zm2.1908-2.1908l1.4425-1.4425c.8.545 1.5615 1.168 2.2705 1.877.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.5115-.0975-.707-.293-.5933333-.59333333-1.2283333-1.11861111-1.895162-1.57959491L19.4237 7.67885l1.4425-1.4425z',
          }),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'MessengerPhone.svg.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsxs(
        'svg',
        babelHelpers['extends'](
          {
            fill: 'currentColor',
            viewBox: '0 0 36 36',
            width: '1em',
            height: '1em',
          },
          a,
          {
            children: [
              a.title != null && h.jsx('title', { children: a.title }),
              a.children != null && h.jsx('defs', { children: a.children }),
              h.jsx('path', {
                d: 'M25.753 28.2c1.07-.357 1.816-1.275 2.423-2.225a2.05 2.05 0 0 0 .037-2.151 4.998 4.998 0 0 0-.723-.963 11.594 11.594 0 0 0-2.888-2.112c-.58-.299-1.272-.212-1.808.159l-2.098 1.452a.472.472 0 0 1-.437.055 11.557 11.557 0 0 1-4.045-2.63 11.554 11.554 0 0 1-2.63-4.044.472.472 0 0 1 .056-.437l1.453-2.098c.37-.536.457-1.228.158-1.807A11.587 11.587 0 0 0 13.14 8.51a4.995 4.995 0 0 0-.963-.723 2.05 2.05 0 0 0-2.15.037c-.951.607-1.87 1.353-2.225 2.424-1.174 3.527 1.187 8.461 5.338 12.613 4.152 4.151 9.086 6.512 12.614 5.338z',
              }),
            ],
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    a._isSVG = !0;
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'CometUncaughtError.react',
  [
    'fbt',
    'CometContentArea.react',
    'NullStateGeneral',
    'TetraNullState.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a() {
      return i.jsx('div', {
        className: 'x6s0dn4 x78zum5 x1dr59a3 xl56j7k xixxii4 xh8yej3',
        children: i.jsx(c('CometContentArea.react'), {
          verticalAlign: 'middle',
          children: i.jsx(c('TetraNullState.react'), {
            headline: h._('__JHASH__GbFoxuI3sCw__JHASH__'),
            icon: c('NullStateGeneral'),
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometToasterView_DO_NOT_USE.react',
  [
    'BaseContextualLayerAnchorRoot.react',
    'BasePortal.react',
    'BaseToastAnimationInternal.react',
    'CometGlobalPanelGating',
    'XPlatReactToasterView.react',
    'gkx',
    'react',
    'useCometRouterState',
    'useToasterStateManager',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useState,
      k = {
        list: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          listStyle: 'xe8uvvx',
          maxWidth: 'x193iq5w',
          $$css: !0,
        },
        root: {
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          end: 'xds687c',
          pointerEvents: 'x47corl',
          position: 'xixxii4',
          start: 'x1uvyrtv',
          zIndex: 'xoegz02',
          $$css: !0,
        },
        rootBlue: { zIndex: 'x1jvg36b', $$css: !0 },
        rootWithGlobalPanelHome: {
          start: 'x17qophe',
          '@media (max-width: 1159px)_start': 'xv0u79y',
          $$css: !0,
        },
        rootWorkplaceLegacy: { zIndex: 'xdwmgzo', $$css: !0 },
        toast: {
          paddingTop: 'xyamay9',
          paddingEnd: 'x1pi30zi',
          paddingBottom: 'x1l90r2v',
          paddingStart: 'x1swvt13',
          pointerEvents: 'x71s49j',
          '@media (max-width: 899px)_maxWidth': 'xx1nl2z',
          $$css: !0,
        },
      },
      l = {
        center: { justifyContent: 'xl56j7k', $$css: !0 },
        end: { justifyContent: 'x13a6bvl', $$css: !0 },
        start: { justifyContent: 'x1nhvcw1', $$css: !0 },
      },
      m = {
        full: { maxWidth: 'x193iq5w', $$css: !0 },
        regular: { maxWidth: 'xpqan2r', $$css: !0 },
      };
    function a(a) {
      var b = a.align;
      b = b === void 0 ? 'start' : b;
      var e = a.filterToasts,
        f = a.maxVisible;
      f = f === void 0 ? 1 : f;
      a = a.maxWidth;
      var g = a === void 0 ? 'full' : a,
        n = c('useToasterStateManager')();
      a = j(function () {
        return n.getEmptyState();
      });
      var o = a[0],
        p = a[1];
      i(
        function () {
          var a = n.registerView(p, 0);
          return a.remove;
        },
        [n],
      );
      a =
        ((a = c('useCometRouterState')()) == null
          ? void 0
          : a.main.route.tabKey) === 'home';
      return h.jsx(c('BasePortal.react'), {
        target: document.body,
        xstyle: [
          k.root,
          c('gkx')('708253')
            ? d('CometGlobalPanelGating').isGlobalPanelVisible() && a
              ? k.rootWithGlobalPanelHome
              : null
            : c('gkx')('1341692')
            ? k.rootWorkplaceLegacy
            : k.rootBlue,
          l[b],
        ],
        children: h.jsx('ul', {
          className: 'x78zum5 xdt5ytf xe8uvvx x193iq5w',
          children: h.jsx(c('XPlatReactToasterView.react'), {
            filterToasts: e,
            maxVisible: f,
            onExpireToast: function (a) {
              n.expire(a);
            },
            toasterState: o,
            children: function (a, b, d, e) {
              return h.jsx(
                c('BaseToastAnimationInternal.react'),
                {
                  expired: d,
                  id: b,
                  position: e,
                  xstyle: [k.toast, m[c('gkx')('1196') ? 'regular' : g]],
                  children: h.jsx(c('BaseContextualLayerAnchorRoot.react'), {
                    children: a,
                  }),
                },
                e,
              );
            },
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'addCometProfileSwitchAnnotation',
  [
    'JSScheduler',
    'isRecentProfileSwitchSessionStorage',
    'profileSwitchOriginSessionStorage',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      d('JSScheduler').scheduleLoggingPriCallback(function () {
        var b = c('isRecentProfileSwitchSessionStorage').getAndRemove();
        b &&
          a.addAnnotationInt(
            'is_recent_profile_switch',
            b.didSwitchToMainProfile ? 2 : 1,
          );
        b = c('profileSwitchOriginSessionStorage').getAndRemove();
        b && a.addMetadata('origin', b.origin);
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'GhlTestUbtFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1942319');
    c = b('FalcoLoggerInternal').create('ghl_test_ubt', a);
    e.exports = c;
  },
  null,
);
__d(
  'CometGHLTestUBT',
  ['GhlTestUbtFalcoEvent', 'JSScheduler', 'ghlTestUBT'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      d('JSScheduler').scheduleLoggingPriCallback(function () {
        c('ghlTestUBT')(function (b, d) {
          b && a.addGlobalMetadata('adblocker_enabled', 1);
          return c('GhlTestUbtFalcoEvent').log(function () {
            return { recent: d, ubt: b };
          });
        });
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometErrorLogging',
  [
    'ClientConsistency',
    'Env',
    'ErrorGuard',
    'ErrorSetup',
    'ErrorTransport',
    'JSErrorLoggingConfig',
    'SiteData',
    'WebSession',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      c('ErrorGuard').skipGuardGlobal(c('Env').nocatch);
      b = a;
      if (c('JSErrorLoggingConfig').sampleWeight != null) {
        c('ErrorSetup').setup(
          {
            additional_client_revisions:
              c('ClientConsistency').getAdditionalRevisions(),
            appId: c('JSErrorLoggingConfig').appId,
            cavalry_lid: b,
            client_revision: c('SiteData').client_revision,
            extra: c('JSErrorLoggingConfig').extra,
            loggingFramework: 'comet',
            projectBlocklist: c('JSErrorLoggingConfig').projectBlocklist,
            push_phase: c('SiteData').push_phase,
            report_source: c('JSErrorLoggingConfig').report_source,
            report_source_ref: c('JSErrorLoggingConfig').report_source_ref,
            sample_weight:
              (a = c('JSErrorLoggingConfig').sampleWeight) != null ? a : 0,
            script_path: '/comet',
            server_revision: c('SiteData').server_revision,
            spin: c('SiteData').spin,
            web_session_id: d('WebSession').getId(),
          },
          d('ErrorTransport').log,
        );
      }
    }
    c('ErrorSetup').preSetup();
    g.init = a;
  },
  98,
);
__d(
  'CometBootloaderEventsTypedLoggerLite',
  ['generateLiteTypedLogger'],
  function (a, b, c, d, e, f) {
    'use strict';
    e.exports = b('generateLiteTypedLogger')(
      'logger:CometBootloaderEventsLoggerConfig',
    );
  },
  null,
);
__d(
  'HasteResponseFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1823926');
    c = b('FalcoLoggerInternal').create('haste_response', a);
    e.exports = c;
  },
  null,
);
__d(
  'CometBootloaderLoggerUtil',
  [
    'BootloaderEvents',
    'BootloaderEventsPerf',
    'CometBootloaderEventsTypedLoggerLite',
    'CometTimeSpentNavigation',
    'HasteResponseFalcoEvent',
    'ResourceTimingStore',
    'SiteData',
    'performanceNavigationStart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = !1;
    function a(a) {
      var b = a.bl_sample_rate,
        e = a.hr_sample_rate,
        f = a.parent_lid;
      if (h || !(b || e)) return;
      h = !0;
      d('ResourceTimingStore').init();
      var g = function (a) {
        return {
          ms_since_navstart: Math.round(a - c('performanceNavigationStart')()),
          parent_lid: f,
          pkg_cohort: c('SiteData').pkg_cohort,
          request_path:
            (a = c('CometTimeSpentNavigation').getPathInfo()) == null
              ? void 0
              : a.name,
          svn_rev: c('SiteData').client_revision,
        };
      };
      e &&
        d('BootloaderEvents').onHasteResponse(function (a) {
          return c('HasteResponseFalcoEvent').log(function () {
            var b = d('BootloaderEventsPerf').computeHRData(a),
              c = d('BootloaderEventsPerf').flattenData(b);
            return babelHelpers['extends']({}, c, g(b.start_time));
          });
        });
      b &&
        d('BootloaderEvents').onBootload(function (a) {
          a = d('BootloaderEventsPerf').computeBLData(a);
          var e = d('BootloaderEventsPerf').flattenData(a);
          c('CometBootloaderEventsTypedLoggerLite').log(
            babelHelpers['extends']({}, e, g(a.start_time)),
            { weight: b },
          );
        });
    }
    g.initLogging = a;
  },
  98,
);
__d(
  'CometPixelRatioUpdater',
  ['Cookie', 'Run', 'WebPixelRatio'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'dpr';
    function i(a) {
      c('Cookie').set(h, String(a));
    }
    function j() {
      window.devicePixelRatio !== d('WebPixelRatio').get() &&
        i(window.devicePixelRatio);
    }
    function a() {
      j(),
        d('Run').onBeforeUnload(j, !1),
        'onpagehide' in window && window.addEventListener('pageHide', j);
    }
    g.startDetecting = a;
  },
  98,
);
__d(
  'CometNetworkStatusToast',
  [
    'fbt',
    'ix',
    'BaseToasterStateManager',
    'CometIconWirelessSlashFilled.react',
    'CometRelayEnvironmentFactory',
    'NetworkStatus',
    'SVGIcon',
    'TetraIcon.react',
    'cometPushToast',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = null;
    function l(a) {
      a = a.online;
      var b = c('BaseToasterStateManager').getInstance();
      k != null && (b.expire(k), (k = null));
      k = a
        ? d('cometPushToast').cometPushToast(
            {
              icon: j.jsx(c('TetraIcon.react'), {
                color: 'positive',
                icon: d('fbicon')._(i('485124'), 24),
              }),
              message: h._('__JHASH__Twor-U8sZs8__JHASH__'),
            },
            4e3,
            b,
          )
        : d('cometPushToast').cometPushToast(
            {
              action: {
                label: h._('__JHASH__mzjg0e604Yh__JHASH__'),
                onPress: function () {
                  d(
                    'CometRelayEnvironmentFactory',
                  ).commitLocalUpdateForEachEnvironment(function (a, b, c) {
                    c.invalidateStore();
                  });
                },
              },
              icon: j.jsx(c('TetraIcon.react'), {
                color: 'disabled',
                icon: d('SVGIcon').legacySVGIcon(
                  c('CometIconWirelessSlashFilled.react'),
                ),
                size: 24,
              }),
              message: h._('__JHASH__px_Aor7szAo__JHASH__'),
            },
            Infinity,
            b,
          );
    }
    function a() {
      c('NetworkStatus').onChange(l);
    }
    g.subscribe = a;
  },
  98,
);
__d(
  'DetectBrokenProxyCache',
  ['AsyncSignal', 'Cookie', 'URI'],
  function (a, b, c, d, e, f) {
    var g;
    function a(a, c) {
      var d = b('Cookie').get(c);
      if (d != a && d != null && a != '0') {
        c = { c: 'si_detect_broken_proxy_cache', m: c + ' ' + a + ' ' + d };
        a = new (g || (g = b('URI')))('/platform/scribe_endpoint.php')
          .getQualifiedURI()
          .toString();
        new (b('AsyncSignal'))(a, c).send();
      }
    }
    e.exports = { run: a };
  },
  null,
);
__d(
  'SimplePageLoadLogger',
  ['ODS', 'performance'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      d('ODS').bumpEntityKey(1678, 'www_client_navigations', h());
    }
    function h() {
      if (
        c('performance').navigation == null ||
        c('performance').navigation.type == null
      )
        return 'UNSUPPORTED';
      switch (c('performance').navigation.type) {
        case c('performance').navigation.TYPE_NAVIGATE:
          return 'NAVIGATE';
        case c('performance').navigation.TYPE_RELOAD:
          return 'RELOAD';
        case c('performance').navigation.TYPE_BACK_FORWARD:
          return 'BACK_FORWARD';
        case c('performance').navigation.TYPE_RESERVED:
          return 'RESERVED';
        default:
          return 'UNKNOWN';
      }
    }
    g.logPageNavigationType = a;
  },
  98,
);
__d(
  'CometRootDeferredShared',
  [
    'CometBootloaderLoggerUtil',
    'CometNetworkStatusToast',
    'CometVCTracker',
    'CometVirtualCursorStatus',
    'DeferredCookie',
    'DetectBrokenProxyCache',
    'ErrorGuard',
    'JSScheduler',
    'SimplePageLoadLogger',
    'WebStorageMonster',
    'cr:10026',
    'cr:1201738',
    'cr:1332233',
    'cr:1516609',
    'cr:1813330',
    'cr:2718',
    'cr:653',
    'currentCometRouterInstance',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var e = a.blLoggingCavalryFields,
        f = a.deferredCookies,
        g = a.userID;
      c('ErrorGuard').applyWithGuard(
        function () {
          return d('CometBootloaderLoggerUtil').initLogging(e);
        },
        null,
        [],
      );
      c('ErrorGuard').applyWithGuard(
        function () {
          return d('CometVirtualCursorStatus').initLogging();
        },
        null,
        [],
      );
      c('ErrorGuard').applyWithGuard(
        function () {
          return d('CometNetworkStatusToast').subscribe();
        },
        null,
        [],
      );
      b('cr:10026') != null &&
        c('ErrorGuard').applyWithGuard(
          function () {
            return b('cr:10026')(function () {
              var a;
              return (a = d('currentCometRouterInstance').get()) == null
                ? void 0
                : (a = a.getCurrentRouterState()) == null
                ? void 0
                : (a = a.main) == null
                ? void 0
                : a.route;
            });
          },
          null,
          [],
        );
      c('ErrorGuard').applyWithGuard(
        function () {
          return d('SimplePageLoadLogger').logPageNavigationType();
        },
        null,
        [],
      );
      d('JSScheduler').scheduleSpeculativeCallback(function () {
        c('WebStorageMonster').schedule();
      });
      d('JSScheduler').scheduleSpeculativeCallback(function () {
        d('DetectBrokenProxyCache').run(g, 'c_user');
      });
      b('cr:1201738') &&
        c('CometVCTracker').VisualCompletionTraceObserver.subscribe(function (
          a,
        ) {
          a.interactionType === 'INITIAL_LOAD' &&
            b('cr:1201738').init('comet.idle');
        });
      b('cr:653') &&
        c('CometVCTracker').VisualCompletionTraceObserver.subscribe(function (
          a,
        ) {
          a.interactionType === 'INITIAL_LOAD' && b('cr:653').init();
        });
      Object.keys(f).forEach(function (a) {
        var b = f[a],
          d = b.expiration_for_js,
          e = b.first_party_only,
          g = b.path,
          h = b.secure;
        b = b.value;
        c('DeferredCookie').addToQueue(a, b, d, g, e, !1, h);
      });
      b('cr:1332233') &&
        c('ErrorGuard').applyWithGuard(
          function () {
            return b('cr:1332233')();
          },
          null,
          [],
        );
      b('cr:1516609') != null &&
        c('ErrorGuard').applyWithGuard(
          function () {
            return b('cr:1516609').initSignalCollection();
          },
          null,
          [],
        );
      b('cr:1813330') &&
        c('ErrorGuard').applyWithGuard(
          function () {
            return b('cr:1813330').init();
          },
          null,
          [],
        );
      b('cr:2718') &&
        c('ErrorGuard').applyWithGuard(
          function () {
            return b('cr:2718').init();
          },
          null,
          [],
        );
    }
    g.initDeferred = a;
  },
  98,
);
__d(
  'CometRootDeferred',
  [
    'CometRootDeferredShared',
    'CometTimezoneUpdater',
    'JSScheduler',
    'SketchComet',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.sketchInfo;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['sketchInfo']);
      b != null &&
        d('JSScheduler').scheduleSpeculativeCallback(function () {
          c('SketchComet').solveAllPrimitivesAndCallAsyncController(
            b.seed1,
            b.seed2,
            b.rounds,
          );
        });
      d('CometRootDeferredShared').initDeferred(a);
      c('CometTimezoneUpdater').updateTimezoneIfNecessary();
    }
    g.initDeferred = a;
  },
  98,
);
__d(
  'LiveVideoCometNuxForCVC.react',
  [
    'CometPlaceholder.react',
    'CometRelay',
    'LiveVideoCometNuxForCVCQuery.graphql',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = h !== void 0 ? h : (h = b('LiveVideoCometNuxForCVCQuery.graphql'));
    function a(a) {
      a = a.videoID;
      a = d('CometRelay').useLazyLoadQuery(j, { nuxID: 8030, videoID: a });
      return i.jsx(c('CometPlaceholder.react'), {
        fallback: null,
        children: i.jsx(d('CometRelay').MatchContainer, {
          match: a.nux,
          props: { video: a.video },
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'WebBrowserDimensionsTypedLoggerLite',
  ['generateLiteTypedLogger'],
  function (a, b, c, d, e, f) {
    'use strict';
    e.exports = b('generateLiteTypedLogger')(
      'logger:WebBrowserDimensionsLoggerConfig',
    );
  },
  null,
);
__d(
  'CometBrowserDimensionsLogger',
  [
    'CometDebounce',
    'Cookie',
    'ExecutionEnvironment',
    'SiteData',
    'WebBrowserDimensionsTypedLoggerLite',
    'getViewportDimensions',
    'isInIframe',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = null,
      i = !1,
      j = { height: 0, width: 0 };
    function k() {
      h === null && (h = c('getViewportDimensions')());
      return h;
    }
    function l() {
      var a = c('getViewportDimensions')(),
        b = a.height;
      a = a.width;
      (j.width !== a || j.height !== b) &&
        ((j = { height: b, width: a }), c('Cookie').set('wd', a + 'x' + b));
    }
    function m() {
      if (!c('ExecutionEnvironment').canUseDOM || c('isInIframe')() || i)
        return;
      i = !0;
      l();
      window.addEventListener('resize', c('CometDebounce')(l, { wait: 250 }), {
        passive: !0,
      });
      window.addEventListener('focus', l, { passive: !0 });
    }
    function a(a) {
      var b,
        d = k();
      m();
      b = {
        client_hint_width: a == null ? void 0 : a.clientHintWidth,
        pixel_ratio: (b = window.devicePixelRatio) != null ? b : 1,
        screen_x: window.screen.width,
        screen_y: window.screen.height,
        server_pixel_ratio: c('SiteData').pr,
        server_viewport_x: a == null ? void 0 : a.viewportWidth,
        server_viewport_y: a == null ? void 0 : a.viewportHeight,
        viewport_x: d.width,
        viewport_y: d.height,
      };
      window.navigator &&
        window.navigator.hardwareConcurrency &&
        (b.cpu_cores_count = window.navigator.hardwareConcurrency);
      if (window.innerWidth > 0 && window.outerWidth > 0) {
        a = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
        b.zoom_ratio = a;
      }
      if (window.getComputedStyle && document.documentElement != null) {
        d = window.getComputedStyle(document.documentElement);
        d != null && (b.document_font_size = d.fontSize);
      }
      c('WebBrowserDimensionsTypedLoggerLite').log(b);
    }
    g.init = a;
  },
  98,
);
__d(
  'CometBatchNotificationsStateChangeSubscription',
  ['CometBatchNotificationsStateChangeSubscription.graphql', 'CometRelay'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i =
        h !== void 0
          ? h
          : (h = b('CometBatchNotificationsStateChangeSubscription.graphql'));
    function a(a) {
      return d('CometRelay').requestSubscription(a, {
        subscription: i,
        variables: {
          environment: 'MAIN_SURFACE',
          input: {
            environment: 'MAIN_SURFACE',
            query_flags: ['INCLUDE_WA_P2B_NOTIFS'],
          },
        },
      });
    }
    g.subscription = i;
    g.batchSubscribe = a;
  },
  98,
);
__d(
  'CometNotificationsStateChangeSubscription',
  ['CometNotificationsStateChangeSubscription.graphql', 'CometRelay'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i =
        h !== void 0
          ? h
          : (h = b('CometNotificationsStateChangeSubscription.graphql'));
    function a(a) {
      return d('CometRelay').requestSubscription(a, {
        subscription: i,
        variables: {
          environment: 'MAIN_SURFACE',
          input: {
            environment: 'MAIN_SURFACE',
            query_flags: ['INCLUDE_WA_P2B_NOTIFS'],
          },
        },
      });
    }
    c = { subscribe: a, subscription: i };
    g['default'] = c;
  },
  98,
);
__d(
  'MWCMGetGroupId',
  ['I64', 'LSDatabaseDeferred.bs', 'Promise', 'ReQL'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return new (b('Promise'))(function (b, c) {
        d('LSDatabaseDeferred.bs')
          .db.then(function (e) {
            e.runInTransaction(function (c) {
              return d('ReQL')
                .firstAsync(
                  d('ReQL')
                    .fromTableAscending(c.table('threads'))
                    .getKeyRange(d('I64').of_string(a)),
                )
                .then(function (a) {
                  if (a)
                    return d('ReQL')
                      .firstAsync(
                        d('ReQL')
                          .fromTableAscending(c.table('community_folders'))
                          .getKeyRange(a.parentThreadKey),
                      )
                      .then(function (a) {
                        a ? b(d('I64').to_string(a.fbGroupId)) : b();
                      });
                  else b();
                });
            }, 'readonly')['catch'](function (a) {
              c(a);
            });
          })
          ['catch'](function (a) {
            c(a);
          });
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'AvailableListState',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ OFFLINE: 0, IDLE: 1, ACTIVE: 2, MOBILE: 3 });
    f['default'] = a;
  },
  66,
);
__d(
  'PresenceStatusProviderSubscription',
  [
    'AvailableListState',
    'CometHomeContactsConfig',
    'CometRelay',
    'CurrentUser',
    'PresenceStatusProviderSubscription_ContactProfilesQuery.graphql',
    'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql',
    'PresenceStatusProviderSubscription_rankings.graphql',
    'Promise',
    'WebPixelRatio',
    'chunkArray',
    'promiseDone',
    'qex',
    'recoverableViolation',
    'relay-runtime',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j,
      k = c('requireDeferred')('FBMqttChannel').__setRef(
        'PresenceStatusProviderSubscription',
      ),
      l = c('requireDeferred')('MessengerMQTTPresence').__setRef(
        'PresenceStatusProviderSubscription',
      ),
      m = Object.assign.apply(
        Object,
        [{}].concat(
          Object.entries(c('AvailableListState')).map(function (a) {
            var b,
              c = a[0];
            a = a[1];
            return (b = {}), (b[String(a)] = c), b;
          }),
        ),
      ),
      n =
        h !== void 0
          ? h
          : (h = b(
              'PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql',
            )),
      o =
        i !== void 0
          ? i
          : (i = b(
              'PresenceStatusProviderSubscription_ContactProfilesQuery.graphql',
            ));
    function p(a) {
      var b = null,
        c = k.onReady(function (c) {
          c.subscribe('/legacy_web', function (b) {
            var c = JSON.parse(b);
            c.type === 'privacy_changed' &&
              a.commitUpdate(function (a) {
                a = a.getRoot();
                if (a == null) return;
                a = a.getLinkedRecord('viewer');
                if (a == null) return;
                a.setValue(
                  ((a = c.data) == null ? void 0 : a.visibility) === !0,
                  'chat_visibility',
                );
              });
          }),
            (b = function () {
              return c.unsubscribeAll('/legacy_web');
            });
        });
      return {
        remove: function () {
          c.remove(), b != null && b();
        },
      };
    }
    function q(a, b, c, d, e) {
      var f = null,
        g = l.onReady(function (g) {
          g.subscribe({
            reset: function () {
              var f = b.current,
                g = {};
              Object.keys(f).forEach(function (a) {
                delete g[a];
              });
              b.current = g;
              z(a, b.current, c, d, e);
            },
            setMultiFromMQTT: function (f) {
              var g = b.current,
                h = babelHelpers['extends']({}, g);
              f.forEach(function (a) {
                h[a.u] = { last_active_time: a.l, status: a.p };
              });
              b.current = h;
              z(a, b.current, c, d, e);
            },
          }),
            (f = function () {
              return g.unsubscribe();
            });
        });
      return {
        remove: function () {
          g.remove(), f != null && f();
        },
      };
    }
    function r(a, b, c, e, f) {
      var g,
        h = d('relay-runtime').getRequest(n);
      h = d('relay-runtime').createOperationDescriptor(h, {});
      h = a.lookup(h.fragment);
      g = (g = h.data) == null ? void 0 : g.viewer;
      var i =
        typeof g === 'object' ? (g == null ? void 0 : g.chat_visibility) : null;
      e.current = !!i;
      return a.subscribe(h, function (d) {
        d = d.data;
        d = d == null ? void 0 : d.viewer;
        if (typeof d !== 'object' || d == null) return;
        var g = d == null ? void 0 : d.presence_view_side_settings;
        if (
          typeof g === 'object' &&
          g != null &&
          g.has_converted_to_view_side_settings === !0
        )
          return;
        g = d.chat_visibility;
        i != null && g !== i && z(a, b.current, c, e, f);
        i = g;
      });
    }
    var s = { height: 36, scale: d('WebPixelRatio').get(), width: 36 },
      t = 500;
    function u(a, e) {
      a = c('chunkArray')(Array.from(a), t);
      a = a.map(function (a) {
        return d('CometRelay')
          .fetchQuery(
            e,
            o,
            { ids: a, scale: d('WebPixelRatio').get() },
            { fetchPolicy: 'store-or-network' },
          )
          .toPromise();
      });
      return b('Promise').all(a);
    }
    var v = function (a, b, d) {
      if (b.size === 0) return;
      c('promiseDone')(
        u(b, d).then(function (b) {
          d.commitUpdate(function (c) {
            b.forEach(function (b) {
              b =
                (b == null
                  ? void 0
                  : (b = b.viewer) == null
                  ? void 0
                  : b.chat_sidebar_contact_nodes) || [];
              b.forEach(function (b) {
                b = w(b, c);
                a.push(b);
              });
            }),
              y(c, a);
          });
        }),
      );
    };
    function w(a, b) {
      var c = a == null ? void 0 : a.id;
      if (c == null) return;
      var d = b.get(c);
      d == null && (d = b.create(c, 'User'));
      b = a == null ? void 0 : a.name;
      if (b == null) return;
      d.setValue(b, 'name');
      c = d.getOrCreateLinkedRecord('profile_picture', 'Image', s);
      b = a == null ? void 0 : (b = a.profile_picture) == null ? void 0 : b.uri;
      if (b == null) return;
      c.setValue(
        a == null ? void 0 : (b = a.profile_picture) == null ? void 0 : b.uri,
        'uri',
      );
      d.setLinkedRecord(c, 'profile_picture', s);
      return d;
    }
    var x = function (a, b, d, e) {
      a.commitUpdate(function (f) {
        if (d == null) return;
        var g = new Set(
            Object.keys(b).filter(function (a) {
              return (
                c('CurrentUser').getID() !== a &&
                ((a = b[a]) == null ? void 0 : a.status) === 2
              );
            }),
          ),
          h = d
            .filter(function (a) {
              var c = a.buddy_id;
              a = a.status;
              return a == null || c == null
                ? !1
                : ((c = e.current
                    ? (c = b[c]) == null
                      ? void 0
                      : c.status
                    : 0) != null
                    ? c
                    : 0) === a;
            })
            .map(function (a) {
              a = (a = a.user) == null ? void 0 : a.id;
              if (a == null) return null;
              g['delete'](a);
              return f.get(a);
            })
            .filter(Boolean);
        g.size > 0 &&
          (g.forEach(function (a) {
            var b = f.get(a);
            if (b != null && b.getValue('name') != null) {
              var c = b.getLinkedRecord('profile_picture', s);
              c != null &&
                c.getValue('uri') != null &&
                (h.push(b), g['delete'](a));
            }
          }),
          v(h, g, a));
        y(f, h);
      });
    };
    function y(a, b) {
      var d;
      a = a.getRoot().getLinkedRecord('viewer');
      if (a == null) {
        c('recoverableViolation')(
          'Viewer should not be null here, something has gone horribly wrong',
          'messenger_web_product',
        );
        return;
      }
      d = (d = c('qex')._('274')) != null ? d : !1;
      if (d) {
        d = a.getLinkedRecord('initial_presence_data');
        d = d == null ? void 0 : d.getLinkedRecord('ls_initial_presence_data');
        d == null ? void 0 : d.setLinkedRecords(b, 'ranked_contacts');
      } else
        a.setLinkedRecords(b, 'chat_sidebar_contacts', {
          count: c('CometHomeContactsConfig').numContactsToFetch,
        });
    }
    function z(a, b, c, d, e) {
      a.commitUpdate(function (a) {
        var e = a.getRoot();
        if (e == null) return;
        e = e.getLinkedRecord('viewer');
        if (e == null) return;
        var f = e.getLinkedRecord('presence_view_side_settings'),
          g =
            (f != null &&
              f.getValue('has_converted_to_view_side_settings') === !0) ||
            e.getValue('chat_visibility') === !0;
        f = e.getLinkedRecord('actor');
        f != null && g
          ? f.setValue('ACTIVE', 'availability')
          : f != null && f.setValue('OFFLINE', 'availability');
        d.current = g;
        e = Object.keys(b);
        e.forEach(function (c) {
          var d, e;
          d = (d = b[c]) == null ? void 0 : d.status;
          e = (e = b[c]) == null ? void 0 : e.last_active_time;
          d = d == null ? null : m[String(d)];
          var f = a.get(c);
          f == null && d === 'ACTIVE' && (f = a.create(c, 'User'));
          f != null &&
            (f.setValue(d === 'ACTIVE' && g ? d : null, 'availability'),
            !g
              ? f.setValue(null, 'last_active_time')
              : e !== 0 && e != null && f.setValue(e, 'last_active_time'));
        });
        c();
      }),
        x(a, b, e, d);
    }
    function a(a, e, f, g, h) {
      h =
        h != null
          ? h.map(function (a) {
              return d('CometRelay').readInlineData(
                j !== void 0
                  ? j
                  : (j = b(
                      'PresenceStatusProviderSubscription_rankings.graphql',
                    )),
                a,
              );
            })
          : null;
      var i = p(a),
        k = c('qex')._('274') ? null : q(a, e, f, g, h),
        l = r(a, e, f, g, h);
      return {
        remove: function () {
          k == null ? void 0 : k.remove(), i.remove(), l.dispose();
        },
      };
    }
    g.fetchProfiles = u;
    g.updateContactProfile = w;
    g.updateChatSidebarContacts = y;
    g.init = a;
  },
  98,
);
__d(
  'PresenceStatusProviderSubscriptionComponent.react',
  [
    'CometRelay',
    'PresenceStatusProviderSubscription',
    'PresenceStatusProviderSubscriptionComponentQuery.graphql',
    'WebPixelRatio',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useEffect,
      j = 50,
      k = function () {
        return d('CometRelay').useLazyLoadQuery(
          h !== void 0
            ? h
            : (h = b(
                'PresenceStatusProviderSubscriptionComponentQuery.graphql',
              )),
          { count: j, scale: d('WebPixelRatio').get() },
        );
      };
    function a(a) {
      var b = a.chatVisibilityRef,
        c = a.presenceInformer,
        e = a.presenceMap;
      a = k();
      var f =
          (a =
            a == null
              ? void 0
              : (a = a.viewer) == null
              ? void 0
              : a.chat_sidebar_contact_rankings) != null
            ? a
            : null,
        g = d('CometRelay').useRelayEnvironment();
      i(
        function () {
          var a = d('PresenceStatusProviderSubscription').init(g, e, c, b, f);
          return function () {
            a.remove();
          };
        },
        [g, c, e, f, b],
      );
      return null;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCallBlockSettingHooks',
  [
    'CometRelay',
    'DateConsts',
    'RTWebCallBlockSettingHooksQuery.graphql',
    'RTWebCallBlockedSettingSubscription',
    'RTWebPreCallContext',
    'ServerTime',
    'promiseDone',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    e = d('react');
    var i = e.useContext,
      j = e.useEffect,
      k = e.useState,
      l = 6e4,
      m = h !== void 0 ? h : (h = b('RTWebCallBlockSettingHooksQuery.graphql')),
      n = function (a, b) {
        return function (c) {
          c = c.getRoot();
          if (c == null) return;
          c = c.getLinkedRecord('viewer');
          if (c == null) return;
          c.setValue(b, a);
        };
      };
    function o(a) {
      return a === -1 ? a : (a || 0) * d('DateConsts').MS_PER_SEC;
    }
    function p() {
      var a = d('CometRelay').useRelayEnvironment(),
        b = d('CometRelay').getActorID(a),
        e = k(0),
        f = e[0],
        g = e[1];
      j(
        function () {
          var e = d('CometRelay')
            .fetchQuery(a, m, {}, { fetchPolicy: 'store-or-network' })
            .toPromise()
            .then(function (a) {
              a = a == null ? void 0 : a.viewer;
              a != null && g(o(a.call_blocked_until));
            });
          c('promiseDone')(e);
          var f = d('RTWebCallBlockedSettingSubscription').subscribe(
            a,
            { viewer_id: b },
            function (b) {
              b = b == null ? void 0 : b.rtweb_call_blocked_setting_subscribe;
              b != null &&
                (g(o(b.call_blocked_until)),
                a.commitUpdate(n('call_blocked_until', b.call_blocked_until)));
            },
          );
          return function () {
            f.dispose();
          };
        },
        [a, b],
      );
      return f;
    }
    function q() {
      var a = p(),
        b = d('ServerTime').getMillis(),
        c = a < 0,
        e = a > b;
      b = k(c || e);
      var f = b[0],
        g = b[1];
      (c || e) !== f && g(c || e);
      j(
        function () {
          if (e) {
            var b = window.setInterval(function () {
              a <= d('ServerTime').getMillis() &&
                (g(!1), window.clearInterval(b));
            }, l);
            return function () {
              window.clearInterval(b);
            };
          }
        },
        [a, e],
      );
      return f;
    }
    function a() {
      var a = i(c('RTWebPreCallContext')),
        b = q();
      j(
        function () {
          a != null && a.callInviteModel.startListening({ callsBlocked: b });
        },
        [a, b],
      );
    }
    g.useCallBlockSettingValue = p;
    g.useHasCallsBlocked = q;
    g.useCallBlockSetting = a;
  },
  98,
);
__d(
  'showDesktopNotification',
  [
    'MessengerDesktopNotificationPermissions',
    'MessengerDesktopNotifications',
    'ZenonUserActionLogger',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 8e3;
    function a() {
      return function (a) {
        var b = a.acceptCall,
          e = a.body,
          f = a.icon;
        a = a.title;
        var g = {
          body: e,
          closeTime: h,
          icon: f,
          onClick: function () {
            d('ZenonUserActionLogger').logClick({
              component: 'browser_notification',
              surface: 'desktop_notification',
            }),
              window.focus(),
              b({ trigger: 'desktop_notification' });
          },
          onShow: function () {
            d('ZenonUserActionLogger').logImpression({
              component: 'browser_notification',
              surface: 'desktop_notification',
            });
          },
          title: a,
        };
        if (
          d('MessengerDesktopNotifications').checkPermission() ===
          c('MessengerDesktopNotificationPermissions').DEFAULT
        ) {
          d('MessengerDesktopNotifications').requestPermission(function () {
            d('MessengerDesktopNotifications').showNotification(g);
          });
          return;
        }
        d('MessengerDesktopNotifications').showNotification(g);
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCallInviteDesktopNotification.react',
  [
    'fbt',
    'RTWebPreCallHooks',
    'ZenonUsersHooks',
    'react',
    'showDesktopNotification',
    'usePrevious',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      a = a.invite;
      return (a == null ? void 0 : a.type) === 'ringing'
        ? i.jsx(j, { invite: a })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function j(a) {
      a = a.invite;
      var b = c('showDesktopNotification')(),
        e = c('usePrevious')(a.ringID),
        f = d('RTWebPreCallHooks').useAcceptCallCallback(),
        g = d('ZenonUsersHooks').useZenonUser(a.inviterID),
        h = a.requestingVideo,
        i = a.participants.length > 1;
      if (e !== a.ringID && g != null) {
        b({
          acceptCall: f,
          body: l(g.shortName),
          icon: (e = g.profilePictureUrl) != null ? e : null,
          title: k(h, i),
        });
      }
      return null;
    }
    function k(a, b) {
      if (!b)
        return a
          ? h._('__JHASH__tNVvdc3BFrb__JHASH__')
          : h._('__JHASH__g-EGCs7nK0S__JHASH__');
      else
        return a
          ? h._('__JHASH__xQCntgBdfrr__JHASH__')
          : h._('__JHASH__P8yKBnycp5c__JHASH__');
    }
    function l(a) {
      return h._('__JHASH__Cy_ySzw9b09__JHASH__', [h._param('caller name', a)]);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCometIncomingCallContent.react',
  [
    'fbt',
    'CometProgressIndicator.react',
    'QPLUserFlow',
    'RTWebCometCallMessageLayout.react',
    'RTWebPreCallHooks',
    'ZenonUsersHooks',
    'qpl',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useEffect;
    function a(a) {
      var b = a.inviterID,
        e = a.isVideoCall;
      a = a.participantIDs;
      b = d('ZenonUsersHooks').useZenonUser(b);
      var f = d('ZenonUsersHooks').useZenonUsers(a).valueSeq().toArray();
      k(f, a, c('qpl')._(64225282, '3408'));
      a = a.length > 1;
      var g = a
        ? e
          ? h._('__JHASH__qP1b4M_nTXB__JHASH__', [
              h._param('caller name', b == null ? void 0 : b.name),
            ])
          : h._('__JHASH__YsiR5w0qBLR__JHASH__', [
              h._param('caller name', b == null ? void 0 : b.name),
            ])
        : h._('__JHASH__TTe25Nj-Ero__JHASH__', [
            h._param('caller name', b == null ? void 0 : b.name),
          ]);
      a = a
        ? e
          ? h._('__JHASH__ZsGiBdfFxcf__JHASH__')
          : h._('__JHASH__OMWmh1IhBCA__JHASH__')
        : h._('__JHASH__OMWmh1IhBCA__JHASH__');
      return b === null
        ? i.jsx(c('CometProgressIndicator.react'), {})
        : i.jsx(c('RTWebCometCallMessageLayout.react'), {
            caller: b,
            mainMessage: g,
            participants: f,
            subMessage: a,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function k(a, b, d) {
      var e = l();
      j(
        function () {
          a.length === 0 &&
            c('QPLUserFlow').addPoint(d, 'fetching_participants', {
              instanceKey: e,
            }),
            a.length === b.length &&
              c('QPLUserFlow').addPoint(d, 'fetched_participants', {
                instanceKey: e,
              });
        },
        [e, b.length, a, d],
      );
    }
    function l() {
      var a = d('RTWebPreCallHooks').useCallInvite();
      return +(a == null ? void 0 : a.ringID);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebMDSCallNotificationDialog.react',
  [
    'fbt',
    'CometColumn.react',
    'CometColumnItem.react',
    'CometRow.react',
    'CometRowItem.react',
    'MDSCircleButton.react',
    'MDSControlledUserBlockingDialog.react',
    'MDSFacepilePhoto.react',
    'MDSIcon.react',
    'MDSText.react',
    'MDSTextPairing.react',
    'MessengerCamcorder.svg.react',
    'MessengerCross.svg.react',
    'MessengerLock.svg.react',
    'MessengerPhone.svg.react',
    'SVGIcon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = { content: { maxWidth: 'x1tkr9og', $$css: !0 } };
    function a(a) {
      var b = a.acceptLabel,
        e = a.declineLabel,
        f = a.headline,
        g = a.isE2EECall;
      g = g === void 0 ? !1 : g;
      var k = a.isVideoCall,
        l = a.metaContent,
        m = a.onAccept,
        n = a.onClose,
        o = a.onDecline;
      a = a.profiles;
      var p = function () {
          o(), n();
        },
        q = function () {
          m(), n();
        };
      g = i.jsx(c('MDSText.react'), {
        type: 'meta2',
        children: g
          ? i.jsxs(c('CometRow.react'), {
              align: 'center',
              paddingHorizontal: 0,
              paddingVertical: 0,
              spacing: 0,
              verticalAlign: 'center',
              children: [
                i.jsx(c('CometRowItem.react'), {
                  children: i.jsx(c('MDSIcon.react'), {
                    color: 'secondary',
                    icon: d('SVGIcon').svgIcon(c('MessengerLock.svg.react')),
                    size: 20,
                  }),
                }),
                i.jsx(c('CometRowItem.react'), {
                  children: h._('__JHASH__-ecQvdNdcfW__JHASH__'),
                }),
              ],
            })
          : l,
      });
      return i.jsx(c('MDSControlledUserBlockingDialog.react'), {
        disableClosingWithMask: !0,
        onDismiss: p,
        size: 'content',
        withCloseButton: !0,
        children: i.jsxs(c('CometColumn.react'), {
          align: 'center',
          expanding: !0,
          paddingHorizontal: 20,
          xstyle: j.content,
          children: [
            i.jsx(c('CometColumnItem.react'), {
              paddingVertical: 8,
              children: i.jsx(c('MDSFacepilePhoto.react'), {
                items: a,
                size: 60,
              }),
            }),
            i.jsx(c('CometColumnItem.react'), {
              children: i.jsx(c('MDSTextPairing.react'), {
                headline: f,
                isSemanticHeading: !0,
                level: 1,
                meta: g,
                textAlign: 'center',
              }),
            }),
            i.jsx(c('CometColumnItem.react'), {
              align: 'stretch',
              expanding: !0,
              paddingVertical: 12,
              children: i.jsxs(c('CometRow.react'), {
                align: 'center',
                expanding: !0,
                children: [
                  i.jsx(c('CometRowItem.react'), {
                    children: i.jsxs(c('CometColumn.react'), {
                      align: 'center',
                      paddingHorizontal: 16,
                      spacing: 12,
                      children: [
                        i.jsx(c('CometColumnItem.react'), {
                          children: i.jsx(c('MDSCircleButton.react'), {
                            buttonColor: 'red',
                            color: 'white',
                            icon: d('SVGIcon').svgIcon(
                              c('MessengerCross.svg.react'),
                            ),
                            label: e,
                            onPress: p,
                            size: 40,
                          }),
                        }),
                        i.jsx(c('CometColumnItem.react'), {
                          children: i.jsx(c('MDSText.react'), {
                            align: 'center',
                            type: 'body4',
                            children: e,
                          }),
                        }),
                      ],
                    }),
                  }),
                  i.jsx(c('CometRowItem.react'), {
                    children: i.jsxs(c('CometColumn.react'), {
                      align: 'center',
                      paddingHorizontal: 16,
                      spacing: 12,
                      children: [
                        i.jsx(c('CometColumnItem.react'), {
                          children: i.jsx(c('MDSCircleButton.react'), {
                            buttonColor: 'green',
                            color: 'white',
                            icon:
                              k === !0
                                ? d('SVGIcon').svgIcon(
                                    c('MessengerCamcorder.svg.react'),
                                  )
                                : d('SVGIcon').svgIcon(
                                    c('MessengerPhone.svg.react'),
                                  ),
                            label: b,
                            onPress: q,
                            size: 40,
                            testid: void 0,
                          }),
                        }),
                        i.jsx(c('CometColumnItem.react'), {
                          children: i.jsx(c('MDSText.react'), {
                            align: 'center',
                            type: 'body4',
                            children: b,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCometIncomingCallDialogContainer.react',
  [
    'fbt',
    'ix',
    'RTWebCometCallDialog.react',
    'RTWebCometIncomingCallContent.react',
    'RTWebMDSCallNotificationDialog.react',
    'ZenonUserActionLogger',
    'ZenonUsersHooks',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    function a(a) {
      var b = a.inviterID,
        e = a.isE2EECall;
      e = e === void 0 ? !1 : e;
      var f = a.isVideoCall;
      f = f === void 0 ? !0 : f;
      var g = a.onAccept,
        l = a.onClose,
        m = a.onDecline;
      a = a.participantIDs;
      var n = d('ZenonUsersHooks').useZenonUser(b),
        o = a.length > 1;
      if (c('RTWebMDSCallNotificationDialog.react') != null) {
        return j.jsx(c('RTWebMDSCallNotificationDialog.react'), {
          acceptLabel: h._('__JHASH__dpE3kinjxKt__JHASH__'),
          declineLabel: h._('__JHASH__dTblojfehN7__JHASH__'),
          headline: o
            ? f
              ? h._('__JHASH__E5uMxVlOys1__JHASH__', [
                  h._param('name', n == null ? void 0 : n.name),
                ])
              : h._('__JHASH__k3FKWh9ZadY__JHASH__', [
                  h._param('name', n == null ? void 0 : n.name),
                ])
            : h._('__JHASH__PWAbxoD9AAl__JHASH__', [
                h._param('name', n == null ? void 0 : n.name),
              ]),
          isE2EECall: e,
          isVideoCall: f,
          metaContent: h._('__JHASH__pISuXhjR7Xl__JHASH__'),
          onAccept: g,
          onClose: l,
          onDecline: m,
          profiles: [
            {
              source: {
                uri:
                  (o = n == null ? void 0 : n.profilePictureUrl) != null
                    ? o
                    : '',
              },
            },
          ],
        });
      }
      return j.jsx(c('RTWebCometCallDialog.react'), {
        acceptIcon: f
          ? d('fbicon')._(i('493173'), 16)
          : d('fbicon')._(i('558160'), 16),
        acceptLabel: h._('__JHASH__ivfEGW_UIib__JHASH__'),
        acceptTestid: 'answerCallButton',
        body: j.jsx(c('RTWebCometIncomingCallContent.react'), {
          inviterID: b,
          isVideoCall: f,
          participantIDs: a,
        }),
        declineLabel: h._('__JHASH__BNPdoljcmpA__JHASH__'),
        onClose: function (a) {
          c('ZenonUserActionLogger').logClick({
            component: a ? 'accept_button' : 'decline_button',
            surface: 'incoming_call_dialog',
          }),
            a ? (g(), l()) : (m(), l());
        },
        title: k(f, a.length > 1),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function k(a, b) {
      if (!b)
        return a
          ? h._('__JHASH__HcszCzWYoZy__JHASH__')
          : h._('__JHASH__Y4Lt6k9IK3R__JHASH__');
      else
        return a
          ? h._('__JHASH__QH0_n03VzR0__JHASH__')
          : h._('__JHASH__OABxKl2ZdpF__JHASH__');
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useRTWebIncomingCallDialog',
  [
    'QPLUserFlow',
    'RTWebCometIncomingCallDialogContainer.react',
    'RTWebPreCallContext',
    'ZenonUserActionLogger',
    'qpl',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useState;
    function a(a) {
      var b = a.inviterID,
        e = a.isE2EECall,
        f = a.isVideoCall,
        g = a.onAccept,
        k = a.onDecline;
      a = a.participantIDs;
      var l = j(!1),
        m = l[0],
        n = l[1];
      l = i(c('RTWebPreCallContext'));
      var o = l ? l.callInviteModel : null;
      return [
        m
          ? h.jsx(c('RTWebCometIncomingCallDialogContainer.react'), {
              inviterID: b,
              isE2EECall: e,
              isVideoCall: f,
              onAccept: function () {
                g(), n(!1);
              },
              onClose: function () {
                return n(!1);
              },
              onDecline: function () {
                k(), n(!1);
              },
              participantIDs: a,
            })
          : null,
        {
          dismiss: function () {
            return n(!1);
          },
          show: function () {
            var a;
            d('ZenonUserActionLogger').logImpression({
              surface: 'incoming_call_dialog',
            });
            c('QPLUserFlow').addPoint(
              c('qpl')._(64225282, '3408'),
              'render_dialog',
              {
                instanceKey: +(o == null
                  ? void 0
                  : (a = o.getCurrentInvite()) == null
                  ? void 0
                  : a.ringID),
              },
            );
            n(!0);
          },
        },
      ];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebIncomingUnsupportedBrowserDialogWrapper.react',
  ['cr:230'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = b('cr:230');
  },
  98,
);
__d(
  'RTWebIncomingUnsupportedE2EEDialog.entrypoint',
  [
    'JSResourceForInteraction',
    'RTWebIncomingUnsupportedE2EEDialogNameQuery$Parameters',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        a = a.id;
        return {
          queries: {
            queryReference: {
              parameters: b(
                'RTWebIncomingUnsupportedE2EEDialogNameQuery$Parameters',
              ),
              variables: { id: a },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'RTWebIncomingUnsupportedE2EEDialog.react',
      ).__setRef('RTWebIncomingUnsupportedE2EEDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'useRTWebIncomingUnsupportedBrowserDialog',
  [
    'CometPlaceholder.react',
    'RTWebIncomingUnsupportedBrowserDialogWrapper.react',
    'RTWebIncomingUnsupportedE2EEDialog.entrypoint',
    'RelayHooks',
    'ZenonUserActionLogger',
    'react',
    'useCometRelayEntrypointContextualEnvironmentProvider',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState;
    function a(a) {
      var b = a.inviterID,
        e = a.isE2EECall,
        f = a.isVideoCall,
        g = a.onClose,
        j = a.participantIDs;
      a = a.threadType;
      var k = i(!1),
        l = k[0],
        m = k[1];
      k = c('useCometRelayEntrypointContextualEnvironmentProvider')();
      k = d('RelayHooks').useEntryPointLoader(
        k,
        c('RTWebIncomingUnsupportedE2EEDialog.entrypoint'),
      );
      var n = k[0],
        o = k[1];
      function p(a) {
        a && e && n == null && o({ id: b }), m(a);
      }
      return [
        l
          ? e
            ? h.jsx(c('CometPlaceholder.react'), {
                fallback: null,
                children:
                  n != null &&
                  h.jsx(d('RelayHooks').EntryPointContainer, {
                    entryPointReference: n,
                    props: {
                      inviterID: b,
                      onClose: function () {
                        g(), p(!1);
                      },
                      threadType: a,
                    },
                  }),
              })
            : h.jsx(c('RTWebIncomingUnsupportedBrowserDialogWrapper.react'), {
                hide: function () {
                  return p(!1);
                },
                inviterID: b,
                isVideoCall: f,
                onClose: function () {
                  g(), p(!1);
                },
                participantIDs: j,
                threadType: a,
              })
          : null,
        {
          dismiss: function () {
            return p(!1);
          },
          show: function () {
            d('ZenonUserActionLogger').logImpression({
              surface: 'unsupported_browser_dialog',
            }),
              p(!0);
          },
        },
      ];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCometMissedCallContent.react',
  [
    'fbt',
    'CometProgressIndicator.react',
    'CometRelativeTimestamp.react',
    'RTWebCometCallMessageLayout.react',
    'ZenonUsersHooks',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.inviterID,
        e = a.isRoomCall,
        f = a.isVideoCall,
        g = a.participantIDs;
      a = a.timeMissed;
      b = d('ZenonUsersHooks').useZenonUser(b);
      var j = d('ZenonUsersHooks').useZenonUsers(g).valueSeq().toArray();
      g = g.length > 1;
      g =
        !g || e
          ? h._('__JHASH__yg5Wj05Olkt__JHASH__', [
              h._param('caller name', b == null ? void 0 : b.name),
            ])
          : f
          ? h._('__JHASH__N8i901ca52j__JHASH__', [
              h._param('caller name', b == null ? void 0 : b.name),
            ])
          : h._('__JHASH__DUJ5tOEW6-x__JHASH__', [
              h._param('caller name', b == null ? void 0 : b.name),
            ]);
      return b === null
        ? i.jsx(c('CometProgressIndicator.react'), {})
        : i.jsx(c('RTWebCometCallMessageLayout.react'), {
            caller: b,
            mainMessage: g,
            participants: j,
            subMessage: i.jsx(c('CometRelativeTimestamp.react'), {
              date: a,
              format: 'normal',
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCometMissedCallDialogContainer.react',
  [
    'fbt',
    'ix',
    'IntlVariations',
    'RTWebCometCallDialog.react',
    'RTWebCometMissedCallContent.react',
    'ZenonUserActionLogger',
    'ZenonUsersHooks',
    'cr:3626',
    'emptyFunction',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    function a(a) {
      var e = a.inviterID,
        f = a.isVideoCall,
        g = a.onCallback,
        l = a.onClose,
        m = a.participantIDs;
      a = a.timeMissed;
      var n = d('ZenonUsersHooks').useZenonUser(e);
      if (b('cr:3626') != null) {
        return j.jsx(b('cr:3626'), {
          acceptLabel: h._('__JHASH__EBp4M17vY4j__JHASH__'),
          declineLabel: h._('__JHASH__GgiLHNwW0uJ__JHASH__'),
          headline: h._('__JHASH__6OttBPSrAFd__JHASH__', [
            h._name(
              'caller',
              n == null ? void 0 : n.name,
              c('IntlVariations').GENDER_UNKNOWN,
            ),
          ]),
          isVideoCall: f,
          metaContent: h._('__JHASH__d_49GG-7G7P__JHASH__', [
            h._name(
              'caller',
              n == null ? void 0 : n.name,
              c('IntlVariations').GENDER_UNKNOWN,
            ),
          ]),
          onAccept: g,
          onClose: l,
          onDecline: c('emptyFunction'),
          profiles: [
            {
              source: {
                uri:
                  (n = n == null ? void 0 : n.profilePictureUrl) != null
                    ? n
                    : '',
              },
            },
          ],
        });
      }
      return j.jsx(c('RTWebCometCallDialog.react'), {
        acceptIcon: f
          ? d('fbicon')._(i('493173'), 16)
          : d('fbicon')._(i('558160'), 16),
        acceptLabel: h._('__JHASH__NM_tQ4oG79k__JHASH__'),
        body: j.jsx(c('RTWebCometMissedCallContent.react'), {
          inviterID: e,
          isRoomCall: !1,
          isVideoCall: f,
          participantIDs: m,
          timeMissed: a,
        }),
        declineLabel: h._('__JHASH__EugSOocwBfG__JHASH__'),
        onClose: function (a) {
          c('ZenonUserActionLogger').logClick({
            component: a ? 'call_back' : 'close_dialog',
            surface: 'missed_call_dialog',
          });
          a &&
            c('ZenonUserActionLogger').logClick({
              component: 'start_call_button',
              surface: 'missed_call_dialog',
            });
          l();
          return a ? g() : void 0;
        },
        title: k(f, m.length > 1),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function k(a, b) {
      if (!b)
        return a
          ? h._('__JHASH__Gs4O-fXsGXr__JHASH__')
          : h._('__JHASH__CL9qW1mKn0M__JHASH__');
      else
        return a
          ? h._('__JHASH__TGMW_qMV6h8__JHASH__')
          : h._('__JHASH__Yhj5-AH8Y2o__JHASH__');
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useRTWebMissedCallDialog',
  [
    'RTWebCometMissedCallDialogContainer.react',
    'ZenonUserActionLogger',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState;
    function a(a) {
      var b = a.inviterID,
        e = a.isVideoCall,
        f = a.onCallback,
        g = a.participantIDs;
      a = a.timeMissed;
      var j = i(!1),
        k = j[0],
        l = j[1];
      return [
        k
          ? h.jsx(c('RTWebCometMissedCallDialogContainer.react'), {
              inviterID: b,
              isVideoCall: e,
              onCallback: f,
              onClose: function () {
                return l(!1);
              },
              participantIDs: g,
              timeMissed: a,
            })
          : null,
        {
          dismiss: function () {
            return l(!1);
          },
          show: function () {
            d('ZenonUserActionLogger').logImpression({
              surface: 'missed_call_dialog',
            }),
              l(!0);
          },
        },
      ];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCometRoomIncomingCallDialog.entrypoint',
  [
    'JSResourceForInteraction',
    'RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            queryReference: {
              parameters: b(
                'RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters',
              ),
              variables: { nuxID: 8259 },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'RTWebCometRoomIncomingCallDialogContainer.react',
      ).__setRef('RTWebCometRoomIncomingCallDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'useRoomIncomingCallDialog',
  [
    'CometPlaceholder.react',
    'CometRelay',
    'RTWebCometRoomIncomingCallDialog.entrypoint',
    'RelayHooks',
    'VideoChatLinksUserActionsMultiplexLogger',
    'react',
    'useCometRelayEntrypointContextualEnvironmentProvider',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState;
    function a(a) {
      var b = a.inviterID,
        e = a.linkUrl,
        f = a.onAccept,
        g = a.onDecline,
        j = a.roomName;
      a = a.sender;
      var k = c('useCometRelayEntrypointContextualEnvironmentProvider')();
      k = d('RelayHooks').useEntryPointLoader(
        k,
        c('RTWebCometRoomIncomingCallDialog.entrypoint'),
      );
      var l = k[0],
        m = k[1];
      k = i(!1);
      var n = k[0],
        o = k[1];
      return [
        n && l != null
          ? h.jsx(c('CometPlaceholder.react'), {
              fallback: null,
              children: h.jsx(d('CometRelay').EntryPointContainer, {
                entryPointReference: l,
                props: {
                  inviterID: b,
                  linkUrl: e,
                  onAccept: function () {
                    f(), o(!1);
                  },
                  onDecline: function () {
                    g(), o(!1);
                  },
                  roomName: j,
                  sender: a,
                },
              }),
            })
          : null,
        {
          dismiss: function () {
            return o(!1);
          },
          show: function () {
            m({}),
              new (c('VideoChatLinksUserActionsMultiplexLogger'))()
                .setSurface('vcl_meetups_notification')
                .setEvent('room_ringback_received')
                .setVideoCallLinkURLRaw(e)
                .log(),
              o(!0);
          },
        },
      ];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCometRoomMissedCallDialogContainer.react',
  [
    'fbt',
    'ix',
    'RTWebCometCallDialog.react',
    'RTWebCometMissedCallContent.react',
    'VideoChatLinksUserActionsMultiplexLogger',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    function a(a) {
      var b = a.inviterID,
        e = a.linkUrl,
        f = a.onCallback,
        g = a.onClose,
        k = a.participantIDs,
        l = a.roomName;
      a = a.timeMissed;
      return j.jsx(c('RTWebCometCallDialog.react'), {
        acceptIcon: d('fbicon')._(i('493173'), 16),
        acceptLabel: h._('__JHASH__w3CZsnYYCtS__JHASH__'),
        body: j.jsx(c('RTWebCometMissedCallContent.react'), {
          inviterID: b,
          isRoomCall: !0,
          isVideoCall: !1,
          participantIDs: k,
          timeMissed: a,
        }),
        declineLabel: h._('__JHASH__EugSOocwBfG__JHASH__'),
        onClose: function (a) {
          a
            ? (new (c('VideoChatLinksUserActionsMultiplexLogger'))()
                .setSurface('vcl_meetups_notification')
                .setEvent('room_ringback_accepted')
                .setVideoCallLinkURLRaw(e)
                .log(),
              f())
            : new (c('VideoChatLinksUserActionsMultiplexLogger'))()
                .setSurface('vcl_meetups_notification')
                .setEvent('room_ringback_missed_dialog_dismissed')
                .setVideoCallLinkURLRaw(e)
                .log(),
            g();
        },
        title: h._('__JHASH__bMJmvEBqc28__JHASH__', [h._param('room name', l)]),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useRoomMissedCallDialog',
  [
    'RTWebCometRoomMissedCallDialogContainer.react',
    'VideoChatLinksUserActionsMultiplexLogger',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState;
    function a(a) {
      var b = a.inviterID,
        d = a.linkUrl,
        e = a.onCallback,
        f = a.participantIDs,
        g = a.roomName;
      a = a.timeMissed;
      var j = i(!1),
        k = j[0],
        l = j[1];
      return [
        k
          ? h.jsx(c('RTWebCometRoomMissedCallDialogContainer.react'), {
              inviterID: b,
              linkUrl: d,
              onCallback: e,
              onClose: function () {
                return l(!1);
              },
              participantIDs: f,
              roomName: g,
              timeMissed: a,
            })
          : null,
        {
          dismiss: function () {
            return l(!1);
          },
          show: function () {
            new (c('VideoChatLinksUserActionsMultiplexLogger'))()
              .setSurface('vcl_meetups_notification')
              .setEvent('room_ringback_missed')
              .setVideoCallLinkURLRaw(d)
              .log(),
              l(!0);
          },
        },
      ];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useZenonDialogController',
  ['react', 'usePrevious'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useState;
    function a(a, b) {
      var d = i(null),
        e = d[0],
        f = d[1],
        g = c('usePrevious')(a);
      h(
        function () {
          var c;
          if (
            (a == null ? void 0 : a.ringID) ===
              (g == null ? void 0 : g.ringID) &&
            (a == null ? void 0 : a.type) === (g == null ? void 0 : g.type)
          )
            return;
          e != null && (e.dismiss(), f(null));
          if (a === null) return;
          f(b);
          (c = b()) == null ? void 0 : c.show();
        },
        [e, b, a, g],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCometCallInviteDialogs.react',
  [
    'Actor',
    'RTWebDropInUtils',
    'RTWebIncomingRingConfiguration',
    'RTWebPreCallContext',
    'RTWebPreCallHooks',
    'ServerTime',
    'StartVideoChatLinkCall',
    'react',
    'useRTWebIncomingCallDialog',
    'useRTWebIncomingUnsupportedBrowserDialog',
    'useRTWebMissedCallDialog',
    'useRoomIncomingCallDialog',
    'useRoomMissedCallDialog',
    'useZenonDialogController',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    function a(a) {
      var b,
        e = a.invite;
      a = d('Actor').useActor();
      var f = a[0];
      a = i(c('RTWebPreCallContext'));
      var g = d('RTWebPreCallHooks').useStartCallCallback(),
        j = a ? a.callInviteModel : null,
        k = (a = e == null ? void 0 : e.participants) != null ? a : [],
        l = (a = e == null ? void 0 : e.isE2eeMandated) != null ? a : !1;
      a = (a = e == null ? void 0 : e.inviterID) != null ? a : '';
      b = (b = e == null ? void 0 : e.requestingVideo) != null ? b : !1;
      var m = null,
        n = '',
        o = '';
      if ((e == null ? void 0 : e.context.type) === 'room') {
        var p;
        m = e.context.room;
        n = (p = m.linkHash) != null ? p : '';
        o = (p = m.roomName) != null ? p : '';
      }
      var q = d('RTWebPreCallHooks').useAcceptCallCallback();
      p = c('useRoomMissedCallDialog')({
        inviterID: a,
        linkUrl: n,
        onCallback: function () {
          d('StartVideoChatLinkCall').startCall(n, !0, !0),
            j == null ? void 0 : j.dismiss();
        },
        participantIDs: k,
        roomName: o,
        timeMissed: new Date(d('ServerTime').getMillis()),
      });
      var r = p[0],
        s = p[1];
      p = c('useRTWebIncomingCallDialog')({
        inviterID: a,
        isE2EECall: l,
        isVideoCall: b,
        onAccept: function () {
          q({ trigger: 'comet_incoming_dialog_accept_button' });
        },
        onDecline: function () {
          j == null ? void 0 : j.decline('IgnoreCall');
        },
        participantIDs: k,
      });
      var t = p[0],
        u = p[1];
      p = c('useRTWebIncomingUnsupportedBrowserDialog')({
        inviterID: a,
        isE2EECall: l,
        isVideoCall: b,
        onClose: function () {
          j == null ? void 0 : j.dismiss();
        },
        participantIDs: k,
        threadType:
          (e == null ? void 0 : e.context.type) === 'thread'
            ? e.context.thread.type
            : 2,
      });
      var v = p[0],
        w = p[1];
      m = c('useRoomIncomingCallDialog')({
        inviterID: a,
        linkUrl: n,
        onAccept: function () {
          d('StartVideoChatLinkCall').startCall(n, !0, !0);
        },
        onDecline: function () {
          j == null ? void 0 : j.decline('IgnoreCall');
        },
        roomName: o,
        sender: (o = (p = m) == null ? void 0 : p.sender) != null ? o : '',
      });
      p = m[0];
      var x = m[1];
      o = c('useRTWebMissedCallDialog')({
        inviterID: a,
        isVideoCall: b,
        onCallback: function () {
          if ((e == null ? void 0 : e.context.type) === 'thread') {
            var a,
              b = e == null ? void 0 : e.context.thread;
            g({
              existingCall: null,
              invitees: [
                (a = e == null ? void 0 : e.inviterID) != null ? a : '',
              ].concat(
                k.filter(function (a) {
                  return a !== f;
                }),
              ),
              isE2eeMandated:
                (a = e == null ? void 0 : e.isE2eeMandated) != null ? a : !1,
              mediaType: (e == null ? void 0 : e.requestingVideo)
                ? 'video'
                : 'audio',
              thread: b,
              trigger: 'comet_missed_call_dialog',
            });
          }
          j == null ? void 0 : j.dismiss();
        },
        participantIDs: k,
        timeMissed: new Date(d('ServerTime').getMillis()),
      });
      m = o[0];
      var y = o[1];
      c('useZenonDialogController')(e, function () {
        if (e === null || j == null) return null;
        if (
          d('RTWebDropInUtils').isDropInFromAppMessages(
            e == null ? void 0 : e.controllerParams.appMessages,
          )
        )
          return null;
        if (l && !d('RTWebIncomingRingConfiguration').isE2EESupportedClient())
          return w;
        if (e.context.type === 'room')
          switch (e.type) {
            case 'ringing':
              return x;
            case 'missed':
              return s;
            default:
              return null;
          }
        switch (e.type) {
          case 'ringing':
            return u;
          case 'missed':
            return e.context.type === 'thread' ? y : null;
          case 'unsupported_browser':
            return w;
          default:
            return null;
        }
      });
      return h.jsxs(h.Fragment, { children: [t, m, v, r, p] });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useZenonRingTone',
  ['RTCSounds', 'Sound', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useEffect,
      i = [d('RTCSounds').ringtone_mp3_url, d('RTCSounds').ringtone_ogg_url];
    function a(a) {
      a === void 0 && (a = !1),
        h(
          function () {
            if (a) {
              d('Sound').play(i, null, !0);
              return function () {
                d('Sound').stop(i);
              };
            }
          },
          [a],
        );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonCallInviteRingtone.react',
  ['useZenonRingTone'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      a = a.invite;
      c('useZenonRingTone')((a == null ? void 0 : a.type) === 'ringing');
      return null;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useDocumentTitleBlink',
  ['DocumentTitle', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useEffect;
    function a(a) {
      h(
        function () {
          if (a == null) return;
          var b = c('DocumentTitle').blink(a);
          return function () {
            b.stop();
          };
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonCallInviteTitleBlinking.react',
  ['fbt', 'ZenonUsersHooks', 'react', 'useDocumentTitleBlink'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      a = a.invite;
      return a !== null && a.type === 'ringing' && a.inviterID != null
        ? i.jsx(j, { inviterID: a.inviterID })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function j(a) {
      a = a.inviterID;
      a = d('ZenonUsersHooks').useZenonUser(a);
      c('useDocumentTitleBlink')(
        a
          ? h._('__JHASH__MwALAshovbD__JHASH__', [
              h._param('name', a.shortName),
            ])
          : null,
      );
      return null;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCometCallInviteController.react',
  [
    'RTWebCallBlockSettingHooks',
    'RTWebCallInviteDesktopNotification.react',
    'RTWebCometCallInviteDialogs.react',
    'RTWebPreCallHooks',
    'ZenonCallInviteRingtone.react',
    'ZenonCallInviteTitleBlinking.react',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = c('requireDeferred')('FBRTCCallSummaryUploader').__setRef(
      'RTWebCometCallInviteController.react',
    );
    b.onReady(function (a) {
      a.init();
    });
    function a() {
      d('RTWebCallBlockSettingHooks').useCallBlockSetting();
      d('RTWebPreCallHooks').useNoAnswerTimeout();
      var a = d('RTWebPreCallHooks').useCallInvite();
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('RTWebCometCallInviteDialogs.react'), { invite: a }),
          h.jsx(c('RTWebCallInviteDesktopNotification.react'), { invite: a }),
          h.jsx(c('ZenonCallInviteRingtone.react'), { invite: a }),
          h.jsx(c('ZenonCallInviteTitleBlinking.react'), { invite: a }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonCallWindowOpener_Popup',
  ['ZenonUserActionLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1280,
      i = {
        LargeForGroup: { height: 772, width: 1100 },
        LargeForP2P: { height: 720, width: 1280 },
        Small: { height: 540, width: 960 },
      },
      j = [
        'menubar=no',
        'location=no',
        'scrollbars=no',
        'status=no',
        'personalbar=no',
      ];
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.openWindow = function (a) {
        a = this.$1(a.joinContext);
        var b = this.$2(a),
          c = b.left;
        b = b.top;
        d('ZenonUserActionLogger').logCheckpoint({
          checkpoint:
            'Opening_Popup: left=' +
            c +
            ',top=' +
            b +
            ',width=' +
            a.width +
            ',height=' +
            a.height,
        });
        return window.open(
          '',
          '',
          []
            .concat(j, [
              'height=' + a.height,
              'width=' + a.width,
              'left=' + c,
              'top=' + b,
            ])
            .join(','),
        );
      };
      b.$1 = function (a) {
        if (screen && screen.width > h)
          if (a.type === 'link' || a.thread.type === 2)
            return {
              height: i.LargeForGroup.height,
              width: i.LargeForGroup.width,
            };
          else
            return { height: i.LargeForP2P.height, width: i.LargeForP2P.width };
        else return { height: i.Small.height, width: i.Small.width };
      };
      b.$2 = function (a) {
        var b = a.height;
        a = a.width;
        return {
          left: Math.floor(
            window.innerWidth / 2 -
              a / 2 +
              ((a = window.screenLeft) != null ? a : window.screenX),
          ),
          top: Math.floor(
            window.innerHeight / 2 -
              b / 2 +
              ((a = window.screenTop) != null ? a : window.screenY),
          ),
        };
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'RTWebCallWindowOpener',
  ['RTWebDropInUtils', 'ZenonCallWindowOpener_Popup'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = new (c('ZenonCallWindowOpener_Popup'))();
      }
      var b = a.prototype;
      b.openWindow = function (a) {
        if (
          a.context.intent === 'accept invite' &&
          a.context.controllerParams.appMessages != null
        ) {
          var b = d('RTWebDropInUtils').isDropInFromAppMessages(
            a.context.controllerParams.appMessages,
          );
          if (b)
            return babelHelpers['extends']({}, window, {
              close: function () {
                return null;
              },
            });
        }
        return this.$1.openWindow(a);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonCallInviteModelTypes',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      missed: 'missed',
      ringing: 'ringing',
      unsupported_browser: 'unsupported_browser',
    };
    f.CallInviteModelType = a;
  },
  66,
);
__d(
  'ZenonCallInviteModel',
  [
    'BaseEventEmitter',
    'FBLogger',
    'ZenonCallInviteModelTypes',
    'ZenonCallsModelTypes',
    'ZenonIncomingRingSDKTypes',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this) || this;
        e.$ZenonCallInviteModel3 = function (a) {
          c('FBLogger')('rtc_www').info('Received cancel for: ', a.ringID);
          if (
            e.__currentRequest &&
            e.__currentRequest.model &&
            e.__currentRequest.model.ringID === a.ringID
          )
            switch (a.reason) {
              case d('ZenonIncomingRingSDKTypes').ZenonCancelReason.Hangup:
                a =
                  ((a = e.__currentRequest) == null
                    ? void 0
                    : (a = a.model) == null
                    ? void 0
                    : a.type) !==
                  d('ZenonCallInviteModelTypes').CallInviteModelType
                    .unsupported_browser;
                e.__currentRequest.model = babelHelpers['extends'](
                  {},
                  e.__currentRequest.model,
                  { type: 'missed' },
                );
                a && e.emit('callInvite', e.__currentRequest.model);
                break;
              case d('ZenonIncomingRingSDKTypes').ZenonCancelReason
                .OtherDismiss:
                e.dismiss();
                break;
            }
        };
        e.$ZenonCallInviteModel2 = function (a) {
          var b;
          c('FBLogger')('rtc_www').info('Receiving ring: ', a.ringID);
          if (
            ((b = e.__currentRequest) == null
              ? void 0
              : (b = b.model) == null
              ? void 0
              : b.type) === 'ringing'
          )
            return;
          e.__currentRequest = {
            model: {
              actorID: a.actorID,
              context: a.context,
              controllerParams: a.controllerParams,
              inviterID: a.inviterID,
              isE2eeMandated: a.isE2eeMandated,
              participants: a.otherParticipants,
              receiverUserId: a.receiverUserId,
              requestingVideo: a.requestingVideo,
              ringID: a.ringID,
              type: a.isClientPermissableRing
                ? 'ringing'
                : 'unsupported_browser',
            },
            ringPayload: a,
          };
          e.emit('callInvite', e.__currentRequest.model);
          a.isClientPermissableRing || a.onDecline('VersionUnsupported');
        };
        e.$ZenonCallInviteModel1 = function (a) {
          var b = c('gkx')('97');
          b ||
            (c('FBLogger')('rtc_www').info('Blocking ring: ', a.ringID),
            a.onDecline(
              'IgnoreCall',
              d('ZenonCallsModelTypes').ZenonEndCallSubreason.CallsBlocked,
            ));
        };
        e.__eventSource = b;
        e.__currentRequest = null;
        return e;
      }
      var e = b.prototype;
      e.getCurrentInvite = function () {
        var a;
        return (a = (a = this.__currentRequest) == null ? void 0 : a.model) !=
          null
          ? a
          : null;
      };
      e.startListening = function (a) {
        a = a.callsBlocked;
        this.__currentRequest && this.dismiss();
        this.stopListening();
        a
          ? this.__eventSource.addListener(
              'incomingRing',
              this.$ZenonCallInviteModel1,
            )
          : (this.__eventSource.addListener(
              'incomingRing',
              this.$ZenonCallInviteModel2,
            ),
            this.__eventSource.addListener(
              'ringCancel',
              this.$ZenonCallInviteModel3,
            ));
      };
      e.stopListening = function () {
        this.__eventSource.removeAllListeners('incomingRing'),
          this.__eventSource.removeAllListeners('ringCancel'),
          (this.__currentRequest = null);
      };
      e.dismiss = function () {
        var a;
        c('FBLogger')('rtc_www').info(
          'Dismissing ring: ',
          (a = this.__currentRequest) == null
            ? void 0
            : (a = a.model) == null
            ? void 0
            : a.ringID,
        );
        this.__currentRequest = null;
        this.emit('callInvite', null);
      };
      e.accept = function (a, b) {
        var d = this.__currentRequest;
        if (d) {
          var e;
          c('FBLogger')('rtc_www').info(
            'Accepting ring: ',
            (e = d.model) == null ? void 0 : e.ringID,
          );
          ((e = d.model) == null ? void 0 : e.type) === 'ringing' &&
            d.ringPayload.onAccept(a, b);
          this.dismiss();
        }
      };
      e.decline = function (a, b) {
        a === void 0 && (a = 'IgnoreCall');
        var d = this.__currentRequest;
        if (d) {
          var e;
          c('FBLogger')('rtc_www').info(
            'Declining ring: ',
            (e = d.model) == null ? void 0 : e.ringID,
          );
          d.ringPayload.onDecline(a, b);
          this.dismiss();
          return;
        }
      };
      return b;
    })(c('BaseEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'delegateZenonCallInviteModel',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      (a.getCurrentInvite = b.getCurrentInvite.bind(b)),
        (a.startListening = b.startListening.bind(b)),
        (a.stopListening = b.stopListening.bind(b)),
        (a.dismiss = b.dismiss.bind(b)),
        (a.accept = b.accept.bind(b)),
        (a.decline = b.decline.bind(b)),
        b.addListener('callInvite', function (b) {
          a.emit('callInvite', b);
        });
    }
    f['default'] = a;
  },
  66,
);
__d(
  'ZenonCallWindowController',
  ['FBLogger', 'Promise', 'ZenonCallWindowErrors'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        var c = b.callWindowInitializerResource,
          d = b.callWindowOpener;
        b = b.uriBuilderResource;
        this.$2 = null;
        this.$3 = !1;
        this.$5 = null;
        this.$1 = a;
        this.$7 = b;
        this.$4 = c;
        this.$6 = d;
      }
      var e = a.prototype;
      e.initCall = function (a) {
        var e = this;
        if (this.$3)
          throw new (d('ZenonCallWindowErrors').OpeningAnotherCallError)();
        try {
          if (
            this.$2 &&
            !this.$2.closed &&
            a.joinContext.type === 'thread' &&
            this.$2.inCallWith === a.joinContext.thread.id
          ) {
            this.$2.focus();
            return [this.$2, b('Promise').resolve({ alohaEscalatedMW: !1 })];
          }
        } catch (a) {
          c('FBLogger')('rtc_www')
            .catching(a)
            .warn('Failed to access inCallWith on call window');
        }
        var f = this.$6.openWindow(a);
        try {
          this.$2 && (this.$2.closed || this.$2.close(), (this.$2 = null));
        } catch (a) {
          c('FBLogger')('rtc_www')
            .catching(a)
            .warn('Failed to access close on call window');
        }
        this.$2 = f;
        this.$3 = !0;
        return [
          f,
          b('Promise')
            .all([this.$7.load(), this.$4.load()])
            .then(function (b) {
              var c = b[0];
              b = b[1];
              e.$5 === null && (e.$5 = new b(e.$1, new c(e.$1)));
              return e.$5.initCall(e.$2, a);
            })
            ['finally'](function () {
              e.$3 = !1;
            }),
        ];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoPictureInPictureManager.react',
  [
    'CometSetWatchAndScrollVideoContext',
    'CometVideoPictureInPictureManagerContext',
    'CometWatchAndScrollVideoContext',
    'XCometWatchControllerRouteBuilder',
    'clearTimeout',
    'gkx',
    'qex',
    'react',
    'requireDeferred',
    'setTimeout',
    'useCometRouterDispatcher',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef,
      n = b.useState,
      o = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'CometVideoPictureInPictureManager.react',
      ),
      p = c('gkx')('1443572'),
      q = (e = c('qex')._('44')) != null ? e : 50;
    b = ['286211568997787', '214604021960500', '108677131037'];
    var r = (e = c('qex')._('586')) != null ? e : !1,
      s = window.document.pictureInPictureEnabled;
    function a(a) {
      var b = c('useCometRouterDispatcher')(),
        e = a.isPipEnabled,
        f = n(null),
        g = f[0],
        t = f[1];
      f = n(!1);
      var u = f[0],
        v = f[1];
      f = n(!1);
      var w = f[0],
        x = f[1],
        y = m(!1),
        z = i(function (a) {
          y.current = a;
        }, []);
      f = l(
        function () {
          return {
            hasNextChainedVideo: w,
            isPipEnabled: e,
            setHasNextChainedVideo: x,
            setSkippedFromPipPlayer: v,
            skippedFromPipPlayer: u,
          };
        },
        [u, v, w, x, e],
      );
      var A = n(null),
        B = A[0],
        C = A[1],
        D = j(c('CometWatchAndScrollVideoContext')),
        E = j(c('CometSetWatchAndScrollVideoContext')),
        F = m(null),
        G = m(null),
        H = i(function (a) {
          a === void 0 && (a = null),
            o.onReady(function (b) {
              b.log({ click_point: a, event: 'click' });
            });
        }, []),
        I = i(
          function () {
            var a = D == null ? void 0 : D.videoID,
              d = D == null ? void 0 : D.videoUrl;
            if (a != null && d != null) {
              var e = D == null ? void 0 : D.routeTracePolicy,
                f = D == null ? void 0 : D.subOrigin;
              d = p
                ? d
                : c('XCometWatchControllerRouteBuilder').buildURL({ v: a });
              b &&
                (b.go(d, {
                  passthroughProps: {
                    portableVideoID: B,
                    portalingRouteTracePolicy: e,
                    portalingSubOrigin: f,
                  },
                }),
                E(null));
            }
          },
          [b, D, B, E],
        ),
        J = i(
          function () {
            g != null &&
              (F.current = c('setTimeout')(function () {
                var a = g.getCurrentState(),
                  b = a.lastPauseReason;
                a = a.paused;
                y.current ||
                  (e && (a === !1 || (a === !0 && b === 'product_initiated'))
                    ? (I(), H('control_pip_player_return_to_tab'))
                    : window.document.pictureInPictureElement === null &&
                      (E(null), H('control_pip_player_close')));
              }, q));
          },
          [g, e, I, E, H],
        ),
        K = i(
          function () {
            g != null &&
              (r ||
                (window.navigator.mediaSession.setActionHandler(
                  'nexttrack',
                  null,
                ),
                window.navigator.mediaSession.setActionHandler(
                  'nexttrack',
                  function () {
                    g.pause('user_initiated'),
                      v(!0),
                      z(!1),
                      H('control_pip_player_skip');
                  },
                )),
              y.current ||
                (window.navigator.mediaSession.setActionHandler('play', null),
                window.navigator.mediaSession.setActionHandler('pause', null),
                window.navigator.mediaSession.setActionHandler(
                  'pause',
                  function () {
                    g.pause('product_initiated');
                  },
                )),
              w ||
                window.navigator.mediaSession.setActionHandler(
                  'nexttrack',
                  null,
                ));
          },
          [g, w, H, z],
        ),
        L = i(function (a) {
          a.requestPictureInPicture();
          S(!1);
          a = a.internal_getVideoElement();
          G.current = a == null ? void 0 : a.currentSrc;
        }, []),
        M = i(
          function () {
            if (g != null) {
              var a = g.getIsDesktopPictureInPicture();
              if (a) {
                g.exitPictureInPicture();
                return;
              }
              L(g);
            }
          },
          [L, g],
        ),
        N = i(
          function (a) {
            t(a);
          },
          [t],
        ),
        O = i(
          function (a) {
            a != null && C(a);
          },
          [C],
        );
      A = l(
        function () {
          return {
            openPipPlayer: M,
            setController: N,
            setPipPortableVideoID: O,
          };
        },
        [M, N, O],
      );
      var P = m(!1),
        Q = n(!1),
        R = Q[0],
        S = Q[1];
      k(
        function () {
          var a = null;
          if (s && g != null && window.document.pictureInPictureElement) {
            var b = g.internal_getVideoElement();
            b = b == null ? void 0 : b.currentSrc;
            var c = !1,
              d = !1;
            a = g.subscribe(function () {
              var a = g.getCurrentState(),
                b = a.playing;
              a = a.isDesktopPictureInPicture;
              !c && b && P.current && !y.current && ((P.current = !1), S(!0));
              d && !a && J();
              !d && a && K();
              c = b;
              d = a;
            });
            b !== G.current
              ? !R
                ? (g.play('user_initiated'), (P.current = !0))
                : L(g)
              : e && (K(), (G.current = b));
          }
          return function () {
            a != null && a.remove();
          };
        },
        [L, g, M, w, K, J, e, R],
      );
      k(function () {
        return function () {
          F.current != null &&
            (c('clearTimeout')(F.current), (F.current = null));
        };
      }, []);
      return h.jsx(
        d('CometVideoPictureInPictureManagerContext')
          .CometVideoPictureInPictureManagerContext.Provider,
        {
          value: f,
          children: h.jsx(
            d('CometVideoPictureInPictureManagerContext')
              .CometVideoPictureInPictureManagerAPIContext.Provider,
            { value: A, children: a.children },
          ),
        },
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.EXCLUDED_PROVIDERS = b;
    g.CometVideoPictureInPictureManager = a;
  },
  98,
);
__d(
  'CometWatchAndScrollContextSection.react',
  [
    'CometLink.react',
    'CometRelay',
    'CometWatchAndScrollContextSection_video.graphql',
    'TetraProfilePhoto.react',
    'TetraText.react',
    'XCometVideoHomePlaylistControllerRouteBuilder',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'CometWatchAndScrollContextSection.react',
      );
    function a(a) {
      var e;
      a = a.video;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('CometWatchAndScrollContextSection_video.graphql')),
        a,
      );
      var f = a == null ? void 0 : a.owner;
      if (a == null || f == null) return null;
      var g = f.id,
        k = f.name,
        l = f.url;
      e = (e = f.profile_picture) == null ? void 0 : e.uri;
      var m = '#';
      f.has_professional_features_for_watch === !0
        ? (m = c('XCometVideoHomePlaylistControllerRouteBuilder').buildURL({
            idorvanity: g,
          }))
        : l != null && (m = l);
      return i.jsxs('div', {
        className: 'x6s0dn4 x78zum5',
        children: [
          i.jsx('div', {
            className: 'x1emribx',
            children: i.jsx(c('TetraProfilePhoto.react'), {
              'aria-label': k != null && k !== '' ? k : m,
              linkProps: { url: m },
              onPress: function () {
                j.onReady(function (a) {
                  a.log({
                    click_point: 'actor_profile_picture',
                    click_target: 'watch_and_scroll_end_screen',
                    event: 'click',
                  });
                });
              },
              size: 32,
              source: { uri: e || '' },
            }),
          }),
          i.jsxs('div', {
            className: 'xeuugli',
            children: [
              k != null &&
                k !== '' &&
                i.jsx(c('CometLink.react'), {
                  color: 'secondary',
                  href: m,
                  onClick: function () {
                    j.onReady(function (a) {
                      a.log({
                        click_point: 'actor_name',
                        click_target: 'watch_and_scroll_end_screen',
                        event: 'click',
                      });
                    });
                  },
                  children: i.jsx(c('TetraText.react'), {
                    color: 'secondary',
                    numberOfLines: 1,
                    type: 'meta4',
                    children: k,
                  }),
                }),
              i.jsx('div', {
                className: 'x1gslohp',
                children: i.jsx(c('TetraText.react'), {
                  color: 'primary',
                  numberOfLines: 1,
                  type: 'headlineEmphasized4',
                  children: a == null ? void 0 : a.title_with_fallback,
                }),
              }),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometWatchAndScrollActionButton.react',
  ['CometPressable.react', 'TetraIcon.react', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.icon,
        d = a.label,
        e = a.onPress,
        f = a.testid;
      f = a.url;
      return h.jsxs('div', {
        className:
          'x6s0dn4 x78zum5 xdt5ytf xl56j7k x14vqqas xq8finb xod5an3 x16n37ib x1n2onr6 x1dmp6jm',
        'data-testid': void 0,
        children: [
          h.jsx('div', {
            className:
              'xb2d7b1 xo26eqo xmk2xwg x8nt7p6 x14yjl9h xudhj91 x18nykt9 xww2gxu xod5an3 x889kno x1iji9kk x1a8lsjc x1sln4lm',
            children: h.jsx(c('CometPressable.react'), {
              'aria-label': d,
              linkProps: { url: f },
              onPress: e,
              children: h.jsx(c('TetraIcon.react'), {
                'aria-label': d,
                color: 'white',
                hideHoverOverlay: !0,
                icon: b,
              }),
            }),
          }),
          h.jsx(c('CometPressable.react'), {
            linkProps: { url: f },
            onPress: e,
            children: h.jsx(c('TetraText.react'), {
              align: 'center',
              color: 'primaryOnMedia',
              type: 'bodyLink4',
              children: d,
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometWatchAndScrollFallbackCTAScreen.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'CometSetWatchAndScrollVideoContext',
    'CometWatchAndScrollActionButton.react',
    'CometWatchAndScrollFallbackCTAScreen_video.graphql',
    'VideoPlayerHooks',
    'VideoPlayerReshareButton.react',
    'XCometWatchControllerRouteBuilder',
    'fbicon',
    'react',
    'requireDeferred',
    'useCometRouterState',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react'),
      l = d('react').useContext,
      m = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'CometWatchAndScrollFallbackCTAScreen.react',
      );
    function a(a) {
      var e = a.setIsCanceled;
      a = a.video;
      a = d('CometRelay').useFragment(
        j !== void 0
          ? j
          : (j = b('CometWatchAndScrollFallbackCTAScreen_video.graphql')),
        a,
      );
      var f = d('VideoPlayerHooks').useController(),
        g = c('useCometRouterState')();
      g = g == null ? void 0 : g.main.route.tabKey;
      g = g !== 'watch';
      var n = l(c('CometSetWatchAndScrollVideoContext')),
        o = function (a) {
          m.onReady(function (b) {
            b.log({
              click_point: a,
              click_target: 'watch_and_scroll_end_screen',
              event: 'click',
            });
          });
        };
      return k.jsx('div', {
        className:
          'x6s0dn4 xrmyhay x16u764g x1ey2m1c x9f619 x78zum5 xds687c xl56j7k x13zrc24 xbxaen2 x1t1ogtf x1u72gb5 x10l6tqk x17qophe x13vifvy',
        children: k.jsxs('div', {
          className: 'x1cy8zhl x78zum5 x1q0g3np xl56j7k',
          children: [
            g &&
              k.jsx(c('CometWatchAndScrollActionButton.react'), {
                icon: d('fbicon')._(i('607168'), 16),
                label: h._('__JHASH__RNKdDd1Dhwj__JHASH__'),
                onPress: function () {
                  n(null), o('watch_button');
                },
                url: c('XCometWatchControllerRouteBuilder').buildURL({}),
              }),
            k.jsx(c('CometWatchAndScrollActionButton.react'), {
              icon: d('fbicon')._(i('534218'), 16),
              label: h._('__JHASH__3wtbhevyblT__JHASH__'),
              onPress: function () {
                f.play('user_initiated'), e(!1), o('replay');
              },
            }),
            a != null &&
              k.jsx(c('VideoPlayerReshareButton.react'), {
                renderActionButton: function (a) {
                  var b = a.onPress;
                  return k.jsx(c('CometWatchAndScrollActionButton.react'), {
                    icon: d('fbicon')._(i('484394'), 16),
                    label: h._('__JHASH__7sgCXbUM9aN__JHASH__'),
                    onPress: function () {
                      b(), o('share_button');
                    },
                  });
                },
                video: a,
              }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometWatchAndScrollChaining.react',
  [
    'fbt',
    'ix',
    'CometBackgroundImage.react',
    'CometPictureInPictureExpContext',
    'CometPressable.react',
    'CometRelay',
    'CometSetWatchAndScrollVideoContext',
    'CometTahoeEndScreenProgressCircle.react',
    'CometTheme.react',
    'CometVideoPictureInPictureManager.react',
    'CometWatchAndScrollChainingQuery.graphql',
    'CometWatchAndScrollChaining_video.graphql',
    'CometWatchAndScrollContextSection.react',
    'CometWatchAndScrollFallbackCTAScreen.react',
    'CometWatchAndScrollSetStoryViewabilityLoggerContext',
    'CometWatchAndScrollVideoContext',
    'TetraIcon.react',
    'TetraText.react',
    'VideoPlayerHooks',
    'WebPixelRatio',
    'fbicon',
    'react',
    'requireDeferred',
    'useCometTahoeChainingDepth',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k,
      l = d('react');
    e = d('react');
    var m = e.useCallback,
      n = e.useContext,
      o = e.useEffect,
      p = e.useState,
      q = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'CometWatchAndScrollChaining.react',
      );
    function a(a) {
      var e,
        f = a.hidden,
        g = a.routeTracePolicy,
        r = a.seedVideoID,
        s = a.subOrigin;
      a = a.video;
      var t = n(c('CometWatchAndScrollVideoContext')),
        u = t == null ? void 0 : t.chainingCursor;
      a = d('CometRelay').useFragment(
        j !== void 0 ? j : (j = b('CometWatchAndScrollChaining_video.graphql')),
        a,
      );
      u = d('CometRelay').useLazyLoadQuery(
        k !== void 0 ? k : (k = b('CometWatchAndScrollChainingQuery.graphql')),
        {
          caller: 'WNS',
          chainingCursor: u,
          channelEntryPoint: 'WNS',
          count: 1,
          scale: d('WebPixelRatio').get(),
          seedVideoID: r,
        },
      );
      var v = d('useCometTahoeChainingDepth').useChainingDepthContext(),
        w = v.chainingDepthDispatch;
      v = p(!1);
      var x = v[0],
        y = v[1],
        z = d('VideoPlayerHooks').useController(),
        A = n(c('CometSetWatchAndScrollVideoContext'));
      v =
        (v = u.video) == null
          ? void 0
          : (u = v.video_channel) == null
          ? void 0
          : (v = u.video_channel_feed) == null
          ? void 0
          : (u = v.edges) == null
          ? void 0
          : u[0];
      var B = v == null ? void 0 : v.cursor,
        C = v == null ? void 0 : v.node,
        D =
          C == null
            ? void 0
            : (u = C.attachments) == null
            ? void 0
            : (v = u[0]) == null
            ? void 0
            : v.media;
      u = (D == null ? void 0 : D.pmv_metadata) && D.pmv_metadata != null;
      var E = !!u;
      o(
        function () {
          !f &&
            !x &&
            q.onReady(function (a) {
              a.log({ event: 'watch_and_scroll_end_screen_impression' });
            });
        },
        [f, x],
      );
      var F = n(c('CometWatchAndScrollSetStoryViewabilityLoggerContext')),
        G = n(c('CometPictureInPictureExpContext')),
        H = m(
          function (a) {
            q.onReady(function (b) {
              b.log({ event: a });
            }),
              A({
                chainingCursor: B,
                chainingSeedVideoID: r,
                routeTracePolicy: g,
                sessionStartTime: t == null ? void 0 : t.sessionStartTime,
                sessionTrigger: t == null ? void 0 : t.sessionTrigger,
                subOrigin: s,
                videoID: D == null ? void 0 : D.id,
                videoUrl: D == null ? void 0 : D.url,
              }),
              F({
                clientViewConfig: C == null ? void 0 : C.client_view_config,
                encryptedTracking: C == null ? void 0 : C.encrypted_tracking,
                trackingCode: {
                  click_tracking_linkshim_cb:
                    (C == null ? void 0 : C.click_tracking_linkshim_cb) || '',
                  encrypted_click_tracking:
                    (C == null ? void 0 : C.encrypted_click_tracking) || '',
                  encrypted_tracking:
                    (C == null ? void 0 : C.encrypted_tracking) || '',
                },
                videoID: D == null ? void 0 : D.id,
                viewabilityConfig: C == null ? void 0 : C.viewability_config,
              });
          },
          [
            B,
            g,
            r,
            F,
            A,
            C == null ? void 0 : C.click_tracking_linkshim_cb,
            C == null ? void 0 : C.client_view_config,
            C == null ? void 0 : C.encrypted_click_tracking,
            C == null ? void 0 : C.encrypted_tracking,
            C == null ? void 0 : C.viewability_config,
            s,
            t == null ? void 0 : t.sessionStartTime,
            t == null ? void 0 : t.sessionTrigger,
            D,
          ],
        );
      if (x)
        return l.jsx(c('CometWatchAndScrollFallbackCTAScreen.react'), {
          setIsCanceled: y,
          video: a,
        });
      if (D == null || D.__typename !== 'Video') {
        q.onReady(function (a) {
          a.log({ event: 'watch_and_scroll_chaining_query_empty' });
        });
        return l.jsx(c('CometWatchAndScrollFallbackCTAScreen.react'), {
          setIsCanceled: y,
          video: a,
        });
      }
      u = (v = D.image) == null ? void 0 : v.uri;
      a = function () {
        y(!0),
          q.onReady(function (a) {
            a.log({
              click_point: 'cancel_button',
              click_target: 'watch_and_scroll_end_screen',
              event: 'click',
            });
          });
      };
      v = function () {
        z.play('user_initiated'),
          q.onReady(function (a) {
            a.log({
              click_point: 'replay',
              click_target: 'watch_and_scroll_end_screen',
              event: 'click',
            });
          });
      };
      var I = h._('__JHASH__gHxfq7Lt3Mv__JHASH__'),
        J = D == null ? void 0 : (e = D.owner) == null ? void 0 : e.id;
      return l.jsx(c('CometTheme.react'), {
        theme: 'dark',
        children: l.jsxs('div', {
          className: 'x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy',
          children: [
            l.jsx('div', {
              className: 'x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy',
              children:
                u != null && l.jsx(c('CometBackgroundImage.react'), { src: u }),
            }),
            l.jsxs('div', {
              className:
                'xrmyhay x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf x889kno x1iji9kk x1a8lsjc x1sln4lm x10l6tqk x17qophe x13vifvy',
              children: [
                l.jsx('div', {
                  className: 'xyorhqc',
                  children: l.jsx(c('TetraText.react'), {
                    color: 'primaryOnMedia',
                    type: 'body3',
                    children: h._('__JHASH__L9EZP1qHWd4__JHASH__'),
                  }),
                }),
                l.jsx(c('CometWatchAndScrollContextSection.react'), {
                  video: D,
                }),
                l.jsxs('div', {
                  className: 'x6s0dn4 x78zum5 xr1yuqi',
                  children: [
                    l.jsx('div', {
                      className: 'x1emribx',
                      children: l.jsx(c('TetraIcon.react'), {
                        'aria-label': I,
                        color: 'white',
                        icon: d('fbicon')._(i('534219'), 20),
                        onPress: v,
                      }),
                    }),
                    l.jsx(c('CometPressable.react'), {
                      onPress: v,
                      children: l.jsx(c('TetraText.react'), {
                        color: 'primaryOnMedia',
                        type: 'bodyLink4',
                        children: I,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            l.jsx('div', {
              className:
                'x6s0dn4 x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf xl56j7k x47corl x10l6tqk x17qophe x13vifvy',
              children: l.jsxs('div', {
                className: 'x1sy10c2 x71s49j',
                children: [
                  !f &&
                    l.jsx(c('CometPressable.react'), {
                      'aria-label': h._('__JHASH__RPoFRbVl1Un__JHASH__'),
                      onPress: function () {
                        H('watch_and_scroll_chaining_click_advance'),
                          w && w({ type: 'INCREMENT' });
                      },
                      children: l.jsx(
                        c('CometTahoeEndScreenProgressCircle.react'),
                        {
                          circleDiameter: 44,
                          circleStrokeColor: 'var(--base-blue)',
                          circleStrokeWidth: 3,
                          iconSize: 20,
                          isMakingProgress: !f,
                          onProgressDone: function () {
                            var a =
                                G.pictureInPictureExpConfig
                                  .isInPictureInPictureExp,
                              b =
                                G.pictureInPictureExpConfig
                                  .isInPictureInPictureExpControlGroup,
                              c =
                                G.pictureInPictureExpConfig
                                  .isSkipAndChainingDisabled;
                            a =
                              (!a && !b) ||
                              ((a || b) &&
                                !E &&
                                !d(
                                  'CometVideoPictureInPictureManager.react',
                                ).EXCLUDED_PROVIDERS.includes(J) &&
                                !c);
                            if (a)
                              H('watch_and_scroll_chaining_auto_advance'),
                                w && w({ type: 'INCREMENT' });
                            else return;
                          },
                          timeoutSec: 6,
                        },
                      ),
                    }),
                  l.jsx('div', {
                    className: 'x1anpbxc',
                    children: l.jsx(c('CometPressable.react'), {
                      onPress: a,
                      children: l.jsx(c('TetraText.react'), {
                        color: 'secondary',
                        type: 'bodyLink4',
                        children: h._('__JHASH__DTSCtZ4zhvM__JHASH__'),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWithWatchAndScrollChaining.react',
  [
    'CometLoadingAnimation.react',
    'CometPlaceholder.react',
    'CometRelay',
    'CometWatchAndScrollChaining.react',
    'CometWatchAndScrollVideoContext',
    'VideoPlayerWithWatchAndScrollChaining_video.graphql',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = d('react').useContext;
    function a(a) {
      var e = a.hidden,
        f = a.routeTracePolicy,
        g = a.subOrigin;
      a = a.video;
      var k = j(c('CometWatchAndScrollVideoContext'));
      k = k == null ? void 0 : k.chainingSeedVideoID;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('VideoPlayerWithWatchAndScrollChaining_video.graphql')),
        a,
      );
      return k == null
        ? null
        : i.jsx(c('CometPlaceholder.react'), {
            fallback: i.jsx('div', {
              className:
                'x6s0dn4 xrmyhay x1ey2m1c x9f619 x78zum5 xds687c xl56j7k x10l6tqk x17qophe x13vifvy',
              children: i.jsx('div', {
                className: 'xc9qbxq x1n2onr6 x14qfxbe',
                children: i.jsx(c('CometLoadingAnimation.react'), { size: 36 }),
              }),
            }),
            children: i.jsx(c('CometWatchAndScrollChaining.react'), {
              hidden: e,
              routeTracePolicy: f,
              seedVideoID: k,
              subOrigin: g,
              video: a,
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWithWatchAndScrollChainingWrapper.react',
  [
    'CometPrerenderer.react',
    'CometRelay',
    'VideoPlayerHooks',
    'VideoPlayerWithWatchAndScrollChaining.react',
    'VideoPlayerWithWatchAndScrollChainingWrapper_video.graphql',
    'react',
    'useVideoPlayerControllerSubscription',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = 0.8,
      k = 0,
      l = function (a) {
        var b = d('VideoPlayerHooks').useIsLive(),
          e = c('useVideoPlayerControllerSubscription')(function (a, c) {
            var d, e;
            if (b) (d = !1), (e = !1);
            else {
              var f = a.getCurrentState().ended,
                g = a.getPlayheadPosition();
              a = a.getCurrentState();
              var h = a.duration,
                i = a.loopCount;
              a = a.loopCurrent;
              h = Math.min(h * j, h - k);
              d = a >= i && f;
              e = (c != null && c.shouldPrerender) || g > h;
            }
            return c != null && c.isVisible === d && c.shouldPrerender === e
              ? c
              : { isVisible: d, shouldPrerender: e };
          });
        return !a ? { isVisible: !1, shouldPrerender: !1 } : e;
      };
    function a(a) {
      var e = a.isVideoHomeEligible,
        f = a.routeTracePolicy,
        g = a.subOrigin;
      a = a.video;
      var j = l(e),
        k = d('CometRelay').useFragment(
          h !== void 0
            ? h
            : (h = b(
                'VideoPlayerWithWatchAndScrollChainingWrapper_video.graphql',
              )),
          a,
        );
      return e
        ? i.jsx(c('CometPrerenderer.react'), {
            prerenderingProps: j,
            children: function (a) {
              return i.jsx('div', {
                className: '' + (a.hidden === !0 ? ' x1s85apg' : ''),
                children: i.jsx(
                  c('VideoPlayerWithWatchAndScrollChaining.react'),
                  babelHelpers['extends'](
                    { routeTracePolicy: f, subOrigin: g },
                    a,
                    { video: k },
                  ),
                ),
              });
            },
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.useWatchAndScrollChainingComponentRenderedStatus = l;
    g.VideoPlayerWithWatchAndScrollChainingWrapper = a;
  },
  98,
);
__d(
  'VideoPlayerWithWatchAndScrollSoundContext.react',
  [
    'CometWatchAndScrollSoundContext',
    'VideoPlayerHooks',
    'react',
    'usePrevious',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a() {
      var a = h(c('CometWatchAndScrollSoundContext')),
        b = d('VideoPlayerHooks').useController(),
        e = d('VideoPlayerHooks').useMuted(),
        f = d('VideoPlayerHooks').useVolume(),
        g = d('VideoPlayerHooks').usePaused(),
        k = c('usePrevious')(e),
        l = c('usePrevious')(f),
        m = j(e),
        n = j(f);
      i(
        function () {
          k !== null && k !== e && a.setMuted(e),
            l !== null && l !== f && a.setVolume(f);
        },
        [e, k, l, a, f],
      );
      i(
        function () {
          g ||
            (a.muted == null && a.setMuted(m.current),
            a.volume == null && a.setVolume(n.current));
        },
        [g, a],
      );
      i(
        function () {
          if (!g) {
            var c = a.muted,
              d = a.volume;
            c != null && b.setMuted(c, 'user_initiated');
            d != null && b.setVolume(d);
          }
        },
        [b, g, a],
      );
      return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWithWatchAndScrollWarningScreen.react',
  [
    'CometRelay',
    'CometWarningScreenContext',
    'VideoPlayerHooks',
    'VideoPlayerWithWatchAndScrollWarningScreen_video.graphql',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = d('react').useEffect;
    function a(a) {
      var c, e;
      a = a.video;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('VideoPlayerWithWatchAndScrollWarningScreen_video.graphql')),
        a,
      );
      var f = d('VideoPlayerHooks').useController(),
        g = d('VideoPlayerHooks').usePaused(),
        k = d('VideoPlayerHooks').useEnded(),
        l = d('CometWarningScreenContext').useSetOverlayExists(),
        m = d('CometWarningScreenContext').useShowOverlay(),
        n = d('CometWarningScreenContext').useIsOverlayShown();
      c =
        a == null ? void 0 : (c = a.cix_screen) == null ? void 0 : c.view_model;
      var o = c != null;
      e =
        (e =
          a == null
            ? void 0
            : (e = a.preferred_thumbnail) == null
            ? void 0
            : (e = e.image) == null
            ? void 0
            : e.uri) != null
          ? e
          : '#';
      var p = a == null ? void 0 : a.id;
      a = a == null ? void 0 : (a = a.container_story) == null ? void 0 : a.id;
      j(
        function () {
          o && (l(!0), m(!0));
        },
        [f, l, m, o],
      );
      j(
        function () {
          !g && n && f.pause('warning_screen_cover');
        },
        [f, n, g],
      );
      return o && !k
        ? i.jsx(d('CometRelay').MatchContainer, {
            match: c,
            props: {
              alwaysShowDetails: !0,
              contentID: p,
              data: c,
              mediaUri: e,
              storyID: a,
              surface: 'video_channel',
            },
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometCastingMiniplayerRoot.react',
  [
    'CastingContext',
    'CometPlaceholder.react',
    'JSResourceForInteraction',
    'lazyLoadComponent',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = c('lazyLoadComponent')(
        c('JSResourceForInteraction')('CometCastingMiniplayer.react').__setRef(
          'CometCastingMiniplayerRoot.react',
        ),
      );
    function a() {
      var a = i(d('CastingContext').CastingStateContext);
      return a == null
        ? null
        : h.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: h.jsx(j, {}),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerCaptionsMenu.react',
  [
    'fbt',
    '$InternalEnum',
    'CometKeys',
    'VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react',
    'VideoPlayerCaptionsMenuCaptionsDisplayPane.react',
    'VideoPlayerCaptionsMenuMainPane.react',
    'VideoPlayerHooks',
    'react',
    'useLayerKeyCommands',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    e = d('react');
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useMemo,
      m = e.useRef,
      n = e.useState,
      o = b('$InternalEnum')({
        CAPTIONS_BG_COLOR: 'captionsBackgroundColor',
        CAPTIONS_BG_OPACITY: 'captionsBackgroundOpacity',
        CAPTIONS_DISPLAY_MAIN: 'captionsDisplayMain',
        CAPTIONS_TEXT_COLOR: 'captionsTextColor',
        CAPTIONS_TEXT_SIZE: 'captionsTextSize',
        CAPTIONS_MAIN: 'captionsMain',
      });
    function a(a) {
      var b = a.availableCaptionsLocales,
        e = a.captionsListExpanded,
        f = a.children;
      f = f === void 0 ? null : f;
      var g = a.onClose,
        p = a.onPressLog,
        q = a.selectedCaptionsLocale,
        r = a.setCaptionsListExpanded;
      a = a.setSelectedCaptionsLocale;
      var s = d('VideoPlayerHooks').useCaptionDisplayStyle(),
        t = n(o.CAPTIONS_MAIN),
        u = t[0];
      t = t[1];
      var v = m(null),
        w = m(null),
        x = j(
          function (a) {
            v.current &&
              w.current &&
              a.target instanceof HTMLElement &&
              document.contains(a.target) &&
              !v.current.contains(a.target) &&
              w.current.contains(a.target) &&
              g();
          },
          [g],
        );
      k(
        function () {
          document.addEventListener('click', x);
          return function () {
            document.removeEventListener('click', x);
          };
        },
        [x],
      );
      var y = l(
        function () {
          return [
            {
              command: { key: c('CometKeys').ESCAPE },
              description: h._('__JHASH__IJWa3i0ku9h__JHASH__'),
              handler: function () {
                g();
              },
            },
          ];
        },
        [g],
      );
      c('useLayerKeyCommands')(y);
      y = i.jsx(
        d('VideoPlayerCaptionsMenuMainPane.react')
          .VideoPlayerCaptionsMenuMainPane,
        {
          availableCaptionsLocales: b,
          captionsListExpanded: e,
          onPressLog: p,
          selectedCaptionsLocale: q,
          setCaptionsListExpanded: r,
          setPane: t,
          setSelectedCaptionsLocale: a,
          children: f,
        },
      );
      switch (u) {
        case o.CAPTIONS_MAIN:
          break;
        case o.CAPTIONS_DISPLAY_MAIN:
          y = i.jsx(
            d('VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react')
              .VideoPlayerCaptionsMenuCaptionsDisplayMainPane,
            { currentCaptionsDisplay: s, onPressLog: p, setPane: t },
          );
          break;
        case o.CAPTIONS_BG_COLOR:
          y = i.jsx(
            d('VideoPlayerCaptionsMenuCaptionsDisplayPane.react')
              .VideoPlayerCaptionsMenuCaptionsDisplayPane,
            {
              captionsDisplayOption: 'captionsBackgroundColor',
              currentCaptionsDisplay: s,
              onPressLog: p,
              setPane: t,
            },
          );
          break;
        case o.CAPTIONS_BG_OPACITY:
          y = i.jsx(
            d('VideoPlayerCaptionsMenuCaptionsDisplayPane.react')
              .VideoPlayerCaptionsMenuCaptionsDisplayPane,
            {
              captionsDisplayOption: 'captionsBackgroundOpacity',
              currentCaptionsDisplay: s,
              onPressLog: p,
              setPane: t,
            },
          );
          break;
        case o.CAPTIONS_TEXT_SIZE:
          y = i.jsx(
            d('VideoPlayerCaptionsMenuCaptionsDisplayPane.react')
              .VideoPlayerCaptionsMenuCaptionsDisplayPane,
            {
              captionsDisplayOption: 'captionsTextSize',
              currentCaptionsDisplay: s,
              setPane: t,
            },
          );
          break;
        case o.CAPTIONS_TEXT_COLOR:
          y = i.jsx(
            d('VideoPlayerCaptionsMenuCaptionsDisplayPane.react')
              .VideoPlayerCaptionsMenuCaptionsDisplayPane,
            {
              captionsDisplayOption: 'captionsTextColor',
              currentCaptionsDisplay: s,
              onPressLog: p,
              setPane: t,
            },
          );
          break;
      }
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx('div', { ref: v, children: y }),
          i.jsx('div', {
            className: 'x5yr21d xixxii4 x17qophe x13vifvy xh8yej3 x8knxv4',
            'data-testid': void 0,
            ref: w,
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.VideoPlayerCaptionsMenuPaneType = o;
    g.VideoPlayerCaptionsMenu = a;
  },
  98,
);
__d(
  'VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react',
  [
    'fbt',
    'ix',
    'CometImage.react',
    'CometPressable.react',
    'FocusRegion.react',
    'VideoPlayerCaptionsMenu.react',
    'focusScopeQueries',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useCallback,
      l = {
        captionsDisplayLabel: {
          fontSize: 'x1nxh6w3',
          fontWeight: 'x1s688f',
          marginStart: 'x16n37ib',
          $$css: !0,
        },
        chevronLeft: { alignItems: 'x6s0dn4', display: 'x3nfvp2', $$css: !0 },
        chevronRight: { display: 'x1lliihq', $$css: !0 },
        icon: { display: 'x1rg5ohu', $$css: !0 },
        menuHeading: {
          alignItems: 'x6s0dn4',
          color: 'x14ctfv',
          cursor: 'x1ypdohk',
          display: 'x78zum5',
          fontWeight: 'x1s688f',
          ':hover_textDecoration': 'x1lku1pv',
          $$css: !0,
        },
        menuOptionLabel: {
          cursor: 'x1ypdohk',
          display: 'x1rg5ohu',
          fontSize: 'x1nxh6w3',
          fontWeight: 'x1s688f',
          width: 'x1uncgzr',
          $$css: !0,
        },
        menuOptionRow: {
          color: 'x14ctfv',
          display: 'x1lliihq',
          outline: 'x1a2a7pz',
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x4uap5',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xkhd6sd',
          textAlign: 'x1yc453h',
          width: 'xafpxmx',
          $$css: !0,
        },
        menuOptions: { marginTop: 'x1anpbxc', $$css: !0 },
        menuOptionValue: {
          fontSize: 'x1nxh6w3',
          fontWeight: 'xo1l8bm',
          $$css: !0,
        },
        pressableOption: { width: 'xh8yej3', $$css: !0 },
      },
      m = {
        captionsBackgroundColor: {
          Black: 'BLACK',
          Blue: 'BLUE',
          Cyan: 'CYAN',
          Green: 'GREEN',
          Magenta: 'MAGENTA',
          Red: 'RED',
          White: 'WHITE',
          Yellow: 'YELLOW',
        },
        captionsBackgroundOpacity: {
          '0%': 'TRANSPARENT',
          '25%': 'LIGHT',
          '45%': 'DEFAULT',
          '75%': 'DARK',
          '100%': 'OPAQUE',
        },
        captionsTextColor: {
          Black: 'BLACK',
          Blue: 'BLUE',
          Cyan: 'CYAN',
          Green: 'GREEN',
          Magenta: 'MAGENTA',
          Red: 'RED',
          White: 'WHITE',
          Yellow: 'YELLOW',
        },
        captionsTextSize: {
          '(50%)': 'SMALLEST',
          '(75%)': 'SMALL',
          '(100%)': 'DEFAULT',
          '(125%)': 'MEDIUM',
          '(150%)': 'BIG',
          '(175%)': 'BIGGER',
          '(200%)': 'BIGGEST',
        },
      },
      n = {
        'Background Color': {
          ftbLabel: h._('__JHASH___JkqGHU6s6W__JHASH__'),
          name: 'captionsBackgroundColor',
        },
        'Background Opacity': {
          ftbLabel: h._('__JHASH__4Nh73Z-aeW___JHASH__'),
          name: 'captionsBackgroundOpacity',
        },
        'Text Color': {
          ftbLabel: h._('__JHASH__M3skPlj7iF___JHASH__'),
          name: 'captionsTextColor',
        },
        'Text Size': {
          ftbLabel: h._('__JHASH__U5jCK0KgfGO__JHASH__'),
          name: 'captionsTextSize',
        },
      },
      o = {
        Black: h._('__JHASH__A4ukiml3pYS__JHASH__'),
        Blue: h._('__JHASH__IpnzJ1LIfYB__JHASH__'),
        Cyan: h._('__JHASH__o9RFd4r9BR3__JHASH__'),
        Green: h._('__JHASH__oOxxTNBullx__JHASH__'),
        Magenta: h._('__JHASH__Ld9joX9Wzr7__JHASH__'),
        Red: h._('__JHASH__4r3EzkN_IgK__JHASH__'),
        White: h._('__JHASH__i_Mq3bSjDEc__JHASH__'),
        Yellow: h._('__JHASH__M1JGv_1IGWD__JHASH__'),
      };
    function p(a) {
      var b = null,
        c = null;
      switch (a) {
        case '(50%)':
          b = h._('__JHASH__jOdOc9Kt75y__JHASH__');
          c = 'X-';
          break;
        case '(75%)':
          b = h._('__JHASH__jOdOc9Kt75y__JHASH__');
          break;
        case '(125%)':
          b = h._('__JHASH__W4ixrK_j61o__JHASH__');
          break;
        case '(150%)':
          b = h._('__JHASH__W4ixrK_j61o__JHASH__');
          c = 'X-';
          break;
        case '(175%)':
          b = h._('__JHASH__W4ixrK_j61o__JHASH__');
          c = 'XX-';
          break;
        case '(200%)':
          b = h._('__JHASH__W4ixrK_j61o__JHASH__');
          c = 'XXX-';
          break;
        case '(100%)':
          b = h._('__JHASH__a7N3n7jAB1i__JHASH__');
      }
      return j.jsxs('span', { children: [c != null && c, b, a] });
    }
    p.displayName = p.name + ' [from ' + f.id + ']';
    var q = {
      captionsBackgroundColor: d('VideoPlayerCaptionsMenu.react')
        .VideoPlayerCaptionsMenuPaneType.CAPTIONS_BG_COLOR,
      captionsBackgroundOpacity: d('VideoPlayerCaptionsMenu.react')
        .VideoPlayerCaptionsMenuPaneType.CAPTIONS_BG_OPACITY,
      captionsTextColor: d('VideoPlayerCaptionsMenu.react')
        .VideoPlayerCaptionsMenuPaneType.CAPTIONS_TEXT_COLOR,
      captionsTextSize: d('VideoPlayerCaptionsMenu.react')
        .VideoPlayerCaptionsMenuPaneType.CAPTIONS_TEXT_SIZE,
    };
    function r(a) {
      var b = a.onPressLog,
        d = a.option,
        e = a.optionVal,
        f = a.setPane,
        g = n[d].name;
      a = k(
        function () {
          f(q[g]), b && b('captions_display_main_menu', d);
        },
        [g, f, d, b],
      );
      var h = null;
      switch (g) {
        case 'captionsTextColor':
        case 'captionsBackgroundColor':
          h = o[e];
          break;
        default:
          h = e;
          break;
      }
      var m = d.replace(' ', '');
      m = 'video-player-captions-menu-captions-display-main-' + m;
      return j.jsxs(c('CometPressable.react'), {
        onPress: a,
        xstyle: l.menuOptionRow,
        children: [
          j.jsxs('div', {
            className: 'x1ypdohk x1rg5ohu x1nxh6w3 x1s688f x1uncgzr',
            children: [
              n[d].ftbLabel,
              j.jsx('div', {
                className: 'x1nxh6w3 xo1l8bm',
                'data-testid': void 0,
                children: g === 'captionsTextSize' ? p(e) : h,
              }),
            ],
          }),
          j.jsx('div', {
            className: 'x1rg5ohu',
            children: j.jsx('div', {
              className: 'x1lliihq',
              children: j.jsx('div', {
                style: { display: 'table-cell' },
                children: j.jsx(c('CometImage.react'), { src: i('480588') }),
              }),
            }),
          }),
        ],
      });
    }
    r.displayName = r.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = a.currentCaptionsDisplay,
        e = a.onPressLog,
        f = a.setPane;
      a = k(
        function () {
          f(
            d('VideoPlayerCaptionsMenu.react').VideoPlayerCaptionsMenuPaneType
              .CAPTIONS_MAIN,
          );
        },
        [f],
      );
      return j.jsxs(d('FocusRegion.react').FocusRegion, {
        autoFocusQuery:
          d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
        recoverFocusQuery:
          d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
        children: [
          j.jsx('div', {
            className: 'x6s0dn4 x14ctfv x1ypdohk x78zum5 x1s688f x1lku1pv',
            children: j.jsxs(c('CometPressable.react'), {
              onPress: a,
              xstyle: l.pressableOption,
              children: [
                j.jsx('span', {
                  className: 'x6s0dn4 x3nfvp2',
                  children: j.jsx(c('CometImage.react'), { src: i('480580') }),
                }),
                j.jsx('span', {
                  className: 'x1nxh6w3 x1s688f x16n37ib',
                  children: h._('__JHASH__JdYTKKzsT-t__JHASH__'),
                }),
              ],
            }),
          }),
          j.jsx('div', {
            className: 'x1anpbxc',
            'data-testid': void 0,
            children: Object.keys(n).map(function (a) {
              var c = n[a].name,
                d = m[c];
              d = Object.fromEntries(
                Object.entries(d).map(function (a) {
                  var b = a[0];
                  a = a[1];
                  return [a, b];
                }),
              );
              d = b != null ? d[b[c]] : '';
              return j.jsx(
                r,
                { onPressLog: e, option: a, optionVal: d, setPane: f },
                a,
              );
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.captionsDisplayOptionsMap = m;
    g.colorsFBTMap = o;
    g.getFontSizeDivWithFBTLabel = p;
    g.VideoPlayerCaptionsMenuCaptionsDisplayMainPane = a;
  },
  98,
);
__d(
  'VideoPlayerCaptionsSettingMutation',
  ['CometRelay', 'VideoPlayerCaptionsSettingMutation.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i =
        h !== void 0
          ? h
          : (h = b('VideoPlayerCaptionsSettingMutation.graphql'));
    function a(a, b, c) {
      return d('CometRelay').commitMutation(a, {
        mutation: i,
        onCompleted: c && c.onCompleted,
        onError: c && c.onError,
        optimisticResponse: { video_captions_setting: { success: !0 } },
        variables: {
          input: {
            captions_background_color: b.captions_background_color,
            captions_background_opacity: b.captions_background_opacity,
            captions_text_color: b.captions_text_color,
            captions_text_size: b.captions_text_size,
            client_mutation_id: 'www_captions_settings',
          },
        },
      });
    }
    g.commit = a;
  },
  98,
);
__d(
  'VideoPlayerCaptionsMenuCaptionsDisplayPane.react',
  [
    'fbt',
    'ix',
    'CometImage.react',
    'CometPressable.react',
    'CometRelay',
    'FocusRegion.react',
    'TetraIcon.react',
    'VideoPlayerCaptionsMenu.react',
    'VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react',
    'VideoPlayerCaptionsSettingMutation',
    'VideoPlayerHooks',
    'fbicon',
    'focusScopeQueries',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useCallback,
      l = {
        chevronLeft: {
          alignItems: 'x6s0dn4',
          display: 'x3nfvp2',
          width: 'x1849jeq',
          $$css: !0,
        },
        icon: { display: 'x1rg5ohu', width: 'x1849jeq', $$css: !0 },
        menuHeading: {
          alignItems: 'x6s0dn4',
          color: 'x14ctfv',
          cursor: 'x1ypdohk',
          display: 'x78zum5',
          fontSize: 'x1nxh6w3',
          fontWeight: 'x1s688f',
          ':hover_textDecoration': 'x1lku1pv',
          $$css: !0,
        },
        menuLabel: { cursor: 'x1ypdohk', display: 'x1rg5ohu', $$css: !0 },
        menuOptionRow: {
          color: 'x14ctfv',
          display: 'x1lliihq',
          outline: 'x1a2a7pz',
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x4uap5',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xkhd6sd',
          textAlign: 'x1yc453h',
          $$css: !0,
        },
        menuOptions: {
          fontSize: 'x1nxh6w3',
          fontWeight: 'xo1l8bm',
          marginTop: 'x1anpbxc',
          $$css: !0,
        },
        pressableOption: { width: 'xh8yej3', $$css: !0 },
      },
      m = {
        captionsBackgroundColor: h._('__JHASH___JkqGHU6s6W__JHASH__'),
        captionsBackgroundOpacity: h._('__JHASH__4Nh73Z-aeW___JHASH__'),
        captionsTextColor: h._('__JHASH__M3skPlj7iF___JHASH__'),
        captionsTextSize: h._('__JHASH__U5jCK0KgfGO__JHASH__'),
      },
      n = function (a) {
        return {
          captions_background_color: a.captionsBackgroundColor,
          captions_background_opacity: a.captionsBackgroundOpacity,
          captions_text_color: a.captionsTextColor,
          captions_text_size: a.captionsTextSize,
        };
      };
    function o(a) {
      var b = a.captionsDisplayOption,
        e = a.currentCaptionsDisplay,
        f = a.onPressLog,
        g = a.option,
        h = a.selected,
        m = a.setPane,
        o = d('VideoPlayerHooks').useController();
      a = h;
      var p = d('VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react')
        .captionsDisplayOptionsMap[b];
      h = null;
      switch (b) {
        case 'captionsTextColor':
        case 'captionsBackgroundColor':
          h = d('VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react')
            .colorsFBTMap[g];
          break;
        default:
          h = g;
      }
      var q = 'video-player-captions-menu-captions-display-pane-' + b + '-' + g;
      q = k(
        function () {
          a = !0;
          if (e != null) {
            e[b] = p[g];
            o.setCaptionsDisplayStyle(e);
            var c = n(e);
            d('VideoPlayerCaptionsSettingMutation').commit(r, c);
          }
          m(
            d('VideoPlayerCaptionsMenu.react').VideoPlayerCaptionsMenuPaneType
              .CAPTIONS_DISPLAY_MAIN,
          );
          f && f(b);
        },
        [e, p, b, o, g],
      );
      var r = d('CometRelay').useRelayEnvironment();
      return j.jsxs(c('CometPressable.react'), {
        onPress: q,
        testid: void 0,
        xstyle: l.menuOptionRow,
        children: [
          j.jsx('div', {
            className: 'x1rg5ohu x1849jeq',
            children:
              a &&
              j.jsx('div', {
                'data-testid': void 0,
                children: j.jsx(c('TetraIcon.react'), {
                  color: 'white',
                  icon: d('fbicon')._(i('477813'), 16),
                }),
              }),
          }),
          b === 'captionsTextSize'
            ? d(
                'VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react',
              ).getFontSizeDivWithFBTLabel(g)
            : j.jsx('div', { className: 'x1ypdohk x1rg5ohu', children: h }),
        ],
      });
    }
    o.displayName = o.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = a.captionsDisplayOption,
        e = a.currentCaptionsDisplay,
        f = a.onPressLog,
        g = a.setPane;
      a = m[b];
      var h = d('VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react')
          .captionsDisplayOptionsMap[b],
        n = e != null ? e[b] : null,
        p = k(
          function () {
            g(
              d('VideoPlayerCaptionsMenu.react').VideoPlayerCaptionsMenuPaneType
                .CAPTIONS_DISPLAY_MAIN,
            );
          },
          [g],
        ),
        q = 'video-player-captions-menu-captions-display-pane-' + b;
      return j.jsxs(d('FocusRegion.react').FocusRegion, {
        autoFocusQuery:
          d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
        recoverFocusQuery:
          d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
        children: [
          j.jsx('div', {
            className:
              'x6s0dn4 x14ctfv x1ypdohk x78zum5 x1nxh6w3 x1s688f x1lku1pv',
            children: j.jsxs(c('CometPressable.react'), {
              onPress: p,
              testid: void 0,
              xstyle: l.pressableOption,
              children: [
                j.jsx('span', {
                  className: 'x6s0dn4 x3nfvp2 x1849jeq',
                  children: j.jsx(c('CometImage.react'), { src: i('480580') }),
                }),
                a,
              ],
            }),
          }),
          j.jsx('div', {
            className: 'x1nxh6w3 xo1l8bm x1anpbxc',
            'data-testid': void 0,
            children: Object.keys(h).map(function (a) {
              var c = n === h[a];
              return j.jsx(
                o,
                {
                  captionsDisplayOption: b,
                  currentCaptionsDisplay: e,
                  onPressLog: f,
                  option: a,
                  selected: c,
                  setPane: g,
                },
                a,
              );
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.VideoPlayerCaptionsMenuCaptionsDisplayPane = a;
  },
  98,
);
__d(
  'VideoPlayerCaptionsMenuMainPane.react',
  [
    'fbt',
    'ix',
    'CometPressable.react',
    'CometScrollableArea.react',
    'FocusRegion.react',
    'TetraIcon.react',
    'VideoPlayerCaptionsMenuTopBar.react',
    'VideoPlayerHooks',
    'fbicon',
    'focusScopeQueries',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useEffect,
      l = {
        icon: { display: 'x1rg5ohu', width: 'xw4jnvo', $$css: !0 },
        menuLabel: {
          cursor: 'x1ypdohk',
          display: 'x1rg5ohu',
          marginStart: 'x17adc0v',
          width: 'xzjbwwf',
          $$css: !0,
        },
        menuOptionRow: {
          color: 'x14ctfv',
          display: 'x1lliihq',
          fontSize: 'x1nxh6w3',
          fontWeight: 'xo1l8bm',
          minWidth: 'xfvyar9',
          outline: 'x1a2a7pz',
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x4uap5',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xkhd6sd',
          textAlign: 'x1yc453h',
          ':hover_backgroundColor': 'xx8nu07',
          $$css: !0,
        },
        menuOptions: {
          marginTop: 'x1anpbxc',
          maxHeight: 'x15eivr9',
          $$css: !0,
        },
        moreOptionsLabel: {
          cursor: 'x1ypdohk',
          display: 'x1rg5ohu',
          marginStart: 'x1iedhe',
          $$css: !0,
        },
      },
      m = 5;
    function n(a) {
      var b,
        e = a.captions,
        f = a.captionsVisible,
        g = a.controller,
        k = a.focused,
        m = a.onPressLog,
        n = a.setSelectedCaptionsLocale;
      a = d('VideoPlayerHooks').useIsVideoBroadcast();
      a = e.localized_creation_method != null || a;
      b =
        'video-player-captions-menu-language-list-item-' +
        ((b = e.localized_language) != null ? b : '');
      return j.jsxs(c('CometPressable.react'), {
        onPress: function () {
          var a;
          e.locale != null && n(e.locale);
          f || g.setCaptionsVisible(!0);
          e.captions_url != null && g.setCaptionsUrl(e.captions_url);
          m &&
            m(
              'captions_language_selector',
              (a = e.localized_language) != null ? a : '',
            );
        },
        testid: void 0,
        xstyle: l.menuOptionRow,
        children: [
          j.jsx('div', {
            className: 'x1rg5ohu xw4jnvo',
            children:
              k &&
              j.jsx('div', {
                'data-testid': void 0,
                children: j.jsx(c('TetraIcon.react'), {
                  color: 'white',
                  icon: d('fbicon')._(i('477813'), 16),
                }),
              }),
          }),
          j.jsxs('div', {
            className: 'x1ypdohk x1rg5ohu x17adc0v xzjbwwf',
            children: [
              e.localized_language,
              (b = e.localized_country) != null ? b : null,
              !a && h._('__JHASH__61S-FIBVxhC__JHASH__'),
            ],
          }),
        ],
      });
    }
    n.displayName = n.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = a.availableCaptionsLocales,
        e = a.captionsListExpanded,
        f = a.children,
        g = a.onPressLog,
        o = a.selectedCaptionsLocale,
        p = a.setCaptionsListExpanded,
        q = a.setPane,
        r = a.setSelectedCaptionsLocale,
        s = d('VideoPlayerHooks').useController(),
        t = d('VideoPlayerHooks').useCaptionsVisible();
      a = b != null ? b.length : 0;
      k(
        function () {
          t || r('');
        },
        [t, r],
      );
      return b == null
        ? null
        : j.jsx(d('FocusRegion.react').FocusRegion, {
            autoFocusQuery:
              d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
            recoverFocusQuery:
              d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
            children: j.jsxs('div', {
              'data-testid': void 0,
              children: [
                j.jsx(c('VideoPlayerCaptionsMenuTopBar.react'), {
                  availableCaptionsLocales: b,
                  onPressLog: g,
                  setPane: q,
                }),
                f,
                j.jsx(c('CometScrollableArea.react'), {
                  hideScrollbar: !0,
                  children: j.jsxs('div', {
                    className: 'x1anpbxc x15eivr9',
                    'data-testid': void 0,
                    children: [
                      j.jsxs(c('CometPressable.react'), {
                        onPress: function () {
                          r(''), s.setCaptionsVisible(!1);
                        },
                        xstyle: l.menuOptionRow,
                        children: [
                          j.jsx('div', {
                            className: 'x1rg5ohu xw4jnvo',
                            children:
                              o === '' &&
                              j.jsx(c('TetraIcon.react'), {
                                color: 'white',
                                icon: d('fbicon')._(i('477813'), 16),
                              }),
                          }),
                          j.jsx('div', {
                            className: 'x1ypdohk x1rg5ohu x17adc0v xzjbwwf',
                            children: h._('__JHASH__e5FM_cV1hlu__JHASH__'),
                          }),
                        ],
                      }),
                      b.slice(0, 4).map(function (a) {
                        var b = a.locale === o;
                        return a.localized_language != null
                          ? j.jsx(
                              n,
                              {
                                captions: a,
                                captionsVisible: t,
                                controller: s,
                                focused: b,
                                onPressLog: g,
                                setSelectedCaptionsLocale: r,
                              },
                              a.locale,
                            )
                          : null;
                      }),
                      a >= m &&
                        !e &&
                        j.jsx(c('CometPressable.react'), {
                          onPress: function () {
                            p(!0);
                          },
                          xstyle: l.menuOptionRow,
                          children: j.jsx('div', {
                            className: 'x1ypdohk x1rg5ohu x1iedhe',
                            children: h._('__JHASH__OIavC7F1dep__JHASH__'),
                          }),
                        }),
                      e &&
                        b.slice(4).map(function (a) {
                          var b = a.locale === o;
                          return a.localized_language != null
                            ? j.jsx(
                                n,
                                {
                                  captions: a,
                                  captionsVisible: t,
                                  controller: s,
                                  focused: b,
                                  setSelectedCaptionsLocale: r,
                                },
                                a.locale,
                              )
                            : null;
                        }),
                      e &&
                        j.jsx(c('CometPressable.react'), {
                          onPress: function () {
                            p(!1);
                          },
                          xstyle: l.menuOptionRow,
                          children: j.jsx('div', {
                            className: 'x1ypdohk x1rg5ohu x1iedhe',
                            children: h._('__JHASH__ety7kKeVKSL__JHASH__'),
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.VideoPlayerCaptionsMenuMainPane = a;
  },
  98,
);
__d(
  'VideoPlayerCaptionsMenuTopBar.react',
  [
    'fbt',
    'ix',
    'CometImage.react',
    'CometPressable.react',
    'VideoPlayerCaptionsMenu.react',
    'VideoPlayerHooks',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useCallback,
      l = {
        default: {
          color: 'x14ctfv',
          display: 'x78zum5',
          minWidth: 'x1jzhcrs',
          $$css: !0,
        },
        label: { fontSize: 'x1nxh6w3', fontWeight: 'x1s688f', $$css: !0 },
        labelAutoGenerated: {
          fontSize: 'x1nxh6w3',
          fontStyle: 'x1k4tb9n',
          $$css: !0,
        },
        option: {
          alignItems: 'x6s0dn4',
          color: 'x14ctfv',
          cursor: 'x1ypdohk',
          display: 'x3nfvp2',
          flexGrow: 'x1bhwmg6',
          justifyContent: 'x13a6bvl',
          marginStart: 'x8zvzrc',
          $$css: !0,
        },
        optionsLabel: {
          display: 'x3nfvp2',
          fontWeight: 'xo1l8bm',
          marginStart: 'x1mnrxsn',
          $$css: !0,
        },
        pressableOption: { width: 'xh8yej3', $$css: !0 },
        settingIconRight: { display: 'x3nfvp2', $$css: !0 },
      };
    function a(a) {
      var b = a.availableCaptionsLocales,
        e = a.onPressLog,
        f = a.setPane;
      a = k(
        function () {
          f(
            d('VideoPlayerCaptionsMenu.react').VideoPlayerCaptionsMenuPaneType
              .CAPTIONS_DISPLAY_MAIN,
          ),
            e && e('captions_main_menu_top_bar');
        },
        [f, e],
      );
      var g = d('VideoPlayerHooks').useIsVideoBroadcast();
      b =
        (b == null
          ? void 0
          : b.some(function (a) {
              return a.localized_creation_method != null;
            })) || g;
      return j.jsxs('div', {
        children: [
          j.jsx('div', {
            className: 'x14ctfv x78zum5 x1jzhcrs',
            children: j.jsxs(c('CometPressable.react'), {
              onPress: a,
              testid: void 0,
              xstyle: l.pressableOption,
              children: [
                j.jsx('div', {
                  className: 'x1nxh6w3 x1s688f',
                  children: h._('__JHASH__LFEdNCYpX2s__JHASH__'),
                }),
                j.jsxs('div', {
                  className:
                    'x6s0dn4 x14ctfv x1ypdohk x3nfvp2 x1bhwmg6 x13a6bvl x8zvzrc',
                  children: [
                    j.jsx('span', {
                      className: 'x3nfvp2',
                      children: j.jsx(c('CometImage.react'), {
                        src: i('492300'),
                      }),
                    }),
                    j.jsx('div', {
                      className: 'x3nfvp2 xo1l8bm x1mnrxsn',
                      children: h._('__JHASH__H44BsQl2goa__JHASH__'),
                    }),
                  ],
                }),
              ],
            }),
          }),
          b != null &&
            b &&
            j.jsx('div', {
              className: 'x1nxh6w3 x1k4tb9n',
              children: h._('__JHASH__uZTU9s4hTUD__JHASH__'),
            }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerCaptionsControl.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'IntlCurrentLocale',
    'VideoPlayerCaptionsControl_video.graphql',
    'VideoPlayerCaptionsMenu.react',
    'VideoPlayerControlIcon.react',
    'VideoPlayerDefaultControlsProperties',
    'VideoPlayerHooks',
    'VideoPlayerLoggingSuboriginContext',
    'VideoPlayerUserInteractionCounter',
    'fbicon',
    'react',
    'requireDeferred',
    'usePlayerOriginRouteTracePolicy',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react');
    e = d('react');
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useRef,
      p = e.useState,
      q = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'VideoPlayerCaptionsControl.react',
      ),
      r = 'asr',
      s = function (a) {
        return a.length < 2 ? null : a.substr(0, 2);
      };
    function a(a) {
      var e,
        f = a.alignMenuToIcon;
      f = f === void 0 ? !1 : f;
      var g = a.captionsVisible,
        t = a.children;
      t = t === void 0 ? null : t;
      var u = a.compactMenu,
        v = a.icon,
        w = a.menuOpened,
        x = a.onMenuOpen,
        y = a.onUserInteraction,
        z = a.setMenuOpened;
      a = a.video;
      var A = h._('__JHASH__RzG6zhlG9t4__JHASH__');
      d('VideoPlayerUserInteractionCounter').useVideoPlayerUserInteraction(
        'video_captions_menu',
        w ===
          d('VideoPlayerDefaultControlsProperties').VideoMenuType
            .VIDEO_CAPTIONS_MENU,
        y,
      );
      y = d('CometRelay').useFragment(
        j !== void 0 ? j : (j = b('VideoPlayerCaptionsControl_video.graphql')),
        a,
      );
      var B = d('VideoPlayerHooks').useMuted(),
        C = d('VideoPlayerHooks').useController(),
        D = c('usePlayerOriginRouteTracePolicy')();
      a = y == null ? void 0 : y.video_available_captions_locales;
      e = p(
        (e = y == null ? void 0 : y.default_video_caption_locale) != null
          ? e
          : '',
      );
      var E = e[0];
      e = e[1];
      var F = o(y == null ? void 0 : y.default_video_caption_locale),
        G = o(null);
      y = [];
      var H = c('IntlCurrentLocale').code;
      n(
        function () {
          var a;
          F.current !== r &&
          s((a = F.current) != null ? a : '') !== s(H) &&
          G.current === null
            ? (C.setCaptionsVisible(!1), (G.current = !1))
            : B && !g && G.current === null
            ? ((G.current = !0), C.setCaptionsVisible(!0))
            : !B &&
              G.current === !0 &&
              (C.setCaptionsVisible(!1), (G.current = !1));
        },
        [g, C, B, H],
      );
      if (a != null)
        for (
          var a = a,
            I = Array.isArray(a),
            J = 0,
            a = I
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var K;
          if (I) {
            if (J >= a.length) break;
            K = a[J++];
          } else {
            J = a.next();
            if (J.done) break;
            K = J.value;
          }
          K = K;
          K = {
            captions_url: K.captions_url,
            locale: K.locale,
            localized_country: K.localized_country,
            localized_creation_method: K.localized_creation_method,
            localized_language: K.localized_language,
          };
          y.push(K);
        }
      y.sort(function (a, b) {
        return ((a = a.localized_language) != null ? a : '') >
          ((a = b.localized_language) != null ? a : '')
          ? 1
          : -1;
      });
      var L =
        w ===
        d('VideoPlayerDefaultControlsProperties').VideoMenuType
          .VIDEO_CAPTIONS_MENU;
      K = p(!1);
      J = K[0];
      I = K[1];
      var M = m(c('VideoPlayerLoggingSuboriginContext')),
        N = l(
          function (a, b) {
            a === void 0 && (a = null),
              b === void 0 && (b = null),
              q.onReady(function (c) {
                c.log({
                  click_point: a,
                  event: 'click',
                  event_target_info: D,
                  event_target_sub_type: b,
                  player_suborigin: M,
                });
              });
          },
          [D, M],
        );
      return k.jsxs('div', {
        className:
          'x1rg5ohu x1k70j0n x1w0mnb xzueoph x1mnrxsn' +
          (f === !0 ? ' x1n2onr6 xuxw1ft' : ''),
        'data-testid': void 0,
        children: [
          L &&
            k.jsx('div', {
              className:
                'x1av4zun x1lcm9me x1yr5g0i xrt01vj x10y3i5r xacj9c0 x14ctfv x89ytp0 x1hdnelj xgmxx4u xyamay9 x1pi30zi x1l90r2v x1swvt13 x10l6tqk x1602a87' +
                (f === !0
                  ? ' x1g75g36'
                  : '' + (u === !0 ? ' xwjie4w' : ' xk6ci0l')),
              children: k.jsx(
                d('VideoPlayerCaptionsMenu.react').VideoPlayerCaptionsMenu,
                {
                  availableCaptionsLocales: y,
                  captionsListExpanded: J,
                  onClose: function () {
                    z != null && z(null);
                  },
                  onPressLog: N,
                  selectedCaptionsLocale: E,
                  setCaptionsListExpanded: I,
                  setSelectedCaptionsLocale: e,
                  children: t,
                },
              ),
            }),
          k.jsx(c('VideoPlayerControlIcon.react'), {
            icon:
              v == null
                ? g
                  ? d('fbicon')._(i('662652'), 20)
                  : d('fbicon')._(i('662655'), 20)
                : v,
            label: A,
            onPress: function () {
              z != null &&
                z(
                  L
                    ? null
                    : d('VideoPlayerDefaultControlsProperties').VideoMenuType
                        .VIDEO_CAPTIONS_MENU,
                ),
                !L && x != null && x(),
                N('closed_captions_button');
            },
            tooltip: A,
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerCastControlShim.react',
  [
    'CometPlaceholder.react',
    'VideoPlayerControlsGroups.react',
    'cr:11811',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var e = a.isVisible;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['isVisible']);
      return h.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
        isVisible: e,
        noPaddingEnd: !0,
        noPaddingStart: !0,
        children: h.jsx(c('CometPlaceholder.react'), {
          fallback: null,
          children: h.jsx(b('cr:11811'), babelHelpers['extends']({}, a)),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerJoinOnPortalControl.react',
  ['cr:1795495', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    a = function (a) {
      a = a.isVisible;
      return !a || b('cr:1795495') == null ? null : h.jsx(b('cr:1795495'), {});
    };
    c = a;
    g['default'] = c;
  },
  98,
);
__d(
  'VideoPlayerQuietModeControl.react',
  [
    'fbt',
    'ix',
    'CometTahoeSidePaneContext',
    'VideoPlayerControlIcon.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useContext;
    function a() {
      var a = k(c('CometTahoeSidePaneContext')),
        b = a.rightRailHidden,
        e = a.setRightRailHidden;
      a = b
        ? h._('__JHASH__kXpbNzjk3HM__JHASH__')
        : h._('__JHASH__eNC0h5sAaC-__JHASH__');
      return j.jsx('div', {
        className: 'x1rg5ohu x1k70j0n x1w0mnb xzueoph x1mnrxsn',
        children: j.jsx(c('VideoPlayerControlIcon.react'), {
          icon: b
            ? d('fbicon')._(i('942218'), 20)
            : d('fbicon')._(i('942221'), 20),
          label: a,
          onPress: function () {
            e(!b);
          },
          tooltip: a,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerWatchAndScrollControlNUX',
  [
    'fbt',
    'CometRelay',
    'CometWatchAndScrollTriggerContext',
    'react',
    'recoverableViolation',
    'requireDeferred',
    'useCometCallout',
    'useVideoPlayerWatchAndScrollControlNUXQuery.graphql',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i;
    e = d('react');
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useState,
      n = c('requireDeferred')('CometDismissFBNuxMutation').__setRef(
        'useVideoPlayerWatchAndScrollControlNUX',
      ),
      o = c('requireDeferred')('CometLogImpressionFBNuxMutation').__setRef(
        'useVideoPlayerWatchAndScrollControlNUX',
      ),
      p = { nux: { maxWidth: 'xw5ewwj', $$css: !0 } },
      q = 9347,
      r =
        i !== void 0
          ? i
          : (i = b('useVideoPlayerWatchAndScrollControlNUXQuery.graphql'));
    function a(a) {
      var b = k(c('CometWatchAndScrollTriggerContext')),
        e = b.setIsTriggerDisabled;
      b = m(null);
      var f = b[0],
        g = b[1],
        i = d('CometRelay').useRelayEnvironment(),
        s = j(
          function () {
            e != null && e(!0),
              g(!1),
              n.onReady(function (a) {
                a.commit(i, q);
              });
          },
          [i, e],
        );
      l(
        function () {
          if (a && f === null) {
            var b = d('CometRelay')
              .fetchQuery(i, r, { fetchPolicy: 'store-or-network' })
              .subscribe({
                next: function (b) {
                  b =
                    (b == null
                      ? void 0
                      : (b = b.nux) == null
                      ? void 0
                      : b.should_show) || !1;
                  g(b);
                  b &&
                    a &&
                    o.onReady(function (a) {
                      a.commit(
                        i,
                        q,
                        function () {},
                        function () {
                          c('recoverableViolation')(
                            'logimpression fb nux mutation failed for video player watch and scroll control.',
                            'watch_www_bug_rotation',
                          );
                        },
                      );
                    });
                },
              });
            return function () {
              b.unsubscribe();
            };
          }
        },
        [i, a, f],
      );
      b = {
        align: 'end',
        arrowStyle: 'inset',
        disableAutoFlip: !0,
        hasCloseButton: !0,
        label: h._('__JHASH__cTRQbv1sbZ0__JHASH__'),
        onClose: function () {
          s();
        },
        onHide: function () {
          g(!1);
        },
        position: 'below',
        type: 'accent',
        xstyle: p.nux,
      };
      b = c('useCometCallout')(b, (f === !0 && a) || !1);
      return { handleDismissNUX: s, nuxRef: b, shouldShowNUX: f };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWatchAndScrollControl.react',
  [
    'fbt',
    'ix',
    'CastingStateHooks',
    'CometPictureInPictureExpContext',
    'CometRelay',
    'CometRouteRenderType',
    'CometVideoPictureInPictureManager.react',
    'CometVideoPictureInPictureManagerContext',
    'CometWatchAndScrollControlNUXContext',
    'CometWatchAndScrollTriggerContext',
    'JSResourceForInteraction',
    'VideoPlayerControlIcon.react',
    'VideoPlayerHooks',
    'VideoPlayerInstreamAdsStateHooks',
    'VideoPlayerWatchAndScrollControl_video.graphql',
    'VideoPlayerWithWatchAndScrollTrigger.react',
    'emptyFunction',
    'fbicon',
    'gkx',
    'react',
    'requireDeferred',
    'useCometLazyDialog',
    'useCometRouterDispatcher',
    'useCometRouterState',
    'useIsVideoHomePlayerOriginFromTracePolicy',
    'usePlayerOriginRouteTracePolicy',
    'useVideoPlayerWatchAndScrollControlNUX',
    'useWatchAndScrollTrigger',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react');
    e = d('react');
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useState,
      p = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'VideoPlayerWatchAndScrollControl.react',
      ),
      q = c('JSResourceForInteraction')(
        'CometCastingStopWatchAndScrollDialog.react',
      ).__setRef('VideoPlayerWatchAndScrollControl.react'),
      r = 6e4,
      s = window.document.pictureInPictureEnabled;
    function a(a) {
      var e,
        f = a.subOrigin;
      a = a.video;
      var g = m(c('CometWatchAndScrollTriggerContext')),
        t = g.isControlShown,
        u = g.setIsControlShown;
      g = d('CometRouteRenderType').useIsPushView();
      var v = d('VideoPlayerHooks').useIsFullscreen(),
        w = c('useCometRouterDispatcher')(),
        x = c('useCometRouterState')(),
        y =
          (x = x == null ? void 0 : x.main.route.tabKey) != null
            ? x
            : 'undefined';
      x = d('CometRelay').useFragment(
        j !== void 0
          ? j
          : (j = b('VideoPlayerWatchAndScrollControl_video.graphql')),
        a,
      );
      var z = x == null ? void 0 : x.id;
      a = (a = x == null ? void 0 : x.playable_duration_in_ms) != null ? a : 0;
      var A = x == null ? void 0 : x.is_huddle,
        B = x == null ? void 0 : x.url;
      n(
        function () {
          u != null && u(!0);
        },
        [u],
      );
      var C = c('usePlayerOriginRouteTracePolicy')(),
        D = c('useIsVideoHomePlayerOriginFromTracePolicy')(C);
      e =
        (x == null
          ? void 0
          : (e = x.owner) == null
          ? void 0
          : e.has_professional_features_for_watch) === !0 &&
        a >= r &&
        t &&
        !D;
      var E = d('VideoPlayerHooks').usePlaying(),
        F = d('VideoPlayerHooks').useController();
      a = F.getPlayheadPosition();
      var G = a >= 10;
      t = o(!1);
      D = t[0];
      var H = t[1];
      a = o(!1);
      var I = a[0],
        J = a[1];
      t = o(!1);
      a = t[0];
      var K = t[1];
      t = d('VideoPlayerInstreamAdsStateHooks').useInstreamAdsStateValue();
      t =
        t === 'STARTING_INDICATOR' ||
        t === 'PLAY_NI_VIDEO' ||
        t === 'START_AD' ||
        t === 'PLAY_LONGER_AD';
      n(
        function () {
          E && G && H(!0);
        },
        [G, E],
      );
      var L = d('CastingStateHooks').useIsCastingAnyVideo(),
        M = c('useCometLazyDialog')(q),
        N = M[0];
      M = !t && D && e;
      t = c('useVideoPlayerWatchAndScrollControlNUX')(M);
      var O = t.handleDismissNUX;
      D = t.nuxRef;
      e = t.shouldShowNUX;
      var P = e === !0 && M;
      t = m(c('CometWatchAndScrollControlNUXContext'));
      var Q = t.setIsVideoPlayerWatchAndScrollControlNUXVisible,
        R = m(c('CometPictureInPictureExpContext'));
      n(
        function () {
          Q && Q(P);
        },
        [P, Q],
      );
      var S = d('useWatchAndScrollTrigger').useWatchAndScrollTrigger(
          f,
          d('VideoPlayerWithWatchAndScrollTrigger.react')
            .WatchAndScrollTriggerType.WNS_CONTROL,
          z,
          B,
        ),
        T = d('VideoPlayerHooks').useIsPremiumMusicVideo(),
        U = x == null ? void 0 : (e = x.owner) == null ? void 0 : e.id;
      M = l(
        function () {
          var a = d(
              'CometVideoPictureInPictureManagerContext',
            ).isInPictureInPictureExp(),
            b = d(
              'CometVideoPictureInPictureManagerContext',
            ).isInPictureInPictureExpControlGroup(),
            c = d(
              'CometVideoPictureInPictureManagerContext',
            ).isSkipAndChainingDisabledInPictureInPicture();
          R.setPictureInPictureExpConfig({
            isInPictureInPictureExp: a,
            isInPictureInPictureExpControlGroup: b,
            isSkipAndChainingDisabled: c,
          });
          s && a && J(!0);
          c =
            (a || b) &&
            (T ||
              d(
                'CometVideoPictureInPictureManager.react',
              ).EXCLUDED_PROVIDERS.includes(U));
          c && K(!0);
        },
        [T, U, R],
      );
      var V = C === 'comet.videos.tahoe',
        W = l(
          function () {
            L && z != null
              ? N(
                  {
                    onClose: c('emptyFunction'),
                    onContinue: S,
                    startingVideoType: 'wns',
                  },
                  c('emptyFunction'),
                )
              : S();
          },
          [L, S, N, z],
        );
      t = l(
        function () {
          W(),
            I
              ? (p.onReady(function (a) {
                  a.log({
                    click_point: 'control_picture_in_picture',
                    event: 'click',
                    event_target_info: C,
                    player_suborigin: f,
                  });
                }),
                F.requestPictureInPicture())
              : p.onReady(function (a) {
                  a.log({
                    click_point: 'control_watch_and_scroll',
                    event: 'click',
                    event_target_info: y,
                  });
                }),
            P === !0 && O(),
            w && w.popPushView && w.popPushView();
        },
        [W, P, w, y, O, C, f, F, I],
      );
      var X = f === 'live_producer';
      B = l(
        function () {
          W(),
            I
              ? (p.onReady(function (a) {
                  a.log({
                    click_point: 'control_picture_in_picture',
                    event: 'click',
                    event_target_info: C,
                    player_suborigin: f,
                  });
                }),
                F.requestPictureInPicture())
              : p.onReady(function (a) {
                  a.log({
                    click_point: 'control_watch_and_scroll',
                    event: 'click',
                    event_target_info: y,
                  });
                }),
            P === !0 && O(),
            v && F.requestSetIsFullscreen(!1),
            w != null && (X || V) && w.go('/', {});
        },
        [W, P, v, y, O, F, w, X, V, f, C, I],
      );
      x = g ? t : B;
      c('gkx')('1224637')
        ? (e = h._('__JHASH__B-CiurI5Nqm__JHASH__'))
        : A === !0
        ? (e = h._('__JHASH__1NTpM1RL-cA__JHASH__'))
        : (e = h._('__JHASH__cTRQbv1sbZ0__JHASH__'));
      I && (e = h._('__JHASH__AQMjhAwOZ46__JHASH__'));
      return a
        ? null
        : k.jsx('div', {
            onMouseEnter: M,
            ref: D,
            children: k.jsx(c('VideoPlayerControlIcon.react'), {
              color: 'white',
              icon: d('fbicon')._(i('150489'), 20),
              label: e,
              onPress: x,
              tooltip: P ? null : e,
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerLiveVideoControls.react',
  [
    'CometPlaceholder.react',
    'CometRelay',
    'CometTahoeCustomVideoAreaContext',
    'CometTrackingNodeProvider.react',
    'LiveCostreamerTagSubscription.react',
    'LiveVideoLatencyMenu.react',
    'PlaybackSpeedExperiments',
    'VideoPlayerCaptionsControl.react',
    'VideoPlayerCastControlShim.react',
    'VideoPlayerControlsBottomRowAddOnContext',
    'VideoPlayerControlsContainerOverlay.react',
    'VideoPlayerControlsGroups.react',
    'VideoPlayerHooks',
    'VideoPlayerJoinOnPortalControl.react',
    'VideoPlayerLiveVideoControls_video.graphql',
    'VideoPlayerPlaybackControl.react',
    'VideoPlayerQuietModeControl.react',
    'VideoPlayerSettingsControl.react',
    'VideoPlayerVolumeControl.react',
    'VideoPlayerWatchAndScrollControl.react',
    'cr:1809777',
    'gkx',
    'react',
    'useVideoPlayerBigPlayButtonOverlay',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    e = d('react');
    var j = e.useContext,
      k = e.useState,
      l = d('PlaybackSpeedExperiments').isInCometHeadroomTest()
        ? b('cr:1809777')
        : null,
      m =
        h !== void 0
          ? h
          : (h = b('VideoPlayerLiveVideoControls_video.graphql'));
    function n(a) {
      var b,
        e,
        f = d('CometRelay').useFragment(m, a.video),
        g = d('VideoPlayerHooks').useEnded(),
        h = d('VideoPlayerHooks').useIsFullscreen(),
        n = j(
          d('VideoPlayerControlsBottomRowAddOnContext')
            .VideoPlayerControlsBottomRowAddOnContext,
        ),
        o = c('useVideoPlayerBigPlayButtonOverlay')();
      o = o.bigPlayButtonIsVisible;
      var p = d('VideoPlayerHooks').useCaptionsLoaded(),
        q = d('VideoPlayerHooks').useCaptionsVisible(),
        r = k(null),
        s = r[0];
      r = r[1];
      var t = j(
        d('CometTahoeCustomVideoAreaContext').CometTahoeCustomVideoAreaContext,
      );
      t = t.customVideoAreaHidden;
      if (g) return null;
      g = a.disablePlaybackControls;
      var u = a.expandControl,
        v = a.isControlsVisible,
        w = a.isExpandControlVisible;
      w = w === void 0 ? !1 : w;
      var x = a.isVolumeControlVisible,
        y = a.isWatchAndScrollControlVisible;
      y = y === void 0 ? !1 : y;
      var z = a.onUserInteraction,
        A = a.shouldRenderCaptionsControl;
      A = A === void 0 ? !0 : A;
      var B = a.shouldRenderCostreamControl;
      B = B === void 0 ? !1 : B;
      var C = a.shouldRenderModeratorControl;
      C = C === void 0 ? !1 : C;
      var D = a.subOrigin,
        E = f == null ? void 0 : f.id;
      b = f == null ? void 0 : (b = f.owner) == null ? void 0 : b.id;
      var F = f == null ? void 0 : f.if_viewer_can_see_costreaming_tools,
        G = F != null,
        H = f == null ? void 0 : f.if_viewer_can_use_clipping,
        I = (f == null ? void 0 : f.is_clipping_enabled) === !0,
        J = f == null ? void 0 : f.if_viewer_can_see_community_moderation_tools,
        K = J != null,
        L = f == null ? void 0 : f.if_viewer_can_use_live_rewind;
      e =
        ((e = f == null ? void 0 : f.live_rewind_enabled) != null ? e : !1) &&
        a.shouldHideRewindControls !== !0;
      w = w || v || (g === !0 && !o);
      y = y || v || (g === !0 && !o);
      o = i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
        isVisible: w,
        noPaddingEnd: !0,
        noPaddingStart: !0,
        children: u,
      });
      w =
        a.shouldRenderWatchAndScrollControl === !0 && D != null && f != null
          ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
              isVisible: y,
              children: i.jsx(c('VideoPlayerWatchAndScrollControl.react'), {
                subOrigin: D,
                video: f,
              }),
            })
          : null;
      u = D === 'watch_scroll';
      y = c('gkx')('8487') ? A === !0 : !u;
      return i.jsxs(c('VideoPlayerControlsContainerOverlay.react'), {
        isBackgroundVisible: v,
        isVisible: t,
        children: [
          e
            ? i.jsx(d('CometRelay').MatchContainer, {
                match: L,
                props: {
                  isControlsVisible: v && !g,
                  onUserInteraction: z,
                  video: L,
                },
              })
            : i.jsxs(i.Fragment, {
                children: [
                  Boolean(a.shouldRenderPauseControl)
                    ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
                        isVisible: v && !g,
                        children: i.jsx(
                          c('VideoPlayerPlaybackControl.react'),
                          {},
                        ),
                      })
                    : null,
                  i.jsx(d('VideoPlayerControlsGroups.react').Expanded, {
                    children: i.jsx(i.Fragment, {}),
                  }),
                ],
              }),
          i.jsxs(d('VideoPlayerControlsGroups.react').Contracted, {
            isVisible: v,
            children: [
              b != null &&
                E != null &&
                i.jsx(c('LiveCostreamerTagSubscription.react'), {
                  pageID: b,
                  videoID: E,
                }),
              G &&
                B &&
                E != null &&
                !h &&
                i.jsx(c('CometPlaceholder.react'), {
                  fallback: null,
                  children: i.jsx(d('CometRelay').MatchContainer, {
                    match: F,
                    props: { video: F },
                  }),
                }),
              a.shouldRenderQuietModeControl === !0 &&
                !h &&
                i.jsx(c('VideoPlayerQuietModeControl.react'), {}),
              I &&
                E != null &&
                i.jsx(d('CometRelay').MatchContainer, {
                  match: H,
                  props: { video: H, videoID: E },
                }),
              K && C
                ? i.jsx(c('CometPlaceholder.react'), {
                    fallback: null,
                    children: i.jsx(d('CometRelay').MatchContainer, {
                      match: J,
                      props: { video: J, videoID: E },
                    }),
                  })
                : null,
              g === !0
                ? null
                : i.jsx(c('CometTrackingNodeProvider.react'), {
                    trackingNode: 257,
                    children: i.jsx(
                      d('LiveVideoLatencyMenu.react')
                        .LiveVideoLatencyMenuContextProvider,
                      {
                        video: f,
                        children: i.jsx(c('VideoPlayerSettingsControl.react'), {
                          alignMenuToIcon:
                            (n == null ? void 0 : n.getBottomRowAddOn()) !=
                            null,
                          menuOpened: s,
                          onUserInteraction: z,
                          setMenuOpened: r,
                        }),
                      },
                    ),
                  }),
              l != null
                ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
                    isVisible: v,
                    children: i.jsx(l, { onUserInteraction: z }),
                  })
                : null,
              p && y
                ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
                    isVisible: v,
                    children: i.jsx(c('VideoPlayerCaptionsControl.react'), {
                      alignMenuToIcon:
                        (n == null ? void 0 : n.getBottomRowAddOn()) != null,
                      captionsVisible: q,
                      menuOpened: s,
                      onUserInteraction: z,
                      setMenuOpened: r,
                      video: f,
                    }),
                  })
                : null,
              a.shouldRenderCastControl === !0 && D != null && f != null
                ? i.jsx(c('VideoPlayerCastControlShim.react'), {
                    isVisible: v && !g,
                    subOrigin: D,
                  })
                : null,
            ],
          }),
          o,
          i.jsx(c('VideoPlayerJoinOnPortalControl.react'), { isVisible: v }),
          w,
          i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
            isVisible: x,
            noPaddingStart: !0,
            children: i.jsx(c('CometTrackingNodeProvider.react'), {
              trackingNode: 114,
              children: i.jsx(c('VideoPlayerVolumeControl.react'), {
                onUserInteraction: z,
              }),
            }),
          }),
        ],
      });
    }
    n.displayName = n.name + ' [from ' + f.id + ']';
    function a(a) {
      return i.jsx(c('CometPlaceholder.react'), {
        fallback: null,
        children: i.jsx(n, babelHelpers['extends']({}, a)),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerDefaultControlsImplLive.react',
  [
    'CometRelay',
    'VideoPlayerDefaultControlsImplLive_video.graphql',
    'VideoPlayerLiveVideoControls.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e = a.expandControl,
        f = a.isControlsVisible,
        g = a.isVolumeControlVisible,
        j = a.onUserInteraction,
        k = a.pictureInPictureControl,
        l = a.shouldHideRewindControls,
        m = a.shouldRenderCaptionsControl,
        n = a.shouldRenderCostreamControl,
        o = a.shouldRenderModeratorControl,
        p = a.shouldRenderPauseControl,
        q = a.shouldRenderQuietModeControl,
        r = a.shouldRenderWatchAndScrollControl,
        s = a.subOrigin,
        t = a.video;
      a = a.videoTahoeUrl;
      t = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('VideoPlayerDefaultControlsImplLive_video.graphql')),
        t,
      );
      return i.jsx(c('VideoPlayerLiveVideoControls.react'), {
        expandControl: e,
        isControlsVisible: f,
        isVolumeControlVisible: g,
        onUserInteraction: j,
        pictureInPictureControl: k,
        shouldHideRewindControls: l,
        shouldRenderCaptionsControl: m,
        shouldRenderCostreamControl: n,
        shouldRenderModeratorControl: o,
        shouldRenderPauseControl: p,
        shouldRenderQuietModeControl: q,
        shouldRenderWatchAndScrollControl: r,
        subOrigin: s,
        video: t,
        videoTahoeUrl: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerDefaultControlsImplNotLive.react',
  [
    'CometRelay',
    'PlaybackSpeedExperiments',
    'VideoPlayerCaptionsControl.react',
    'VideoPlayerControlsBottomRowAddOnContext',
    'VideoPlayerControlsContainerOverlay.react',
    'VideoPlayerControlsGroups.react',
    'VideoPlayerDefaultControlsImplNotLive_video.graphql',
    'VideoPlayerHooks',
    'VideoPlayerJoinOnPortalControl.react',
    'VideoPlayerPlaybackControl.react',
    'VideoPlayerPlaybackTimer.react',
    'VideoPlayerQuietModeControl.react',
    'VideoPlayerScrubberWithPreview.react',
    'VideoPlayerSettingsControl.react',
    'VideoPlayerVolumeControl.react',
    'VideoPlayerWatchAndScrollControl.react',
    'cr:1790881',
    'cr:1809777',
    'gkx',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    e = d('react');
    var j = e.useContext,
      k = e.useState,
      l = d('PlaybackSpeedExperiments').isInCometHeadroomTest
        ? b('cr:1790881')
        : null,
      m = d('PlaybackSpeedExperiments').isInCometHeadroomTest
        ? b('cr:1809777')
        : null,
      n = c('gkx')('3610');
    function a(a) {
      var e = a.expandControl,
        f = a.isControlsVisible,
        g = a.isVolumeControlVisible,
        o = a.onUserInteraction,
        p = a.pictureInPictureControl,
        q = a.shouldRenderCaptionsControl;
      q = q === void 0 ? !0 : q;
      var r = a.shouldRenderQuietModeControl;
      r = r === void 0 ? !1 : r;
      var s = a.shouldRenderWatchAndScrollControl,
        t = a.skipControl,
        u = a.subOrigin;
      a = a.video;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('VideoPlayerDefaultControlsImplNotLive_video.graphql')),
        a,
      );
      var v = d('VideoPlayerHooks').useIsFullscreen(),
        w = a == null ? void 0 : a.id,
        x = a == null ? void 0 : a.if_viewer_can_use_clipping,
        y = j(
          d('VideoPlayerControlsBottomRowAddOnContext')
            .VideoPlayerControlsBottomRowAddOnContext,
        );
      r =
        r === !0 && !v
          ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
              isVisible: f,
              noPaddingEnd: !0,
              children: i.jsx(c('VideoPlayerQuietModeControl.react'), {}),
            })
          : null;
      v =
        x != null &&
        w != null &&
        i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
          isVisible: f,
          noPaddingEnd: !0,
          noPaddingStart: r != null,
          children: i.jsx(d('CometRelay').MatchContainer, {
            match: x,
            props: { video: x, videoID: w },
          }),
        });
      x = k(null);
      w = x[0];
      x = x[1];
      y = i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
        isVisible: f,
        noPaddingEnd: !0,
        noPaddingStart: r != null || v != null,
        children: i.jsx(c('VideoPlayerSettingsControl.react'), {
          alignMenuToIcon: (y == null ? void 0 : y.getBottomRowAddOn()) != null,
          menuOpened: w,
          onUserInteraction: o,
          setMenuOpened: x,
        }),
      });
      s =
        s === !0 && u != null && a != null
          ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
              isVisible: f,
              children: i.jsx(c('VideoPlayerWatchAndScrollControl.react'), {
                subOrigin: u,
                video: a,
              }),
            })
          : null;
      e = i.jsxs(d('VideoPlayerControlsGroups.react').Contracted, {
        isVisible: f,
        noPaddingEnd: !0,
        children: [
          e,
          i.jsx(c('VideoPlayerJoinOnPortalControl.react'), { isVisible: f }),
        ],
      });
      var z =
        m != null
          ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
              isVisible: !0,
              children: i.jsx(m, {
                enableNUX: d(
                  'PlaybackSpeedExperiments',
                ).enableCometPlaybackSpeedControlHeadroomTestNUX(),
                onUserInteraction: o,
              }),
            })
          : null;
      g = i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
        isVisible: m ? !0 : g,
        noPaddingStart: !0,
        children: i.jsx(c('VideoPlayerVolumeControl.react'), {
          onUserInteraction: o,
        }),
      });
      var A = i.jsx(d('VideoPlayerControlsGroups.react').Expanded, {
        isVisible: f,
        children: i.jsx(c('VideoPlayerScrubberWithPreview.react'), {
          onUserInteraction: o,
          video: a,
        }),
      });
      t = i.jsxs(d('VideoPlayerControlsGroups.react').Contracted, {
        isVisible: f,
        children: [
          i.jsx(c('VideoPlayerPlaybackControl.react'), {}),
          t,
          i.jsx(c('VideoPlayerPlaybackTimer.react'), {}),
          l != null
            ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
                isVisible: f,
                children: i.jsx(l, { onUserInteraction: o }),
              })
            : null,
        ],
      });
      u = u === 'watch_scroll';
      q = c('gkx')('8487') ? q === !0 : !u;
      var B = d('VideoPlayerHooks').useCaptionsLoaded(),
        C = d('VideoPlayerHooks').useCaptionsVisible();
      B =
        B && !c('gkx')('1745416') && q
          ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
              isVisible: f,
              children: i.jsx(c('VideoPlayerCaptionsControl.react'), {
                captionsVisible: C,
                menuOpened: w,
                onUserInteraction: o,
                setMenuOpened: x,
                video: a,
              }),
            })
          : null;
      q =
        u && n
          ? i.jsx(d('VideoPlayerControlsGroups.react').Contracted, {
              isVisible: f,
              children: p,
            })
          : null;
      return i.jsxs(c('VideoPlayerControlsContainerOverlay.react'), {
        isBackgroundVisible: f,
        children: [t, A, r, v, y, B, s, e, q, z, g],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerPictureInPictureControl.react',
  [
    'fbt',
    'ix',
    'CometVideoPictureInPictureManagerContext',
    'VideoPlayerControlIcon.react',
    'VideoPlayerHooks',
    'fbicon',
    'react',
    'requireDeferred',
    'useVideoPlayerPortalingPassthroughProps',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    b = d('react');
    var k = b.useCallback,
      l = b.useContext,
      m = b.useEffect,
      n = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'VideoPlayerPictureInPictureControl.react',
      ),
      o = window.document.pictureInPictureEnabled;
    function a(a) {
      var b = a.routeTracePolicy,
        e = a.subOrigin;
      a = h._('__JHASH__AQMjhAwOZ46__JHASH__');
      var f = k(
          function () {
            n.onReady(function (a) {
              a.log({
                click_point: 'control_picture_in_picture',
                event: 'click',
                event_target_info: b,
                player_suborigin: e,
              });
            });
          },
          [b, e],
        ),
        g = d('VideoPlayerHooks').useController(),
        p = l(
          d('CometVideoPictureInPictureManagerContext')
            .CometVideoPictureInPictureManagerAPIContext,
        ),
        q = k(
          function () {
            p.openPipPlayer(), f();
          },
          [f, p],
        ),
        r = c('useVideoPlayerPortalingPassthroughProps')(),
        s = r.portableVideoID;
      m(
        function () {
          o && (p.setController(g), p.setPipPortableVideoID(s));
        },
        [p, g, s],
      );
      return o
        ? j.jsx(c('VideoPlayerControlIcon.react'), {
            icon: d('fbicon')._(i('509931'), 20),
            label: a,
            onPress: q,
            tooltip: a,
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.VideoPlayerPictureInPictureControl = a;
  },
  98,
);
__d(
  'CometVideoPictureInPictureManagerHooks',
  ['CometVideoPictureInPictureManagerContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      return h(
        d('CometVideoPictureInPictureManagerContext')
          .CometVideoPictureInPictureManagerContext,
      );
    }
    g.useCometVideoPictureInPictureManager = a;
  },
  98,
);
__d(
  'CometWatchAndScrollUpNextCard.react',
  [
    'fbt',
    'CometLink.react',
    'CometRelay',
    'CometResponsiveColumns.react',
    'CometTahoeEndScreenProgressCircle.react',
    'CometWatchAndScrollUpNextCard_video.graphql',
    'TetraText.react',
    'VideoPlayerHooks',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react'),
      k = {
        backgroundThumbnail: {
          backgroundPosition: 'xztyhrg',
          backgroundSize: 'x18d0r48',
          borderTopStartRadius: 'x1lcm9me',
          borderTopEndRadius: 'x1yr5g0i',
          borderBottomEndRadius: 'xrt01vj',
          borderBottomStartRadius: 'x10y3i5r',
          bottom: 'x1ey2m1c',
          boxSizing: 'x9f619',
          end: 'xds687c',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        cardRoot: {
          backgroundColor: 'x1jx94hy',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          bottom: 'x1qqjqyx',
          display: 'x78zum5',
          end: 'xds687c',
          marginTop: 'x1xmf6yo',
          marginEnd: 'x1emribx',
          marginBottom: 'x1e56ztr',
          marginStart: 'x1i64zmx',
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x1sxyh0',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xurb0ha',
          position: 'x10l6tqk',
          start: 'x17qophe',
          $$css: !0,
        },
        metaColumn: { flexBasis: 'x12s9zaq', $$css: !0 },
        metadataContainer: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          marginBottom: 'xu06os2',
          marginTop: 'x1ok221b',
          $$css: !0,
        },
        previewContainer: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          height: 'xaymia4',
          justifyContent: 'xl56j7k',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'x10y0s8s',
          $$css: !0,
        },
        thumbnailColumn: { flexBasis: 'x19l4sor', $$css: !0 },
        upNextText: { marginBottom: 'xjpr12u', $$css: !0 },
        videoMetaText: { marginTop: 'x1xmf6yo', $$css: !0 },
      };
    function a(a) {
      var e,
        f = a.hidden,
        g = a.onNextVideo;
      a = a.video;
      a = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b('CometWatchAndScrollUpNextCard_video.graphql')),
        a,
      );
      var l = d('VideoPlayerHooks').useEnded();
      if (a == null) return null;
      e = (e = a.image) == null ? void 0 : e.uri;
      e =
        e != null
          ? { backgroundImage: 'url(' + e + ')' }
          : { backgroundColor: 'var(--disabled-icon)' };
      e = j.jsx('div', {
        className:
          'xztyhrg x18d0r48 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy',
        style: e,
      });
      var m = a.title_with_fallback;
      a = (a = a.owner) == null ? void 0 : a.name;
      return j.jsx('div', {
        className:
          'x1jx94hy x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1qqjqyx x78zum5 xds687c x1xmf6yo x1emribx x1e56ztr x1i64zmx x1y1aw1k x1sxyh0 xwib8y2 xurb0ha x10l6tqk x17qophe',
        children: j.jsxs(d('CometResponsiveColumns.react').Container, {
          children: [
            j.jsx(d('CometResponsiveColumns.react').Column, {
              xstyle: k.thumbnailColumn,
              children: j.jsxs('div', {
                className:
                  'x6s0dn4 x78zum5 xdt5ytf xaymia4 xl56j7k x10l6tqk x17qophe x13vifvy x10y0s8s',
                children: [
                  e,
                  g &&
                    j.jsx(c('CometLink.react'), {
                      onClick: function () {
                        return g('watch_and_scroll_chaining_click_advance');
                      },
                      children: j.jsx(
                        c('CometTahoeEndScreenProgressCircle.react'),
                        {
                          circleDiameter: 32,
                          circleStrokeColor: 'var(--base-blue)',
                          circleStrokeWidth: 3,
                          iconSize: 20,
                          isMakingProgress: !f && l,
                          onProgressDone: function () {
                            return g('watch_and_scroll_chaining_auto_advance');
                          },
                          timeoutSec: 6,
                        },
                      ),
                    }),
                ],
              }),
            }),
            j.jsx(d('CometResponsiveColumns.react').Column, {
              xstyle: k.metaColumn,
              children: j.jsxs('div', {
                className: 'x78zum5 xdt5ytf xu06os2 x1ok221b',
                children: [
                  j.jsx('div', {
                    className: 'xjpr12u',
                    children: j.jsx(c('TetraText.react'), {
                      color: 'secondary',
                      type: 'meta4',
                      children: h._('__JHASH__ie05BxoRsTp__JHASH__'),
                    }),
                  }),
                  j.jsx('div', {
                    className: 'x1xmf6yo',
                    children: j.jsx(c('TetraText.react'), {
                      color: 'secondary',
                      numberOfLines: 1,
                      type: 'body4',
                      children: a,
                    }),
                  }),
                  j.jsx('div', {
                    className: 'x1xmf6yo',
                    children: j.jsx(c('TetraText.react'), {
                      color: 'primary',
                      numberOfLines: 1,
                      type: 'bodyLink4',
                      children: m,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerSkipControlBase.react',
  ['fbt', 'ix', 'VideoPlayerControlIcon.react', 'fbicon', 'react'],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    function a(a) {
      return j.jsx(c('VideoPlayerControlIcon.react'), {
        color: 'white',
        disabled: a.disabled,
        icon: d('fbicon')._(i('1052613'), 20),
        label: h._('__JHASH__RMwYtzhsEt6__JHASH__'),
        onHoverIn: a.onHoverIn,
        onHoverOut: a.onHoverOut,
        onPress: a.onPress,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerSkipControl.react',
  [
    'CometRelay',
    'CometSetWatchAndScrollVideoContext',
    'CometVideoPictureInPictureManager.react',
    'CometVideoPictureInPictureManagerHooks',
    'CometWatchAndScrollSetStoryViewabilityLoggerContext',
    'CometWatchAndScrollUpNextCard.react',
    'CometWatchAndScrollVideoContext',
    'VideoPlayerHooks',
    'VideoPlayerSkipControlBase.react',
    'VideoPlayerSkipControl_video.graphql',
    'react',
    'requireDeferred',
    'useCometTahoeChainingDepth',
    'usePlayerOriginRouteTracePolicy',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    e = d('react');
    var j = e.useCallback,
      k = e.useContext,
      l = e.useState,
      m = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'VideoPlayerSkipControl.react',
      );
    function a(a) {
      var e,
        f = a.subOrigin;
      a = a.video;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('VideoPlayerSkipControl_video.graphql')),
        a,
      );
      var g = d('useCometTahoeChainingDepth').useChainingDepthContext(),
        n = g.chainingDepthDispatch,
        o = k(c('CometWatchAndScrollVideoContext'));
      g = d('VideoPlayerHooks').useEnded();
      var p = k(c('CometWatchAndScrollSetStoryViewabilityLoggerContext')),
        q = k(c('CometSetWatchAndScrollVideoContext'));
      a =
        (a = a.video_channel) == null
          ? void 0
          : (a = a.video_channel_feed) == null
          ? void 0
          : (a = a.edges) == null
          ? void 0
          : a[0];
      var r = a == null ? void 0 : a.cursor,
        s = a == null ? void 0 : a.node,
        t = s == null ? void 0 : s.client_view_config;
      a =
        s == null
          ? void 0
          : (a = s.attachments) == null
          ? void 0
          : (a = a[0]) == null
          ? void 0
          : a.media;
      var u =
          a != null && a.__typename === 'Video'
            ? a == null
              ? void 0
              : a.id
            : null,
        v = o == null ? void 0 : o.chainingSeedVideoID,
        w = c('usePlayerOriginRouteTracePolicy')(),
        x = l(!1),
        y = x[0],
        z = x[1];
      x = j(function () {
        z(!0),
          m.onReady(function (a) {
            a.log({ event: 'watch_and_scroll_skip_overlay_impression' });
          });
      }, []);
      var A = j(function () {
        z(!1);
      }, []);
      e = a == null ? void 0 : (e = a.owner) == null ? void 0 : e.id;
      var B = d('VideoPlayerHooks').useIsPremiumMusicVideo(),
        C = a == null ? void 0 : a.url,
        D = j(
          function () {
            var a;
            m.onReady(function (a) {
              a.log({
                click_point: 'control_skip',
                click_target: 'watch_and_scroll',
                event: 'click',
              });
            });
            q({
              chainingCursor: r,
              chainingSeedVideoID: v,
              routeTracePolicy:
                (a = o == null ? void 0 : o.routeTracePolicy) != null ? a : w,
              sessionStartTime: o == null ? void 0 : o.sessionStartTime,
              sessionTrigger: o == null ? void 0 : o.sessionTrigger,
              subOrigin: f,
              videoID: u,
              videoUrl: C,
            });
            a = {
              can_delay_log_impression:
                t == null ? void 0 : t.can_delay_log_impression,
              use_banzai_signal_imp:
                t == null ? void 0 : t.use_banzai_signal_imp,
              use_banzai_vital_imp: t == null ? void 0 : t.use_banzai_vital_imp,
            };
            p({
              clientViewConfig: a,
              encryptedTracking: s == null ? void 0 : s.encrypted_tracking,
              trackingCode: {
                click_tracking_linkshim_cb:
                  (s == null ? void 0 : s.click_tracking_linkshim_cb) || '',
                encrypted_click_tracking:
                  (s == null ? void 0 : s.encrypted_click_tracking) || '',
                encrypted_tracking:
                  (s == null ? void 0 : s.encrypted_tracking) || '',
              },
              videoID: u,
              viewabilityConfig: s == null ? void 0 : s.viewability_config,
            });
            n && n({ type: 'INCREMENT' });
          },
          [
            u,
            n,
            t == null ? void 0 : t.can_delay_log_impression,
            t == null ? void 0 : t.use_banzai_signal_imp,
            t == null ? void 0 : t.use_banzai_vital_imp,
            r,
            w,
            p,
            q,
            s == null ? void 0 : s.click_tracking_linkshim_cb,
            s == null ? void 0 : s.encrypted_click_tracking,
            s == null ? void 0 : s.encrypted_tracking,
            s == null ? void 0 : s.viewability_config,
            f,
            v,
            o == null ? void 0 : o.routeTracePolicy,
            o == null ? void 0 : o.sessionStartTime,
            o == null ? void 0 : o.sessionTrigger,
            C,
          ],
        ),
        E = d(
          'CometVideoPictureInPictureManagerHooks',
        ).useCometVideoPictureInPictureManager(),
        F = E.setHasNextChainedVideo,
        G = E.setSkippedFromPipPlayer;
      E = E.skippedFromPipPlayer;
      if (a == null || a.__typename !== 'Video') {
        m.onReady(function (a) {
          a.log({ event: 'watch_and_scroll_chaining_query_empty' });
        });
        F(!1);
        return i.jsx(c('VideoPlayerSkipControlBase.react'), { disabled: !0 });
      } else
        F(
          !B &&
            !d(
              'CometVideoPictureInPictureManager.react',
            ).EXCLUDED_PROVIDERS.includes(e),
        );
      E && (D(), G(!1));
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c('VideoPlayerSkipControlBase.react'), {
            onHoverIn: x,
            onHoverOut: A,
            onPress: D,
          }),
          y &&
            !g &&
            i.jsxs(i.Fragment, {
              children: [
                i.jsx('div', {
                  className:
                    'x1jx94hy xm3z3ea x1x8b98j x131883w x16mih1h x1qqjqyx x1ta3ar0 x10l6tqk xyokknr x1rr8tx7 x1se2ifz',
                }),
                i.jsx(c('CometWatchAndScrollUpNextCard.react'), {
                  hidden: !1,
                  video: a,
                }),
              ],
            }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometWatchAndScrollCloseButton.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'CometSetWatchAndScrollVideoContext',
    'CometWatchAndScrollCloseButton_video.graphql',
    'CometWatchAndScrollVideoContext',
    'TetraIcon.react',
    'VideoPlayerInstreamAdsStateHooks',
    'fbicon',
    'react',
    'requireDeferred',
    'useCometRouterState',
    'useCometTahoeChainingDepth',
    'useVideoPlayerDefaultControlsVisibility',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react'),
      l = d('react').useContext,
      m = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'CometWatchAndScrollCloseButton.react',
      );
    function a(a) {
      a = a.video;
      a = d('CometRelay').useFragment(
        j !== void 0
          ? j
          : (j = b('CometWatchAndScrollCloseButton_video.graphql')),
        a,
      );
      var e = l(c('CometSetWatchAndScrollVideoContext')),
        f = l(c('CometWatchAndScrollVideoContext')),
        g = d('useCometTahoeChainingDepth').useChainingDepthContext(),
        n = g.chainingDepthState;
      g = c('useVideoPlayerDefaultControlsVisibility')();
      var o = g.isControlsVisible,
        p = g.onUserInteraction;
      a = !!(a == null
        ? void 0
        : (g = a.owner) == null
        ? void 0
        : g.has_professional_features_for_watch);
      g = d('VideoPlayerInstreamAdsStateHooks').useInstreamAdsIsStart();
      var q = a || g;
      a = c('useCometRouterState')();
      var r =
        (g = a == null ? void 0 : a.main.route.tabKey) != null
          ? g
          : 'undefined';
      return k.jsx('i', {
        className:
          'x1vjfegm' +
          ((q ? '' : ' xnx3k43 x10l6tqk x1jzctok') +
            (!q && !o ? ' xg01cxk xlshs6z' : '')),
        children: k.jsx(c('TetraIcon.react'), {
          'aria-label': h._('__JHASH__og21Kk60gDi__JHASH__'),
          color: q ? 'primary' : 'white',
          icon: d('fbicon')._(i('478233'), 20),
          onPress: function () {
            var a = f == null ? void 0 : f.sessionStartTime,
              b = new Date(),
              c = (f == null ? void 0 : f.sessionTrigger)
                ? f == null
                  ? void 0
                  : f.sessionTrigger
                : null;
            e(null);
            p({ name: 'exit_watch_and_scroll_video', type: 'happened' });
            q &&
              m.onReady(function (d) {
                var e = n + 1,
                  f = a ? (b.getTime() - a.getTime()) / 1e3 : null;
                d.log({
                  click_point: 'close_button',
                  click_target: 'watch_and_scroll',
                  event: 'click',
                  event_target_info: r,
                });
                d.log({
                  event: 'watch_and_scroll_end_session',
                  event_target_info: c,
                  video_watched_count: e,
                  watch_time_in_watch_and_scroll_s: f,
                });
              });
          },
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometWatchAndScrollTopBar.react',
  [
    'ix',
    'CometLink.react',
    'CometRelay',
    'CometRow.react',
    'CometRowItem.react',
    'CometVideoHomeThreeDotContextMenu.react',
    'CometWatchAndScrollCloseButton.react',
    'CometWatchAndScrollTopBar_video.graphql',
    'TetraProfilePhoto.react',
    'TetraTextPairing.react',
    'XCometGamingVanityControllerRouteBuilder',
    'XCometVideoHomePlaylistControllerRouteBuilder',
    'fbicon',
    'react',
    'requireDeferred',
    'useCometRouterState',
    'useNavigateToTahoePassthroughProps',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react'),
      k = d('react').useState,
      l = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'CometWatchAndScrollTopBar.react',
      ),
      m = {
        actorIcon: {
          marginStart: 'x1i64zmx',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          $$css: !0,
        },
        closeButton: {
          display: 'x78zum5',
          marginTop: 'x14vqqas',
          marginEnd: 'xq8finb',
          marginBottom: 'xod5an3',
          marginStart: 'x16n37ib',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          $$css: !0,
        },
        root: {
          backgroundColor: 'x1jx94hy',
          borderTopEndRadius: 'xgqcy7u',
          borderTopStartRadius: 'x1lq5wgf',
          boxShadow: 'x163d74j',
          display: 'x78zum5',
          end: 'xds687c',
          height: 'x1dqyrwa',
          opacity: 'x1hc1fzr',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x11zq2l5',
          transform: 'x1nm1lid',
          transformOrigin: 'xm4efwp',
          transitionDuration: 'xx6bhzk',
          transitionProperty: 'x11xpdln',
          $$css: !0,
        },
        row: {
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          width: 'xh8yej3',
          $$css: !0,
        },
        threeDot: {
          display: 'x78zum5',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          $$css: !0,
        },
      };
    function a(a) {
      var e = a.isGamingVideo,
        f = a.routeTracePolicy,
        g = a.subOrigin,
        q = a.video;
      a = a.videoUrl;
      q = d('CometRelay').useFragment(
        i !== void 0 ? i : (i = b('CometWatchAndScrollTopBar_video.graphql')),
        q,
      );
      var r = c('useNavigateToTahoePassthroughProps')(),
        s = k(!1);
      s[0];
      var t = s[1];
      s = function (a) {
        t(a);
      };
      var u = q == null ? void 0 : q.owner;
      if (q == null || u == null) return null;
      r = babelHelpers['extends']({}, r, {
        playerSubOrigin: g,
        portalingRouteTracePolicy: f,
        portalingSubOrigin: g,
      });
      f = '#';
      g = u.uri_token;
      g != null
        ? (f = c('XCometVideoHomePlaylistControllerRouteBuilder').buildURL({
            idorvanity: g,
          }))
        : u.url != null && (f = u.url);
      if (e) {
        g =
          (g = (g = u.page_vanity_url) != null ? g : u.vanity) != null
            ? g
            : u.uri_token;
        if (g != null) {
          var v;
          f = c('XCometGamingVanityControllerRouteBuilder').buildURL({
            injected_hero_video_id: (v = q.id) != null ? v : void 0,
            vanity: g,
          });
        }
      }
      return j.jsx('div', {
        className:
          'x1jx94hy xgqcy7u x1lq5wgf x163d74j x78zum5 xds687c x1dqyrwa x1hc1fzr x10l6tqk x17qophe x11zq2l5 x1nm1lid xm4efwp xx6bhzk x11xpdln',
        children: j.jsxs(c('CometRow.react'), {
          paddingHorizontal: 0,
          paddingVertical: 0,
          verticalAlign: 'center',
          xstyle: m.row,
          children: [
            j.jsx(c('CometRowItem.react'), {
              xstyle: m.actorIcon,
              children: j.jsx(n, {
                actorID: u.id,
                actorName: u.name,
                actorURL: f,
                iconURI: (v = u.profile_picture) == null ? void 0 : v.uri,
                passthroughProps: e ? r : void 0,
              }),
            }),
            j.jsx(c('CometRowItem.react'), {
              expanding: !0,
              children: j.jsx(c('TetraTextPairing.react'), {
                headline: j.jsx(p, {
                  passthroughProps: r,
                  title: q.title_with_fallback,
                  videoUrl: a,
                }),
                headlineLineLimit: 1,
                level: 4,
                meta: j.jsx(o, {
                  actorName: u.name,
                  actorURL: f,
                  passthroughProps: e ? r : void 0,
                }),
                metaLineLimit: 1,
                metaLocation: 'above',
              }),
            }),
            j.jsx(c('CometRowItem.react'), {
              xstyle: m.threeDot,
              children: j.jsx(c('CometVideoHomeThreeDotContextMenu.react'), {
                icon: d('fbicon')._(h('555291'), 20),
                identifierToken:
                  (g = q.creation_story) == null ? void 0 : g.identifier_token,
                onMenuVisibilityChange: s,
                onPress: function () {
                  l.onReady(function (a) {
                    a.log({
                      click_point: 'three_dot_menu',
                      click_target: 'watch_and_scroll',
                      event: 'click',
                    });
                  });
                },
                position: 'above',
                storyDebugInfo:
                  (v = q.creation_story) == null ? void 0 : v.debug_info,
                tracking: (a = q.creation_story) == null ? void 0 : a.tracking,
                videoID: q.id,
                videoMenuLocation: 'WATCH_AND_SCROLL',
              }),
            }),
            j.jsx(c('CometRowItem.react'), {
              xstyle: m.closeButton,
              children: j.jsx(c('CometWatchAndScrollCloseButton.react'), {
                video: q,
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function n(a) {
      var b = a.actorName,
        d = a.actorURL,
        e = a.iconURI;
      a = a.passthroughProps;
      return j.jsx(c('TetraProfilePhoto.react'), {
        'aria-label': b != null && b !== '' ? b : d,
        linkProps: { passthroughProps: (b = a) != null ? b : void 0, url: d },
        onPress: function () {
          l.onReady(function (a) {
            a.log({
              click_point: 'actor_profile_picture',
              click_target: 'watch_and_scroll',
              event: 'click',
            });
          });
        },
        size: 32,
        source: { uri: e || '' },
      });
    }
    n.displayName = n.name + ' [from ' + f.id + ']';
    function o(a) {
      var b = a.actorName,
        d = a.actorURL;
      a = a.passthroughProps;
      return b != null && b !== ''
        ? j.jsx(c('CometLink.react'), {
            href: d,
            onClick: function () {
              l.onReady(function (a) {
                a.log({
                  click_point: 'actor_name',
                  click_target: 'watch_and_scroll',
                  event: 'click',
                });
              });
            },
            passthroughProps: (d = a) != null ? d : void 0,
            children: b,
          })
        : null;
    }
    o.displayName = o.name + ' [from ' + f.id + ']';
    function p(a) {
      var b = a.passthroughProps,
        d = a.title;
      a = a.videoUrl;
      var e = c('useCometRouterState')(),
        f = e == null ? void 0 : e.main.route.tabKey;
      return j.jsx(c('CometLink.react'), {
        href: a,
        onClick: function () {
          l.onReady(function (a) {
            a.log({
              click_point: 'video_title',
              click_target: 'watch_and_scroll',
              event: 'click',
              event_target_info: f,
            });
          });
        },
        passthroughProps: b,
        children: d,
      });
    }
    p.displayName = p.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometWatchAndScroll.react',
  [
    'CaptionsTextSizeMapping',
    'CometInteractionSourceContext',
    'CometLoadingAnimation.react',
    'CometObjectFitContainerWithMaxHeight.react',
    'CometPictureInPictureExpContext',
    'CometPlaceholder.react',
    'CometProductAttribution',
    'CometRelay',
    'CometRouteProductAttributionContext',
    'CometRouterPushViewStackContext',
    'CometSetWatchAndScrollVideoContext',
    'CometTahoeChainingDepthLogging.react',
    'CometTrackingCodeProvider.react',
    'CometUFIVideoPlayerUtils',
    'CometVideoPictureInPictureManager.react',
    'CometVideoPictureInPictureManagerContext',
    'CometWarningScreenContext',
    'CometWatchAndScrollCloseButton.react',
    'CometWatchAndScrollContainer_video.graphql',
    'CometWatchAndScrollSoundContext',
    'CometWatchAndScrollStoryViewabilityLoggerContext',
    'CometWatchAndScrollTopBar.react',
    'CometWatchAndScrollVideoContext',
    'CometWatchAndScrollVideoQuery.graphql',
    'HiddenSubtreeContext',
    'HiddenSubtreeContextProvider.react',
    'Locale',
    'MWChatOpenTabCount.bs',
    'VideoAutoplayLocalScopeProvider.react',
    'VideoPlayerAutoplayRulesProvider',
    'VideoPlayerCaptionsDisplayConfigContext',
    'VideoPlayerCometWatchInjectionControl.react',
    'VideoPlayerDefaultControls.react',
    'VideoPlayerDefaultControlsProperties',
    'VideoPlayerHooks',
    'VideoPlayerInstreamAdsStateHooks',
    'VideoPlayerNavigateToTahoeOrFullScreenControl.react',
    'VideoPlayerPictureInPictureControl.react',
    'VideoPlayerRelay.react',
    'VideoPlayerSkipControlBase.react',
    'VideoPlayerSurface.react',
    'VideoPlayerWithAudioBackground.react',
    'VideoPlayerWithAudioOverlay.react',
    'VideoPlayerWithLiveVideoEndscreen.react',
    'VideoPlayerWithLiveVideoIndicator.react',
    'VideoPlayerWithWatchAndScrollChainingWrapper.react',
    'VideoPlayerWithWatchAndScrollSoundContext.react',
    'VideoPlayerWithWatchAndScrollWarningScreen.react',
    'WebPixelRatio',
    'XCometGamingVideoControllerRouteBuilder',
    'XCometWatchControllerRouteBuilder',
    'deferredLoadComponent',
    'gkx',
    'isRouteTransparent',
    'react',
    'requireDeferred',
    'requireDeferredForDisplay',
    'useCometRouterState',
    'useStoryViewabilityLogger',
    'useVideoOriginalDimensionsRelay',
    'useVideoPlayerPortalingPassthroughProps',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = d('react');
    e = d('react');
    var k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'CometWatchAndScroll.react',
      ),
      o = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')('VideoPlayerSkipControl.react').__setRef(
          'CometWatchAndScroll.react',
        ),
      ),
      p = d('VideoPlayerAutoplayRulesProvider').provideAutoplayRules('wns');
    function q() {
      var a = d('MWChatOpenTabCount.bs').useHook(),
        b = 338,
        c = 80;
      return a * b + c;
    }
    function a() {
      var a = k(c('CometRouterPushViewStackContext')),
        b = k(c('CometWatchAndScrollVideoContext')),
        e = k(c('CometSetWatchAndScrollVideoContext')),
        f = k(c('CometWatchAndScrollSoundContext')),
        g = k(c('CometPictureInPictureExpContext')),
        h = !1;
      b != null &&
        g.pictureInPictureExpConfig.isInPictureInPictureExp &&
        (h = !0);
      g = h
        ? !1
        : (a || []).some(function (a) {
            a = a.route;
            return !c('isRouteTransparent')(a);
          });
      a = b == null ? void 0 : b.portableVideoID;
      var i = b == null ? void 0 : b.routeTracePolicy,
        m = b == null ? void 0 : b.subOrigin,
        n = b == null ? void 0 : b.videoID,
        o = b == null ? void 0 : b.chainingSeedVideoID,
        p = b == null ? void 0 : b.chainingCursor;
      l(
        function () {
          b != null &&
            n != null &&
            o == null &&
            e(babelHelpers['extends']({}, b, { chainingSeedVideoID: n }));
        },
        [o, e, n, b],
      );
      l(
        function () {
          n == null && (f.setMuted(null), f.setVolume(null));
        },
        [f, n],
      );
      var s = q();
      return n == null || m == null || i == null || g
        ? null
        : j.jsx(c('CometPlaceholder.react'), {
            fallback: j.jsx('div', {
              className: h
                ? 'xal61yo x1jn9clo x2c8kfy x1s85apg x164qtfw xl56j7k xz65tgg xixxii4 xxsgkw5'
                : 'xal61yo x1jn9clo x2c8kfy x78zum5 x164qtfw xl56j7k xz65tgg xixxii4 xxsgkw5',
              style: d('Locale').isRTL() ? { left: s } : { right: s },
              children: j.jsx('div', {
                className: 'x78zum5 x6gtfd8 x10l6tqk x14qfxbe',
                children: j.jsx(c('CometLoadingAnimation.react'), { size: 36 }),
              }),
            }),
            children: j.jsx(c('HiddenSubtreeContextProvider.react'), {
              isHidden: g,
              children: j.jsx(
                d('CometVideoPictureInPictureManager.react')
                  .CometVideoPictureInPictureManager,
                {
                  isPipEnabled: h,
                  children: j.jsx(r, {
                    chainingCursor: p,
                    chainingSeedVideoID: o,
                    portableVideoID: a,
                    routeTracePolicy: i,
                    subOrigin: m,
                    videoID: n,
                  }),
                },
              ),
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function r(a) {
      var e,
        f = a.chainingCursor,
        g = a.chainingSeedVideoID,
        i = a.portableVideoID,
        k = a.routeTracePolicy,
        l = a.subOrigin;
      a = a.videoID;
      g = d('CometRelay').useLazyLoadQuery(
        h !== void 0 ? h : (h = b('CometWatchAndScrollVideoQuery.graphql')),
        {
          chainingCursor: f,
          chainingSeedVideoID: (f = g) != null ? f : a,
          scale: d('WebPixelRatio').get(),
          videoID: a,
        },
      );
      var n = d('CaptionsTextSizeMapping').FixedCaptionsTextSizeMap;
      f = m(
        function () {
          return { liveCaptionsTextAlignment: 'center', textSizeMapping: n };
        },
        [n],
      );
      var o = m(
          function () {
            return {
              v2: [
                d('CometProductAttribution').getProductAttributionEntryV2({
                  link_context: null,
                  rootName: 'CometWatchAndScroll.react',
                  tap_point: 'unexpected',
                  tracePolicy: k,
                  trackingNodes: null,
                }),
              ],
            };
          },
          [k],
        ),
        q = g.chainingSeedVideo;
      g = g.video;
      if (g == null) return null;
      var r = (g == null ? void 0 : g.is_gaming_video) === !0,
        t = g == null ? void 0 : g.id,
        v = c('XCometGamingVideoControllerRouteBuilder').buildURL(
          t != null ? { ref: 'comet_wns', video_id: t } : {},
        );
      t = c('XCometWatchControllerRouteBuilder').buildURL(
        t != null ? { v: t } : {},
      );
      e =
        (g == null
          ? void 0
          : (e = g.pay_to_access_paywall) == null
          ? void 0
          : e.should_show_paywall) === !0;
      v = r ? v : t;
      return e
        ? null
        : j.jsx(c('CometInteractionSourceContext').Provider, {
            value: 54,
            children: j.jsx(c('VideoAutoplayLocalScopeProvider.react'), {
              autoplayLocalRules: p,
              children: j.jsx(
                d('CometUFIVideoPlayerUtils')
                  .CometUFIVideoPlayerStateAndControllerContextProvider,
                {
                  children: j.jsx(
                    d('CometWarningScreenContext')
                      .CometWarningScreenContextProvider,
                    {
                      overlayExists: !1,
                      children: j.jsx(
                        c('VideoPlayerCaptionsDisplayConfigContext').Provider,
                        {
                          value: f,
                          children: j.jsx(
                            c('CometRouteProductAttributionContext').Provider,
                            {
                              value: o,
                              children: j.jsx(s, {
                                video: g,
                                videoID: a,
                                children: j.jsx(c('VideoPlayerRelay.react'), {
                                  initialTracePolicy: k,
                                  playerFormat: 'watch_scroll',
                                  portalingEnabled: !0,
                                  portalingFromVideoID: i,
                                  portalingPlaceMetaData: {
                                    placeDescription: 'watch_and_scroll',
                                  },
                                  subOrigin: l,
                                  video: g,
                                  volumeSetting: null,
                                  children: j.jsx(u, {
                                    chainingSeedVideo: q,
                                    isGamingVideo: r,
                                    isVideoHomeEligible: !!((t = g.owner) ==
                                    null
                                      ? void 0
                                      : t.has_professional_features_for_watch),
                                    permalinkUrl: v,
                                    routeTracePolicy: k,
                                    subOrigin: l,
                                    video: g,
                                  }),
                                }),
                              }),
                            },
                          ),
                        },
                      ),
                    },
                  ),
                },
              ),
            }),
          });
    }
    r.displayName = r.name + ' [from ' + f.id + ']';
    function s(a) {
      var e = a.children,
        f = a.video;
      a = a.videoID;
      f = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b('CometWatchAndScrollContainer_video.graphql')),
        f,
      );
      f = c('useVideoOriginalDimensionsRelay')(f);
      f = f.originalAspectRatio;
      var g = q(),
        h = k(c('CometWatchAndScrollStoryViewabilityLoggerContext'));
      a = (h == null ? void 0 : h.videoID) === a;
      var l = c('useStoryViewabilityLogger')({
          clientViewConfig: h == null ? void 0 : h.clientViewConfig,
          encryptedTracking: h == null ? void 0 : h.encryptedTracking,
          position: 0,
          viewabilityConfig: h == null ? void 0 : h.viewabilityConfig,
        }),
        m = l.debuggingInfoLoggers;
      l = l.ref;
      var n = k(c('CometPictureInPictureExpContext'));
      n = n.pictureInPictureExpConfig.isInPictureInPictureExp;
      n = j.jsxs('div', {
        className:
          '' +
          (n
            ? ' xal61yo x1jn9clo x2c8kfy x1s85apg x164qtfw xl56j7k xz65tgg xixxii4 xxsgkw5'
            : ' xal61yo x1jn9clo x2c8kfy x78zum5 x164qtfw xl56j7k xz65tgg xixxii4 xxsgkw5'),
        ref: a ? l : null,
        style: d('Locale').isRTL() ? { left: g } : { right: g },
        children: [
          m,
          j.jsx(c('CometObjectFitContainerWithMaxHeight.react'), {
            contentAspectRatio: f,
            maxHeight: 300,
            children: e,
          }),
        ],
      });
      l = h == null ? void 0 : h.trackingCode;
      return l != null && a
        ? j.jsx(c('CometTrackingCodeProvider.react'), {
            trackingCode: l,
            children: n,
          })
        : n;
    }
    function t() {
      var a = d('VideoPlayerHooks').useController(),
        b = k(c('HiddenSubtreeContext')).hidden;
      l(
        function () {
          b || a.play('user_initiated');
        },
        [a, b],
      );
    }
    function u(a) {
      var b = a.chainingSeedVideo,
        e = a.isGamingVideo,
        f = a.isVideoHomeEligible,
        g = a.permalinkUrl,
        h = a.routeTracePolicy,
        i = a.subOrigin;
      a = a.video;
      t();
      var p = c('useCometRouterState')();
      p = p == null ? void 0 : p.main.route.tabKey;
      var q = d('CometWarningScreenContext').useHasOverlay(),
        r = d('VideoPlayerInstreamAdsStateHooks').useInstreamAdsIsStart(),
        s = d('VideoPlayerHooks').useIsVideoBroadcast(),
        u = k(c('CometSetWatchAndScrollVideoContext')),
        v = a.is_soundbites_video === !0;
      r = f || r || v;
      v = e ? 'gaming' : 'watch';
      s = f && !q && p === 'watch' && !((s = s) != null ? s : !1);
      p = p !== v && f && !q;
      var w = !e && (p || s);
      v = d(
        'VideoPlayerWithWatchAndScrollChainingWrapper.react',
      ).useWatchAndScrollChainingComponentRenderedStatus(f).isVisible;
      q = k(c('CometPictureInPictureExpContext'));
      var x = q.pictureInPictureExpConfig.isInPictureInPictureExp;
      p = q.pictureInPictureExpConfig.isSkipAndChainingDisabled;
      s = x && !p;
      q = !v;
      var y = function (a) {
          n.onReady(function (b) {
            b.log({
              click_point: a,
              click_target: 'watch_and_scroll',
              event: 'click',
            });
          });
        },
        z = a.url;
      p = m(
        function () {
          return { subOrigin: i, videoTahoeUrl: z };
        },
        [i, z],
      );
      v = c('gkx')('2790')
        ? d('VideoPlayerDefaultControlsProperties').MutedButtonVisibility
            .SAME_AS_OTHER_CONTROLS
        : d('VideoPlayerDefaultControlsProperties').MutedButtonVisibility
            .SEPARATE_FROM_OTHER_CONTROLS;
      var A = d('VideoPlayerHooks').useController(),
        B = k(
          d('CometVideoPictureInPictureManagerContext')
            .CometVideoPictureInPictureManagerAPIContext,
        ),
        C = c('useVideoPlayerPortalingPassthroughProps')(),
        D = C.portableVideoID;
      l(
        function () {
          x && (B.setController(A), B.setPipPortableVideoID(D));
        },
        [B, A, D, x],
      );
      return j.jsxs(c('VideoPlayerSurface.react'), {
        children: [
          j.jsx(c('CometTahoeChainingDepthLogging.react'), {}),
          r &&
            j.jsx(c('CometWatchAndScrollTopBar.react'), {
              isGamingVideo: e,
              routeTracePolicy: h,
              subOrigin: i,
              video: a,
              videoUrl: w ? g : z,
            }),
          j.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: j.jsx(c('VideoPlayerWithAudioBackground.react'), {
              playerFormat: 'inline',
              video: a,
            }),
          }),
          q &&
            j.jsx(c('VideoPlayerDefaultControls.react'), {
              mutedButtonVisibility: v,
              pictureInPictureControl: j.jsx(
                d('VideoPlayerPictureInPictureControl.react')
                  .VideoPlayerPictureInPictureControl,
                { routeTracePolicy: h, subOrigin: i },
              ),
              renderExpandControl: function (a) {
                a = a.onUserInteraction;
                return w
                  ? j.jsx(c('VideoPlayerCometWatchInjectionControl.react'), {
                      onPress: function () {
                        u(null), y('control_open_in_watch');
                      },
                      routeTracePolicy: h,
                      subOrigin: i,
                      videoWatchUrl: g,
                    })
                  : j.jsx(
                      c('VideoPlayerNavigateToTahoeOrFullScreenControl.react'),
                      {
                        onPressFullscreenControl: function () {
                          return y('control_fullscreen');
                        },
                        onPressTahoeControl: function () {
                          y('control_expand_to_tahoe'), u(null);
                        },
                        onUserInteraction: a,
                        subOrigin: 'watch_scroll',
                        videoTahoeUrl: z,
                      },
                    );
              },
              shouldRenderCaptionsControl: !1,
              skipControl: s
                ? j.jsx(c('CometPlaceholder.react'), {
                    fallback: j.jsx(c('VideoPlayerSkipControlBase.react'), {
                      disabled: !0,
                    }),
                    children: b
                      ? j.jsx(o, { subOrigin: i, video: b })
                      : j.jsx(c('VideoPlayerSkipControlBase.react'), {
                          disabled: !0,
                        }),
                  })
                : null,
              subOrigin: 'watch_scroll',
            }),
          !r && j.jsx(c('CometWatchAndScrollCloseButton.react'), { video: a }),
          j.jsx(c('VideoPlayerWithLiveVideoEndscreen.react'), { video: a }),
          j.jsx(c('VideoPlayerWithLiveVideoIndicator.react'), {
            hasCometNavOverlay: !1,
            video: a,
          }),
          j.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: j.jsx(c('VideoPlayerWithAudioOverlay.react'), {
              playerFormat: 'watch_scroll',
              video: a,
            }),
          }),
          j.jsx(
            d('VideoPlayerWithWatchAndScrollChainingWrapper.react')
              .VideoPlayerWithWatchAndScrollChainingWrapper,
            {
              isVideoHomeEligible: f,
              routeTracePolicy: h,
              subOrigin: i,
              video: a,
            },
          ),
          j.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: j.jsx(
              c('VideoPlayerWithWatchAndScrollWarningScreen.react'),
              { video: a },
            ),
          }),
          j.jsx(
            d('CometUFIVideoPlayerUtils')
              .CometUFIVideoPlayerStateAndControllerExtractor,
            { data: p },
          ),
          j.jsx(c('VideoPlayerWithWatchAndScrollSoundContext.react'), {}),
        ],
      });
    }
    u.displayName = u.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonParentQPLLogProcessor',
  ['QPLUserFlow', 'qpl', 'regeneratorRuntime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a.signalingID;
      }
      var d = a.prototype;
      d.processEvent = function (a) {
        return b('regeneratorRuntime').async(
          function (b) {
            while (1)
              switch ((b.prev = b.next)) {
                case 0:
                  b.t0 = a.name;
                  b.next =
                    b.t0 === 'inviteReceived'
                      ? 3
                      : b.t0 === 'callEnded'
                      ? 5
                      : b.t0 === 'callAccepted'
                      ? 9
                      : b.t0 === 'dismissRecv'
                      ? 11
                      : b.t0 === 'inviteResponded'
                      ? 13
                      : b.t0 === 'popupOpened'
                      ? 15
                      : 17;
                  break;
                case 3:
                  c('QPLUserFlow').start(c('qpl')._(64225282, '3408'), {
                    instanceKey: +this.$1,
                  });
                  return b.abrupt('break', 17);
                case 5:
                  if (!a.isRemoteEnded) {
                    b.next = 7;
                    break;
                  }
                  return b.abrupt('return');
                case 7:
                  c('QPLUserFlow').endCancel(c('qpl')._(64225282, '3408'), {
                    instanceKey: +this.$1,
                  });
                  return b.abrupt('break', 17);
                case 9:
                  c('QPLUserFlow').addPoint(
                    c('qpl')._(64225282, '3408'),
                    'call_accepted',
                    { instanceKey: +this.$1 },
                  );
                  return b.abrupt('break', 17);
                case 11:
                  c('QPLUserFlow').addPoint(
                    c('qpl')._(64225282, '3408'),
                    'dismiss_recv',
                    { instanceKey: +this.$1 },
                  );
                  return b.abrupt('break', 17);
                case 13:
                  c('QPLUserFlow').addPoint(
                    c('qpl')._(64225282, '3408'),
                    'invite_responded',
                    { instanceKey: +this.$1 },
                  );
                  return b.abrupt('break', 17);
                case 15:
                  c('QPLUserFlow').endSuccess(c('qpl')._(64225282, '3408'), {
                    instanceKey: +this.$1,
                  });
                  return b.abrupt('break', 17);
                case 17:
                case 'end':
                  return b.stop();
              }
          },
          null,
          this,
        );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonCollisionContext',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = null;
      a.groupThreadID != null
        ? (c = { id: a.groupThreadID, type: 2 })
        : a.peerID != null &&
          (c = {
            id: a.peerID,
            secureOneToOneThreadPeerId: b ? a.peerID : void 0,
            type: b ? 15 : 1,
          });
      return c;
    }
    f.getThreadIDAndTypeFromCollisionContext = a;
  },
  66,
);
__d(
  'LazyLoadInstance',
  ['promiseDone'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = { LOADING: 1, NOT_READY: 0, READY: 2 };
    a = (function () {
      function a(a, b) {
        this.$1 = { instantiate: b, moduleReference: a, stage: h.NOT_READY };
      }
      var b = a.prototype;
      b.get = function (a) {
        switch (this.$1.stage) {
          case h.NOT_READY:
            c('promiseDone')(this.$2(this.$1), a);
            break;
          case h.LOADING:
            c('promiseDone')(this.$1.instancePromise, a);
            break;
          case h.READY:
            a(this.$1.instance);
            break;
        }
      };
      b.getNow = function () {
        return this.$1.stage === h.READY ? this.$1.instance : null;
      };
      b.preload = function () {
        this.$1.stage === h.NOT_READY && this.$2(this.$1);
      };
      b.$2 = function (a) {
        var b = this,
          c = a.instantiate;
        a = a.moduleReference;
        a = a.load().then(function (a) {
          a = c(a);
          b.$1 = { instance: a, stage: h.READY };
          return a;
        });
        this.$1 = { instancePromise: a, stage: h.LOADING };
        return a;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonParentSignalingClient',
  [
    'Promise',
    'ZenonDebugLogger',
    'ZenonSignalingTypes',
    'qpl',
    'recoverableViolation',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d, e) {
        var f = this;
        this.remoteSignalingID = null;
        this.$4 = 'init';
        this.$6 = null;
        this.$7 = null;
        this.$8 = function () {};
        this.$9 = function (a, b, d) {
          c('ZenonDebugLogger')
            .getInstance()
            .logStateMachine(
              'ParentSignalingClient',
              f.$4,
              'received ' + a.eventName,
              f.$1.getSignalingID(),
            );
          switch (a.eventName) {
            case 'inviteRequest':
              f.$11(a, b, d);
              break;
            case 'remoteSdpRequest':
              f.$12(a, b);
              break;
            case 'terminateRequest':
              f.$13(a, b, d);
              break;
          }
        };
        this.$1 = a;
        this.$3 = d;
        this.$5 = e;
        this.$2 = b;
        b.setReceiver(this.$9);
        c('ZenonDebugLogger')
          .getInstance()
          .startQPL(c('qpl')._(64234815, '1094'), +a.getSignalingID());
      }
      var e = a.prototype;
      e.setSignalingEventHandlers = function (a) {
        if (this.$6 != null) {
          c('recoverableViolation')(
            'setSignalingEventHandlers should only be called once, to avoid accidentally losing handlers.',
            'rtc_www',
          );
          return;
        }
        this.$6 = a;
      };
      e.setLoggingEventHandler = function (a) {
        this.$8 = a;
      };
      e.setSecureDataMessageManager = function (a) {
        throw c('unrecoverableViolation')(
          'setSecureDataMessageManager called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.getSignalingModel = function () {
        return this.$1;
      };
      e.processReceiveEvent = function (a, b, d) {
        throw c('unrecoverableViolation')(
          'processReceiveEvent called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendDismiss = function (a) {
        this.$4 = 'terminated';
        a = {
          eventName: 'terminateRequest',
          fromJoinResponse: !1,
          reason: a,
          shouldInformPeer: !0,
        };
        return this.$10(a);
      };
      e.receiveMessage = function (a) {
        this.$2.receiveMessage(a);
      };
      e.isTerminated = function () {
        return this.$4 === 'terminated';
      };
      e.sendAnswerIntent = function () {
        if (this.$4 === 'inviteAcknowledged') {
          this.$4 = 'answered';
          var a = { eventName: 'answerIntentRequest' };
          return this.$10(a);
        } else
          throw c('unrecoverableViolation')(
            'sendAnswerIntent called in unexpected state ' + this.$4,
            'rtc_www',
          );
      };
      e.respondToInvite = function (a) {
        if (this.$4 === 'inviteReceived') {
          if (this.$7 == null)
            throw c('unrecoverableViolation')(
              'respondToInvite called without inviteMessageId being populated first',
              'rtc_www',
            );
          this.$4 = 'inviteAcknowledged';
          a = { ackMessageId: this.$7, eventName: 'inviteResponse', status: a };
          return this.$10(a);
        } else
          throw c('unrecoverableViolation')(
            'respondToInvite called in unexpected state ' + this.$4,
            'rtc_www',
          );
      };
      e.initiateClientRenegotiation = function (a) {
        throw c('unrecoverableViolation')(
          'initiateClientRenegotiation called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendClientEvent = function (a) {
        throw c('unrecoverableViolation')(
          'sendClientEvent called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendInvite = function (a, b, d) {
        throw c('unrecoverableViolation')(
          'sendInvite called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendSdp = function (a, b) {
        throw c('unrecoverableViolation')(
          'sendSdp called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendIceCandidate = function (a) {
        throw c('unrecoverableViolation')(
          'sendIceCandidate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendMediaUpdate = function (a) {
        throw c('unrecoverableViolation')(
          'sendMediaUpdate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendAddParticipantsMessage = function (a) {
        throw c('unrecoverableViolation')(
          'sendAddParticipantsMessage called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendRemoveParticipantsRequest = function (a) {
        throw c('unrecoverableViolation')(
          'sendRemoveParticipantsRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendUsersApprovalRequest = function (a, b) {
        throw c('unrecoverableViolation')(
          'sendUsersApprovalRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendStateSyncUnsubscribe = function (a) {
        throw c('unrecoverableViolation')(
          'sendStateSyncUnsubscribe called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendStateSyncUpdate = function (a, b) {
        throw c('unrecoverableViolation')(
          'sendStateSyncUpdate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendSubscriptionRequest = function (a) {
        throw c('unrecoverableViolation')(
          'sendSubscriptionRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendClientInfo = function (a) {
        throw c('unrecoverableViolation')(
          'sendClientInfo called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.sendGenericDataMessage = function (a, b, d) {
        throw c('unrecoverableViolation')(
          'sendGenericDataMessage called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.silentlyTerminate = function () {
        throw c('unrecoverableViolation')(
          'terminate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?',
          'rtc_www',
        );
      };
      e.$10 = function (a) {
        var d = this;
        c('ZenonDebugLogger')
          .getInstance()
          .logStateMachine(
            'ParentSignalingClient',
            this.$4,
            'sending ' + a.eventName,
            this.$1.getSignalingID(),
          );
        return new (b('Promise'))(function (b, c) {
          return d.$3.sendEvent(a, b, c);
        });
      };
      e.$11 = function (a, b, c) {
        this.$4 === 'init' &&
          ((this.$4 = 'inviteReceived'), (this.$7 = b), this.$5(a, c, this));
      };
      e.$13 = function (a, b, c) {
        if (this.$4 !== 'terminated') {
          this.$4 = 'terminated';
          c = { ackMessageId: b, eventName: 'dismissResponse' };
          this.$3.sendEvent(c);
          if (this.$6 && this.$6.onDismissReceived) {
            this.$6.onDismissReceived(
              this.$1.getSignalingID(),
              a.reason,
              (b = a.subreason) != null ? b : null,
              a.detailedReasonFromMW,
            );
          }
        }
      };
      e.$12 = function (a, b) {
        b = {
          ackMessageId: b,
          acknowledgedVersion: a.sdp.version,
          eventName: 'remoteSdpResponse',
          negotiateType: a.negotiateType,
          statusCode: d('ZenonSignalingTypes').ZenonSignalingStatusCode.OK,
          type: a.sdp.type,
        };
        this.$3.sendEvent(b);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'ZenonParentCallsManager',
  [
    'BaseEventEmitter',
    'FBLogger',
    'JSResource',
    'LazyLoadInstance',
    'OverlayConfigManagerWithServerLayer',
    'Promise',
    'ZenonActorHooks',
    'ZenonBrowsers',
    'ZenonCallLogger',
    'ZenonCallsModelTypes',
    'ZenonCollisionContext',
    'ZenonDismissReason',
    'ZenonGraphQLMWMessageSender',
    'ZenonMessageSenderChain',
    'ZenonMqttMWMessageSender',
    'ZenonParentQPLLogProcessor',
    'ZenonParentSignalingClient',
    'ZenonSDKRateLimiter',
    'cr:4942',
    'gkx',
    'recoverableViolation',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(e) {
        var f;
        f = a.call(this) || this;
        f.$ZenonParentCallsManager4 = new Map();
        f.$ZenonParentCallsManager5 = new Set();
        f.$ZenonParentCallsManager6 = null;
        f.onInviteReceived = function (a, b, e) {
          var g,
            h = e.getSignalingModel().getSignalingID();
          e.setSignalingEventHandlers({
            onDismissReceived: f.onDismissReceived,
          });
          var i = a.appMessages,
            j = a.inviterID,
            k = a.isE2eeMandated,
            l = a.otherParticipants,
            m = a.requestingVideo,
            n = a.roomInfo,
            o = a.serverInfoData,
            p = m && d('ZenonBrowsers').supportsVideoCalls(),
            q = 'multiway_incoming',
            r = f.$ZenonParentCallsManager9({
              callTrigger: q,
              isCaller: !1,
              isVideo: p,
              localCallID: c('uuid')(),
              peerID: j,
              protocol: b,
              signalingID: h,
            });
          r == null
            ? void 0
            : r.log({ name: 'inviteReceived', serverInfoData: o });
          m = f.$ZenonParentCallsManager3.isSupportedClientForProtocol(b);
          o = m ? 'OK' : 'NOT_SUPPORTED';
          e.respondToInvite(o);
          r == null ? void 0 : r.log({ name: 'inviteResponded' });
          o = { thread: { id: '0', type: 2 }, type: 'thread' };
          if (
            ((g = n.context) == null ? void 0 : g.groupThreadID) ||
            ((g = n.context) == null ? void 0 : g.peerID)
          ) {
            o = {
              thread:
                (g = d(
                  'ZenonCollisionContext',
                ).getThreadIDAndTypeFromCollisionContext(
                  n.context,
                  (g = k) != null ? g : !1,
                )) != null
                  ? g
                  : o.thread,
              type: 'thread',
            };
          } else
            ((g = n.room) == null ? void 0 : g.linkHash) != null &&
              ((g = n.room) == null ? void 0 : g.roomName) != null &&
              (o = { room: n.room, type: 'room' });
          g =
            (g = a.actorID) != null
              ? g
              : d('ZenonActorHooks').ZenonActor.getID();
          o = {
            actorID: a.actorID,
            context: o,
            controllerParams: {
              appMessages: i,
              callContext: n.name,
              callID: h,
              configuration: b,
              serverInfoData:
                (i = (o = n.context) == null ? void 0 : o.serverInfoData) !=
                null
                  ? i
                  : null,
            },
            inviterID: j,
            isClientPermissableRing: m,
            isE2eeMandated: (n = k) != null ? n : !1,
            onAccept: function (a, c) {
              c = c.isPopupBlocked;
              r == null ? void 0 : r.log({ name: 'callAccepted', trigger: q });
              e.sendAnswerIntent();
              f.$ZenonParentCallsManager10(a, {
                callTrigger: q,
                isPopupBlocked: c,
                isVideo: p,
                peerID: j,
                protocol: b,
                signalingID: h,
              });
            },
            onDecline: function (a, b) {
              b === void 0 && (b = null), f.onDecline(h, r, a, b);
            },
            otherParticipants: l.includes(g) ? l : [g].concat(l),
            receiverUserId: a.userID,
            requestingVideo: p,
            ringID: h,
          };
          f.emit('incomingRing', o);
        };
        f.onDismissReceived = function (a, c) {
          var e = d('ZenonDismissReason').dismissReasonToCancelReason(c);
          e = { reason: e, ringID: a };
          f.emit('ringCancel', e);
          e = f.$ZenonParentCallsManager4.get(a);
          e != null &&
            (e.log({ name: 'dismissRecv' }),
            e.log({ endCallReason: c, isRemoteEnded: !0, name: 'callEnded' }));
          return b('Promise').resolve();
        };
        f.$ZenonParentCallsManager7 = new (c(
          'OverlayConfigManagerWithServerLayer',
        ))();
        f.$ZenonParentCallsManager3 = e;
        f.$ZenonParentCallsManager2 = new (c('LazyLoadInstance'))(
          c('JSResource')('ZenonSignalingParentTransport').__setRef(
            'ZenonParentCallsManager',
          ),
          function (a) {
            return new a();
          },
        );
        var g = new (c('ZenonMessageSenderChain'))([
          new (c('ZenonMqttMWMessageSender'))(),
          new (c('ZenonGraphQLMWMessageSender'))(),
        ]);
        f.$ZenonParentCallsManager1 = new (c('LazyLoadInstance'))(
          c('JSResource')('ZenonSignalingClientManager').__setRef(
            'ZenonParentCallsManager',
          ),
          function (a) {
            return new a(
              c('ZenonParentSignalingClient'),
              f.onInviteReceived,
              g,
            );
          },
        );
        f.$ZenonParentCallsManager6 = new (c('ZenonSDKRateLimiter'))();
        return f;
      }
      var f = e.prototype;
      f.startOutgoingCallIntent = function (a, b) {
        if (!this.$ZenonParentCallsManager8('startOutgoingCallIntent')) return;
        var d = b.callTrigger,
          e = b.isVideo,
          f = b.peerID,
          g = b.protocol,
          h = b.signalingID;
        this.$ZenonParentCallsManager9({
          callTrigger: d,
          isCaller: !0,
          isVideo: e,
          localCallID: c('uuid')(),
          peerID: f,
          protocol: g,
          signalingID: h,
        });
        this.$ZenonParentCallsManager10(a, b);
      };
      f.$ZenonParentCallsManager9 = function (a) {
        var b,
          d = a.callTrigger,
          e = a.isCaller,
          f = a.isVideo,
          g = a.localCallID,
          h = a.peerID,
          i = a.protocol;
        a = a.signalingID;
        b = (b = this.$ZenonParentCallsManager4.get(a)) != null ? b : null;
        !b && !(d === 'meetup_join' && c('gkx')('3198'))
          ? ((b = new (c('ZenonCallLogger'))(
              {
                callTrigger: d,
                isCaller: e,
                isVideo: f,
                localCallID: g,
                peerID: h,
                protocol: i,
                signalingID: a,
              },
              this.getLogProcessors(),
              this.$ZenonParentCallsManager7,
            )),
            this.$ZenonParentCallsManager4.set(a, b))
          : c('recoverableViolation')(
              'Call logger key collision in parentCallsManager for signalingID: ' +
                a,
              'rtc_www',
            );
        return b;
      };
      f.getLogProcessors = function () {
        var a = [b('cr:4942')];
        c('ZenonParentQPLLogProcessor') &&
          a.push(c('ZenonParentQPLLogProcessor'));
        return a;
      };
      f.$ZenonParentCallsManager10 = function (a, b) {
        var c = b.isPopupBlocked;
        b = b.signalingID;
        this.$ZenonParentCallsManager2.get(function (b) {
          b.verificationNonce = a;
        });
        this.$ZenonParentCallsManager5.add(b);
        b = this.$ZenonParentCallsManager4.get(b);
        b != null && b.log({ isPopupBlocked: c, name: 'popupOpened' });
      };
      f.initListeners = function (a) {
        var b = this;
        for (
          var a = a,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e.subscribe(
            function (a) {
              return b.onMessageReceived(a);
            },
            function (a) {
              return b.onRawMWMessageReceived(a);
            },
          );
        }
      };
      f.onMessageReceived = function (a) {
        var b = a.getHeader().signalingID;
        if (b != null && this.$ZenonParentCallsManager5.has(b)) return;
        this.$ZenonParentCallsManager1.get(function (b) {
          b.receiveMessage(a);
        });
      };
      f.onRawMWMessageReceived = function (a) {
        this.$ZenonParentCallsManager2.get(function (b) {
          b.enqueueRawMWMessage(a);
        });
      };
      f.onDecline = function (a, b, e, f) {
        f === void 0 && (f = null),
          this.$ZenonParentCallsManager1.get(function (g) {
            g = g.getSignalingClient(a);
            if (g) {
              var h = d('ZenonDismissReason').endCallToDismissReason(e);
              e !== 'VersionUnsupported' &&
                f !==
                  d('ZenonCallsModelTypes').ZenonEndCallSubreason
                    .CallsBlocked &&
                g.sendDismiss(h);
              b == null
                ? void 0
                : b.log({
                    endCallReason: h,
                    endCallSubreason: f == null ? null : f,
                    isRemoteEnded: !1,
                    name: 'callEnded',
                  });
            } else c('recoverableViolation')('signaling client should be defined', 'rtc_www');
          });
      };
      f.removeListeners = function (a) {
        for (
          var a = a,
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          d.unsubscribe();
        }
      };
      f.$ZenonParentCallsManager8 = function (a) {
        if (
          this.$ZenonParentCallsManager6 &&
          !this.$ZenonParentCallsManager6.take(a)
        ) {
          c('FBLogger')('rtc_www').warn(
            '[ZP] Dropping ' +
              a +
              ' invocation. This SDK method is being called too rapidly.',
          );
          return !1;
        }
        return !0;
      };
      return e;
    })(c('BaseEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'nodeIsInConnection',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c) {
      a = a.getLinkedRecords('edges');
      if (a == null) {
        c && c('Connection contains no edges field.');
        return !1;
      }
      var d = !1;
      b = b.getDataID();
      if (b == null) {
        c && c('Search node has no ID.');
        return !1;
      }
      for (
        var e = a,
          f = Array.isArray(e),
          g = 0,
          e = f
            ? e
            : e[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= e.length) break;
          h = e[g++];
        } else {
          g = e.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        var i = h && h.getLinkedRecord('node');
        if (i == null) {
          c && c('Edge at index ' + a.indexOf(h) + ' has no node.');
          continue;
        }
        if (i.getDataID() === b) {
          d = !0;
          break;
        }
      }
      return d;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'WebPerfDeviceInfoLogFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1871697');
    c = b('FalcoLoggerInternal').create('web_perf_device_info_log', a);
    e.exports = c;
  },
  null,
);
__d(
  'XDeviceClassRealtimeController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/web_perf/get_perf_level/', {});
  },
  null,
);
__d(
  'WebDevicePerfInfoLogging',
  [
    'AsyncTypedRequest',
    'JSScheduler',
    'Promise',
    'WebDevicePerfInfoData',
    'WebPerfDeviceInfoLogFalcoEvent',
    'XDeviceClassRealtimeController',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      var b = document.createElement('canvas');
      b = b.getContext('webgl') || b.getContext('experimental-webgl');
      if (!b) return;
      var c = b.getExtension('WEBGL_debug_renderer_info');
      if (!c) return;
      var d = b.getParameter(c.UNMASKED_RENDERER_WEBGL);
      b = b.getParameter(c.UNMASKED_VENDOR_WEBGL);
      a.gpu_vendor = b;
      a.gpu_renderer = d;
    }
    function i() {
      var a = window.navigator,
        b = {};
      a &&
        a.hardwareConcurrency !== void 0 &&
        (b.cpu_cores = a.hardwareConcurrency);
      a && a.deviceMemory !== void 0 && (b.ram = a.deviceMemory);
      c('WebDevicePerfInfoData').needsFullUpdate && h(b);
      return b;
    }
    function j() {
      var a = i();
      c('WebPerfDeviceInfoLogFalcoEvent').log(function () {
        var b;
        return {
          cpu_cores: (b = a.cpu_cores) != null ? b : null,
          ram: (b = a.ram) != null ? b : null,
          gpu_renderer: (b = a.gpu_renderer) != null ? b : null,
          gpu_vendor: (b = a.gpu_vendor) != null ? b : null,
        };
      });
    }
    function k() {
      var a, d;
      return b('regeneratorRuntime').async(
        function (e) {
          while (1)
            switch ((e.prev = e.next)) {
              case 0:
                a = i();
                e.next = 3;
                return b('regeneratorRuntime').awrap(
                  new (c('AsyncTypedRequest'))(
                    c('XDeviceClassRealtimeController')
                      .getURIBuilder()
                      .getURI(),
                  )
                    .setData(a)
                    .promisePayload(),
                );
              case 3:
                d = e.sent;
                return e.abrupt('return', d.devicePerfClassLevel);
              case 5:
              case 'end':
                return e.stop();
            }
        },
        null,
        this,
      );
    }
    function a() {
      (c('WebDevicePerfInfoData').needsFullUpdate ||
        c('WebDevicePerfInfoData').needsPartialUpdate) &&
        d('JSScheduler').scheduleSpeculativeCallback(j);
    }
    function e() {
      return new (b('Promise'))(function (a, b) {
        c('WebDevicePerfInfoData').needsFullUpdate ||
        c('WebDevicePerfInfoData').needsPartialUpdate
          ? d('JSScheduler').scheduleSpeculativeCallback(function () {
              k().then(a)['catch'](b);
            })
          : a();
      });
    }
    g.doLog = a;
    g.doLogPromise = e;
  },
  98,
);
__d(
  'AcfToastImpressionFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1873550');
    c = b('FalcoLoggerInternal').create('acf_toast_impression', a);
    e.exports = c;
  },
  null,
);
__d(
  'ClientConsistencyFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1764786');
    c = b('FalcoLoggerInternal').create('client_consistency', a);
    e.exports = c;
  },
  null,
);
__d(
  'MessengerWebTimeSpentFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('3849');
    c = b('FalcoLoggerInternal').create('messenger_web_time_spent', a);
    e.exports = c;
  },
  null,
);
__d(
  'FalcoLoggerTransports',
  [
    'AnalyticsCoreData',
    'Banzai',
    'JSResource',
    'ODS',
    'PersistedQueue',
    'Queue',
    'WebSession',
    'performanceAbsoluteNow',
    'promiseDone',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 5 * 1024,
      i =
        (b = c('AnalyticsCoreData').max_delay_br_queue) != null ? b : 60 * 1e3,
      j =
        (e = c('AnalyticsCoreData').max_delay_br_queue_immediate) != null
          ? e
          : 1e3,
      k = 'falco:',
      l = new (c('Queue'))(),
      m = 5e3,
      n = 6e4,
      o = c('uuid')(),
      p = 'ods_web_batch',
      q = new Map(),
      r = new Set(),
      s = [],
      t = 0,
      u,
      v = !1,
      w = !1,
      x = !1,
      y = !0,
      z = !1,
      A = Date.now() - n,
      B = 1;
    ((f = c('AnalyticsCoreData').fix_br_init_rc) != null ? f : !1) && R();
    for (
      e =
        (b = c('AnalyticsCoreData').stateful_events_list_for_br) != null
          ? b
          : [],
        f = Array.isArray(e),
        b = 0,
        e = f
          ? e
          : e[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
      ;

    ) {
      var C;
      if (f) {
        if (b >= e.length) break;
        C = e[b++];
      } else {
        b = e.next();
        if (b.done) break;
        C = b.value;
      }
      C = C;
      r.add(C);
    }
    function D(a, b) {
      K(b.item.name, 'js.br.add_to_batch', 1, !0);
      var c = b.item.extra.length;
      t + c > h && (clearTimeout(u), E());
      s.push([a, b]);
      t += c;
    }
    function E() {
      u = null;
      v = !1;
      var a = s;
      I(
        'js.br.send_batch',
        a.map(function (a) {
          return a[1].item;
        }),
      );
      if (!z) {
        J('js.br.init_not_complete.log', a.length);
        var b = function () {
          var b = a[d],
            e = b[0],
            f = b[1];
          K(f.item.name, 'js.br.banzai_fallback_for_init_not_complete', 1, !0);
          if ((b = f.item.logImmediate) != null ? b : !1) {
            (
              (b =
                c(
                  'AnalyticsCoreData',
                ).use_critical_for_fallback_from_immediate) != null
                ? b
                : !1
            )
              ? L.logCritical([f.item], function (a) {
                  return e.markItem(f, a);
                })
              : L.logImmediately([f.item], function (a) {
                  return e.markItem(f, a);
                });
          } else
            L.log([f.item], function (a) {
              return e.markItem(f, a);
            });
        };
        for (var d = 0; d < a.length; d++) b();
      } else
        l.enqueue(function (b) {
          return b.log(
            a.map(function (a) {
              return a[1].item;
            }),
            function (b) {
              if (!b) {
                J('js.br.banzai_fallback', a.length);
                var d = function () {
                  var d = a[e],
                    b = d[0],
                    f = d[1];
                  K(f.item.name, 'js.br.banzai_fallback_for_failure', 1, !0);
                  if ((d = f.item.logImmediate) != null ? d : !1) {
                    (
                      (d =
                        c(
                          'AnalyticsCoreData',
                        ).use_critical_for_fallback_from_immediate) != null
                        ? d
                        : !1
                    )
                      ? L.logCritical([f.item], function (a) {
                          return b.markItem(f, a);
                        })
                      : L.logImmediately([f.item], function (a) {
                          return b.markItem(f, a);
                        });
                  } else
                    L.log([f.item], function (a) {
                      return b.markItem(f, a);
                    });
                };
                for (var e = 0; e < a.length; e++) d();
                return;
              }
              for (d = 0; d < a.length; d++) {
                var f = a[d],
                  g = f[0];
                f = f[1];
                K(
                  f.item.name,
                  'js.br.success_callback.batch.send_batch',
                  1,
                  !0,
                );
                g.markItem(f, b);
              }
            },
          );
        });
      s = [];
      t = 0;
    }
    function F(a) {
      return {
        events: a.map(function (a) {
          return {
            name: a.name,
            extra: a.extra,
            rate: a.policy.r,
            time: a.time / 1e3,
            shouldAddState: a.shouldAddState,
          };
        }),
      };
    }
    function G(a) {
      var b;
      a = {
        deviceId: c('AnalyticsCoreData').device_id,
        sessionId: a,
        appId: c('AnalyticsCoreData').app_id,
        pushPhase: c('AnalyticsCoreData').push_phase,
      };
      ((b =
        (b = c('AnalyticsCoreData').stateful_events_list_for_br) == null
          ? void 0
          : b.length) != null
        ? b
        : 0) > 0 && (a.ambientState = c('AnalyticsCoreData').state_for_br);
      return Object.freeze(a);
    }
    function H(a, b) {
      for (var e = 0; e < a.length; e++) {
        var f,
          g = a[e];
        K(g.name, 'js.banzai.posting_event', 1, !1);
        f =
          ((f = {}),
          (f.e = g.extra),
          (f.r = g.policy.r),
          (f.d = c('AnalyticsCoreData').device_id),
          (f.s = d('WebSession').getId()),
          (f.t = g.time),
          f);
        g.privacyContext && (f.p = g.privacyContext);
        var h = g.identity;
        h && (f.id = h);
        c('Banzai').post(k + g.name, f, b);
      }
      I('planes.banzai.write_to_transport', a);
    }
    function I(a, b) {
      var c = 0;
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e.name !== p && (c += 1);
      }
      c > 0 && J(a, c);
    }
    function J(a, b) {
      var e,
        f = 'falco.fabric.www.' + c('AnalyticsCoreData').push_phase;
      ((e = c('AnalyticsCoreData').queue_activation_experiment) != null
        ? e
        : !1) && (f += '.queue_activation_experiment');
      d('ODS').bumpEntityKey(1344, f, a, b);
    }
    function K(a, b, c, e) {
      if (a === p) return !1;
      d('ODS').bumpEntityKey(1344, 'falco.event.' + a, b, c);
      e && J(b, c);
      return !0;
    }
    var L = {
      log: function (a, b) {
        I('js.banzai.post.log', a), H(a, c('Banzai').BASIC), b(!0);
      },
      logImmediately: function (a, b) {
        I('js.banzai.post.log_immediately', a), H(a, c('Banzai').VITAL), b(!0);
      },
      logCritical: function (a, b) {
        I('js.banzai.post.log_critical', a),
          H(a, { signal: !0, retry: !0 }),
          b(!0);
      },
    };
    function M(a) {
      R();
      var b = N(a, 'banzai_data_loss', 'log'),
        d = N(a, 'banzai_data_loss', 'logImmediately'),
        e = N(a, 'banzai_data_loss', 'logCritical'),
        f = N(a, 'bladerunner_data_loss', '');
      J('js.br_data_loss.posted.' + a, 1);
      if (z && y)
        try {
          l.enqueue(function (b) {
            return b.log([f], function (b) {
              if (!b) {
                J('js.br.transport_failure.' + a, 1);
                L.logCritical([f], function (b) {
                  J('js.br.failure_fallback_success_callback.' + a, 1);
                });
                return;
              }
              J('js.br.success_callback.' + a, 1);
            });
          });
        } catch (b) {
          J('js.br.error_enqueueing.' + a, 1),
            L.logCritical([f], function (b) {
              J('js.br.enqueuing_fallback_success_callback.' + a, 1);
            });
        }
      else
        y || J('js.br.failed.' + a, 1),
          z || J('js.br.init_not_complete.' + a, 1),
          L.logCritical([f], function (b) {
            J('js.br.init_fallback_success_callback.' + a, 1);
          });
      H([b], c('Banzai').BASIC);
      H([d], c('Banzai').VITAL);
      H([e], { signal: !0, retry: !0 });
    }
    function N(a, b, d) {
      return {
        name: b,
        time: c('performanceAbsoluteNow')(),
        policy: { r: 1 },
        extra: JSON.stringify({
          event_index: a,
          falco_js_connection_id: o,
          logging_mode: d,
          logging_flow_flag: (
            (b = c('AnalyticsCoreData').fix_br_init_rc) != null ? b : !1
          )
            ? 'race_condition_fixed'
            : 'original_flow',
        }),
      };
    }
    function O() {
      A + m < Date.now() && (M(B), (A = Date.now()), B++);
    }
    function P() {
      window.setTimeout(function () {
        O(), B <= 40 && P();
      }, n);
    }
    function Q(a) {
      l.start(function (b) {
        return b({
          log: function (d, b) {
            I('planes.bladerunner.write_to_transport', d);
            var e = JSON.stringify(F(d));
            a
              ? c('AnalyticsCoreData').enable_ack
                ? c('promiseDone')(
                    a.amendWithAck(e),
                    function (a) {
                      I('planes.bladerunner.ack_received' + a.toString(), d),
                        b(a);
                    },
                    function () {
                      I('planes.bladerunner.ack_failure', d), b(!1);
                    },
                  )
                : (a.amendWithoutAck(e),
                  I('planes.bladerunner.write_without_ack', d))
              : (I('planes.bladerunner.request_stream_null', d), b(!1));
          },
          logImmediately: function (b, a) {
            this.log(b, a);
          },
          logCritical: function (b, a) {
            this.log(b, a);
          },
        });
      });
    }
    function R() {
      var a;
      if (w) return;
      z = !1;
      if (
        !c('AnalyticsCoreData').enable_bladerunner &&
        ((a = c('AnalyticsCoreData').fix_br_init_rc) != null ? a : !1)
      )
        return;
      c('JSResource').loadAll(
        [
          c('JSResource')('TransportSelectingClientSingleton').__setRef(
            'FalcoLoggerTransports',
          ),
          c('JSResource')(
            'RequestStreamCommonRequestStreamCommonTypes',
          ).__setRef('FalcoLoggerTransports'),
        ],
        function (a, b) {
          var e = b.FlowStatus,
            f;
          b = {
            onTermination: function (a) {
              a.message === 'Stream closed'
                ? (l.stop(!0), (w = !1))
                : ((y = !1),
                  l.start(function (a) {
                    return a(L);
                  }));
            },
            onFlowStatus: function (a) {
              a === e.Started &&
                !((a = c('AnalyticsCoreData').fix_br_init_rc) != null
                  ? a
                  : !1) &&
                Q(f);
            },
          };
          c('promiseDone')(
            a
              .requestStream(
                { method: 'Falco' },
                JSON.stringify(G(d('WebSession').getId())),
                b,
                { requestId: '' },
              )
              .then(function (a) {
                f = a;
                ((a = c('AnalyticsCoreData').fix_br_init_rc) != null
                  ? a
                  : !1) && Q(f);
                z = !0;
              })
              ['catch'](function (a) {
                l.stop(!0), (w = !1);
              }),
          );
        },
      );
      w = !0;
    }
    function S(a) {
      var b = a.policy,
        d = a.name;
      r.has(d) && (a.shouldAddState = !0);
      return (
        c('AnalyticsCoreData').enable_bladerunner &&
        y &&
        (b.s === 1 || r.has(d))
      );
    }
    function T(a) {
      if (a === '') return null;
      if (q.has(a)) return q.get(a);
      else {
        var b = { claim: '' },
          c = a.split('^#');
        if (c.length >= 4) {
          var d = c[0],
            e = c[1],
            f = c[2];
          c = c[3];
          f !== ''
            ? (b = { appScopedIdentity: f, claim: c })
            : d !== '' &&
              (b = { fbIdentity: { accountId: d, actorId: e }, claim: c });
          q.set(a, b);
        }
        return b;
      }
    }
    function a() {
      var a;
      if (x) return;
      x = !0;
      c('PersistedQueue').setHandler('falco_queue_log', function (a) {
        var b,
          c = T(a.getQueueNameSuffix());
        while ((b = a.dequeueItem()))
          (function (b) {
            S(b.item)
              ? (K(b.item.name, 'js.use_bladerunner.log', 1, !0),
                R(),
                u == null && (u = setTimeout(E, i)),
                D(a, b))
              : (K(b.item.name, 'js.use_banzai.log', 1, !0),
                c && (b.item.identity = c),
                L.log([b.item], function (c) {
                  return a.markItem(b, c);
                }));
          })(b);
      });
      c('PersistedQueue').setHandler('falco_queue_immediately', function (a) {
        var b,
          d = T(a.getQueueNameSuffix());
        while ((b = a.dequeueItem()))
          (function (b) {
            S(b.item)
              ? (K(b.item.name, 'js.use_bladerunner.log_immediately', 1, !0),
                R(),
                (u == null || !v) &&
                  (clearTimeout(u), (u = setTimeout(E, j)), (v = !0)),
                (b.item.logImmediate = !0),
                D(a, b),
                c('PersistedQueue').isPersistenceAllowed() ||
                  (K(
                    b.item.name,
                    'js.br.send_immediately_no_persistence',
                    1,
                    !0,
                  ),
                  E()))
              : (K(b.item.name, 'js.use_banzai.log_immediately', 1, !0),
                d && (b.item.identity = d),
                L.logImmediately([b.item], function (c) {
                  return a.markItem(b, c);
                }));
          })(b);
      });
      c('PersistedQueue').setHandler('falco_queue_critical', function (a) {
        var b,
          c = T(a.getQueueNameSuffix());
        while ((b = a.dequeueItem()))
          (function (b) {
            var d = b.item;
            S(d)
              ? (K(d.name, 'js.use_bladerunner.log_critical', 1, !0),
                R(),
                !z
                  ? (K(d.name, 'js.br.init_not_complete.logCritical', 1, !0),
                    c && (d.identity = c),
                    L.logCritical([d], function (c) {
                      return a.markItem(b, c);
                    }))
                  : l.enqueue(function (e) {
                      return e.logCritical([d], function (e) {
                        if (!e) {
                          J('js.br.banzai_fallback.critical', 1);
                          K(
                            b.item.name,
                            'js.br.banzai_fallback_for_failure.critical',
                            1,
                            !0,
                          );
                          c && (d.identity = c);
                          L.logCritical([d], function (c) {
                            return a.markItem(b, c);
                          });
                          return;
                        }
                        K(
                          b.item.name,
                          'js.br.success_callback.batch.critical',
                          1,
                          !0,
                        );
                        a.markItem(b, e);
                      });
                    }))
              : (c && (d.identity = c),
                K(d.name, 'js.use_banzai.log_critical', 1, !0),
                L.logCritical([d], function (c) {
                  return a.markItem(b, c);
                }));
          })(b);
      });
      ((a = c('AnalyticsCoreData').queue_activation_experiment) != null
        ? a
        : !1) &&
        (c('PersistedQueue').setOnQueueActivateExperiment(),
        c('PersistedQueue').eventEmitter.emit('active', null));
      c('AnalyticsCoreData').enable_dataloss_timer && (R(), O(), P());
    }
    g.attach = a;
  },
  98,
);
__d(
  'CometRelayEF',
  [
    'Bootloader',
    'BootloaderEvents',
    'ClientConsistencyEventEmitter',
    'CometSSREntrypoint',
    'cometAsyncFetch',
    'gkx',
    'performanceAbsoluteNow',
    'promiseDone',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Map();
    function i(a, b) {
      if (!c('gkx')('1334580')) return;
      a = d('CometSSREntrypoint').processRootEntryPoint(a, b);
      var e = [];
      a.forEach(function (a) {
        a = a.name;
        h.has(a) ||
          (e.push(a),
          d('BootloaderEvents').notifyHasteResponseEFStart('relay_3d', a));
      });
      if (e.length === 0) return;
      var f = c('performanceAbsoluteNow')(),
        g = c('cometAsyncFetch')('/ajax/relay-ef/', {
          data: { queries: e },
          method: 'POST',
        }).then(function (a) {
          return {
            fetchPredictionsEnd: c('performanceAbsoluteNow')(),
            fetchPredictionsStart: f,
            payload: a,
          };
        });
      e.forEach(function (a) {
        return h.set(a, g);
      });
    }
    function a(a, b) {
      if (!c('gkx')('1334580')) return;
      var e = c('performanceAbsoluteNow')();
      i(a, b);
      a = d('CometSSREntrypoint').processRootEntryPoint(a, b);
      a.forEach(function (a) {
        var b = a.name,
          f = h.get(b);
        f &&
          f !== !0 &&
          c('promiseDone')(f, function (a) {
            var f = a.fetchPredictionsEnd,
              g = a.fetchPredictionsStart;
            a = a.payload;
            a != null &&
              typeof a === 'object' &&
              (c('Bootloader').loadPredictedResourceMap(
                a.predictions[b],
                {
                  onLog: function (a) {
                    return d('BootloaderEvents').notifyHasteResponseEF(
                      'relay_3d',
                      b,
                      {
                        fetchPredictionsEnd: f,
                        fetchPredictionsStart: g,
                        fetchRsrcsStart: e,
                        tierOne: a,
                      },
                    );
                  },
                },
                a.consistency.rev,
              ),
              c('ClientConsistencyEventEmitter').emit(
                'newEntry',
                a.consistency,
              ));
          });
        h.set(a.name, !0);
      });
    }
    g.fetchPredictions = i;
    g.fetchPredictedResources = a;
  },
  98,
);
__d(
  'CometOnBeforeUnloadDialog.react',
  [
    'fbt',
    'CometCardedDialogLegacy.react',
    'CometTrackingNodeProvider.react',
    'TetraButtonGroup.react',
    'TetraText.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.body,
        d = a.cancel,
        e = a.confirm,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.onClose,
        j = a.onCloseButtonPress,
        k = a.primaryAction,
        l = a.secondaryAction;
      a = a.title;
      var m = function () {
          k(), g();
        },
        n = function () {
          l(), g();
        };
      return i.jsx(c('CometTrackingNodeProvider.react'), {
        trackingNode: 163,
        children: i.jsxs(c('CometCardedDialogLegacy.react'), {
          onClose: function () {
            j(), g();
          },
          testid: void 0,
          title: a,
          titleHorizontalAlignment: 'start',
          withCloseButton: !0,
          children: [
            i.jsx('div', {
              className: 'xz9dl7a x1pi30zi xsag5q8 x1swvt13 x1n2onr6',
              children: i.jsx(c('TetraText.react'), {
                type: 'body3',
                children: b,
              }),
            }),
            i.jsx('div', {
              className:
                'x78zum5 x1q0g3np x13a6bvl xexx8yu x4uap5 x1l90r2v xkhd6sd',
              children: i.jsx(c('TetraButtonGroup.react'), {
                direction: 'backward',
                paddingHorizontal: 16,
                primary: {
                  disabled: f,
                  label:
                    (a = e) != null ? a : h._('__JHASH__dV9Vz_8TRow__JHASH__'),
                  onPress: m,
                  testid: 'CometOnBeforeUnloadDialogConfirmButton',
                },
                secondary: {
                  disabled: f,
                  label:
                    (b = d) != null ? b : h._('__JHASH__vfZ0qXC5Zmr__JHASH__'),
                  onPress: n,
                  reduceEmphasis: !0,
                  testid: 'CometOnBeforeUnloadDialogCancelButton',
                },
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometRouteActorToaster.react',
  [
    'fbt',
    'Actor',
    'CometRelay',
    'CometRouteActorToasterBlocklist',
    'CometRouteActorToasterQuery.graphql',
    'TetraProfilePhoto.react',
    'TetraText.react',
    'WebPixelRatio',
    'cometPushToast',
    'getTopMostRoute',
    'promiseDone',
    'react',
    'requireDeferred',
    'useCometRouterState',
    'useCurrentRoute',
    'useProfileCometIsViewAs',
    'useRouteReferrer',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useEffect,
      l = e.useRef,
      m = c('requireDeferred')('AcfToastImpressionFalcoEvent').__setRef(
        'CometRouteActorToaster.react',
      );
    function n(a, b) {
      if (b)
        return j.jsx(c('TetraText.react'), {
          color: 'primary',
          type: 'body3',
          children: h._('__JHASH__dhtpcLgifst__JHASH__', [
            h._implicitParam(
              '=m2',
              j.jsx(c('TetraText.react'), {
                type: 'bodyLink3',
                children: h._('__JHASH__IxzOnYaj38q__JHASH__'),
              }),
            ),
          ]),
        });
      else
        return j.jsx(c('TetraText.react'), {
          color: 'primary',
          type: 'body3',
          children: h._('__JHASH__Kzzb7vg3fH___JHASH__', [
            h._param(
              'actor',
              j.jsx(c('TetraText.react'), { type: 'bodyLink3', children: a }),
            ),
          ]),
        });
    }
    var o = i !== void 0 ? i : (i = b('CometRouteActorToasterQuery.graphql'));
    function a() {
      var a = d('CometRelay').useRelayEnvironment(),
        b = d('Actor').useActor(),
        e = b[0];
      b = c('useCometRouterState')();
      var f = c('useCurrentRoute')(),
        g = c('useRouteReferrer')(),
        h = c('useProfileCometIsViewAs')(),
        i = l({
          actorID: g == null ? void 0 : g.actorID,
          tracePolicy: g == null ? void 0 : g.tracePolicy,
        });
      g = c('CometRouteActorToasterBlocklist').route_trace_policies;
      var p = f == null ? void 0 : f.tracePolicy;
      g = g.includes(p);
      b = b != null ? c('getTopMostRoute')(b) : null;
      f = f === b;
      var q = f && !g && !h;
      k(
        function () {
          var b,
            f = (b = i.current) == null ? void 0 : b.actorID,
            g = (b = i.current) == null ? void 0 : b.tracePolicy;
          if (f != null && f !== e && q) {
            b = function (a) {
              var b;
              b =
                a == null
                  ? void 0
                  : (b = a.viewer) == null
                  ? void 0
                  : (b = b.actor) == null
                  ? void 0
                  : b.name;
              if (b != null) {
                var e;
                e =
                  (a == null
                    ? void 0
                    : (e = a.viewer) == null
                    ? void 0
                    : (e = e.actor) == null
                    ? void 0
                    : e.__typename) === 'User';
                a =
                  a == null
                    ? void 0
                    : (a = a.viewer) == null
                    ? void 0
                    : (a = a.actor) == null
                    ? void 0
                    : (a = a.toast_icon) == null
                    ? void 0
                    : a.uri;
                a =
                  a != null
                    ? j.jsx(c('TetraProfilePhoto.react'), {
                        shape: 'circle',
                        size: 32,
                        source: { uri: a },
                      })
                    : null;
                b = n(b, e);
                d('cometPushToast').cometPushToast({ icon: a, message: b });
                m.onReady(function (a) {
                  a = a.log;
                  a(function () {
                    var a;
                    return {
                      destination: (a = p) != null ? a : 'comet.app',
                      destination_type: 'comet_route',
                      source: g,
                      source_type: 'comet_route',
                      source_userid: f,
                    };
                  });
                });
              }
            };
            var h = { scale: d('WebPixelRatio').get() };
            c('promiseDone')(
              d('CometRelay').fetchQuery(a, o, h).toPromise(),
              b,
            );
          }
          i.current = { actorID: e, tracePolicy: p };
        },
        [e, p, a, q],
      );
      return null;
    }
    g['default'] = a;
  },
  98,
);
