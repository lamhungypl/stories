/*FB_PKG_DELIM*/

__d(
  'CometNotificationsDropdownQuery.graphql',
  [
    'CometTextWithEntitiesRelay_textWithEntities$normalization.graphql',
    'CometNotificationsDropdownQuery_facebookRelayOperation',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'count' },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'environment' },
        d = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'menuUseEntryPoint',
        },
        e = { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        f = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        h = [
          {
            kind: 'Variable',
            name: 'environment_alias_override',
            variableName: 'environment',
          },
          { kind: 'Literal', name: 'filter_tokens', value: [] },
          { kind: 'Variable', name: 'first', variableName: 'count' },
          { kind: 'Literal', name: 'notif_cache_ids', value: [] },
          {
            kind: 'Literal',
            name: 'notif_query_flags',
            value: ['IS_COMET', 'INCLUDE_WA_P2B_NOTIFS'],
          },
          { kind: 'Literal', name: 'source', value: 'unknown' },
        ],
        i = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'text',
          storageKey: null,
        },
        j = [i],
        k = {
          alias: null,
          args: null,
          concreteType: 'TextWithEntities',
          kind: 'LinkedField',
          name: 'title',
          plural: !1,
          selections: j,
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'tracking',
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'prefetch_score',
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_id',
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_cache_id',
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'seen_state',
          storageKey: null,
        },
        q = {
          alias: 'creation_time',
          args: null,
          concreteType: 'CreationTimeWithRelativeText',
          kind: 'LinkedField',
          name: 'creation_time_with_relative_text',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'timestamp',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_type',
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e],
          kind: 'Fragment',
          metadata: null,
          name: 'CometNotificationsDropdownQuery',
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
                  args: [
                    { kind: 'Variable', name: 'count', variableName: 'count' },
                  ],
                  kind: 'FragmentSpread',
                  name: 'CometNotificationsListWrapper_viewer',
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
          name: 'CometNotificationsDropdownQuery',
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
                    f,
                    g,
                    { kind: 'TypeDiscriminator', abstractKey: '__isActor' },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: h,
                  concreteType: 'ViewerNotificationsPageConnection',
                  kind: 'LinkedField',
                  name: 'notifications_page',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'NotifPageFilterConfig',
                      kind: 'LinkedField',
                      name: 'filter_config',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'selected_filter_tokens',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: 'LinkedField',
                          name: 'filters',
                          plural: !0,
                          selections: [
                            f,
                            {
                              kind: 'InlineFragment',
                              selections: [
                                k,
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'notif_filter_token',
                                  storageKey: null,
                                },
                              ],
                              type: 'NotifPageSingleFilter',
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
                      name: 'query_id',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'ViewerNotificationsPageEdge',
                      kind: 'LinkedField',
                      name: 'edges',
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: 'LinkedField',
                          name: 'node',
                          plural: !1,
                          selections: [
                            f,
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'row_type',
                              storageKey: null,
                            },
                            l,
                            {
                              kind: 'InlineFragment',
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'bucket_type',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'NotifPageBucketHeaderLink',
                                  kind: 'LinkedField',
                                  name: 'header_link',
                                  plural: !1,
                                  selections: [
                                    i,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'url',
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                k,
                              ],
                              type: 'NotifPageBucketHeaderRow',
                              abstractKey: null,
                            },
                            {
                              kind: 'InlineFragment',
                              selections: [
                                m,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'Notification',
                                  kind: 'LinkedField',
                                  name: 'notif',
                                  plural: !1,
                                  selections: [n, g, o, p, q, l],
                                  storageKey: null,
                                },
                              ],
                              type: 'NotifPageCachedNotificationRow',
                              abstractKey: null,
                            },
                            {
                              kind: 'InlineFragment',
                              selections: [
                                m,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'Notification',
                                  kind: 'LinkedField',
                                  name: 'notif',
                                  plural: !1,
                                  selections: [
                                    n,
                                    p,
                                    g,
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'notif_tags',
                                      storageKey: null,
                                    },
                                    l,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: 'LinkedField',
                                      name: 'notif_attachments',
                                      plural: !0,
                                      selections: [
                                        f,
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'sound_urls',
                                              storageKey: null,
                                            },
                                          ],
                                          type: 'NotifSoundAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemFriendRequestAttachment_notifAttachments',
                                              fragmentPropName:
                                                'notifAttachments',
                                              kind: 'ModuleImport',
                                            },
                                          ],
                                          type: 'FriendRequestNotifAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemInlineCTAAttachment_notifAttachments',
                                              fragmentPropName:
                                                'notifAttachments',
                                              kind: 'ModuleImport',
                                            },
                                          ],
                                          type: 'InlineCTACometNotifAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemPageInviteAttachment_notifAttachments',
                                              fragmentPropName:
                                                'notifAttachments',
                                              kind: 'ModuleImport',
                                            },
                                          ],
                                          type: 'PageInviteNotifAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemQuickPromotionAttachment_notifAttachments',
                                              fragmentPropName:
                                                'notifAttachments',
                                              kind: 'ModuleImport',
                                            },
                                          ],
                                          type: 'QuickPromotionNotifAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemInlineSurveyAttachment_attachment',
                                              fragmentPropName: 'attachment',
                                              kind: 'ModuleImport',
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                'StructuredSurveySession',
                                              kind: 'LinkedField',
                                              name: 'inline_survey',
                                              plural: !1,
                                              selections: [f],
                                              storageKey: null,
                                            },
                                          ],
                                          type: 'InlineSurveyNotifAttachment',
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    q,
                                    r,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'TextWithEntities',
                                      kind: 'LinkedField',
                                      name: 'body',
                                      plural: !1,
                                      selections: [
                                        {
                                          args: null,
                                          fragment: b(
                                            'CometTextWithEntitiesRelay_textWithEntities$normalization.graphql',
                                          ),
                                          kind: 'FragmentSpread',
                                        },
                                        i,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: 'Literal',
                                          name: 'height',
                                          value: 56,
                                        },
                                        {
                                          kind: 'Variable',
                                          name: 'scale',
                                          variableName: 'scale',
                                        },
                                        {
                                          kind: 'Literal',
                                          name: 'width',
                                          value: 56,
                                        },
                                      ],
                                      concreteType: 'Image',
                                      kind: 'LinkedField',
                                      name: 'notif_image',
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
                                      args: [
                                        {
                                          kind: 'Literal',
                                          name: 'site',
                                          value: 'comet',
                                        },
                                      ],
                                      kind: 'ScalarField',
                                      name: 'url',
                                      storageKey: 'url(site:"comet")',
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'GlyphIconData',
                                      kind: 'LinkedField',
                                      name: 'icon_data',
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'reaction_type',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'glyph_name',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'glyph_icon_url',
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'NotificationContextInfo',
                                      kind: 'LinkedField',
                                      name: 'context_info',
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: 'TextWithEntities',
                                          kind: 'LinkedField',
                                          name: 'short_text',
                                          plural: !1,
                                          selections: j,
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'NotifNavigationEndpoint',
                                      kind: 'LinkedField',
                                      name: 'navigation_endpoint',
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: 'Literal',
                                              name: 'supported',
                                              value: [
                                                'TopFansFanNotificationRenderer',
                                                'CrossProfileNotificationInfo',
                                                'BusinessMessageNotificationRenderer',
                                                'GroupsNotificationRenderer',
                                              ],
                                            },
                                          ],
                                          concreteType: null,
                                          kind: 'LinkedField',
                                          name: 'comet_custom_renderer',
                                          plural: !1,
                                          selections: [
                                            f,
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    'CometNotificationsList_viewerConnection',
                                                  fragmentName:
                                                    'CometTopFansFanNotificationListItem_renderer',
                                                  fragmentPropName: 'renderer',
                                                  kind: 'ModuleImport',
                                                },
                                              ],
                                              type: 'TopFansFanNotificationRenderer',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    'CometNotificationsList_viewerConnection',
                                                  fragmentName:
                                                    'CometCrossProfileNotificationsListItem_cpnInfo',
                                                  fragmentPropName: 'cpnInfo',
                                                  kind: 'ModuleImport',
                                                },
                                              ],
                                              type: 'CrossProfileNotificationInfo',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    'CometNotificationsList_viewerConnection',
                                                  fragmentName:
                                                    'CometBusinessMessageNotificationListItem_renderer',
                                                  fragmentPropName: 'renderer',
                                                  kind: 'ModuleImport',
                                                },
                                              ],
                                              type: 'BusinessMessageNotificationRenderer',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    'CometNotificationsList_viewerConnection',
                                                  fragmentName:
                                                    'CometGroupsNotificationsListItem_renderer',
                                                  fragmentPropName: 'renderer',
                                                  kind: 'ModuleImport',
                                                },
                                              ],
                                              type: 'GroupsNotificationRenderer',
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey:
                                            'comet_custom_renderer(supported:["TopFansFanNotificationRenderer","CrossProfileNotificationInfo","BusinessMessageNotificationRenderer","GroupsNotificationRenderer"])',
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      condition: 'menuUseEntryPoint',
                                      kind: 'Condition',
                                      passingValue: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: 'Literal',
                                              name: 'notif_option_set_context',
                                              value: {
                                                client_action_types: [
                                                  'HIDE',
                                                  'UNSUB',
                                                  'TOGGLE_ACTIVE',
                                                  'OPEN_IN_INSPECTOR',
                                                  'REPORT_BUG',
                                                  'OPEN_PCU_REMINDERS_DIALOG',
                                                  'CIVIC_SETTINGS',
                                                ],
                                                environment: 'MAIN_SURFACE',
                                                is_comet: !0,
                                                supported_display_styles: [
                                                  {
                                                    option_display_styles: [
                                                      'CHEVRON_MENU_OPTION',
                                                    ],
                                                    option_set_display_style:
                                                      'CHEVRON_MENU',
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          concreteType:
                                            'NotificationOptionSetsConnection',
                                          kind: 'LinkedField',
                                          name: 'notif_option_sets',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                'NotificationOptionSetsEdge',
                                              kind: 'LinkedField',
                                              name: 'edges',
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    'NotifOptionSet',
                                                  kind: 'LinkedField',
                                                  name: 'node',
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        'NotifOptionSetOptionsConnection',
                                                      kind: 'LinkedField',
                                                      name: 'notif_options',
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            'NotifOptionSetOptionsEdge',
                                                          kind: 'LinkedField',
                                                          name: 'edges',
                                                          plural: !0,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                'NotifOption',
                                                              kind: 'LinkedField',
                                                              name: 'node',
                                                              plural: !1,
                                                              selections: [
                                                                g,
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType:
                                                                    null,
                                                                  kind: 'LinkedField',
                                                                  name: 'notif_option_renderer',
                                                                  plural: !1,
                                                                  selections: [
                                                                    f,
                                                                    {
                                                                      kind: 'InlineFragment',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            args: null,
                                                                            documentName:
                                                                              'CometNotificationsDropdownMenu_notification',
                                                                            fragmentName:
                                                                              'CometNotificationsDropdownHideMenuItem_notifOptionRenderer',
                                                                            fragmentPropName:
                                                                              'notifOptionRenderer',
                                                                            kind: 'ModuleImport',
                                                                          },
                                                                        ],
                                                                      type: 'NotifOptionHideRenderer',
                                                                      abstractKey:
                                                                        null,
                                                                    },
                                                                    {
                                                                      kind: 'InlineFragment',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            args: null,
                                                                            documentName:
                                                                              'CometNotificationsDropdownMenu_notification',
                                                                            fragmentName:
                                                                              'CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer',
                                                                            fragmentPropName:
                                                                              'notifOptionRenderer',
                                                                            kind: 'ModuleImport',
                                                                          },
                                                                        ],
                                                                      type: 'NotifOptionDefaultRenderer',
                                                                      abstractKey:
                                                                        null,
                                                                    },
                                                                    {
                                                                      kind: 'InlineFragment',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            args: null,
                                                                            documentName:
                                                                              'CometNotificationsDropdownMenu_notification',
                                                                            fragmentName:
                                                                              'CometNotificationsDropdownDialogMenuItem_notifOptionRenderer',
                                                                            fragmentPropName:
                                                                              'notifOptionRenderer',
                                                                            kind: 'ModuleImport',
                                                                          },
                                                                        ],
                                                                      type: 'NotifOptionDialogRenderer',
                                                                      abstractKey:
                                                                        null,
                                                                    },
                                                                  ],
                                                                  storageKey:
                                                                    null,
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
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey:
                                            'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG","CIVIC_SETTINGS"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})',
                                        },
                                      ],
                                    },
                                    {
                                      condition: 'menuUseEntryPoint',
                                      kind: 'Condition',
                                      passingValue: !0,
                                      selections: [
                                        {
                                          kind: 'ClientExtension',
                                          selections: [
                                            {
                                              alias: 'id_for_entrypoint',
                                              args: null,
                                              kind: 'ScalarField',
                                              name: '__id',
                                              storageKey: null,
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      kind: 'ClientExtension',
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'is_hidden',
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: 'NotifPageNotificationRow',
                              abstractKey: null,
                            },
                            {
                              kind: 'InlineFragment',
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'invalidation_reason',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'Notification',
                                  kind: 'LinkedField',
                                  name: 'notif',
                                  plural: !1,
                                  selections: [n, r, g],
                                  storageKey: null,
                                },
                              ],
                              type: 'NotifPageDebugInvalidationRow',
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'cursor',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'PageInfo',
                      kind: 'LinkedField',
                      name: 'page_info',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'end_cursor',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'has_next_page',
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
                  args: h,
                  filters: [],
                  handle: 'comet_notifications_thin_client',
                  key: 'CometNotificationsList_notifications_page',
                  kind: 'LinkedHandle',
                  name: 'notifications_page',
                },
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
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'notifications_sound_path',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b('CometNotificationsDropdownQuery_facebookRelayOperation'),
          metadata: {},
          name: 'CometNotificationsDropdownQuery',
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
  'CometNotificationsFilters_filters.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometNotificationsFilters_filters',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'selected_filter_tokens',
          storageKey: null,
        },
        {
          kind: 'RequiredField',
          field: {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'filters',
            plural: !0,
            selections: [
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    kind: 'RequiredField',
                    field: {
                      alias: null,
                      args: null,
                      concreteType: 'TextWithEntities',
                      kind: 'LinkedField',
                      name: 'title',
                      plural: !1,
                      selections: [
                        {
                          kind: 'RequiredField',
                          field: {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'text',
                            storageKey: null,
                          },
                          action: 'THROW',
                          path: 'filters.title.text',
                        },
                      ],
                      storageKey: null,
                    },
                    action: 'THROW',
                    path: 'filters.title',
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'notif_filter_token',
                    storageKey: null,
                  },
                ],
                type: 'NotifPageSingleFilter',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          action: 'THROW',
          path: 'filters',
        },
      ],
      type: 'NotifPageFilterConfig',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsListPaginationQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5633755363328952';
  },
  null,
);
__d(
  'CometNotificationsListPaginationQuery.graphql',
  [
    'CometTextWithEntitiesRelay_textWithEntities$normalization.graphql',
    'CometNotificationsListPaginationQuery_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          { defaultValue: null, kind: 'LocalArgument', name: 'count' },
          { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
          { defaultValue: null, kind: 'LocalArgument', name: 'environment' },
          { defaultValue: [], kind: 'LocalArgument', name: 'filter_tokens' },
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'menuUseEntryPoint',
          },
          { defaultValue: [], kind: 'LocalArgument', name: 'notif_cache_ids' },
          {
            defaultValue: ['IS_COMET', 'INCLUDE_WA_P2B_NOTIFS'],
            kind: 'LocalArgument',
            name: 'notif_query_flags',
          },
          { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        ],
        c = {
          kind: 'Variable',
          name: 'filter_tokens',
          variableName: 'filter_tokens',
        },
        d = {
          kind: 'Variable',
          name: 'notif_cache_ids',
          variableName: 'notif_cache_ids',
        },
        e = {
          kind: 'Variable',
          name: 'notif_query_flags',
          variableName: 'notif_query_flags',
        },
        f = [
          { kind: 'Variable', name: 'after', variableName: 'cursor' },
          {
            kind: 'Variable',
            name: 'environment_alias_override',
            variableName: 'environment',
          },
          c,
          { kind: 'Variable', name: 'first', variableName: 'count' },
          d,
          e,
          { kind: 'Literal', name: 'source', value: 'unknown' },
        ],
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
          name: 'text',
          storageKey: null,
        },
        i = [h],
        j = {
          alias: null,
          args: null,
          concreteType: 'TextWithEntities',
          kind: 'LinkedField',
          name: 'title',
          plural: !1,
          selections: i,
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'tracking',
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'prefetch_score',
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_id',
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_cache_id',
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'seen_state',
          storageKey: null,
        },
        q = {
          alias: 'creation_time',
          args: null,
          concreteType: 'CreationTimeWithRelativeText',
          kind: 'LinkedField',
          name: 'creation_time_with_relative_text',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'timestamp',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_type',
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'CometNotificationsListPaginationQuery',
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
                  args: [
                    { kind: 'Variable', name: 'count', variableName: 'count' },
                    {
                      kind: 'Variable',
                      name: 'cursor',
                      variableName: 'cursor',
                    },
                    c,
                    d,
                    e,
                  ],
                  kind: 'FragmentSpread',
                  name: 'CometNotificationsList_viewerConnection',
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
          name: 'CometNotificationsListPaginationQuery',
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
                  args: f,
                  concreteType: 'ViewerNotificationsPageConnection',
                  kind: 'LinkedField',
                  name: 'notifications_page',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'NotifPageFilterConfig',
                      kind: 'LinkedField',
                      name: 'filter_config',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'selected_filter_tokens',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: 'LinkedField',
                          name: 'filters',
                          plural: !0,
                          selections: [
                            g,
                            {
                              kind: 'InlineFragment',
                              selections: [
                                j,
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'notif_filter_token',
                                  storageKey: null,
                                },
                              ],
                              type: 'NotifPageSingleFilter',
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
                      name: 'query_id',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'ViewerNotificationsPageEdge',
                      kind: 'LinkedField',
                      name: 'edges',
                      plural: !0,
                      selections: [
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
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'row_type',
                              storageKey: null,
                            },
                            k,
                            {
                              kind: 'InlineFragment',
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'bucket_type',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'NotifPageBucketHeaderLink',
                                  kind: 'LinkedField',
                                  name: 'header_link',
                                  plural: !1,
                                  selections: [
                                    h,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'url',
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                j,
                              ],
                              type: 'NotifPageBucketHeaderRow',
                              abstractKey: null,
                            },
                            {
                              kind: 'InlineFragment',
                              selections: [
                                l,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'Notification',
                                  kind: 'LinkedField',
                                  name: 'notif',
                                  plural: !1,
                                  selections: [m, n, o, p, q, k],
                                  storageKey: null,
                                },
                              ],
                              type: 'NotifPageCachedNotificationRow',
                              abstractKey: null,
                            },
                            {
                              kind: 'InlineFragment',
                              selections: [
                                l,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'Notification',
                                  kind: 'LinkedField',
                                  name: 'notif',
                                  plural: !1,
                                  selections: [
                                    m,
                                    p,
                                    n,
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'notif_tags',
                                      storageKey: null,
                                    },
                                    k,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: 'LinkedField',
                                      name: 'notif_attachments',
                                      plural: !0,
                                      selections: [
                                        g,
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'sound_urls',
                                              storageKey: null,
                                            },
                                          ],
                                          type: 'NotifSoundAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemFriendRequestAttachment_notifAttachments',
                                              fragmentPropName:
                                                'notifAttachments',
                                              kind: 'ModuleImport',
                                            },
                                          ],
                                          type: 'FriendRequestNotifAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemInlineCTAAttachment_notifAttachments',
                                              fragmentPropName:
                                                'notifAttachments',
                                              kind: 'ModuleImport',
                                            },
                                          ],
                                          type: 'InlineCTACometNotifAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemPageInviteAttachment_notifAttachments',
                                              fragmentPropName:
                                                'notifAttachments',
                                              kind: 'ModuleImport',
                                            },
                                          ],
                                          type: 'PageInviteNotifAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemQuickPromotionAttachment_notifAttachments',
                                              fragmentPropName:
                                                'notifAttachments',
                                              kind: 'ModuleImport',
                                            },
                                          ],
                                          type: 'QuickPromotionNotifAttachment',
                                          abstractKey: null,
                                        },
                                        {
                                          kind: 'InlineFragment',
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                'CometNotificationsListItemAttachment_notification',
                                              fragmentName:
                                                'CometNotificationsListItemInlineSurveyAttachment_attachment',
                                              fragmentPropName: 'attachment',
                                              kind: 'ModuleImport',
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                'StructuredSurveySession',
                                              kind: 'LinkedField',
                                              name: 'inline_survey',
                                              plural: !1,
                                              selections: [g],
                                              storageKey: null,
                                            },
                                          ],
                                          type: 'InlineSurveyNotifAttachment',
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    q,
                                    r,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'TextWithEntities',
                                      kind: 'LinkedField',
                                      name: 'body',
                                      plural: !1,
                                      selections: [
                                        {
                                          args: null,
                                          fragment: b(
                                            'CometTextWithEntitiesRelay_textWithEntities$normalization.graphql',
                                          ),
                                          kind: 'FragmentSpread',
                                        },
                                        h,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: 'Literal',
                                          name: 'height',
                                          value: 56,
                                        },
                                        {
                                          kind: 'Variable',
                                          name: 'scale',
                                          variableName: 'scale',
                                        },
                                        {
                                          kind: 'Literal',
                                          name: 'width',
                                          value: 56,
                                        },
                                      ],
                                      concreteType: 'Image',
                                      kind: 'LinkedField',
                                      name: 'notif_image',
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
                                      args: [
                                        {
                                          kind: 'Literal',
                                          name: 'site',
                                          value: 'comet',
                                        },
                                      ],
                                      kind: 'ScalarField',
                                      name: 'url',
                                      storageKey: 'url(site:"comet")',
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'GlyphIconData',
                                      kind: 'LinkedField',
                                      name: 'icon_data',
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'reaction_type',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'glyph_name',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'glyph_icon_url',
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'NotificationContextInfo',
                                      kind: 'LinkedField',
                                      name: 'context_info',
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: 'TextWithEntities',
                                          kind: 'LinkedField',
                                          name: 'short_text',
                                          plural: !1,
                                          selections: i,
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'NotifNavigationEndpoint',
                                      kind: 'LinkedField',
                                      name: 'navigation_endpoint',
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: 'Literal',
                                              name: 'supported',
                                              value: [
                                                'TopFansFanNotificationRenderer',
                                                'CrossProfileNotificationInfo',
                                                'BusinessMessageNotificationRenderer',
                                                'GroupsNotificationRenderer',
                                              ],
                                            },
                                          ],
                                          concreteType: null,
                                          kind: 'LinkedField',
                                          name: 'comet_custom_renderer',
                                          plural: !1,
                                          selections: [
                                            g,
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    'CometNotificationsList_viewerConnection',
                                                  fragmentName:
                                                    'CometTopFansFanNotificationListItem_renderer',
                                                  fragmentPropName: 'renderer',
                                                  kind: 'ModuleImport',
                                                },
                                              ],
                                              type: 'TopFansFanNotificationRenderer',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    'CometNotificationsList_viewerConnection',
                                                  fragmentName:
                                                    'CometCrossProfileNotificationsListItem_cpnInfo',
                                                  fragmentPropName: 'cpnInfo',
                                                  kind: 'ModuleImport',
                                                },
                                              ],
                                              type: 'CrossProfileNotificationInfo',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    'CometNotificationsList_viewerConnection',
                                                  fragmentName:
                                                    'CometBusinessMessageNotificationListItem_renderer',
                                                  fragmentPropName: 'renderer',
                                                  kind: 'ModuleImport',
                                                },
                                              ],
                                              type: 'BusinessMessageNotificationRenderer',
                                              abstractKey: null,
                                            },
                                            {
                                              kind: 'InlineFragment',
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    'CometNotificationsList_viewerConnection',
                                                  fragmentName:
                                                    'CometGroupsNotificationsListItem_renderer',
                                                  fragmentPropName: 'renderer',
                                                  kind: 'ModuleImport',
                                                },
                                              ],
                                              type: 'GroupsNotificationRenderer',
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey:
                                            'comet_custom_renderer(supported:["TopFansFanNotificationRenderer","CrossProfileNotificationInfo","BusinessMessageNotificationRenderer","GroupsNotificationRenderer"])',
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      condition: 'menuUseEntryPoint',
                                      kind: 'Condition',
                                      passingValue: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: 'Literal',
                                              name: 'notif_option_set_context',
                                              value: {
                                                client_action_types: [
                                                  'HIDE',
                                                  'UNSUB',
                                                  'TOGGLE_ACTIVE',
                                                  'OPEN_IN_INSPECTOR',
                                                  'REPORT_BUG',
                                                  'OPEN_PCU_REMINDERS_DIALOG',
                                                  'CIVIC_SETTINGS',
                                                ],
                                                environment: 'MAIN_SURFACE',
                                                is_comet: !0,
                                                supported_display_styles: [
                                                  {
                                                    option_display_styles: [
                                                      'CHEVRON_MENU_OPTION',
                                                    ],
                                                    option_set_display_style:
                                                      'CHEVRON_MENU',
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          concreteType:
                                            'NotificationOptionSetsConnection',
                                          kind: 'LinkedField',
                                          name: 'notif_option_sets',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                'NotificationOptionSetsEdge',
                                              kind: 'LinkedField',
                                              name: 'edges',
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    'NotifOptionSet',
                                                  kind: 'LinkedField',
                                                  name: 'node',
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        'NotifOptionSetOptionsConnection',
                                                      kind: 'LinkedField',
                                                      name: 'notif_options',
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            'NotifOptionSetOptionsEdge',
                                                          kind: 'LinkedField',
                                                          name: 'edges',
                                                          plural: !0,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                'NotifOption',
                                                              kind: 'LinkedField',
                                                              name: 'node',
                                                              plural: !1,
                                                              selections: [
                                                                n,
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType:
                                                                    null,
                                                                  kind: 'LinkedField',
                                                                  name: 'notif_option_renderer',
                                                                  plural: !1,
                                                                  selections: [
                                                                    g,
                                                                    {
                                                                      kind: 'InlineFragment',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            args: null,
                                                                            documentName:
                                                                              'CometNotificationsDropdownMenu_notification',
                                                                            fragmentName:
                                                                              'CometNotificationsDropdownHideMenuItem_notifOptionRenderer',
                                                                            fragmentPropName:
                                                                              'notifOptionRenderer',
                                                                            kind: 'ModuleImport',
                                                                          },
                                                                        ],
                                                                      type: 'NotifOptionHideRenderer',
                                                                      abstractKey:
                                                                        null,
                                                                    },
                                                                    {
                                                                      kind: 'InlineFragment',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            args: null,
                                                                            documentName:
                                                                              'CometNotificationsDropdownMenu_notification',
                                                                            fragmentName:
                                                                              'CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer',
                                                                            fragmentPropName:
                                                                              'notifOptionRenderer',
                                                                            kind: 'ModuleImport',
                                                                          },
                                                                        ],
                                                                      type: 'NotifOptionDefaultRenderer',
                                                                      abstractKey:
                                                                        null,
                                                                    },
                                                                    {
                                                                      kind: 'InlineFragment',
                                                                      selections:
                                                                        [
                                                                          {
                                                                            args: null,
                                                                            documentName:
                                                                              'CometNotificationsDropdownMenu_notification',
                                                                            fragmentName:
                                                                              'CometNotificationsDropdownDialogMenuItem_notifOptionRenderer',
                                                                            fragmentPropName:
                                                                              'notifOptionRenderer',
                                                                            kind: 'ModuleImport',
                                                                          },
                                                                        ],
                                                                      type: 'NotifOptionDialogRenderer',
                                                                      abstractKey:
                                                                        null,
                                                                    },
                                                                  ],
                                                                  storageKey:
                                                                    null,
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
                                                    n,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey:
                                            'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG","CIVIC_SETTINGS"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})',
                                        },
                                      ],
                                    },
                                    {
                                      condition: 'menuUseEntryPoint',
                                      kind: 'Condition',
                                      passingValue: !0,
                                      selections: [
                                        {
                                          kind: 'ClientExtension',
                                          selections: [
                                            {
                                              alias: 'id_for_entrypoint',
                                              args: null,
                                              kind: 'ScalarField',
                                              name: '__id',
                                              storageKey: null,
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      kind: 'ClientExtension',
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'is_hidden',
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: 'NotifPageNotificationRow',
                              abstractKey: null,
                            },
                            {
                              kind: 'InlineFragment',
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'invalidation_reason',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'Notification',
                                  kind: 'LinkedField',
                                  name: 'notif',
                                  plural: !1,
                                  selections: [m, r, n],
                                  storageKey: null,
                                },
                              ],
                              type: 'NotifPageDebugInvalidationRow',
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'cursor',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'PageInfo',
                      kind: 'LinkedField',
                      name: 'page_info',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'end_cursor',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'has_next_page',
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
                  args: f,
                  filters: [],
                  handle: 'comet_notifications_thin_client',
                  key: 'CometNotificationsList_notifications_page',
                  kind: 'LinkedHandle',
                  name: 'notifications_page',
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b('CometNotificationsListPaginationQuery_facebookRelayOperation'),
          metadata: {},
          name: 'CometNotificationsListPaginationQuery',
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
  'CometNotificationsListWrapper_viewer.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: 'LocalArgument', name: 'count' },
        { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
        { defaultValue: [], kind: 'LocalArgument', name: 'filter_tokens' },
      ],
      kind: 'Fragment',
      metadata: null,
      name: 'CometNotificationsListWrapper_viewer',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'actor',
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
        {
          args: [
            { kind: 'Variable', name: 'count', variableName: 'count' },
            {
              kind: 'Variable',
              name: 'filter_tokens',
              variableName: 'filter_tokens',
            },
          ],
          kind: 'FragmentSpread',
          name: 'CometNotificationsList_viewerConnection',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'CometNotificationsList_viewerData',
        },
      ],
      type: 'Viewer',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsList_viewerConnection.graphql',
  ['CometNotificationsListPaginationQuery.graphql'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = ['notifications_page'],
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'tracking',
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'text',
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'prefetch_score',
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_id',
          storageKey: null,
        },
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
          name: 'notif_cache_id',
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'seen_state',
          storageKey: null,
        },
        j = {
          alias: 'creation_time',
          args: null,
          concreteType: 'CreationTimeWithRelativeText',
          kind: 'LinkedField',
          name: 'creation_time_with_relative_text',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'timestamp',
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: 'LocalArgument', name: 'count' },
          { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
          { kind: 'RootArgument', name: 'environment' },
          { defaultValue: [], kind: 'LocalArgument', name: 'filter_tokens' },
          { kind: 'RootArgument', name: 'menuUseEntryPoint' },
          { defaultValue: [], kind: 'LocalArgument', name: 'notif_cache_ids' },
          {
            defaultValue: ['IS_COMET', 'INCLUDE_WA_P2B_NOTIFS'],
            kind: 'LocalArgument',
            name: 'notif_query_flags',
          },
          { kind: 'RootArgument', name: 'scale' },
        ],
        kind: 'Fragment',
        metadata: {
          connection: [
            { count: 'count', cursor: 'cursor', direction: 'forward', path: a },
          ],
          refetch: {
            connection: {
              forward: { count: 'count', cursor: 'cursor' },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ['viewer'],
            operation: b('CometNotificationsListPaginationQuery.graphql'),
          },
        },
        name: 'CometNotificationsList_viewerConnection',
        selections: [
          {
            alias: 'notifications_page',
            args: null,
            concreteType: 'ViewerNotificationsPageConnection',
            kind: 'LinkedField',
            name: '__CometNotificationsList_notifications_page_comet_notifications_thin_client',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'NotifPageFilterConfig',
                kind: 'LinkedField',
                name: 'filter_config',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'selected_filter_tokens',
                    storageKey: null,
                  },
                  {
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'CometNotificationsFilters_filters',
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'query_id',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'ViewerNotificationsPageEdge',
                kind: 'LinkedField',
                name: 'edges',
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'node',
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
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'row_type',
                        storageKey: null,
                      },
                      c,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'bucket_type',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'NotifPageBucketHeaderLink',
                            kind: 'LinkedField',
                            name: 'header_link',
                            plural: !1,
                            selections: [
                              d,
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'url',
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'TextWithEntities',
                            kind: 'LinkedField',
                            name: 'title',
                            plural: !1,
                            selections: [d],
                            storageKey: null,
                          },
                        ],
                        type: 'NotifPageBucketHeaderRow',
                        abstractKey: null,
                      },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          e,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Notification',
                            kind: 'LinkedField',
                            name: 'notif',
                            plural: !1,
                            selections: [f, g, h, i, j, c],
                            storageKey: null,
                          },
                        ],
                        type: 'NotifPageCachedNotificationRow',
                        abstractKey: null,
                      },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          e,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Notification',
                            kind: 'LinkedField',
                            name: 'notif',
                            plural: !1,
                            selections: [
                              f,
                              i,
                              g,
                              h,
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'notif_tags',
                                storageKey: null,
                              },
                              c,
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'notif_attachments',
                                plural: !0,
                                selections: [
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'sound_urls',
                                        storageKey: null,
                                      },
                                    ],
                                    type: 'NotifSoundAttachment',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              j,
                              {
                                args: [
                                  {
                                    kind: 'Variable',
                                    name: 'menuUseEntryPoint',
                                    variableName: 'menuUseEntryPoint',
                                  },
                                ],
                                kind: 'FragmentSpread',
                                name: 'CometNotificationsListItem_notification',
                              },
                              {
                                args: null,
                                kind: 'FragmentSpread',
                                name: 'CometToastNotification_notification',
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'NotifNavigationEndpoint',
                                kind: 'LinkedField',
                                name: 'navigation_endpoint',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: [
                                      {
                                        kind: 'Literal',
                                        name: 'supported',
                                        value: [
                                          'TopFansFanNotificationRenderer',
                                          'CrossProfileNotificationInfo',
                                          'BusinessMessageNotificationRenderer',
                                          'GroupsNotificationRenderer',
                                        ],
                                      },
                                    ],
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'comet_custom_renderer',
                                    plural: !1,
                                    selections: [
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            args: null,
                                            documentName:
                                              'CometNotificationsList_viewerConnection',
                                            fragmentName:
                                              'CometTopFansFanNotificationListItem_renderer',
                                            fragmentPropName: 'renderer',
                                            kind: 'ModuleImport',
                                          },
                                        ],
                                        type: 'TopFansFanNotificationRenderer',
                                        abstractKey: null,
                                      },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            args: null,
                                            documentName:
                                              'CometNotificationsList_viewerConnection',
                                            fragmentName:
                                              'CometCrossProfileNotificationsListItem_cpnInfo',
                                            fragmentPropName: 'cpnInfo',
                                            kind: 'ModuleImport',
                                          },
                                        ],
                                        type: 'CrossProfileNotificationInfo',
                                        abstractKey: null,
                                      },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            args: null,
                                            documentName:
                                              'CometNotificationsList_viewerConnection',
                                            fragmentName:
                                              'CometBusinessMessageNotificationListItem_renderer',
                                            fragmentPropName: 'renderer',
                                            kind: 'ModuleImport',
                                          },
                                        ],
                                        type: 'BusinessMessageNotificationRenderer',
                                        abstractKey: null,
                                      },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            args: null,
                                            documentName:
                                              'CometNotificationsList_viewerConnection',
                                            fragmentName:
                                              'CometGroupsNotificationsListItem_renderer',
                                            fragmentPropName: 'renderer',
                                            kind: 'ModuleImport',
                                          },
                                        ],
                                        type: 'GroupsNotificationRenderer',
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey:
                                      'comet_custom_renderer(supported:["TopFansFanNotificationRenderer","CrossProfileNotificationInfo","BusinessMessageNotificationRenderer","GroupsNotificationRenderer"])',
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'NotifPageNotificationRow',
                        abstractKey: null,
                      },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'invalidation_reason',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Notification',
                            kind: 'LinkedField',
                            name: 'notif',
                            plural: !1,
                            selections: [
                              f,
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'notif_type',
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'NotifPageDebugInvalidationRow',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'cursor',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'PageInfo',
                kind: 'LinkedField',
                name: 'page_info',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'end_cursor',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'has_next_page',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'Viewer',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsList_viewerData.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'environment' }],
      kind: 'Fragment',
      metadata: null,
      name: 'CometNotificationsList_viewerData',
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
          concreteType: null,
          kind: 'LinkedField',
          name: 'actor',
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
              args: null,
              kind: 'FragmentSpread',
              name: 'CometNotificationsListItem_actor',
            },
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'CometToastNotification_actor',
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'last_update_timestamp',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notifications_sound_path',
          storageKey: null,
        },
      ],
      type: 'Viewer',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ renderLocation: null });
    g['default'] = b;
  },
  98,
);
__d(
  'CometNotificationsInteractionLoggingContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = d('react');
    var h = b.useMemo,
      i = b.useRef;
    c = function () {
      var a = i(!1);
      return h(
        function () {
          return { notifsLoadCompleteRef: a };
        },
        [a],
      );
    };
    e = a.createContext({ notifsLoadCompleteRef: { current: !1 } });
    g.useInteractionLoggingRefs = c;
    g.CometNotificationsInteractionLoggingContext = e;
  },
  98,
);
__d(
  'CometLeftRailLegacyText.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function i(a) {
      var b = a.children,
        c = a.display;
      c = c === void 0 ? 'wrap' : c;
      var d = a.size;
      d = d === void 0 ? 15 : d;
      var e = a.uppercase;
      e = e === void 0 ? !1 : e;
      var f = a.use;
      f = f === void 0 ? 'primary' : f;
      a = a.weight;
      a = a === void 0 ? 'normal' : a;
      return b(
        '' +
          ((c === 'nowrap'
            ? ' x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft'
            : '') +
            ((a === 'inherit'
              ? ' x1pd3egz'
              : '' +
                (a === 'semibold'
                  ? ' x1s688f'
                  : '' +
                    (a === 'normal'
                      ? ' xo1l8bm'
                      : '' +
                        (a === 'medium'
                          ? ' xk50ysn'
                          : '' +
                            (a === 'bold'
                              ? ' x1xlr1w8'
                              : '' +
                                ((f === 'tertiary'
                                  ? ''
                                  : '' +
                                    (f === 'secondary-dark'
                                      ? ''
                                      : '' +
                                        (f === 'secondary'
                                          ? ''
                                          : '' +
                                            (f === 'primary'
                                              ? ''
                                              : '' +
                                                (f === 'positive'
                                                  ? ''
                                                  : '' +
                                                    (f === 'placeholder'
                                                      ? ''
                                                      : '' +
                                                        (f === 'negative'
                                                          ? ''
                                                          : '' +
                                                            (f === 'inverse'
                                                              ? ''
                                                              : '' +
                                                                (f === 'inherit'
                                                                  ? ''
                                                                  : '' +
                                                                    (f ===
                                                                    'highlight'
                                                                      ? ''
                                                                      : '' +
                                                                        (f ===
                                                                        'disabled'
                                                                          ? ''
                                                                          : '' +
                                                                            (f ===
                                                                            'bluelink'
                                                                              ? ''
                                                                              : '' +
                                                                                (e ===
                                                                                !0
                                                                                  ? ''
                                                                                  : '' +
                                                                                    (d ===
                                                                                    32
                                                                                      ? ''
                                                                                      : '' +
                                                                                        (d ===
                                                                                        28
                                                                                          ? ''
                                                                                          : '' +
                                                                                            (d ===
                                                                                            24
                                                                                              ? ''
                                                                                              : '' +
                                                                                                (d ===
                                                                                                20
                                                                                                  ? ''
                                                                                                  : '' +
                                                                                                    (d ===
                                                                                                    17
                                                                                                      ? ''
                                                                                                      : '' +
                                                                                                        (d ===
                                                                                                        15
                                                                                                          ? ''
                                                                                                          : '' +
                                                                                                            (d ===
                                                                                                            13
                                                                                                              ? ''
                                                                                                              : '' +
                                                                                                                (d ===
                                                                                                                'inherit'
                                                                                                                  ? ''
                                                                                                                  : '' +
                                                                                                                    (c ===
                                                                                                                    'nowrap'
                                                                                                                      ? ''
                                                                                                                      : '')))))))))))))))))))))) +
                                  (d === 'inherit' ? ' x1pd3egz' : ''))))))) +
              ((d === 32
                ? ' x579bpy x2sqz4w'
                : '' +
                  (d === 28
                    ? ' x1q74xe4 xyesn5m'
                    : '' +
                      (d === 24
                        ? ' xngnso2 x1qb5hxa'
                        : '' +
                          (d === 20
                            ? ' x1603h9y x1u7k74'
                            : '' +
                              (d === 17
                                ? ' x1lkfr7t x1lbecb7'
                                : '' +
                                  (d === 15
                                    ? ' x6prxxf xpq8k02'
                                    : '' +
                                      (d === 13
                                        ? ' x1nxh6w3 x1sqdly8'
                                        : '' +
                                          (d === 'inherit'
                                            ? ' x1qlqyl8 x15bjb6t'
                                            : '')))))))) +
                ((e === !0 ? ' xtvhhri' : '') +
                  (f === 'tertiary'
                    ? ' x12scifz'
                    : '' +
                      (f === 'secondary-dark'
                        ? ' x1lfu0sg'
                        : '' +
                          (f === 'secondary'
                            ? ' xi81zsa'
                            : '' +
                              (f === 'primary'
                                ? ' xzsf02u'
                                : '' +
                                  (f === 'positive'
                                    ? ' x6u5lvz'
                                    : '' +
                                      (f === 'placeholder'
                                        ? ' x12scifz'
                                        : '' +
                                          (f === 'negative'
                                            ? ' x1a1m0xk'
                                            : '' +
                                              (f === 'inverse'
                                                ? ' x17z8epw'
                                                : '' +
                                                  (f === 'inherit'
                                                    ? ' x1heor9g'
                                                    : '' +
                                                      (f === 'highlight'
                                                        ? ' x1qq9wsj'
                                                        : '' +
                                                          (f === 'disabled'
                                                            ? ' x1dntmbh'
                                                            : '' +
                                                              (f === 'bluelink'
                                                                ? ' x1fey0fg'
                                                                : '')))))))))))))))),
      );
    }
    i.displayName = i.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = a.children,
        c = a.id,
        d = a.testid;
      d = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'id',
        'testid',
      ]);
      return h.jsx(
        i,
        babelHelpers['extends']({}, d, {
          children: function (a) {
            return h.jsx('span', {
              className: a,
              'data-testid': void 0,
              id: c,
              children: b,
            });
          },
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometLeftRailNewContentPill.react',
  ['CometLeftRailLegacyText.react', 'CometPressable.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        pill: {
          alignItems: 'x6s0dn4',
          backgroundColor: 'xtvsq51',
          borderTop: 'x76ihet',
          borderEnd: 'xwmqs3e',
          borderBottom: 'x112ta8',
          borderStart: 'xxxdfa6',
          borderTopStartRadius: 'x107yiy2',
          borderTopEndRadius: 'xv8uw2v',
          borderBottomEndRadius: 'x1tfwpuw',
          borderBottomStartRadius: 'x2g32xy',
          boxShadow: 'xpdwapb',
          cursor: 'x1ypdohk',
          display: 'x78zum5',
          height: 'x1vqgdyp',
          justifyContent: 'x1qughib',
          marginTop: 'xw7yly9',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x1pi30zi',
          paddingBottom: 'x18d9i69',
          paddingStart: 'x1swvt13',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          top: 'x13vifvy',
          transform: 'xuuh30',
          width: 'x14atkfc',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children;
      a = a.onClick;
      return h.jsx(c('CometPressable.react'), {
        display: 'inline',
        onPress: a,
        overlayDisabled: !0,
        xstyle: i.pill,
        children: h.jsx(c('CometLeftRailLegacyText.react'), {
          display: 'nowrap',
          use: 'inverse',
          weight: 'semibold',
          children: b,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsActionsButton.react',
  [
    'fbt',
    'ix',
    'CometDeferredPopoverTrigger.react',
    'TetraCircleButton.react',
    'fbicon',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = c('requireDeferred')('CometNotificationsActionsMenu.react').__setRef(
        'CometNotificationsActionsButton.react',
      ),
      l = c('requireDeferred')('OpenJewelOptionsMenuFalcoEvent').__setRef(
        'CometNotificationsActionsButton.react',
      );
    function a(a) {
      return j.jsx(c('CometDeferredPopoverTrigger.react'), {
        align: 'end',
        popoverProps: {
          actorId: a.actorId,
          notificationsListRef: a.notificationsListRef,
          onSeeAllClick: a.onSeeAllClick,
        },
        popoverResource: k,
        popoverType: 'menu',
        position: 'below',
        children: function (b, e, f, g, k, m) {
          return j.jsx(c('TetraCircleButton.react'), {
            color: 'secondary',
            icon: d('fbicon')._(i('484387'), 20),
            label: h._('__JHASH__znbiTCy0onP__JHASH__'),
            onHoverIn: g,
            onHoverOut: k,
            onPress: function () {
              e(),
                l.onReady(function (b) {
                  b = b.log;
                  return b(function () {
                    return { userID: a.actorId };
                  });
                });
            },
            onPressIn: m,
            ref: b,
            size: 32,
            testid: void 0,
            type: 'deemphasized',
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometNoNotifications.react',
  [
    'fbt',
    'CometContentArea.react',
    'NullStateNotifications',
    'TetraNullState.react',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useEffect,
      k = c('requireDeferred')('NoNotificationsFalcoEvent').__setRef(
        'CometNoNotifications.react',
      );
    function a(a) {
      var b = a.loggingSurface,
        d = a.userId;
      j(
        function () {
          k.onReady(function (a) {
            a = a.log;
            return a(function () {
              return { ref: b, user_id: d };
            });
          });
        },
        [b, d],
      );
      return i.jsx(c('CometContentArea.react'), {
        verticalAlign: 'middle',
        children: i.jsx(c('TetraNullState.react'), {
          'data-testid': void 0,
          headline: h._('__JHASH__jfKxt2CsC1d__JHASH__'),
          icon: c('NullStateNotifications'),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsBucketHeaderListItem.react',
  ['CometUnitHeader.react', 'ODS', 'react', 'useNotificationsImpressionLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useEffect;
    function a(a) {
      var b = a.actorId,
        e = a.bucketHeader,
        f = a.filterTokens,
        g = a.headerLinkText,
        j = a.onPress,
        k = a.title,
        l = a.trackingData;
      a = a.url;
      b = c('useNotificationsImpressionLogger')({
        actorId: b,
        loggerContext: 'www_tab',
        notifId: null,
        trackingData: l,
      });
      l = b[0];
      i(
        function () {
          var a;
          d('ODS').bumpEntityKey(
            3478,
            'comet_notifications.list',
            'see_all.impression.' + ((a = e) != null ? a : 'null'),
          );
        },
        [e],
      );
      return h.jsx('div', {
        ref: l,
        children: h.jsx(c('CometUnitHeader.react'), {
          action: g,
          actionLinkProps: { passthroughProps: { filterTokens: f }, url: a },
          actiontestid: 'NotificationsBucketHeaderLink',
          headline: k,
          level: 3,
          onActionPress: j,
          testid: void 0,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsRenderLocations',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = 'dropdown';
    b = 'rail';
    f.DROPDOWN = a;
    f.RAIL = b;
  },
  66,
);
__d(
  'CometNotificationsScrollHoldingContainer.react',
  ['BaseScrollableAreaContext', 'HiddenSubtreePassiveContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useEffect,
      k = b.useLayoutEffect,
      l = b.useRef;
    function a(a) {
      var b = i(c('BaseScrollableAreaContext')),
        d = i(c('HiddenSubtreePassiveContext')),
        e = l(null),
        f = l(null),
        g = l(null),
        m = l(0),
        n = b[b.length - 1];
      j(
        function () {
          var a = n.getDOMNode();
          if (a != null) {
            m.current = a.scrollTop;
            var b = function () {
              m.current = a.scrollTop;
            };
            a.addEventListener('scroll', b, { passive: !0 });
            return function () {
              a.removeEventListener('scroll', b, { passive: !0 });
            };
          }
        },
        [n],
      );
      k(function () {
        if (
          e.current != null &&
          !d.getCurrentState().hiddenOrBackgrounded_FIXME
        ) {
          var b = e.current.getBoundingClientRect();
          if (g.current != null && f.current != null) {
            var c = b.height - g.current.height;
            if (c === 0 || f.current === a.firstNotificationID) {
              f.current = a.firstNotificationID;
              g.current = b;
              return;
            }
            var h = n.getDOMNode();
            h != null &&
              (h.scrollTop === m.current || g.current == null) &&
              (h.scrollTop += c);
          }
          f.current = a.firstNotificationID;
          g.current = b;
        }
      });
      return h.jsx('div', { ref: e, children: a.children });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useHandleUpdateMultiNotifReadState',
  [
    'CometNotificationsMutationLogger',
    'CometNotificationsUpdateSeenStateMutation',
    'recoverableViolation',
    'useGetCancellableSeenStateCallback',
    'useTriggerAccessibilityAlert',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'MAIN_SURFACE';
    function i(a) {
      var b = a.accessibilityString,
        e = a.environment,
        f = a.queryID,
        g = a.receivedNotificationIdsRef,
        i = a.timestamp,
        j = a.triggerAccessibilityAlert;
      if (g == null || g.current == null) return;
      d(
        'CometNotificationsUpdateSeenStateMutation',
      ).CometNotificationsUpdateSeenStateMutation(
        e,
        {
          environment: h,
          input: {
            environment: h,
            is_comet: !0,
            last_notif_sync_time: i,
            notif_ids: Array.from(g.current),
            query_id: f,
            source: 'unknown',
            update_type: 'MARK_ALL_READ',
          },
        },
        {
          mutationLogger: d('CometNotificationsMutationLogger')
            .notificationMarkAllAsReadStart,
          onError: function (a) {
            c('recoverableViolation')(
              'Update read state (multi) mutation failed with an error: ',
              'Notifications',
              { error: a },
            );
          },
          onSuccess: function () {
            b != null && j != null && j(b);
          },
          updater: function (a) {
            d(
              'CometNotificationsUpdateSeenStateMutation',
            ).updateMultiNotifReadState(a),
              d('CometNotificationsUpdateSeenStateMutation').clearBadgeCount(a);
          },
        },
      );
    }
    function a(a) {
      var b = c('useTriggerAccessibilityAlert')();
      return c('useGetCancellableSeenStateCallback')(
        babelHelpers['extends']({}, a, {
          triggerAccessibilityAlert: b,
          updater: i,
        }),
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useHandleUpdateMultiNotifSeenState',
  [
    'CometNotificationsMutationLogger',
    'CometNotificationsUpdateSeenStateMutation',
    'recoverableViolation',
    'useGetCancellableSeenStateCallback',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'MAIN_SURFACE';
    function i(a) {
      var b = a.environment,
        e = a.queryID,
        f = a.receivedNotificationIdsRef;
      a = a.timestamp;
      if (f == null || f.current == null) return;
      d(
        'CometNotificationsUpdateSeenStateMutation',
      ).CometNotificationsUpdateSeenStateMutation(
        b,
        {
          environment: h,
          input: {
            environment: h,
            is_comet: !0,
            last_notif_sync_time: a,
            notif_ids: Array.from(f.current),
            query_id: e,
            source: 'unknown',
            update_type: 'MARK_ALL_SEEN',
          },
        },
        {
          mutationLogger: d('CometNotificationsMutationLogger')
            .notificationMarkAllAsSeenStart,
          onError: function (a) {
            c('recoverableViolation')(
              'Update seen state (multi) mutation failed with an error: ',
              'Notifications',
              { error: a },
            );
          },
          updater: function (a) {
            d(
              'CometNotificationsUpdateSeenStateMutation',
            ).updateMultiNotifSeenState(a),
              d('CometNotificationsUpdateSeenStateMutation').clearBadgeCount(a);
          },
        },
      );
    }
    function a(a) {
      return c('useGetCancellableSeenStateCallback')(
        babelHelpers['extends']({}, a, { updater: i }),
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsList.react',
  [
    'fbt',
    'CometErrorBoundary.react',
    'CometFocusTable.react',
    'CometInfiniteScrollSuspenseList.react',
    'CometIsInNotificationsContext',
    'CometListCellGlimmer.react',
    'CometNoNotifications.react',
    'CometNotificationsBucketHeaderListItem.react',
    'CometNotificationsContext',
    'CometNotificationsInteractionLogger',
    'CometNotificationsInteractionLoggingContext',
    'CometNotificationsListItem.react',
    'CometNotificationsList_viewerConnection.graphql',
    'CometNotificationsList_viewerData.graphql',
    'CometNotificationsRenderLocations',
    'CometNotificationsScrollHoldingContainer.react',
    'CometOnRefresh.react',
    'CometPlaceholder.react',
    'CometRelay',
    'FBLogger',
    'FocusRegion.react',
    'FriendingCometFriendsBadgeCountClearMutation',
    'HiddenSubtreeContext',
    'JSResourceForInteraction',
    'WebPixelRatio',
    'cr:1460543',
    'cr:503',
    'err',
    'focusScopeQueries',
    'gkx',
    'promiseDone',
    'react',
    'recoverableViolation',
    'requireDeferred',
    'setupNotificationsLiveQuery',
    'useHandleUpdateMultiNotifReadState',
    'useHandleUpdateMultiNotifSeenState',
    'useHideNotificationsToasts',
    'useSimpleImpression',
    'useToasterStateManager',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j,
      k = d('react');
    e = d('react');
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useImperativeHandle,
      p = e.useMemo,
      q = e.useRef,
      aa = e.useState,
      ba = e.useTransition,
      ca = c('requireDeferred')(
        'CometNotificationsRankingErrorFalcoEvent',
      ).__setRef('CometNotificationsList.react'),
      da = c('requireDeferred')('GriffinTabOpenFalcoEvent').__setRef(
        'CometNotificationsList.react',
      ),
      ea = c('requireDeferred')('NotifBeeperDropFalcoEvent').__setRef(
        'CometNotificationsList.react',
      ),
      fa = c('requireDeferred')('NotifDebugModeFalcoEvent').__setRef(
        'CometNotificationsList.react',
      ),
      ga = c('requireDeferred')('NotifListBottomCollisionFalcoEvent').__setRef(
        'CometNotificationsList.react',
      ),
      ha = c('JSResourceForInteraction')(
        'CometToastNotification.react',
      ).__setRef('CometNotificationsList.react'),
      ia = c('JSResourceForInteraction')('CometNotificationSound').__setRef(
        'CometNotificationsList.react',
      ),
      ja = 10,
      ka = 0.7,
      r = 'SHOW_TOAST',
      s = 'PLAY_SOUND',
      la = 10;
    function t(a, b) {
      c('recoverableViolation')(
        '[CometNotificationsList] ' + b + ' suffered an uncaught error',
        'Notifications',
        { error: a },
      );
    }
    var u;
    function a(a, e) {
      var f,
        g = d('CometRelay').useRelayEnvironment(),
        v = ba(),
        w = v[0],
        x = v[1],
        y = a.hideHeaderLinks,
        z = a.isFromPageNotification,
        A = a.onClose,
        B = a.onSeeAllClick,
        C = a.setNewNotifState,
        ma = c('gkx')('1126689');
      v = d('CometRelay').usePaginationFragment(
        i !== void 0
          ? i
          : (i = b('CometNotificationsList_viewerConnection.graphql')),
        a.viewerConnection,
      );
      var D = v.data,
        E = v.hasNext,
        F = v.isLoadingNext,
        na = v.loadNext,
        G = v.refetch;
      v = d('CometRelay').useFragment(
        j !== void 0 ? j : (j = b('CometNotificationsList_viewerData.graphql')),
        a.viewer,
      );
      var H = v.actor;
      a = v.last_update_timestamp;
      var I = v.notifications_sound_path,
        J = v.notifications_unseen_count,
        K = (v = D.notifications_page) == null ? void 0 : v.query_id,
        L = p(
          function () {
            var a;
            return (a =
              (a = D.notifications_page) == null ? void 0 : a.edges) != null
              ? a
              : [];
          },
          [(v = D.notifications_page) == null ? void 0 : v.edges],
        ),
        M = H == null ? void 0 : H.id;
      v = L.find(function (a) {
        a = a.node;
        return a && a.row_type === 'NOTIFICATION';
      });
      v =
        v &&
        ((v = v.node) == null ? void 0 : (v = v.notif) == null ? void 0 : v.id);
      var N = m(c('CometNotificationsContext')),
        O = N.renderLocation === d('CometNotificationsRenderLocations').RAIL,
        oa =
          N.renderLocation === d('CometNotificationsRenderLocations').DROPDOWN
            ? void 0
            : 'self',
        P = m(c('CometIsInNotificationsContext')),
        Q = d('WebPixelRatio').get(),
        R = q(new Set()),
        S = q(!1),
        pa = l(
          function () {
            fa.onReady(function (a) {
              a = a.log;
              return a(function () {
                return { userID: M };
              });
            }),
              S.current === !1
                ? ((S.current = !0),
                  x(function () {
                    G(
                      {
                        notif_query_flags: [
                          'IS_COMET',
                          'DEBUG_SHOW_INVALIDATED',
                          'INCLUDE_WA_P2B_NOTIFS',
                        ],
                        scale: Q,
                      },
                      { fetchPolicy: 'network-only' },
                    );
                  }))
                : ((S.current = !1),
                  x(function () {
                    G(
                      {
                        notif_query_flags: [
                          'IS_COMET',
                          'INCLUDE_WA_P2B_NOTIFS',
                        ],
                        scale: Q,
                      },
                      { fetchPolicy: 'network-only' },
                    );
                  }));
          },
          [M, S, G, Q, x],
        );
      o(e, function () {
        return {
          debugModeEnabled: S,
          handleDebugModeClick: function () {
            pa();
          },
          markAllNotificationsAsRead: function () {
            qa();
          },
        };
      });
      N = l(
        function () {
          if (ma) return;
          try {
            d('FriendingCometFriendsBadgeCountClearMutation').commit(g, {}),
              c('promiseDone')(
                da.load().then(function (a) {
                  return a.log(function () {
                    return {};
                  });
                }),
              );
          } catch (a) {
            c('FBLogger')('growth_friending').mustfix(
              '[Comet] FriendingCometFriendsBadgeCountClearMutation failed: ',
              a.message,
            );
          }
        },
        [g, ma],
      );
      c('useSimpleImpression')(N);
      var qa = c('useHandleUpdateMultiNotifReadState')({
          accessibilityString: h._('__JHASH__YCdQp3a-J8D__JHASH__'),
          queryID: K,
          receivedNotificationIdsRef: R,
          timestamp: a,
        }),
        T = c('useHandleUpdateMultiNotifSeenState')({
          queryID: K,
          receivedNotificationIdsRef: R,
          timestamp: a,
        });
      n(
        function () {
          return function () {
            T.dispose();
          };
        },
        [T],
      );
      var U = q(L.length);
      n(
        function () {
          U.current = L.length;
        },
        [L.length],
      );
      var ra = m(
        d('CometNotificationsInteractionLoggingContext')
          .CometNotificationsInteractionLoggingContext,
      );
      n(
        function () {
          if (!w) {
            var a = ra.notifsLoadCompleteRef;
            a && (a.current = !0);
            d('CometNotificationsInteractionLogger').success(U.current);
          }
        },
        [ra, w, U],
      );
      e = l(
        function () {
          if (w) return;
          x(function () {
            G({ scale: Q }, { fetchPolicy: 'network-only' });
          });
        },
        [w, G, Q, x],
      );
      d('CometOnRefresh.react').useOnRefresh(e);
      N = l(
        function () {
          if (F || !E) return;
          ga.onReady(function (a) {
            return a.log(function () {
              return {};
            });
          });
          na(la);
        },
        [F, E, na],
      );
      var V = p(
        function () {
          return L.map(function (a) {
            a = a.node;
            var b = {};
            if (a && a.row_type === 'NOTIFICATION') {
              var c;
              ((c = a.notif) == null ? void 0 : c.notif_tags) != null &&
                ((c = a.notif) == null ? void 0 : c.notif_tags.includes(r)) &&
                (b.new_notif = a.notif);
              ((c = a.notif) == null ? void 0 : c.notif_cache_id) != null &&
                (b.notif_cache_id = a.notif.notif_cache_id);
              ((c = a.notif) == null ? void 0 : c.id) != null &&
                (b.id = a.notif.id);
            }
            return b;
          });
        },
        [L],
      );
      a = l(
        function (a) {
          var b = V.reduce(function (a, b) {
            return b.notif_cache_id != null ? a.concat(b.notif_cache_id) : a;
          }, []);
          G(
            {
              filter_tokens: a,
              notif_cache_ids: b,
              notif_query_flags: ['IS_COMET'],
              scale: Q,
            },
            { fetchPolicy: 'network-only' },
          );
        },
        [V, G, Q],
      );
      n(
        function () {
          u == null &&
            V.forEach(function (a) {
              a.new_notif != null &&
                ((a = a.new_notif) == null
                  ? void 0
                  : (a = a.notif_tags) == null
                  ? void 0
                  : a.includes(s)) &&
                u == null &&
                c('promiseDone')(
                  ia.load().then(function (a) {
                    u = a;
                  }),
                );
            });
        },
        [V, I],
      );
      var W = c('useToasterStateManager')(),
        X = q({}),
        sa = c('useHideNotificationsToasts')();
      n(
        function () {
          if (sa) return;
          var a = !1;
          V.forEach(function (b) {
            var d = b.new_notif;
            if (
              d != null &&
              (d == null
                ? void 0
                : (b = d.notif_tags) == null
                ? void 0
                : b.includes(r))
            ) {
              !a &&
                C != null &&
                (C(function (a) {
                  if (a.isScrollAnchorVisible)
                    return babelHelpers['extends']({}, a, {
                      newNotifId: d == null ? void 0 : d.id,
                    });
                  else
                    return babelHelpers['extends']({}, a, {
                      isNewNotifSeen: !1,
                      newNotifId: d == null ? void 0 : d.id,
                    });
                }),
                (a = !0));
              var e = d,
                f = e.notif_id,
                g = e.notif_type,
                h = (b = e.creation_time) == null ? void 0 : b.timestamp;
              b = e.notif_attachments;
              var i;
              if (b != null) {
                i =
                  (b = b.find(function (a) {
                    return a.sound_urls != null;
                  })) == null
                    ? void 0
                    : b.sound_urls;
              }
              var j = (b = e.notif_tags) == null ? void 0 : b.includes(s);
              if (
                f != null &&
                h != null &&
                X.current[f + h] == null &&
                e.seen_state === 'UNSEEN_AND_UNREAD'
              ) {
                var l;
                c('promiseDone')(
                  ha.load().then(function (a) {
                    X.current[f + h] == null &&
                      ((l = W.push(
                        k.jsx(a, {
                          actor: H,
                          notification: e,
                          onCloseClick: function () {
                            return W.expire(l);
                          },
                        }),
                        5e3,
                      )),
                      (X.current[f + h] = l));
                  }),
                  function () {
                    if (j === !0 && u != null) {
                      var a;
                      a = (a = i) != null ? a : I;
                      new u(a).play(String(l));
                    }
                  },
                );
              } else
                f != null &&
                  g != null &&
                  M != null &&
                  ea.onReady(function (a) {
                    a = a.log;
                    return a(function () {
                      return {
                        notification_data: {
                          alert_id: f,
                          logger_context: 'beeper',
                          notif_type: g,
                          user_id: M,
                        },
                        ref: 'www_tab',
                      };
                    });
                  });
            }
          });
        },
        [H, M, I, V, sa, C, W],
      );
      var ta = L.length;
      e = aa(null);
      var ua = e[0],
        va = e[1],
        Y = m(c('HiddenSubtreeContext')).hiddenOrBackgrounded;
      e = c('useVisibilityObserver')({
        onHidden: function () {
          return va(!1);
        },
        onVisible: function () {
          return va(!0);
        },
      });
      f = (f = D.notifications_page) == null ? void 0 : f.filter_config;
      var Z = f == null ? void 0 : f.selected_filter_tokens;
      n(
        function () {
          var a = new Set();
          V.forEach(function (b) {
            b.notif_cache_id != null && a.add(b.notif_cache_id),
              b.id != null && R.current.add(b.id);
          });
          var b = ta || 15,
            d = c('setupNotificationsLiveQuery')(g, {
              count: b,
              filterTokens: Z,
              receivedNotifications: a,
            });
          return function () {
            d.dispose();
          };
        },
        [V, ta, g, Z],
      );
      n(
        function () {
          var a = !1;
          V.forEach(function (b) {
            (b == null ? void 0 : b.seen_state) === 'UNSEEN_AND_UNREAD' &&
              (a = !0);
          });
          var b = J != null && J > 0;
          ua === !0 && !Y && (b || a) && T();
        },
        [V, T, Y, ua, J],
      );
      var wa = p(
          function () {
            var a = null,
              e = [],
              f = new Map(),
              g = 0;
            L.forEach(function (h, i) {
              i = h.node;
              h = { row_tracking: i == null ? void 0 : i.tracking };
              if (i == null) return;
              var j = i.row_type;
              switch (j) {
                case 'NOTIFICATION':
                  j = i.notif;
                  var l = i.prefetch_score;
                  l = (l = l) != null ? l : 0;
                  if (!j) return;
                  h.notif_tracking = j.tracking;
                  var m = j.notif_id,
                    n = j == null ? void 0 : j.seen_state;
                  a === 'PRIORITY_INBOX' &&
                    m != null &&
                    n != null &&
                    f.set(m, n);
                  n = l >= ka && g < ja;
                  l = {
                    actor: H,
                    isFromPageNotification: z,
                    isNotificationsRoute: P,
                    onClose: A,
                    queryID: K,
                    replace: O && !P ? !0 : void 0,
                    routeTarget: P ? 'content' : oa,
                    shouldPrefetch: n,
                    showSelectedState: O,
                    trackingData: h,
                  };
                  if (
                    ((n = j.navigation_endpoint) == null
                      ? void 0
                      : n.comet_custom_renderer) != null
                  )
                    e.push(
                      k.jsx(
                        c('CometErrorBoundary.react'),
                        {
                          onError: function (a) {
                            return t(
                              a,
                              'CometNotificationsListItemMatchContainer',
                            );
                          },
                          children: k.jsx(c('CometPlaceholder.react'), {
                            fallback: null,
                            children: k.jsx(d('CometRelay').MatchContainer, {
                              match:
                                j.navigation_endpoint.comet_custom_renderer,
                              props: l,
                            }),
                          }),
                        },
                        m,
                      ),
                    );
                  else {
                    if (
                      !((n = j.__fragments) == null
                        ? void 0
                        : n.CometNotificationsListItem_notification)
                    ) {
                      n = c('err')(
                        'Missing fragment for notif: ' + JSON.stringify(j),
                        JSON.stringify(L),
                      );
                      t(n, 'CometNotificationsListItemMissingFragment');
                    } else
                      e.push(
                        k.jsx(
                          c('CometErrorBoundary.react'),
                          {
                            onError: function (a) {
                              return t(a, 'CometNotificationsListItem');
                            },
                            children: k.jsx(
                              c('CometNotificationsListItem.react'),
                              babelHelpers['extends']({}, l, {
                                notification: j,
                                preventLocalNavigation: !1,
                                queryID: K,
                              }),
                            ),
                          },
                          m,
                        ),
                      );
                  }
                  g++;
                  break;
                case 'BUCKET_HEADER':
                  a = i == null ? void 0 : i.bucket_type;
                  l =
                    i == null
                      ? void 0
                      : (n = i.title) == null
                      ? void 0
                      : n.text;
                  var o, p;
                  if (y !== !0) {
                    o =
                      i == null
                        ? void 0
                        : (j = i.header_link) == null
                        ? void 0
                        : j.text;
                    p =
                      i == null
                        ? void 0
                        : (m = i.header_link) == null
                        ? void 0
                        : m.url;
                  }
                  e.push(
                    k.jsx(
                      'div',
                      {
                        className: 'x1rdy4ex',
                        children: k.jsx(
                          c('CometNotificationsBucketHeaderListItem.react'),
                          {
                            actorId: M,
                            bucketHeader: a,
                            filterTokens: Z,
                            headerLinkText: o,
                            onPress: function () {
                              var b;
                              B(
                                'bucket.header.link.' +
                                  ((b = a) != null ? b : 'null'),
                              );
                            },
                            title: l,
                            trackingData: h,
                            url: p,
                          },
                        ),
                      },
                      a,
                    ),
                  );
                  break;
                case 'DEBUG_INVALIDATION':
                  if (!b('cr:1460543')) return;
                  n = i.invalidation_reason;
                  j = i.notif;
                  if (j == null) {
                    c('recoverableViolation')(
                      'NotifPageDebugInvalidationRow missing notif',
                      'Notifications',
                    );
                    return;
                  }
                  m = j.notif_id;
                  l = j.notif_type;
                  if (l == null || m == null) return;
                  e.push(
                    k.jsx(
                      b('cr:1460543'),
                      { exception: n, notifType: l, notificationNotifId: m },
                      m,
                    ),
                  );
                  break;
                default:
                  break;
              }
            });
            return [e, f];
          },
          [H, M, L, y, z, O, P, oa, A, B, K, Z],
        ),
        xa = wa[0],
        $ = wa[1],
        ya = $.values().next().value === 'UNSEEN_AND_UNREAD';
      n(
        function () {
          !Y &&
            J != null &&
            J > 0 &&
            !ya &&
            ca.onReady(function (a) {
              a.log(function () {
                return {
                  bucketed_notifs: Object.fromEntries($),
                  unseen_count: J,
                };
              });
            });
        },
        [ya, Y, $, J],
      );
      return k.jsxs('div', {
        'data-testid': void 0,
        ref: e,
        children: [
          b('cr:503') != null &&
            k.jsx(c('CometErrorBoundary.react'), {
              fallback: function () {
                return null;
              },
              onError: function (a) {
                return t(a, 'CometNotificationsFilters');
              },
              children: k.jsx(b('cr:503'), {
                actorId: M,
                filterConfig: f,
                setFilterTokens: a,
              }),
            }),
          w &&
            k.jsx(c('CometListCellGlimmer.react'), {
              imageSize: 56,
              imageStyle: 'circle',
              numberOfItems: 1,
            }),
          L.length > 0
            ? k.jsx(d('FocusRegion.react').FocusRegion, {
                recoverFocusQuery: d('focusScopeQueries').tabbableScopeQuery,
                children: k.jsx(d('CometFocusTable.react').CometFocusTable, {
                  allowModifiers: !0,
                  label: h._('__JHASH__n315LqV13lC__JHASH__'),
                  tabScopeQuery: d('focusScopeQueries').tabbableScopeQuery,
                  wrapXToNextLine: !0,
                  children: k.jsx(
                    c('CometNotificationsScrollHoldingContainer.react'),
                    {
                      firstNotificationID: v,
                      children: k.jsx(
                        c('CometInfiniteScrollSuspenseList.react'),
                        {
                          hasMore: E,
                          isLoading: F,
                          listGlimmer: k.jsx(c('CometListCellGlimmer.react'), {
                            imageSize: 56,
                            imageStyle: 'circle',
                            numberOfItems: 2,
                          }),
                          onLoadMore: N,
                          children: xa.filter(Boolean),
                        },
                      ),
                    },
                  ),
                }),
              })
            : k.jsx(c('CometNoNotifications.react'), {
                loggingSurface: 'comet',
                userId: M,
              }),
          k.jsx('div', { 'data-testid': void 0 }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = k.forwardRef(a);
    g['default'] = e;
  },
  98,
);
__d(
  'CometNotificationsListWrapper.react',
  [
    'fbt',
    'CometLeftRailHeader.react',
    'CometLeftRailNewContentPill.react',
    'CometNotificationsActionsButton.react',
    'CometNotificationsContext',
    'CometNotificationsList.react',
    'CometNotificationsListItemSeenContext',
    'CometNotificationsListWrapper_viewer.graphql',
    'CometNotificationsRenderLocations',
    'CometProductAttributionContextProvider.react',
    'CometRelay',
    'CometRouterDispatcherContextFactory.react',
    'CometScrollView.react',
    'CometTopNavListDropdown.react',
    'ODS',
    'mergeRefs',
    'react',
    'setTimeout',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useMemo,
      o = e.useRef,
      p = e.useState;
    function a(a) {
      var e = o(null),
        f = l(c('CometNotificationsContext')),
        g =
          f.renderLocation === d('CometNotificationsRenderLocations').DROPDOWN;
      f = f.renderLocation === d('CometNotificationsRenderLocations').RAIL;
      var q = o(null),
        r = d('CometRelay').useFragment(
          i !== void 0
            ? i
            : (i = b('CometNotificationsListWrapper_viewer.graphql')),
          a.viewer,
        ),
        s = p({
          isNewNotifSeen: !0,
          isScrollAnchorVisible: !0,
          newNotifId: void 0,
        }),
        t = s[0],
        u = s[1];
      s =
        (s = r == null ? void 0 : (s = r.actor) == null ? void 0 : s.id) != null
          ? s
          : null;
      var v = p(!1),
        w = v[0],
        x = v[1];
      m(
        function () {
          t.newNotifId != null &&
          t.isScrollAnchorVisible === !1 &&
          t.isNewNotifSeen === !1
            ? x(!0)
            : x(!1);
        },
        [t],
      );
      var y = c('useVisibilityObserver')({
          onHidden: function (a) {
            a = a.hiddenReason;
            a !== 'COMPONENT_UNMOUNTED' &&
              u(babelHelpers['extends']({}, t, { isScrollAnchorVisible: !1 }));
          },
          onVisible: function () {
            u(babelHelpers['extends']({}, t, { isScrollAnchorVisible: !0 }));
          },
        }),
        z = o(!1);
      v = n(
        function () {
          return c('mergeRefs')(q, y);
        },
        [q, y],
      );
      var A = k(function () {
          q.current &&
            q.current.scrollIntoView({ behavior: 'smooth', block: 'start' }),
            (z.current = !1);
        }, []),
        B = k(
          function () {
            if (!w) return;
            if (z.current === !1) {
              c('setTimeout')(function () {
                z.current = !0;
              }, 100);
              return;
            }
            z.current = !1;
          },
          [w],
        );
      A = w
        ? j.jsx(c('CometLeftRailNewContentPill.react'), {
            onClick: A,
            children: h._('__JHASH__zWSuA-YUQui__JHASH__'),
          })
        : null;
      var C = k(
          function (a) {
            a === t.newNotifId &&
              u(function (a) {
                return babelHelpers['extends']({}, a, { isNewNotifSeen: !0 });
              });
          },
          [t.newNotifId],
        ),
        D = function (b) {
          d('ODS').bumpEntityKey(
            3478,
            'comet_notifications.list',
            'see_all.click.' + b,
          ),
            a.onClose && a.onClose();
        };
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(c('CometTopNavListDropdown.react').Card, {
            testid: void 0,
            useFullWidth: f,
            useMaxHeight: g,
            children: j.jsxs(c('CometScrollView.react'), {
              onScroll: B,
              showsHorizontalScrollIndicator: !1,
              children: [
                j.jsx(
                  'div',
                  { className: 'xds687c xjm9jq1 x10l6tqk x13vifvy', ref: v },
                  'firstChildScrollAnchor',
                ),
                j.jsx(c('CometLeftRailHeader.react'), {
                  auxiliary: j.jsx('div', {
                    className: 'x78zum5 x1wsgfga x9otpla',
                    children: j.jsx(
                      c('CometNotificationsActionsButton.react'),
                      {
                        actorId: s,
                        notificationsListRef: e,
                        onSeeAllClick: function () {
                          return D('dropdown');
                        },
                      },
                    ),
                  }),
                  disableProportional: !0,
                  title: h._('__JHASH__qmrq3COgFr4__JHASH__'),
                }),
                j.jsx(c('CometProductAttributionContextProvider.react'), {
                  value: 'notifications',
                  children: j.jsx(
                    c('CometNotificationsListItemSeenContext').Provider,
                    {
                      value: C,
                      children: j.jsx(
                        c('CometRouterDispatcherContextFactory.react'),
                        {
                          actorID: null,
                          children: j.jsx(c('CometNotificationsList.react'), {
                            hideHeaderLinks: a.hideHeaderLinks,
                            onClose: a.onClose,
                            onSeeAllClick: D,
                            ref: e,
                            setNewNotifState: u,
                            viewer: r,
                            viewerConnection: r,
                          }),
                        },
                      ),
                    },
                  ),
                }),
              ],
            }),
          }),
          A,
        ],
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsDropdown.react',
  [
    'fbt',
    'CometErrorBoundary.react',
    'CometHero.react',
    'CometNotificationsContext',
    'CometNotificationsDropdownQuery.graphql',
    'CometNotificationsInteractionLogger',
    'CometNotificationsInteractionLoggingContext',
    'CometNotificationsListWrapper.react',
    'CometNotificationsRenderLocations',
    'CometRelay',
    'CometTopNavListDropdown.react',
    'QPLUserFlow',
    'qpl',
    'react',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = i !== void 0 ? i : (i = b('CometNotificationsDropdownQuery.graphql')),
      o = 12e5,
      p = function () {
        var a = k(
            d('CometNotificationsInteractionLoggingContext')
              .CometNotificationsInteractionLoggingContext,
          ),
          b = a.notifsLoadCompleteRef;
        d('CometNotificationsInteractionLogger').start('dropdown');
        var e = o++;
        c('QPLUserFlow').start(c('qpl')._(30605361, '6204'), {
          instanceKey: e,
        });
        l(
          function () {
            var a = b.current;
            return function () {
              a !== !0
                ? (d('CometNotificationsInteractionLogger').cancel(),
                  c('QPLUserFlow').endCancel(c('qpl')._(30605361, '6204'), {
                    instanceKey: e,
                  }))
                : c('QPLUserFlow').endSuccess(c('qpl')._(30605361, '6204'), {
                    instanceKey: e,
                  });
            };
          },
          [e, b],
        );
      };
    function q(a) {
      p();
      var b = d('CometRelay').usePreloadedQuery(
        n,
        a.queries.notificationsDropdownQueryReference,
      );
      b = b == null ? void 0 : b.viewer;
      if (b == null)
        throw c('unrecoverableViolation')(
          'viewer cannot be null when querying for notifications',
          'Notifications',
        );
      var e = m(function () {
        return {
          renderLocation: d('CometNotificationsRenderLocations').DROPDOWN,
        };
      }, []);
      e = j.jsxs(j.Fragment, {
        children: [
          j.jsx(c('CometHero.react'), { description: 'NotificationList' }),
          j.jsx(c('CometNotificationsContext').Provider, {
            value: e,
            children: j.jsx(c('CometNotificationsListWrapper.react'), {
              onClose: a.props.onClose,
              viewer: b,
            }),
          }),
        ],
      });
      return j.jsx(c('CometTopNavListDropdown.react'), {
        label: h._('__JHASH__8gAbffuAS0s__JHASH__'),
        name: 'NotificationList',
        children: e,
      });
    }
    q.displayName = q.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = d(
        'CometNotificationsInteractionLoggingContext',
      ).useInteractionLoggingRefs();
      return j.jsx(c('CometErrorBoundary.react'), {
        onError: function (a) {
          b.notifsLoadCompleteRef && (b.notifsLoadCompleteRef.current = !0),
            d('CometNotificationsInteractionLogger').error(a);
        },
        children: j.jsx(
          d('CometNotificationsInteractionLoggingContext')
            .CometNotificationsInteractionLoggingContext.Provider,
          { value: b, children: j.jsx(q, babelHelpers['extends']({}, a)) },
        ),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsFilter.react',
  [
    'CometPivotLink.react',
    'filterNulls',
    'react',
    'requireDeferred',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('requireDeferred')('NotifFilterClickFalcoEvent').__setRef(
        'CometNotificationsFilter.react',
      ),
      j = c('requireDeferred')('NotifFilterImpressionFalcoEvent').__setRef(
        'CometNotificationsFilter.react',
      );
    function k(a) {
      switch (a == null ? void 0 : a.toLowerCase()) {
        case 'priority':
          return 'click_priority_filter';
        case 'unread':
          return 'click_unread_filter';
        case 'friends':
          return 'click_friends_filter';
        case 'my ads':
          return 'click_ads_filter';
        case 'all':
        default:
          return 'click_all_filter';
      }
    }
    function l(a) {
      switch (a == null ? void 0 : a.toLowerCase()) {
        case 'priority':
          return 'impression_priority_filter';
        case 'unread':
          return 'impression_unread_filter';
        case 'friends':
          return 'impression_friends_filter';
        case 'my ads':
          return 'impression_ads_filter';
        case 'all':
        default:
          return 'impression_all_filter';
      }
    }
    function a(a) {
      var b = a.actorId,
        d = a.name,
        e = a.notifFilterToken,
        f = a.selectedFilterTokens,
        g = a.setFilterTokens,
        m = { ref: 'www_tab', userID: (a = b) != null ? a : '' };
      b = c('useVisibilityObserver')({
        onVisible: function () {
          j.onReady(function (a) {
            a = a.log;
            a(function () {
              return babelHelpers['extends']({}, m, { event: l(d) });
            });
          });
        },
      });
      return d == null
        ? null
        : h.jsx('div', {
            className: 'x9f619 x5yr21d x1sxyh0',
            ref: b,
            children: h.jsx(c('CometPivotLink.react'), {
              label: d,
              onPress: function () {
                g(c('filterNulls')([e])),
                  i.onReady(function (a) {
                    a = a.log;
                    return a(function () {
                      return babelHelpers['extends']({}, m, { event: k(d) });
                    });
                  });
              },
              selected: f.includes(e),
              type: 'deemphasized',
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsFilters.react',
  [
    'CometNotificationsFilter.react',
    'CometNotificationsFilters_filters.graphql',
    'CometRelay',
    'FocusGroup.react',
    'focusScopeQueries',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    e = d('FocusGroup.react').createFocusGroup(
      d('focusScopeQueries').tabbableScopeQuery,
    );
    var j = e[0],
      k = e[1];
    function a(a) {
      var e = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('CometNotificationsFilters_filters.graphql')),
        a.filterConfig,
      );
      return e == null
        ? null
        : i.jsx(j, {
            allowModifiers: !0,
            orientation: 'horizontal',
            preventScrollOnFocus: !1,
            tabScopeQuery: d('focusScopeQueries').tabbableScopeQuery,
            wrap: !0,
            children: i.jsx('div', {
              'aria-label': 'Notifications Filters',
              className: 'x78zum5 x1q0g3np x2lah0s x1a02dak x1swvt13',
              role: 'toolbar',
              children: e.filters.map(function (b) {
                var d;
                return i.jsx(
                  k,
                  {
                    children: i.jsx(c('CometNotificationsFilter.react'), {
                      actorId: a.actorId,
                      name: (d = b.title) == null ? void 0 : d.text,
                      notifFilterToken: b.notif_filter_token,
                      selectedFilterTokens: e.selected_filter_tokens,
                      setFilterTokens: a.setFilterTokens,
                    }),
                  },
                  b.notif_filter_token,
                );
              }),
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
