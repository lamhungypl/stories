/*FB_PKG_DELIM*/

__d(
  'CometNotificationsDropdownMenuButton_notification.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [
        { defaultValue: !1, kind: 'LocalArgument', name: 'isToast' },
        { defaultValue: !1, kind: 'LocalArgument', name: 'menuUseEntryPoint' },
      ],
      kind: 'Fragment',
      metadata: null,
      name: 'CometNotificationsDropdownMenuButton_notification',
      selections: [
        {
          condition: 'menuUseEntryPoint',
          kind: 'Condition',
          passingValue: !1,
          selections: [
            {
              args: [
                { kind: 'Variable', name: 'isToast', variableName: 'isToast' },
              ],
              kind: 'FragmentSpread',
              name: 'CometNotificationsDropdownMenu_notification',
            },
          ],
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'notif_type',
          storageKey: null,
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
      ],
      type: 'Notification',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsDropdownMenuContainerQuery$Parameters',
  ['CometNotificationsDropdownMenuContainerQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometNotificationsDropdownMenuContainerQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometNotificationsDropdownMenuContainerQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsListItemAttachment_notification.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [
        { defaultValue: !1, kind: 'LocalArgument', name: 'isToast' },
      ],
      kind: 'Fragment',
      metadata: null,
      name: 'CometNotificationsListItemAttachment_notification',
      selections: [
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
                  args: null,
                  documentName:
                    'CometNotificationsListItemAttachment_notification',
                  fragmentName:
                    'CometNotificationsListItemFriendRequestAttachment_notifAttachments',
                  fragmentPropName: 'notifAttachments',
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
                  fragmentPropName: 'notifAttachments',
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
                  fragmentPropName: 'notifAttachments',
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
                  fragmentPropName: 'notifAttachments',
                  kind: 'ModuleImport',
                },
              ],
              type: 'QuickPromotionNotifAttachment',
              abstractKey: null,
            },
            {
              condition: 'isToast',
              kind: 'Condition',
              passingValue: !1,
              selections: [
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
                  ],
                  type: 'InlineSurveyNotifAttachment',
                  abstractKey: null,
                },
              ],
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Notification',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsListItem_actor.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometNotificationsListItem_actor',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
      ],
      type: 'Actor',
      abstractKey: '__isActor',
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsListItem_notification.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { kind: 'Variable', name: 'isToast', variableName: 'isToast' };
      return {
        argumentDefinitions: [
          { defaultValue: !1, kind: 'LocalArgument', name: 'hideIcon' },
          { defaultValue: !1, kind: 'LocalArgument', name: 'isToast' },
          {
            defaultValue: !1,
            kind: 'LocalArgument',
            name: 'menuUseEntryPoint',
          },
          { kind: 'RootArgument', name: 'scale' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'CometNotificationsListItem_notification',
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
            name: 'notif_id',
            storageKey: null,
          },
          {
            args: [
              a,
              {
                kind: 'Variable',
                name: 'menuUseEntryPoint',
                variableName: 'menuUseEntryPoint',
              },
            ],
            kind: 'FragmentSpread',
            name: 'CometNotificationsDropdownMenuButton_notification',
          },
          {
            args: [a],
            kind: 'FragmentSpread',
            name: 'CometNotificationsListItemAttachment_notification',
          },
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
                kind: 'FragmentSpread',
                name: 'CometTextWithEntitiesRelay_textWithEntities',
              },
            ],
            storageKey: null,
          },
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
                    concreteType: 'StructuredSurveySession',
                    kind: 'LinkedField',
                    name: 'inline_survey',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '__typename',
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: 'InlineSurveyNotifAttachment',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              { kind: 'Literal', name: 'height', value: 56 },
              { kind: 'Variable', name: 'scale', variableName: 'scale' },
              { kind: 'Literal', name: 'width', value: 56 },
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
            args: null,
            kind: 'ScalarField',
            name: 'notif_type',
            storageKey: null,
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'useCometNotificationURL_notification',
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'seen_state',
            storageKey: null,
          },
          {
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
          {
            condition: 'hideIcon',
            kind: 'Condition',
            passingValue: !1,
            selections: [
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
            ],
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'tracking',
            storageKey: null,
          },
          {
            condition: 'isToast',
            kind: 'Condition',
            passingValue: !1,
            selections: [
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
                ],
                storageKey: null,
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
        type: 'Notification',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometNotificationsUpdateSeenStateMutation_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5264311553579235';
  },
  null,
);
__d(
  'CometNotificationsUpdateSeenStateMutation.graphql',
  ['CometNotificationsUpdateSeenStateMutation_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'environment',
        },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'input' },
        d = [{ kind: 'Variable', name: 'data', variableName: 'input' }],
        e = {
          alias: null,
          args: null,
          concreteType: 'Notification',
          kind: 'LinkedField',
          name: 'notifications',
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
        };
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: 'Fragment',
          metadata: null,
          name: 'CometNotificationsUpdateSeenStateMutation',
          selections: [
            {
              alias: null,
              args: d,
              concreteType: 'NotificationsUpdateSeenOrReadResponsePayload',
              kind: 'LinkedField',
              name: 'notifications_update_seen_or_read',
              plural: !1,
              selections: [
                e,
                {
                  alias: null,
                  args: null,
                  concreteType: 'Viewer',
                  kind: 'LinkedField',
                  name: 'viewer',
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: 'FragmentSpread',
                      name: 'CometNotificationsBadgeCountFragment_viewer',
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Mutation',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [c, a],
          kind: 'Operation',
          name: 'CometNotificationsUpdateSeenStateMutation',
          selections: [
            {
              alias: null,
              args: d,
              concreteType: 'NotificationsUpdateSeenOrReadResponsePayload',
              kind: 'LinkedField',
              name: 'notifications_update_seen_or_read',
              plural: !1,
              selections: [
                e,
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
            'CometNotificationsUpdateSeenStateMutation_facebookRelayOperation',
          ),
          metadata: {},
          name: 'CometNotificationsUpdateSeenStateMutation',
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
  'getCometNotificationURL_notification.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'InlineDataFragment',
      name: 'getCometNotificationURL_notification',
    };
    e.exports = a;
  },
  null,
);
__d(
  'useCometNotificationURL_notification.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometNotificationURL_notification',
      selections: [
        {
          kind: 'InlineDataFragmentSpread',
          name: 'getCometNotificationURL_notification',
          selections: [
            {
              alias: null,
              args: [{ kind: 'Literal', name: 'site', value: 'comet' }],
              kind: 'ScalarField',
              name: 'url',
              storageKey: 'url(site:"comet")',
            },
          ],
          args: null,
          argumentDefinitions: [],
        },
      ],
      type: 'Notification',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useNotificationsImpressionLogger',
  ['gkx', 'react', 'requireDeferred', 'usePartialViewImpression'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback,
      i = c('requireDeferred')('NotifImpressionEventsFalcoEvent').__setRef(
        'useNotificationsImpressionLogger',
      );
    function a(a) {
      var b = a.actorId,
        d = a.loggerContext,
        e = a.notifId,
        f = a.trackingData;
      a = h(
        function (a) {
          a = a.visibleDuration;
          var c = {
            notification_data: {
              duration: String(a),
              logger_context: d,
              notif_id: e,
              user_id: b,
            },
            ref: 'www_tab',
            tracking: JSON.stringify(f),
          };
          i.onReady(function (a) {
            a = a.log;
            return a(function () {
              return c;
            });
          });
        },
        [f, d, e, b],
      );
      a = c('usePartialViewImpression')({ onImpressionEnd: a });
      return [a, null];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsListItemSeenContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext(function () {});
    g['default'] = b;
  },
  98,
);
__d(
  'CometNotificationsDropdownMenuContainer.entrypoint',
  [
    'CometNotificationsDropdownMenuContainerQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var c = {
          encoded_notif_id: a.encodedNotifId,
          scale: d('WebPixelRatio').get(),
        };
        return {
          extraProps: { queryID: a.queryId },
          queries: {
            dropdownQueryRef: {
              parameters: b(
                'CometNotificationsDropdownMenuContainerQuery$Parameters',
              ),
              variables: c,
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometNotificationsDropdownMenuContainer.react',
      ).__setRef('CometNotificationsDropdownMenuContainer.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsDropdownMenuButton.react',
  [
    'fbt',
    'CometListCellHoverButton.react',
    'CometNotificationsDropdownMenuButton_notification.graphql',
    'CometNotificationsDropdownMenuContainer.entrypoint',
    'CometRelay',
    'JSResourceForInteraction',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react'),
      k = d('react').useCallback,
      l = c('requireDeferred')('OpenOptionsMenuFalcoEvent').__setRef(
        'CometNotificationsDropdownMenuButton.react',
      ),
      m = c('JSResourceForInteraction')(
        'CometNotificationsDropdownMenu.react',
      ).__setRef('CometNotificationsDropdownMenuButton.react');
    function a(a) {
      var e = d('CometRelay').useFragment(
          i !== void 0
            ? i
            : (i = b(
                'CometNotificationsDropdownMenuButton_notification.graphql',
              )),
          a.notification,
        ),
        f = a.queryId,
        g = a.userId,
        n = k(
          function () {
            l.onReady(function (a) {
              a = a.log;
              return a(function () {
                return {
                  notification_data: {
                    alert_id: e == null ? void 0 : e.notif_id,
                    logger_context: 'www_tab',
                    notif_type: e == null ? void 0 : e.notif_type,
                    user_id: g,
                  },
                  ref: 'www_tab',
                };
              });
            });
          },
          [e, g],
        );
      return (e == null ? void 0 : e.id_for_entrypoint) == null
        ? j.jsx(c('CometListCellHoverButton.react'), {
            hidden: a.hidden,
            label: h._('__JHASH__SJFVJ1HCRT3__JHASH__'),
            onFocusChange: a.onFocusChange,
            onHoverChange: a.onHoverChange,
            onMenuStateChange: a.onMenuStateChange,
            onPress: n,
            popoverProps: { notification: e, queryID: f },
            popoverResource: m,
            popoverTriggerType: 'lazy',
            popoverType: 'menu',
          })
        : j.jsx(c('CometListCellHoverButton.react'), {
            entryPointParams: {
              encodedNotifId: e.id_for_entrypoint,
              queryId: a.queryId,
            },
            hidden: a.hidden,
            label: h._('__JHASH__SJFVJ1HCRT3__JHASH__'),
            onFocusChange: a.onFocusChange,
            onHoverChange: a.onHoverChange,
            onMenuStateChange: a.onMenuStateChange,
            onPress: n,
            popoverEntryPoint: c(
              'CometNotificationsDropdownMenuContainer.entrypoint',
            ),
            popoverProps: {},
            popoverTriggerType: 'entryPoint',
            popoverType: 'menu',
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsListItemAttachment.react',
  [
    'CometErrorBoundary.react',
    'CometNotificationsListItemAttachment_notification.graphql',
    'CometRelay',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = c('requireDeferred')('NotifCtaImpressionFalcoEvent').__setRef(
        'CometNotificationsListItemAttachment.react',
      );
    function a(a) {
      var b = a.date,
        d = a.notification,
        e = a.notificationId;
      a = a.onPress;
      return i.jsx(c('CometErrorBoundary.react'), {
        children: i.jsx(k, {
          date: b,
          notification: d,
          notificationId: e,
          onPress: a,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function k(a) {
      var c = a.date,
        e = a.notification,
        f = a.notificationId,
        g = a.onPress;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b(
              'CometNotificationsListItemAttachment_notification.graphql',
            )),
        e,
      );
      var k = function (a) {
        j.onReady(function (b) {
          b = b.log;
          b(function () {
            return { cta_type: a, notif_id: f };
          });
        });
      };
      e = a.notif_attachments;
      if (e == null) return null;
      a = e
        .map(function (a, b) {
          return i.jsx(
            d('CometRelay').MatchContainer,
            {
              match: a,
              props: {
                date: c,
                notifAttachments: a,
                notificationId: f,
                onImpression: k,
                onPress: g,
              },
            },
            b,
          );
        })
        .filter(Boolean);
      return a.length === 0 ? null : a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'cometNotificationsListItemIcon',
  ['ix', 'ImageIconSource', 'getReactionSVGSource'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = {
      app_facebook: h('958818'),
      app_instagram: h('958820'),
      app_messenger: h('958823'),
      app_pages: h('958824'),
      app_rooms: h('1395467'),
      'app-business-suite': h('268798'),
      'app-oculus': h('20924'),
      arrows_up_down: h('958826'),
      badge_heart: h('958827'),
      ballot_box: h('175937'),
      bar_chart: h('958828'),
      bookmark: h('958830'),
      breaking_news: h('958831'),
      briefcase: h('958832'),
      cake: h('958833'),
      calendar: h('958835'),
      camcorder_live: h('958836'),
      card: h('1289629'),
      caution_triangle: h('958837'),
      circle_3: h('958838'),
      'circle-heart-ribbon': h('12810'),
      comment: h('958852'),
      comment_star: h('958851'),
      default: h('958829'),
      'desktop-mobile': h('1964681'),
      direct: h('958854'),
      friend_add: h('958857'),
      friends: h('958858'),
      fundraiser: h('958859'),
      games: h('958821'),
      group: h('958860'),
      headphones: h('2007797'),
      heart_lock: h('1250959'),
      high_five_hands: h('958861'),
      instagram_reels: h('1951540'),
      marketplace: h('894424'),
      'messages-spotlight': h('150623'),
      music: h('232925'),
      notif_messages_question_live: h('1495236'),
      'notif-audio-wave-square': h('265477'),
      'notif-circle-blue-fb-pay': h('290477'),
      'notif-meta': h('184314'),
      'notif-note': h('286102'),
      'notif-star-tip': h('1970274'),
      pencil: h('958866'),
      pencil_checkmark: h('958865'),
      photo: h('958867'),
      pin: h('958868'),
      play_circle: h('958869'),
      poke: h('958870'),
      politics: h('958871'),
      polls: h('958872'),
      posts: h('958873'),
      profile_circle: h('958874'),
      relationship: h('958875'),
      safety_check: h('958876'),
      share: h('958877'),
      shield: h('958878'),
      shops: h('1686153'),
      spark_ar: h('1079479'),
      stories: h('1819883'),
      tag: h('958882'),
      'tag-star': h('276484'),
      topics: h('958883'),
      volunteer: h('1185872'),
      watch_tv: h('958885'),
      water: h('958886'),
    };
    function j(a) {
      return new (c('ImageIconSource'))(i[a] || i['default'], 28, 28);
    }
    function a(a, b, e) {
      if (b != null) {
        var f = d('getReactionSVGSource').getReactionSVGSource(b);
        if (f != null) return new (c('ImageIconSource'))(f, 28, 28);
        else if (b === 17 && e != null)
          return new (c('ImageIconSource'))(e, 28, 28);
      }
      return a != null ? j(a) : null;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'isAccountsCenterURI',
  ['isFacebookURI'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return c('isFacebookURI')(a) && a.getSubdomain() === 'accountscenter';
    }
    g['default'] = a;
  },
  98,
);
__d(
  'isAppsURI',
  ['isFacebookURI'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return c('isFacebookURI')(a) && a.getSubdomain() === 'apps';
    }
    g['default'] = a;
  },
  98,
);
__d(
  'isDevelopersURI',
  ['isFacebookURI'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return c('isFacebookURI')(a) && a.getSubdomain() === 'developers';
    }
    g['default'] = a;
  },
  98,
);
__d(
  'getCometNotificationURL',
  [
    'CometRelay',
    'ConstUriUtils',
    'absoluteToRelative',
    'getCometNotificationURL_notification.graphql',
    'isAccountsCenterURI',
    'isAppsURI',
    'isBulletinDotComURI',
    'isBusinessURI',
    'isDevelopersURI',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a) {
      a = d('CometRelay').readInlineData(
        h !== void 0
          ? h
          : (h = b('getCometNotificationURL_notification.graphql')),
        a,
      );
      a = a == null ? void 0 : a.url;
      if (a == null) return null;
      var e = d('ConstUriUtils').getUri(a);
      if (e == null) return a;
      if (
        window.location.hostname.startsWith('www.facebook.com') ||
        c('isBusinessURI')(e) ||
        c('isDevelopersURI')(e) ||
        c('isBulletinDotComURI')(e) ||
        c('isAccountsCenterURI')(e) ||
        c('isAppsURI')(e)
      )
        return a;
      else return c('absoluteToRelative')(a);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometNotificationURL',
  [
    'CometRelay',
    'getCometNotificationURL',
    'useCometNotificationURL_notification.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useCometNotificationURL_notification.graphql')),
        a,
      );
      return c('getCometNotificationURL')(a);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometNotificationsUpdateSeenStateMutation',
  [
    'CometNotificationsThinClientConnectionHandler',
    'CometNotificationsUpdateSeenStateMutation.graphql',
    'CometRelay',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i =
        h !== void 0
          ? h
          : (h = b('CometNotificationsUpdateSeenStateMutation.graphql')),
      j = function (a) {
        return a.get(d('relay-runtime').VIEWER_ID);
      },
      k = function (a) {
        return a.getValue('notifications_unseen_count', {
          environment: 'MAIN_SURFACE',
        });
      },
      l = function (a) {
        a = j(a);
        if (a == null) return;
        a = d('CometNotificationsThinClientConnectionHandler').getConnection(
          a,
          'CometNotificationsList_notifications_page',
        );
        if (a == null) return;
        a = a.getLinkedRecords('edges');
        if (a == null || a.length === 0) return;
        var b = [];
        a.forEach(function (a) {
          if (a == null) return;
          a = a.getLinkedRecord('node');
          if (a == null) return;
          var c = a.getType();
          if (
            c !== 'NotifPageNotificationRow' &&
            c !== 'NotifPageCachedNotificationRow'
          )
            return;
          c = a.getLinkedRecord('notif');
          if (c == null) return;
          b.push(c);
        });
        return b;
      };
    function a(a, b) {
      a = l(a);
      if (a == null || a.length === 0) return;
      var c = a.findIndex(function (a) {
        return a.getValue('id') === b;
      });
      if (c < 0) return;
      a[c] != null && a[c].setValue('SEEN_BUT_UNREAD', 'seen_state');
    }
    function c(a, b) {
      a = l(a);
      if (a == null || a.length === 0) return;
      var c = a.findIndex(function (a) {
        return a.getValue('id') === b;
      });
      if (c < 0) return;
      a[c] != null && a[c].setValue('SEEN_AND_READ', 'seen_state');
    }
    var m = function (a, b) {
      a = l(a);
      if (a == null || a.length === 0) return;
      a.forEach(function (a) {
        return b(a);
      });
    };
    function e(a) {
      var b = function (a) {
        if (a == null) return;
        a.getValue('seen_state') === 'UNSEEN_AND_UNREAD' &&
          a.setValue('SEEN_BUT_UNREAD', 'seen_state');
      };
      m(a, b);
    }
    function f(a) {
      var b = function (a) {
        if (a == null) return;
        (a.getValue('seen_state') === 'UNSEEN_AND_UNREAD' ||
          a.getValue('seen_state') === 'SEEN_BUT_UNREAD') &&
          a.setValue('SEEN_AND_READ', 'seen_state');
      };
      m(a, b);
    }
    function n(a) {
      a = j(a);
      if (a == null) return;
      var b = k(a);
      if (b == null) return;
      b = +b - 1;
      a.setValue(Math.max(0, b), 'notifications_unseen_count', {
        environment: 'MAIN_SURFACE',
      });
    }
    function o(a) {
      a = j(a);
      if (a == null) return;
      a.setValue(0, 'notifications_unseen_count', {
        environment: 'MAIN_SURFACE',
      });
    }
    function p(a, b, c) {
      var e = c.mutationLogger(),
        f = e.logOnError,
        g = e.logOnSuccess;
      return d('CometRelay').commitMutation(a, {
        mutation: i,
        onCompleted: function () {
          g(), c.onSuccess && c.onSuccess();
        },
        onError: function (a) {
          f(a), c.onError && c.onError(a);
        },
        optimisticUpdater: c.updater,
        variables: b,
      });
    }
    g.updateSingleNotifSeenState = a;
    g.updateSingleNotifReadState = c;
    g.updateMultiNotifSeenState = e;
    g.updateMultiNotifReadState = f;
    g.lowerBadgeCountByOne = n;
    g.clearBadgeCount = o;
    g.CometNotificationsUpdateSeenStateMutation = p;
    g.mutation = i;
  },
  98,
);
__d(
  'useGetCancellableSeenStateCallback',
  ['CometRelay', 'CometThrottle', 'createCancelableFunction', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a(a) {
      var b = a.accessibilityString,
        e = a.mutationLogger,
        f = a.notifId,
        g = a.queryID,
        i = a.receivedNotificationIdsRef,
        j = a.seenState,
        k = a.timestamp,
        l = a.triggerAccessibilityAlert,
        m = a.updater,
        n = a.updateType,
        o = d('CometRelay').useRelayEnvironment();
      return h(
        function () {
          var a = c('createCancelableFunction')(function () {
              return m({
                accessibilityString: b,
                environment: o,
                mutationLogger: e,
                notifId: f,
                queryID: g,
                receivedNotificationIdsRef: i,
                seenState: j,
                timestamp: k,
                triggerAccessibilityAlert: l,
                updateType: n,
              });
            }),
            d = !1,
            h = c('CometThrottle')(
              function () {
                (d = !1), a();
              },
              1e3,
              { leading: !0 },
            ),
            p = function () {
              (d = !0), h();
            };
          p.dispose = function () {
            d && a(), a.cancel();
          };
          return p;
        },
        [m, b, o, e, f, g, i, j, k, l, n],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useHandleUpdateSingleNotifReadState',
  [
    'CometNotificationsUpdateSeenStateMutation',
    'recoverableViolation',
    'useGetCancellableSeenStateCallback',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'MAIN_SURFACE';
    function i(a) {
      var b = a.environment,
        e = a.mutationLogger,
        f = a.notifId,
        g = a.queryID,
        i = a.seenState;
      a = a.updateType;
      if (f == null || e == null || i == null || a == null) return;
      d(
        'CometNotificationsUpdateSeenStateMutation',
      ).CometNotificationsUpdateSeenStateMutation(
        b,
        {
          environment: h,
          input: {
            environment: h,
            is_comet: !0,
            last_notif_sync_time: 0,
            notif_ids: [f],
            query_id: g,
            source: 'unknown',
            update_type: a,
          },
        },
        {
          mutationLogger: function () {
            return e(i);
          },
          onError: function (a) {
            c('recoverableViolation')(
              'Update read state (single) mutation failed with an error: ',
              'Notifications',
              { error: a },
            );
          },
          updater: function (a) {
            d(
              'CometNotificationsUpdateSeenStateMutation',
            ).updateSingleNotifReadState(a, f);
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
  'useScrollToNotif',
  ['CometRouteMatch', 'XCometNotificationsControllerRouteBuilder', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useRef;
    a = function (a) {
      var b = d('CometRouteMatch').useCurrentRouteMatcher(
          d('CometRouteMatch').MatchFunctions.urlMatchFunction,
        ),
        e = d('CometRouteMatch').useHostedRouteMatcher(
          d('CometRouteMatch').MatchFunctions.urlMatchFunction,
        );
      e = a != null ? e(a) : !1;
      a = b(
        c('XCometNotificationsControllerRouteBuilder').buildURL({}).toString(),
      );
      b = h(e && !a);
      return [e, b];
    };
    g.useScrollToNotif = a;
  },
  98,
);
__d(
  'CometNotificationsListItem.react',
  [
    'fbt',
    'CometBadge.react',
    'CometBoldedEntityRenderer',
    'CometEmojiTransform',
    'CometEmoticonTransform',
    'CometFocusTableContext',
    'CometNotificationsDropdownMenuButton.react',
    'CometNotificationsListItemAttachment.react',
    'CometNotificationsListItemSeenContext',
    'CometNotificationsListItem_actor.graphql',
    'CometNotificationsListItem_notification.graphql',
    'CometNotificationsMutationLogger',
    'CometNotificationsTimestamp.react',
    'CometPassiveGetRouterStateContext',
    'CometPressable.react',
    'CometProductAttribution',
    'CometRelay',
    'CometTextWithEntitiesRelay.react',
    'FocusWithinHandler.react',
    'TetraAccessoryListCell.react',
    'TetraIcon.react',
    'cometNotificationsListItemIcon',
    'mergeRefs',
    'react',
    'requireDeferred',
    'scrollIntoView',
    'useCometNotificationURL',
    'useHandleUpdateSingleNotifReadState',
    'useMenuButtonVisibilityState',
    'useNotificationsImpressionLogger',
    'useScrollToNotif',
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
      n = e.useLayoutEffect,
      o = e.useMemo,
      p = e.useRef,
      q = c('requireDeferred')('NotifClickEventsFalcoEvent').__setRef(
        'CometNotificationsListItem.react',
      ),
      r = {
        dot: { marginEnd: 'xw3qccf', marginStart: 'xsgj6o6', $$css: !0 },
        hiddenLabel: {
          clip: 'xzpqnlu',
          clipPath: 'x179tack',
          position: 'x10l6tqk',
          wordBreak: 'xdnwjd9',
          $$css: !0,
        },
        listItemContainer: { position: 'x1n2onr6', $$css: !0 },
        pressable: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          height: 'xsdox4t',
          justifyContent: 'xl56j7k',
          paddingStart: 'x1e558r4',
          width: 'xw4jnvo',
          $$css: !0,
        },
        spacer: { height: 'x1kpxq89', width: 'xsmyaan', $$css: !0 },
      },
      s = { '*': [c('CometBoldedEntityRenderer')] },
      t = [c('CometEmoticonTransform')(), c('CometEmojiTransform')()],
      u =
        i !== void 0 ? i : (i = b('CometNotificationsListItem_actor.graphql')),
      aa =
        j !== void 0
          ? j
          : (j = b('CometNotificationsListItem_notification.graphql'));
    function a(a) {
      var b = a.actor,
        e = a.hideMenuButton,
        f = e === void 0 ? !1 : e;
      e = a.isFromPageNotification;
      var g = a.isNotificationsRoute,
        i = g === void 0 ? !1 : g;
      g = a.loggerContext;
      var j = g === void 0 ? 'www_tab' : g;
      g = a.notification;
      var v = a.onClick,
        w = a.onClose,
        x = a.preventLocalNavigation,
        y = a.queryID,
        z = a.replace,
        A = a.routeTarget,
        B = a.shouldOpenInBlankTarget,
        C = a.shouldPrefetch;
      C = C === void 0 ? !1 : C;
      var D = a.showSelectedState,
        ba = D === void 0 ? !1 : D,
        E = a.trackingData;
      D = d('CometRelay').useFragment(u, b);
      var F = d('CometRelay').useFragment(aa, g);
      a = c('useCometNotificationURL')(F);
      b = F.body;
      g = F.context_info;
      var G = F.creation_time,
        H = F.id,
        ca = F.notif_attachments,
        I = F.notif_id,
        J = F.notif_image,
        K = F.notif_type,
        L = F.seen_state,
        M = F.tracking,
        N = p(null),
        O = D == null ? void 0 : D.id,
        P = (D = e) != null ? D : !1;
      e = F.notif_type === 'community_presence_invited_to_post';
      D = babelHelpers['extends'](
        { navigation_source: 'notifications_click' },
        K != null ? { notif_type: K } : null,
      );
      var Q = o(
          function () {
            var a;
            return (a = E) != null ? a : { notif_tracking: M };
          },
          [M, E],
        ),
        da = {
          onNavigate: w,
          passthroughProps: {
            initialTracePolicy: 'comet.notifications',
            notification_id: (w = I) != null ? w : void 0,
            notificationTracking: Q,
            notificationType: K,
            ref: 'notification',
          },
          prefetchQueriesOnHover: C,
          preventLocalNavigation: (w = x) != null ? w : !1,
          productAttribution: { tap_point: 'via_notification' },
          replace: (C = z) != null ? C : void 0,
          routeTarget: P ? 'content' : (x = A) != null ? x : void 0,
          target: B === !0 ? '_blank' : void 0,
          traceParams: D,
          url: (w = a) != null ? w : void 0,
        };
      z = d('useScrollToNotif').useScrollToNotif(a);
      var ea = z[0],
        R = z[1],
        S = R.current;
      C = m(c('CometFocusTableContext'));
      A = C.FocusCell;
      x = C.FocusRow;
      var fa = (B = A) != null ? B : k.Fragment,
        ga = (D = x) != null ? D : k.Fragment;
      n(
        function () {
          N.current != null &&
            S &&
            (c('scrollIntoView')(N.current, {
              behavior: 'auto',
              verticalAlign: 'center',
            }),
            (R.current = !1));
        },
        [S, R],
      );
      var T = c('useHandleUpdateSingleNotifReadState')({
          accessibilityString: h._('__JHASH__c_y3p8iLeMa__JHASH__'),
          mutationLogger: d('CometNotificationsMutationLogger')
            .notificationMarkAsReadStart,
          notifId: H,
          queryID: y,
          seenState: L,
          timestamp: null,
          updateType: 'MARK_READ',
        }),
        U = m(c('CometPassiveGetRouterStateContext')),
        ha = l(
          function () {
            H != null &&
              O != null &&
              (v && v(),
              q.onReady(function (a) {
                a = a.log;
                return a(function () {
                  var a;
                  return {
                    navigation_chain_minified: d(
                      'CometProductAttribution',
                    ).getMinifiedTopMostRouteProductAttribution(U),
                    notification_data: {
                      alert_id: (a = I) != null ? a : '',
                      logger_context: (a = j) != null ? a : '',
                      to_user: O,
                    },
                    ref: i ? 'notifications_route' : 'www_tab',
                    tracking: JSON.stringify(E),
                  };
                });
              }),
              T());
          },
          [O, T, i, j, I, H, v, U, E, e],
        ),
        V = b;
      w = G == null ? void 0 : G.timestamp;
      a = J == null ? void 0 : J.uri;
      z = c('useMenuButtonVisibilityState')();
      var ia = z[0];
      C = z[1];
      var W = C.setListItemHovered,
        ja = C.setMenuBtnFocused,
        ka = C.setMenuBtnHovered,
        la = C.setMenuOpened,
        ma = l(
          function () {
            W(!1);
          },
          [W],
        ),
        na = l(
          function () {
            W(!0);
          },
          [W],
        );
      A = c('useNotificationsImpressionLogger')({
        actorId: O,
        loggerContext: j,
        notifId: I,
        trackingData: Q,
      });
      var X = A[0],
        oa = A[1],
        pa = m(c('CometNotificationsListItemSeenContext')),
        Y = c('useVisibilityObserver')({
          onVisible: function () {
            pa(H);
          },
        }),
        qa = o(
          function () {
            if (j === 'www_tab' || j === 'beeper')
              return c('mergeRefs')(X, N, Y);
            else return N;
          },
          [Y, j, X],
        );
      if (H == null || V == null || a == null || L == null || w == null)
        return null;
      B = new Date(w * 1e3);
      var Z = L === 'SEEN_AND_READ';
      D = (x = F.icon_data) == null ? void 0 : x.reaction_type;
      b = (e = F.icon_data) == null ? void 0 : e.glyph_name;
      J = (G = F.icon_data) == null ? void 0 : G.glyph_icon_url;
      z = c('cometNotificationsListItemIcon')(b, D, J);
      C =
        z != null
          ? {
              backgroundColor: 'transparent',
              icon: k.jsx(c('TetraIcon.react'), { color: 'white', icon: z }),
              size: 28,
              type: 'activityBadge',
            }
          : null;
      D === 17 && (C.overflow = 'visible');
      Q = k.jsx(c('CometNotificationsTimestamp.react'), {
        date: B,
        seenAndRead: Z,
      });
      var ra = {
          addOn: C,
          shape: 'circle',
          size: 56,
          source: { uri: a },
          type: 'profile-photo',
        },
        sa = {
          component: k.jsx(c('CometNotificationsListItemAttachment.react'), {
            date: B,
            notification: F,
            notificationId: (A = F.notif_id) != null ? A : '',
            onPress: T,
          }),
          type: 'override-column',
        };
      w = F == null ? void 0 : F.is_hidden;
      if (w === !0) return null;
      var $ =
        ca.find(function (a) {
          return a.inline_survey != null;
        }) != null;
      x = g == null ? void 0 : (L = g.short_text) == null ? void 0 : L.text;
      var ta = k.jsxs(k.Fragment, {
        children: [
          Q,
          x != null &&
            x !== '' &&
            k.jsxs(k.Fragment, {
              children: [
                k.jsx('span', {
                  'aria-hidden': 'true',
                  className: 'xw3qccf xsgj6o6',
                  children: '\xb7',
                }),
                x,
              ],
            }),
        ],
      });
      return k.jsx(c('FocusWithinHandler.react'), {
        children: function (a, b) {
          return k.jsx(ga, {
            children: k.jsxs('div', {
              className: 'x1n2onr6',
              onMouseEnter: na,
              onMouseLeave: ma,
              ref: qa,
              role: 'row',
              children: [
                oa,
                k.jsx(c('TetraAccessoryListCell.react'), {
                  addOnBottom: sa,
                  addOnPrimary: ra,
                  addOnSecondary: {
                    addOn: Z
                      ? k.jsx('div', { className: 'x1kpxq89 xsmyaan' })
                      : k.jsx(c('CometPressable.react'), {
                          expanding: !0,
                          onPress: T,
                          overlayDisabled: !0,
                          role: 'none',
                          testid: void 0,
                          xstyle: r.pressable,
                          children: k.jsx(c('CometBadge.react'), {
                            color: 'blue',
                            isProfileBadge: !0,
                            size: 12,
                          }),
                        }),
                    type: 'body',
                  },
                  addOnSecondaryVerticalAlign: $ ? 'top' : 'center',
                  body: k.jsxs(k.Fragment, {
                    children: [
                      Z
                        ? null
                        : k.jsx('div', {
                            className: 'xzpqnlu x179tack x10l6tqk xdnwjd9',
                            children: h._('__JHASH__0NXUkEu5yQv__JHASH__'),
                          }),
                      k.jsx(c('CometTextWithEntitiesRelay.react'), {
                        renderers: s,
                        textWithEntities: V,
                        transforms: t,
                      }),
                    ],
                  }),
                  bodyColor: Z ? 'secondary' : 'primary',
                  bodyLineLimit: 3,
                  linkProps: da,
                  meta: ta,
                  metaLineLimit: 1,
                  onPress: ha,
                  role: 'none',
                  selected: ea && ba,
                  testid: void 0,
                }),
                K !== 'friend' && K !== 'page_invite' && !$
                  ? k.jsx(fa, {
                      children: k.jsx(
                        c('CometNotificationsDropdownMenuButton.react'),
                        {
                          hidden: f || P || (!(a && b) && !ia),
                          notification: F,
                          onFocusChange: ja,
                          onHoverChange: ka,
                          onMenuStateChange: la,
                          queryId: y,
                          userId: O,
                        },
                      ),
                    })
                  : null,
              ],
            }),
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = k.memo(a);
    g['default'] = e;
  },
  98,
);
