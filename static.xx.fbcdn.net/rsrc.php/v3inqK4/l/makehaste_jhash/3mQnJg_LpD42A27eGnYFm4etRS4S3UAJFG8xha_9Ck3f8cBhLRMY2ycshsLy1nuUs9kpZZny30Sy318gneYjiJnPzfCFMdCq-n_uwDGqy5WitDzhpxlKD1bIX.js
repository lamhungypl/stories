/*FB_PKG_DELIM*/

__d(
  'VolunteeringOneClickCreationDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5390866184341330';
  },
  null,
);
__d(
  'VolunteeringOneClickCreationDialogQuery$Parameters',
  ['VolunteeringOneClickCreationDialogQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('VolunteeringOneClickCreationDialogQuery_facebookRelayOperation'),
        metadata: {},
        name: 'VolunteeringOneClickCreationDialogQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'WhatsAppCometPagesComposerInterceptionDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5487007661388072';
  },
  null,
);
__d(
  'WhatsAppCometPagesComposerInterceptionDialogQuery$Parameters',
  ['WhatsAppCometPagesComposerInterceptionDialogQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'WhatsAppCometPagesComposerInterceptionDialogQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'WhatsAppCometPagesComposerInterceptionDialogQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometComposerInterceptionPluginUtilsQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5970639646279568';
  },
  null,
);
__d(
  'CometComposerInterceptionPluginUtilsQuery.graphql',
  ['CometComposerInterceptionPluginUtilsQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'params' },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'target_id' },
        d = { defaultValue: null, kind: 'LocalArgument', name: 'target_type' },
        e = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'product_type',
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'description',
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          concreteType: 'UnifiedInterceptionLocation',
          kind: 'LinkedField',
          name: 'location',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'address',
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
              args: null,
              kind: 'ScalarField',
              name: 'latitude',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'longitude',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'title',
          storageKey: null,
        };
      h = [
        {
          alias: null,
          args: [
            { kind: 'Variable', name: 'target_id', variableName: 'target_id' },
            {
              kind: 'Variable',
              name: 'target_type',
              variableName: 'target_type',
            },
          ],
          concreteType: 'UnifiedInterceptionQuery',
          kind: 'LinkedField',
          name: 'unified_interception',
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: 'Variable',
                  name: 'request_param',
                  variableName: 'params',
                },
              ],
              concreteType: 'UnifiedInterceptionResponse',
              kind: 'LinkedField',
              name: 'decision',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'flow_type',
                  storageKey: null,
                },
                e,
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'should_perform_interception',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'auxiliary_data',
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
                        f,
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'job_type',
                          storageKey: null,
                        },
                        g,
                        h,
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Wage',
                          kind: 'LinkedField',
                          name: 'wage',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'max',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'min',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'type',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: 'UnifiedInterceptionJobAuxiliaryData',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        h,
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'activity_title',
                          storageKey: null,
                        },
                        f,
                        g,
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'start_time',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'end_time',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'location_type',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'link_type',
                          storageKey: null,
                        },
                        e,
                      ],
                      type: 'XFBUnifiedInterceptionVolunteeringAuxiliaryData',
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
      ];
      return {
        fragment: {
          argumentDefinitions: [a, c, d],
          kind: 'Fragment',
          metadata: null,
          name: 'CometComposerInterceptionPluginUtilsQuery',
          selections: h,
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [d, c, a],
          kind: 'Operation',
          name: 'CometComposerInterceptionPluginUtilsQuery',
          selections: h,
        },
        params: {
          id: b(
            'CometComposerInterceptionPluginUtilsQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'CometComposerInterceptionPluginUtilsQuery',
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
  'CometComposerInterceptionRequestHandlerQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5635935316473172';
  },
  null,
);
__d(
  'CometComposerInterceptionRequestHandlerQuery.graphql',
  ['CometComposerInterceptionRequestHandlerQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'params' },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'target_id' },
        d = { defaultValue: null, kind: 'LocalArgument', name: 'target_type' },
        e = [
          {
            alias: null,
            args: [
              {
                kind: 'Variable',
                name: 'target_id',
                variableName: 'target_id',
              },
              {
                kind: 'Variable',
                name: 'target_type',
                variableName: 'target_type',
              },
            ],
            concreteType: 'UnifiedInterceptionQuery',
            kind: 'LinkedField',
            name: 'unified_interception',
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: 'Variable',
                    name: 'request_param',
                    variableName: 'params',
                  },
                ],
                concreteType: 'UnifiedInterceptionResponse',
                kind: 'LinkedField',
                name: 'decision',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'product_type',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'should_perform_interception',
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
          argumentDefinitions: [a, c, d],
          kind: 'Fragment',
          metadata: null,
          name: 'CometComposerInterceptionRequestHandlerQuery',
          selections: e,
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [d, c, a],
          kind: 'Operation',
          name: 'CometComposerInterceptionRequestHandlerQuery',
          selections: e,
        },
        params: {
          id: b(
            'CometComposerInterceptionRequestHandlerQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'CometComposerInterceptionRequestHandlerQuery',
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
  'useCometComposerUnifiedInterceptors_intercept_configs.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometComposerUnifiedInterceptors_intercept_configs',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'PagesComposerInterceptionConfig',
          kind: 'LinkedField',
          name: 'config',
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'interception_product_type',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'is_eligible_for_interception',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'whitelisted_attachment_types',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'blacklisted_attachment_types',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'supported_locales',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'ComposerInterception',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5076202109107232';
  },
  null,
);
__d(
  'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation.graphql',
  [
    'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'input' }],
        c = [
          {
            alias: null,
            args: [
              { kind: 'Variable', name: 'input_data', variableName: 'input' },
            ],
            concreteType: 'VolunteeringEventDeleteResponsePayload',
            kind: 'LinkedField',
            name: 'volunteering_event_delete',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'volunteering_event_id',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'post_delete_redirect_url',
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
          name: 'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation',
          selections: c,
          type: 'Mutation',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation',
          selections: c,
        },
        params: {
          id: b(
            'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation_facebookRelayOperation',
          ),
          metadata: {},
          name: 'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation',
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
  'CommunityHelpLoggingDataContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext();
    b.displayName = 'CommunityHelpLoggingContext';
    c = b;
    g['default'] = c;
  },
  98,
);
__d(
  'useCommunityHelpLoggingDefaultData',
  ['CommunityHelpLoggingDataContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      return h(c('CommunityHelpLoggingDataContext'));
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CommunityHelpUXComponent',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ABOUT: 'about',
      AYMT: 'aymt',
      BOOKMARK: 'bookmark',
      CH_ACTION_UNIT: 'ch_action_unit',
      CH_FEED_NULL_STATE: 'ch_feed_null_state',
      CH_KEYBOARD_SEARCH: 'ch_keyboard_search',
      CH_MODAL_UPSELL: 'ch_modal_upsell',
      CH_NOT_AVAILABLE_LEARN_MORE_BUTTON: 'ch_not_available_learn_more_button',
      CH_SEARCH_BUTTON: 'ch_search_button',
      CH_SEE_MATCHES_BUTTON: 'ch_see_matches_button',
      CH_SHARE_SHEET: 'ch_share_sheet',
      CH_YOUR_POSTS_SECTION: 'ch_your_posts_section',
      CHANGE_LOCATION: 'change_location',
      COLLEGES_PAGE_COMMUNITY_HELP_CARD: 'colleges_page_community_help_card',
      COMMUNITY_HELP_ATTACHMENT: 'community_help_attachment',
      COMMUNITY_HELP_DRIVE_MANAGEMENT_PLEDGE:
        'community_help_drive_management_pledge',
      COMMUNITY_HELP_DRIVE_PLEDGES_LIST: 'community_help_drive_pledges_list',
      COMMUNITY_HELP_DRIVES_DONORS_CARD: 'community_help_drives_donors_card',
      COMMUNITY_HELP_DRIVES_FEED_STORY: 'community_help_drives_feed_story',
      COMMUNITY_HELP_DRIVES_QP: 'community_help_drives_qp',
      COMMUNITY_HELP_FEED_STORY_HEADER: 'community_help_feed_story_header',
      COMMUNITY_HELP_FEED_STORY_MEDIA: 'community_help_feed_story_media',
      COMMUNITY_HELP_FEED_STORY_TEXT: 'community_help_feed_story_text',
      COMMUNITY_HELP_FOLLOW_QP: 'community_help_follow_qp',
      COMMUNITY_HELP_FOOD_QP: 'community_help_food_qp',
      COMMUNITY_HELP_INVITE: 'community_help_invite',
      COMMUNITY_HELP_IWD_QP: 'community_help_iwd_qp',
      COMMUNITY_HELP_IWD_TOP_BANNER: 'community_help_iwd_top_banner',
      COMMUNITY_HELP_LISTING: 'community_help_listing',
      COMMUNITY_HELP_LISTING_DETAILS_PAGE:
        'community_help_listing_details_page',
      COMMUNITY_HELP_LISTING_HSCROLL: 'community_help_listing_hscroll',
      COMMUNITY_HELP_LISTING_HSCROLL_TOAST:
        'community_help_listing_hscroll_toast',
      COMMUNITY_HELP_LISTING_SELF: 'community_help_listing_self',
      COMMUNITY_HELP_PETS_QP: 'community_help_pets_qp',
      COMMUNITY_HELP_SEARCH_SHORTCUT: 'community_help_search_shortcut',
      COMMUNITY_HELP_UKRAINE_BANNER: 'community_help_ukraine_banner',
      COMMUNITY_HELP_UPSELL: 'community_help_upsell',
      COMMUNITY_HELP_VOLUNTEERING_PAGE_QP: 'volunteering_job_qp',
      COMPOSER: 'composer',
      COMPOSER_DRAFT: 'composer_draft',
      COMPOSER_POSTING_GUIDELINES: 'composer_posting_guidelines',
      COMPOSER_SELECTOR: 'composer_selector',
      CONNECT_BOTTOM_SHEET: 'connect_bottom_sheet',
      CONNECT_BOTTOM_SHEET_TOAST: 'connect_bottom_sheet_toast',
      CREATE_ANOTHER_OPPORTUNITY_CARD: 'create_another_opportunity_card',
      CREATE_DUPLICATE_OPPORTUNITY_CARD: 'create_duplicate_opportunity_card',
      CUSTOM_INTERCEPT_PAGE_COMPOSER: 'custom_intercept_page_composer',
      DEEPLINK: 'deeplink',
      DRIVE: 'drive',
      DRIVE_COMPOSER: 'drive_composer',
      DRIVE_COMPOSER_CATEGORY_SELECTOR: 'drive_composer_category_selector',
      DRIVE_COMPOSER_DETAILS: 'drive_composer_details',
      DRIVE_COMPOSER_GOAL: 'drive_composer_goal',
      DRIVE_COMPOSER_INTRO: 'drive_composer_intro',
      DRIVE_COMPOSER_ITEMS: 'drive_composer_items',
      DRIVE_COMPOSER_NPO_SELECTOR: 'drive_composer_npo_selector',
      DRIVE_COMPOSER_REVIEW: 'drive_composer_review',
      DRIVE_COMPOSER_TEMPLATE_DETAILS: 'drive_composer_template_details',
      DRIVE_COMPOSER_TYPE_SELECTOR: 'drive_composer_type_selector',
      DRIVE_COMPOSER_WISHLIST: 'drive_composer_wishlist',
      DRIVE_CONTRIBUTE_PROMPT: 'drive_contribute_prompt',
      DRIVE_CONTRIBUTION_BOTTOMSHEET: 'drive_contribution_bottomsheet',
      DRIVE_CONTRIBUTION_COMPOSER: 'drive_contribution_composer',
      DRIVE_DESCRIPTION_TEMPLATE: 'drive_description_template',
      DRIVE_DESCRIPTION_TEMPLATE_FINISH: 'drive_description_template_finish',
      DRIVE_DESCRIPTION_TEMPLATE_WHAT_ITEMS:
        'drive_description_template_what_items',
      DRIVE_DESCRIPTION_TEMPLATE_WHO: 'drive_description_template_who',
      DRIVE_DESCRIPTION_TEMPLATE_WHY_ITEMS:
        'drive_description_template_why_items',
      DRIVE_DETAILS_INVITE_SECTION: 'drive_details_invite_section',
      DRIVE_DETAILS_PAGE: 'drive_details_page',
      DRIVE_EMPTY_HSCROLL: 'drive_empty_hscroll',
      DRIVE_HSCROLL: 'drive_hscroll',
      DRIVE_INVITE: 'drive_invite',
      DRIVE_INVITE_DIALOG: 'drive_invite_dialog',
      DRIVE_PIVOT_LINK: 'drive_pivot_link',
      DRIVE_PLEDGE_CONFIRM_BOTTOM_SHEET: 'drive_pledge_confirm_bottom_sheet',
      DRIVE_PLEDGE_POSTS: 'drive_pledge_posts',
      DRIVE_PLEDGE_UPDATE_BOTTOM_SHEET: 'drive_pledge_update_bottom_sheet',
      DRIVE_SEARCH_SHORTCUT: 'drive_search_shortcut',
      DRIVE_STORY_CREATE_BUMPER: 'drive_story_create_bumper',
      DRIVE_STORY_INVITE_BUMPER: 'drive_story_invite_bumper',
      DRIVE_TEMPLATE_PIVOT_LINK: 'drive_template_pivot_link',
      DRIVE_UPDATE_COMPOSER: 'drive_update_composer',
      DRIVE_UPDATES: 'drive_updates',
      DRIVE_WRITE_A_POST: 'drive_write_a_post',
      DRIVES_GIVING_TUESDAY_QP: 'drives_giving_tuesday_qp',
      DRIVES_GIVING_TUESDAY_QP_HOLIDAYS: 'drives_giving_tuesday_qp_holidays',
      DRIVES_GIVING_TUESDAY_QP_SIMPLE: 'drives_giving_tuesday_qp_simple',
      DRIVES_KENTUCKY_TORNADO_QP: 'drives_kentucky_tornado_qp',
      DRIVES_LOCAL_TEST_QP: 'drives_local_test_qp',
      DRIVES_PAGE_LIKERS_QP: 'drives_page_likers_qp',
      EDUCATION_QP: 'education_qp',
      EXAMPLE: 'example',
      EXPANDED_FILTERS: 'expanded_filters',
      FB_COMPOSER: 'fb_composer',
      FEED_FILTER: 'feed_filter',
      FILTER_CATEGORY: 'filter_category',
      FILTER_DISTANCE: 'filter_distance',
      FILTER_LISTING_TYPE: 'filter_listing_type',
      FOLLOW_CTA: 'follow_cta',
      FOLLOW_NOTIFICATION_SETTINGS: 'follow_notification_settings',
      FOLLOW_QP: 'follow_qp',
      FRICTION_DIALOG: 'friction_dialog',
      GROUP_POST_CH_UPSELL: 'group_post_ch_upsell',
      GROUPS_COMMUNITY_HELP_UPSELL: 'groups_community_help_upsell',
      GROUPS_COMMUNITY_HELP_UPSELL_HSCROLL:
        'groups_community_help_upsell_hscroll',
      GROUPS_ORGANIZERS_VOLUNTEERING_UPSELL:
        'groups_organizers_volunteering_upsell',
      HEADER: 'header',
      HSCROLL: 'hscroll',
      INTERCEPT_PAGE_COMPOSER: 'intercept_page_composer',
      LOCAL_NPO_FUNDRAISER: 'local_npo_fundraiser',
      LOCAL_NPO_FUNDRAISER_HSCROLL: 'local_npo_fundraiser_hscroll',
      LOST_ITEM_COMPOSER_DETAILS: 'lost_item_composer_details',
      LOST_ITEM_COMPOSER_LOCATION: 'lost_item_composer_location',
      LOST_ITEM_COMPOSER_REVIEW: 'lost_item_composer_review',
      LOST_ITEM_HSCROLL: 'lost_item_hscroll',
      MANAGE_VOLUNTEER_DIALOG: 'manage_volunteer_dialog',
      MESSAGING_BOTTOM_SHEET: 'messaging_bottom_sheet',
      MORE_OPTIONS_BOTTOM_SHEET: 'more_options_bottom_sheet',
      NATIVE_COMPOSER_SPROUT_FB: 'native_composer_sprout_fb',
      NATIVE_COMPOSER_SPROUT_GROUP: 'native_composer_sprout_group',
      NATIVE_COMPOSER_SPROUT_PAGE: 'native_composer_sprout_page',
      NH_GIVING_MARKETPLACE_DETAILS: 'nh_giving_marketplace_details',
      NOTIF_AUTO_CLOSE_LISTING: 'notif_autoclose_listing',
      NOTIF_AUTO_CLOSE_LISTING_REMINDER: 'notif_autoclose_listing_reminder',
      NOTIF_CH_DRIVE_NEAR_EXPIRY: 'notif_ch_drive_near_expiry',
      NOTIF_CH_DRIVE_SELF_SEEDING: 'notif_ch_drive_self_seeding',
      NOTIF_CH_DRIVE_UNACTIVATED: 'notif_ch_drive_unactivated',
      NOTIF_CH_FRIEND_CREATED_DRIVE: 'notif_ch_friend_created_drive',
      NOTIF_CORONAVIRUS_UPDATE: 'notif_coronavirus_update',
      NOTIF_DONATION_INVITE: 'notif_donation_invite',
      NOTIF_DRIVE_CREATED_BY_PAGE: 'notif_drive_created_by_page',
      NOTIF_DRIVE_CREATED_ON_YOUR_BEHALF: 'notif_drive_created_on_your_behalf',
      NOTIF_DRIVE_INVITATION: 'notif_drive_invitation',
      NOTIF_DRIVE_TEMPLATE_CREATED_BY_PAGE: 'notif_template_created_by_page',
      NOTIF_DRIVE_UPDATE_POST: 'notif_drive_update_post',
      NOTIF_FRIEND_CONTRIBUTION: 'notif_ch_friend_contribution',
      NOTIF_FRIEND_INVITE: 'notif_friend_invite',
      NOTIF_FRIEND_OFFER: 'notif_friend_offer',
      NOTIF_FRIEND_REQUEST: 'notif_friend_request',
      NOTIF_FRIEND_SAFE: 'notif_friend_safe',
      NOTIF_INVITE_VIA_RIGHT_SIZE: 'notif_invite_via_right_size',
      NOTIF_LISTING_DRAFT_REMINDER: 'notif_listing_draft_reminder',
      NOTIF_LISTING_REVIEW_APPROVED: 'notif_listing_review_approved',
      NOTIF_NEWS_UPDATE: 'motif_news_update',
      NOTIF_OFFER_LISTING: 'notif_ch_offer_listing',
      NOTIF_REQUEST_LISTING: 'notif_ch_request_listing',
      NOTIF_VOLUNTEERING_JOB_CLOSED: 'notif_volunteering_job_closed',
      NPO_DRIVE_COMPOSER_TYPE_SELECTOR: 'npo_drive_composer_type_selector',
      NPO_TEMPLATE_DRIVE_COMPOSER_DETAILS:
        'npo_template_drive_composer_details',
      NPO_TEMPLATE_DRIVE_COMPOSER_DROPOFF:
        'npo_template_drive_composer_dropoff',
      NPO_TEMPLATE_DRIVE_COMPOSER_EMAIL: 'npo_template_drive_composer_email',
      NPO_TEMPLATE_DRIVE_COMPOSER_REVIEW: 'npo_template_drive_composer_review',
      NPO_TEMPLATE_LINK_WISHLIST_INTRO: 'npo_template_link_wishlist_intro',
      NPO_WALMART_WISHLIST_COMPOSER_DETAILS:
        'npo_walmart_wishlist_composer_details',
      NPO_WALMART_WISHLIST_MOBILE_ERROR_PAGE:
        'npo_walmart_wishlist_mobile_error_page',
      NPO_WALMART_WISHLIST_NO_ADMIN_ERROR_PAGE:
        'npo_walmart_wishlist_no_admin_error_page',
      NPO_WALMART_WISHLIST_SPLASH_PAGE: 'npo_walmart_wishlist_splash_page',
      NULL_PAGE_SOURCE: 'null_page_source',
      OUTRO_BEGIN: 'outro_begin',
      OUTRO_DONATE: 'outro_donate',
      OUTRO_INVITE: 'outro_invite',
      OUTRO_SHARE: 'outro_share',
      OUTRO_SHARE_IN_GROUP: 'outro_share_in_group',
      PAGE_DRIVE_DETAILS_PAGE: 'page_drive_details_page',
      PAGES_COMPOSER: 'pages_composer',
      PAGES_COMPOSER_ENTRY_BUTTON: 'pages_composer_entry_button',
      PLACEHOLDER_FOR_SOURCE_COMPONENT_PLEASE_ADD_A_TODO:
        'placeholder_for_source_component_please_add_a_todo',
      POST_TYPE_FILTER: 'post_type_filter',
      REMOVE_VOLUNTEER_BOTTOM_SHEET: 'remove_volunteer_bottom_sheet',
      REPORT_LOST_ITEM: 'report_lost_item',
      REQUEST_OFFER_HSCROLL: 'request_offer_hscroll',
      REQUEST_OFFER_PIVOT_LINK: 'request_offer_pivot_link',
      SHARE_A_MEAL_PIVOT_LINK: 'share_a_meal_pivot_link',
      SHARE_COMMUNITY_HELP_COMPOSER: 'share_community_help_composer',
      SHARE_COMPOSER: 'share_composer',
      SHARE_DRIVE_COMPOSER: 'share_drive_composer',
      SHARE_SHEET: 'share_sheet',
      SHARE_TO_GROUPS_DIALOG: 'share_to_groups_dialog',
      SHARE_TO_GROUPS_JOIN_SUGGESTION: 'share_to_groups_join_suggestion',
      SHARE_TO_GROUPS_MENU_ITEM: 'share_to_groups_menu_item',
      SIGNUP_CANCEL_BOTTOMSHEET: 'signup_cancel_bottomsheet',
      SIGNUP_CTA: 'signup_cta',
      SORT_FILTER: 'sort_filter',
      STICKY_FOOTER: 'sticky_footer',
      TEST_COMPONENT: 'test_component',
      THEME_HSCROLL: 'theme_hscroll',
      THEME_HSCROLL_CARD: 'theme_hscroll_card',
      THEME_SELECTOR: 'theme_selector',
      UNICEF_QP: 'unicef_qp',
      UNKNOWN: 'unknown',
      VOLUNTEER_LIST_VOLUNTEER: 'volunteer_list_volunteer',
      VOLUNTEERING_ACTIVITY: 'volunteering_activity',
      VOLUNTEERING_AUTOCONVERT: 'volunteering_autoconvert',
      VOLUNTEERING_AUTOCONVERT_DIALOG: 'volunteering_autoconvert_dialog',
      VOLUNTEERING_AUTOCONVERT_PAGE_COMPOSER: 'auto_convert_page_composer',
      VOLUNTEERING_AUTOCONVERT_UPSELL: 'volunteering_auto_convert_upsell',
      VOLUNTEERING_COMPOSER_AGGREGATED_SCREEN:
        'volunteering_composer_aggregated_screen',
      VOLUNTEERING_COMPOSER_SELECTOR_CONNECTIONS:
        'volunteering_composer_selector_connections',
      VOLUNTEERING_COMPOSER_SELECTOR_ROLES:
        'volunteering_composer_selector_roles',
      VOLUNTEERING_COMPOSER_SELECTOR_SIGNUPS:
        'volunteering_composer_selector_signups',
      VOLUNTEERING_COMPOSER_TYPE_SELECTOR:
        'volunteering_composer_type_selector',
      VOLUNTEERING_CONNECTIONS: 'volunteering_connections',
      VOLUNTEERING_CONNECTIONS_COMPOSER: 'volunteering_connections_composer',
      VOLUNTEERING_CONNECTIONS_COMPOSER_PREVIEW:
        'volunteering_connections_composer_preview',
      VOLUNTEERING_CONTEXT_ROW: 'volunteering_context_row',
      VOLUNTEERING_EVENT: 'volunteering_event',
      VOLUNTEERING_EVENT_CARD: 'volunteering_event_card',
      VOLUNTEERING_EVENT_COMPOSER_ACTIVITIES:
        'volunteering_event_composer_activities',
      VOLUNTEERING_EVENT_COMPOSER_ADDITIONAL_DETAILS:
        'volunteering_event_composer_additional_details',
      VOLUNTEERING_EVENT_COMPOSER_DETAILS:
        'volunteering_event_composer_details',
      VOLUNTEERING_EVENT_COMPOSER_PREVIEW:
        'volunteering_event_composer_preview',
      VOLUNTEERING_EVENT_CREATION_OUTRO_DIALOG:
        'volunteering_event_creation_outro_dialog',
      VOLUNTEERING_EVENT_INVITE_DIALOG: 'volunteering_event_invite_dialog',
      VOLUNTEERING_EVENT_LOCAL_VOLUNTEER_QP:
        'volunteering_event_local_volunteer_qp',
      VOLUNTEERING_EVENT_PAGE_QP: 'volunteering_event_page_qp',
      VOLUNTEERING_EVENT_SHIFT_DETAILS_MORE_MENU:
        'volunteering_event_shift_details_more_menu',
      VOLUNTEERING_EVENT_SIGNUP_COMPOSER: 'volunteering_event_signup_composer',
      VOLUNTEERING_EVENT_USER_CREATED_QP: 'volunteering_event_user_created_qp',
      VOLUNTEERING_EVENT_VOLUNTEER_LIST: 'volunteering_event_volunteer_list',
      VOLUNTEERING_GROUPS_ORGANIZERS_UPSELL:
        'volunteering_groups_organizer_upsell',
      VOLUNTEERING_HSCROLL: 'volunteering_hscroll',
      VOLUNTEERING_HUB: 'volunteering_hub',
      VOLUNTEERING_HUB_UPSELL: 'volunteering_hub_upsell',
      VOLUNTEERING_INTERCEPT_DIALOG: 'volunteering_intercept_dialog',
      VOLUNTEERING_INTERESTED_NOTIF: 'volunteering_interested_notif',
      VOLUNTEERING_INVITE_HSCROLL: 'volunteering_invite_hscroll',
      VOLUNTEERING_JOB: 'volunteering_job',
      VOLUNTEERING_JOB_AYMT: 'volunteering_job_aymt',
      VOLUNTEERING_JOB_COMPOSER: 'volunteering_job_composer',
      VOLUNTEERING_JOB_EDIT_COMPOSER: 'volunteering_job_edit_composer',
      VOLUNTEERING_JOB_MANAGE_PAGE_TAB: 'volunteering_job_manage_page_tab',
      VOLUNTEERING_JOB_PAGE_QP: 'volunteering_job_page_qp',
      VOLUNTEERING_JOBS_HSCROLL: 'volunteering_jobs_hscroll',
      VOLUNTEERING_LINK_TO_VOLO_HUB: 'volunteering_link_to_volo_hub',
      VOLUNTEERING_LIST_CARD: 'volunteering_list_card',
      VOLUNTEERING_LIST_DISABLE_SETTING: 'volunteering_list_disable_setting',
      VOLUNTEERING_LIST_MANAGEMENT: 'manage_volunteering_list_dialog',
      VOLUNTEERING_LIST_MESSENGER_OPT_IN: 'volunteering_list_messenger_opt_in',
      VOLUNTEERING_LIST_UPSELL: 'volunteering_list_upsell',
      VOLUNTEERING_NOTIF_CLOSE_THE_LOOP: 'volunteering_notif_close_the_loop',
      VOLUNTEERING_NOTIF_CONNECTIONS_LAST_CHANCE:
        'volunteering_notif_connections_last_chance',
      VOLUNTEERING_NOTIF_LIST_OPPORTUNITY_CREATED:
        'volunteering_notif_list_opportunity_created',
      VOLUNTEERING_NOTIF_LIST_SIGN_UP: 'volunteering_notif_list_sign_up',
      VOLUNTEERING_NOTIF_SHIFT_INVITE: 'volunteering_notif_shift_invite',
      VOLUNTEERING_NOTIF_SHIFT_REMINDER: 'volunteering_notif_shift_reminder',
      VOLUNTEERING_NOTIF_SIGNUPS_COMPLETION_REMINDER:
        'volunteering_notif_signups_completion_reminder',
      VOLUNTEERING_NOTIF_SIGNUPS_CREATED: 'volunteering_notif_signups_created',
      VOLUNTEERING_NOTIF_SIGNUPS_CREATOR_INVITE:
        'volunteering_notif_signups_creator_invite',
      VOLUNTEERING_NOTIF_SIGNUPS_FRIEND_SIGN_UP:
        'volunteering_notif_signups_friend_sign_up',
      VOLUNTEERING_NOTIF_SIGNUPS_LAST_CHANCE:
        'volunteering_notif_signups_last_chance',
      VOLUNTEERING_NOTIF_SIGNUPS_SHARE_REMINDER:
        'volunteering_notif_signups_share_reminder',
      VOLUNTEERING_NOTIF_SIGNUPS_SIGN_UP: 'volunteering_notif_signups_sign_up',
      VOLUNTEERING_NOTIF_SIGNUPS_SIGN_UP_FOR_PAGE:
        'volunteering_notif_signups_sign_up_for_page',
      VOLUNTEERING_ONE_CLICK_CREATION_DIALOG:
        'volunteering_one_click_creation_dialog',
      VOLUNTEERING_ORGANIZER_VOLUNTEER_LIST:
        'volunteering_organizer_volunteer_list',
      VOLUNTEERING_PAGE_ADMIN_UPSELL: 'volunteering_page_admin_upsell',
      VOLUNTEERING_PAGE_UPSELL: 'volunteering_page_upsell',
      VOLUNTEERING_PIVOT_LINK: 'volunteering_pivot_link',
      VOLUNTEERING_RECENTLY_VIEWED_HSCROLL:
        'volunteering_recently_viewed_hscroll',
      VOLUNTEERING_SELECTOR_PAGE_QP: 'volunteering_selector_page_qp',
      VOLUNTEERING_SHIFT: 'volunteering_shift',
      VOLUNTEERING_SHIFT_ATTACHMENT: 'volunteering_shift_attachment',
      VOLUNTEERING_SIGNED_UP_HSCROLL: 'volunteering_signed_up_hscroll',
      VOLUNTEERING_TAB: 'volunteering_tab',
      VOLUNTEERING_USER_CREATION_UPSELL: 'volunteering_user_creation_upsell',
      WISHLIST_DRIVE_HSCROLL: 'wishlist_drive_hscroll',
      WISHLIST_DRIVES_PAGE_LIKERS_QP: 'wishlist_drives_page_likers_qp',
      YOUR_POSTS_HSCROLL: 'your_posts_hscroll',
    });
    f['default'] = a;
  },
  66,
);
__d(
  'CommunityHelpUXSurface',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BOOKMARK: 'bookmark',
      COMMUNITY_GIVING: 'community_giving',
      COMMUNITY_HELP: 'community_help',
      COMMUNITY_HELP_FEED_SUBPAGE: 'community_help_feed_subpage',
      COMMUNITY_HELP_LISTING_DETAILS_PAGE:
        'community_help_listing_details_page',
      COMMUNITY_HELP_MATCHES: 'community_help_matches',
      COMMUNITY_HELP_THEME_SUBPAGE: 'community_help_theme_subpage',
      CONNECT_OUTRO: 'connect_outro',
      CORONAVIRUS_HUB: 'coronavirus_hub',
      CREATION_OUTRO: 'creation_outro',
      CRISIS_HUB_HOME: 'crisis_hub_home',
      CRISIS_PAGE: 'crisis_page',
      DEEP_LINK: 'deeplink',
      DRIVE_DETAILS_PAGE: 'drive_details_page',
      DRIVE_MANAGEMENT_PAGE: 'drive_management_page',
      EMAIL: 'email',
      FB_COMPOSER: 'fb_composer',
      FB_SEARCH: 'fb_search',
      FUNDRAISER_HUB: 'fundraiser_hub',
      GROUP_MALL: 'group_mall',
      GROUPS_TAB: 'groups_tab',
      INTERN: 'intern',
      JOBS: 'jobs',
      LISTING_DETAILS_PAGE: 'listing_details_page',
      LOCAL_COMMUNITY_FEED: 'local_community_feed',
      LOCAL_COMMUNITY_GIVING_MARKETPLACE: 'local_community_giving_marketplace',
      MESSENGER: 'messenger',
      NEWSFEED: 'newsfeed',
      NOTIFICATIONS: 'notifications',
      NULL_PAGE_SOURCE: 'null_page_source',
      PAGE_DRIVE_DETAILS_PAGE: 'page_drive_details_page',
      PAGES: 'pages',
      PAGES_FEED: 'pages_feed',
      PERMALINK: 'permalink',
      PLACEHOLDER_FOR_SOURCE_SURFACE_PLEASE_ADD_A_TODO:
        'placeholder_for_source_surface_please_add_a_todo',
      PLEDGE_OUTRO: 'pledge_outro',
      PROFILE: 'profile',
      SIGN_UP_OUTRO: 'sign_up_outro',
      TEST_SURFACE: 'test_surface',
      TIMELINE: 'timeline',
      UNKNOWN: 'unknown',
      VOLUNTEERING_COMPOSER: 'volunteering_composer',
      VOLUNTEERING_CONNECTIONS_COMPOSER: 'volunteering_connections_composer',
      VOLUNTEERING_CONNECTIONS_EDIT_COMPOSER:
        'volunteering_connections_edit_composer',
      VOLUNTEERING_EVENT_COMPOSER: 'volunteering_event_composer',
      VOLUNTEERING_EVENT_DETAILS: 'volunteering_event_details',
      VOLUNTEERING_EVENT_EDIT_COMPOSER: 'volunteering_event_edit_composer',
      VOLUNTEERING_EVENT_VOLUNTEER_LIST: 'volunteering_event_volunteer_list',
      VOLUNTEERING_HUB: 'volunteering_hub',
      VOLUNTEERING_ROLE_DETAILS: 'volunteering_role_details',
      VOLUNTEERING_YOUR_ACTIVITY_HUB: 'volunteering_your_activity_hub',
    });
    f['default'] = a;
  },
  66,
);
__d(
  'useCommunityHelpSourceLoggingForGraphQL',
  [
    'CommunityHelpUXComponent',
    'CommunityHelpUXSurface',
    'getGraphQLEnumSafe',
    'useCommunityHelpLoggingDefaultData',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = c('useCommunityHelpLoggingDefaultData')();
      return {
        source_component: c('getGraphQLEnumSafe')(
          c('CommunityHelpUXComponent'),
          a == null ? void 0 : a.source_component,
        ),
        source_surface: c('getGraphQLEnumSafe')(
          c('CommunityHelpUXSurface'),
          a == null ? void 0 : a.source_surface,
        ),
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VolunteeringOneClickCreationDialog.entrypoint',
  [
    'JSResourceForInteraction',
    'VolunteeringOneClickCreationDialogQuery$Parameters',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        a = a.pageID;
        return {
          queries: {
            dialogQueryReference: {
              parameters: c(
                'VolunteeringOneClickCreationDialogQuery$Parameters',
              ),
              variables: { pageID: a },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'VolunteeringOneClickCreationDialog.react',
      ).__setRef('VolunteeringOneClickCreationDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'WhatsAppCometPagesComposerInterceptionDialog.entrypoint',
  [
    'JSResourceForInteraction',
    'WhatsAppCometPagesComposerInterceptionDialogQuery$Parameters',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            dialogQueryReference: {
              parameters: c(
                'WhatsAppCometPagesComposerInterceptionDialogQuery$Parameters',
              ),
              variables: { page_id: a.pageID },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'WhatsAppCometPagesComposerInterceptionDialog.react',
      ).__setRef('WhatsAppCometPagesComposerInterceptionDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerInterceptionFundraisingHandler',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c, d) {
      a = a.fundraisingHandler;
      d = (d = d.unified_interception) == null ? void 0 : d.decision;
      if (d == null || d.product_type !== 'FUNDRAISER_DONATE_BUTTON') return;
      a({ onClose: b, publishPostHandler: c });
    }
    f.handleFundraisingInterceptionResponse = a;
  },
  66,
);
__d(
  'CometComposerInterceptionGetMessagesHandler',
  ['JSResourceForInteraction', 'useCometLazyDialog'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('JSResourceForInteraction')(
      'MessagingCometPagesComposerInterceptionDialog.react',
    ).__setRef('CometComposerInterceptionGetMessagesHandler');
    function a(a, b, d, e, f) {
      var g = c('useCometLazyDialog')(h),
        i = g[0];
      return function (c) {
        if (b === !0) {
          c();
          return;
        }
        var g = function () {
          a({
            isGetMessagesPostAttachmentOptional: !0,
            type: 'MESSAGING_ADD_GET_MESSAGES_BUTTON',
          }),
            a({
              attachmentType: 'GET_MESSAGES',
              type: 'ACTIVATE_ATTACHMENT_TYPE',
            }),
            window.setTimeout(f, 0);
        };
        i({
          interceptionEntryPoint: 'profile_plus_feed',
          onClose: c,
          onContinue: g,
          pageID: d,
          publishPostHandler: c,
          sessionID: e,
        });
        return;
      };
    }
    function b(a, b, c) {
      a = a.getMessagesHandler;
      c = (c = c.unified_interception) == null ? void 0 : c.decision;
      if (c == null || c.product_type !== 'MESSAGEPAGE') return;
      a(b);
      return;
    }
    g.useGetMessagesCometComposerInterceptionHandler = a;
    g.handleGetMessagesInterceptionResponse = b;
  },
  98,
);
__d(
  'UnifiedInterceptionFlowTypeEnum.facebook',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum').Mirrored([
      'AUTO_CONVERT',
      'DIALOG',
      'INLINE',
      'ONE_CLICK_CREATION',
      'UNKNOWN',
    ]);
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'UnifiedInterceptionInterceptAcceptFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1744453');
    c = b('FalcoLoggerInternal').create(
      'unified_interception_intercept_accept',
      a,
    );
    e.exports = c;
  },
  null,
);
__d(
  'UnifiedInterceptionInterceptCreateFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1744454');
    c = b('FalcoLoggerInternal').create(
      'unified_interception_intercept_create',
      a,
    );
    e.exports = c;
  },
  null,
);
__d(
  'UnifiedInterceptionInterceptRejectFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1744455');
    c = b('FalcoLoggerInternal').create(
      'unified_interception_intercept_reject',
      a,
    );
    e.exports = c;
  },
  null,
);
__d(
  'XCometVolunteeringShiftsDetailsControllerRouteBuilder',
  ['jsRouteBuilder'],
  function (a, b, c, d, e, f, g) {
    a = c('jsRouteBuilder')(
      '/volunteer/signups/{?event_id}/',
      Object.freeze({}),
      void 0,
    );
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'XFBVolunteeringProductType.facebook',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum').Mirrored(['CONNECTIONS', 'ROLES', 'SIGNUPS']);
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'XCometVolunteeringShiftsComposerControllerRouteBuilder',
  ['jsRouteBuilder'],
  function (a, b, c, d, e, f, g) {
    a = c('jsRouteBuilder')(
      '/volunteer/signups/composer/',
      Object.freeze({}),
      void 0,
    );
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'getVolunteeringComposerURI',
  ['XCometVolunteeringShiftsComposerControllerRouteBuilder'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.composerAction;
      b = b === void 0 ? 'create' : b;
      var d = a.eventID,
        e = a.locationAddress,
        f = a.locationLatitude,
        g = a.locationLongitude,
        h = a.loggingProps,
        i = a.pageID,
        j = a.postMessage;
      a = a.upsoldStoryID;
      b = babelHelpers['extends'](
        {
          composer_action: b,
          location_address: e,
          location_latitude: f,
          location_longitude: g,
          page_id: i,
          post_message: j,
          upsold_story_id: a,
        },
        h,
      );
      d != null && (b = babelHelpers['extends']({ event_id: d }, b));
      return c('XCometVolunteeringShiftsComposerControllerRouteBuilder')
        .buildUri(b)
        .toString();
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VolunteeringInterceptionUtils',
  [
    'FBLogger',
    'JSResourceForInteraction',
    'UnifiedInterceptionInterceptAcceptFalcoEvent',
    'UnifiedInterceptionInterceptCreateFalcoEvent',
    'UnifiedInterceptionInterceptRejectFalcoEvent',
    'VolunteeringOneClickCreationDialog.entrypoint',
    'XCometVolunteeringShiftsDetailsControllerRouteBuilder',
    'getVolunteeringComposerURI',
    'requireDeferred',
    'unrecoverableViolation',
    'useCometEntryPointDialog',
    'useCometLazyDialog',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')('ConnectionsCreateMutation').__setRef(
        'VolunteeringInterceptionUtils',
      ),
      i = c('requireDeferred')('SignUpsCreateMutation').__setRef(
        'VolunteeringInterceptionUtils',
      ),
      j = c('JSResourceForInteraction')(
        'VolunteeringCometAutoConvertInfoDialog.react',
      ).__setRef('VolunteeringInterceptionUtils'),
      k = c('JSResourceForInteraction')(
        'VolunteeringCometStructuredJobInfoDialog.react',
      ).__setRef('VolunteeringInterceptionUtils');
    function l(a) {
      var b;
      return [
        {
          description: (b = a.description) != null ? b : '',
          id: null,
          shifts: [
            {
              end_time: (b = a.end_time) != null ? b : 0,
              id: null,
              max_number_of_volunteers: 0,
              start_time: (b = a.start_time) != null ? b : 0,
            },
          ],
          title: (b = a.activity_title) != null ? b : '',
        },
      ];
    }
    function m(a, b) {
      switch (a) {
        case 'ROLES':
        default:
          throw c('FBLogger')('volunteering').mustfixThrow(
            'unsupported volunteering product type',
          );
        case 'CONNECTIONS':
        case 'SIGNUPS':
          return c(
            'XCometVolunteeringShiftsDetailsControllerRouteBuilder',
          ).buildURL({
            event_id: b,
            source_component: 'auto_convert_page_composer',
            source_surface: 'pages',
          });
      }
    }
    function n(a) {
      return c('getVolunteeringComposerURI')({
        composerAction: 'update',
        eventID: a,
        loggingProps: {
          source_component: 'volunteering_one_click_creation_dialog',
          source_surface: 'pages',
        },
      });
    }
    function o(a, b, d, e) {
      switch (a) {
        case 'ROLES':
        default:
          throw c('FBLogger')('volunteering').mustfixThrow(
            'unsupported volunteering product type',
          );
        case 'CONNECTIONS':
        case 'SIGNUPS':
          d();
          e({
            id: b,
            onFailure: function () {
              c('FBLogger')('volunteering').mustfix(
                'signups autoconvert deletion failed',
              );
            },
            shouldRedirectAfterDelete: !1,
            sourceComponent: 'volunteering_autoconvert_dialog',
            sourceSurface: 'pages',
          });
          break;
      }
    }
    function p(a) {
      var b = a.autoConvertSuccessHandler,
        d = a.environment,
        e = a.extractedData,
        f = a.pageID,
        g = a.publishPostHandler,
        h = a.sessionID;
      a = e.description;
      var j = e.end_time,
        k = e.location,
        m = e.location_type,
        n = e.start_time,
        o = e.title;
      if (a == null || n == null || j == null || o == null)
        throw c('unrecoverableViolation')(
          'extracted description, start time, end time or title cannot be null',
          'volunteering',
        );
      if (m === 'IN_PERSON' && k == null)
        throw c('unrecoverableViolation')(
          'location for in person opportunities cannot be null',
          'volunteering',
        );
      var p = {
        activities: l(e),
        cover_photo_focus: null,
        cover_photo_id: null,
        description: a,
        external_url: '',
        id: null,
        is_virtual: m === 'ONLINE',
        location_latitude:
          (n = k == null ? void 0 : k.latitude) != null ? n : 0,
        location_longitude:
          (j = k == null ? void 0 : k.longitude) != null ? j : 0,
        location_name: (e = k == null ? void 0 : k.address) != null ? e : '',
        notif_receiving_email: null,
        product_type: 'SIGNUPS',
        title: o,
      };
      i.onReady(function (a) {
        a.commit(d, p, 'auto_convert_page_composer', 'pages', {
          onFailure: function (a) {
            r(a, g);
          },
          onSuccess: function (a) {
            s(b, f, a, h);
          },
        });
      });
    }
    function q(a) {
      var b = a.autoConvertSuccessHandler,
        d = a.environment,
        e = a.extractedData,
        f = a.pageID,
        g = a.publishPostHandler,
        i = a.sessionID;
      a = e.description;
      var j = e.location,
        k = e.location_type;
      e = e.title;
      if (a == null || e == null || k == null)
        throw c('unrecoverableViolation')(
          'extracted description, title or location_type cannot be null',
          'volunteering',
        );
      if (k === 'IN_PERSON' && j == null)
        throw c('unrecoverableViolation')(
          'location for in person opportunities cannot be null',
          'volunteering',
        );
      var l = {
        cover_photo_focus: null,
        cover_photo_id: null,
        description: a,
        external_url: '',
        id: null,
        is_virtual: k === 'ONLINE',
        location_latitude:
          (a = j == null ? void 0 : j.latitude) != null ? a : 0,
        location_longitude:
          (k = j == null ? void 0 : j.longitude) != null ? k : 0,
        location_name: (a = j == null ? void 0 : j.address) != null ? a : '',
        title: e,
      };
      h.onReady(function (a) {
        a.commit(d, l, 'auto_convert_page_composer', 'pages', {
          onFailure: function (a) {
            r(a, g);
          },
          onSuccess: function (a) {
            t(b, f, a, i);
          },
        });
      });
    }
    function r(a, b) {
      c('FBLogger')('volunteering').catching(a).mustfix('autoconvert failed'),
        b();
    }
    function s(a, b, d, e) {
      var f,
        g = (f = d.volunteering_event_create) == null ? void 0 : f.id;
      c('UnifiedInterceptionInterceptCreateFalcoEvent').log(function () {
        return {
          event_data: { post_id: g },
          event_location: 'unknown',
          interception_entry_point: 'pages_feed',
          interception_flow: 'auto_convert',
          interception_placement: 'composer_post_button',
          interception_product: 'volunteering',
          interception_target_type: 'page',
          target_id: b,
          waterfall_session_id: e,
        };
      });
      a(
        (a = (f = d.volunteering_event_create) == null ? void 0 : f.id) != null
          ? a
          : '',
      );
    }
    function t(a, b, d, e) {
      var f,
        g = (f = d.xfb_volunteering_connections_create) == null ? void 0 : f.id;
      c('UnifiedInterceptionInterceptCreateFalcoEvent').log(function () {
        return {
          event_data: { post_id: g },
          event_location: 'unknown',
          interception_entry_point: 'pages_feed',
          interception_flow: 'auto_convert',
          interception_placement: 'composer_post_button',
          interception_product: 'volunteering',
          interception_target_type: 'page',
          target_id: b,
          waterfall_session_id: e,
        };
      });
      a(
        (a =
          (f = d.xfb_volunteering_connections_create) == null
            ? void 0
            : f.id) != null
          ? a
          : '',
      );
    }
    function u(a, b, d, e, f) {
      c('UnifiedInterceptionInterceptCreateFalcoEvent').log(function () {
        return {
          event_data: { post_id: d },
          event_location: 'unknown',
          interception_entry_point: 'pages_feed',
          interception_flow: 'one_click_creation',
          interception_placement: 'composer_post_button',
          interception_product: 'volunteering',
          interception_target_type: 'page',
          target_id: b,
          waterfall_session_id: e,
        };
      }),
        a(d, f);
    }
    function v(a) {
      var b = a.creationSuccessHandler,
        d = a.environment,
        e = a.extractedData,
        f = a.pageID,
        g = a.publishPostHandler,
        i = a.redirectionType,
        j = a.sessionID;
      a = e.description;
      var k = e.location,
        l = e.location_type;
      e = e.title;
      if (a == null || e == null || l == null)
        throw c('unrecoverableViolation')(
          'extracted description, title or location_type cannot be null',
          'volunteering',
        );
      if (l === 'IN_PERSON' && k == null)
        throw c('unrecoverableViolation')(
          'location for in person opportunities cannot be null',
          'volunteering',
        );
      var m = {
        cover_photo_focus: null,
        cover_photo_id: null,
        description: a,
        external_url: '',
        id: null,
        is_virtual: l === 'ONLINE',
        location_latitude:
          (a = k == null ? void 0 : k.latitude) != null ? a : 0,
        location_longitude:
          (l = k == null ? void 0 : k.longitude) != null ? l : 0,
        location_name: (a = k == null ? void 0 : k.address) != null ? a : '',
        title: e,
      };
      h.onReady(function (a) {
        a.commit(d, m, 'volunteering_one_click_creation_dialog', 'pages', {
          onFailure: function (a) {
            r(a, g);
          },
          onSuccess: function (a) {
            u(
              b,
              f,
              (a = a.xfb_volunteering_connections_create) == null
                ? void 0
                : a.id,
              j,
              i,
            );
          },
        });
      });
    }
    function w(a) {
      var b = a.creationSuccessHandler,
        d = a.environment,
        e = a.extractedData,
        f = a.pageID,
        g = a.publishPostHandler,
        h = a.redirectionType,
        j = a.sessionID;
      a = e.description;
      var k = e.end_time,
        m = e.location,
        n = e.location_type,
        o = e.start_time,
        p = e.title;
      if (a == null || o == null || k == null || p == null || n == null)
        throw c('unrecoverableViolation')(
          'extracted description, start time, end time, title or location type cannot be null',
          'volunteering',
        );
      if (n === 'IN_PERSON' && m == null)
        throw c('unrecoverableViolation')(
          'location for in person opportunities cannot be null',
          'volunteering',
        );
      var q = {
        activities: l(e),
        cover_photo_focus: null,
        cover_photo_id: null,
        description: a,
        external_url: '',
        id: null,
        is_virtual: n === 'ONLINE',
        location_latitude:
          (o = m == null ? void 0 : m.latitude) != null ? o : 0,
        location_longitude:
          (k = m == null ? void 0 : m.longitude) != null ? k : 0,
        location_name: (e = m == null ? void 0 : m.address) != null ? e : '',
        notif_receiving_email: null,
        product_type: 'SIGNUPS',
        title: p,
      };
      i.onReady(function (a) {
        a.commit(d, q, 'volunteering_one_click_creation_dialog', 'pages', {
          onFailure: function (a) {
            r(a, g);
          },
          onSuccess: function (a) {
            u(
              b,
              f,
              (a = a.volunteering_event_create) == null ? void 0 : a.id,
              j,
              h,
            );
          },
        });
      });
    }
    function a(a, b, d, e, f, g, h, i) {
      var j = f.product_type;
      if (
        f.title == null ||
        f.title.length <= 0 ||
        j === void 0 ||
        j === null
      ) {
        e();
        return;
      }
      var k = function () {
          window.location.reload();
        },
        l = function (a) {
          b(
            {
              contentID: a,
              onClose: function () {
                k();
              },
              onUndo: function () {
                a !== void 0 && o(j, a, e, h);
              },
              onViewVolunteerOpportunity: function () {
                if (a !== void 0) {
                  var b = m(j, a);
                  i && b && i.go(b, { force: !0, replace: !0, target: 'self' });
                }
              },
              productType: j,
            },
            function () {
              k();
            },
          );
        };
      switch (j) {
        case 'CONNECTIONS':
          q({
            autoConvertSuccessHandler: l,
            environment: a,
            extractedData: f,
            pageID: d,
            publishPostHandler: e,
            sessionID: g,
          });
          break;
        case 'SIGNUPS':
          p({
            autoConvertSuccessHandler: l,
            environment: a,
            extractedData: f,
            pageID: d,
            publishPostHandler: e,
            sessionID: g,
          });
          break;
        case 'ROLES':
        default:
          throw c('FBLogger')('volunteering').mustfixThrow(
            'unsupported volunteering product type',
          );
      }
    }
    function x(a, b, d) {
      var e,
        f = b.location;
      e = c('getVolunteeringComposerURI')({
        composerAction: 'create',
        locationAddress:
          (e = f == null ? void 0 : f.address) != null ? e : void 0,
        locationLatitude:
          (e = f == null ? void 0 : f.latitude) != null ? e : void 0,
        locationLongitude:
          (e = f == null ? void 0 : f.longitude) != null ? e : void 0,
        loggingProps: {
          source_component: 'volunteering_intercept_dialog',
          source_surface: 'pages',
        },
        pageID: d,
        postMessage: (f = b.description) != null ? f : '',
      });
      a.go(e, {});
    }
    function b(a, b, d, e, f, g) {
      var h = function () {
          c('UnifiedInterceptionInterceptAcceptFalcoEvent').log(function () {
            return {
              event_data: {},
              event_location: 'unknown',
              interception_entry_point: 'pages_feed',
              interception_flow: 'dialog',
              interception_placement: 'composer_post_button',
              interception_product: 'volunteering',
              interception_target_type: 'page',
              target_id: d,
              waterfall_session_id: g,
            };
          }),
            x(a, f, d);
        },
        i = function () {
          c('UnifiedInterceptionInterceptRejectFalcoEvent').log(function () {
            return {
              event_data: {},
              event_location: 'unknown',
              interception_entry_point: 'pages_feed',
              interception_flow: 'dialog',
              interception_placement: 'composer_post_button',
              interception_product: 'volunteering',
              interception_target_type: 'page',
              target_id: d,
              waterfall_session_id: g,
            };
          }),
            e();
        };
      b({ loggingSourceComponent: 'pages_composer', onProceed: h }, i);
    }
    function y(a, b, d, e, f, g, h, i) {
      var j = function (a) {
        switch (i) {
          case 'page_feed':
            window.location.reload();
            break;
          case 'composer_edit':
            if (a != null) {
              a = n(a);
              h && h.go(a, { force: !0, replace: !0, target: 'self' });
            } else window.location.reload();
            break;
        }
      };
      switch (a) {
        case 'CONNECTIONS':
          v({
            creationSuccessHandler: j,
            environment: g,
            extractedData: e,
            pageID: b,
            publishPostHandler: d,
            redirectionType: i,
            sessionID: f,
          });
          break;
        case 'SIGNUPS':
          w({
            creationSuccessHandler: j,
            environment: g,
            extractedData: e,
            pageID: b,
            publishPostHandler: d,
            redirectionType: i,
            sessionID: f,
          });
          break;
        case 'ROLES':
        default:
          throw c('FBLogger')('volunteering').mustfixThrow(
            'unsupported volunteering product type',
          );
      }
    }
    function d(a, b, d, e, f, g, h) {
      var i = f.description,
        j = f.location_type,
        k = f.product_type,
        l = f.title;
      if (i == null || l == null || k == null || j == null)
        throw c('unrecoverableViolation')(
          'extracted description, title, product type or location cannot be null for 1CC',
          'volunteering',
        );
      if (j === 'IN_PERSON' && location == null)
        throw c('unrecoverableViolation')(
          'location for in person opportunities cannot be null',
          'volunteering',
        );
      i = function () {
        y(k, d, e, f, g, h, a, 'page_feed');
      };
      l = function () {
        y(k, d, e, f, g, h, a, 'composer_edit');
      };
      j = function () {
        e();
      };
      b({ extractedData: f, onEditDetails: l, onUpdate: i }, j);
    }
    function e() {
      var a = c('useCometLazyDialog')(k);
      a = a[0];
      return a;
    }
    function f() {
      var a = c('useCometLazyDialog')(j);
      a = a[0];
      return a;
    }
    function z(a) {
      a = c('useCometEntryPointDialog')(
        c('VolunteeringOneClickCreationDialog.entrypoint'),
        { pageID: a },
      );
      a = a[0];
      return a;
    }
    g.handleVolunteeringAutoConvertInterceptionResponse = a;
    g.handleVolunteeringDialogInterceptionResponse = b;
    g.handleVolunteeringOneClickCreationInterceptionResponse = d;
    g.useVolunteeringInterceptDialog = e;
    g.useVolunteeringAutoConvertDialog = f;
    g.useVolunteeringOneClickCreationDialog = z;
  },
  98,
);
__d(
  'NonprofitHomeMutationUtils',
  ['$InternalEnum', 'CometRelay', 'FundraiserGKUtils.entrypointutils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('$InternalEnum').Mirrored([
        'NonprofitGivingEventActiveEventsSection_active_giving_events',
        'NonprofitGivingEventPastEventsSection_past_giving_events',
      ]),
      i = b('$InternalEnum').Mirrored([
        'ActiveFundraiserAndChallenges',
        'PastFundraiserAndChallenges',
        'ActiveVolunteeringEvents',
        'PastVolunteeringEvents',
      ]);
    function a(a) {
      a = a.get(d('CometRelay').VIEWER_ID);
      if (a == null) return null;
      a = a.getLinkedRecord('giving_beneficiary');
      return a == null
        ? null
        : j(
            a,
            h.NonprofitGivingEventActiveEventsSection_active_giving_events,
            i.ActiveFundraiserAndChallenges,
          );
    }
    function c(a) {
      a = a.get(d('CometRelay').VIEWER_ID);
      if (a == null) return null;
      a = a.getLinkedRecord('giving_beneficiary');
      return a == null
        ? null
        : j(
            a,
            h.NonprofitGivingEventPastEventsSection_past_giving_events,
            i.PastFundraiserAndChallenges,
          );
    }
    function e(a) {
      a = a.get(d('CometRelay').VIEWER_ID);
      if (a == null) return null;
      a = a.getLinkedRecord('giving_beneficiary');
      return a == null
        ? null
        : j(
            a,
            h.NonprofitGivingEventActiveEventsSection_active_giving_events,
            i.ActiveVolunteeringEvents,
          );
    }
    function f(a) {
      a = a.get(d('CometRelay').VIEWER_ID);
      if (a == null) return null;
      a = a.getLinkedRecord('giving_beneficiary');
      return a == null
        ? null
        : j(
            a,
            h.NonprofitGivingEventPastEventsSection_past_giving_events,
            i.PastVolunteeringEvents,
          );
    }
    function j(a, b, c) {
      return d('CometRelay').ConnectionHandler.getConnection(a, b, k(c));
    }
    function k(a) {
      switch (a) {
        case i.PastVolunteeringEvents:
          a = ['VOLUNTEERING_EVENT'];
          return {
            query_params: {
              direction: 'DESC',
              filter_params: {
                giving_event_types: a,
                is_owner: !0,
                status: ['ENDED'],
              },
              order_by: 'END_TIME',
            },
          };
        case i.ActiveVolunteeringEvents:
          a = ['VOLUNTEERING_EVENT'];
          return {
            query_params: {
              direction: 'DESC',
              filter_params: {
                giving_event_types: a,
                is_owner: !0,
                status: ['ACTIVE'],
              },
              order_by: 'END_TIME',
            },
          };
        case i.ActiveFundraiserAndChallenges:
          a = d('FundraiserGKUtils.entrypointutils').canCreateChallenge()
            ? ['CHALLENGE', 'FUNDRAISER', 'RECURRING_DONOR_FUNDRAISER']
            : ['FUNDRAISER', 'RECURRING_DONOR_FUNDRAISER'];
          a.push('FUNDRAISER_STORY');
          return {
            query_params: {
              direction: 'DESC',
              filter_params: {
                giving_event_types: a,
                is_owner: !0,
                status: ['ACTIVE'],
              },
              order_by: 'END_TIME',
            },
          };
        case i.PastFundraiserAndChallenges:
          a = d('FundraiserGKUtils.entrypointutils').canCreateChallenge()
            ? ['CHALLENGE', 'FUNDRAISER', 'RECURRING_DONOR_FUNDRAISER']
            : ['FUNDRAISER', 'RECURRING_DONOR_FUNDRAISER'];
          a.push('FUNDRAISER_STORY');
          return {
            query_params: {
              direction: 'DESC',
              filter_params: {
                giving_event_types: a,
                is_owner: !0,
                status: ['ENDED'],
              },
              order_by: 'END_TIME',
            },
          };
      }
    }
    g.getActiveFundraisersOrActiveFundraisersAndChallengesConnection = a;
    g.getPastFundraisersOrPastFundraisersAndChallengesConnection = c;
    g.getActiveVolunteeringEventsConnection = e;
    g.getPastVolunteeringEventsConnection = f;
  },
  98,
);
__d(
  'useVolunteeringShiftsDelete',
  [
    'CometRelay',
    'CommunityHelpUXComponent',
    'CommunityHelpUXSurface',
    'NonprofitHomeMutationUtils',
    'XCometHomeControllerRouteBuilder',
    'getGraphQLEnumSafe',
    'useCometRouterDispatcher',
    'useCommunityHelpSourceLoggingForGraphQL',
    'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a() {
      var a = d('CometRelay').useMutation(
          h !== void 0
            ? h
            : (h = b(
                'useVolunteeringShiftsDelete_VolunteeringEventDeleteMutation.graphql',
              )),
        ),
        e = a[0],
        f = c('useCometRouterDispatcher')(),
        g = c('useCommunityHelpSourceLoggingForGraphQL')();
      return function (a) {
        var b = a.id,
          h = a.onFailure,
          i = a.shouldRedirectAfterDelete,
          j = a.sourceComponent;
        a = a.sourceSurface;
        j =
          j != null || a != null
            ? {
                source_component: c('getGraphQLEnumSafe')(
                  c('CommunityHelpUXComponent'),
                  j,
                ),
                source_surface: c('getGraphQLEnumSafe')(
                  c('CommunityHelpUXSurface'),
                  a,
                ),
              }
            : babelHelpers['extends']({}, g);
        e({
          onCompleted: function (a) {
            a =
              a == null
                ? void 0
                : (a = a.volunteering_event_delete) == null
                ? void 0
                : a.post_delete_redirect_url;
            if (i) {
              if (f == null) {
                h();
                return;
              }
              a != null
                ? f.go(a, { replace: !0 })
                : f.go(c('XCometHomeControllerRouteBuilder').buildURL({}), {
                    replace: !0,
                  });
            }
          },
          onError: function (a) {
            h();
          },
          updater: function (a, b) {
            b = d(
              'NonprofitHomeMutationUtils',
            ).getActiveVolunteeringEventsConnection(a);
            b == null ? void 0 : b.invalidateRecord();
            b = d(
              'NonprofitHomeMutationUtils',
            ).getPastVolunteeringEventsConnection(a);
            b == null ? void 0 : b.invalidateRecord();
          },
          variables: {
            input: babelHelpers['extends']({ volunteering_event_id: b }, j),
          },
        });
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerInterceptionVolunteeringHandler',
  [
    'FBLogger',
    'VolunteeringInterceptionUtils',
    'useCometRouterDispatcher',
    'useVolunteeringShiftsDelete',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, c, d, e) {
      b = b.volunteeringHandler;
      d = (d = d.unified_interception) == null ? void 0 : d.decision;
      if (d == null || d.product_type !== 'VOLUNTEERING') return;
      var f = d == null ? void 0 : d.auxiliary_data;
      if (
        (f == null ? void 0 : f.__typename) !==
        'XFBUnifiedInterceptionVolunteeringAuxiliaryData'
      )
        return;
      var g = f.activity_title,
        h = f.description,
        i = f.end_time,
        j = f.link_type,
        k = f.location,
        l = f.location_type,
        m = f.product_type,
        n = f.start_time;
      f = f.title;
      b(
        a,
        {
          activity_title: g,
          description: h,
          end_time: i,
          link_type: j,
          location: k,
          location_type: l,
          product_type: m,
          start_time: n,
          title: f,
        },
        (b = d.flow_type) != null ? b : 'UNKNOWN',
        c,
        e,
      );
    }
    function b(a, b, e) {
      var f = d(
          'VolunteeringInterceptionUtils',
        ).useVolunteeringInterceptDialog(),
        g = d(
          'VolunteeringInterceptionUtils',
        ).useVolunteeringAutoConvertDialog(),
        h = d(
          'VolunteeringInterceptionUtils',
        ).useVolunteeringOneClickCreationDialog(a),
        i = c('useVolunteeringShiftsDelete')(),
        j = c('useCometRouterDispatcher')();
      return function (k, l, m, n, o) {
        if (e == null) {
          o();
          return;
        }
        switch (m) {
          case 'AUTO_CONVERT':
            d(
              'VolunteeringInterceptionUtils',
            ).handleVolunteeringAutoConvertInterceptionResponse(
              k,
              g,
              a,
              o,
              l,
              b,
              i,
              j,
            );
            break;
          case 'DIALOG':
            d(
              'VolunteeringInterceptionUtils',
            ).handleVolunteeringDialogInterceptionResponse(e, f, a, o, l, b);
            break;
          case 'ONE_CLICK_CREATION':
            d(
              'VolunteeringInterceptionUtils',
            ).handleVolunteeringOneClickCreationInterceptionResponse(
              e,
              h,
              a,
              o,
              l,
              b,
              k,
            );
            break;
          case 'INLINE':
          case 'UNKNOWN':
          default:
            throw c('FBLogger')('volunteering').mustfixThrow(
              'unsupported interception flow type',
            );
        }
      };
    }
    g.handleVolunteeringInterceptionResponse = a;
    g.useVolunteeringAutoConvertCometComposerInterceptionHandler = b;
  },
  98,
);
__d(
  'composerGetWhatsAppMessagesReducer',
  [
    'CometComposerAttachmentPluginTypes',
    'Promise',
    'composerAttachmentAreaReducer',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, c) {
      var d,
        e = c.item.id;
      d = (d = c.item.uri) != null ? d : '';
      var f = c.item.height,
        g = c.item.width;
      d = babelHelpers['extends'](
        {
          data: { id: e },
          entID: e,
          fileObjectURL: d,
          fileType: 'PHOTO',
          state: 'PREEXISTING',
          url: d,
          useCDNPreview: !0,
        },
        f != null && g != null && { height: f, width: g },
      );
      f = b('Promise').resolve({
        attachmentID: c.item.id,
        attachmentType: 'PHOTO',
      });
      e =
        ((g = {}),
        (g[e] = {
          cancelUpload: function () {},
          onFileComplete: f,
          onUploadCancel: new (b('Promise'))(function (a) {}),
          resolveFileUpload: function () {},
        }),
        g);
      return babelHelpers['extends']({}, a, {
        isGetWhatsAppMessagePostAttachmentData: {
          catalogAttachmentItemName: c.item.catalog_item_name,
          catalogAttachmentItemPrice: c.item.catalog_item_price,
          isWhatsAppCatalogAttachment: !0,
        },
        mediaAttachments: [d],
        mediaUploadStatuses: e,
      });
    }
    function i(a, b) {
      return ((b = a.isGetWhatsAppMessagePostAttachmentData) == null
        ? void 0
        : b.isWhatsAppCatalogAttachment) === !0
        ? babelHelpers['extends']({}, a, {
            isGetWhatsAppMessagePostAttachmentData: {},
            mediaAttachments: null,
          })
        : a;
    }
    function a(a, b) {
      switch (b.type) {
        case 'ADD_GET_WHATSAPP_MESSAGES_BUTTON':
          return babelHelpers['extends']({}, a, {
            isGetWhatsAppMessagePost: !0,
            isGetWhatsappMessagesPostAttachmentOptional:
              b.isGetWhatsappMessagesPostAttachmentOptional,
          });
        case 'ADD_CATALOG_ATTACHMENT_ITEMS':
          return h(a, b);
        case 'REMOVE_WHATSAPP_CATALOG_ATTACHMENT_ITEM':
          return i(a, b);
        case 'REMOVE_GET_WHATSAPP_MESSAGES_BUTTON':
          return babelHelpers['extends']({}, a, {
            isGetWhatsAppMessagePost: null,
            isGetWhatsAppMessagePostAttachmentData: {},
          });
        case 'REMOVE_ATTACHMENT_TYPE':
          if (
            d('composerAttachmentAreaReducer').getCanAlterAttachmentData(
              b,
              'GET_WHATSAPP_MESSAGES',
              a,
            )
          ) {
            var e;
            b =
              (b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType;
            var f = a.mediaAttachments,
              g = null;
            ((e = a.isGetWhatsAppMessagePostAttachmentData) == null
              ? void 0
              : e.isWhatsAppCatalogAttachment) === !0
              ? ((b = c(
                  'CometComposerAttachmentPluginTypes',
                ).GET_WHATSAPP_MESSAGES),
                (f = null),
                (g = !0))
              : (f || []).length > 0 &&
                (b = c('CometComposerAttachmentPluginTypes').MEDIA);
            return babelHelpers['extends']({}, a, {
              attachmentArea: babelHelpers['extends']({}, a.attachmentArea, {
                activeAttachmentType: b,
              }),
              isGetWhatsAppMessagePost: g,
              isGetWhatsAppMessagePostAttachmentData: {},
              mediaAttachments: f,
            });
          }
      }
      return a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerInterceptionWhatsAppMessagesHandler',
  [
    'fbt',
    'JSResourceForInteraction',
    'WhatsAppCometPagesComposerInterceptionDialog.entrypoint',
    'composerAttachmentAreaReducer',
    'composerGetWhatsAppMessagesReducer',
    'lazyLoadComponent',
    'react',
    'useCometComposerPushPage',
    'useCometEntryPointDialog',
    'useComposerViewStateReducer',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerGetWhatsAppMessagesVerificationFlowContainer.react',
        ).__setRef('CometComposerInterceptionWhatsAppMessagesHandler'),
      );
    function a(a, b, e, f, g, k, l) {
      c('useComposerViewStateReducer')(
        d('composerAttachmentAreaReducer').composerAttachmentAreaReducer,
      );
      c('useComposerViewStateReducer')(c('composerGetWhatsAppMessagesReducer'));
      var m = c('useCometEntryPointDialog')(
          c('WhatsAppCometPagesComposerInterceptionDialog.entrypoint'),
          { pageID: e },
        ),
        n = m[0],
        o = c('useCometComposerPushPage')();
      return function (c, d) {
        if (f === !0) {
          d();
          return;
        }
        var m = function () {
            a({ type: 'ADD_GET_WHATSAPP_MESSAGES_BUTTON' }),
              a({
                attachmentType: 'GET_WHATSAPP_MESSAGES',
                type: 'ACTIVATE_ATTACHMENT_TYPE',
              });
          },
          p = function (b, d) {
            c(),
              b != null
                ? (m(),
                  g === !0 && a({ type: 'WHATSAPP_BOOST_POST_TOGGLE_ON' }),
                  d === !0 &&
                    l !== !1 &&
                    k != null &&
                    (k(!0), a({ type: 'WHATSAPP_BOOST_POST_TOGGLE_ON' })))
                : o(h._('__JHASH__sgvnIxYrqEL__JHASH__'), function (a) {
                    a = a.onReturn;
                    return i.jsx(j, {
                      addAttachment: m,
                      onClose: a,
                      pageID: e,
                    });
                  });
          };
        n(
          {
            onClose: c,
            onContinue: p,
            pageID: e,
            publishPostHandler: d,
            sessionID: b,
          },
          d,
        );
        return;
      };
    }
    function b(a, b, c, d) {
      a = a.getWhatsAppMessagesHandler;
      d = (d = d.unified_interception) == null ? void 0 : d.decision;
      if (d == null || d.product_type !== 'WHATSAPP_PAGE') return;
      a(b, c);
      return;
    }
    g.useWhatsAppMessagesCometComposerInterceptionHandler = a;
    g.handleWhatsAppMessagesInterceptionResponse = b;
  },
  98,
);
__d(
  'UnifiedInterceptionPlacementTypeEnum.facebook',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum').Mirrored([
      'BIZ_COMPOSER',
      'COMPOSER',
      'COMPOSER_AFTER_PARTY',
      'COMPOSER_POST_BUTTON',
      'COMPOSER_SCHEDULE_POST',
      'COMPOSER_SCHEDULE_STORY',
      'CREATOR_COMPOSER_SCHEDULE_POST',
      'MAIN_CALENDAR',
      'POST_CTA',
    ]);
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'CometComposerInterceptionPluginUtils',
  [
    'CometComposerInterceptionFundraisingHandler',
    'CometComposerInterceptionGetMessagesHandler',
    'CometComposerInterceptionPluginUtilsQuery.graphql',
    'CometComposerInterceptionVolunteeringHandler',
    'CometComposerInterceptionWhatsAppMessagesHandler',
    'CometRelay',
    'FBLogger',
    'isStringNullOrEmpty',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = {
        unified_interception: {
          decision: {
            auxiliary_data: null,
            flow_type: 'UNKNOWN',
            product_type: 'UNKNOWN',
            should_perform_interception: !1,
          },
        },
      },
      j = {},
      k = 'comet_composer_unified_interception_platform',
      l =
        h !== void 0
          ? h
          : (h = b('CometComposerInterceptionPluginUtilsQuery.graphql'));
    function a(a, b, d, e, f, g, h, i) {
      var j = function (c) {
        return m(a, b, c, d, g, h, i);
      };
      e = n(d, f, e, j);
      if (e == null) {
        h();
        return;
      }
      p(
        b,
        e,
        function (a) {
          c('FBLogger')(k).info(a.message), s(j);
        },
        function (a) {
          r(a, f.sessionID, !1, j);
        },
      );
    }
    function e(a) {
      var b = '';
      if (a != null)
        switch (a.__type) {
          case 'editor-state-based':
            b = a.draftEditorState.getCurrentContent().getPlainText();
            break;
          case 'plain-text':
            b = a.text;
            break;
        }
      return b;
    }
    function m(a, b, c, e, f, g, h) {
      var i;
      i = (i = c.unified_interception) == null ? void 0 : i.decision;
      if (!Boolean(i == null ? void 0 : i.should_perform_interception)) {
        g();
        return;
      }
      a({ type: 'set_ignore_dirty_flag', value: !0 });
      if ((i == null ? void 0 : i.product_type) == null) {
        g();
        return;
      }
      switch (i.product_type) {
        case 'MESSAGEPAGE':
          d(
            'CometComposerInterceptionGetMessagesHandler',
          ).handleGetMessagesInterceptionResponse(h, g, c);
          break;
        case 'WHATSAPP_PAGE':
          d(
            'CometComposerInterceptionWhatsAppMessagesHandler',
          ).handleWhatsAppMessagesInterceptionResponse(h, f, g, c);
          break;
        case 'VOLUNTEERING':
          d(
            'CometComposerInterceptionVolunteeringHandler',
          ).handleVolunteeringInterceptionResponse(b, h, e, c, g);
          break;
        case 'FUNDRAISER_DONATE_BUTTON':
          d(
            'CometComposerInterceptionFundraisingHandler',
          ).handleFundraisingInterceptionResponse(h, f, g, c);
          break;
        default:
          g();
          break;
      }
    }
    function n(a, b, c, d) {
      var e = b.loggingEntryPoint,
        f = b.placement,
        g = b.sessionID,
        h = b.targetID;
      b = b.targetType;
      if (!o(g, f)) {
        s(d);
        return null;
      }
      c = t((d = c) != null ? d : []);
      d = {
        logging_data: { entry_point: e, session_id: g },
        photo_ids: c,
        placement: f,
        post_text: a,
      };
      return { params: d, target_id: h, target_type: b };
    }
    function o(a, b) {
      b = b === 'COMPOSER';
      if (!b && j[a]) {
        c('FBLogger')(k).info(
          'Already performed a successful interception in this session',
        );
        return !1;
      }
      return !0;
    }
    function p(a, b, c, e) {
      var f = d('relay-runtime').getRequest(l);
      f = d('relay-runtime').createOperationDescriptor(f, b);
      var g = a.retain(f),
        h = d('CometRelay')
          .fetchQuery(a, l, b)
          .subscribe({
            error: function (a) {
              q({ queryRetainDisposable: g, querySubscription: h }), c(a);
            },
            next: function (a) {
              q({ queryRetainDisposable: g, querySubscription: h }), e(a);
            },
          });
    }
    function q(a) {
      var b = a.queryRetainDisposable;
      a = a.querySubscription;
      a && a.unsubscribe();
      b && b.dispose();
    }
    function r(a, b, d, e) {
      var f = a.unified_interception;
      if (!f) {
        c('FBLogger')(k).info(
          'Null value received from server for interception response',
        );
        s(e);
        return;
      }
      d || (j[b] = !0);
      s(e, a);
    }
    function s(a, b) {
      b === void 0 && (b = i), a && a(b);
    }
    function t(a) {
      return a
        .filter(function (a) {
          return (
            a.fileType === 'PHOTO' &&
            (a.state === 'UPLOADED' || a.state === 'PREEXISTING')
          );
        })
        .map(function (a) {
          return a.data && ((a = a.data.id) != null ? a : '');
        })
        .filter(function (a) {
          return !c('isStringNullOrEmpty')(a);
        });
    }
    g.performInterception = a;
    g.getPostText = e;
    g.validateInterceptionRequest = o;
    g.disposeQuery = q;
    g.getPhotoIds = t;
  },
  98,
);
__d(
  'UnifiedInterceptionProductTypeEnum.facebook',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum').Mirrored([
      'BRANDAWARENESS',
      'BRANDTAGGING',
      'CALENDAR_HOTSPOTS',
      'CALL_NOW',
      'EVENT',
      'FUNDRAISER_DONATE_BUTTON',
      'HASHTAG',
      'JOB',
      'LDP',
      'MARKETPLACE_VERTICALS',
      'MESSAGEPAGE',
      'MESSAGE_BUTTON',
      'MOVIE',
      'OFFER',
      'PAGES_INTEGRITY_FAKE_NEWS',
      'PAGES_INTEGRITY_UNPUBLISHED_CONTENT',
      'PRODUCT_TAGGING_NUX',
      'QPC',
      'SCHEDULE_POST_TIME',
      'SELL_MESSAGE',
      'SERVICE',
      'UNKNOWN',
      'VOLUNTEERING',
      'WHATSAPP_PAGE',
    ]);
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'CometComposerInterceptionRequestHandler',
  [
    'CometComposerInterceptionPluginUtils',
    'CometComposerInterceptionRequestHandlerQuery.graphql',
    'CometRelay',
    'FBLogger',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = {
        unified_interception: {
          decision: {
            product_type: 'UNKNOWN',
            should_perform_interception: !1,
          },
        },
      },
      j = {},
      k = 'comet_composer_unified_interception_platform',
      l =
        h !== void 0
          ? h
          : (h = b('CometComposerInterceptionRequestHandlerQuery.graphql'));
    function a(a, b, d, e, f, g, h, i) {
      var j = a == null ? void 0 : a.mediaAttachments,
        l = function (c) {
          return m(a, b, c, g, h, i);
        };
      d = o(d, f, j, l);
      if (d == null) {
        h();
        return;
      }
      p(
        e,
        d,
        function (a) {
          c('FBLogger')(k).info(a.message), r(l);
        },
        function (a) {
          q(a, f.sessionID, !1, l);
        },
      );
    }
    function m(a, b, c, d, e, f) {
      var g;
      g = (g = c.unified_interception) == null ? void 0 : g.decision;
      if (!Boolean(g == null ? void 0 : g.should_perform_interception)) {
        e();
        return;
      }
      b({ type: 'set_ignore_dirty_flag', value: !0 });
      if ((g == null ? void 0 : g.product_type) == null) {
        e();
        return;
      }
      g = n(g == null ? void 0 : g.product_type, f);
      if (g == null) {
        e();
        return;
      }
      g({
        onHalt: d,
        publishPostHandler: e,
        response: c,
        viewState: a,
        viewStateDispatcher: b,
      });
    }
    function n(a, b) {
      b = b.find(function (b) {
        return b.serverName === a;
      });
      return b == null ? void 0 : b.interceptHandler;
    }
    function o(a, b, c, e) {
      var f = b.loggingEntryPoint,
        g = b.placement,
        h = b.sessionID,
        i = b.targetID;
      b = b.targetType;
      if (
        !d('CometComposerInterceptionPluginUtils').validateInterceptionRequest(
          h,
          g,
        )
      ) {
        r(e);
        return null;
      }
      c = d('CometComposerInterceptionPluginUtils').getPhotoIds(
        (e = c) != null ? e : [],
      );
      e = {
        logging_data: { entry_point: f, session_id: h },
        photo_ids: c,
        placement: g,
        post_text: a,
      };
      return { params: e, target_id: i, target_type: b };
    }
    function p(a, b, c, e) {
      var f = d('relay-runtime').getRequest(l);
      f = d('relay-runtime').createOperationDescriptor(f, b);
      var g = a.retain(f),
        h = d('CometRelay')
          .fetchQuery(a, l, b)
          .subscribe({
            error: function (a) {
              d('CometComposerInterceptionPluginUtils').disposeQuery({
                queryRetainDisposable: g,
                querySubscription: h,
              }),
                c(a);
            },
            next: function (a) {
              d('CometComposerInterceptionPluginUtils').disposeQuery({
                queryRetainDisposable: g,
                querySubscription: h,
              }),
                e(a);
            },
          });
    }
    function q(a, b, d, e) {
      var f = a.unified_interception;
      if (!f) {
        c('FBLogger')(k).info(
          'Null value received from server for interception response',
        );
        r(e);
        return;
      }
      d || (j[b] = !0);
      r(e, a);
    }
    function r(a, b) {
      b === void 0 && (b = i), a && a(b);
    }
    g.performInterception = a;
  },
  98,
);
__d(
  'translateComposerAttachmentToInterceptAttachmentType',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (a == null) return 'STATUS';
      switch (a) {
        case 'EVENT':
          return 'EVENT';
        case 'FILE':
          return 'FILE';
        case 'CREATE_JOB':
          return 'JOB_OPENING';
        case 'MEDIA':
          return 'MEDIA';
        case 'POLL':
          return 'Q_AND_A';
        case 'ASK_FOR_RECOMMENDATIONS':
          return 'PAGE_RECOMMENDATION';
        case 'ANIMATED_IMAGE':
        case 'SHARE':
        default:
          return null;
      }
    }
    f['default'] = a;
  },
  66,
);
__d(
  'getIsInterceptAttachmentCompatible',
  ['translateComposerAttachmentToInterceptAttachmentType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var d = b.allowedConcurrentAttachments;
      d = d.includes(
        c('translateComposerAttachmentToInterceptAttachmentType')(
          (d = a.attachmentArea) == null ? void 0 : d.activeAttachmentType,
        ),
      );
      b = b.disallowedConcurrentAttachments;
      a = b.includes(
        c('translateComposerAttachmentToInterceptAttachmentType')(
          (b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType,
        ),
      );
      return d && !a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'getIsInterceptLocaleSupported',
  ['IntlCurrentLocale'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = c('IntlCurrentLocale').code;
      for (
        var d = a,
          e = Array.isArray(d),
          f = 0,
          d = e
            ? d
            : d[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= d.length) break;
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        if (g.includes('XX') && g.includes(b.substring(0, b.length - 2)))
          return !0;
      }
      return a.includes(b);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'getInterceptionEligibilityStatus',
  [
    'cometComposerAttachmentsEligibilityChecker',
    'getIsInterceptAttachmentCompatible',
    'getIsInterceptLocaleSupported',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      if (b == null) return !1;
      b = b.map(function (b) {
        var d;
        if (!b.getIsEligible(a)) return !1;
        if (!c('getIsInterceptAttachmentCompatible')(a, b)) return !1;
        var e = b.sproutName;
        if (
          (a == null
            ? void 0
            : (d = a.attachmentArea) == null
            ? void 0
            : d.activeAttachmentType) != null &&
          e != null
        ) {
          d = c('cometComposerAttachmentsEligibilityChecker')(a);
          if (d.has(e)) return !1;
        }
        return !c('getIsInterceptLocaleSupported')(b.supportedLocales)
          ? !1
          : !0;
      });
      return b.every(function (a) {
        return a === !0;
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometComposerUnifiedInterceptors',
  [
    'CometRelay',
    'UnifiedInterceptionProductTypeEnum.facebook',
    'useCometComposerUnifiedInterceptors_intercept_configs.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              'useCometComposerUnifiedInterceptors_intercept_configs.graphql',
            ));
    function a(a, b, e) {
      a = d('CometRelay').useFragment(i, a);
      var f = a == null ? void 0 : a.config;
      return b == null
        ? void 0
        : b
            .map(function (a) {
              var b =
                f == null
                  ? void 0
                  : f.find(function (b) {
                      return (
                        c('UnifiedInterceptionProductTypeEnum.facebook').cast(
                          b == null ? void 0 : b.interception_product_type,
                        ) === a.serverName
                      );
                    });
              if (b == null) return null;
              var d = b.blacklisted_attachment_types,
                g = b.is_eligible_for_interception,
                h = b.supported_locales;
              b = b.whitelisted_attachment_types;
              var i = a.interceptHandler(babelHelpers['extends']({}, e));
              return babelHelpers['extends']({}, a, {
                allowedConcurrentAttachments: b,
                disallowedConcurrentAttachments: d,
                interceptHandler: i,
                isEligibleForInterception: (b = g) != null ? b : !1,
                supportedLocales: h,
              });
            })
            .filter(Boolean);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'composerDirtyStateViewStateReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      switch (b.type) {
        case 'set_ignore_dirty_flag':
          return babelHelpers['extends']({}, a, { ignoreDirtyFlag: b.value });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
); /*FB_PKG_DELIM*/
__d(
  'CometComposerMinutiaeBar_profile.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
      ],
      kind: 'Fragment',
      metadata: null,
      name: 'CometComposerMinutiaeBar_profile',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'CometComposerActorProfilePicture_profile',
        },
      ],
      type: 'Profile',
      abstractKey: '__isProfile',
    };
    e.exports = a;
  },
  null,
);
__d(
  'MarketplaceComposerPhotoSyncSubscription_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '7496275880397480';
  },
  null,
);
__d(
  'MarketplaceComposerPhotoSyncSubscription.graphql',
  ['MarketplaceComposerPhotoSyncSubscription_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'input' }],
        c = [
          {
            alias: null,
            args: [{ kind: 'Variable', name: 'data', variableName: 'input' }],
            concreteType: 'MarketplacePhotoSyncSubscribeResponsePayload',
            kind: 'LinkedField',
            name: 'marketplace_photo_sync_subscribe',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'Photo',
                kind: 'LinkedField',
                name: 'photo',
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
                    concreteType: 'Image',
                    kind: 'LinkedField',
                    name: 'best_effort_image',
                    plural: !1,
                    selections: [
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
                        name: 'width',
                        storageKey: null,
                      },
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
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'MarketplaceComposerPhotoSyncSubscription',
          selections: c,
          type: 'Subscription',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'MarketplaceComposerPhotoSyncSubscription',
          selections: c,
        },
        params: {
          id: b(
            'MarketplaceComposerPhotoSyncSubscription_facebookRelayOperation',
          ),
          metadata: { subscriptionName: 'marketplace_photo_sync_subscribe' },
          name: 'MarketplaceComposerPhotoSyncSubscription',
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
  'useMarketplacePhotosyncCommandSubscription_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5057503597645936';
  },
  null,
);
__d(
  'useMarketplacePhotosyncCommandSubscription.graphql',
  ['useMarketplacePhotosyncCommandSubscription_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'input' }],
        c = [
          {
            alias: null,
            args: [{ kind: 'Variable', name: 'data', variableName: 'input' }],
            concreteType: 'MarketplacePhotoSyncCommandSubscribeResponsePayload',
            kind: 'LinkedField',
            name: 'marketplace_photo_sync_command_subscribe',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'command',
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
          name: 'useMarketplacePhotosyncCommandSubscription',
          selections: c,
          type: 'Subscription',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'useMarketplacePhotosyncCommandSubscription',
          selections: c,
        },
        params: {
          id: b(
            'useMarketplacePhotosyncCommandSubscription_facebookRelayOperation',
          ),
          metadata: {
            subscriptionName: 'marketplace_photo_sync_command_subscribe',
          },
          name: 'useMarketplacePhotosyncCommandSubscription',
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
  'useMarketplaceSendPhotosyncCommandMutation_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4519582751477931';
  },
  null,
);
__d(
  'useMarketplaceSendPhotosyncCommandMutation.graphql',
  ['useMarketplaceSendPhotosyncCommandMutation_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'input' }],
        c = [
          {
            alias: null,
            args: [{ kind: 'Variable', name: 'input', variableName: 'input' }],
            concreteType: 'MarketplacePhotoSyncCommandResponsePayload',
            kind: 'LinkedField',
            name: 'marketplace_photo_sync_command',
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
          name: 'useMarketplaceSendPhotosyncCommandMutation',
          selections: c,
          type: 'Mutation',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'useMarketplaceSendPhotosyncCommandMutation',
          selections: c,
        },
        params: {
          id: b(
            'useMarketplaceSendPhotosyncCommandMutation_facebookRelayOperation',
          ),
          metadata: {},
          name: 'useMarketplaceSendPhotosyncCommandMutation',
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
  'useMarketplaceSendPhotosyncNotificationMutation_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5573679215983980';
  },
  null,
);
__d(
  'useMarketplaceSendPhotosyncNotificationMutation.graphql',
  ['useMarketplaceSendPhotosyncNotificationMutation_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'marketplace_photo_sync_send_notification',
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useMarketplaceSendPhotosyncNotificationMutation',
          selections: a,
          type: 'Mutation',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [],
          kind: 'Operation',
          name: 'useMarketplaceSendPhotosyncNotificationMutation',
          selections: a,
        },
        params: {
          id: b(
            'useMarketplaceSendPhotosyncNotificationMutation_facebookRelayOperation',
          ),
          metadata: {},
          name: 'useMarketplaceSendPhotosyncNotificationMutation',
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
  'CometStarsOnboardingUpsellDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5536877679756967';
  },
  null,
);
__d(
  'CometStarsOnboardingUpsellDialogQuery$Parameters',
  ['CometStarsOnboardingUpsellDialogQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('CometStarsOnboardingUpsellDialogQuery_facebookRelayOperation'),
        metadata: {},
        name: 'CometStarsOnboardingUpsellDialogQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometCharacterCount.react',
  [
    'fbt',
    'CometColumnItem.react',
    'CometNumber.react',
    'TetraText.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.count;
      a = a.maxCount;
      return i.jsx(c('CometColumnItem.react'), {
        align: 'end',
        paddingTop: 4,
        children: i.jsx(c('TetraText.react'), {
          color: 'secondary',
          type: 'bodyLink3',
          children: h._('__JHASH__PAdKuFJO0hT__JHASH__', [
            h._param(
              'charactor count',
              i.jsx(c('CometNumber.react'), { decimals: 0, number: b }),
              [0, b],
            ),
            h._param(
              'maximum charactor count',
              i.jsx(c('CometNumber.react'), { decimals: 0, number: a }),
              [0, a],
            ),
          ]),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'FeedComposerCometSproutButtonContainer.react',
  ['CometErrorBoundary.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsx(c('CometErrorBoundary.react'), { children: a.children });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'getOrderedSproutsForLogging',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return Array.from(a.keys()).sort(function (b, c) {
        b = a.get(b);
        c = a.get(c);
        if (b && c) return b.index - c.index;
        else return 0;
      });
    }
    f['default'] = a;
  },
  66,
);
__d(
  'getSproutsVisibilitiesForLogging',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = {};
      a.forEach(function (a) {
        b[a.name] = a.visible;
      });
      return b;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'useCometComposerInlineSproutsLogging',
  [
    'getOrderedSproutsForLogging',
    'getSproutsVisibilitiesForLogging',
    'react',
    'useCometComposerLoggerDispatcher',
    'useDebouncedComet',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useMemo,
      j = b.useState;
    function a(a) {
      var b = a.actionType,
        d = a.maxLoggingCount,
        e = d === void 0 ? null : d,
        f = a.sproutsCount,
        g = a.sproutsState;
      d = j(0);
      var k = d[0],
        l = d[1];
      a = j(new Map());
      var m = a[0],
        n = c('useDebouncedComet')(
          function () {
            var a = e === null || k < e;
            if (a) {
              a = c('getSproutsVisibilitiesForLogging')(m);
              var d = c('getOrderedSproutsForLogging')(m);
              o({
                fields: {
                  composer_type: null,
                  ordered_sprouts: d,
                  sprout_surface: 'UNDIRECTED_FEED_COMPOSER',
                  sprouts_visibilities: a,
                  state: g,
                  total_sprouts_count: f.toString(),
                },
                type: b,
              });
              l(k + 1);
            }
          },
          { wait: 200 },
        ),
        o = c('useCometComposerLoggerDispatcher')(),
        p = h(
          function (a) {
            var b = { index: m.size, name: a, visible: !1 };
            m.set(a, b);
          },
          [m],
        ),
        q = h(
          function (a) {
            var b = m.get(a);
            b && (b.visible || ((b.visible = !0), m.set(a, b), n()));
          },
          [n, m],
        );
      d = i(
        function () {
          return { onRender: p, onVisible: q };
        },
        [p, q],
      );
      return { loggingHandlers: d };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'FeedComposerFullSproutsList.react',
  [
    'CometComposerSproutVisibilitiesContext',
    'ComposerSproutDisplayTypeContext',
    'FeedComposerCometSproutButtonContainer.react',
    'gkx',
    'react',
    'useCometComposerInlineSproutsLogging',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      var b = a.children,
        d = a.composerDialogWidth,
        e = a.popPage;
      a = i(
        function () {
          return {
            popPage: e,
            renderButtonCollapsed: !1,
            showLabelAsTooltip: !1,
            type: 'push_view',
          };
        },
        [e],
      );
      var f = c('useCometComposerInlineSproutsLogging')({
        actionType: 'INLINE_SPROUTS_STATE_CHANGED',
        sproutsCount: (b == null ? void 0 : b.length) || 0,
        sproutsState: 'full_screen',
      });
      f = f.loggingHandlers;
      return h.jsx(c('ComposerSproutDisplayTypeContext').Provider, {
        value: a,
        children: h.jsx(c('CometComposerSproutVisibilitiesContext').Provider, {
          value: f,
          children: h.jsx('div', {
            className:
              'x78zum5 x1a02dak xcud41i x139jcc6 xjkvuk6 x1sxyh0 xurb0ha x1iorvi4' +
              (c('gkx')('1224637') ? ' x1h4vx1c' : ''),
            'data-testid': void 0,
            style: { width: d },
            children: h.Children.map(b, function (a) {
              return h.jsx(c('FeedComposerCometSproutButtonContainer.react'), {
                children: a,
              });
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withComposerViewStatePart')(a, function (a) {
      return {
        composerDialogWidth:
          (a = a.composerSizeAndStyleMetadata) == null
            ? void 0
            : a.composerDialogWidth,
      };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'CometComposerEllipsisSproutButton.react',
  [
    'fbt',
    'ix',
    'CometComposerPromotionContext',
    'CometComposerPushPageContext',
    'CometComposerSproutButtonInternal.react',
    'FeedComposerCometSproutButtonContainer.react',
    'FeedComposerFullSproutsList.react',
    'react',
    'useCometComposerPushPage',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useContext;
    function a(a) {
      var b = a.sprouts,
        d = c('useCometComposerPushPage')(),
        e = k(c('CometComposerPromotionContext'));
      return j.jsx(c('FeedComposerCometSproutButtonContainer.react'), {
        children: j.jsx(c('CometComposerSproutButtonInternal.react'), {
          activeColor: 'var(--fds-spectrum-slate-tint-70)',
          icon: i('496429'),
          label: h._('__JHASH___Vck0f9XTV___JHASH__'),
          onClick: function () {
            d(h._('__JHASH__7lPtgEzd2gE__JHASH__'), function (a) {
              a = a.onReturn;
              return j.jsx(c('CometComposerPushPageContext').Provider, {
                value: d,
                children: j.jsx(c('CometComposerPromotionContext').Provider, {
                  value: e,
                  children: j.jsx(c('FeedComposerFullSproutsList.react'), {
                    popPage: a,
                    children: b,
                  }),
                }),
              });
            });
          },
          pluginName: 'ELLIPSIS',
          sproutName: 'ELLIPSIS',
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
  'CometComposerMinutiaeBarLayout.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsxs('div', {
        className:
          'x6s0dn4 x78zum5 xktsk01 x1d52u69 xyamay9 x4uap5 x1l90r2v xkhd6sd',
        children: [
          h.jsx('div', { className: 'x1mvxwlf', children: a.profilePicture }),
          h.jsxs('div', {
            className: 'x78zum5 xdt5ytf',
            children: [
              a.body,
              a.meta != null &&
                h.jsx('div', { className: 'x1aawmmo', children: a.meta }),
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
  'composerWithTagStateChecker',
  ['withTagIDsTrackerConversionUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      b =
        (b = d(
          'withTagIDsTrackerConversionUtils',
        ).convertWithTagIDsTrackerToArray(
          b == null ? void 0 : b.withTagIDsTracker,
        )) != null
          ? b
          : [];
      a =
        (a = d(
          'withTagIDsTrackerConversionUtils',
        ).convertWithTagIDsTrackerToArray(
          a == null ? void 0 : a.withTagIDsTracker,
        )) != null
          ? a
          : [];
      if (b.length !== a.length) return !0;
      var c = [].concat(b).sort();
      a = [].concat(a).sort();
      for (var e = 0; e < b.length; e++) if (c[e] !== a[e]) return !0;
      return !1;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'composerActivityViewStateReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a, b) {
      return babelHelpers['extends']({}, a, { activityMinutiae: void 0 });
    }
    function h(a, b) {
      return babelHelpers['extends']({}, a, {
        activityMinutiae: {
          activityID: b.id,
          activityLegacyID: b.legacyID,
          activityName: b.activityName,
          activityPrompt: b.activityPrompt,
        },
      });
    }
    function i(a, b) {
      return babelHelpers['extends']({}, a, {
        activityMinutiae: {
          activityID: b.activityID,
          activityLegacyID: b.activityLegacyID,
          activityProfileImage: b.profileImage,
          activitySubtext: b.subtext,
          activityVerificationBadge: b.verificationBadge,
          iconURI: b.iconURI,
          objectID: b.objectID,
          objectName: b.objectName,
        },
      });
    }
    function a(a, b) {
      switch (b.type) {
        case 'REMOVE_ACTIVITY':
          return g(a, b);
        case 'SELECT_ACTIVITY':
          return h(a, b);
        case 'SELECT_ACTIVITY_OBJECT':
          return i(a, b);
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'composerWithTagViewStateReducer',
  ['addTagsToWithTagsIDsTracker'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      b = b.withTagID;
      b = c('addTagsToWithTagsIDsTracker')(
        'WithTagTool',
        [b],
        (b = a.withTagIDsTracker) != null ? b : new Map(),
      );
      return babelHelpers['extends']({}, a, { withTagIDsTracker: b });
    }
    function i(a, b, c) {
      var d = b.get(a);
      if (d != null) {
        d = {
          isDisplayedInSocialSentence: !1,
          withTagSourceIDs: d.withTagSourceIDs.filter(function (a) {
            return a !== c;
          }),
        };
        d.withTagSourceIDs.length > 0 ? b.set(a, d) : b['delete'](a);
      }
      return b;
    }
    function j(a, b) {
      var c = new Map(a.withTagIDsTracker);
      b = b.withTagID;
      b = i(b, c, 'WithTagTool');
      return babelHelpers['extends']({}, a, { withTagIDsTracker: b });
    }
    function k(a) {
      return babelHelpers['extends']({}, a, { withTagIDsTracker: void 0 });
    }
    function a(a, b) {
      switch (b.type) {
        case 'ADD_WITH_TAG_ID':
          return h(a, b);
        case 'REMOVE_WITH_TAG_ID':
          return j(a, b);
        case 'REMOVE_ALL_WITH_TAGS':
          return k(a);
      }
      return a;
    }
    g.removeSourceID = i;
    g.composerWithTagViewStateReducer = a;
  },
  98,
);
__d(
  'CometComposerMinutiaeBar.react',
  [
    'CometComposerActorProfilePicture.react',
    'CometComposerMinutiaeBarLayout.react',
    'CometComposerMinutiaeBarMeta.react',
    'CometComposerMinutiaeBar_profile.graphql',
    'CometRelay',
    'FeedComposerCometSocialSentence.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e = a.privacySelector;
      a = a.profile$key;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('CometComposerMinutiaeBar_profile.graphql')),
        a,
      );
      return i.jsx(c('CometComposerMinutiaeBarLayout.react'), {
        body: i.jsx(c('FeedComposerCometSocialSentence.react'), {
          userName: a.name,
        }),
        meta: i.jsx(c('CometComposerMinutiaeBarMeta.react'), {
          privacySelector: e,
        }),
        profilePicture: i.jsx(c('CometComposerActorProfilePicture.react'), {
          profile$key: a,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerSavingIndicatorMask.react',
  ['fbt', 'CometProgressRingIndeterminate.react', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      return i.jsxs('div', {
        className:
          'x6s0dn4 x1h0vfkc x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1ey2m1c x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy xhtitgo',
        children: [
          i.jsx(c('CometProgressRingIndeterminate.react'), {
            color: 'dark',
            size: 32,
          }),
          i.jsx('div', {
            'aria-atomic': 'true',
            'aria-live': 'assertive',
            className: 'x14vqqas xq8finb xod5an3 x16n37ib',
            children: i.jsx(c('TetraText.react'), {
              type: 'body1',
              children:
                (a = a.body) != null ? a : h._('__JHASH__CqRdaTob61___JHASH__'),
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
  'CometComposerFooterAttachmentArea.react',
  [
    'CometComposerFooterAttachmentPluginTypes',
    'CometComposerGenericAttachmentPendingPreview.react',
    'CometComposerRemoveAttachmentButton.react',
    'CometErrorBoundary.react',
    'CometPlaceholder.react',
    'composerFooterAttachmentAreaChecker',
    'composerFooterAttachmentAreaReducer',
    'react',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useCallback;
    function a(a) {
      c('useComposerViewStateReducer')(
        d('composerFooterAttachmentAreaReducer')
          .composerFooterAttachmentAreaReducer,
        c('composerFooterAttachmentAreaChecker'),
      );
      var b = a.activeFooterAttachmentType,
        e = a.children,
        f = c('useComposerViewStateDispatcher')(),
        g = i(
          function () {
            if (b == null) return;
            f({
              footerAttachmentType: b,
              type: 'REMOVE_FOOTER_ATTACHMENT_TYPE',
            });
            f({ type: 'RESET_PLACEHOLDER_TEXT' });
          },
          [b, f],
        );
      a =
        b ===
          c('CometComposerFooterAttachmentPluginTypes').GROUP_WELCOME_POST &&
        a.composerType === 'edit';
      if (b != null) {
        var j = e(b);
        if (j != null)
          return h.jsx('div', {
            className: 'x1pi30zi x1swvt13 xyamay9 x1n2onr6',
            children: h.jsxs(c('CometPlaceholder.react'), {
              fallback: h.jsx(
                c('CometComposerGenericAttachmentPendingPreview.react'),
                {},
              ),
              children: [
                h.jsx(c('CometErrorBoundary.react'), {
                  onError: g,
                  children: e(b),
                }),
                !a &&
                  h.jsx('div', {
                    className: 'x1memqgq x10l6tqk xmhk92p xhkc9bb',
                    children: h.jsx(
                      c('CometComposerRemoveAttachmentButton.react'),
                      { removeAttachment: g },
                    ),
                  }),
              ],
            }),
          });
      }
      return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withComposerViewStatePart')(a, function (a) {
      return {
        activeFooterAttachmentType:
          (a = a.footerAttachmentArea) == null
            ? void 0
            : a.activeFooterAttachmentType,
      };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'CometComposerPreAttachmentArea.react',
  [
    'CometComposerGenericAttachmentPendingPreview.react',
    'CometErrorBoundary.react',
    'CometPlaceholder.react',
    'react',
    'useComposerViewStateDispatcher',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useCallback;
    function a(a) {
      var b = a.activePreAttachmentType;
      a = a.children;
      var d = c('useComposerViewStateDispatcher')(),
        e = i(
          function () {
            if (b == null) return;
            d({ preAttachmentType: b, type: 'REMOVE_PRE_ATTACHMENT_TYPE' });
          },
          [b, d],
        );
      if (b != null) {
        var f = a(b);
        if (f != null)
          return h.jsx('div', {
            className: 'x6s0dn4 x78zum5 xl56j7k x1e56ztr x1n2onr6',
            children: h.jsx(c('CometPlaceholder.react'), {
              fallback: h.jsx(
                c('CometComposerGenericAttachmentPendingPreview.react'),
                {},
              ),
              children: h.jsx(c('CometErrorBoundary.react'), {
                onError: e,
                children: a(b),
              }),
            }),
          });
      }
      return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withComposerViewStatePart')(a, function (a) {
      return {
        activePreAttachmentType:
          (a = a.preAttachmentArea) == null
            ? void 0
            : a.activePreAttachmentType,
      };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'useHandleSideloadedMedia',
  [
    'fbt',
    'CometComposerAttachmentPluginTypes',
    'cometIsMimeTypeForMedia',
    'composerAttachmentAreaChecker',
    'composerAttachmentAreaReducer',
    'composerMediaAttachmentReducer',
    'react',
    'useComposerFeatureIneligibility',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react').useCallback;
    function a(a, b, e) {
      a === void 0 && (a = !1);
      b === void 0 && (b = !1);
      e === void 0 && (e = !1);
      c('useComposerViewStateReducer')(
        d('composerAttachmentAreaReducer').composerAttachmentAreaReducer,
        c('composerAttachmentAreaChecker'),
      );
      c('useComposerViewStateReducer')(c('composerMediaAttachmentReducer'));
      var f = c('useComposerViewStateDispatcher')(),
        g = c('useComposerFeatureIneligibility')(),
        j = g.has(c('CometComposerAttachmentPluginTypes').MEDIA);
      return i(
        function (c) {
          if (!j) {
            c = Array.from(c)
              .filter(function (c) {
                return (
                  (d('cometIsMimeTypeForMedia').isMimeTypeForPhoto(c.type) &&
                    !b) ||
                  (d('cometIsMimeTypeForMedia').isMimeTypeForVideo(c.type) &&
                    !a)
                );
              })
              .map(function (a) {
                return a instanceof File
                  ? a
                  : new File(
                      [a],
                      h._('__JHASH__8IWe8nSZjoW__JHASH__').toString(),
                    );
              });
            c.length > 0 &&
              (e === !0 && f({ type: 'REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS' }),
              f({ attachmentType: 'MEDIA', type: 'ACTIVATE_ATTACHMENT_TYPE' }),
              f({ files: c, type: 'ADD_MEDIA_ATTACHMENT_ITEMS' }));
          }
        },
        [j, a, b, f],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerMediaDropTarget.react',
  [
    'fbt',
    'TetraText.react',
    'react',
    'useFileDragEvents',
    'useHandleSideloadedMedia',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useRef;
    function a(a) {
      var b = a.children,
        d = a.disablePhoto;
      d = d === void 0 ? !1 : d;
      var e = a.disableVideo;
      e = e === void 0 ? !1 : e;
      var f = a.isOverrideOn;
      f = f === void 0 ? !1 : f;
      a = a.multiple;
      var g = a === void 0 ? !0 : a,
        h = c('useHandleSideloadedMedia')(e, d, f),
        m = j(function (a) {
          switch (a) {
            case 'text/plain':
            case 'text/html':
            case 'text/uri-list':
              return !0;
            default:
              return !1;
          }
        }, []);
      a = j(
        function (a) {
          a = ((a = a.dataTransfer) == null ? void 0 : a.items) || [];
          return !g && a.length > 1
            ? !1
            : a.length > 0 &&
                !Array.from(a).find(function (a) {
                  return m(a.type);
                });
        },
        [m, g],
      );
      f = c('useFileDragEvents')(
        function (a) {
          return !1;
        },
        document.documentElement,
        a,
      );
      var n = k(null);
      a = c('useFileDragEvents')(
        function (a) {
          h(Array.from(a));
        },
        n.current,
        a,
      );
      f = f || a;
      return i.jsxs('div', {
        className: 'x9f619 x5yr21d x1n2onr6 xh8yej3',
        ref: n,
        children: [
          typeof b === 'function' ? b(f) : b,
          f === !0
            ? i.jsx('div', {
                className:
                  'x6s0dn4 x1h0vfkc x1ey2m1c x78zum5 xds687c xl56j7k x10l6tqk x17qophe x13vifvy',
                children: i.jsx('div', {
                  className: 'x1y1aw1k x1sxyh0 xwib8y2 xurb0ha',
                  children: i.jsx(c('TetraText.react'), {
                    type: 'body1',
                    children: l({
                      disablePhoto: d,
                      disableVideo: e,
                      multiple: g,
                    }),
                  }),
                }),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function l(a) {
      var b = a.disablePhoto,
        c = a.disableVideo;
      a = a.multiple;
      a = a ? 2 : 1;
      if (b === !1 && c === !1)
        return h._('__JHASH__HPG7Xp4PR1E__JHASH__', [
          h._plural(a),
          h._plural(a),
        ]);
      if (b === !1) return h._('__JHASH__SLtKAMVC1vJ__JHASH__', [h._plural(a)]);
      return c === !1
        ? h._('__JHASH__BM7-243YeF5__JHASH__', [h._plural(a)])
        : h._('__JHASH__dRM5syXkolT__JHASH__', [h._plural(a)]);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerWarnStatusTextLengthForLexicalDeferred.react',
  ['createComposerDeferredPlugin', 'react', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    a = c('createComposerDeferredPlugin')(
      c('requireDeferred')(
        'CometComposerWarnStatusTextLengthForLexical.react',
      ).__setRef('CometComposerWarnStatusTextLengthForLexicalDeferred.react'),
    );
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerWarnStatusTextLength.react',
  [
    'CometComposerInlineErrorRenderer.react',
    'CometComposerStylingConstants',
    'CometComposerWarnStatusTextLengthForLexicalDeferred.react',
    'getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE',
    'react',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.characterLimit,
        e = a.editorState,
        f = a.lexicalEditor;
      a = a.xstyle;
      b =
        (b = b) != null
          ? b
          : d('CometComposerStylingConstants').COMPOSER_CHARACTER_LIMIT;
      if (f != null)
        return h.jsx(
          c('CometComposerWarnStatusTextLengthForLexicalDeferred.react'),
          { characterLimit: b, lexicalEditor: f, xstyle: a },
        );
      else if (e != null) {
        f = c('getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE')(
          e,
        ).length;
        if (
          f + d('CometComposerStylingConstants').COMPOSER_WARNING_LIMIT + 1 >
          b
        )
          return h.jsx(c('CometComposerInlineErrorRenderer.react'), {
            error: b - f,
            xstyle: a,
          });
      }
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withComposerViewStatePart')(a, function (a) {
      return {
        characterLimit: a.characterLimit,
        editorState: a.editorState,
        lexicalEditor: a.lexicalEditor,
      };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'cometComposerMediaUploadErrorUtil',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 3,
      h = 'NO_ADDITIONAL_ERROR_MESSAGES_FOUND';
    function i(a) {
      return (a || []).reduce(
        function (a, b) {
          if (b.state === 'FAILED') {
            b = b.error;
            b == null
              ? (a.NO_ADDITIONAL_ERROR_MESSAGES_FOUND += 1)
              : (a[b] = isNaN(a[b]) ? 1 : a[b] + 1);
          }
          return a;
        },
        { NO_ADDITIONAL_ERROR_MESSAGES_FOUND: 0 },
      );
    }
    function a(a) {
      var b = Object.keys(a);
      return b.length === 1
        ? a[b[0]]
        : b.reduce(function (b, c) {
            return c !== h && a[c] > b ? a[c] : b;
          }, 0);
    }
    function b(a) {
      if (a == null) return null;
      var b = i(a),
        c,
        d = Object.keys(b);
      d =
        d.length === 1
          ? b[d[0]]
          : d.reduce(function (a, d) {
              if (a === h) return a;
              if (b[d] > a) {
                c = d;
                return b[d];
              }
              return a;
            }, 0);
      var e = [];
      a.some(function (a) {
        if (
          (a == null ? void 0 : a.state) === 'FAILED' &&
          (String(a == null ? void 0 : a.error) === c ||
            (c == null && (a == null ? void 0 : a.error) == null))
        ) {
          e.push((a = a.file) == null ? void 0 : a.name);
        }
        return e.length === g ? !0 : !1;
      });
      return { additionalErrorMessage: c, count: d, fileNames: e };
    }
    f.getGroupedErrors = i;
    f.getMostCommonErrorCount = a;
    f.getMostCommonError = b;
  },
  66,
);
__d(
  'makeMediaAttachmentReadyForPreview',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      switch (a.state) {
        case 'NEW':
        case 'CLIENT_PROCESSING':
          switch (a.fileType) {
            case 'PHOTO':
              return {
                data: a.data,
                file: a.file,
                fileObjectURL: a.fileObjectURL,
                fileType: 'PHOTO',
                sphericalEncoding: a.sphericalEncoding,
                state: 'CLIENT_PROCESSING',
                useCDNPreview: a.useCDNPreview,
              };
            case 'VIDEO':
              return {
                data: a.data,
                file: a.file,
                fileObjectURL: a.fileObjectURL,
                fileType: 'VIDEO',
                state: 'CLIENT_PROCESSING',
                useCDNPreview: a.useCDNPreview,
              };
            default:
              return a;
          }
        case 'PREEXISTING':
          return a;
        case 'UPLOADED':
          switch (a.fileType) {
            case 'PHOTO':
              return {
                data: a.data,
                entID: a.data.id,
                file: a.file,
                fileObjectURL: a.fileObjectURL,
                fileType: 'PHOTO',
                height: a.height,
                sphericalEncoding: a.sphericalEncoding,
                state: 'UPLOADED',
                takenTime: a.takenTime,
                useCDNPreview: a.useCDNPreview,
                width: a.width,
              };
            case 'VIDEO':
              return {
                data: a.data,
                entID: a.data.id,
                file: a.file,
                fileObjectURL: a.fileObjectURL,
                fileType: 'VIDEO',
                height: a.height,
                state: 'UPLOADED',
                useCDNPreview: a.useCDNPreview,
                videoAttachmentMetadata: a.videoAttachmentMetadata,
                width: a.width,
              };
            default:
              return a;
          }
        case 'FAILED':
          switch (a.fileType) {
            case 'PHOTO':
              return {
                data: a.data,
                error: a.error,
                file: a.file,
                fileObjectURL: a.fileObjectURL,
                fileType: 'PHOTO',
                height: a.height,
                sphericalEncoding: a.sphericalEncoding,
                state: 'FAILED',
                useCDNPreview: !0,
                width: a.width,
              };
            case 'VIDEO':
              return {
                data: a.data,
                error: a.error,
                file: a.file,
                fileObjectURL: a.fileObjectURL,
                fileType: 'VIDEO',
                height: a.height,
                state: 'FAILED',
                useCDNPreview: !0,
                width: a.width,
              };
            default:
              return a;
          }
        default:
          var b;
          switch (a.state) {
            case 'QUEUED':
              b = 0;
              break;
            case 'UPLOADING':
              b = a.percentComplete;
              break;
            case 'UPLOADED':
              b = 1;
              break;
            default:
              b = void 0;
              break;
          }
          switch (a.fileType) {
            case 'PHOTO':
              return {
                fileMimeType: a.file.type,
                fileName: a.file.name,
                fileObjectURL: a.fileObjectURL,
                fileType: a.fileType,
                height: a.height,
                percentComplete: b,
                sphericalEncoding: a.sphericalEncoding,
                state: 'OPTIMISTIC_UPLOADED',
                uploadID: a.file.uploadID,
                useCDNPreview: a.useCDNPreview,
                width: a.width,
              };
            case 'VIDEO':
              return {
                fileMimeType: a.file.type,
                fileName: a.file.name,
                fileObjectURL: a.fileObjectURL,
                fileType: a.fileType,
                height: a.height,
                percentComplete: b,
                state: 'OPTIMISTIC_UPLOADED',
                uploadID: a.file.uploadID,
                useCDNPreview: a.useCDNPreview,
                width: a.width,
              };
            default:
              return {
                fileMimeType: a.file.type,
                fileName: a.file.name,
                fileObjectURL: a.fileObjectURL,
                fileType: a.fileType,
                percentComplete: b,
                state: 'OPTIMISTIC_UPLOADED',
                uploadID: a.file.uploadID,
              };
          }
      }
    }
    f['default'] = a;
  },
  66,
);
__d(
  'cometComposerValidateMediaUploadStarted',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a) {
      var b;
      b =
        ((b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType) !==
          'MEDIA' ||
        (a.mediaAttachments != null && a.mediaAttachments.length > 0);
      a = (a.mediaAttachments || []).some(function (a) {
        return a.state === 'NEW';
      });
      return !b || a ? h._('__JHASH__bhfSZ9zrliT__JHASH__') : null;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'cometComposerValidateMediaUploadSuccess',
  ['fbt', 'cometComposerMediaUploadErrorUtil'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a) {
      a = a.mediaAttachments;
      if (a == null) return null;
      a = d('cometComposerMediaUploadErrorUtil').getGroupedErrors(a);
      var b = Object.keys(a);
      if (b.length === 1 && a.NULL === 0) return null;
      b = d('cometComposerMediaUploadErrorUtil').getMostCommonErrorCount(a);
      return b === 0
        ? null
        : h._('__JHASH__kFLenvL4cy0__JHASH__', [h._plural(b)]);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometComposerValidateStatusTextLengthForLexicalNoop.react',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return null;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'useCometComposerFormRef',
  ['CometComposerFormRefContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      var a = h(c('CometComposerFormRefContext'));
      return a.current;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'getFirstComposerValidationError',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      b === void 0 && (b = new Set());
      a = Object.keys((a = a) != null ? a : {});
      return (a = a.find(function (a) {
        return !b.has(a);
      })) != null
        ? a
        : null;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'CometComposerClientErrorMessage.react',
  [
    'CometComposerWarnStatusTextLength.react',
    'CometPlaceholder.react',
    'JSResourceForInteraction',
    'getFirstComposerValidationError',
    'lazyLoadComponent',
    'react',
    'useComposerValidationErrors',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'CometComposerClientErrorMessageRenderer.react',
        ).__setRef('CometComposerClientErrorMessage.react'),
      );
    function a(a) {
      var b = a.icon,
        d = a.showTextWarnings;
      d = d === void 0 ? !0 : d;
      var e = a.silencedErrors;
      a = a.xstyle;
      var f = c('useComposerValidationErrors')();
      e = c('getFirstComposerValidationError')(
        f,
        (e = e) != null ? e : new Set(),
      );
      if (e == null)
        return d === !0
          ? h.jsx(c('CometComposerWarnStatusTextLength.react'), { xstyle: a })
          : null;
      d = f[e];
      return h.jsx(c('CometPlaceholder.react'), {
        fallback: null,
        children: h.jsx(i, { error: d, errorType: e, icon: b, xstyle: a }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'getDeferredComposerLogger',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return function (b, c, d) {
        a.loadImmediately(function (a) {
          a(b, c, d);
        });
      };
    }
    f['default'] = a;
  },
  66,
);
__d(
  'useHandleErrorBySettingState',
  ['CometRelayErrorHandling', 'SilenceableErrorMessageUtils', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useState;
    function a() {
      var a = h(),
        b = a[0],
        c = a[1];
      return [
        b,
        function (a) {
          var b = d('SilenceableErrorMessageUtils').getMetadataFromError(a);
          c(b);
          d('CometRelayErrorHandling').markErrorAsHandled(a);
        },
      ];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'arePrivacyDataEqual',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = ['allow', 'deny'];
    function a(a, b) {
      if (a == null && b == null) return !0;
      else if (a == null || b == null) return !1;
      if (a.base_state !== b.base_state) return !1;
      for (
        var c = g,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var h = a[f] || [],
          i = b[f] || [];
        if (h.length !== i.length) return !1;
        if (h.length > 0) {
          f = (function () {
            var a = new Set(i);
            if (
              !h.every(function (b) {
                return a.has(b);
              })
            )
              return { v: !1 };
          })();
          if (typeof f === 'object') return f.v;
        }
      }
      return !0;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'composerPrivacyAudienceChecker',
  ['arePrivacyDataEqual'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      return !c('arePrivacyDataEqual')(
        a == null ? void 0 : (a = a.audience) == null ? void 0 : a.privacy,
        b == null ? void 0 : (a = b.audience) == null ? void 0 : a.privacy,
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useComposerPrivacyAudienceReducer',
  ['composerPrivacyAudienceChecker', 'useComposerViewStateReducer'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      c('useComposerViewStateReducer')(
        h,
        a === !0 ? c('composerPrivacyAudienceChecker') : void 0,
      );
    }
    function h(a, b) {
      return 'update_audience' === b.type
        ? babelHelpers['extends']({}, a, { audience: b.audience })
        : a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'coercePrivacyData',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (a == null) return null;
      var b = a.privacy_targeting;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['privacy_targeting']);
      return babelHelpers['extends']({ privacy_targeting: b }, a);
    }
    f['default'] = a;
  },
  66,
);
__d(
  'useComposerPrivacyChangeHandlers',
  [
    'CometComposerViewStateContext',
    'coercePrivacyData',
    'react',
    'requireDeferred',
    'useComposerViewStateDispatcher',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext,
      j = c('requireDeferred')('ComposerTelemetryFalcoEvent').__setRef(
        'useComposerPrivacyChangeHandlers',
      );
    function a() {
      var a,
        b = c('useComposerViewStateDispatcher')(),
        d = i(c('CometComposerViewStateContext'));
      a = h(
        function (a) {
          a.type === 'init' || a.type === 'success'
            ? (j.onReady(function (b) {
                return b.log(function () {
                  var b;
                  return {
                    call_site: 'useComposerPrivacyChangeHandlers',
                    creation_session_id:
                      (b = d.creationSessionID) != null ? b : '',
                    debug_info:
                      'viewState privacy info:' +
                      ((b =
                        (b = d.audience) == null
                          ? void 0
                          : (b = b.privacy) == null
                          ? void 0
                          : b.base_state) != null
                        ? b
                        : 'null') +
                      ' |private row input:' +
                      ((b =
                        (b = a.privacyRowInput) == null
                          ? void 0
                          : b.base_state) != null
                        ? b
                        : 'null'),
                    event: 'onPrivacyChange.' + a.type,
                  };
                });
              }),
              k(b, a.privacyRowInput))
            : a.type === 'error'
            ? k(b, null)
            : a.type;
        },
        [
          b,
          (a = d.audience) == null
            ? void 0
            : (a = a.privacy) == null
            ? void 0
            : a.base_state,
          d.creationSessionID,
        ],
      );
      var e = h(
        function (a) {
          k(b, a);
        },
        [b],
      );
      return { onPrivacyChange: a, onPrivacyChangeStart: e };
    }
    function k(a, b) {
      a({
        audience: { privacy: c('coercePrivacyData')(b) },
        type: 'update_audience',
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useComposerPrivacyTagsForDraftJS',
  ['FBLogger', 'emptyArray', 'react', 'useDebouncedComet'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useMemo,
      j = b.useState,
      k = 500;
    function a(a) {
      var b = j(null),
        d = b[0],
        e = b[1],
        f = c('useDebouncedComet')(l, { wait: k });
      h(
        function () {
          f(a, e, d);
        },
        [f, a, e, d],
      );
      return i(
        function () {
          if (d == null) return c('emptyArray');
          var a = new Set();
          if (d != null)
            for (
              var b = d,
                e = Array.isArray(b),
                f = 0,
                b = e
                  ? b
                  : b[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var g;
              if (e) {
                if (f >= b.length) break;
                g = b[f++];
              } else {
                f = b.next();
                if (f.done) break;
                g = f.value;
              }
              g = g;
              a.add(g);
            }
          return Array.from(a);
        },
        [d],
      );
    }
    function l(a, b, d) {
      if (a == null || a.__type !== 'editor-state-based') return;
      var e = new Set(),
        f = a.draftEditorState.getCurrentContent();
      f.getBlockMap().forEach(function (a) {
        a.findEntityRanges(
          function () {
            return !0;
          },
          function (b) {
            b = a.getEntityAt(b);
            if (b == null) return;
            b = f.getEntity(b);
            if (b.getType() !== 'MENTION') return;
            b = b.getData();
            b = b.id;
            if (b == null) return;
            if (/^[0-9]+$/.test(b) === !1) {
              c('FBLogger')('comet_composer').mustfix(
                'Entity with type MENTION had an unexpected non-FBID id: %s',
                b,
              );
              return;
            }
            e.add(b);
          },
        );
      });
      a =
        d != null &&
        e.size === d.size &&
        Array.from(e).every(function (a) {
          return d.has(a);
        });
      a || b(e);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useComposerPrivacyTagsForLexical',
  ['CometLexicalGenericEntityNode', 'Lexical', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function k(a) {
      var b = [];
      a != null &&
        a.getEditorState().read(function () {
          d('Lexical')
            .$nodesOfType(
              d('CometLexicalGenericEntityNode').CometLexicalGenericEntityNode,
            )
            .forEach(function (a) {
              a.getEntityType() !== 'Hashtag' && b.push(a.getID());
            });
        });
      return b;
    }
    function a(a) {
      var b = i(new Map()),
        c = j(k(a)),
        e = c[0],
        f = c[1];
      h(
        function () {
          if (a != null)
            return a.registerMutationListener(
              d('CometLexicalGenericEntityNode').CometLexicalGenericEntityNode,
              function (c) {
                var e = a.getEditorState(),
                  g = function () {
                    if (i) {
                      if (j >= h.length) return 'break';
                      k = h[j++];
                    } else {
                      j = h.next();
                      if (j.done) return 'break';
                      k = j.value;
                    }
                    var a = k,
                      c = a[0];
                    a = a[1];
                    var f = e.read(function () {
                      return d('Lexical').$getNodeByKey(c);
                    });
                    if (
                      f != null &&
                      a === 'created' &&
                      f.getEntityType() !== 'Hashtag'
                    ) {
                      f = f.getID();
                      b.current.set(c, f);
                    } else a === 'destroyed' && b.current['delete'](c);
                  };
                for (
                  var h = c.entries(),
                    i = Array.isArray(h),
                    j = 0,
                    h = i
                      ? h
                      : h[
                          typeof Symbol === 'function'
                            ? Symbol.iterator
                            : '@@iterator'
                        ]();
                  ;

                ) {
                  var k;
                  c = g();
                  if (c === 'break') break;
                }
                f([].concat(Array.from(new Set(b.current.values()))));
              },
            );
        },
        [a],
      );
      return e;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useComposerPrivacyTags',
  [
    'react',
    'useComposerPrivacyTagsForDraftJS',
    'useComposerPrivacyTagsForLexical',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a(a, b, d) {
      var e = c('useComposerPrivacyTagsForDraftJS')(a),
        f = c('useComposerPrivacyTagsForLexical')(b);
      return h(
        function () {
          return Array.from(new Set([].concat(e, f, d)));
        },
        [e, f, d],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'composerEditorRefViewStateReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      switch (b.type) {
        case 'update_editor_ref':
          if (b.editorRef !== a.editorRef)
            return babelHelpers['extends']({}, a, { editorRef: b.editorRef });
          break;
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'composerTextStateChecker',
  ['getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
      return (a == null ? void 0 : a.__type) === 'editor-state-based'
        ? a.draftEditorState.getCurrentContent()
        : null;
    };
    function a(a, b) {
      var d = h(a == null ? void 0 : a.editorState),
        e = h(b.editorState);
      if (d && e) return !d.equals(e);
      d = (a == null ? void 0 : a.editorState)
        ? c('getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE')(
            a == null ? void 0 : a.editorState,
          ).trim()
        : '';
      e = (b == null ? void 0 : b.editorState)
        ? c('getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE')(
            b == null ? void 0 : b.editorState,
          ).trim()
        : '';
      return d !== e;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometMentionsARIAProperties',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useState;
    function a() {
      var a = i(),
        b = a[0],
        c = a[1];
      a = i();
      var d = a[0],
        e = a[1];
      a = h(function (a, b) {
        e(a), c(b);
      }, []);
      return [{ ariaActiveDescendantID: d, ariaControls: b }, a];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useMemoCompositeDecorator',
  ['CometComposerPluginsContext', 'react', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useState,
      l = c('requireDeferred')('CompositeDraftDecorator').__setRef(
        'useMemoCompositeDecorator',
      );
    function a() {
      var a = h(c('CometComposerPluginsContext')),
        b = a.decorators,
        d = l.getModuleIfRequired();
      a = k(d != null);
      a[0];
      var e = a[1];
      i(function () {
        var a = l.onReady(function () {
          e(!0);
        });
        return a.remove;
      }, []);
      return j(
        function () {
          if (d == null) return null;
          if (b.size === 0) return null;
          var a = Array.from(b.keys());
          a.sort(function (a, b) {
            return a.priority - b.priority;
          });
          return new d(a);
        },
        [b, d],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerEditor.react',
  [
    'CometComposerPluginsContext',
    'CometMentionsA11yContext',
    'DeferredDraftEditorDEPRECATED.react',
    'DraftEditorFlushControlled',
    'Keys',
    'composerEditorRefViewStateReducer',
    'composerEditorStateViewStateReducer',
    'composerTextStateChecker',
    'cr:11134',
    'getDefaultKeyBinding',
    'isSoftNewlineEvent',
    'react',
    'requireDeferred',
    'useCometComposerFormRef',
    'useCometMentionsARIAProperties',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
    'useMemoCompositeDecorator',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useMemo,
      m = e.useRef,
      n = c('requireDeferred')('EditorState').__setRef(
        'CometComposerEditor.react',
      ),
      o = (d = b('cr:11134')) != null ? d : h.Fragment,
      p = {
        root: {
          boxSizing: 'x9f619',
          display: 'x1lliihq',
          height: 'x5yr21d',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function q(a, b) {
      if (a == null) return b;
      return b == null
        ? a
        : function () {
            var c = a.apply(void 0, arguments);
            return c === 'handled' ? c : b.apply(void 0, arguments);
          };
    }
    function r(a, b) {
      if (a == null) return b;
      return b == null
        ? a
        : function (c) {
            var d = b(c);
            d == null && (d = a(c));
            return d;
          };
    }
    function s(a, b, c) {
      switch (a) {
        case 'ComposerEditor/submit':
          return 'handled';
      }
      return 'not-handled';
    }
    function t(a) {
      var b = j(c('CometComposerPluginsContext')),
        d = b.handlers;
      return l(
        function () {
          var b = Array.from(d.keys());
          b.sort(function (a, b) {
            return a.priority - b.priority;
          });
          return b.reduce(function (a, b) {
            return {
              handleBeforeInput: q(a.handleBeforeInput, b.handleBeforeInput),
              handleDrop: q(a.handleDrop, b.handleDrop),
              handleDroppedFiles: q(a.handleDroppedFiles, b.handleDroppedFiles),
              handleKeyCommand: q(a.handleKeyCommand, b.handleKeyCommand),
              handlePastedFiles: q(a.handlePastedFiles, b.handlePastedFiles),
              handlePastedText: q(a.handlePastedText, b.handlePastedText),
              handleReturn: q(a.handleReturn, b.handleReturn),
              keyBindingFn: r(a.keyBindingFn, b.keyBindingFn),
            };
          }, a);
        },
        [
          d,
          a.handleBeforeInput,
          a.handleDrop,
          a.handleDroppedFiles,
          a.handleKeyCommand,
          a.handlePastedFiles,
          a.handlePastedText,
          a.handleReturn,
          a.keyBindingFn,
        ],
      );
    }
    function a(a, b) {
      var d = a.autoFocus;
      d = d === void 0 ? !0 : d;
      var e = a.draftEditorRendering,
        f = a.editorState,
        g = a.onChange,
        j = a.onEscape,
        q = a.readOnly;
      q = q === void 0 ? !1 : q;
      var u = a.renderLabel,
        v = a.spellCheck;
      v = v === void 0 ? !0 : v;
      var w = a.stripPastedStyles;
      w = w === void 0 ? !0 : w;
      var x = a.submitOnEnter,
        y = x === void 0 ? !1 : x;
      x = a.testid;
      x = a.textAlignment;
      var z = a.textDirectionality,
        A = a.typingPerformanceAnnotations,
        B = a.typingPerformanceID;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'autoFocus',
        'draftEditorRendering',
        'editorState',
        'onChange',
        'onEscape',
        'readOnly',
        'renderLabel',
        'spellCheck',
        'stripPastedStyles',
        'submitOnEnter',
        'testid',
        'textAlignment',
        'textDirectionality',
        'typingPerformanceAnnotations',
        'typingPerformanceID',
      ]);
      var C = m(!1),
        D = m(!1),
        E = c('useCometComposerFormRef')();
      c('useComposerViewStateReducer')(
        c('composerEditorStateViewStateReducer'),
        c('composerTextStateChecker'),
      );
      c('useComposerViewStateReducer')(c('composerEditorRefViewStateReducer'));
      var F =
        f != null && f.__type === 'editor-state-based'
          ? f.draftEditorState.isInCompositionMode()
          : !1;
      k(
        function () {
          if (C.current && !F && D.current) {
            D.current = !1;
            if (E != null) {
              var a = new Event('submit', { bubbles: !0, cancelable: !0 });
              E.dispatchEvent(a);
            }
          }
          C.current = F;
        },
        [F, E],
      );
      var G = i(
          function (a) {
            if (E != null && E instanceof HTMLFormElement) {
              a.preventDefault();
              if (C.current) D.current = !0;
              else {
                typeof window.Event === 'function'
                  ? (a = new Event('submit', { bubbles: !0, cancelable: !0 }))
                  : ((a = document.createEvent('Event')),
                    a.initEvent('submit', !0, !0));
                E.dispatchEvent(a);
              }
              return 'ComposerEditor/submit';
            }
          },
          [E],
        ),
        H = i(
          function (a) {
            return a.keyCode === c('Keys').RETURN && !c('isSoftNewlineEvent')(a)
              ? G(a)
              : void 0;
          },
          [G],
        ),
        I = i(
          function (a) {
            return a.keyCode === c('Keys').RETURN && (a.metaKey || a.ctrlKey)
              ? G(a)
              : void 0;
          },
          [G],
        ),
        J = i(
          function (a) {
            return a.keyCode === c('Keys').ESC && j != null ? j() : void 0;
          },
          [j],
        ),
        K = a.handleBeforeInput,
        L = a.handleDrop,
        M = a.handleDroppedFiles,
        N = a.handleKeyCommand,
        O = a.handlePastedFiles,
        P = a.handlePastedText,
        Q = a.handleReturn,
        R = a.keyBindingFn,
        S = a.placeholder;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'handleBeforeInput',
        'handleDrop',
        'handleDroppedFiles',
        'handleKeyCommand',
        'handlePastedFiles',
        'handlePastedText',
        'handleReturn',
        'keyBindingFn',
        'placeholder',
      ]);
      var T = t({
          handleBeforeInput: K,
          handleDrop: L,
          handleDroppedFiles: M,
          handleKeyCommand: N,
          handlePastedFiles: O,
          handlePastedText: P,
          handleReturn: Q,
          keyBindingFn: r(c('getDefaultKeyBinding'), R),
        }),
        U = i(
          function (a) {
            var b = T.keyBindingFn && T.keyBindingFn(a),
              c =
                b !== 'MentionsAutocomplete/cancel'
                  ? r(T.keyBindingFn, J)
                  : T.keyBindingFn;
            c = r(c, I);
            if (y && b !== 'MentionsAutocomplete/select-mention') {
              b = r(c, H);
              return b && b(a);
            }
            return c && c(a);
          },
          [J, I, H, T, y],
        ),
        V = i(
          function (a, b, c) {
            if (
              (T.handleKeyCommand == null
                ? void 0
                : T.handleKeyCommand(a, b, c)) === 'handled'
            )
              return 'handled';
            return y ? s(a, b, c) : 'not-handled';
          },
          [T, y],
        );
      K = l(
        function () {
          return babelHelpers['extends']({}, T, {
            handleKeyCommand: V,
            keyBindingFn: U,
          });
        },
        [T, V, U],
      );
      L = n.getModuleIfRequired();
      M = c('useMemoCompositeDecorator')();
      var W = c('useComposerViewStateDispatcher')();
      N =
        f == null
          ? c('DeferredDraftEditorDEPRECATED.react').createEmptyComposerState()
          : f;
      O = i(
        function (a) {
          W({ editorRef: a, type: 'update_editor_ref' });
        },
        [W],
      );
      P = i(
        function (a) {
          c('DraftEditorFlushControlled')
            ? c('DraftEditorFlushControlled')(function () {
                return W({
                  editorState: g != null ? g(a) : a,
                  type: 'update_editor_state',
                });
              })
            : W({
                editorState: g != null ? g(a) : a,
                type: 'update_editor_state',
              });
        },
        [W, g],
      );
      N.__type === c('DeferredDraftEditorDEPRECATED.react').EDITOR_STATE &&
        N.draftEditorState.getDecorator() !== M &&
        L != null &&
        (N = babelHelpers['extends']({}, N, {
          draftEditorState: L.set(N.draftEditorState, { decorator: M }),
        }));
      Q = !1;
      R = !1;
      N.__type === c('DeferredDraftEditorDEPRECATED.react').PLAIN_TEXT
        ? ((Q = N.hasFocus), (R = N.text != null))
        : N.__type === c('DeferredDraftEditorDEPRECATED.react').EDITOR_STATE &&
          ((Q = N.draftEditorState.getSelection().getHasFocus()),
          (R = N.draftEditorState.getCurrentContent().hasText()));
      f =
        (u != null && !Q) ||
        (N.__type === c('DeferredDraftEditorDEPRECATED.react').EDITOR_STATE &&
          N.draftEditorState
            .getCurrentContent()
            .getBlockMap()
            .first()
            .getType() !== 'unstyled')
          ? void 0
          : S;
      L = c('useCometMentionsARIAProperties')();
      S = L[0];
      L = L[1];
      return h.jsx(c('CometMentionsA11yContext').Provider, {
        value: L,
        children: h.jsxs(o, {
          children: [
            u ? u({ isEditorFilled: R, isEditorFocused: Q }) : null,
            h.jsx(
              c('DeferredDraftEditorDEPRECATED.react'),
              babelHelpers['extends']({}, a, K, e, S, {
                autoFocus: d,
                decorator: M,
                editorState: N,
                onInputRefUpdate: O,
                onStateChange: P,
                placeholder: f,
                readOnly: q,
                ref: b,
                spellCheck: v,
                stripPastedStyles: w,
                testid: void 0,
                textAlignment: x,
                textDirectionality: z,
                typingPerformanceAnnotations: A,
                typingPerformanceID:
                  (L = B) != null ? L : 'CometComposerEditor',
                xstyle: p.root,
              }),
            ),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withComposerViewStatePart')(h.forwardRef(a), function (a) {
      return { editorState: a.editorState };
    });
    g['default'] = e;
  },
  98,
);
__d(
  'composerDraftJSMessageFeedTransformDeferred',
  ['getDeferredComposerTransformer', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = c('getDeferredComposerTransformer')(
      c('requireDeferred')('composerMessageFeedTransform').__setRef(
        'composerDraftJSMessageFeedTransformDeferred',
      ),
    );
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerHashtagsPluginDeferredForDraftJS.react',
  ['createComposerDeferredPlugin', 'react', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    a = c('createComposerDeferredPlugin')(
      c('requireDeferred')(
        'CometComposerHashtagsPluginForDraftJS.react',
      ).__setRef('CometComposerHashtagsPluginDeferredForDraftJS.react'),
    );
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerHashtagsTypeaheadPluginDeferredForDraftJS.react',
  ['createComposerDeferredPlugin', 'react', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    a = c('createComposerDeferredPlugin')(
      c('requireDeferred')(
        'FeedComposerCometHashtagsWithTypeaheadPlugin.react',
      ).__setRef(
        'CometComposerHashtagsTypeaheadPluginDeferredForDraftJS.react',
      ),
    );
    g['default'] = a;
  },
  98,
);
__d(
  'useCometComposerPrivacyPushPage',
  ['CometComposerPushPageContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.onClose,
        d = a.styles,
        e = a.withBackButton,
        f = a.withCloseButton,
        g = i(c('CometComposerPushPageContext'));
      return j(
        function () {
          return g == null
            ? void 0
            : function (a, c) {
                g(
                  String(c == null ? void 0 : c.title),
                  function (b) {
                    b = b.onReturn;
                    return h.jsx('div', {
                      className: d,
                      children: h.jsx(a, {
                        onReturn: b,
                        setTitle: function () {},
                      }),
                    });
                  },
                  {
                    onBack: function () {
                      var a = c == null ? void 0 : c.onBack;
                      a && a(function () {});
                    },
                    onClose: b,
                    withBackButton: e,
                    withCloseButton: f,
                  },
                );
              };
        },
        [g, b, d, e, f],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometComposerFormattedTextEligibilityCheckerForLexicalNoop.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    function a(a) {
      return new Set();
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometSATPDraftEditorRenderingProps',
  ['cr:1984289', 'emptyFunction'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d = (a = b('cr:1984289')) != null ? a : c('emptyFunction').thatReturnsNull;
    e = d;
    g['default'] = e;
  },
  98,
);
__d(
  'CometComposerSproutList.react',
  [
    'CometComposerEllipsisSproutButton.react',
    'CometComposerSproutVisibilitiesContext',
    'CometTooltipGroup.react',
    'FeedComposerCometSproutButtonContainer.react',
    'react',
    'useCometComposerInlineSproutsLogging',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.numInlineSprouts,
        d = a.sprouts;
      a = a.wideContainer;
      a = a === void 0 ? !1 : a;
      var e = c('useCometComposerInlineSproutsLogging')({
        actionType: 'INLINE_SPROUTS_INITIAL_STATE',
        maxLoggingCount: 1,
        sproutsCount: d.length,
        sproutsState: 'collapsed',
      });
      e = e.loggingHandlers;
      var f = d.length > b,
        g = d;
      f && (g = d.slice(0, b - 1));
      return h.jsx('div', {
        className: 'x78zum5' + (a ? ' x1qughib xh8yej3' : ''),
        children: h.jsx(c('CometComposerSproutVisibilitiesContext').Provider, {
          value: e,
          children: h.jsxs(c('CometTooltipGroup.react'), {
            children: [
              g.map(function (a) {
                return h.jsx(
                  'div',
                  {
                    className: 'xr9ek0c xfs2ol5 xjpr12u x12mruv9',
                    children: h.jsx(
                      c('FeedComposerCometSproutButtonContainer.react'),
                      { children: a },
                    ),
                  },
                  a.key,
                );
              }),
              f
                ? h.jsx('div', {
                    className: 'xr9ek0c xfs2ol5 xjpr12u x12mruv9',
                    children: h.jsx(
                      c('CometComposerEllipsisSproutButton.react'),
                      { sprouts: d },
                    ),
                  })
                : null,
            ],
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
  'CometComposerSproutListMatcher.react',
  [
    'CometComposerPushedPageOnLoad',
    'CometComposerSproutList.react',
    'CometRelay',
    'CometRouteParams',
    'castToEnum',
    'react',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.hasPromotion,
        d = a.numInlineSprouts,
        e = a.sproutProps,
        f = a.sprouts;
      a = a.wideContainer;
      return h.jsx(c('CometComposerSproutList.react'), {
        numInlineSprouts: d,
        sprouts: i(f, e, b),
        wideContainer: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b() {
      var a = d('CometRouteParams').useRouteParams();
      a = a.composer_push_page;
      return c('castToEnum')(a, c('CometComposerPushedPageOnLoad'));
    }
    function i(a, b, e) {
      a == null &&
        c('recoverableViolation')(
          'Server failed to provide a valid sprouts object for the composer.',
          'comet_composer',
        );
      e = e === !0 ? j(a, b) : { promotedSprout: null, unprocessedSprouts: a };
      a = e.promotedSprout;
      e = e.unprocessedSprouts;
      return [a]
        .concat(
          ((a = e) != null ? a : []).map(function (a, c) {
            return h.jsx(
              d('CometRelay').MatchContainer,
              { match: a, props: b },
              c,
            );
          }),
        )
        .filter(Boolean);
    }
    function j(a, b) {
      if (a == null) return { unprocessedSprouts: a };
      var c = a.slice(0, 2),
        e = c[0];
      c = c[1];
      c = h.jsx(d('CometRelay').MatchContainer, { match: c, props: b }, -1);
      b = h.jsx(
        d('CometRelay').MatchContainer,
        { match: e, props: { children: c } },
        -1,
      );
      return { promotedSprout: b, unprocessedSprouts: a.slice(2) };
    }
    a.useMatcher = i;
    g.CometComposerSproutListMatcher = a;
    g.useGetSproutToPushTo = b;
  },
  98,
);
__d(
  'cometComposerDiscussionPostEligibilityChecker',
  [
    'CometComposerAttachmentPluginTypes',
    'CometComposerFooterAttachmentPluginTypes',
    'CometComposerPreAttachmentPluginTypes',
    'CometComposerTaggerPluginTypes',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Set(['MINUTIAE', 'TAG', 'LOCATION']);
    function a(a) {
      var b, d;
      b = (b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType;
      var e = new Set();
      (b === 'DISCUSSION_POST' ||
        (((d = a.discussionMetadata) == null ? void 0 : d.prompt) !== null &&
          b === 'VIEW_ONLY_FEED_ATTACHMENT')) &&
        (Object.keys(c('CometComposerAttachmentPluginTypes')).forEach(function (
          a,
        ) {
          !h.has(a) && a !== 'DISCUSSION_POST' && e.add(a);
        }),
        Object.keys(c('CometComposerFooterAttachmentPluginTypes')).forEach(
          function (a) {
            return e.add(a);
          },
        ),
        Object.keys(c('CometComposerPreAttachmentPluginTypes')).forEach(
          function (a) {
            return e.add(a);
          },
        ),
        Object.keys(c('CometComposerTaggerPluginTypes')).forEach(function (a) {
          h.has(a) || e.add(a);
        }));
      a.isEditingPreExistingStory === !0 && e.add('DISCUSSION_POST');
      return e;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometComposerMaybePushLocationPageOnOpen',
  ['react', 'useCometComposerPushLocationPage'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = c('useCometComposerPushLocationPage')(),
        d = i(!1);
      h(
        function () {
          a && !d.current && ((d.current = !0), b());
        },
        [b, a],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'MarketplaceComposerPhotoSyncSubscription',
  ['MarketplaceComposerPhotoSyncSubscription.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    a =
      h !== void 0
        ? h
        : (h = b('MarketplaceComposerPhotoSyncSubscription.graphql'));
    c = a;
    g['default'] = c;
  },
  98,
);
__d(
  'useMarketplacePhotosyncCommandSubscription',
  [
    'Actor',
    'CometRelay',
    'react',
    'useMarketplacePhotosyncCommandSubscription.graphql',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useMemo,
      j =
        h !== void 0
          ? h
          : (h = b('useMarketplacePhotosyncCommandSubscription.graphql')),
      k = function (a) {
        return {
          subscription: j,
          variables: {
            input: { client_subscription_id: c('uuid')(), user_id: a },
          },
        };
      };
    function a(a) {
      var b = d('Actor').useActor(),
        c = b[0];
      d('CometRelay').useSubscription(
        i(
          function () {
            return babelHelpers['extends']({ onNext: a }, k(c));
          },
          [c, a],
        ),
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useMarketplaceSendPhotosyncCommand',
  ['CometRelay', 'react', 'useMarketplaceSendPhotosyncCommandMutation.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useCallback;
    function a() {
      var a = d('CometRelay').useMutation(
          h !== void 0
            ? h
            : (h = b('useMarketplaceSendPhotosyncCommandMutation.graphql')),
        ),
        c = a[0];
      return i(
        function (a) {
          c({ variables: { input: { command: a } } });
        },
        [c],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useMarketplaceSendPhotosyncNotification',
  [
    'CometRelay',
    'react',
    'useMarketplaceSendPhotosyncNotificationMutation.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useCallback;
    function a() {
      var a = d('CometRelay').useMutation(
          h !== void 0
            ? h
            : (h = b(
                'useMarketplaceSendPhotosyncNotificationMutation.graphql',
              )),
        ),
        c = a[0];
      return i(
        function () {
          c({ variables: {} });
        },
        [c],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometStarsOnboardingUpsellDialog.entrypoint',
  [
    'CometStarsOnboardingUpsellDialogQuery$Parameters',
    'JSResourceForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        a = a.pageID;
        return {
          queries: {
            upsellQuery: {
              parameters: c('CometStarsOnboardingUpsellDialogQuery$Parameters'),
              variables: { pageID: a },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometStarsOnboardingUpsellDialog.react',
      ).__setRef('CometStarsOnboardingUpsellDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'composerABTestReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      switch (b.type) {
        case 'SET_IS_AB_TEST':
          return j(a, b);
        case 'SET_AB_TEST_VARIANT_TITLES':
          return h(a, b);
        case 'SET_AB_TEST_PREVIOUS_VARIANT_TITLES':
          return k(a, b);
        case 'SET_AB_TEST_PREVIOUS_VARIANT_THUMBNAILS':
          return l(a, b);
        case 'SET_IS_AB_TEST_VALID':
          return m(a, b);
        case 'SET_AB_TEST_VARIANT_TYPE':
          return g(a, b);
        case 'SET_DURATION':
          return n(a, b);
        case 'SET_AB_TEST_VARIANT_THUMBNAILS':
          return i(a, b);
      }
      return a;
    }
    var g = function (a, b) {
        b = b.ABTestVariantType;
        return babelHelpers['extends']({}, a, {
          abTestData: babelHelpers['extends']({}, a.abTestData, {
            ABTestVariantType: b,
            isABTest:
              (a = (b = a.abTestData) == null ? void 0 : b.isABTest) != null
                ? a
                : !1,
          }),
        });
      },
      h = function (a, b) {
        var c;
        b = b.variantTitles;
        return babelHelpers['extends']({}, a, {
          abTestData: babelHelpers['extends']({}, a.abTestData, {
            ABTestVariantType:
              (c = (c = a.abTestData) == null ? void 0 : c.ABTestVariantType) !=
              null
                ? c
                : null,
            isABTest:
              (a = (c = a.abTestData) == null ? void 0 : c.isABTest) != null
                ? a
                : !1,
            variantTitles: b,
          }),
        });
      },
      i = function (a, b) {
        var c,
          d = b.variantThumbnails;
        b = b.variantThumbnailPreviews;
        return babelHelpers['extends']({}, a, {
          abTestData: babelHelpers['extends']({}, a.abTestData, {
            ABTestVariantType:
              (c = (c = a.abTestData) == null ? void 0 : c.ABTestVariantType) !=
              null
                ? c
                : null,
            isABTest:
              (a = (c = a.abTestData) == null ? void 0 : c.isABTest) != null
                ? a
                : !1,
            variantThumbnailPreviews: b,
            variantThumbnails: d,
          }),
        });
      },
      j = function (a, b) {
        b = b.isABTest;
        return babelHelpers['extends']({}, a, {
          abTestData: babelHelpers['extends']({}, a.abTestData, {
            ABTestVariantType:
              (a = (a = a.abTestData) == null ? void 0 : a.ABTestVariantType) !=
              null
                ? a
                : null,
            isABTest: b,
          }),
        });
      },
      k = function (a, b) {
        var c;
        b = b.previousVariantTitles;
        return babelHelpers['extends']({}, a, {
          abTestData: babelHelpers['extends']({}, a.abTestData, {
            ABTestVariantType:
              (c = (c = a.abTestData) == null ? void 0 : c.ABTestVariantType) !=
              null
                ? c
                : null,
            isABTest:
              (c = (c = a.abTestData) == null ? void 0 : c.isABTest) != null
                ? c
                : !1,
            previousVariantTitles: b,
            variantTitles:
              (c = a.abTestData) == null ? void 0 : c.variantTitles,
          }),
        });
      },
      l = function (a, b) {
        var c = b.previousVariantThumbnails;
        b = b.previousVariantThumbnailPreviews;
        return babelHelpers['extends']({}, a, {
          abTestData: babelHelpers['extends']({}, a.abTestData, {
            isABTest:
              (a = (a = a.abTestData) == null ? void 0 : a.isABTest) != null
                ? a
                : !1,
            previousVariantThumbnailPreviews: b,
            previousVariantThumbnails: c,
          }),
        });
      },
      m = function (a, b) {
        var c;
        b = b.isValid;
        return babelHelpers['extends']({}, a, {
          abTestData: babelHelpers['extends']({}, a.abTestData, {
            ABTestVariantType:
              (c = (c = a.abTestData) == null ? void 0 : c.ABTestVariantType) !=
              null
                ? c
                : null,
            isABTest:
              (a = (c = a.abTestData) == null ? void 0 : c.isABTest) != null
                ? a
                : !1,
            isValid: b,
          }),
        });
      },
      n = function (a, b) {
        var c;
        b = b.duration;
        return babelHelpers['extends']({}, a, {
          abTestData: babelHelpers['extends']({}, a.abTestData, {
            ABTestVariantType:
              (c = (c = a.abTestData) == null ? void 0 : c.ABTestVariantType) !=
              null
                ? c
                : null,
            duration: b,
            isABTest:
              (b = (c = a.abTestData) == null ? void 0 : c.isABTest) != null
                ? b
                : !1,
          }),
        });
      };
    f['default'] = a;
  },
  66,
);
__d(
  'VideoUploadComposerSurface',
  ['VideoUploadFlowNotifier', 'VideoUploadSurface'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      a === void 0 && (a = ''),
        b === void 0 &&
          (b = d('VideoUploadSurface').VideoUploadSurfaceIDs.FEED),
        d('VideoUploadSurface')
          .VideoUploadSurface.getOrCreate(b)
          .notifiers()
          .getExistingOrNoOpByID(a)
          .notifyOnPostAction({
            action: d('VideoUploadFlowNotifier').VideoPostActions.POST_FAILED,
          }),
        d('VideoUploadSurface')
          .VideoUploadSurface.getOrCreate(b)
          .notifiers()
          .clear(a);
    }
    function b(a, b) {
      a === void 0 && (a = ''),
        b === void 0 &&
          (b = d('VideoUploadSurface').VideoUploadSurfaceIDs.FEED),
        d('VideoUploadSurface')
          .VideoUploadSurface.getOrCreate(b)
          .notifiers()
          .getExistingOrNoOpByID(a)
          .notifyOnPostAction({
            action: d('VideoUploadFlowNotifier').VideoPostActions
              .POST_SUCCESSFUL,
          }),
        d('VideoUploadSurface')
          .VideoUploadSurface.getOrCreate(b)
          .notifiers()
          .clear(a);
    }
    function c(a, b) {
      a === void 0 && (a = ''),
        b === void 0 &&
          (b = d('VideoUploadSurface').VideoUploadSurfaceIDs.FEED),
        d('VideoUploadSurface')
          .VideoUploadSurface.getOrCreate(b)
          .notifiers()
          .getExistingOrNoOpByID(a)
          .notifyOnPostAction({
            action: d('VideoUploadFlowNotifier').VideoPostActions
              .POST_USER_REQUESTED,
          });
    }
    g.onSubmitPostError = a;
    g.onSubmitPostCompleted = b;
    g.onSubmitPost = c;
  },
  98,
);
__d(
  'CometIPSPushPageQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '6097076900326249';
  },
  null,
); /*FB_PKG_DELIM*/
__d(
  'CometTextInputWithIcon.react',
  [
    'BaseTextInput.react',
    'CometIcon.react',
    'CometScreenReaderText.react',
    'react',
    'useBaseInputValidators',
    'useCometUniqueID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        disabledInput: { cursor: 'x1h6gzvc', $$css: !0 },
        iconEnd: {
          end: 'x1epdt8v',
          position: 'x10l6tqk',
          top: 'xfr5jun',
          $$css: !0,
        },
        iconStart: {
          position: 'x10l6tqk',
          start: 'xrokvo6',
          top: 'xfr5jun',
          $$css: !0,
        },
        root: {
          color: 'xzsf02u',
          fontSize: 'x6prxxf',
          position: 'x1n2onr6',
          $$css: !0,
        },
        textInput: {
          backgroundColor: 'x1jx94hy',
          borderTop: 'x1n2xptk',
          borderEnd: 'xkbpzyx',
          borderBottom: 'xdppsyt',
          borderStart: 'x1rr5fae',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          boxSizing: 'x9f619',
          color: 'xzsf02u',
          fontSize: 'x1qlqyl8',
          fontWeight: 'xk50ysn',
          height: 'xc9qbxq',
          width: 'xh8yej3',
          $$css: !0,
        },
        textInputEndIcon: {
          paddingTop: 'xexx8yu',
          paddingEnd: 'x1gz9zih',
          paddingBottom: 'x18d9i69',
          paddingStart: 'x1sln4lm',
          $$css: !0,
        },
        textInputStartIcon: {
          paddingTop: 'xexx8yu',
          paddingEnd: 'x1iji9kk',
          paddingBottom: 'x18d9i69',
          paddingStart: 'x1b9tyad',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d,
        e = a['aria-describedby'],
        f = a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
        g = a.disabled;
      g = g === void 0 ? !1 : g;
      var j = a.icon,
        k = a.iconColor,
        l = a.iconPlacement;
      l = l === void 0 ? 'start' : l;
      var m = a.label,
        n = a.validator,
        o = a.value;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'aria-describedby',
        'autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD',
        'disabled',
        'icon',
        'iconColor',
        'iconPlacement',
        'label',
        'validator',
        'value',
      ]);
      var p = c('useCometUniqueID')();
      n = c('useBaseInputValidators')({ validator: n, value: String(o) });
      var q = n.topResultReason;
      n = n.topResultType;
      e =
        q != null
          ? p + ' ' + ((d = e) != null ? d : '')
          : (d = e) != null
          ? d
          : void 0;
      return h.jsxs('div', {
        className: 'xzsf02u x6prxxf x1n2onr6',
        children: [
          l === 'start'
            ? h.jsx('div', {
                className: 'x10l6tqk xrokvo6 xfr5jun',
                children: h.jsx(c('CometIcon.react'), {
                  color: k,
                  icon: j,
                  size: 16,
                }),
              })
            : null,
          h.jsx(
            c('BaseTextInput.react'),
            babelHelpers['extends'](
              {
                'aria-describedby': e,
                'aria-invalid': n === 'ERROR',
                'aria-label': m,
                autoFocus: f,
                disabled: g,
                value: o,
                xstyle: [
                  g && i.disabledInput,
                  i.textInput,
                  l === 'start' && i.textInputStartIcon,
                  l === 'end' && i.textInputEndIcon,
                ],
              },
              a,
              { ref: b },
            ),
          ),
          l === 'end'
            ? h.jsx('div', {
                className: 'x1epdt8v x10l6tqk xfr5jun',
                children: h.jsx(c('CometIcon.react'), {
                  color: k,
                  icon: j,
                  size: 16,
                }),
              })
            : null,
          q != null
            ? h.jsx(c('CometScreenReaderText.react'), { id: p, text: q })
            : null,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'CometComposerFormRefContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ current: null });
    g['default'] = b;
  },
  98,
);
__d(
  'CometComposerPluginsContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ decorators: new Map(), handlers: new Map() });
    g['default'] = b;
  },
  98,
);
__d(
  'cometComposerPluginsReducers',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a, b) {
      var c = a.get(b);
      if (c != null) {
        a.set(b, c + 1);
        return a;
      } else {
        c = new Map(a);
        c.set(b, 1);
        return c;
      }
    }
    function h(a, b) {
      var c = a.get(b);
      if (c != null)
        if (c > 1) a.set(b, c - 1);
        else {
          c = new Map(a);
          c['delete'](b);
          return c;
        }
      return a;
    }
    function a(a, b) {
      switch (b.type) {
        case 'install_decorator':
        case 'uninstall_decorator':
          var c =
            b.type === 'install_decorator'
              ? g(a.decorators, b.decorator)
              : h(a.decorators, b.decorator);
          if (c !== a.decorators)
            return babelHelpers['extends']({}, a, { decorators: c });
          break;
        case 'install_handler':
        case 'uninstall_handler':
          c =
            b.type === 'install_handler'
              ? g(a.handlers, b.handler)
              : h(a.handlers, b.handler);
          if (c !== a.handlers)
            return babelHelpers['extends']({}, a, { handlers: c });
          break;
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'createEmptyCometComposerViewStateWithTarget',
  ['createEmptyCometComposerViewState'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return function (b) {
        b = c('createEmptyCometComposerViewState')(b);
        return babelHelpers['extends']({}, b, { target: a });
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'getComposerValidationErrors',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = {};
      for (var d in a) {
        var e = a[d];
        e = e(b);
        e != null && (c[d] = e);
      }
      return c;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'getIneligibleComposerFeatures',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = new Set();
      for (var d in a) {
        var e = a[d];
        e = e(b);
        e != null &&
          e.forEach(function (a) {
            return c.add(a);
          });
      }
      return c;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'getShouldTriggerUnsavedChangesFlow',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return (
        !Boolean(a == null ? void 0 : a.ignoreDirtyFlag) &&
        Boolean(a == null ? void 0 : a.isDirty)
      );
    }
    f['default'] = a;
  },
  66,
);
__d(
  'isAttachmentEmpty',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b;
      if (((b = a.isEmptyMetaData) == null ? void 0 : b.useIsEmpty) !== !0)
        return !1;
      if (
        ((b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType) !=
        null
      ) {
        if (
          a.attachmentArea.activeAttachmentType === 'MEDIA' &&
          (a.mediaAttachments == null || a.mediaAttachments.length === 0)
        )
          return !0;
        if (a.attachmentArea.activeAttachmentType !== 'FORMATTED_TEXT')
          return !1;
      }
      if (
        ((b = a.footerAttachmentArea) == null
          ? void 0
          : b.activeFooterAttachmentType) != null
      )
        return !1;
      if (a.withTagIDsTracker != null && a.withTagIDsTracker.size > 0)
        return !1;
      if (a.activityMinutiae != null) return !1;
      return a.locationMinutiae != null ? !1 : !0;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'isComposerEmpty',
  [
    'cr:3460',
    'getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE',
    'gkx',
    'isAttachmentEmpty',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      a = (a == null ? void 0 : a.editorState)
        ? c('getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE')(
            a == null ? void 0 : a.editorState,
          ).trim()
        : '';
      return a.length === 0;
    }
    var i = c('gkx')('1224637');
    function a(a) {
      var d;
      if (((d = a.isEmptyMetaData) == null ? void 0 : d.useIsEmpty) !== !0)
        return !1;
      if (i && a.lexicalEditorIsEmpty === !1) return !1;
      if (!i && a.lexicalEditorIsDirty === !0) return !1;
      if (a.lexicalEditor == null && !h(a)) return !1;
      if (!c('isAttachmentEmpty')(a)) return !1;
      return (b('cr:3460') == null ? void 0 : b('cr:3460')(a)) ? !1 : !0;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'reduceComposerViewState',
  ['isComposerEmpty'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, d, e, f) {
      var g = d;
      d = a.current.keys();
      for (
        var a = d,
          d = Array.isArray(a),
          h = 0,
          a = d
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var i;
        if (d) {
          if (h >= a.length) break;
          i = a[h++];
        } else {
          h = a.next();
          if (h.done) break;
          i = h.value;
        }
        i = i;
        g = i(g, f);
      }
      i =
        g.lexicalEditorIsDirty === !0 ||
        Array.from(b.current.keys()).some(function (a) {
          a = a(e, g);
          return a === !0 || a === 'UPDATED' || a === 'DELETED';
        });
      return babelHelpers['extends']({}, g, {
        isDirty: i,
        isEmptyMetaData: {
          isEmpty: c('isComposerEmpty')(g),
          useIsEmpty:
            (d = (h = g.isEmptyMetaData) == null ? void 0 : h.useIsEmpty) !=
            null
              ? d
              : !0,
        },
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useComposerLexicalEligibityCheckHooks.react',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c) {
      if (c != null)
        for (var d in c) {
          var e = c[d](b);
          e.size > 0 &&
            e.forEach(function (b) {
              return a.add(b);
            });
        }
      return a;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'useComposerLexicalValidationHooks.react',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = {};
      if (b != null)
        for (var d in b) {
          var e = b[d](a);
          e != null ? (c[d] = e) : c[d] != null && delete c[d];
        }
      return c;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'CometComposer.react',
  [
    'CometComposerFeatureDefinitionsContext',
    'CometComposerFormRefContext',
    'CometComposerIneligibilityContext',
    'CometComposerLoggerDispatcherContext',
    'CometComposerPluginsContext',
    'CometComposerPluginsDispatchContext',
    'CometComposerPreSubmitHooksContext',
    'CometComposerValidationErrorsContext',
    'CometComposerViewStateAlteredContext',
    'CometComposerViewStateContext',
    'CometComposerViewStateDispatcherContext',
    'CometComposerViewStateReducersContext',
    'CometOnBeforeUnload.react',
    'FBLogger',
    'Promise',
    'cometComposerPluginsReducers',
    'createEmptyCometComposerViewStateWithTarget',
    'getComposerUnsavedChangesAlert',
    'getComposerValidationErrors',
    'getIneligibleComposerFeatures',
    'getShouldTriggerUnsavedChangesFlow',
    'react',
    'reduceComposerViewState',
    'shallowEqual',
    'useComposerLexicalEligibityCheckHooks.react',
    'useComposerLexicalValidationHooks.react',
    'useComposerTerminalEventLog',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useImperativeHandle,
      k = e.useMemo,
      l = e.useReducer,
      m = e.useRef;
    function a(a, d) {
      var e = a.beginningViewState,
        f = a.children,
        g = a.eligibilityCheckers,
        n = a.featureDefinitions,
        o = a.lexicalEligibityCheckHooks,
        p = a.lexicalValidationHooks,
        q = a.loggers,
        r = a.onBeforeViewStateChange,
        s = a.onSubmitCommit,
        t = a.onSubmitHalt,
        u = a.onSubmitStart,
        v = a.onValidationErrors,
        w = a.registerOnBeforeUnload;
      w = w === void 0 ? !0 : w;
      var x = a.target,
        y = a.unalteredBeginningViewState,
        z = a.validators,
        A = m(new Map()),
        B = m(new Map()),
        C = m({}),
        D = m(new Set()),
        E = m(new Map()),
        F = m(null);
      a = m(null);
      e = l(
        function (a, b) {
          b = c('reduceComposerViewState')(A, B, a, y, b);
          F.current = b;
          r && r(b, a);
          return b;
        },
        e,
        c('createEmptyCometComposerViewStateWithTarget')(x),
      );
      var G = e[0];
      e = e[1];
      var H = function () {
        if (c('getShouldTriggerUnsavedChangesFlow')(G))
          return c('getComposerUnsavedChangesAlert')();
      };
      j(
        d,
        function () {
          return {
            getViewState: function () {
              return G;
            },
          };
        },
        [G],
      );
      d = l(c('cometComposerPluginsReducers'), {
        decorators: new Map(),
        handlers: new Map(),
      });
      var I = d[0];
      d = d[1];
      var J = k(
        function () {
          return z != null ? c('getComposerValidationErrors')(z, G) : {};
        },
        [z, G],
      );
      p = c('useComposerLexicalValidationHooks.react')(G, p);
      J = babelHelpers['extends']({}, J, p);
      c('shallowEqual')(C.current, J) || (C.current = J);
      p = k(
        function () {
          return g != null
            ? c('getIneligibleComposerFeatures')(g, G)
            : new Set();
        },
        [g, G],
      );
      p = c('useComposerLexicalEligibityCheckHooks.react')(p, G, o);
      J = k(
        function () {
          return { featureDefinitions: n };
        },
        [n],
      );
      (D.current.size === p.size &&
        Array.from(p).every(function (a) {
          return D.current.has(a);
        })) ||
        (D.current = p);
      var K = i(
          function (a, c) {
            a != null && a.type !== 'press' && a.preventDefault();
            if (Object.keys(C.current).length > 0) {
              v && v(C.current);
              return;
            }
            var d = F.current;
            if (d == null) return;
            u && u();
            a = E.current;
            if (a) {
              a = Array.from(a.keys()).reduce(function (a, e) {
                return a.then(function () {
                  return new (b('Promise'))(function (a, b) {
                    e({ onContinue: a, onHalt: b }, d, c);
                  });
                });
              }, b('Promise').resolve());
              a.then(function () {
                s(d, c);
              })['catch'](function () {
                t && t();
              });
            } else s(d, c);
          },
          [s, t, u, v],
        ),
        L = G.creationSessionID;
      o = k(
        function () {
          return function (a) {
            var b;
            L == null
              ? c('FBLogger')('comet_composer').mustfix(
                  'creationSessionID should be defined in composer of type ' +
                    String(x == null ? void 0 : x.type),
                )
              : ((b = q) != null ? b : []).map(function (b) {
                  return b(a, L, { target: x });
                });
          };
        },
        [L, x, q],
      );
      c('useComposerTerminalEventLog')(
        function () {
          return c('getShouldTriggerUnsavedChangesFlow')(G);
        },
        function () {
          return L;
        },
      );
      return h.jsx(c('CometComposerPluginsDispatchContext').Provider, {
        value: d,
        children: h.jsx(c('CometComposerPluginsContext').Provider, {
          value: I,
          children: h.jsx(
            c('CometComposerFeatureDefinitionsContext').Provider,
            {
              value: J,
              children: h.jsx(
                c('CometComposerViewStateReducersContext').Provider,
                {
                  value: A,
                  children: h.jsx(
                    c('CometComposerViewStateAlteredContext').Provider,
                    {
                      value: B,
                      children: h.jsx(
                        c('CometComposerViewStateContext').Provider,
                        {
                          value: G,
                          children: h.jsx(
                            c('CometComposerViewStateDispatcherContext')
                              .Provider,
                            {
                              value: e,
                              children: h.jsx(
                                c('CometComposerValidationErrorsContext')
                                  .Provider,
                                {
                                  value: C.current,
                                  children: h.jsx(
                                    c('CometComposerIneligibilityContext')
                                      .Provider,
                                    {
                                      value: D.current,
                                      children: h.jsx(
                                        c(
                                          'CometComposerLoggerDispatcherContext',
                                        ).Provider,
                                        {
                                          value: o,
                                          children: h.jsx(
                                            c(
                                              'CometComposerPreSubmitHooksContext',
                                            ).Provider,
                                            {
                                              value: E,
                                              children: h.jsxs(
                                                c('CometComposerFormRefContext')
                                                  .Provider,
                                                {
                                                  value: a,
                                                  children: [
                                                    h.jsxs('form', {
                                                      'data-testid': void 0,
                                                      method: 'POST',
                                                      onSubmit: K,
                                                      ref: a,
                                                      children: [
                                                        k(
                                                          function () {
                                                            return f(K);
                                                          },
                                                          [f, K],
                                                        ),
                                                        h.jsx('input', {
                                                          style: {
                                                            display: 'none',
                                                          },
                                                          type: 'submit',
                                                        }),
                                                      ],
                                                    }),
                                                    w
                                                      ? h.jsx(
                                                          c(
                                                            'CometOnBeforeUnload.react',
                                                          ),
                                                          { onBeforeUnload: H },
                                                        )
                                                      : null,
                                                  ],
                                                },
                                              ),
                                            },
                                          ),
                                        },
                                      ),
                                    },
                                  ),
                                },
                              ),
                            },
                          ),
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
    a.displayName = a.name + ' [from ' + f.id + ']';
    d = h.forwardRef(a);
    g['default'] = d;
  },
  98,
);
__d(
  'CometComposerServerErrorMessage.react',
  [
    'errorCode',
    'fbt',
    'CometComposerInlineErrorRenderer.react',
    'CometErrorOverlay',
    'JSResourceForInteraction',
    'ServerHTML.react',
    'SilenceableErrorMessageUtils',
    'promiseDone',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useRef,
      l = c('JSResourceForInteraction')(
        'CometAustraliaNewsDialog.react',
      ).__setRef('CometComposerServerErrorMessage.react');
    function a(a) {
      var b = a.errorMetadata,
        e = a.icon;
      a = a.xstyle;
      var f = k(new Set());
      if (b == null) return null;
      if (d('SilenceableErrorMessageUtils').shouldHideErrorMessage(b))
        return null;
      var g = b == null ? void 0 : b.message;
      if (g == null) return null;
      var h =
        g !== ''
          ? j.jsx(c('ServerHTML.react'), { blob: g })
          : i._('__JHASH__Gv9mrhB3ttT__JHASH__');
      g = b == null ? void 0 : b.code;
      if (g != null && g === 2216006) {
        f.current.has(b) ||
          (f.current.add(b),
          c('promiseDone')(
            l.load().then(function (a) {
              d('CometErrorOverlay').injectComponent(function (b) {
                return j.jsx(a, {
                  errorDescription: h,
                  onClose: function () {
                    b();
                  },
                });
              });
            }),
          ));
        return j.jsx('div', {});
      }
      return j.jsx(c('CometComposerInlineErrorRenderer.react'), {
        error: h,
        icon: e,
        xstyle: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'createComposerDeferredPlugin',
  ['react'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = g || (g = b('react'));
    c = g;
    var i = c.useEffect,
      j = c.useRef,
      k = c.useState;
    function a(a) {
      function b(b) {
        var c = j(a.getModuleIfRequireable()),
          d = k(c.current != null);
        d[0];
        var e = d[1];
        i(function () {
          var b = a.onReady(function (a) {
            (c.current = a), e(!0);
          });
          b = b.remove;
          return b;
        }, []);
        if (c.current != null) {
          d = c.current;
          return h.jsx(d, babelHelpers['extends']({}, b));
        }
        return null;
      }
      return h.memo(b);
    }
    e.exports = a;
  },
  null,
);
__d(
  'transformComposerViewStateToCreationData',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c, d, e) {
      function f(d, g) {
        var h = c[g];
        if (h != null) {
          var i = function (a) {
            f(a, g + 1);
          };
          h(a, d, i, b);
        } else e(d);
      }
      f(d, 0);
    }
    f['default'] = a;
  },
  66,
);
__d(
  'cometComposerLexicalCreateEditor',
  [
    'CometLexicalDelightNode',
    'CometLexicalEmojiNode',
    'CometLexicalGenericEntityNode',
    'FBLogger',
    'Lexical',
    'LexicalHashtag',
    'LexicalLink',
    'LexicalOverflow',
    'cometLexicalBaseTheme',
    'mlcErrorHandler__INTERNAL',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = d('Lexical').createEditor({
        namespace: 'CometPostComposer',
        nodes: [
          d('CometLexicalGenericEntityNode').CometLexicalGenericEntityNode,
          d('CometLexicalEmojiNode').EmojiNode,
          d('LexicalLink').LinkNode,
          d('LexicalLink').AutoLinkNode,
          d('LexicalHashtag').HashtagNode,
          d('LexicalOverflow').OverflowNode,
          d('CometLexicalDelightNode').CometLexicalDelightNode,
        ],
        onError: function (b) {
          return c('mlcErrorHandler__INTERNAL')(b, a, function (a) {
            c('FBLogger')('CometComposer')
              .catching(b)
              .mustfix('Lexical Error Composer \u2013 ' + a);
          });
        },
        theme: babelHelpers['extends']({}, c('cometLexicalBaseTheme'), {
          hashtag: 'xv78j7m x112ta8',
          link: 'x1fey0fg xmper1u x1edh9d7',
          paragraph: 'xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8',
          placeholder:
            'xi81zsa x6ikm8r x10wlt62 x47corl x10l6tqk xlyipyv x13vifvy x87ps6o xuxw1ft',
        }),
      });
      return a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerEditorForLexical.react',
  [
    'CometLexicalContentEditable.react',
    'DEPRECATED_useLexicalCanShowPlaceholder',
    'DEPRECATED_useLexicalPlainText',
    'FeedComposerCometTextStyleContext',
    'Lexical',
    'MLCInstrumentationPluginDeferred__INTERNAL.react',
    'cometComposerLexicalCreateEditor',
    'composerLexicalEditorViewStateReducer',
    'cr:1305',
    'gkx',
    'react',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
    'useLexicalInitializeEditor__DEPRECATED',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useLayoutEffect,
      m = e.useMemo,
      n = e.useRef,
      o = c('gkx')('1224637'),
      p = {
        placeholder: {
          color: 'xi81zsa',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          textOverflow: 'xlyipyv',
          top: 'xs7f9wi',
          userSelect: 'x87ps6o',
          zIndex: 'x1vjfegm',
          $$css: !0,
        },
        root: {
          boxSizing: 'x9f619',
          display: 'x1lliihq',
          height: 'x5yr21d',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function a(a) {
      var e = a.autoFocus,
        f = a.lexicalEditor,
        g = a.placeholder,
        q = a.placeholderCustomStyles,
        r = a.surface,
        s = a.textAlignment;
      c('useComposerViewStateReducer')(
        c('composerLexicalEditorViewStateReducer'),
      );
      var t = c('useComposerViewStateDispatcher')();
      a = j(c('FeedComposerCometTextStyleContext'));
      var u = a.color,
        v = a.fontSize,
        w = m(
          function () {
            if (f == null) {
              var a = c('cometComposerLexicalCreateEditor')();
              t({ lexicalEditor: a, type: 'SET_LEXICAL_EDITOR_STATE' });
              return a;
            }
            return f;
          },
          [f, t],
        ),
        x = n(null);
      a = i(
        function (a) {
          var b = x.current;
          if (a === null || b === a) return;
          x.current = a;
          w.setRootElement(a);
        },
        [w],
      );
      c('useLexicalInitializeEditor__DEPRECATED')(w);
      l(
        function () {
          w.update(function () {
            var a = d('Lexical').$getRoot().getFirstChild();
            s != null
              ? a == null
                ? void 0
                : a.setFormat(s)
              : a != null && a.setFormat('');
          }),
            x.current != null &&
              ((x.current.style.color = u),
              (x.current.style.fontSize = v + 'px'));
        },
        [w, u, v, s],
      );
      d('DEPRECATED_useLexicalPlainText').useLexicalPlainText(w);
      k(
        function () {
          e === !0 && w.focus();
        },
        [e, w],
      );
      var y = d(
        'DEPRECATED_useLexicalCanShowPlaceholder',
      ).useLexicalCanShowPlaceholder(w);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('MLCInstrumentationPluginDeferred__INTERNAL.react'), {
            editor__DEPRECATED: w,
            format__DEPRECATED: 'PlainText',
            policyProduct: o ? 'workplace' : 'facebook',
            surface: r,
          }),
          h.jsx(c('CometLexicalContentEditable.react'), {
            ariaLabel: g,
            contentEditableRef: a,
            editor: w,
            spellCheck: !0,
            tabIndex: 0,
            xstyle: p.root,
          }),
          y
            ? h.jsx('div', {
                className:
                  'xi81zsa x6ikm8r x10wlt62 x47corl x10l6tqk xlyipyv xs7f9wi x87ps6o x1vjfegm',
                style: q,
                children: g,
              })
            : null,
          b('cr:1305') != null
            ? h.jsx(b('cr:1305'), { editor__DEPRECATED: w })
            : null,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withComposerViewStatePart')(a, function (a) {
      return { lexicalEditor: a.lexicalEditor };
    });
    g['default'] = e;
  },
  98,
);
__d(
  'composerLexicalMessageFeedTransformDeferred',
  ['getDeferredComposerTransformer', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = c('getDeferredComposerTransformer')(
      c('requireDeferred')('composerLexicalMessageFeedTransform').__setRef(
        'composerLexicalMessageFeedTransformDeferred',
      ),
    );
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerHashtagsPluginForLexicalDeferred.react',
  ['createComposerDeferredPlugin', 'react', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    a = c('createComposerDeferredPlugin')(
      c('requireDeferred')(
        'CometComposerHashtagPluginForLexical.react',
      ).__setRef('CometComposerHashtagsPluginForLexicalDeferred.react'),
    );
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerHashtagsTypeaheadPluginForLexicalDeferred.react',
  ['createComposerDeferredPlugin', 'react', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    a = c('createComposerDeferredPlugin')(
      c('requireDeferred')(
        'CometComposerHashtagTypeaheadPluginForLexical.react',
      ).__setRef(
        'CometComposerHashtagsTypeaheadPluginForLexicalDeferred.react',
      ),
    );
    g['default'] = a;
  },
  98,
);
__d(
  'ComposerEmojiTrigger.react',
  ['cr:2028537'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = b('cr:2028537');
  },
  98,
);
__d(
  'ComposerEmojiPopoverButton.react',
  [
    'fbt',
    'ix',
    'CometContextualLayerAnchorRoot.react',
    'CometPressable.react',
    'CometPressableChildrenWithOverlay.react',
    'CometTooltip.react',
    'ComposerEmojiTrigger.react',
    'ImageIconSource',
    'TetraIcon.react',
    'fbicon',
    'react',
    'useCometStatusAreaTextData',
    'useCurrentDisplayMode',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useState,
      l = {
        circle: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          $$css: !0,
        },
        icon: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          height: 'xc9qbxq',
          justifyContent: 'xl56j7k',
          position: 'x1n2onr6',
          width: 'x14qfxbe',
          $$css: !0,
        },
        inner: { height: 'x5yr21d', width: 'xh8yej3', $$css: !0 },
        outer: {
          height: 'xc9qbxq',
          position: 'x1n2onr6',
          width: 'x14qfxbe',
          $$css: !0,
        },
        pressable: {
          appearance: 'xjyslct',
          backgroundColor: 'xjbqb8w',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          boxSizing: 'x9f619',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x1n2onr6',
          textAlign: 'x16tdsg8',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        pressed: { transform: 'x1n5d1j9', $$css: !0 },
        root: { opacity: 'x1ks1olk', $$css: !0 },
        rootHovered: { opacity: 'x1hc1fzr', $$css: !0 },
        withSATP: { paddingBottom: 'xsag5q8', $$css: !0 },
      };
    function m(a, b) {
      return !a || b ? 'disabled' : 'tertiary';
    }
    function a(a) {
      var b = a.disabled,
        e = b === void 0 ? !1 : b,
        f = a.formattedTextPreset;
      b = a.shouldUseSmallEmojiIcon;
      var g = b === void 0 ? !1 : b;
      a = k(!1);
      var n = a[0],
        o = a[1];
      b = k(!1);
      var p = b[0],
        q = b[1];
      b =
        (a = c('useCometStatusAreaTextData')(f)) == null
          ? void 0
          : a.formattedTextStyling;
      a = c('useCurrentDisplayMode')();
      a = a === 'dark';
      var r = a;
      a = b == null ? void 0 : b.color;
      if (a != null)
        try {
          b = parseInt(a.substring(1, 3), 16);
          var s = parseInt(a.substring(3, 5), 16);
          a = parseInt(a.substring(5, 7), 16);
          b = Math.min(b, s, a);
          r = b > 128;
        } catch (a) {
          r = !1;
        }
      return j.jsx(c('ComposerEmojiTrigger.react'), {
        setClicked: o,
        setHovered: q,
        children: function (a, b, k, s, t, u) {
          k = function (a) {
            s && s(a), q(!0);
          };
          u = function () {
            t && t(), q(!1);
          };
          var v = function () {
              o(!0), b();
            },
            w = g
              ? d('fbicon')._(i('642534'), 20)
              : new (c('ImageIconSource'))(
                  r ? i('792304') : i('615750'),
                  24,
                  24,
                ),
            x = m(g, e);
          return j.jsx('div', {
            className:
              '' +
              ((g || n || p ? ' x1hc1fzr' : ' x1ks1olk') +
                (f != null ? ' xsag5q8' : '' + (g || n || p ? '' : ''))),
            children: j.jsx('div', {
              children: j.jsx(c('CometTooltip.react'), {
                position: 'above',
                tooltip: 'Emoji',
                children: j.jsx(c('CometPressable.react'), {
                  'aria-label': 'Emoji',
                  disabled: e,
                  label: 'Emoji',
                  onHoverIn: k,
                  onHoverOut: u,
                  onPress: e === !0 ? void 0 : v,
                  overlayDisabled: !g,
                  ref: a,
                  testid: void 0,
                  xstyle: function (a) {
                    a = a.pressed;
                    return [l.pressable, a && e !== !0 && l.pressed];
                  },
                  children: function (b) {
                    b = b.overlay;
                    return j.jsx('div', {
                      children: j.jsx(
                        c('CometContextualLayerAnchorRoot.react'),
                        {
                          children: j.jsx('div', {
                            children: j.jsx('div', {
                              className:
                                'xc9qbxq x1n2onr6 x14qfxbe x14yjl9h xudhj91 x18nykt9 xww2gxu',
                              children: j.jsx(
                                c('CometPressableChildrenWithOverlay.react'),
                                {
                                  overlay: b,
                                  children: j.jsx('div', {
                                    className:
                                      'x6s0dn4 x78zum5 x5yr21d xl56j7k x1n2onr6 xh8yej3',
                                    children: j.jsx(c('TetraIcon.react'), {
                                      'aria-label': h._(
                                        '__JHASH__s5VY0zHIS2p__JHASH__',
                                      ),
                                      color: x,
                                      icon: w,
                                      ref: a,
                                    }),
                                  }),
                                },
                              ),
                            }),
                          }),
                        },
                      ),
                    });
                  },
                }),
              }),
            }),
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withComposerViewStatePart')(a, function (a) {
      return {
        formattedTextPreset:
          (a = a.formattedText) == null ? void 0 : a.currentFormattedTextPreset,
      };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'ComposerEmojiTriggerImpl.react',
  [
    'CometErrorBoundary.react',
    'CometLazyPopoverTrigger.react',
    'CometPopoverLoadingState.react',
    'JSResourceForInteraction',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('JSResourceForInteraction')('ComposerEmojiPopover.react').__setRef(
        'ComposerEmojiTriggerImpl.react',
      ),
      j = { popoverFallback: { minWidth: 'x17upfok', $$css: !0 } };
    function a(a) {
      var b = a.align;
      b = b === void 0 ? 'middle' : b;
      var d = a.children,
        e = a.position;
      e = e === void 0 ? 'above' : e;
      var f = a.setClicked,
        g = a.setHovered;
      a = a.visibleOnLoad;
      a = a === void 0 ? !1 : a;
      return h.jsx(c('CometErrorBoundary.react'), {
        children: h.jsx(c('CometLazyPopoverTrigger.react'), {
          align: b,
          fallback: h.jsx(c('CometPopoverLoadingState.react'), {
            withArrow: !0,
            xstyle: j.popoverFallback,
          }),
          popoverProps: { setClicked: f, setHovered: g },
          popoverResource: i,
          position: e,
          preloadTrigger: 'button',
          tracePolicy: 'comet.emojipicker',
          visibleOnLoad: a,
          children: d,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometProductTaggingConstants',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = 7;
    b = 16;
    c = 8;
    d = 46;
    e = 50;
    f.DOT_HINT_BORDER_SIZE = a;
    f.DOT_HINT_DOT_SIZE = b;
    f.DOT_HINT_PADDING = c;
    f.TOTAL_DOT_SIZE = d;
    f.VIDEO_CENTER_X_AND_Y_VALUE = e;
  },
  66,
); /*FB_PKG_DELIM*/
__d(
  'VideoPlayerWatchInlinePauseScreenRowItem_story.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerWatchInlinePauseScreenRowItem_story',
      selections: [
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
      ],
      type: 'Story',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerWatchInlinePauseScreenRowItem_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerWatchInlinePauseScreenRowItem_video',
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
          name: 'CometVideoHomeVideoThumbnailImageWithPreview_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'CometVideoHomeDurationThumbnailOverlay_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'CometVideoHomeTitleOwnerThumbnailOverlay_video',
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
  'VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5810457029048923';
  },
  null,
);
__d(
  'VideoPlayerWatchInlinePauseScreenRowQuery.graphql',
  ['VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'caller' },
        c = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'entry_channel_id',
        },
        d = { defaultValue: null, kind: 'LocalArgument', name: 'entry_point' },
        e = { defaultValue: null, kind: 'LocalArgument', name: 'id' },
        f = { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        g = [{ kind: 'Variable', name: 'id', variableName: 'id' }],
        h = [
          {
            kind: 'Variable',
            name: 'entry_channel_id',
            variableName: 'entry_channel_id',
          },
          {
            kind: 'Variable',
            name: 'entry_point',
            variableName: 'entry_point',
          },
        ],
        i = [
          { kind: 'Variable', name: 'caller', variableName: 'caller' },
          { kind: 'Variable', name: 'exclude_video', variableName: 'id' },
          { kind: 'Literal', name: 'first', value: 3 },
        ],
        j = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        l = {
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
                  kind: 'InlineFragment',
                  selections: [
                    j,
                    k,
                    {
                      args: null,
                      kind: 'FragmentSpread',
                      name: 'VideoPlayerWatchInlinePauseScreenRowItem_video',
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
        m = [k],
        n = {
          kind: 'InlineFragment',
          selections: m,
          type: 'Node',
          abstractKey: '__isNode',
        },
        o = {
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
                j,
                {
                  kind: 'InlineFragment',
                  selections: [
                    k,
                    {
                      alias: null,
                      args: [
                        { kind: 'Literal', name: 'height', value: 354 },
                        {
                          kind: 'Variable',
                          name: 'scale',
                          variableName: 'scale',
                        },
                        { kind: 'Literal', name: 'width', value: 627 },
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
                          value: 'video_home',
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
                            j,
                            {
                              kind: 'InlineFragment',
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    'CometVideoHomeVideoThumbnailImageWithPreview_video__cix_screen',
                                  fragmentName:
                                    'CometWarningScreenOverlay_data',
                                  fragmentPropName: 'data',
                                  kind: 'ModuleImport',
                                },
                              ],
                              type: 'OverlayWarningScreenViewModel',
                              abstractKey: null,
                            },
                            n,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'cix_screen(framework:"WARNING_SCREENS",location:"video_home")',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'Video',
                      kind: 'LinkedField',
                      name: 'huddle_thumbnail_enabled',
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            'CometVideoHomeHuddleThumbnailWithRelay3d_video',
                          fragmentName: 'CometVideoHomeHuddleThumbnail_video',
                          fragmentPropName: 'video',
                          kind: 'ModuleImport',
                        },
                        k,
                      ],
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
                      name: 'has_viewer_watched_show_video',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'playable_duration',
                      storageKey: null,
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
                        j,
                        k,
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
                              args: null,
                              kind: 'ScalarField',
                              name: 'uri_token',
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
                              args: [
                                { kind: 'Literal', name: 'site', value: 'www' },
                              ],
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
                },
                n,
                {
                  kind: 'InlineFragment',
                  selections: m,
                  type: 'DynamicFeedAdAttachmentMedia',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: m,
                  type: 'GenericAttachmentMedia',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: m,
                  type: 'MontageImage',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: m,
                  type: 'MontageVideo',
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f],
          kind: 'Fragment',
          metadata: null,
          name: 'VideoPlayerWatchInlinePauseScreenRowQuery',
          selections: [
            {
              alias: 'video',
              args: g,
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
                      args: h,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'video_channel',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: i,
                          concreteType: 'VideoChannelFeedConnection',
                          kind: 'LinkedField',
                          name: 'video_channel_feed',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'nodes',
                              plural: !0,
                              selections: [
                                {
                                  kind: 'InlineFragment',
                                  selections: [
                                    {
                                      args: null,
                                      kind: 'FragmentSpread',
                                      name: 'VideoPlayerWatchInlinePauseScreenRowItem_story',
                                    },
                                    l,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'Story',
                                      kind: 'LinkedField',
                                      name: 'attached_story',
                                      plural: !1,
                                      selections: [l],
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
                  type: 'Video',
                  abstractKey: null,
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
          argumentDefinitions: [a, e, c, d, f],
          kind: 'Operation',
          name: 'VideoPlayerWatchInlinePauseScreenRowQuery',
          selections: [
            {
              alias: 'video',
              args: g,
              concreteType: null,
              kind: 'LinkedField',
              name: 'node',
              plural: !1,
              selections: [
                j,
                k,
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      alias: null,
                      args: h,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'video_channel',
                      plural: !1,
                      selections: [
                        j,
                        {
                          alias: null,
                          args: i,
                          concreteType: 'VideoChannelFeedConnection',
                          kind: 'LinkedField',
                          name: 'video_channel_feed',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'nodes',
                              plural: !0,
                              selections: [
                                j,
                                {
                                  kind: 'InlineFragment',
                                  selections: [
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
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'Story',
                                      kind: 'LinkedField',
                                      name: 'attached_story',
                                      plural: !1,
                                      selections: [o, k],
                                      storageKey: null,
                                    },
                                  ],
                                  type: 'Story',
                                  abstractKey: null,
                                },
                                n,
                                {
                                  kind: 'InlineFragment',
                                  selections: m,
                                  type: 'FBShortsMidCardFeedUnit',
                                  abstractKey: null,
                                },
                                {
                                  kind: 'InlineFragment',
                                  selections: m,
                                  type: 'XFBDummyReelsInWatchIFU',
                                  abstractKey: null,
                                },
                                {
                                  kind: 'InlineFragment',
                                  selections: m,
                                  type: 'XFBSFTFeedUnit',
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        k,
                      ],
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
        },
        params: {
          id: b(
            'VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'VideoPlayerWatchInlinePauseScreenRowQuery',
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
  'VideoPlayerWatchInlineEndScreenRowItem_story.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerWatchInlineEndScreenRowItem_story',
      selections: [
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
      ],
      type: 'Story',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'VideoPlayerWatchInlineEndScreenRowItem_video.graphql',
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
        name: 'VideoPlayerWatchInlineEndScreenRowItem_video',
        selections: [
          a,
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
              a,
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
                    args: null,
                    kind: 'ScalarField',
                    name: 'uri_token',
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
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'CometVideoHomeVideoThumbnailImageWithPreview_video',
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'CometVideoHomeDurationThumbnailOverlay_video',
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
  'VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5632944820092291';
  },
  null,
);
__d(
  'VideoPlayerWatchInlineEndScreenRowQuery.graphql',
  ['VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'caller' },
        c = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'entry_channel_id',
        },
        d = { defaultValue: null, kind: 'LocalArgument', name: 'entry_point' },
        e = { defaultValue: null, kind: 'LocalArgument', name: 'id' },
        f = { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        g = [{ kind: 'Variable', name: 'id', variableName: 'id' }],
        h = [
          {
            kind: 'Variable',
            name: 'entry_channel_id',
            variableName: 'entry_channel_id',
          },
          {
            kind: 'Variable',
            name: 'entry_point',
            variableName: 'entry_point',
          },
        ],
        i = [
          { kind: 'Variable', name: 'caller', variableName: 'caller' },
          { kind: 'Variable', name: 'exclude_video', variableName: 'id' },
          { kind: 'Literal', name: 'first', value: 3 },
        ],
        j = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        l = {
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
                  kind: 'InlineFragment',
                  selections: [
                    j,
                    k,
                    {
                      args: null,
                      kind: 'FragmentSpread',
                      name: 'VideoPlayerWatchInlineEndScreenRowItem_video',
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
        m = [k],
        n = {
          kind: 'InlineFragment',
          selections: m,
          type: 'Node',
          abstractKey: '__isNode',
        },
        o = {
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
                j,
                {
                  kind: 'InlineFragment',
                  selections: [
                    k,
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
                        j,
                        k,
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
                              args: null,
                              kind: 'ScalarField',
                              name: 'uri_token',
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
                              args: [
                                { kind: 'Literal', name: 'site', value: 'www' },
                              ],
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
                    {
                      alias: null,
                      args: [
                        { kind: 'Literal', name: 'height', value: 354 },
                        {
                          kind: 'Variable',
                          name: 'scale',
                          variableName: 'scale',
                        },
                        { kind: 'Literal', name: 'width', value: 627 },
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
                          value: 'video_home',
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
                            j,
                            {
                              kind: 'InlineFragment',
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    'CometVideoHomeVideoThumbnailImageWithPreview_video__cix_screen',
                                  fragmentName:
                                    'CometWarningScreenOverlay_data',
                                  fragmentPropName: 'data',
                                  kind: 'ModuleImport',
                                },
                              ],
                              type: 'OverlayWarningScreenViewModel',
                              abstractKey: null,
                            },
                            n,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'cix_screen(framework:"WARNING_SCREENS",location:"video_home")',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'Video',
                      kind: 'LinkedField',
                      name: 'huddle_thumbnail_enabled',
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            'CometVideoHomeHuddleThumbnailWithRelay3d_video',
                          fragmentName: 'CometVideoHomeHuddleThumbnail_video',
                          fragmentPropName: 'video',
                          kind: 'ModuleImport',
                        },
                        k,
                      ],
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
                      name: 'has_viewer_watched_show_video',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'playable_duration',
                      storageKey: null,
                    },
                  ],
                  type: 'Video',
                  abstractKey: null,
                },
                n,
                {
                  kind: 'InlineFragment',
                  selections: m,
                  type: 'DynamicFeedAdAttachmentMedia',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: m,
                  type: 'GenericAttachmentMedia',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: m,
                  type: 'MontageImage',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: m,
                  type: 'MontageVideo',
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f],
          kind: 'Fragment',
          metadata: null,
          name: 'VideoPlayerWatchInlineEndScreenRowQuery',
          selections: [
            {
              alias: 'video',
              args: g,
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
                      args: h,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'video_channel',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: i,
                          concreteType: 'VideoChannelFeedConnection',
                          kind: 'LinkedField',
                          name: 'video_channel_feed',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'nodes',
                              plural: !0,
                              selections: [
                                {
                                  kind: 'InlineFragment',
                                  selections: [
                                    {
                                      args: null,
                                      kind: 'FragmentSpread',
                                      name: 'VideoPlayerWatchInlineEndScreenRowItem_story',
                                    },
                                    l,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'Story',
                                      kind: 'LinkedField',
                                      name: 'attached_story',
                                      plural: !1,
                                      selections: [l],
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
                  type: 'Video',
                  abstractKey: null,
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
          argumentDefinitions: [a, e, c, d, f],
          kind: 'Operation',
          name: 'VideoPlayerWatchInlineEndScreenRowQuery',
          selections: [
            {
              alias: 'video',
              args: g,
              concreteType: null,
              kind: 'LinkedField',
              name: 'node',
              plural: !1,
              selections: [
                j,
                k,
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      alias: null,
                      args: h,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'video_channel',
                      plural: !1,
                      selections: [
                        j,
                        {
                          alias: null,
                          args: i,
                          concreteType: 'VideoChannelFeedConnection',
                          kind: 'LinkedField',
                          name: 'video_channel_feed',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'nodes',
                              plural: !0,
                              selections: [
                                j,
                                {
                                  kind: 'InlineFragment',
                                  selections: [
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
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'Story',
                                      kind: 'LinkedField',
                                      name: 'attached_story',
                                      plural: !1,
                                      selections: [o, k],
                                      storageKey: null,
                                    },
                                  ],
                                  type: 'Story',
                                  abstractKey: null,
                                },
                                n,
                                {
                                  kind: 'InlineFragment',
                                  selections: m,
                                  type: 'FBShortsMidCardFeedUnit',
                                  abstractKey: null,
                                },
                                {
                                  kind: 'InlineFragment',
                                  selections: m,
                                  type: 'XFBDummyReelsInWatchIFU',
                                  abstractKey: null,
                                },
                                {
                                  kind: 'InlineFragment',
                                  selections: m,
                                  type: 'XFBSFTFeedUnit',
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        k,
                      ],
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
        },
        params: {
          id: b(
            'VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'VideoPlayerWatchInlineEndScreenRowQuery',
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
  'CometVideoHomeDurationThumbnailOverlay_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometVideoHomeDurationThumbnailOverlay_video',
      selections: [
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
          name: 'has_viewer_watched_show_video',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'playable_duration',
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
  'CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometVideoHomeHuddleThumbnailWithRelay3d_video',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'Video',
          kind: 'LinkedField',
          name: 'huddle_thumbnail_enabled',
          plural: !1,
          selections: [
            {
              args: null,
              documentName: 'CometVideoHomeHuddleThumbnailWithRelay3d_video',
              fragmentName: 'CometVideoHomeHuddleThumbnail_video',
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
  'CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql',
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
        name: 'CometVideoHomeTitleOwnerThumbnailOverlay_video',
        selections: [
          a,
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
              a,
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
                    args: null,
                    kind: 'ScalarField',
                    name: 'uri_token',
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
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometVideoHomeVideoThumbnailImageWithPreview_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'scale' }],
      kind: 'Fragment',
      metadata: null,
      name: 'CometVideoHomeVideoThumbnailImageWithPreview_video',
      selections: [
        {
          alias: null,
          args: [
            { kind: 'Literal', name: 'height', value: 354 },
            { kind: 'Variable', name: 'scale', variableName: 'scale' },
            { kind: 'Literal', name: 'width', value: 627 },
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
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: 'Literal', name: 'framework', value: 'WARNING_SCREENS' },
            { kind: 'Literal', name: 'location', value: 'video_home' },
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
                        'CometVideoHomeVideoThumbnailImageWithPreview_video__cix_screen',
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
            'cix_screen(framework:"WARNING_SCREENS",location:"video_home")',
        },
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
          name: 'CometVideoHomeHuddleThumbnailWithRelay3d_video',
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
  'CometVideoHomeVideoThumbnailPreviewRootQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '6009107555818432';
  },
  null,
);
__d(
  'CometVideoHomeVideoThumbnailPreviewRootQuery$Parameters',
  ['CometVideoHomeVideoThumbnailPreviewRootQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometVideoHomeVideoThumbnailPreviewRootQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometVideoHomeVideoThumbnailPreviewRootQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometFlexibleRow.react',
  ['react', 'useCometSize_DO_NOT_USE', 'useLayoutEffect_SAFE_FOR_SSR'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState,
      j = 8;
    function a(a) {
      var b = a.columnMaxWidth,
        d = a.columnMinWidth,
        e = a.children,
        f = a.justify;
      f = f === void 0 ? 'start' : f;
      var g = a.maxItems,
        k = g === void 0 ? Infinity : g;
      g = a.minItems;
      var l = g === void 0 ? 1 : g,
        m = a.onTotalItemsChanged;
      g = c('useCometSize_DO_NOT_USE')();
      a = g[0];
      var n = g[1],
        o = h.Children.toArray(e);
      g = i(o.length);
      var p = g[0],
        q = g[1];
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          if (n != null) {
            var a = [],
              c = p;
            while (!0) {
              if (a.includes(c)) break;
              var e = (n.width - c * j) / c;
              if (e > b) {
                a.push(c);
                c += 1;
                continue;
              }
              if (e < d) {
                a.push(c);
                c -= 1;
                continue;
              }
              break;
            }
            c = Math.min(Math.max(l, c), k);
            c !== p && (m && m(c), q(c));
          }
        },
        [d, b, n, k, l, p, m],
      );
      return h.jsx('div', {
        className:
          'x1qjc9v5 x78zum5 x1q0g3np xozqiw3 xcud41i x139jcc6 x1n2onr6' +
          (f === 'end'
            ? ' x13a6bvl'
            : '' + (f === 'center' ? ' xl56j7k' : ' x1nhvcw1')),
        ref: a,
        children: Array(p)
          .fill()
          .map(function (a, c) {
            return h.jsx(
              'div',
              {
                className: 'x98rzlu x150jy0e x1e558r4',
                style: { maxWidth: b, minWidth: d },
                children: o[c],
              },
              (a = (a = o[c]) == null ? void 0 : a.key) != null
                ? a
                : '_fakecolumn' + c,
            );
          }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeDurationThumbnailOverlay.react',
  [
    'fbt',
    'CometRelay',
    'CometVideoHomeDurationThumbnailOverlay_video.graphql',
    'TetraText.react',
    'VideoBroadcastStatus',
    'formatDurationSeconds',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    function a(a) {
      a = a.video;
      a = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b('CometVideoHomeDurationThumbnailOverlay_video.graphql')),
        a,
      );
      if (!a || a.broadcast_status === c('VideoBroadcastStatus').LIVE)
        return null;
      var e = a && !!a.has_viewer_watched_show_video;
      a = a.playable_duration || 0;
      return a === 0 && !e
        ? null
        : j.jsx('div', {
            className:
              'x18l40ae xm3z3ea x1x8b98j x131883w x16mih1h xqo3gd x1923su1 xyqdw3p xsyo7zv xg8j3zb x16hj40l x47corl x10l6tqk xudsgdi',
            children: j.jsx(c('TetraText.react'), {
              color: 'primaryOnMedia',
              type: 'headlineEmphasized4',
              children: e
                ? h._('__JHASH__zZ9dv--mZFL__JHASH__')
                : c('formatDurationSeconds')(a),
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeVideoThumbnailHoverContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext(!1);
    g['default'] = b;
  },
  98,
);
__d(
  'CometVideoHomePlayButtonThumbnailOverlay.react',
  [
    'ix',
    'CometImage.react',
    'CometVideoHomeVideoThumbnailHoverContext',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useContext;
    function a(a) {
      var b = a.forceVisibility;
      b = b === void 0 ? !1 : b;
      a = a.size;
      var d = j(c('CometVideoHomeVideoThumbnailHoverContext'));
      d = d || b;
      b = h('101640');
      switch (a) {
        case 24:
          b = h('354763');
          break;
        case 48:
          b = h('101640');
          break;
        case 72:
          b = h('352839');
          break;
      }
      return i.jsx('div', {
        className:
          'x1ahifba xu6gjpd x19991ni x7lz9yc x3nfvp2 x1nrll8i x10l6tqk xwa60dl x1i3z1r0' +
          (d ? ' x1hc1fzr' : ' xg01cxk'),
        children: i.jsx(c('CometImage.react'), { src: b, width: a }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeTitleOwnerThumbnailOverlay.react',
  [
    'CometLink.react',
    'CometRelay',
    'CometVideoHomePlayButtonThumbnailOverlay.react',
    'CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql',
    'CometVideoHomeVideoThumbnailHoverContext',
    'TetraTextPairing.react',
    'VideoHomeTypedLoggerLite',
    'XCometVideoHomePlaylistControllerRouteBuilder',
    'XCometWatchControllerRouteBuilder',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = d('react').useContext;
    function a(a) {
      a = a.video;
      var e = d('CometRelay').useFragment(
          h !== void 0
            ? h
            : (h = b('CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql')),
          a,
        ),
        f = j(c('CometVideoHomeVideoThumbnailHoverContext')),
        g = e == null ? void 0 : e.id,
        k = e == null ? void 0 : e.owner;
      if (a == null || g == null || k == null)
        return i.jsx(c('CometVideoHomePlayButtonThumbnailOverlay.react'), {
          size: 48,
        });
      a = e.title_with_fallback;
      var l = k.uri_token;
      l =
        l != null
          ? c('XCometVideoHomePlaylistControllerRouteBuilder').buildURL({
              idorvanity: l,
            })
          : k.url;
      g = c('XCometWatchControllerRouteBuilder').buildURL({ v: g });
      var m = function () {
          c('VideoHomeTypedLoggerLite').log({
            entry_point_type: 'inline_video_pause_screen_tapped',
            event: 'video_tab_selected',
            event_target: 'watch_video_permalink',
            tab_selection_type: 'user_initiated_click',
          }),
            c('VideoHomeTypedLoggerLite').log({
              click_point: 'inline_pause_screen',
              event: 'click',
              event_target: 'video',
              event_target_id: e.id,
            });
        },
        n = function () {
          var a;
          c('VideoHomeTypedLoggerLite').log({
            click_point: 'inline_pause_screen',
            event: 'click',
            event_target: 'page',
            event_target_id: (a = e.owner) == null ? void 0 : a.id,
          });
        };
      return i.jsx('div', {
        className:
          'x1ahifba xu6gjpd x19991ni x7lz9yc xrmyhay x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy' +
          (f ? ' x1hc1fzr' : ' xg01cxk'),
        children: i.jsx('div', {
          children: i.jsx('div', {
            className: 'x1sxyh0 xurb0ha x1y1aw1k',
            children: i.jsx(c('TetraTextPairing.react'), {
              body: i.jsx(c('CometLink.react'), {
                color: 'secondary',
                href: l,
                onClick: n,
                children: k.name,
              }),
              bodyLineLimit: 1,
              headline:
                a != null &&
                i.jsx(c('CometLink.react'), {
                  color: 'white',
                  href: g,
                  onClick: m,
                  children: a,
                }),
              headlineLineLimit: 2,
              level: 4,
              reduceEmphasis: !0,
            }),
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
  'CometVideoHomeHuddleThumbnailWithRelay3d.react',
  [
    'CometPlaceholder.react',
    'CometRelay',
    'CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e = a.className;
      a = a.video;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql')),
        a,
      );
      return i.jsx(c('CometPlaceholder.react'), {
        fallback: null,
        children: i.jsx(d('CometRelay').MatchContainer, {
          match: a == null ? void 0 : a.huddle_thumbnail_enabled,
          props: { className: e },
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeVideoThumbnailPreviewRoot.entrypoint',
  [
    'CometVideoHomeVideoThumbnailPreviewRootQuery$Parameters',
    'JSResourceForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            queryReference: {
              parameters: b(
                'CometVideoHomeVideoThumbnailPreviewRootQuery$Parameters',
              ),
              variables: { id: a.videoID },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometVideoHomeVideoThumbnailPreviewRoot.react',
      ).__setRef('CometVideoHomeVideoThumbnailPreviewRoot.entrypoint'),
    };
    d = a;
    g['default'] = d;
  },
  98,
);
__d(
  'VideoItemPreviewContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({
      hidePreview: function () {},
      isPreviewVisible: !1,
      showPreview: function () {},
    });
    g['default'] = b;
  },
  98,
);
__d(
  'CometVideoHomeVideoThumbnailPreviewEntryPointLoader.react',
  [
    'CometPlaceholder.react',
    'CometRelay',
    'CometVideoHomePositionInUnitContext',
    'CometVideoHomeSectionPositionContext',
    'CometVideoHomeVideoThumbnailPreviewRoot.entrypoint',
    'VideoHomeLoggingReactionVideoChannelTypeContext',
    'VideoHomeLoggingUpstreamPlayerSourceContext',
    'VideoHomeTypedLoggerLite',
    'VideoItemPreviewContext',
    'VideoPlayerLoggingSuboriginContext',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo,
      k = b.useState;
    function a(a) {
      var b = a.previewLogger;
      a = a.videoID;
      var e = d('CometRelay').useRelayEnvironment(),
        f = j(
          function () {
            return {
              getEnvironment: function () {
                return e;
              },
            };
          },
          [e],
        ),
        g = i(c('VideoItemPreviewContext'));
      g = g.isPreviewVisible;
      var l = k(!1),
        m = l[0];
      l = l[1];
      f = d('CometRelay').useEntryPointLoader(
        f,
        c('CometVideoHomeVideoThumbnailPreviewRoot.entrypoint'),
      );
      var n = f[0];
      f = f[1];
      var o = i(c('VideoPlayerLoggingSuboriginContext')),
        p = i(c('CometVideoHomeSectionPositionContext')),
        q = i(c('CometVideoHomePositionInUnitContext')),
        r = i(c('VideoHomeLoggingReactionVideoChannelTypeContext')),
        s = i(c('VideoHomeLoggingUpstreamPlayerSourceContext'));
      g &&
        !m &&
        (l(!0),
        c('VideoHomeTypedLoggerLite').log(
          babelHelpers['extends']({}, b, {
            event: 'video_preview_load',
            event_target: 'video',
            event_target_id: a,
            player_suborigin: o,
            position_in_unit: q,
            section_video_channel_type: r,
            unit_position: p,
            upstream_player_source: s,
          }),
        ),
        f({ videoID: a }));
      return !n
        ? null
        : h.jsx(c('CometPlaceholder.react'), {
            fallback: null,
            children: h.jsx(d('CometRelay').EntryPointContainer, {
              entryPointReference: n,
              props: {},
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeVideoThumbnailImageWithPreview.react',
  [
    'fbt',
    'CometAspectRatioContainer.react',
    'CometImage.react',
    'CometRelay',
    'CometVideoHomeHuddleThumbnailWithRelay3d.react',
    'CometVideoHomeVideoThumbnailImageWithPreview_video.graphql',
    'CometVideoHomeVideoThumbnailPreviewEntryPointLoader.react',
    'CometWarningScreenContext',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react'),
      k = {
        blackBackground: {
          backgroundColor: 'xal61yo',
          height: 'x5yr21d',
          $$css: !0,
        },
        image: {
          bottom: 'x1ey2m1c',
          end: 'xds687c',
          marginTop: 'xr1yuqi',
          marginEnd: 'xkrivgy',
          marginBottom: 'x4ii5y1',
          marginStart: 'x1gryazu',
          maxHeight: 'xmz0i5r',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        imageContainer: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xh8yej3',
          $$css: !0,
        },
        root: { position: 'x1n2onr6', $$css: !0 },
      };
    function a(a) {
      var e,
        f,
        g = a.height,
        l = a.previewDisabled;
      l = l === void 0 ? !0 : l;
      var m = a.video;
      a = a.width;
      m = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b(
              'CometVideoHomeVideoThumbnailImageWithPreview_video.graphql',
            )),
        m,
      );
      e = m == null ? void 0 : (e = m.image) == null ? void 0 : e.uri;
      f =
        m == null ? void 0 : (f = m.cix_screen) == null ? void 0 : f.view_model;
      var n = m == null ? void 0 : m.id;
      return n == null || n === '' || e == null
        ? null
        : j.jsx('div', {
            className: 'x1n2onr6',
            children: j.jsx(c('CometAspectRatioContainer.react'), {
              aspectRatio: a / g,
              children: j.jsx(
                d('CometWarningScreenContext')
                  .CometWarningScreenContextProvider,
                {
                  overlayExists: f != null,
                  children: j.jsxs('div', {
                    className: 'x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3',
                    children: [
                      j.jsx('div', { className: 'xal61yo x5yr21d' }),
                      j.jsx(c('CometImage.react'), {
                        alt: h._('__JHASH__aOk6sift_ib__JHASH__'),
                        src: e,
                        xstyle: k.image,
                      }),
                      j.jsx(
                        c('CometVideoHomeHuddleThumbnailWithRelay3d.react'),
                        {
                          className:
                            'x1ey2m1c xds687c xr1yuqi xkrivgy x4ii5y1 x1gryazu xmz0i5r x10l6tqk x17qophe x13vifvy',
                          video: m,
                        },
                      ),
                      !l &&
                        j.jsx(
                          c(
                            'CometVideoHomeVideoThumbnailPreviewEntryPointLoader.react',
                          ),
                          { videoID: n },
                        ),
                      j.jsx(d('CometRelay').MatchContainer, {
                        match: f,
                        props: {
                          alwaysUseSmallLayout: !0,
                          data: f,
                          mediaUri: e,
                          surface: 'video_home',
                        },
                      }),
                    ],
                  }),
                },
              ),
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWatchInlinePauseScreenRowItem.react',
  [
    'CometLink.react',
    'CometRelay',
    'CometTrackingCodeProvider.react',
    'CometVideoHomeDurationThumbnailOverlay.react',
    'CometVideoHomeTitleOwnerThumbnailOverlay.react',
    'CometVideoHomeVideoThumbnailHoverContext',
    'CometVideoHomeVideoThumbnailImageWithPreview.react',
    'VideoHomeTypedLoggerLite',
    'VideoPlayerWatchInlinePauseScreenRowItem_story.graphql',
    'VideoPlayerWatchInlinePauseScreenRowItem_video.graphql',
    'XCometWatchControllerRouteBuilder',
    'react',
    'useInnerMostTrackingCode',
    'useStoryVPVDLogger',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = d('react');
    e = d('react');
    var k = e.useCallback,
      l = e.useState,
      m = 84,
      n = 150;
    function a(a) {
      var e = a.position,
        f = a.story;
      a = a.video;
      f = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('VideoPlayerWatchInlinePauseScreenRowItem_story.graphql')),
        f,
      );
      e = c('useStoryVPVDLogger')({
        interactionSourceOverride: 54,
        position: e,
        trackable: f == null ? void 0 : f.encrypted_tracking,
      });
      var g = e[0];
      e = e[1];
      var i = f.click_tracking_linkshim_cb,
        k = f.encrypted_click_tracking;
      f = f.encrypted_tracking;
      i = {
        click_tracking_linkshim_cb: i || '',
        encrypted_click_tracking: k || '',
        encrypted_tracking: f || '',
      };
      return j.jsx('div', {
        className: 'x78zum5 xdt5ytf',
        ref: g,
        children: j.jsx(c('CometTrackingCodeProvider.react'), {
          trackingCode: i,
          children: j.jsx(o, { video: a, vpvdDebuggingInfoComponent: e }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function o(a) {
      var e = a.video;
      a = a.vpvdDebuggingInfoComponent;
      var f = l(!1),
        g = f[0],
        h = f[1];
      f = k(function () {
        h(!0);
      }, []);
      var o = k(function () {
          h(!1);
        }, []),
        p = c('useInnerMostTrackingCode')(),
        q = d('CometRelay').useFragment(
          i !== void 0
            ? i
            : (i = b('VideoPlayerWatchInlinePauseScreenRowItem_video.graphql')),
          e,
        );
      e = q == null ? void 0 : q.id;
      if (q == null || e == null) return null;
      e = c('XCometWatchControllerRouteBuilder').buildURL({ v: e });
      var r = function () {
        c('VideoHomeTypedLoggerLite').log({
          entry_point_type: 'inline_video_pause_screen_tapped',
          event: 'video_tab_selected',
          event_target: 'watch_video_permalink',
          tab_selection_type: 'user_initiated_click',
        }),
          c('VideoHomeTypedLoggerLite').log({
            click_point: 'inline_pause_screen',
            event: 'click',
            event_target: 'video',
            event_target_id: q.id,
          });
      };
      p = { playerSubOrigin: 'inline_pause_screen', trackingCode: p };
      return j.jsxs(j.Fragment, {
        children: [
          a,
          j.jsx(c('CometLink.react'), {
            href: e,
            onClick: r,
            passthroughProps: p,
            children: j.jsx(
              c('CometVideoHomeVideoThumbnailHoverContext').Provider,
              {
                value: g,
                children: j.jsxs('div', {
                  className:
                    'xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x6ikm8r x10wlt62 x1n2onr6',
                  onMouseEnter: f,
                  onMouseLeave: o,
                  children: [
                    j.jsx(
                      c('CometVideoHomeVideoThumbnailImageWithPreview.react'),
                      { height: m, video: q, width: n },
                    ),
                    j.jsx(c('CometVideoHomeDurationThumbnailOverlay.react'), {
                      video: q,
                    }),
                    j.jsx(c('CometVideoHomeTitleOwnerThumbnailOverlay.react'), {
                      video: q,
                    }),
                  ],
                }),
              },
            ),
          }),
        ],
      });
    }
    o.displayName = o.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWatchInlinePauseScreenRow.react',
  [
    'fbt',
    'ix',
    'CometFlexibleRow.react',
    'CometImage.react',
    'CometLink.react',
    'CometPressable.react',
    'RelayHooks',
    'TetraText.react',
    'VideoPlayerWatchInlinePauseScreenRowItem.react',
    'VideoPlayerWatchInlinePauseScreenRowQuery.graphql',
    'WebPixelRatio',
    'XCometWatchControllerRouteBuilder',
    'react',
    'requireDeferred',
    'useImpressionLogger',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react');
    e = d('react');
    var l = e.useEffect,
      m = e.useState,
      n = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'VideoPlayerWatchInlinePauseScreenRow.react',
      );
    function a(a) {
      var e = a.onPauseScreenDismissed,
        f = a.videoChainingCaller,
        g = a.videoChannelEntryPoint,
        o = a.videoChannelID;
      a = a.videoID;
      f = d('RelayHooks').useLazyLoadQuery(
        j !== void 0
          ? j
          : (j = b('VideoPlayerWatchInlinePauseScreenRowQuery.graphql')),
        {
          caller: f,
          entry_channel_id: o,
          entry_point: g,
          id: a,
          scale: d('WebPixelRatio').get(),
        },
      );
      o = m(!1);
      var p = o[0],
        q = o[1];
      g = m(!1);
      var r = g[0],
        s = g[1];
      a = c('useImpressionLogger')(n, function (a, b) {
        r || (a.log({ event: 'inline_pause_screen_impression' }), s(!0));
      });
      g =
        (o =
          f == null
            ? void 0
            : (o = f.video) == null
            ? void 0
            : (g = o.video_channel) == null
            ? void 0
            : (f = g.video_channel_feed) == null
            ? void 0
            : f.nodes) != null
          ? o
          : [];
      var t = g
        .map(function (a, b) {
          var d;
          d = (d = a == null ? void 0 : a.attached_story) != null ? d : a;
          d =
            d == null
              ? void 0
              : (d = d.attachments) == null
              ? void 0
              : (d = d[0]) == null
              ? void 0
              : d.media;
          return d == null || d.__typename !== 'Video'
            ? null
            : k.jsx(
                c('VideoPlayerWatchInlinePauseScreenRowItem.react'),
                { position: b, story: a, video: d },
                d.id,
              );
        })
        .filter(Boolean);
      l(
        function () {
          p ||
            (n.onReady(function (a) {
              a.log({
                event: 'video_pause_card_fetch',
                result_count: t.length,
              });
            }),
            q(!0));
        },
        [p, t.length],
      );
      f = function () {
        n.onReady(function (a) {
          a.log({
            click_point: 'inline_pause_screen',
            event: 'click',
            event_target: 'watch',
          }),
            a.log({
              entry_point_type: 'inline_video_pause_screen_tapped',
              event: 'video_tab_selected',
              event_target: 'watch_home_www',
              tab_selection_type: 'user_initiated_click',
            });
        });
      };
      return t.length > 0
        ? k.jsxs('div', {
            className: 'x78zum5 xdt5ytf x1iyjqo2 x1a7vs8u x13a6bvl x1rxj1xn',
            ref: a,
            children: [
              k.jsxs('div', {
                className: 'x78zum5 x1qughib',
                children: [
                  k.jsx('div', {
                    className: 'x1l90r2v',
                    children: k.jsx(c('TetraText.react'), {
                      color: 'primaryOnMedia',
                      type: 'headlineEmphasized2',
                      children: k.jsx(c('CometLink.react'), {
                        href: c('XCometWatchControllerRouteBuilder').buildURL(
                          {},
                        ),
                        onClick: f,
                        children: h._('__JHASH__EiykiS_cWKk__JHASH__'),
                      }),
                    }),
                  }),
                  k.jsx('div', {
                    className: 'xlup9mm',
                    children:
                      e != null
                        ? k.jsx(c('CometPressable.react'), {
                            label: h._('__JHASH__34kJTOTg-tU__JHASH__'),
                            onPress: e,
                            children: k.jsx('div', {
                              className: 'x1ypdohk xlup9mm x67bb7w',
                              children: k.jsx(c('CometImage.react'), {
                                src: i('480713'),
                              }),
                            }),
                          })
                        : null,
                  }),
                ],
              }),
              k.jsx(c('CometFlexibleRow.react'), {
                columnMaxWidth: 250,
                columnMinWidth: 100,
                justify: 'start',
                minItems: t.length,
                children: t,
              }),
            ],
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWatchInlinePauseScreenRowContainer.react',
  ['VideoPlayerWatchInlinePauseScreenRow.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.onPauseScreenDismissed,
        d = a.videoChainingCaller,
        e = a.videoChannelEntryPoint,
        f = a.videoChannelID;
      a = a.videoID;
      return h.jsx(c('VideoPlayerWatchInlinePauseScreenRow.react'), {
        onPauseScreenDismissed: b,
        videoChainingCaller: d,
        videoChannelEntryPoint: e,
        videoChannelID: f,
        videoID: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWatchInlineEndScreenRowItem.react',
  [
    'CometLink.react',
    'CometRelay',
    'CometTrackingCodeProvider.react',
    'CometVideoHomeDurationThumbnailOverlay.react',
    'CometVideoHomePlayButtonThumbnailOverlay.react',
    'CometVideoHomeVideoThumbnailHoverContext',
    'CometVideoHomeVideoThumbnailImageWithPreview.react',
    'TetraTextPairing.react',
    'VideoHomeTypedLoggerLite',
    'VideoPlayerWatchInlineEndScreenRowItem_story.graphql',
    'VideoPlayerWatchInlineEndScreenRowItem_video.graphql',
    'XCometVideoHomePlaylistControllerRouteBuilder',
    'XCometWatchControllerRouteBuilder',
    'react',
    'useInnerMostTrackingCode',
    'useStoryVPVDLogger',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = d('react');
    e = d('react');
    var k = e.useCallback,
      l = e.useState,
      m = 84,
      n = 150;
    function a(a) {
      var e = a.position,
        f = a.story;
      a = a.video;
      f = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('VideoPlayerWatchInlineEndScreenRowItem_story.graphql')),
        f,
      );
      e = c('useStoryVPVDLogger')({
        interactionSourceOverride: 54,
        position: e,
        trackable: f == null ? void 0 : f.encrypted_tracking,
      });
      var g = e[0];
      e = e[1];
      var i = f.click_tracking_linkshim_cb,
        k = f.encrypted_click_tracking;
      f = f.encrypted_tracking;
      i = {
        click_tracking_linkshim_cb: i || '',
        encrypted_click_tracking: k || '',
        encrypted_tracking: f || '',
      };
      return j.jsx('div', {
        className: 'x78zum5 xdt5ytf',
        ref: g,
        children: j.jsx(c('CometTrackingCodeProvider.react'), {
          trackingCode: i,
          children: j.jsx(o, { video: a, vpvdDebuggingInfoComponent: e }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function o(a) {
      var e = a.video;
      a = a.vpvdDebuggingInfoComponent;
      var f = l(!1),
        g = f[0],
        h = f[1];
      f = k(function () {
        h(!0);
      }, []);
      var o = k(function () {
          h(!1);
        }, []),
        p = c('useInnerMostTrackingCode')(),
        q = d('CometRelay').useFragment(
          i !== void 0
            ? i
            : (i = b('VideoPlayerWatchInlineEndScreenRowItem_video.graphql')),
          e,
        );
      e = q == null ? void 0 : q.id;
      var r = q == null ? void 0 : q.owner;
      if (q == null || e == null || r == null) return null;
      var s = q.title_with_fallback,
        t = r.uri_token;
      t =
        t != null
          ? c('XCometVideoHomePlaylistControllerRouteBuilder').buildURL({
              idorvanity: t,
            })
          : r.url;
      e = c('XCometWatchControllerRouteBuilder').buildURL({ v: e });
      var u = function () {
          c('VideoHomeTypedLoggerLite').log({
            entry_point_type: 'inline_video_end_screen_tapped',
            event: 'video_tab_selected',
            event_target: 'watch_video_permalink',
            tab_selection_type: 'user_initiated_click',
          }),
            c('VideoHomeTypedLoggerLite').log({
              click_point: 'inline_end_screen',
              event: 'click',
              event_target: 'video',
              event_target_id: q.id,
            });
        },
        v = function () {
          var a;
          c('VideoHomeTypedLoggerLite').log({
            click_point: 'inline_end_screen',
            event: 'click',
            event_target: 'page',
            event_target_id: (a = q.owner) == null ? void 0 : a.id,
          });
        };
      p = { playerSubOrigin: 'inline_end_screen', trackingCode: p };
      return j.jsxs(j.Fragment, {
        children: [
          a,
          j.jsx(c('CometLink.react'), {
            href: e,
            onClick: u,
            passthroughProps: p,
            children: j.jsx(
              c('CometVideoHomeVideoThumbnailHoverContext').Provider,
              {
                value: g,
                children: j.jsxs('div', {
                  className:
                    'xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x6ikm8r x10wlt62 x1n2onr6',
                  onMouseEnter: f,
                  onMouseLeave: o,
                  children: [
                    j.jsx(
                      c('CometVideoHomeVideoThumbnailImageWithPreview.react'),
                      { height: m, video: q, width: n },
                    ),
                    j.jsx(c('CometVideoHomeDurationThumbnailOverlay.react'), {
                      video: q,
                    }),
                    j.jsx(c('CometVideoHomePlayButtonThumbnailOverlay.react'), {
                      size: 48,
                    }),
                  ],
                }),
              },
            ),
          }),
          j.jsx('div', {
            className: 'x1sxyh0 x1y1aw1k',
            children: j.jsx(c('TetraTextPairing.react'), {
              body: j.jsx(c('CometLink.react'), {
                color: 'secondary',
                href: t,
                onClick: v,
                children: r.name,
              }),
              bodyLineLimit: 1,
              headline:
                s != null &&
                j.jsx(c('CometLink.react'), {
                  color: 'white',
                  href: e,
                  onClick: u,
                  passthroughProps: p,
                  children: s,
                }),
              headlineLineLimit: 3,
              level: 4,
              reduceEmphasis: !0,
            }),
          }),
        ],
      });
    }
    o.displayName = o.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWatchInlineEndScreenRow.react',
  [
    'fbt',
    'CometFlexibleRow.react',
    'CometLink.react',
    'RelayHooks',
    'TetraText.react',
    'VideoPlayerWatchInlineEndScreenRowItem.react',
    'VideoPlayerWatchInlineEndScreenRowQuery.graphql',
    'WebPixelRatio',
    'XCometWatchControllerRouteBuilder',
    'react',
    'requireDeferred',
    'useImpressionLogger',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useEffect,
      l = e.useState,
      m = c('requireDeferred')('VideoHomeTypedLoggerLite').__setRef(
        'VideoPlayerWatchInlineEndScreenRow.react',
      );
    function a(a) {
      var e = a.videoChainingCaller,
        f = a.videoChannelEntryPoint,
        g = a.videoChannelID;
      a = a.videoID;
      e = d('RelayHooks').useLazyLoadQuery(
        i !== void 0
          ? i
          : (i = b('VideoPlayerWatchInlineEndScreenRowQuery.graphql')),
        {
          caller: e,
          entry_channel_id: g,
          entry_point: f,
          id: a,
          scale: d('WebPixelRatio').get(),
        },
      );
      g = l(!1);
      var n = g[0],
        o = g[1];
      f = l(!1);
      var p = f[0],
        q = f[1];
      a = c('useImpressionLogger')(m, function (a, b) {
        p || (a.log({ event: 'inline_end_screen_impression' }), q(!0));
      });
      f =
        (g =
          e == null
            ? void 0
            : (g = e.video) == null
            ? void 0
            : (f = g.video_channel) == null
            ? void 0
            : (e = f.video_channel_feed) == null
            ? void 0
            : e.nodes) != null
          ? g
          : [];
      var r = f
        .map(function (a, b) {
          var d;
          d = (d = a == null ? void 0 : a.attached_story) != null ? d : a;
          d =
            d == null
              ? void 0
              : (d = d.attachments) == null
              ? void 0
              : (d = d[0]) == null
              ? void 0
              : d.media;
          return d == null || d.__typename !== 'Video'
            ? null
            : j.jsx(
                c('VideoPlayerWatchInlineEndScreenRowItem.react'),
                { position: b, story: a, video: d },
                d.id,
              );
        })
        .filter(Boolean);
      k(
        function () {
          n ||
            (m.onReady(function (a) {
              a.log({ event: 'video_end_card_fetch', result_count: r.length });
            }),
            o(!0));
        },
        [n, r.length],
      );
      e = function () {
        m.onReady(function (a) {
          a.log({
            click_point: 'inline_end_screen',
            event: 'click',
            event_target: 'watch',
          }),
            a.log({
              entry_point_type: 'inline_video_end_screen_tapped',
              event: 'video_tab_selected',
              event_target: 'watch_home_www',
              tab_selection_type: 'user_initiated_click',
            });
        });
      };
      return r.length > 0
        ? j.jsxs('div', {
            className: 'x78zum5 xdt5ytf x1iyjqo2 x1a7vs8u xl56j7k x1l90r2v',
            ref: a,
            children: [
              j.jsx('div', {
                className: 'x1l90r2v',
                children: j.jsx(c('TetraText.react'), {
                  color: 'primaryOnMedia',
                  type: 'headlineEmphasized2',
                  children: j.jsx(c('CometLink.react'), {
                    href: c('XCometWatchControllerRouteBuilder').buildURL({}),
                    onClick: e,
                    children: h._('__JHASH__OXNbxgna3kJ__JHASH__'),
                  }),
                }),
              }),
              j.jsx(c('CometFlexibleRow.react'), {
                columnMaxWidth: 250,
                columnMinWidth: 100,
                justify: 'start',
                minItems: r.length,
                children: r,
              }),
            ],
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWatchInlineEndScreenRowContainer.react',
  ['VideoPlayerWatchInlineEndScreenRow.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.videoChainingCaller,
        d = a.videoChannelEntryPoint,
        e = a.videoChannelID;
      a = a.videoID;
      return h.jsx(c('VideoPlayerWatchInlineEndScreenRow.react'), {
        videoChainingCaller: b,
        videoChannelEntryPoint: d,
        videoChannelID: e,
        videoID: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometChannelTabVideoPreviewRootQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5396104227155827';
  },
  null,
); /*FB_PKG_DELIM*/
__d(
  'useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'PrivacyRowInput_fragment',
          },
        ],
        b = {
          alias: null,
          args: null,
          concreteType: 'PrivacyRowInput',
          kind: 'LinkedField',
          name: 'privacy_row_input',
          plural: !1,
          selections: a,
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'localPrivacyRow',
          },
          { defaultValue: null, kind: 'LocalArgument', name: 'renderLocation' },
          { defaultValue: null, kind: 'LocalArgument', name: 'tags' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'useCometPrivacySelectorOnRowInputMismatchEffect_renderer',
        selections: [
          b,
          {
            alias: 'scope',
            args: [
              {
                kind: 'Variable',
                name: 'render_location',
                variableName: 'renderLocation',
              },
              {
                kind: 'Variable',
                name: 'selected_override',
                variableName: 'localPrivacyRow',
              },
              { kind: 'Variable', name: 'tags', variableName: 'tags' },
            ],
            concreteType: 'PrivacyScope',
            kind: 'LinkedField',
            name: 'privacy_scope_for_location',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'PrivacyRowInput',
                kind: 'LinkedField',
                name: 'selected_row_override',
                plural: !1,
                selections: a,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'PrivacyOption',
                kind: 'LinkedField',
                name: 'selected_option',
                plural: !1,
                selections: [b],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'PrivacySelectorRenderer',
        abstractKey: '__isPrivacySelectorRenderer',
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'useCometPrivacySelectorPushView_scope.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometPrivacySelectorPushView_scope',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useCometPrivacySelectorCanOpenSelector_scope',
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'privacy_write_id',
          storageKey: null,
        },
      ],
      type: 'PrivacyScope',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometPrivacySelectorEditableQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5746866215359885';
  },
  null,
);
__d(
  'CometPrivacySelectorEditable_renderer$normalization.graphql',
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
          kind: 'Variable',
          name: 'render_location',
          variableName: 'CometPrivacySelectorEditable_renderer$renderLocation',
        },
        c = [
          b,
          {
            kind: 'Variable',
            name: 'selected_override',
            variableName:
              'CometPrivacySelectorEditable_renderer$localPrivacyRow',
          },
          {
            kind: 'Variable',
            name: 'tags',
            variableName: 'CometPrivacySelectorEditable_renderer$tags',
          },
        ],
        d = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'can_viewer_edit',
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'privacy_write_id',
          storageKey: null,
        },
        f = [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'allow',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'base_state',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'deny',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'PrivacyRowInputTargetingFields',
            kind: 'LinkedField',
            name: 'privacy_targeting',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'targeted_publishing_id',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'targeted_publishing_fields',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'tag_expansion_state',
            storageKey: null,
          },
        ],
        g = {
          alias: null,
          args: null,
          concreteType: 'PrivacyRowInput',
          kind: 'LinkedField',
          name: 'privacy_row_input',
          plural: !1,
          selections: f,
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'current_tag_expansion',
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'explanation',
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'explanation_with_tag_expansion',
          storageKey: null,
        },
        l = { kind: 'Variable', name: 'scale', variableName: 'scale' },
        m = [
          { kind: 'Literal', name: 'icon_purpose', value: 'OPTION_LIST' },
          b,
          l,
        ],
        n = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'height',
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'scale',
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'uri',
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'width',
          storageKey: null,
        },
        r = {
          alias: null,
          args: m,
          concreteType: 'Image',
          kind: 'LinkedField',
          name: 'icon_image',
          plural: !1,
          selections: [
            n,
            o,
            p,
            q,
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
        s = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'info_type',
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'label',
          storageKey: null,
        };
      n = [n, o, p, q];
      o = [h, a];
      return {
        argumentDefinitions: [
          {
            defaultValue: !1,
            kind: 'LocalArgument',
            name: 'CometPrivacySelectorEditable_renderer$includePickerData',
          },
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'CometPrivacySelectorEditable_renderer$localPrivacyRow',
          },
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'CometPrivacySelectorEditable_renderer$renderLocation',
          },
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'CometPrivacySelectorEditable_renderer$tags',
          },
        ],
        kind: 'SplitOperation',
        metadata: {},
        name: 'CometPrivacySelectorEditable_renderer$normalization',
        selections: [
          a,
          {
            alias: 'scope',
            args: c,
            concreteType: 'PrivacyScope',
            kind: 'LinkedField',
            name: 'privacy_scope_for_location',
            plural: !1,
            selections: [d, e],
            storageKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              g,
              {
                alias: 'scope',
                args: c,
                concreteType: 'PrivacyScope',
                kind: 'LinkedField',
                name: 'privacy_scope_for_location',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'PrivacyRowInput',
                    kind: 'LinkedField',
                    name: 'selected_row_override',
                    plural: !1,
                    selections: f,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'PrivacyOption',
                    kind: 'LinkedField',
                    name: 'selected_option',
                    plural: !1,
                    selections: [g, a],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  b,
                  {
                    kind: 'Literal',
                    name: 'supported',
                    value: [
                      'PrivacyScopeCometButtonEntryPointRenderer',
                      'PrivacyScopeCometComposerButtonEntryPointRenderer',
                      'PrivacyScopeCometIconEntryPointRenderer',
                      'PrivacyScopeCometLabelEntryPointRenderer',
                      'PrivacyScopeCometToggleEntryPointRenderer',
                      'PrivacyScopeCometLeftRailButtonEntryPointRenderer',
                    ],
                  },
                ],
                concreteType: null,
                kind: 'LinkedField',
                name: 'entry_point_renderer',
                plural: !1,
                selections: [
                  h,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        args: [
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointButton_renderer$localPrivacyRow',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$localPrivacyRow',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointButton_renderer$renderLocation',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$renderLocation',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointButton_renderer$tags',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$tags',
                          },
                        ],
                        documentName:
                          'CometPrivacySelectorEntryPointMatchContainer_renderer',
                        fragmentName:
                          'CometPrivacySelectorEntryPointButton_renderer',
                        fragmentPropName: 'renderer',
                        kind: 'ModuleImport',
                      },
                    ],
                    type: 'PrivacyScopeCometButtonEntryPointRenderer',
                    abstractKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        args: [
                          {
                            kind: 'Variable',
                            name: 'CometComposerPrivacySelectorEntryPointButton_renderer$localPrivacyRow',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$localPrivacyRow',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$renderLocation',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometComposerPrivacySelectorEntryPointButton_renderer$tags',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$tags',
                          },
                        ],
                        documentName:
                          'CometPrivacySelectorEntryPointMatchContainer_renderer',
                        fragmentName:
                          'CometComposerPrivacySelectorEntryPointButton_renderer',
                        fragmentPropName: 'renderer',
                        kind: 'ModuleImport',
                      },
                    ],
                    type: 'PrivacyScopeCometComposerButtonEntryPointRenderer',
                    abstractKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        args: [
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$localPrivacyRow',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointIcon_renderer$renderLocation',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$renderLocation',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointIcon_renderer$tags',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$tags',
                          },
                        ],
                        documentName:
                          'CometPrivacySelectorEntryPointMatchContainer_renderer',
                        fragmentName:
                          'CometPrivacySelectorEntryPointIcon_renderer',
                        fragmentPropName: 'renderer',
                        kind: 'ModuleImport',
                      },
                    ],
                    type: 'PrivacyScopeCometIconEntryPointRenderer',
                    abstractKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        args: [
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointLabel_renderer$localPrivacyRow',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$localPrivacyRow',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointLabel_renderer$renderLocation',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$renderLocation',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointLabel_renderer$tags',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$tags',
                          },
                        ],
                        documentName:
                          'CometPrivacySelectorEntryPointMatchContainer_renderer',
                        fragmentName:
                          'CometPrivacySelectorEntryPointLabel_renderer',
                        fragmentPropName: 'renderer',
                        kind: 'ModuleImport',
                      },
                    ],
                    type: 'PrivacyScopeCometLabelEntryPointRenderer',
                    abstractKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        args: [
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointToggle_renderer$localPrivacyRow',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$localPrivacyRow',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointToggle_renderer$renderLocation',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$renderLocation',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointToggle_renderer$tags',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$tags',
                          },
                        ],
                        documentName:
                          'CometPrivacySelectorEntryPointMatchContainer_renderer',
                        fragmentName:
                          'CometPrivacySelectorEntryPointToggle_renderer',
                        fragmentPropName: 'renderer',
                        kind: 'ModuleImport',
                      },
                    ],
                    type: 'PrivacyScopeCometToggleEntryPointRenderer',
                    abstractKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        args: [
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointLeftRailButton_renderer$localPrivacyRow',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$localPrivacyRow',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointLeftRailButton_renderer$renderLocation',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$renderLocation',
                          },
                          {
                            kind: 'Variable',
                            name: 'CometPrivacySelectorEntryPointLeftRailButton_renderer$tags',
                            variableName:
                              'CometPrivacySelectorEditable_renderer$tags',
                          },
                        ],
                        documentName:
                          'CometPrivacySelectorEntryPointMatchContainer_renderer',
                        fragmentName:
                          'CometPrivacySelectorEntryPointLeftRailButton_renderer',
                        fragmentPropName: 'renderer',
                        kind: 'ModuleImport',
                      },
                    ],
                    type: 'PrivacyScopeCometLeftRailButtonEntryPointRenderer',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'PrivacySelectorRenderer',
            abstractKey: '__isPrivacySelectorRenderer',
          },
          {
            condition:
              'CometPrivacySelectorEditable_renderer$includePickerData',
            kind: 'Condition',
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: c,
                concreteType: 'PrivacyScope',
                kind: 'LinkedField',
                name: 'privacy_scope_for_location',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'should_save_on_select',
                    storageKey: null,
                  },
                  d,
                  {
                    alias: null,
                    args: [
                      {
                        kind: 'Literal',
                        name: 'supported',
                        value: ['PrivacySelectorSimpleHeaderRenderer'],
                      },
                    ],
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'header_renderer',
                    plural: !1,
                    selections: [
                      h,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            args: null,
                            documentName: 'CometPrivacySelectorPicker_scope',
                            fragmentName:
                              'CometPrivacySelectorPickerHeader_header',
                            fragmentPropName: 'header',
                            kind: 'ModuleImport',
                          },
                        ],
                        type: 'PrivacySelectorSimpleHeaderRenderer',
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'header_renderer(supported:["PrivacySelectorSimpleHeaderRenderer"])',
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'PrivacyOption',
                    kind: 'LinkedField',
                    name: 'options',
                    plural: !0,
                    selections: [
                      a,
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'is_selected',
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: [
                          {
                            kind: 'Literal',
                            name: 'supported',
                            value: [
                              'PrivacyOptionBasicOptionRenderer',
                              'PrivacyOptionFullCustomOptionRenderer',
                              'PrivacyOptionSavedCustomOptionRenderer',
                              'PrivacyOptionLockedProfileDisabledOptionRenderer',
                              'PrivacyOptionRestrictedAudienceOptionRenderer',
                            ],
                          },
                        ],
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'renderer',
                        plural: !1,
                        selections: [
                          h,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'PrivacyOption',
                                kind: 'LinkedField',
                                name: 'option',
                                plural: !1,
                                selections: [i, j, k, r, a, s, t, g],
                                storageKey: null,
                              },
                            ],
                            type: 'PrivacyOptionBasicOptionRenderer',
                            abstractKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'PrivacyOption',
                                kind: 'LinkedField',
                                name: 'option',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: m,
                                    concreteType: 'Image',
                                    kind: 'LinkedField',
                                    name: 'icon_image',
                                    plural: !1,
                                    selections: n,
                                    storageKey: null,
                                  },
                                  i,
                                  j,
                                  k,
                                  a,
                                  t,
                                  g,
                                ],
                                storageKey: null,
                              },
                            ],
                            type: 'PrivacyOptionFullCustomOptionRenderer',
                            abstractKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'saved_custom_type',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'PrivacyOption',
                                kind: 'LinkedField',
                                name: 'option',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'included_members',
                                    plural: !0,
                                    selections: o,
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'excluded_members',
                                    plural: !0,
                                    selections: o,
                                    storageKey: null,
                                  },
                                  a,
                                  i,
                                  j,
                                  k,
                                  r,
                                  s,
                                  t,
                                  g,
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'dialog_title',
                                storageKey: null,
                              },
                            ],
                            type: 'PrivacyOptionSavedCustomOptionRenderer',
                            abstractKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'PrivacyOption',
                                kind: 'LinkedField',
                                name: 'option',
                                plural: !1,
                                selections: [r, i, j, k, s, t, g, a],
                                storageKey: null,
                              },
                            ],
                            type: 'PrivacyOptionLockedProfileDisabledOptionRenderer',
                            abstractKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'PrivacyOption',
                                kind: 'LinkedField',
                                name: 'option',
                                plural: !1,
                                selections: [a, g],
                                storageKey: null,
                              },
                            ],
                            type: 'PrivacyOptionRestrictedAudienceOptionRenderer',
                            abstractKey: null,
                          },
                        ],
                        storageKey:
                          'renderer(supported:["PrivacyOptionBasicOptionRenderer","PrivacyOptionFullCustomOptionRenderer","PrivacyOptionSavedCustomOptionRenderer","PrivacyOptionLockedProfileDisabledOptionRenderer","PrivacyOptionRestrictedAudienceOptionRenderer"])',
                      },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'description',
                        storageKey: null,
                      },
                      {
                        alias: 'trigger_icon_image',
                        args: [
                          {
                            kind: 'Literal',
                            name: 'icon_purpose',
                            value: 'TRIGGER',
                          },
                          b,
                          l,
                        ],
                        concreteType: 'Image',
                        kind: 'LinkedField',
                        name: 'icon_image',
                        plural: !1,
                        selections: n,
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  e,
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'show_tag_expansion_options',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [
                      {
                        kind: 'Literal',
                        name: 'supported',
                        value: ['PrivacySelectorDefaultPrivacyFooterRenderer'],
                      },
                    ],
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'footer_renderer',
                    plural: !1,
                    selections: [
                      h,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            args: null,
                            documentName:
                              'CometPrivacySelectorPickerFooter_scope',
                            fragmentName:
                              'CometDefaultPrivacySelectorPickerFooter_footer',
                            fragmentPropName: 'footer',
                            kind: 'ModuleImport',
                          },
                        ],
                        type: 'PrivacySelectorDefaultPrivacyFooterRenderer',
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'footer_renderer(supported:["PrivacySelectorDefaultPrivacyFooterRenderer"])',
                  },
                ],
                storageKey: null,
              },
              g,
            ],
          },
        ],
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometPrivacySelectorEditableQuery.graphql',
  [
    'CometPrivacySelectorEditable_renderer$normalization.graphql',
    'CometPrivacySelectorEditableQuery_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'id' },
        c = {
          defaultValue: !1,
          kind: 'LocalArgument',
          name: 'includePickerData',
        },
        d = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'localPrivacyRow',
        },
        e = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'renderLocation',
        },
        f = { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        g = { defaultValue: null, kind: 'LocalArgument', name: 'tags' },
        h = [{ kind: 'Variable', name: 'id', variableName: 'id' }];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g],
          kind: 'Fragment',
          metadata: null,
          name: 'CometPrivacySelectorEditableQuery',
          selections: [
            {
              alias: null,
              args: h,
              concreteType: null,
              kind: 'LinkedField',
              name: 'node',
              plural: !1,
              selections: [
                {
                  args: [
                    {
                      kind: 'Variable',
                      name: 'includePickerData',
                      variableName: 'includePickerData',
                    },
                    {
                      kind: 'Variable',
                      name: 'localPrivacyRow',
                      variableName: 'localPrivacyRow',
                    },
                    {
                      kind: 'Variable',
                      name: 'renderLocation',
                      variableName: 'renderLocation',
                    },
                    { kind: 'Variable', name: 'tags', variableName: 'tags' },
                  ],
                  kind: 'FragmentSpread',
                  name: 'CometPrivacySelectorEditable_renderer',
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
          argumentDefinitions: [c, d, e, f, g, a],
          kind: 'Operation',
          name: 'CometPrivacySelectorEditableQuery',
          selections: [
            {
              alias: null,
              args: h,
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
                  args: [
                    {
                      kind: 'Variable',
                      name: 'CometPrivacySelectorEditable_renderer$includePickerData',
                      variableName: 'includePickerData',
                    },
                    {
                      kind: 'Variable',
                      name: 'CometPrivacySelectorEditable_renderer$localPrivacyRow',
                      variableName: 'localPrivacyRow',
                    },
                    {
                      kind: 'Variable',
                      name: 'CometPrivacySelectorEditable_renderer$renderLocation',
                      variableName: 'renderLocation',
                    },
                    {
                      kind: 'Variable',
                      name: 'CometPrivacySelectorEditable_renderer$tags',
                      variableName: 'tags',
                    },
                  ],
                  fragment: b(
                    'CometPrivacySelectorEditable_renderer$normalization.graphql',
                  ),
                  kind: 'FragmentSpread',
                },
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
        },
        params: {
          id: b('CometPrivacySelectorEditableQuery_facebookRelayOperation'),
          metadata: {},
          name: 'CometPrivacySelectorEditableQuery',
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
  'CometPrivacySelectorEditable_renderer.graphql',
  ['CometPrivacySelectorEditableQuery.graphql'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { kind: 'Variable', name: 'tags', variableName: 'tags' },
        c = [
          {
            kind: 'Variable',
            name: 'localPrivacyRow',
            variableName: 'localPrivacyRow',
          },
          {
            kind: 'Variable',
            name: 'renderLocation',
            variableName: 'renderLocation',
          },
          a,
        ];
      return {
        argumentDefinitions: [
          {
            defaultValue: !1,
            kind: 'LocalArgument',
            name: 'includePickerData',
          },
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'localPrivacyRow',
          },
          { defaultValue: null, kind: 'LocalArgument', name: 'renderLocation' },
          { kind: 'RootArgument', name: 'scale' },
          { defaultValue: null, kind: 'LocalArgument', name: 'tags' },
        ],
        kind: 'Fragment',
        metadata: {
          refetch: {
            connection: null,
            fragmentPathInResult: ['node'],
            operation: b('CometPrivacySelectorEditableQuery.graphql'),
            identifierField: 'id',
          },
        },
        name: 'CometPrivacySelectorEditable_renderer',
        selections: [
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer',
          },
          {
            args: c,
            kind: 'FragmentSpread',
            name: 'useCometPrivacySelectorOnRowInputMismatchEffect_renderer',
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
          },
          {
            args: c,
            kind: 'FragmentSpread',
            name: 'CometPrivacySelectorEntryPointMatchContainer_renderer',
          },
          {
            condition: 'includePickerData',
            kind: 'Condition',
            passingValue: !0,
            selections: [
              {
                args: c,
                kind: 'FragmentSpread',
                name: 'CometPrivacySelectorPickerContainer_renderer',
              },
            ],
          },
          {
            alias: 'scope',
            args: [
              {
                kind: 'Variable',
                name: 'render_location',
                variableName: 'renderLocation',
              },
              {
                kind: 'Variable',
                name: 'selected_override',
                variableName: 'localPrivacyRow',
              },
              a,
            ],
            concreteType: 'PrivacyScope',
            kind: 'LinkedField',
            name: 'privacy_scope_for_location',
            plural: !1,
            selections: [
              {
                args: null,
                kind: 'FragmentSpread',
                name: 'useCometPrivacySelectorDialog_scope',
              },
              {
                args: null,
                kind: 'FragmentSpread',
                name: 'useCometPrivacySelectorPushView_scope',
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'can_viewer_edit',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'privacy_write_id',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'PrivacyScopeEditableRenderer',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometUnavailableFeature.react',
  ['fbt', 'CometTooltip.react', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      a = a.children;
      return i.jsx('div', {
        className:
          'x1h6gzvc x1n2onr6 x1ja2u2z x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j',
        children: i.jsxs(c('CometTooltip.react'), {
          position: 'above',
          tooltip: h._('__JHASH__FSzHKYNMOBS__JHASH__'),
          children: [
            i.jsx('div', {
              className: 'x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy x1vjfegm',
            }),
            i.jsx('div', {
              className:
                'x47corl x1ja2u2z x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j',
              children: a,
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
  'CometFeatureKillswitch.react',
  ['CometUnavailableFeature.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.children,
        d = a.enableFeature;
      a = a.fallback;
      return d ? b : h.jsx(c('CometUnavailableFeature.react'), { children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometPrivacySelectorPushView.entrypoint',
  [
    'CometPrivacySelectorPickerContainer.entrypoint',
    'JSResourceForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        return {
          entryPoints: {
            containerEntryPoint: {
              entryPoint: b('CometPrivacySelectorPickerContainer.entrypoint'),
              entryPointParams: a,
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometPrivacySelectorPushView.react',
      ).__setRef('CometPrivacySelectorPushView.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'useCometPrivacySelectorOnRowInputMismatchEffect',
  [
    'CometPrivacySelectorContext',
    'CometRelay',
    'PrivacyRowInput',
    'react',
    'useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    e = d('react');
    var i = e.useContext,
      j = e.useEffect,
      k = e.useRef;
    function a(a, e, f) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b(
              'useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql',
            )),
        a,
      );
      var g = a.scope,
        m = i(c('CometPrivacySelectorContext')),
        n = m[0].localPrivacyRow;
      m = m[1];
      var o = k(m);
      o.current = m;
      var p = k(e);
      p.current = e;
      var q = d('PrivacyRowInput').usePrivacyRowInput(
          g == null ? void 0 : g.selected_row_override,
        ),
        r = d('PrivacyRowInput').usePrivacyRowInput(a.privacy_row_input),
        s = d('PrivacyRowInput').usePrivacyRowInput(
          g == null
            ? void 0
            : (m = g.selected_option) == null
            ? void 0
            : m.privacy_row_input,
        );
      j(
        function () {
          if (f) return;
          var a = n !== null && l(n, q, s),
            b =
              l(null, n, q) &&
              d('PrivacyRowInput').arePrivacyRowInputsEqual(r, s);
          if (a || b) return;
          a = n !== null && q === null && l(n, r, s);
          if (a) {
            o.current({ localPrivacyRow: null, type: 'setLocalPrivacyRow' });
            return;
          }
          return p.current();
        },
        [q, s, f, n, r],
      );
    }
    function l(a, b, c) {
      return (
        d('PrivacyRowInput').arePrivacyRowInputsEqual(a, b) &&
        d('PrivacyRowInput').arePrivacyRowInputsEqual(a, c)
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometPrivacySelectorOnTagsChangedEffect',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function j(a, b) {
      if (a == null && b == null) return !0;
      if (a == null || b == null) return !1;
      if (a.length !== b.length) return !1;
      var c = new Set(b);
      return a.every(function (a) {
        return c.has(a);
      });
    }
    function a(a, b) {
      var c = i(b);
      c.current = b;
      var d = i(a);
      h(
        function () {
          if (!j(d.current, a))
            return c.current(function () {
              d.current = a;
            });
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometPrivacySelectorPushView',
  [
    'fbt',
    'CometPlaceholder.react',
    'CometPrivacySelectorPushView.entrypoint',
    'CometProgressIndicator.react',
    'CometRelay',
    'qpl',
    'react',
    'useCometInteractionTracing',
    'useCometPrivacySelectorCanOpenSelector',
    'useCometPrivacySelectorPushView_scope.graphql',
    'useCometRelayEntrypointContextualEnvironmentProvider',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useCallback,
      l = e.useMemo,
      m = e.useRef;
    function a(a, e, f, g) {
      a = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b('useCometPrivacySelectorPushView_scope.graphql')),
        a,
      );
      var n = a == null ? void 0 : a.privacy_write_id,
        o = c('useCometPrivacySelectorCanOpenSelector')(a),
        p = m(!1),
        q = e.pushPage,
        r = (a = e.title) != null ? a : h._('__JHASH__-JQsLQLzBmp__JHASH__'),
        s = c('useCometInteractionTracing')(
          c('qpl')._(30605326, '2342'),
          'responsive',
          'INTERACTION',
        ),
        t = c('useCometRelayEntrypointContextualEnvironmentProvider')(),
        u = k(
          function () {
            if (n == null || q == null) return;
            s(function (a) {
              a.onComplete(function () {
                p.current ? a.addMetadata('revisit', 1) : (p.current = !0);
              });
              var b = d('CometRelay').loadEntryPoint(
                t,
                c('CometPrivacySelectorPushView.entrypoint'),
                {
                  localPrivacyRow: f == null ? void 0 : f.localPrivacyRow,
                  privacyWriteID: n,
                  renderLocation: e.renderLocation,
                  tags: e.tags,
                },
              );
              q(
                function (a) {
                  a = a.onReturn;
                  e.onBeforePushPage && e.onBeforePushPage(a);
                  return j.jsx(c('CometPlaceholder.react'), {
                    fallback: j.jsx('div', {
                      className: 'x6s0dn4 x78zum5 x1egiwwb xl56j7k',
                      children: j.jsx(c('CometProgressIndicator.react'), {}),
                    }),
                    children: j.jsx(d('CometRelay').EntryPointContainer, {
                      entryPointReference: b,
                      props: babelHelpers['extends'](
                        {
                          dispatch: g,
                          onClose: a,
                          privacyWriteID: n,
                          state: f,
                        },
                        e,
                      ),
                    }),
                  });
                },
                {
                  onBack: function (a) {
                    g &&
                      g({ localPrivacyRow: null, type: 'setLocalPrivacyRow' });
                    return a;
                  },
                  title: r,
                },
              );
            });
          },
          [g, t, e, n, q, f, r, s],
        );
      return l(
        function () {
          return o ? u : null;
        },
        [o, u],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometPrivacySelectorEditable.react',
  [
    'CometFeatureKillswitch.react',
    'CometPrivacySelectorContext',
    'CometPrivacySelectorEditable_renderer.graphql',
    'CometPrivacySelectorEntryPointMatchContainer.react',
    'CometRelay',
    'WebPixelRatio',
    'emptyFunction',
    'killswitch',
    'react',
    'unrecoverableViolation',
    'useCometPrivacySelectorDialog',
    'useCometPrivacySelectorNotifyPrivacyOnInitEffect',
    'useCometPrivacySelectorOnRowInputMismatchEffect',
    'useCometPrivacySelectorOnTagsChangedEffect',
    'useCometPrivacySelectorPushView',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    e = d('react');
    var j = e.useCallback,
      k = e.useContext,
      l = e.useMemo,
      m = e.useRef,
      n = e.useState,
      o = e.useTransition;
    function p(a) {
      return a == null
        ? void 0
        : a.filter(function (a) {
            return !isNaN(a);
          });
    }
    function a(a) {
      var e = a.onPrivacyChange,
        f = a.onPrivacyChangeStart,
        g = a.renderer,
        q = babelHelpers.objectWithoutPropertiesLoose(a, [
          'onPrivacyChange',
          'onPrivacyChangeStart',
          'renderer',
        ]);
      a = q.pushPage;
      var r = q.renderLocation,
        s = q.tags;
      s = p(s);
      g = d('CometRelay').useRefetchableFragment(
        h !== void 0
          ? h
          : (h = b('CometPrivacySelectorEditable_renderer.graphql')),
        g,
      );
      var t = g[0],
        u = g[1],
        v = t.id;
      g = t.scope;
      var w = k(c('CometPrivacySelectorContext')),
        x = w[0];
      w = w[1];
      var y = x.localPrivacyRow;
      c('useCometPrivacySelectorNotifyPrivacyOnInitEffect')(
        t,
        y == null ? e : null,
      );
      var z = o(),
        A = z[0],
        B = z[1];
      z = n(!1);
      var C = z[0],
        D = z[1],
        E = m(!1);
      z = C || A || E.current;
      function F(a, b) {
        a === void 0 && (a = null);
        if (v == null) return;
        var c = {
            id: v,
            includePickerData: !0,
            localPrivacyRow: b,
            renderLocation: r,
            scale: d('WebPixelRatio').get(),
            tags: s,
          },
          e = b ? 'store-and-network' : 'network-only';
        B(function () {
          u(c, {
            fetchPolicy: e,
            onComplete: function () {
              (E.current = !1), a == null ? void 0 : a();
            },
          });
        });
      }
      var G = j(
          function (a) {
            D(!0), f && f(a);
          },
          [f],
        ),
        H = m(F);
      H.current = F;
      var I = j(
          function (a) {
            a.type === 'success' && H.current(null, a.__newLocalPrivacyRow),
              D(!1),
              e && e(a);
          },
          [e],
        ),
        J = function (a) {
          return F(a, y);
        };
      c('useCometPrivacySelectorOnTagsChangedEffect')(s, J);
      c('useCometPrivacySelectorOnRowInputMismatchEffect')(t, J, C || A);
      J = l(
        function () {
          return babelHelpers['extends']({}, q, {
            onPrivacyChange: I,
            onPrivacyChangeStart: G,
          });
        },
        [q, I, G],
      );
      if (g == null)
        throw c('unrecoverableViolation')(
          'Failed to render privacy selector. No scope was received.',
          'comet_privacy_selector',
        );
      C = g.can_viewer_edit;
      A = g.privacy_write_id;
      if (C !== !0)
        throw c('unrecoverableViolation')(
          'Trying to render an editable Privacy Selector that the user cannot edit',
          'comet_privacy_selector',
        );
      if (A == null)
        throw c('unrecoverableViolation')(
          'Trying to render an editable Privacy Selector without a write ID',
          'comet_privacy_selector',
        );
      C = c('useCometPrivacySelectorDialog')(g, J, x, w);
      A = C[0];
      C = C[1];
      g = c('useCometPrivacySelectorPushView')(g, J, x, w);
      J = c('killswitch')('COMET_PRIVACY_SELECTOR_EDITABLE_DISABLED');
      x = null;
      J || (x = a != null ? g : A);
      a = (w = q.enabled) != null ? w : !0;
      A = i.jsx(c('CometPrivacySelectorEntryPointMatchContainer.react'), {
        props: {
          isEnabled: !J && a,
          isSaving: z,
          onPress: (g = x) != null ? g : c('emptyFunction'),
          onPrivacyChange: I,
          onPrivacyChangeStart: G,
          renderLocation: r,
          triggerRef: C,
        },
        renderer: t,
      });
      return i.jsx(c('CometFeatureKillswitch.react'), {
        enableFeature: !J,
        fallback: A,
        children: A,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'getSelectionOffsets',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function b(b) {
      var c = a.getSelection();
      if (c == null || c.rangeCount === 0) return null;
      var d = c.anchorNode,
        e = c.anchorOffset,
        f = c.focusNode;
      c = c.focusOffset;
      if (d == null || f == null) return null;
      var g = 0,
        h = -1,
        i = -1,
        j = 0,
        k = 0,
        l = b,
        m = null;
      outer: while (!0) {
        var n = null;
        while (!0) {
          var o;
          l != null &&
            l === d &&
            (e === 0 || l.nodeType === Node.TEXT_NODE) &&
            (h = g + e);
          l != null &&
            l === f &&
            (c === 0 || l.nodeType === Node.TEXT_NODE) &&
            (i = g + c);
          l != null &&
            l.nodeType === Node.TEXT_NODE &&
            (g += l.nodeValue.length);
          if ((n = (o = l) == null ? void 0 : o.firstChild) === null) break;
          m = l;
          l = n;
        }
        while (!0) {
          if (l === b) break outer;
          m === d && ++j === e && (h = g);
          m === f && ++k === c && (i = g);
          if ((n = (o = l) == null ? void 0 : o.nextSibling) !== null) break;
          l = m;
          m = (o = l) == null ? void 0 : o.parentNode;
        }
        l = n;
      }
      return h === -1 || i === -1
        ? null
        : { end: i, isCollapsed: d === f && c === e, start: h };
    }
    f['default'] = b;
  },
  66,
);
__d(
  'setSelectionOffsets',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      a = a;
      while (a != null && a.firstChild != null) a = a.firstChild;
      return a;
    }
    function h(a) {
      a = a;
      while (a != null) {
        if (a.nextSibling != null) return a.nextSibling;
        a = a.parentNode;
      }
      return null;
    }
    function i(a, b) {
      var c = g(a),
        d = 0,
        e;
      while (c != null) {
        if (c.nodeType === Node.TEXT_NODE) {
          e = d + c.textContent.length;
          if (d <= b && e >= b) return { node: c, offset: b - d };
          d = e;
        }
        e = h(c);
        c = e != null ? g(e) : null;
        if (c != null && c.contains(a)) return null;
      }
      return null;
    }
    function b(b, c) {
      var d = a.getSelection(),
        e = b.textContent.length,
        f = Math.min(c.start, e);
      c = Math.min(c.end, e);
      if (!d.extend == null && f > c) {
        e = c;
        c = f;
        f = e;
      }
      e = i(b, f);
      b = i(b, c);
      if (e != null && b != null) {
        var g = document.createRange();
        g.setStart(e.node, e.offset);
        d.removeAllRanges();
        f > c
          ? (d.addRange(g), d.extend(b.node, b.offset))
          : (g.setEnd(b.node, b.offset), d.addRange(g));
      }
    }
    f['default'] = b;
  },
  66,
);
__d(
  'CometPlaintextEditor.react',
  [
    'FBLogger',
    'ReactDOMComet',
    'clearTimeout',
    'getSelectionOffsets',
    'react',
    'setSelectionOffsets',
    'setTimeout',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        input: {
          backgroundColor: 'xjbqb8w',
          borderTop: 'x6umtig',
          borderEnd: 'x1b1mbwd',
          borderBottom: 'xaqea5y',
          borderStart: 'xav7gou',
          height: 'x5yr21d',
          outline: 'x1a2a7pz',
          position: 'x1n2onr6',
          resize: 'xtt52l0',
          wordBreak: 'x13faqbe',
          zIndex: 'x1vjfegm',
          $$css: !0,
        },
        placeholder: {
          bottom: 'x1ey2m1c',
          color: 'x12scifz',
          end: 'xds687c',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'x17qophe',
          textOverflow: 'xlyipyv',
          top: 'x13vifvy',
          userSelect: 'x87ps6o',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        root: {
          height: 'x5yr21d',
          position: 'x1n2onr6',
          width: 'xh8yej3',
          $$css: !0,
        },
      },
      j = 8,
      k = 46,
      l = 13;
    b = (function (b) {
      babelHelpers.inheritsLoose(e, b);
      function e() {
        var d, e;
        for (var f = arguments.length, g = new Array(f), i = 0; i < f; i++)
          g[i] = arguments[i];
        return (
          ((d = e = b.call.apply(b, [this].concat(g)) || this),
          (e.$1 = h.createRef()),
          (e.$4 = function (a) {
            (e.$1.current = a),
              e.props.onInputRefUpdate && e.props.onInputRefUpdate(a);
          }),
          (e.$8 = function (a) {
            e.props.onBeforeInput && e.props.onBeforeInput(a), e.$9();
          }),
          (e.$11 = function (a) {
            e.props.onBlur && e.props.onBlur(a),
              e.props.editorState.hasFocus &&
                e.notify(
                  babelHelpers['extends']({}, e.props.editorState, {
                    hasFocus: !1,
                    isPendingSelection: !1,
                  }),
                );
          }),
          (e.$12 = function (a) {
            e.props.onCompositionEnd && e.props.onCompositionEnd(a),
              e.props.editorState.isComposing &&
                e.notify(
                  babelHelpers['extends']({}, e.props.editorState, {
                    isComposing: !1,
                  }),
                );
          }),
          (e.$13 = function (a) {
            e.props.onCompositionStart && e.props.onCompositionStart(a),
              e.props.editorState.isComposing ||
                e.notify(
                  babelHelpers['extends']({}, e.props.editorState, {
                    isComposing: !0,
                  }),
                );
          }),
          (e.$14 = function (a) {
            e.props.onCut && e.props.onCut(a), a.isDefaultPrevented() || e.$9();
          }),
          (e.$15 = function (a) {
            e.$10();
            e.props.onInput && e.props.onInput(a);
            if (!a.isDefaultPrevented()) {
              a = e.$6();
              a !== null &&
                e.props.editorState.text !== a &&
                e.notify(
                  babelHelpers['extends']({}, e.props.editorState, { text: a }),
                );
            }
          }),
          (e.$16 = function (a) {
            var b = e.props.onReturn;
            if (
              b != null &&
              a.keyCode === l &&
              !(
                a.getModifierState('Shift') ||
                a.getModifierState('Alt') ||
                a.getModifierState('Control')
              )
            ) {
              b(a);
              return;
            }
            e.props.onKeyDown && e.props.onKeyDown(a);
            !a.isDefaultPrevented() &&
              (a.keyCode === j || a.keyCode === k) &&
              e.$9();
          }),
          (e.$17 = function (a) {
            e.props.onFocus && e.props.onFocus(a),
              !a.isDefaultPrevented() &&
                !e.props.editorState.hasFocus &&
                e.notify(
                  babelHelpers['extends']({}, e.props.editorState, {
                    hasFocus: !0,
                  }),
                );
          }),
          (e.$18 = function () {
            e.notify(
              babelHelpers['extends']({}, e.props.editorState, {
                isPendingSelection: !0,
              }),
            ),
              (e.$2 = c('setTimeout')(function () {
                c('FBLogger')('CometPlaintextEditor').warn(
                  '_onMouseDown had no corresonding mouseup event for 30s.',
                ),
                  e.notify(
                    babelHelpers['extends']({}, e.props.editorState, {
                      isPendingSelection: !1,
                    }),
                  );
              }, 3e4)),
              document.addEventListener(
                'mouseup',
                function () {
                  var a = e.$1.current;
                  a === document.activeElement &&
                    e.notify(
                      babelHelpers['extends']({}, e.props.editorState, {
                        isPendingSelection: !1,
                      }),
                    );
                },
                { once: !0 },
              );
          }),
          (e.$19 = function (b) {
            e.props.onPaste && e.props.onPaste(b);
            if (!b.isDefaultPrevented()) {
              b.preventDefault();
              var c;
              try {
                c = b.clipboardData.getData('text/plain');
              } catch (d) {
                typeof ((b = a.clipboardData) == null ? void 0 : b.getData) ===
                  'function' && (c = a.clipboardData.getData('Text'));
              }
              if (
                c != null &&
                !document.execCommand('insertText', !1, c) &&
                !document.execCommand('insertHTML', !1, c)
              ) {
                b = a.getSelection();
                if (b != null) {
                  var d = b.getRangeAt(0);
                  if (d != null) {
                    d.deleteContents();
                    var f = document.createTextNode(c);
                    d.insertNode(f);
                    d = d.cloneRange();
                    d.setStartAfter(f);
                    d.collapse(!0);
                    b.removeAllRanges();
                    b.addRange(d);
                    e.$9();
                    return;
                  }
                }
              }
              f = e.$6();
              f !== null &&
                e.props.editorState.text !== f &&
                e.notify(
                  babelHelpers['extends']({}, e.props.editorState, { text: f }),
                );
            }
          }),
          (e.$20 = function (a) {
            e.props.onSelect && e.props.onSelect(a);
            var b = e.$1.current;
            if (!a.isDefaultPrevented() && b != null) {
              a = c('getSelectionOffsets')(b);
              e.notify(
                babelHelpers['extends']({}, e.props.editorState, {
                  isPendingSelection: !1,
                  selectionOffsets: a,
                }),
              );
            }
          }),
          d) || babelHelpers.assertThisInitialized(e)
        );
      }
      var f = e.prototype;
      f.componentDidMount = function () {
        this.$5();
      };
      f.componentDidUpdate = function (a) {
        (a.editorState.text !== this.props.editorState.text ||
          a.editorState.selectionOffsets !==
            this.props.editorState.selectionOffsets) &&
          this.$5();
      };
      f.componentWillUnmount = function () {
        c('clearTimeout')(this.$2),
          delete this.$2,
          c('clearTimeout')(this.$3),
          delete this.$3;
      };
      f.notify = function (a) {
        var b = this,
          e = d('ReactDOMComet').unstable_flushControlled,
          f = function () {
            !a.isPendingSelection &&
              b.$2 != null &&
              (c('clearTimeout')(b.$2), delete b.$2),
              b.props.onStateChange(a);
          };
        e != null
          ? e(function () {
              return f();
            })
          : f();
      };
      f.$6 = function () {
        var a = this.$1.current;
        if (a == null) return null;
        var b = a.innerText || '';
        return a.textContent !== '' ? b : '';
      };
      f.$5 = function () {
        var a = this.$1.current;
        if (a === null || this.$7()) return;
        var b = this.props.editorState.text,
          d = this.props.editorState.selectionOffsets;
        document.activeElement === a &&
          d == null &&
          (d = c('getSelectionOffsets')(a));
        var e = this.$6();
        e !== null &&
          b !== e &&
          ((a.innerText = b),
          d != null &&
            (b === ''
              ? ((a.innerText = '\xa0'),
                c('setSelectionOffsets')(a, { end: 0, start: 0 }),
                document.execCommand('delete', !1, null))
              : c('setSelectionOffsets')(a, { end: d.end, start: d.start })));
      };
      f.$7 = function () {
        return this.$3 != null;
      };
      f.$10 = function () {
        c('clearTimeout')(this.$3), delete this.$3;
      };
      f.$9 = function () {
        var a = this;
        this.$7() && this.$10();
        this.$3 = c('setTimeout')(function () {
          var b = a.$1.current;
          if (b == null || !a.$7()) return;
          a.$10();
          var d = a.$6();
          if (d !== null && a.props.editorState.text !== d) {
            b = c('getSelectionOffsets')(b);
            a.notify(
              babelHelpers['extends']({}, a.props.editorState, {
                selectionOffsets: b,
                text: d,
              }),
            );
          }
        }, 0);
      };
      f.focus = function () {
        this.$1.current && this.$1.current.focus();
      };
      f.focusEnd = function () {
        var a = this.$1.current;
        if (a && window.getSelection && document.createRange) {
          var b = document.createRange();
          b.selectNodeContents(a);
          b.collapse(!1);
          a = window.getSelection();
          a.removeAllRanges();
          a.addRange(b);
        }
      };
      f.render = function () {
        var a = this.props,
          b = a.editorState,
          d = a.onClick;
        a.onStateChange;
        var e = a.placeholder,
          f = a.placeholderXStyle,
          g = a.readOnly;
        g = g === void 0 ? !1 : g;
        var j = a.testid;
        j = babelHelpers.objectWithoutPropertiesLoose(a, [
          'editorState',
          'onClick',
          'onStateChange',
          'placeholder',
          'placeholderXStyle',
          'readOnly',
          'testid',
        ]);
        j.onInputRefUpdate;
        j.onReturn;
        a = babelHelpers.objectWithoutPropertiesLoose(j, [
          'onInputRefUpdate',
          'onReturn',
        ]);
        j = b.text.trim().length > 0;
        b = h.jsxs('div', {
          className: 'x5yr21d x1n2onr6 xh8yej3',
          'data-testid': void 0,
          children: [
            h.jsx(
              'div',
              babelHelpers['extends']({}, a, {
                'aria-labelledby': this.props['aria-labelledby'],
                className:
                  'xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x5yr21d x1a2a7pz x1n2onr6 xtt52l0 x13faqbe x1vjfegm',
                contentEditable: !g,
                onBeforeInput: this.$8,
                onBlur: this.$11,
                onCompositionEnd: this.$12,
                onCompositionStart: this.$13,
                onCut: this.$14,
                onFocus: this.$17,
                onInput: this.$15,
                onKeyDown: this.$16,
                onMouseDown: this.$18,
                onPaste: this.$19,
                onSelect: this.$20,
                ref: this.$4,
              }),
            ),
            j || e == null
              ? null
              : h.jsx('div', {
                  className: c('stylex')(i.placeholder, f),
                  children: e,
                }),
          ],
        });
        return d != null
          ? h.jsx('div', { onClick: d, role: 'none', children: b })
          : b;
      };
      return e;
    })(h.PureComponent);
    g['default'] = b;
  },
  98,
);
__d(
  'DeferredDraftEditorDEPRECATED.react',
  [
    'CometPlaintextEditor.react',
    'SubscriptionsHandler',
    'cr:2012305',
    'react',
    'requireDeferred',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('requireDeferred')('DraftEditor.react').__setRef(
        'DeferredDraftEditorDEPRECATED.react',
      ),
      j = c('requireDeferred')('EditorState').__setRef(
        'DeferredDraftEditorDEPRECATED.react',
      ),
      k = c('requireDeferred')(
        'getEditorStateFromContentEditableState_DEPRECATED_DO_NOT_USE',
      ).__setRef('DeferredDraftEditorDEPRECATED.react'),
      l = {
        root: {
          boxSizing: 'x9f619',
          height: 'x5yr21d',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function m() {
      return {
        DraftEditor: i.getModuleIfRequireable(),
        EditorState: j.getModuleIfRequireable(),
        getEditorStateFromContentEditableState_DEPRECATED_DO_NOT_USE:
          k.getModuleIfRequireable(),
      };
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      function d() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), i = 0; i < f; i++)
          g[i] = arguments[i];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.$1 = h.createRef()),
          (e.$2 = null),
          (e.$3 = h.createRef()),
          (e.$4 = new (c('SubscriptionsHandler'))()),
          (e.$5 = function (a) {
            var b = e.props.handlePastedFiles;
            if (b) {
              var c = a.clipboardData;
              c = c.items != null ? Array.from(c.items) : [];
              c = c
                .map(function (a) {
                  return a.getAsFile();
                })
                .filter(Boolean);
              c.length && b(c) === 'handled' && a.preventDefault();
            }
          }),
          (e.$9 = function (a) {
            e.$8(a, e.$2), (e.$2 = a);
          }),
          (e.$10 = function (a) {
            e.$1.current = a;
            a = a == null ? void 0 : a.editor;
            var b = e.props.onInputRefUpdate;
            b != null && b(a instanceof HTMLDivElement ? a : null);
          }),
          (e.$6 = function () {
            var a = e.props.editorState;
            if (
              a.__type !== d.PLAIN_TEXT ||
              a.isPendingSelection ||
              a.isComposing ||
              !d.richDependenciesAreMet()
            )
              return;
            var b = m();
            b = b.getEditorStateFromContentEditableState_DEPRECATED_DO_NOT_USE;
            if (b == null) return;
            var c = e.props,
              f = c.decorator;
            c = c.onStateChange;
            c && c({ __type: d.EDITOR_STATE, draftEditorState: b(a, f) });
          }),
          (e.onEditorStateChange = function (a) {
            if (e.props.onStateChange != null) {
              var b = e.props.editorState;
              b.draftEditorState !== a &&
                e.props.onStateChange(
                  b.__type === d.EDITOR_STATE
                    ? babelHelpers['extends']({}, b, { draftEditorState: a })
                    : { __type: d.EDITOR_STATE, draftEditorState: a },
                );
            }
          }),
          (e.onPlainTextChange = function (a) {
            e.props.onStateChange && e.props.onStateChange(a);
          }),
          (e.onPlaintextReturn = function (a) {
            e.props.handleReturn && e.props.handleReturn(a);
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      d.richDependenciesAreMet = function () {
        var a = m();
        for (var b in a) if (a[b] == null) return !1;
        return !0;
      };
      d.createEmptyComposerState = function () {
        var a = m();
        a = a == null ? void 0 : a.EditorState;
        return a != null && d.richDependenciesAreMet()
          ? { __type: d.EDITOR_STATE, draftEditorState: a.createEmpty() }
          : {
              __type: d.PLAIN_TEXT,
              hasFocus: !1,
              isComposing: !1,
              isPendingSelection: !1,
              selectionOffsets: null,
              text: '',
            };
      };
      var e = d.prototype;
      e.componentDidMount = function () {
        var a = this.props.autoFocus;
        !d.richDependenciesAreMet()
          ? this.$4.addSubscriptions(
              i.onReady(this.$6),
              j.onReady(this.$6),
              k.onReady(this.$6),
            )
          : this.$6();
        a === !0 && this.focusEnd();
      };
      e.focus = function () {
        this.$3.current != null
          ? this.$3.current.focus()
          : this.$1.current != null && this.$1.current.focus();
      };
      e.focusEnd = function () {
        if (this.$3.current != null) this.$3.current.focusEnd();
        else if (this.$1.current != null) {
          var a = j.getModuleIfRequired(),
            b = this.props.onStateChange;
          if (a != null && b != null) {
            var c = this.props.editorState;
            c.draftEditorState &&
              b({
                __type: 'editor-state-based',
                draftEditorState: a.moveFocusToEnd(c.draftEditorState),
              });
          }
        }
      };
      e.componentDidUpdate = function (a) {
        this.$6();
        if (
          a.typingPerformanceAnnotations !==
          this.props.typingPerformanceAnnotations
        ) {
          a = this.$2;
          a && (this.$7(), this.$8(a));
        }
      };
      e.$8 = function (a, c) {
        if (b('cr:2012305') === null || a == null) return;
        var d = this.props,
          e = d.blockStyleFn;
        d = d.typingPerformanceAnnotations;
        d = babelHelpers['extends']({}, d, {
          editor: 'DraftjsEditor',
          format: e != null ? 'RichText' : 'PlainText',
        });
        b('cr:2012305').trackTypingPerf(
          a,
          (e = this.props.typingPerformanceID) != null
            ? e
            : 'DeferredDraftEditorDEPRECATED',
          c,
          d,
        );
      };
      e.componentWillUnmount = function () {
        this.$4.release(), this.$7();
      };
      e.$7 = function () {
        var a = this.$2;
        a && b('cr:2012305') && b('cr:2012305').unregisterTypingPerf(a);
      };
      e.render = function () {
        var a = m();
        a = a == null ? void 0 : a.DraftEditor;
        var b = this.props,
          e = b.editorState;
        b = babelHelpers.objectWithoutPropertiesLoose(b, ['editorState']);
        if (a && e.__type === d.EDITOR_STATE)
          return h.jsx('div', {
            className: c('stylex')(l.root, this.props.xstyle),
            children: h.jsx(
              a,
              babelHelpers['extends']({}, b, {
                editorRef: this.$9,
                editorState: e.draftEditorState,
                onChange: this.onEditorStateChange,
                onClick: this.props.onClick,
                placeholder: this.props.placeholder,
                placeholderClassName: c('stylex')(this.props.placeholderXStyle),
                ref: this.$10,
                tabIndex: 0,
                webDriverTestID:
                  this.props.testid !== void 0
                    ? this.props.testid + ':rich-input'
                    : void 0,
              }),
            ),
          });
        else if (e.__type === d.EDITOR_STATE) throw i.load();
        else if (e.__type === d.PLAIN_TEXT)
          return h.jsx('div', {
            className: c('stylex')(l.root, this.props.xstyle),
            children: h.jsx(c('CometPlaintextEditor.react'), {
              'aria-labelledby': this.props.ariaLabelledBy,
              editorState: e,
              onClick: this.props.onClick,
              onInputRefUpdate: this.props.onInputRefUpdate,
              onPaste: this.$5,
              onReturn: this.onPlaintextReturn,
              onStateChange: this.onPlainTextChange,
              placeholder: this.props.placeholder,
              placeholderXStyle: this.props.placeholderXStyle,
              ref: this.$3,
              testid: void 0,
            }),
          });
      };
      return d;
    })(h.PureComponent);
    a.EDITOR_STATE = 'editor-state-based';
    a.PLAIN_TEXT = 'plain-text';
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'useFeedComposerCometMentionsBootloadDataSourceQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5400084010118275';
  },
  null,
);
__d(
  'useFeedComposerCometMentionsBootloadDataSourceQuery.graphql',
  [
    'useFeedComposerCometMentionsBootloadDataSourceQuery_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          { defaultValue: null, kind: 'LocalArgument', name: 'include_viewer' },
          { defaultValue: null, kind: 'LocalArgument', name: 'options' },
          { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'typeahead_context',
          },
          { defaultValue: null, kind: 'LocalArgument', name: 'types' },
          { defaultValue: null, kind: 'LocalArgument', name: 'useSections' },
        ],
        c = [
          {
            kind: 'Variable',
            name: 'include_viewer',
            variableName: 'include_viewer',
          },
          { kind: 'Variable', name: 'options', variableName: 'options' },
          {
            kind: 'Variable',
            name: 'typeahead_context',
            variableName: 'typeahead_context',
          },
          { kind: 'Variable', name: 'types', variableName: 'types' },
          {
            kind: 'Variable',
            name: 'use_sections',
            variableName: 'useSections',
          },
        ],
        d = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
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
          args: null,
          kind: 'ScalarField',
          name: 'mentions_subtext',
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'is_verified',
          storageKey: null,
        },
        h = { kind: 'Variable', name: 'scale', variableName: 'scale' },
        i = {
          alias: 'photo',
          args: [
            { kind: 'Literal', name: 'height', value: 40 },
            h,
            { kind: 'Literal', name: 'width', value: 40 },
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
        j = {
          alias: null,
          args: null,
          concreteType: 'WorkForeignEntityInfo',
          kind: 'LinkedField',
          name: 'work_foreign_entity_info',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'type',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        k = [e, f, i];
      j = {
        kind: 'InlineFragment',
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'score',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'icon_shape',
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
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'id',
                storageKey: null,
              },
              d,
              {
                kind: 'InlineFragment',
                selections: [
                  e,
                  f,
                  g,
                  i,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        selections: [j],
                        type: 'User',
                        abstractKey: null,
                      },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          j,
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'is_multi_company_group',
                            storageKey: null,
                          },
                        ],
                        type: 'Group',
                        abstractKey: null,
                      },
                    ],
                    type: 'Entity',
                    abstractKey: '__isEntity',
                  },
                ],
                type: 'User',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: k,
                type: 'XFBWorkroomsBaseUser',
                abstractKey: '__isXFBWorkroomsBaseUser',
              },
              {
                kind: 'InlineFragment',
                selections: [
                  e,
                  f,
                  {
                    alias: 'thumbnail_link',
                    args: [h],
                    kind: 'ScalarField',
                    name: 'icon_uri',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'doc_title',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'doc_url',
                    storageKey: null,
                  },
                ],
                type: 'KnowledgeHubDocumentData',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: k,
                type: 'Group',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: k,
                type: 'Event',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [e, f, g, i],
                type: 'Page',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [e, i],
                type: 'ContextualProfile',
                abstractKey: '__isContextualProfile',
              },
              {
                kind: 'InlineFragment',
                selections: k,
                type: 'GroupRule',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: k,
                type: 'ProductItem',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: k,
                type: 'BatchMentions',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'CometComposerTypeaheadResultEntry',
        abstractKey: null,
      };
      h = {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'cache_id',
        storageKey: null,
      };
      f = {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'label',
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'useFeedComposerCometMentionsBootloadDataSourceQuery',
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: 'LinkedField',
              name: 'comet_composer_typeahead_bootload',
              plural: !0,
              selections: [
                d,
                j,
                {
                  kind: 'InlineFragment',
                  selections: [
                    h,
                    f,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'entries',
                      plural: !0,
                      selections: [j],
                      storageKey: null,
                    },
                  ],
                  type: 'XFBMentionsSectionEntry',
                  abstractKey: null,
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
          name: 'useFeedComposerCometMentionsBootloadDataSourceQuery',
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: 'LinkedField',
              name: 'comet_composer_typeahead_bootload',
              plural: !0,
              selections: [
                d,
                j,
                {
                  kind: 'InlineFragment',
                  selections: [
                    h,
                    f,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'entries',
                      plural: !0,
                      selections: [d, j],
                      storageKey: null,
                    },
                  ],
                  type: 'XFBMentionsSectionEntry',
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b(
            'useFeedComposerCometMentionsBootloadDataSourceQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'useFeedComposerCometMentionsBootloadDataSourceQuery',
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
  'useFeedComposerCometMentionsNetworkDataSourceQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '8266749160063360';
  },
  null,
);
__d(
  'useFeedComposerCometMentionsNetworkDataSourceQuery.graphql',
  ['useFeedComposerCometMentionsNetworkDataSourceQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'count' },
        c = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'enable_type_selection',
        },
        d = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'include_viewer',
        },
        e = { defaultValue: null, kind: 'LocalArgument', name: 'query' },
        f = { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        g = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'typeahead_context',
        },
        h = { defaultValue: null, kind: 'LocalArgument', name: 'types' },
        i = { defaultValue: null, kind: 'LocalArgument', name: 'useSections' },
        j = [
          { kind: 'Variable', name: 'count', variableName: 'count' },
          {
            kind: 'Variable',
            name: 'enable_type_selection',
            variableName: 'enable_type_selection',
          },
          {
            kind: 'Variable',
            name: 'include_viewer',
            variableName: 'include_viewer',
          },
          { kind: 'Variable', name: 'query', variableName: 'query' },
          {
            kind: 'Variable',
            name: 'typeahead_context',
            variableName: 'typeahead_context',
          },
          { kind: 'Variable', name: 'types', variableName: 'types' },
          {
            kind: 'Variable',
            name: 'use_sections',
            variableName: 'useSections',
          },
        ],
        k = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'mentions_subtext',
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'is_verified',
          storageKey: null,
        },
        o = { kind: 'Variable', name: 'scale', variableName: 'scale' },
        p = {
          alias: 'photo',
          args: [
            { kind: 'Literal', name: 'height', value: 40 },
            o,
            { kind: 'Literal', name: 'width', value: 40 },
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
        q = {
          alias: null,
          args: null,
          concreteType: 'WorkForeignEntityInfo',
          kind: 'LinkedField',
          name: 'work_foreign_entity_info',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'type',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        r = [l, m, p];
      q = {
        kind: 'InlineFragment',
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'score',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'icon_shape',
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
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'id',
                storageKey: null,
              },
              k,
              {
                kind: 'InlineFragment',
                selections: [
                  l,
                  m,
                  n,
                  p,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        selections: [q],
                        type: 'User',
                        abstractKey: null,
                      },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          q,
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'is_multi_company_group',
                            storageKey: null,
                          },
                        ],
                        type: 'Group',
                        abstractKey: null,
                      },
                    ],
                    type: 'Entity',
                    abstractKey: '__isEntity',
                  },
                ],
                type: 'User',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: r,
                type: 'XFBWorkroomsBaseUser',
                abstractKey: '__isXFBWorkroomsBaseUser',
              },
              {
                kind: 'InlineFragment',
                selections: [
                  l,
                  m,
                  {
                    alias: 'thumbnail_link',
                    args: [o],
                    kind: 'ScalarField',
                    name: 'icon_uri',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'doc_title',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'doc_url',
                    storageKey: null,
                  },
                ],
                type: 'KnowledgeHubDocumentData',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: r,
                type: 'Group',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: r,
                type: 'Event',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [l, m, n, p],
                type: 'Page',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [l, p],
                type: 'ContextualProfile',
                abstractKey: '__isContextualProfile',
              },
              {
                kind: 'InlineFragment',
                selections: r,
                type: 'GroupRule',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: r,
                type: 'ProductItem',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: r,
                type: 'BatchMentions',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'CometComposerTypeaheadResultEntry',
        abstractKey: null,
      };
      o = {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'cache_id',
        storageKey: null,
      };
      m = {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'label',
        storageKey: null,
      };
      n = {
        kind: 'InlineFragment',
        selections: [
          o,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'types_to_show',
            storageKey: null,
          },
          m,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'icon_name',
            storageKey: null,
          },
        ],
        type: 'XFBMentionsTypeSelectionEntry',
        abstractKey: null,
      };
      l = {
        kind: 'InlineFragment',
        selections: [o, m],
        type: 'XFBMentionsTypeResetEntry',
        abstractKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i],
          kind: 'Fragment',
          metadata: null,
          name: 'useFeedComposerCometMentionsNetworkDataSourceQuery',
          selections: [
            {
              alias: null,
              args: j,
              concreteType: null,
              kind: 'LinkedField',
              name: 'comet_composer_typeahead_search',
              plural: !0,
              selections: [
                k,
                q,
                n,
                l,
                {
                  kind: 'InlineFragment',
                  selections: [
                    o,
                    m,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'entries',
                      plural: !0,
                      selections: [q],
                      storageKey: null,
                    },
                  ],
                  type: 'XFBMentionsSectionEntry',
                  abstractKey: null,
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
          argumentDefinitions: [c, a, d, e, f, g, h, i],
          kind: 'Operation',
          name: 'useFeedComposerCometMentionsNetworkDataSourceQuery',
          selections: [
            {
              alias: null,
              args: j,
              concreteType: null,
              kind: 'LinkedField',
              name: 'comet_composer_typeahead_search',
              plural: !0,
              selections: [
                k,
                q,
                n,
                l,
                {
                  kind: 'InlineFragment',
                  selections: [
                    o,
                    m,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'entries',
                      plural: !0,
                      selections: [k, q],
                      storageKey: null,
                    },
                  ],
                  type: 'XFBMentionsSectionEntry',
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b(
            'useFeedComposerCometMentionsNetworkDataSourceQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'useFeedComposerCometMentionsNetworkDataSourceQuery',
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
  'cometFeedComposerCometMentionsTypeSelectionPayloadDecorator',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = a.entries,
        c = b.filter(function (a) {
          return g(a);
        });
      b = b.filter(function (a) {
        return !g(a);
      });
      return babelHelpers['extends']({}, a, { entries: c.concat(b) });
    }
    function g(a) {
      return (
        a.type === 'entry' &&
        (a.rawData.type === 'MENTION_TYPE_SELECTION' ||
          a.rawData.type === 'MENTION_TYPE_RESET')
      );
    }
    f['default'] = a;
  },
  66,
);
__d(
  'BaseTypeaheadLocalStorageDataProviderStorageKey',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = '_SearchBootstrapCache_';
    c = b('$InternalEnum').Mirrored([
      'FeedComposerMentionsIntentfulMentionsBootstrap',
      'FeedComposerMentionsNonIntentfulMentionsBootstrap',
      'FeedComposerMentionsWithTagBootstrap',
      'GlobalTypeaheadBootstrapEntities',
      'GlobalTypeaheadBootstrapKeywords',
    ]);
    f.StorageKeyPrefix = a;
    f.StorageKey = c;
  },
  66,
);
__d(
  'BaseTypeaheadLocalStorageDataProvider',
  [
    'BaseTypeaheadDataProvider',
    'BaseTypeaheadLocalStorageDataProviderStorageKey',
    'Promise',
    'WebStorage',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1e3 * 60 * 60 * 24;
    a = (function () {
      function a(a) {
        var b = a.storageKey,
          e = a.storageTimespan;
        e = e === void 0 ? h : e;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'storageKey',
          'storageTimespan',
        ]);
        this.$1 = new (c('BaseTypeaheadDataProvider'))(a);
        this.$3 =
          b != null
            ? d('BaseTypeaheadLocalStorageDataProviderStorageKey')
                .StorageKeyPrefix + b
            : null;
        this.$4 = e;
        b = a.queryVariablesBuilder;
        this.$2 = b;
      }
      var e = a.prototype;
      e.fetch = function (a) {
        var c = this,
          d = this.$3 != null ? this.$5(a) : null;
        if (d != null) {
          var e = this.$2.build();
          e = e(a);
          return b('Promise').resolve({
            requestQueryVariables: e,
            response: d,
          });
        }
        return this.$1.fetch(a).then(function (b) {
          var d = b.response;
          d != null && c.$3 != null && c.$6(a, d);
          return b;
        });
      };
      e.clearLocalStorage = function () {
        var a = this.$3,
          b = c('WebStorage').getLocalStorage();
        if (b == null || a == null) return;
        b.removeItem(a);
      };
      e.$5 = function (a) {
        var b = this.$3,
          d = c('WebStorage').getLocalStorage();
        if (d == null || b == null) return null;
        var e = d.getItem(b);
        if (e == null) return null;
        var f;
        try {
          f = JSON.parse(e);
        } catch (a) {
          c('recoverableViolation')(
            'Cannot deserialize bootstrap response from local storage due to error: ' +
              a,
            'search',
          );
        }
        if (f == null) return null;
        e = f;
        var g = e.queryVariables,
          h = e.response;
        e = e.timestamp;
        var i = this.$2.build();
        i = i(a);
        if (JSON.stringify(g) !== JSON.stringify(i)) {
          d.removeItem(b);
          return null;
        }
        a = Date.now();
        if (e + Number(this.$4) >= a) return h;
        d.removeItem(b);
        return null;
      };
      e.$6 = function (a, b) {
        var d = this.$3,
          e = c('WebStorage').getLocalStorage();
        if (e == null || d == null) return;
        var f = this.$2.build();
        f = f(a);
        try {
          a = Date.now();
          f = JSON.stringify({ queryVariables: f, response: b, timestamp: a });
          e.setItem(d, f);
        } catch (a) {
          c('recoverableViolation')(
            'Cannot save bootstrap response to local storage due to error: ' +
              a,
            'search',
          );
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'useCometTypeaheadCompositeBootstrapWithLocalStorageDataSource',
  [
    'BaseTypeaheadDataProviderQueryVariablesBuilder',
    'BaseTypeaheadLocalStorageDataProvider',
    'BaseTypeaheadPayloadDecoratorAddLimit',
    'CometRelay',
    'CometTypeaheadGraphQLBootstrapDataSource',
    'react',
    'useDeepEqualMemo',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a(a) {
      var b = a.fetchPolicy,
        e = a.gqlQuery,
        f = a.limit,
        g = a.matchStrategy,
        i = a.normalize,
        j = a.queryVariables,
        k = a.storageKey,
        l = h(
          function () {
            return c('BaseTypeaheadPayloadDecoratorAddLimit')(f);
          },
          [f],
        ),
        m = d('CometRelay').useRelayEnvironment();
      a = c('useDeepEqualMemo')(j);
      var n = h(
        function () {
          var a = new (c('BaseTypeaheadDataProviderQueryVariablesBuilder'))(
            function () {
              return function () {
                return j;
              };
            },
          );
          a = new (c('BaseTypeaheadLocalStorageDataProvider'))({
            options: { fetchPolicy: b },
            query: e,
            queryVariablesBuilder: a,
            relayEnvironment: m,
            storageKey: k,
          });
          return new (c('CometTypeaheadGraphQLBootstrapDataSource'))({
            bootstrapDataProvider: a,
            matchStrategy: g,
            normalize: i,
          });
        },
        [a, m],
      );
      return h(
        function () {
          return {
            bootstrap: function () {
              return n.bootstrap();
            },
            fetchCache: function (a) {
              return l(n.fetchCache(a));
            },
          };
        },
        [n, l],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useFeedComposerCometMentionsBootloadDataSource',
  [
    'WebPixelRatio',
    'createFeedCometMentionsDataEntry',
    'filterNulls',
    'qex',
    'useCometTypeaheadCompositeBootstrapWithLocalStorageDataSource',
    'useFeedComposerCometMentionsBootloadDataSourceQuery.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              'useFeedComposerCometMentionsBootloadDataSourceQuery.graphql',
            ));
    function a(a) {
      var b = a.firstDegreeFinderOptions,
        e = a.includeViewer,
        f = a.limit,
        g = a.matchStrategy;
      g = g === void 0 ? 'prefix' : g;
      var h = a.storageKey,
        k = a.typeaheadContext,
        l = a.types;
      a = a.useSections;
      return c('useCometTypeaheadCompositeBootstrapWithLocalStorageDataSource')(
        {
          gqlQuery: i,
          limit: f,
          matchStrategy: g,
          normalize: j,
          queryVariables: {
            include_viewer: e,
            options: b,
            scale: d('WebPixelRatio').get(),
            typeahead_context: k,
            types: l,
            useSections: a,
          },
          storageKey: h,
        },
      );
    }
    function j(a) {
      return !c('qex')._('1301')
        ? []
        : c('filterNulls')(
            ((a = a == null ? void 0 : a.comet_composer_typeahead_bootload) !=
            null
              ? a
              : []
            ).map(function (a) {
              if (
                (a == null ? void 0 : a.__typename) ===
                'CometComposerTypeaheadResultEntry'
              )
                return c('createFeedCometMentionsDataEntry')({
                  data: a,
                  type: 'MENTION_SEARCH_RESULT',
                });
              else if (
                (a == null ? void 0 : a.__typename) ===
                'XFBMentionsSectionEntry'
              ) {
                var b = a.cache_id,
                  d = a.label;
                return b == null || d == null
                  ? null
                  : {
                      entries: c('filterNulls')(
                        a.entries.map(function (a) {
                          return c('createFeedCometMentionsDataEntry')({
                            data: a,
                            type: 'MENTION_SEARCH_RESULT',
                          });
                        }),
                      ),
                      key: b,
                      label: d,
                      type: 'section',
                    };
              }
              return null;
            }),
          );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useFeedComposerCometMentionsNetworkDataSource',
  [
    'WebPixelRatio',
    'createFeedCometMentionsDataEntry',
    'filterNulls',
    'useCometTypeaheadGraphQLDataSource',
    'useFeedComposerCometMentionsNetworkDataSourceQuery.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              'useFeedComposerCometMentionsNetworkDataSourceQuery.graphql',
            ));
    function a(a) {
      var b = a.enableTypeSelection,
        e = b === void 0 ? !1 : b,
        f = a.includeViewer,
        g = a.limit,
        h = a.typeaheadContext,
        k = a.types,
        l = a.useSections;
      return c('useCometTypeaheadGraphQLDataSource')({
        gqlQuery: i,
        limit: g,
        normalize: j,
        queryVariablesBuilderFunction: function (a) {
          a = a.query;
          return {
            count: g,
            enable_type_selection: e,
            include_viewer: f,
            query: a,
            scale: d('WebPixelRatio').get(),
            typeahead_context: h,
            types: k,
            useSections: l,
          };
        },
      });
    }
    function j(a) {
      return c('filterNulls')(
        ((a = a == null ? void 0 : a.comet_composer_typeahead_search) != null
          ? a
          : []
        ).map(function (a) {
          if (
            (a == null ? void 0 : a.__typename) ===
            'CometComposerTypeaheadResultEntry'
          )
            return c('createFeedCometMentionsDataEntry')({
              data: a,
              type: 'MENTION_SEARCH_RESULT',
            });
          if (
            (a == null ? void 0 : a.__typename) ===
              'XFBMentionsTypeSelectionEntry' ||
            (a == null ? void 0 : a.__typename) ===
              'XFBMentionsTypeResetEntry' ||
            (a == null ? void 0 : a.__typename) === 'XFBMentionsSectionEntry'
          ) {
            a.__typename;
            var b = a.cache_id,
              d = a.label;
            if (b == null || d == null) return null;
            if (
              (a == null ? void 0 : a.__typename) ===
              'XFBMentionsTypeSelectionEntry'
            ) {
              var e;
              return {
                key: b,
                label: d,
                rawData: {
                  iconName: (e = a.icon_name) != null ? e : '',
                  type: 'MENTION_TYPE_SELECTION',
                  typesToShow: a.types_to_show.map(function (a) {
                    return a;
                  }),
                },
                type: 'entry',
              };
            } else if (
              (a == null ? void 0 : a.__typename) ===
              'XFBMentionsTypeResetEntry'
            )
              return {
                key: b,
                label: d,
                rawData: { type: 'MENTION_TYPE_RESET' },
                type: 'entry',
              };
            else if (
              (a == null ? void 0 : a.__typename) === 'XFBMentionsSectionEntry'
            )
              return {
                entries: c('filterNulls')(
                  a.entries.map(function (a) {
                    return c('createFeedCometMentionsDataEntry')({
                      data: a,
                      type: 'MENTION_SEARCH_RESULT',
                    });
                  }),
                ),
                key: b,
                label: d,
                type: 'section',
              };
          }
          return null;
        }),
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useBaseFeedMentionsDataSourceResolverConfig',
  [
    'BaseTypeaheadLocalStorageDataProviderStorageKey',
    'MentionsCommonWordsBlocklist',
    'cr:1916546',
    'createCometAtSignComposerMentionsMatchStrategy',
    'createCometMentionsNameMatchStrategy',
    'gkx',
    'qex',
    'react',
    'useCometMentionsDataSourceResolverConfig',
    'useCometTypeaheadCompositeDataSource',
    'useFeedComposerCometMentionsBootloadDataSource',
    'useFeedComposerCometMentionsNetworkDataSource',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo,
      i = c('qex')._('1302'),
      j = c('qex')._('1250'),
      k = c('gkx')('3923'),
      l = 5;
    function a(a) {
      var b = a.enableTypeSelection;
      b = b === void 0 ? !1 : b;
      var e = a.firstDegreeTypes,
        f = a.limit,
        g = a.matchStrategy;
      g = g === void 0 ? 'token' : g;
      var l = a.mentionTypes,
        n = a.payloadDecorators,
        o = a.shouldBootstrapOnLayoutEffect;
      a = a.useSections;
      var p = m({
          bootstrapOptions: {
            includeViewer: !0,
            typeaheadContext: 'mentions',
            types: e,
          },
          cacheKey_SEARCH_ONLY: {
            enableTypeSelection: b,
            mentionTypes: (e = l) != null ? e : [],
            type: 'feed_mentions_intentful_datasource_cache_key',
          },
          enableTypeSelection: b,
          limit: f,
          networkOptions: {
            includeViewer: !0,
            typeaheadContext: 'mentions',
            types: l,
          },
          payloadDecorators: n,
          useSections: a,
        }),
        q = c('useCometTypeaheadCompositeDataSource')({
          bootstrapDataSource: c(
            'useFeedComposerCometMentionsBootloadDataSource',
          )({
            firstDegreeFinderOptions: ['FRIENDS_ONLY'],
            includeViewer: !0,
            limit: Math.floor(f / 2),
            matchStrategy: g,
            storageKey: c('gkx')('1864085')
              ? d('BaseTypeaheadLocalStorageDataProviderStorageKey').StorageKey
                  .FeedComposerMentionsNonIntentfulMentionsBootstrap
              : null,
            typeaheadContext: 'mentions',
            types: ['USER', 'WORKROOMS_USER'],
            useSections: a,
          }),
          cacheKey_SEARCH_ONLY: {
            type: 'feed_mentions_non_intentful_datasource_cache_key',
          },
          limit: f,
          payloadDecorators: n,
        });
      e = h(
        function () {
          var a = [
            {
              dataSource: p,
              matchStrategy: c(
                'createCometAtSignComposerMentionsMatchStrategy',
              )({ minMatchLength: i === !0 ? 0 : 1 }),
            },
          ];
          if (k) return a;
          a.push({
            dataSource: q,
            matchStrategy: c('createCometMentionsNameMatchStrategy')({
              commonWordsBlocklist: c('MentionsCommonWordsBlocklist').wordList,
              minMatchLength: 3,
              nameCase: 'capitalized',
            }),
          });
          j === !0 &&
            a.push({
              dataSource: q,
              matchStrategy: c('createCometMentionsNameMatchStrategy')({
                commonWordsBlocklist: c('MentionsCommonWordsBlocklist')
                  .wordList,
                minMatchLength: 4,
                nameCase: 'lower-case',
              }),
            });
          return a;
        },
        [p, q],
      );
      return c('useCometMentionsDataSourceResolverConfig')(e, o);
    }
    function m(a) {
      var e = a.bootstrapOptions,
        f = a.cacheKey_SEARCH_ONLY,
        g = a.enableTypeSelection,
        h = a.limit,
        i = a.matchStrategy;
      i = i === void 0 ? 'token' : i;
      var j = a.networkOptions,
        k = a.payloadDecorators;
      a = a.useSections;
      var m = b('cr:1916546')({
        firstDegreeTypes: e.types,
        limit: l,
        useSections: a,
      });
      return c('useCometTypeaheadCompositeDataSource')({
        bootstrapDataSource: c(
          'useFeedComposerCometMentionsBootloadDataSource',
        )(
          babelHelpers['extends'](
            { limit: Math.floor(h / 2), matchStrategy: i },
            e,
            {
              storageKey: c('gkx')('1864085')
                ? d('BaseTypeaheadLocalStorageDataProviderStorageKey')
                    .StorageKey.FeedComposerMentionsIntentfulMentionsBootstrap
                : null,
              useSections: a,
            },
          ),
        ),
        cacheKey_SEARCH_ONLY: f,
        limit: h,
        networkDataSource: c('useFeedComposerCometMentionsNetworkDataSource')(
          babelHelpers['extends']({ enableTypeSelection: g, limit: h }, j, {
            useSections: a,
          }),
        ),
        nullstateDataSource: m != null ? m : void 0,
        payloadDecorators: k,
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useFeedComposerCometMentionsDataSourceResolverConfig',
  [
    'cometFeedComposerCometMentionsTypeSelectionPayloadDecorator',
    'useBaseFeedMentionsDataSourceResolverConfig',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = ['user', 'workrooms_user', 'group', 'event', 'page'],
      i = ['USER', 'WORKROOMS_USER', 'GROUP', 'EVENT', 'PAGE'];
    function a(a) {
      var b = a.enableTypeSelection;
      b = b === void 0 ? !1 : b;
      var d = a.firstDegreeTypes;
      d = d === void 0 ? i : d;
      var e = a.limit,
        f = a.mentionTypes;
      f = f === void 0 ? h : f;
      var g = a.shouldBootstrapOnLayoutEffect;
      a = a.useSections;
      var j = b
        ? [c('cometFeedComposerCometMentionsTypeSelectionPayloadDecorator')]
        : [];
      return c('useBaseFeedMentionsDataSourceResolverConfig')({
        enableTypeSelection: b,
        firstDegreeTypes: d,
        limit: e,
        mentionTypes: f,
        payloadDecorators: j,
        shouldBootstrapOnLayoutEffect: g,
        useSections: a,
      });
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'CometPrivacyIcon_scope.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'scale' }],
      kind: 'Fragment',
      metadata: null,
      name: 'CometPrivacyIcon_scope',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'label',
          storageKey: null,
        },
        {
          alias: null,
          args: [{ kind: 'Variable', name: 'scale', variableName: 'scale' }],
          concreteType: 'Image',
          kind: 'LinkedField',
          name: 'icon_image',
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
              args: null,
              kind: 'FragmentSpread',
              name: 'useCometPrivacyIcon_image',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'PrivacyScope',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useCometPrivacyIcon_image.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometPrivacyIcon_image',
      selections: [
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
          name: 'scale',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'uri',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'width',
          storageKey: null,
        },
      ],
      type: 'Image',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometPrivacySelectorEntryPointIcon_renderer$normalization.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [
        {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow',
        },
        {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'CometPrivacySelectorEntryPointIcon_renderer$renderLocation',
        },
        {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'CometPrivacySelectorEntryPointIcon_renderer$tags',
        },
      ],
      kind: 'SplitOperation',
      metadata: {},
      name: 'CometPrivacySelectorEntryPointIcon_renderer$normalization',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'source',
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
              alias: 'scope',
              args: [
                {
                  kind: 'Variable',
                  name: 'render_location',
                  variableName:
                    'CometPrivacySelectorEntryPointIcon_renderer$renderLocation',
                },
                {
                  kind: 'Variable',
                  name: 'selected_override',
                  variableName:
                    'CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow',
                },
                {
                  kind: 'Variable',
                  name: 'tags',
                  variableName:
                    'CometPrivacySelectorEntryPointIcon_renderer$tags',
                },
              ],
              concreteType: 'PrivacyScope',
              kind: 'LinkedField',
              name: 'privacy_scope_for_location',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'label',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: 'Variable', name: 'scale', variableName: 'scale' },
                  ],
                  concreteType: 'Image',
                  kind: 'LinkedField',
                  name: 'icon_image',
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
                      name: 'height',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'scale',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'uri',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'width',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'can_viewer_edit',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'description',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'extended_description',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
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
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometPrivacySelectorEntryPointIcon_renderer.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: 'LocalArgument', name: 'localPrivacyRow' },
        { defaultValue: null, kind: 'LocalArgument', name: 'renderLocation' },
        { defaultValue: null, kind: 'LocalArgument', name: 'tags' },
      ],
      kind: 'Fragment',
      metadata: null,
      name: 'CometPrivacySelectorEntryPointIcon_renderer',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'source',
          plural: !1,
          selections: [
            {
              alias: 'scope',
              args: [
                {
                  kind: 'Variable',
                  name: 'render_location',
                  variableName: 'renderLocation',
                },
                {
                  kind: 'Variable',
                  name: 'selected_override',
                  variableName: 'localPrivacyRow',
                },
                { kind: 'Variable', name: 'tags', variableName: 'tags' },
              ],
              concreteType: 'PrivacyScope',
              kind: 'LinkedField',
              name: 'privacy_scope_for_location',
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'CometPrivacyIcon_scope',
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'CometPrivacySelectorTooltip_scope',
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'description',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'PrivacyScopeCometIconEntryPointRenderer',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometPrivacySelectorEntryPointMatchContainer_renderer.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
        {
          kind: 'Variable',
          name: 'localPrivacyRow',
          variableName: 'localPrivacyRow',
        },
        {
          kind: 'Variable',
          name: 'renderLocation',
          variableName: 'renderLocation',
        },
        { kind: 'Variable', name: 'tags', variableName: 'tags' },
      ];
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'localPrivacyRow',
          },
          { defaultValue: null, kind: 'LocalArgument', name: 'renderLocation' },
          { defaultValue: null, kind: 'LocalArgument', name: 'tags' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'CometPrivacySelectorEntryPointMatchContainer_renderer',
        selections: [
          {
            alias: null,
            args: [
              {
                kind: 'Variable',
                name: 'render_location',
                variableName: 'renderLocation',
              },
              {
                kind: 'Literal',
                name: 'supported',
                value: [
                  'PrivacyScopeCometButtonEntryPointRenderer',
                  'PrivacyScopeCometComposerButtonEntryPointRenderer',
                  'PrivacyScopeCometIconEntryPointRenderer',
                  'PrivacyScopeCometLabelEntryPointRenderer',
                  'PrivacyScopeCometToggleEntryPointRenderer',
                  'PrivacyScopeCometLeftRailButtonEntryPointRenderer',
                ],
              },
            ],
            concreteType: null,
            kind: 'LinkedField',
            name: 'entry_point_renderer',
            plural: !1,
            selections: [
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    args: a,
                    documentName:
                      'CometPrivacySelectorEntryPointMatchContainer_renderer',
                    fragmentName:
                      'CometPrivacySelectorEntryPointButton_renderer',
                    fragmentPropName: 'renderer',
                    kind: 'ModuleImport',
                  },
                ],
                type: 'PrivacyScopeCometButtonEntryPointRenderer',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    args: a,
                    documentName:
                      'CometPrivacySelectorEntryPointMatchContainer_renderer',
                    fragmentName:
                      'CometComposerPrivacySelectorEntryPointButton_renderer',
                    fragmentPropName: 'renderer',
                    kind: 'ModuleImport',
                  },
                ],
                type: 'PrivacyScopeCometComposerButtonEntryPointRenderer',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    args: a,
                    documentName:
                      'CometPrivacySelectorEntryPointMatchContainer_renderer',
                    fragmentName: 'CometPrivacySelectorEntryPointIcon_renderer',
                    fragmentPropName: 'renderer',
                    kind: 'ModuleImport',
                  },
                ],
                type: 'PrivacyScopeCometIconEntryPointRenderer',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    args: a,
                    documentName:
                      'CometPrivacySelectorEntryPointMatchContainer_renderer',
                    fragmentName:
                      'CometPrivacySelectorEntryPointLabel_renderer',
                    fragmentPropName: 'renderer',
                    kind: 'ModuleImport',
                  },
                ],
                type: 'PrivacyScopeCometLabelEntryPointRenderer',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    args: a,
                    documentName:
                      'CometPrivacySelectorEntryPointMatchContainer_renderer',
                    fragmentName:
                      'CometPrivacySelectorEntryPointToggle_renderer',
                    fragmentPropName: 'renderer',
                    kind: 'ModuleImport',
                  },
                ],
                type: 'PrivacyScopeCometToggleEntryPointRenderer',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    args: a,
                    documentName:
                      'CometPrivacySelectorEntryPointMatchContainer_renderer',
                    fragmentName:
                      'CometPrivacySelectorEntryPointLeftRailButton_renderer',
                    fragmentPropName: 'renderer',
                    kind: 'ModuleImport',
                  },
                ],
                type: 'PrivacyScopeCometLeftRailButtonEntryPointRenderer',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'PrivacySelectorRenderer',
        abstractKey: '__isPrivacySelectorRenderer',
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'PrivacyRowInput',
          kind: 'LinkedField',
          name: 'privacy_row_input',
          plural: !1,
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'PrivacyRowInput_fragment',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'PrivacySelectorRenderer',
      abstractKey: '__isPrivacySelectorRenderer',
    };
    e.exports = a;
  },
  null,
);
__d(
  'PrivacyRowInput_fragment.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'PrivacyRowInput_fragment',
      selections: [
        {
          kind: 'InlineDataFragmentSpread',
          name: 'PrivacyRowInput_inline',
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'allow',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'base_state',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'deny',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'PrivacyRowInputTargetingFields',
              kind: 'LinkedField',
              name: 'privacy_targeting',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'targeted_publishing_id',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'targeted_publishing_fields',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'tag_expansion_state',
              storageKey: null,
            },
          ],
          args: null,
          argumentDefinitions: [],
        },
      ],
      type: 'PrivacyRowInput',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'PrivacyRowInput_inline.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = { kind: 'InlineDataFragment', name: 'PrivacyRowInput_inline' };
    e.exports = a;
  },
  null,
);
__d(
  'CometPrivacySelectorTooltip_scope.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometPrivacySelectorTooltip_scope',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'can_viewer_edit',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'description',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'extended_description',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'label',
          storageKey: null,
        },
      ],
      type: 'PrivacyScope',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useCometPrivacyIcon',
  [
    'CometRelay',
    'TintableIconSource',
    'coerceRelayImage',
    'react',
    'useCometPrivacyIcon_image.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useMemo,
      j = [8, 10, 12, 16, 18, 20, 24, 28, 32, 48],
      k = [20, 24],
      l = [20];
    function m(a, e) {
      var f = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('useCometPrivacyIcon_image.graphql')),
        a,
      );
      return i(
        function () {
          if (f == null) return null;
          var a = f.height,
            b = f.scale,
            d = f.width;
          if (a == null || b == null || d == null) return null;
          var g = Math.max(d, a) / b;
          d = e.find(function (a) {
            return a >= g;
          });
          return d == null
            ? null
            : new (c('TintableIconSource'))('FB', c('coerceRelayImage')(f), d);
        },
        [f, e],
      );
    }
    function a(a) {
      return m(a, j);
    }
    function e(a) {
      return m(a, k);
    }
    function f(a) {
      return m(a, l);
    }
    g.useCometPrivacyIcon = a;
    g.useCometPrivacyIconForSkittleIcon = e;
    g.useCometPrivacyIconForMenuItem = f;
  },
  98,
);
__d(
  'CometPrivacyIcon.react',
  [
    'CometPrivacyIcon_scope.graphql',
    'CometRelay',
    'TetraIcon.react',
    'react',
    'useCometPrivacyIcon',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e = a['aria-hidden'];
      e = e === void 0 ? !1 : e;
      var f = a.color;
      f = f === void 0 ? 'secondary' : f;
      var g = a.disabled;
      g = g === void 0 ? !1 : g;
      var j = a.marginEnd;
      a = a.scope;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('CometPrivacyIcon_scope.graphql')),
        a,
      );
      var k = a.icon_image;
      a = a.label;
      var l = d('useCometPrivacyIcon').useCometPrivacyIcon(k);
      if (l == null) return null;
      k = k == null ? void 0 : k.name;
      return i.jsx('div', {
        'aria-hidden': e,
        className: 'x6s0dn4 x3nfvp2 xl56j7k' + (j === 4 ? ' xw3qccf' : ''),
        children: i.jsx(c('TetraIcon.react'), {
          alt: (k = a) != null ? k : '',
          color: g ? 'disabled' : f,
          disabled: g,
          icon: l,
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
  'CometPrivacySelectorButtonSavingOverlay.react',
  ['CometProgressIndicator.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.isSaving;
      return !a
        ? null
        : h.jsx('div', {
            className:
              'x1ey2m1c xds687c x6ikm8r x10wlt62 x10l6tqk x17qophe x13vifvy x6s0dn4 x78zum5 xl56j7k',
            children: h.jsx(c('CometProgressIndicator.react'), {}),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometPrivacySelectorTooltip.react',
  [
    'fbt',
    'CometPrivacySelectorTooltip_scope.graphql',
    'CometRelay',
    'CometTooltip.react',
    'gkx',
    'killswitch',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    function k() {
      return h._('__JHASH__aqia400_2ly__JHASH__');
    }
    k.displayName = k.name + ' [from ' + f.id + ']';
    function a(a) {
      var e = a.children,
        f = a.entryPointHasLabel,
        g = a.isLoading;
      a = a.scope;
      a = d('CometRelay').useFragment(
        i !== void 0 ? i : (i = b('CometPrivacySelectorTooltip_scope.graphql')),
        a,
      );
      var h = a.can_viewer_edit,
        l = a.description,
        m = a.extended_description;
      a = a.label;
      if (g)
        return j.jsx(c('CometTooltip.react'), {
          tooltip: j.jsx(k, {}),
          children: e,
        });
      g = c('killswitch')('COMET_PRIVACY_SELECTOR_EDITABLE_DISABLED');
      var n = c('gkx')('1341692');
      return (g && h) || (f && l === a && (!n || m == null))
        ? e
        : j.jsx(c('CometTooltip.react'), {
            tooltip: n && m != null ? m : l,
            children: e,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometPrivacySelectorEntryPointIcon.react',
  [
    'fbt',
    'CometFutureOfFeedStoryContext',
    'CometPressable.react',
    'CometPrivacyIcon.react',
    'CometPrivacySelectorButtonSavingOverlay.react',
    'CometPrivacySelectorEntryPointIcon_renderer.graphql',
    'CometPrivacySelectorTooltip.react',
    'CometRelay',
    'CometTrackingNodeProvider.react',
    'react',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react'),
      k = d('react').useContext,
      l = {
        centerContent: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          $$css: !0,
        },
        hiddenLabel: {
          clip: 'xzpqnlu',
          clipPath: 'x179tack',
          position: 'x10l6tqk',
          $$css: !0,
        },
        invisible: { visibility: 'xlshs6z', $$css: !0 },
        marginFixer: { marginStart: 'x139jcc6', $$css: !0 },
        pressableOverlayPressed: { backgroundColor: 'x1lxk4cn', $$css: !0 },
        pressablePosition: { position: 'x1uhb9sk', $$css: !0 },
        savingOverlayContainer: { position: 'x1n2onr6', $$css: !0 },
      };
    function a(a) {
      var e = a.isEnabled,
        f = a.isSaving,
        g = a.onPress,
        m = a.renderer;
      a = a.triggerRef;
      m = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b('CometPrivacySelectorEntryPointIcon_renderer.graphql')),
        m,
      );
      var n = k(c('CometFutureOfFeedStoryContext'));
      n = n.shouldOverlayHeaderOverAttachment;
      m = (m = m.source) == null ? void 0 : m.scope;
      if (m == null)
        throw c('unrecoverableViolation')(
          'Failed to render privacy selector icon entry point. Either source or source.scope were not available.',
          'comet_privacy_selector',
        );
      var o = h._('__JHASH__QSweaIvtpVn__JHASH__');
      e = f || !e;
      o = j.jsxs('div', {
        'aria-label': o,
        className: 'x6s0dn4 x78zum5 xl56j7k' + (f ? ' xlshs6z' : ''),
        children: [
          j.jsx(c('CometPrivacyIcon.react'), {
            color: n ? 'white' : void 0,
            disabled: e,
            marginEnd: 4,
            scope: m,
          }),
          j.jsx('div', { className: 'x139jcc6' }),
        ],
      });
      n = m.description;
      n =
        n != null
          ? j.jsx('span', {
              className: 'xzpqnlu x179tack x10l6tqk',
              children: h._('__JHASH__tXZ5JCHXK7E__JHASH__', [
                h._param('audience', n),
              ]),
            })
          : null;
      e = j.jsxs(c('CometPressable.react'), {
        disabled: e,
        display: 'inline',
        onPress: g,
        overlayOffset: 4,
        overlayPressedStyle: l.pressableOverlayPressed,
        overlayRadius: '50%',
        ref: a,
        xstyle: l.pressablePosition,
        children: [
          j.jsx(c('CometPrivacySelectorButtonSavingOverlay.react'), {
            isSaving: f,
          }),
          o,
        ],
      });
      return j.jsx(c('CometPrivacySelectorTooltip.react'), {
        entryPointHasLabel: !1,
        isLoading: f,
        scope: m,
        children: j.jsx(c('CometTrackingNodeProvider.react'), {
          trackingNode: 29,
          children: j.jsxs('span', { className: 'x1n2onr6', children: [n, e] }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometPrivacySelectorEntryPointMatchContainer.react',
  [
    'CometPrivacySelectorEntryPointMatchContainer_renderer.graphql',
    'CometRelay',
    'react',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e = a.props;
      a = a.renderer;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b(
              'CometPrivacySelectorEntryPointMatchContainer_renderer.graphql',
            )),
        a,
      );
      a = a.entry_point_renderer;
      if (a == null)
        throw c('unrecoverableViolation')(
          'Trying to render an editable Privacy Selector without an entry point',
          'comet_privacy_selector',
        );
      return i.jsx(d('CometRelay').MatchContainer, { match: a, props: e });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'PrivacyRowInput',
  [
    'CometRelay',
    'PrivacyRowInput_fragment.graphql',
    'PrivacyRowInput_inline.graphql',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = d('react').useMemo,
      k = {},
      l = ['allow', 'deny'];
    function a(a, b) {
      if (a == null && b == null) return !0;
      else if (a == null || b == null) return !1;
      if (
        a.base_state !== b.base_state ||
        a.tag_expansion_state !== b.tag_expansion_state
      )
        return !1;
      for (
        var c = l,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        var g = f;
        if (a[g].length !== b[g].length) return !1;
        if (a[g].length > 0) {
          f = (function () {
            var c = new Set(b[g]);
            if (
              !a[g].every(function (a) {
                return c.has(a);
              })
            )
              return { v: !1 };
          })();
          if (typeof f === 'object') return f.v;
        }
      }
      return !0;
    }
    function m(a) {
      var c;
      a = d('CometRelay').readInlineData(
        h !== void 0 ? h : (h = b('PrivacyRowInput_inline.graphql')),
        a,
      );
      c = (c = a) != null ? c : k;
      var e = c.allow,
        f = c.base_state,
        g = c.deny;
      c = c.tag_expansion_state;
      a = (a = a == null ? void 0 : a.privacy_targeting) != null ? a : k;
      var i = a.targeted_publishing_fields;
      a = a.targeted_publishing_id;
      if (f == null) return null;
      if (a != null) {
        return {
          allow: e,
          base_state: f,
          deny: g,
          privacy_targeting: {
            targeted_publishing_fields: (i = i) != null ? i : void 0,
            targeted_publishing_id: a,
          },
          tag_expansion_state: (i = c) != null ? i : 'UNSPECIFIED',
        };
      }
      return {
        allow: e,
        base_state: f,
        deny: g,
        tag_expansion_state: (a = c) != null ? a : 'UNSPECIFIED',
      };
    }
    function c(a) {
      var c = d('CometRelay').useFragment(
        i !== void 0 ? i : (i = b('PrivacyRowInput_fragment.graphql')),
        a,
      );
      return j(
        function () {
          return m(c);
        },
        [c],
      );
    }
    function n(a) {
      var b = [];
      a == null
        ? void 0
        : a.forEach(function (a) {
            a != null && b.push(a);
          });
      return b;
    }
    function e(a) {
      return a == null
        ? null
        : {
            allow: n(a == null ? void 0 : a.allow),
            base_state: a == null ? void 0 : a.base_state,
            deny: n(a == null ? void 0 : a.deny),
            privacy_targeting: a.privacy_targeting,
            tag_expansion_state:
              (a = a.tag_expansion_state) != null ? a : 'UNSPECIFIED',
          };
    }
    g.arePrivacyRowInputsEqual = a;
    g.getPrivacyRowInput = m;
    g.usePrivacyRowInput = c;
    g.coerceFromPrivacyData = e;
  },
  98,
);
__d(
  'useCometPrivacySelectorNotifyPrivacyOnInitEffect',
  [
    'CometRelay',
    'PrivacyRowInput',
    'react',
    'useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useEffect;
    function a(a, c) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b(
              'useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql',
            )),
        a,
      );
      var e = d('PrivacyRowInput').usePrivacyRowInput(a.privacy_row_input);
      i(
        function () {
          c && c({ privacyRowInput: e, type: 'init' });
        },
        [c, e],
      );
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'CometComposerLifeEventCategoryListQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4768477349947387';
  },
  null,
);
__d(
  'CometComposerLifeEventCategoryListQuery$Parameters',
  ['CometComposerLifeEventCategoryListQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('CometComposerLifeEventCategoryListQuery_facebookRelayOperation'),
        metadata: {},
        name: 'CometComposerLifeEventCategoryListQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometComposerLifeEventSprout_sprout$normalization.graphql',
  ['CometTextWithEntitiesRelay_textWithEntities$normalization.graphql'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        };
      return {
        kind: 'SplitOperation',
        metadata: {},
        name: 'CometComposerLifeEventSprout_sprout$normalization',
        selections: [
          {
            kind: 'InlineFragment',
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: 'ExtensibleSproutsBadgeConfigItem',
                kind: 'LinkedField',
                name: 'promotion_config',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'TextWithEntities',
                    kind: 'LinkedField',
                    name: 'subtitle',
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        fragment: b(
                          'CometTextWithEntitiesRelay_textWithEntities$normalization.graphql',
                        ),
                        kind: 'FragmentSpread',
                      },
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
                    name: 'quick_promotion_id',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'QuickPromotion',
                    kind: 'LinkedField',
                    name: 'comet_sprout_quick_promotion_tooltip',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'promotion_creatives',
                        plural: !0,
                        selections: [
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'footer_text',
                            storageKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [c],
                            type: 'Node',
                            abstractKey: '__isNode',
                          },
                        ],
                        storageKey: null,
                      },
                      c,
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'encrypted_logging_data',
                        storageKey: null,
                      },
                      {
                        alias: 'surface_id',
                        args: null,
                        kind: 'ScalarField',
                        name: 'nux_id',
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'trigger',
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
                name: 'label',
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'scale', variableName: 'scale' },
                ],
                concreteType: 'Image',
                kind: 'LinkedField',
                name: 'icon',
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
                name: 'sprout_type',
                storageKey: null,
              },
            ],
            type: 'ICometComposerSprout',
            abstractKey: '__isICometComposerSprout',
          },
        ],
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometComposerLifeEventSprout_sprout.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometComposerLifeEventSprout_sprout',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'CometComposerSproutButton_sprout',
        },
      ],
      type: 'CometComposerLifeEventSprout',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometComposerLifeEventSubcategoryListQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5010123905741057';
  },
  null,
);
__d(
  'CometComposerLifeEventSubcategoryListQuery$Parameters',
  ['CometComposerLifeEventSubcategoryListQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometComposerLifeEventSubcategoryListQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometComposerLifeEventSubcategoryListQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometComposerLifeEventCategoryList.entrypoint',
  [
    'CometComposerLifeEventCategoryListQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            CometComposerLifeEventCategoryListQueryRef: {
              parameters: c(
                'CometComposerLifeEventCategoryListQuery$Parameters',
              ),
              variables: { scale: d('WebPixelRatio').get() },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometComposerLifeEventCategoryList.react',
      ).__setRef('CometComposerLifeEventCategoryList.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerLifeEventSubcategoryList.entrypoint',
  [
    'CometComposerLifeEventSubcategoryListQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            CometComposerLifeEventSubcategoryListQueryRef: {
              parameters: c(
                'CometComposerLifeEventSubcategoryListQuery$Parameters',
              ),
              variables: { scale: d('WebPixelRatio').get() },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometComposerLifeEventSubcategoryList.react',
      ).__setRef('CometComposerLifeEventSubcategoryList.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'ProfileCometLifeEventsSubcategoryType',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = Object.freeze({
      ENGAGEMENT: '186602241402186',
      FIRST_MET: '110479285719045',
      GRADUATED: 'graduated',
      HOMETOWN: 'hometown',
      LEFT_JOB: 'left_job',
      LEFT_SCHOOL: 'left_school',
      LOSS_LOVED_ONE: '161401573941389',
      MARRIAGE: '119419864820741',
      MOVED: '136805663075786',
      NEW_CHILD: '154540017958611',
      NEW_JOB: 'new_job',
      NEW_PET: '157504504317810',
      NEW_RELATIONSHIP: '166189666805959',
      NEW_SCHOOL: '247225955309245',
      PARENTHOOD: 'parenthood',
      PLACES_LIVED: 'places_lived',
      PROMOTION: 'promotion',
      RETIREMENT: '241151665935368',
    });
    f['default'] = a;
  },
  66,
);
__d(
  'ProfileCometLifeEventsComposerTaggingUtils',
  ['ProfileCometLifeEventsSubcategoryType'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.taggedEmployer,
        c = a.taggedMetadataLocation,
        d = a.taggedPartner;
      a = a.taggedSchool;
      if (b.id !== '') return b.id;
      if (c.id !== '') return c.id;
      if (d.id !== '') return d.id;
      return a.id !== '' ? a.id : null;
    }
    function b(a) {
      return a === c('ProfileCometLifeEventsSubcategoryType').MOVED;
    }
    function d(a) {
      return a === c('ProfileCometLifeEventsSubcategoryType').FIRST_MET;
    }
    function e(a, b) {
      return (
        a === 'WORK' &&
        (b === c('ProfileCometLifeEventsSubcategoryType').NEW_JOB ||
          b === c('ProfileCometLifeEventsSubcategoryType').LEFT_JOB)
      );
    }
    function f(a, b) {
      return (
        a === 'TRAVEL' ||
        (a === 'HOME' &&
          (b === c('ProfileCometLifeEventsSubcategoryType').MOVED ||
            b === c('ProfileCometLifeEventsSubcategoryType').PLACES_LIVED ||
            b === c('ProfileCometLifeEventsSubcategoryType').HOMETOWN))
      );
    }
    function h(a, b, d) {
      return (
        d &&
        a === 'RELATIONSHIPS' &&
        (b === c('ProfileCometLifeEventsSubcategoryType').FIRST_MET ||
          b === c('ProfileCometLifeEventsSubcategoryType').ENGAGEMENT ||
          b === c('ProfileCometLifeEventsSubcategoryType').MARRIAGE ||
          b === c('ProfileCometLifeEventsSubcategoryType').NEW_RELATIONSHIP)
      );
    }
    function i(a, b) {
      return a === 'EDUCATION' && b !== null;
    }
    function j(a) {
      return (
        a === c('ProfileCometLifeEventsSubcategoryType').ENGAGEMENT ||
        a === c('ProfileCometLifeEventsSubcategoryType').MARRIAGE ||
        a === c('ProfileCometLifeEventsSubcategoryType').NEW_RELATIONSHIP
      );
    }
    g.getTaggedEntity = a;
    g.isLocationRequired = b;
    g.isPartnerRequired = d;
    g.shouldShowEmployerField = e;
    g.shouldShowMetadataLocationField = f;
    g.shouldShowPartnerField = h;
    g.shouldShowSchoolField = i;
    g.shouldShowRelationshipDisclaimer = j;
  },
  98,
);
__d(
  'getInvalidMLEField',
  ['ProfileCometLifeEventsComposerTaggingUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      a = (a = a) != null ? a : {};
      var c = a.selectedCategoryID,
        e = a.selectedSubcategoryID,
        f = a.taggedEmployer,
        g = a.taggedMetadataLocation,
        h = a.taggedPartner,
        i = a.taggedSchool,
        j = a.title;
      a = a.uploadedMedia;
      if (j === '') return 'title';
      if (
        a &&
        a.length > 0 &&
        a.every(function (a) {
          return a.status !== 'UPLOADED';
        })
      )
        return 'media';
      if (
        d('ProfileCometLifeEventsComposerTaggingUtils').shouldShowEmployerField(
          c,
          e,
        ) &&
        f.id === ''
      )
        return 'workplace';
      if (
        d(
          'ProfileCometLifeEventsComposerTaggingUtils',
        ).shouldShowMetadataLocationField(c, e) &&
        d('ProfileCometLifeEventsComposerTaggingUtils').isLocationRequired(e) &&
        g.id === ''
      )
        return 'location';
      if (
        d('ProfileCometLifeEventsComposerTaggingUtils').shouldShowPartnerField(
          c,
          e,
          b,
        ) &&
        d('ProfileCometLifeEventsComposerTaggingUtils').isPartnerRequired(e) &&
        h.id === ''
      )
        return 'partner';
      return d(
        'ProfileCometLifeEventsComposerTaggingUtils',
      ).shouldShowSchoolField(c, e) && i.id === ''
        ? 'school'
        : null;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'ProfileCometLifeEventMigrationContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ isInCometComposer: !1 });
    g['default'] = b;
  },
  98,
);
__d(
  'ProfileCometLifeEventsComposerState',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a() {
      var a = new Date();
      return {
        date: {
          day: a.getDate(),
          month: a.getMonth() + 1,
          year: a.getFullYear(),
        },
        defaultTitle: '',
        description: '',
        feedQueryVariables: null,
        initialState: null,
        isDateEditable: !0,
        isMediaExpanded: !1,
        isTitleDirty: !1,
        loadingDefaultMedia: !0,
        privacy: null,
        selectedCategoryID: null,
        selectedDefaultMedia: null,
        selectedIcon: null,
        selectedSubcategoryID: null,
        showEntityMedia: !1,
        skipSubcategoryStep: !1,
        step: 'CATEGORY',
        storyID: null,
        surface: null,
        taggedEmployer: { id: '', name: '' },
        taggedLocation: null,
        taggedMetadataLocation: { id: '', name: '' },
        taggedPartner: { id: '', name: '' },
        taggedSchool: { id: '', name: '' },
        taggedSchoolType: 'COLLEGE',
        taggedUsers: [],
        title: '',
        uploadedMedia: [],
      };
    }
    f.getInitialState = a;
  },
  66,
);
__d(
  'ProfileCometLifeEventsComposerContext',
  ['ProfileCometLifeEventsComposerState', 'emptyFunction', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({
      dispatch: c('emptyFunction'),
      state: d('ProfileCometLifeEventsComposerState').getInitialState(),
    });
    g['default'] = b;
  },
  98,
);
__d(
  'useLifeEventsComposerDispatcher',
  [
    'ProfileCometLifeEventMigrationContext',
    'ProfileCometLifeEventsComposerContext',
    'react',
    'useComposerViewStateDispatcher',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      var a = h(c('ProfileCometLifeEventsComposerContext'));
      a = a.dispatch;
      var b = c('useComposerViewStateDispatcher')(),
        d = h(c('ProfileCometLifeEventMigrationContext'));
      d = d.isInCometComposer;
      return d ? b : a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerLifeEventsFormDoneButton.react',
  [
    'fbt',
    'TetraButton.react',
    'getInvalidMLEField',
    'react',
    'useComposerViewStateDispatcher',
    'useLifeEventsComposerDispatcher',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.majorLifeEvent,
        d = a.onReturn,
        e = c('useComposerViewStateDispatcher')(),
        f = c('useLifeEventsComposerDispatcher')();
      a = c('getInvalidMLEField')(b, !0) !== null;
      return i.jsx('div', {
        className: 'x123j3cw x1mpkggp xs9asl8 x1t2a60a',
        children: i.jsx(c('TetraButton.react'), {
          disabled: a,
          label: h._('__JHASH__xfdi60OT5Na__JHASH__'),
          onPress: function () {
            d({ index: 0 }),
              e({
                attachmentType: 'LIFE_EVENT',
                type: 'ACTIVATE_ATTACHMENT_TYPE',
              }),
              f({ type: 'COPY_ALL_METADATA_TO_ATTACHMENT' });
          },
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = c('withComposerViewStatePart')(a, function (a) {
      return { majorLifeEvent: a.majorLifeEvent };
    });
    g['default'] = b;
  },
  98,
);
__d(
  'CometComposerMajorLifeEventAttachmentFormResource',
  ['JSResourceForInteraction'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = c('JSResourceForInteraction')(
      'CometComposerMajorLifeEventAttachmentForm.react',
    ).__setRef('CometComposerMajorLifeEventAttachmentFormResource');
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'ProfileCometLifeEventEditMediaContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ mediaEditable: !1 });
    g['default'] = b;
  },
  98,
);
__d(
  'useCometComposerPushMLEPage',
  [
    'fbt',
    '$InternalEnum',
    'CometComposerAttachmentPluginTypes',
    'CometComposerLifeEventCategoryList.entrypoint',
    'CometComposerLifeEventSubcategoryList.entrypoint',
    'CometComposerLifeEventsFormDoneButton.react',
    'CometComposerMajorLifeEventAttachmentFormResource',
    'CometComposerPushPageGlimmer.react',
    'CometPlaceholder.react',
    'ProfileCometLifeEventEditMediaContext',
    'ProfileCometLifeEventMigrationContext',
    'lazyLoadComponent',
    'react',
    'react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react',
    'useCometComposerPushPageWithReducer',
    'useCometRelayEntrypointContextualEnvironmentProvider',
    'useLifeEventsComposerDispatcher',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useCallback,
      k = c('lazyLoadComponent')(
        c('CometComposerMajorLifeEventAttachmentFormResource'),
      ),
      l = b('$InternalEnum').Mirrored([
        'CATEGORY',
        'SUBCATEGORY',
        'ATTACHMENT_FORM',
      ]);
    function a(a, b, d) {
      var e = c('useCometComposerPushPageWithReducer')(),
        f = c('useCometRelayEntrypointContextualEnvironmentProvider')(),
        g = c('useLifeEventsComposerDispatcher')();
      return j(
        function () {
          var j = { isInCometComposer: !0 },
            m = { mediaEditable: !0 },
            n = d != null ? d : h._('__JHASH__DAqPTXmD_IH__JHASH__'),
            o = b
              ? b
              : {
                  onBack: function () {
                    return g({ type: 'CLEAR_FORM_FIELDS' });
                  },
                };
          switch (a) {
            case l.CATEGORY:
              e(
                n,
                function (a) {
                  a = a.onReturn;
                  return i.jsx(c('CometPlaceholder.react'), {
                    fallback: i.jsx(c('CometComposerPushPageGlimmer.react'), {
                      withPopover: !1,
                    }),
                    children: i.jsx(
                      c('ProfileCometLifeEventMigrationContext').Provider,
                      {
                        value: j,
                        children: i.jsx(
                          c(
                            'react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react',
                          ),
                          {
                            entryPoint: c(
                              'CometComposerLifeEventCategoryList.entrypoint',
                            ),
                            entryPointParams: {},
                            environmentProvider: f,
                            props: { onBackToComposer: a },
                          },
                        ),
                      },
                    ),
                  });
                },
                c('CometComposerAttachmentPluginTypes').LIFE_EVENT,
              );
              break;
            case l.SUBCATEGORY:
              e(
                n,
                function (a) {
                  var b = a.onReturn;
                  return i.jsx(c('CometPlaceholder.react'), {
                    fallback: i.jsx(c('CometComposerPushPageGlimmer.react'), {
                      withPopover: !1,
                    }),
                    children: i.jsx(
                      c('ProfileCometLifeEventMigrationContext').Provider,
                      {
                        value: j,
                        children: i.jsx(
                          c(
                            'react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react',
                          ),
                          {
                            entryPoint: c(
                              'CometComposerLifeEventSubcategoryList.entrypoint',
                            ),
                            entryPointParams: {},
                            environmentProvider: f,
                            props: {
                              onBackToComposer: function () {
                                return b({ index: 0 });
                              },
                            },
                          },
                        ),
                      },
                    ),
                  });
                },
                c('CometComposerAttachmentPluginTypes').LIFE_EVENT,
              );
              break;
            case l.ATTACHMENT_FORM:
              g({ type: 'SAVE_CURRENT_STATE' });
              e(
                n,
                function (a) {
                  a = a.onReturn;
                  return i.jsx(c('CometPlaceholder.react'), {
                    fallback: i.jsx(c('CometComposerPushPageGlimmer.react'), {
                      withPopover: !1,
                    }),
                    children: i.jsx(
                      c('ProfileCometLifeEventMigrationContext').Provider,
                      {
                        value: j,
                        children: i.jsxs(
                          c('ProfileCometLifeEventEditMediaContext').Provider,
                          {
                            value: m,
                            children: [
                              i.jsx(k, {}),
                              i.jsx(
                                c(
                                  'CometComposerLifeEventsFormDoneButton.react',
                                ),
                                { onReturn: a },
                              ),
                            ],
                          },
                        ),
                      },
                    ),
                  });
                },
                c('CometComposerAttachmentPluginTypes').LIFE_EVENT,
                o,
              );
              break;
          }
        },
        [d, b, e, g, a, f],
      );
    }
    g.MleStep = l;
    g.useCometComposerPushMLEPage = a;
  },
  98,
);
__d(
  'CometComposerLifeEventSprout.react',
  [
    'fbt',
    'ix',
    'CometComposerAttachmentPluginTypes',
    'CometComposerLifeEventSprout_sprout.graphql',
    'CometComposerSproutButton.react',
    'RelayHooks',
    'react',
    'useCometComposerPushMLEPage',
    'withComposerViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react');
    function a(a) {
      var e = a.activeAttachmentType;
      a = a.sprout;
      a = d('RelayHooks').useFragment(
        j !== void 0
          ? j
          : (j = b('CometComposerLifeEventSprout_sprout.graphql')),
        a,
      );
      var f = d('useCometComposerPushMLEPage').useCometComposerPushMLEPage(
        d('useCometComposerPushMLEPage').MleStep.CATEGORY,
      );
      return k.jsx(c('CometComposerSproutButton.react'), {
        activeColor: 'var(--fds-spectrum-seafoam-tint-70)',
        icon: i('1166459'),
        isActive: e === c('CometComposerAttachmentPluginTypes').LIFE_EVENT,
        label: h._('__JHASH__-WxkhdUepTv__JHASH__'),
        onClick: f,
        pluginName: c('CometComposerAttachmentPluginTypes').LIFE_EVENT,
        sprout: a,
        sproutName: 'LIFE_EVENT',
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withComposerViewStatePart')(a, function (a) {
      return {
        activeAttachmentType:
          (a = a.attachmentArea) == null ? void 0 : a.activeAttachmentType,
      };
    });
    g['default'] = e;
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'CometVideoHomeRootProviderQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '8099333720109156';
  },
  null,
);
__d(
  'CometVideoHomeRootProviderQuery$Parameters',
  ['CometVideoHomeRootProviderQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('CometVideoHomeRootProviderQuery_facebookRelayOperation'),
        metadata: {},
        name: 'CometVideoHomeRootProviderQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometVideoHomeSurfaceHighlightsWrapperQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5540203202762428';
  },
  null,
);
__d(
  'CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters',
  ['CometVideoHomeSurfaceHighlightsWrapperQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometVideoHomeSurfaceHighlightsWrapperQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometVideoHomeSurfaceHighlightsWrapperQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometVideoHomeFeedRootQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5872249496131515';
  },
  null,
);
__d(
  'CometVideoHomeFeedRootQuery$Parameters',
  [
    'CometVideoHomeFeedRootQuery_facebookRelayOperation',
    'StoriesRing.relayprovider',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('CometVideoHomeFeedRootQuery_facebookRelayOperation'),
        metadata: {},
        name: 'CometVideoHomeFeedRootQuery',
        operationKind: 'query',
        text: null,
        providedVariables: {
          __relay_internal__pv__StoriesRingrelayprovider: b(
            'StoriesRing.relayprovider',
          ),
        },
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometVideoHomeLOEExploreLeftRailSectionQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5964852866867127';
  },
  null,
);
__d(
  'CometVideoHomeLOEExploreLeftRailSectionQuery$Parameters',
  ['CometVideoHomeLOEExploreLeftRailSectionQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometVideoHomeLOEExploreLeftRailSectionQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometVideoHomeLOEExploreLeftRailSectionQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometVideoHomeLeftRailWatchlistQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '7426554887416319';
  },
  null,
);
__d(
  'CometVideoHomeLeftRailWatchlistQuery$Parameters',
  ['CometVideoHomeLeftRailWatchlistQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('CometVideoHomeLeftRailWatchlistQuery_facebookRelayOperation'),
        metadata: {},
        name: 'CometVideoHomeLeftRailWatchlistQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometVideoHomeTopNavPillsHeaderRootQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5073893302721247';
  },
  null,
);
__d(
  'CometVideoHomeTopNavPillsHeaderRootQuery$Parameters',
  ['CometVideoHomeTopNavPillsHeaderRootQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometVideoHomeTopNavPillsHeaderRootQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometVideoHomeTopNavPillsHeaderRootQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'PrivacySelectorRenderLocation.facebook',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum').Mirrored([
      'ABOUT_PAGE_COLLECTIONS',
      'ABOUT_PAGE_LARGE',
      'ABOUT_PAGE_SMALL',
      'ACTIVITY_LOG',
      'APPS_STEP_PRIVACY_CHECKUP',
      'APP_CENTER_GDP',
      'APP_SETTINGS_DIALOG',
      'AUDIENCE_WIDGET_MIGRATION_DO_NOT_USE',
      'BIZWEB_HOME_AD_PREVIEW',
      'BIZWEB_HOME_CARDS',
      'BIZWEB_SELF_VIEW',
      'BIZ_TAGGED_CONTENT_TAB',
      'BK_COMMUNITY_HELP_DRIVE_COMPOSER',
      'BK_ECM',
      'BK_MSGR_PUBLIC_CHAT_SHARE_COMPOSER',
      'BK_PC_FRIEND_LIST_VISIBILITY_CONTROL',
      'BK_PRIVACY_CENTER',
      'BUSINESS_CM_FEED_VIEW',
      'BUSINESS_COMMENT_INBOX_TAB',
      'CLIPPING_DIALOG',
      'COLLECTION_CREATE',
      'COMET_ALBUM',
      'COMET_AUTHENTICITY_WIZARD',
      'COMET_COMPOSER',
      'COMET_CORONAVIRUS_HUB',
      'COMET_DEFAULT_PRIVACY_NUX',
      'COMET_DONATION_CHECKOUT',
      'COMET_EVENTS_POE_PURCHASE_SUCCESS',
      'COMET_EVENTS_RSVP',
      'COMET_GAMING_FEED',
      'COMET_GROUPS_COMMUNITY_HELP_HUB',
      'COMET_GROUPS_REELS_COMPOSER',
      'COMET_GROUPS_WEEKLY_ANALYTICS_NOTIF_LANDING_DIALOG',
      'COMET_INSTANT_GAMES_GAME_SHARE_DIALOG',
      'COMET_INSTANT_GAMES_TOURNAMENT_DIALOG',
      'COMET_JOBS_APPLICATION_FORM',
      'COMET_LIFE_EVENTS_COMPOSER',
      'COMET_LWI_EDIT_BOOST_POST',
      'COMET_LWI_POST_DIALOG',
      'COMET_MANAGE_ACTIVITY_BULK_EDIT_CONTENT',
      'COMET_MEDIA_VIEWER',
      'COMET_NEW_SURFACE_ADS',
      'COMET_OAUTH_DIALOG',
      'COMET_PAGE_BUSINESS_MEMORIES',
      'COMET_PAGE_CARDS',
      'COMET_PAYCHECK_PROTECTION_PROGRAM',
      'COMET_PHOTO_REVIEW',
      'COMET_PHOTO_REVIEW_FACEREC_SETTINGS',
      'COMET_POSTS_SHARED_BY_META',
      'COMET_POST_INSIGHTS',
      'COMET_PRIVACY_CENTER',
      'COMET_PRIVACY_CHECKUP',
      'COMET_PRIVACY_CHECKUP_FACEREC',
      'COMET_PROFILE_ABOUT_PAGE',
      'COMET_PROFILE_ABOUT_PAGE_INLINE',
      'COMET_PROFILE_COLLECTIONS',
      'COMET_PROFILE_EDIT_PRIVACY_DIALOG',
      'COMET_PROFILE_FRIENDS_LIST',
      'COMET_PROFILE_INTRO_EDIT_DIALOG',
      'COMET_PROFILE_NUX',
      'COMET_PROFILE_TRIBUTE_SETTINGS',
      'COMET_PRO_DASH_OVERVIEW',
      'COMET_RACIAL_JUSTICE_HUB',
      'COMET_REELS_COMPOSER',
      'COMET_REELS_SETTINGS',
      'COMET_REELS_VIDEO_DEEP_DIVE',
      'COMET_ROOMS_TO_LIVE',
      'COMET_SETTING_APPS_AND_WEBSITES',
      'COMET_SETTING_TIMELINE',
      'COMET_SHARE_DIALOG',
      'COMET_STORY_EDIT_COMPOSER',
      'COMET_STORY_MENU',
      'COMET_STREAM',
      'COMET_UI_DOCS_EXAMPLE',
      'COMET_USF_SETTING',
      'COMET_VOLUNTEERING_SIGN_UP',
      'COMPOSER',
      'COMPOSER_PRIVACY_CHECKUP',
      'COMPOSER_WITH_ALBUM_SELECTOR',
      'CREATOR_STUDIO_INSPIRATION_HUB',
      'CREATOR_STUDIO_VIDEO_COLLABORATION',
      'DEFAULT_MARKETING_PAGE',
      'DEFAULT_PRIVACY_SETTINGS_MENU',
      'EDIT_ALBUM_PAGE',
      'EDIT_NOTE',
      'EDIT_POST',
      'ENT_MUTATOR_VALIDATION',
      'EVENTS_BOOKMARK',
      'EVENTS_COMPOSER',
      'EVENTS_NEWS_FEED',
      'EVENTS_NEWS_FEED_BOTTOM_SHEET',
      'EVENTS_NT_BUTTONS',
      'EVENTS_PAGE_CALENDAR',
      'EVENTS_PAY_TO_ACCESS_PURCHASE_FLOW',
      'EVENTS_PERMALINK',
      'FBLITE_ACTIVITY_LOG',
      'FBLITE_COMPOSER',
      'FBLITE_CREATE_ALBUM',
      'FBLITE_CRISIS_COMPOSER',
      'FBLITE_DESTINATION_PICKER_FOR_COMPOSER',
      'FBLITE_EVENTS_PERMALINK',
      'FBLITE_FEED',
      'FBLITE_JOBS_PROFILE',
      'FBLITE_LIFE_EVENT_COMPOSER',
      'FBLITE_MARKETPLACE_COMPOSER',
      'FBLITE_NEARBY_FRIENDS',
      'FBLITE_PAGE_REVIEW_COMPOSER',
      'FBLITE_PRIVACY_CHECKUP',
      'FBLITE_PRIVACY_SETTINGS',
      'FBLITE_PROFILE_EXPERIENCE',
      'FBLITE_PROFILE_PLACES_LIVED',
      'FBLITE_PROFILE_RELATIONSHIP',
      'FBLITE_PROFILE_WIZARD',
      'FBLITE_RESHARE_COMPOSER',
      'FBLITE_TIMELINE_TAGGING_SETTINGS',
      'FRIEND_LIST_FILTER_SETTINGS',
      'FRIEND_LIST_SETTINGS',
      'FUNDRAISER_FOR_STORY_DONATION',
      'FUNDRAISER_WITH_PARENT_CONTAINER',
      'GEMINI_REPORTED_CONTENT_ADMIN_PAGE',
      'GENERIC_PRIVACY_CHECKUP',
      'HELP_CENTER_SETTING',
      'INTERN_PRIVACY_SELECTOR_TOOL',
      'INTERN_REACT_PAGE',
      'IOS_ALBUM',
      'IOS_COMPOSER',
      'IOS_EDIT_EVENT_PRIVACY',
      'IOS_EDIT_PHOTO_PRIVACY',
      'IOS_EDIT_PRIVACY',
      'IOS_LIVE_VIDEO_END',
      'IOS_LIVE_VIDEO_SHARE_SHEET',
      'IOS_NEARBY_FIRENDS',
      'IOS_PAGE_RECOMMENDATION',
      'IOS_QUICK_SHARE_SHEET',
      'IOS_SHARE_SHEET',
      'LIFE_EVENT_DIALOG',
      'LIGHTWEIGHT_STATUS_COMPOSER',
      'LIKE_FLYOUT',
      'LIVE_VIDEO_BROADCAST',
      'LIVING_ROOM_TAHOE_INVITE_DIALOG',
      'LOGIN_ALERTS',
      'MAKE_SHARED_ALBUM',
      'MAP_CALLOUT',
      'MBASIC_POST_AUDIENCE_SELECTOR',
      'MEDIA_MANAGER_INSIGHTS_BENCHMARKING_TRENDING_POSTS',
      'MEDIA_MANAGER_POSTS_TIMELINE',
      'MISINFORMATION_FACT_CHECKER_APP',
      'MISINFORMATION_HELPFUL_COMMENTS_APP',
      'MOBILE_APP_SETTINGS_DIALOG',
      'MOBILE_FUNDRAISER_FOR_STORY_DONATION',
      'MOBILE_FUNDRAISER_WITH_PARENT_CONTAINER',
      'MOBILE_PHOTOS_EDIT_PHOTO',
      'MOBILE_PHOTO_ALBUM',
      'MOBILE_POP_FLYOUT',
      'MOBILE_POP_SELECTOR',
      'MOBILE_SETTINGS',
      'MOBILE_SHARED_PHOTO_ALBUM',
      'MOBILE_TAG_REVIEW',
      'MOBILE_TIMELINE_REVIEW',
      'MTOUCH_COMPOSER',
      'MTOUCH_COMPOSER_NO_RECENT',
      'MTOUCH_SOCIAL_WIFI_CAPTIVE_PORTAL',
      'NOTES_CAMPFIRE',
      'NT_CAPTIVE_PORTAL',
      'NT_CYMH_BOTTOM_SHEET',
      'NT_INSTANT_GAMES_TOURNAMENT_COMPOSER',
      'NT_INTERNAL_PRIVACY_SELECTOR_CONTROLLER',
      'NT_PRIVACY_EDUCATION',
      'NT_SOUNDBITES_METADATA_EDITOR',
      'NT_VOLUNTEERING_EVENT_DETAILS',
      'NT_VOLUNTEERING_SIGNUP_COMPOSER',
      'NUX_WIZARD',
      'OAUTH_DIALOG',
      'PAGE_COMPOSER',
      'PHOTOS_BROWSE',
      'PHOTOS_PERMALINK',
      'PHOTOS_SET_COMMENTS',
      'PHOTOS_SNOWLIFT',
      'PHOTO_ALBUM_EDITOR',
      'PHOTO_ALBUM_GRID',
      'PHOTO_ALBUM_PAGE',
      'PHOTO_ALBUM_PAGE_REDESIGN',
      'PHOTO_REVIEW',
      'PLATFORM_PERMISSIONS_DIALOG',
      'PRIVACY_LITE',
      'PRIVACY_SETTINGS_COMPOSER_PREVIEW',
      'PRIVACY_USER_ACTIVITY_INSIGHTS',
      'PROFILE_PHOTO_CHECKUP',
      'PROFILE_SECTION_DIALOG_LARGE',
      'PROFILE_SECTION_DIALOG_SMALL',
      'PROFILE_STEP_PRIVACY_CHECKUP',
      'PROFILE_TO_PAGE_LOCK_DOWN_ADMIN_PRIVACY_DIALOG',
      'RN_PROFILE_ABOUT',
      'SAVE_LIST',
      'SAY_THANKS',
      'SETTINGS',
      'SHARER',
      'SHARE_DIALOG',
      'SIMPLIFIED_ALBUM_CREATE',
      'STREAM',
      'TIMELINE',
      'TIMELINE_DONATION',
      'TIMELINE_INFO_REVIEW',
      'TIMELINE_REVIEW',
      'UNIT_TEST',
      'UNKNOWN__FIX_ME',
      'VIDEO_PLAYLIST',
      'VIDEO_UPLOAD',
      'WORK_PROFILE',
    ]);
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'CometVideoHomeCommonEntryPointVariables',
  ['WebPixelRatio'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      feedLocation: 'VIDEO_HOME_FEED',
      isComet: !0,
      privacySelectorRenderLocation: 'COMET_STREAM',
      renderLocation: 'video_home',
      scale: d('WebPixelRatio').get(),
      useDefaultActor: !1,
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeFeedEntryPointVariables',
  ['CometVideoHomeCommonEntryPointVariables', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = babelHelpers['extends'](
      {},
      c('CometVideoHomeCommonEntryPointVariables'),
      {
        aggregatedVIDs: [],
        caller: null,
        isLoggedOut: c('gkx')('976093'),
        isRelatedVideosQueryDeferred: !1,
        triggerData: { injected_video_id: null },
      },
    );
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeFeedRootBEOneAhead',
  ['JSResourceForInteraction'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    c('JSResourceForInteraction')('CometVideoHomeFeedRoot.react').__setRef(
      'CometVideoHomeFeedRootBEOneAhead',
    );
    a = null;
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeRootBEOneAhead',
  ['JSResourceForInteraction'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    c('JSResourceForInteraction')('CometVideoHomeRoot.react').__setRef(
      'CometVideoHomeRootBEOneAhead',
    );
    a = null;
    g['default'] = a;
  },
  98,
);
__d(
  'buildCometVideoHomeRouteForResource.entrypoint',
  [
    'CometVideoHomeLOEExploreLeftRailSectionQuery$Parameters',
    'CometVideoHomeLeftRailWatchlistQuery$Parameters',
    'CometVideoHomeRootProviderQuery$Parameters',
    'CometVideoHomeTopNavPillsHeaderRootQuery$Parameters',
    'WebPixelRatio',
    'cr:1714517',
    'createContentAreaCompoundEntryPointBuilder',
    'gkx',
    'qex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b('cr:1714517');
    function a(a) {
      return c('createContentAreaCompoundEntryPointBuilder')(a, function (a) {
        a = {
          rootProviderQueryReference: {
            parameters: b('CometVideoHomeRootProviderQuery$Parameters'),
            variables: {},
          },
        };
        c('gkx')('976093') || c('gkx')('2580')
          ? (a = babelHelpers['extends']({}, a, {
              exploreQueryReference: {
                parameters: b(
                  'CometVideoHomeLOEExploreLeftRailSectionQuery$Parameters',
                ),
                variables: {},
              },
            }))
          : (a = babelHelpers['extends']({}, a, {
              watchlistSettingsQueryReference: {
                parameters: b(
                  'CometVideoHomeLeftRailWatchlistQuery$Parameters',
                ),
                variables: { scale: d('WebPixelRatio').get() },
              },
            }));
        (c('gkx')('3048') ||
          !!c('qex')._('516') ||
          (c('gkx')('976093') && !!c('qex')._('530'))) &&
          (a = babelHelpers['extends']({}, a, {
            stickyHeaderKeywordsQueryReference: {
              parameters: b(
                'CometVideoHomeTopNavPillsHeaderRootQuery$Parameters',
              ),
              variables: {},
            },
          }));
        return a;
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'buildCometVideoHomeRoute.entrypoint',
  [
    'JSResourceForInteraction',
    'buildCometVideoHomeRouteForResource.entrypoint',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = c('buildCometVideoHomeRouteForResource.entrypoint')(
      c('JSResourceForInteraction')('CometVideoHomeRoot.react').__setRef(
        'buildCometVideoHomeRoute.entrypoint',
      ),
    );
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeFeedRoot.entrypoint',
  [
    'CometVideoHomeFeedEntryPointVariables',
    'CometVideoHomeFeedRootQuery$Parameters',
    'CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters',
    'JSResourceForInteraction',
    'buildCometVideoHomeRoute.entrypoint',
    'cr:1714516',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b('cr:1714516');
    a = c('buildCometVideoHomeRoute.entrypoint')(
      c('JSResourceForInteraction')('CometVideoHomeFeedRoot.react').__setRef(
        'CometVideoHomeFeedRoot.entrypoint',
      ),
      function (a) {
        return {
          queries: {
            feedRootQueryReference: {
              options: { fetchPolicy: 'network-only' },
              parameters: b('CometVideoHomeFeedRootQuery$Parameters'),
              variables: c('CometVideoHomeFeedEntryPointVariables'),
            },
            surfaceHighlightsQueryReference: {
              parameters: b(
                'CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters',
              ),
              variables: {},
            },
          },
        };
      },
    );
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoHomeNewPermalinkHeroUnitQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5925800387501611';
  },
  null,
);
__d(
  'CometVideoHomeRHCRootQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5786162651478789';
  },
  null,
); /*FB_PKG_DELIM*/
__d(
  'CometPrivacySelectorForScope_scope.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
        {
          kind: 'Variable',
          name: 'renderLocation',
          variableName: 'renderLocation',
        },
      ];
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: 'LocalArgument', name: 'renderLocation' },
          { defaultValue: null, kind: 'LocalArgument', name: 'tags' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'CometPrivacySelectorForScope_scope',
        selections: [
          {
            alias: null,
            args: [
              {
                kind: 'Literal',
                name: 'supported',
                value: [
                  'PrivacyScopeEditableRenderer',
                  'PrivacyScopeUneditableRenderer',
                ],
              },
            ],
            concreteType: null,
            kind: 'LinkedField',
            name: 'privacy_scope_renderer',
            plural: !1,
            selections: [
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    args: a,
                    documentName: 'CometPrivacySelectorForScope_scope',
                    fragmentName: 'CometPrivacySelectorEditable_renderer',
                    fragmentPropName: 'renderer',
                    kind: 'ModuleImport',
                  },
                ],
                type: 'PrivacyScopeEditableRenderer',
                abstractKey: null,
              },
              {
                kind: 'InlineFragment',
                selections: [
                  {
                    args: a,
                    documentName: 'CometPrivacySelectorForScope_scope',
                    fragmentName: 'CometPrivacySelectorUneditable_renderer',
                    fragmentPropName: 'renderer',
                    kind: 'ModuleImport',
                  },
                ],
                type: 'PrivacyScopeUneditableRenderer',
                abstractKey: null,
              },
              {
                args: null,
                kind: 'FragmentSpread',
                name: 'useCometPrivacySelectorEntryPointTestID_renderer',
              },
            ],
            storageKey:
              'privacy_scope_renderer(supported:["PrivacyScopeEditableRenderer","PrivacyScopeUneditableRenderer"])',
          },
        ],
        type: 'PrivacyScope',
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null,
);
__d(
  'CometPrivacySelectorPickerContainerQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5039240932774775';
  },
  null,
);
__d(
  'CometPrivacySelectorPickerContainerQuery$Parameters',
  ['CometPrivacySelectorPickerContainerQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometPrivacySelectorPickerContainerQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometPrivacySelectorPickerContainerQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'useCometPrivacySelectorCanOpenSelector_scope.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometPrivacySelectorCanOpenSelector_scope',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'can_viewer_edit',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'privacy_write_id',
          storageKey: null,
        },
      ],
      type: 'PrivacyScope',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useCometPrivacySelectorDialog_scope.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometPrivacySelectorDialog_scope',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useCometPrivacySelectorCanOpenSelector_scope',
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'privacy_write_id',
          storageKey: null,
        },
      ],
      type: 'PrivacyScope',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useCometPrivacySelectorEntryPointTestID_renderer.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometPrivacySelectorEntryPointTestID_renderer',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
      ],
      type: 'PrivacySelectorRenderer',
      abstractKey: '__isPrivacySelectorRenderer',
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometPrivacySelectorPickerContainer.entrypoint',
  [
    'CometPrivacySelectorPickerContainerQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var b = a.localPrivacyRow,
          e = a.privacyWriteID,
          f = a.renderLocation;
        a = a.tags;
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: 'store-and-network' },
              parameters: c(
                'CometPrivacySelectorPickerContainerQuery$Parameters',
              ),
              variables: {
                localPrivacyRow: b,
                privacyWriteID: e,
                renderLocation: f,
                scale: d('WebPixelRatio').get(),
                tags: a,
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometPrivacySelectorPickerContainer.react',
      ).__setRef('CometPrivacySelectorPickerContainer.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometPrivacySelectorDialog.entrypoint',
  [
    'CometPrivacySelectorPickerContainer.entrypoint',
    'JSResourceForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        return {
          entryPoints: {
            containerEntryPoint: {
              entryPoint: b('CometPrivacySelectorPickerContainer.entrypoint'),
              entryPointParams: a,
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometPrivacySelectorDialog.react',
      ).__setRef('CometPrivacySelectorDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometPrivacySelectorContextInitialState',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = { localPrivacyRow: null };
    f['default'] = a;
  },
  66,
);
__d(
  'CometPrivacySelectorContext',
  ['CometPrivacySelectorContextInitialState', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = function () {};
    e = a.createContext([c('CometPrivacySelectorContextInitialState'), b]);
    g['default'] = e;
  },
  98,
);
__d(
  'CometPrivacySelectorContextWrapper',
  [
    'CometPrivacySelectorContext',
    'CometPrivacySelectorContextInitialState',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useReducer;
    function k(a, b) {
      var c = b.type;
      switch (c) {
        case 'setLocalPrivacyRow':
          return { localPrivacyRow: b.localPrivacyRow };
        default:
          return a;
      }
    }
    function a(a) {
      var b;
      b = j(
        k,
        (b = a.initialState) != null
          ? b
          : c('CometPrivacySelectorContextInitialState'),
      );
      var d = b[0],
        e = b[1];
      b = i(
        function () {
          var b;
          return [
            (b = a.state) != null ? b : d,
            (b = a.dispatch) != null ? b : e,
          ];
        },
        [a.dispatch, a.state, d],
      );
      return h.jsx(c('CometPrivacySelectorContext').Provider, {
        value: b,
        children: a.children,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useCometPrivacySelectorEntryPointTestID',
  [
    'CometRelay',
    'react',
    'useCometPrivacySelectorEntryPointTestID_renderer.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useMemo;
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useCometPrivacySelectorEntryPointTestID_renderer.graphql')),
        a,
      );
      var c = a.id;
      return i(
        function () {
          if (c == null) return void 0;
          try {
            var a;
            a =
              (a = JSON.parse(
                (a = atob(c)) == null ? void 0 : a.substring(23),
              )) == null
                ? void 0
                : a.id;
            return a == null ? void 0 : 'privacy_selector_' + a;
          } catch (a) {
            return void 0;
          }
        },
        [c],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometPrivacySelectorForScope.react',
  [
    'CometPrivacySelectorContextWrapper',
    'CometPrivacySelectorForScope_scope.graphql',
    'CometRelay',
    'react',
    'unrecoverableViolation',
    'useCometPrivacySelectorEntryPointTestID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = d('react').useMemo;
    function a(a) {
      var e = a.isFullWidth;
      e = e === void 0 ? !1 : e;
      var f = a.localPrivacyRow,
        g = a.plugins,
        k = a.scope;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'isFullWidth',
        'localPrivacyRow',
        'plugins',
        'scope',
      ]);
      k = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('CometPrivacySelectorForScope_scope.graphql')),
        k,
      );
      if (k == null)
        throw c('unrecoverableViolation')(
          'CometPrivacySelectorForScope did not receive a PrivacyScope',
          'comet_privacy_selector',
        );
      var l = k.privacy_scope_renderer;
      if (l == null)
        throw c('unrecoverableViolation')(
          'CometPrivacySelectorForScope did not receive a PrivacyScopeRenderer',
          'comet_privacy_selector',
        );
      l = c('useCometPrivacySelectorEntryPointTestID')(l);
      l = j(
        function () {
          return { localPrivacyRow: f };
        },
        [f],
      );
      return i.jsx('div', {
        className: 'x6s0dn4 xl56j7k' + (e ? ' x78zum5' : ' x3nfvp2'),
        'data-testid': void 0,
        children: i.jsxs(c('CometPrivacySelectorContextWrapper'), {
          initialState: l,
          children: [
            i.jsx(d('CometRelay').MatchContainer, {
              match: k.privacy_scope_renderer,
              props: babelHelpers['extends']({}, a, {
                renderer: k.privacy_scope_renderer,
              }),
            }),
            g,
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = i.memo(a);
    g['default'] = e;
  },
  98,
);
__d(
  'useCometPrivacySelectorCanOpenSelector',
  [
    'CometRelay',
    'killswitch',
    'recoverableViolation',
    'useCometPrivacySelectorCanOpenSelector_scope.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useCometPrivacySelectorCanOpenSelector_scope.graphql')),
        a,
      );
      a = (a = a) != null ? a : {};
      var e = a.can_viewer_edit;
      a = a.privacy_write_id;
      if (c('killswitch')('COMET_PRIVACY_SELECTOR_EDITABLE_DISABLED'))
        return !1;
      if (e == null && a == null) {
        c('recoverableViolation')(
          'Trying to load a Privacy Selector Dialog without a scope.',
          'comet_privacy_selector',
        );
        return !1;
      }
      if (e !== !0) {
        c('recoverableViolation')(
          'Trying to load a Privacy Selector Dialog for a non editable scope.',
          'comet_privacy_selector',
        );
        return !1;
      }
      if (a == null) {
        c('recoverableViolation')(
          'Trying to load a Privacy Selector Dialog with a missing write ID.',
          'comet_privacy_selector',
        );
        return !1;
      }
      return !0;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometPrivacySelectorDialog',
  [
    'CometPrivacySelectorDialog.entrypoint',
    'CometRelay',
    'JSResourceForInteraction',
    'qpl',
    'react',
    'useCometEntryPointDialog',
    'useCometInteractionTracing',
    'useCometPrivacySelectorCanOpenSelector',
    'useCometPrivacySelectorDialog_scope.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    e = d('react');
    var i = e.useCallback,
      j = e.useMemo,
      k = e.useRef,
      l = c('JSResourceForInteraction')(
        'CometPrivacySelectorDialog.react',
      ).__setRef('useCometPrivacySelectorDialog');
    function a(a, e, f, g, m) {
      var n;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useCometPrivacySelectorDialog_scope.graphql')),
        a,
      );
      var o = (n = a == null ? void 0 : a.privacy_write_id) != null ? n : '',
        p = k(null);
      n = c('useCometEntryPointDialog')(
        c('CometPrivacySelectorDialog.entrypoint'),
        {
          localPrivacyRow: f == null ? void 0 : f.localPrivacyRow,
          privacyWriteID: o,
          renderLocation: e.renderLocation,
          tags: e.tags,
        },
      );
      var q = n[0],
        r = c('useCometPrivacySelectorCanOpenSelector')(a),
        s = c('useCometInteractionTracing')(
          c('qpl')._(30605326, '2342'),
          'responsive',
          'INTERACTION',
        ),
        t = i(
          function () {
            if (o == null) return;
            var a = l.getModuleIfRequired() != null;
            s(function (b) {
              b.onComplete(function () {
                a && b.addMetadata('revisit', 1);
              }),
                q(
                  babelHelpers['extends']({}, e, {
                    dispatch: g,
                    privacyWriteID: o,
                    state: f,
                  }),
                  m,
                );
            });
          },
          [g, e, o, q, f, s],
        );
      return j(
        function () {
          return [r ? t : null, p];
        },
        [r, t, p],
      );
    }
    g['default'] = a;
  },
  98,
);
