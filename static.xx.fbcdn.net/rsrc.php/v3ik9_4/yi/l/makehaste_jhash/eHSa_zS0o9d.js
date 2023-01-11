/*FB_PKG_DELIM*/

__d(
  'CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer$normalization.graphql',
  [],
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
        b = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'encrypted_tracking',
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'encrypted_click_tracking',
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'click_tracking_linkshim_cb',
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'viewability_config',
          storageKey: null,
        },
        f = {
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
        g = [
          {
            kind: 'Variable',
            name: 'location',
            variableName: 'renderLocation',
          },
        ],
        h = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'height',
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'width',
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        k = [a, j],
        l = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'audio_availability',
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'uri',
          storageKey: null,
        },
        n = [m],
        o = {
          alias: null,
          args: null,
          concreteType: 'Image',
          kind: 'LinkedField',
          name: 'image',
          plural: !1,
          selections: n,
          storageKey: null,
        },
        p = [
          { kind: 'Literal', name: 'framework', value: 'WARNING_SCREENS' },
          {
            kind: 'Literal',
            name: 'location',
            value: 'fb_shorts_video_deep_dive',
          },
        ],
        q = [j],
        r = {
          kind: 'InlineFragment',
          selections: q,
          type: 'Node',
          abstractKey: '__isNode',
        },
        s = { kind: 'TypeDiscriminator', abstractKey: '__isActor' },
        t = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        u = { kind: 'Variable', name: 'scale', variableName: 'scale' },
        v = {
          alias: 'displayPicture',
          args: [
            { kind: 'Literal', name: 'height', value: 40 },
            u,
            { kind: 'Literal', name: 'width', value: 40 },
          ],
          concreteType: 'Image',
          kind: 'LinkedField',
          name: 'profile_picture',
          plural: !1,
          selections: n,
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'enable_reels_tab_deeplink',
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'is_verified',
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'url',
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'subscribe_status',
          storageKey: null,
        },
        A = {
          kind: 'InlineFragment',
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'username',
              storageKey: null,
            },
            y,
          ],
          type: 'InstagramUserV2',
          abstractKey: null,
        },
        B = {
          kind: 'InlineFragment',
          selections: [w, x, y],
          type: 'User',
          abstractKey: null,
        },
        C = {
          kind: 'InlineFragment',
          selections: [x, y],
          type: 'Page',
          abstractKey: null,
        },
        D = {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'owner',
          plural: !1,
          selections: k,
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'shareable_url',
          storageKey: null,
        },
        F = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'video_owner_type',
          storageKey: null,
        },
        G = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'description',
          storageKey: null,
        },
        H = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'label',
          storageKey: null,
        };
      m = [
        h,
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'scale',
          storageKey: null,
        },
        m,
        i,
      ];
      var I = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'tracking',
          storageKey: null,
        },
        J = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'text',
          storageKey: null,
        },
        K = {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'actors',
          plural: !0,
          selections: [a, t, j],
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          concreteType: 'Video',
          kind: 'LinkedField',
          name: 'video',
          plural: !1,
          selections: q,
          storageKey: null,
        },
        M = [
          {
            alias: null,
            args: g,
            concreteType: 'ShortFormVideoContext',
            kind: 'LinkedField',
            name: 'short_form_video_context',
            plural: !1,
            selections: [F, L],
            storageKey: null,
          },
          I,
        ],
        N = [
          {
            kind: 'Variable',
            name: 'use_default_actor',
            variableName: 'useDefaultActor',
          },
        ],
        O = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'count',
          storageKey: null,
        },
        P = [O],
        Q = [
          j,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'color',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'localized_name',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'accessibility_name',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'is_deprecated',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'reaction_type',
            storageKey: null,
          },
        ];
      return {
        kind: 'SplitOperation',
        metadata: {},
        name: 'CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer$normalization',
        selections: [
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
                  a,
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
                          b,
                          c,
                          d,
                          e,
                          f,
                          {
                            alias: null,
                            args: g,
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
                                name: 'playback_video',
                                plural: !1,
                                selections: [
                                  h,
                                  i,
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'length_in_second',
                                    storageKey: null,
                                  },
                                  j,
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
                                    selections: k,
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
                                    concreteType:
                                      'LivePlaybackInstrumentationConfigParams',
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
                                    args: [
                                      {
                                        kind: 'Literal',
                                        name: 'player_suborigin',
                                        value: 'fb_shorts_viewer',
                                      },
                                    ],
                                    kind: 'ScalarField',
                                    name: 'dash_prefetch_experimental',
                                    storageKey:
                                      'dash_prefetch_experimental(player_suborigin:"fb_shorts_viewer")',
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
                                    storageKey:
                                      'playable_url(scrubbing_preference:"MPEG_DASH")',
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
                                    args: [
                                      {
                                        kind: 'Literal',
                                        name: 'quality',
                                        value: 'HD',
                                      },
                                    ],
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
                                    name: 'is_gaming_video',
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
                                    concreteType:
                                      'VideoPlayerShakaPerformanceLoggerInit',
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
                                    alias:
                                      'video_player_shaka_performance_logger_init2',
                                    args: null,
                                    concreteType:
                                      'VideoPlayerShakaPerformanceLoggerInit',
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
                                        concreteType:
                                          'VideoHiveInitializationOptions',
                                        kind: 'LinkedField',
                                        name: 'hive_initialization_options',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType:
                                              'VideoHiveInitializationOptionHiveJava',
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
                                      j,
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
                                      j,
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType:
                                      'VideoBroadcastLowLatencyConfig',
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
                                  l,
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
                                        fragmentPropName:
                                          'sphericalVideoRenderer',
                                        kind: 'ModuleImport',
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    if: null,
                                    kind: 'Defer',
                                    label:
                                      'VideoPlayerRelay_video$defer$InstreamVideoAdBreaksPlayer_video',
                                    selections: [
                                      j,
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
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'VideoThumbnail',
                                    kind: 'LinkedField',
                                    name: 'preferred_thumbnail',
                                    plural: !1,
                                    selections: [
                                      o,
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'image_preview_payload',
                                        storageKey: null,
                                      },
                                      j,
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
                                    args: p,
                                    concreteType:
                                      'XFBVideoWarningScreenRenderer',
                                    kind: 'LinkedField',
                                    name: 'warning_screen_renderer',
                                    plural: !1,
                                    selections: [
                                      {
                                        args: null,
                                        documentName:
                                          'FBReelsCometVideoMedia_video',
                                        fragmentName:
                                          'FBReelsMediaWarningScreenRenderer_renderer',
                                        fragmentPropName: 'renderer',
                                        kind: 'ModuleImport',
                                      },
                                    ],
                                    storageKey:
                                      'warning_screen_renderer(framework:"WARNING_SCREENS",location:"fb_shorts_video_deep_dive")',
                                  },
                                  {
                                    alias: null,
                                    args: p,
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
                                        selections: [a, r],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey:
                                      'cix_screen(framework:"WARNING_SCREENS",location:"fb_shorts_video_deep_dive")',
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'video_owner',
                                plural: !1,
                                selections: [
                                  a,
                                  s,
                                  j,
                                  t,
                                  v,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [w, x, y, z],
                                    type: 'User',
                                    abstractKey: null,
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    selections: [x, y, z],
                                    type: 'Page',
                                    abstractKey: null,
                                  },
                                  A,
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'is_passive_content',
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
                                  j,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'video_collaborator',
                                    plural: !1,
                                    selections: [s, a, j, t, v, B, C],
                                    storageKey: null,
                                  },
                                  D,
                                  l,
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'FBShortsReshareContext',
                                kind: 'LinkedField',
                                name: 'fb_shorts_reshare_context',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'is_reshare',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'reshare_creator',
                                    plural: !1,
                                    selections: [a, s, j, t, B, C, A],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'FBShortsRemixInfo',
                                kind: 'LinkedField',
                                name: 'remix_info',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'is_remixable',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'status',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              E,
                              F,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ShortFormVideoSoundtrackInfo',
                                kind: 'LinkedField',
                                name: 'soundtrack_info',
                                plural: !1,
                                selections: [
                                  j,
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
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'track_title',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'music_album_art_uri',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'first_frame_thumbnail',
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'PrivacyScope',
                            kind: 'LinkedField',
                            name: 'privacy_scope',
                            plural: !1,
                            selections: [
                              G,
                              H,
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'display_label',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Image',
                                kind: 'LinkedField',
                                name: 'icon_image',
                                plural: !1,
                                selections: m,
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: [
                                  {
                                    kind: 'Literal',
                                    name: 'supported',
                                    value: 'PrivacyScopeEditableRenderer',
                                  },
                                ],
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'privacy_scope_renderer',
                                plural: !1,
                                selections: [
                                  a,
                                  {
                                    alias: null,
                                    args: [
                                      {
                                        kind: 'Literal',
                                        name: 'render_location',
                                        value: 'COMET_REELS_VIDEO_DEEP_DIVE',
                                      },
                                    ],
                                    concreteType: 'PrivacyScope',
                                    kind: 'LinkedField',
                                    name: 'privacy_scope_for_location',
                                    plural: !1,
                                    selections: [
                                      H,
                                      G,
                                      {
                                        alias: null,
                                        args: [u],
                                        concreteType: 'Image',
                                        kind: 'LinkedField',
                                        name: 'icon_image',
                                        plural: !1,
                                        selections: m,
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
                                        name: 'privacy_write_id',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey:
                                      'privacy_scope_for_location(render_location:"COMET_REELS_VIDEO_DEEP_DIVE")',
                                  },
                                  j,
                                ],
                                storageKey:
                                  'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")',
                              },
                            ],
                            storageKey: null,
                          },
                          I,
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'creation_time',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Feedback',
                            kind: 'LinkedField',
                            name: 'feedback',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Group',
                                kind: 'LinkedField',
                                name: 'associated_group',
                                plural: !1,
                                selections: [
                                  j,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'Group',
                                    kind: 'LinkedField',
                                    name: 'if_viewer_can_see_reel_group_attribution',
                                    plural: !1,
                                    selections: [
                                      a,
                                      j,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'Group',
                                        kind: 'LinkedField',
                                        name: 'if_viewer_can_see_reel_group_attribution',
                                        plural: !1,
                                        selections: [j, t],
                                        storageKey: null,
                                      },
                                      {
                                        alias: 'profilePicture36',
                                        args: [
                                          {
                                            kind: 'Literal',
                                            name: 'height',
                                            value: 36,
                                          },
                                          u,
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
                                        selections: n,
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'Group',
                                    kind: 'LinkedField',
                                    name: 'if_viewer_can_see_group_reels_music_pill',
                                    plural: !1,
                                    selections: k,
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              j,
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'BrandedContentPostInfo',
                            kind: 'LinkedField',
                            name: 'branded_content_post_info',
                            plural: !1,
                            selections: [
                              {
                                args: null,
                                documentName:
                                  'FBReelsMediaHeaderOwnerInfo_info',
                                fragmentName:
                                  'FBReelsMediaHeaderBrandedContentInfo_branded_content_post_info',
                                fragmentPropName: 'branded_content_post_info',
                                kind: 'ModuleImport',
                              },
                              j,
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'post_id',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'can_viewer_delete',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'can_viewer_cancel_collaboration_invite',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'can_viewer_remove_collaborator',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'can_viewer_see_collaboration_invite',
                            storageKey: null,
                          },
                          j,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'StorySaveInfo',
                            kind: 'LinkedField',
                            name: 'save_info',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'viewer_save_state',
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'to',
                            plural: !1,
                            selections: k,
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Video',
                            kind: 'LinkedField',
                            name: 'video',
                            plural: !1,
                            selections: [j, D],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'collaborator_or_invitees',
                            plural: !0,
                            selections: k,
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'can_viewer_remove_self_as_collaborator',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'serialized_frtp_identifiers',
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
                            concreteType: 'Viewer',
                            kind: 'LinkedField',
                            name: 'viewer',
                            plural: !1,
                            selections: [
                              {
                                alias: 'enable_group_contextual_profile_pic',
                                args: [
                                  {
                                    kind: 'Literal',
                                    name: 'boolean_param',
                                    value: 'profile_pic_pathing',
                                  },
                                  {
                                    kind: 'Literal',
                                    name: 'log_exposure',
                                    value: !1,
                                  },
                                  {
                                    kind: 'Literal',
                                    name: 'universe',
                                    value: 'group_reels_reshare_vdd_pathing',
                                  },
                                ],
                                concreteType: 'Viewer',
                                kind: 'LinkedField',
                                name: 'if_qe',
                                plural: !1,
                                selections: [a],
                                storageKey:
                                  'if_qe(boolean_param:"profile_pic_pathing",log_exposure:false,universe:"group_reels_reshare_vdd_pathing")',
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'actor',
                                plural: !1,
                                selections: [
                                  j,
                                  a,
                                  {
                                    alias: null,
                                    args: [
                                      {
                                        kind: 'Literal',
                                        name: 'height',
                                        value: 24,
                                      },
                                      u,
                                      {
                                        kind: 'Literal',
                                        name: 'width',
                                        value: 24,
                                      },
                                    ],
                                    concreteType: 'Image',
                                    kind: 'LinkedField',
                                    name: 'profile_picture',
                                    plural: !1,
                                    selections: n,
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
                            concreteType: 'TextWithEntities',
                            kind: 'LinkedField',
                            name: 'message',
                            plural: !1,
                            selections: [
                              J,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'EntityAtRange',
                                kind: 'LinkedField',
                                name: 'ranges',
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'offset',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'length',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'entity',
                                    plural: !1,
                                    selections: [
                                      a,
                                      {
                                        kind: 'InlineFragment',
                                        selections: [j, y],
                                        type: 'Hashtag',
                                        abstractKey: null,
                                      },
                                      r,
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          K,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'XFBBloksBannerAds',
                            kind: 'LinkedField',
                            name: 'banner_ads_overlay',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'is_available',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Story',
                                kind: 'LinkedField',
                                name: 'content_story',
                                plural: !1,
                                selections: [
                                  K,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'SponsoredData',
                                    kind: 'LinkedField',
                                    name: 'sponsored_data',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'ad_id',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
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
                                        name: 'action_links',
                                        plural: !0,
                                        selections: [a, y],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'TextWithEntities',
                                        kind: 'LinkedField',
                                        name: 'description',
                                        plural: !1,
                                        selections: [J],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'media',
                                        plural: !1,
                                        selections: [
                                          a,
                                          o,
                                          r,
                                          {
                                            kind: 'InlineFragment',
                                            selections: q,
                                            type: 'DynamicFeedAdAttachmentMedia',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: q,
                                            type: 'GenericAttachmentMedia',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: q,
                                            type: 'MontageImage',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: q,
                                            type: 'MontageVideo',
                                            abstractKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  d,
                                  c,
                                  b,
                                  e,
                                  f,
                                  j,
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            if: null,
                            kind: 'Defer',
                            label:
                              'FBReelsMediaHeaderOwnerInfo_info$defer$useFBReelsAggregationPageLogger_story',
                            selections: M,
                          },
                          {
                            if: null,
                            kind: 'Defer',
                            label:
                              'FBReelsSelfReelsProfilePhoto_viewer$defer$useFBReelsAggregationPageLogger_story',
                            selections: M,
                          },
                          {
                            if: null,
                            kind: 'Defer',
                            label:
                              'CometFeedStoryFBReelsAttachment_story$defer$FBReelsFeedbackBar_feedback',
                            selections: [
                              j,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Video',
                                kind: 'LinkedField',
                                name: 'video',
                                plural: !1,
                                selections: [
                                  j,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'Video',
                                    kind: 'LinkedField',
                                    name: 'if_viewer_can_see_stars_on_reels_for_comet',
                                    plural: !1,
                                    selections: [
                                      {
                                        args: null,
                                        documentName:
                                          'FBReelsFeedbackBar_feedback_starButton',
                                        fragmentName:
                                          'FBReelsFeedbackStarButton_feedback',
                                        fragmentPropName: 'feedback',
                                        kind: 'ModuleImport',
                                      },
                                      j,
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: g,
                                concreteType: 'ShortFormVideoContext',
                                kind: 'LinkedField',
                                name: 'short_form_video_context',
                                plural: !1,
                                selections: [F, L, E],
                                storageKey: null,
                              },
                              I,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'Feedback',
                                kind: 'LinkedField',
                                name: 'feedback',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: N,
                                    concreteType: 'FeedbackReactionInfo',
                                    kind: 'LinkedField',
                                    name: 'viewer_feedback_reaction_info',
                                    plural: !1,
                                    selections: [
                                      j,
                                      {
                                        alias: null,
                                        args: [
                                          {
                                            kind: 'Literal',
                                            name: 'height',
                                            value: 18,
                                          },
                                          u,
                                          {
                                            kind: 'Literal',
                                            name: 'width',
                                            value: 18,
                                          },
                                        ],
                                        concreteType: 'Image',
                                        kind: 'LinkedField',
                                        name: 'face_image',
                                        plural: !1,
                                        selections: n,
                                        storageKey: null,
                                      },
                                      {
                                        alias: 'small_face_image',
                                        args: [
                                          {
                                            kind: 'Literal',
                                            name: 'height',
                                            value: 16,
                                          },
                                          u,
                                          {
                                            kind: 'Literal',
                                            name: 'width',
                                            value: 16,
                                          },
                                        ],
                                        concreteType: 'Image',
                                        kind: 'LinkedField',
                                        name: 'face_image',
                                        plural: !1,
                                        selections: n,
                                        storageKey: null,
                                      },
                                      {
                                        alias: 'large_face_image',
                                        args: [
                                          {
                                            kind: 'Literal',
                                            name: 'height',
                                            value: 39,
                                          },
                                          u,
                                          {
                                            kind: 'Literal',
                                            name: 'width',
                                            value: 39,
                                          },
                                        ],
                                        concreteType: 'Image',
                                        kind: 'LinkedField',
                                        name: 'face_image',
                                        plural: !1,
                                        selections: n,
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  j,
                                  {
                                    alias: null,
                                    args: N,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'viewer_actor',
                                    plural: !1,
                                    selections: k,
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'Feedback',
                                    kind: 'LinkedField',
                                    name: 'if_viewer_can_use_group_custom_reactions_beta',
                                    plural: !1,
                                    selections: [
                                      {
                                        args: null,
                                        documentName:
                                          'CometUFIReactionsMenu_feedback',
                                        fragmentName:
                                          'CometUFIReactionsMenuDynamicBeta_feedback',
                                        fragmentPropName: 'feedback',
                                        kind: 'ModuleImport',
                                      },
                                      j,
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'Feedback',
                                    kind: 'LinkedField',
                                    name: 'if_viewer_cannot_use_group_custom_reactions_beta',
                                    plural: !1,
                                    selections: [
                                      {
                                        args: null,
                                        documentName:
                                          'CometUFIReactionsMenu_feedback__cannot_use_group_custom_reactions_beta',
                                        fragmentName:
                                          'CometUFIReactionsMenuClassic_feedback',
                                        fragmentPropName: 'feedback',
                                        kind: 'ModuleImport',
                                      },
                                      j,
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'Video',
                                    kind: 'LinkedField',
                                    name: 'associated_video',
                                    plural: !1,
                                    selections: q,
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: [
                                      {
                                        kind: 'Literal',
                                        name: 'orderby',
                                        value: ['COUNT_DESC', 'REACTION_TYPE'],
                                      },
                                    ],
                                    concreteType: 'TopReactionsConnection',
                                    kind: 'LinkedField',
                                    name: 'top_reactions',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'TopReactionsEdge',
                                        kind: 'LinkedField',
                                        name: 'edges',
                                        plural: !0,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'reaction_count',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType:
                                              'FeedbackReactionInfo',
                                            kind: 'LinkedField',
                                            name: 'node',
                                            plural: !1,
                                            selections: q,
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey:
                                      'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
                                  },
                                  {
                                    alias: null,
                                    args: [
                                      {
                                        kind: 'Literal',
                                        name: 'use_default_actor',
                                        value: !1,
                                      },
                                    ],
                                    concreteType: 'FeedbackReactionInfo',
                                    kind: 'LinkedField',
                                    name: 'supported_reaction_infos',
                                    plural: !0,
                                    selections: q,
                                    storageKey:
                                      'supported_reaction_infos(use_default_actor:false)',
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType:
                                      'FeedbackUnifiedReactorsConnection',
                                    kind: 'LinkedField',
                                    name: 'unified_reactors',
                                    plural: !1,
                                    selections: P,
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ReactorsOfContentConnection',
                                    kind: 'LinkedField',
                                    name: 'reactors',
                                    plural: !1,
                                    selections: [
                                      O,
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'is_empty',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'Feedback',
                                    kind: 'LinkedField',
                                    name: 'if_viewer_can_render_group_custom_reactions',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'FeedbackReactionInfo',
                                        kind: 'LinkedField',
                                        name: 'viewer_feedback_reaction_info',
                                        plural: !1,
                                        selections: Q,
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'FeedbackReactionInfo',
                                        kind: 'LinkedField',
                                        name: 'supported_reaction_infos',
                                        plural: !0,
                                        selections: Q,
                                        storageKey: null,
                                      },
                                      j,
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'Group',
                                    kind: 'LinkedField',
                                    name: 'associated_group',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'Group',
                                        kind: 'LinkedField',
                                        name: 'if_viewer_can_see_reel_group_attribution',
                                        plural: !1,
                                        selections: k,
                                        storageKey: null,
                                      },
                                      j,
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: 'likers',
                                    args: [
                                      {
                                        kind: 'Literal',
                                        name: 'reaction_type',
                                        value: 'LIKE',
                                      },
                                    ],
                                    concreteType: 'ReactorsOfContentConnection',
                                    kind: 'LinkedField',
                                    name: 'reactors',
                                    plural: !1,
                                    selections: P,
                                    storageKey:
                                      'reactors(reaction_type:"LIKE")',
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'viewer_feedback_reaction_key',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'TopLevelCommentsConnection',
                                    kind: 'LinkedField',
                                    name: 'top_level_comments',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: 'totalCountIncludingReplies',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'total_count',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'CrossUniverseFeedbackInfo',
                                    kind: 'LinkedField',
                                    name: 'cross_universe_feedback_info',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'ig_comment_count',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'share_count_reduced',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              y,
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  {
                                    kind: 'TypeDiscriminator',
                                    abstractKey: '__isNode',
                                  },
                                ],
                                type: 'Entity',
                                abstractKey: '__isEntity',
                              },
                            ],
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
                  r,
                  {
                    kind: 'InlineFragment',
                    selections: q,
                    type: 'GamesInstantPlayStyleInfo',
                    abstractKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: q,
                    type: 'XFBPluginStyleInfo',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'is_prod_eligible',
                storageKey: null,
              },
            ],
            type: 'StoryAttachmentStyleRendererUnion',
            abstractKey: '__isStoryAttachmentStyleRendererUnion',
          },
        ],
      };
    })();
    e.exports = a;
  },
  null,
);
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
__d(
  'FBReelsScopedSearchContextProvider',
  ['FBReelsScopedSearchContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      var b = a.children;
      a = a.hideScopedSearchButton;
      var d = a === void 0 ? !1 : a;
      a = i(
        function () {
          return { hideScopedSearchButton: d };
        },
        [d],
      );
      return h.jsx(c('FBReelsScopedSearchContext').Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useFBReelsSingleVideoClickLogger',
  [
    'CometRelay',
    'FBLogger',
    'requireDeferred',
    'useFBReelsSingleVideoClickLogger_story.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = c('requireDeferred')('FbShortsSingleVideoClickFalcoEvent').__setRef(
        'useFBReelsSingleVideoClickLogger',
      );
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useFBReelsSingleVideoClickLogger_story.graphql')),
        a,
      );
      var e = a == null ? void 0 : a.tracking,
        f =
          a == null
            ? void 0
            : (a = a.short_form_video_context) == null
            ? void 0
            : (a = a.video) == null
            ? void 0
            : a.id;
      return function (a) {
        i.onReady(function (b) {
          if (e == null) {
            c('FBLogger')('fb_reels_web').mustfix(
              'useFBReelsSingleVideoClickLogger gets a null tracking string.',
            );
            return;
          }
          if (f == null) {
            c('FBLogger')('fb_reels_web').mustfix(
              'useFBReelsSingleVideoClickLogger gets a null videoID.',
            );
            return;
          }
          b.log(function () {
            return { referral_source: a, tracking: e, video_id: f };
          });
        });
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'storiesDominantColorPicker',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 8;
    function h() {
      return { blue: 0, clusterSize: 0, green: 0, red: 0 };
    }
    function i(a, b, c, d) {
      return (
        (a.red - b) * (a.red - b) +
        (a.green - c) * (a.green - c) +
        (a.blue - d) * (a.blue - d)
      );
    }
    function j() {
      var a = 0,
        b = 255 / 4,
        c = new Array(g);
      for (var d = 0; d < 2; d++)
        for (var e = 0; e < 2; e++)
          for (var f = 0; f < 2; f++) {
            var h = {
              blue: b * f + b / 2,
              clusterSize: 0,
              green: b * e + b / 2,
              red: b * d + b / 2,
            };
            c[a] = h;
            a++;
          }
      return c;
    }
    function k(a, b, c) {
      var d = !1,
        e = a.length / 4;
      for (var f = 0, j = 0; f < e; f++, j += 4) {
        var k = a[j],
          l = a[j + 1],
          m = a[j + 2],
          n = h(),
          o = Infinity,
          p = 0;
        for (var q = 0; q < g; q++) {
          var r = i(b[q], k, l, m);
          r < o && ((o = r), (p = q), (n = b[q]));
        }
        n.clusterSize++;
        c[f] !== p && ((c[f] = p), (d = !0));
      }
      return d;
    }
    function l(a, b, c) {
      var d = new Array(g),
        e = new Array(g),
        f = new Array(g);
      d.fill(0);
      e.fill(0);
      f.fill(0);
      var h = a.length / 4;
      for (var i = 0, j = 0; i < h; i++, j += 4) {
        var k = a[j],
          l = a[j + 1],
          m = a[j + 2],
          n = c[i];
        d[n] += k;
        e[n] += l;
        f[n] += m;
      }
      for (k = 0; k < g; k++) {
        l = b[k];
        l.clusterSize > 0 &&
          ((l.red = d[k] / l.clusterSize),
          (l.green = e[k] / l.clusterSize),
          (l.blue = f[k] / l.clusterSize),
          (l.clusterSize = 0));
      }
    }
    function a(a) {
      var b = a.length,
        c = j();
      b = new Array(b);
      b.fill(-1);
      while (k(a, c, b)) l(a, c, b);
      return c.sort(function (a, b) {
        return b.clusterSize - a.clusterSize;
      });
    }
    f['default'] = a;
  },
  66,
);
__d(
  'useStoriesDominantColorPicker',
  ['react', 'recoverableViolation', 'storiesDominantColorPicker'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useState,
      j = 100;
    function a(a) {
      var b = a.defaultBottomColor,
        d = a.defaultTopColor,
        e = a.imageURL;
      a = i({ bottomColor: b ? k(b) : '', topColor: d ? k(d) : '' });
      b = a[0];
      var f = a[1];
      h(
        function () {
          if (e == null) return;
          var a = new Image();
          a.crossOrigin = 'Anonymous';
          a.onload = function () {
            var b = document.createElement('canvas'),
              d = a.width,
              e = a.height,
              g = d / e,
              h = Math.min(Math.max(d, e), j);
            (d > h || e > h) &&
              (d > e ? ((d = h), (e = d / g)) : ((e = h), (d = e * g)));
            b.width = d;
            b.height = e;
            h = b.getContext('2d');
            h.drawImage(a, 0, 0, d, e);
            try {
              g = h.getImageData(0, 0, d, Math.max(1, e * 0.05));
              b = h.getImageData(0, e - e * 0.05, d, Math.max(1, e * 0.05));
              h = c('storiesDominantColorPicker')(g.data);
              d = c('storiesDominantColorPicker')(b.data);
              f({ bottomColor: k(d[0]), topColor: k(h[0]) });
            } catch (a) {
              c('recoverableViolation')(
                'Stories Create Dominant Color Bg throws exception',
                'fb_stories_web',
                a,
              );
            }
          };
          a.src = e;
          return function () {
            a.onload = null;
          };
        },
        [e],
      );
      return b;
    }
    function k(a) {
      return (
        'rgb(\n    ' +
        Math.round(a.red) +
        ',\n    ' +
        Math.round(a.green) +
        ',\n    ' +
        Math.round(a.blue) +
        ')'
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometFeedStoryFBReelsAttachment.react',
  [
    'fbt',
    'CometFeedStoryFBReelsAttachment_story.graphql',
    'CometPlaceholder.react',
    'CometPressable.react',
    'CometRelay',
    'CometStoryRenderLocationContext.react',
    'FBLogger',
    'FBReelsFeedbackBar.react',
    'FBReelsFeedbackBarPlaceholder.react',
    'FBReelsMuteContext',
    'FBReelsMuteContextProvider',
    'FBReelsPauseContextProvider',
    'FBReelsScopedSearchContextProvider',
    'FBReelsStarsSentAnimationContextProvider',
    'FBReelsURLUtils',
    'ReelsFeedbackDataNullabilitySettingContext',
    'ReelsVideoLoadingView.react',
    'StoriesEnums',
    'StoriesGradientBackground.react',
    'cr:1924',
    'react',
    'stylex',
    'useFBReelsIsGroupReel',
    'useFBReelsSingleVideoClickLogger',
    'useStoriesDominantColorPicker',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useContext,
      l = e.useMemo,
      m = {
        feedbackBar: {
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          end: 'xds687c',
          paddingBottom: 'xjkvuk6',
          position: 'x10l6tqk',
          width: 'xni59qk',
          $$css: !0,
        },
        gradientBackground: {
          height: 'x5yr21d',
          opacity: 'x1us6l5c',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          $$css: !0,
        },
        pressable: { position: 'x1n2onr6', width: 'xh8yej3', $$css: !0 },
        reshare: {
          borderTopStartRadius: 'x168nmei',
          borderTopEndRadius: 'x13lgxp2',
          borderBottomEndRadius: 'x5pf9jr',
          borderBottomStartRadius: 'xo71vjh',
          $$css: !0,
        },
        root: {
          backgroundColor: 'xal61yo',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x5pf9jr',
          borderBottomStartRadius: 'xo71vjh',
          display: 'x78zum5',
          flexDirection: 'x1q0g3np',
          height: 'x1egiwwb',
          justifyContent: 'xl56j7k',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x1n2onr6',
          width: 'xh8yej3',
          '@media (min-height: 1080px)_height': 'x16zosiy',
          '@media (min-height: 700px) and (max-height: 789px)_height':
            'x1db0b2',
          '@media (min-height: 790px) and (max-height: 1079px)_height':
            'x3awd8m',
          $$css: !0,
        },
      };
    function a(a) {
      var e = a.hideVerticalUFI,
        f = e === void 0 ? !1 : e;
      e = a.isReshare;
      var g = e === void 0 ? !1 : e;
      e = a.story;
      var n = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b('CometFeedStoryFBReelsAttachment_story.graphql')),
        e,
      );
      a = c('useFBReelsIsGroupReel')(n);
      var o = a.groupID,
        p = a.isGroupReel,
        q = k(c('CometStoryRenderLocationContext.react')),
        r = l(
          function () {
            return {
              isDataOptional: q === 'creator_studio_video_collaboration',
            };
          },
          [q],
        );
      if (n == null)
        throw c('FBLogger')('fb_reels_web').mustfixThrow(
          'Failed to fetch data for 1x1 reel unit',
        );
      a = c('useStoriesDominantColorPicker')({
        imageURL:
          (e = n.short_form_video_context) == null
            ? void 0
            : e.first_frame_thumbnail,
      });
      e = a.bottomColor;
      a = a.topColor;
      var s = c('useFBReelsSingleVideoClickLogger')(n);
      return b('cr:1924') === null
        ? j.jsx('div', {})
        : j.jsxs('div', {
            className: c('stylex')([m.root, g ? m.reshare : null]),
            children: [
              j.jsx('div', {
                className: 'x5yr21d x1us6l5c x10l6tqk xh8yej3',
                children: j.jsx(c('StoriesGradientBackground.react'), {
                  direction: d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM,
                  from: a,
                  to: e,
                }),
              }),
              j.jsx(c('FBReelsMuteContextProvider'), {
                shouldUseParentContext: !0,
                children: j.jsx(c('FBReelsPauseContextProvider'), {
                  hidePauseButton: !0,
                  shouldPauseOnShare: !1,
                  children: j.jsx(
                    c('FBReelsStarsSentAnimationContextProvider'),
                    {
                      children: j.jsx(c('FBReelsScopedSearchContextProvider'), {
                        hideScopedSearchButton: !0,
                        children: j.jsx(c('FBReelsMuteContext').Consumer, {
                          children: function (a) {
                            a = a.isMuted;
                            return j.jsxs(c('CometPressable.react'), {
                              'aria-label': h._(
                                '__JHASH__FmxMDsdZ9Ij__JHASH__',
                              ),
                              linkProps: {
                                passthroughProps: { isMuted: a },
                                prefetchQueriesOnHover: !0,
                                url: d('FBReelsURLUtils').getReelsURL(
                                  n == null
                                    ? void 0
                                    : (a = n.short_form_video_context) == null
                                    ? void 0
                                    : (a = a.video) == null
                                    ? void 0
                                    : a.id,
                                  'single_unit',
                                  q,
                                  p,
                                  o,
                                ),
                              },
                              onPress: function () {
                                s('creation_feed_unit');
                              },
                              xstyle: m.pressable,
                              children: [
                                j.jsx(c('CometPlaceholder.react'), {
                                  fallback: j.jsx(
                                    c('ReelsVideoLoadingView.react'),
                                    { reason: 'No Reels or Video data' },
                                  ),
                                  children: j.jsx(b('cr:1924'), {
                                    isReshare: g,
                                    reels: n,
                                  }),
                                }),
                                g || f
                                  ? null
                                  : j.jsx('div', {
                                      className:
                                        'x1ey2m1c x78zum5 xds687c xjkvuk6 x10l6tqk xni59qk',
                                      children: j.jsx(
                                        c('CometPlaceholder.react'),
                                        {
                                          fallback: j.jsx(
                                            c(
                                              'FBReelsFeedbackBarPlaceholder.react',
                                            ),
                                            { noPadding: !0 },
                                          ),
                                          children: j.jsx(
                                            c(
                                              'ReelsFeedbackDataNullabilitySettingContext',
                                            ).Provider,
                                            {
                                              value: r,
                                              children: j.jsx(
                                                c('FBReelsFeedbackBar.react'),
                                                { feedbackData: n },
                                              ),
                                            },
                                          ),
                                        },
                                      ),
                                    }),
                              ],
                            });
                          },
                        }),
                      }),
                    },
                  ),
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
  'CometFeedStoryFBReelsAttachmentStyle.react',
  [
    'CometFeedStoryFBReelsAttachment.react',
    'CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer.graphql',
    'CometRelay',
    'FBLogger',
    'react',
    'useCometFeedStoryAttachmentMatchDebugger',
    'useNullthrowsViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e,
        f = d('CometRelay').useFragment(
          h !== void 0
            ? h
            : (h = b(
                'CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer.graphql',
              )),
          a.styleTypeRenderer,
        );
      c('useCometFeedStoryAttachmentMatchDebugger')(f);
      e = c('useNullthrowsViolation')(
        f == null
          ? void 0
          : (e = f.attachment) == null
          ? void 0
          : e.style_infos,
        'attachment cannot be nullish in CometFeedStoryFBReelsAttachmentStyle',
      );
      if (e.length === 0)
        throw c('FBLogger')('fb_reels_web').mustfixThrow(
          'style_infos cannot be empty in order to show reels',
        );
      e = e.find(function (a) {
        a = a.__typename;
        return a === 'FBShortsShareAttachmentStyleInfo';
      });
      var g = e == null ? void 0 : e.fb_shorts_story;
      e = (e = e == null ? void 0 : e.enable_horizontal_ufi) != null ? e : !1;
      f =
        (f == null
          ? void 0
          : (f = f.attachment) == null
          ? void 0
          : (f = f.style_list) == null
          ? void 0
          : f.find(function (a) {
              return a === 'fb_shorts';
            })) != null;
      return i.jsx(c('CometFeedStoryFBReelsAttachment.react'), {
        adClientToken: a.adClientToken,
        adID: a.adID,
        hideVerticalUFI: e,
        isReshare: f,
        story: g,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
