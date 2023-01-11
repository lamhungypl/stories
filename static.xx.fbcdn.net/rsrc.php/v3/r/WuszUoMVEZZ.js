/*FB_PKG_DELIM*/

__d(
  'FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4964052750352378';
  },
  null,
);
__d(
  'FriendingCometFriendsBadgeCountClearMutation.graphql',
  ['FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'bookmarkIDs',
        },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'hasBookmark' },
        d = { defaultValue: null, kind: 'LocalArgument', name: 'hasTopTab' },
        e = { defaultValue: null, kind: 'LocalArgument', name: 'input' },
        f = [{ kind: 'Variable', name: 'data', variableName: 'input' }],
        g = [
          {
            kind: 'Variable',
            name: 'bookmark_ids',
            variableName: 'bookmarkIDs',
          },
          { kind: 'Literal', name: 'environment', value: 'COMET' },
          { kind: 'Literal', name: 'folder_id', value: 'PRODUCT' },
          { kind: 'Literal', name: 'sections', value: ['FACEBOOK_APP'] },
        ],
        h = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        i = [
          {
            kind: 'Literal',
            name: 'bookmark_render_location',
            value: 'COMET_LEFT_NAV',
          },
        ],
        j = {
          condition: 'hasBookmark',
          kind: 'Condition',
          passingValue: !0,
          selections: [
            {
              alias: 'bookmark_unread_count',
              args: i,
              kind: 'ScalarField',
              name: 'unread_count',
              storageKey:
                'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
            },
          ],
        };
      i = {
        alias: 'bookmark_unread_count_string',
        args: i,
        kind: 'ScalarField',
        name: 'unread_count_string',
        storageKey:
          'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
      };
      var k = {
          condition: 'hasTopTab',
          kind: 'Condition',
          passingValue: !0,
          selections: [
            {
              alias: 'tab_unread_count',
              args: [
                {
                  kind: 'Literal',
                  name: 'bookmark_render_location',
                  value: 'COMET_TOP_TAB',
                },
              ],
              kind: 'ScalarField',
              name: 'unread_count',
              storageKey:
                'unread_count(bookmark_render_location:"COMET_TOP_TAB")',
            },
          ],
        },
        l = {
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
              concreteType: 'FriendConfirmedNotificationsConnection',
              kind: 'LinkedField',
              name: 'friend_confirmed_notifications',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'FriendConfirmedNotificationsEdge',
                  kind: 'LinkedField',
                  name: 'edges',
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'is_unseen',
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
              concreteType: 'FriendingPossibilitiesConnection',
              kind: 'LinkedField',
              name: 'friending_possibilities',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'FriendingPossibilitiesEdge',
                  kind: 'LinkedField',
                  name: 'edges',
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'is_seen',
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
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e],
          kind: 'Fragment',
          metadata: null,
          name: 'FriendingCometFriendsBadgeCountClearMutation',
          selections: [
            {
              alias: null,
              args: f,
              concreteType: 'ViewerFriendsBadgeCountClearResponsePayload',
              kind: 'LinkedField',
              name: 'viewer_friends_badge_count_clear',
              plural: !1,
              selections: [
                {
                  alias: 'viewer_for_badge_count',
                  args: null,
                  concreteType: 'Viewer',
                  kind: 'LinkedField',
                  name: 'viewer',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: g,
                      concreteType: 'BookmarksConnection',
                      kind: 'LinkedField',
                      name: 'bookmarks',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'BookmarksEdge',
                          kind: 'LinkedField',
                          name: 'edges',
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'Bookmark',
                              kind: 'LinkedField',
                              name: 'node',
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: 'LinkedField',
                                  name: 'bookmarked_node',
                                  plural: !1,
                                  selections: [h],
                                  storageKey: null,
                                },
                                j,
                                i,
                                k,
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
                l,
              ],
              storageKey: null,
            },
          ],
          type: 'Mutation',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [a, d, c, e],
          kind: 'Operation',
          name: 'FriendingCometFriendsBadgeCountClearMutation',
          selections: [
            {
              alias: null,
              args: f,
              concreteType: 'ViewerFriendsBadgeCountClearResponsePayload',
              kind: 'LinkedField',
              name: 'viewer_friends_badge_count_clear',
              plural: !1,
              selections: [
                {
                  alias: 'viewer_for_badge_count',
                  args: null,
                  concreteType: 'Viewer',
                  kind: 'LinkedField',
                  name: 'viewer',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: g,
                      concreteType: 'BookmarksConnection',
                      kind: 'LinkedField',
                      name: 'bookmarks',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'BookmarksEdge',
                          kind: 'LinkedField',
                          name: 'edges',
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'Bookmark',
                              kind: 'LinkedField',
                              name: 'node',
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: 'LinkedField',
                                  name: 'bookmarked_node',
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: '__typename',
                                      storageKey: null,
                                    },
                                    h,
                                  ],
                                  storageKey: null,
                                },
                                j,
                                i,
                                k,
                                h,
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
                l,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b(
            'FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation',
          ),
          metadata: {},
          name: 'FriendingCometFriendsBadgeCountClearMutation',
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
  'NullStateNotifications',
  ['cr:3585'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = b('cr:3585');
  },
  98,
);
__d(
  'NullStateNotificationsFB',
  ['IconSource'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      dark: new (c('IconSource'))(
        'nullStateGlyphs',
        '/images/comet/empty_states_icons/notifications/null_states_notifications_dark_mode.svg',
        112,
      ),
      default: new (c('IconSource'))(
        'nullStateGlyphs',
        '/images/comet/empty_states_icons/notifications/null_states_notifications_gray_wash.svg',
        112,
      ),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'FriendingCometFriendsBadgeCountClearMutation',
  [
    'CometHomepageBadgeCountClearingMutationHelper',
    'CometRelay',
    'FriendingCometFriendsBadgeCountClearMutation.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = { bookmarkIDs: ['2356318349'], hasBookmark: !0, hasTopTab: !0 },
      j =
        h !== void 0
          ? h
          : (h = b('FriendingCometFriendsBadgeCountClearMutation.graphql'));
    function k(a) {
      d('CometHomepageBadgeCountClearingMutationHelper').clearBadgeCount(
        babelHelpers['extends']({}, i, { store: a }),
      );
    }
    var l = function (a) {
      d('CometHomepageBadgeCountClearingMutationHelper').onCompleted(
        i.bookmarkIDs,
        a == null
          ? void 0
          : (a = a.viewer_friends_badge_count_clear) == null
          ? void 0
          : a.viewer_for_badge_count,
      );
    };
    function a(a, b, c) {
      var e = function (a) {
        if (b == null) return;
        k(a);
      };
      return d('CometRelay').commitMutation(a, {
        mutation: j,
        onCompleted: l,
        onError: c,
        optimisticUpdater: e,
        variables: babelHelpers['extends']({}, i, { input: b }),
      });
    }
    g.commit = a;
  },
  98,
);
