/*FB_PKG_DELIM*/

__d(
  'usePremiumMusicVideoInterruptionSubscription_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5597508366945721';
  },
  null,
);
__d(
  'usePremiumMusicVideoInterruptionSubscription.graphql',
  ['usePremiumMusicVideoInterruptionSubscription_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'input' }],
        c = [
          {
            alias: null,
            args: [{ kind: 'Variable', name: 'data', variableName: 'input' }],
            concreteType:
              'PremiumMusicVideoInterruptionSubscribeResponsePayload',
            kind: 'LinkedField',
            name: 'premium_music_video_interruption_subscribe',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'disable_autoplay',
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
          name: 'usePremiumMusicVideoInterruptionSubscription',
          selections: c,
          type: 'Subscription',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'usePremiumMusicVideoInterruptionSubscription',
          selections: c,
        },
        params: {
          id: b(
            'usePremiumMusicVideoInterruptionSubscription_facebookRelayOperation',
          ),
          metadata: {
            subscriptionName: 'premium_music_video_interruption_subscribe',
          },
          name: 'usePremiumMusicVideoInterruptionSubscription',
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
  'VideoPlayerRelay_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: 'LocalArgument', name: 'playerOrigin' },
        { defaultValue: null, kind: 'LocalArgument', name: 'playerSuborigin' },
      ],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerRelay_video',
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
          args: [
            {
              kind: 'Variable',
              name: 'player_origin',
              variableName: 'playerOrigin',
            },
            {
              kind: 'Variable',
              name: 'player_suborigin',
              variableName: 'playerSuborigin',
            },
          ],
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
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoImplementationsImpl_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoPlayerShakaConfig_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useResolvedVideoPlayerConfigs_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoPlayerShakaPerformanceLoggerRelayImpl_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoPlayerShakaPerformanceLoggerBuilder_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useGraphQLVideoAutoplayGatingResult_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useGraphQLVideoDRMInfo_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useGraphQLVideoP2PSettings_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoPlayerAudioSettings_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoPlayerCaptionsSettings_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoPlayerLiveLatencyKnobSettings_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoPlayerAudioAvailabilityInfoRelay_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useProgressiveImplementationData_video',
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
              documentName: 'VideoPlayerRelay_video_spherical_video_renderer',
              fragmentName: 'VideoPlayerSphericalRelay_sphericalVideoRenderer',
              fragmentPropName: 'sphericalVideoRenderer',
              kind: 'ModuleImport',
            },
          ],
          storageKey: null,
        },
        {
          kind: 'Defer',
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'InstreamVideoAdBreaksPlayer_video',
            },
          ],
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'VideoPlayerVideoIsCastingCover_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useVideoPlayerIMFFromVideoMetadataRelay_video',
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
  'useVideoPlayerAudioSettings_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerAudioSettings_video',
      selections: [
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
  'useVideoPlayerAudioAvailabilityInfoRelay_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerAudioAvailabilityInfoRelay_video',
      selections: [
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useGraphQLVideoAutoplayGatingResult_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useGraphQLVideoAutoplayGatingResult_video',
      selections: [
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useGraphQLVideoDRMInfo_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useGraphQLVideoDRMInfo_video',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'drm_info',
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
  'useOzImplementationData_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useOzImplementationData_video',
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
          name: 'dash_manifest',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'min_quality_preference',
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
  'useProgressiveImplementationData_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useProgressiveImplementationData_video',
      selections: [
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
          kind: 'ScalarField',
          name: 'is_spherical',
          storageKey: null,
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useShakaImplementationData_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useShakaImplementationData_video',
      selections: [
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'InstreamVideoAdBreaksPlayer_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'InstreamVideoAdBreaksPlayer_video',
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
              fragmentName: 'InstreamVideoAdBreaksPlayerImpl_adBreaks',
              fragmentPropName: 'adBreaks',
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
  'useVideoPlayerShakaPerformanceLoggerBuilder_init.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerShakaPerformanceLoggerBuilder_init',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
      ],
      type: 'VideoPlayerShakaPerformanceLoggerInit',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useVideoPlayerShakaPerformanceLoggerBuilder_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerShakaPerformanceLoggerBuilder_video',
      selections: [
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
              documentName: 'useVideoPlayerShakaPerformanceLoggerBuilder_video',
              fragmentName: 'useVideoPlayerShakaPerformanceLoggerBuilder_init',
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useGraphQLVideoP2PSettings_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useGraphQLVideoP2PSettings_video',
      selections: [
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useVideoImplementationsImpl_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoImplementationsImpl_video',
      selections: [
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useOzImplementationData_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useShakaImplementationData_video',
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'useProgressiveImplementationData_video',
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
  'useVideoPlayerCaptionsSettings_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerCaptionsSettings_video',
      selections: [
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
  'useVideoPlayerLiveLatencyKnobSettings_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerLiveLatencyKnobSettings_video',
      selections: [
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'usePremiumMusicVideoInterruptionSubscription',
  [
    'CometRelay',
    'react',
    'usePremiumMusicVideoInterruptionSubscription.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useEffect,
      j =
        h !== void 0
          ? h
          : (h = b('usePremiumMusicVideoInterruptionSubscription.graphql'));
    function a(a) {
      var b = d('CometRelay').useRelayEnvironment();
      i(
        function () {
          if (a == null) return;
          var c = d('CometRelay').requestSubscription(b, {
            subscription: j,
            variables: { input: { user_id: a } },
          });
          return function () {
            c.dispose();
          };
        },
        [a, b],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'OzOneSemanticHandlerUtils',
  ['ConstUriUtils', 'qex', 'recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b, c) {
      b != null && b.indexOf('+RE') >= 0 && a.retry(), c != null && c();
    }
    function a(a, b) {
      var d = b.error;
      d = d.getExtra();
      var e = d.code;
      d = d.headers;
      var f = null;
      e == null &&
        c('recoverableViolation')(
          'A ONE Semantic error response must have an error code.',
          'comet_video_player',
        );
      d == null &&
        c('recoverableViolation')(
          'A ONE Semantic error response must contain response Headers.',
          'comet_video_player',
        );
      if (d != null) {
        d = d.get('x-fb-one-variant');
        f = (d = d) != null ? d : null;
      }
      d = JSON.parse(a.getString('network_retry_intervals_json', '{}'));
      a = d[e];
      switch (e) {
        case '410':
          b.endStream();
          break;
        case '404':
          h(b, f, function () {
            var a = c('qex')._('1634') || !1;
            a && b.retry({ behavior: 'recover_failed_request' });
          });
          break;
        case '429':
          b.retry(a);
          break;
        case '403':
        default:
      }
    }
    function i(a) {
      if (a != null) {
        a = parseInt(a, 10);
        var b = c('qex')._('1635');
        if (b != null && b > 0) return !isNaN(a) && a > 0 && a <= b;
      }
      return !1;
    }
    function j(a, b) {
      if (a != null && b != null) {
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        return !isNaN(a) && !isNaN(b) && a > 0 && a <= b;
      }
      return !1;
    }
    function k(a) {
      if (a != null) {
        a = d('ConstUriUtils').getUri(a);
        if (a) {
          a = a.getQueryParam('os_param');
          return a ? String(a).toString() : null;
        }
      }
      return null;
    }
    function l(a, b) {
      var d = a != null;
      return i(b) || ((d || !!c('qex')._('1636')) && j(b, a));
    }
    function b(a) {
      var b = a.getExtra();
      b = b.headers;
      b = m(b);
      a = a.getExtra();
      var d = a.code;
      a = a.url;
      if (b != null && d == null) {
        c('recoverableViolation')(
          'A ONE Semantic error response must have an error code.',
          'comet_video_player',
        );
        return !1;
      }
      d = k(a);
      return l(d, b);
    }
    function m(a) {
      if (a) {
        a = a.get('x-fb-one');
        if (a != null) return parseInt(a, 10) > 0 ? a : null;
      }
      return null;
    }
    function e(a, b, c) {
      var d = null,
        e = null;
      b != null && ((d = k(b)), d != null && a.setOneReqWave(parseInt(d, 10)));
      b = c == null ? void 0 : c.headers;
      b && ((e = m(b)), e != null && a.setOneResWave(parseInt(e, 10)));
      a.setOneObserved(l(d, e));
    }
    g.maybeRetryForVariant = h;
    g.evaluateOneSemanticsResponse = a;
    g.isOneSemanticsForcedForResponseWave = i;
    g.isOneSemanticsEnabledForWave = j;
    g.getOneSemanticRequestWave = k;
    g.shouldRespondWithOneSemantics = b;
    g.getOneSemanticResponseWave = m;
    g.setOneSemanticFetchStreamLoggingAttributes = e;
  },
  98,
);
__d(
  'handleOzManifestFetchErrorEvent',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = a.getNumber('initial_manifest_request_retry_count', 0),
        d = JSON.parse(a.getString('network_retry_intervals_json', '{}')),
        e = a.getNumber('live_max_try_attempts_on_404', 1),
        f = ['404', '503'];
      a.getBool('live_gracefully_handle_no_network', !1) && f.push('0');
      a.getBool('live_gracefully_handle_410', !1) && f.push('410');
      a.getBool('live_gracefully_handle_502', !1) && f.push('502');
      a.getBool('live_gracefully_handle_429', !1) && f.push('429');
      a.getBool('live_gracefully_handle_504', !1) && f.push('504');
      a.getBool('normalize_mpd_fetch_errors', !1) && f.push('20');
      var g = b.error.getExtra().code;
      if (a.getBool('no_retry_on_empty_string_error_code', !1) && g === '')
        return;
      a.getBool('handle_mpd_null_error_codes', !1) &&
        (g = g != null ? g : null);
      d = d[g];
      if (b.isInitialRequest)
        typeof d === 'number' &&
          d > 0 &&
          b.retryAttemptCount < c &&
          b.retry({ waitMs: d });
      else if (g != null && f.indexOf(g) > -1)
        switch (g) {
          case '410':
            b.endStream();
            break;
          case '404':
            e < b.consecutiveFailuresForErrorCode && b.retry();
            break;
          case '504':
          case '502':
          case '503':
          case '20':
          case '0':
            b.retry();
            break;
          case '429':
            typeof d === 'number' && d > 0 && b.retry({ waitMs: d });
            break;
          default:
            break;
        }
      else
        g === null && a.getBool('handle_mpd_null_error_codes', !1) && b.retry();
    }
    f['default'] = a;
  },
  66,
);
__d(
  'handleOzStreamErrorEvent',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    function a(a, b) {
      var c = b.error.getExtra().code;
      if (a.getBool('no_retry_on_empty_string_error_code', !1) && c === '')
        return;
      if (a.getBool('retry_null_error_code_in_stream', !1) && c == null) {
        b.retry();
        return;
      }
      var d = JSON.parse(a.getString('network_end_broadcasts_json', '[]'));
      if (d.includes(c)) {
        b.endStream();
        return;
      }
      d = JSON.parse(a.getString('network_skip_json', '[]'));
      if (d.includes(c)) {
        b.retry();
        return;
      }
      d = a.getBool('back_off_pdash_504_retry', !0)
        ? g[b.retryAttemptCount]
        : 0;
      var e = JSON.parse(a.getString('network_reload_mpd_json', '[]')),
        f = a.getBool('fix_reload_manifest_retry', !1);
      if (
        a.getBool('back_off_pdash_504_retry', !0) &&
        d == null &&
        (!f || e.includes(c))
      )
        return;
      if (d != null && e.includes(c)) {
        a.getBool('network_reload_mpd_json_retry', !1)
          ? b.retry({ behavior: 'recover_failed_request', waitMs: d * 1e3 })
          : b.retry({ waitMs: d * 1e3 });
        return;
      }
      f = JSON.parse(
        a.getString(
          'network_retry_intervals_json',
          '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000}',
        ),
      );
      e = c != null ? f[c] : null;
      if (e != null) {
        a.getBool('network_retry_intervals_json_retry', !1)
          ? b.retry({ behavior: 'retry_failed_request', waitMs: e })
          : b.retry({ waitMs: e });
        return;
      }
    }
    f['default'] = a;
  },
  66,
);
__d(
  'OzOneSemanticHandler',
  [
    'OzOneSemanticHandlerUtils',
    'handleOzManifestFetchErrorEvent',
    'handleOzStreamErrorEvent',
    'qex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var e = b.error;
      !!c('qex')._('1633') &&
      d('OzOneSemanticHandlerUtils').shouldRespondWithOneSemantics(e)
        ? d('OzOneSemanticHandlerUtils').evaluateOneSemanticsResponse(a, b)
        : c('handleOzManifestFetchErrorEvent')(a, b);
    }
    function b(a, b) {
      var e = b.error;
      !!c('qex')._('1633') &&
      d('OzOneSemanticHandlerUtils').shouldRespondWithOneSemantics(e)
        ? d('OzOneSemanticHandlerUtils').evaluateOneSemanticsResponse(a, b)
        : c('handleOzStreamErrorEvent')(a, b);
    }
    g.handleManifestFetchErrorEvent = a;
    g.handleStreamErrorEvent = b;
  },
  98,
);
__d(
  'OzCDNSignedQueryParams',
  ['ConstUriUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.$2 = function (a, b, c) {
        this.$1[a] == null && (this.$1[a] = {}), (this.$1[a][b] = c);
      };
      b.get = function (a) {
        a = this.$1[a];
        return a == null ? null : a;
      };
      b.update = function (a) {
        a = d('ConstUriUtils').getUri(a);
        if (a != null) {
          var b = a.getQueryParams();
          a = a.getDomain() + a.getPath();
          var c = b.get('oe');
          c != null && this.$2(a, 'oe', String(b.get('oe')));
          b.get('oh') != null && this.$2(a, 'oh', String(b.get('oh')));
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'InstreamVideoAdBreaksPlayer.react',
  [
    'CometPlaceholder.react',
    'CometRelay',
    'InstreamVideoAdBreaksPlayer_video.graphql',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      var e = a.playerFormat,
        f = a.subOrigin;
      a = a.video;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('InstreamVideoAdBreaksPlayer_video.graphql')),
        a,
      );
      var g = a.id,
        j = a.instream_extra_config;
      a = a.instream_video_ad_breaks_comet;
      return i.jsx(c('CometPlaceholder.react'), {
        fallback: null,
        children: i.jsx(d('CometRelay').MatchContainer, {
          match: a,
          props: {
            instreamExtraConfig: {
              instreamHaloDelayTimeSeconds:
                j == null ? void 0 : j.instream_halo_delay_time_seconds,
            },
            instreamVideoAdBreaksComet: a,
            playerFormat: e,
            subOrigin: f,
            videoFBID: g,
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
  'VideoPlayerXImplRelayWrapper.react',
  ['VideoPlayerXImpl.react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('VideoPlayerXImpl.react');
  },
  98,
);
__d(
  'LatencySensitiveType',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    a = b('$InternalEnum')({ NORMAL: 0, LOW: 1, ULTRA_LOW: 2 });
    c = a;
    f['default'] = c;
  },
  66,
);
__d(
  'XFBLatencySensitiveTypeUtils.facebook',
  ['$InternalEnumUtils', 'LatencySensitiveType'],
  function (a, b, c, d, e, f, g) {
    a = d('$InternalEnumUtils').createToJSEnum(c('LatencySensitiveType'));
    b = d('$InternalEnumUtils').createFromJSEnum(c('LatencySensitiveType'));
    g.toJSEnum = a;
    g.fromJSEnum = b;
  },
  98,
);
__d(
  'getAvailableMimeCodecsFromDashManifest',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      var b = /^(audio|video)\/.*$/;
      return b.test(a);
    }
    function a(a) {
      var b = [],
        c = window.MediaSource;
      if (a != null) {
        var d = /mimeType=\"([^\"]*)\"[^\>]*codecs=\"([^\"]*)\"/g,
          e = /codecs=\"([^\"]*)\"[^\>]*mimeType=\"([^\"]*)\"/g,
          f,
          h = [];
        while ((f = d.exec(a))) h.push([f[1], f[2]]);
        while ((f = e.exec(a))) h.push([f[2], f[1]]);
        for (d = 0; d < h.length; d++) {
          f = h[d];
          a = f[0];
          e = f[1];
          f = a + '; codecs="' + e + '"';
          e = a.startsWith('audio')
            ? 'audio'
            : a.startsWith('video')
            ? 'video'
            : 'other';
          a = !0;
          var i = !1;
          g(f) && ((i = !0), (a = c ? c.isTypeSupported(f) : !1));
          b.push({
            isRequiredForPlayback: i,
            isTypeSupported: a,
            mimeCodec: f,
            representationType: e,
          });
        }
      }
      return b;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'manifestHasPlayableRepresentations',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (a.length <= 0) return !1;
      var b = !1,
        c = !1,
        d = !1,
        e = !1;
      for (
        var a = a,
          f = Array.isArray(a),
          g = 0,
          a = f
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= a.length) break;
          h = a[g++];
        } else {
          g = a.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        h.representationType === 'video' &&
          ((b = !0), h.isTypeSupported && (c = !0));
        h.representationType === 'audio' &&
          ((d = !0), h.isTypeSupported && (e = !0));
        if (e && c) break;
      }
      return (e || !d) && (c || !b);
    }
    f['default'] = a;
  },
  66,
);
__d(
  'useGraphQLVideoAutoplayGatingResult',
  [
    'CometRelay',
    'GraphQLVideoAutoplayGatingResult',
    'useGraphQLVideoAutoplayGatingResult_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useGraphQLVideoAutoplayGatingResult_video.graphql')),
        a,
      );
      return d(
        'GraphQLVideoAutoplayGatingResult',
      ).makeGraphQLVideoAutoplayGatingResult(
        a.autoplay_gating_result,
        a.viewer_autoplay_setting,
        a.can_autoplay,
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'isEmptyObject',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      for (a in a) return !1;
      return !0;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'GraphQLVideoDRMInfo',
  ['isEmptyObject'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.fairplay_cert,
        d = a.graph_api_video_license_uri,
        e = a.video_license_uri_map;
      a = a.widevine_cert;
      d = {
        fairplayCert: b,
        graphApiVideoLicenseUri: (b = d) != null ? b : null,
        videoLicenseUriMap: e,
        widevineCert: a,
      };
      return d.graphApiVideoLicenseUri === null &&
        c('isEmptyObject')(d.videoLicenseUriMap)
        ? null
        : d;
    }
    g.makeGraphQLVideoDRMInfo = a;
  },
  98,
);
__d(
  'useGraphQLVideoDRMInfo',
  [
    'CometRelay',
    'GraphQLVideoDRMInfo',
    'react',
    'useGraphQLVideoDRMInfo_video.graphql',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useRef;
    function j(a) {
      if (a != null) {
        a = k(a);
        return d('GraphQLVideoDRMInfo').makeGraphQLVideoDRMInfo(a);
      }
      return null;
    }
    function k(a) {
      a = JSON.parse(a) || {};
      var b = a.fairplay_cert,
        c = a.graph_api_video_license_uri,
        d = a.video_license_uri_map;
      a = a.widevine_cert;
      return {
        fairplay_cert: b,
        graph_api_video_license_uri: c,
        video_license_uri_map: d,
        widevine_cert: a,
      };
    }
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('useGraphQLVideoDRMInfo_video.graphql')),
        a,
      );
      var e = i(null),
        f = j(a.drm_info),
        g = c('useUnsafeRef_DEPRECATED')(null);
      e.current !== a.drm_info && ((e.current = a.drm_info), (g.current = f));
      return g.current;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'GraphQLVideoP2PSettings',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('$InternalEnum').Mirrored(['HiveJava', 'HiveJS', 'StatsJS']);
    function a(a) {
      return (a = g.cast(a)) != null ? a : null;
    }
    f.HiveTechOrder = g;
    f.hiveTechOrderOrNull = a;
  },
  66,
);
__d(
  'useGraphQLVideoP2PSettings',
  [
    'CometRelay',
    'GraphQLVideoP2PSettings',
    'recoverableViolation',
    'useGraphQLVideoP2PSettings_video.graphql',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function i(a) {
      var b = null;
      if (a) {
        var e, f, g, h, i;
        e = {
          delay_p2p_until_play:
            (e = (e = a.config) == null ? void 0 : e.delay_p2p_until_play) !=
            null
              ? e
              : !1,
          disable_hivejava_for_livevc:
            (e =
              (e = a.config) == null
                ? void 0
                : e.disable_hivejava_for_livevc) != null
              ? e
              : !1,
        };
        var j = a.ticket,
          k = a.community_info;
        f =
          (f = a.hive_initialization_options) == null ? void 0 : f.debug_level;
        g =
          (g =
            (g = a.hive_initialization_options) == null
              ? void 0
              : g.hive_tech_order
                  .map(function (a) {
                    var b = d('GraphQLVideoP2PSettings').hiveTechOrderOrNull(a);
                    b == null &&
                      a != null &&
                      c('recoverableViolation')(
                        "Invalid hive tech order: '" + a + "'",
                        'comet_video_player',
                      );
                    return b;
                  })
                  .filter(Boolean)) != null
            ? g
            : [];
        h =
          (h = a.hive_initialization_options) == null
            ? void 0
            : (h = h.hive_java) == null
            ? void 0
            : h.min_version;
        i = ((i = a.hive_initialization_options) == null ? void 0 : i.hive_java)
          ? { minVersion: h }
          : null;
        h = a.hive_initialization_options
          ? { HiveJava: i, debugLevel: f, hiveTechOrder: g }
          : null;
        f = {
          communityId:
            (a = k == null ? void 0 : k.community_id) != null
              ? a
              : 'unknowncustomer',
          communityName:
            (i = k == null ? void 0 : k.community_name) != null
              ? i
              : 'Unknown Customer',
        };
        b = {
          community_info: f,
          config: e,
          hive_initialization_options: h,
          ticket: j,
        };
      }
      return b;
    }
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('useGraphQLVideoP2PSettings_video.graphql')),
        a,
      );
      var e = c('useUnsafeRef_DEPRECATED')(null),
        f = c('useUnsafeRef_DEPRECATED')(null);
      a = i((a = a.p2p_settings) != null ? a : null);
      var g = JSON.stringify(a);
      if (e.current !== g) {
        e.current = (e = g) != null ? e : null;
        f.current = (g = a) != null ? g : null;
      }
      return f.current;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useProgressiveImplementationData',
  [
    'CometRelay',
    'VideoPlayerProgressiveImplementationData',
    'gkx',
    'useProgressiveImplementationData_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a, e) {
      var f, g;
      e = e.initialForceHD;
      e = e === void 0 ? !1 : e;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useProgressiveImplementationData_video.graphql')),
        a,
      );
      f =
        a.is_spherical === !0
          ? (f =
              (f = a.spherical_video_fallback_urls) == null ? void 0 : f.hd) !=
            null
            ? f
            : a.playable_url_quality_hd
          : a.playable_url_quality_hd;
      g =
        a.is_spherical === !0
          ? (g =
              (g = a.spherical_video_fallback_urls) == null ? void 0 : g.sd) !=
            null
            ? g
            : a.playable_url
          : a.playable_url;
      var i = a.is_rss_podcast_video === !0,
        j = c('gkx')('1129');
      return d(
        'VideoPlayerProgressiveImplementationData',
      ).makeProgressiveImplementationData({
        hdSrc: f,
        hdSrcPreferred:
          e === !0 ||
          j ||
          a.min_quality_preference === 'HD' ||
          a.min_quality_preference === 'UHD',
        isExternalMedia: i,
        sdSrc: g,
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerImplementationLoadSequenceManager',
  ['setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        (this.$1 = []), (this.$2 = []);
      }
      var b = a.prototype;
      b.schedule = function (a, b, d) {
        var e = this,
          f = {
            load: d,
            maximumBlockTimeMs: a.getNumber('load_sequence_max_delay_ms', 0),
            sequence: b,
          },
          g = a.getNumber('load_sequence_only_prioritize_first_count', 0);
        g > 0
          ? (d = !this.$2.find(function (a) {
              return a.sequence < g;
            }))
          : (d = !this.$2.find(function (a) {
              return a.sequence < b;
            }));
        d
          ? this.$3(f)
          : (this.$1.push(f),
            c('setTimeout')(function () {
              return e.$4(f);
            }, f.maximumBlockTimeMs));
        return function () {
          return e.$5(f);
        };
      };
      b.$4 = function (a) {
        var b = this.$1.find(function (b) {
          return b === a;
        });
        b &&
          ((this.$1 = this.$1.filter(function (b) {
            return b !== a;
          })),
          this.$3(b));
      };
      b.$3 = function (a) {
        var b = this;
        this.$2.push(a);
        a.load()
          .then(function () {
            return b.$6(a);
          })
          ['catch'](function (c) {
            b.$6(a);
            throw c;
          });
        c('setTimeout')(function () {
          return b.$6(a);
        }, a.maximumBlockTimeMs);
      };
      b.$7 = function () {
        var a = this,
          b = Math.min.apply(
            Math,
            this.$1.map(function (a) {
              return a.sequence;
            }),
          ),
          c = this.$1.filter(function (a) {
            return a.sequence === b;
          });
        c.forEach(function (b) {
          return a.$4(b);
        });
      };
      b.$5 = function (a) {
        this.$1 = this.$1.filter(function (b) {
          return b !== a;
        });
      };
      b.$6 = function (a) {
        if (
          !this.$2.find(function (b) {
            return b === a;
          })
        )
          return;
        this.$2 = this.$2.filter(function (b) {
          return b !== a;
        });
        var b = !!this.$2.find(function (b) {
          return b.sequence === a.sequence;
        });
        b && this.$7();
      };
      return a;
    })();
    b = new a();
    d = b;
    g['default'] = d;
  },
  98,
);
__d(
  'handleVideoPlayerLatencyLevelChange',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c, d) {
      if (a && b && c) {
        var e = a.getAllContexts().latency_level;
        c = [];
        try {
          c = JSON.parse(
            a.getString('seek_on_latency_level_change_allowed', '[]'),
          );
        } catch (a) {}
        c = c.some(function (a) {
          return a.length === 2 && a[0] === e && a[1] === d;
        });
        a.setContext('latency_level', d);
        if (!c) return;
        c = b.getDuration();
        c =
          c != null
            ? c + a.getNumber('live_initial_playback_position', 0)
            : null;
        c != null && b.setPlayheadPosition(c);
      }
    }
    f['default'] = a;
  },
  66,
);
__d(
  'VideoPlayerOzImplementationEngineExtrasAPI',
  [
    'VideoPlayerOzWWWGlobalConfig',
    'emptyFunction',
    'gkx',
    'handleVideoPlayerLatencyLevelChange',
    'oz-player/networks/OzBandwidthEstimator',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = c('emptyFunction');
    function h(a) {
      return a.getSelectedVideoQuality();
    }
    function i(a) {
      a = a.getCurrentVideoRepresentation();
      return a == null ? '' : a.getQualityLabel();
    }
    function j(a) {
      a = a.getIsVideoQualityAdaptationEnabled()
        ? 'auto'
        : a.getSelectedVideoQuality();
      return a;
    }
    function k(a) {
      return (a =
        (a = a.getMpd()) == null ? void 0 : a.getCustomField('fbProjection')) !=
        null
        ? a
        : null;
    }
    function l(a, b) {
      var c = j(a);
      if (b === 'notselected' || b === c) return !1;
      else if (b === 'auto') {
        a.enableVideoQualityAdaptation();
        return !0;
      } else if (b !== a.getSelectedVideoQuality()) {
        c = b;
        a.switchToVideoQuality(c);
        return !0;
      } else return !1;
    }
    function a(a) {
      var b = a.getConfig,
        d = a.getOzPlayer,
        e = a.getVideoElementAPI;
      a = {
        getApproximateFBLSToPlayerDisplayLatency: function () {
          var a;
          return (a =
            (a = d()) == null
              ? void 0
              : a.getApproximateFBLSToPlayerDisplayLatency()) != null
            ? a
            : null;
        },
        getAudioRepresentationIDAtTime: function (a) {
          var b;
          b = (b = d()) == null ? void 0 : b.getAudioRepresentationIDAtTime(a);
          return (a = b) != null ? a : null;
        },
        getAvailableVideoQualities: function () {
          var a;
          return (a = (a = d()) == null ? void 0 : a.getVideoQualities()) !=
            null
            ? a
            : [];
        },
        getCurrentAudioRepresentation: function () {
          var a;
          return (a =
            (a = d()) == null ? void 0 : a.getCurrentAudioRepresentation()) !=
            null
            ? a
            : null;
        },
        getCurrentPlayingVideoQuality: function () {
          var a = d();
          return a ? i(a) : '';
        },
        getCurrentTargetVideoQuality: function () {
          var a = d();
          return a ? h(a) : '';
        },
        getCurrentVideoRepresentation: function () {
          var a;
          return (a =
            (a = d()) == null ? void 0 : a.getCurrentVideoRepresentation()) !=
            null
            ? a
            : null;
        },
        getEstimatedBandwidth: function () {
          return c('oz-player/networks/OzBandwidthEstimator').getBandwidth(
            c('VideoPlayerOzWWWGlobalConfig'),
          );
        },
        getInbandCaptionsAutogeneratedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null
              ? void 0
              : a.getCustomField('hasInbandCaptionsFromUsingASRCaptions'),
          );
        },
        getInbandCaptionsExpectedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return (
            Boolean(
              a == null
                ? void 0
                : a.getCustomField('hasInbandCaptionsFromUsingASRCaptions'),
            ) ||
            Boolean(
              a == null
                ? void 0
                : a.getCustomField('hasInbandCaptionsFromAccessibility'),
            )
          );
        },
        getManifestIdentifier: function () {
          var a;
          a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getCustomField('fbManifestIdentifier');
          return a != null ? String(a) : null;
        },
        getMpdValidationErrors: function () {
          var a;
          a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getCustomField('validationErrors');
          return a != null ? String(a) : null;
        },
        getPerfLoggerProvider: function () {
          var a = d();
          return a ? a.getPerfLoggerProvider() : null;
        },
        getRepresentationCaptionsExpectedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null
              ? void 0
              : a.getCustomField('hasVTTRepresentationCaptions'),
          );
        },
        getStreamType: function () {
          return 'dash';
        },
        getUserSelectedVideoQuality: function () {
          var a = d();
          return a ? j(a) : '';
        },
        getVideoProjectionType: function () {
          var a = d();
          return a != null ? k(a) : null;
        },
        getVideoRepresentationIDAtTime: function (a) {
          var b;
          b = (b = d()) == null ? void 0 : b.getVideoRepresentationIDAtTime(a);
          return (a = b) != null ? a : null;
        },
        getVideoRepresentations: function () {
          var a;
          return (a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getVideoRepresentations()) != null
            ? a
            : null;
        },
        isDrm: function () {
          var a;
          return Boolean((a = d()) == null ? void 0 : a.isDrm());
        },
        isFBIsLiveTemplated: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null ? void 0 : a.getCustomField('isLiveTemplated'),
          );
        },
        isFBMS: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(a == null ? void 0 : a.getCustomField('isFBMS'));
        },
        isFBWasLive: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(a == null ? void 0 : a.getCustomField('isFBWasLive'));
        },
        isPredictiveDash: function () {
          var a;
          a =
            (a =
              (a = d()) == null
                ? void 0
                : (a = a.getMpd()) == null
                ? void 0
                : a.getVideoRepresentations()[0]) != null
              ? a
              : null;
          return a !== null && a.canPredict();
        },
        setDimensions: function (a) {},
        setEnableLiveheadCatchup: function (a) {
          var b = d();
          b != null && b.setEnableLiveheadCatchup(a);
        },
        setLatencyLevel: function (a) {
          c('handleVideoPlayerLatencyLevelChange')(b(), e(), d(), a);
        },
        setUserSelectedVideoQuality: function (a) {
          var b = d();
          b != null && l(b, a);
        },
      };
      return a;
    }
    g.createVideoPlayerOzImplementationEngineExtrasAPI = a;
  },
  98,
);
__d(
  'OzActiveActiveFailoverNetworkRequestStreamHandler',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.onResponse = function (a, b) {
        var c = a.headers;
        c && c.has('x-fb-video-replica') && this.$1(a, b);
        return null;
      };
      b.onError = function (a, b) {
        return null;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'OzBufferVTTCaptionsVisibleStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.isActive = function () {
        return !this.$1();
      };
      b.getBufferTarget = function () {
        return 0;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'OzCustomParsers',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      return new Map([
        [
          'fbProjection',
          function (a) {
            try {
              return a.Period[0].AdaptationSet[0].$.FBProjection || null;
            } catch (a) {
              return null;
            }
          },
        ],
        [
          'hasInbandCaptionsFromAccessibility',
          function (a) {
            a = a.Period[0];
            a = a && a.AdaptationSet[0].Accessibility;
            return a && a[0]
              ? a[0].$.schemeIdUri === 'urn:scte:dash:cc:cea-608:2015'
              : !1;
          },
        ],
        [
          'hasInbandCaptionsFromUsingASRCaptions',
          function (a) {
            a = Number.parseInt(a.$.usingASRCaptions, 0);
            return !isNaN(a) && a != 0;
          },
        ],
        [
          'hasInbandCaptionsFromIsUsingAsrCaptionsEmployeeDogfooding',
          function (a) {
            a = Number.parseInt(a.$.isUsingAsrCaptionsEmployeeDogfooding, 0);
            return !isNaN(a) && a != 0;
          },
        ],
        [
          'hasVTTRepresentationCaptions',
          function (a) {
            return (
              a.Period[0].AdaptationSet.find(function (a) {
                var b;
                return (
                  ((b = a.$.mimeType) == null
                    ? void 0
                    : b.startsWith('application')) && a.$.lang != null
                );
              }) != null
            );
          },
        ],
        [
          'isLiveTemplated',
          function (a) {
            return a.$.FBIsLiveTemplated === 'true';
          },
        ],
        [
          'isFBMS',
          function (a) {
            return a.$.FBMS === 'true';
          },
        ],
        [
          'isFBWasLive',
          function (a) {
            return a.$.FBWasLive === 'true';
          },
        ],
        [
          'loapStreamType',
          function (a) {
            return a.$.loapStreamType ? parseInt(a.$.loapStreamType, 10) : 0;
          },
        ],
        [
          'fbManifestIdentifier',
          function (a) {
            return (a = a.$.FBManifestIdentifier) != null ? a : '';
          },
        ],
        [
          'lastVideoFrameTs',
          function (a) {
            return a.$.lastVideoFrameTs
              ? Number.parseInt(a.$.lastVideoFrameTs, 10)
              : null;
          },
        ],
        [
          'currentServerTimeMs',
          function (a) {
            return a.$.currentServerTimeMs
              ? Number.parseInt(a.$.currentServerTimeMs, 10)
              : null;
          },
        ],
        [
          'validationErrors',
          function (a) {
            return (a = a.$.validationErrors) != null ? a : '';
          },
        ],
      ]);
    }
    f.createOzCustomParser = a;
  },
  66,
);
__d(
  'oz-player/manifests/OzSegmentOptions',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {
        (this.$1 = !1), (this.$2 = null);
      }
      var b = a.prototype;
      b.setSegmentNumDecisionTime = function (a) {
        this.$2 = a;
      };
      b.getSegmentNumDecisionTime = function () {
        return this.$2;
      };
      b.setIsDVLEnabled = function (a) {
        this.$1 = a;
      };
      b.isDVLEnabled = function () {
        return this.$1;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/shims/www/OzURIWWWImplConstUri',
  ['ConstUriUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      a = a.getQueryParams();
      var b = {};
      a.forEach(function (a, c) {
        typeof a === 'string' || typeof a === 'number'
          ? (b[c] = a)
          : (b[c] = String(a));
      });
      return b;
    }
    a = (function () {
      function a(a) {
        this.$1 = d('ConstUriUtils').getUri(a);
        if (this.$1 == null) throw new Error('Invalid URI passed to OzURI');
        this.$2 = h(this.$1);
      }
      var b = a.prototype;
      b.addQueryData = function (a, b) {
        var c = this.$1;
        if (typeof a === 'string') {
          var d;
          c =
            (d = c) == null
              ? void 0
              : d.addQueryParam(a, b === void 0 ? '' : b);
        } else {
          var e = new Map();
          Object.keys(a).forEach(function (b) {
            e.set(b, a[b]);
          });
          c = (d = c) == null ? void 0 : d.addQueryParams(e);
        }
        c != null && ((this.$1 = c), (this.$2 = h(this.$1)));
      };
      b.getQueryData = function () {
        return this.$2;
      };
      b.getDomain = function () {
        var a;
        return (a = (a = this.$1) == null ? void 0 : a.getDomain()) != null
          ? a
          : '';
      };
      b.toString = function () {
        var a;
        return (a = (a = this.$1) == null ? void 0 : a.toString()) != null
          ? a
          : '';
      };
      b.getPath = function () {
        var a;
        return (a = (a = this.$1) == null ? void 0 : a.getPath()) != null
          ? a
          : '';
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/www/OzURIWWW',
  ['oz-player/shims/www/OzURIWWWImplConstUri'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/OzURIWWWImplConstUri');
  },
  98,
);
__d(
  'oz-player/shims/OzURI',
  ['oz-player/shims/www/OzURIWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/OzURIWWW');
  },
  98,
);
__d(
  'oz-player/utils/ozConcatUint8Arrays',
  ['oz-player/utils/OzError'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = 0;
      for (var d = 0; d < a.length; ++d) b += a[d].byteLength;
      var e, f;
      try {
        (e = new ArrayBuffer(b)), (f = new Uint8Array(e));
      } catch (a) {
        throw new (c('oz-player/utils/OzError'))({
          type: 'OZ_ALLOCATION_FAILURE',
          description: a.name + ': ' + a.message,
        });
      }
      d = 0;
      for (b = 0; b < a.length; ++b) {
        var g = a[b];
        f.set(g, d);
        d += g.byteLength;
      }
      return { buffer: e, view: f };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/OzReadableStreamUtils',
  ['oz-player/utils/ozConcatUint8Arrays'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h =
      typeof TextDecoder !== 'undefined'
        ? function (a) {
            return new TextDecoder('utf-8').decode(new Uint8Array(a));
          }
        : function (a) {
            return String.fromCharCode.apply(null, a);
          };
    function i(a) {
      var b = [],
        d = function c() {
          return a.read().then(function (a) {
            var d = a.value;
            a = a.done;
            if (a) return null;
            if (!d) return null;
            b.push(d);
            return c();
          });
        };
      return d().then(function () {
        var a = c('oz-player/utils/ozConcatUint8Arrays')(b);
        a = a.view;
        return a;
      });
    }
    function a(a) {
      return i(a).then(function (a) {
        return h(a);
      });
    }
    function b(a) {
      var b = new Uint8Array(a.length);
      return b.map(function (b, c) {
        return a.charCodeAt(c);
      });
    }
    g.pumpAllData = i;
    g.pumpString = a;
    g.stringToUint8Array = b;
  },
  98,
);
__d(
  'OzCustomRepresentationParsers',
  [
    'oz-player/manifests/OzSegmentOptions',
    'oz-player/shims/OzURI',
    'oz-player/utils/OzReadableStreamUtils',
  ],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = a.ozConfig,
        e = a.startTimestamp;
      a = {
        timescale: function (a) {
          a = a.SegmentTemplate;
          if (a && a.length > 0) {
            a = a[0].$;
            if (a) return Number.parseInt(a.timescale, 0) || null;
          }
          return null;
        },
      };
      b.getBool('parse_initialization_binary', !1) &&
        (a.initializationBinary = function (a) {
          try {
            a = window.atob(a.FBInitializationBinary[0]._);
            return d(
              'oz-player/utils/OzReadableStreamUtils',
            ).stringToUint8Array(a);
          } catch (a) {
            return null;
          }
        });
      a.playbackResolutionMos = function (a) {
        try {
          return a.$.FBPlaybackResolutionMos;
        } catch (a) {
          return null;
        }
      };
      a.qualityLabel = function (a) {
        try {
          return a.$.FBQualityLabel;
        } catch (a) {
          return null;
        }
      };
      b.getBool('parse_first_segment', !1) &&
        (a.firstSegmentParser = function (a) {
          if (e != null && e > 0) return null;
          try {
            var b =
                a.SegmentBase[0].$.FBFirstSegmentRange.split('-').map(Number),
              d = { startByte: b[0], endByte: b[1] };
            b = a.BaseURL[0]._;
            var f = new (c('oz-player/shims/OzURI'))(b),
              g = new (c('oz-player/manifests/OzSegmentOptions'))();
            return {
              getData: function () {
                return null;
              },
              getURI: function () {
                return f;
              },
              getByteRange: function () {
                return d;
              },
              getTimeRange: function () {
                return { startTime: 0, endTime: 2 };
              },
              getSequenceNumber: function () {
                return null;
              },
              getOptions: function () {
                return g;
              },
            };
          } catch (a) {
            return null;
          }
        });
      return a;
    }
    g.createOzCustomRepresentationParsers = a;
  },
  98,
);
__d(
  'oz-player/shims/www/ozvariantWWW',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    a = h;
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/ozvariant',
  ['oz-player/shims/www/ozvariantWWW'],
  function (a, b, c, d, e, f, g) {
    g['default'] = c('oz-player/shims/www/ozvariantWWW');
  },
  98,
);
__d(
  'oz-player/utils/OzNumericalHelper',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 1e-5;
    function h(a, b, c) {
      c === void 0 && (c = g);
      return Math.abs(b - a) <= c;
    }
    function i(a, b, c) {
      c === void 0 && (c = g);
      return a > b && !h(a, b, c);
    }
    function j(a, b, c) {
      c === void 0 && (c = g);
      return a < b && !h(a, b, c);
    }
    function a(a, b, c) {
      c === void 0 && (c = g);
      return j(a, b, c) || h(a, b, c);
    }
    function b(a, b, c) {
      c === void 0 && (c = g);
      return i(a, b, c) || h(a, b, c);
    }
    f.equalTo = h;
    f.greaterThan = i;
    f.lessThan = j;
    f.lessThanOrEqual = a;
    f.greaterThanOrEqual = b;
  },
  66,
);
__d(
  'oz-player/utils/OzNumericalRangeUtil',
  ['oz-player/utils/OzNumericalHelper'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 0.01;
    function i(a, b) {
      b = b.rangeEnd;
      return b == null
        ? !1
        : Math.abs(a.rangeStart - b) > h && a.rangeStart > b;
    }
    function j(a, b) {
      a = a.rangeEnd;
      b = b.rangeEnd;
      if (a == null) return !0;
      return b == null ? !1 : Math.abs(a - b) > h && a > b;
    }
    function k(a, b, c, d) {
      a = c.rangeEnd;
      return a == null
        ? !1
        : b === a || (Math.abs(b - a) > ((c = d) != null ? c : h) && b > a);
    }
    function a(a, b, c) {
      var d = b.rangeEnd;
      if (d == null) return !1;
      c = (c = c) != null ? c : h;
      return a - b.rangeStart >= c && d - a >= c;
    }
    function l(a, b) {
      return a > b - h;
    }
    function b(a) {
      if (!a.length) return [];
      var b = [],
        c = a[0];
      b.push(c);
      for (var d = 1; d < a.length; d++) {
        var e = a[d];
        if (!j(e, c)) continue;
        else
          i(e, c)
            ? ((c = { rangeStart: e.rangeStart, rangeEnd: e.rangeEnd }),
              b.push(c))
            : (c.rangeEnd = e.rangeEnd);
      }
      return b;
    }
    function c(a, b, c) {
      return b
        .reduceRight(function (b, d) {
          k(a, d.rangeStart, c) || k(a, c.rangeStart, d)
            ? b.push(d)
            : (c.rangeEnd != null &&
                (d.rangeEnd == null || k(a, d.rangeEnd, c)) &&
                b.push({ rangeStart: c.rangeEnd, rangeEnd: d.rangeEnd }),
              l(c.rangeStart, d.rangeStart) &&
                b.push({ rangeStart: d.rangeStart, rangeEnd: c.rangeStart }));
          return b;
        }, [])
        .filter(function (a) {
          return a.rangeEnd == null || a.rangeStart < a.rangeEnd;
        })
        .reverse();
    }
    function e(a, b, c, d) {
      d === void 0 && (d = h);
      for (var e = 0; e < c.length; e++) {
        var f = c[e],
          g = f.rangeStart;
        if (l(b, g) && !k(a, b, f, d)) return e;
      }
      return -1;
    }
    function f(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d = d.rangeStart;
        if (!l(a, d)) return c;
      }
      return -1;
    }
    function m(a, b, c) {
      return a >= b
        ? 0
        : c.reduceRight(function (c, d) {
            var e = d.rangeStart;
            d = d.rangeEnd;
            if (b < e || (d != null && a > d)) return c;
            else if (d == null || b <= d) return Math.min(b - e, b - a) + c;
            else if (a >= e) return Math.min(d - a, b - a) + c;
            else return d - e + c;
          }, 0);
    }
    function n(a, b) {
      var c;
      c = a.length == 0 ? ((c = b[b.length - 1]) != null ? c : null) : null;
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        for (var g = e; g < b.length; g++) {
          var h = b[g];
          if (
            d('oz-player/utils/OzNumericalHelper').equalTo(
              f.rangeStart,
              h.rangeStart,
            ) &&
            f.rangeEnd != null &&
            h.rangeEnd != null &&
            d('oz-player/utils/OzNumericalHelper').equalTo(
              f.rangeEnd,
              h.rangeEnd,
            )
          )
            break;
          else if (
            h.rangeEnd != null &&
            f.rangeEnd != null &&
            !d('oz-player/utils/OzNumericalHelper').equalTo(
              f.rangeStart,
              h.rangeStart,
            )
          ) {
            c = { rangeStart: h.rangeStart, rangeEnd: h.rangeEnd };
            break;
          } else if (
            h.rangeEnd != null &&
            f.rangeEnd != null &&
            d('oz-player/utils/OzNumericalHelper').equalTo(
              f.rangeStart,
              h.rangeStart,
            ) &&
            !d('oz-player/utils/OzNumericalHelper').equalTo(
              f.rangeEnd,
              h.rangeEnd,
            )
          ) {
            c = { rangeStart: f.rangeEnd, rangeEnd: h.rangeEnd };
            break;
          }
        }
        if (c !== null) break;
      }
      return c;
    }
    function o(a) {
      var b = [];
      for (var c = 0; c < a.length; c++)
        b.push({ rangeStart: a[c].startTime, rangeEnd: a[c].endTime });
      return b;
    }
    g.isAfter = k;
    g.isWithin = a;
    g.isLargerThan = l;
    g.mergeSortedRanges = b;
    g.diffSortedRanges = c;
    g.findCurrentRangeIndex = e;
    g.findNextRangeIndex = f;
    g.findDiffCoveredByRanges = m;
    g.firstAddedInSortedRanges = n;
    g.convertFromTimeRanges = o;
  },
  98,
);
__d(
  'oz-player/manifests/SegmentTemplateSegmentsContainer',
  [
    'oz-player/manifests/OzSegmentOptions',
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzURI',
    'oz-player/shims/ozvariant',
    'oz-player/utils/OzNumericalHelper',
    'oz-player/utils/OzNumericalRangeUtil',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1e-4;
    a = (function () {
      function a(a, b, d, e, f, g) {
        g === void 0 && (g = !1),
          (this.$7 = new (c('oz-player/shims/OzEventEmitter'))()),
          (this.$10 = null),
          (this.$8 = a),
          (this.$2 = b),
          (this.$3 = d),
          (this.$1 = f),
          (this.$4 = e),
          (this.$5 = this.$11(this.$4)),
          (this.$6 = g),
          (this.$9 = this.$8.getNumber('live_numerical_error_epsilon'));
      }
      var b = a.prototype;
      b.getSegmentByTime = function (a) {
        a = this.$12(a);
        a = a * this.$3;
        var b = null;
        for (var c = this.$4.length - 1; c >= 0; c--) {
          var e = this.$4[c];
          if (
            d('oz-player/utils/OzNumericalHelper').lessThanOrEqual(
              e.t + e.d * (e.r + 1),
              a,
              this.$9,
            )
          )
            break;
          b = e;
        }
        if (b === null) return null;
        if (d('oz-player/utils/OzNumericalHelper').greaterThan(b.t, a, this.$9))
          return null;
        e = Math.max(0, Math.floor((a - b.t + this.$9) / b.d));
        return this.$13(b, e);
      };
      b.getSegment = function (a) {
        var b = 0;
        a = a;
        while (a >= 0 && b < this.$4.length) {
          var c = this.$4[b];
          c = c.r;
          c = c + 1;
          if (a >= c) {
            a -= c;
            b++;
            continue;
          }
          break;
        }
        c = this.$4[b];
        return !c ? null : this.$13(c, a);
      };
      b.getSegmentAfter = function (a) {
        a = a.getTimeRange().endTime;
        return this.getSegmentByTime(a);
      };
      b.getPredictedSegmentAfter = function (a) {
        return null;
      };
      b.canPredict = function () {
        return !1;
      };
      b.canApproximateId = function () {
        return !1;
      };
      b.isEndingSegment = function (a) {
        if (!this.$4 || !this.$4.length || !this.$6) return !1;
        var b = this.$4[this.$4.length - 1],
          c = b.r;
        b = this.$13(b, c);
        return (
          Math.abs(b.getTimeRange().startTime - a.getTimeRange().startTime) +
            Math.abs(b.getTimeRange().endTime - a.getTimeRange().endTime) <
          h
        );
      };
      b.updateWith = function (b) {
        b instanceof a || c('oz-player/shims/ozvariant')(0, 646),
          (this.$6 = b.$6),
          this.$14(b.$4),
          this.$15(b.$4),
          this.$7.emit('segment_updated');
      };
      b.getTimeRanges = function () {
        return this.$10 ? this.$16(this.$5, this.$10) : this.$5;
      };
      b.blockTimeRange = function (a) {
        this.$10 = a;
      };
      b.$16 = function (a, b) {
        return d('oz-player/utils/OzNumericalRangeUtil')
          .diffSortedRanges(
            this.$8,
            a.map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            }),
            { rangeStart: b.startTime, rangeEnd: b.endTime },
          )
          .map(function (a) {
            return {
              startTime: a.rangeStart,
              endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
            };
          });
      };
      b.addUpdateListener = function (a) {
        return this.$7.addListener('segment_updated', a);
      };
      b.$12 = function (a) {
        var b = a,
          c = d('oz-player/utils/OzNumericalRangeUtil').findCurrentRangeIndex(
            this.$8,
            a,
            this.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            }),
          );
        if (c === -1) {
          c = d('oz-player/utils/OzNumericalRangeUtil').findNextRangeIndex(
            a,
            this.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            }),
          );
          c !== -1 && (b = this.getTimeRanges()[c].startTime);
        }
        return b;
      };
      b.$14 = function (a) {
        var b;
        (b = this.$4).splice.apply(b, [0, this.$4.length].concat(a));
        return;
      };
      b.$15 = function (a) {
        a = this.$11(a);
        a = d('oz-player/utils/OzNumericalRangeUtil').mergeSortedRanges(
          this.$5
            .map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
            .concat(
              a.map(function (a) {
                return { rangeStart: a.startTime, rangeEnd: a.endTime };
              }),
            ),
        );
        this.$5 = a.map(function (a) {
          return {
            startTime: a.rangeStart,
            endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
          };
        });
      };
      b.$11 = function (a) {
        var b = this;
        a = d('oz-player/utils/OzNumericalRangeUtil').mergeSortedRanges(
          this.$4.map(function (a) {
            var c = b.$13(a, 0).getTimeRange().startTime;
            a = b.$13(a, a.r).getTimeRange().endTime;
            return { rangeStart: c, rangeEnd: a };
          }),
        );
        return a.map(function (a) {
          var b = a.rangeStart;
          a = a.rangeEnd;
          a = a == null ? Infinity : a;
          return { startTime: b, endTime: a };
        });
      };
      b.$13 = function (a, b) {
        var d = this;
        b === void 0 && (b = 0);
        var e = a.t,
          f = a.d,
          g = a.r;
        a = a.id;
        var h = e + f * b,
          i = this.$8.getBool('use_scf_timebased_segments'),
          j = a != null ? a - (g - b) : null,
          k = new (c('oz-player/manifests/OzSegmentOptions'))();
        return {
          getData: function () {
            return null;
          },
          getURI: function () {
            var a =
              d.$1 != null && j != null
                ? d.$1.replace('$Number$', j.toString())
                : d.$2.replace('$Time$', h.toString());
            a = new (c('oz-player/shims/OzURI'))(a);
            i && a.addQueryData('_nc_scf', 1);
            return a;
          },
          getTimeRange: function () {
            return { startTime: h / d.$3, endTime: (h + f) / d.$3 };
          },
          getByteRange: function () {
            return null;
          },
          getSequenceNumber: function () {
            return null;
          },
          getOptions: function () {
            return k;
          },
        };
      };
      b.getSegmentGroups = function () {
        return this.$4;
      };
      b.getEndingSegment = function () {
        if (this.$4.length == 0) return null;
        var a = this.$4[this.$4.length - 1],
          b = a.r;
        return this.$13(a, b);
      };
      b.forceParseIfNotParsed = function () {};
      b.getMaxGopSec = function () {
        return null;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/OzUrlHelper',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      a = a;
      var b = a.indexOf('://'),
        c = a.indexOf('/', b + 3);
      c > b && (a = a.substring(c));
      return a;
    }
    function g(a) {
      a = a;
      var b = a.lastIndexOf('/'),
        c = a.lastIndexOf('://');
      b > c + 2 && (a = a.substring(0, b + 1));
      return a;
    }
    function h(a) {
      a = a;
      a = g(a);
      return a.endsWith('/') ? g(a.substring(0, a.length - 1)) : a;
    }
    function i(a, b) {
      a = g(a);
      b = b;
      while (b.length)
        if (b.startsWith('./')) b = b.substring(2);
        else if (b.startsWith('../'))
          (b = b.substring(3)),
            (a = h(a)),
            a.endsWith('/') && (a = a.substring(0, a.length - 1));
        else if (b.startsWith('..')) (b = b.substring(2)), (a = h(a));
        else if (b.startsWith('.')) b = b.substring(1);
        else break;
      b && b.length && (a.endsWith('/') || (a += '/'), (a += b));
      return a;
    }
    function j() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      if (!b || !b.length) return '';
      if (b.length === 1) return b[0];
      var d = b.shift();
      while (b.length > 0) d = i(d, b.shift());
      return d;
    }
    function b(a, b) {
      return k(b) ? b : j(a, b);
    }
    function k(a) {
      var b = /^https?:\/\//i;
      return b.test(a);
    }
    f.stripToPathAndQueryOnly = a;
    f.joinRelativeUrlPaths = j;
    f.joinUrlPaths = b;
  },
  66,
);
__d(
  'PredictedSegmentTemplateSegmentsContainer',
  [
    'oz-player/manifests/OzSegmentOptions',
    'oz-player/manifests/SegmentTemplateSegmentsContainer',
    'oz-player/shims/OzURI',
    'oz-player/shims/ozvariant',
    'oz-player/utils/OzNumericalHelper',
    'oz-player/utils/OzNumericalRangeUtil',
    'oz-player/utils/OzUrlHelper',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j, k) {
        k === void 0 && (k = !1);
        c = a.call(this, b, c, e, f, null, k) || this;
        c.$PredictedSegmentTemplateSegmentsContainer9 = 0;
        c.$PredictedSegmentTemplateSegmentsContainer11 = null;
        c.$PredictedSegmentTemplateSegmentsContainer10 = d;
        c.$PredictedSegmentTemplateSegmentsContainer8 = k;
        c.$PredictedSegmentTemplateSegmentsContainer12 = f;
        c.$PredictedSegmentTemplateSegmentsContainer7 = b;
        c.$PredictedSegmentTemplateSegmentsContainer5 = e;
        c.$PredictedSegmentTemplateSegmentsContainer1 = g;
        c.$PredictedSegmentTemplateSegmentsContainer3 = i;
        c.$PredictedSegmentTemplateSegmentsContainer2 = h;
        c.$PredictedSegmentTemplateSegmentsContainer4 = j;
        c.$PredictedSegmentTemplateSegmentsContainer6 = b.getNumber(
          'live_numerical_error_epsilon',
        );
        for (
          d = 0;
          d < c.$PredictedSegmentTemplateSegmentsContainer12.length;
          d++
        )
          c.$PredictedSegmentTemplateSegmentsContainer9 = Math.max(
            c.$PredictedSegmentTemplateSegmentsContainer12[d].d,
            c.$PredictedSegmentTemplateSegmentsContainer9,
          );
        return c;
      }
      var e = b.prototype;
      e.$PredictedSegmentTemplateSegmentsContainer13 = function () {
        if (
          this.$PredictedSegmentTemplateSegmentsContainer2 != null &&
          this.$PredictedSegmentTemplateSegmentsContainer4 != null
        )
          return {
            predictedAverageDuration:
              this.$PredictedSegmentTemplateSegmentsContainer4,
            predictedMediaStartNumber:
              this.$PredictedSegmentTemplateSegmentsContainer2,
          };
        else return null;
      };
      e.$PredictedSegmentTemplateSegmentsContainer14 = function (a, b, e) {
        var f = this;
        Number.isNaN(e) && c('oz-player/shims/ozvariant')(0, 54238);
        var g = this.$PredictedSegmentTemplateSegmentsContainer1.replace(
            '$Number$',
            e.toString(),
          ),
          h = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getString('cdn_experiment_id', ''),
          i = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getNumber('use_dvl_with_timeout_ms', 0),
          j = new (c('oz-player/manifests/OzSegmentOptions'))();
        return {
          getByteRange: function () {
            return null;
          },
          getData: function () {
            return null;
          },
          getOptions: function () {
            return j;
          },
          getSequenceNumber: function () {
            return e;
          },
          getTimeRange: function () {
            return { endTime: b, startTime: a };
          },
          getURI: function () {
            var a = new (c('oz-player/shims/OzURI'))(g);
            h.length !== 0 && a.addQueryData('_nc_expid', h);
            var b = j.isDVLEnabled();
            b &&
              i > 0 &&
              f.$PredictedSegmentTemplateSegmentsContainer10 != null &&
              (a.addQueryData(
                '_nc_dinfo-manifest-url',
                d('oz-player/utils/OzUrlHelper').stripToPathAndQueryOnly(
                  f.$PredictedSegmentTemplateSegmentsContainer10,
                ),
              ),
              a.addQueryData('_nc_dinfo-timeout', i));
            return a;
          },
        };
      };
      e.updateWith = function (d) {
        d instanceof b || c('oz-player/shims/ozvariant')(0, 646);
        this.$PredictedSegmentTemplateSegmentsContainer3 =
          d.$PredictedSegmentTemplateSegmentsContainer3;
        this.$PredictedSegmentTemplateSegmentsContainer1 =
          d.$PredictedSegmentTemplateSegmentsContainer1;
        a.prototype.updateWith.call(this, d);
        this.$PredictedSegmentTemplateSegmentsContainer12 =
          d.$PredictedSegmentTemplateSegmentsContainer12;
        this.$PredictedSegmentTemplateSegmentsContainer8 =
          d.$PredictedSegmentTemplateSegmentsContainer8;
        for (
          d = 0;
          d < this.$PredictedSegmentTemplateSegmentsContainer12.length;
          d++
        )
          this.$PredictedSegmentTemplateSegmentsContainer9 = Math.max(
            this.$PredictedSegmentTemplateSegmentsContainer12[d].d,
            this.$PredictedSegmentTemplateSegmentsContainer9,
          );
      };
      e.getSegmentByTime = function (a) {
        return this.canApproximateId()
          ? this.$PredictedSegmentTemplateSegmentsContainer15(a)
          : this.$PredictedSegmentTemplateSegmentsContainer16(a);
      };
      e.getPredictedSegmentAfter = function (a) {
        a = a != null ? a.getSequenceNumber() : null;
        return a != null && this.canPredict()
          ? this.$PredictedSegmentTemplateSegmentsContainer14(0, 0, a + 1)
          : null;
      };
      e.blockTimeRange = function (b) {
        (this.$PredictedSegmentTemplateSegmentsContainer11 = b),
          a.prototype.blockTimeRange.call(this, b);
      };
      e.getTimeRanges = function () {
        var b = this.$PredictedSegmentTemplateSegmentsContainer13();
        if (b) {
          b = [
            {
              endTime:
                (this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].t +
                  this.$PredictedSegmentTemplateSegmentsContainer12[
                    this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                  ].d) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
              startTime:
                (this.$PredictedSegmentTemplateSegmentsContainer12[0].t -
                  b.predictedAverageDuration -
                  (this.$PredictedSegmentTemplateSegmentsContainer3 -
                    this.$PredictedSegmentTemplateSegmentsContainer12.length -
                    Number(this.$PredictedSegmentTemplateSegmentsContainer2)) *
                    Number(b.predictedAverageDuration)) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
            },
          ];
          var c = this.$PredictedSegmentTemplateSegmentsContainer11;
          return c == null
            ? b
            : d('oz-player/utils/OzNumericalRangeUtil')
                .diffSortedRanges(
                  this.$PredictedSegmentTemplateSegmentsContainer7,
                  b.map(function (a) {
                    return { rangeEnd: a.endTime, rangeStart: a.startTime };
                  }),
                  { rangeEnd: c.endTime, rangeStart: c.startTime },
                )
                .map(function (a) {
                  return {
                    endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
                    startTime: a.rangeStart,
                  };
                });
        } else return a.prototype.getTimeRanges.call(this);
      };
      e.canPredict = function () {
        return !0;
      };
      e.canApproximateId = function () {
        var a = this.$PredictedSegmentTemplateSegmentsContainer13();
        return a != null;
      };
      e.$PredictedSegmentTemplateSegmentsContainer16 = function (a) {
        var b = null;
        a = a * this.$PredictedSegmentTemplateSegmentsContainer5;
        var e =
            this.$PredictedSegmentTemplateSegmentsContainer12.length > 0
              ? this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].t +
                this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].d
              : null,
          f = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getNumber('pdash_future_edgelatency_gops', 0);
        if (
          e != null &&
          e <= a &&
          f !== 0 &&
          a < e + this.$PredictedSegmentTemplateSegmentsContainer9 * f
        ) {
          e =
            a -
            (this.$PredictedSegmentTemplateSegmentsContainer12[
              this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
            ].t +
              this.$PredictedSegmentTemplateSegmentsContainer12[
                this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
              ].d);
          e = this.$PredictedSegmentTemplateSegmentsContainer9
            ? 0
            : Math.floor(e / this.$PredictedSegmentTemplateSegmentsContainer9);
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            0,
            0,
            this.$PredictedSegmentTemplateSegmentsContainer3 + 1 + e,
          );
        }
        e = 0;
        for (
          var g = 0;
          this.$PredictedSegmentTemplateSegmentsContainer12.length - 1 - g >= 0;
          g++
        ) {
          var h =
            this.$PredictedSegmentTemplateSegmentsContainer12[
              this.$PredictedSegmentTemplateSegmentsContainer12.length - 1 - g
            ];
          h.r === 0 || c('oz-player/shims/ozvariant')(0, 18769);
          if (
            d('oz-player/utils/OzNumericalHelper').lessThanOrEqual(
              h.t + h.d * (h.r + 1),
              a,
              this.$PredictedSegmentTemplateSegmentsContainer6,
            )
          )
            break;
          b = h;
          e = g;
        }
        if (b === null || (f > 0 && a < b.t)) return null;
        else
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            b.t / this.$PredictedSegmentTemplateSegmentsContainer5,
            (b.t + b.d) / this.$PredictedSegmentTemplateSegmentsContainer5,
            this.$PredictedSegmentTemplateSegmentsContainer3 - e,
          );
      };
      e.$PredictedSegmentTemplateSegmentsContainer15 = function (a) {
        var b = a * this.$PredictedSegmentTemplateSegmentsContainer5,
          c = this.getTimeRanges();
        if (
          d('oz-player/utils/OzNumericalHelper').greaterThan(c[0].startTime, a)
        )
          return null;
        else if (
          d('oz-player/utils/OzNumericalHelper').lessThanOrEqual(
            this.$PredictedSegmentTemplateSegmentsContainer12[0].t,
            b,
          )
        )
          return this.$PredictedSegmentTemplateSegmentsContainer16(a);
        else {
          c = Math.ceil(
            (this.$PredictedSegmentTemplateSegmentsContainer12[0].t - b) /
              Number(this.$PredictedSegmentTemplateSegmentsContainer4),
          );
          b = Math.max(
            Number(this.$PredictedSegmentTemplateSegmentsContainer2),
            this.$PredictedSegmentTemplateSegmentsContainer3 -
              this.$PredictedSegmentTemplateSegmentsContainer12.length +
              1 -
              c,
          );
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            a,
            a +
              Number(this.$PredictedSegmentTemplateSegmentsContainer4) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
            b,
          );
        }
      };
      e.isEndingSegment = function (b) {
        if (!this.$PredictedSegmentTemplateSegmentsContainer8) return !1;
        var c = b.getSequenceNumber();
        return c != null
          ? c >= this.$PredictedSegmentTemplateSegmentsContainer3
          : a.prototype.isEndingSegment.call(this, b);
      };
      e.getEndingSegment = function () {
        if (this.$PredictedSegmentTemplateSegmentsContainer12.length === 0)
          return null;
        var a =
          this.$PredictedSegmentTemplateSegmentsContainer12[
            this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
          ];
        return this.$PredictedSegmentTemplateSegmentsContainer14(
          a.t / this.$PredictedSegmentTemplateSegmentsContainer5,
          (a.t + a.d) / this.$PredictedSegmentTemplateSegmentsContainer5,
          this.$PredictedSegmentTemplateSegmentsContainer3,
        );
      };
      e.getMaxGopSec = function () {
        return (
          this.$PredictedSegmentTemplateSegmentsContainer9 /
          this.$PredictedSegmentTemplateSegmentsContainer5
        );
      };
      return b;
    })(c('oz-player/manifests/SegmentTemplateSegmentsContainer'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzDefaultSegmentTimelineParser',
  [
    'oz-player/manifests/SegmentTemplateSegmentsContainer',
    'oz-player/utils/OzUrlHelper',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {}
      a.parseSegments = function (a, b) {
        a = [];
        b.SegmentTimeline[0].S &&
          (a = b.SegmentTimeline[0].S.map(function (a) {
            return {
              t: Number.parseInt(a.$.t, 10),
              d: Number.parseInt(a.$.d, 10),
              r: Number.parseInt(a.$.r || '0', 10),
              id: a.$.id ? Number.parseInt(a.$.id, 10) : void 0,
            };
          }));
        return a;
      };
      var b = a.prototype;
      b.parseSegmentsContainer = function (b, e, f) {
        return new (c('oz-player/manifests/SegmentTemplateSegmentsContainer'))(
          b,
          d('oz-player/utils/OzUrlHelper').joinUrlPaths(e.baseUrl, f.$.media),
          Number.parseInt(f.$.timescale, 10),
          a.parseSegments(b, f),
          null,
          e.isStaticMpd,
        );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'OzPredictedSegmentTimelineParser',
  [
    'PredictedSegmentTemplateSegmentsContainer',
    'oz-player/manifests/SegmentTemplateSegmentsContainer',
    'oz-player/parsers/OzDefaultSegmentTimelineParser',
    'oz-player/shims/OzURI',
    'oz-player/utils/OzUrlHelper',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.parseSegmentsContainer = function (a, b, e) {
        var f;
        if (e.SegmentTimeline[0].$.FBPredictedMedia) {
          f = d('oz-player/utils/OzUrlHelper').joinUrlPaths(
            b.baseUrl,
            e.SegmentTimeline[0].$.FBPredictedMedia,
          );
          var g = new (c('oz-player/shims/OzURI'))(f);
          g.addQueryData('_nc_sc', 1);
          f = g.toString();
        }
        var h;
        e.SegmentTimeline[0].$.FBPredictedMediaStartNumber &&
          (h = Number.parseInt(
            e.SegmentTimeline[0].$.FBPredictedMediaStartNumber,
            0,
          ));
        var i;
        e.SegmentTimeline[0].$.FBPredictedMediaEndNumber &&
          (i = Number.parseInt(
            e.SegmentTimeline[0].$.FBPredictedMediaEndNumber,
            0,
          ));
        var j;
        e.SegmentTimeline[0].$.FBAverageDuration &&
          (j = Number.parseInt(e.SegmentTimeline[0].$.FBAverageDuration, 0));
        g = c('oz-player/parsers/OzDefaultSegmentTimelineParser').parseSegments(
          a,
          e,
        );
        return ((b.isTemplatedMpd && h != null && j != null) ||
          !b.isTemplatedMpd) &&
          f != null &&
          i != null
          ? new (c('PredictedSegmentTemplateSegmentsContainer'))(
              a,
              d('oz-player/utils/OzUrlHelper').joinUrlPaths(
                b.baseUrl,
                e.$.media,
              ),
              b.mpdUrl,
              Number.parseInt(e.$.timescale, 10),
              g,
              f,
              h,
              i,
              j,
              b.isStaticMpd,
            )
          : new (c('oz-player/manifests/SegmentTemplateSegmentsContainer'))(
              a,
              d('oz-player/utils/OzUrlHelper').joinUrlPaths(
                b.baseUrl,
                e.$.media,
              ),
              Number.parseInt(e.$.timescale, 10),
              g,
              f,
              b.isStaticMpd,
            );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/www/OzStreamsWWW',
  ['cr:927622', 'cr:927623'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    c = Boolean(b('cr:927622'));
    d = Boolean(b('cr:927623'));
    e = b('cr:927622') ? b('cr:927622').ReadableStream : a.ReadableStream;
    f = b('cr:927623') ? b('cr:927623').WritableStream : a.WritableStream;
    g.OzReadableStream = e;
    g.OzReadableStreamIsPolyfilled = c;
    g.OzWritableStream = f;
    g.OzWritableStreamIsPolyfilled = d;
  },
  98,
);
__d(
  'oz-player/shims/OzStreams',
  ['oz-player/shims/www/OzStreamsWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    (g.OzReadableStream = d(
      'oz-player/shims/www/OzStreamsWWW',
    ).OzReadableStream),
      (g.OzReadableStreamIsPolyfilled = d(
        'oz-player/shims/www/OzStreamsWWW',
      ).OzReadableStreamIsPolyfilled),
      (g.OzWritableStream = d(
        'oz-player/shims/www/OzStreamsWWW',
      ).OzWritableStream),
      (g.OzWritableStreamIsPolyfilled = d(
        'oz-player/shims/www/OzStreamsWWW',
      ).OzWritableStreamIsPolyfilled);
  },
  98,
);
__d(
  'oz-player/networks/OzTransformStream',
  [
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzStreams',
    'oz-player/utils/OzError',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this) || this;
        var f =
            (b = b == null ? void 0 : b.errorTransform) != null
              ? b
              : function (a) {
                  return a;
                },
          g,
          h;
        e.writable = new (d('oz-player/shims/OzStreams').OzWritableStream)({
          start: function (a) {
            h = a;
          },
          write: function (a) {
            e.emit('writableWrite', a);
            try {
              e.onDataWritten(a);
            } catch (a) {
              g.error(
                new (c('oz-player/utils/OzError'))({
                  type: 'OZ_STREAM',
                  description:
                    'Error from write handler: ' + e.constructor.name,
                  extra: { code: 'OZ_S-0', originalError: a },
                }),
              );
            }
            g.enqueue(a);
          },
          close: function () {
            e.emit('writableClose');
            try {
              e.onClose();
            } catch (a) {
              g.error(
                new (c('oz-player/utils/OzError'))({
                  type: 'OZ_STREAM',
                  description:
                    'Error from close handler: ' + e.constructor.name,
                  extra: { code: 'OZ_S-1', originalError: a },
                }),
              );
            }
            g.close();
          },
          abort: function (a) {
            a = f(a);
            g.error(a);
          },
        });
        e.readable = new (d('oz-player/shims/OzStreams').OzReadableStream)({
          start: function (a) {
            g = a;
          },
          cancel: function (a) {
            e.emit('readableCancel', a), h.error(a);
          },
        });
        return e;
      }
      var e = b.prototype;
      e.onDataWritten = function (a) {};
      e.onClose = function () {};
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/www/OzPerformanceWWW',
  ['performance', 'performanceNow'],
  function (a, b, c, d, e, f, g) {
    a = {
      now: function () {
        return c('performanceNow')();
      },
      getEntriesByName: function (a, b) {
        return typeof c('performance').getEntriesByName === 'function'
          ? c('performance').getEntriesByName(a, b)
          : [];
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'oz-player/shims/OzPerformance',
  ['oz-player/shims/www/OzPerformanceWWW'],
  function (a, b, c, d, e, f, g) {
    g['default'] = c('oz-player/shims/www/OzPerformanceWWW');
  },
  98,
);
__d(
  'oz-player/utils/OzResourceTimingUtils',
  ['oz-player/shims/OzPerformance'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = function (a) {
      a = c('oz-player/shims/OzPerformance').getEntriesByName(a, 'resource');
      return a.reduce(function (a, b) {
        return a == null ? b : b.responseEnd < a.responseEnd ? a : b;
      }, null);
    };
    g.getLatestResourceTimingEntry = a;
  },
  98,
);
__d(
  'OzVideoLiveTraceNetworkRequestStreamHandler',
  [
    'oz-player/networks/OzTransformStream',
    'oz-player/utils/OzResourceTimingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        b === void 0 && (b = !1), (this.$2 = !1), (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.onResponse = function (a, b) {
        var e = this,
          f = a.headers,
          g = null;
        if (!this.$1) return null;
        a = new (c('oz-player/networks/OzTransformStream'))();
        a.addListener('writableClose', function () {
          var a = {},
            c = d(
              'oz-player/utils/OzResourceTimingUtils',
            ).getLatestResourceTimingEntry(b);
          c &&
            (a.lat = Math.round(c.responseStart - c.requestStart).toString());
          e.$1 && f && e.$1(f, g, a);
        });
        this.$2 &&
          a.addListener('writableWrite', function (a) {
            g === null ? (g = [a]) : g.push(a);
          });
        return a;
      };
      b.onError = function (a, b) {
        return null;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'TimeRanges',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        (this.$1 = []), (this.$1 = a);
      }
      var b = a.prototype;
      b.start = function (a) {
        this.$1[a] || h(0, 2205);
        return this.$1[a].startTime;
      };
      b.end = function (a) {
        this.$1[a] || h(0, 2205);
        return this.$1[a].endTime;
      };
      b.length = function () {
        return this.$1.length;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/OzAbrUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = function (a, b, c, d) {
      var e = a.getNumber('resolution_constraint_factor');
      if (e === 0) return b;
      var f = b.filter(function (b) {
        var f = b.getWidth() <= c.width * d * e;
        b = b.getHeight() <= c.height * d * e;
        return a.getBool('use_strict_resolution_constraint') ? f && b : f || b;
      });
      return !f.length ? [b[0]] : f;
    };
    b = function (a, b, c, d, e, f) {
      b = b
        ? a.getNumber('min_switch_interval')
        : a.getNumber('initial_switch_interval');
      d = d >= a.getNumber('abr_min_bandwidth_samples');
      var g = a.getNumber('abr_eval_buffer_threshold');
      c = !g || c >= g;
      g = null;
      e + a.getNumber('min_eval_interval') > Date.now()
        ? (g = 'min_eval_interval')
        : f + b > Date.now()
        ? (g = 'min_switch_interval')
        : !d
        ? (g = 'min_bandwidth_samples')
        : c || (g = 'buffer_threshold_not_satisfied');
      return g;
    };
    f.excludeLargeRepresentations = a;
    f.getReasonToPreventEvaluation = b;
  },
  66,
);
__d(
  'oz-player/utils/OzBufferingUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    e = 0.1;
    var g = 1,
      h = 0.2;
    function a(a, b, c) {
      if (i(a, c)) return !0;
      c = a.currentTime;
      var d = 0;
      for (var e = 0; e < a.buffered.length; e++) {
        var f = a.buffered.start(e),
          g = a.buffered.end(e);
        if (f <= c && g >= c) {
          d = g;
          break;
        }
      }
      return d - c > b;
    }
    function i(a, b) {
      var c = a.currentTime,
        d = 0;
      for (var e = 0; e < a.buffered.length; e++) {
        var f = a.buffered.start(e),
          g = a.buffered.end(e);
        if (f <= c && g >= c) {
          d = g;
          break;
        }
      }
      return Math.abs(d - b) <= h || Math.abs(c - b) <= h;
    }
    function b(a, b) {
      a = a ? a.getSourceBufferState() : null;
      if (!a) return 0;
      b = b.getCurrentTime();
      return j(b, a.getBufferedRanges());
    }
    function j(a, b) {
      var c = null;
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e.startTime <= a && e.endTime > a && (c = e);
      }
      return !c ? 0 : c.endTime - a;
    }
    function c(a) {
      var b = [];
      for (var c = 0; c < a.buffered.length; c++)
        b.push({
          rangeStart: a.buffered.start(c),
          rangeEnd: a.buffered.end(c),
        });
      return b;
    }
    function d(a, b, c, d) {
      if (c.length === 0 || b.size === 0) return !1;
      var e = null;
      for (var f = 0; f < c.length; f++) {
        var g = c[f],
          h = b.get(g);
        if (l(a, 0, h)) {
          e = g;
          break;
        }
      }
      if (e == null) return !1;
      var i = !0;
      b.forEach(function (c, b) {
        if (e === b) return;
        b = c.getBufferedRanges();
        b.forEach(function (b) {
          i = k(a, b, d, i);
        });
      });
      return !i;
    }
    function k(a, b, c, d) {
      return a >= b.startTime && a < b.endTime + c ? !1 : d;
    }
    function l(a, b, c) {
      b === void 0 && (b = 0);
      if (c) {
        c = c.getBufferedRanges();
        for (var d = 0; d < c.length; d++)
          if (c[d].startTime <= a && c[d].endTime > a && c[d].endTime - a > b)
            return !0;
      }
      return !1;
    }
    f.BUFFER_UNDERFLOW_THRESHOLD = e;
    f.BUFFER_OVERFLOW_THRESHOLD = g;
    f.BUFFER_FUDGE_FACTOR = h;
    f.hasEnoughBuffer = a;
    f.hasBufferedToOrReachedEnd = i;
    f.getBufferAheadFromPlaybackStates = b;
    f.getBufferAheadFromCurrentTime = j;
    f.getNumericalRangesFromSourceBuffer = c;
    f.hasEnoughPartialBuffer = d;
    f.hasBuffer = l;
  },
  66,
);
__d(
  'oz-player/utils/OzPlaybackRestrictionsUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = function (a, b) {
      return a.getBandwidth() - b.getBandwidth();
    };
    a = function (a, b, c, d) {
      if (d.length === 0) return [];
      d.sort(g);
      a = b.reduce(function (a, b) {
        return b.applyRestriction(a, c);
      }, d);
      return a;
    };
    f.applyVideoPlaybackRestrictions = a;
  },
  66,
);
__d(
  'OzSystemicRiskABRManager',
  [
    'MosUtils',
    'OzSystemicRiskUtils',
    'oz-player/networks/OzBandwidthEstimator',
    'oz-player/utils/OzAbrUtils',
    'oz-player/utils/OzBufferingUtils',
    'oz-player/utils/OzPlaybackRestrictionsUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 6e4,
      i = 2e3,
      j = {
        BANDWIDTH: 'br',
        BUFFER: 'vb',
        ENCODING: 'er',
        LOW_MOS: 'lm',
        MULTIPLIER: 'm',
        PREVIOUS_MOS: 'pm',
        PREVIOUS_RESOLUTION: 'pr',
      };
    a = (function () {
      function a(a, b, c, d, e, f, g, h) {
        (this.$11 = !1),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$7 = f),
          (this.$8 = g),
          (this.$9 = h);
      }
      var b = a.prototype;
      b.setSourceBuffer = function (a) {
        this.$6 = a;
      };
      b.updateRepresentations = function (a) {
        var b = this;
        this.$3 = a;
        a = this.$3.find(function (a) {
          return a.getQualityLabel() === b.$2.getQualityLabel();
        });
        this.$2 = (a = a) != null ? a : this.$3[0];
      };
      b.getBestRepresentation = function (a) {
        var b = this.$1.getLegacyConfig(),
          e = d(
            'oz-player/utils/OzBufferingUtils',
          ).getBufferAheadFromPlaybackStates(this.$6, this.$5),
          f = this.$5.getDuration();
        f = isNaN(f) ? h : f;
        if (this.$3.length === 0) {
          this.$10 = 'no available representations';
          return this.$2;
        }
        var g = this.$5.getCurrentTime();
        f = this.$9 === 'static' ? (f - g) * 1e3 : h;
        g = this.$8();
        a = b.getBool('systemic_risk_use_fetch_range_duration', !1)
          ? this.$12(a)
          : i;
        var j = b.getBool('use_bandwidth_estimate_from_headers_in_abr', !1)
          ? c(
              'oz-player/networks/OzBandwidthEstimator',
            ).getBandwidthDiagnosticsFromHeaders(b)
          : c(
              'oz-player/networks/OzBandwidthEstimator',
            ).getBandwidthDiagnostics(b);
        if (j == null) {
          this.$10 = 'missing bandwidth diagnostics';
          return this.$2;
        }
        var k = this.$13(this.$3).sort(function (a, b) {
            return a.getBandwidth() - b.getBandwidth();
          }),
          l = null,
          m = null,
          n = null;
        for (var o = 0; o < k.length; o++) {
          var p = k[Math.max(o - 1, 0)],
            q = this.$14(p, g);
          p = Math.min(p.getHeight(), p.getWidth());
          m = d('OzSystemicRiskUtils').getRiskFactorsForRepresentation({
            bandwidthDiagnostics: j,
            bitrate: k[o].getBandwidth(),
            bufferAhead: e,
            config: this.$1.getLegacyConfig(),
            hasMadeInitialDecision: this.$11,
            initialRiskFactor: b.getNumber(
              'systemic_risk_abr_initial_risk_factor',
              1,
            ),
            lowMosResolution: b.getNumber(
              'systemic_risk_abr_low_mos_resolution',
              0,
            ),
            minWatchableMos: b.getNumber(
              'systemic_risk_abr_min_watchable_mos',
              0,
            ),
            previousMos: q,
            previousResolution: p,
            remainingVideoDurationMs: f,
            segmentFetchRangeDurationMs: a,
          });
          q = m;
          p = q.multiplier;
          if (isNaN(p)) {
            n = m;
            l = this.$2;
            break;
          }
          q = d('OzSystemicRiskUtils').isEffectiveBitrateBelowBandwidthEstimate(
            k[o].getBandwidth(),
            m.multiplier,
            a,
            j,
          );
          if (q) (n = m), (l = k[o]);
          else break;
        }
        l == null
          ? (this.$2 =
              b.getBool('respect_playback_restrictions_in_abr_fallback', !1) &&
              k.length > 0
                ? k[0]
                : this.$3[0])
          : (this.$2 = l);
        this.$15((p = n) != null ? p : m, {
          isSystemicRiskABREnabled: b.getBool('use_systemic_risk_abr', !1),
          noRepresentationSelected: l == null,
          representationCount: k.length,
        });
        this.$11 || (this.$11 = !0);
        return this.$2;
      };
      b.$12 = function (a) {
        var b = i;
        if (a != null && a.length > 0) {
          var c = a[0].getTimeRange().startTime;
          a = a[a.length - 1].getTimeRange().endTime;
          a - c > 0 && (b = (a - c) * 1e3);
        }
        return b;
      };
      b.$14 = function (a, b) {
        a = a.getCustomField('playbackResolutionMos');
        a = d('MosUtils').parsePlaybackMos(String(a));
        return a != null
          ? d('MosUtils').getMosValue(
              a,
              d('MosUtils').getQualityLabel(b.width, b.height),
            )
          : null;
      };
      b.$13 = function (a) {
        var b = this;
        if (
          !this.$1
            .getLegacyConfig()
            .getBool('systemic_risk_abr_apply_representation_restrictions', !1)
        )
          return a;
        var c = this.$1
            .getLegacyConfig()
            .getBool('exclude_large_representations_after_restrictions', !1),
          e = a;
        a = function () {
          e = d('oz-player/utils/OzAbrUtils').excludeLargeRepresentations(
            b.$1,
            e,
            b.$8(),
            b.$7,
          );
        };
        var f = function () {
          e = d(
            'oz-player/utils/OzPlaybackRestrictionsUtils',
          ).applyVideoPlaybackRestrictions(b.$1, b.$4, b.$8(), e);
        };
        c || (a(), f());
        c && (f(), a());
        return e;
      };
      b.$15 = function (a, b) {
        if (a == null) return;
        var c = b.isSystemicRiskABREnabled,
          d = b.noRepresentationSelected;
        b = b.representationCount;
        this.$10 = [
          [j.LOW_MOS, a.lowMos],
          [j.ENCODING, a.encoding],
          [j.BANDWIDTH, a.bandwidth],
          [j.MULTIPLIER, a.multiplier],
          [j.BUFFER, a.buffer],
          [j.PREVIOUS_MOS, a.previousMos],
          [j.PREVIOUS_RESOLUTION, a.previousResolution],
        ].reduce(function (a, b) {
          var c = b[1],
            d = '';
          switch (typeof c) {
            case 'number':
              d = c.toFixed(1);
              break;
            case 'boolean':
              d = c ? '1' : '0';
              break;
            default:
              d = 'null';
          }
          return a + (b[0] + ': ' + d + ';');
        }, '');
        c || (this.$10 += 'disabled;');
        d && (this.$10 += 'none-selected-of-' + b + ';');
      };
      b.getLastEvaluationReason = function () {
        return this.$10;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/drm/OzDrmUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = function (a) {
      return Uint8Array.from(window.atob(a), function (a) {
        return a.charCodeAt(0);
      });
    };
    b = function (a) {
      return window.btoa(String.fromCharCode.apply(null, new Uint8Array(a)));
    };
    f.base64ToUint8Array = a;
    f.arrayBufferToBase64 = b;
  },
  66,
);
__d(
  'OzWidevineDrmProvider',
  ['ConstUriUtils', 'FBLogger', 'oz-player/drm/OzDrmUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, e, f, g) {
        this.$2 = [];
        this.$4 = !0;
        this.$5 = !1;
        g != null &&
          g !== '' &&
          (this.$1 = d('oz-player/drm/OzDrmUtils').base64ToUint8Array(g));
        if (b != null && f != null) {
          b =
            (g = d('ConstUriUtils').getUri(b)) == null
              ? void 0
              : g.addQueryParam('access_token', f);
          if (b == null)
            throw c('FBLogger')('comet_video_player').mustfixThrow(
              'Invalid Graph API license uri for video: %s',
              a,
            );
          this.$3 = b.toString();
          this.$5 = !0;
          this.$4 = !1;
        } else {
          g = e['0'];
          if (g == null) {
            g = '/video/drm/getlicense';
            b =
              (f = d('ConstUriUtils').getUri(g)) == null
                ? void 0
                : f.addQueryParam('video_id', a);
            if (b == null)
              throw c('FBLogger')('comet_video_player').mustfixThrow(
                'Invalid server license uri for video: %s',
                a,
              );
            this.$3 = b.toString();
          } else this.$3 = g;
        }
      }
      var b = a.prototype;
      b.getKeySystem = function () {
        return 'com.widevine.alpha';
      };
      b.getSchemeId = function () {
        return 'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed';
      };
      b.getInitDatas = function () {
        return this.$2;
      };
      b.setInitDatas = function (a) {
        this.$2 = a;
      };
      b.getRequireDistinctiveIdentifier = function () {
        return 'optional';
      };
      b.getRequirePersistentState = function () {
        return 'optional';
      };
      b.getInitDataTypes = function () {
        return;
      };
      b.getDrmSessionTypes = function () {
        return ['temporary'];
      };
      b.getAudioRobustness = function () {
        return '';
      };
      b.getVideoRobustness = function () {
        return '';
      };
      b.getServerCertificate = function () {
        return this.$1;
      };
      b.getLicenseRequestInfo = function (a) {
        var b = {
          url: this.$3,
          method: 'POST',
          body: '',
          headers: {},
          credentials: void 0,
        };
        this.$4 && (b.credentials = 'include');
        a = d('oz-player/drm/OzDrmUtils').arrayBufferToBase64(a);
        if (this.$5) {
          var c = { request: a };
          b.body = JSON.stringify(c);
          b.headers['Content-Type'] = 'application/json';
        } else (b.body = a), (b.headers['Content-Type'] = 'application/text');
        return b;
      };
      b.parseLicenseResponse = function (a) {
        a = String.fromCharCode.apply(null, a);
        var b;
        try {
          b = JSON.parse(a);
        } catch (a) {
          b = void 0;
        }
        var c;
        if (b !== void 0 && b.data !== void 0 && b.data.length === 1) {
          b = b.data[0];
          b.error != null || (c = b.license);
        } else c = a;
        if (c != null && c !== '')
          try {
            return d('oz-player/drm/OzDrmUtils').base64ToUint8Array(c);
          } catch (a) {
            if (a.name === 'InvalidCharacterError')
              throw new Error('Endpoint returned error: ' + c);
            else throw a;
          }
        return null;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'OzDOMEventListenerImpl',
  ['cr:1351686'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      listenDOMEvent: b('cr:1351686').listen,
      captureDOMEvent: b('cr:1351686').capture,
      suppressDOMEvent: b('cr:1351686').suppress,
    };
    c = a;
    g['default'] = c;
  },
  98,
);
__d(
  'oz-player/shims/www/OzDOMEventListenerWWW',
  ['OzDOMEventListenerImpl'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('OzDOMEventListenerImpl');
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/shims/OzDOMEventListener',
  ['oz-player/shims/www/OzDOMEventListenerWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/OzDOMEventListenerWWW');
  },
  98,
);
__d(
  'oz-player/shims/www/OzSubscriptionsHandlerWWW',
  ['SubscriptionsHandler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('SubscriptionsHandler');
  },
  98,
);
__d(
  'oz-player/shims/OzSubscriptionsHandler',
  ['oz-player/shims/www/OzSubscriptionsHandlerWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/OzSubscriptionsHandlerWWW');
  },
  98,
);
__d(
  'oz-player/shims/www/ozThrottleWWW',
  ['throttle'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('throttle');
  },
  98,
);
__d(
  'oz-player/shims/ozThrottle',
  ['oz-player/shims/www/ozThrottleWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/ozThrottleWWW');
  },
  98,
);
__d(
  'oz-player/strategies/OzBufferingDetectorStates',
  ['oz-player/utils/OzBufferingUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function () {
        function a(a, b, c) {
          (this.$1 = a), (this.$2 = b), (this.$3 = c);
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          if (a.type === 'pause' || b.paused) return new i(this.$1, this.$2);
          a =
            this.$3 instanceof j
              ? this.$1.getInPlayBufferOverflowTarget()
              : this.$1.getStartBufferUnderflowTarget();
          return d('oz-player/utils/OzBufferingUtils').hasEnoughBuffer(b, a, c)
            ? new j(this.$1, this.$2)
            : this;
        };
        return a;
      })(),
      i = (function () {
        function a(a, b) {
          (this.$1 = a), (this.$2 = b);
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          return a.type === 'play' || a.type === 'playing' || !b.paused
            ? d('oz-player/utils/OzBufferingUtils').hasEnoughBuffer(
                b,
                this.$1.getStartBufferUnderflowTarget(),
                c,
              )
              ? new j(this.$1, this.$2)
              : new h(this.$1, this.$2, this)
            : this;
        };
        return a;
      })(),
      j = (function () {
        function a(a, b) {
          (this.$1 = a),
            (this.$2 = b),
            (this.$3 = b
              .getString('stream_types_eligible_for_partial_playback', '')
              .split(','));
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c, e) {
          e === void 0 && (e = new Map());
          if (a.type === 'pause' || b.paused) return new i(this.$1, this.$2);
          return !d('oz-player/utils/OzBufferingUtils').hasEnoughBuffer(
            b,
            this.$1.getInPlayBufferUnderflowTarget(),
            c,
          ) && !this.$4(a, b.currentTime, e)
            ? new h(this.$1, this.$2, this)
            : this;
        };
        b.$4 = function (a, b, c) {
          return a.type === 'waiting'
            ? !1
            : d('oz-player/utils/OzBufferingUtils').hasEnoughPartialBuffer(
                b,
                c,
                this.$3,
                this.$2.getNumber('partial_playback_buffer_overflow', 0),
              );
        };
        return a;
      })();
    g.OzVideoBufferingState = h;
    g.OzVideoPausedState = i;
    g.OzVideoPlayingState = j;
  },
  98,
);
__d(
  'oz-player/strategies/OzBufferingStateThresholdManager',
  ['oz-player/shims/OzPerformance', 'oz-player/utils/OzBufferingUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        (this.$2 = !1),
          (this.$3 = -Infinity),
          (this.$4 = -Infinity),
          (this.$1 = a);
      }
      var b = a.prototype;
      b.getInPlayBufferUnderflowTarget = function () {
        return this.$1.getNumber(
          'in_play_buffer_underflow_target',
          d('oz-player/utils/OzBufferingUtils').BUFFER_UNDERFLOW_THRESHOLD,
        );
      };
      b.getInPlayBufferOverflowTarget = function () {
        if (this.$5())
          return this.$1.getNumber(
            'stream_interrupt_in_play_buffer_overflow_target',
            d('oz-player/utils/OzBufferingUtils').BUFFER_UNDERFLOW_THRESHOLD,
          );
        return c('oz-player/shims/OzPerformance').now() - this.$4 <
          this.$1.getNumber('recent_buffer_timeout_ms', 0)
          ? this.$1.getNumber(
              'recent_buffer_in_play_buffer_overflow_target',
              d('oz-player/utils/OzBufferingUtils').BUFFER_UNDERFLOW_THRESHOLD,
            )
          : this.$1.getNumber(
              'in_play_buffer_overflow_target',
              d('oz-player/utils/OzBufferingUtils').BUFFER_OVERFLOW_THRESHOLD,
            );
      };
      b.getStartBufferUnderflowTarget = function () {
        return this.$1.getNumber(
          'start_buffer_underflow_target',
          d('oz-player/utils/OzBufferingUtils').BUFFER_UNDERFLOW_THRESHOLD,
        );
      };
      b.notifyBufferingEnd = function () {
        this.$4 = c('oz-player/shims/OzPerformance').now();
      };
      b.notifyStreamInterrupted = function () {
        this.$2 = !0;
      };
      b.notifyStreamResumed = function () {
        (this.$2 = !1), (this.$3 = c('oz-player/shims/OzPerformance').now());
      };
      b.$5 = function () {
        var a = this.$1.getNumber(
          'stream_interrupt_buffer_target_timeout_ms',
          0,
        );
        return a === 0
          ? !1
          : this.$2 || c('oz-player/shims/OzPerformance').now() - this.$3 < a;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzBufferingDetector',
  [
    'oz-player/shims/OzDOMEventListener',
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/shims/ozThrottle',
    'oz-player/strategies/OzBufferingDetectorStates',
    'oz-player/strategies/OzBufferingStateThresholdManager',
    'oz-player/utils/OzBufferingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 150;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f) {
        var g;
        g = a.call(this) || this;
        g.$OzBufferingDetector3 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        g.$OzBufferingDetector6 = new Map();
        g.$OzBufferingDetector8 = null;
        g.$OzBufferingDetector9 = function (a) {
          g.$OzBufferingDetector11(a);
        };
        g.$OzBufferingDetector2 = b;
        g.$OzBufferingDetector4 = e;
        g.$OzBufferingDetector5 = f;
        g.$OzBufferingDetector7 = new (c(
          'oz-player/strategies/OzBufferingStateThresholdManager',
        ))(e);
        g.$OzBufferingDetector2.paused
          ? (g.$OzBufferingDetector1 = new (d(
              'oz-player/strategies/OzBufferingDetectorStates',
            ).OzVideoPausedState)(
              g.$OzBufferingDetector7,
              g.$OzBufferingDetector4,
            ))
          : (g.$OzBufferingDetector1 = d(
              'oz-player/utils/OzBufferingUtils',
            ).hasEnoughBuffer(
              g.$OzBufferingDetector2,
              g.$OzBufferingDetector7.getInPlayBufferUnderflowTarget(),
              g.$OzBufferingDetector5(),
            )
              ? new (d(
                  'oz-player/strategies/OzBufferingDetectorStates',
                ).OzVideoPlayingState)(
                  g.$OzBufferingDetector7,
                  g.$OzBufferingDetector4,
                )
              : new (d(
                  'oz-player/strategies/OzBufferingDetectorStates',
                ).OzVideoBufferingState)(
                  g.$OzBufferingDetector7,
                  g.$OzBufferingDetector4,
                  null,
                ));
        g.$OzBufferingDetector3.addSubscriptions(
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'pause',
            g.$OzBufferingDetector9,
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'play',
            g.$OzBufferingDetector9,
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'progress',
            c('oz-player/shims/ozThrottle')(g.$OzBufferingDetector9, h),
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'timeupdate',
            c('oz-player/shims/ozThrottle')(g.$OzBufferingDetector9, h),
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'seeked',
            g.$OzBufferingDetector9,
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'seeking',
            g.$OzBufferingDetector9,
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'waiting',
            g.$OzBufferingDetector9,
          ),
        );
        g.$OzBufferingDetector3.addSubscriptions(
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'canplay',
            g.$OzBufferingDetector9,
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            g.$OzBufferingDetector2,
            'canplaythrough',
            g.$OzBufferingDetector9,
          ),
        );
        return g;
      }
      var e = b.prototype;
      e.$OzBufferingDetector10 = function () {
        var a = this,
          b = 'unavailable',
          c = this.$OzBufferingDetector7.getInPlayBufferUnderflowTarget();
        this.$OzBufferingDetector6.forEach(function (e, f) {
          var g = a.$OzBufferingDetector2.currentTime;
          d('oz-player/utils/OzBufferingUtils').hasBuffer(g, c, e) ||
            (b = b === 'unavailable' ? f : 'audio/video');
        });
        return b;
      };
      e.setSourceBufferState = function (a, b) {
        this.$OzBufferingDetector6.set(a, b);
      };
      e.$OzBufferingDetector11 = function (a) {
        var b = this.$OzBufferingDetector1.handleEvent(
            a,
            this.$OzBufferingDetector2,
            this.$OzBufferingDetector5(),
            this.$OzBufferingDetector6,
          ),
          c = this.$OzBufferingDetector1;
        this.$OzBufferingDetector1 = b;
        var e =
            b instanceof
            d('oz-player/strategies/OzBufferingDetectorStates')
              .OzVideoBufferingState,
          f =
            c instanceof
            d('oz-player/strategies/OzBufferingDetectorStates')
              .OzVideoBufferingState;
        if (b === c) {
          e &&
            this.$OzBufferingDetector8 &&
            this.$OzBufferingDetector8
              .cloneContext()
              .getOperationLogger('buffering_handle_event')
              .setInitiator(a.type)
              .log();
          return b;
        }
        if (e) {
          e =
            c instanceof
            d('oz-player/strategies/OzBufferingDetectorStates')
              .OzVideoPlayingState
              ? 'in_play'
              : 'start/unpause';
          this.$OzBufferingDetector8 &&
            this.$OzBufferingDetector8
              .cloneContext()
              .getOperationLogger('enter_buffering')
              .setState('buffering')
              .setType(e)
              .setReason(this.$OzBufferingDetector10())
              .setInitiator(a.type)
              .log();
          this.emit('enterBuffering', e);
        } else
          f &&
            (this.$OzBufferingDetector8 &&
              this.$OzBufferingDetector8
                .cloneContext()
                .getOperationLogger('leave_buffering')
                .setInitiator(a.type)
                .log(),
            this.$OzBufferingDetector7.notifyBufferingEnd(),
            this.emit('leaveBuffering', {
              domEventPerfTimestamp: a.timeStamp,
            }));
        return b;
      };
      e.notifyStreamInterrupted = function () {
        this.$OzBufferingDetector7.notifyStreamInterrupted();
      };
      e.notifyStreamResumed = function () {
        this.$OzBufferingDetector7.notifyStreamResumed();
      };
      e.attachPerfLoggerProvider = function (a) {
        this.$OzBufferingDetector8 = a;
      };
      e.destroy = function () {
        this.$OzBufferingDetector3.release();
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerOzImplementationEnginePartsImplUtils',
  [
    'OzSystemicRiskABRManager',
    'OzWidevineDrmProvider',
    'cr:72',
    'gkx',
    'justknobx',
    'oz-player/networks/OzBandwidthEstimator',
    'oz-player/strategies/OzBufferingDetector',
    'qex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = /(livestream-)?lookaside\.(facebook|workplace)\.com$/,
      i = c('qex')._('1658');
    function j(a) {
      return i != null && i !== '' ? i : null;
    }
    function a(a) {
      return h.test(a.getDomain());
    }
    function b(a, b, d, e, f, g) {
      if (f.current != null) return;
      var h = !0,
        i = function () {
          if (h) return !1;
          var a = f.current !== j;
          return a && c('gkx')('1508440') ? !0 : !1;
        },
        j = new (c('oz-player/strategies/OzBufferingDetector'))(
          a,
          d,
          function () {
            var a = e.getCurrentState();
            a = a.controlledState;
            return a.streamEnded ? b.getDuration() : Infinity;
          },
        );
      f.current = j;
      h = !1;
      a = function (a) {
        if (i()) return;
        if (c('gkx')('1235655')) return;
        e.dispatch({
          payload: { bufferingType: a },
          type: 'buffering_begin_requested',
        });
        a = d.getNumber('ull_fallback_stall_count', 0);
        a > 0 &&
          e.getCurrentState().controlledState.latencyLevel === 'ultra-low' &&
          g.getLoggerState().stallCountTotal > a &&
          e.dispatch({
            payload: { latencyLevel: 'low' },
            type: 'implementation_set_latency_level_requested',
          });
      };
      var k = function (a) {
        if (i()) return;
        e.dispatch({
          payload: { domEventPerfTimestamp: a.domEventPerfTimestamp },
          type: 'buffering_end_requested',
        });
      };
      j.addListener('enterBuffering', a);
      j.addListener('leaveBuffering', k);
    }
    function d(a) {
      var b = a.accessToken,
        d = a.graphQLVideoDRMInfo;
      a = a.videoFBID;
      var e = [];
      if (d && a != null) {
        var f = c('justknobx')._('717') ? null : d.widevineCert;
        e.push(
          new (c('OzWidevineDrmProvider'))(
            a,
            d.graphApiVideoLicenseUri,
            d.videoLicenseUriMap,
            b,
            (a = f) != null ? a : null,
          ),
        );
      }
      return e;
    }
    function e(a) {
      var b = a.VideoPlayerShakaPerformanceLoggerClass,
        c = a.accessToken,
        d = a.disableLogging,
        e = a.getApproximateFBLSToPlayerDisplayLatency,
        f = a.getBandwidthEstimate,
        g = a.getPlayerDimensions,
        h = a.getPlayerFormat,
        i = a.playbackIsLiveStreaming,
        j = a.playerInstanceCount,
        k = a.playerInstanceKey,
        l = a.playerSuborigin,
        m = a.playerVersion,
        n = a.videoElement,
        o = a.videoFBID;
      a = a.videoPlayerShakaPerformanceLoggerBuilder;
      if (d || (!a && (!b || !b.shouldInitialize()))) return [];
      c = {
        accessToken: c,
        getApproximateFBLSToPlayerDisplayLatency: e,
        getBandwidthEstimate: f,
        getPlayerDimensions: g,
        getPlayerFormat: h,
        isLive: i,
        isServableViaFbms: !1,
        playerInstanceCount: j,
        playerOrigin: null,
        playerSuborigin: l,
        playerVersion: m,
        representationId: null,
        uniqueID: k,
        video: n,
        videoID: (d = o) != null ? d : '',
      };
      return a != null ? [a.build(c)] : b ? [new b(c)] : [];
    }
    function f(a, b) {
      return b > 0
        ? (b / 1e3) * -1
        : a.getNumber('live_initial_playback_position', 0);
    }
    function k(a, b, c) {
      return b > 0 && c > 0
        ? (b + c) / 1e3
        : a.getNumber('livehead_fall_behind_block_threshold', 0);
    }
    function l(a, b) {
      return b > 0
        ? b / 2 / 1e3
        : a.getNumber('live_time_range_block_margin', 0);
    }
    function m() {
      return function (a, b, d, e, f, g, h, i) {
        return a.getLegacyConfig().getBool('use_systemic_risk_abr', !1)
          ? new (c('OzSystemicRiskABRManager'))(a, b, d, e, f, g, h, i)
          : null;
      };
    }
    function n(a, b) {
      var d = b.experimentationConfig,
        e = b.getCurrentVideoRepresentation,
        f = b.getOzCDNSignedQueryParams,
        g = b.isClientTriggeredTraceEnabled,
        h = b.playbackIsLiveStreaming,
        i = b.playbackSessionId;
      b = b.shouldRefresh403;
      var k = a.getQueryData(),
        l;
      if (h) {
        l = {};
        var m = j(a);
        m !== null &&
          m !== '' &&
          (l = babelHelpers['extends']({}, l, { os_param: m }));
        if (d.getBool('server_side_abr_send_client_estimates', !1)) {
          m = c(
            'oz-player/networks/OzBandwidthEstimator',
          ).getBandwidthDiagnostics(d);
          m &&
            (l = babelHelpers['extends']({}, l, {
              _nc_bwe: String(m.bandwidthEstimate),
              _nc_bwe_std: String(m.bandwidthStandardDeviation),
              _nc_ttfb: String(m.timeToFirstByteMsEstimate),
              _nc_ttfb_std: String(m.timeToFirstByteMsStandardDeviation),
            }));
          m = e();
          m &&
            (l = babelHelpers['extends']({}, l, {
              _nc_abr_bitrate: String(m.getBandwidth()),
              _nc_abr_qlabel: m.getQualityLabel(),
            }));
        }
        c('gkx')('2047') &&
          (l = babelHelpers['extends']({}, l, {
            _nc_wclk: '1',
            _nc_wclk_ms: '1',
          }));
      }
      h &&
        c('gkx')('1998922') &&
        (l = babelHelpers['extends']({}, l, { _nc_nc: '1' }));
      e = d.getNumber('live_video_chunk_duration', 0);
      h &&
        e > 0 &&
        (l = babelHelpers['extends']({}, l, { chk_dur: e.toString(10) }));
      c('gkx')('1836350') &&
        k.uss != null &&
        k.odm != null &&
        (l = babelHelpers['extends']({}, l, { manual_redirect: '1' }));
      g && (l = babelHelpers['extends']({}, l, { _nc_psid: i }));
      if (b) {
        m = f();
        if (m != null) {
          d = a.getDomain() + a.getPath();
          h = m.get(d);
          if (h != null)
            for (e in h) {
              l = babelHelpers['extends']({}, l, ((k = {}), (k[e] = h[e]), k));
            }
        }
      }
      return l;
    }
    g.getOsParamValue = j;
    g.checkShouldIncludeCredentials = a;
    g.createOzBufferingDetector = b;
    g.createOzDrmProviders = d;
    g.createOzPerfLoggerProviders = e;
    g.calculateInitialPlaybackPositionForDynamicMpd = f;
    g.calculateLiveheadFallBehindBlockThreshold = k;
    g.calculateLiveheadFallBehindBlockMargin = l;
    g.getVideoAbrManagerFactory = m;
    g.getCustomRequestParametersForURI = n;
  },
  98,
);
__d(
  'OzMinimumSmallestDimensionRestriction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.applyRestriction = function (a, b) {
        var c = this;
        if (a.length === 0) return [];
        b = a.filter(function (a) {
          var b = a.getWidth();
          a = a.getHeight();
          b = b < a ? b : a;
          return b >= c.$1;
        });
        return b.length > 0 ? b : [a[a.length - 1]];
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'OzMosThresholdRestriction',
  ['MosUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        (this.$3 = new Map()),
          (this.$4 = a),
          (this.$1 = a.getNumber('mos_upper_threshold', 0)),
          (this.$2 = a.getNumber('mos_lower_threshold', 0));
      }
      var b = a.prototype;
      b.$5 = function () {
        return this.$4.getBool('cache_mos_threshold', !1)
          ? { mosUpperThreshold: this.$1, mosLowerThreshold: this.$2 }
          : {
              mosUpperThreshold: this.$4.getNumber('mos_upper_threshold', 0),
              mosLowerThreshold: this.$4.getNumber('mos_lower_threshold', 0),
            };
      };
      b.$6 = function (a, b) {
        var c = null;
        if (this.$3.get(a)) c = this.$3.get(a);
        else {
          var e = a.getCustomField('playbackResolutionMos');
          e != null &&
            ((c = d('MosUtils').parsePlaybackMos(String(e))),
            c && this.$3.set(a, c));
        }
        return c != null
          ? d('MosUtils').getMosValue(
              c,
              d('MosUtils').getQualityLabel(b.width, b.height),
            )
          : null;
      };
      b.$7 = function (a, b) {
        var c = this,
          d = null,
          e = this.$5(),
          f = e.mosUpperThreshold;
        a.forEach(function (a) {
          a = c.$6(a, b);
          a != null && a > f && (d == null || d > a) && (d = a);
        });
        return d == null
          ? a
          : a.filter(function (a) {
              a = c.$6(a, b);
              return a == null ? !0 : a <= f || a === d;
            });
      };
      b.$8 = function (a, b) {
        var c = this,
          d = [],
          e = this.$5(),
          f = e.mosLowerThreshold;
        a.forEach(function (a) {
          var e = c.$6(a, b);
          e != null && e > f && d.push(a);
        });
        d.length === 0 && d.push(a[a.length - 1]);
        return d;
      };
      b.applyRestriction = function (a, b) {
        if (a.length === 0) return [];
        a = a;
        var c = this.$5(),
          d = c.mosLowerThreshold;
        c = c.mosUpperThreshold;
        c > 0 && (a = this.$7(a, b));
        d > 0 && (a = this.$8(a, b));
        return a;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'getOzPlaybackRestrictions',
  [
    'OzMinimumSmallestDimensionRestriction',
    'OzMosThresholdRestriction',
    'gkx',
    'qex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (b = c('qex')._('930')) != null ? b : 720,
      i = 2160;
    function a(a, b) {
      var d = [];
      switch (a) {
        case 'HD':
          d.push(new (c('OzMinimumSmallestDimensionRestriction'))(h));
          break;
        case 'UHD':
          c('gkx')('1488288') &&
            d.push(new (c('OzMinimumSmallestDimensionRestriction'))(i));
          break;
        default:
          break;
      }
      a = b.getNumber('mos_upper_threshold', 0);
      var e = b.getNumber('mos_lower_threshold', 0);
      (a > 0 || e > 0) && d.push(new (c('OzMosThresholdRestriction'))(b));
      return d;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/configs/OzPlayerConfigDefaults',
  [],
  function (a, b, c, d, e, f) {
    a = {
      abort_clear_video_node_on_detach: !1,
      append_once_per_stream_in_application_stream: !1,
      append_once_per_stream_in_caption_stream: !0,
      av1_check_hardware_support: !1,
      bandwidth_ignore_on_stream_write_samples: !1,
      bandwidth_use_response_time_adjustment: !1,
      catchup_use_timeline_range_end_time_as_end: !1,
      debug_live_replay: !1,
      disable_end_of_stream_in_caption_stream: !0,
      do_not_end_stream: !1,
      do_not_flush_data_queue_after_destroy: !1,
      download_cursor_disable_buffer_ahead_rule_lr_on: !1,
      emit_captions_changed_event: !0,
      emit_stream_gone_on_end_stream_before_start: !0,
      fix_dom_exception_as_message: !0,
      fix_manifest_fetch_mixed_promise_catch: !0,
      ignore_reset_after_seek_if_bufferahead: !1,
      latencymanager_stalled_edgelatency_sec_on: !1,
      live_audio_ibr: !0,
      media_stream_buffer_gaps_ignore_before_seek: !1,
      media_stream_tracker_cancel_on_seek: !1,
      mpd_ensure_playable_representations: !1,
      mpd_parse_all_adaptation_sets: !0,
      ms_promise_for_null: !1,
      normalize_mpd_fetch_errors: !0,
      pdash_use_pdash_segmentlocator: !1,
      player_emit_mpdparsed_early: !1,
      playhead_manager_buffered_timerange_update_on_timeupdate: !0,
      playhead_manager_clamp_initial_playback_position: !1,
      playheadman_dont_skip_ahead_past_last_fetched: !1,
      reset_catchup_timeout_after_play_sec_on_overwrite: !0,
      retry_video_element_error: !0,
      sidx_parser_memory_optimization: !1,
      single_codec_restriction_enabled: !0,
      skip_videobuffer_gaps: !0,
      skip_videobuffer_gaps_on_buffer_updated: !0,
      stub_safari_source_buffer_abort: !1,
      throw_no_license_error: !0,
      use_live_latency_manager: !1,
      use_scf_timebased_segments: !1,
      use_src_object_for_media_source: !1,
      use_strict_resolution_constraint: !0,
      vtt_caption_representation: !0,
    };
    b = {
      abr_confidence_threshold: 0.9,
      abr_eval_buffer_threshold: 0,
      abr_min_bandwidth_samples: 0,
      abr_prevent_down_switch_buffer_threshold: 11,
      abr_restrict_from_index: 0,
      abr_restrict_to_index: 0,
      append_byte_target_without_range: 1e5,
      appends_per_segment: 6,
      auto_seek_playhead_slack: 0.5,
      bandwidth_boundary_standard_deviation_factor: 1,
      bandwidth_estimator_half_life: 6,
      bandwidth_estimator_outlier_exclusion_factor: 50,
      bandwidth_estimator_std_dev_penalty_factor: 0,
      bandwidth_response_time_handicap: 0,
      bandwidth_ttfb_samples_to_save: 5,
      buffer_ahead_target: 22,
      buffer_target_constraint_append_succeeded_reward: 0.2,
      buffer_target_constraint_minimum_sec: 2,
      buffer_target_constraint_quota_exceeded_penalty: 0.3,
      byte_count_per_sample: 2e5,
      catchup_timeout_after_buffering_sec: 0,
      catchup_timeout_after_play_sec: 0,
      clear_buffer_around_playhead_boundary_ms: 5e3,
      clear_buffer_on_seek_epsilon_s: 0,
      clear_buffer_on_seek_nudge_s: 0,
      default_bandwidth_estimate: 1e6,
      download_cursor_buffer_ahead_time_max_sec: 0,
      download_cursor_total_buffer_max_sec: 0,
      dvl_initial_segment_ignore_count: 1,
      dvl_update_interval_ms: 0,
      dynamic_mpd_initial_playback_position_offset_modifier: 4,
      initial_manifest_request_retry_count: 3,
      initial_switch_interval: 0,
      in_play_buffer_overflow_target: 1,
      in_play_buffer_underflow_target: 0.1,
      latencymanager_stalled_edgelatency_sec: 0,
      live_audio_ibr_bandwidth_percentage: 0.05,
      live_numerical_error_epsilon: 1e-4,
      loop_body_handle_error_interval_ms: 1,
      low_buffer_bandwidth_target_increase_factor: 0,
      low_buffer_bandwidth_target_threshold: 10,
      low_segment_stream_playhead_threshold: 0,
      manifest_initial_update_delay_ms: 0,
      manifest_update_frequency_ms: 0,
      max_bandwidth_sample_count: 30,
      maximum_bandwidth_sample_bandwidth: 1e8,
      max_start_eme_attempts: 3,
      min_eval_interval: 100,
      minimum_bandwidth_sample_duration: 10,
      minimum_bytes_to_sample_on_close: 25e3,
      min_switch_interval: 100,
      mpd_updater_network_request_timeout_ms: 2e4,
      ms_promise_for_null_ms: 0,
      network_seg_timeout_ms: 0,
      overwrite_livehead_fall_behind_block_threshold: 0,
      overwrite_live_time_range_block_margin: 0,
      partial_playback_buffer_overflow: 0.75,
      paused_stream_segments_count: 2,
      pdash_download_cursor_between_catchups_seg: 0,
      pdash_download_cursor_catchup_threshold_gop_multiplier: 0,
      pdash_download_cursor_catchup_threshold_sec: 0,
      pdash_download_cursor_catchup_tolerance_sec: 0,
      per_stream_duration_target: 0,
      pixels_above_viewport_to_observe: 0,
      pixels_below_viewport_to_observe: 0,
      playback_speed_enabled_delay_sec: 4,
      playback_speed_latency_adjustment_rate: 0,
      playback_speed_latency_slowdown_adjustment_rate: 0,
      playback_speed_latency_speedup_adjustment_rate: 0,
      playback_speed_min_buffer_sec: 1,
      playback_speed_min_duration_sec: 2,
      playback_speed_min_sharpness_factor: 3,
      playback_speed_restore_min_duration_sec: 1,
      playhead_manager_buffered_auto_seek_playhead_slack: 0.5,
      playhead_manager_buffered_is_near_gap_threshold: 1.5,
      playhead_manager_buffered_numerical_error: 0.01,
      playhead_manager_timeupdate_throttle_ms: 1e3,
      pre_start_buffer_ahead_target: 16.924449682236,
      prioritize_by_viewport_static_penalty: 0,
      recent_buffer_in_play_buffer_overflow_target: 3,
      recent_buffer_timeout_ms: 1e4,
      resolution_constraint_factor: 2,
      seconds_to_stream: 10,
      seconds_to_stream_near_bandwidth_boundary: 10,
      seek_ahead_epsilon: 0.05,
      segments_to_stream: 5,
      segments_to_stream_near_bandwidth_boundary: 5,
      segments_to_stream_under_playhead_threshold: 0,
      sidx_segment_retry_attempts: 9999,
      sidx_segment_retry_interval_ms: 100,
      skip_videobuffer_gaps_max_gap_size_sec: 0,
      stale_mpd_buffer_ahead_target: 0,
      start_buffer_underflow_target: 0.1,
      steadystate_minbuffer_buckets: 0,
      steadystate_minbuffer_buckets_sec: 1,
      steadystate_minbuffer_sec: 0,
      stream_interrupt_buffer_target_timeout_ms: 1e4,
      stream_interrupt_check_mpd_stale_count_threshold: 6,
      stream_interrupt_in_play_buffer_overflow_target: 1,
      timeline_offset_threshold: 10,
      time_to_first_byte_estimate_half_life_ms: 500,
      time_to_first_byte_ignore_above_threshold_ms: 0,
    };
    c = {
      block_representation_status_codes_json: '[500]',
      block_representation_status_codes_temporarily_json: '{}',
      cdn_experiment_id: '',
      stream_types_eligible_for_partial_playback: '',
    };
    e.exports = { defaultBools: a, defaultNumbers: b, defaultStrings: c };
  },
  null,
);
__d(
  'oz-player/configs/OzPlayerConfig',
  ['oz-player/configs/OzPlayerConfigDefaults'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        a === void 0 && (a = {}), (this.$1 = a);
      }
      var b = a.prototype;
      b.getBool = function (a) {
        return typeof this.$1[a] === 'boolean'
          ? this.$1[a]
          : d('oz-player/configs/OzPlayerConfigDefaults').defaultBools[a];
      };
      b.getNumber = function (a) {
        return typeof this.$1[a] === 'number'
          ? this.$1[a]
          : d('oz-player/configs/OzPlayerConfigDefaults').defaultNumbers[a];
      };
      b.getString = function (a) {
        return typeof this.$1[a] === 'string'
          ? this.$1[a]
          : d('oz-player/configs/OzPlayerConfigDefaults').defaultStrings[a];
      };
      b.getLegacyConfig = function () {
        var a = this;
        return {
          getBool: function (b, c) {
            return typeof a.$1[b] === 'boolean'
              ? a.$1[b]
              : (b = d('oz-player/configs/OzPlayerConfigDefaults').defaultBools[
                  b
                ]) != null
              ? b
              : c;
          },
          getNumber: function (b, c) {
            return typeof a.$1[b] === 'number'
              ? a.$1[b]
              : (b = d('oz-player/configs/OzPlayerConfigDefaults')
                  .defaultNumbers[b]) != null
              ? b
              : c;
          },
          getString: function (b, c) {
            return typeof a.$1[b] === 'string'
              ? a.$1[b]
              : (b = d('oz-player/configs/OzPlayerConfigDefaults')
                  .defaultStrings[b]) != null
              ? b
              : c;
          },
        };
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/configs/OzConfigUtils',
  ['oz-player/configs/OzPlayerConfig'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new (c('oz-player/configs/OzPlayerConfig'))();
    a = function (a) {
      return {
        getBool: function (b) {
          return a.getBool(b, h.getBool(b));
        },
        getNumber: function (b) {
          return a.getNumber(b, h.getNumber(b));
        },
        getString: function (b) {
          return a.getString(b, h.getString(b));
        },
        getLegacyConfig: function () {
          return a;
        },
      };
    };
    g.provideConfigWithDefaults = a;
  },
  98,
);
__d(
  'oz-player/networks/OzClientClock',
  ['oz-player/shims/OzPerformance', 'oz-player/utils/OzResourceTimingUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      if (a !== null) {
        a = parseInt(a, 10);
        if (!isNaN(a)) return a;
      }
      return null;
    }
    a = (function () {
      function a() {
        (this.$1 = null),
          (this.$2 = 0),
          (this.$2 = Date.now() - c('oz-player/shims/OzPerformance').now());
      }
      var b = a.prototype;
      b.updateOffsetFromHeaderResponse = function (a, b) {
        var c = h(b.get('x-fb-dynamic-server-wallclock-ms'));
        b = h(b.get('x-fb-dynamic-rtt-ms'));
        a = d(
          'oz-player/utils/OzResourceTimingUtils',
        ).getLatestResourceTimingEntry(a);
        if (
          c !== null &&
          b !== null &&
          a != null &&
          a.responseStart > 0 &&
          a.duration > 10
        ) {
          a = a.requestStart + this.$2;
          c = c - a - b / 2;
          this.$1 = c;
        }
      };
      b.now = function () {
        var a;
        return (
          c('oz-player/shims/OzPerformance').now() +
          this.$2 +
          ((a = this.$1) != null ? a : 0)
        );
      };
      b.getClientClockOffsetMs = function () {
        return this.$1;
      };
      return a;
    })();
    b = new a();
    g['default'] = b;
  },
  98,
);
__d(
  'oz-player/networks/OzClockSyncNetworkRequestStreamHandler',
  ['oz-player/networks/OzClientClock', 'oz-player/networks/OzTransformStream'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.onResponse = function (a, b) {
        var d = a.headers;
        if (!d) return null;
        a = new (c('oz-player/networks/OzTransformStream'))();
        a.addListener('writableClose', function () {
          c('oz-player/networks/OzClientClock').updateOffsetFromHeaderResponse(
            b,
            d,
          );
        });
        return a;
      };
      b.onError = function (a, b) {
        return null;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerOzImplementationEnginePartsImplFunction',
  [
    'CometThrottle',
    'ConstUriUtils',
    'Deferred',
    'FBLogger',
    'NetworkStatus',
    'OzActiveActiveFailoverNetworkRequestStreamHandler',
    'OzBufferVTTCaptionsVisibleStrategy',
    'OzCDNSignedQueryParams',
    'OzCustomParsers',
    'OzCustomRepresentationParsers',
    'OzOneSemanticHandler',
    'OzOneSemanticHandlerUtils',
    'OzPredictedSegmentTimelineParser',
    'OzVideoLiveTraceNetworkRequestStreamHandler',
    'Promise',
    'QE2Logger',
    'TimeRanges',
    'VideoPlayerConnectionQuality',
    'VideoPlayerImplementationErrors',
    'VideoPlayerOzImplementationEnginePartsImplUtils',
    'clearTimeout',
    'cr:1836099',
    'cr:1871597',
    'cr:1947728',
    'cr:1993377',
    'cr:4964',
    'getErrorSafe',
    'getOzPlaybackRestrictions',
    'gkx',
    'md5',
    'oz-player/configs/OzConfigUtils',
    'oz-player/networks/OzBandwidthEstimator',
    'oz-player/networks/OzClockSyncNetworkRequestStreamHandler',
    'qex',
    'setTimeout',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    f = (e = b('cr:4964')) != null ? e : { parseEmsgBoxesFromMP4Segment: null };
    var h = f.parseEmsgBoxesFromMP4Segment,
      i = (e = c('qex')._('592')) != null ? e : 1e4,
      j = null,
      k = null;
    b('cr:1836099') &&
      ((j = b('cr:1836099').getHiveConfig()), (k = b('cr:1836099').HiveOz));
    function a(a) {
      var e,
        f = a.OzPlayerClass,
        g = a.callChain,
        l = a.destroyOzPlayerPartsRef,
        m = a.engineDebugAPI,
        n = a.engineExtrasAPI,
        o = a.getCaptionsInfo,
        aa = a.getLatencyLevelManager,
        p = a.getVideoLiveTrace,
        q = a.handleCaptionsInfoChange,
        ba = a.handleFatalImplementationError,
        r = a.hivePluginRef,
        s = a.initialProps,
        t = a.logger,
        u = a.machine,
        v = a.overrideOzRequestImplementationRef,
        w = a.ozBufferingDetectorRef,
        x = a.ozPlayerRef,
        y = a.p2pSessionLoggerRef,
        z = a.playerVersion,
        A = a.resolvedVideoInfo,
        B = a.videoElement,
        C = { current: !1 },
        D = { current: null },
        E = { current: null };
      l.current = function (a) {
        var b = w.current;
        b && ((w.current = null), b.destroy());
        b = x.current;
        if (b) {
          m && m.handleOzPlayerChanged(null);
          x.current = null;
          try {
            b.destroy([].concat(a, ['destroyOzPlayerParts']).join(':'));
          } catch (a) {
            c('FBLogger')('comet_video_player')
              .catching(a)
              .mustfix('Error in ozPlayer.destroy: %s', String(a));
          }
        }
        b = D.current;
        b && ((D.current = null), b());
        E.current && (E.current = null);
        Z();
        r.current && (r.current = null);
        y.current && (y.current = null);
        v.current && (v.current = null);
      };
      a = A.accessToken;
      l = A.audioOnly;
      var F = A.experimentationConfig,
        G = A.graphQLVideoDRMInfo,
        H = A.graphQLVideoP2PSettings,
        I = A.manifestUrl,
        ca = A.manifestXmlStringResolved,
        da = A.minQualityPreference,
        ea = A.ozPrefetchCache,
        J = A.videoFBID,
        K = s.disableLogging ? null : A.VideoPlayerShakaPerformanceLoggerClass,
        L = Boolean(s.loggingMetaData.coreVideoPlayerMetaData.isLiveStreaming),
        M = Boolean((e = s.isClientTriggeredTraceEnabled) != null ? e : !1),
        N = function (a) {
          return n.getEstimatedBandwidth();
        };
      e = function () {
        return n.getApproximateFBLSToPlayerDisplayLatency();
      };
      var fa = function () {
          F.setContext(
            'connection_quality',
            d('VideoPlayerConnectionQuality').evaluate(function () {
              return N(L);
            }),
          );
        },
        O = function () {
          var a = F.getNumber(
            'connection_quality_context_throttle_frequency',
            0,
          );
          if (a === 0) return null;
          var b = c('CometThrottle')(fa, a),
            d = c('oz-player/networks/OzBandwidthEstimator').addListener(
              'bandwidth_sampled',
              b,
            );
          return function () {
            d.remove(), b.cancel();
          };
        };
      D.current = O();
      O = d(
        'VideoPlayerOzImplementationEnginePartsImplUtils',
      ).createOzDrmProviders({
        accessToken: a,
        graphQLVideoDRMInfo: G,
        videoFBID: J,
      });
      G = function () {
        return u.getCurrentState().controlledState.captionsVisible;
      };
      var P = [];
      F.getBool('use_vtt_captions_visible_buffer_strategy', !0) &&
        P.push(new (c('OzBufferVTTCaptionsVisibleStrategy'))(G));
      G = function () {
        return u.getCurrentState().controlledState.dimensions;
      };
      var Q = function () {
        return u.getCurrentState().controlledState.playerFormat;
      };
      a = d(
        'VideoPlayerOzImplementationEnginePartsImplUtils',
      ).createOzPerfLoggerProviders({
        VideoPlayerShakaPerformanceLoggerClass: K,
        accessToken: a,
        disableLogging: s.disableLogging,
        getApproximateFBLSToPlayerDisplayLatency: e,
        getBandwidthEstimate: N,
        getPlayerDimensions: G,
        getPlayerFormat: Q,
        playbackIsLiveStreaming: L,
        playerInstanceCount:
          s.loggingMetaData.playerImplementationInstanceCountRef.current,
        playerInstanceKey: s.loggingMetaData.instanceKey,
        playerSuborigin: s.loggingMetaData.coreVideoPlayerMetaData.subOrigin,
        playerVersion: z,
        videoElement: B,
        videoFBID: J,
        videoPlayerShakaPerformanceLoggerBuilder:
          A.videoPlayerShakaPerformanceLoggerBuilder,
      });
      E.current == null && (E.current = new (c('OzCDNSignedQueryParams'))());
      if (H && J != null) {
        e = H.community_info;
        Q = H.config;
        z = H.hive_initialization_options;
        A = y.current =
          (A = y.current) != null
            ? A
            : b('cr:1871597')
            ? new (b('cr:1871597'))(J, e)
            : null;
        try {
          if (!r.current) {
            A && A.logEnableP2P();
            e = function (a) {
              y.current && y.current.logHiveError(a);
            };
            var R = function (b) {
                var a = x.current;
                a && a.injectExternalDebugEvent('P2PTech', b.tech);
                y.current && y.current.logSessionActive(b.tech);
              },
              S = function (b) {
                var a = x.current;
                a && a.injectExternalDebugEvent('P2PStats', b);
                y.current && y.current.setCurrentHiveStats(b);
              },
              T = function (a) {
                a = a.state;
                var b = u.getCurrentState();
                b = b.controlledState;
                b = b.playbackState;
                if (r.current && a === 'CLOSED') {
                  Z();
                  a = x.current;
                  a &&
                    b !== 'ended' &&
                    (C.current && I != null
                      ? a.updatePlayerRunTimeConfig({ manifestUrl: I })
                      : a.load(I));
                }
              };
            S = {
              HiveJava: {},
              HiveJS: {
                maximumTrimming: { dash: void 0, hls: void 0 },
                renderStatsCallback: S,
              },
              debugLevel: 'off',
              hiveTechOrder: ['HiveJS', 'StatsJS', 'HiveJava'],
              onActiveSession: R,
              onError: e,
              onSessionStateChange: T,
              telemetryId: A ? A.getSessionID() : 0,
            };
            R = F.getNumber('hive_maximum_trimming_seconds', 0);
            R > 0 && (S.HiveJS.maximumTrimming = { dash: R, hls: R });
            if (z) {
              e = z.HiveJava;
              T = z.debugLevel;
              R = z.hiveTechOrder;
              S.hiveTechOrder = R.slice();
              S.HiveJava = e ? { minVersion: e.minVersion } : {};
              S.debugLevel = (z = T) != null ? z : S.debugLevel;
            }
            c('gkx')('2047688') &&
              (S = babelHelpers['extends']({}, S, {
                testId: 'fb_video_player_p2p_jest_e2e',
              }));
            if (
              Q.disable_hivejava_for_livevc === !0 &&
              I != null &&
              I.startsWith('https://livestream-lookaside')
            ) {
              R = S.hiveTechOrder.indexOf('HiveJava');
              R >= 0 && S.hiveTechOrder.splice(R, 1);
            }
            if (j) j.SensitiveInfo.restrictedConnectivityInfo = !0;
            else
              throw c('unrecoverableViolation')(
                'HiveConfig does not exist',
                'comet_video_player',
              );
            if (k) r.current = new k(S);
            else
              throw c('unrecoverableViolation')(
                'HiveOz does not exist',
                'comet_video_player',
              );
            if (r.current) {
              if (!b('cr:1947728'))
                throw c('unrecoverableViolation')(
                  'OzConfigurableRequestImplementation does not exist',
                  'comet_video_player',
                );
              v.current = b('cr:1947728')(
                r.current.getRequestImplementation(),
                {
                  inferResponseStatusIsOK: c('gkx')('3951'),
                  inferResponseStatusIsOk2xx: c('gkx')('277'),
                },
              );
            }
          }
        } catch (a) {
          A && A.logError(a), Z();
        }
      }
      e = [
        new (c('OzVideoLiveTraceNetworkRequestStreamHandler'))(function (
          a,
          b,
          c,
        ) {
          var d = p();
          d != null && d.handleHeadersAndBody(a, b, c);
        },
        F.getBool('live_trace_parse_emsg', !1)),
        new (c('oz-player/networks/OzClockSyncNetworkRequestStreamHandler'))(),
      ];
      c('OzActiveActiveFailoverNetworkRequestStreamHandler') &&
        e.push(
          new (c('OzActiveActiveFailoverNetworkRequestStreamHandler'))(
            function (a, b) {
              if (c('gkx')('1664503')) {
                var e = x.current,
                  f = a.headers;
                if (e && f) {
                  f = parseInt(f.get('x-fb-video-replica'), 10);
                  t.logVPLEvent({
                    eventType: 'replica_switch',
                    logDataOverrides: {
                      error_code: a.status.toString(),
                      error_user_info: JSON.stringify({
                        failover_response_code: a.status.toString(),
                        replica: f,
                        url: b,
                      }),
                    },
                    state: u.getCurrentState(),
                  });
                  a = e.getMpdUrl();
                  if (a != null) {
                    b = d('ConstUriUtils').getUri(a);
                    if (b) {
                      a = b.addQueryParam('replica', f);
                      a &&
                        (Z(),
                        e.updatePlayerRunTimeConfig({
                          manifestUrl: a.toString(),
                          resetStreamAnchor: !0,
                        }));
                    }
                  }
                }
              }
            },
          ),
        );
      var U = s.expiredVideoUrlRefreshHandler,
        ga = s.loggingMetaData.instanceKey;
      T = c('gkx')('221');
      z = c('gkx')('1836350') || c('gkx')('1993562');
      var V = L ? T : z;
      F.getBool('log_exposure_on_oz_initialization', !1) &&
        d('QE2Logger').logExposureForUser('www_videos_html5_mpeg_dash');
      Q = {
        audioOnly: (Q = l) != null ? Q : !1,
        bufferEndLimit: s.bufferEndLimit != null ? s.bufferEndLimit : null,
        bufferingDetector: (R = w.current) != null ? R : void 0,
        config: d('oz-player/configs/OzConfigUtils').provideConfigWithDefaults(
          F,
        ),
        configureCustomRequestParametersForSegment: function (a) {
          var b = null;
          if (L && M) {
            var d = a.getByteRange();
            d = d
              ? d.startByte + ', ' + (d.endByte != null ? d.endByte : 'null')
              : 'null';
            a = c('md5')(a.getURI().toString() + d);
            b = (d = b) != null ? d : {};
            a != null && (b = babelHelpers['extends']({}, b, { _nc_tsid: a }));
            b = babelHelpers['extends']({}, b, { _nc_e2e: 'live' });
          }
          return b;
        },
        customParsers: d('OzCustomParsers').createOzCustomParser(),
        customRepresentationParsers: d(
          'OzCustomRepresentationParsers',
        ).createOzCustomRepresentationParsers({ ozConfig: F }),
        customSegmentTimelineParser: F.getBool('enable_predictive_dash', !1)
          ? new (c('OzPredictedSegmentTimelineParser'))()
          : void 0,
        customVTTBufferTargetStrategies: P,
        debugCreateInitiator: []
          .concat(g, ['proceedWithOzPlayerCreation'])
          .join(':'),
        drmProviders: O,
        getCustomRequestParametersForURI: function (a) {
          return d(
            'VideoPlayerOzImplementationEnginePartsImplUtils',
          ).getCustomRequestParametersForURI(a, {
            experimentationConfig: F,
            getCurrentVideoRepresentation: function () {
              var a = x.current;
              return a == null ? void 0 : a.getCurrentVideoRepresentation();
            },
            getOzCDNSignedQueryParams: function () {
              return E.current;
            },
            isClientTriggeredTraceEnabled: M,
            playbackIsLiveStreaming: L,
            playbackSessionId: ga,
            shouldRefresh403: V,
          });
        },
        getOverrideOzRequestImplementation: function () {
          return v.current;
        },
        getShouldIncludeCredentials: F.getBool(
          'use_oz_credentials_provider',
          !1,
        )
          ? d('VideoPlayerOzImplementationEnginePartsImplUtils')
              .checkShouldIncludeCredentials
          : null,
        getVideoDimensions: G,
        initialPlaybackPositionForDynamicMpd: d(
          'VideoPlayerOzImplementationEnginePartsImplUtils',
        ).calculateInitialPlaybackPositionForDynamicMpd(
          F,
          (S = s.initialDesiredLatencyMs) != null ? S : 0,
        ),
        initialRepresentationIDs:
          (A = s.initialRepresentationIds) != null ? A : [],
        isClientTriggeredTraceEnabled: M,
        liveheadFallBehindBlockMargin: d(
          'VideoPlayerOzImplementationEnginePartsImplUtils',
        ).calculateLiveheadFallBehindBlockMargin(
          F,
          (T = s.initialDesiredLatencyMs) != null ? T : 0,
        ),
        liveheadFallBehindBlockThreshold: d(
          'VideoPlayerOzImplementationEnginePartsImplUtils',
        ).calculateLiveheadFallBehindBlockThreshold(
          F,
          (z = s.initialDesiredLatencyMs) != null ? z : 0,
          (l = s.initialLatencyToleranceMs) != null ? l : 0,
        ),
        loggerConfig: {
          isOzDevConsoleEnabled: c('gkx')('722076'),
          observedOperationLoggers: [],
          perfLoggerProviders: a,
        },
        mpdUrl: I,
        networkRequestStreamHandlers: e,
        networkRequestStreamRetryHandler: V
          ? function (a, d, e) {
              var f = a.headers,
                g = f == null ? void 0 : f.get('x-fb-url-refresh'),
                h = E.current;
              if (a.status === 403 && h != null) {
                t.logVPLEvent({
                  eventType: 'video_cdn_url_expired',
                  logDataOverrides: {
                    error_user_info: JSON.stringify({ expired_url: e }),
                  },
                  state: u.getCurrentState(),
                });
                var i =
                  g != null && b('cr:1993377') != null
                    ? {
                        name: 'refreshShortExpiryVideoUrl',
                        promise: b('cr:1993377')(g),
                      }
                    : U != null
                    ? { name: 'expiredVideoUrlRefreshHandler', promise: U(e) }
                    : null;
                if (i != null)
                  return i.promise
                    .then(function (a) {
                      var b;
                      b = (b = a.refreshedUrl) != null ? b : null;
                      a = (a = a.reason) != null ? a : null;
                      if (b != null && (c('gkx')('5837') ? b !== '' : !0)) {
                        t.logVPLEvent({
                          eventType: 'video_cdn_url_refreshed',
                          logDataOverrides: {
                            error_user_info: JSON.stringify({
                              refresh_handler: i.name,
                              refreshed_url: b,
                            }),
                          },
                          state: u.getCurrentState(),
                        });
                        h.update(b);
                        return d(b);
                      } else {
                        throw c('unrecoverableViolation')(
                          i.name +
                            ' refreshedUrl is ' +
                            (b === '' ? 'an empty string' : 'null') +
                            ', reason: ' +
                            ((b = a) != null ? b : 'null'),
                          'comet_video_player',
                        );
                      }
                    })
                    ['catch'](function (a) {
                      a = c('gkx')('5837') ? c('getErrorSafe')(a) : a;
                      t.logVPLEvent({
                        eventType: 'video_cdn_url_refresh_error',
                        logDataOverrides: {
                          error_description: a.message,
                          error_user_info: JSON.stringify({
                            expired_url: e,
                            refresh_handler: i.name,
                            refresh_url: g,
                          }),
                        },
                        state: u.getCurrentState(),
                      });
                      throw a;
                    });
              }
              return b('Promise').resolve(a);
            }
          : null,
        prefetchCache: F.getBool('use_prefetch_cache', !1) ? ea : null,
        rawMpdXml: r.current ? void 0 : ca,
        seekHandler: c('gkx')('1482680')
          ? function (a) {
              var b = B.currentTime;
              u.dispatch({
                payload: { seekSourcePosition: b },
                type: 'implementation_seek_requested',
              });
              B.currentTime = a;
            }
          : null,
        setCustomFetchStreamLoggingAttributes: function (a, b, e) {
          a.setIsOnline(c('NetworkStatus').isOnline());
          var f = e == null ? void 0 : e.headers;
          if (f)
            try {
              a.setProxyStatusHeader(f.get('proxy-status')),
                a.setDynamicStatusHeader(f.get('x-fb-dynamic-status'));
            } catch (a) {}
          d(
            'OzOneSemanticHandlerUtils',
          ).setOneSemanticFetchStreamLoggingAttributes(a, b, e);
        },
        startTimeStamp: F.getBool('fix_start_timestamp', !1)
          ? s.startTimestamp
          : 0,
        videoAbrManagerFactory: d(
          'VideoPlayerOzImplementationEnginePartsImplUtils',
        ).getVideoAbrManagerFactory(),
        videoNode: B,
        videoPlaybackRestrictions: c('getOzPlaybackRestrictions')(da, F),
      };
      var W = new f(Q);
      x.current = W;
      w.current &&
        w.current.attachPerfLoggerProvider(W.getPerfLoggerProvider());
      R = s.loggingMetaData.playerImplementationInstanceCountRef;
      R.current++;
      W.onError(function (a) {
        K && K.flushQueuedLogs(), ba(a, 'oz_player_error');
      });
      W.addListener('switchVideoRepresentation', function () {
        u.dispatch({
          payload: { targetVideoQuality: n.getCurrentTargetVideoQuality() },
          type: 'representation_changed',
        });
      });
      var ha = function (a) {
        if (F.getBool('enable_error_recovery_attempt_logging', !1)) {
          a = d(
            'VideoPlayerImplementationErrors',
          ).createVideoPlayerErrorFromOzImplementationError(
            a,
            'oz_player_stream_error_retry',
          );
          u.dispatch({
            payload: { recoverableError: a },
            type: 'error_recovery_attempt',
          });
        }
      };
      W.addListener('manifestFetchError', function (a) {
        d('OzOneSemanticHandler').handleManifestFetchErrorEvent(F, a);
      });
      W.addListener('manifestFetchErrorRetry', function (a) {
        ha(a);
      });
      W.addListener('streamError', function (a) {
        return d('OzOneSemanticHandler').handleStreamErrorEvent(F, a);
      });
      W.addListener('streamErrorRetry', function (a) {
        var b;
        (((b = a.getExtra()) == null ? void 0 : b.mimeType) !== 'application' ||
          F.getBool('enable_era_logging_for_application_stream', !0)) &&
          ha(a);
      });
      W.addListener('streamInterruptAt', function () {
        u.dispatch({ type: 'stream_interrupted' });
      });
      W.addListener('streamResumedAt', function () {
        u.dispatch({ type: 'stream_resumed' });
      });
      W.addListener('streamGoneBeforeStart', function () {
        Z(), u.dispatch({ type: 'stream_gone_before_start' });
      });
      W.addListener('streamEnd', function () {
        Z(), u.dispatch({ type: 'stream_ended' });
      });
      W.addListener('videoNodeErrorRetry', function (a) {
        if (F.getBool('enable_error_recovery_attempt_logging', !1)) {
          a = d(
            'VideoPlayerImplementationErrors',
          ).createVideoPlayerErrorFromVideoNodeError(
            a,
            'oz_player_stream_error_retry',
          );
          u.dispatch({
            payload: { recoverableError: a },
            type: 'error_recovery_attempt',
          });
        }
      });
      W.addListener('enterBuffering', function (a) {
        if (c('gkx')('1235655')) return;
        u.dispatch({
          payload: { bufferingType: a },
          type: 'buffering_begin_requested',
        });
      });
      W.addListener('leaveBuffering', function (a) {
        u.dispatch({
          payload: { domEventPerfTimestamp: a.domEventPerfTimestamp },
          type: 'buffering_end_requested',
        });
      });
      m && m.handleOzPlayerChanged(W);
      var ia = function () {
          var a = o();
          a = {
            inbandCaptionsAutogeneratedFromManifest:
              n.getInbandCaptionsAutogeneratedFromManifest(),
            inbandCaptionsExpectedFromManifest:
              n.getInbandCaptionsExpectedFromManifest(),
            inbandCaptionsExpectedFromProps:
              a == null ? void 0 : a.inbandCaptionsExpectedFromProps,
            representationCaptionsExpectedFromManifest:
              n.getRepresentationCaptionsExpectedFromManifest(),
            sideLoadCaptionsExpectedFromProps:
              a == null ? void 0 : a.sideLoadCaptionsExpectedFromProps,
            sideLoadCaptionsUrlFromProps:
              a == null ? void 0 : a.sideLoadCaptionsUrlFromProps,
          };
          var b = u.getCurrentState();
          b = b.controlledState;
          (a.inbandCaptionsExpectedFromManifest !== b.captionsLoaded ||
            a.inbandCaptionsAutogeneratedFromManifest !==
              b.inbandCaptionsAutogenerated) &&
            q(a);
        },
        ja = function (a, b) {
          a = a.getCustomField('timescale');
          a = typeof a === 'number' ? a : 0;
          u.dispatch({
            payload: { timescale: a, videoBytes: b },
            type: 'cea608_bytes_received',
          });
        },
        ka = function () {
          var a = n.getVideoRepresentations();
          if (a != null && a.length > 0) {
            a = a[0].getTimeRanges();
            if (a != null && a.length > 0) {
              var b = a[0].startTime;
              a = Math.max(
                a[a.length - 1].endTime -
                  F.getNumber('live_rewind_seek_to_live_delta', 8),
                b,
              );
              u.dispatch({
                payload: {
                  seekableRanges: new (c('TimeRanges'))([
                    { endTime: a, startTime: b },
                  ]),
                },
                type: 'seekable_ranges_changed',
              });
            }
          }
        },
        la = function () {
          var a = W.getMpd();
          if (!a) return;
          a = a.getCustomField('loapStreamType');
          var b = p();
          typeof a === 'number' && b != null && b.setStreamType(a);
        },
        X = function (a) {
          if (a != null) {
            a = d('ConstUriUtils').getUri(a);
            if (a) {
              a = a.getQueryParam('lvp');
              return a === '1';
            }
          }
          return !1;
        },
        ma = function (a) {
          var b = function () {
            ka(), ia(), la();
          };
          a.addListener('updated', b);
          c('gkx')('1656434') && b();
          W.updatePlayerRunTimeConfig({
            audioStreamDataHandler:
              h != null
                ? function (a, b) {
                    var c = u.getCurrentState();
                    if (c.controlledState.emsgObserverTokens.size > 0) {
                      c = function (a) {
                        t.logVPLEvent({
                          eventType: 'imf',
                          logDataOverrides: a,
                          state: u.getCurrentState(),
                        });
                      };
                      b = h(b, J, a.getID(), B.currentTime, c);
                      b.length > 0 &&
                        u.dispatch({
                          payload: { emsgBoxes: b },
                          type: 'emsg_boxes_parsed',
                        });
                    }
                  }
                : null,
            videoStreamDataHandler: ja,
          });
          if (n.isPredictiveDash()) {
            F.setContext('streaming_implementation', 'pdash');
            a = aa();
            a && a.maybeUpdateLatencyLevel();
          }
          b = o();
          q({
            inbandCaptionsAutogeneratedFromManifest:
              n.getInbandCaptionsAutogeneratedFromManifest(),
            inbandCaptionsExpectedFromManifest:
              n.getInbandCaptionsExpectedFromManifest(),
            inbandCaptionsExpectedFromProps:
              b == null ? void 0 : b.inbandCaptionsExpectedFromProps,
            representationCaptionsExpectedFromManifest:
              n.getRepresentationCaptionsExpectedFromManifest(),
            sideLoadCaptionsExpectedFromProps:
              b == null ? void 0 : b.sideLoadCaptionsExpectedFromProps,
            sideLoadCaptionsUrlFromProps:
              b == null ? void 0 : b.sideLoadCaptionsUrlFromProps,
          });
        };
      W.addListener('vttCaptionsUpdated', function (a, b) {
        var c = 'webvtt',
          d = u.getCurrentState().controlledState.captionFormat;
        c !== d &&
          u.dispatch({
            payload: { captionFormat: c },
            type: 'controller_set_caption_format_requested',
          });
        u.dispatch({
          payload: { activeCaptions: a, captionsLocale: b },
          type: 'controller_set_active_captions_requested',
        });
      });
      W.addListener('mpdParsed', function (a) {
        n.isPredictiveDash() &&
          F.setContext('streaming_implementation', 'pdash');
      });
      W.addListener('mpdReady', function (a) {
        C.current = !0;
        ma(a);
        u.dispatch({
          payload: {
            availableQualities: n.getAvailableVideoQualities(),
            selectedVideoQuality: n.getUserSelectedVideoQuality(),
            targetVideoQuality: n.getCurrentTargetVideoQuality(),
            videoProjection:
              (a = n.getVideoProjectionType()) != null ? a : null,
          },
          type: 'implementation_engine_initialized',
        });
      });
      W.addListener('representationBlocked', function (a) {
        u.dispatch({
          payload: {
            availableQualities: n.getAvailableVideoQualities(),
            blockedRepresentationID: a,
          },
          type: 'implementation_engine_representation_blocked',
        });
      });
      var Y = null;
      function Z() {
        c('clearTimeout')(Y);
        var a = r.current,
          b = y.current;
        if (a != null) {
          r.current = null;
          y.current = null;
          v.current = null;
          try {
            a && a.closeHiveSession(), b && b.logEndSession();
          } catch (a) {
            b && b.logHiveError(a);
          }
        }
      }
      P = r.current;
      g = H == null ? void 0 : H.ticket;
      if (I != null && H && P && g != null) {
        O = W.getPerfLoggerProvider();
        O && O.setIsP2pPlayback(!0);
        G = I.substring(I.indexOf('?'));
        S = P.initSession(g + G, W, B);
        var $ = new (c('Deferred'))();
        i > 0 &&
          (Y = c('setTimeout')(function () {
            $.reject(
              new Error('Hive initialization timed out after ' + i + 'ms'),
            );
          }, i));
        S.then(function (a) {
          $.resolve(a);
        })['catch'](function (a) {
          $.reject(a);
        });
        $.getPromise()
          .then(function (a) {
            c('clearTimeout')(Y);
            var b = a.manifest;
            a = a.tech;
            var d = y.current;
            b !== I && d && d.logManifestMismatch(b, I);
            d && d.logSessionInit(a, b);
            t.setAdditionalLogData('is_p2p_playback', !0);
            t.setAdditionalLogData('is_live_preview', X(b));
            W.load(b);
          })
          ['catch'](function (a) {
            c('clearTimeout')(Y);
            var b = y.current;
            b && b.logError(a);
            Z();
            t.setAdditionalLogData('is_live_preview', X(I));
            W.load(I);
          });
      } else
        t.setAdditionalLogData('is_p2p_playback', !1),
          t.setAdditionalLogData('is_live_preview', X(I)),
          W.load(I);
    }
    g.proceedWithOzPlayerCreation = a;
  },
  98,
);
__d(
  'VideoPlayerOzImplementationLatencyLevelManager',
  [],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, c) {
        (this.$2 = 'normal'),
          (this.$4 = null),
          (this.$1 = a),
          (this.$3 = b),
          (this.$6 = c);
      }
      var b = a.prototype;
      b.updatePlayerFormat = function (a) {
        this.$4 !== a && ((this.$4 = a), this.maybeUpdateLatencyLevel());
      };
      b.updateBroadcastLatencySensitivity = function (a) {
        this.$5 !== a && ((this.$5 = a), this.maybeUpdateLatencyLevel());
      };
      b.maybeUpdateLatencyLevel = function () {
        var a;
        this.$1.getBool('ull_use_broadcast_sensitivity_type', !1)
          ? (a = this.$7(this.$5))
          : (a = this.$8());
        a !== this.$2 &&
          ((this.$2 = a),
          this.$3.dispatch({
            payload: { latencyLevel: a },
            type: 'implementation_set_latency_level_requested',
          }));
      };
      b.$8 = function () {
        var a = [];
        try {
          a = JSON.parse(
            this.$1.getString('player_formats_for_low_latency', '[]'),
          );
        } catch (a) {}
        return a.includes('*') || a.includes(this.$4) ? 'low' : 'normal';
      };
      b.$7 = function (a) {
        if (a == null) return 'normal';
        var b = this.$1.getNumber('ultra_low_latency_bandwidth_threshold', 0),
          c = this.$6.getEstimatedBandwidth();
        switch (a) {
          case 1:
            return 'low';
          case 2:
            return c !== null && b > 0 && c < b ? 'normal' : 'ultra-low';
          case 0:
            return 'normal';
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerOzImplementationEngine',
  [
    'CometDASHPrefetchCacheManager',
    'VideoPlayerImplementationEngineAPI',
    'VideoPlayerImplementationEngineVideoElementAPI',
    'VideoPlayerImplementationErrors',
    'VideoPlayerImplementationLoadSequenceManager',
    'VideoPlayerODS',
    'VideoPlayerOzImplementationEngineExtrasAPI',
    'VideoPlayerOzImplementationEnginePartsImplFunction',
    'VideoPlayerOzImplementationEnginePartsImplUtils',
    'VideoPlayerOzImplementationLatencyLevelManager',
    'cr:1473549',
    'cr:1494460',
    'cr:1534629',
    'cr:72',
    'emptyFunction',
    'gkx',
    'promiseDone',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = !1;
    var h = c('emptyFunction');
    function a(a) {
      var e = a.debugLogId,
        f = a.handleFatalError,
        g = a.initialProps;
      a = a.setExposedStateInReact;
      var i = { current: null },
        j = { current: null },
        k = { current: null },
        l = { current: null },
        m = { current: null },
        n = { current: null },
        o = { current: null },
        p = { current: null },
        q = { current: null },
        r = { current: null },
        s = { current: null },
        t = { current: null },
        u = { current: null };
      function v() {
        var a;
        return (a = o.current) != null ? a : null;
      }
      function w() {
        var a;
        return (a = n.current) != null ? a : null;
      }
      function x() {
        var a;
        return (a =
          (a = j.current) == null ? void 0 : a.experimentationConfig) != null
          ? a
          : null;
      }
      function y() {
        var a;
        return (a = X.current) != null ? a : null;
      }
      function z() {
        var a;
        return (a = u.current) != null ? a : null;
      }
      var A;
      b('cr:1473549') && (A = new (b('cr:1473549'))());
      var B = 'comet_oz',
        C = function (a, b) {
          return b.manifestXmlStringInitial !== null
            ? a.manifestXmlStringInitial !== b.manifestXmlStringInitial
            : a.manifestUrl !== b.manifestUrl;
        },
        D = function (a, b) {
          return a.videoFBID !== b.videoFBID;
        },
        E = function (a, b) {
          return a.playerFormat !== b.playerFormat;
        },
        F = function (a) {
          return a.getBool('use_full_player_if_cached', !1) && b('cr:1534629')
            ? b('cr:1534629')().getModuleIfRequireable()
            : null;
        },
        G = function (a, b, c) {
          b != null
            ? (j.current = babelHelpers['extends']({}, a, {
                manifestXmlStringResolved: b,
              }))
            : (j.current = a),
            W.dispatch({
              type: 'implementation_engine_oz_manifest_downloading',
            }),
            (m.current = F(a.experimentationConfig)),
            K(m.current, [].concat(c, ['proceedWithOzManifestDownloading']));
        },
        H = function (a) {
          var b,
            e,
            f = a.manifestUrl,
            g = a.manifest,
            h = null;
          c('CometDASHPrefetchCacheManager') &&
            a.videoFBID != null &&
            (h = c('CometDASHPrefetchCacheManager').get(a.videoFBID));
          b = {
            VideoPlayerShakaPerformanceLoggerClass:
              a.VideoPlayerShakaPerformanceLoggerClass,
            accessToken: a.loggingMetaData.accessToken,
            audioOnly: a.audioOnly,
            experimentationConfig: a.experimentationConfig,
            graphQLVideoDRMInfo: a.graphQLVideoDRMInfo,
            graphQLVideoP2PSettings: a.graphQLVideoP2PSettings,
            manifestUrl: (b = f) != null ? b : null,
            manifestXmlStringInitial: (b = g) != null ? b : null,
            minQualityPreference: a.minQualityPreference,
            ozPrefetchCache: h,
            playerFormat:
              a.loggingMetaData.coreVideoPlayerMetaData.playerFormat,
            videoFBID: a.videoFBID,
            videoPlayerShakaPerformanceLoggerBuilder:
              a.videoPlayerShakaPerformanceLoggerBuilder,
          };
          h = i.current;
          u.current == null &&
            (u.current = new (c(
              'VideoPlayerOzImplementationLatencyLevelManager',
            ))(a.experimentationConfig, W, P));
          b.playerFormat != null &&
            (h == null || E(b, h)) &&
            W.dispatch({
              payload: { playerFormat: b.playerFormat },
              type: 'controller_set_player_format',
            });
          u.current.updatePlayerFormat(
            (e = a.loggingMetaData.coreVideoPlayerMetaData.playerFormat) != null
              ? e
              : null,
          );
          (e = u.current) == null
            ? void 0
            : e.updateBroadcastLatencySensitivity(
                a.broadcastLatencySensitivity,
              );
          e = !1;
          if (h == null) e = !0;
          else if (h != null && !D(b, h) && C(b, h)) {
            a = 14;
            d('VideoPlayerODS').bumpEntityKey(
              'OzImplementation',
              'manifest_reloaded',
              a,
            );
            e = !1;
          } else if (h != null && D(b, h))
            throw c('unrecoverableViolation')(
              'videoFBID changed after player initialization',
              'comet_video_player',
            );
          if (!e) return !1;
          f = b.manifestUrl;
          g = b.manifestXmlStringInitial;
          if (g == null && f == null)
            throw c('unrecoverableViolation')(
              'Empty manifestXmlStringInitial and manifestUrl',
              'comet_video_player',
            );
          i.current = b;
          G(b, g, [
            'handleVideoInfoChangeForOzImplementation',
            'downloadManifestInOz',
          ]);
          return !0;
        },
        I = function (a, b) {
          var d = function (c) {
              if (l.current !== a) return;
              m.current = c;
              K(c, [].concat(b, ['handleOzPlayerModuleLoadSuccess']));
            },
            e = function (b) {
              if (l.current !== a) return;
              U(b, 'oz_player_module_load_failed');
            };
          l.current = a;
          c('promiseDone')(a, d, e);
        },
        J = function (a) {
          a = d(
            'VideoPlayerImplementationEngineVideoElementAPI',
          ).createVideoPlayerImplementationEngineVideoElementAPI(a);
          X.current = a;
          return a;
        },
        K = function (a, c) {
          var e = R(),
            f = j.current;
          if (e == null || f == null) return;
          var g = J(e),
            h = f.experimentationConfig;
          a
            ? L(
                a,
                e,
                g,
                f,
                [].concat(c, [
                  'proceedWithResolvedVideoInfo',
                  'OzPlayerModuleFromRef',
                ]),
              )
            : b('cr:1494460')
            ? L(
                b('cr:1494460')(),
                e,
                g,
                f,
                [].concat(c, [
                  'proceedWithResolvedVideoInfo',
                  'VideoPlayerOzPlayerModuleLoaderSync',
                ]),
              )
            : b('cr:1534629')
            ? (h.getBool(
                'instantiate_buffering_detector_before_quick_starter',
                !1,
              ) &&
                d(
                  'VideoPlayerOzImplementationEnginePartsImplUtils',
                ).createOzBufferingDetector(
                  e,
                  g,
                  f.experimentationConfig,
                  W,
                  o,
                  V,
                ),
              I(
                b('cr:1534629')().load(),
                [].concat(c, [
                  'proceedWithResolvedVideoInfo',
                  'VideoPlayerOzPlayerModuleLoaderAsync',
                ]),
              ))
            : U(
                new Error('Neither of OzPlayerModuleLoader is available.'),
                'oz_player_module_loaders_missing',
              );
        },
        L = function (a, b, e, f, h) {
          try {
            var i = {
              OzPlayerClass: a,
              callChain: [].concat(h, [
                'proceedWithResolvedVideoInfoAndOzPlayerModuleSync',
              ]),
              destroyOzPlayerPartsRef: t,
              engineDebugAPI: A,
              engineExtrasAPI: P,
              getCaptionsInfo: Q,
              getLatencyLevelManager: z,
              getVideoLiveTrace: S,
              handleCaptionsInfoChange: T,
              handleFatalImplementationError: U,
              initialProps: g,
              logger: V,
              machine: W,
              ozBufferingDetectorRef: o,
              playerVersion: B,
              resolvedVideoInfo: f,
              videoElement: b,
            };
            a = x();
            h = g.loadSequence;
            a && a.getNumber('load_sequence_max_delay_ms', 0) > 0 && h != null
              ? (s.current = c(
                  'VideoPlayerImplementationLoadSequenceManager',
                ).schedule(a, h, function () {
                  d(
                    'VideoPlayerOzImplementationEnginePartsImplFunction',
                  ).proceedWithOzPlayerCreation(
                    babelHelpers['extends']({}, i, {
                      hivePluginRef: p,
                      overrideOzRequestImplementationRef: r,
                      ozPlayerRef: n,
                      p2pSessionLoggerRef: q,
                    }),
                  );
                  return e.getCanPlayPromise();
                }))
              : d(
                  'VideoPlayerOzImplementationEnginePartsImplFunction',
                ).proceedWithOzPlayerCreation(
                  babelHelpers['extends']({}, i, {
                    hivePluginRef: p,
                    overrideOzRequestImplementationRef: r,
                    ozPlayerRef: n,
                    p2pSessionLoggerRef: q,
                  }),
                );
            k.current = f;
          } catch (a) {
            U(a, 'oz_player_create_exception');
          }
        };
      function M(a) {
        var b = t.current;
        b != null && ((t.current = null), b(a));
        s.current != null && (s.current(), (s.current = null));
      }
      function N() {
        return;
      }
      function O() {
        (l.current = null), (m.current = null);
      }
      var P = d(
        'VideoPlayerOzImplementationEngineExtrasAPI',
      ).createVideoPlayerOzImplementationEngineExtrasAPI({
        getConfig: x,
        getOzPlayer: w,
        getVideoElementAPI: y,
      });
      y = d(
        'VideoPlayerImplementationEngineAPI',
      ).createVideoPlayerImplementationEngine({
        createDebugAPI: function (b) {
          var a = b.getVideoElementAPI;
          b = b.logger;
          return A
            ? A.createDebugAPI({
                engineExtrasAPI: P,
                getConfig: function () {
                  var a;
                  return (a =
                    (a = k.current) == null
                      ? void 0
                      : a.experimentationConfig) != null
                    ? a
                    : null;
                },
                getManifest: function () {
                  var a;
                  return (a =
                    (a = k.current) == null
                      ? void 0
                      : a.manifestXmlStringResolved) != null
                    ? a
                    : null;
                },
                getManifestUrl: function () {
                  var a;
                  return (a =
                    (a = k.current) == null ? void 0 : a.manifestUrl) != null
                    ? a
                    : null;
                },
                getOzBufferingDetector: v,
                getOzPlayer: w,
                getVideoElementAPI: a,
                logger: b,
              })
            : null;
        },
        createVideoPlayerError: d('VideoPlayerImplementationErrors')
          .createVideoPlayerErrorFromOzImplementationError,
        debugLog: h,
        debugLogId: e,
        destroyEngineParts: function (a) {
          M([].concat(a, ['destroyEngineParts'])), N(), O();
        },
        engineExtrasAPI: P,
        engineMetadata: {
          isAbrEnabled: !0,
          isExternalMedia: !1,
          playerImplementationName: 'oz_v2',
          playerVersion: B,
          streamingFormat: 'dash',
        },
        handleFatalError: f,
        handleVideoElementMounted: function (a) {
          var b = R();
          K(m.current, [].concat(a, ['handleVideoElementMounted']));
        },
        handleVideoElementUnmounted: function (a) {
          c('gkx')('1380112') &&
            M([].concat(a, ['handleVideoElementUnmounted']));
        },
        handleVideoInfoChange: H,
        initialProps: g,
        setExposedStateInReact: a,
      });
      e = y.engine;
      var Q = y.getCaptionsInfo,
        R = y.getVideoElement,
        S = y.getVideoLiveTrace,
        T = y.handleCaptionsInfoChange,
        U = y.handleFatalImplementationError,
        V = y.logger,
        W = y.machine,
        X = y.videoElementAPIRef;
      return e;
    }
    g.createVideoPlayerOzImplementationEngine = a;
  },
  98,
);
__d(
  'VideoPlayerOzImplementationV2.react',
  [
    'VideoPlayerImplementationEngineAPI',
    'VideoPlayerOzImplementationEngine',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    function a(a) {
      a = d(
        'VideoPlayerImplementationEngineAPI',
      ).useVideoPlayerImplementationEngine(
        a,
        d('VideoPlayerOzImplementationEngine')
          .createVideoPlayerOzImplementationEngine,
      );
      a = a.reactVideoFrameAndComponents;
      return a;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'manifestHasUnsupportedCodecs',
  ['getAvailableMimeCodecsFromDashManifest', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (c('gkx')('1917833') && window.MediaSource != null) {
        a = c('getAvailableMimeCodecsFromDashManifest')(a);
        return a.length <= 0
          ? !1
          : a.some(function (a) {
              return !a.isTypeSupported;
            });
      }
      return !1;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerOzImplementationData',
  ['err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.canUseOz,
        d = a.dashManifest,
        e = a.dashUrl,
        f = a.experimentationConfig,
        g = a.minQualityPreference;
      a = a.videoFBID;
      if (b !== !0) {
        b = c('err')('The DASH player is not available for this video');
        b.name = 'VideoImplementationsDashPlayerUnavailable';
        return b;
      }
      if (a == null) {
        b = c('err')('video has no FBID');
        b.name = 'VideoImplementationsNoFBID';
        return b;
      }
      a = d == null || d === '' ? null : d;
      b = e == null || e === '' ? null : e;
      if (a == null && b == null) {
        d = c('err')('video has no manifest and no manifest URL');
        d.name = 'VideoImplementationsNoManifestOrURL';
        return d;
      }
      return {
        experimentationConfig: f,
        manifest: a,
        manifestUrl: b,
        minQualityPreference: (e = g) != null ? e : null,
        seoWebCrawlerLookasideUrl: b,
      };
    }
    g.makeOzImplementationData = a;
  },
  98,
);
__d(
  'VideoPlayerOzWWWConfig',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 'oz_www_';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getBool = function (a, b) {
        return this.$1.getBool(g + a, b);
      };
      b.getNumber = function (a, b) {
        return this.$1.getNumber(g + a, b);
      };
      b.getString = function (a, b) {
        return this.$1.getString(g + a, b);
      };
      b.setContext = function (a, b) {
        this.$1.setContext(a, b);
      };
      b.getAllContexts = function () {
        return this.$1.getAllContexts();
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'useOzImplementationData',
  [
    'CometRelay',
    'VideoPlayerOzImplementationData',
    'VideoPlayerOzWWWConfig',
    'react',
    'useOzImplementationData_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useMemo;
    function a(a, e) {
      var f = e.manifestURL_DO_NOT_USE,
        g = e.videoPlayerShakaConfig,
        j = i(
          function () {
            return new (c('VideoPlayerOzWWWConfig'))(g);
          },
          [g],
        ),
        k = d('CometRelay').useFragment(
          h !== void 0 ? h : (h = b('useOzImplementationData_video.graphql')),
          a,
        );
      return i(
        function () {
          return d('VideoPlayerOzImplementationData').makeOzImplementationData({
            canUseOz: k.can_use_oz,
            dashManifest: f != null ? null : k.dash_manifest,
            dashUrl: f != null ? f : k.playable_url_dash,
            experimentationConfig: j,
            minQualityPreference: k.min_quality_preference,
            videoFBID: k.id,
          });
        },
        [k, f, j],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerShakaImplementationData',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = a.videoData;
      a = a.videoPlayerShakaConfig;
      return b == null ? null : { videoData: b, videoPlayerShakaConfig: a };
    }
    f.makeShakaImplementationData = a;
  },
  66,
);
__d(
  'useShakaImplementationData',
  [
    'CometRelay',
    'VideoPlayerShakaImplementationData',
    'cr:1604324',
    'react',
    'recoverableViolation',
    'useShakaImplementationData_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useMemo;
    function a(a, e) {
      var f = e.videoPlayerShakaConfig,
        g = d('CometRelay').useFragment(
          h !== void 0
            ? h
            : (h = b('useShakaImplementationData_video.graphql')),
          a,
        );
      return i(
        function () {
          var a;
          if (g.is_rss_podcast_video === !0) return null;
          a =
            (a = g.video_player_shaka_live_p2p_init) == null
              ? void 0
              : a.json_encoded_video_data;
          if (a == null) return null;
          if (b('cr:1604324') == null)
            return c('recoverableViolation')(
              'VideoData is not supported',
              'comet_video_player',
            );
          var e = null;
          try {
            e = new (b('cr:1604324'))(JSON.parse(a));
          } catch (a) {
            c('recoverableViolation')(
              'VideoData JSON is broken',
              'comet_video_player',
            );
          }
          return d(
            'VideoPlayerShakaImplementationData',
          ).makeShakaImplementationData({
            videoData: e,
            videoPlayerShakaConfig: f,
          });
        },
        [g, f],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoImplementationsImpl',
  [
    'CometRelay',
    'ErrorMetadata',
    'VideoPlayerOzImplementationV2.react',
    'VideoPlayerProgressiveImplementationV2.react',
    'cr:1604325',
    'err',
    'gkx',
    'manifestHasUnsupportedCodecs',
    'recoverableViolation',
    'unrecoverableViolation',
    'useOzImplementationData',
    'useProgressiveImplementationData',
    'useShakaImplementationData',
    'useVideoImplementationsImpl_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a, e) {
      var f = [],
        g = e.forceProgressiveImpl;
      g = g === void 0 ? !1 : g;
      var i = e.initialForceHD;
      i = i === void 0 ? !1 : i;
      var j = e.manifestURL_DO_NOT_USE,
        k = e.videoFBID;
      e = e.videoPlayerShakaConfig;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('useVideoImplementationsImpl_video.graphql')),
        a,
      );
      var l = c('useShakaImplementationData')(a, { videoPlayerShakaConfig: e });
      l != null &&
        (b('cr:1604325') == null
          ? c('recoverableViolation')(
              'VideoPlayerShakaImplementation is not supported',
              'comet_video_player',
            )
          : f.push({
              Component: b('cr:1604325'),
              data: l,
              typename: 'VideoPlayerShakaImplementation',
            }));
      l = null;
      var m = null,
        n = !1;
      j = c('useOzImplementationData')(a, {
        manifestURL_DO_NOT_USE: j,
        videoPlayerShakaConfig: e,
      });
      if (j instanceof Error) l = j;
      else {
        m = j;
        if (m.manifest === null && m.manifestUrl === null)
          throw c('unrecoverableViolation')(
            'If ozImplementationData exists, it should have either manifest or manifestUrl',
            'comet_video_player',
          );
        n = c('manifestHasUnsupportedCodecs')(m.manifest);
        g ||
          ((m.manifest != null && !n) || m.manifestUrl != null
            ? f.push({
                Component: c('VideoPlayerOzImplementationV2.react'),
                data: m,
                typename: 'VideoPlayerOzImplementation',
              })
            : (l = c('err')('unsupported DASH codecs')));
      }
      e = c('useProgressiveImplementationData')(a, { initialForceHD: i });
      c('VideoPlayerProgressiveImplementationV2.react') != null &&
        e != null &&
        f.push({
          Component: c('VideoPlayerProgressiveImplementationV2.react'),
          data: e,
          typename: 'VideoPlayerProgressiveImplementation',
        });
      if (f.length === 0) {
        l != null
          ? ((j = c('err')(
              'Cannot play video: ' +
                l.message +
                ' and no progressive URL is available',
            )),
            l.name && (j.name = l.name))
          : ((j = c('err')(
              'Cannot play video: No progressive URL is available',
            )),
            (j.name = 'VideoImplementationsNoProgressiveURL'));
        j.project = 'comet_video_player';
        a = new (c('ErrorMetadata'))();
        j.metadata = a;
        a.addEntry('COMET_VIDEO', 'VIDEO_ID', String(k));
        if (c('gkx')('1611172')) {
          k = {
            forced_progressive: g,
            has_oz_data: m != null,
            has_oz_manifest: ((i = m) == null ? void 0 : i.manifest) != null,
            has_oz_manifest_url:
              ((l = m) == null ? void 0 : l.manifestUrl) != null,
            has_oz_unsupported_codecs: n,
            has_progressive_data: e != null,
          };
          a.addEntry(
            'COMET_VIDEO',
            'VIDEO_IMPLEMENTATION_DEBUG_DATA',
            JSON.stringify(k),
          );
          c('recoverableViolation')(j.message, 'comet_video_player', {
            error: j,
          });
        }
        throw j;
      }
      return f;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoImplementations',
  ['useVideoImplementationsImpl'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('useVideoImplementationsImpl');
  },
  98,
);
__d(
  'useVideoPlayerAudioAvailabilityInfoRelay',
  [
    'CometRelay',
    'VideoPlayerAudioAvailabilityInfo',
    'react',
    'useVideoPlayerAudioAvailabilityInfoRelay_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useMemo;
    function a(a) {
      var c = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useVideoPlayerAudioAvailabilityInfoRelay_video.graphql')),
        a,
      );
      return i(
        function () {
          return d(
            'VideoPlayerAudioAvailabilityInfo',
          ).makeVideoPlayerAudioAvailabilityInfo({
            audioAvailability: c.audio_availability,
            mutedSegmentsUnsanitized:
              c.muted_segments == null
                ? []
                : c.muted_segments.map(function (a) {
                    return {
                      muteEndTimeInSec: a.mute_end_time_in_sec,
                      muteStartTimeInSec: a.mute_start_time_in_sec,
                    };
                  }),
          });
        },
        [c.audio_availability, c.muted_segments],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'AudioSettingsVolumeSetting',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ DEFAULT: 'default', QUIET: 'quiet' });
    f['default'] = a;
  },
  66,
);
__d(
  'useVideoPlayerAudioSettings',
  [
    'AudioSettingsVolumeSetting',
    'CometRelay',
    'react',
    'useVideoPlayerAudioSettings_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useMemo,
      j = 1;
    e = 0.5;
    var k = new Map([
      ['default', j],
      ['quiet', e],
    ]);
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('useVideoPlayerAudioSettings_video.graphql')),
        a,
      );
      a = (a = a.audio_settings) == null ? void 0 : a.video_volume_setting;
      var e = 'DEFAULT';
      switch (a) {
        case 'DEFAULT':
        case 'QUIET':
          e = a;
          break;
        default:
          break;
      }
      a = c('AudioSettingsVolumeSetting')[e];
      var f = (e = k.get(a)) != null ? e : j;
      return i(
        function () {
          return { preferredVolumeSetting: f };
        },
        [f],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerCaptionsSettings',
  ['CometRelay', 'useVideoPlayerCaptionsSettings_video.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = 'DEFAULT',
      j = 'BLACK',
      k = 'WHITE',
      l = 'DEFAULT';
    function a(a) {
      var c;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useVideoPlayerCaptionsSettings_video.graphql')),
        a,
      );
      return {
        alwaysShowCaptions:
          (c =
            (c = a.captions_settings) == null
              ? void 0
              : c.always_show_captions) != null
            ? c
            : !1,
        captionDisplayStyle: {
          captionsBackgroundColor:
            (c =
              (c = a.captions_settings) == null
                ? void 0
                : c.captions_background_color) != null
              ? c
              : j,
          captionsBackgroundOpacity:
            (c =
              (c = a.captions_settings) == null
                ? void 0
                : c.captions_background_opacity) != null
              ? c
              : i,
          captionsTextColor:
            (c =
              (c = a.captions_settings) == null
                ? void 0
                : c.captions_text_color) != null
              ? c
              : k,
          captionsTextSize:
            (a =
              (c = a.captions_settings) == null
                ? void 0
                : c.captions_text_size) != null
              ? a
              : l,
        },
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerLiveLatencyKnobSettings',
  ['CometRelay', 'useVideoPlayerLiveLatencyKnobSettings_video.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    function a(a) {
      var c;
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useVideoPlayerLiveLatencyKnobSettings_video.graphql')),
        a,
      );
      return {
        desiredLatencyMs:
          (c =
            (c = a.broadcast_low_latency_config) == null
              ? void 0
              : c.ll_desired_latency_ms) != null
            ? c
            : 0,
        latencyToleranceMs:
          (a =
            (c = a.broadcast_low_latency_config) == null
              ? void 0
              : c.ll_latency_tolerance_ms) != null
            ? a
            : 0,
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerShakaPerformanceLoggerBuilder',
  [
    'CometRelay',
    'useVideoPlayerShakaPerformanceLoggerBuilder_init.graphql',
    'useVideoPlayerShakaPerformanceLoggerBuilder_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h, i;
    h !== void 0
      ? h
      : (h = b('useVideoPlayerShakaPerformanceLoggerBuilder_init.graphql'));
    function a(a) {
      a = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b(
              'useVideoPlayerShakaPerformanceLoggerBuilder_video.graphql',
            )),
        a,
      );
      var c = a.video_player_shaka_performance_logger_init2
        ? d('CometRelay').ModuleResource.read(
            a.video_player_shaka_performance_logger_init2,
          )
        : null;
      a =
        (a = a.video_player_shaka_performance_logger_init2) == null
          ? void 0
          : a.per_session_sampling_rate;
      return c != null && a != null ? new c({ perSessionSampleRate: a }) : null;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerRelay.react',
  [
    'fbt',
    'CastingStateHooks',
    'CometPlaceholder.react',
    'CometRelay',
    'CometTrackingNodeProvider.react',
    'CurrentUser',
    'ErrorMetadata',
    'InstreamVideoAdBreaksPlayer.react',
    'JSResourceForInteraction',
    'VideoPlayerFallbackCover.react',
    'VideoPlayerRelay_video.graphql',
    'VideoPlayerRetryableErrorBoundary.react',
    'VideoPlayerXImplRelayWrapper.react',
    'XFBLatencySensitiveTypeUtils.facebook',
    'computeAspectRatio',
    'cr:1446473',
    'cr:1701936',
    'cr:759',
    'cr:835',
    'defaultErrorBoundaryFallback',
    'deferredLoadComponent',
    'emptyFunction',
    'err',
    'getAvailableMimeCodecsFromDashManifest',
    'getVideoPlayerAutoplayProps',
    'gkx',
    'lazyLoadComponent',
    'manifestHasPlayableRepresentations',
    'normalizeVideoPlayerLoopCount',
    'react',
    'recoverableViolation',
    'requireDeferredForDisplay',
    'unrecoverableViolation',
    'useGraphQLVideoAutoplayGatingResult',
    'useGraphQLVideoDRMInfo',
    'useGraphQLVideoP2PSettings',
    'usePremiumMusicVideoInterruptionSubscription',
    'useProgressiveImplementationData',
    'useVideoImplementations',
    'useVideoPlayerAudioAvailabilityInfoRelay',
    'useVideoPlayerAudioSettings',
    'useVideoPlayerCaptionsSettings',
    'useVideoPlayerLiveLatencyKnobSettings',
    'useVideoPlayerShakaPerformanceLoggerBuilder',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react'),
      k = d('react').useMemo,
      l = (e = b('cr:759')) != null ? e : c('emptyFunction'),
      m = (e = b('cr:835')) != null ? e : c('emptyFunction'),
      n = c('gkx')('5128'),
      o = c('gkx')('5194'),
      p = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')(
          'VideoPlayerSphericalFallbackCover.react',
        ).__setRef('VideoPlayerRelay.react'),
      ),
      q = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'VideoPlayerVideoIsCastingCover.react',
        ).__setRef('VideoPlayerRelay.react'),
      );
    function r(a) {
      var e,
        f,
        g = a.accessToken,
        r = a.adClientToken,
        s = a.additionalLogData,
        t = a.audioOnly,
        u = a.autoplayGatingResult,
        v = a.bufferEndLimit,
        w = a.canAutoplay,
        x = a.children,
        y = a.disableCVCSubscription;
      y = y === void 0 ? !1 : y;
      var z = a.disableLoadingIndicator;
      z = z === void 0 ? !1 : z;
      var A = a.disableLogging,
        B = a.externalLogID,
        C = a.externalLogType,
        D = a.graphQLVideoDRMInfo,
        E = a.initialForceHD,
        F = E === void 0 ? !1 : E;
      E = a.initialTracePolicy;
      var G = a.loadSequence,
        H = a.loopCount,
        I = a.manifestURL_DO_NOT_USE,
        J = a.playerFormat;
      J = J === void 0 ? 'inline' : J;
      var aa = a.playerOriginOverride,
        ba = a.portalingEnabled,
        ca = a.portalingFromVideoID,
        da = a.portalingPlaceMetaData,
        ea = a.portalingRenderPlaceholder,
        fa = a.productAttribution,
        ga = a.seoWebCrawlerVideoTracks,
        ha = a.source_VPL_LOGGING_HACK,
        ia = a.startTimestamp,
        K = a.subOrigin,
        L = a.video,
        M = a.volumeSetting;
      a = a.wrapVideoPixels_EXPERIMENTAL;
      c('usePremiumMusicVideoInterruptionSubscription')(
        c('CurrentUser').getID(),
      );
      var N = d('CometRelay').useFragment(
        i !== void 0 ? i : (i = b('VideoPlayerRelay_video.graphql')),
        L,
      );
      L = N.dash_prefetch_experimental;
      e =
        ((e = N.video_available_captions_locales) != null ? e : []).find(
          function (a) {
            a = a.localized_creation_method;
            return a != null;
          },
        ) != null;
      f = d('XFBLatencySensitiveTypeUtils.facebook').toJSEnum(
        (f = N.latency_sensitive_config) == null
          ? void 0
          : f.broadcast_latency_sensitivity,
      );
      var O = b('cr:1701936')(N, { adClientToken: r }),
        ja = l(N.id),
        ka = c('useGraphQLVideoP2PSettings')(N),
        P = c('useGraphQLVideoDRMInfo')(N);
      P = (D = D) != null ? D : P;
      D = !!(P && P.fairplayCert !== null);
      var Q =
        D ||
        (n && !!N.is_live_streaming) ||
        (o && typeof MediaSource === 'undefined');
      D = c('useProgressiveImplementationData')(N, { initialForceHD: !1 });
      D =
        (D == null ? void 0 : D.hdSrc) != null ||
        (D == null ? void 0 : D.sdSrc) != null;
      var R = !1;
      if (
        !Q &&
        D &&
        c('gkx')('8319') &&
        N.dash_manifest != null &&
        N.dash_manifest !== '' &&
        N.is_live_streaming !== !0
      ) {
        D = c('getAvailableMimeCodecsFromDashManifest')(N.dash_manifest);
        D.length > 0 &&
          !c('manifestHasPlayableRepresentations')(D) &&
          c('gkx')('2938') &&
          (R = !0);
      }
      D = k(
        function () {
          return {
            forceProgressiveImpl: Q || R,
            initialForceHD: F,
            manifestURL_DO_NOT_USE: I,
            videoFBID: N.id,
            videoPlayerShakaConfig: O,
          };
        },
        [Q, R, F, I, N.id, O],
      );
      D = c('useVideoImplementations')(N, D);
      var S = c('useVideoPlayerCaptionsSettings')(N),
        la = c('useVideoPlayerAudioSettings')(N),
        T = c('useVideoPlayerLiveLatencyKnobSettings')(N),
        ma = T.desiredLatencyMs;
      T = T.latencyToleranceMs;
      var na = c('useVideoPlayerAudioAvailabilityInfoRelay')(N),
        U = c('useGraphQLVideoAutoplayGatingResult')(N);
      U = c('getVideoPlayerAutoplayProps')(U, w, u);
      w = b('cr:1446473')(N);
      u = c('useVideoPlayerShakaPerformanceLoggerBuilder')(N);
      var oa = m(N),
        pa = j.jsx(c('CometPlaceholder.react'), {
          fallback: null,
          children: j.jsx(c('InstreamVideoAdBreaksPlayer.react'), {
            playerFormat: J,
            subOrigin: K,
            video: N,
          }),
        }),
        V = d('CastingStateHooks').useCastingVideoID(),
        W = N.id;
      if (W == null)
        throw c('unrecoverableViolation')(
          'Cannot play video: Empty video ID',
          'comet_video_player',
        );
      var X = null;
      if (
        c('gkx')('1076') &&
        !Q &&
        N.dash_manifest != null &&
        N.dash_manifest !== ''
      ) {
        var Y = c('getAvailableMimeCodecsFromDashManifest')(N.dash_manifest);
        (Y.length <= 0 ||
          !Y.every(function (a) {
            return (
              (a.isRequiredForPlayback && a.isTypeSupported) ||
              !a.isRequiredForPlayback
            );
          })) &&
          (X =
            N.is_live_streaming === !0
              ? h._('__JHASH__wl4W_I7tXRq__JHASH__')
              : null);
      }
      Y =
        N.unsupported_browser_message != null
          ? N.unsupported_browser_message
          : X;
      if (Y != null) {
        X = c('err')('Cannot play video: Browser is not supported');
        X.metadata = new (c('ErrorMetadata'))();
        X.metadata.addEntry('COMET_VIDEO', 'VIDEO_ID', W);
        c('recoverableViolation')(
          'Cannot play video: Browser is not supported',
          'comet_video_player',
          { error: X },
        );
        return j.jsx(c('VideoPlayerFallbackCover.react'), { message: Y });
      }
      X = N.permalink_url;
      Y = N.spherical_video_renderer;
      Y = Y
        ? j.jsx(d('CometRelay').MatchContainer, {
            match: Y,
            props: {
              playerFormat: J,
              sphericalVideoRenderer: Y,
              subOrigin: K,
              videoTahoeUrl: X,
            },
          })
        : null;
      X = N.is_spherical;
      var Z = N.is_spherical_enabled,
        $ = N.permalink_url;
      if (X === !0 && Z !== !0) {
        if ($ == null || $ === '')
          throw c('unrecoverableViolation')(
            'Cannot play video: Empty permalink URL for a spherical video',
            'comet_video_player',
          );
        return j.jsx(p, { videoTahoeUrl: $ });
      }
      if (V != null && V === N.id)
        return j.jsx(c('CometPlaceholder.react'), {
          fallback: null,
          children: j.jsx(q, { video: N }),
        });
      $ =
        (Z =
          (X = N.live_playback_instrumentation_configs) == null
            ? void 0
            : X.is_client_triggered_trace_enabled) != null
          ? Z
          : !1;
      V = c('normalizeVideoPlayerLoopCount')(H, N.is_looping, N.loop_count);
      X = c('computeAspectRatio')(N.width, N.height);
      return j.jsx(
        c('VideoPlayerXImplRelayWrapper.react'),
        {
          VideoPlayerShakaPerformanceLoggerClass: w,
          accessToken: g,
          adClientToken: r,
          additionalLogData: s,
          alt: c('gkx')('1924962') ? N.animated_image_caption : void 0,
          alwaysShowCaptions: S.alwaysShowCaptions,
          areCaptionsAutogenerated: e,
          audioAvailabilityInfo: na,
          audioOnly: N.is_podcast_video === !0 || t,
          autoplayGatingResult: U.autoplayGatingResult,
          autoplaySetting: U.autoplaySetting,
          broadcastId: N.broadcast_id,
          broadcastLatencySensitivity: f,
          broadcastStatus: N.broadcast_status,
          broadcasterOrigin: N.broadcaster_origin,
          bufferEndLimit: v,
          canAutoplay: U.canAutoplay,
          captionDisplayStyle: S.captionDisplayStyle,
          captionsUrl: N.captions_url,
          children: x,
          desiredLatencyMs: ma,
          disableCVCSubscription: y,
          disableLoadingIndicator: z,
          disableLogging: A,
          expiredVideoUrlRefreshHandler: ja,
          externalLogID: B,
          externalLogType: C,
          graphQLVideoDRMInfo: P,
          graphQLVideoP2PSettings: ka,
          implementations: D,
          initialRepresentationIds: L,
          initialTracePolicy: E,
          instreamVideoAdBreaksPlayer: pa,
          isClientTriggeredTraceEnabled: $,
          isLiveStreaming: N.is_live_streaming,
          isLiveTraceEnabled: N.is_live_trace_enabled,
          isNCSR: N.is_ncsr,
          isPremiumMusicVideo: N.pmv_metadata != null,
          isVideoBroadcast: N.is_video_broadcast,
          latencyToleranceMs: T,
          loadSequence: G,
          loopCount: V,
          playerFormat: J,
          playerOriginOverride: aa,
          portalingEnabled: ba,
          portalingFromVideoID: ca,
          portalingPlaceMetaData: da,
          portalingRenderPlaceholder: ea,
          productAttribution: fa,
          seoWebCrawlerVideoTracks: ga,
          source_VPL_LOGGING_HACK: ha,
          startTimestamp: ia,
          subOrigin: K,
          videoFBID: W,
          videoPixelsAspectRatio: X,
          videoPlayerIMFFromVideoMetadata: oa,
          videoPlayerShakaPerformanceLoggerBuilder: u,
          videoPlayerSpherical: Y,
          volumeSetting: M !== void 0 ? M : la.preferredVolumeSetting,
          wrapVideoPixels_EXPERIMENTAL: a,
        },
        W,
      );
    }
    r.displayName = r.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;
      b = b === void 0 ? !1 : b;
      var d = a.errorBoundaryFallback;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn',
        'errorBoundaryFallback',
      ]);
      a = j.jsx(c('CometTrackingNodeProvider.react'), {
        trackingNode: 13,
        children: j.jsx(r, babelHelpers['extends']({}, a)),
      });
      return b
        ? a
        : j.jsx(c('VideoPlayerRetryableErrorBoundary.react'), {
            description: 'VideoPlayerRelayBoundary',
            fallback: (b = d) != null ? b : c('defaultErrorBoundaryFallback'),
            children: a,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoPlayerInstreamAdsFeedContextCardContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = d('react').useContext,
      i = b.createContext({ isWatchTab: !1, onNodeChangeFunc: null });
    function a() {
      return h(i);
    }
    g.CometVideoPlayerInstreamAdsFeedContextCardContext = i;
    g.useCometVideoPlayerInstreamAdsFeedContextCardContext = a;
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'VideoPlayerScrubberPreview_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoPlayerScrubberPreview_video',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'ScrubberPreview',
          kind: 'LinkedField',
          name: 'scrubber_preview_thumbnail_information',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'sprite_uris',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'thumbnail_width',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'thumbnail_height',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'has_preview_thumbnails',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'num_images_per_row',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'max_number_of_images_per_sprite',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'time_interval_between_image',
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
  'useRelayClientStateWithLocalStorage',
  ['CometRelay', 'FBLogger', 'WebStorage', 'react', 'useStable'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = new Set();
    function a(a, b, e, f) {
      var g = j.has(b),
        k = d('CometRelay').useRelayEnvironment(),
        l = c('useStable')(c('WebStorage').getLocalStorage),
        m = c('useStable')(function () {
          if (g || l == null) return f;
          var a = l.getItem(b);
          try {
            return a == null || a === '' ? f : JSON.parse(a);
          } catch (a) {
            return f;
          }
        }),
        n = h(
          function (c) {
            d('CometRelay').commitLocalUpdate(k, function (d) {
              d = d.get(a);
              if (d == null) return;
              if (d.getValue(e) === c) return;
              d.setValue(c, e);
              j.add(b);
            });
          },
          [k, e, a, b],
        );
      i(
        function () {
          if (l == null) return;
          if (!g) return;
          var a = JSON.stringify(f);
          if (a == null) return;
          try {
            l.setItem(b, a);
          } catch (b) {
            b != null && typeof b === 'object' && b.code === 22 && l.clear();
            a = c('FBLogger')('use_local_storage');
            b instanceof Error && (a = a.catching(b));
            a.mustfix('Cannot save to local storage.');
          }
        },
        [b, g, l, f],
      );
      return [g ? f : m, n];
    }
    g.useRelayClientStateWithLocalStorage = a;
  },
  98,
);
__d(
  'useFeedClickEventHandler',
  ['react', 'useStoryClickEventLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a, b) {
      var d = c('useStoryClickEventLogger')();
      return h(
        function (c) {
          a && a(c);
          var e = c.type;
          if (
            e === 'click' ||
            e === 'contextmenu' ||
            (e === 'mousedown' &&
              typeof c.button === 'number' &&
              (c.button === 1 || c.button === 2)) ||
            (e === 'keydown' && (c.key === 'Enter' || c.key === ' '))
          ) {
            e = typeof c.button === 'number' ? c.button : 0;
            d(c.timeStamp, e, b);
          }
        },
        [a, d, b],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useSEOLoggedOutWebCrawler',
  ['gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      return c('gkx')('1779508');
    }
    g['default'] = a;
  },
  98,
);
__d(
  'getFormattedTimestamp',
  ['DateConsts'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = '';
      a = a;
      isNaN(a) ? (a = 0) : a < 0 && ((a *= -1), (b = '-'));
      var c = Math.floor(a / d('DateConsts').SEC_PER_HOUR),
        e = Math.floor(
          (a - c * d('DateConsts').SEC_PER_HOUR) / d('DateConsts').SEC_PER_MIN,
        );
      a = Math.round(
        a - c * d('DateConsts').SEC_PER_HOUR - e * d('DateConsts').SEC_PER_MIN,
      );
      a === d('DateConsts').SEC_PER_MIN && ((a = 0), e++);
      e === d('DateConsts').MIN_PER_HOUR && ((e = 0), c++);
      a = ('0' + a).slice(-2);
      if (c === 0) return '' + b + e + ':' + a;
      else {
        e = ('0' + e).slice(-2);
        return '' + b + c + ':' + e + ':' + a;
      }
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerWwwLogger',
  ['VideoPlayerWwwFalcoEvent'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      var b,
        c =
          a.logData.live_trace_stream_id !== null &&
          a.logData.live_trace_stream_type !== null;
      return {
        access_token: a.logData.access_token,
        ad_client_token: a.logData.ad_client_token,
        attribution_id: a.logData.attribution_id,
        attribution_id_v2: a.logData.attribution_id_v2,
        attribution_id_v2_root: a.logData.attribution_id_v2_root,
        audio_only: a.logData.audio_only,
        audio_representation_id: a.logData.audio_representation_id,
        autoplay_eligible: a.logData.autoplay_eligible,
        autoplay_failure_reasons: a.logData.autoplay_failure_reasons,
        autoplay_setting: a.logData.autoplay_setting,
        available_qualities: a.logData.available_qualities,
        broadcaster_origin: a.logData.broadcaster_origin,
        browser_tab_id: a.logData.browser_tab_id,
        caption_state: a.logData.caption_state,
        cast_client_app_id: a.logData.cast_client_app_id,
        client_latency_setting: a.logData.client_latency_setting,
        current_playback_speed: a.logData.current_playback_speed,
        current_viewability_percentage: Number(
          a.logData.current_viewability_percentage,
        ),
        current_volume: a.logData.current_volume,
        dash_perf_logging_enabled: a.logData.dash_perf_logging_enabled,
        data_connection_quality: a.logData.data_connection_quality,
        debug_reason: a.logData.debug_reason,
        device_id: a.logData.device_id,
        device_type: a.logData.device_type,
        dropped_frame_count: Number(a.logData.dropped_frame_count),
        error: a.logData.error,
        error_code: a.logData.error_code,
        error_description: a.logData.error_description,
        error_domain: a.logData.error_domain,
        error_type: a.logData.error_type,
        error_user_info: a.logData.error_user_info,
        event_name: a.eventType,
        event_seq_num: a.logData.event_seq_num,
        external_log_id: a.logData.external_log_id,
        external_log_type: a.logData.external_log_id,
        fb_manifest_identifier: a.logData.fb_manifest_identifier,
        feed_aggregation_type: a.logData.feed_aggregation_type,
        feed_position: a.logData.feed_position,
        frame_events: a.logData.frame_events,
        ft: a.logData.ft,
        imf_emsg_id: a.logData.imf_emsg_id,
        imf_event_type: a.logData.imf_event_type,
        imf_topic: a.logData.imf_topic,
        interrupt_count:
          a.logData.interrupt_count !== null
            ? Number(a.logData.interrupt_count)
            : null,
        interrupt_time: Number(a.logData.interrupt_time),
        is_abr_enabled: a.logData.is_abr_enabled,
        is_fbms: a.logData.is_fbms,
        is_live_preview: (b = a.logData.is_live_preview) != null ? b : !1,
        is_live_video_rewound: a.logData.is_live_video_rewound,
        is_p2p_playback: a.logData.is_p2p_playback,
        is_pip: a.logData.is_pip,
        is_predictive_playback: a.logData.is_predictive_playback,
        is_sound_on: a.logData.is_sound_on,
        is_stalling: a.logData.is_stalling,
        is_templated_manifest: a.logData.is_templated_manifest,
        last_viewability_percentage: Number(
          a.logData.last_viewability_percentage,
        ),
        live_trace_source_id: a.logData.live_trace_source_id,
        live_trace_stream_id: c ? a.logData.live_trace_stream_id : null,
        live_trace_stream_type: c ? a.logData.live_trace_stream_type : null,
        mpd_validation_errors: a.logData.mpd_validation_errors,
        network_connected: a.logData.network_connected,
        next_representation_id: a.logData.next_representation_id,
        notification_id: a.logData.notification_id,
        notification_medium: a.logData.notification_medium,
        offset_ms:
          a.logData.offset_ms != null ? String(a.logData.offset_ms) : null,
        permalink_share_id: a.logData.permalink_share_id,
        playback_caption_format: a.logData.playback_caption_format,
        playback_caption_locale: a.logData.playback_caption_locale,
        playback_duration: a.logData.playback_duration,
        playback_is_broadcast: a.logData.playback_is_broadcast,
        playback_is_drm: a.logData.playback_is_drm,
        playback_is_live_streaming: a.logData.playback_is_live_streaming,
        player_format: a.logData.player_format,
        player_instance_key: a.logData.player_instance_key,
        player_mode: a.logData.player_mode,
        player_origin: a.logData.player_origin,
        player_state: a.logData.player_state,
        player_suborigin: a.logData.player_suborigin,
        player_version: a.logData.player_version,
        reaction_video_channel_type: a.logData.reaction_video_channel_type,
        representation_id: a.logData.representation_id,
        resource_url: a.logData.resource_url,
        routeTracePolicy: a.routeTracePolicy,
        seq_num: a.logData.seq_num,
        source: a.source_VPL_LOGGING_HACK,
        source_VPL_LOGGING_HACK: a.logData.source_VPL_LOGGING_HACK,
        stall_count: Number(a.logData.stall_count),
        stall_count_200_ms: Number(a.logData.stall_count_200_ms),
        stall_time: Number(a.logData.stall_time),
        state: a.logData.state,
        streaming_format: a.logData.streaming_format,
        time_ms: a.logData.time_ms,
        total_frame_count: Number(a.logData.total_frame_count),
        tracking_data_encrypted: a.logData.tracking_data_encrypted,
        tracking_nodes: a.logData.tracking_nodes,
        tv_session_id: a.logData.tv_session_id,
        v2_heart_beat: a.logData.v2_heart_beat,
        video_bandwidth: a.logData.video_bandwidth,
        video_buffer_end_position: a.logData.video_buffer_end_position,
        video_chaining_depth_level: a.logData.video_chaining_depth_level,
        video_chaining_parent_video_id:
          a.logData.video_chaining_parent_video_id,
        video_chaining_session_id: a.logData.video_chaining_session_id,
        video_channel_id: a.logData.video_channel_id,
        video_id: a.logData.video_id,
        video_last_start_time_position:
          a.logData.video_last_start_time_position,
        video_play_reason: a.logData.video_play_reason,
        video_player_height: Number(a.logData.video_player_height),
        video_player_width: Number(a.logData.video_player_width),
        video_time_position: a.logData.video_time_position,
        vpts: a.logData.vpts,
        web_client_revision: a.logData.web_client_revision,
      };
    }
    a = {
      logComet: function (a) {
        c('VideoPlayerWwwFalcoEvent').log(function () {
          return h(a);
        });
      },
      logCometImmediately: function (a) {
        c('VideoPlayerWwwFalcoEvent').logImmediately(function () {
          return h(a);
        });
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'useConcurrentAutoplayManagementAPI',
  ['react', 'removeFromArray', 'useCometUniqueID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useState;
    function a() {
      return c('useCometUniqueID')();
    }
    function i() {
      var a = [];
      return {
        isControllingComponent: function (b) {
          var c = a.length;
          return a[c - 1] === b;
        },
        registerControllingComponent: function (b) {
          c('removeFromArray')(a, b), a.push(b);
        },
        unregisterControllingComponent: function (b) {
          var d = a.length;
          d > 1 && c('removeFromArray')(a, b);
          return d > 1;
        },
      };
    }
    function b() {
      var a = h(function () {
        return i();
      });
      a = a[0];
      return a;
    }
    g.useAutoplayControlID = a;
    g.createConcurrentAutoplayManagementAPI = i;
    g.useConcurrentAutoplayManagementAPI = b;
  },
  98,
);
__d(
  'VideoPlayerCaptionsController',
  ['JSResourceForInteraction', 'recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('JSResourceForInteraction')(
        'VideoPlayerHTML5ApiCea608State',
      ).__setRef('VideoPlayerCaptionsController'),
      i = c('JSResourceForInteraction')(
        'VideoPlayerHTML5ApiWebVttState',
      ).__setRef('VideoPlayerCaptionsController');
    function a(a) {
      var b = a.captionsUrl,
        d = a.inbandCaptionsExpected,
        e = a.onCaptionsLoaded,
        f = null,
        g = null,
        j = null,
        k = null;
      function l(a) {
        var b = i
          .load()
          .then(function (c) {
            if (b !== j) return;
            f = new c({
              captionsDisplay: null,
              onCaptionsLoaded: e,
              onReady: function (b) {
                b.loadFromUrl(a);
              },
            });
          })
          ['catch'](function (a) {
            if (b !== j) return;
            c('recoverableViolation')(
              'Failed to load the VideoPlayerHTML5ApiWebVttState module: ' +
                a.message,
              'comet_video_player',
            );
          });
        return b;
      }
      function m() {
        var a = h
          .load()
          .then(function (b) {
            if (a !== k) return;
            g = new b({
              captionsDisplay: null,
              onCaptionsLoaded: e,
              onReady: function (a) {
                a.processQueue();
              },
            });
          })
          ['catch'](function (b) {
            if (a !== k) return;
            c('recoverableViolation')(
              'Failed to load the VideoPlayerHTML5ApiCea608State module: ' +
                b.message,
              'comet_video_player',
            );
          });
        return a;
      }
      b != null ? (j = l(b)) : d === !0 && (k = m());
      return {
        destroy: function () {
          f && (f.destroy(), (f = null)),
            g && (g.destroy(), (g = null)),
            j && (j = null),
            k && (k = null);
        },
        getCaptionFormat: function () {
          return f ? 'webvtt' : g ? 'cea608' : null;
        },
        handleCea608BytesReceived: function (a) {
          g && g.enqueueBytes(a);
        },
        handleTimeUpdate: function (a) {
          if (f) {
            var b;
            f.source && f.source.handleTimeUpdate(a);
            return (b =
              (b = f) == null ? void 0 : b.getCurrentScreenRepresentation()) !=
              null
              ? b
              : null;
          } else if (g) {
            g.source && g.source.handleTimeUpdate(a);
            return (a =
              (b = g) == null ? void 0 : b.getCurrentScreenRepresentation()) !=
              null
              ? a
              : null;
          }
          return null;
        },
        updateCaptionsUrl: function (a) {
          f && (f.destroy(), (f = null)), a != null && (j = l(a));
        },
        updateInbandCaptionsExpected: function (a) {
          g && (g.destroy(), (g = null)), a && (k = m());
        },
      };
    }
    g.createCaptionsController = a;
  },
  98,
);
__d(
  'CastingStateHooks',
  ['CastingContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      var a = h(d('CastingContext').CastingStateContext);
      return (a == null ? void 0 : a.receiverIsConnected) || !1;
    }
    function i() {
      var a = s();
      return a == null ? null : a.currentVideoID;
    }
    function b() {
      var a = i();
      return a != null;
    }
    function c() {
      var a = s();
      return a == null ? 0 : a.currentPosition || 0;
    }
    function e() {
      var a = s();
      return a == null ? 0 : a.currentDuration || 0;
    }
    function f() {
      var a = s();
      if (a == null) return !1;
      a = a.currentPlaybackState;
      return a === 'play' || a === 'seeking';
    }
    function j() {
      var a = s();
      if (a == null) return !1;
      a = a.currentPlaybackState;
      return a === 'paused';
    }
    function k() {
      var a = s();
      if (a == null) return !1;
      a = a.currentPlaybackState;
      return a === 'ended';
    }
    function l() {
      var a = h(d('CastingContext').CastingStateContext);
      return a == null || !a.receiverIsConnected
        ? !1
        : a.receiverIsMuted === !0;
    }
    function m() {
      var a = h(d('CastingContext').CastingStateContext);
      return a == null || !a.receiverIsConnected ? 0 : a.receiverVolume || 0;
    }
    function n() {
      var a = h(d('CastingContext').CastingStateContext);
      return a == null || !a.receiverIsConnected
        ? null
        : a.receiverFriendlyName;
    }
    function o() {
      var a = t();
      return a == null ? !1 : !0;
    }
    function p() {
      var a = u();
      return a == null ? !1 : a.currentPlaybackState === 'paused';
    }
    function q() {
      var a = u();
      return a == null ? !1 : a.currentPlaybackState === 'play';
    }
    function r() {
      var a = u();
      return a == null ? null : a.currentAssetID;
    }
    function s() {
      var a = h(d('CastingContext').CastingStateContext),
        b = h(d('CastingContext').CastingExperienceStateContext);
      if (a == null || !a.receiverIsConnected) return null;
      return (b == null ? void 0 : b.type) !== 'video_channel' ? null : b;
    }
    function t() {
      var a = h(d('CastingContext').CastingStateContext),
        b = h(d('CastingContext').CastingExperienceStateContext);
      if (a == null || !a.receiverIsConnected) return null;
      return (b == null ? void 0 : b.type) !== 'photo' ? null : b;
    }
    function u() {
      var a = h(d('CastingContext').CastingStateContext),
        b = h(d('CastingContext').CastingExperienceStateContext);
      if (a == null || !a.receiverIsConnected) return null;
      return (b == null ? void 0 : b.type) !== 'photo_album' ? null : b;
    }
    g.useIsCastingConnected = a;
    g.useCastingVideoID = i;
    g.useIsCastingAnyVideo = b;
    g.useCastingCurrentTime = c;
    g.useCastingDuration = e;
    g.useCastingIsPlaying = f;
    g.useCastingIsPaused = j;
    g.useCastingIsEnded = k;
    g.useCastingIsMuted = l;
    g.useCastingVolume = m;
    g.useCastingReceiverFriendlyName = n;
    g.useIsCastingPhotoExperience = o;
    g.useCastingIsAlbumPaused = p;
    g.useCastingIsAlbumPlaying = q;
    g.useCastingAlbumAssetID = r;
  },
  98,
);
__d(
  'VideoControlsContainerFocusedContext',
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
  'VideoPlayerControlsBottomRowAddOnContext',
  ['react', 'useStable'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    d = d('react');
    var i = d.useContext,
      j = d.useEffect,
      k = d.useState,
      l = h.createContext(null);
    function a(a) {
      a = a.children;
      var b = c('useStable')(function () {
        var a = null,
          b = null,
          c = null;
        return {
          getBottomRowAddOn: function () {
            return b;
          },
          initialize: function (d) {
            c = function (a) {
              (b = a), d(a);
            };
            if (a == null) return;
            c(a);
            a = null;
          },
          setBottomRowAddOn: function (b) {
            if (c == null) {
              a = b;
              return;
            }
            c(b);
          },
        };
      });
      return h.jsx(l.Provider, { value: b, children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b(a) {
      var b = i(l);
      a = k(a);
      var c = a[0],
        d = a[1];
      j(
        function () {
          if (b == null) return;
          b.initialize(d);
        },
        [b],
      );
      return c;
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    function e(a) {
      var b = i(l);
      j(
        function () {
          if (b == null) return;
          b.setBottomRowAddOn(a);
        },
        [a, b],
      );
    }
    g.VideoPlayerControlsBottomRowAddOnContext = l;
    g.VideoPlayerControlsBottomRowAddOnContextProvider = a;
    g.useVideoPlayerControlsBottomRowAddOn = b;
    g.useSetVideoPlayerControlsBottomRowAddOn = e;
  },
  98,
);
__d(
  'VideoPlayerControlsContainerOverlay.react',
  [
    'CometErrorBoundary.react',
    'FocusWithinHandler.react',
    'VideoControlsContainerFocusedContext',
    'VideoPlayerControlsBottomRowAddOnContext',
    'VideoPlayerControlsHiddenContext',
    'VideoPlayerHooks',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useEffect,
      j = 44,
      k = {
        backgroundGradient: {
          backgroundImage: 'x11v4dcs',
          bottom: 'x1ey2m1c',
          height: 'xn3w4p2',
          position: 'x10l6tqk',
          transitionDuration: 'x1d8287x',
          transitionProperty: 'x6o7n8i',
          transitionTimingFunction: 'xl405pv',
          width: 'xh8yej3',
          zIndex: 'x8knxv4',
          $$css: !0,
        },
        default: {
          bottom: 'x1ey2m1c',
          flexDirection: 'x1q0g3np',
          position: 'x10l6tqk',
          transitionDuration: 'x1d8287x',
          transitionProperty: 'x6o7n8i',
          transitionTimingFunction: 'xl405pv',
          width: 'xh8yej3',
          zIndex: 'x11uqc5h',
          $$css: !0,
        },
        firstRow: {
          alignItems: 'x6s0dn4',
          direction: 'xzt5al7',
          display: 'x78zum5',
          flexDirection: 'x1q0g3np',
          $$css: !0,
        },
        hidden: {
          opacity: 'xg01cxk',
          pointerEvents: 'x47corl',
          visibility: 'xlshs6z',
          $$css: !0,
        },
        visible: { opacity: 'x1hc1fzr', $$css: !0 },
      };
    function a(a) {
      var b = a.children,
        e = a.initialBottomRowAddOn;
      e = e === void 0 ? null : e;
      var f = a.isBackgroundVisible,
        g = a.isVisible,
        l = a.xstyle,
        m = d(
          'VideoPlayerControlsBottomRowAddOnContext',
        ).useVideoPlayerControlsBottomRowAddOn(e);
      a = d('VideoPlayerHooks').useVideoPlayerCaptionsReservationActions();
      var n = a.release,
        o = a.reserve;
      i(
        function () {
          if (Boolean(g) || Boolean(f)) {
            var a = o({ location: 'bottom', size: j });
            return function () {
              n(a);
            };
          }
        },
        [g, f, o, n],
      );
      var p = f === !1 || g === !1,
        q = f === !0 || g === !0;
      return h.jsx(c('FocusWithinHandler.react'), {
        children: function (a, d) {
          return h.jsx(c('VideoControlsContainerFocusedContext').Provider, {
            value: d,
            children: h.jsxs('div', {
              className:
                'x1ey2m1c x10l6tqk x1d8287x x6o7n8i xl405pv xh8yej3 x11uqc5h' +
                ((m == null
                  ? ' x1q0g3np x6s0dn4 xzt5al7 x78zum5'
                  : ' x1q0g3np') +
                  ((g === !0
                    ? ' x1hc1fzr'
                    : '' +
                      (g === !1 ? ' xg01cxk' : '' + (m == null ? '' : ''))) +
                    (g === !1 ? ' x47corl xlshs6z' : ''))),
              'data-testid': void 0,
              children: [
                h.jsx('div', {
                  className: c('stylex')(
                    k.backgroundGradient,
                    p && k.hidden,
                    q && k.visible,
                    l,
                  ),
                }),
                h.jsx(c('VideoPlayerControlsHiddenContext').Provider, {
                  value: p,
                  children:
                    m == null
                      ? b
                      : h.jsxs(h.Fragment, {
                          children: [
                            h.jsx('div', {
                              className: 'x6s0dn4 xzt5al7 x78zum5 x1q0g3np',
                              children: b,
                            }),
                            h.jsx(c('CometErrorBoundary.react'), {
                              children: m,
                            }),
                          ],
                        }),
                }),
              ],
            }),
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
  'VideoPlayerControlsGroups.react',
  [
    'VideoControlsContainerFocusedContext',
    'VideoPlayerControlsHiddenContext',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    function a(a) {
      var b = a.children,
        d = a.isVisible;
      d = d === void 0 ? !0 : d;
      var e = a.noPaddingEnd;
      e = e === void 0 ? !1 : e;
      a = a.noPaddingStart;
      a = a === void 0 ? !1 : a;
      var f = i(c('VideoControlsContainerFocusedContext'));
      d = d || f;
      f = i(c('VideoPlayerControlsHiddenContext'));
      return h.jsx('div', {
        className:
          'x6s0dn4 x78zum5 x1q0g3np x2lah0s xozqiw3 xexx8yu x18d9i69' +
          ((d ? ' x1hc1fzr' : ' x1fmh03i x47corl') +
            ((e ? ' x4uap5' : ' x1mpkggp') + (a ? ' xkhd6sd' : ' x1t2a60a'))),
        children: h.jsx(c('VideoPlayerControlsHiddenContext').Provider, {
          value: f || !d,
          children: b,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b(a) {
      var b = a.children;
      a = a.isVisible;
      a = a === void 0 ? !0 : a;
      var d = i(c('VideoControlsContainerFocusedContext'));
      a = a || d;
      d = i(c('VideoPlayerControlsHiddenContext'));
      return h.jsx('div', {
        className:
          'x6s0dn4 x78zum5 x1q0g3np x2lah0s xozqiw3 x1iyjqo2' +
          (a ? ' x1hc1fzr' : ' x1fmh03i x47corl'),
        children: h.jsx(c('VideoPlayerControlsHiddenContext').Provider, {
          value: d || !a,
          children: b,
        }),
      });
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    g.Contracted = a;
    g.Expanded = b;
  },
  98,
);
__d(
  'VideoPlayerPlaybackControlBase.react',
  [
    'fbt',
    'ix',
    'VideoPlayerControlIcon.react',
    'fbicon',
    'react',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    function a(a) {
      var b = a.onPress;
      a = a.playbackIcon;
      var e, f;
      switch (a) {
        case 'pause':
          e = h._('__JHASH__neZzFA-dHLC__JHASH__');
          f = d('fbicon')._(i('497675'), 20);
          break;
        case 'replay':
          e = h._('__JHASH__HFCl7btmLVQ__JHASH__');
          f = d('fbicon')._(i('534219'), 20);
          break;
        case 'play':
          e = h._('__JHASH__Pdft-1wnTrL__JHASH__');
          f = d('fbicon')._(i('484863'), 20);
          break;
        default:
          a;
          throw c('unrecoverableViolation')(
            'The playback icon is unsupported ' + a,
            'comet_video_player',
          );
      }
      return j.jsx(c('VideoPlayerControlIcon.react'), {
        icon: f,
        label: e,
        onPress: b,
        tooltip: e,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerPlaybackControl.react',
  [
    'VideoHomeTypedLoggerLite',
    'VideoPlayerHooks',
    'VideoPlayerPlaybackControlBase.react',
    'react',
    'useFeedClickEventHandler',
    'useVideoPlayerControllerSubscription',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useEffect;
    function a(a) {
      var b = a.isNPC,
        e = b === void 0 ? !1 : b;
      b = a.unmuteOnPlay;
      var f = b === void 0 ? !1 : b;
      i(
        function () {
          e &&
            c('VideoHomeTypedLoggerLite').log({
              event: 'npc_control_playback_button_impression',
            });
        },
        [e],
      );
      a = c('useVideoPlayerControllerSubscription')(function (a, b) {
        var c = a.getCurrentState(),
          d = c.ended,
          e = c.paused,
          f = c.playing,
          g = c.stalling;
        a = a.getPlayheadPosition();
        c = c.duration;
        e = !e && (f || g);
        g = !f && d && a >= c;
        return b != null && b.showPauseButton === e && b.showReplayButton === g
          ? b
          : { showPauseButton: e, showReplayButton: g };
      });
      var g = a.showPauseButton;
      b = a.showReplayButton;
      var j = d('VideoPlayerHooks').useController();
      a = c('useFeedClickEventHandler')(function () {
        e &&
          c('VideoHomeTypedLoggerLite').log({
            click_point: 'npc_control_playback_button',
            event: 'click',
            event_target: 'video',
          }),
          g
            ? j.pause('user_initiated')
            : (f && j.setMuted(!1, 'user_initiated'), j.play('user_initiated'));
      });
      b = g ? 'pause' : b ? 'replay' : 'play';
      return h.jsx(c('VideoPlayerPlaybackControlBase.react'), {
        onPress: a,
        playbackIcon: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerLiveRewindControlContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({
      cachedLiveRewindTimestamp: null,
      onLiveRewindControlEvent: function () {},
    });
    g['default'] = b;
  },
  98,
);
__d(
  'VideoPlayerPlaybackTimerBase.react',
  ['getFormattedTimestamp', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.currentTime;
      a = a.duration;
      return h.jsxs('div', {
        className:
          'x14ctfv x1rg5ohu x1pg5gke xss6m8b x7h9g57 x1t4t16n x8j4wrb x9hgts1 x2b8uid x27saw0 x3ajldb',
        children: [
          h.jsx('span', {
            className: 'x1s688f x15hfatp',
            children: c('getFormattedTimestamp')(b),
          }),
          a != null &&
            h.jsxs(h.Fragment, {
              children: [
                h.jsx('span', { children: ' / ' }),
                h.jsx('span', { children: c('getFormattedTimestamp')(a) }),
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
  'useLiveRewindUtils',
  [
    'VideoPlayerHooks',
    'VideoPlayerLiveRewindControlContext',
    'react',
    'useVideoPlayerControllerSubscription',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = h.useCallback,
      j = h.useContext,
      k = 10,
      l = 10;
    function a() {
      var a = d('VideoPlayerHooks').useController(),
        b = j(c('VideoPlayerLiveRewindControlContext'));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = c != null ? ((c = c.end(c.length() - 1)) != null ? c : 0) : 0;
          var d = Math.min(a.getPlayheadPosition() + k, c);
          d === c ? (a.setIsLiveRewindActive(!1), a.seek(c)) : a.seek(d);
          b.onLiveRewindControlEvent();
        },
        [b, a],
      );
    }
    function b() {
      var a = d('VideoPlayerHooks').useController(),
        b = j(c('VideoPlayerLiveRewindControlContext'));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = (c = c == null ? void 0 : c.start(0)) != null ? c : 0;
          c = Math.max(a.getPlayheadPosition() - l, c);
          a.seek(c);
          a.setIsLiveRewindActive(!0);
          b.onLiveRewindControlEvent();
        },
        [b, a],
      );
    }
    function e() {
      var a = d('VideoPlayerHooks').useController(),
        b = j(c('VideoPlayerLiveRewindControlContext'));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = c != null ? ((c = c.end(c.length() - 1)) != null ? c : 0) : 0;
          a.seek(c);
          a.play('user_initiated');
          a.setIsLiveRewindActive(!1);
          b.onLiveRewindControlEvent();
        },
        [b, a],
      );
    }
    function f() {
      var a = d('VideoPlayerHooks').useController(),
        b = j(c('VideoPlayerLiveRewindControlContext'));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = (c = c == null ? void 0 : c.start(0)) != null ? c : 0;
          a.seek(c);
          a.setIsLiveRewindActive(!0);
          b.onLiveRewindControlEvent();
        },
        [b, a],
      );
    }
    function m() {
      var a = d('VideoPlayerHooks').useController(),
        b = j(c('VideoPlayerLiveRewindControlContext'));
      return i(
        function () {
          a.play('user_initiated'), b.onLiveRewindControlEvent();
        },
        [b, a],
      );
    }
    function n() {
      var a = d('VideoPlayerHooks').useController(),
        b = j(c('VideoPlayerLiveRewindControlContext'));
      return i(
        function () {
          a.pause('user_initiated'),
            a.setIsLiveRewindActive(!0),
            b.onLiveRewindControlEvent();
        },
        [b, a],
      );
    }
    function o() {
      var a = d('VideoPlayerHooks').useController(),
        b = j(c('VideoPlayerLiveRewindControlContext'));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = (c = c == null ? void 0 : c.start(0)) != null ? c : 0;
          a.seek(c);
          a.setIsLiveRewindActive(!0);
          a.play('user_initiated');
          b.onLiveRewindControlEvent();
        },
        [b, a],
      );
    }
    function p() {
      var a = d('VideoPlayerHooks').useController(),
        b = j(c('VideoPlayerLiveRewindControlContext'));
      return i(
        function (c) {
          var d,
            e = a.getCurrentState().seekableRanges;
          d = (d = e == null ? void 0 : e.start(0)) != null ? d : 0;
          e = e != null ? ((e = e.end(e.length() - 1)) != null ? e : 0) : 0;
          d = Math.min(d + c, e);
          a.scrubEnd(d);
          d === e ? a.setIsLiveRewindActive(!1) : a.setIsLiveRewindActive(!0);
          b.onLiveRewindControlEvent();
        },
        [b, a],
      );
    }
    function q() {
      return c('useVideoPlayerControllerSubscription')(function (a) {
        return (a =
          (a = a.getCurrentState().seekableRanges) == null
            ? void 0
            : a.start(0)) != null
          ? a
          : 0;
      });
    }
    g.useLiveRewindForward = a;
    g.useLiveRewindBack = b;
    g.useLiveRewindLive = e;
    g.useLiveRewindStart = f;
    g.useLiveRewindPlay = m;
    g.useLiveRewindPause = n;
    g.useLiveRewindReplay = o;
    g.useLiveRewindScrub = p;
    g.useLiveRewindSeekableStartTime = q;
  },
  98,
);
__d(
  'VideoPlayerPlaybackTimer.react',
  [
    'VideoPlayerHooks',
    'VideoPlayerLiveRewindControlContext',
    'VideoPlayerPlaybackTimerBase.react',
    'gkx',
    'react',
    'useLiveRewindUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = function () {
        return d('VideoPlayerHooks').useCurrentTimeThrottled(200);
      };
    function a() {
      var a = d('VideoPlayerHooks').useIsLive(),
        b = d('VideoPlayerHooks').useDuration(),
        e = j(),
        f = d('useLiveRewindUtils').useLiveRewindSeekableStartTime(),
        g = i(c('VideoPlayerLiveRewindControlContext'));
      g = g.cachedLiveRewindTimestamp;
      var k = d('VideoPlayerHooks').useIsLiveRewindActive();
      if (a) {
        a = e - f;
        k && g != null && c('gkx')('1657274') && (a = g);
        return h.jsx(c('VideoPlayerPlaybackTimerBase.react'), {
          currentTime: a,
          duration: null,
        });
      }
      return h.jsx(c('VideoPlayerPlaybackTimerBase.react'), {
        currentTime: e,
        duration: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerPointerDrag',
  ['react', 'useResizeObserver', 'useStable'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    f = d('react');
    var h = f.useEffect,
      i = f.useRef,
      j = f.useState;
    function a() {
      var a = i(null),
        b = i(null),
        d = c('useResizeObserver')(function (c, d) {
          (a.current = d.getBoundingClientRect()), (b.current = d);
        }),
        e = c('useStable')(function () {
          return function () {
            var c = b.current;
            c ? (a.current = c.getBoundingClientRect()) : (a.current = null);
          };
        });
      return { invalidateRootRect: e, rootRectRef: a, rootSizeRefCallback: d };
    }
    function b(a, b) {
      if (b == null) return null;
      var c = Math.max(0, Math.min(b.width, a.clientX - b.left));
      a = Math.max(0, Math.min(b.height, a.clientY - b.top));
      return {
        ratioX: b.width > 0 ? c / b.width : 0,
        ratioY: b.height > 0 ? a / b.height : 0,
      };
    }
    function k(a, b) {
      a = a.changedTouches;
      if (b == null || !a) return null;
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d.identifier === b)
          return { clientX: d.clientX, clientY: d.clientY };
      }
      return null;
    }
    function l(a, b) {
      var c = a;
      switch (b.type) {
        case 'start':
          c = babelHelpers['extends']({}, a, {
            clientX: b.clientX,
            clientY: b.clientY,
            dragState: 'dragging',
            lastEffect: a.dragState === 'idle' ? 'start' : a.lastEffect,
          });
          break;
        case 'move':
          if (a.dragState !== 'dragging') break;
          c = {
            clientX: b.clientX,
            clientY: b.clientY,
            dragState: 'dragging',
            lastEffect: a.dragState === 'idle' ? 'start' : 'move',
          };
          break;
        case 'end':
          if (a.dragState !== 'dragging') break;
          c = {
            clientX: b.clientX,
            clientY: b.clientY,
            dragState: 'idle',
            lastEffect: a.dragState === 'idle' ? a.lastEffect : 'end',
          };
          break;
        case 'cancel':
          if (a.dragState !== 'dragging') break;
          c = {
            clientX: a.clientX,
            clientY: a.clientY,
            dragState: 'idle',
            lastEffect: a.dragState === 'idle' ? a.lastEffect : 'cancel',
          };
          break;
        default:
          break;
      }
      return c.dragState !== a.dragState ||
        c.lastEffect !== a.lastEffect ||
        c.clientX !== a.clientX ||
        c.clientY !== a.clientY
        ? c
        : a;
    }
    var m = { clientX: 0, clientY: 0, dragState: 'idle', lastEffect: null },
      n = function () {
        return window.navigator.userAgent.indexOf('MSIE') >= 0;
      };
    function o(a, b, c) {
      var d = m,
        e = null,
        f = null,
        g = function (b) {
          (d = l(d, b)), a(d);
        },
        h = function (a) {
          g({ clientX: a.clientX, clientY: a.clientY, type: 'move' });
          a = b.current.onDragMoveSync;
          a == null ? void 0 : a(d);
        },
        i = function (a) {
          e && e();
          g({ clientX: a.clientX, clientY: a.clientY, type: 'end' });
          a = b.current.onDragEndSync;
          a == null ? void 0 : a(d);
        },
        j = function () {
          e && e();
          g({ type: 'cancel' });
          var a = b.current.onDragCancelSync;
          a == null ? void 0 : a(d);
        },
        o = function (a) {
          a = k(a, c.current);
          if (a == null) return;
          g({ clientX: a.clientX, clientY: a.clientY, type: 'move' });
          a = b.current.onDragMoveSync;
          a == null ? void 0 : a(d);
        },
        p = function (a) {
          a = k(a, c.current);
          if (a == null) return;
          f && f();
          g({ clientX: a.clientX, clientY: a.clientY, type: 'end' });
          a = b.current.onDragEndSync;
          a == null ? void 0 : a(d);
        },
        q = p;
      return {
        destroy: function () {
          e && e(), f && f();
        },
        onMouseDown: function (a) {
          n() || a.preventDefault();
          g({ clientX: a.clientX, clientY: a.clientY, type: 'start' });
          a = b.current.onDragStartSync;
          a == null ? void 0 : a(d);
          e ||
            (window.addEventListener('mousemove', h),
            window.addEventListener('mouseup', i),
            window.addEventListener('blur', j),
            window.addEventListener('mouseleave', j),
            (e = function () {
              (e = null),
                window.removeEventListener('mousemove', h),
                window.removeEventListener('mouseup', i),
                window.removeEventListener('blur', j),
                window.removeEventListener('mouseleave', j);
            }));
        },
        onTouchStart: function (a) {
          a.preventDefault();
          var e = a.changedTouches[0];
          e != null && (c.current = e.identifier);
          e = k(a, c.current);
          if (e == null) return;
          g({ clientX: e.clientX, clientY: e.clientY, type: 'start' });
          a = b.current.onDragStartSync;
          a == null ? void 0 : a(d);
          f ||
            (window.addEventListener('touchmove', o),
            window.addEventListener('touchend', p),
            window.addEventListener('touchcancel', q),
            window.addEventListener('blur', j),
            (f = function () {
              (f = null),
                window.removeEventListener('touchmove', o),
                window.removeEventListener('touchend', p),
                window.removeEventListener('touchcancel', q),
                window.removeEventListener('blur', j);
            }));
        },
      };
    }
    function p(a, b) {
      h(
        function () {
          var c = b.current,
            d = c.onDragCancel,
            e = c.onDragEnd,
            f = c.onDragMove;
          c = c.onDragStart;
          switch (a.lastEffect) {
            case 'start':
              c(a);
              return;
            case 'move':
              f(a);
              return;
            case 'end':
              e(a);
              return;
            case 'cancel':
              d(a);
              return;
          }
        },
        [a, b],
      );
    }
    function q(a, b, d) {
      var e = j(m),
        f = e[0],
        g = e[1];
      e = c('useStable')(function () {
        return o(g, a, b);
      });
      var i = e.destroy,
        k = e.onMouseDown;
      e = e.onTouchStart;
      h(
        function () {
          return i;
        },
        [i],
      );
      return {
        dragState: f,
        rootProps: {
          onClick: function (a) {
            a.stopPropagation(), a.preventDefault();
          },
          onMouseDown: k,
          onTouchStart:
            (d == null ? void 0 : d.hasTouchEvents) === !0 ? e : void 0,
        },
      };
    }
    function e(a, b) {
      var c = i(a),
        d = i(null);
      h(
        function () {
          c.current = a;
        },
        [a],
      );
      d = q(c, d, b);
      b = d.dragState;
      d = d.rootProps;
      p(b, c);
      return {
        dragState: b,
        isDragging: b.dragState === 'dragging',
        rootProps: d,
      };
    }
    g.usePointerDragResizeObserver = a;
    g.computePointerOffsetRatio = b;
    g.usePointerDrag = e;
  },
  98,
);
__d(
  'VideoPlayerSliderNub.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.isVisible;
      return h.jsx('div', {
        className:
          'x14hiurz xtucvfd xj0q7ni x1e4yufr x1sp3icg x14yjl9h xudhj91 x18nykt9 xww2gxu x1nqv1ya xdk7pt x1x862rh x1rdy4ex x10l6tqk x3m8u43 x1xc55vz x1vjfegm' +
          (a ? ' x1lliihq' : ' x1s85apg'),
        'data-testid': void 0,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerScrubberBase.react',
  [
    'fbt',
    'CometComponentWithKeyCommands.react',
    'CometKeys',
    'CometVisualCompletionAttributes',
    'VideoPlayerPointerDrag',
    'VideoPlayerSliderNub.react',
    'VideoPlayerUserInteractionCounter',
    'react',
    'stylex',
    'usePrevious',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useState,
      n = {
        liveRewindTimePlayed: { backgroundColor: 'xh1tjdi', $$css: !0 },
        liveTimePlayed: { backgroundColor: 'x1ciooss', $$css: !0 },
        root: {
          cursor: 'x1ypdohk',
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x4uap5',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xkhd6sd',
          position: 'x1n2onr6',
          userSelect: 'x87ps6o',
          width: 'xh8yej3',
          $$css: !0,
        },
        timelineBackground: {
          backgroundColor: 'x1rwy58d',
          borderTopStartRadius: 'xm3z3ea',
          borderTopEndRadius: 'x1x8b98j',
          borderBottomEndRadius: 'x131883w',
          borderBottomStartRadius: 'x16mih1h',
          boxShadow: 'xpdb0fs',
          height: 'xuoj239',
          textShadow: 'xd9u3wd',
          userSelect: 'x87ps6o',
          $$css: !0,
        },
        timelineBuffered: {
          height: 'xuoj239',
          position: 'x10l6tqk',
          $$css: !0,
        },
        timelineBufferedBackground: { backgroundColor: 'x17j41np', $$css: !0 },
        timelinePlayed: {
          backgroundColor: 'x1evw4sf',
          borderTopStartRadius: 'xm3z3ea',
          borderTopEndRadius: 'x1x8b98j',
          borderBottomEndRadius: 'x131883w',
          borderBottomStartRadius: 'x16mih1h',
          height: 'xuoj239',
          position: 'x10l6tqk',
          userSelect: 'x87ps6o',
          $$css: !0,
        },
        tooltipContainer: {
          bottom: 'xfqi8uc',
          position: 'x10l6tqk',
          $$css: !0,
        },
      };
    function o(a, b) {
      return Math.min(a > 0 ? b / a : 0, 1);
    }
    function a(a) {
      var b = a.bufferEnd,
        e = a.currentTime,
        f = a.disableKeyCommands,
        g = a.duration,
        p = a.isLive,
        q = a.isLiveRewindActive,
        r = a.keyLeftDescription,
        s = a.keyRightDescription,
        t = a.onScrubCancel,
        u = a.onScrubEnd,
        v = a.onScrubStart,
        w = a.onUserInteraction,
        x = a.playFromBeginningImpl,
        y = a.renderTooltip,
        z = a.skipBackwardImpl,
        A = a.skipForwardImpl,
        B = a.skipToEndImpl,
        C = a.supportsTouch,
        D = a.timelineBackgroundXStyle,
        E = a.timelineBufferedXStyle;
      a = a.timelinePlayedXStyle;
      var F = d('VideoPlayerPointerDrag').usePointerDragResizeObserver(),
        G = F.invalidateRootRect,
        H = F.rootRectRef;
      F = F.rootSizeRefCallback;
      var I = c('usePrevious')(e),
        J = m(!1),
        K = J[0],
        L = J[1];
      J = m(0);
      var M = J[0],
        N = J[1];
      J = m(!1);
      var O = J[0],
        P = J[1];
      J = m(0);
      var Q = J[0],
        R = J[1];
      J = m(null);
      var S = J[0],
        T = J[1];
      k(
        function () {
          e !== I && P(!1);
        },
        [e, I],
      );
      J = d('VideoPlayerPointerDrag').usePointerDrag(
        {
          onDragCancel: function (a) {
            t();
          },
          onDragEnd: function (a) {
            a = d('VideoPlayerPointerDrag').computePointerOffsetRatio(
              a,
              H.current,
            );
            if (!a) {
              t();
              return;
            }
            N(a.ratioX);
            a = a.ratioX * g;
            u(a);
          },
          onDragEndSync: function () {
            P(!0);
          },
          onDragMove: function (a) {
            a = d('VideoPlayerPointerDrag').computePointerOffsetRatio(
              a,
              H.current,
            );
            if (!a) return;
            N(a.ratioX);
          },
          onDragStart: function (a) {
            G();
            a = d('VideoPlayerPointerDrag').computePointerOffsetRatio(
              a,
              H.current,
            );
            if (!a) return;
            N(a.ratioX);
            v();
          },
        },
        { hasTouchEvents: C === !0 },
      );
      C = J.isDragging;
      J = J.rootProps;
      var U = j(function () {
          L(!0);
        }, []),
        V = j(function () {
          L(!1);
        }, []),
        W = j(
          function (a) {
            G();
            if (H.current != null) {
              var b = H.current.left,
                c = H.current.width,
                d = Math.max(0, Math.min(c, a.clientX - b));
              d = c > 0 ? d / c : 0;
              c = Number.isFinite(g) && g > 0 ? g * d : null;
              R(a.clientX - b);
              T(c);
            }
          },
          [g, G, H],
        ),
        X = K || C;
      d('VideoPlayerUserInteractionCounter').useVideoPlayerUserInteraction(
        'video_scrubber',
        X,
        w,
      );
      X = K || C || O;
      w = C || O ? M : p && !q ? 1 : o(g, e);
      C = o(g, b);
      O = l(
        function () {
          return f === !0
            ? []
            : [
                {
                  command: { key: c('CometKeys').RIGHT },
                  description: s,
                  handler: A,
                },
                {
                  command: { key: c('CometKeys').LEFT },
                  description: r,
                  handler: z,
                },
                {
                  command: { key: c('CometKeys').HOME },
                  description: h._('__JHASH__3cUloDtyzSK__JHASH__'),
                  handler: x,
                },
                {
                  command: { key: c('CometKeys').END },
                  description: h._('__JHASH__jTksR1FMT97__JHASH__'),
                  handler: B,
                },
              ];
        },
        [f, s, A, r, z, x, B],
      );
      return i.jsx(c('CometComponentWithKeyCommands.react'), {
        commandConfigs: O,
        children: i.jsxs(
          'div',
          babelHelpers['extends']({}, J, {
            'aria-label': h._('__JHASH__69czi8qDKMx__JHASH__'),
            'aria-orientation': 'horizontal',
            'aria-valuemax': g,
            'aria-valuemin': '0',
            'aria-valuenow': e,
            className:
              'x1ypdohk x1y1aw1k x4uap5 xwib8y2 xkhd6sd x1n2onr6 x87ps6o xh8yej3',
            'data-testid': void 0,
            onMouseEnter: U,
            onMouseLeave: V,
            onMouseMove: W,
            ref: F,
            role: 'slider',
            tabIndex: '0',
            children: [
              i.jsxs('div', {
                className: c('stylex')(n.timelineBackground, D),
                children: [
                  i.jsx(
                    'div',
                    babelHelpers['extends'](
                      {
                        className: c('stylex')(
                          n.timelineBuffered,
                          !p && n.timelineBufferedBackground,
                          E,
                        ),
                      },
                      c('CometVisualCompletionAttributes').IGNORE,
                      { style: { width: (100 * C).toFixed(5) + '%' } },
                    ),
                  ),
                  i.jsx(
                    'div',
                    babelHelpers['extends'](
                      {
                        className: c('stylex')(
                          n.timelinePlayed,
                          p && !q && n.liveTimePlayed,
                          p && q && n.liveRewindTimePlayed,
                          a,
                        ),
                      },
                      c('CometVisualCompletionAttributes').IGNORE,
                      {
                        style: { width: (100 * w).toFixed(5) + '%' },
                        children: i.jsx(c('VideoPlayerSliderNub.react'), {
                          isVisible: X,
                        }),
                      },
                    ),
                  ),
                ],
              }),
              y != null &&
                S != null &&
                K &&
                i.jsx('div', {
                  className: 'xfqi8uc x10l6tqk',
                  style: { left: Q },
                  children: y(S),
                }),
            ],
          }),
        ),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerScrubber.react',
  [
    'fbt',
    'VideoPlayerHooks',
    'VideoPlayerScrubberBase.react',
    'react',
    'useLiveRewindUtils',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useCallback,
      k = function () {
        return d('VideoPlayerHooks').useCurrentTimeThrottled(200);
      };
    function a(a) {
      var b = a.onUserInteraction;
      a = a.renderTooltip;
      var e = k(),
        f = d('VideoPlayerHooks').useDuration(),
        g = d('VideoPlayerHooks').useController(),
        l = d('VideoPlayerHooks').useBufferEnd(),
        m = d('VideoPlayerHooks').useIsLive(),
        n = d('VideoPlayerHooks').useIsLiveRewindActive(),
        o = d('useLiveRewindUtils').useLiveRewindScrub(),
        p = d('useLiveRewindUtils').useLiveRewindForward(),
        q = d('useLiveRewindUtils').useLiveRewindBack(),
        r = d('useLiveRewindUtils').useLiveRewindStart(),
        s = d('useLiveRewindUtils').useLiveRewindLive(),
        t = d('useLiveRewindUtils').useLiveRewindSeekableStartTime();
      m && ((f -= t), (e -= t));
      t = j(
        function () {
          if (m) p();
          else {
            var a = g.getPlayheadPosition() + 5;
            a >= f ? g.seek(f - 0.01) : g.seek(a);
          }
        },
        [g, m, p, f],
      );
      var u = m
          ? h._('__JHASH__Fazg7jyI-AJ__JHASH__')
          : h._('__JHASH__Hz44qTuOc36__JHASH__'),
        v = j(
          function () {
            if (m) q();
            else {
              var a = g.getPlayheadPosition() - 5;
              a < 0 ? g.seek(0) : g.seek(a);
            }
          },
          [g, m, q],
        ),
        w = m
          ? h._('__JHASH__fXj-dMG-OtJ__JHASH__')
          : h._('__JHASH__KzLU7zLc4h8__JHASH__'),
        x = j(
          function () {
            m ? r() : g.seek(0);
          },
          [g, m, r],
        ),
        y = j(
          function () {
            m ? s() : g.seek(f - 0.01);
          },
          [g, m, s, f],
        ),
        z = j(
          function () {
            g.scrubEnd(null);
          },
          [g],
        ),
        A = j(
          function () {
            g.scrubBegin();
          },
          [g],
        ),
        B = j(
          function (a) {
            !m ? g.scrubEnd(a) : o(a);
          },
          [g, m, o],
        );
      return i.jsx(c('VideoPlayerScrubberBase.react'), {
        bufferEnd: l,
        currentTime: e,
        duration: f,
        isLive: m,
        isLiveRewindActive: n,
        keyLeftDescription: w,
        keyRightDescription: u,
        onScrubCancel: z,
        onScrubEnd: B,
        onScrubStart: A,
        onUserInteraction: b,
        playFromBeginningImpl: x,
        renderTooltip: a,
        skipBackwardImpl: v,
        skipForwardImpl: t,
        skipToEndImpl: y,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerTimeIndicator.react',
  ['TetraText.react', 'formatDurationSeconds', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.shouldCenterSelf;
      a = a.timestampSec;
      var d = b === !0 ? 'var(--always-black)' : 'var(--always-dark-overlay)';
      d = h.jsx('div', {
        className:
          'x18l40ae x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1wa3icf x123j3cw x1mpkggp xs9asl8 x1t2a60a x10l6tqk xuxw1ft',
        style: { backgroundColor: d },
        children: h.jsx(c('TetraText.react'), {
          color: 'primaryOnMedia',
          type: 'body4',
          children: c('formatDurationSeconds')(Math.round(a)),
        }),
      });
      return b === !0
        ? h.jsx('div', { className: 'x78zum5 xl56j7k x1n2onr6', children: d })
        : d;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerScrubberPreview.react',
  [
    'CometRelay',
    'VideoPlayerHooks',
    'VideoPlayerScrubberPreview_video.graphql',
    'VideoPlayerTimeIndicator.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = 0.1,
      k = 60,
      l = 120;
    function m(a, b, c, d, e, f) {
      c = c * b;
      b = Math.floor((a % c) / b);
      var g = Math.floor(b / d);
      b = b % d;
      d = b * e;
      b = g * f;
      e = Math.floor(a / c);
      return { spriteIndex: e, spriteX: d, spriteY: b };
    }
    function a(a) {
      var e = a.timestampSec;
      a = a.video;
      var f = d('VideoPlayerHooks').useDimensions();
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('VideoPlayerScrubberPreview_video.graphql')),
        a,
      );
      a = a == null ? void 0 : a.scrubber_preview_thumbnail_information;
      var g = a == null ? void 0 : a.sprite_uris,
        n = a == null ? void 0 : a.thumbnail_width,
        o = a == null ? void 0 : a.thumbnail_height,
        p = a == null ? void 0 : a.has_preview_thumbnails,
        q = a == null ? void 0 : a.num_images_per_row,
        r = a == null ? void 0 : a.max_number_of_images_per_sprite;
      a = a == null ? void 0 : a.time_interval_between_image;
      if (
        g == null ||
        n == null ||
        o == null ||
        p == null ||
        q == null ||
        r == null ||
        a == null ||
        !p
      )
        return i.jsx(c('VideoPlayerTimeIndicator.react'), {
          shouldCenterSelf: !0,
          timestampSec: e,
        });
      p = m(e, a, r, q, n, o);
      a = p.spriteIndex;
      r = p.spriteX;
      q = p.spriteY;
      p = n / o;
      n = f == null ? k : Math.max(k, Math.min(l, f.height * j));
      f = n * p;
      p = o / n;
      o = {
        backgroundImage: 'url(' + g[a] + ')',
        backgroundPosition: '-' + r / p + 'px -' + q / p + 'px',
        backgroundSize: '1000% 1000%',
        borderRadius: 4,
        height: n,
        width: f,
      };
      g = {
        backgroundColor: 'var(--fds-black-alpha-60)',
        borderRadius: 4,
        height: n,
        left: -f / 2,
        padding: 1,
        width: f,
      };
      return i.jsxs('div', {
        className: 'x78zum5 xl56j7k x1n2onr6',
        style: g,
        children: [
          i.jsx('div', { style: o }),
          i.jsx(c('VideoPlayerTimeIndicator.react'), { timestampSec: e }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerVolumeControlBase.react',
  [
    'fbt',
    'ix',
    'FocusWithinHandler.react',
    'VideoPlayerControlIcon.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useState,
      l = 0.33,
      m = 0.66;
    function a(a) {
      var b = a.audioAvailabilityUI,
        e = a.isMuted,
        f = a.onMouseEnter,
        g = a.onMouseLeave,
        n = a.onSetMuted,
        o = a.onUserInteraction,
        p = a.renderVolumeSlider;
      a = a.volume;
      var q = !e && a > 0,
        r;
      b != null && b.shouldShowNullIcon
        ? (r = d('fbicon')._(i('944792'), 20))
        : q
        ? a <= l
          ? (r = d('fbicon')._(i('1104387'), 20))
          : a <= m
          ? (r = d('fbicon')._(i('1104390'), 20))
          : (r = d('fbicon')._(i('564390'), 20))
        : (r = d('fbicon')._(i('564396'), 20));
      q = k(!1);
      var s = q[0],
        t = q[1],
        u = e
          ? h._('__JHASH__2eve7xHkp9w__JHASH__')
          : h._('__JHASH__5xFv4FPvBT3__JHASH__');
      return j.jsx(c('FocusWithinHandler.react'), {
        children: function (a, d) {
          return j.jsxs('div', {
            className:
              'x1ypdohk x1rg5ohu xhsvlbd xyamay9 xsyo7zv x10b6aqq x16hj40l x1n2onr6',
            onMouseEnter: f,
            onMouseLeave: g,
            children: [
              b != null && b.shouldDisableVolumeControl
                ? null
                : j.jsx('div', {
                    className:
                      'xk7dvq3 x9f619 x1yrsyyn xsyo7zv x10b6aqq x16hj40l x10l6tqk x17qophe xh8yej3',
                    children: p({ focusVisible: d, onVisibilityChange: t }),
                  }),
              j.jsx(c('VideoPlayerControlIcon.react'), {
                icon: r,
                label: u,
                onPress: function () {
                  b && b.onVolumeControlPress(),
                    (b != null && b.shouldDisableVolumeControl) ||
                      n(!e, 'user_initiated'),
                    o && o({ name: 'video_mute_button', type: 'happened' });
                },
                tooltip: b != null ? b.tooltipContent : null,
                tooltipAlign: 'end',
                tooltipImpl: b != null ? b.tooltipImpl : null,
                tooltipOffsetY: s ? -80 : 0,
              }),
            ],
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
  'VideoPlayerVolumeSliderBase.react',
  [
    'fbt',
    'CometComponentWithKeyCommands.react',
    'CometKeys',
    'VideoPlayerPointerDrag',
    'VideoPlayerSliderNub.react',
    'VideoPlayerUserInteractionCounter',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useEffect,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b = a.isHovering,
        e = a.isMuted,
        f = a.onChangeVolumeDown,
        g = a.onChangeVolumeUp,
        n = a.onSetMuted,
        o = a.onSetVolume,
        p = a.onUserInteraction,
        q = a.onVisibilityChange,
        r = a.volume;
      a = d('VideoPlayerPointerDrag').usePointerDragResizeObserver();
      var s = a.invalidateRootRect,
        t = a.rootRectRef;
      a = a.rootSizeRefCallback;
      var u = l(r),
        v = l(e),
        w = e ? 0 : r,
        x = m(w),
        y = x[0],
        z = x[1],
        A = function (a) {
          a = d('VideoPlayerPointerDrag').computePointerOffsetRatio(
            a,
            t.current,
          );
          if (!a) return;
          a = Math.max(0, Math.min(1, 1 - a.ratioY));
          z(a);
          o(a);
          e && n(!1, 'user_initiated');
        };
      x = d('VideoPlayerPointerDrag').usePointerDrag({
        onDragCancel: function (a) {
          z(u.current), o(u.current), n(v.current, 'user_initiated');
        },
        onDragEnd: function (a) {
          A(a);
        },
        onDragMove: function (a) {
          A(a);
        },
        onDragStart: function (a) {
          s(), (u.current = r), (v.current = e), z(w), A(a);
        },
      });
      var B = x.isDragging;
      x = x.rootProps;
      y = B ? y : w;
      var C = b || B,
        D = l(C);
      j(
        function () {
          D.current !== C && q && q(C), (D.current = C);
        },
        [q, C],
      );
      b = C;
      d('VideoPlayerUserInteractionCounter').useVideoPlayerUserInteraction(
        'video_volume_slider',
        b,
        p,
      );
      B = k(
        function () {
          return [
            {
              command: { key: c('CometKeys').UP },
              description: h._('__JHASH__2--dERDMJls__JHASH__'),
              handler: function () {
                g();
              },
            },
            {
              command: { key: c('CometKeys').DOWN },
              description: h._('__JHASH__rnGEAKbNBgc__JHASH__'),
              handler: function () {
                f();
              },
            },
          ];
        },
        [g, f],
      );
      return i.jsx(c('CometComponentWithKeyCommands.react'), {
        commandConfigs: B,
        children: i.jsx(
          'div',
          babelHelpers['extends']({}, x, {
            'aria-label': h._('__JHASH__qjrL7gM7Ew1__JHASH__'),
            'aria-orientation': 'vertical',
            'aria-valuemax': '1',
            'aria-valuemin': '0',
            'aria-valuenow': r,
            className:
              'x1ypdohk xng8ra x1n2onr6 x1d8287x x19991ni xl405pv x1td3qas x1ja2u2z' +
              (C ? ' x1hc1fzr x67bb7w' : ' xg01cxk x47corl'),
            ref: a,
            role: 'slider',
            tabIndex: '0',
            children: i.jsx('div', {
              className:
                'x18fn2jl x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ey2m1c xng8ra x10l6tqk xoyjkpr x1xc55vz',
              children: i.jsx('div', {
                className:
                  'x1spa7qu x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ey2m1c x10l6tqk xh8yej3',
                style: { height: y * 100 + '%' },
                children: i.jsx('div', {
                  className: 'x1c7jfne x1f4buv5 x1n2onr6',
                  children: i.jsx(c('VideoPlayerSliderNub.react'), {
                    isVisible: C,
                  }),
                }),
              }),
            }),
          }),
        ),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerVolumeSlider.react',
  ['VideoPlayerHooks', 'VideoPlayerVolumeSliderBase.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useEffect;
    function a(a) {
      var b = a.isHovering,
        e = a.onUserInteraction;
      a = a.onVisibilityChange;
      var f = d('VideoPlayerHooks').useController(),
        g = d('VideoPlayerHooks').useMuted(),
        k = d('VideoPlayerHooks').useVolume(),
        l = d('VideoPlayerHooks').useSetVolume();
      j(
        function () {
          f.setVolume(k);
        },
        [f, k],
      );
      var m = i(
          function (a) {
            f.setVolume(a), l(a);
          },
          [f, l],
        ),
        n = i(
          function (a, b) {
            f.setMuted(a, b);
          },
          [f],
        ),
        o = i(
          function (a) {
            var b = f.getCurrentState();
            a = Math.max(0, Math.min(1, b.volume + a));
            l(a);
            f.setVolume(a);
            a === 0
              ? f.setMuted(!0, 'user_initiated')
              : b.muted && f.setMuted(!1, 'user_initiated');
          },
          [f, l],
        ),
        p = i(
          function () {
            o(0.05);
          },
          [o],
        ),
        q = i(
          function () {
            o(-0.05);
          },
          [o],
        );
      return h.jsx(c('VideoPlayerVolumeSliderBase.react'), {
        isHovering: b,
        isMuted: g,
        onChangeVolumeDown: q,
        onChangeVolumeUp: p,
        onSetMuted: n,
        onSetVolume: m,
        onUserInteraction: e,
        onVisibilityChange: a,
        volume: k,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerVolumeControl.react',
  [
    'VideoPlayerHooks',
    'VideoPlayerVolumeControlBase.react',
    'VideoPlayerVolumeSlider.react',
    'cr:1826284',
    'emptyFunction',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useState,
      k = (e = b('cr:1826284')) != null ? e : c('emptyFunction');
    function a(a) {
      var b = a.onUserInteraction;
      a = j(!1);
      var e = a[0],
        f = a[1],
        g = d('VideoPlayerHooks').useController();
      a = d('VideoPlayerHooks').useMuted();
      var l = d('VideoPlayerHooks').useVolume(),
        m = function () {
          f(!0);
        },
        n = function () {
          f(!1);
        },
        o = i(
          function (a, b) {
            g.setMuted(a, b);
          },
          [g],
        ),
        p = !a && l > 0;
      p = k({ canPlayerProduceSound: p, isHovering: e }) || null;
      return h.jsx(c('VideoPlayerVolumeControlBase.react'), {
        audioAvailabilityUI: p,
        isMuted: a,
        onMouseEnter: m,
        onMouseLeave: n,
        onSetMuted: o,
        onUserInteraction: b,
        renderVolumeSlider: function (a) {
          var d = a.focusVisible;
          a = a.onVisibilityChange;
          return h.jsx(c('VideoPlayerVolumeSlider.react'), {
            isHovering: e || d,
            onUserInteraction: b,
            onVisibilityChange: a,
          });
        },
        volume: l,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerVolumeControlAudioAvailabilityUI',
  [
    'fbt',
    'CometTooltipImpl.react',
    'VideoPlayerControlsHiddenContext',
    'clearTimeout',
    'emptyFunction',
    'react',
    'setTimeout',
    'useAudioAvailabilityAtPlayhead',
    'usePrevious',
    'useStable',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState,
      n = 3e3;
    function a(a) {
      var b = a.canPlayerProduceSound,
        d = a.isHovering;
      a = c('useAudioAvailabilityAtPlayhead')();
      var e = a.isSilentAtPlayhead;
      a = a.volumeControlState;
      var f = null;
      switch (a) {
        case 'VOLUME_SILENT':
          f = h._('__JHASH__OCDN7D7X_lH__JHASH__');
          break;
        case 'VOLUME_COPYRIGHT_FULL':
          f = h._('__JHASH__OuqKl-7-Xbl__JHASH__');
          break;
        case 'VOLUME_COPYRIGHT_PARTIAL_SILENCED':
          f = h._('__JHASH__SxiQArhdkrI__JHASH__');
          break;
        case 'VOLUME_COPYRIGHT_PARTIAL_NOT_SILENCED':
          break;
        case 'VOLUME_DEFAULT':
          break;
        default:
          a;
      }
      var g = c('usePrevious')(e),
        o = m(!1),
        p = o[0],
        q = o[1],
        r = l(c('emptyFunction')),
        s = l(!1);
      o = m(!1);
      var t = o[0],
        u = o[1],
        v = c('useStable')(function () {
          return function (a) {
            (s.current = a), u(a), r.current(a), a || q(!1);
          };
        }),
        w = j(c('VideoPlayerControlsHiddenContext'));
      k(
        function () {
          w
            ? v(!1)
            : f == null
            ? v(!1)
            : d || p
            ? v(!0)
            : e !== g && e && b && v(!0);
        },
        [f, b, w, d, p, e, g, v],
      );
      k(
        function () {
          if (t) {
            var a = c('setTimeout')(function () {
              v(!1);
            }, n);
            return function () {
              c('clearTimeout')(a);
            };
          }
        },
        [t, v],
      );
      o = c('useStable')(function () {
        return function () {
          q(function (a) {
            return !a;
          });
        };
      });
      var x = c('useStable')(function () {
          return function (a) {
            var b = m(!1),
              d = b[0],
              e = b[1];
            k(
              function () {
                r.current = e;
                return function () {
                  r.current = c('emptyFunction');
                };
              },
              [e],
            );
            k(
              function () {
                a.isVisible || v(!1);
              },
              [a.isVisible],
            );
            return i.jsx(
              c('CometTooltipImpl.react'),
              babelHelpers['extends']({}, a, { isVisible: d }),
            );
          };
        }),
        y = a === 'VOLUME_COPYRIGHT_FULL' || a === 'VOLUME_SILENT',
        z = b ? e : y;
      return f == null
        ? null
        : {
            onVolumeControlPress: o,
            shouldDisableVolumeControl: y,
            shouldShowNullIcon: z,
            tooltipContent: f,
            tooltipImpl: x,
            volumeControlState: a,
          };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useSelectedLatencySetting',
  ['useRelayClientStateWithLocalStorage'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h =
      '_video_LiveVideoLatencyMenuContextProvider_selected_latency_setting';
    function i(a) {
      if (a == null) return null;
      switch (a) {
        case 'low':
        case 'normal':
          return a;
        default:
          return null;
      }
    }
    function a(a, b) {
      b = d(
        'useRelayClientStateWithLocalStorage',
      ).useRelayClientStateWithLocalStorage(
        a,
        h,
        'selected_latency_setting',
        (a = i(b)) != null ? a : 'normal',
      );
      a = b[0];
      b = b[1];
      return [a, b];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometVideoPictureInPictureManagerContext',
  ['gkx', 'qex', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    f = d('react').createContext;
    d = f({
      openPipPlayer: function () {},
      setController: function () {},
      setPipPortableVideoID: function () {},
    });
    f = f({
      hasNextChainedVideo: !1,
      isPipEnabled: !1,
      setHasNextChainedVideo: function () {},
      setSkippedFromPipPlayer: function () {},
      skippedFromPipPlayer: !1,
    });
    function a() {
      return c('gkx')('3610');
    }
    function b() {
      return !1;
    }
    function e() {
      return !!c('qex')._('586');
    }
    g.CometVideoPictureInPictureManagerAPIContext = d;
    g.CometVideoPictureInPictureManagerContext = f;
    g.isInPictureInPictureExp = a;
    g.isInPictureInPictureExpControlGroup = b;
    g.isSkipAndChainingDisabledInPictureInPicture = e;
  },
  98,
);
__d(
  'MediaPlaybackCompoundEventStateMachineLogger',
  ['emptyFunction', 'gkx', 'qex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 0.5;
    b = c('emptyFunction');
    d = c('emptyFunction');
    e = c('emptyFunction');
    function i() {
      return {
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        hasLoggedStartedPlaying: !1,
        hasPendingRequestedPlaying: !1,
        isLoggingScrubbingSequence: !1,
        lastLoggedCaptionState: null,
        lastLoggedFullscreenState: !1,
        lastLoggedSoundOnState: null,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
      };
    }
    function a(a) {
      var b = {},
        d = a.initialLoggingMetaData;
      d;
      var e = [],
        f = i();
      function g(a) {
        var b,
          c = a.eventType,
          g = a.snaplOverrides,
          h = a.state;
        a = a.tags;
        var i = null,
          j = null,
          k =
            (a == null ? void 0 : a.fullscreen) != null
              ? a == null
                ? void 0
                : a.fullscreen
              : f.lastLoggedFullscreenState,
          l =
            (a == null ? void 0 : a.captions_displayed) != null
              ? a == null
                ? void 0
                : a.captions_displayed
              : f.lastLoggedCaptionState,
          m =
            (a == null ? void 0 : a.player_sound_on) != null
              ? a == null
                ? void 0
                : a.player_sound_on
              : f.lastLoggedSoundOnState;
        b = (b = d.coreVideoPlayerMetaData.videoFBID) != null ? b : '-1';
        var n =
          d.coreVideoPlayerMetaData.adClientToken == null ? 'organic' : 'paid';
        b = {
          current_watching_module: '',
          media_id: b,
          player_origin: d.coreVideoPlayerMetaData.playerOriginOverride,
          player_suborigin: d.coreVideoPlayerMetaData.subOrigin,
          tracking_type: n,
        };
        n = '';
        (g == null ? void 0 : g.video_time_position) != null
          ? (n = Math.round(g.video_time_position * 1e3).toString())
          : h.uncontrolledState.videoElementPlayheadPosition != null &&
            (n = Math.round(
              h.uncontrolledState.videoElementPlayheadPosition * 1e3,
            ).toString());
        g = {
          client_time_ms: Date.now().toString(),
          event_name: c,
          media_time_ms: n,
          tag_metadata: {
            captions_displayed: a == null ? void 0 : a.captions_displayed,
            fullscreen: a == null ? void 0 : a.fullscreen,
            player_sound_on: a == null ? void 0 : a.player_sound_on,
          },
        };
        h = {
          client_high_res_packaging_time_ms: i,
          event: g,
          operational_metadata: j,
          required_metadata: b,
        };
        e.push(h);
        f.lastLoggedSoundOnState = m;
        f.lastLoggedFullscreenState = k;
        f.lastLoggedCaptionState = l;
      }
      function j(a) {
        d;
        if (a.type === 'notify_logging_metadata_change') {
          a = a.payload.loggingMetaData;
          d = a;
        }
      }
      function k(a, c, d) {
        if (
          a.controlledState.playbackState !== c.controlledState.playbackState &&
          c.controlledState.playbackState === 'ended' &&
          f.canLogPausedOrFinishedPlaying
        ) {
          g({ eventType: 'completed', state: c });
          f.canLogPausedOrFinishedPlaying = !1;
          return b;
        } else return b;
      }
      function l(a, c) {
        g({ eventType: 'requested_playing', snaplOverrides: c, state: a });
        f.hasPendingRequestedPlaying = !0;
        f.canLogPausedOrFinishedPlaying = !0;
        return b;
      }
      function m(a) {
        if (!f.canLogPausedOrFinishedPlaying) return b;
        else if (f.hasPendingRequestedPlaying) {
          n(a);
          f.canLogPausedOrFinishedPlaying = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        } else {
          g({ eventType: 'paused', state: a });
          f.canLogPausedOrFinishedPlaying = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        }
      }
      function n(a) {
        g({ eventType: 'cancelled', state: a });
        return b;
      }
      function o(a, c, d) {
        if (
          d.type === 'dom_event_play_promise_rejected' &&
          f.hasPendingRequestedPlaying
        ) {
          a = d.payload.playPromiseRejectionReason;
          if (a != null && a.name === 'NotAllowedError') {
            n(c);
            return b;
          } else return b;
        } else return b;
      }
      function p(a, c, d) {
        if (
          (d.type === 'controller_play_requested' ||
            (d.type === 'dom_event_play' && !f.shouldIgnoreDomPlay)) &&
          a.controlledState.playbackState !== c.controlledState.playbackState
        ) {
          l(c);
          return b;
        } else return b;
      }
      function q(a, c, d) {
        var e = c.controlledState.playbackState,
          g = a.controlledState.playbackState;
        if (
          d.type === 'controller_scrub_begin_requested' &&
          !a.controlledState.scrubbing &&
          e !== 'paused' &&
          e !== 'ended'
        ) {
          m(c);
          f.isLoggingScrubbingSequence = !0;
          return b;
        } else if (
          !a.controlledState.seeking &&
          c.controlledState.seeking &&
          !f.isLoggingScrubbingSequence &&
          e !== 'paused' &&
          e !== 'ended' &&
          !f.hasPendingRequestedPlaying
        ) {
          m(c);
          f.shouldLogRequestedPlayingForScrub = !0;
          return b;
        } else if (
          d.type === 'controller_scrub_end_requested' &&
          a.controlledState.scrubbing &&
          e !== 'paused' &&
          e !== 'ended'
        ) {
          l(c, { video_time_position: d.payload.seekTargetPosition });
          return b;
        } else if (a.controlledState.seeking && !c.controlledState.seeking) {
          d = c.uncontrolledState.videoElementPlayheadPosition;
          a = a.controlledState.implementationSeekSourcePosition;
          a != null &&
            d != null &&
            Math.abs(a - d) > h &&
            (f.shouldLogRequestedPlayingForScrub &&
              e !== 'paused' &&
              e !== 'ended' &&
              l(c),
            (f.isLoggingScrubbingSequence = !1),
            (f.shouldLogRequestedPlayingForScrub = !1),
            g !== 'paused' && g !== 'ended' && (f.canLogPlayingEvent = !0));
          return b;
        } else return b;
      }
      function r(a, c, d) {
        if (
          a.controlledState.playbackState === 'stalling' &&
          c.controlledState.playbackState === 'playing' &&
          f.canLogPlayingEvent
        ) {
          g({
            eventType: f.hasLoggedStartedPlaying
              ? 'unpaused'
              : 'started_playing',
            state: c,
          });
          f.hasLoggedStartedPlaying = !0;
          f.canLogPlayingEvent = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        } else return b;
      }
      function s(a, c, d) {
        if (
          (d.type === 'controller_pause_requested' ||
            (d.type === 'dom_event_pause' && !f.shouldIgnoreDomPause)) &&
          a.controlledState.playbackState !== c.controlledState.playbackState
        ) {
          m(c);
          return b;
        } else return b;
      }
      function t(a, d, e) {
        a = d.controlledState.playbackState;
        if (a !== 'paused' && a !== 'ended') {
          c('gkx')('1469813') &&
          e.type === 'implementation_video_node_unmounted'
            ? m(d)
            : (e.type === 'implementation_unmounted' ||
                e.type === 'implementation_engine_destroy_requested') &&
              m(d);
          return b;
        } else return b;
      }
      function u(a, c, d) {
        if (d.type !== 'notify_fullscreen_changed') return b;
        a = f.lastLoggedFullscreenState;
        d = c.uncontrolledState.isFullscreen;
        if (a !== !0 && d === !0) {
          x(c, !0);
          return b;
        } else if (a === !0 && d === !1) {
          x(c, !1);
          return b;
        } else return b;
      }
      function v(a, c, d) {
        if (
          d.type !== 'controller_muted_requested' &&
          d.type !== 'controller_volume_requested'
        )
          return b;
        a = c.controlledState.muted;
        d = c.controlledState.volume;
        a = !(a || d === 0);
        d = f.lastLoggedSoundOnState;
        if (d !== !0 && a === !0) {
          g({
            eventType: 'tags_changed',
            state: c,
            tags: { player_sound_on: !0 },
          });
          return b;
        } else if (d !== !1 && a === !1) {
          g({
            eventType: 'tags_changed',
            state: c,
            tags: { player_sound_on: !1 },
          });
          return b;
        } else return b;
      }
      function w(a, c, d) {
        if (d.type !== 'controller_set_captions_visible_requested') return b;
        a = f.lastLoggedCaptionState;
        d = c.controlledState.captionsVisible;
        if (a !== !0 && d === !0) {
          g({
            eventType: 'tags_changed',
            state: c,
            tags: { captions_displayed: !0 },
          });
          return b;
        } else if (a !== !1 && d === !1) {
          g({
            eventType: 'tags_changed',
            state: c,
            tags: { captions_displayed: !1 },
          });
          return b;
        } else return b;
      }
      function x(a, b) {
        g({ eventType: 'tags_changed', state: a, tags: { fullscreen: b } });
      }
      return {
        consumeLoggerEvents: function () {
          if (e.length > 0)
            if (c('qex')._('1217')) {
              var a = e.some(function (a) {
                return (
                  a.event.event_name === 'paused' ||
                  a.event.event_name === 'completed' ||
                  a.event.event_name === 'cancelled'
                );
              });
              if (a) return e.splice(0);
            } else return e.splice(0);
          return [];
        },
        handleStateMachine: function (a, b, c) {
          j(c);
          var d = b.controlledState.playbackState,
            e = [u, o, p, q, r, k, s, v, t, w];
          e.forEach(function (d) {
            d(a, b, c);
          });
          (d === 'paused' || d === 'ended') && (f.canLogPlayingEvent = !0);
          c.type === 'controller_pause_requested' &&
            (f.shouldIgnoreDomPause = !0);
          c.type === 'controller_play_requested' &&
            (f.shouldIgnoreDomPlay = !0);
          c.type === 'dom_event_pause' && (f.shouldIgnoreDomPause = !1);
          c.type === 'dom_event_play' && (f.shouldIgnoreDomPlay = !1);
        },
      };
    }
    g.createMediaPlaybackCompoundEventStateMachineLogger = a;
  },
  98,
);
__d(
  'VideoPlayerBanzaiLogFlusher',
  ['VideoPlayerWwwLogger', 'emptyFunction', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = c('emptyFunction');
    b = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.flushLogs = function () {
        var a = this.$1.consumeLoggerEvents();
        a.forEach(function (a) {
          var b = {
            event: a.eventType,
            logData: a.logData,
            routeTracePolicy: a.routeTracePolicy,
            source: a.source_VPL_LOGGING_HACK,
          };
          if (
            a.source_VPL_LOGGING_HACK === 'animated_image_share' &&
            c('gkx')('1710047')
          )
            return;
          b = (b = a.logData) == null ? void 0 : b.ad_client_token;
          b != null
            ? c('VideoPlayerWwwLogger').logCometImmediately(a)
            : c('VideoPlayerWwwLogger').logComet(a);
        });
      };
      b.discardLogsWithoutFlushing = function () {
        var a = this.$1.consumeLoggerEvents();
      };
      return a;
    })();
    g['default'] = b;
  },
  98,
);
__d(
  'VideoPlayerImplementationErrorNormalization',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = a.getType();
      switch (b) {
        case 'OZ_NETWORK':
          b =
            (b = (b = a.getExtra()) == null ? void 0 : b.code) != null
              ? b
              : '0';
          b = parseInt(b, 10);
          return b < 100 || b > 599 ? 'NetworkError' : 'HTTPError';
        case 'OZ_SOURCE_BUFFER_QUOTA_EXCEEDED':
          a = (b = a.getExtra()) == null ? void 0 : b.mimeType;
          if (a != null && a.indexOf('video') > -1) return 'VideoDecodeError';
          else if (a != null && a.indexOf('audio') > -1)
            return 'AudioDecodeError';
          else return 'GenericDecodeError';
      }
      return null;
    }
    function b(a) {
      switch (a) {
        case 'MEDIA_ERR_NETWORK':
          return 'NetworkError';
        case 'MEDIA_ERR_ABORTED':
        case 'MEDIA_ERR_DECODE':
        case 'MEDIA_ERR_SRC_NOT_SUPPORTED':
        case 'MEDIA_ERR_UNKNOWN':
          return 'GenericDecodeError';
        case 'OZ_REPRESENTATION_PARSER':
        case 'OZ_XML_PARSER':
          return 'ManifestParseError';
        case 'BUFFERING_TIMEOUT':
        case 'OZ_DRM_MANAGER':
        case 'OZ_INITIALIZATION':
        case 'OZ_JAVASCRIPT_NATIVE':
        case 'OZ_SOURCE_BUFFER':
        case 'OZ_STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR':
        case 'OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR':
          return 'RuntimeError';
      }
      return null;
    }
    f.getVideoPlayerNormalizedErrorTypeFromOzError = a;
    f.getErrorTypeFromErrorName = b;
  },
  66,
);
__d(
  'VideoPlayerImplementationErrors',
  [
    'NetworkStatus',
    'VideoPlayerImplementationErrorNormalization',
    'getErrorMessageFromMediaErrorCode',
    'getErrorNameFromMediaErrorCode',
    'gkx',
    'oz-player/utils/OzError',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
      BUFFERING_TIMEOUT_INPLAY: '30000',
      BUFFERING_TIMEOUT_INPLAY_NO_NETWORK: '30001',
      BUFFERING_TIMEOUT_LIVEREWIND_INPLAY: '30010',
      BUFFERING_TIMEOUT_LIVEREWIND_INPLAY_NO_NETWORK: '30011',
      BUFFERING_TIMEOUT_LIVEREWIND_START: '30012',
      BUFFERING_TIMEOUT_LIVEREWIND_START_NO_NETWORK: '30013',
      BUFFERING_TIMEOUT_START: '30002',
      BUFFERING_TIMEOUT_START_NO_NETWORK: '30003',
    };
    function a(a) {
      var b = a.errorLocation,
        d = a.hostCallError,
        e = a.videoElementError,
        f = a.videoElementNetworkState;
      a = a.videoElementReadyState;
      var g = e == null ? void 0 : e.code,
        h = d != null && typeof d.message === 'string' ? d.message : null;
      h == null && (h = e == null ? void 0 : e.message);
      h == null && g != null && (h = c('getErrorMessageFromMediaErrorCode')(g));
      return {
        createdTimestamp: Date.now(),
        errorDescription:
          ((e = h) != null ? e : 'Empty error') +
          ('; code: ' + ((h = g) != null ? h : 'undefined')) +
          ('; readyState: ' + a) +
          ('; networkState: ' + f),
        errorLocation: b,
        errorName: c('getErrorNameFromMediaErrorCode')(g),
        originalError: d,
      };
    }
    function b(a, b) {
      return a == null
        ? {
            createdTimestamp: Date.now(),
            errorDescription: 'Empty rejection reason from video play()',
            errorLocation: b,
            errorName: 'PlayRejectedError',
          }
        : {
            createdTimestamp: Date.now(),
            errorCode:
              typeof a.code === 'string'
                ? a.code
                : typeof a.code === 'number'
                ? String(a.code)
                : void 0,
            errorDescription:
              typeof a.message === 'string' ? a.message : String(a),
            errorLocation: b,
            errorName:
              typeof a.name === 'string' ? a.name : 'PlayRejectedError',
          };
    }
    function e(a, b, d, e, f) {
      var g,
        i = (function () {
          if (f)
            if (e === 'in_play' && c('NetworkStatus').isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_INPLAY;
            else if (e === 'in_play' && !c('NetworkStatus').isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_INPLAY_NO_NETWORK;
            else if (e === 'start/unpause' && c('NetworkStatus').isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_START;
            else if (e === 'start/unpause' && !c('NetworkStatus').isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_START_NO_NETWORK;
            else return 0;
          else if (e === 'in_play' && c('NetworkStatus').isOnline())
            return h.BUFFERING_TIMEOUT_INPLAY;
          else if (e === 'in_play' && !c('NetworkStatus').isOnline())
            return h.BUFFERING_TIMEOUT_INPLAY_NO_NETWORK;
          else if (e === 'start/unpause' && c('NetworkStatus').isOnline())
            return h.BUFFERING_TIMEOUT_START;
          else if (e === 'start/unpause' && !c('NetworkStatus').isOnline())
            return h.BUFFERING_TIMEOUT_START_NO_NETWORK;
          else return 0;
        })();
      g = {
        message: String((g = b == null ? void 0 : b.message) != null ? g : ''),
        name: String(
          (g = b == null ? void 0 : b.name) != null ? g : 'UnknownError',
        ),
        stack: String((b == null ? void 0 : b.stack) || new Error().stack),
      };
      return {
        createdTimestamp: Date.now(),
        errorCode: String(i),
        errorDescription: g.name + ' ' + g.message,
        errorLocation: d,
        errorName: a,
        stack: g.stack,
        url: null,
      };
    }
    function i(a, b, d, e) {
      var f;
      e === void 0 && (e = null);
      f = {
        message: String((f = b == null ? void 0 : b.message) != null ? f : ''),
        name: String(
          (f = b == null ? void 0 : b.name) != null ? f : 'UnknownError',
        ),
        stack: String((b == null ? void 0 : b.stack) || new Error().stack),
      };
      return {
        createdTimestamp: Date.now(),
        errorCode: null,
        errorDescription: f.name + ' ' + f.message,
        errorLocation: d,
        errorName: a,
        stack: f.stack,
        url: e != null && c('gkx')('1526990') ? e : null,
      };
    }
    function f(a, b) {
      if (a instanceof c('oz-player/utils/OzError')) {
        var e = a,
          f = e.getExtra();
        return {
          createdTimestamp: Date.now(),
          errorCode: f.code,
          errorDescription: e.getDescription(),
          errorLocation: b,
          errorName: e.getType(),
          errorType: d(
            'VideoPlayerImplementationErrorNormalization',
          ).getVideoPlayerNormalizedErrorTypeFromOzError(e),
          stack: e.stack,
          url: f.url,
        };
      } else return i('OZ_JAVASCRIPT_NATIVE', a, b);
    }
    function j(a, b) {
      a = a.message;
      var c = 'The video node set its error property to a MediaError',
        d = a.split(': ');
      d.length > 1 && ((a = d.shift()), (c = d.join(': ')));
      return {
        createdTimestamp: Date.now(),
        errorDescription: c,
        errorLocation: b,
        errorName: a,
        errorType: 'GenericDecodeError',
      };
    }
    g.createVideoPlayerErrorFromHTMLVideoElementError = a;
    g.createVideoPlayerErrorFromVideoElementPlayPromiseRejectionReason = b;
    g.createVideoPlayerBufferingErrorFromGenericError = e;
    g.createVideoPlayerErrorFromGenericError = i;
    g.createVideoPlayerErrorFromOzImplementationError = f;
    g.createVideoPlayerErrorFromVideoNodeError = j;
  },
  98,
);
__d(
  'VideoPlayerImplementationReactVideoElement.react',
  ['gkx', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.alt,
        d = a.implementationExposedState,
        e = a.seoWebCrawlerVideoTracks,
        f = a.src,
        g = a.videoElementCallbacks,
        i = a.videoElementPreloadDisabled;
      a = a.videoElementRefCallback;
      var j = d.hasPlayEverBeenRequested;
      d = d.isExternalMedia;
      j = d && !j ? null : f;
      f =
        d && c('gkx')('2449')
          ? babelHelpers['extends']({ crossOrigin: 'anonymous' }, g)
          : babelHelpers['extends']({}, g);
      return h.jsx(
        'video',
        babelHelpers['extends'](
          {
            'aria-label': (d = b) != null ? d : void 0,
            className: 'x1lliihq x5yr21d xh8yej3',
            controls: !1,
            muted: !0,
            playsInline: !0,
            preload: i === !0 ? 'none' : void 0,
          },
          f,
          { ref: a, src: j, children: e },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerImplementationStateMachine',
  [
    'VideoPlayerImplementationErrors',
    'cr:4964',
    'gkx',
    'recoverableViolation',
    'shallowEqual',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b =
      (f = b('cr:4964')) != null
        ? f
        : { makeUpdatedActiveEmsgBoxes: null, makeUpdatedAllEmsgBoxes: null };
    var h = b.makeUpdatedActiveEmsgBoxes,
      i = b.makeUpdatedAllEmsgBoxes;
    function j(a) {
      var b = a.bufferingDetected,
        c = a.seeking;
      a = a.waitingForDomPlaying;
      return !b && !c && !a;
    }
    function k(a) {
      var b = a.bufferingDetected,
        d = a.prevPlaybackState,
        e = a.seeking;
      a = a.waitingForDomPlaying;
      b = j({ bufferingDetected: b, seeking: e, waitingForDomPlaying: a });
      e = d;
      switch (d) {
        case 'stalling':
          e = b ? 'playing' : 'stalling';
          break;
        case 'ended':
        case 'paused':
        case 'playing':
          break;
        default:
          d;
          c('recoverableViolation')(
            'unexpected playbackState: ' + d,
            'comet_video_player',
          );
          break;
      }
      return e;
    }
    function l(a) {
      return (
        (a.loopCount > 0 && a.loopCurrent < a.loopCount) || a.loopCount === -1
      );
    }
    function m(a, b, e) {
      switch (e.type) {
        case 'host_call_pause':
        case 'host_call_play':
        case 'host_call_set_current_time':
        case 'host_call_set_volume':
        case 'host_call_set_muted':
        case 'host_call_set_playback_rate':
        case 'host_call_set_video_quality':
        case 'host_call_set_latency_level':
          return babelHelpers['extends']({}, a, {
            hostCallQueue: a.hostCallQueue.concat([e]),
          });
        case 'controller_set_latency_level_requested':
        case 'implementation_set_latency_level_requested':
          return babelHelpers['extends']({}, a, {
            latencyLevel: e.payload.latencyLevel,
          });
        case 'controller_override_player_format':
          return babelHelpers['extends']({}, a, {
            overriddenPlayerFormat: a.playerFormat,
            playerFormat: e.payload.playerFormat,
          });
        case 'controller_set_player_format':
          return babelHelpers['extends']({}, a, {
            playerFormat: e.payload.playerFormat,
          });
        case 'dom_event_ended':
          return babelHelpers['extends']({}, a, {
            playbackState: 'ended',
            waitingForDomPlaying: !1,
          });
        case 'dom_event_pause':
          if (a.playbackState === 'ended') return a;
          if (b.videoElementEnded === !0)
            return babelHelpers['extends']({}, a, {
              playbackState: 'ended',
              waitingForDomPlaying: !1,
            });
          return a.playbackState === 'paused'
            ? a
            : babelHelpers['extends']({}, a, {
                playbackState: 'paused',
                waitingForDomPlaying: !1,
              });
        case 'dom_event_play':
          var f = a.playbackState,
            g = f;
          switch (f) {
            case 'playing':
            case 'stalling':
            case 'ended':
            case 'paused':
              g = 'stalling';
              break;
            default:
              f;
              c('recoverableViolation')(
                'unexpected playbackState: ' + f,
                'comet_video_player',
              );
              break;
          }
          f = !0;
          return babelHelpers['extends']({}, a, {
            playbackState: g,
            waitingForDomPlaying: f,
          });
        case 'dom_event_playing':
          g = a.bufferingDetected;
          f = a.seeking;
          var j = !1,
            m = a.playbackState;
          return babelHelpers['extends']({}, a, {
            playbackState: k({
              bufferingDetected: g,
              prevPlaybackState: m,
              seeking: f,
              waitingForDomPlaying: j,
            }),
            waitingForDomPlaying: j,
          });
        case 'dom_event_timeupdate':
          g = h
            ? h(
                a.allEmsgBoxes,
                b.videoElementPlayheadPosition,
                a.activeEmsgBoxes,
              )
            : a.activeEmsgBoxes;
          if (a.waitingForDomTimeUpdateAfterSeeked) {
            m = a.bufferingDetected;
            f = a.seeking;
            j = !1;
            var n = a.playbackState;
            return babelHelpers['extends']({}, a, {
              activeEmsgBoxes: g,
              playbackState: k({
                bufferingDetected: m,
                prevPlaybackState: n,
                seeking: f,
                waitingForDomPlaying: j,
              }),
              waitingForDomPlaying: j,
              waitingForDomTimeUpdateAfterSeeked: !1,
            });
          }
          return babelHelpers['extends']({}, a, { activeEmsgBoxes: g });
        case 'dom_event_seeking':
          m = a.playbackState;
          n = m;
          switch (m) {
            case 'paused':
            case 'ended':
              break;
            case 'stalling':
            case 'playing':
              n = 'stalling';
              break;
            default:
              m,
                c('recoverableViolation')(
                  'unexpected playbackState: ' + m,
                  'comet_video_player',
                );
          }
          return babelHelpers['extends']({}, a, {
            playbackState: n,
            seeking: !0,
            waitingForDomPlaying: !0,
          });
        case 'dom_event_seeked':
          f = a.bufferingDetected;
          j = a.waitingForDomPlaying;
          g = !1;
          m = a.playbackState;
          return babelHelpers['extends']({}, a, {
            implementationSeekSourcePosition: null,
            playbackState: k({
              bufferingDetected: f,
              prevPlaybackState: m,
              seeking: g,
              waitingForDomPlaying: j,
            }),
            seeking: g,
            waitingForDomTimeUpdateAfterSeeked: !0,
          });
        case 'dom_event_error':
          n = d(
            'VideoPlayerImplementationErrors',
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: 'dom_event_error',
            hostCallError: null,
            videoElementError: e.payload.videoElementError,
            videoElementNetworkState: e.payload.videoElementNetworkState,
            videoElementReadyState: e.payload.videoElementReadyState,
          });
          return babelHelpers['extends']({}, a, {
            error: c('gkx')('2011') ? a.error : n,
            playbackState: 'paused',
            waitingForDomPlaying: !1,
          });
        case 'dom_event_play_promise_created':
          return babelHelpers['extends']({}, a, {
            hostCallPlayIDLast: e.payload.hostCallPlayID,
          });
        case 'dom_event_play_promise_resolved':
          return a.hostCallPlayIDLast !== e.payload.hostCallPlayID
            ? a
            : babelHelpers['extends']({}, a, { hostCallPlayIDLast: null });
        case 'dom_event_play_promise_rejected':
          return a.hostCallPlayIDLast !== e.payload.hostCallPlayID
            ? a
            : babelHelpers['extends']({}, a, {
                hostCallPlayIDLast: null,
                playbackState:
                  a.playbackState === 'stalling' ? 'paused' : a.playbackState,
                waitingForDomPlaying: !1,
              });
        case 'implementation_host_call_queue_flushed':
          return babelHelpers['extends']({}, a, { hostCallQueue: [] });
        case 'implementation_host_call_failed':
          f = d(
            'VideoPlayerImplementationErrors',
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: e.payload.errorLocation,
            hostCallError: e.payload.hostCallError,
            videoElementError: e.payload.videoElementError,
            videoElementNetworkState: e.payload.videoElementNetworkState,
            videoElementReadyState: e.payload.videoElementReadyState,
          });
          return babelHelpers['extends']({}, a, {
            error: f,
            playbackState: 'paused',
            waitingForDomPlaying: !1,
          });
        case 'implementation_video_node_unmounted':
          return a;
        case 'implementation_engine_initialized':
          j = (m = e.payload.streamingFormat) != null ? m : a.streamingFormat;
          return babelHelpers['extends']({}, a, {
            availableQualities: e.payload.availableQualities,
            selectedVideoQuality: e.payload.selectedVideoQuality,
            streamingFormat: j,
            targetVideoQuality: e.payload.targetVideoQuality,
            videoProjection: e.payload.videoProjection,
          });
        case 'implementation_engine_representation_blocked':
          return babelHelpers['extends']({}, a, {
            availableQualities: e.payload.availableQualities,
          });
        case 'implementation_engine_destroyed':
          return a;
        case 'implementation_fatal_error':
          return babelHelpers['extends']({}, a, {
            error: e.payload.fatalError,
            playbackState: 'paused',
            waitingForDomPlaying: !1,
          });
        case 'implementation_seek_requested':
          return babelHelpers['extends']({}, a, {
            implementationSeekSourcePosition: e.payload.seekSourcePosition,
          });
        case 'representation_changed':
          return babelHelpers['extends']({}, a, {
            targetVideoQuality: e.payload.targetVideoQuality,
          });
        case 'controller_pause_requested':
          return a.playbackState === 'ended'
            ? a
            : babelHelpers['extends']({}, a, {
                lastPausedTimeMs: Date.now(),
                lastPauseReason: e.payload.reason,
                lastPlayedTimeMs: 0,
                playbackState: 'paused',
                waitingForDomPlaying: !1,
                watchTimeMs:
                  a.lastPlayedTimeMs > 0
                    ? a.watchTimeMs + (Date.now() - a.lastPlayedTimeMs)
                    : a.watchTimeMs,
              });
        case 'controller_play_requested':
          return a.playbackState !== 'paused' && a.playbackState !== 'ended'
            ? a
            : babelHelpers['extends']({}, a, {
                hasPlayEverBeenRequested: !0,
                lastPlayedTimeMs:
                  a.lastPlayedTimeMs === 0 ? Date.now() : a.lastPlayedTimeMs,
                lastPlayReason: e.payload.reason,
                loopCurrent: l(a)
                  ? e.payload.reason === 'loop_initiated'
                    ? a.loopCurrent + 1
                    : a.loopCurrent
                  : 0,
                playbackState: 'stalling',
                waitingForDomPlaying: !0,
              });
        case 'controller_seek_requested':
          return babelHelpers['extends']({}, a, {
            implementationSeekSourcePosition:
              (g = b.videoElementPlayheadPosition) != null
                ? g
                : a.implementationSeekSourcePosition,
            seeking: !0,
            seekTargetPosition: e.payload.seekTargetPosition,
          });
        case 'controller_quality_requested':
          return babelHelpers['extends']({}, a, {
            selectedVideoQuality: e.payload.selectedVideoQuality,
          });
        case 'controller_set_caption_display_style_requested':
          return babelHelpers['extends']({}, a, {
            captionDisplayStyle: e.payload.captionDisplayStyle,
          });
        case 'controller_set_picture_in_picture_state_requested':
          return babelHelpers['extends']({}, a, {
            isDesktopPictureInPicture: e.payload.isInPictureInPictureMode,
          });
        case 'controller_set_caption_format_requested':
          return babelHelpers['extends']({}, a, {
            captionFormat: e.payload.captionFormat,
          });
        case 'controller_set_playback_rate':
          return babelHelpers['extends']({}, a, {
            targetPlaybackRate: e.payload.playbackRate,
          });
        case 'controller_muted_requested':
          return babelHelpers['extends']({}, a, {
            lastMuteReason: e.payload.reason,
            muted: e.payload.muted,
          });
        case 'controller_volume_requested':
          return babelHelpers['extends']({}, a, { volume: e.payload.volume });
        case 'controller_scrub_begin_requested':
          return a.scrubbing
            ? a
            : babelHelpers['extends']({}, a, {
                scrubbing: !0,
                seekTargetPosition: null,
              });
        case 'controller_scrub_end_requested':
          return !a.scrubbing
            ? a
            : babelHelpers['extends']({}, a, {
                implementationSeekSourcePosition:
                  (n = b.videoElementPlayheadPosition) != null
                    ? n
                    : a.implementationSeekSourcePosition,
                scrubbing: !1,
                seeking: e.payload.seekTargetPosition != null,
                seekTargetPosition: e.payload.seekTargetPosition,
              });
        case 'buffering_begin_requested':
          f = a.playbackState;
          m = f;
          switch (f) {
            case 'paused':
            case 'ended':
              break;
            case 'playing':
            case 'stalling':
              m = 'stalling';
              break;
            default:
              f;
              c('recoverableViolation')(
                'unexpected playbackState: ' + f,
                'comet_video_player',
              );
              break;
          }
          j = e.payload.bufferingType;
          return babelHelpers['extends']({}, a, {
            bufferingDetected: !0,
            lastBufferingType: j,
            playbackState: m,
          });
        case 'buffering_end_requested':
          g = a.seeking;
          n = a.waitingForDomPlaying;
          f = !1;
          j = a.playbackState;
          return babelHelpers['extends']({}, a, {
            bufferingDetected: f,
            playbackState: k({
              bufferingDetected: f,
              prevPlaybackState: j,
              seeking: g,
              waitingForDomPlaying: n,
            }),
          });
        case 'controller_set_captions_visible_requested':
          m = e.payload.captionsVisible;
          return a.captionsVisible === m
            ? a
            : babelHelpers['extends']({}, a, {
                activeCaptions: m ? a.activeCaptions : null,
                captionsLocale: m ? a.captionsLocale : null,
                captionsVisible: m,
              });
        case 'controller_set_active_captions_requested':
          f = e.payload.activeCaptions;
          g = (j = f == null ? void 0 : f.rows) != null ? j : [];
          n = e.payload.captionsLocale;
          m = a.activeCaptions;
          var o = (j = m == null ? void 0 : m.rows) != null ? j : [];
          return o.length === g.length &&
            g.every(function (a, b) {
              return o[b] === a;
            })
            ? a
            : babelHelpers['extends']({}, a, {
                activeCaptions: f,
                captionsLocale: n,
              });
        case 'captions_loaded':
          return babelHelpers['extends']({}, a, {
            activeCaptions: a.activeCaptions,
            captionsLoaded: !0,
          });
        case 'captions_unloaded':
          return babelHelpers['extends']({}, a, {
            activeCaptions: null,
            captionsLoaded: !1,
            captionsLocale: null,
          });
        case 'inband_captions_autogenerated_changed':
          m = e.payload.inbandCaptionsAutogenerated;
          return a.inbandCaptionsAutogenerated === m
            ? a
            : babelHelpers['extends']({}, a, {
                inbandCaptionsAutogenerated: m,
              });
        case 'stream_ended':
          return babelHelpers['extends']({}, a, { streamEnded: !0 });
        case 'stream_gone_before_start':
          return babelHelpers['extends']({}, a, {
            playbackState: 'ended',
            streamEnded: !0,
            waitingForDomPlaying: !1,
          });
        case 'stream_interrupted':
          return babelHelpers['extends']({}, a, { streamInterrupted: !0 });
        case 'stream_resumed':
          return babelHelpers['extends']({}, a, { streamInterrupted: !1 });
        case 'seekable_ranges_changed':
          j = e.payload.seekableRanges;
          return babelHelpers['extends']({}, a, { seekableRanges: j });
        case 'controller_set_is_live_rewind_active_requested':
          g = e.payload.isLiveRewindActive;
          return babelHelpers['extends']({}, a, { isLiveRewindActive: g });
        case 'loop_count_change_requested':
          f = e.payload.loopCount;
          return f === a.loopCount
            ? a
            : babelHelpers['extends']({}, a, { loopCount: f, loopCurrent: 0 });
        case 'player_dimensions_changed':
          n = e.payload.dimensions;
          m = n.height;
          j = n.width;
          return j === a.dimensions.width && m === a.dimensions.height
            ? a
            : babelHelpers['extends']({}, a, {
                dimensions: { height: m, width: j },
              });
        case 'emsg_boxes_parsed':
          g = i ? i(a.allEmsgBoxes, e.payload.emsgBoxes) : a.allEmsgBoxes;
          f = h
            ? h(g, b.videoElementPlayheadPosition, a.activeEmsgBoxes)
            : a.activeEmsgBoxes;
          return babelHelpers['extends']({}, a, {
            activeEmsgBoxes: f,
            allEmsgBoxes: g,
          });
        case 'register_emsg_observer':
          n = new Set(a.emsgObserverTokens);
          n.add(e.payload.token);
          return babelHelpers['extends']({}, a, { emsgObserverTokens: n });
        case 'unregister_emsg_observer':
          m = new Set(a.emsgObserverTokens);
          m['delete'](e.payload.token);
          return babelHelpers['extends']({}, a, { emsgObserverTokens: m });
        default:
          return a;
      }
    }
    function n(a, b, d) {
      var e = b.type !== 'dom_seeking';
      e = e ? d : a.uncontrolledState;
      d = !c('shallowEqual')(e, a.uncontrolledState);
      b = m(a.controlledState, e, b);
      var f = !c('shallowEqual')(b, a.controlledState);
      return d || f
        ? babelHelpers['extends']({}, a, {
            controlledState: f ? b : a.controlledState,
            uncontrolledState: d ? e : a.uncontrolledState,
          })
        : a;
    }
    var o, p;
    function q(a) {
      var b = a.collectUncontrolledState,
        d = a.debugLogId;
      d = a.initialState;
      var e = a.onDispatched,
        f = a.onFatalError,
        g = d,
        h = g,
        i = 0,
        j = !1,
        k = !1,
        l = !0,
        m = !0;
      return {
        dispatch: function (a) {
          if (!m) return;
          var d = null,
            g = null;
          try {
            ++i;
            if (i >= 10)
              if (!j) {
                j = !0;
                throw c('unrecoverableViolation')(
                  'Video player state machine loop detected',
                  'comet_video_player',
                );
              } else return;
            var o = h.uncontrolledState;
            if (l)
              try {
                o = b();
              } catch (a) {
                (l = !1), (g = a);
              }
            var p = h;
            o = n(p, a, o);
            h = o;
            e(p, o, a);
          } catch (a) {
            (m = !1), (d = a);
          } finally {
            if (!k && (d != null || g != null)) {
              k = !0;
              try {
                f((p = d) != null ? p : g);
              } catch (a) {}
            }
            --i;
          }
        },
        getCurrentState: function () {
          return h;
        },
        getInitialState: function () {
          return g;
        },
      };
    }
    var r, s;
    function a(a) {
      var b = a.collectUncontrolledState,
        c = a.debugLogId,
        d = a.initialState,
        e = a.onFatalError,
        f = a.stateTransitionHandlers;
      function g(a, b, c) {
        try {
          var d = !0,
            e = 0;
          while (d && e < f.length) {
            var g = f[e];
            d = g(a, b, c);
            ++e;
          }
        } finally {
        }
      }
      return q({
        collectUncontrolledState: b,
        debugLogId: c,
        initialState: d,
        onDispatched: g,
        onFatalError: e,
      });
    }
    function e(a, b) {
      function c() {}
      function d(a) {
        return a;
      }
      function e(c) {
        return function (e) {
          var f = d(e.currentTarget);
          b(f, ['reactEvent(' + e.type + ')']);
          a.dispatch(c);
        };
      }
      function f(c) {
        return function (e) {
          var f = d(e.currentTarget);
          b(f, ['reactEvent(' + e.type + ')']);
          a.dispatch(c(e, f));
        };
      }
      return {
        onAbort: c,
        onCanPlay: c,
        onCanPlayThrough: c,
        onDurationChange: e({ type: 'dom_event_durationchange' }),
        onEmptied: c,
        onEncrypted: c,
        onEnded: e({ type: 'dom_event_ended' }),
        onError: f(function (a, b) {
          return {
            payload: {
              videoElementError: b.error,
              videoElementNetworkState: b.networkState,
              videoElementReadyState: b.readyState,
            },
            type: 'dom_event_error',
          };
        }),
        onLoadedData: c,
        onLoadedMetadata: c,
        onLoadStart: c,
        onPause: e({ type: 'dom_event_pause' }),
        onPlay: e({ type: 'dom_event_play' }),
        onPlaying: f(function (a) {
          return {
            payload: { domEventPerfTimestamp: a.timeStamp },
            type: 'dom_event_playing',
          };
        }),
        onProgress: e({ type: 'dom_event_progress' }),
        onRateChange: e({ type: 'dom_event_ratechange' }),
        onSeeked: e({ type: 'dom_event_seeked' }),
        onSeeking: e({ type: 'dom_event_seeking' }),
        onStalled: c,
        onSuspend: c,
        onTimeUpdate: e({ type: 'dom_event_timeupdate' }),
        onVolumeChange: e({ type: 'dom_event_volumechange' }),
        onWaiting: e({ type: 'dom_event_waiting' }),
      };
    }
    g.createVideoPlayerImplementationStateMachine = q;
    g.createVideoPlayerImplementationStateMachineWithStateTransitionHandlers =
      a;
    g.createReactVideoElementCallbacksForStateMachine = e;
  },
  98,
);
__d(
  'VideoPlayerImplementationStateMachineHostCallQueue',
  ['cometUniqueID', 'emptyFunction', 'gkx', 'promiseDone'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = c('emptyFunction');
    function h() {
      return 'id-vpdom-' + c('cometUniqueID')();
    }
    function i(a) {
      var b = a.engineExtrasAPI,
        d = a.hostCall,
        e = a.machine;
      a = a.videoElementAPI;
      switch (d.type) {
        case 'host_call_play':
          var f = a.play();
          f &&
            (e.dispatch({
              payload: { hostCallPlayID: d.payload.hostCallID },
              type: 'dom_event_play_promise_created',
            }),
            c('promiseDone')(
              f.then(
                function () {
                  e.dispatch({
                    payload: { hostCallPlayID: d.payload.hostCallID },
                    type: 'dom_event_play_promise_resolved',
                  });
                },
                function (a) {
                  e.dispatch({
                    payload: {
                      hostCallPlayID: d.payload.hostCallID,
                      playPromiseRejectionReason: a,
                    },
                    type: 'dom_event_play_promise_rejected',
                  });
                },
              ),
            ));
          break;
        case 'host_call_pause':
          a.pause();
          break;
        case 'host_call_set_playback_rate':
          a.setPlaybackRate(d.payload.playbackRate);
          break;
        case 'host_call_set_muted':
          a.setMuted(d.payload.muted);
          break;
        case 'host_call_set_volume':
          a.setVolume(d.payload.volume);
          break;
        case 'host_call_set_current_time':
          a.setPlayheadPosition(d.payload.currentTime);
          break;
        case 'host_call_set_video_quality':
          b.setUserSelectedVideoQuality(d.payload.selectedVideoQuality);
          break;
        case 'host_call_set_latency_level':
          b.setLatencyLevel(d.payload.latencyLevel);
          break;
        case 'host_call_picture_in_picture':
          a.requestPictureInPicture();
          break;
        case 'host_call_exit_picture_in_picture':
          a.exitPictureInPicture();
          break;
        default:
          d.type;
          return !1;
      }
      return !0;
    }
    function j(a) {
      var b = a.engineExtrasAPI,
        c = a.hostCall,
        d = a.machine;
      a = a.videoElementAPI;
      if (!a || !b) d.dispatch(c);
      else {
        var e = !1;
        try {
          e = i({
            engineExtrasAPI: b,
            hostCall: c,
            machine: d,
            videoElementAPI: a,
          });
        } catch (b) {
          d.dispatch({
            payload: {
              errorLocation: 'apply_host_call_catch',
              hostCall: c,
              hostCallError: b,
              videoElementError: a.getError(),
              videoElementNetworkState: a.getNetworkState(),
              videoElementReadyState: a.getReadyState(),
            },
            type: 'implementation_host_call_failed',
          });
        }
        e &&
          d.dispatch({
            payload: { hostCall: c },
            type: 'implementation_host_call_applied',
          });
      }
    }
    function k(a) {
      var b = [];
      function c() {
        b = b.filter(function (a) {
          return a.type !== 'host_call_play' && a.type !== 'host_call_pause';
        });
      }
      function d(a) {
        b = b.filter(function (b) {
          return b.type !== a;
        });
      }
      a.forEach(function (a) {
        switch (a.type) {
          case 'host_call_play':
            c();
            break;
          case 'host_call_pause':
            c();
            break;
          case 'host_call_set_playback_rate':
            d(a.type);
            break;
          case 'host_call_set_muted':
            d(a.type);
            break;
          case 'host_call_set_volume':
            d(a.type);
            break;
          case 'host_call_set_current_time':
            d(a.type);
            break;
          case 'host_call_set_video_quality':
            d(a.type);
            break;
          case 'host_call_set_latency_level':
            d(a.type);
            break;
          case 'host_call_picture_in_picture':
            d(a.type);
            break;
          case 'host_call_exit_picture_in_picture':
            d(a.type);
            break;
          default:
            a.type;
        }
        b = b.concat([a]);
      });
      return b;
    }
    function a(a) {
      var b = a.engineExtrasAPI,
        c = a.machine,
        d = a.reason,
        e = a.state,
        f = a.videoElementAPI;
      a = [
        {
          payload: {
            hostCallID: h(),
            reason: d,
            volume: e.controlledState.volume,
          },
          type: 'host_call_set_volume',
        },
        {
          payload: {
            hostCallID: h(),
            muted: e.controlledState.muted,
            reason: d,
          },
          type: 'host_call_set_muted',
        },
        {
          payload: {
            hostCallID: h(),
            reason: d,
            selectedVideoQuality: e.controlledState.selectedVideoQuality,
          },
          type: 'host_call_set_video_quality',
        },
      ];
      d = k(e.controlledState.hostCallQueue.concat(a));
      d.forEach(function (a) {
        j({ engineExtrasAPI: b, hostCall: a, machine: c, videoElementAPI: f });
      });
      c.dispatch({
        payload: { hostCallsFlushed: d },
        type: 'implementation_host_call_queue_flushed',
      });
    }
    g.makeHostCallID = h;
    g.applyOrQueueHostCall = j;
    g.flushHostCallQueue = a;
  },
  98,
);
__d(
  'VideoPlayerMutedStateChange',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = a.currMuted,
        c = a.currVolume,
        d = a.prevMuted;
      a = a.prevVolume;
      b = b || c === 0;
      c = d || a === 0;
      if (c === b) return null;
      return b ? 'muted' : 'unmuted';
    }
    f.getVideoPlayerMutedStateChange = a;
  },
  66,
);
__d(
  'VideoPlayerImplementationStateMachineLogger',
  [
    'CometProductAttribution',
    'NetworkStatus',
    'PlaybackSpeedExperiments',
    'SiteData',
    'VideoMimeTypes',
    'VideoPlayerConnectionQuality',
    'VideoPlayerImplementationErrorNormalization',
    'VideoPlayerLoggerPlayerStates',
    'VideoPlayerMutedStateChange',
    'VideoPlayerStateBasedLoggingEvents',
    'emptyFunction',
    'getPlayerFormatForLogData',
    'getVideoBrowserTabId',
    'gkx',
    'mapObject',
    'performanceAbsoluteNow',
    'qex',
    'recoverableViolation',
    'removeFromArray',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 6e4,
      i = 0.5,
      j = (b = c('qex')._('1675')) != null ? b : 0,
      k = c('gkx')('3954') ? 1e3 : Number.POSITIVE_INFINITY,
      l = null,
      m = function (a) {
        var b;
        l = (b = l) != null ? b : document.createElement('video');
        return !('canPlayType' in l) ? '' : l.canPlayType(a);
      };
    e = c('emptyFunction');
    f = c('emptyFunction');
    b = c('emptyFunction');
    e = c('emptyFunction');
    var n =
      (f = d('PlaybackSpeedExperiments').enablePlaybackSpeedLogging()) != null
        ? f
        : !1;
    function o() {
      return {
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        debugSubscribers: [],
        dontLogPauseOnUnpausedSeeking: !1,
        errorRecoveryAttemptState: {
          currentRecoverableError: null,
          eventsLogged: 0,
          repeatCount: 0,
        },
        hasLoggedStallData: !1,
        hasLoggedStartedPlaying: !1,
        hasPausedOnce: !1,
        hasPendingRequestedPlaying: !1,
        initialSuborigin: void 0,
        interruptCount: 0,
        interruptDuration: 0,
        interruptEndTimestamp: 0,
        interruptStartTimestamp: 0,
        isLoggingScrubbingSequence: !1,
        lastLoggedError: null,
        lastLoggedFullscreenState: !1,
        lastLoggedPlaybackSpeed: null,
        lastLoggedViewabilityPercentage: void 0,
        lastStartTimePosition: null,
        lastTrackedRepresentation: null,
        nextHeartbeatTime: null,
        nextPlayedThreeSecondsPlayheadPosition: null,
        sequenceNumber: 0,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
        stallCount: 0,
        stallCount200ms: 0,
        stallCountTotal: 0,
        stallDuration: 0,
        stallDurationTotal: 0,
        stallStartTimestamp: 0,
        startStallCountTotal: 0,
        startStallDurationTotal: 0,
        vplEventSequenceNumber: 0,
      };
    }
    function p(a, b) {
      return b === 'muted' ||
        b === 'unmuted' ||
        b === 'started_playing' ||
        b === 'caption_change' ||
        b === 'unpaused'
        ? a.controlledState.captionsVisible
          ? 'on'
          : 'off'
        : void 0;
    }
    function a(a) {
      var b = new Map(),
        e = a.initialLoggingMetaData,
        f = e,
        g = [],
        l = o(),
        q = new Set(
          c('VideoPlayerStateBasedLoggingEvents').StateBasedLoggingEventNames,
        );
      function r(a) {
        l.debugSubscribers.push(a);
        return function () {
          c('removeFromArray')(l.debugSubscribers, a);
        };
      }
      function s(a) {
        l.debugSubscribers.forEach(function (b) {
          return b(a);
        });
      }
      function t(a) {
        var b = l.stallStartTimestamp;
        if (b > 0) {
          l.stallCount += 1;
          l.stallCountTotal += 1;
          l.hasPendingRequestedPlaying && (l.startStallCountTotal += 1);
          a = a - b;
          l.stallDurationTotal += a;
          l.stallDuration += a;
          l.stallCount200ms += a > 200 ? 1 : 0;
          l.hasPendingRequestedPlaying && (l.startStallDurationTotal += a);
        }
      }
      function u(a, b) {
        a =
          a.uncontrolledState.videoElementPlayheadPosition == null
            ? null
            : a.uncontrolledState.videoElementPlayheadPosition;
        var c = null;
        switch (b) {
          case 'paused':
          case 'cancelled_requested_playing':
          case 'finished_playing':
          case 'heart_beat':
          case 'playback_speed_changed':
          case 'representation_ended':
            c = l.lastStartTimePosition;
            break;
          case 'scrubbed':
            c = a;
            break;
          default:
            break;
        }
        switch (b) {
          case 'paused':
          case 'cancelled_requested_playing':
          case 'finished_playing':
          case 'scrubbed':
            l.lastStartTimePosition = null;
            break;
          case 'started_playing':
          case 'unpaused':
          case 'heart_beat':
          case 'playback_speed_changed':
          case 'representation_ended':
            l.lastStartTimePosition = a;
            break;
          default:
            break;
        }
        return { video_last_start_time_position: c };
      }
      function v(a, b) {
        var c = b.uncontrolledState.clockTimestamp;
        a = a.controlledState.streamInterrupted;
        b = b.controlledState.streamInterrupted;
        !a && b
          ? (l.interruptStartTimestamp = c)
          : a &&
            !b &&
            l.interruptStartTimestamp > 0 &&
            ((l.interruptEndTimestamp = c),
            (l.interruptCount += 1),
            (l.interruptDuration +=
              l.interruptEndTimestamp - l.interruptStartTimestamp));
      }
      function w(a, b, d) {
        var e = b.uncontrolledState.clockTimestamp;
        a = a.controlledState.playbackState;
        var f = b.controlledState.playbackState;
        a !== 'stalling' &&
          f === 'stalling' &&
          (s('stall_start'), (l.stallStartTimestamp = e));
        if (a === 'stalling' && f !== 'stalling') {
          e = 0;
          c('gkx')('3881') &&
            (d.type === 'dom_event_playing' ||
              d.type === 'buffering_end_requested') &&
            d.payload.domEventPerfTimestamp != null &&
            (e = Math.max(
              b.uncontrolledState.perfTimestamp -
                d.payload.domEventPerfTimestamp,
              0,
            ));
          t(b.uncontrolledState.clockTimestamp - e);
          l.stallStartTimestamp = 0;
          s('stall_end');
        }
      }
      function x(a, b, c) {
        a = b.uncontrolledState;
        b = a.videoElementPlayheadPosition;
        switch (c) {
          case 'unpaused':
          case 'started_playing':
            l.nextPlayedThreeSecondsPlayheadPosition =
              ((a = b) != null ? a : 0) + 3;
            break;
          case 'paused':
          case 'finished_playing':
            l.nextPlayedThreeSecondsPlayheadPosition = null;
            break;
          default:
            break;
        }
      }
      function y(a, b, c) {
        if (l.interruptCount > 0 && l.interruptDuration > 0) {
          a = {
            interrupt_count: l.interruptCount,
            interrupt_time: l.interruptDuration,
          };
          l.interruptCount = 0;
          l.interruptDuration = 0;
          l.interruptStartTimestamp = 0;
          l.interruptEndTimestamp = 0;
          return a;
        }
        return { interrupt_count: null, interrupt_time: null };
      }
      function z(a, b, c) {
        var d = {
            stall_count: null,
            stall_count_200_ms: null,
            stall_time: null,
          },
          e = b.uncontrolledState.clockTimestamp,
          f = function () {
            var a = {
              stall_count: l.stallCount,
              stall_count_200_ms: l.stallCount200ms,
              stall_time: l.stallDuration,
            };
            l.stallCount = 0;
            l.stallCount200ms = 0;
            l.stallDuration = 0;
            l.stallStartTimestamp = 0;
            return a;
          };
        a = a.controlledState.playbackState;
        var g = b.controlledState.playbackState;
        a !== 'stalling' && g === 'stalling' && (l.stallStartTimestamp = e);
        switch (c) {
          case 'started_playing':
          case 'unpaused':
          case 'finished_playing':
          case 'paused':
          case 'cancelled_requested_playing':
          case 'playback_speed_changed':
          case 'representation_ended':
            t(b.uncontrolledState.clockTimestamp);
            d = f();
            break;
          case 'heart_beat':
            b.controlledState.playbackState !== 'stalling' &&
              (t(b.uncontrolledState.clockTimestamp), (d = f()));
            break;
          default:
            break;
        }
        return d;
      }
      function A(a, b, c) {
        a =
          b.controlledState.playbackState === 'paused' &&
          a.controlledState.playbackState === 'stalling';
        return c > 0 && (b.controlledState.playbackState === 'stalling' || a);
      }
      function B(a, b) {
        a = a.current;
        var c = null;
        switch (b) {
          case 'finished_playing':
          case 'paused':
          case 'heart_beat':
            a && (c = a.getAndFlushTracedFrames());
            return c != null ? JSON.stringify(c) : null;
          default:
            return null;
        }
      }
      function C(a) {
        a = a.controlledState.playbackState;
        switch (a) {
          case 'playing':
          case 'stalling':
            return 'playing';
          case 'paused':
            return 'paused';
          case 'ended':
            return 'finished';
          default:
            a;
            return 'unknown';
        }
      }
      function D(a) {
        switch (a) {
          case 'normal':
            return 'normal';
          case 'low':
            return 'low';
          case 'ultra-low':
            return 'ultra_low';
          default:
            return null;
        }
      }
      function E() {
        return {
          state: l.hasLoggedStartedPlaying
            ? c('VideoPlayerLoggerPlayerStates').UNPAUSED
            : c('VideoPlayerLoggerPlayerStates').STARTED,
        };
      }
      function F(a) {
        if (
          c('gkx')('2714') &&
          (a == null ? void 0 : a.v2) &&
          (a == null ? void 0 : a.v2.length) > 0
        ) {
          var b = a == null ? void 0 : a.v2;
          b = b[b.length - 1];
          return [b['class'], b.module]
            .map(d('CometProductAttribution').filterEntryValue)
            .join(':');
        }
        return (a =
          a == null
            ? void 0
            : (b = a.v2) == null
            ? void 0
            : b
                .map(function (a) {
                  return [a['class'], a.module]
                    .map(d('CometProductAttribution').filterEntryValue)
                    .join(':');
                })
                .join(';')) != null
          ? a
          : '';
      }
      function G(f) {
        var h,
          i = f.eventType,
          j = f.logDataOverrides,
          k = f.prevState,
          m = f.state;
        f = u(m, i);
        f = f.video_last_start_time_position;
        var o = z(k, m, i),
          r = o.stall_count,
          s = o.stall_count_200_ms;
        o = o.stall_time;
        var t = y(k, m, i),
          v = t.interrupt_count;
        t = t.interrupt_time;
        var w = B(a.videoLiveTraceRef, i),
          E = [],
          G =
            a.initialLoggingMetaData.coreVideoPlayerMetaData
              .autoplayGatingResult;
        G && E.push(G);
        G =
          i === 'entered_fs'
            ? !0
            : i === 'exited_fs'
            ? !1
            : l.lastLoggedFullscreenState;
        h = c('getPlayerFormatForLogData')(
          {
            isDesktopPictureInPicture:
              (h = m.controlledState.isDesktopPictureInPicture) != null
                ? h
                : !1,
            isFullscreen: G,
          },
          e.coreVideoPlayerMetaData.playerFormat,
        );
        var H = m.uncontrolledState.viewabilityPercentage,
          I = Boolean(m.uncontrolledState.isFBIsLiveTemplated),
          J = Boolean(m.uncontrolledState.isFBWasLive),
          K = m.uncontrolledState.videoElementPlaybackRate;
        K = K == null || K === 0 ? l.lastLoggedPlaybackSpeed : K;
        var L = a.initialLoggingMetaData.productAttribution;
        if (h === 'watch_scroll' && L && L.v2) {
          var M,
            N = {
              0: babelHelpers['extends']({}, L['0']),
              v2: [babelHelpers['extends']({}, L.v2[0])],
            };
          M =
            (M = e.productAttribution) == null
              ? void 0
              : (M = M.v2) == null
              ? void 0
              : M[0];
          if (M) {
            var O = N.v2[0];
            O['class'] = M['class'];
            O.scope_id = M.scope_id;
            O.ts = M.ts;
          }
          L = N;
        }
        O = null;
        M = null;
        c('gkx')('3013') &&
          ((O =
            L != null
              ? d('CometProductAttribution').minifyProductAttributionV2(L)
              : null),
          (M = L != null ? F(L) : null));
        N = A(k, m, (N = o) != null ? N : 0);
        M = {
          access_token: a.initialLoggingMetaData.accessToken,
          ad_client_token: e.coreVideoPlayerMetaData.adClientToken,
          attribution_id:
            L != null && Object.prototype.hasOwnProperty.call(L, '0')
              ? JSON.stringify({ 0: L['0'] })
              : null,
          attribution_id_v2: O,
          attribution_id_v2_root: M,
          audio_only: e.coreVideoPlayerMetaData.audioOnly,
          audio_representation_id: m.uncontrolledState.audioRepresentationID,
          autoplay_eligible:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.canAutoplay ===
            'allow',
          autoplay_failure_reasons: JSON.stringify(E),
          autoplay_setting:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.autoplaySetting,
          available_qualities: m.controlledState.availableQualities.length,
          broadcaster_origin:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.broadcasterOrigin,
          browser_tab_id: c('getVideoBrowserTabId')(),
          caption_state: p(m, i),
          client_latency_setting: D(m.controlledState.latencyLevel),
          current_playback_speed: n ? K : null,
          current_viewability_percentage: H,
          dash_perf_logging_enabled:
            e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass !=
              null &&
            e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass.isEnabled(),
          data_connection_quality: d('VideoPlayerConnectionQuality').evaluate(
            function () {
              return m.uncontrolledState.estimatedBandwidth;
            },
          ),
          dropped_frame_count:
            m.uncontrolledState.videoElementDroppedFrameCount,
          external_log_id: e.coreVideoPlayerMetaData.externalLogID,
          external_log_type: e.coreVideoPlayerMetaData.externalLogType,
          fb_manifest_identifier: m.uncontrolledState.manifestIdentifier,
          frame_events: w,
          interrupt_count: v,
          interrupt_time: t,
          is_abr_enabled: m.isAbrEnabled,
          is_fbms: m.uncontrolledState.isFBMS,
          is_live_video_rewound: m.controlledState.isLiveRewindActive,
          is_pip: m.controlledState.isDesktopPictureInPicture,
          is_predictive_playback: m.uncontrolledState.isPredictiveDash,
          is_sound_on: !m.controlledState.muted,
          is_stalling: N,
          is_templated_manifest: I || J,
          last_viewability_percentage: l.lastLoggedViewabilityPercentage,
          mpd_validation_errors: m.uncontrolledState.mpdValidationErrors,
          network_connected: m.uncontrolledState.networkConnected,
          playback_caption_format: m.controlledState.captionFormat,
          playback_caption_locale: m.controlledState.captionsLocale,
          playback_duration: m.uncontrolledState.videoElementDuration,
          playback_is_broadcast:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.isVideoBroadcast,
          playback_is_drm: Boolean(
            a.initialLoggingMetaData.coreVideoPlayerMetaData
              .graphQLVideoDRMInfo,
          ),
          playback_is_live_streaming:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.isLiveStreaming,
          player_format: h,
          player_instance_key: e.instanceKey,
          player_origin: e.coreVideoPlayerMetaData.playerOriginOverride,
          player_state: C(m),
          player_suborigin: e.coreVideoPlayerMetaData.subOrigin,
          player_version: m.playerVersion,
          representation_id: m.uncontrolledState.videoRepresentationID,
          source_VPL_LOGGING_HACK:
            e.coreVideoPlayerMetaData.source_VPL_LOGGING_HACK,
          stall_count: r,
          stall_count_200_ms: s,
          stall_time: o,
          streaming_format: m.controlledState.streamingFormat,
          total_frame_count: m.uncontrolledState.videoElementTotalFrameCount,
          tracking_data_encrypted:
            a.initialLoggingMetaData.trackingDataEncrypted,
          tracking_nodes: a.initialLoggingMetaData.trackingNodes,
          v2_heart_beat: c('gkx')('1434599') && i === 'heart_beat' ? !0 : null,
          video_bandwidth: m.uncontrolledState.estimatedBandwidth,
          video_buffer_end_position:
            m.uncontrolledState.videoElementLastBufferEndPosition,
          video_id: e.coreVideoPlayerMetaData.videoFBID,
          video_last_start_time_position: f,
          video_play_reason: m.controlledState.lastPlayReason,
          video_player_height: (L = e.dimensions) == null ? void 0 : L.height,
          video_player_width: (O = e.dimensions) == null ? void 0 : O.width,
          video_time_position: m.uncontrolledState.videoElementPlayheadPosition,
          web_client_revision: c('SiteData').client_revision,
        };
        E =
          c('gkx')('1286') && i === 'error_recovery_attempt'
            ? null
            : q.has(i)
            ? ++l.sequenceNumber
            : null;
        v = {
          event_seq_num: ++l.vplEventSequenceNumber,
          seq_num: E,
          time_ms: Date.now(),
          vpts: ((w = c('qex')._('33')) != null ? w : !1)
            ? c('performanceAbsoluteNow')()
            : null,
        };
        var P = {};
        b.forEach(function (a, b) {
          P[b] = a;
        });
        t = e.coreVideoPlayerMetaData.additionalLogData;
        N = babelHelpers['extends']({}, t, P);
        I = babelHelpers['extends']({}, N, M, j, v);
        h =
          (J = l.initialSuborigin) != null
            ? J
            : e.coreVideoPlayerMetaData.subOrigin;
        s = (r = I.source_VPL_LOGGING_HACK) != null ? r : h;
        f =
          (o = e.coreVideoPlayerMetaData.initialTracePolicy) != null
            ? o
            : e.coreVideoPlayerMetaData.routeTracePolicy;
        L = {
          eventType: i,
          logData: I,
          routeTracePolicy: f,
          source_VPL_LOGGING_HACK: s,
        };
        g.push(L);
        x(k, m, i);
        l.initialSuborigin == null && h != null && (l.initialSuborigin = h);
        l.lastLoggedFullscreenState = G;
        l.lastLoggedPlaybackSpeed = K;
        i === 'viewability_changed' && (l.lastLoggedViewabilityPercentage = H);
      }
      var H = {};
      function I(a, b, c) {
        G({
          eventType: 'requested_playing',
          logDataOverrides: babelHelpers['extends']({}, c, E()),
          prevState: a,
          state: b,
        });
        l.hasPendingRequestedPlaying = !0;
        l.canLogPausedOrFinishedPlaying = !0;
        return H;
      }
      function J(a, b, c) {
        if (!l.canLogPausedOrFinishedPlaying) return H;
        else if (l.hasPendingRequestedPlaying) {
          K(a, b, c);
          l.canLogPausedOrFinishedPlaying = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        } else {
          G({
            eventType: 'paused',
            logDataOverrides: babelHelpers['extends']({}, c, {
              error_user_info: JSON.stringify({
                is_document_hidden: b.uncontrolledState.isDocumentHidden,
              }),
            }),
            prevState: a,
            state: b,
          });
          l.canLogPausedOrFinishedPlaying = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        }
      }
      function K(a, b, c) {
        var d = b.uncontrolledState.liveTraceContext;
        c = babelHelpers['extends']({}, c, E(), {
          live_trace_source_id: d ? d.sourceId : void 0,
          live_trace_stream_id: d ? d.streamId : void 0,
          live_trace_stream_type: d ? d.streamType : void 0,
        });
        G({
          eventType: 'cancelled_requested_playing',
          logDataOverrides: c,
          prevState: a,
          state: b,
        });
        return H;
      }
      function L(a, b, c) {
        if (
          c.type === 'dom_event_play_promise_rejected' &&
          l.hasPendingRequestedPlaying
        ) {
          c = c.payload.playPromiseRejectionReason;
          if (c != null && c.name === 'NotAllowedError') {
            K(a, b, { debug_reason: 'not_allowed' });
            return H;
          } else return H;
        } else return H;
      }
      function M(a, b, c) {
        if (
          (c.type === 'controller_play_requested' ||
            (c.type === 'dom_event_play' && !l.shouldIgnoreDomPlay)) &&
          a.controlledState.playbackState !== b.controlledState.playbackState
        ) {
          c = b.uncontrolledState.liveTraceContext;
          c = c
            ? {
                live_trace_source_id: c.sourceId,
                live_trace_stream_id: c.streamId,
                live_trace_stream_type: c.streamType,
              }
            : null;
          I(a, b, c);
          return H;
        } else return H;
      }
      function N(a, b, c) {
        if (
          a.controlledState.playbackState === 'stalling' &&
          b.controlledState.playbackState === 'playing' &&
          l.canLogPlayingEvent
        ) {
          c = b.uncontrolledState.liveTraceContext;
          c = c
            ? {
                live_trace_source_id: c.sourceId,
                live_trace_stream_id: c.streamId,
                live_trace_stream_type: c.streamType,
              }
            : null;
          G({
            eventType: l.hasLoggedStartedPlaying
              ? 'unpaused'
              : 'started_playing',
            logDataOverrides: c,
            prevState: a,
            state: b,
          });
          l.hasLoggedStartedPlaying = !0;
          l.canLogPlayingEvent = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        } else return H;
      }
      function O(a, b, d) {
        var e = b.controlledState.playbackState,
          f = a.controlledState.playbackState;
        if (
          d.type === 'controller_scrub_begin_requested' &&
          !a.controlledState.scrubbing &&
          e !== 'paused' &&
          e !== 'ended'
        ) {
          J(a, b);
          l.isLoggingScrubbingSequence = !0;
          return H;
        } else if (
          !a.controlledState.seeking &&
          b.controlledState.seeking &&
          !l.isLoggingScrubbingSequence &&
          e !== 'paused' &&
          e !== 'ended' &&
          !l.hasPendingRequestedPlaying
        ) {
          J(a, b);
          l.shouldLogRequestedPlayingForScrub = !0;
          return H;
        } else if (
          d.type === 'controller_scrub_end_requested' &&
          a.controlledState.scrubbing &&
          e !== 'paused' &&
          e !== 'ended'
        ) {
          I(a, b, { video_time_position: d.payload.seekTargetPosition });
          return H;
        } else if (a.controlledState.seeking && !b.controlledState.seeking) {
          d = b.uncontrolledState.videoElementPlayheadPosition;
          var g = a.controlledState.implementationSeekSourcePosition;
          (!c('gkx')('1482680') ||
            (g != null && d != null && Math.abs(g - d) > i)) &&
            (l.shouldLogRequestedPlayingForScrub &&
              e !== 'paused' &&
              e !== 'ended' &&
              I(a, b),
            G({ eventType: 'scrubbed', prevState: a, state: b }),
            (l.isLoggingScrubbingSequence = !1),
            (l.shouldLogRequestedPlayingForScrub = !1),
            f !== 'paused' && f !== 'ended' && (l.canLogPlayingEvent = !0));
          return H;
        } else return H;
      }
      function P(a, b, c) {
        if (
          a.controlledState.playbackState !== b.controlledState.playbackState &&
          b.controlledState.playbackState === 'ended' &&
          l.canLogPausedOrFinishedPlaying
        ) {
          G({ eventType: 'finished_playing', prevState: a, state: b });
          l.canLogPausedOrFinishedPlaying = !1;
          return H;
        } else return H;
      }
      function Q(a, b, c) {
        if (
          (c.type === 'controller_pause_requested' ||
            (c.type === 'dom_event_pause' && !l.shouldIgnoreDomPause)) &&
          a.controlledState.playbackState !== b.controlledState.playbackState
        ) {
          J(a, b);
          return H;
        } else return H;
      }
      function R(a, b, d) {
        var e = b.controlledState.playbackState;
        if (e !== 'paused' && e !== 'ended') {
          c('gkx')('1469813') &&
          d.type === 'implementation_video_node_unmounted'
            ? J(a, a, { debug_reason: 'unloaded' })
            : (d.type === 'implementation_unmounted' ||
                d.type === 'implementation_engine_destroy_requested') &&
              J(a, b, { debug_reason: 'unloaded' });
          return H;
        } else return H;
      }
      function S(a, b, c) {
        if (c.type === 'implementation_engine_representation_blocked') {
          c = c.payload.blockedRepresentationID;
          G({
            eventType: 'video_playback_fallback',
            logDataOverrides: { representation_id: c },
            prevState: a,
            state: b,
          });
        }
        return H;
      }
      function T(a, b, e) {
        e = b.controlledState.muted;
        var f = b.controlledState.volume,
          g = a.controlledState.muted,
          h = a.controlledState.volume;
        e = d('VideoPlayerMutedStateChange').getVideoPlayerMutedStateChange({
          currMuted: e,
          currVolume: f,
          prevMuted: g,
          prevVolume: h,
        });
        g = { current_volume: Math.round(f * 100) };
        switch (e) {
          case 'muted':
            G({
              eventType: 'muted',
              logDataOverrides: g,
              prevState: a,
              state: b,
            });
            return H;
          case 'unmuted':
            G({
              eventType: 'unmuted',
              logDataOverrides: g,
              prevState: a,
              state: b,
            });
            return H;
          case null:
            if (h < f) {
              G({
                eventType: 'volume_increase',
                logDataOverrides: g,
                prevState: a,
                state: b,
              });
              return H;
            } else if (h > f) {
              G({
                eventType: 'volume_decrease',
                logDataOverrides: g,
                prevState: a,
                state: b,
              });
              return H;
            } else return H;
          default:
            e;
            c('recoverableViolation')(
              'Unexpected mutedStateChange "' + e + '"',
              'comet_video_player',
            );
            return H;
        }
      }
      function U(a, b, c) {
        c = b.uncontrolledState.videoRepresentationID;
        var d = l.lastTrackedRepresentation,
          e = b.controlledState.playbackState,
          f = b.controlledState.seeking;
        if (!f && e !== 'paused' && e !== 'ended' && d != null && d !== c) {
          G({
            eventType: 'representation_ended',
            logDataOverrides: {
              next_representation_id: c,
              representation_id: d,
            },
            prevState: a,
            state: b,
          });
          l.lastTrackedRepresentation = c;
          s('quality_change');
          return H;
        } else if (d == null && d !== c) {
          l.lastTrackedRepresentation = c;
          return H;
        } else return H;
      }
      function V(a, b) {
        var d = a.controlledState.error;
        return {
          currentVideo: {
            audioStreamId: a.uncontrolledState.audioRepresentationID,
            dashAudioFormat: void 0,
            hasHD: void 0,
            hasRateLimit: void 0,
            hasSubtitles: a.controlledState.captionsLoaded,
            isDrm: Boolean(e.coreVideoPlayerMetaData.graphQLVideoDRMInfo),
            isHD: void 0,
            isLiveStream: e.coreVideoPlayerMetaData.isLiveStreaming,
            isRateLimited: void 0,
            liveManifestUrl: void 0,
            projection: void 0,
            resourceUrl: void 0,
            streamId: a.uncontrolledState.videoRepresentationID,
            streamType: a.controlledState.streamingFormat,
            tagHD: void 0,
            tagSD: void 0,
            videoID: e.coreVideoPlayerMetaData.videoFBID,
          },
          player: {
            canPlayType: c('mapObject')(c('VideoMimeTypes'), m),
            dimensions: e.dimensions
              ? { height: e.dimensions.height, width: e.dimensions.width }
              : null,
            droppedFrames: a.uncontrolledState.videoElementDroppedFrameCount,
            initializationTime: void 0,
            initializationTimestamp: void 0,
            inPlayStallCount: void 0,
            inPlayStallTime: void 0,
            interruptCount: void 0,
            interruptTime: void 0,
            lastError: d,
            loggedError: l.lastLoggedError,
            stack: d == null ? void 0 : d.stack,
            stallCount: l.stallCount,
            stallTime: l.stallDuration,
            state: C(a),
            totalFrames: a.uncontrolledState.videoElementTotalFrameCount,
            version: a.playerVersion,
            videoSource: void 0,
            viewabilityPercentage: a.uncontrolledState.viewabilityPercentage,
          },
          playerStateMachine: { action: b, state: a },
        };
      }
      function W(a, b, e) {
        var f = b.controlledState.error;
        if (f != null && f !== l.lastLoggedError && f.errorCode !== '410') {
          var g = f.errorDescription,
            h = f.errorName,
            i = f.errorType,
            j = f.url,
            k = f.errorCode == null || f.errorCode === '' ? h : f.errorCode;
          e = V(b, e);
          G({
            eventType: 'error',
            logDataOverrides: babelHelpers['extends'](
              {},
              c('gkx')('1565232') ? E() : null,
              {
                error: h,
                error_code: k,
                error_description: g,
                error_domain: h,
                error_type:
                  (k = i) != null
                    ? k
                    : d(
                        'VideoPlayerImplementationErrorNormalization',
                      ).getErrorTypeFromErrorName(h),
                error_user_info: JSON.stringify(e),
                resource_url: j,
              },
            ),
            prevState: a,
            state: b,
          });
          l.lastLoggedError = f;
        }
        return H;
      }
      function X(a, b) {
        var c = l.errorRecoveryAttemptState.currentRecoverableError;
        if (c != null) {
          var d = c.errorCode,
            e = c.errorDescription,
            f = c.errorName,
            g = c.errorType;
          c = c.url;
          l.errorRecoveryAttemptState.eventsLogged++;
          l.errorRecoveryAttemptState.repeatCount = 0;
          G({
            eventType: 'error_recovery_attempt',
            logDataOverrides: {
              error: f,
              error_code: d,
              error_description: e,
              error_domain: f,
              error_type: g,
              resource_url: c,
            },
            prevState: a,
            state: b,
          });
        }
        return H;
      }
      function Y(a, b, d) {
        if (
          d.type === 'error_recovery_attempt' &&
          l.errorRecoveryAttemptState.eventsLogged < k
        ) {
          var e = l.errorRecoveryAttemptState.currentRecoverableError;
          d = d.payload.recoverableError;
          if (
            c('gkx')('1541') &&
            d != null &&
            d.errorName === 'OZ_NETWORK' &&
            !c('NetworkStatus').isOnline()
          )
            return H;
          l.errorRecoveryAttemptState.currentRecoverableError = d;
          e == null ||
          e.errorName !== d.errorName ||
          e.errorCode !== d.errorCode
            ? X(a, b)
            : (l.errorRecoveryAttemptState.repeatCount++,
              l.errorRecoveryAttemptState.repeatCount > j && X(a, b));
        }
        return H;
      }
      function Z(a, b, c) {
        if (!n) return H;
        var d = b.uncontrolledState.videoElementPlaybackRate;
        c.type === 'dom_event_ratechange' &&
          l.lastLoggedPlaybackSpeed != null &&
          d !== 0 &&
          d !== l.lastLoggedPlaybackSpeed &&
          G({ eventType: 'playback_speed_changed', prevState: a, state: b });
        return H;
      }
      function aa(a, b, c) {
        c = b.controlledState.playbackState;
        c === 'paused' || c === 'ended'
          ? (l.nextHeartbeatTime = null)
          : c !== 'stalling' &&
            l.nextHeartbeatTime == null &&
            (l.nextHeartbeatTime = Date.now() + h);
        var d = l.nextHeartbeatTime;
        if (d != null) {
          var e = Date.now();
          e >= d &&
            (c !== 'stalling' &&
              G({ eventType: 'heart_beat', prevState: a, state: b }),
            (l.nextHeartbeatTime = e + h));
        }
        return H;
      }
      function ba(a, b, c) {
        if (c.type === 'implementation_mounted') {
          G({ eventType: 'player_loaded', prevState: a, state: b });
          return H;
        } else return H;
      }
      function $(a, b, c) {
        G({
          eventType: c ? 'entered_fs' : 'exited_fs',
          prevState: a,
          state: b,
        });
      }
      function ca(a, b, c) {
        var d = e.coreVideoPlayerMetaData.playerFormat;
        (f.coreVideoPlayerMetaData.playerFormat !== d ||
          c.type === 'controller_override_player_format') &&
          G({ eventType: 'player_format_changed', prevState: a, state: b });
        return H;
      }
      function da(a, b, c) {
        if (c.type === 'dom_event_timeupdate') {
          c = l.nextPlayedThreeSecondsPlayheadPosition;
          if (c != null) {
            var d = b.uncontrolledState;
            d = d.videoElementPlayheadPosition;
            d != null &&
              c <= d &&
              (G({
                eventType: 'played_for_three_seconds',
                prevState: a,
                state: b,
              }),
              (l.nextPlayedThreeSecondsPlayheadPosition = null));
          }
        }
        return H;
      }
      function ea(a, b, c) {
        if (c.type !== 'notify_fullscreen_changed') return H;
        c = l.lastLoggedFullscreenState;
        var d = b.uncontrolledState.isFullscreen;
        if (c !== !0 && d === !0) {
          $(a, b, d);
          return H;
        } else if (c === !0 && d === !1) {
          $(a, b, d);
          return H;
        } else return H;
      }
      function fa(a, b, d) {
        d = e.coreVideoPlayerMetaData.adClientToken;
        if ((d == null || d === '') && c('gkx')('1401747')) return H;
        d = b.controlledState.playbackState;
        var f = l.lastLoggedViewabilityPercentage,
          g = b.uncontrolledState.viewabilityPercentage;
        if (d !== 'paused' && d !== 'ended' && f != null && f !== g) {
          G({ eventType: 'viewability_changed', prevState: a, state: b });
          return H;
        } else return H;
      }
      function ga(a, b, c) {
        if (c.type === 'controller_set_captions_visible_requested') {
          G({ eventType: 'caption_change', prevState: a, state: b });
          return H;
        } else return H;
      }
      function ha(a) {
        f = e;
        if (a.type === 'notify_logging_metadata_change') {
          a = a.payload.loggingMetaData;
          e = a;
        }
      }
      return {
        addDebugSubscriber: function (a) {
          return r(a);
        },
        consumeLoggerEvents: function () {
          var a = g.splice(0);
          return a;
        },
        getLoggerState: function () {
          return l;
        },
        handleStateMachine: function (a, b, c) {
          ha(c);
          var d = b.controlledState.playbackState;
          w(a, b, c);
          v(a, b);
          var e = [
            ca,
            ea,
            fa,
            L,
            M,
            O,
            N,
            P,
            Q,
            S,
            T,
            R,
            ba,
            ga,
            U,
            W,
            Y,
            aa,
            Z,
            da,
          ];
          e.forEach(function (d) {
            d(a, b, c);
          });
          (d === 'paused' || d === 'ended') && (l.canLogPlayingEvent = !0);
          c.type === 'controller_pause_requested' &&
            ((l.hasPausedOnce = !0), (l.shouldIgnoreDomPause = !0));
          c.type === 'controller_play_requested' &&
            ((l.hasPausedOnce = !0), (l.shouldIgnoreDomPlay = !0));
          c.type === 'dom_event_pause' && (l.shouldIgnoreDomPause = !1);
          c.type === 'dom_event_play' &&
            ((l.shouldIgnoreDomPlay = !1),
            (l.lastLoggedViewabilityPercentage =
              b.uncontrolledState.viewabilityPercentage));
        },
        logVPLEvent: function (a) {
          var b = a.eventType,
            c = a.logDataOverrides;
          a = a.state;
          G({ eventType: b, logDataOverrides: c, prevState: a, state: a });
        },
        setAdditionalLogData: function (a, c) {
          b.set(a, c);
        },
      };
    }
    g.HEARTBEAT_INTERVAL = h;
    g.createVideoPlayerImplementationStateMachineLogger = a;
  },
  98,
);
__d(
  'convertToViewabilityPercentage',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (a >= 0.99) return 100;
      else if (a >= 0.75) return 75;
      else if (a >= 0.5) return 50;
      else if (a >= 0.25) return 25;
      else if (a >= 0) return 0;
      else return -2;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'VideoPlayerImplementationStateMachineStateUncontrolledState',
  ['NetworkStatus', 'convertToViewabilityPercentage', 'gkx', 'performance'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.engineExtrasAPI,
        d = a.fullscreenControllerRef,
        e = a.videoElementAPI,
        f = a.videoLiveTraceRef;
      a = a.videoPlayerPassiveViewabilityInfoRef;
      f = f.current;
      var g = Date.now(),
        h =
          typeof c('performance').now === 'function'
            ? c('performance').now()
            : 0;
      if (e == null) {
        var i;
        return {
          audioRepresentationID: void 0,
          clockTimestamp: g,
          currentPlayingVideoQuality: void 0,
          estimatedBandwidth: void 0,
          isDocumentHidden: document.hidden,
          isFBIsLiveTemplated: void 0,
          isFBMS: void 0,
          isFBWasLive: void 0,
          isFullscreen: d.current ? d.current.getIsFullscreen() : void 0,
          isPredictiveDash: void 0,
          liveTraceContext: f
            ? (i = f.getLiveTraceContext()) != null
              ? i
              : void 0
            : void 0,
          manifestIdentifier: void 0,
          mpdValidationErrors: void 0,
          networkConnected: void 0,
          perfTimestamp: h,
          videoElementDebugCurrentSrc: void 0,
          videoElementDebugSrc: void 0,
          videoElementDroppedFrameCount: void 0,
          videoElementDuration: void 0,
          videoElementEnded: void 0,
          videoElementError: void 0,
          videoElementLastBufferEndPosition: void 0,
          videoElementMuted: void 0,
          videoElementNetworkState: void 0,
          videoElementPaused: void 0,
          videoElementPlaybackRate: void 0,
          videoElementPlayheadPosition: void 0,
          videoElementReadyState: void 0,
          videoElementTotalFrameCount: void 0,
          videoElementVolume: void 0,
          videoRepresentationID: void 0,
          viewabilityPercentage: void 0,
        };
      }
      i = e.getPlayheadPosition();
      a = a && a.current;
      a = a && a.getCurrent();
      return {
        audioRepresentationID: b ? b.getAudioRepresentationIDAtTime(i) : void 0,
        clockTimestamp: g,
        currentPlayingVideoQuality: b
          ? b.getCurrentPlayingVideoQuality()
          : void 0,
        estimatedBandwidth: b ? b.getEstimatedBandwidth() : void 0,
        isDocumentHidden: document.hidden,
        isFBIsLiveTemplated: b ? b.isFBIsLiveTemplated() : void 0,
        isFBMS: b ? b.isFBMS() : void 0,
        isFBWasLive: b ? b.isFBWasLive() : void 0,
        isFullscreen: d.current ? d.current.getIsFullscreen() : void 0,
        isPredictiveDash: b ? b.isPredictiveDash() : void 0,
        liveTraceContext: f
          ? (g = f.getLiveTraceContext()) != null
            ? g
            : void 0
          : void 0,
        manifestIdentifier: b ? b.getManifestIdentifier() : void 0,
        mpdValidationErrors: b ? b.getMpdValidationErrors() : void 0,
        networkConnected: c('NetworkStatus').isOnline(),
        perfTimestamp: h,
        videoElementDebugCurrentSrc: c('gkx')('1526990')
          ? (d = e.getUnderlyingVideoElement()) == null
            ? void 0
            : d.currentSrc
          : void 0,
        videoElementDebugSrc: c('gkx')('1526990')
          ? (f = e.getUnderlyingVideoElement()) == null
            ? void 0
            : f.src
          : void 0,
        videoElementDroppedFrameCount: e.getDroppedFrameCount(),
        videoElementDuration: e.getDuration(),
        videoElementEnded: e.getEnded(),
        videoElementError: e.getError(),
        videoElementLastBufferEndPosition: e.getLastBufferEndPosition(),
        videoElementMuted: e.getMuted(),
        videoElementNetworkState: e.getNetworkState(),
        videoElementPaused: e.getPaused(),
        videoElementPlaybackRate: e.getPlaybackRate(),
        videoElementPlayheadPosition: i,
        videoElementReadyState: e.getReadyState(),
        videoElementTotalFrameCount: e.getTotalFrameCount(),
        videoElementVolume: e.getVolume(),
        videoRepresentationID: b ? b.getVideoRepresentationIDAtTime(i) : void 0,
        viewabilityPercentage: a
          ? c('convertToViewabilityPercentage')(a.visiblePercentage)
          : void 0,
      };
    }
    g.createVideoPlayerImplementationStateMachineStateUncontrolledState = a;
  },
  98,
);
__d(
  'VideoPlayerImplementationStateMachineState',
  ['VideoPlayerImplementationStateMachineStateUncontrolledState'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.alwaysShowCaptions,
        c = a.areCaptionsAutogenerated,
        e = a.captionDisplayStyle,
        f = a.dimensions,
        g = a.isAbrEnabled,
        h = a.playerImplementationName,
        i = a.playerVersion;
      a = a.streamingFormat;
      var j = !0,
        k = 1,
        l = d(
          'VideoPlayerImplementationStateMachineStateUncontrolledState',
        ).createVideoPlayerImplementationStateMachineStateUncontrolledState({
          engineExtrasAPI: null,
          fullscreenControllerRef: { current: null },
          videoElementAPI: null,
          videoLiveTraceRef: { current: null },
          videoPlayerPassiveViewabilityInfoRef: { current: null },
        });
      return {
        controlledState: {
          activeCaptions: null,
          activeEmsgBoxes: [],
          allEmsgBoxes: new Map(),
          availableQualities: [],
          bufferingDetected: !1,
          captionDisplayStyle: e,
          captionFormat: null,
          captionsLoaded: !1,
          captionsLocale: null,
          captionsVisible: b,
          dimensions: f,
          emsgObserverTokens: new Set(),
          error: null,
          hasPlayEverBeenRequested: !1,
          hostCallPlayIDLast: null,
          hostCallQueue: [],
          implementationSeekSourcePosition: null,
          inbandCaptionsAutogenerated: c,
          isDesktopPictureInPicture: !1,
          isLiveRewindActive: !1,
          lastBufferingType: null,
          lastMuteReason: null,
          lastPausedTimeMs: 0,
          lastPauseReason: null,
          lastPlayedTimeMs: 0,
          lastPlayReason: null,
          latencyLevel: 'normal',
          loopCount: 0,
          loopCurrent: 0,
          muted: j,
          overriddenPlayerFormat: 'unknown',
          playbackState: 'paused',
          playerFormat: 'unknown',
          scrubbing: !1,
          seekableRanges: null,
          seeking: !1,
          seekTargetPosition: null,
          selectedVideoQuality: 'notselected',
          streamEnded: !1,
          streamingFormat: a,
          streamInterrupted: !1,
          targetAudioQuality: '',
          targetPlaybackRate: 1,
          targetVideoQuality: '',
          videoProjection: null,
          volume: k,
          waitingForDomPlaying: !1,
          waitingForDomTimeUpdateAfterSeeked: !1,
          watchTimeMs: 0,
        },
        isAbrEnabled: g,
        playerImplementationName: h,
        playerVersion: i,
        uncontrolledState: l,
      };
    }
    g.createVideoPlayerImplementationStateMachineInitialState = a;
  },
  98,
);
__d(
  'VideoPlayerImplementationEngineAPI',
  [
    'CometEventListener',
    'CometVideoPictureInPictureManagerContext',
    'CurrentUser',
    'ErrorMetadata',
    'FBLogger',
    'MediaPlaybackCompoundEventStateMachineLogger',
    'NetworkStatus',
    'PlaybackSpeedExperiments',
    'RunComet',
    'SubscriptionsHandler',
    'VideoLiveTrace',
    'VideoPlayerBanzaiLogFlusher',
    'VideoPlayerCaptionsController',
    'VideoPlayerImplementationErrors',
    'VideoPlayerImplementationReactVideoElement.react',
    'VideoPlayerImplementationStateMachine',
    'VideoPlayerImplementationStateMachineHostCallQueue',
    'VideoPlayerImplementationStateMachineLogger',
    'VideoPlayerImplementationStateMachineState',
    'VideoPlayerImplementationStateMachineStateUncontrolledState',
    'VideoPlayerODS',
    'clearTimeout',
    'cr:4081',
    'cr:506',
    'cr:683059',
    'deepEquals',
    'err',
    'gkx',
    'killswitch',
    'qex',
    'react',
    'recoverableViolation',
    'removeFromArray',
    'setTimeout',
    'unrecoverableViolation',
    'useConcurrentAutoplayManagementAPI',
    'useSEOLoggedOutWebCrawler',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    f = d('react');
    var i = f.useEffect,
      j = f.useRef,
      k = f.useState,
      l = (f = c('qex')._('1653')) != null ? f : 0,
      m = (function () {
        function a(a) {
          var b = a.pauseRequestCallbacks,
            c = a.playRequestCallbacks,
            d = a.scrubBeginRequestCallbacks;
          a = a.scrubEndRequestCallbacks;
          this.$1 = c;
          this.$2 = b;
          this.$3 = d;
          this.$4 = a;
        }
        var b = a.prototype;
        b.playRequest = function (a) {
          var b = this;
          this.$1.push(a);
          return function () {
            c('removeFromArray')(b.$1, a);
          };
        };
        b.pauseRequest = function (a) {
          var b = this;
          this.$2.push(a);
          return function () {
            c('removeFromArray')(b.$2, a);
          };
        };
        b.scrubBeginRequest = function (a) {
          var b = this;
          this.$3.push(a);
          return function () {
            c('removeFromArray')(b.$3, a);
          };
        };
        b.scrubEndRequest = function (a) {
          var b = this;
          this.$4.push(a);
          return function () {
            c('removeFromArray')(b.$4, a);
          };
        };
        return a;
      })();
    function n(a) {
      var b = a.concurrentAutoplayManagementAPI,
        d = a.debugAPI,
        e = a.exitPictureInPictureImpl,
        f = a.fullscreenControllerRef,
        g = a.getCurrentExposedState,
        h = a.getCurrentIsDesktopPictureInPicture,
        i = a.getCurrentIsFullscreen,
        j = a.getCurrentLiveRewindPlayheadPosition,
        k = a.getCurrentPlayheadPosition,
        l = a.internal_getCurrentStateMachineState,
        n = a.loggerAPI,
        o = a.overridePlayerFormatImpl,
        p = a.pauseImpl,
        q = a.playImpl,
        r = a.registerEmsgObserverImpl,
        s = a.requestPictureInPictureImpl,
        t = a.scrubBeginImpl,
        u = a.scrubEndImpl,
        v = a.seekImpl,
        w = a.selectVideoQualityImpl,
        x = a.setCaptionsDisplayStyleImpl,
        y = a.setCaptionsUrlImpl,
        z = a.setCaptionsVisibleImpl,
        A = a.setIsLiveRewindActiveImpl,
        B = a.setLatencyLevelImpl,
        C = a.setMutedImpl,
        D = a.setPictureInPictureStateImpl,
        E = a.setPlaybackRateImpl,
        F = a.setVolumeImpl,
        G = a.subscribers,
        H = a.unregisterEmsgObserverImpl,
        I = a.videoElementAPIRef,
        J = new Set(),
        K = !1,
        L = null,
        M = [],
        N = [],
        O = [],
        P = [],
        Q = new m({
          pauseRequestCallbacks: N,
          playRequestCallbacks: M,
          scrubBeginRequestCallbacks: O,
          scrubEndRequestCallbacks: P,
        }),
        R = {
          freeze: function () {
            if (!g().paused)
              throw c('unrecoverableViolation')(
                'Video player must be paused before the controller freeze',
                'comet_video_player',
              );
            var a = {};
            try {
              var b = !1;
              J.size === 0 &&
                ((b = !0),
                (L = {
                  exposedState: g(),
                  isFullscreen: i(),
                  liveRewindPlayheadPosition: j(),
                  playheadPosition: k(),
                  stateMachineState: l(),
                }));
              J.add(a);
              b &&
                ((K = !0),
                G.forEach(function (a) {
                  a();
                }));
            } finally {
              K = !1;
            }
            return a;
          },
          isFrozen: function () {
            return L != null;
          },
          unfreeze: function (a) {
            if (!J.has(a))
              throw c('unrecoverableViolation')(
                'Video player controller unfreeze token not found',
                'comet_video_player',
              );
            J['delete'](a);
            J.size === 0 &&
              ((L = null),
              G.forEach(function (a) {
                a();
              }));
          },
        },
        S = babelHelpers['extends']({}, b, R, n, {
          debugAPI: d,
          exitPictureInPicture: function () {
            if (R.isFrozen()) return;
            e();
          },
          getCurrentState: function () {
            return L != null ? L.exposedState : g();
          },
          getIsDesktopPictureInPicture: function () {
            return L != null ? L.isFullscreen : h();
          },
          getIsFullscreen: function () {
            return L != null ? L.isFullscreen : i();
          },
          getLiveRewindPlayheadPosition: function () {
            return L != null ? L.liveRewindPlayheadPosition : j();
          },
          getPlayheadPosition: function () {
            return L != null ? L.playheadPosition : k();
          },
          internal_getStateMachineState: function () {
            return L != null ? L.stateMachineState : l();
          },
          internal_getVideoElement: function () {
            var a = I.current;
            if (a != null) {
              a = a.getUnderlyingVideoElement();
              return a;
            }
            return null;
          },
          observeOn: function () {
            return Q;
          },
          overridePlayerFormat: function (a) {
            if (R.isFrozen()) return;
            o(a);
          },
          pause: function (a) {
            if (R.isFrozen()) return;
            N.forEach(function (b) {
              return b(a);
            });
            p(a);
          },
          play: function (a) {
            if (R.isFrozen()) return;
            M.forEach(function (b) {
              return b(a);
            });
            q(a);
          },
          registerEmsgObserver: function () {
            var a = {};
            r(a);
            return a;
          },
          requestPictureInPicture: function () {
            if (R.isFrozen()) return;
            s();
          },
          requestSetIsFullscreen: function (a) {
            if (R.isFrozen()) return;
            var b = f.current;
            if (b) {
              var c = S.internal_getVideoElement();
              b.requestSetIsFullscreen(a, c);
            }
          },
          scrollIntoView: function (a) {
            var b = S.internal_getVideoElement();
            b && b.scrollIntoView(a);
          },
          scrubBegin: function () {
            if (R.isFrozen()) return;
            O.forEach(function (a) {
              return a();
            });
            t();
          },
          scrubEnd: function (a) {
            if (R.isFrozen()) return;
            P.forEach(function (b) {
              return b(a);
            });
            u(a);
          },
          seek: function (a) {
            if (R.isFrozen()) return;
            v(a);
          },
          selectVideoQuality: function (a) {
            if (R.isFrozen()) return;
            w(a);
          },
          setCaptionsDisplayStyle: function (a) {
            if (R.isFrozen()) return;
            x(a);
          },
          setCaptionsUrl: function (a) {
            if (R.isFrozen()) return;
            y(a);
          },
          setCaptionsVisible: function (a) {
            if (R.isFrozen()) return;
            z(a);
          },
          setIsLiveRewindActive: function (a) {
            if (R.isFrozen()) return;
            A(a);
          },
          setLatencyLevel: function (a) {
            if (R.isFrozen()) return;
            B(a);
          },
          setMuted: function (a, b) {
            if (R.isFrozen()) return;
            C(a, b);
          },
          setPictureInPictureState: function (a) {
            if (R.isFrozen()) return;
            D(a);
          },
          setPlaybackRate: function (a) {
            if (R.isFrozen()) return;
            E(a);
          },
          setVolume: function (a) {
            if (R.isFrozen()) return;
            F(a);
          },
          subscribe: function (a) {
            var b = function () {
                if (R.isFrozen() && !K) return;
                a();
              },
              d = f.current,
              e = d ? d.subscribe(b) : null;
            G.push(b);
            return {
              remove: function () {
                e && e.remove(), c('removeFromArray')(G, b);
              },
            };
          },
          unregisterEmsgObserver: function (a) {
            H(a);
          },
          videoElementAPIRef: I,
        });
      return S;
    }
    function o(a) {
      var b = a.concurrentAutoplayManagementAPI,
        d = a.createExposedState,
        e = a.debugAPI,
        f = a.fullscreenControllerRef,
        g = a.logger,
        h = a.machine,
        i = a.subscribers,
        j = a.videoElementAPIRef;
      a = {
        logVPLEvent_DO_NOT_USE: function (a, b) {
          g.logVPLEvent({
            eventType: a,
            logDataOverrides: b,
            state: h.getCurrentState(),
          });
        },
        setAdditionalLogData: function (a, b) {
          g.setAdditionalLogData(a, b);
        },
      };
      return n({
        concurrentAutoplayManagementAPI: b,
        debugAPI: e,
        exitPictureInPictureImpl: function () {
          h.dispatch({ type: 'controller_picture_in_picture_exit_requested' });
        },
        fullscreenControllerRef: f,
        getCurrentExposedState: function () {
          return d(h.getCurrentState());
        },
        getCurrentIsDesktopPictureInPicture: function () {
          var a;
          return (a =
            h.getCurrentState().controlledState.isDesktopPictureInPicture) !=
            null
            ? a
            : !1;
        },
        getCurrentIsFullscreen: function () {
          var a = f.current;
          return a ? a.getIsFullscreen() : !1;
        },
        getCurrentLiveRewindPlayheadPosition: function () {
          var a = h.getCurrentState();
          a = a.controlledState;
          var b = a.isLiveRewindActive,
            c = a.seekableRanges;
          a = a.seekTargetPosition;
          if (!b || a == null) return null;
          c = (b = c == null ? void 0 : c.end(0)) != null ? b : 0;
          return a - c;
        },
        getCurrentPlayheadPosition: function () {
          var a,
            b = 0;
          return (a =
            (a = c('gkx')('3464')
              ? (a = j.current) == null
                ? void 0
                : a.getPlayheadPosition()
              : void 0) != null
              ? a
              : h.getCurrentState().uncontrolledState
                  .videoElementPlayheadPosition) != null
            ? a
            : b;
        },
        internal_getCurrentStateMachineState: function () {
          return h.getCurrentState();
        },
        loggerAPI: a,
        overridePlayerFormatImpl: function (a) {
          h.dispatch({
            payload: { playerFormat: a },
            type: 'controller_override_player_format',
          });
        },
        pauseImpl: function (a) {
          h.dispatch({
            payload: { reason: a },
            type: 'controller_pause_requested',
          });
        },
        playImpl: function (a) {
          h.dispatch({
            payload: { reason: a },
            type: 'controller_play_requested',
          });
        },
        registerEmsgObserverImpl: function (a) {
          h.dispatch({ payload: { token: a }, type: 'register_emsg_observer' });
        },
        requestPictureInPictureImpl: function () {
          h.dispatch({ type: 'controller_picture_in_picture_requested' });
        },
        scrubBeginImpl: function () {
          h.dispatch({ type: 'controller_scrub_begin_requested' });
        },
        scrubEndImpl: function (a) {
          h.dispatch({
            payload: { seekTargetPosition: a },
            type: 'controller_scrub_end_requested',
          });
        },
        seekImpl: function (a) {
          h.dispatch({
            payload: { seekTargetPosition: a },
            type: 'controller_seek_requested',
          });
        },
        selectVideoQualityImpl: function (a) {
          h.dispatch({
            payload: { selectedVideoQuality: a },
            type: 'controller_quality_requested',
          });
        },
        setCaptionsDisplayStyleImpl: function (a) {
          h.dispatch({
            payload: { captionDisplayStyle: a },
            type: 'controller_set_caption_display_style_requested',
          });
        },
        setCaptionsUrlImpl: function (a) {
          h.dispatch({
            payload: { captionsUrl: a },
            type: 'controller_set_captions_url_requested',
          });
        },
        setCaptionsVisibleImpl: function (a) {
          h.dispatch({
            payload: { captionsVisible: a },
            type: 'controller_set_captions_visible_requested',
          });
        },
        setIsLiveRewindActiveImpl: function (a) {
          h.dispatch({
            payload: { isLiveRewindActive: a },
            type: 'controller_set_is_live_rewind_active_requested',
          });
        },
        setLatencyLevelImpl: function (a) {
          h.dispatch({
            payload: { latencyLevel: a },
            type: 'controller_set_latency_level_requested',
          });
        },
        setMutedImpl: function (a, b) {
          h.dispatch({
            payload: { muted: a, reason: b },
            type: 'controller_muted_requested',
          });
        },
        setPictureInPictureStateImpl: function (a) {
          h.dispatch({
            payload: { isInPictureInPictureMode: a },
            type: 'controller_set_picture_in_picture_state_requested',
          });
        },
        setPlaybackRateImpl: function (a) {
          h.dispatch({
            payload: { playbackRate: a },
            type: 'controller_set_playback_rate',
          });
        },
        setVolumeImpl: function (a) {
          h.dispatch({
            payload: { volume: a },
            type: 'controller_volume_requested',
          });
        },
        subscribers: i,
        unregisterEmsgObserverImpl: function (a) {
          h.dispatch({
            payload: { token: a },
            type: 'unregister_emsg_observer',
          });
        },
        videoElementAPIRef: j,
      });
    }
    function p(a) {
      a = a.current;
      if (a == null)
        throw c('unrecoverableViolation')(
          'Attempted to access VideoElementAPI while it is not available.',
          'comet_video_player',
        );
      return a;
    }
    function q(a) {
      var e = a.alwaysShowCaptions,
        f = a.areCaptionsAutogenerated,
        g = a.captionDisplayStyle,
        h = a.captionsControllerRef,
        i = a.debugLogId,
        j = a.dimensions,
        k = a.engineExtrasAPI,
        m = a.engineMetadata,
        n = a.fullscreenControllerRef,
        o = a.handleFatalError,
        q = a.handleStateMachine,
        s = a.videoElementAPIRef,
        t = a.videoLiveTraceRef,
        u = a.videoPlayerPassiveViewabilityInfoRef;
      function v(a) {
        d(
          'VideoPlayerImplementationStateMachineHostCallQueue',
        ).applyOrQueueHostCall({
          engineExtrasAPI: k,
          hostCall: a,
          machine: y,
          videoElementAPI: s.current,
        });
      }
      var w = null,
        x = null;
      a = [
        function (a, c, d) {
          b('cr:683059') &&
          d.type === 'implementation_host_call_applied' &&
          d.payload.hostCall.type === 'host_call_play' &&
          c.controlledState.lastPlayReason === 'autoplay_initiated'
            ? b('cr:683059').addFirstMarkerPoint('firstVideoAutoplayStalling')
            : b('cr:683059') &&
              c.controlledState.playbackState !==
                a.controlledState.playbackState &&
              c.controlledState.playbackState === 'playing' &&
              c.controlledState.lastPlayReason === 'autoplay_initiated' &&
              b('cr:683059').addFirstMarkerPoint('firstVideoAutoplayPlaying');
          return !0;
        },
        function (a, b, c) {
          q(a, b, c);
          return !0;
        },
        function (a, b, e) {
          if (
            c('gkx')('1633455') &&
            ((a.controlledState.streamInterrupted === !1 &&
              b.controlledState.streamInterrupted === !0) ||
              (a.controlledState.streamInterrupted === !0 &&
                b.controlledState.streamInterrupted === !1))
          ) {
            a = b.controlledState;
            b = a.bufferingDetected;
            var f = a.lastBufferingType,
              g = a.streamInterrupted;
            a = a.targetPlaybackRate;
            g
              ? (b &&
                  y.dispatch({
                    payload: { domEventPerfTimestamp: null },
                    type: 'buffering_end_requested',
                  }),
                v({
                  payload: {
                    hostCallID: d(
                      'VideoPlayerImplementationStateMachineHostCallQueue',
                    ).makeHostCallID(),
                    playbackRate: 0,
                    reason: e.type,
                  },
                  type: 'host_call_set_playback_rate',
                }))
              : (v({
                  payload: {
                    hostCallID: d(
                      'VideoPlayerImplementationStateMachineHostCallQueue',
                    ).makeHostCallID(),
                    playbackRate: a,
                    reason: e.type,
                  },
                  type: 'host_call_set_playback_rate',
                }),
                b &&
                  y.dispatch({
                    payload: { bufferingType: f || 'in_play' },
                    type: 'buffering_begin_requested',
                  }));
          }
          return !0;
        },
        function (a, b, e) {
          if (
            (a.controlledState.bufferingDetected === !1 &&
              b.controlledState.bufferingDetected === !0) ||
            (a.controlledState.bufferingDetected === !0 &&
              b.controlledState.bufferingDetected === !1)
          ) {
            w !== null && (c('clearTimeout')(w), (w = null));
            if (
              b.controlledState.bufferingDetected &&
              (!c('gkx')('1633455') || !b.controlledState.streamInterrupted)
            ) {
              e = function a() {
                w = null;
                if (c('gkx')('1849507') && !c('NetworkStatus').isOnline())
                  w = c('setTimeout')(a, g);
                else {
                  var e = d(
                    'VideoPlayerImplementationErrors',
                  ).createVideoPlayerBufferingErrorFromGenericError(
                    'BUFFERING_TIMEOUT',
                    c('err')(
                      'The video has been in a buffering state for over ' +
                        g +
                        ' ms.',
                    ),
                    'buffering_timeout',
                    f,
                    b.controlledState.isLiveRewindActive,
                  );
                  x && (x.log(), (x = null));
                  y.dispatch({
                    payload: { fatalError: e },
                    type: 'implementation_fatal_error',
                  });
                  e = k.getPerfLoggerProvider();
                  e == null
                    ? void 0
                    : e
                        .getOperationLogger('buffering_timeout')
                        .setType(f)
                        .setInitiator('engine_api')
                        .setLength(g)
                        .setResult('failed')
                        .log();
                }
              };
              var f =
                (a = b.controlledState.lastBufferingType) != null
                  ? a
                  : 'in_play';
              a = (a = c('qex')._('1654')) != null ? a : l;
              var g = f === 'in_play' ? a : l;
              g > 0 && (w = c('setTimeout')(e, g));
              a = k.getPerfLoggerProvider();
              x = a
                ? a
                    .getOperationLogger('buffering')
                    .setState('buffering')
                    .setType(f)
                    .start()
                : null;
            } else
              !b.controlledState.bufferingDetected &&
                x != null &&
                (x.log(), (x = null));
          }
          return !0;
        },
        function (a, b, d) {
          if (d.type !== 'implementation_engine_destroy_requested') return !0;
          w !== null && c('clearTimeout')(w);
          w = null;
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'implementation_engine_initialized') return !0;
          a = p(s);
          c = c.type;
          d(
            'VideoPlayerImplementationStateMachineHostCallQueue',
          ).flushHostCallQueue({
            engineExtrasAPI: k,
            machine: y,
            reason: c,
            state: b,
            videoElementAPI: a,
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'dom_event_ended') return !0;
          a = b.controlledState;
          ((a.loopCount > 0 && a.loopCurrent < a.loopCount) ||
            a.loopCount === -1) &&
            y.dispatch({
              payload: { reason: 'loop_initiated' },
              type: 'controller_play_requested',
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_pause_requested') return !0;
          a = b.controlledState.playbackState;
          if (a !== 'paused') return !1;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              reason: c.type,
            },
            type: 'host_call_pause',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_play_requested') return !0;
          a = b.controlledState.playbackState;
          if (a !== 'stalling') return !1;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              reason: c.type,
            },
            type: 'host_call_play',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_seek_requested') return !0;
          a = b.controlledState;
          b = a.seeking;
          a = a.seekTargetPosition;
          b &&
            a != null &&
            v({
              payload: {
                currentTime: a,
                hostCallID: d(
                  'VideoPlayerImplementationStateMachineHostCallQueue',
                ).makeHostCallID(),
                reason: c.type,
              },
              type: 'host_call_set_current_time',
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_muted_requested') return !0;
          a = b.controlledState.muted;
          if (a !== c.payload.muted) return !1;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              muted: a,
              reason: c.type,
            },
            type: 'host_call_set_muted',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_scrub_begin_requested') return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              playbackRate: 0,
              reason: c.type,
            },
            type: 'host_call_set_playback_rate',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_scrub_end_requested') return !0;
          a = b.controlledState;
          b = a.seeking;
          var e = a.seekTargetPosition;
          a = a.targetPlaybackRate;
          b && e != null
            ? (v({
                payload: {
                  hostCallID: d(
                    'VideoPlayerImplementationStateMachineHostCallQueue',
                  ).makeHostCallID(),
                  playbackRate: a,
                  reason: c.type + ':seek',
                },
                type: 'host_call_set_playback_rate',
              }),
              v({
                payload: {
                  currentTime: e,
                  hostCallID: d(
                    'VideoPlayerImplementationStateMachineHostCallQueue',
                  ).makeHostCallID(),
                  reason: c.type + ':seek',
                },
                type: 'host_call_set_current_time',
              }))
            : v({
                payload: {
                  hostCallID: d(
                    'VideoPlayerImplementationStateMachineHostCallQueue',
                  ).makeHostCallID(),
                  playbackRate: a,
                  reason: c.type + ':cancel',
                },
                type: 'host_call_set_playback_rate',
              });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'buffering_begin_requested') return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              playbackRate: 0,
              reason: c.type,
            },
            type: 'host_call_set_playback_rate',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_set_playback_rate') return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              playbackRate: c.payload.playbackRate,
              reason: c.type,
            },
            type: 'host_call_set_playback_rate',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'buffering_end_requested') return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              playbackRate: b.controlledState.targetPlaybackRate,
              reason: c.type,
            },
            type: 'host_call_set_playback_rate',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_volume_requested') return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              reason: c.type,
              volume: b.controlledState.volume,
            },
            type: 'host_call_set_volume',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_quality_requested') return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              reason: c.type,
              selectedVideoQuality: b.controlledState.selectedVideoQuality,
            },
            type: 'host_call_set_video_quality',
          });
          return !1;
        },
        function (a, b, c) {
          if (
            !(
              c.type === 'controller_set_latency_level_requested' ||
              c.type === 'implementation_set_latency_level_requested'
            )
          )
            return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              latencyLevel: c.payload.latencyLevel,
              reason: c.type,
            },
            type: 'host_call_set_latency_level',
          });
          return !1;
        },
        function (a, b, c) {
          if (
            !(c.type === 'dom_event_timeupdate' || c.type === 'captions_loaded')
          )
            return !0;
          c = h.current;
          var e = b.controlledState.captionsVisible,
            f = s.current;
          f = f ? f.getPlayheadPosition() : 0;
          if (
            d('PlaybackSpeedExperiments').enableCometPlaybackSpeedControl() &&
            b.controlledState.isLiveRewindActive
          ) {
            var g = b.controlledState.seekableRanges;
            g = g != null ? ((g = g.end(g.length() - 1)) != null ? g : 0) : 0;
            f >= g &&
              y.dispatch({
                payload: { isLiveRewindActive: !1 },
                type: 'controller_set_is_live_rewind_active_requested',
              });
          }
          if (
            !k.getRepresentationCaptionsExpectedFromManifest() &&
            c &&
            e &&
            b.controlledState.captionsLoaded
          ) {
            g = c.handleTimeUpdate(f);
            e = c.getCaptionFormat();
            b = a.controlledState.activeCaptions;
            c = a.controlledState.captionFormat;
            e !== c &&
              y.dispatch({
                payload: { captionFormat: e },
                type: 'controller_set_caption_format_requested',
              });
            r(b, g) &&
              y.dispatch({
                payload: { activeCaptions: g, captionsLocale: null },
                type: 'controller_set_active_captions_requested',
              });
          }
          a = t.current;
          a != null && a.onUpdateStatus({ position: f });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'cea608_bytes_received') return !0;
          a = h.current;
          if (a) {
            b = c.payload;
            c = b.timescale;
            b = b.videoBytes;
            a.handleCea608BytesReceived({ timescale: c, videoBytes: b });
          }
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_set_captions_url_requested') return !0;
          a = h.current;
          if (a) {
            b = c.payload.captionsUrl;
            a.updateCaptionsUrl(b);
          }
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_set_is_live_rewind_active_requested')
            return !0;
          k.setEnableLiveheadCatchup(!c.payload.isLiveRewindActive);
          !!d('PlaybackSpeedExperiments').enableCometPlaybackSpeedControl() &&
            !c.payload.isLiveRewindActive &&
            y.dispatch({
              payload: { playbackRate: 1 },
              type: 'controller_set_playback_rate',
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_picture_in_picture_requested') return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              reason: c.type,
            },
            type: 'host_call_picture_in_picture',
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== 'controller_picture_in_picture_exit_requested')
            return !0;
          v({
            payload: {
              hostCallID: d(
                'VideoPlayerImplementationStateMachineHostCallQueue',
              ).makeHostCallID(),
              reason: c.type,
            },
            type: 'host_call_exit_picture_in_picture',
          });
          return !1;
        },
      ];
      var y = d(
        'VideoPlayerImplementationStateMachine',
      ).createVideoPlayerImplementationStateMachineWithStateTransitionHandlers({
        collectUncontrolledState: function () {
          var a = s.current;
          return d(
            'VideoPlayerImplementationStateMachineStateUncontrolledState',
          ).createVideoPlayerImplementationStateMachineStateUncontrolledState({
            engineExtrasAPI: k,
            fullscreenControllerRef: n,
            videoElementAPI: a,
            videoLiveTraceRef: t,
            videoPlayerPassiveViewabilityInfoRef: u,
          });
        },
        debugLogId: i,
        initialState: d(
          'VideoPlayerImplementationStateMachineState',
        ).createVideoPlayerImplementationStateMachineInitialState({
          alwaysShowCaptions: e,
          areCaptionsAutogenerated: f,
          captionDisplayStyle: g,
          dimensions: j,
          isAbrEnabled: m.isAbrEnabled,
          playerImplementationName: m.playerImplementationName,
          playerVersion: m.playerVersion,
          streamingFormat: m.streamingFormat,
        }),
        onFatalError: o,
        stateTransitionHandlers: a,
      });
      return y;
    }
    function r(a, b) {
      if (a === null && b === null) return !1;
      if (a === null || b === null) return !0;
      var c = (b = b.rows) != null ? b : [];
      a = (b = a.rows) != null ? b : [];
      return (
        a.length !== c.length ||
        a.some(function (a, b) {
          return a !== c[b];
        })
      );
    }
    function s(a, b, c, d) {
      a !== b.current &&
        (c.current && (c.current.remove(), (c.current = null)),
        (b.current = a)),
        b.current &&
          !c.current &&
          (c.current = b.current.subscribe(function () {
            d.dispatch({ type: 'notify_fullscreen_changed' });
          }));
    }
    function t(a, b, c, d) {
      a !== b.current &&
        (c.current && (c.current.remove(), (c.current = null)),
        (b.current = a)),
        b.current &&
          !c.current &&
          (c.current = b.current.subscribe(function () {
            d.dispatch({ type: 'notify_viewability_changed' });
          }));
    }
    function u(a) {
      var b = a.engineMetadata;
      a = a.state;
      var c = a.controlledState,
        d = c.activeCaptions,
        e = c.activeEmsgBoxes,
        f = c.availableQualities,
        g = c.captionDisplayStyle,
        h = c.captionsLoaded,
        i = c.captionsVisible,
        j = c.error,
        k = c.hasPlayEverBeenRequested,
        l = c.implementationSeekSourcePosition,
        m = c.inbandCaptionsAutogenerated,
        n = c.isDesktopPictureInPicture,
        o = c.isLiveRewindActive,
        p = c.lastMuteReason,
        q = c.lastPauseReason,
        r = c.lastPlayedTimeMs,
        s = c.lastPlayReason,
        t = c.latencyLevel,
        u = c.loopCount,
        v = c.loopCurrent,
        w = c.muted,
        x = c.overriddenPlayerFormat,
        y = c.playbackState,
        z = c.seekableRanges,
        A = c.seeking,
        B = c.seekTargetPosition,
        C = c.selectedVideoQuality,
        D = c.streamInterrupted,
        E = c.targetAudioQuality,
        F = c.targetPlaybackRate,
        G = c.targetVideoQuality,
        H = c.videoProjection,
        I = c.volume;
      c = c.watchTimeMs;
      var J = a.uncontrolledState,
        K = J.currentPlayingVideoQuality,
        L = J.videoElementDuration,
        M = J.videoElementLastBufferEndPosition;
      J = J.videoRepresentationID;
      var N = y === 'ended',
        O = y === 'paused' || N,
        P = y === 'playing',
        Q = y === 'inPlayStalling';
      y = y === 'stalling' || Q;
      d = {
        activeCaptions: d,
        activeEmsgBoxes: e,
        availableVideoQualities: f,
        bufferEnd: (d = M) != null ? d : 0,
        captionDisplayStyle: g,
        captionsLoaded: h,
        captionsVisible: i,
        currentVideoQuality: (e = K) != null ? e : '',
        duration: (f = L) != null ? f : 0,
        ended: N,
        error: j,
        hasPlayEverBeenRequested: k,
        inbandCaptionsAutogenerated: m,
        inPlayStalling: Q,
        isAbrEnabled: b.isAbrEnabled,
        isDesktopPictureInPicture: (M = n) != null ? M : !1,
        isExternalMedia: b.isExternalMedia,
        isLiveRewindActive: o,
        lastMuteReason: p,
        lastPauseReason: q,
        lastPlayedTimeMs: r,
        lastPlayReason: s,
        latencyLevel: t,
        loopCount: u,
        loopCurrent: v,
        muted: w,
        overriddenPlayerFormat: x,
        paused: O,
        playerImplementationName: a.playerImplementationName,
        playerVersion: a.playerVersion,
        playing: P,
        seekableRanges: z,
        seeking: A,
        seekSourcePosition: l,
        seekTargetPosition: B,
        selectedVideoQuality: C,
        stalling: y,
        streamInterrupted: D,
        targetAudioQuality: E,
        targetPlaybackRate: F,
        targetVideoQuality: G,
        videoProjection: H,
        videoRepresentationID: J,
        volume: I,
        watchTimeMs: c,
      };
      return d;
    }
    function a(a) {
      var e = a.createDebugAPI,
        f = a.createVideoPlayerError,
        g = a.debugLog,
        h = a.debugLogId,
        i = a.destroyEngineParts,
        j = a.engineExtrasAPI,
        k = a.engineMetadata,
        l = a.handleFatalError,
        m = a.handleVideoElementMounted,
        n = a.handleVideoElementUnmounted,
        p = a.handleVideoInfoChange,
        r = a.initialProps,
        v = a.setExposedStateInReact;
      g = r.loggingMetaData.instanceKey;
      a = r.loggingMetaData.coreVideoPlayerMetaData;
      var w = a.broadcastId,
        x = a.isLiveStreaming;
      a = a.isLiveTraceEnabled;
      var y = {
          current:
            Boolean(x) && Boolean(a) && w != null
              ? new (c('VideoLiveTrace'))(w, g, c('CurrentUser').getAccountID())
              : null,
        },
        z = d(
          'VideoPlayerImplementationStateMachineLogger',
        ).createVideoPlayerImplementationStateMachineLogger({
          debugLogId: h,
          initialLoggingMetaData: r.loggingMetaData,
          videoLiveTraceRef: y,
        }),
        A = b('cr:4081')
          ? d(
              'MediaPlaybackCompoundEventStateMachineLogger',
            ).createMediaPlaybackCompoundEventStateMachineLogger({
              debugLogId: h,
              initialLoggingMetaData: r.loggingMetaData,
            })
          : null,
        B = b('cr:4081') && A ? new (b('cr:4081'))(A) : null,
        C = new (c('VideoPlayerBanzaiLogFlusher'))(z),
        D = {
          current: (x = r.videoPlayerPassiveViewabilityInfo) != null ? x : null,
        },
        E = { current: (a = r.fullscreenController) != null ? a : null },
        F = { current: null };
      w = d(
        'useConcurrentAutoplayManagementAPI',
      ).createConcurrentAutoplayManagementAPI();
      var G = [],
        H = function () {
          G.forEach(function (a) {
            a();
          }),
            r.disableLogging
              ? (C.discardLogsWithoutFlushing(),
                b('cr:4081') &&
                  (B == null ? void 0 : B.discardLogsWithoutFlushing()))
              : (C.flushLogs(), B == null ? void 0 : B.flushLogs());
        },
        I = { current: null },
        J = null,
        K = {
          current: {
            inbandCaptionsAutogeneratedFromManifest: !1,
            inbandCaptionsExpectedFromManifest: !1,
            inbandCaptionsExpectedFromProps: r.inbandCaptionsExpected,
            representationCaptionsExpectedFromManifest: !1,
            sideLoadCaptionsExpectedFromProps: r.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (g = r.captionsUrl) != null ? g : null,
          },
        },
        L = { current: null },
        M = { current: null },
        N = new (c('SubscriptionsHandler'))(),
        O = new (c('SubscriptionsHandler'))(),
        P = 'before_mounted';
      function Q() {
        return P === 'mounted';
      }
      var R = { current: null },
        S = function (a) {
          a = u({ engineMetadata: k, state: a });
          return a;
        },
        T = { current: null },
        U = { current: null },
        aa = function (a) {
          if (Q()) {
            if (a === T.current) return;
            var b = S(a);
            if (U.current != null && c('deepEquals')(U.current, b)) return;
            T.current = a;
            U.current = b;
            v(b);
          }
        };
      x = function (a, b, c) {
        z.handleStateMachine(a, b, c),
          A == null ? void 0 : A.handleStateMachine(a, b, c),
          aa(b),
          H();
      };
      var V = function (a, b) {};
      a = function (a) {
        V(a, 'state_machine_fatal_error');
      };
      var W = q({
          alwaysShowCaptions: Boolean(r.alwaysShowCaptions),
          areCaptionsAutogenerated: Boolean(r.areCaptionsAutogenerated),
          captionDisplayStyle: r.captionDisplayStyle,
          captionsControllerRef: F,
          debugLogId: h,
          dimensions: r.dimensions,
          engineExtrasAPI: j,
          engineMetadata: k,
          fullscreenControllerRef: E,
          handleFatalError: a,
          handleStateMachine: x,
          videoElementAPIRef: R,
          videoLiveTraceRef: y,
          videoPlayerPassiveViewabilityInfoRef: D,
        }),
        X = !1,
        Y = function (a) {
          var b = I.current != null,
            d = R.current != null;
          N.release();
          W.dispatch({
            payload: {
              reason: a,
              videoElementAPIExisted: d,
              videoElementExisted: b,
            },
            type: 'implementation_engine_destroy_requested',
          });
          try {
            c('gkx')('1494163')
              ? i(['destroyEngine(' + a + ')'])
              : X || ((X = !0), i(['destroyEngine(' + a + ')']));
          } catch (e) {
            if (c('gkx')('1494163'))
              try {
                c('FBLogger')('comet_video_player')
                  .catching(e)
                  .warn(
                    'Error thrown by destroyEngineParts: %s %s',
                    e.message,
                    JSON.stringify({
                      playerImplementationName: k.playerImplementationName,
                      reason: a,
                      videoElementAPIExisted: d,
                      videoElementExisted: b,
                    }),
                  );
              } catch (a) {}
          }
          var e = F.current;
          e != null &&
            (W.getCurrentState().controlledState.captionsLoaded &&
              W.dispatch({ type: 'captions_unloaded' }),
            (F.current = null),
            e.destroy());
          s(null, E, L, W);
          t(null, D, M, W);
          W.dispatch({
            payload: {
              reason: a,
              videoElementAPIExisted: d,
              videoElementExisted: b,
            },
            type: 'implementation_engine_destroyed',
          });
        };
      V = function (a, b) {
        a = f(a, b);
        W.dispatch({
          payload: { fatalError: a },
          type: 'implementation_fatal_error',
        });
        Y('implementation_fatal_error');
        l(a);
      };
      function ba(a) {
        return (
          a.sideLoadCaptionsExpectedFromProps &&
          a.sideLoadCaptionsUrlFromProps !== null
        );
      }
      function Z(a) {
        return (
          a.inbandCaptionsExpectedFromProps &&
          ((a = a.inbandCaptionsExpectedFromManifest) != null ? a : !1)
        );
      }
      function $(a) {
        return (a = a.inbandCaptionsAutogeneratedFromManifest) != null ? a : !1;
      }
      var ca = function (a) {
          var b = ba(a),
            c = Z(a),
            e = $(a),
            f = F.current;
          e !== $(K.current) &&
            W.dispatch({
              payload: { inbandCaptionsAutogenerated: e },
              type: 'inband_captions_autogenerated_changed',
            });
          f != null
            ? c !== Z(K.current) &&
              (f.updateInbandCaptionsExpected(c),
              !c &&
                W.getCurrentState().controlledState.captionsLoaded &&
                W.dispatch({ type: 'captions_unloaded' }))
            : (b || c) &&
              f == null &&
              (F.current = d(
                'VideoPlayerCaptionsController',
              ).createCaptionsController({
                captionsUrl: b ? a.sideLoadCaptionsUrlFromProps : null,
                inbandCaptionsExpected: c,
                onCaptionsLoaded: function () {
                  W.getCurrentState().controlledState.captionsLoaded ||
                    W.dispatch({ type: 'captions_loaded' });
                },
              }));
          K.current = a;
        },
        da = function (a) {
          j != null &&
            a &&
            a.width > 0 &&
            a.height > 0 &&
            (j.setDimensions(a),
            W.dispatch({
              payload: { dimensions: { height: a.height, width: a.width } },
              type: 'player_dimensions_changed',
            }));
        },
        ea = function (a) {
          a !== W.getCurrentState().controlledState.loopCount &&
            W.dispatch({
              payload: { loopCount: a },
              type: 'loop_count_change_requested',
            });
        },
        fa = function (a) {
          'srcObject' in a && (a.srcObject = null),
            c('gkx')('8054') && a.removeAttribute('src'),
            O.release(),
            O.engage();
        },
        ga = function (a, e) {
          if (I.current === a) return;
          if (!Q() && c('gkx')('1405244')) return;
          if (!Q()) {
            var f = (function (a) {
              switch (a) {
                case 'unmounted':
                  return 'EngineAPI.handleVideoElement.unmounted';
                case 'before_mounted':
                  return 'EngineAPI.handleVideoElement.before_mounted';
                case 'mounted':
                  return null;
                default:
                  a;
                  return null;
              }
            })(P);
            f && d('VideoPlayerODS').bumpEntityKey('comet_video_player', f, 1);
          }
          a != null &&
            I.current != null &&
            I.current !== a &&
            c('recoverableViolation')(
              'The video element was recreated',
              'comet_video_player',
            );
          J != null && J();
          f = I.current;
          f && fa(f);
          I.current = a;
          b('cr:506') != null && a != null && (J = b('cr:506')(a, h));
          a != null &&
            O.addSubscriptions(
              c('CometEventListener').listen(
                a,
                'enterpictureinpicture',
                function () {
                  var a = d(
                    'CometVideoPictureInPictureManagerContext',
                  ).isInPictureInPictureExp();
                  a &&
                    W.dispatch({
                      payload: { isInPictureInPictureMode: !0 },
                      type: 'controller_set_picture_in_picture_state_requested',
                    });
                },
              ),
              c('CometEventListener').listen(
                a,
                'leavepictureinpicture',
                function () {
                  var a = d(
                    'CometVideoPictureInPictureManagerContext',
                  ).isInPictureInPictureExp();
                  a &&
                    W.dispatch({
                      payload: { isInPictureInPictureMode: !1 },
                      type: 'controller_set_picture_in_picture_state_requested',
                    });
                },
              ),
            );
          c('gkx')('1494163') && a == null && (R.current = null);
          I.current != null
            ? (W.dispatch({ type: 'implementation_video_node_mounted' }),
              m([].concat(e, ['handleVideoElement(non-null)'])))
            : (W.dispatch({ type: 'implementation_video_node_unmounted' }),
              n([].concat(e, ['handleVideoElement(null)'])));
        };
      g = r.loggingMetaData.instanceKey;
      a = function (a) {
        var b;
        if (!Q()) return;
        s((b = a.fullscreenController) != null ? b : null, E, L, W);
        t(
          (b = a.videoPlayerPassiveViewabilityInfo) != null ? b : null,
          D,
          M,
          W,
        );
        if (!p(a)) {
          b = {
            inbandCaptionsAutogeneratedFromManifest:
              K.current.inbandCaptionsAutogeneratedFromManifest,
            inbandCaptionsExpectedFromManifest:
              K.current.inbandCaptionsExpectedFromManifest,
            inbandCaptionsExpectedFromProps: a.inbandCaptionsExpected,
            representationCaptionsExpectedFromManifest:
              K.current.representationCaptionsExpectedFromManifest,
            sideLoadCaptionsExpectedFromProps: a.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (b = a.captionsUrl) != null ? b : null,
          };
          ca(b);
          da(a.dimensions);
          ea((b = a.loopCount) != null ? b : 0);
        }
        W.dispatch({
          payload: { loggingMetaData: a.loggingMetaData },
          type: 'notify_logging_metadata_change',
        });
      };
      x = function () {
        if (P !== 'before_mounted') {
          var a = (function (a) {
            switch (a) {
              case 'before_mounted':
                return null;
              case 'unmounted':
                return 'EngineAPI.handleReactMount.unmounted';
              case 'mounted':
                return 'EngineAPI.handleReactMount.mounted';
              default:
                a;
                return null;
            }
          })(P);
          a && d('VideoPlayerODS').bumpEntityKey('comet_video_player', a, 1);
        }
        Q() ||
          ((P = 'mounted'),
          N.addSubscriptions(
            d('RunComet').onUnload(function () {
              Y('page_unload');
            }),
          ),
          W.dispatch({ type: 'implementation_mounted' }),
          m(['handleReactMount']));
      };
      g = function () {
        if (!Q()) {
          var a = (function (a) {
            switch (a) {
              case 'unmounted':
                return 'EngineAPI.handleReactUnmount.unmounted';
              case 'before_mounted':
                return 'EngineAPI.handleReactUnmount.before_mounted';
              case 'mounted':
                return null;
              default:
                a;
                return null;
            }
          })(P);
          a && d('VideoPlayerODS').bumpEntityKey('comet_video_player', a, 1);
        }
        Q() &&
          ((P = 'unmounted'),
          W.dispatch({
            payload: { reason: 'react_effect_cleanup' },
            type: 'implementation_unmounted',
          }),
          Y('implementation_unmounted:react_effect_cleanup'));
      };
      w = o({
        concurrentAutoplayManagementAPI: w,
        createExposedState: S,
        debugAPI: e({
          getVideoElementAPI: function () {
            return R.current;
          },
          logger: z,
        }),
        fullscreenControllerRef: E,
        logger: z,
        machine: W,
        subscribers: G,
        videoElementAPIRef: R,
      });
      e = d(
        'VideoPlayerImplementationStateMachine',
      ).createReactVideoElementCallbacksForStateMachine(W, ga);
      var ha = S(W.getInitialState());
      x = {
        destroy: Y,
        handleReactMount: x,
        handleReactPropsChanged: a,
        handleReactUnmount: g,
        implementationController: w,
        initialExposedState: ha,
        logFlusher: C,
        machine: W,
        notifySubscribers: H,
        videoElementCallbacks: e,
        videoElementRefCallback: function (a) {
          ga(a, ['videoElementRefCallback']);
        },
      };
      return {
        engine: x,
        getCaptionsInfo: function () {
          return K.current;
        },
        getVideoElement: function () {
          return I.current;
        },
        getVideoLiveTrace: function () {
          return y.current;
        },
        handleCaptionsInfoChange: ca,
        handleFatalImplementationError: V,
        logger: z,
        machine: W,
        videoElementAPIRef: R,
      };
    }
    function v(a, b) {
      var d,
        e = c('err')(a.errorName + ': ' + a.errorDescription);
      e.name = a.errorName;
      e.errorName = a.errorName;
      e.type = 'error';
      a.stack != null && a.stack !== '' && (e.stack = a.stack);
      var f = new (c('ErrorMetadata'))();
      f.addEntries(
        ['COMET_VIDEO', 'ERROR_LOCATION', a.errorLocation],
        ['COMET_VIDEO', 'ERROR_CODE', (d = a.errorCode) != null ? d : ''],
        ['COMET_VIDEO', 'ERROR_URL', (d = a.url) != null ? d : ''],
      );
      b != null && f.addEntry('COMET_VIDEO', 'VIDEO_ID', b);
      d = a.originalError;
      d != null &&
        (typeof d === 'string'
          ? f.addEntry('COMET_VIDEO', 'ORIGINAL_ERROR', d)
          : d instanceof Error &&
            d.message != null &&
            f.addEntry('COMET_VIDEO', 'ORIGINAL_ERROR', d.message));
      e.metadata = f;
      return e;
    }
    function e(a, b) {
      var d = k(null),
        e = d[0],
        f = d[1],
        g = j(!1),
        l = j(null);
      d = k(null);
      var m = d[0],
        n = d[1];
      d = a.wrapVideoPixels_EXPERIMENTAL;
      i(
        function () {
          m || (l.current = null);
        },
        [m],
      );
      var o = j(a),
        p = j(b),
        q = c('useStable')(function () {
          return p.current({
            debugLogId: String(o.current.loggingMetaData.instanceKey),
            handleFatalError: function (a) {
              if (g.current && c('gkx')('1722590')) return;
              c('gkx')('1444664') ? l.current || ((l.current = a), n(a)) : n(a);
            },
            initialProps: o.current,
            setExposedStateInReact: f,
          });
        });
      e = (b = e) != null ? b : q.initialExposedState;
      b = (b = e.error) != null ? b : m;
      if (b != null) {
        if (c('killswitch')('COMET_VIDEO_ERROR_DEAGGREGATION'))
          throw c('unrecoverableViolation')(
            b.errorName + ': ' + b.errorDescription,
            'comet_video_player',
            {
              error:
                b.originalError instanceof Error ? b.originalError : void 0,
            },
          );
        var r = a.VideoPlayerShakaPerformanceLoggerClass;
        r && (c('gkx')('2007883') || c('qex')._('1655')) && r.flushQueuedLogs();
        throw v(b, o.current.videoFBID);
      }
      i(
        function () {
          q.handleReactMount();
          return function () {
            (g.current = !0), q.handleReactUnmount();
          };
        },
        [q],
      );
      var s = j(null);
      i(function () {
        a !== s.current && q.handleReactPropsChanged(a), (s.current = a);
      });
      r = c('useSEOLoggedOutWebCrawler')();
      b = h.jsx(c('VideoPlayerImplementationReactVideoElement.react'), {
        alt: a.alt,
        implementationExposedState: e,
        seoWebCrawlerVideoTracks:
          r && a.seoWebCrawlerVideoTracks != null
            ? a.seoWebCrawlerVideoTracks
            : null,
        src: r ? a.seoWebCrawlerLookasideUrl : null,
        videoElementCallbacks: r ? null : q.videoElementCallbacks,
        videoElementPreloadDisabled: a.preloadForProgressiveDisabled,
        videoElementRefCallback: r ? null : q.videoElementRefCallback,
      });
      r = a.renderWithExposedState({
        implementationController: q.implementationController,
        implementationExposedState: e,
      });
      d = h.jsxs(h.Fragment, { children: [d ? d(b) : b, r] });
      return {
        engine: q,
        exposedState: e,
        reactVideoComponents: r,
        reactVideoFrame: b,
        reactVideoFrameAndComponents: d,
      };
    }
    g.internal_createVideoPlayerImplementationControllerImpl = n;
    g.internal_createVideoPlayerImplementationEngineStateMachineWithEffects = q;
    g.internal_createVideoPlayerImplementationExposedStateFromStateMachineState =
      u;
    g.createVideoPlayerImplementationEngine = a;
    g.internal_makeExpandedErrorFromVideoPlayerError = v;
    g.useVideoPlayerImplementationEngine = e;
  },
  98,
);
__d(
  'VideoPlayerImplementationEngineVideoElementAPI',
  ['Promise', 'VideoPlaybackQuality', 'VideoPlayerOzWWWGlobalConfig'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      return isNaN(a) ? 0 : a;
    }
    function i(a) {
      return h(a.duration);
    }
    function j(a) {
      a = a.buffered;
      return a.length > 0 ? a.end(a.length - 1) : 0;
    }
    function k(a) {
      return h(a.currentTime);
    }
    function l(a) {
      return a.buffered.length === 0 ? 0 : a.buffered.start(0);
    }
    function a(a, e) {
      var f = e !== !0,
        g = null,
        h = function (b) {
          f
            ? b == null || b === ''
              ? a.removeAttribute('src')
              : a.setAttribute('src', b)
            : (g = b);
        };
      return {
        exitPictureInPicture: function () {
          window.document.exitPictureInPicture();
        },
        getCanPlayPromise: function () {
          return new (b('Promise'))(function (b, c) {
            a.readyState === 4
              ? b()
              : a.addEventListener('canplay', function () {
                  return b();
                });
          });
        },
        getDOMLoadedMetadataPromise: function () {
          return new (b('Promise'))(function (b, c) {
            a.addEventListener('loadedmetadata', function () {
              return b();
            });
          });
        },
        getDroppedFrameCount: function () {
          return d('VideoPlaybackQuality').getDroppedFrames(a);
        },
        getDuration: function () {
          return i(a);
        },
        getEnded: function () {
          return a.ended;
        },
        getError: function () {
          return a.error;
        },
        getLastBufferEndPosition: function () {
          return j(a);
        },
        getMuted: function () {
          return a.muted;
        },
        getNetworkState: function () {
          return a.networkState;
        },
        getPaused: function () {
          return a.paused;
        },
        getPlaybackRate: function () {
          return a.playbackRate;
        },
        getPlayheadPosition: function () {
          return k(a);
        },
        getReadyState: function () {
          return a.readyState;
        },
        getTotalFrameCount: function () {
          return d('VideoPlaybackQuality').getTotalFrames(a);
        },
        getUnderlyingVideoElement: function () {
          return a;
        },
        getVolume: function () {
          return a.volume;
        },
        pause: function () {
          a.pause();
        },
        play: function () {
          f || ((f = !0), h(g), (g = null));
          var c = a.play();
          c =
            c && typeof c.then === 'function' ? b('Promise').resolve(c) : null;
          return c;
        },
        requestPictureInPicture: function () {
          typeof a.requestPictureInPicture === 'function' &&
            a.requestPictureInPicture();
        },
        setDuration: function (b) {
          a.duration = b;
        },
        setMuted: function (b) {
          a.muted = b;
        },
        setPlaybackRate: function (b) {
          a.playbackRate = b;
        },
        setPlayheadPosition: function (b) {
          var d = b;
          if (b === 0) {
            b = c('VideoPlayerOzWWWGlobalConfig').getNumber(
              'clamp_seek_to_first_buffer_range_epsilon',
              0,
            );
            if (b > 0) {
              var e = l(a);
              e > 0 && e <= b && (d = e);
            }
          }
          a.currentTime = d;
        },
        setSrc: h,
        setVolume: function (b) {
          a.volume = b;
        },
      };
    }
    g.getDurationFromVideoElement = i;
    g.getLastBufferEndPositionFromVideoElement = j;
    g.getPlayheadPositionFromVideoElement = k;
    g.createVideoPlayerImplementationEngineVideoElementAPI = a;
  },
  98,
);
