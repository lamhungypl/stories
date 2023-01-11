/*FB_PKG_DELIM*/

__d(
  'useVideoPlayerIMFFromVideoMetadataRelay_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerIMFFromVideoMetadataRelay_video',
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
          name: 'is_video_broadcast',
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
              documentName: 'useVideoPlayerIMFFromVideoMetadataRelay_video',
              fragmentName:
                'useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data',
              fragmentPropName: 'video_imf_data',
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
  'useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'spec_inline_json',
          storageKey: null,
        },
      ],
      type: 'VideoIMFData',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerShakaPerformanceLoggerRelayImpl_init',
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
  'useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerShakaPerformanceLoggerRelayImpl_video',
      selections: [
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'useCometRelayExpiredVideoUrlRefreshHandlerQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '4651571778286726';
  },
  null,
);
__d(
  'useCometRelayExpiredVideoUrlRefreshHandlerQuery.graphql',
  ['useCometRelayExpiredVideoUrlRefreshHandlerQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = { defaultValue: null, kind: 'LocalArgument', name: 'expiredURL' },
        c = { defaultValue: null, kind: 'LocalArgument', name: 'videoID' },
        d = [{ kind: 'Variable', name: 'id', variableName: 'videoID' }],
        e = {
          alias: null,
          args: [
            {
              kind: 'Variable',
              name: 'expired_url',
              variableName: 'expiredURL',
            },
          ],
          concreteType: 'RMDRefreshedUrl',
          kind: 'LinkedField',
          name: 'rmd_refreshed_url',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'new_url',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'reason',
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
          name: 'useCometRelayExpiredVideoUrlRefreshHandlerQuery',
          selections: [
            {
              alias: null,
              args: d,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [e],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [c, a],
          kind: 'Operation',
          name: 'useCometRelayExpiredVideoUrlRefreshHandlerQuery',
          selections: [
            {
              alias: null,
              args: d,
              concreteType: 'Video',
              kind: 'LinkedField',
              name: 'video',
              plural: !1,
              selections: [
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
        },
        params: {
          id: b(
            'useCometRelayExpiredVideoUrlRefreshHandlerQuery_facebookRelayOperation',
          ),
          metadata: {},
          name: 'useCometRelayExpiredVideoUrlRefreshHandlerQuery',
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
  'useVideoPlayerShakaConfig_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useVideoPlayerShakaConfig_video',
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
          name: 'is_spherical',
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
          name: 'is_live_streaming',
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
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'handleCometRelayExpiredVideoUrlRefresh',
  ['ErrorMetadata', 'ErrorSerializer', 'FBLogger', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var d = b == null ? void 0 : b.video,
        e = d == null ? void 0 : d.rmd_refreshed_url,
        f = e == null ? void 0 : e.new_url,
        g = e == null ? void 0 : e.reason,
        h = null;
      b == null
        ? (h = c('err')(
            'Video URL refresh GraphQL response data is ' +
              (b === null ? 'null' : 'undefined'),
          ))
        : d == null
        ? (h = c('err')(
            'Video URL refresh GraphQL response video is ' +
              (d === null ? 'null' : 'undefined'),
          ))
        : e == null
        ? (h = c('err')(
            'Video URL refresh GraphQL response video.rmd_refreshed_url is ' +
              (e === null ? 'null' : 'undefined'),
          ))
        : (f == null || f === '') &&
          (g == null || g === '') &&
          (h = c('err')(
            'Video URL refresh GraphQL response video.rmd_refreshed_url.new_url is ' +
              (f === ''
                ? 'an empty string'
                : f === null
                ? 'null'
                : 'undefined') +
              ' and video.rmd_refreshed_url.reason is ' +
              (g === ''
                ? 'an empty string'
                : g === null
                ? 'null'
                : 'undefined'),
          ));
      if (h != null) {
        b = new (c('ErrorMetadata'))();
        b.addEntry('COMET_VIDEO', 'VIDEO_ID', String(a));
        h.metadata = b;
        throw c('FBLogger')('comet_video_player')
          .catching(h)
          .mustfixThrow(
            'Video URL refresh failed for ID: %s - %s',
            String(a),
            c('ErrorSerializer').toReadableMessage(h),
          );
      }
      return {
        reason: (d = g) != null ? d : null,
        refreshedUrl: (e = f) != null ? e : null,
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerSphericalMediaGyroOverlay.react',
  ['fbt', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      a = a.isActive;
      return i.jsx('div', {
        className:
          'xal61yo x5yr21d x10l6tqk xtzzx4i xwa60dl x11lhmoz x1oyok0e xippbsu x19991ni xl405pv xh8yej3 x1vjfegm' +
          (a ? ' x1hc1fzr' : ' xg01cxk'),
        children: i.jsxs('div', {
          className:
            'xatbrnm x14yjl9h xudhj91 x18nykt9 xww2gxu x972fbf xcfux6l x1qhh985 xm0m39n xy75621 x1hc1fzr x10l6tqk xtzzx4i xwa60dl xnrv1ok xni59qk',
          children: [
            i.jsxs('div', {
              className:
                'x1x1c4bx x1c74tu6 xa4qsjk xb2d7b1 xo26eqo xmk2xwg x8nt7p6 x14yjl9h xudhj91 x18nykt9 xww2gxu xng8ra x10l6tqk xit27t2 xndqk7f x7p49u4 x1oyok0e x1247r65 x1xwhoib',
              children: [
                i.jsx('div', {
                  className:
                    'x1x1c4bx x1c74tu6 xa4qsjk xdo4eo8 x104e7ho x146gacn x1q9b8am x14yjl9h xudhj91 x18nykt9 xww2gxu xwa7hi x10l6tqk xtzzx4i xuuh30 xnhpnai x13w7htt x3zwtg x1esw782',
                }),
                i.jsx('div', {
                  className:
                    'x1x1c4bx x1c74tu6 xa4qsjk x1ahlmzr xdo4eo8 x104e7ho x146gacn x1q9b8am x14yjl9h xudhj91 x18nykt9 xww2gxu x10c73hc x10l6tqk xwa60dl x1cb1t30 x1u78mur x5uqrmk xxoll9x',
                }),
              ],
            }),
            i.jsx('div', {
              className:
                'x1x1c4bx x1c74tu6 xa4qsjk x14yjl9h xudhj91 x18nykt9 xww2gxu x972fbf xcfux6l x1qhh985 xm0m39n xng8ra x6ikm8r x10wlt62 x10l6tqk xtzzx4i x1atx4j1 xuuh30 xuxw1ft xnhpnai x5uqrmk xi294cv',
              children: h._('__JHASH__-CiiIBxoYaV__JHASH__', [
                h._implicitParam(
                  '=m0',
                  i.jsx('span', {
                    className:
                      'x972fbf xcfux6l x1qhh985 xm0m39n x14ctfv xjb2p0i x1f6kntn xng8ra x1wus3qs x10l6tqk xtzzx4i x2b8uid xuuh30 xnhpnai',
                    children: h._('__JHASH__mkeEtbWiQpF__JHASH__'),
                  }),
                ),
              ]),
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
  'VideoPlayerSphericalFallbackCover.react',
  [
    'fbt',
    'TetraText.react',
    'VideoPlayerSphericalMediaGyroOverlay.react',
    'react',
    'unrecoverableViolation',
    'useCometRouterDispatcher',
    'useFeedClickEventHandler',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useState;
    function a(a) {
      var b = a.videoTahoeUrl,
        d = c('useCometRouterDispatcher')();
      a = j(!1);
      var e = a[0],
        f = a[1];
      if (d == null)
        throw c('unrecoverableViolation')(
          'Missing CometRouterDispatcher',
          'comet_video_player',
        );
      a = c('useFeedClickEventHandler')(function () {
        d.go(b, {});
      });
      return i.jsxs('div', {
        className:
          'x6s0dn4 x1ey2m1c x9f619 x1ypdohk x78zum5 xds687c xdt5ytf x13a6bvl x10l6tqk x17qophe x13vifvy',
        onClick: a,
        onMouseEnter: function () {
          return f(!0);
        },
        onMouseLeave: function () {
          return f(!1);
        },
        role: 'link',
        tabIndex: 0,
        children: [
          i.jsx(c('VideoPlayerSphericalMediaGyroOverlay.react'), {
            isActive: !0,
          }),
          i.jsx('div', {
            className: 'xwajptj x1n2onr6',
            children: e
              ? i.jsx(c('TetraText.react'), {
                  color: 'primaryOnMedia',
                  type: 'bodyLink3',
                  children: h._('__JHASH__hJPvJGomYP4__JHASH__'),
                })
              : null,
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
  'useVideoPlayerIMFFromVideoMetadata',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useDebugValue,
      i = b.useMemo;
    function a(a) {
      var b = a.isVideoBroadcast,
        c = a.specInlineJson;
      a.videoID;
      var d = b === !0;
      a = i(
        function () {
          return { imfExpectedFromEmsg: d, specInlineJson: c };
        },
        [d, c],
      );
      h({ useVideoPlayerIMFFromVideoMetadata: a });
      return a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerIMFFromVideoMetadataRelay',
  [
    'CometRelay',
    'useVideoPlayerIMFFromVideoMetadata',
    'useVideoPlayerIMFFromVideoMetadataRelay_video.graphql',
    'useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h, i;
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('useVideoPlayerIMFFromVideoMetadataRelay_video.graphql')),
        a,
      );
      var e = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b(
              'useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data.graphql',
            )),
        a.video_imf_data,
      );
      return c('useVideoPlayerIMFFromVideoMetadata')({
        isVideoBroadcast: a.is_video_broadcast,
        specInlineJson: e == null ? void 0 : e.spec_inline_json,
        videoID: a.id,
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerOzPlayerModuleLoaderDeferredForDisplay',
  ['requireDeferredForDisplay'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferredForDisplay')('oz-player').__setRef(
      'VideoPlayerOzPlayerModuleLoaderDeferredForDisplay',
    );
    function a() {
      return {
        getModuleIfRequireable: function () {
          return h.getModuleIfRequireable() || null;
        },
        load: function () {
          return h.load();
        },
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerShakaPerformanceLoggerRelayImpl',
  [
    'CometRelay',
    'useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql',
    'useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h, i;
    h !== void 0
      ? h
      : (h = b('useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql'));
    function a(a) {
      a = d('CometRelay').useFragment(
        i !== void 0
          ? i
          : (i = b(
              'useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql',
            )),
        a,
      );
      var c = a.video_player_shaka_performance_logger_init
        ? d('CometRelay').ModuleResource.read(
            a.video_player_shaka_performance_logger_init,
          )
        : null;
      c != null &&
        a.video_player_shaka_performance_logger_should_sample === !0 &&
        c.forceShouldSample();
      return c;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerShakaPerformanceLoggerRelay',
  ['useVideoPlayerShakaPerformanceLoggerRelayImpl'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('useVideoPlayerShakaPerformanceLoggerRelayImpl');
  },
  98,
);
__d(
  'useCometRelayExpiredVideoUrlRefreshHandler',
  [
    'CometRelay',
    'cr:2741',
    'react',
    'unrecoverableViolation',
    'useCometRelayExpiredVideoUrlRefreshHandlerQuery.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react').useCallback;
    function a(a) {
      var e = d('CometRelay').useRelayEnvironment();
      if (a == null || a === '')
        throw c('unrecoverableViolation')(
          'refreshCometRelayVideoPlayerExpiredUrl videoFBID cannot be ' +
            (a === '' ? 'an empty string' : a === null ? 'null' : 'undefined'),
          'comet_video_player',
        );
      return i(
        function (c) {
          var f =
            h !== void 0
              ? h
              : (h = b(
                  'useCometRelayExpiredVideoUrlRefreshHandlerQuery.graphql',
                ));
          return d('CometRelay')
            .fetchQuery(e, f, { expiredURL: btoa(c), videoID: a })
            .toPromise()
            .then(function (c) {
              var d;
              if (b('cr:2741')) return b('cr:2741')(a, c);
              d =
                (d =
                  c == null
                    ? void 0
                    : (d = c.video) == null
                    ? void 0
                    : (d = d.rmd_refreshed_url) == null
                    ? void 0
                    : d.new_url) != null
                  ? d
                  : null;
              c =
                (c =
                  c == null
                    ? void 0
                    : (c = c.video) == null
                    ? void 0
                    : (c = c.rmd_refreshed_url) == null
                    ? void 0
                    : c.reason) != null
                  ? c
                  : null;
              return { reason: c, refreshedUrl: d };
            });
        },
        [e, a],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'VideoPlayerShakaConfigContextProvider',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.setContext = function (a, b) {
        if (this.$1[a] !== b) {
          var c;
          this.$1 = babelHelpers['extends'](
            {},
            this.$1,
            ((c = {}), (c[a] = b), c),
          );
        }
      };
      b.setAllContexts = function (a) {
        this.$1 = a;
      };
      b.getAllContexts = function () {
        return this.$1;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'VideoPlayerShakaConfig',
  [
    'VideoPlayerContextSensitiveConfigResolver',
    'VideoPlayerShakaConfigContextProvider',
  ],
  function (a, b, c, d, e, f, g) {
    var h = {};
    a = (function () {
      function a(a, b, d) {
        (this.$1 = new (c('VideoPlayerShakaConfigContextProvider'))()),
          (this.$2 = b || null),
          (this.$3 = new (c('VideoPlayerContextSensitiveConfigResolver'))(d)),
          this.$3.setContexts(a || {}),
          a && this.$1.setAllContexts(a);
      }
      a.setGlobalOverrideConfig = function (a) {
        h = a;
      };
      var b = a.prototype;
      b.setContext = function (a, b) {
        var c = this.$1.getAllContexts();
        this.$1.setContext(a, b);
        a = this.$1.getAllContexts();
        c !== a && this.$3.setContexts(a);
      };
      b.setOverrideConfig = function (a) {
        this.$2 = a;
      };
      b.getBool = function (a, b) {
        a = this.$4(a, b);
        return typeof a === 'boolean' ? a : b;
      };
      b.getNumber = function (a, b) {
        a = this.$4(a, b);
        return typeof a === 'number' ? a : b;
      };
      b.getString = function (a, b) {
        a = this.$4(a, b);
        return typeof a === 'string' ? a : b;
      };
      b.getAllContexts = function () {
        return this.$1.getAllContexts();
      };
      b.$4 = function (a, b) {
        if (!!h && typeof h[a] === typeof b) return h[a];
        if (typeof this.$3.getValue(a) === typeof b) return this.$3.getValue(a);
        return !!this.$2 && typeof this.$2[a] === typeof b ? this.$2[a] : null;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'useVideoPlayerShakaConfig',
  [
    'CometRelay',
    'VideoPlayerConnectionQuality',
    'VideoPlayerOzWWWGlobalConfig',
    'VideoPlayerShakaConfig',
    'oz-player/networks/OzBandwidthEstimator',
    'react',
    'useSelectedLatencySetting',
    'useVideoPlayerShakaConfig_video.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    e = d('react');
    var i = e.useEffect,
      j = e.useState;
    function a(a, e) {
      e = e.adClientToken;
      var f = d('CometRelay').useFragment(
          h !== void 0 ? h : (h = b('useVideoPlayerShakaConfig_video.graphql')),
          a,
        ),
        g = e != null,
        k = f.is_spherical === !0,
        l = f.is_gaming_video === !0;
      e = c('useSelectedLatencySetting')(
        (a = f.id) != null ? a : 'null',
        f.selected_latency_setting,
      );
      var m = e[0];
      a = j(function () {
        var a;
        return new (c('VideoPlayerShakaConfig'))({
          connection_quality: d('VideoPlayerConnectionQuality').evaluate(
            function () {
              return c('oz-player/networks/OzBandwidthEstimator').getBandwidth(
                c('VideoPlayerOzWWWGlobalConfig'),
              );
            },
          ),
          content_category: l ? 'gaming' : 'general',
          fbls_tier: ((a = f.fbls_tier) == null ? void 0 : a.startsWith('user'))
            ? 'user'
            : 'general',
          is_ad: g,
          is_latency_sensitive_broadcast:
            f.is_latency_sensitive_broadcast === !0,
          is_live: f.is_live_streaming === !0,
          is_spherical: k,
          latency_level: f.is_latency_menu_enabled === !0 ? m : 'normal',
          player_format: 'inline',
          servable_via_fmbs: !1,
          streaming_implementation: 'default',
        });
      });
      var n = a[0];
      i(
        function () {
          n.setContext('is_ad', g);
        },
        [n, g],
      );
      i(
        function () {
          n.setContext('is_spherical', k);
        },
        [n, k],
      );
      return n;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/www/ozReportUnexpectedErrorWWW',
  ['FBLogger', 'getErrorSafe'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, d) {
      d === void 0 && (d = 'mustfix');
      a = c('getErrorSafe')(a);
      a = c('FBLogger')('oz_player').catching(a);
      b = 'Unexpected error in ' + b;
      switch (d) {
        case 'fatal':
          a.fatal(b);
          break;
        case 'mustfix':
          a.mustfix(b);
          break;
        case 'warn':
          a.warn(b);
          break;
        case 'info':
          a.info(b);
          break;
        case 'debug':
          a.debug(b);
          break;
      }
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/ozReportUnexpectedError',
  ['oz-player/shims/www/ozReportUnexpectedErrorWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/ozReportUnexpectedErrorWWW');
  },
  98,
);
__d(
  'oz-player/loggings/OzLoggingUtils',
  ['oz-player/shims/ozReportUnexpectedError'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, c) {
      a = a.getOperationLogger(b).start();
      try {
        return c(a);
      } catch (b) {
        a.setError(b);
        throw b;
      } finally {
        a.log();
      }
    }
    function b(a, b, d, e, f) {
      e === void 0 && (e = function () {});
      f === void 0 && (f = function () {});
      var g = b.getOperationLogger(d).start();
      e(g);
      a.then(
        function (a) {
          f(g), g.log();
        },
        function (a) {
          f(g), g.setError(a), g.log();
        },
      )['catch'](function (a) {
        c('oz-player/shims/ozReportUnexpectedError')(a, d + ' logger');
      });
    }
    g.executeOperationAndLog = a;
    g.monitorPromiseAndLogOperation = b;
  },
  98,
);
__d(
  'oz-player/loggings/OzOperationLoggerBase',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        (this.$52 = new Map()), (this.$1 = a);
      }
      var b = a.prototype;
      b.start = function () {
        var a = Date.now();
        this.setClientTimeBegin(a);
        this.setClientTimeEnd(null);
        this.setClientTimeDuration(null);
        return this;
      };
      b.log = function () {
        var a = Date.now(),
          b = this.getClientTimeBegin(),
          c = this.getClientTimeEnd();
        (b == null || b === 0) && ((b = a), this.setClientTimeBegin(b));
        (c == null || c === 0) && ((c = a), this.setClientTimeEnd(c));
        this.setClientTimeDuration(c - b);
      };
      b.setError = function (a) {
        this.$2 = a;
        return this;
      };
      b.setPerSessionSampleRate = function (a) {
        this.$3 = a;
        return this;
      };
      b.setAppendTarget = function (a) {
        this.$47 = a;
        return this;
      };
      b.setOneObserved = function (a) {
        this.$44 = a;
        return this;
      };
      b.setOneReqWave = function (a) {
        this.$45 = a;
        return this;
      };
      b.setOneResWave = function (a) {
        this.$46 = a;
        return this;
      };
      b.setIsP2pPlayback = function (a) {
        this.$43 = a;
        return this;
      };
      b.setResult = function (a) {
        this.$4 = a;
        return this;
      };
      b.setType = function (a) {
        this.$5 = a;
        return this;
      };
      b.setClientTimeBegin = function (a) {
        this.$6 = a;
        return this;
      };
      b.setClientTimeDuration = function (a) {
        this.$7 = a;
        return this;
      };
      b.setClientTimeEnd = function (a) {
        this.$8 = a;
        return this;
      };
      b.setSegmentCount = function (a) {
        this.$15 = a;
        return this;
      };
      b.setTimeToFirstByte = function (a) {
        this.$9 = a;
        return this;
      };
      b.setTimeToLastByte = function (a) {
        this.$10 = a;
        return this;
      };
      b.setTimeToRequestStart = function (a) {
        this.$11 = a;
        return this;
      };
      b.setTimeToRequestSent = function (a) {
        this.$12 = a;
        return this;
      };
      b.setReason = function (a) {
        this.$13 = a;
        return this;
      };
      b.setResource = function (a) {
        this.$14 = a;
        return this;
      };
      b.setSegmentStartTime = function (a) {
        this.$16 = a;
        return this;
      };
      b.setSegmentEndTime = function (a) {
        this.$17 = a;
        return this;
      };
      b.setLength = function (a) {
        this.$18 = a;
        return this;
      };
      b.setLiveheadPosition = function (a) {
        this.$19 = a;
        return this;
      };
      b.setLiveheadSeqNumHeader = function (a) {
        this.$20 = a;
        return this;
      };
      b.setLiveheadSeqNumMpd = function (a) {
        this.$21 = a;
        return this;
      };
      b.setManifestType = function (a) {
        this.$22 = a;
        return this;
      };
      b.setMediaSourceNewDuration = function (a) {
        this.$23 = a;
        return this;
      };
      b.setMediaSourcePreviousDuration = function (a) {
        this.$24 = a;
        return this;
      };
      b.setPriorityFloat = function (a) {
        this.$25 = a;
        return this;
      };
      b.setAppendedBufferMs = function (a) {
        this.$26 = a;
        return this;
      };
      b.setInitiator = function (a) {
        this.$27 = a;
        return this;
      };
      b.setPreloadTime = function (a) {
        this.$28 = a;
        return this;
      };
      b.setConcluder = function (a) {
        this.$29 = a;
        return this;
      };
      b.setPreviousRepresentationID = function (a) {
        this.$30 = a;
        return this;
      };
      b.setRepresentationID = function (a) {
        this.$31 = a;
        return this;
      };
      b.setStreamSwitchReason = function (a) {
        this.$32 = a;
        return this;
      };
      b.setState = function (a) {
        this.$33 = a;
        return this;
      };
      b.setContentLengthHeader = function (a) {
        this.$34 = a;
        return this;
      };
      b.setOriginHitHeader = function (a) {
        this.$36 = a;
        return this;
      };
      b.setEdgeHitHeader = function (a) {
        this.$37 = a;
        return this;
      };
      b.setFNAHitHeader = function (a) {
        this.$38 = a;
        return this;
      };
      b.setCode = function (a) {
        this.$35 = a;
        return this;
      };
      b.setResponseTimeMsHeader = function (a) {
        this.$39 = a;
        return this;
      };
      b.setIsTemplatedManifest = function (a) {
        this.$40 = a;
        return this;
      };
      b.setIsLatencyCachupEnabled = function (a) {
        this.$41 = a;
        return this;
      };
      b.setPlayerFormat = function (a) {
        this.$42 = a;
        return this;
      };
      b.setIsRingBufferSample = function (a) {
        this.$48 = a;
        return this;
      };
      b.setIsOnline = function (a) {
        this.$49 = a;
        return this;
      };
      b.setProxyStatusHeader = function (a) {
        this.$50 = a;
        return this;
      };
      b.setPlaybackFbmsParam = function (a) {
        return this;
      };
      b.setPreferredEdgeLatency = function (a) {
        this.$51 = a;
        return this;
      };
      b.setUserInfo = function (a) {
        return this;
      };
      b.setDynamicStatusHeader = function (a) {
        return this;
      };
      b.getPerSessionSampleRate = function () {
        return this.$3;
      };
      b.setMediaSourceSourceBuffer = function (a, b) {
        this.$52.set(a, b);
        return this;
      };
      b.unsetMediaSourceSourceBuffers = function () {
        this.$52.clear();
        return this;
      };
      b.getError = function () {
        return this.$2;
      };
      b.getResult = function () {
        return this.$4;
      };
      b.getType = function () {
        return this.$5;
      };
      b.getClientTimeBegin = function () {
        return this.$6;
      };
      b.getClientTimeEnd = function () {
        return this.$7 != null
          ? this.$6 != null
            ? this.$6 + this.$7
            : null
          : this.$8;
      };
      b.getTimeToRequestStart = function () {
        return this.$11;
      };
      b.getTimeToRequestSent = function () {
        return this.$12;
      };
      b.getReason = function () {
        return this.$13;
      };
      b.getResource = function () {
        return this.$14;
      };
      b.getOperationName = function () {
        return this.$1;
      };
      b.getSegmentStartTime = function () {
        return this.$16;
      };
      b.getSegmentEndTime = function () {
        return this.$17;
      };
      b.getLength = function () {
        return this.$18;
      };
      b.getLiveheadPosition = function () {
        return this.$19;
      };
      b.getManifestType = function () {
        return this.$22;
      };
      b.getPriorityFloat = function () {
        return this.$25;
      };
      b.getAppendedBufferMs = function () {
        return this.$26;
      };
      b.getInitiator = function () {
        return this.$27;
      };
      b.getPreloadTime = function () {
        return this.$28;
      };
      b.getConcluder = function () {
        return this.$29;
      };
      b.getContentLengthHeader = function () {
        return this.$34;
      };
      b.getOriginHitHeader = function () {
        return this.$36;
      };
      b.getEdgeHitHeader = function () {
        return this.$37;
      };
      b.getFNAHitHeader = function () {
        return this.$38;
      };
      b.getCode = function () {
        return this.$35;
      };
      b.getResponseTimeMsHeader = function () {
        return this.$39;
      };
      b.getIsTemplatedManifest = function () {
        return this.$40;
      };
      b.getOneObserved = function () {
        return this.$44;
      };
      b.getOneReqWave = function () {
        return this.$45;
      };
      b.getOneResWave = function () {
        return this.$46;
      };
      b.getAppendTarget = function () {
        return this.$47;
      };
      b.getIsRingBufferSample = function () {
        return this.$48;
      };
      b.getIsOnline = function () {
        return this.$49;
      };
      b.getProxyStatusHeader = function () {
        return this.$50;
      };
      b.getMediaSourceSourceBuffers = function () {
        return this.$52;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/shims/www/OzMaybeNativePromiseWWW',
  ['cr:3014'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = b('cr:3014');
  },
  98,
);
__d(
  'oz-player/shims/OzMaybeNativePromise',
  ['oz-player/shims/www/OzMaybeNativePromiseWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/OzMaybeNativePromiseWWW');
  },
  98,
);
__d(
  'oz-player/utils/OzErrorEmitter',
  ['oz-player/shims/OzEventEmitter', 'oz-player/shims/ozvariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        b === void 0 && (b = !1);
        d = a.call(this) || this;
        d.$OzErrorEmitter1 = !1;
        d.$OzErrorEmitter2 = !1;
        d.$OzErrorEmitter3 = [];
        d.emitError = function (a) {
          !d.$OzErrorEmitter1
            ? d.$OzErrorEmitter2
              ? d.$OzErrorEmitter3.push(a)
              : d.$OzErrorEmitter1 || c('oz-player/shims/ozvariant')(0, 14038)
            : d.emit('error', a);
        };
        d.$OzErrorEmitter2 = b;
        return d;
      }
      var d = b.prototype;
      d.onError = function (a) {
        this.$OzErrorEmitter1 = !0;
        a = this.addListener('error', a);
        this.$OzErrorEmitter2 &&
          this.$OzErrorEmitter3.length > 0 &&
          this.$OzErrorEmitter3.forEach(this.emitError);
        return a;
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/drm/OzDrmManager',
  [
    'oz-player/drm/OzDrmUtils',
    'oz-player/loggings/OzLoggingUtils',
    'oz-player/loggings/OzOperationLoggerBase',
    'oz-player/shims/OzDOMEventListener',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/utils/OzError',
    'oz-player/utils/OzErrorEmitter',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, e) {
        var f = this;
        e === void 0 && (e = null);
        this.$1 = null;
        this.$2 = new Map();
        this.$4 = !1;
        this.$6 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$7 = new (c('oz-player/utils/OzErrorEmitter'))();
        this.$8 = !1;
        this.$9 = null;
        this.$10 = 0;
        this.$12 = [];
        this.$14 = [];
        this.$24 = function (a, b) {
          a instanceof c('oz-player/loggings/OzOperationLoggerBase') &&
            a.getError() &&
            a.setResult('failed'),
            b != null && a.setReason(b);
        };
        this.$21 = function (a) {
          if (f.$4)
            return c('oz-player/shims/OzMaybeNativePromise').reject(
              new Error(
                'OzDrmManager destroyed before call to mediaKeySystemAccess.createMediaKeys().',
              ),
            );
          var b =
            f.$5.mediaKeys != null
              ? c('oz-player/shims/OzMaybeNativePromise').resolve(
                  f.$5.mediaKeys,
                )
              : a.createMediaKeys();
          b = b.then(function (b) {
            return { mediaKeySystemAccess: a, mediaKeys: b };
          });
          d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
            b,
            f.$3,
            'drm_create_media_keys',
            function () {},
            f.$24,
          );
          return b;
        };
        this.$22 = function (a) {
          if (f.$4)
            return c('oz-player/shims/OzMaybeNativePromise').reject(
              new Error('OzDrmManager destroyed before call to setMediaKeys()'),
            );
          var b = a.mediaKeySystemAccess,
            e = a.mediaKeys;
          if (!e)
            throw new (c('oz-player/utils/OzError'))({
              type: 'OZ_DRM_MANAGER',
              description: 'No mediaKeys for mediaKeySystemAccess',
            });
          a = f.$5.setMediaKeys(e).then(function () {
            if (f.$4)
              return c('oz-player/shims/OzMaybeNativePromise').reject(
                new Error(
                  'OzDrmManager destroyed after setMediaKeys() called.',
                ),
              );
            var a = Array.from(f.$2.values()).find(function (a) {
              return a.getKeySystem() === b.keySystem;
            });
            if (!a)
              throw new (c('oz-player/utils/OzError'))({
                type: 'OZ_DRM_MANAGER',
                description:
                  "Can't find OzDrmProvider for keySystem " + b.keySystem,
              });
            var d = a.getServerCertificate();
            return d
              ? e.setServerCertificate(d).then(function () {
                  return { mediaKeys: e, provider: a };
                })
              : { mediaKeys: e, provider: a };
          });
          d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
            a,
            f.$3,
            'drm_set_media_keys',
            function () {},
            f.$24,
          );
          return a;
        };
        this.$23 = function (a) {
          var b = a.mediaKeys,
            e = a.provider;
          a = e.getInitDatas();
          if (a.length === 0) {
            f.$6.addSubscriptions(
              c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
                f.$5,
                'encrypted',
                function (a) {
                  f.$25(b, e, a)['catch'](function (a) {
                    f.$17(a, 'encrypted');
                  });
                },
              ),
            );
            return c('oz-player/shims/OzMaybeNativePromise').resolve([]);
          }
          a = a.map(function (a) {
            return f.$25(b, e, { initData: a.data, initDataType: a.type });
          });
          a = c('oz-player/shims/OzMaybeNativePromise').all(a);
          d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
            a,
            f.$3,
            'drm_request_license',
            function () {},
            f.$24,
          );
          return a;
        };
        this.$5 = b;
        this.$1 = e;
        this.$3 = a.cloneContext().setType('drm_manager');
      }
      var b = a.prototype;
      b.hasContentProtections = function () {
        return this.$9;
      };
      b.onError = function (a) {
        return this.$7.onError(a);
      };
      b.$15 = function (a, b) {
        var d;
        a instanceof c('oz-player/utils/OzError')
          ? (d = a)
          : a instanceof Error
          ? (a.stack,
            (d = new (c('oz-player/utils/OzError'))({
              type: 'OZ_DRM_MANAGER',
              description: a.message,
              extra: { originalError: a },
            })))
          : a != null && typeof a.message === 'string'
          ? (d = new (c('oz-player/utils/OzError'))({
              type: 'OZ_DRM_MANAGER',
              description: a.message,
              extra: {},
            }))
          : (d = new (c('oz-player/utils/OzError'))({
              type: 'OZ_DRM_MANAGER',
              description: 'Unknown DRM ' + b + ' error',
              extra: {},
            }));
        return d;
      };
      b.$16 = function (a) {
        this.$7.emitError(a);
      };
      b.$17 = function (a, b) {
        var c;
        c =
          (c = (c = this.$1) == null ? void 0 : c.maxStartEMEAttempts) != null
            ? c
            : -1;
        this.$10 < c ? this.$18() : this.$16(this.$15(a, b));
      };
      b.addProvider = function (a) {
        this.$2.set(a.getSchemeId(), a);
      };
      b.getProviderForSchemeId = function (a) {
        return this.$2.get(a);
      };
      b.parseContentProtectionForRepresentation = function (a) {
        if (!a.ContentProtection) return null;
        var b = [];
        for (var c = 0; c < a.ContentProtection.length; c++) {
          var e = a.ContentProtection[c],
            f = e.$.schemeIdUri;
          f = this.getProviderForSchemeId(f);
          if (f) {
            var g = f.getInitDatas();
            if (
              g.length == 0 &&
              e['cenc:pssh'] &&
              e['cenc:pssh'].length === 1
            ) {
              e = (e = e['cenc:pssh'][0]._) != null ? e : '';
              e = d('oz-player/drm/OzDrmUtils').base64ToUint8Array(
                e.replace(/-/g, '+').replace(/_/g, '/'),
              );
              g = [{ data: e, type: 'cenc' }];
              f.setInitDatas(g);
            }
            b.push({ provider: f, initDatas: g });
          }
        }
        return b;
      };
      b.$18 = function () {
        try {
          (this.$8 = !1), this.startEME(this.$11, this.$12, this.$13, this.$14);
        } catch (b) {
          var a = b;
          this.$16(
            new (c('oz-player/utils/OzError'))({
              type: 'OZ_DRM_MANAGER',
              description: 'Restart EME failed with: ' + String(a),
              extra: {},
            }),
          );
        }
      };
      b.startEME = function (a, b, d, e) {
        var f = this;
        if (this.$8) return;
        this.$8 = !0;
        this.$10 += 1;
        this.$11 = a;
        this.$12 = b;
        this.$13 = d;
        this.$14 = e;
        var g = new Map();
        this.$19(d, e, g, 'audio');
        this.$19(a, b, g, 'video');
        var h;
        g.forEach(function (a, b) {
          !h
            ? (h = f.$20(b, a))
            : (h = h['catch'](function () {
                return f.$20(b, a);
              }));
        });
        if (!h) {
          this.$9 = !1;
          return;
        }
        this.$9 = !0;
        var i = this.$3.getOperationLogger('drm_setup').start();
        h.then(this.$21)
          .then(this.$22)
          .then(this.$23)
          .then(
            function () {
              return i.log();
            },
            function (a) {
              a =
                a != null
                  ? f.$15(a, 'keypromisechain')
                  : new (c('oz-player/utils/OzError'))({
                      type: 'OZ_DRM_MANAGER',
                      description: 'Unknown DRM setup error',
                      extra: {},
                    });
              f.$16(a);
              i.setResult('failed').setError(a).log();
            },
          );
      };
      b.$19 = function (a, b, c, d) {
        var e = this;
        b.forEach(function (b) {
          var f;
          a && a.ContentProtection
            ? (f = e.parseContentProtectionForRepresentation(a))
            : (f = b.getCustomField('drmProtections'));
          var g = b.getMimeCodecs();
          f != null &&
            f.forEach(function (a) {
              a = a.provider;
              var b = a.getKeySystem(),
                e = c.get(b);
              e ||
                ((e = {
                  audioCapabilities: new Map(),
                  videoCapabilities: new Map(),
                  distinctiveIdentifier: a.getRequireDistinctiveIdentifier(),
                  persistentState: a.getRequirePersistentState(),
                  sessionTypes: a.getDrmSessionTypes(),
                  initDataTypes: a.getInitDataTypes(),
                }),
                c.set(b, e));
              d === 'audio' &&
                !e.audioCapabilities.has(g) &&
                e.audioCapabilities.set(g, {
                  contentType: g,
                  robustness: a.getAudioRobustness(),
                });
              d === 'video' &&
                !e.videoCapabilities.has(g) &&
                e.videoCapabilities.set(g, {
                  contentType: g,
                  robustness: a.getVideoRobustness(),
                });
            });
        });
      };
      b.destroy = function () {
        this.$6.release(), (this.$4 = !0);
      };
      b.$20 = function (a, b) {
        var e = this,
          f = {
            audioCapabilities: Array.from(b.audioCapabilities.values()),
            videoCapabilities: Array.from(b.videoCapabilities.values()),
            distinctiveIdentifier: b.distinctiveIdentifier,
            persistentState: b.persistentState,
            sessionTypes: b.sessionTypes,
            initDataTypes: b.initDataTypes,
          };
        b = window.navigator.requestMediaKeySystemAccess(a, [f]);
        d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
          b,
          this.$3,
          'drm_request_media_key_system_access',
          function () {},
          function (b) {
            var d = null;
            b instanceof c('oz-player/loggings/OzOperationLoggerBase') &&
              b.getError() &&
              (d = 'keySystem: ' + a + ';domConfig: ' + JSON.stringify(f));
            return e.$24(b, d);
          },
        );
        return b;
      };
      b.$25 = function (a, b, d) {
        var e = this,
          f = a.createSession();
        this.$6.addSubscriptions(
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            f,
            'message',
            function (a) {
              e.$26(f, b, a)['catch'](function (a) {
                e.$17(a, 'message');
              });
            },
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            f,
            'keystatuseschange',
            function (a) {
              e.$27(f)['catch'](function (a) {
                e.$17(a, 'keystatuseschange');
              });
            },
          ),
        );
        return f.generateRequest(d.initDataType, d.initData);
      };
      b.$26 = function (a, b, d) {
        var e = this;
        d = b.getLicenseRequestInfo(d.message.slice(0));
        var f = this.$3
          .getOperationLogger('drm_fetch_license')
          .setResource(d.url)
          .start();
        return window.fetch(d.url, d).then(function (d) {
          (d == null ? void 0 : d.ok)
            ? f
                .setResult('success')
                .setCode(d == null ? void 0 : d.status)
                .log()
            : f
                .setResult('failed')
                .setCode(d == null ? void 0 : d.status)
                .setError(new Error('HTTP status not OK'))
                .log();
          return d.arrayBuffer().then(function (f) {
            var g = new Uint8Array(f);
            g = b.parseLicenseResponse(g);
            if (g == null || g.byteLength === 0) {
              var h = new Error('License is null, undefined, or 0 bytes.');
              h = (d == null ? void 0 : d.ok)
                ? h
                : new Error('HTTP status not OK');
              h =
                (d == null ? void 0 : d.ok) && f.byteLength !== 0
                  ? h
                  : new Error(
                      'Received an OK response, but response body is 0 bytes',
                    );
              f = new (c('oz-player/utils/OzError'))({
                type: 'OZ_DRM_MANAGER',
                description: 'No license for ' + b.getKeySystem(),
                extra: {
                  originalError: h,
                  code: d == null ? void 0 : d.status.toString(),
                  headers: d == null ? void 0 : d.headers,
                  url: d == null ? void 0 : d.url,
                },
              });
              h =
                (h = (h = e.$1) == null ? void 0 : h.throwNoLicenseError) !=
                null
                  ? h
                  : !1;
              if (h) throw f;
              else e.$16(f);
            } else a.update(g);
          });
        });
      };
      b.$27 = function (a) {
        return a.expiration < Date.now()
          ? a.close()
          : c('oz-player/shims/OzMaybeNativePromise').resolve();
      };
      return a;
    })();
    g.OzDrmManager = a;
  },
  98,
);
__d(
  'oz-player/loggings/OzDevConsolePerfLogger',
  [
    'oz-player/loggings/OzOperationLoggerBase',
    'oz-player/loggings/OzPerfLoggerProviderBase',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h() {
      var a;
      for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      (a = console).debug.apply(a, ['[oz]'].concat(c));
    }
    function i() {
      var a;
      for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      (a = console).error.apply(a, ['[oz]'].concat(c));
    }
    function j(a, b) {
      return Math.floor(a).toString().padStart(b, '0');
    }
    function k(a, b) {
      b === void 0 && (b = null);
      var c = function (a) {
          return (
            j(a.getHours(), 2) +
            ':' +
            j(a.getMinutes(), 2) +
            ':' +
            j(a.getSeconds(), 2) +
            ' ' +
            j(a.getMilliseconds(), 3)
          );
        },
        d = b ? b - a : 0;
      return '[' + c(a) + (b ? ' - ' + c(b) : '') + ' (' + d + ' ms)]';
    }
    function l(a) {
      return a === 'failed' ? i : h;
    }
    function m(a) {
      return a == null || a === 0 ? null : a.toFixed(2);
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.createOperationLogger = function (a) {
        return new n(a);
      };
      c.createLoggerProvider = function () {
        return new b();
      };
      return b;
    })(c('oz-player/loggings/OzPerfLoggerProviderBase'));
    var n = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a() {
        return b.apply(this, arguments) || this;
      }
      var c = a.prototype;
      c.log = function () {
        b.prototype.log.call(this);
        var a = this.getClientTimeBegin() || 0,
          c = this.getClientTimeEnd();
        c = c != null && c !== 0 ? new Date(c) : null;
        var d = this.getResult() || 'success',
          e = this.getType(),
          f = this.getInitiator(),
          g = this.getResource(),
          h = m(this.getSegmentStartTime()),
          i = m(this.getSegmentEndTime());
        l(d)(
          '[' + d + ']',
          this.getOperationName() + ': ' + k(new Date(a), c),
          e != null && e !== '' ? '[' + e + ']' : '',
          h != null && h !== '' && i != null && i !== ''
            ? '[segment time range: ' + h + ' - ' + i + ']'
            : '',
          f || '',
          g || '',
        );
      };
      return a;
    })(c('oz-player/loggings/OzOperationLoggerBase'));
    g.OzDevConsolePerfLoggerProvider = a;
    g.OzDevConsoleOperationLogger = n;
  },
  98,
);
__d(
  'oz-player/loggings/OzMultiDestinationPerfLogger',
  [
    'oz-player/loggings/OzOperationLoggerBase',
    'oz-player/loggings/OzPerfLoggerProviderBase',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.$OzMultiDestinationPerfLoggerProvider1 = b;
        return c;
      }
      var c = b.prototype;
      c.createOperationLogger = function (a) {
        return new h(
          a,
          this.$OzMultiDestinationPerfLoggerProvider1.map(function (b) {
            return b.getOperationLogger(a);
          }),
        );
      };
      c.createLoggerProvider = function () {
        return new b(this.$OzMultiDestinationPerfLoggerProvider1);
      };
      return b;
    })(c('oz-player/loggings/OzPerfLoggerProviderBase'));
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, c) {
        a = b.call(this, a) || this;
        a.$OzMultiDestinationOperationLogger1 = c;
        return a;
      }
      var c = a.prototype;
      c.start = function () {
        b.prototype.start.call(this);
        this.$OzMultiDestinationOperationLogger1.forEach(function (a) {
          return a.start();
        });
        return this;
      };
      c.setPerSessionSampleRate = function (a) {
        b.prototype.setPerSessionSampleRate.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPerSessionSampleRate(a);
        });
        return this;
      };
      c.setResult = function (a) {
        b.prototype.setResult.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setResult(a);
        });
        return this;
      };
      c.setError = function (a) {
        b.prototype.setError.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setError(a);
        });
        return this;
      };
      c.setType = function (a) {
        b.prototype.setType.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setType(a);
        });
        return this;
      };
      c.setMediaSourcePreviousDuration = function (a) {
        b.prototype.setMediaSourcePreviousDuration.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setMediaSourcePreviousDuration(a);
        });
        return this;
      };
      c.setMediaSourceNewDuration = function (a) {
        b.prototype.setMediaSourceNewDuration.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setMediaSourceNewDuration(a);
        });
        return this;
      };
      c.setClientTimeBegin = function (a) {
        b.prototype.setClientTimeBegin.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setClientTimeBegin(a);
        });
        return this;
      };
      c.setClientTimeDuration = function (a) {
        b.prototype.setClientTimeDuration.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setClientTimeDuration(a);
        });
        return this;
      };
      c.setClientTimeEnd = function (a) {
        b.prototype.setClientTimeEnd.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setClientTimeEnd(a);
        });
        return this;
      };
      c.setSegmentCount = function (a) {
        b.prototype.setSegmentCount.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentCount(a);
        });
        return this;
      };
      c.setTimeToFirstByte = function (a) {
        b.prototype.setTimeToFirstByte.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToFirstByte(a);
        });
        return this;
      };
      c.setTimeToLastByte = function (a) {
        b.prototype.setTimeToLastByte.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToLastByte(a);
        });
        return this;
      };
      c.setTimeToRequestStart = function (a) {
        b.prototype.setTimeToRequestStart.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToRequestStart(a);
        });
        return this;
      };
      c.setTimeToRequestSent = function (a) {
        b.prototype.setTimeToRequestSent.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToRequestSent(a);
        });
        return this;
      };
      c.setReason = function (a) {
        b.prototype.setReason.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setReason(a);
        });
        return this;
      };
      c.setResource = function (a) {
        b.prototype.setResource.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setResource(a);
        });
        return this;
      };
      c.setSegmentStartTime = function (a) {
        b.prototype.setSegmentStartTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentStartTime(a);
        });
        return this;
      };
      c.setSegmentEndTime = function (a) {
        b.prototype.setSegmentEndTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentEndTime(a);
        });
        return this;
      };
      c.setAppendedBufferMs = function (a) {
        b.prototype.setAppendedBufferMs.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setAppendedBufferMs(a);
        });
        return this;
      };
      c.setLength = function (a) {
        b.prototype.setLength.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLength(a);
        });
        return this;
      };
      c.setLiveheadPosition = function (a) {
        b.prototype.setLiveheadPosition.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLiveheadPosition(a);
        });
        return this;
      };
      c.setLiveheadSeqNumHeader = function (a) {
        b.prototype.setLiveheadSeqNumHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLiveheadSeqNumHeader(a);
        });
        return this;
      };
      c.setLiveheadSeqNumMpd = function (a) {
        b.prototype.setLiveheadSeqNumMpd.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLiveheadSeqNumMpd(a);
        });
        return this;
      };
      c.setManifestType = function (a) {
        b.prototype.setManifestType.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setManifestType(a);
        });
        return this;
      };
      c.setPriorityFloat = function (a) {
        b.prototype.setPriorityFloat.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPriorityFloat(a);
        });
        return this;
      };
      c.setInitiator = function (a) {
        b.prototype.setInitiator.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setInitiator(a);
        });
        return this;
      };
      c.setPreloadTime = function (a) {
        b.prototype.setPreloadTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPreloadTime(a);
        });
        return this;
      };
      c.setConcluder = function (a) {
        b.prototype.setConcluder.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setConcluder(a);
        });
        return this;
      };
      c.setPreviousRepresentationID = function (a) {
        b.prototype.setPreviousRepresentationID.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPreviousRepresentationID(a);
        });
        return this;
      };
      c.setRepresentationID = function (a) {
        b.prototype.setRepresentationID.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setRepresentationID(a);
        });
        return this;
      };
      c.setState = function (a) {
        b.prototype.setState.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setState(a);
        });
        return this;
      };
      c.setContentLengthHeader = function (a) {
        b.prototype.setContentLengthHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setContentLengthHeader(a);
        });
        return this;
      };
      c.setEdgeHitHeader = function (a) {
        b.prototype.setEdgeHitHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setEdgeHitHeader(a);
        });
        return this;
      };
      c.setFNAHitHeader = function (a) {
        b.prototype.setFNAHitHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setFNAHitHeader(a);
        });
        return this;
      };
      c.setOriginHitHeader = function (a) {
        b.prototype.setOriginHitHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOriginHitHeader(a);
        });
        return this;
      };
      c.setCode = function (a) {
        b.prototype.setCode.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setCode(a);
        });
        return this;
      };
      c.setResponseTimeMsHeader = function (a) {
        b.prototype.setResponseTimeMsHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setResponseTimeMsHeader(a);
        });
        return this;
      };
      c.setIsTemplatedManifest = function (a) {
        b.prototype.setIsTemplatedManifest.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsTemplatedManifest(a);
        });
        return this;
      };
      c.setIsLatencyCachupEnabled = function (a) {
        b.prototype.setIsLatencyCachupEnabled.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsLatencyCachupEnabled(a);
        });
        return this;
      };
      c.setPlayerFormat = function (a) {
        b.prototype.setPlayerFormat.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPlayerFormat(a);
        });
        return this;
      };
      c.setIsP2pPlayback = function (a) {
        b.prototype.setIsP2pPlayback.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsP2pPlayback(a);
        });
        return this;
      };
      c.setOneObserved = function (a) {
        b.prototype.setOneObserved.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOneObserved(a);
        });
        return this;
      };
      c.setOneReqWave = function (a) {
        b.prototype.setOneReqWave.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOneReqWave(a);
        });
        return this;
      };
      c.setOneResWave = function (a) {
        b.prototype.setOneResWave.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOneResWave(a);
        });
        return this;
      };
      c.setAppendTarget = function (a) {
        b.prototype.setAppendTarget.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setAppendTarget(a);
        });
        return this;
      };
      c.setIsRingBufferSample = function (a) {
        b.prototype.setIsRingBufferSample.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsRingBufferSample(a);
        });
        return this;
      };
      c.setIsOnline = function (a) {
        b.prototype.setIsOnline.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsOnline(a);
        });
        return this;
      };
      c.setProxyStatusHeader = function (a) {
        b.prototype.setProxyStatusHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setProxyStatusHeader(a);
        });
        return this;
      };
      c.setPlaybackFbmsParam = function (a) {
        b.prototype.setPlaybackFbmsParam.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPlaybackFbmsParam(a);
        });
        return this;
      };
      c.setPreferredEdgeLatency = function (a) {
        b.prototype.setPreferredEdgeLatency.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPreferredEdgeLatency(a);
        });
        return this;
      };
      c.setUserInfo = function (a) {
        b.prototype.setUserInfo.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setUserInfo(a);
        });
        return this;
      };
      c.setDynamicStatusHeader = function (a) {
        b.prototype.setDynamicStatusHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setDynamicStatusHeader(a);
        });
        return this;
      };
      c.setMediaSourceSourceBuffer = function (a, c) {
        b.prototype.setMediaSourceSourceBuffer.call(this, a, c);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setMediaSourceSourceBuffer(a, c);
        });
        return this;
      };
      c.unsetMediaSourceSourceBuffers = function () {
        b.prototype.unsetMediaSourceSourceBuffers.call(this);
        this.$OzMultiDestinationOperationLogger1.forEach(function (a) {
          return a.unsetMediaSourceSourceBuffers();
        });
        return this;
      };
      c.log = function () {
        b.prototype.log.call(this),
          this.$OzMultiDestinationOperationLogger1.forEach(function (a) {
            return a.log();
          });
      };
      return a;
    })(c('oz-player/loggings/OzOperationLoggerBase'));
    g.OzMultiDestinationPerfLoggerProvider = a;
  },
  98,
);
__d(
  'oz-player/loggings/OzOperationLoggerObserver',
  ['oz-player/shims/OzSubscriptionsHandler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
      }
      var b = a.prototype;
      b.observe = function (a, b) {
        var c;
        a = a.map(function (a) {
          var c = a.setOperationLoggedListener(function (a) {
            var c = a.getClientTimeBegin() || 0,
              d = a.getClientTimeEnd() || 0;
            b.getOperationLogger(a.getOperationName())
              .setClientTimeBegin(c)
              .setClientTimeDuration(d - c)
              .setClientTimeEnd(d)
              .setLength(a.getLength())
              .setResult(a.getResult() || 'success')
              .setInitiator(a.getInitiator())
              .setType(a.getType())
              .log();
          });
          a.activate();
          return c;
        });
        (c = this.$1).addSubscriptions.apply(c, a);
      };
      b.destroy = function () {
        this.$1.release();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/www/OzNetworkDiagnosticsWWW',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a, b) {
      if (!a) return null;
      a = parseInt(a.get(b), 10);
      return !isNaN(a) && isFinite(a) ? a : null;
    }
    a = {
      getNextValidSegmentId: function (a) {
        return g(a, 'x-fb-next-valid-segment-id');
      },
      getResponseTimeMs: function (a) {
        return g(a, 'x-fb-response-time-ms');
      },
      getDvlSegmentPTS: function (a) {
        return g(a, 'x-fb-segment-pts-start');
      },
      getDvlStatus: function (a) {
        return a == null ? void 0 : a.get('x-fb-dynamic-status');
      },
      getUsableResponseSizeForBandwidthEstimation: function (a) {
        return g(a, 'x-fb-dynamic-predictive-response-chunk-size');
      },
      getBandwidthMeanEstimate: function (a) {
        return g(a, 'x-bwe-mean');
      },
      getBandwidthStandardDeviationEstimate: function (a) {
        return g(a, 'x-bwe-std-dev');
      },
      getTimeToFirstByteMsEstimate: function (a) {
        return g(a, 'x-mrtt-ms');
      },
    };
    b = a;
    f['default'] = b;
  },
  66,
);
__d(
  'oz-player/shims/OzNetworkDiagnostics',
  ['oz-player/shims/www/OzNetworkDiagnosticsWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/OzNetworkDiagnosticsWWW');
  },
  98,
);
__d(
  'oz-player/manifests/OzDynamicVideoLibrary',
  ['oz-player/shims/OzNetworkDiagnostics'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$4 = null;
        this.$5 = null;
        this.$6 = new RegExp(/(.*)\.(m4v|m4a)(\?|$)/);
        this.$7 = { m4a: { time: 0 }, m4v: { time: 0 } };
        this.$8 = { audio: 'm4a', video: 'm4v' };
        this.$9 = {};
        a = a.config;
        this.$3 = a;
      }
      var b = a.prototype;
      b.getLastSegmentStartPTS = function () {
        return this.$1;
      };
      b.getLast200RequestedTime = function () {
        return this.$5;
      };
      b.getLast200RequestedUrlDecisionMinTime = function () {
        var a = [];
        for (var b in this.$7) a.push(this.$7[b].time);
        return Math.min.apply(Math, a);
      };
      b.getLast200RequestedUrlDecisionTimeByMimeType = function (a) {
        return (a = this.$7[this.$8[a]]) == null ? void 0 : a.time;
      };
      b.updateWithResponse = function (a, b, d, e) {
        var f;
        if (!e.headers || e.status != 200) return;
        this.$5 = b;
        this.$1 =
          (f = c('oz-player/shims/OzNetworkDiagnostics').getDvlSegmentPTS(
            e.headers,
          )) != null
            ? f
            : this.$1;
        this.$2 = c('oz-player/shims/OzNetworkDiagnostics').getDvlStatus(
          e.headers,
        );
        this.$10(a, d);
        (this.$2 != null || this.$2 === '200') && (this.$4 = b);
      };
      b.$10 = function (a, b) {
        a = this.$6.exec(a);
        if (a != null) {
          a = a[2];
          b != null && (this.$7[a] = { time: b });
        }
      };
      b.shouldRequestDynamicInfo = function (a) {
        if (a !== 'video') return !1;
        this.$11(a);
        a = this.$12(a);
        return a != null &&
          a <= this.$3.getNumber('dvl_initial_segment_ignore_count')
          ? !1
          : this.$3.getNumber('dvl_update_interval_ms') == 0 ||
              this.$4 == null ||
              this.$4 + this.$3.getNumber('dvl_update_interval_ms') <=
                Date.now();
      };
      b.$11 = function (a) {
        this.$9[a] == null && (this.$9[a] = { segmentCount: 0 });
        return (this.$9[a].segmentCount =
          this.$9[a].segmentCount != null ? this.$9[a].segmentCount + 1 : 0);
      };
      b.$12 = function (a) {
        return this.$9[a].segmentCount;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/OzRepresentationBase',
  ['oz-player/shims/ozvariant', 'oz-player/utils/OzError'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, c, d, e, f, g, h, i) {
        (this.$1 = a),
          (this.$7 = b),
          (this.$2 = c),
          (this.$3 = d),
          (this.$4 = e),
          (this.$5 = f),
          (this.$6 = g),
          (this.$8 = h),
          (this.$9 = i);
      }
      var b = a.prototype;
      b.getID = function () {
        return this.$7;
      };
      b.getBandwidth = function () {
        return this.$6;
      };
      b.getMimeCodecs = function () {
        return this.$2;
      };
      b.getLang = function () {
        return this.$3;
      };
      b.getQualityLabel = function () {
        return this.$7;
      };
      b.getInitSegment = function () {
        return this.$4;
      };
      b.getCustomFieldFirstSegment = function () {
        return this.$8;
      };
      b.getCustomField = function (a) {
        if (this.$9 == null || !this.$9[a])
          throw new (c('oz-player/utils/OzError'))({
            type: 'OZ_REPRESENTATION_PARSER',
            description: 'Custom field ' + a + ' is not specified by caller',
            extra: { code: 'OZ_RP-8' },
          });
        a = this.$9[a];
        try {
          return a(this.$1);
        } catch (a) {
          return null;
        }
      };
      b.updateWith = function (b) {
        b instanceof a || c('oz-player/shims/ozvariant')(0, 229),
          this.$5.updateWith(b.$5);
      };
      b.getSegmentByTime = function (a) {
        return this.$5.getSegmentByTime(a);
      };
      b.getSegment = function (a) {
        return this.$5.getSegment(a);
      };
      b.getPredictedSegmentAfter = function (a) {
        return this.$5.getPredictedSegmentAfter(a);
      };
      b.canPredict = function () {
        return this.$5.canPredict();
      };
      b.canApproximateId = function () {
        return this.$5.canApproximateId();
      };
      b.getSegmentAfter = function (a) {
        return this.$5.getSegmentAfter(a);
      };
      b.isEndingSegment = function (a) {
        return this.$5.isEndingSegment(a);
      };
      b.addUpdateListener = function (a) {
        return this.$5.addUpdateListener(a);
      };
      b.getTimeRanges = function () {
        return this.$5.getTimeRanges();
      };
      b.blockTimeRange = function (a) {
        this.$5.blockTimeRange(a);
      };
      b.getEndingSegment = function () {
        return this.$5.getEndingSegment();
      };
      b.getMaxGopSec = function () {
        return this.$5.getMaxGopSec();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/OzVideoRepresentation',
  ['oz-player/manifests/OzRepresentationBase'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j, k, l) {
        c = a.call(this, b, c, d, e, f, g, h, i, j) || this;
        c.$OzVideoRepresentation5 = null;
        c.$OzVideoRepresentation1 = k;
        c.$OzVideoRepresentation2 = l;
        c.$OzVideoRepresentation4 = j;
        c.$OzVideoRepresentation3 = b;
        return c;
      }
      var c = b.prototype;
      c.getWidth = function () {
        return this.$OzVideoRepresentation1;
      };
      c.getHeight = function () {
        return this.$OzVideoRepresentation2;
      };
      c.getQualityLabel = function () {
        if (this.$OzVideoRepresentation5 != null)
          return this.$OzVideoRepresentation5;
        var a = this.$OzVideoRepresentation4
          ? this.$OzVideoRepresentation4.qualityLabel
          : null;
        a && (this.$OzVideoRepresentation5 = a(this.$OzVideoRepresentation3));
        (this.$OzVideoRepresentation5 == null ||
          this.$OzVideoRepresentation5 == '') &&
          (this.$OzVideoRepresentation5 = this.getHeight().toString() + 'p');
        return this.$OzVideoRepresentation5 || '';
      };
      return b;
    })(c('oz-player/manifests/OzRepresentationBase'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/media_source/OzMediaSeekableRangeManager',
  ['oz-player/shims/OzSubscriptionsHandler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        var d = this;
        this.$5 = function (a) {
          a === void 0 && (a = !0);
          var b = d.$2;
          if (!b) return;
          b = b.getTimeRanges();
          if (!b.length) return;
          b = b[b.length - 1];
          d.$1.updateDuration(b.endTime, a);
        };
        this.$1 = a;
        this.$3 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$4 = b;
      }
      var b = a.prototype;
      b.setTimeRangeProvider = function (a) {
        this.$3.release(),
          this.$3.engage(),
          this.$3.addSubscriptions(a.addUpdateListener(this.$5)),
          (this.$2 = a);
      };
      b.listenToMediaStreamInitAppended = function (a) {
        var b = this;
        return a.addListener('initAppended', function () {
          b.$5(!1);
        });
      };
      b.destroy = function () {
        this.$3.release();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/OzCreateErrorStream',
  ['oz-player/shims/OzStreams'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return new (d('oz-player/shims/OzStreams').OzReadableStream)({
        pull: function (b) {
          b.error(a);
        },
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/OzFetchAPI',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    b = function (b, c) {
      return a.fetch(b, c);
    };
    c = function (b, c) {
      return new a.Response(b, c);
    };
    f.fetch = b;
    f.Response = c;
  },
  66,
);
__d(
  'oz-player/shims/www/ozClearTimeoutWWW',
  ['clearTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('clearTimeout');
  },
  98,
);
__d(
  'oz-player/shims/ozClearTimeout',
  ['oz-player/shims/www/ozClearTimeoutWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/ozClearTimeoutWWW');
  },
  98,
);
__d(
  'oz-player/shims/www/ozSetTimeoutAcrossTransitionsWWW',
  ['setTimeoutAcrossTransitions'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('setTimeoutAcrossTransitions');
  },
  98,
);
__d(
  'oz-player/shims/ozSetTimeoutAcrossTransitions',
  ['oz-player/shims/www/ozSetTimeoutAcrossTransitionsWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/ozSetTimeoutAcrossTransitionsWWW');
  },
  98,
);
__d(
  'oz-player/networks/FetchWithTimeout',
  [
    'oz-player/shims/OzFetchAPI',
    'oz-player/shims/ozClearTimeout',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function b(b, e, f, g) {
      if (!d('oz-player/shims/OzFetchAPI').fetch)
        throw new Error('fetch api is missing');
      var h = null;
      if ('AbortController' in a && f != null && f != 0) {
        var i = new AbortController();
        h = c('oz-player/shims/ozSetTimeoutAcrossTransitions')(function () {
          return i.abort();
        }, f);
        f = { credentials: e, signal: i.signal };
      } else f = { credentials: e };
      g != null && (f = babelHelpers['extends']({}, f, { referrer: g }));
      return d('oz-player/shims/OzFetchAPI')
        .fetch(b, f)
        .then(function (a) {
          c('oz-player/shims/ozClearTimeout')(h);
          return a;
        });
    }
    g['default'] = b;
  },
  98,
);
__d(
  'oz-player/shims/interfaces/IOzWorkerClient',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = function (a) {
      (this.response = a.response), (this.lastRequestUrl = a.lastRequestUrl);
    };
    f.ResponseAndMetadata = a;
  },
  66,
);
__d(
  'oz-player/networks/OzHTTPHeaders',
  ['oz-player/shims/ozvariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.append = function (a, b) {
        a = a.toLowerCase();
        var c = this.$1.get(a);
        c != null ? this.$1.set(a, c + ', ' + b) : this.$1.set(a, b);
      };
      b.get = function (a) {
        a = a.toLowerCase();
        a = this.$1.get(a);
        return (a = a) != null ? a : null;
      };
      b.entries = function () {
        return this.$1.entries();
      };
      b.has = function (a) {
        return this.get(a) !== null;
      };
      return a;
    })();
    e = a.Headers;
    f = e && e.prototype;
    var h =
      e &&
      f &&
      typeof f.append === 'function' &&
      typeof f.entries === 'function' &&
      typeof f.get === 'function' &&
      typeof f.has === 'function'
        ? e
        : d;
    function b(a) {
      if (a == null) return null;
      if (
        typeof a === 'object' &&
        typeof a.append === 'function' &&
        typeof a.get === 'function' &&
        typeof a.has === 'function'
      )
        if (typeof a.entries === 'function') return a;
        else if (typeof a.forEach === 'function') {
          var b = new h();
          a.forEach(function (a, c) {
            b.append(c, a);
          });
          return b;
        }
      c('oz-player/shims/ozvariant')(
        !1,
        'Malformed Headers object: %s %s',
        typeof a,
        String(a),
      );
      return null;
    }
    g.OzHTTPHeaders = h;
    g.maybeConvertHeadersToOzHTTPHeaders = b;
  },
  98,
);
__d(
  'oz-player/utils/arrayBuffer2OzReadableStream',
  ['oz-player/shims/OzStreams'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return new (d('oz-player/shims/OzStreams').OzReadableStream)({
        start: function (b) {
          var c = new Uint8Array(a);
          b.enqueue(c);
          b.close();
        },
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/maybeConvertReadableStreamToOzReadableStream',
  ['oz-player/shims/OzStreams', 'regeneratorRuntime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (!d('oz-player/shims/OzStreams').OzReadableStreamIsPolyfilled)
        return a;
      var c = a.getReader();
      return new (d('oz-player/shims/OzStreams').OzReadableStream)({
        start: function (a) {
          var d;
          return b('regeneratorRuntime').async(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    e.next = 3;
                    return b('regeneratorRuntime').awrap(c.read());
                  case 3:
                    d = e.sent;
                    if (!d.done) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt('break', 9);
                  case 6:
                    a.enqueue(d.value);
                    e.next = 0;
                    break;
                  case 9:
                    a.close();
                  case 10:
                  case 'end':
                    return e.stop();
                }
            },
            null,
            this,
          );
        },
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/processFetchResponse',
  [
    'oz-player/networks/OzHTTPHeaders',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/utils/arrayBuffer2OzReadableStream',
    'oz-player/utils/maybeConvertReadableStreamToOzReadableStream',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.body,
        e = a.ok,
        f = a.status,
        g = a.headers;
      return b != null
        ? c('oz-player/shims/OzMaybeNativePromise').resolve({
            ok: e,
            status: f,
            headers: d(
              'oz-player/networks/OzHTTPHeaders',
            ).maybeConvertHeadersToOzHTTPHeaders(g),
            body: c(
              'oz-player/utils/maybeConvertReadableStreamToOzReadableStream',
            )(b),
            arrayBuffer: function () {
              return a.arrayBuffer();
            },
          })
        : a.arrayBuffer().then(function (a) {
            return {
              ok: e,
              status: f,
              headers: d(
                'oz-player/networks/OzHTTPHeaders',
              ).maybeConvertHeadersToOzHTTPHeaders(g),
              body: c('oz-player/utils/arrayBuffer2OzReadableStream')(a),
              arrayBuffer: function () {
                return c('oz-player/shims/OzMaybeNativePromise').resolve(a);
              },
            };
          });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/OzFetchRequestImplementation',
  [
    'oz-player/networks/FetchWithTimeout',
    'oz-player/shims/interfaces/IOzWorkerClient',
    'oz-player/utils/processFetchResponse',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e, f, g, h, i, j, k) {
      e = e ? e.networkTimeoutMs : null;
      var l;
      h == null || g == null
        ? (l = c('oz-player/networks/FetchWithTimeout')(
            a,
            b.credentials,
            e,
          ).then(function (a) {
            return new (d(
              'oz-player/shims/interfaces/IOzWorkerClient',
            ).ResponseAndMetadata)({ response: a });
          }))
        : (l = h.fetchAndMaybeAppend(a, b.credentials, e, g, i, j, k));
      return l.then(function (a) {
        var b = a.response,
          d = a.lastRequestUrl,
          e = b.ok,
          g = b.status,
          h = b.headers;
        return f != null && !e && typeof b.text === 'function'
          ? b.text().then(function (a) {
              a = {
                ok: e,
                status: g,
                headers: h,
                body: a,
                arrayBuffer: function () {
                  return b.arrayBuffer();
                },
              };
              if (d != null) return { response: a, lastRequestUrl: d };
              else return { response: a };
            })
          : c('oz-player/utils/processFetchResponse')(b).then(function (a) {
              if (d != null) return { response: a, lastRequestUrl: d };
              else return { response: a };
            });
      });
    }
    b = a;
    e = b;
    g['default'] = e;
  },
  98,
);
__d(
  'oz-player/networks/withRetries',
  [
    'Promise',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, d, e) {
      return new (b('Promise'))(function (f, g) {
        function h(i) {
          var j;
          return b('regeneratorRuntime').async(
            function (k) {
              while (1)
                switch ((k.prev = k.next)) {
                  case 0:
                    k.prev = 0;
                    k.t0 = f;
                    k.next = 4;
                    return b('regeneratorRuntime').awrap(a());
                  case 4:
                    k.t1 = k.sent;
                    k.t0(k.t1);
                    k.next = 11;
                    break;
                  case 8:
                    (k.prev = 8),
                      (k.t2 = k['catch'](0)),
                      i > 0
                        ? ((j = typeof e === 'function' ? e(d - i) : e),
                          c('oz-player/shims/ozSetTimeoutAcrossTransitions')(
                            function () {
                              h(i - 1);
                            },
                            j,
                          ))
                        : g(k.t2);
                  case 11:
                  case 'end':
                    return k.stop();
                }
            },
            null,
            this,
            [[0, 8]],
          );
        }
        h(d);
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/OzFetchWithCache',
  [
    'oz-player/networks/OzFetchRequestImplementation',
    'oz-player/networks/withRetries',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/utils/OzError',
    'oz-player/utils/arrayBuffer2OzReadableStream',
    'oz-player/utils/processFetchResponse',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.config,
        d = a.url,
        e = a.http,
        f = a.overrideOzRequestImplementation,
        g = a.options,
        h = a.prefetchCache,
        i = a.mediaStreamType,
        j = a.workerClient,
        k = a.onPerfEntryAvailable,
        l = a.dataAppendedCallback,
        m = a.dataAppendedErrorCallback,
        n =
          f != null
            ? function () {
                return f.apply(void 0, arguments).then(function (a) {
                  return { response: a };
                });
              }
            : c('oz-player/networks/OzFetchRequestImplementation');
      a = h ? h.getCacheValue(d) : null;
      h = a;
      a = !1;
      if (h)
        (a = !0),
          (h = h
            .then(function (a) {
              if (a.initiator === 'FETCH') {
                var b = a.response,
                  d = b.ok,
                  e = b.status,
                  f = b.headers;
                return !d && typeof a.response.text === 'function'
                  ? a.response.text().then(function (b) {
                      return {
                        ok: !1,
                        status: e,
                        headers: f,
                        body: b,
                        arrayBuffer: function () {
                          return a.response.arrayBuffer();
                        },
                      };
                    })
                  : c('oz-player/utils/processFetchResponse')(a.response);
              } else if (a.initiator === 'XHR_REQUEST') {
                b = c('oz-player/utils/arrayBuffer2OzReadableStream')(
                  a.response,
                );
                return {
                  body: b,
                  status: 200,
                  headers: null,
                  ok: !0,
                  arrayBuffer: function () {
                    return c('oz-player/shims/OzMaybeNativePromise').resolve(
                      a.response,
                    );
                  },
                };
              } else
                throw new (c('oz-player/utils/OzError'))({
                  type: 'OZ_UNEXPECTED_CACHE_INITIATOR',
                  description:
                    'Unable to handle request initiator: ' + a.initiator,
                });
            })
            .then(function (a) {
              return { response: a };
            })
            ['catch'](function (a) {
              return n(d, e, null, null, i, j, k, l, m);
            }));
      else {
        var o;
        o =
          (o = g == null ? void 0 : g.retryAttempts_SIDX_USE_ONLY) != null
            ? o
            : 0;
        if (o > 0) {
          var p;
          p =
            (p = g == null ? void 0 : g.retryTimeoutMs_SIDX_USE_ONLY) != null
              ? p
              : 100;
          h = c('oz-player/networks/withRetries')(
            function () {
              return n(d, e, g, b, i, j, k, l, m);
            },
            o,
            p,
          );
        } else h = n(d, e, g, b, i, j, k, l, m);
      }
      return { promise: h, retrievedFromCache: a };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/createNetworkError',
  ['oz-player/utils/OzError'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, d, e, f) {
      return new (c('oz-player/utils/OzError'))({
        type: 'OZ_NETWORK',
        description: f,
        extra: { originalError: a, code: b.toString(), headers: d, url: e },
      });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/OzCustomErrorCode',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      APPEND_BUFFER_UNKNOWN_ERROR: '21539',
      APPEND_BUFFER_INVALID_STATE_ERROR_SOURCE_BUFFER_HAS_BEEN_REMOVED: '21540',
      APPEND_BUFFER_MEDIA_ERROR_ATTRIBUTE_NOT_NULL: '21541',
      APPEND_BUFFER_SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE: '21542',
      SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR: '21543',
      SOURCE_BUFFER_MANAGER_CREATE_ERROR: '21544',
      SETUP_STREAMS_PROMISE_REJECTION: '21545',
      APPEND_BUFFER_QUOTA_EXCEEDED_ERROR: '21546',
      APPEND_BUFFER_INVALID_STATE_ERROR: '21547',
      SOURCE_BUFFER_MANAGER_UPDATEEND_UNKNOWN_ERROR: '21548',
      NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR: '21549',
      STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR: '21550',
      SOURCE_BUFFER_MANAGER_CLEAR_RANGE_FAILED: '21551',
    };
    b = a;
    f['default'] = b;
  },
  66,
);
__d(
  'oz-player/networks/OzNetworkRequestStream',
  [
    'oz-player/networks/OzCreateErrorStream',
    'oz-player/networks/OzFetchWithCache',
    'oz-player/networks/createNetworkError',
    'oz-player/shims/ozvariant',
    'oz-player/utils/OzCustomErrorCode',
    'oz-player/utils/OzError',
    'oz-player/utils/OzResourceTimingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$7 = !1;
        var b = a.config,
          c = a.baseUri,
          d = a.baseUriDecisionTime,
          e = a.options,
          f = a.requestParamCreator,
          g = a.networkRequestStreamHandlers,
          h = a.overrideOzRequestImplementation,
          i = a.prefetchCache,
          j = a.networkRequestStreamRetryHandler,
          k = a.dynamicVideoLibrary,
          l = a.mediaStreamType,
          m = a.workerClient,
          n = a.dataAppendedCallback;
        a = a.dataAppendedErrorCallback;
        this.$1 = c;
        this.$2 = e;
        this.$3 = f;
        this.$9 = (c = g) != null ? c : [];
        this.$10 = j;
        this.$8 = h;
        this.$11 = i;
        this.$12 = b;
        this.$13 = k;
        this.$14 = d;
        this.$15 = l;
        this.$16 = m;
        this.$17 = n;
        this.$18 = a;
      }
      var b = a.prototype;
      b.$19 = function (a) {
        var b = this;
        a = this.$3.createRequestParam(this.$1, a);
        var d = a.uri;
        a = a.http;
        d = d.toString();
        this.$4 = d;
        a = c('oz-player/networks/OzFetchWithCache')({
          config: this.$12,
          url: d,
          http: a,
          overrideOzRequestImplementation: this.$8,
          options: this.$2,
          prefetchCache: this.$11,
          mediaStreamType: this.$15,
          workerClient: this.$16,
          onPerfEntryAvailable: function (a) {
            b.$20(a);
          },
          dataAppendedCallback: this.$17,
          dataAppendedErrorCallback: this.$18,
        });
        var e = a.promise;
        a = a.retrievedFromCache;
        this.$7 = a;
        a = e.then(function (a) {
          a.lastRequestUrl != null && (b.$4 = a.lastRequestUrl);
          return a.response;
        });
        return { requestPromise: a, requestUrl: d };
      };
      b.startStream = function (a) {
        var b = this,
          d = this.$19(a),
          e = d.requestPromise,
          f = d.requestUrl,
          g = f,
          h = Date.now();
        return e
          .then(function (d) {
            var e;
            (e = b.$13) == null ? void 0 : e.updateWithResponse(f, h, b.$14, d);
            b.$6 = d;
            if (b.$10 != null && d.ok === !1)
              return b
                .$10(
                  d,
                  function () {
                    var d = b.$19(a),
                      c = d.requestPromise;
                    d = d.requestUrl;
                    g = d;
                    return c;
                  },
                  g,
                )
                ['catch'](function (a) {
                  throw new (c('oz-player/utils/OzError'))({
                    type: 'OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR',
                    description: a.message,
                    extra: {
                      originalError: a,
                      code: c('oz-player/utils/OzCustomErrorCode')
                        .NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR,
                      url: g,
                    },
                  });
                });
            else return d;
          })
          .then(
            function (a) {
              var d = [];
              for (var e = 0; e < b.$9.length; e++)
                try {
                  var f = b.$9[e].onResponse(a, g);
                  f && d.push(f);
                } catch (a) {
                  return c('oz-player/networks/OzCreateErrorStream')(a);
                }
              f = a.body;
              e = a.headers;
              var h = a.ok;
              a = a.status;
              if (!h)
                return c('oz-player/networks/OzCreateErrorStream')(
                  c('oz-player/networks/createNetworkError')(
                    new Error('HTTP status not OK'),
                    a,
                    e,
                    g,
                    typeof f === 'string' && f.length > 0 ? f : 'HTTP error.',
                  ),
                );
              (typeof f !== 'string' && typeof f.getReader === 'function') ||
                c('oz-player/shims/ozvariant')(0, 3287);
              h = f;
              for (a = 0; a < d.length; a++) h = h.pipeThrough(d[a]);
              return h;
            },
            function (a) {
              var d = [];
              for (var e = 0; e < b.$9.length; e++)
                try {
                  var f = b.$9[e].onError(a, g);
                  f && d.push(f);
                } catch (a) {
                  return c('oz-player/networks/OzCreateErrorStream')(a);
                }
              if (a instanceof TypeError) {
                f = a.message ? a.message : a.stack ? String(a.stack) : 'null';
                e = c('oz-player/networks/OzCreateErrorStream')(
                  c('oz-player/networks/createNetworkError')(
                    a,
                    0,
                    null,
                    g,
                    'Network failure: ' + f,
                  ),
                );
                for (f = 0; f < d.length; f++) e = e.pipeThrough(d[f]);
                return e;
              }
              throw a;
            },
          )
          ['catch'](function (a) {
            if (
              a instanceof c('oz-player/utils/OzError') &&
              a.getType() === 'OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR'
            )
              throw a;
            if (a.name === 'AbortError') {
              var d = b.$12.getBool('fix_dom_exception_as_message')
                ? a.message
                : a;
              return c('oz-player/networks/OzCreateErrorStream')({
                type: a.name,
                status: a.code,
                url: g,
                message: d,
              });
            }
            return c('oz-player/networks/OzCreateErrorStream')({
              type: 'stream_processing',
              status: 0,
              url: g,
              message: 'Stream processing error. ' + a,
            });
          });
      };
      b.$20 = function (a) {
        this.$5 = a;
      };
      b.getLastPerformanceEntry = function () {
        if (this.$5 != null) return this.$5;
        return this.$4 == null
          ? null
          : d(
              'oz-player/utils/OzResourceTimingUtils',
            ).getLatestResourceTimingEntry(this.$4);
      };
      b.getLastRequestUrl = function () {
        return this.$4;
      };
      b.getLastResponse = function () {
        return this.$6;
      };
      b.retrievedFromCache = function () {
        return this.$7;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/OzByteRange',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      return a.startByte === b.startByte;
    }
    function b(a, b) {
      return b.endByte === null ? !1 : a.startByte === b.endByte + 1;
    }
    function c(a, b) {
      return a.startByte < b.startByte
        ? !1
        : b.endByte == null || b.endByte >= a.startByte;
    }
    function d(a, b) {
      a = a;
      b = b;
      if (b.startByte < a.startByte) {
        var c = a;
        a = b;
        b = c;
      }
      if (a.endByte == null) return { startByte: a.startByte, endByte: null };
      if (b.startByte > a.endByte + 1) return null;
      c = b.endByte == null || b.endByte > a.endByte ? b.endByte : a.endByte;
      return { startByte: a.startByte, endByte: c };
    }
    function e(a, b) {
      if (b.endByte == null) return null;
      if (a.startByte > b.endByte)
        return { startByte: a.startByte, endByte: a.endByte };
      return a.endByte != null && a.endByte <= b.endByte
        ? null
        : { startByte: b.endByte + 1, endByte: a.endByte };
    }
    function g(a) {
      return a.endByte == null ? null : a.endByte - a.startByte + 1;
    }
    f.startsAtSame = a;
    f.startsImmediateAfter = b;
    f.startsDuring = c;
    f.union = d;
    f.disjoinAfter = e;
    f.getLength = g;
  },
  66,
);
__d(
  'oz-player/networks/OzProducerInterruptedError',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/shims/www/OzDeferredWWW',
  ['Deferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('Deferred');
  },
  98,
);
__d(
  'oz-player/shims/OzDeferred',
  ['oz-player/shims/www/OzDeferredWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/OzDeferredWWW');
  },
  98,
);
__d(
  'oz-player/networks/OzDeferredBuffer',
  [
    'oz-player/networks/OzProducerInterruptedError',
    'oz-player/shims/OzDeferred',
    'oz-player/shims/OzMaybeNativePromise',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        a === void 0 && (a = {});
        this.$2 = [];
        this.$3 = !1;
        this.$5 = 0;
        a = a;
        a = a.disableArrayShift;
        this.$1 = !!a;
      }
      var b = a.prototype;
      b.produce = function (a) {
        this.$6(a);
      };
      b.signalProducerInterruption = function () {
        this.$6(
          new (c('oz-player/networks/OzProducerInterruptedError'))(
            'producer interrupted',
          ),
        );
      };
      b.consume = function (a) {
        var b = this;
        if (this.$3)
          throw new Error(
            'A buffer can only be consumed by one client at a time',
          );
        this.$3 = !0;
        var d = c('oz-player/shims/OzMaybeNativePromise').resolve();
        this.isEmpty() &&
          ((this.$4 = new (c('oz-player/shims/OzDeferred'))(
            c('oz-player/shims/OzMaybeNativePromise'),
          )),
          (d = this.$4.getPromise()));
        return d.then(function () {
          if (b.$1) {
            if (b.$2[b.$5] === void 0)
              throw new Error('buffer has no value at position ' + b.$5);
          } else if (b.$2.length === 0) throw new Error('buffer length must not be 0');
          b.$4 = null;
          b.$3 = !1;
          var c = b.$1 ? b.$7(a) : b.$8(a);
          if (c instanceof Uint8Array) return c;
          throw c;
        });
      };
      b.$6 = function (a) {
        this.$2.push(a), this.$4 && this.$4.resolve();
      };
      b.$7 = function (a) {
        var b = this.$2[this.$5];
        if (b === void 0) return new Uint8Array([]);
        b = b;
        if (!(b instanceof Uint8Array)) {
          this.$2[this.$5] = void 0;
          this.$5++;
          return b;
        }
        if (a !== void 0 && b.length > a) {
          var c = b.slice(a);
          b = b.slice(0, a);
          this.$2[this.$5] = c;
        } else (this.$2[this.$5] = void 0), this.$5++;
        return b;
      };
      b.$8 = function (a) {
        if (this.$2.length === 0) return new Uint8Array([]);
        var b = this.$2[0];
        if (!(b instanceof Uint8Array)) {
          this.$2.shift();
          return b;
        }
        if (a !== void 0 && b.length > a) {
          var c = b.slice(a);
          b = b.slice(0, a);
          this.$2[0] = c;
        } else this.$2.shift();
        return b;
      };
      b.isEmpty = function () {
        return this.$1 ? this.$2[this.$5] === void 0 : this.$2.length === 0;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/ozPipeErrorTo',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      try {
        a == null ? void 0 : a.error(b);
      } catch (a) {}
    }
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/networks/OzPausableRangeStream',
  [
    'oz-player/manifests/OzByteRange',
    'oz-player/networks/OzDeferredBuffer',
    'oz-player/shims/OzDeferred',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/utils/ozPipeErrorTo',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h() {
      return new Error('Upstream has an inconsistent range');
    }
    var i = (function () {
      function a() {
        this.$1 = 0;
      }
      var b = a.prototype;
      b.setBytesToSkip = function (a) {
        this.$1 = a;
      };
      b.setBytesSkipped = function (a) {
        this.$1 -= a;
      };
      b.getBytesToSkip = function () {
        return this.$1;
      };
      b.hasMoreBytesToSkip = function () {
        return this.$1 > 0;
      };
      return a;
    })();
    a = (function () {
      function a(b, d, e, f, g) {
        var j = this;
        this.$5 = !1;
        this.$7 = 0;
        this.$8 = 0;
        this.$13 = !1;
        this.$14 = new i();
        this.$15 = !1;
        this.$16 = !1;
        this.$17 = !1;
        this.startStream = function () {
          j.$13 = !0;
          var b = { startByte: j.$1.startByte, endByte: j.$1.endByte };
          !j.$15
            ? (b.startByte += j.$8)
            : j.$8 && (j.$3.produce('skip_buffered_bytes'), (j.$8 = 0));
          var d = j.$4;
          return j.$2.startStream(b).then(function (b) {
            b.pipeTo(j.$16 ? d : j.$4)
              .then(function () {
                j.$12 && j.$12.resolve('stream_done');
              })
              ['catch'](function (b) {
                j.$12 &&
                  !j.$12.isSettled() &&
                  (j.$16 && b === a.STREAM_PAUSED
                    ? j.$12.resolve('stream_paused')
                    : j.$12.reject(b));
              });
            j.$12 = new (c('oz-player/shims/OzDeferred'))(
              c('oz-player/shims/OzMaybeNativePromise'),
            );
            return { statusPromise: j.$12.getPromise() };
          });
        };
        this.$18 = b;
        this.$19 = d;
        this.$1 = e;
        this.$2 = f;
        b = g || {};
        d = b.fixStreamingUndefinedEndByte;
        e = b.disableDeferredBufferArrayShift;
        f = b.enablePausableStreamResumeFromStartDangerously;
        g = b.fixPausePreReadableStream;
        b = b.throwErrorWhenAborted;
        this.$11 = !!d;
        this.$15 = !!f;
        this.$16 = !!g;
        this.$17 = !!b;
        this.$3 = new (c('oz-player/networks/OzDeferredBuffer'))({
          disableArrayShift: !!e,
        });
        this.$6 = new this.$18({
          start: function (a) {
            j.$10 = a;
          },
          pull: function (a) {
            if (
              ((j.$11 && j.$1.endByte === null && j.$5) || j.$7 === j.$20()) &&
              j.$3.isEmpty()
            ) {
              a.close();
              return c('oz-player/shims/OzMaybeNativePromise').resolve();
            }
            var b = function b() {
              var d = j.$14.hasMoreBytesToSkip()
                ? j.$14.getBytesToSkip()
                : void 0;
              return j.$3
                .consume(d)
                .then(function (d) {
                  if (j.$14.hasMoreBytesToSkip()) {
                    j.$14.setBytesSkipped(d.length);
                    return b();
                  }
                  j.$7 += d.length;
                  var e = j.$20();
                  e !== null &&
                    j.$7 > (e || 0) &&
                    c('oz-player/utils/ozPipeErrorTo')(j.$10, h());
                  a.enqueue(d);
                })
                ['catch'](function (a) {
                  if (a === 'skip_buffered_bytes') {
                    j.$14.setBytesToSkip(j.$7);
                    return b();
                  }
                  throw a;
                });
            };
            return b();
          },
          cancel: function (a) {
            j.$12 && j.$12.resolve('stream_cancelled'),
              c('oz-player/utils/ozPipeErrorTo')(j.$9, a);
          },
        });
        this.$4 = this.$21();
      }
      var b = a.prototype;
      b.$20 = function () {
        var a = this.$1,
          b = a.startByte;
        a = a.endByte;
        return a != null ? a - b + 1 : null;
      };
      b.$21 = function () {
        var a = this;
        return new this.$19({
          start: function (b) {
            a.$9 = b;
          },
          write: function (b) {
            a.$3.produce(b), (a.$8 += b.length);
          },
          close: function () {
            a.$5 = !0;
            var b = a.$1,
              d = b.endByte;
            b = b.startByte;
            a.$11 && d === null && a.$3.produce(new Uint8Array([]));
            d !== null &&
              a.$8 !== (d || 0) - b + 1 &&
              c('oz-player/utils/ozPipeErrorTo')(a.$10, h());
          },
          abort: function (b) {
            a.$12 &&
              (a.$17 ? a.$12.reject(b) : a.$12.resolve('stream_aborted')),
              c('oz-player/utils/ozPipeErrorTo')(a.$10, b);
          },
        });
      };
      b.getStream = function () {
        return this.$6;
      };
      b.pauseStream = function () {
        c('oz-player/utils/ozPipeErrorTo')(this.$9, a.STREAM_PAUSED),
          this.$12 && this.$12.resolve('stream_paused'),
          (this.$4 = this.$21());
      };
      b.getByteRange = function () {
        return this.$1;
      };
      b.getBytesStreamed = function () {
        return this.$7;
      };
      b.tryConcatByteRange = function (a) {
        if (
          this.$13 ||
          !d('oz-player/manifests/OzByteRange').startsImmediateAfter(a, this.$1)
        )
          return !1;
        this.$1 = { startByte: this.$1.startByte, endByte: a.endByte };
        return !0;
      };
      return a;
    })();
    a.STREAM_PAUSED = 'streamPaused';
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/RequestParamCreator',
  ['oz-player/shims/OzURI'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = function (a, b) {
      var d = this;
      this.createRequestParam = function (a, b) {
        var e = new (c('oz-player/shims/OzURI'))(a.toString());
        if (b) {
          a = b.startByte;
          var f = b.endByte;
          (a === 0 && f == null) ||
            (e.addQueryData({ bytestart: b.startByte }),
            f != null && e.addQueryData({ byteend: f }));
        }
        if (d.$2) {
          var g = d.$2(e);
          g &&
            Object.keys(g).forEach(function (a) {
              var b = g[a];
              e.addQueryData(a, b);
            });
        }
        a = d.$1 && d.$1(e) ? 'include' : 'same-origin';
        return { uri: e, http: { credentials: a } };
      };
      this.$1 = a;
      this.$2 = b;
    };
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/getOzSegmentStreamableRange',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      if (!a.length) return null;
      var b = a[0].getURI().toString(),
        c = a[0].getByteRange();
      if (!c) return null;
      var d = c;
      for (var e = 1; e < a.length; e++) {
        var f = a[e];
        if (f.getURI().toString() !== b) return null;
        f = f.getByteRange();
        if (!d || !f) return null;
        if (d.endByte === null || f.startByte !== d.endByte + 1) return null;
        d = f;
      }
      return { startByte: c.startByte, endByte: d.endByte };
    }
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/utils/OzNetworkRequestLoggingUtils',
  [
    'oz-player/shims/OzNetworkDiagnostics',
    'oz-player/utils/OzResourceTimingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
        return a ? parseInt(a.get('content-length'), 10) : null;
      },
      i = function (a) {
        return a ? a.get('x-fb-fna-hit') : null;
      },
      j = function (a) {
        return a ? a.get('x-fb-edge-hit') : null;
      },
      k = function (a) {
        return a ? a.get('x-fb-origin-hit') : null;
      },
      l = function (a) {
        return a ? parseInt(a.get('x-fb-dynamic-latest-segment-id'), 10) : null;
      },
      m = function (a, b) {
        b = d(
          'oz-player/utils/OzResourceTimingUtils',
        ).getLatestResourceTimingEntry(b);
        b &&
          a
            .setTimeToFirstByte(Math.round(b.responseStart - b.startTime))
            .setTimeToLastByte(Math.round(b.responseEnd - b.startTime))
            .setTimeToRequestStart(Math.round(b.requestStart - b.startTime));
      };
    a = function (a, b, d, e, f, g, n) {
      e.length && a.setSegmentCount(e.length),
        b != null && b !== '' && m(a, b),
        a
          .setResource(b != null && b !== '' ? b : null)
          .setInitiator(d ? 'prefetch' : 'fetch')
          .setTimeToRequestSent(Math.round(Math.floor(f)))
          .setLiveheadSeqNumHeader(l(n == null ? void 0 : n.headers))
          .setContentLengthHeader(h(n == null ? void 0 : n.headers))
          .setEdgeHitHeader(j(n == null ? void 0 : n.headers))
          .setOriginHitHeader(k(n == null ? void 0 : n.headers))
          .setFNAHitHeader(i(n == null ? void 0 : n.headers))
          .setResponseTimeMsHeader(
            c('oz-player/shims/OzNetworkDiagnostics').getResponseTimeMs(
              n == null ? void 0 : n.headers,
            ),
          )
          .setUserInfo({
            segmentPTSHeader: String(
              c('oz-player/shims/OzNetworkDiagnostics').getDvlSegmentPTS(
                n == null ? void 0 : n.headers,
              ),
            ),
          })
          .setCode(n == null ? void 0 : n.status)
          .setLength(g);
    };
    b = function (a, b, d, e, f, g, i) {
      b != null && b !== '' && m(a, b),
        a
          .setResource(b != null && b !== '' ? b : null)
          .setLiveheadSeqNumHeader(l(e == null ? void 0 : e.headers))
          .setContentLengthHeader(h(e == null ? void 0 : e.headers))
          .setEdgeHitHeader(j(e == null ? void 0 : e.headers))
          .setOriginHitHeader(k(e == null ? void 0 : e.headers))
          .setResponseTimeMsHeader(
            c('oz-player/shims/OzNetworkDiagnostics').getResponseTimeMs(
              e == null ? void 0 : e.headers,
            ),
          )
          .setCode(e == null ? void 0 : e.status)
          .setLength(d)
          .setClientTimeBegin(f)
          .setClientTimeDuration(g - f)
          .setClientTimeEnd(g)
          .setUserInfo(i != null && i > 0 ? { chunkSize: String(i) } : null);
    };
    g.setPerformanceLoggingAttributes = m;
    g.setFetchStreamLoggingAttributes = a;
    g.setBandwidthSampledLoggingAttributes = b;
  },
  98,
);
__d(
  'oz-player/networks/OzNetworkManager',
  [
    'oz-player/loggings/OzLoggingUtils',
    'oz-player/networks/OzNetworkRequestStream',
    'oz-player/networks/OzPausableRangeStream',
    'oz-player/networks/RequestParamCreator',
    'oz-player/networks/getOzSegmentStreamableRange',
    'oz-player/shims/OzStreams',
    'oz-player/shims/OzURI',
    'oz-player/shims/ozvariant',
    'oz-player/utils/OzNetworkRequestLoggingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$9 = null;
        var b = a.config,
          d = a.prefetchCache,
          e = a.networkRequestStreamHandlers,
          f = a.getOverrideOzRequestImplementation,
          g = a.getShouldIncludeCredentials,
          h = a.getCustomRequestParametersForURI,
          i = a.networkRequestStreamRetryHandler,
          j = a.setCustomFetchStreamLoggingAttributes,
          k = a.dynamicVideoLibrary,
          l = a.configureCustomRequestParametersForSegment,
          m = a.workerClient;
        a = a.onResourceTimingBufferFull;
        this.$2 = b;
        this.$7 = g;
        this.$8 = h;
        this.$1 = new (c('oz-player/networks/RequestParamCreator'))(
          this.$7,
          this.$8,
        );
        this.$3 = d;
        this.$4 = e;
        this.$5 = i;
        this.$6 = f;
        this.$9 = j;
        this.$10 = k;
        this.$11 = l;
        this.$12 = m;
        this.$13 = a;
      }
      var b = a.prototype;
      b.destroy = function () {};
      b.request = function (a, b, d, e, f, g, h) {
        d === void 0 && (d = null);
        e === void 0 && (e = null);
        f === void 0 && (f = null);
        g === void 0 && (g = null);
        h === void 0 && (h = null);
        a.length > 0 || c('oz-player/shims/ozvariant')(0, 212);
        var i = c('oz-player/networks/getOzSegmentStreamableRange')(a) || {
            startByte: 0,
            endByte: null,
          },
          j = this.$6 ? this.$6() : null,
          k = this.$14(a[0]);
        k = new (c('oz-player/networks/OzNetworkRequestStream'))({
          config: this.$2,
          baseUri: k,
          baseUriDecisionTime: null,
          options: e,
          requestParamCreator: this.$1,
          networkRequestStreamHandlers: this.$4,
          overrideOzRequestImplementation: j,
          prefetchCache: this.$3,
          networkRequestStreamRetryHandler: this.$5,
          mediaStreamType: f,
          workerClient: this.$12,
          dataAppendedCallback: g,
          dataAppendedErrorCallback: h,
        });
        return this.$15(i, k, b, d, a);
      };
      b.createPausableStream = function (a, b, d, e, f, g) {
        f === void 0 && (f = null);
        g === void 0 && (g = null);
        a.length > 0 || c('oz-player/shims/ozvariant')(0, 212);
        var h = c('oz-player/networks/getOzSegmentStreamableRange')(a) || {
            startByte: 0,
            endByte: null,
          },
          i = null,
          j = this.$2.getNumber('network_seg_timeout_ms');
        j > 0 && (i = { networkTimeoutMs: j });
        j = this.$6 ? this.$6() : null;
        var k = new (c('oz-player/networks/OzNetworkRequestStream'))({
          config: this.$2,
          baseUri: this.$14(a[0]),
          baseUriDecisionTime: a[0].getOptions().getSegmentNumDecisionTime(),
          options: i,
          requestParamCreator: this.$1,
          networkRequestStreamHandlers: this.$4,
          overrideOzRequestImplementation: j,
          prefetchCache: this.$3,
          networkRequestStreamRetryHandler: this.$5,
          dynamicVideoLibrary: this.$10,
          mediaStreamType: e,
          workerClient: this.$12,
          dataAppendedCallback: f,
          dataAppendedErrorCallback: g,
        });
        return {
          pausableStream: this.$16(h, k, b || null, d),
          loggingPayloads: {
            getRequestUrl: function () {
              return k.getLastRequestUrl() || null;
            },
            isPrefetch: function () {
              return k.retrievedFromCache();
            },
            segments: a,
            getResponse: function () {
              return k.getLastResponse();
            },
          },
        };
      };
      b.requestRawUrl = function (a, b, d) {
        d === void 0 && (d = null);
        var e = this.$6 ? this.$6() : null;
        a = new (c('oz-player/networks/OzNetworkRequestStream'))({
          config: this.$2,
          baseUri: new (c('oz-player/shims/OzURI'))(a),
          baseUriDecisionTime: null,
          options: b,
          requestParamCreator: this.$1,
          networkRequestStreamHandlers: this.$4,
          overrideOzRequestImplementation: e,
          prefetchCache: this.$3,
          networkRequestStreamRetryHandler: this.$5,
          dynamicVideoLibrary: this.$10,
          mediaStreamType: null,
          workerClient: this.$12,
          dataAppendedCallback: null,
          dataAppendedErrorCallback: null,
        });
        b = { startByte: 0, endByte: null };
        return this.$15(b, a, [], d);
      };
      b.$16 = function (a, b, e, f) {
        b = b;
        if (e != null)
          for (var g = 0; g < e.length; g++) {
            var h = e[g];
            b = h(this.$2, b, f, this.$13);
          }
        return new (c('oz-player/networks/OzPausableRangeStream'))(
          d('oz-player/shims/OzStreams').OzReadableStream,
          d('oz-player/shims/OzStreams').OzWritableStream,
          a,
          b,
          {
            fixStreamingUndefinedEndByte: !0,
            enablePausableStreamResumeFromStartDangerously: !0,
            fixPausePreReadableStream: !0,
            throwErrorWhenAborted: !0,
          },
        );
      };
      b.$15 = function (a, b, c, e, f) {
        var g = this;
        f === void 0 && (f = []);
        var h = this.$16(a, b, c, e);
        a = h.startStream();
        var i = this.$17(a);
        e &&
          d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
            i,
            e,
            'fetch_stream',
            function () {},
            function (a) {
              d(
                'oz-player/utils/OzNetworkRequestLoggingUtils',
              ).setFetchStreamLoggingAttributes(
                a,
                b.getLastRequestUrl(),
                b.retrievedFromCache(),
                f,
                0,
                h.getBytesStreamed(),
                b.getLastResponse(),
              );
              var c = g.$9;
              c && c(a, b.getLastRequestUrl(), b.getLastResponse());
            },
          );
        return {
          getStream: function () {
            return h.getStream();
          },
          cancel: function () {
            return h.pauseStream();
          },
          getStatusChangePromise: function () {
            return i;
          },
        };
      };
      b.$17 = function (a) {
        return a.then(function (a) {
          a = a.statusPromise;
          return a.then(function (a) {
            return 'done';
          });
        });
      };
      b.$14 = function (a) {
        var b = this.$11,
          d = new (c('oz-player/shims/OzURI'))(a.getURI().toString());
        if (b) {
          var e = b(a);
          e &&
            Object.keys(e).forEach(function (a) {
              var b = e[a];
              d.addQueryData(a, b);
            });
        }
        return d;
      };
      a.getStreamableSegmentsRange = function (a) {
        if (!a.length) return [];
        return !c('oz-player/networks/getOzSegmentStreamableRange')(a)
          ? [a[0]]
          : a.slice(0);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/Mpd',
  ['oz-player/shims/OzEventEmitter'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i) {
        var j;
        j = a.call(this) || this;
        j.$Mpd9 = !1;
        j.$Mpd1 = b;
        j.$Mpd5 = g;
        j.$Mpd2 = c;
        j.$Mpd3 = d;
        j.$Mpd4 = e;
        j.$Mpd6 = f;
        j.$Mpd7 = h;
        j.$Mpd8 = i;
        return j;
      }
      var c = b.prototype;
      c.markRefreshed = function () {
        this.$Mpd10 = Date.now();
      };
      c.getRefreshDate = function () {
        return this.$Mpd10;
      };
      c.updateLocation = function (a) {
        (this.$Mpd6 = a), (this.$Mpd9 = !0), this.emit('locationUpdated');
      };
      c.getLocation = function () {
        return this.$Mpd6;
      };
      c.getMinimumUpdatePeriod = function () {
        return this.$Mpd5;
      };
      c.getVideoRepresentations = function () {
        return this.$Mpd2;
      };
      c.getAudioRepresentations = function () {
        return this.$Mpd3;
      };
      c.getApplicationRepresentations = function () {
        return this.$Mpd4;
      };
      c.getCustomField = function (a) {
        var b = this.$Mpd7.get(a);
        if (!b) throw new Error('Custom parser not specified for field ' + a);
        try {
          return b(this.$Mpd1);
        } catch (a) {
          return null;
        }
      };
      c.isStaticMpd = function () {
        return this.$Mpd8;
      };
      c.updateWith = function (a) {
        this.$Mpd9 &&
          ((this.$Mpd9 = !1),
          this.$Mpd2.splice(0, this.$Mpd2.length),
          this.$Mpd3.splice(0, this.$Mpd3.length),
          this.$Mpd4.splice(0, this.$Mpd4.length)),
          (this.$Mpd1 = a.$Mpd1),
          this.$Mpd11(this.$Mpd2, a.getVideoRepresentations()),
          this.$Mpd11(this.$Mpd3, a.getAudioRepresentations()),
          this.$Mpd11(this.$Mpd4, a.getApplicationRepresentations()),
          (this.$Mpd8 = a.isStaticMpd()),
          (this.$Mpd5 = a.getMinimumUpdatePeriod()),
          this.emit('updated');
      };
      c.blockTimeRange = function (a) {
        this.$Mpd2.forEach(function (b) {
          return b.blockTimeRange(a);
        }),
          this.$Mpd3.forEach(function (b) {
            return b.blockTimeRange(a);
          }),
          this.$Mpd4.forEach(function (b) {
            return b.blockTimeRange(a);
          });
      };
      c.unblockTimeRange = function () {
        this.blockTimeRange({ startTime: 0, endTime: 0 });
      };
      c.$Mpd11 = function (a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e = !1;
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            if (d.getID() === g.getID()) {
              g.updateWith(d);
              e = !0;
              break;
            }
          }
          e || a.push(d);
        }
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/OzApplicationRepresentation',
  ['oz-player/manifests/OzRepresentationBase'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      return b;
    })(c('oz-player/manifests/OzRepresentationBase'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzSegmentTemplateParser',
  [
    'oz-player/manifests/OzSegmentOptions',
    'oz-player/parsers/OzDefaultSegmentTimelineParser',
    'oz-player/shims/OzURI',
    'oz-player/utils/OzUrlHelper',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function () {
      function a(a, b) {
        (this.$3 = new (c('oz-player/manifests/OzSegmentOptions'))()),
          (this.$2 = a),
          (this.$1 = b);
      }
      var b = a.prototype;
      b.getData = function () {
        return this.$1;
      };
      b.getTimeRange = function () {
        return { startTime: 0, endTime: 0 };
      };
      b.getByteRange = function () {
        return null;
      };
      b.getURI = function () {
        return this.$2;
      };
      b.getSequenceNumber = function () {
        return null;
      };
      b.getOptions = function () {
        return this.$3;
      };
      return a;
    })();
    a = (function () {
      function a(a, b, d, e, f) {
        (this.$2 = d),
          (this.$1 = b),
          (this.$3 = a),
          e
            ? (this.$4 = e)
            : (this.$4 = new (c(
                'oz-player/parsers/OzDefaultSegmentTimelineParser',
              ))()),
          (this.$5 = f);
      }
      var b = a.prototype;
      b.parseInitializationSegment = function () {
        var a = d('oz-player/utils/OzUrlHelper').joinUrlPaths(
          this.$2.baseUrl,
          this.$1.$.initialization,
        );
        return new h(new (c('oz-player/shims/OzURI'))(a), this.$5);
      };
      b.parseSegmentsContainer = function () {
        return this.$4.parseSegmentsContainer(this.$3, this.$2, this.$1);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/OzZeroTimeRangeSegment',
  ['oz-player/manifests/OzSegmentOptions'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d) {
        (this.$4 = new (c('oz-player/manifests/OzSegmentOptions'))()),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = d);
      }
      var b = a.prototype;
      b.getData = function () {
        return null;
      };
      b.getURI = function () {
        return this.$1;
      };
      b.getTimeRange = function () {
        return { startTime: 0, endTime: 0 };
      };
      b.getByteRange = function () {
        return { startByte: this.$2, endByte: this.$3 };
      };
      b.getSequenceNumber = function () {
        return null;
      };
      b.getOptions = function () {
        return this.$4;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/OzNetworkRequestStreamBandwidthReporter',
  [
    'oz-player/networks/OzTransformStream',
    'oz-player/shims/OzNetworkDiagnostics',
    'oz-player/utils/OzNetworkRequestLoggingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = (function () {
      function b(b) {
        var d = this;
        this.$8 = Date.now();
        this.$9 = Date.now();
        this.$10 = 0;
        this.$11 = 0;
        this.$12 = function () {};
        this.$13 = function () {};
        this.$14 = function () {};
        this.$16 = new (c('oz-player/networks/OzTransformStream'))();
        this.$19 = !1;
        this.$20 = !1;
        this.$21 = null;
        this.$22 = function (a) {
          d.$25();
          a.length != null && (d.$11 += a.length);
          d.$26();
          if (d.$18) return;
          d.$27();
        };
        this.$23 = function () {
          if (d.$21 != null && d.$21 > 0) return;
          var b = Date.now() - d.$8,
            c = d.$1.getLastPerformanceEntry();
          c &&
            d.$13(
              c.responseStart - c.requestStart,
              c.responseEnd - c.requestStart,
              d.$11,
            );
          !c && a.__isresourcetimingbufferfull && d.$15 && d.$15();
          d.$3 > 0 && b > 0 && d.$10 === 0 && d.$11 >= d.$3 && d.$28(d.$11, b);
        };
        var e = b.stream,
          f = b.loggerProvider,
          g = b.byteCountPerSample,
          h = b.minimumBytesToSampleOnClose,
          i = b.minimumSampleDuration,
          j = b.maximumSampleBandwidth,
          k = b.useResponseTimeMs,
          l = b.responseTimeHandicapMs,
          m = b.ignoreOnStreamWriteSamples;
        b = b.onResourceTimingBufferFull;
        this.$1 = e;
        this.$17 = f;
        this.$2 = g;
        this.$3 = h;
        this.$4 = i;
        this.$5 = j;
        this.$6 = k;
        this.$7 = l;
        this.$18 = m;
        this.$16.addListener('writableWrite', this.$22);
        this.$16.addListener('writableClose', this.$23);
        this.$15 = b;
      }
      var e = b.prototype;
      e.getTransformStream = function () {
        return this.$16;
      };
      e.onBandwidthSample = function (a) {
        this.$12 = a;
      };
      e.onNavigationTimingSample = function (a) {
        this.$13 = a;
      };
      e.onEstimateFromHeaders = function (a) {
        this.$14 = a;
      };
      e.$24 = function (a, b, c) {
        b = b - c;
        c = this.$17 ? this.$17.getOperationLogger('bandwidth_sampled') : null;
        if (c) {
          var e = Date.now(),
            f = e - b;
          d(
            'oz-player/utils/OzNetworkRequestLoggingUtils',
          ).setBandwidthSampledLoggingAttributes(
            c,
            this.$1.getLastRequestUrl(),
            a,
            this.$1.getLastResponse(),
            f,
            e,
            this.$21,
          );
          c.log();
        }
        this.$12(a, b);
      };
      e.$29 = function (a, b, c) {
        if (b - c <= 0) return !0;
        c = (a * 8) / (b / 1e3);
        return b < this.$4 && c > this.$5;
      };
      e.$28 = function (a, b) {
        var d = this.$1.getLastResponse();
        d = this.$6
          ? c('oz-player/shims/OzNetworkDiagnostics').getResponseTimeMs(
              d == null ? void 0 : d.headers,
            ) || 0
          : 0;
        this.$29(a, b, d) || this.$24(a, b, Math.max(d - this.$7, 0));
      };
      e.$25 = function () {
        var a;
        a = (a = this.$1.getLastResponse()) == null ? void 0 : a.headers;
        if (this.$20 || a == null) return;
        this.$20 = !0;
        var b = c(
            'oz-player/shims/OzNetworkDiagnostics',
          ).getBandwidthMeanEstimate(a),
          d = c(
            'oz-player/shims/OzNetworkDiagnostics',
          ).getBandwidthStandardDeviationEstimate(a);
        a = c(
          'oz-player/shims/OzNetworkDiagnostics',
        ).getTimeToFirstByteMsEstimate(a);
        b != null && d != null && a != null && this.$14(b, d, a);
      };
      e.$26 = function () {
        if (this.$19) return;
        if (this.$21 == null) {
          var a = this.$1.getLastResponse();
          this.$21 =
            c(
              'oz-player/shims/OzNetworkDiagnostics',
            ).getUsableResponseSizeForBandwidthEstimation(
              a == null ? void 0 : a.headers,
            ) || 0;
        }
        this.$21 != null &&
          this.$21 > 0 &&
          this.$11 >= this.$21 &&
          ((this.$19 = !0), this.$28(this.$11, Date.now() - this.$9));
      };
      e.$27 = function () {
        var a = Date.now(),
          b = a - this.$8;
        this.$2 > 0 &&
          this.$11 >= this.$10 + this.$2 &&
          !this.$29(this.$11, b, 0) &&
          (this.$24(this.$11 - this.$10, b, 0),
          (this.$8 = a),
          (this.$10 = this.$11));
      };
      return b;
    })();
    g['default'] = b;
  },
  98,
);
__d(
  'oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator',
  ['oz-player/networks/OzNetworkRequestStreamBandwidthReporter'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 2e5;
    function a(a, b, d, e, f) {
      return {
        startStream: function (g) {
          var i = new (c(
            'oz-player/networks/OzNetworkRequestStreamBandwidthReporter',
          ))({
            stream: b,
            loggerProvider: d,
            byteCountPerSample: a.getNumber('byte_count_per_sample', h),
            minimumBytesToSampleOnClose: a.getNumber(
              'minimum_bytes_to_sample_on_close',
              25e3,
            ),
            minimumSampleDuration: a.getNumber(
              'minimum_bandwidth_sample_duration',
              10,
            ),
            maximumSampleBandwidth: a.getNumber(
              'maximum_bandwidth_sample_bandwidth',
              1e8,
            ),
            useResponseTimeMs: a.getBool(
              'bandwidth_use_response_time_adjustment',
              !1,
            ),
            responseTimeHandicapMs: a.getNumber(
              'bandwidth_response_time_handicap',
              0,
            ),
            ignoreOnStreamWriteSamples: a.getBool(
              'bandwidth_ignore_on_stream_write_samples',
              !1,
            ),
            onResourceTimingBufferFull: f,
          });
          i.onBandwidthSample(function (a, b) {
            e.addBandwidthSample(a, b);
          });
          i.onNavigationTimingSample(function (b, c, d) {
            var f = a.getNumber(
              'time_to_first_byte_ignore_above_threshold_ms',
              0,
            );
            (f === 0 || b <= f) && e.addNavigationTimingSample(b, c, d);
          });
          i.onEstimateFromHeaders(function (a, b, c) {
            e.setBandwidthEstimateFromHeaders({
              meanEstimate: a,
              standardDeviationEstimate: b,
              timeToFirstByteMsEstimate: c,
            });
          });
          return b.startStream(g).then(function (a) {
            return b.retrievedFromCache()
              ? a
              : a.pipeThrough(i.getTransformStream());
          });
        },
      };
    }
    g.pipeStreamThroughBandwidthEstimator = a;
  },
  98,
);
__d(
  'oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter',
  [
    'oz-player/networks/OzBandwidthEstimator',
    'oz-player/networks/OzNetworkRequestStream',
    'oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return function (b, e, f, g) {
        var h = a === 'video';
        return e instanceof c('oz-player/networks/OzNetworkRequestStream') && h
          ? d(
              'oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator',
            ).pipeStreamThroughBandwidthEstimator(
              b.getLegacyConfig(),
              e,
              f,
              c('oz-player/networks/OzBandwidthEstimator'),
              g,
            )
          : e;
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/OzDataSegment',
  ['oz-player/manifests/OzSegmentOptions'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d, e, f) {
        (this.$6 = new (c('oz-player/manifests/OzSegmentOptions'))()),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = d),
          (this.$4 = e),
          (this.$5 = f);
      }
      var b = a.prototype;
      b.getData = function () {
        return null;
      };
      b.getURI = function () {
        return this.$1;
      };
      b.getTimeRange = function () {
        return { startTime: this.$2, endTime: this.$3 };
      };
      b.getByteRange = function () {
        return { startByte: this.$4, endByte: this.$5 };
      };
      b.getSequenceNumber = function () {
        return null;
      };
      b.getOptions = function () {
        return this.$6;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/www/OzDataViewReaderWWW',
  ['DataViewReader'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('DataViewReader');
  },
  98,
);
__d(
  'oz-player/shims/OzDataViewReader',
  ['oz-player/shims/www/OzDataViewReaderWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/OzDataViewReaderWWW');
  },
  98,
);
/**
 * License: https://www.facebook.com/legal/license/yWz46xmco3f/
 */
__d(
  'oz-player/parsers/OzMp4SidxParser',
  [
    'oz-player/manifests/OzDataSegment',
    'oz-player/manifests/OzSegmentOptions',
    'oz-player/shims/OzDataViewReader',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1936286840;
    function a(a, b, d, e) {
      var f = new (c('oz-player/shims/OzDataViewReader'))(
        new DataView(e.buffer),
      );
      e = f.readUint32();
      var g = f.readUint32();
      if (g !== h) throw new Error('Invalid box type, expected "sidx".');
      e == 1 && (e = f.readUint64());
      g = f.readUint8();
      f.skip(3);
      f.skip(4);
      var i = f.readUint32();
      if (!i) throw new Error('Invalid timescale.');
      var j;
      g == 0
        ? ((g = f.readUint32()), (j = f.readUint32()))
        : ((g = f.readUint64()), (j = f.readUint64()));
      f.skip(2);
      var k = f.readUint16(),
        l = g,
        m = d + e + j,
        n = 0,
        o = a.getBool('sidx_parser_memory_optimization'),
        p = [];
      g = function (a) {
        var d = f.readUint32(),
          e = (d & 2147483648) >>> 31;
        d = d & 2147483647;
        var g = f.readUint32();
        f.readUint32();
        if (e == 1) throw new Error('Heirarchical SIDXs are not supported.');
        var h = l / i,
          j = (l + g) / i;
        a === 0 && (n = h);
        var k = m,
          q = k + d - 1,
          r = new (c('oz-player/manifests/OzSegmentOptions'))();
        p.push(
          o
            ? new (c('oz-player/manifests/OzDataSegment'))(
                b,
                h - n,
                j - n,
                k,
                q,
              )
            : {
                getData: function () {
                  return null;
                },
                getURI: function () {
                  return b;
                },
                getTimeRange: function () {
                  return { startTime: h - n, endTime: j - n };
                },
                getByteRange: function () {
                  return { startByte: k, endByte: q };
                },
                getSequenceNumber: function () {
                  return null;
                },
                getOptions: function () {
                  return r;
                },
              },
        );
        l += g;
        m += d;
      };
      for (d = 0; d < k; d++) g(d);
      return p;
    }
    g.parse = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzSidxSegmentsContainer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.getSegmentByTime = function (a) {
        var b = this.$1();
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e = d.getTimeRange();
          if (e.startTime <= a && e.endTime > a) return d;
        }
        return null;
      };
      b.getSegmentAfter = function (a) {
        var b = this.$1(),
          c = b.findIndex(function (b) {
            return (
              b.getTimeRange().startTime === a.getTimeRange().startTime &&
              b.getTimeRange().endTime === a.getTimeRange().endTime
            );
          });
        return c >= 0 && c + 1 < b.length ? b[c + 1] : null;
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
        var b = this.$1();
        if (!b || !b.length) return !1;
        b = b[b.length - 1].getTimeRange();
        a = a.getTimeRange();
        return b.startTime === a.startTime && b.endTime === a.endTime;
      };
      b.getSegment = function (a) {
        return this.$1()[a] || null;
      };
      b.updateWith = function (a) {
        throw new Error('Not implemented: updatedWith');
      };
      b.addUpdateListener = function (a) {
        return this.$2.addListener('segment_updated', a);
      };
      b.getTimeRanges = function () {
        var a = this.$1();
        if (a.length === 0) return [];
        else {
          var b = a[0];
          a = a[a.length - 1];
          return [
            {
              startTime: b.getTimeRange().startTime,
              endTime: a.getTimeRange().endTime,
            },
          ];
        }
      };
      b.blockTimeRange = function () {};
      b.getEndingSegment = function () {
        var a = this.$1();
        return a.length > 0 ? a[a.length - 1] : null;
      };
      b.getMaxGopSec = function () {
        return null;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
/**
 * License: https://www.facebook.com/legal/license/yWz46xmco3f/
 */
__d(
  'oz-player/parsers/OzWebmSidxParser',
  [
    'oz-player/manifests/OzDataSegment',
    'oz-player/shims/OzDataViewReader',
    'oz-player/shims/ozvariant',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 440786851,
      i = 408125543,
      j = 357149030,
      k = 2807729,
      l = 17545,
      m = 475249515,
      n = 187,
      o = 179,
      p = 183,
      q = 241,
      r = [
        new Uint8Array([255]),
        new Uint8Array([127, 255]),
        new Uint8Array([63, 255, 255]),
        new Uint8Array([31, 255, 255, 255]),
        new Uint8Array([15, 255, 255, 255, 255]),
        new Uint8Array([7, 255, 255, 255, 255, 255]),
        new Uint8Array([3, 255, 255, 255, 255, 255, 255]),
        new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255]),
      ];
    function s(a, b) {
      if (!a && !b) return !0;
      if (!a || !b) return !1;
      if (a.length != b.length) return !1;
      for (var c = 0; c < a.length; ++c) if (a[c] != b[c]) return !1;
      return !0;
    }
    var t = (function () {
        function a(a, b) {
          (this.id = a), (this.$1 = b);
        }
        var b = a.prototype;
        b.getOffset = function () {
          return this.$1.byteOffset;
        };
        b.createParser = function () {
          return new u(this.$1);
        };
        b.getUint = function () {
          if (this.$1.byteLength > 8)
            throw new RangeError(
              'EbmlElement: Unsigned integer has too many bytes.',
            );
          if (this.$1.byteLength == 8 && this.$1.getUint8(0) & 224)
            throw new RangeError(
              'EbmlParser: Unsigned integer must be at most 53 bits.',
            );
          var a = 0;
          for (var b = 0; b < this.$1.byteLength; b++) {
            var c = this.$1.getUint8(b);
            a = 256 * a + c;
          }
          return a;
        };
        b.getFloat = function () {
          if (this.$1.byteLength == 4) return this.$1.getFloat32(0);
          else if (this.$1.byteLength == 8) return this.$1.getFloat64(0);
          else
            throw new RangeError(
              'EbmlElement: floating point numbers must be 4 or 8 bytes.',
            );
        };
        return a;
      })(),
      u = (function () {
        function a(a) {
          (this.$1 = a),
            (this.$2 = new (c('oz-player/shims/OzDataViewReader'))(this.$1));
        }
        var b = a.prototype;
        b.hasMoreData = function () {
          return this.$2.hasMoreData();
        };
        b.parseElement = function () {
          var b = this.$3(),
            c = this.$4(),
            d;
          a.$5(c)
            ? (d = this.$1.byteLength - this.$2.getCursor())
            : (d = a.$6(c));
          c =
            this.$2.getCursor() + d <= this.$1.byteLength
              ? d
              : this.$1.byteLength - this.$2.getCursor();
          d = new DataView(
            this.$1.buffer,
            this.$1.byteOffset + this.$2.getCursor(),
            c,
          );
          this.$2.skip(c);
          return new t(b, d);
        };
        b.$3 = function () {
          var a = this.$4();
          if (a.length > 7)
            throw new RangeError(
              'EbmlParser: EBML ID must be at most 7 bytes.',
            );
          var b = 0;
          for (var c = 0; c < a.length; c++) b = 256 * b + a[c];
          return b;
        };
        b.$4 = function () {
          var a = this.$2.readUint8(),
            b;
          for (b = 1; b <= 8; b++) {
            var c = 1 << (8 - b);
            if (a & c) break;
          }
          if (b > 8)
            throw new RangeError(
              'EbmlParser: Variable sized integer must fit within 8 bytes.',
            );
          c = new Uint8Array(b);
          c[0] = a;
          for (a = 1; a < b; a++) c[a] = this.$2.readUint8();
          return c;
        };
        a.$6 = function (a) {
          if (a.length == 8 && a[1] & 224)
            throw new RangeError(
              'EbmlParser: Variable sized integer value must be at most 53 bits.',
            );
          var b = 1 << (8 - a.length);
          b = a[0] & (b - 1);
          for (var c = 1; c < a.length; c++) b = 256 * b + a[c];
          return b;
        };
        a.$5 = function (a) {
          for (var b = 0; b < r.length; b++) if (s(a, r[b])) return !0;
          return !1;
        };
        return a;
      })();
    function v(a) {
      a = a.createParser();
      var b = 1e6,
        c = null;
      while (a.hasMoreData()) {
        var d = a.parseElement();
        d.id == k ? (b = d.getUint()) : d.id == l && (c = d.getFloat());
      }
      if (c == null) return null;
      d = b / 1e9;
      a = c * d;
      return { timecodeScale: d, duration: a };
    }
    function w(a, b, d, e, f, g) {
      a = [];
      b = b.createParser();
      var h = -1,
        i = -1;
      while (b.hasMoreData()) {
        var j = b.parseElement();
        if (j.id != n) continue;
        j = x(j);
        if (!j) continue;
        var k = e * j.unscaledTime;
        j = d + j.relativeOffset;
        h >= 0 &&
          (i >= 0 || c('oz-player/shims/ozvariant')(0, 4010),
          a.push(
            new (c('oz-player/manifests/OzDataSegment'))(g, h, k, i, j - 1),
          ));
        h = k;
        i = j;
      }
      if (h >= 0) {
        i >= 0 || c('oz-player/shims/ozvariant')(0, 4010);
        k = f;
        a.push(new (c('oz-player/manifests/OzDataSegment'))(g, h, k, i, null));
      }
      return a;
    }
    function x(a) {
      a = a.createParser();
      var b = a.parseElement();
      if (b.id != o) return null;
      b = b.getUint();
      a = a.parseElement();
      if (a.id != p) return null;
      a = a.createParser();
      var c = 0;
      while (a.hasMoreData()) {
        var d = a.parseElement();
        if (d.id != q) continue;
        c = d.getUint();
        break;
      }
      return { unscaledTime: b, relativeOffset: c };
    }
    function y(a) {
      a = a.createParser();
      var b = null;
      while (a.hasMoreData()) {
        var c = a.parseElement();
        if (c.id != j) continue;
        b = c;
        break;
      }
      return !b ? null : v(b);
    }
    function z(a) {
      a = new u(a);
      var b = a.parseElement();
      if (b.id != h) return null;
      b = a.parseElement();
      if (b.id != i) return null;
      a = b.getOffset();
      b = y(b);
      return !b
        ? null
        : {
            segmentOffset: a,
            timecodeScale: b.timecodeScale,
            duration: b.duration,
          };
    }
    function a(a, b, c, d) {
      d = new DataView(d.buffer);
      c = new DataView(c.buffer);
      d = z(d);
      if (!d) return [];
      c = new u(c);
      c = c.parseElement();
      return c.id != m
        ? []
        : w(a, c, d.segmentOffset, d.timecodeScale, d.duration, b);
    }
    g.parse = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzSidxSegmentsParser',
  [
    'oz-player/loggings/OzLoggingUtils',
    'oz-player/manifests/OzSegmentOptions',
    'oz-player/manifests/OzZeroTimeRangeSegment',
    'oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter',
    'oz-player/parsers/OzMp4SidxParser',
    'oz-player/parsers/OzSidxSegmentsContainer',
    'oz-player/parsers/OzWebmSidxParser',
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/shims/OzURI',
    'oz-player/utils/OzErrorEmitter',
    'oz-player/utils/OzReadableStreamUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      a = a.split('-');
      return {
        startByte: Number.parseInt(a[0], 10),
        endByte: Number.parseInt(a[1], 10),
      };
    }
    a = (function () {
      function a(a, b, d, e, f, g, h) {
        (this.$6 = new (c('oz-player/utils/OzErrorEmitter'))()),
          (this.$7 = []),
          (this.$9 = new (c('oz-player/shims/OzEventEmitter'))()),
          (this.$1 = b),
          (this.$2 = new (c('oz-player/shims/OzURI'))(d)),
          (this.$3 = e),
          (this.$5 = f),
          (this.$4 = g),
          (this.$8 = h.cloneContext().setType('sidx')),
          (this.$10 = a);
      }
      var b = a.prototype;
      b.onError = function (a) {
        return this.$6.onError(a);
      };
      b.parseInitializationSegment = function () {
        var a = this,
          b = this.$1.Initialization[0].$.range,
          d = h(b),
          e = new (c('oz-player/manifests/OzSegmentOptions'))();
        return this.$10.getBool('sidx_parser_memory_optimization')
          ? new (c('oz-player/manifests/OzZeroTimeRangeSegment'))(
              this.$2,
              d.startByte,
              d.endByte,
            )
          : {
              getData: function () {
                return null;
              },
              getURI: function () {
                return a.$2;
              },
              getTimeRange: function () {
                return { startTime: 0, endTime: 0 };
              },
              getByteRange: function () {
                return d;
              },
              getSequenceNumber: function () {
                return null;
              },
              getOptions: function () {
                return e;
              },
            };
      };
      b.parseSegmentsContainer = function () {
        var a = this,
          b = this.$11();
        d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
          b,
          this.$8,
          'process_sidx',
        );
        b['catch'](this.$6.emitError);
        return new (c('oz-player/parsers/OzSidxSegmentsContainer'))(
          function () {
            return a.$7;
          },
          this.$9,
        );
      };
      b.$12 = function (a, b, e) {
        a = new (c('oz-player/manifests/OzZeroTimeRangeSegment'))(
          a,
          b.startByte,
          b.endByte,
        );
        b = this.$5 + ';sidx';
        a = this.$4.request(
          [a],
          [
            c('oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter')(
              b,
            ),
          ],
          this.$8,
          {
            networkTimeoutMs: null,
            retryAttempts_SIDX_USE_ONLY: this.$10.getNumber(
              'sidx_segment_retry_attempts',
            ),
            retryTimeoutMs_SIDX_USE_ONLY: this.$10.getNumber(
              'sidx_segment_retry_interval_ms',
            ),
          },
          e,
        );
        b = a.getStream().getReader();
        return d('oz-player/utils/OzReadableStreamUtils').pumpAllData(b);
      };
      b.$11 = function () {
        var a = this,
          b = this.$1.$.indexRange,
          e = h(b);
        b = [this.$12(this.$2, e, null)];
        if (this.$3 === 'webm') {
          var f = h(this.$1.Initialization[0].$.range);
          b.push(this.$12(this.$2, f, null));
          f = c('oz-player/shims/OzMaybeNativePromise')
            .all(b)
            .then(function (b) {
              var c = b[0];
              b = b[1];
              a.$7 = d('oz-player/parsers/OzWebmSidxParser').parse(
                a.$10,
                a.$2,
                c,
                b,
              );
            });
        } else
          f = b[0].then(function (b) {
            a.$7 = d('oz-player/parsers/OzMp4SidxParser').parse(
              a.$10,
              a.$2,
              e.startByte,
              b,
            );
          });
        return f.then(function () {
          a.$9.emit('segment_updated');
        });
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzVideoContainerType',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return (a.split('/')[1] || '').trim();
    }
    f.parse = a;
  },
  66,
);
__d(
  'oz-player/utils/OzMimeUtil',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return (a.split('/')[0] || '').trim();
    }
    f.getMimeType = a;
  },
  66,
);
__d(
  'oz-player/parsers/OzRepresentationParserBase',
  [
    'oz-player/manifests/OzRepresentationBase',
    'oz-player/parsers/OzSegmentTemplateParser',
    'oz-player/parsers/OzSidxSegmentsParser',
    'oz-player/parsers/OzVideoContainerType',
    'oz-player/parsers/getMIMECodecs',
    'oz-player/shims/ozvariant',
    'oz-player/utils/OzError',
    'oz-player/utils/OzErrorEmitter',
    'oz-player/utils/OzMimeUtil',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d, e, f, g, h, i, j, k, l, m) {
        this.$6 = new (c('oz-player/utils/OzErrorEmitter'))();
        this.$1 = b;
        this.$7 = e;
        this.$8 = f;
        this.$10 = d;
        this.$11 = a;
        this.$12 = g;
        this.$2 = h;
        this.$3 = i;
        this.$4 = j;
        this.$5 = k;
        this.$13 = l;
        this.$14 = m;
        try {
          this.$8 = this.$8.cloneContext().setRepresentationID(this.parseID());
        } catch (a) {}
      }
      var b = a.prototype;
      b.$15 = function () {
        var a = this,
          b = this.$9;
        if (b) return b;
        if (this.$1.SegmentBase) {
          var e = this.$1.SegmentBase[0],
            f = this.$1.BaseURL[0]._;
          typeof f === 'string' || c('oz-player/shims/ozvariant')(0, 29051);
          b = new (c('oz-player/parsers/OzSidxSegmentsParser'))(
            this.$11,
            e,
            f,
            d('oz-player/parsers/OzVideoContainerType').parse(
              this.$1.$.mimeType,
            ),
            d('oz-player/utils/OzMimeUtil').getMimeType(this.$1.$.mimeType),
            this.$7,
            this.$8,
          );
          b.onError(function (b) {
            var c;
            if ((c = a.$14) == null ? void 0 : c.handleError(a.parseID(), b))
              return;
            return a.$6.emitError(b);
          });
        } else if (this.$1.SegmentTemplate)
          b = this.$16(this.$1.SegmentTemplate[0], { isShared: !1 });
        else if (this.$2) b = this.$16(this.$2[0], { isShared: !0 });
        else {
          e = new (c('oz-player/utils/OzError'))({
            type: 'OZ_REPRESENTATION_PARSER',
            description: 'Unrecognized representation type',
            extra: { code: 'OZ_RP-7' },
          });
          throw e;
        }
        this.$9 = b;
        return b;
      };
      b.$16 = function (a, b) {
        var d;
        a = a;
        b.isShared &&
          (a = babelHelpers['extends']({}, a, {
            $: babelHelpers['extends']({}, a.$, {
              initialization: a.$.initialization.replace(
                '$RepresentationID$',
                this.$1.$.id,
              ),
              media: a.$.media.replace('$RepresentationID$', this.$1.$.id),
            }),
          }));
        b = this.$10.mpdUrl;
        var e =
          this.$1.BaseURL && this.$1.BaseURL[0] ? this.$1.BaseURL[0]._ : null;
        e = e != null ? e : b;
        if (e == null) {
          var f = new (c('oz-player/utils/OzError'))({
            type: 'OZ_REPRESENTATION_PARSER',
            description: 'Missing mpd url for template manifest',
            extra: { code: 'OZ_RP-6' },
          });
          throw f;
        }
        f = this.$10.customSegmentTimelineParser;
        d =
          (d = this.$10.customRepresentationParsers) == null
            ? void 0
            : d.initializationBinary;
        d = d ? d(this.$1) : null;
        return new (c('oz-player/parsers/OzSegmentTemplateParser'))(
          this.$11,
          a,
          {
            baseUrl: e,
            mpdUrl: b,
            isStaticMpd: this.$12.manifestType === 'static',
            isTemplatedMpd: this.$12.manifestIsTemplated,
          },
          f,
          d,
        );
      };
      b.onError = function (a) {
        return this.$6.onError(a);
      };
      b.parseInitSegment = function () {
        return this.$15().parseInitializationSegment();
      };
      b.parseBandwidth = function () {
        return Number(this.$1.$.bandwidth);
      };
      b.parseMimeCodecs = function () {
        var a, b;
        a =
          (a = (a = this.$1.$.mimeType) != null ? a : this.$3) != null ? a : '';
        b = (b = (b = this.$1.$.codecs) != null ? b : this.$4) != null ? b : '';
        return c('oz-player/parsers/getMIMECodecs')(a, b);
      };
      b.parseLang = function () {
        return this.$5;
      };
      b.parseSegmentsContainer = function () {
        return this.$15().parseSegmentsContainer();
      };
      b.parseID = function () {
        return '' + this.$1.$.id;
      };
      b.parseCustomFieldFirstSegment = function () {
        var a = this.$10.customRepresentationParsers
          ? this.$10.customRepresentationParsers.firstSegmentParser
          : null;
        return a ? a(this.$1) : null;
      };
      b.parse = function () {
        return new (c('oz-player/manifests/OzRepresentationBase'))(
          this.$1,
          this.parseID(),
          this.parseMimeCodecs(),
          this.parseLang(),
          this.parseInitSegment(),
          this.parseSegmentsContainer(),
          this.parseBandwidth(),
          this.parseCustomFieldFirstSegment(),
          this.$10.customRepresentationParsers,
        );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzApplicationRepresentationParser',
  [
    'oz-player/manifests/OzApplicationRepresentation',
    'oz-player/parsers/OzRepresentationParserBase',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j, k, l) {
        b = a.call(this, b, c, d, e, f, g, h, i, j, k, l) || this;
        b.$OzApplicationRepresentationParser1 = c;
        b.$OzApplicationRepresentationParser2 = d;
        return b;
      }
      var d = b.prototype;
      d.parse = function () {
        var a =
          this.$OzApplicationRepresentationParser2.customRepresentationParsers;
        return new (c('oz-player/manifests/OzApplicationRepresentation'))(
          this.$OzApplicationRepresentationParser1,
          this.parseID(),
          this.parseMimeCodecs(),
          this.parseLang(),
          this.parseInitSegment(),
          this.parseSegmentsContainer(),
          this.parseBandwidth(),
          this.parseCustomFieldFirstSegment(),
          a,
        );
      };
      return b;
    })(c('oz-player/parsers/OzRepresentationParserBase'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/OzAudioRepresentation',
  ['oz-player/manifests/OzRepresentationBase'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j) {
        d = a.call(this, b, c, d, e, f, g, h, i, j) || this;
        d.$OzAudioRepresentation1 = b;
        d.$OzAudioRepresentation2 = c;
        d.$OzAudioRepresentation3 = h;
        return d;
      }
      var c = b.prototype;
      c.getBitrateKbps = function () {
        var a = 1024;
        return (this.$OzAudioRepresentation3 / a).toFixed(1) + 'Kbps';
      };
      c.getQualityLabel = function () {
        return this.$OzAudioRepresentation2;
      };
      return b;
    })(c('oz-player/manifests/OzRepresentationBase'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzAudioRepresentationParser',
  [
    'oz-player/manifests/OzAudioRepresentation',
    'oz-player/parsers/OzRepresentationParserBase',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j, k, l) {
        b = a.call(this, b, c, d, e, f, g, h, i, j, k, l) || this;
        b.$OzAudioRepresentationParser1 = c;
        b.$OzAudioRepresentationParser2 = d;
        return b;
      }
      var d = b.prototype;
      d.parse = function () {
        var a = this.$OzAudioRepresentationParser2.customRepresentationParsers;
        return new (c('oz-player/manifests/OzAudioRepresentation'))(
          this.$OzAudioRepresentationParser1,
          this.parseID(),
          this.parseMimeCodecs(),
          this.parseLang(),
          this.parseInitSegment(),
          this.parseSegmentsContainer(),
          this.parseBandwidth(),
          this.parseCustomFieldFirstSegment(),
          a,
        );
      };
      return b;
    })(c('oz-player/parsers/OzRepresentationParserBase'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzVideoRepresentationParser',
  [
    'oz-player/manifests/OzVideoRepresentation',
    'oz-player/parsers/OzRepresentationParserBase',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j, k, l, m) {
        b = a.call(this, b, c, d, e, f, g, h, i, j, k, l, m) || this;
        b.$OzVideoRepresentationParser1 = c;
        b.$OzVideoRepresentationParser2 = d;
        return b;
      }
      var d = b.prototype;
      d.parse = function () {
        var a = Number.parseInt(
            this.$OzVideoRepresentationParser1.$.height,
            10,
          ),
          b = Number.parseInt(this.$OzVideoRepresentationParser1.$.width, 10),
          d = this.$OzVideoRepresentationParser2.customRepresentationParsers;
        return new (c('oz-player/manifests/OzVideoRepresentation'))(
          this.$OzVideoRepresentationParser1,
          this.parseID(),
          this.parseMimeCodecs(),
          this.parseLang(),
          this.parseInitSegment(),
          this.parseSegmentsContainer(),
          this.parseBandwidth(),
          this.parseCustomFieldFirstSegment(),
          d,
          b,
          a,
        );
      };
      return b;
    })(c('oz-player/parsers/OzRepresentationParserBase'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzMpdParser',
  [
    'oz-player/manifests/Mpd',
    'oz-player/parsers/OzApplicationRepresentationParser',
    'oz-player/parsers/OzAudioRepresentationParser',
    'oz-player/parsers/OzVideoRepresentationParser',
    'oz-player/utils/OzError',
    'oz-player/utils/OzErrorEmitter',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d, e, f, g, h) {
        g === void 0 && (g = []),
          h === void 0 && (h = null),
          (this.$2 = new (c('oz-player/utils/OzErrorEmitter'))()),
          (this.$5 = a),
          (this.$1 = d),
          (this.$3 = e),
          (this.$4 = b),
          (this.$6 = f),
          (this.$7 = g),
          (this.$8 = h);
      }
      var b = a.prototype;
      b.onError = function (a) {
        return this.$2.onError(a);
      };
      b.parse = function (a) {
        a = a;
        var b = this.$4.createXmlParser().parse(a);
        b = b.MPD && b.MPD.length > 0 ? b.MPD[0] : null;
        if (!b) {
          var d = 2e3;
          throw new Error(
            'parsed manifest XML missing MPD node; truncated xml (' +
              d +
              '/' +
              a.length +
              '): ' +
              a.substring(0, d),
          );
        }
        d = b.Period && b.Period.length > 0 ? b.Period[0] : null;
        if (!d) {
          var e = 2e3;
          throw new Error(
            'parsed manifest XML missing Period node; truncated xml (' +
              e +
              '/' +
              a.length +
              '): ' +
              a.substring(0, e),
          );
        }
        a = d.AdaptationSet || [];
        e = this.$9(b);
        d = this.$10(b);
        var f = this.$11(a, 'video'),
          g = this.$5.getBool('mpd_parse_all_adaptation_sets')
            ? this.$12(
                this.$13(a, 'video'),
                c('oz-player/parsers/OzVideoRepresentationParser'),
                { manifestType: e, manifestIsTemplated: d },
              )
            : this.$14(f, c('oz-player/parsers/OzVideoRepresentationParser'), {
                manifestType: e,
                manifestIsTemplated: d,
              });
        g.sort(function (a, b) {
          return a.getHeight() - b.getHeight();
        });
        var h = this.$11(a, 'audio'),
          i = this.$14(h, c('oz-player/parsers/OzAudioRepresentationParser'), {
            manifestType: e,
            manifestIsTemplated: d,
          });
        i.sort(function (a, b) {
          return a.getBandwidth() - b.getBandwidth();
        });
        var j = [];
        if (this.$5.getBool('vtt_caption_representation')) {
          a = this.$13(a, 'application');
          j = this.$14(
            a[0],
            c('oz-player/parsers/OzApplicationRepresentationParser'),
            { manifestType: e, manifestIsTemplated: d },
          );
        }
        a = this.$4.mpdUrl;
        d = new (c('oz-player/manifests/Mpd'))(
          b,
          g,
          i,
          j,
          a,
          this.$15(b),
          this.$4.customParsers || new Map(),
          e === 'static',
        );
        if (this.$6) {
          j = this.$6;
          j.startEME(f, g, h, i);
        }
        return d;
      };
      b.$15 = function (a) {
        a = a.$.minimumUpdatePeriod || '';
        a = /\d+/g.exec(a);
        if (a && a.length) {
          a = a[0];
          return a ? Number.parseInt(a, 10) : null;
        }
        return null;
      };
      b.$9 = function (a) {
        return a.$.type || 'static';
      };
      b.$10 = function (a) {
        var b;
        b =
          (b = this.$4.customParsers) == null
            ? void 0
            : b.get('isLiveTemplated');
        if (!b) return !1;
        b = b(a);
        return typeof b === 'boolean' && b;
      };
      b.$11 = function (a, b) {
        return a.find(this.$16(b));
      };
      b.$13 = function (a, b) {
        return a.filter(this.$16(b));
      };
      b.$16 = function (a) {
        return function (b) {
          if (b.$.mimeType != null) return b.$.mimeType.indexOf(a) !== -1;
          b = b.Representation;
          return b && b.length > 0 && b[0].$.mimeType.indexOf(a) !== -1;
        };
      };
      b.$14 = function (a, b, c) {
        var d = this;
        return !a
          ? []
          : a.Representation.map(function (e) {
              e = new b(
                d.$5,
                e,
                d.$4,
                d.$1,
                d.$3,
                c,
                a.SegmentTemplate,
                a.$.mimeType,
                a.$.codecs,
                a.$.lang,
                d.$7,
                d.$8,
              );
              e.onError(d.$2.emitError);
              return e.parse();
            });
      };
      b.$12 = function (a, b, c) {
        var d = this,
          e = [],
          f = new Set(),
          g = 0;
        a.filter(Boolean).forEach(function (a, h, i) {
          h = h === i.length - 1;
          i = g;
          for (
            var j = a.Representation,
              k = Array.isArray(j),
              l = 0,
              j = k
                ? j
                : j[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var m, n;
            if (k) {
              if (l >= j.length) break;
              n = j[l++];
            } else {
              l = j.next();
              if (l.done) break;
              n = l.value;
            }
            n = n;
            var o = parseInt(n.$.height, 10);
            if (o <= g) continue;
            if (
              ((m = n.$.FBAbrPolicyTags) == null
                ? void 0
                : m.includes('avoid_on_abr')) &&
              !h
            )
              continue;
            m = new b(
              d.$5,
              n,
              d.$4,
              d.$1,
              d.$3,
              c,
              a.SegmentTemplate,
              a.$.mimeType,
              a.$.codecs,
              a.$.lang,
              d.$7,
              d.$8,
            );
            m.onError(d.$2.emitError);
            n = m.parse();
            if (!MediaSource.isTypeSupported(n.getMimeCodecs())) {
              f.add(n.getMimeCodecs());
              continue;
            }
            e.push(n);
            i = Math.max(o, i);
          }
          g = i;
        });
        this.$5.getBool('mpd_ensure_playable_representations') &&
          this.$17(e, f);
        return e;
      };
      b.$17 = function (a, b) {
        if (a.length <= 0) {
          a = new (c('oz-player/utils/OzError'))({
            type: 'OZ_INITIALIZATION',
            description:
              "Cannot play video: codecs in dash manifest aren't supported by your browser. Ignored codecs: " +
              Array.from(b).join(', '),
          });
          this.$2.emitError(a);
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/OzErrorUtils',
  ['oz-player/utils/OzError'],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      return new (c('oz-player/utils/OzError'))({
        type: a.getType(),
        description: a.getDescription(),
        extra: babelHelpers['extends']({}, a.getExtra(), { mimeType: b }),
      });
    }
    function b(a) {
      var b, d;
      a instanceof c('oz-player/utils/OzError')
        ? ((b = a.getExtra().code || ''), (d = a))
        : ((b =
            a.status != null && a.status !== '' ? a.status.toString() : '0'),
          (d = new (c('oz-player/utils/OzError'))({
            type: 'OZ_NETWORK',
            description: a.message,
            extra: { originalError: a, code: b, url: a.url },
          })));
      return [d, b];
    }
    g.getOzErrorWithMIMEType = a;
    g.getNormalizedErrorAndCode = b;
  },
  98,
);
__d(
  'oz-player/utils/OzMpdUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      var b = null;
      a.forEach(function (a) {
        if (a) {
          var c = a.endTime;
          c <
            ((c = (c = b) == null ? void 0 : c.endTime) != null
              ? c
              : Infinity) && (b = a);
        }
      });
      return b;
    }
    function a(a, b) {
      b = [];
      b.push.apply(
        b,
        a.getVideoRepresentations().concat(a.getAudioRepresentations()),
      );
      if (b.length) {
        a = b.map(function (a) {
          a = a.getEndingSegment();
          return a ? a.getTimeRange() : null;
        });
        return g(a);
      }
      return null;
    }
    function b(a) {
      var b = [];
      b.push.apply(
        b,
        a.getVideoRepresentations().concat(a.getAudioRepresentations()),
      );
      if (b.length) {
        a = b[0].getEndingSegment();
        if (a) return a.getSequenceNumber();
      }
      return null;
    }
    f.getLeastEndTimeTimeRange = g;
    f.getMpdLastTimeRange = a;
    f.getMpdLastSequenceNumber = b;
  },
  66,
);
__d(
  'oz-player/utils/OzStreamInterruptChecker',
  ['oz-player/shims/OzEventEmitter', 'oz-player/utils/OzMpdUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this) || this;
        d.$OzStreamInterruptChecker4 = 0;
        d.$OzStreamInterruptChecker5 = null;
        d.$OzStreamInterruptChecker6 = !1;
        d.$OzStreamInterruptChecker2 = b;
        d.$OzStreamInterruptChecker3 = c;
        d.$OzStreamInterruptChecker1 = d.$OzStreamInterruptChecker3.getNumber(
          'live_numerical_error_epsilon',
        );
        return d;
      }
      var c = b.prototype;
      c.notifyMpdUpdated = function () {
        var a = d('oz-player/utils/OzMpdUtils').getMpdLastTimeRange(
            this.$OzStreamInterruptChecker2,
            this.$OzStreamInterruptChecker3,
          ),
          b = a ? a.endTime : null,
          c = !1;
        b !== null && (c = b === this.$OzStreamInterruptChecker5);
        c
          ? this.$OzStreamInterruptChecker4++
          : ((this.$OzStreamInterruptChecker4 = 0),
            this.$OzStreamInterruptChecker6 &&
              this.$OzStreamInterruptChecker5 !== null &&
              this.$OzStreamInterruptChecker5 !== void 0 &&
              a !== null &&
              a !== void 0 &&
              this.emit('streamResumedAt', a.startTime),
            (this.$OzStreamInterruptChecker6 = !1));
        c = this.$OzStreamInterruptChecker3.getNumber(
          'stream_interrupt_check_mpd_stale_count_threshold',
        );
        !this.$OzStreamInterruptChecker6 &&
          c > 0 &&
          this.$OzStreamInterruptChecker4 >= c &&
          b !== null &&
          b !== void 0 &&
          (this.emit('streamInterruptAt', b),
          (this.$OzStreamInterruptChecker6 = !0));
        this.$OzStreamInterruptChecker5 = b;
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzMpdUpdater',
  [
    'oz-player/parsers/OzMpdParser',
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/shims/OzURI',
    'oz-player/shims/ozClearTimeout',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
    'oz-player/utils/OzError',
    'oz-player/utils/OzErrorEmitter',
    'oz-player/utils/OzErrorUtils',
    'oz-player/utils/OzMpdUtils',
    'oz-player/utils/OzReadableStreamUtils',
    'oz-player/utils/OzStreamInterruptChecker',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f, g, h, i, j, k) {
        var l;
        l = a.call(this) || this;
        l.$OzMpdUpdater8 = new (c('oz-player/utils/OzErrorEmitter'))();
        l.$OzMpdUpdater10 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        l.$OzMpdUpdater11 = !1;
        l.$OzMpdUpdater16 = 0;
        l.$OzMpdUpdater18 = 0;
        l.$OzMpdUpdater19 = null;
        l.$OzMpdUpdater21 = !0;
        l.$OzMpdUpdater22 = 0;
        l.$OzMpdUpdater25 = function () {
          var a,
            b = l.$OzMpdUpdater2.getLocation();
          l.$OzMpdUpdater21 = !1;
          if (b == null || b === '') return;
          var e = new (c('oz-player/shims/OzURI'))(b),
            f = String(
              (a =
                (a = e.getQueryData().ms) != null
                  ? a
                  : e.getQueryData().msdev) != null
                ? a
                : e.getQueryData().mstest,
            );
          if (!l.$OzMpdUpdater12.isPlaying()) {
            l.setupUpdateLoop();
            return;
          }
          var g = l.$OzMpdUpdater5
            .getOperationLogger('update_manifest')
            .start();
          l.$OzMpdUpdater27(b)
            .then(function (a) {
              var e;
              l.$OzMpdUpdater18 = 0;
              l.$OzMpdUpdater28();
              l.$OzMpdUpdater7 = 0;
              if (l.$OzMpdUpdater21) return;
              var h = babelHelpers['extends']({}, l.$OzMpdUpdater13, {
                mpdUrl: b,
              });
              h = new (c('oz-player/parsers/OzMpdParser'))(
                l.$OzMpdUpdater6,
                h,
                l.$OzMpdUpdater1,
                l.$OzMpdUpdater5,
                l.$OzMpdUpdater14,
              );
              h.onError(function (a) {
                l.$OzMpdUpdater8.emitError(a), g.setError(a).log();
              });
              h = h.parse(a);
              a = l.$OzMpdUpdater2.isStaticMpd();
              l.$OzMpdUpdater2.updateWith(h);
              l.$OzMpdUpdater2.markRefreshed();
              h.isStaticMpd() && !a && l.emit('streamTransitionToStatic');
              h = d('oz-player/utils/OzMpdUtils').getMpdLastTimeRange(
                l.$OzMpdUpdater2,
                l.$OzMpdUpdater6,
              );
              a = h && h.endTime != 0 ? h.endTime : null;
              h = String(
                (h =
                  (h = l.$OzMpdUpdater2) == null
                    ? void 0
                    : h.getCustomField('currentServerTimeMs')) != null
                  ? h
                  : '',
              );
              e = String(
                (e =
                  (e = l.$OzMpdUpdater2) == null
                    ? void 0
                    : e.getCustomField('lastVideoFrameTs')) != null
                  ? e
                  : '',
              );
              h = {
                currentServerTimeMs: h,
                ingestLastVideoFrameTs: e,
                nowMs: String(Date.now()),
              };
              g.setLiveheadPosition(a)
                .setLiveheadSeqNumMpd(
                  d('oz-player/utils/OzMpdUtils').getMpdLastSequenceNumber(
                    l.$OzMpdUpdater2,
                  ),
                )
                .setManifestType(
                  l.$OzMpdUpdater2.isStaticMpd() ? 'static' : 'dynamic',
                )
                .setIsTemplatedManifest(
                  Boolean(l.$OzMpdUpdater2.getCustomField('isLiveTemplated')),
                )
                .setPlaybackFbmsParam(f)
                .setUserInfo(h)
                .log();
              l.$OzMpdUpdater9.notifyMpdUpdated();
              l.setupUpdateLoop();
            })
            ['catch'](function (a) {
              l.$OzMpdUpdater28();
              g.setError(a).log();
              var e = null;
              if (a instanceof c('oz-player/utils/OzError')) e = a;
              else {
                var f,
                  h = null,
                  i = 'Caught an unknown error when fetching the manifest.';
                if (
                  l.$OzMpdUpdater6.getBool(
                    'fix_manifest_fetch_mixed_promise_catch',
                  )
                ) {
                  if (a != null)
                    if (
                      l.$OzMpdUpdater6.getBool('normalize_mpd_fetch_errors')
                    ) {
                      var j = d(
                          'oz-player/utils/OzErrorUtils',
                        ).getNormalizedErrorAndCode(a),
                        k = j[0];
                      j[1];
                      e = k;
                    } else
                      (f = a),
                        (h = f.code != null ? String(f.code) : null),
                        (i =
                          f.name +
                          '; ' +
                          f.message +
                          '; ' +
                          f.description +
                          ';');
                } else
                  (f = a),
                    (h = f.code != null ? String(f.code) : null),
                    (i =
                      f.name + '; ' + f.message + '; ' + f.description + ';');
                if (e == null) {
                  j = { originalError: f, url: b };
                  h !== null && (j.code = h);
                  e = new (c('oz-player/utils/OzError'))({
                    type: 'OZ_NETWORK',
                    description: i,
                    extra: j,
                  });
                }
              }
              l.$OzMpdUpdater26(e, b);
            });
        };
        var m = e.getMinimumUpdatePeriod();
        l.$OzMpdUpdater7 = 0;
        l.$OzMpdUpdater1 = f;
        l.$OzMpdUpdater2 = e;
        l.$OzMpdUpdater12 = g;
        l.$OzMpdUpdater3 = m;
        l.$OzMpdUpdater5 = h.cloneContext().setType('manifest');
        l.$OzMpdUpdater6 = b;
        l.$OzMpdUpdater13 = i;
        l.$OzMpdUpdater14 = j;
        l.$OzMpdUpdater15 = k;
        l.$OzMpdUpdater2.addListener('locationUpdated', function () {
          l.$OzMpdUpdater23(), l.setupUpdateLoop();
        });
        l.$OzMpdUpdater9 = new (c('oz-player/utils/OzStreamInterruptChecker'))(
          l.$OzMpdUpdater2,
          l.$OzMpdUpdater6,
        );
        l.$OzMpdUpdater10.addSubscriptions(
          l.$OzMpdUpdater9.addListener('streamResumedAt', function (a) {
            l.emit('streamResumedAt', a);
          }),
          l.$OzMpdUpdater9.addListener('streamInterruptAt', function (a) {
            l.emit('streamInterruptAt', a);
          }),
        );
        return l;
      }
      var e = b.prototype;
      e.$OzMpdUpdater23 = function () {
        c('oz-player/shims/ozClearTimeout')(this.$OzMpdUpdater4),
          (this.$OzMpdUpdater4 = null),
          this.$OzMpdUpdater24(),
          (this.$OzMpdUpdater21 = !0);
      };
      e.setupUpdateLoop = function () {
        var a,
          b = !this.$OzMpdUpdater11;
        b &&
          ((b = !this.$OzMpdUpdater2.isStaticMpd()),
          (this.$OzMpdUpdater3 = this.$OzMpdUpdater2.getMinimumUpdatePeriod()));
        a =
          this.$OzMpdUpdater17 == null &&
          this.$OzMpdUpdater6.getNumber('manifest_initial_update_delay_ms') > 0
            ? this.$OzMpdUpdater6.getNumber('manifest_initial_update_delay_ms')
            : this.$OzMpdUpdater6.getNumber('manifest_update_frequency_ms') ||
              ((a = this.$OzMpdUpdater3) != null ? a : 0) * 1e3;
        b &&
          a &&
          this.$OzMpdUpdater2.getLocation() &&
          (this.$OzMpdUpdater4 = c(
            'oz-player/shims/ozSetTimeoutAcrossTransitions',
          )(this.$OzMpdUpdater25, a));
      };
      e.onError = function (a) {
        return this.$OzMpdUpdater8.onError(a);
      };
      e.$OzMpdUpdater26 = function (a, b) {
        var c = this;
        b = !0;
        var d = this.$OzMpdUpdater18 - 1,
          e = a.getExtra().code;
        this.$OzMpdUpdater19 !== e
          ? ((this.$OzMpdUpdater19 = e), (this.$OzMpdUpdater16 = 1))
          : this.$OzMpdUpdater16++;
        var f = function () {
          b = !1;
        };
        e = {
          endStream: function () {
            f(), (c.$OzMpdUpdater11 = !0), c.emit('streamGone');
          },
          consecutiveFailuresForErrorCode: this.$OzMpdUpdater16,
          error: a,
          isInitialRequest: !1,
          retry: function (b) {
            c.emit('manifestFetchErrorRetry', a), f(), c.setupUpdateLoop();
          },
          retryAttemptCount: d,
        };
        this.emit('manifestFetchError', e);
        b && this.$OzMpdUpdater8.emitError(a);
      };
      e.$OzMpdUpdater29 = function (a, b) {
        a = new (c('oz-player/shims/OzURI'))(a);
        a.addQueryData('_nc_expid', b);
        return a.toString();
      };
      e.$OzMpdUpdater30 = function (a) {
        if (!this.$OzMpdUpdater15) return a;
        a = new (c('oz-player/shims/OzURI'))(a);
        a.addQueryData('_nc_tsid', 'mpd-' + this.$OzMpdUpdater22++);
        return a.toString();
      };
      e.$OzMpdUpdater27 = function (a) {
        this.$OzMpdUpdater24();
        this.$OzMpdUpdater18++;
        var b = this.$OzMpdUpdater6.getString('cdn_experiment_id');
        a = b.length === 0 ? a : this.$OzMpdUpdater29(a, b);
        a = this.$OzMpdUpdater30(a);
        b = this.$OzMpdUpdater1.requestRawUrl(
          a,
          {
            networkTimeoutMs: this.$OzMpdUpdater6.getNumber(
              'mpd_updater_network_request_timeout_ms',
            ),
          },
          this.$OzMpdUpdater5,
        );
        this.$OzMpdUpdater17 = Date.now();
        this.$OzMpdUpdater20 = b;
        a = b.getStream().getReader();
        return d('oz-player/utils/OzReadableStreamUtils').pumpString(a);
      };
      e.$OzMpdUpdater24 = function () {
        this.$OzMpdUpdater20 &&
          (this.$OzMpdUpdater20.cancel(), (this.$OzMpdUpdater18 = 0)),
          this.$OzMpdUpdater28();
      };
      e.$OzMpdUpdater28 = function () {
        this.$OzMpdUpdater20 = null;
      };
      e.destroy = function () {
        this.$OzMpdUpdater4 &&
          c('oz-player/shims/ozClearTimeout')(this.$OzMpdUpdater4),
          this.$OzMpdUpdater10.release();
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/parsers/OzXmlParserImplDOMParser',
  ['oz-player/utils/OzError'],
  function (a, b, c, d, e, f, g) {
    function h() {
      return { $: {} };
    }
    function i(a) {
      var b = h();
      for (var c = a.attributes, d = 0; d < c.length; ++d) {
        var e = c[d];
        b.$[e.name] = e.value;
      }
      for (e = a.childNodes, c = 0; c < e.length; ++c) {
        d = e[c];
        if (d instanceof Element) {
          a = d.nodeName;
          Object.prototype.hasOwnProperty.call(b, a) || (b[a] = []);
          b[a].push(i(d));
        } else {
          a = d.nodeValue.trim();
          a && (b._ = a);
        }
      }
      return b;
    }
    a = (function () {
      function a() {
        this.$1 = new DOMParser();
      }
      var b = a.prototype;
      b.parse = function (a) {
        try {
          var b = h(),
            d = this.$1.parseFromString(a, 'application/xml'),
            e = d.querySelector('parsererror');
          if (e) {
            e = e.innerHTML;
            var f = 2e3;
            throw new (c('oz-player/utils/OzError'))({
              type: 'OZ_XML_PARSER',
              description:
                e +
                '; truncated xml (' +
                f +
                '/' +
                a.length +
                '): ' +
                a.substring(0, f),
              extra: {},
            });
          }
          e = d.documentElement;
          e != null && (b[e.nodeName] = [i(e)]);
          return b;
        } catch (b) {
          if (b instanceof c('oz-player/utils/OzError')) throw b;
          else {
            f = 2e3;
            throw new (c('oz-player/utils/OzError'))({
              type: 'OZ_XML_PARSER',
              description:
                b.message +
                '; truncated xml (' +
                f +
                '/' +
                a.length +
                '): ' +
                a.substring(0, f) +
                '\n\n' +
                b.stack,
              extra: { originalError: b },
            });
          }
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/playback_controls/OzClearSourceBufferOnSeekManager',
  [
    'oz-player/shims/OzDeferred',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/utils/OzCustomErrorCode',
    'oz-player/utils/OzError',
    'oz-player/utils/OzErrorEmitter',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d, e) {
        e === void 0 && (e = null),
          (this.$3 = new (c('oz-player/utils/OzErrorEmitter'))()),
          (this.$4 = new Map()),
          (this.$5 = !1),
          (this.$6 = !1),
          (this.$7 = !1),
          (this.$8 = null),
          (this.$9 = []),
          (this.$10 = null),
          (this.$11 = null),
          (this.$1 = a),
          (this.$2 = b),
          (this.$4 = d),
          (this.$11 = e);
      }
      var b = a.prototype;
      b.$12 = function (a) {
        var b;
        this.$5 = !0;
        return (b = this.$8) != null ? b : a.call(this.$1);
      };
      b.$13 = function (a, b) {
        (this.$6 = !0),
          this.$9.push({ t: b }),
          (this.$8 = b),
          this.$9.length === 1 && this.$14(a);
      };
      b.$15 = function (a) {
        this.$7 = !0;
        return this.$8 != null ? !0 : a.call(this.$1);
      };
      b.$16 = function (a, b) {
        var d = new (c('oz-player/shims/OzDeferred'))(
            c('oz-player/shims/OzMaybeNativePromise'),
          ),
          e = [];
        this.$4.forEach(function (c, d) {
          d = c.clearSourceBufferRange(a, b);
          e.push(d);
        });
        var f = c('oz-player/shims/OzMaybeNativePromise').all(e);
        f.then(function () {
          d.resolve();
        })['catch'](function (a) {
          d.reject(a);
        });
        return d.getPromise();
      };
      b.$14 = function (a) {
        var b = this,
          d = this.$9.length > 0 ? this.$9[0] : null,
          e = this.$2.getNumber('clear_buffer_on_seek_epsilon_s');
        if (d) {
          var f = d.t;
          d = this.$1.buffered;
          var g = d.length,
            h = d.length <= 0,
            i = -1,
            j = !1;
          for (var k = 0; i < 0 && k < g; ++k)
            (i = f - e >= d.start(k) && f + e < d.end(k) ? k : i),
              (j = f < d.start(k) - e);
          k = i > -1;
          var l = this.$2.getNumber('clear_buffer_on_seek_nudge_s');
          k &&
            i >= 0 &&
            i < g &&
            l > 0 &&
            ((f = Math.min(f, d.end(i) - l)),
            (f = Math.max(f, d.start(i) + l)));
          if (h || k || !j)
            this.$11 &&
              this.$11
                .getOperationLogger('seek_to_next_time')
                .setLength(Math.round(f * 1e3))
                .setInitiator('no_clear')
                .log(),
              a.call(this.$1, f),
              this.$9.shift(),
              this.$14(a);
          else {
            var m = null;
            this.$11 &&
              (m = this.$11
                .getOperationLogger('clear_buffer_before_seek')
                .setLength(Math.round(f * 1e3))
                .setUserInfo({
                  bufferRangesLength: String(g),
                  nudgeSec: String(l),
                })
                .start());
            i = this.$16(Math.max(f - e, 0), d.end(g - 1) + e);
            i.then(function () {
              m && m.log(),
                b.$11 &&
                  b.$11
                    .getOperationLogger('seek_to_next_time')
                    .setLength(Math.round(f * 1e3))
                    .setInitiator('after_clear')
                    .log(),
                a.call(b.$1, f),
                b.$9.shift(),
                b.$14(a);
            })['catch'](function (a) {
              m && m.setError(a).log(),
                b.$3.emitError(
                  a instanceof c('oz-player/utils/OzError')
                    ? a
                    : new (c('oz-player/utils/OzError'))({
                        type: 'OZ_SOURCE_BUFFER',
                        description: a
                          ? a.name + ': ' + a.message
                          : 'Unknown error while clearing the buffer.',
                        extra: {
                          code: c('oz-player/utils/OzCustomErrorCode')
                            .SOURCE_BUFFER_MANAGER_CLEAR_RANGE_FAILED,
                          originalError: a,
                        },
                      }),
                );
            });
          }
        } else this.$8 = null;
      };
      b.maybeOverwriteVideoCurrentTimeProperty = function () {
        var a,
          b,
          c = this,
          d =
            Object.getOwnPropertyDescriptor &&
            Object.getOwnPropertyDescriptor(this.$1, 'currentTime');
        d =
          (a = d) != null
            ? a
            : Object.getOwnPropertyDescriptor &&
              Object.getOwnPropertyDescriptor(
                HTMLMediaElement.prototype,
                'currentTime',
              );
        a =
          Object.getOwnPropertyDescriptor &&
          Object.getOwnPropertyDescriptor(this.$1, 'seeking');
        a =
          (b = a) != null
            ? b
            : Object.getOwnPropertyDescriptor &&
              Object.getOwnPropertyDescriptor(
                HTMLMediaElement.prototype,
                'seeking',
              );
        var e = d && typeof d.get === 'function' ? d.get : null,
          f = d && typeof d.set === 'function' ? d.set : null,
          g = a && typeof a.get === 'function' ? a.get : null;
        if (e && f && g && Object.defineProperty) {
          try {
            Object.defineProperty(this.$1, 'currentTime', {
              get: function () {
                return c.$12(e);
              },
              set: function (a) {
                c.$13(f, a);
              },
              configurable: !0,
              enumerable: !0,
            });
            Object.defineProperty(this.$1, 'seeking', {
              get: function () {
                return c.$15(g);
              },
              configurable: !0,
              enumerable: !0,
            });
            b = this.$1.currentTime;
            this.$1.currentTime = b;
            this.$1.seeking;
          } catch (a) {}
          this.$17(function () {
            c.getCurrentTimePropertyOverwriteSuccess() &&
              Object.defineProperty(c.$1, 'currentTime', {
                get: e,
                set: f,
                configurable: !0,
                enumerable: !0,
              }),
              c.getSeekingPropertyOverwriteSuccess() &&
                Object.defineProperty(c.$1, 'seeking', {
                  get: g,
                  configurable: !0,
                  enumerable: !0,
                });
          });
        }
      };
      b.getCurrentTimePropertyOverwriteSuccess = function () {
        return this.$5 && this.$6;
      };
      b.getSeekingPropertyOverwriteSuccess = function () {
        return this.$7;
      };
      b.$17 = function (a) {
        this.$10 = a;
      };
      b.onError = function (a) {
        return this.$3.onError(a);
      };
      b.destroy = function () {
        try {
          this.$10 && this.$10();
        } catch (a) {}
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/playback_controls/OzSteadyStateManager',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = []), (this.$2 = a), (this.$3 = b);
      }
      var b = a.prototype;
      b.addSample = function (a) {
        var b,
          c = Math.floor(Date.now() / (1e3 * this.$3)),
          d = c % this.$2;
        ((b = this.$1[d]) == null ? void 0 : b.bucketNumber) != c &&
          (this.$1[d] = { bucketNumber: 0, val: null });
        this.$1[d] = {
          bucketNumber: c,
          val: Math.min(a, (b = this.$1[d].val) != null ? b : a),
        };
      };
      b.min = function () {
        var a = this,
          b = Date.now(),
          c = this.$1.filter(function (c) {
            return (
              c != null &&
              c.val != null &&
              b - a.$2 * 1e3 * a.$3 < c.bucketNumber * 1e3 * a.$3
            );
          });
        if (c.length < this.$2) return null;
        c = c.reduce(function (a, b) {
          if (a == null) return b;
          var c = b.val;
          c != null || h(0, 56011);
          var d = a.val;
          d != null || h(0, 56011);
          return c < d ? b : a;
        }, null);
        return c == null ? void 0 : c.val;
      };
      b.reset = function () {
        this.$1 = [];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/OzSourceBufferUtil',
  ['oz-player/utils/OzNumericalRangeUtil'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = 0;
      for (var c = 0; c < a.getBuffered().length; c++)
        b += a.getBuffered().end(c) - a.getBuffered().start(c);
      return b;
    }
    function b(a) {
      return a.reduce(function (a, b) {
        return a + (b.endTime - b.startTime);
      }, 0);
    }
    function c(a) {
      return a.getBuffered().length == 0 ? 0 : a.getBuffered().start(0);
    }
    function e(a) {
      var b = null;
      try {
        b = a.getBuffered();
      } catch (a) {
        return 0;
      }
      return b.length == 0 ? 0 : b.end(b.length - 1);
    }
    function f(a) {
      var b = [];
      for (var c = 0; c < a.length; c++)
        b.push({ startTime: a.start(c), endTime: a.end(c) });
      return b;
    }
    function h(a, b, c) {
      c = d('oz-player/utils/OzNumericalRangeUtil').findCurrentRangeIndex(
        c,
        b,
        a.map(function (a) {
          return { rangeStart: a.startTime, rangeEnd: a.endTime };
        }),
      );
      b = c >= 0 ? parseFloat((a[c].endTime - b).toFixed(3)) : 0;
      a = c >= 0 ? a.length - 1 - c : -1;
      return { bufferAheadSec: b, bufferedOffset: a };
    }
    function i(a, b, c) {
      var e = a.map(function (a) {
        return { rangeStart: a.startTime, rangeEnd: a.endTime };
      });
      c = d('oz-player/utils/OzNumericalRangeUtil').findCurrentRangeIndex(
        c,
        b,
        e,
      );
      e = parseFloat(
        e
          .reduce(function (a, c) {
            var e = c.rangeEnd;
            return e == null
              ? a
              : a +
                  (d('oz-player/utils/OzNumericalRangeUtil').isWithin(b, c)
                    ? e - b
                    : d('oz-player/utils/OzNumericalRangeUtil').isLargerThan(
                        c.rangeStart,
                        b,
                      )
                    ? e - c.rangeStart
                    : 0);
          }, 0)
          .toFixed(3),
      );
      a = c >= 0 ? a.length - 1 - c : -1;
      return { bufferAheadSec: e, bufferedOffset: a };
    }
    g.getTotalBufferedTime = a;
    g.getTotalInBufferedRanges = b;
    g.getStartBufferedTime = c;
    g.getEndBufferedTime = e;
    g.convertToBufferedTimeRangeArray = f;
    g.getBufferAheadInBufferedRanges = h;
    g.getTotalBufferAheadOfPosition = i;
  },
  98,
);
__d(
  'oz-player/playback_controls/OzLiveLatencyManager',
  [
    'oz-player/playback_controls/OzSteadyStateManager',
    'oz-player/shims/OzDOMEventListener',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/shims/ozThrottle',
    'oz-player/utils/OzSourceBufferUtil',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = this;
        this.$8 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$9 = null;
        this.$11 = !1;
        this.$12 = null;
        this.$13 = null;
        this.$14 = null;
        this.$15 = !0;
        var d = a.config,
          e = a.mpd,
          f = a.playbackState,
          g = a.bufferingDetector,
          h = a.video;
        a = a.loggerProvider;
        this.$1 = d;
        this.$2 = e;
        this.$3 = f;
        d.getNumber('steadystate_minbuffer_buckets') > 0 &&
          (this.$7 = new (c(
            'oz-player/playback_controls/OzSteadyStateManager',
          ))(
            this.$1.getNumber('steadystate_minbuffer_buckets'),
            this.$1.getNumber('steadystate_minbuffer_buckets_sec'),
          ));
        g != null &&
          (this.$8.addSubscriptions(
            g.addListener('enterBuffering', function (a) {
              if (a === 'in_play') {
                b.$9 = 0;
                (a = b.$7) == null ? void 0 : a.reset();
              }
              b.$11 = !1;
              (a = b.$6) == null ? void 0 : a.log();
              b.$6 = null;
            }),
          ),
          this.$8.addSubscriptions(
            g.addListener('leaveBuffering', function () {
              b.$9 === 0 && (b.$9 = Date.now()), (b.$11 = !1);
            }),
          ));
        this.$4 = h;
        this.$5 = a;
        this.$16() &&
          this.$8.addSubscriptions(
            c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
              this.$4,
              'timeupdate',
              c('oz-player/shims/ozThrottle')(function () {
                b.$17(), b.$18();
              }, this.$1.getNumber('playhead_manager_timeupdate_throttle_ms')),
            ),
            c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
              this.$4,
              'waiting',
              function () {
                b.$17();
              },
            ),
            c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
              this.$4,
              'durationchange',
              function () {
                b.$17();
              },
            ),
            c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
              this.$4,
              'seeking',
              function () {
                var a;
                b.$14 = Date.now();
                b.$12 = null;
                (a = b.$7) == null ? void 0 : a.reset();
              },
            ),
            c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
              this.$4,
              'playing',
              function () {
                (b.$14 = Date.now()), (b.$12 = null);
              },
            ),
            c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
              h,
              'pause',
              function () {
                var a;
                return (a = b.$7) == null ? void 0 : a.reset();
              },
            ),
          );
      }
      var b = a.prototype;
      b.enabled = function () {
        var a = this.$1.getNumber('catchup_timeout_after_buffering_sec');
        return (
          a === 0 ||
          this.$9 == null ||
          (this.$9 !== 0 && this.$9 + a * 1e3 <= Date.now())
        );
      };
      b.isBehindPreferredLiveHeadLatencyWithTolerance = function () {
        return (
          this.$3.getCurrentTime() <
          this.getInitialPlayHeadPosition() -
            this.getPreferredLiveHeadLatencyToleranceSec()
        );
      };
      b.$19 = function () {
        return this.$3.getCurrentTime() < this.getInitialPlayHeadPosition();
      };
      b.$20 = function () {
        var a;
        a = (a = this.$7) == null ? void 0 : a.min();
        return (
          !this.$21() &&
          a != null &&
          a > this.$1.getNumber('steadystate_minbuffer_sec')
        );
      };
      b.getInitialPlayHeadPosition = function () {
        return (
          this.getLiveHeadTimeSec() - this.getPreferredLiveHeadLatencySec()
        );
      };
      b.getLiveHeadTimeSec = function () {
        var a = this.$22();
        return (
          (a == null
            ? void 0
            : (a = a.getEndingSegment()) == null
            ? void 0
            : a.getTimeRange().endTime) || 0
        );
      };
      b.$21 = function () {
        return (
          this.$9 != null &&
          this.$1.getBool('latencymanager_stalled_edgelatency_sec_on')
        );
      };
      b.getPreferredLiveHeadLatencySec = function () {
        var a = this.$21()
          ? this.$1.getNumber('latencymanager_stalled_edgelatency_sec')
          : this.$1.getNumber('pdash_download_cursor_catchup_threshold_sec');
        a = this.$23(a);
        this.$5
          .getOperationLogger('latency_manager')
          .setPreferredEdgeLatency(a * 1e3);
        return a;
      };
      b.getPreferredLiveHeadLatencyToleranceSec = function () {
        return this.$1.getNumber('pdash_download_cursor_catchup_tolerance_sec');
      };
      b.shouldEnableManifestTimeRangeCatchup = function () {
        return !this.$1.getNumber(
          'pdash_download_cursor_catchup_threshold_sec',
        );
      };
      b.shouldEnableCursorBasedCatchup = function () {
        var a = this.$2.getVideoRepresentations()[0];
        a = a && a.canPredict();
        return (
          a &&
          this.$1.getNumber('pdash_download_cursor_catchup_threshold_sec') > 0
        );
      };
      b.setEnableCatchup = function (a) {
        !this.$15 && a === !0 && (this.$9 = null), (this.$15 = a);
      };
      b.$24 = function (a, b, c) {
        var d = this.$1.getNumber('playback_speed_min_sharpness_factor');
        c = (a * 2) / (1 + Math.pow(Math.E, -(c - b) * d));
        return 1 - a + c;
      };
      b.$16 = function () {
        return (
          this.$1.getNumber('playback_speed_latency_adjustment_rate') > 0 ||
          this.$1.getNumber('playback_speed_latency_slowdown_adjustment_rate') >
            0 ||
          this.$1.getNumber('playback_speed_latency_speedup_adjustment_rate') >
            0
        );
      };
      b.$17 = function () {
        var a,
          b = d(
            'oz-player/utils/OzSourceBufferUtil',
          ).getBufferAheadInBufferedRanges(
            d(
              'oz-player/utils/OzSourceBufferUtil',
            ).convertToBufferedTimeRangeArray(this.$4.buffered),
            this.$3.getCurrentTime(),
            this.$1,
          ).bufferAheadSec;
        (a = this.$7) == null ? void 0 : a.addSample(b);
      };
      b.$18 = function () {
        var a = d(
            'oz-player/utils/OzSourceBufferUtil',
          ).getBufferAheadInBufferedRanges(
            d(
              'oz-player/utils/OzSourceBufferUtil',
            ).convertToBufferedTimeRangeArray(this.$4.buffered),
            this.$3.getCurrentTime(),
            this.$1,
          ),
          b = a.bufferAheadSec;
        a = a.bufferedOffset;
        this.$25(b, a);
      };
      b.$25 = function (a, b) {
        var c = this.$1.getNumber('playback_speed_enabled_delay_sec'),
          d = this.$1.getNumber('playback_speed_min_buffer_sec');
        a > d && (this.$11 = !0);
        var e = this.$1.getNumber('playback_speed_min_duration_sec'),
          f = this.$1.getNumber('playback_speed_restore_min_duration_sec'),
          g = this.$1.getNumber('playback_speed_latency_adjustment_rate'),
          h = this.$1.getNumber(
            'playback_speed_latency_slowdown_adjustment_rate',
          ),
          i = this.$1.getNumber(
            'playback_speed_latency_speedup_adjustment_rate',
          );
        if (this.$4.playbackRate === 0) {
          var j;
          this.$10 = null;
          (j = this.$6) == null ? void 0 : j.log();
          this.$6 = null;
        } else if (
          this.$15 &&
          this.$11 &&
          a < d &&
          (g > 0 || h > 0) &&
          b === 0 &&
          (c === 0 || (this.$14 != null && this.$14 + c * 1e3 < Date.now()))
        ) {
          j = h > 0 ? 1 - h : this.$24(g, d, a);
          this.$6 == null &&
            (this.$6 = this.$5
              .getOperationLogger('latency_manager')
              .start()
              .setInitiator('speed_adjustment')
              .setReason('slow')
              .setUserInfo({
                newPlaybackRate: String(j),
                oldPlaybackRate: String(this.$4.playbackRate),
              }));
          this.$26(j);
        } else if (
          this.$15 &&
          this.$11 &&
          (this.$19() || this.$20()) &&
          i > 0 &&
          b === 0 &&
          (this.$13 == null || this.$13 + f * 1e3 < Date.now()) &&
          (c === 0 || (this.$14 != null && this.$14 + c * 1e3 < Date.now()))
        ) {
          h = 1 + i;
          this.$6 == null &&
            (this.$6 = this.$5
              .getOperationLogger('latency_manager')
              .start()
              .setInitiator('speed_adjustment')
              .setReason('fast')
              .setUserInfo({
                newPlaybackRate: String(h),
                oldPlaybackRate: String(this.$4.playbackRate),
              }));
          this.$26(h);
        } else if (
          this.$15 === !1 ||
          this.$12 == null ||
          this.$12 + e * 1e3 < Date.now()
        ) {
          g = this.$4.playbackRate;
          this.$4.playbackRate = 1;
          (d = this.$6) == null ? void 0 : d.log();
          this.$6 = null;
          g !== this.$4.playbackRate && (this.$13 = Date.now());
        }
      };
      b.$26 = function (a) {
        try {
          (this.$4.playbackRate = a), (this.$12 = Date.now());
        } catch (b) {
          (a = this.$6) == null
            ? void 0
            : a.setError(b).setResult('failed').log();
          this.$6 = null;
        }
      };
      b.$22 = function () {
        var a = this.$2
          .getVideoRepresentations()
          .concat(this.$2.getAudioRepresentations());
        return a.length === 0
          ? null
          : a.reduce(function (a, b) {
              var c;
              return (((c = a.getEndingSegment()) == null
                ? void 0
                : c.getTimeRange().endTime) || 0) >
                (((c = b.getEndingSegment()) == null
                  ? void 0
                  : c.getTimeRange().endTime) || 0)
                ? a
                : b;
            });
      };
      b.$23 = function (a) {
        var b;
        if (a <= 0) return a;
        var c = this.$22();
        b =
          c == null
            ? void 0
            : (b = c.getEndingSegment()) == null
            ? void 0
            : b.getTimeRange();
        if (!b) return a;
        c =
          c == null
            ? void 0
            : (c = c.getSegmentByTime((b == null ? void 0 : b.endTime) - a)) ==
              null
            ? void 0
            : c.getTimeRange();
        return !c
          ? a
          : (b == null ? void 0 : b.endTime) -
              (c == null ? void 0 : c.startTime);
      };
      b.destroy = function () {
        this.$8.release();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/playback_controls/OzPlaybackTimeRangeManager',
  [
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/utils/OzBufferingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = this;
        this.$4 = null;
        this.$5 = 0;
        this.$6 = 0;
        this.$7 = !0;
        this.$8 = 0;
        this.$9 = 0;
        this.$10 = !1;
        this.$12 = 0;
        this.$13 = 0;
        this.$15 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$17 = function () {
          b.$10 != b.$14.isPlaying() &&
            (b.$14.isPlaying() && (b.$11 = Date.now()),
            (b.$10 = b.$14.isPlaying()));
        };
        var d = a.video,
          e = a.config,
          f = a.mpd,
          g = a.liveheadFallBehindBlockThreshold,
          h = a.liveheadFallBehindBlockMargin,
          i = a.playbackState;
        a = a.perfLoggerProvider;
        this.$1 = e;
        this.$2 = d;
        this.$3 = f;
        this.$8 = g;
        this.$9 = h;
        this.$14 = i;
        this.$16 = a;
        this.$1.getNumber('catchup_timeout_after_play_sec') !== 0 &&
          this.$15.addSubscriptions(
            this.$14.addEventListener('play', this.$17),
            this.$14.addEventListener('pause', this.$17),
          );
      }
      var b = a.prototype;
      b.setTimelineBlockingEnabled = function (a) {
        (this.$7 = a), this.$7 || this.$3.unblockTimeRange();
      };
      b.setTimeRangeProvider = function (a) {
        var b = this;
        this.$4 != null && this.$4.remove();
        this.$4 = a.addUpdateListener(function () {
          var c = a.getTimeRanges(),
            d = 0;
          if (c.length !== 0) {
            c = c[c.length - 1];
            d = c.endTime;
          }
          b.$18(d);
        });
      };
      b.$18 = function (a) {
        var b;
        if (!this.$7) return;
        if (this.$5 === a) return;
        this.$5 = a;
        if (this.$2.currentTime <= this.$6) return;
        a = this.$1.getBool('catchup_use_timeline_range_end_time_as_end')
          ? a
          : this.$2.duration;
        var c =
            this.$1.getNumber(
              'overwrite_livehead_fall_behind_block_threshold',
            ) !== 0
              ? this.$1.getNumber(
                  'overwrite_livehead_fall_behind_block_threshold',
                )
              : this.$8,
          e =
            this.$1.getNumber('overwrite_live_time_range_block_margin') !== 0
              ? this.$1.getNumber('overwrite_live_time_range_block_margin')
              : this.$9;
        this.$17();
        this.$1.getBool('reset_catchup_timeout_after_play_sec_on_overwrite') &&
          (this.$13 != e || this.$12 != c) &&
          ((this.$13 = e), (this.$12 = c), (this.$11 = Date.now()));
        b =
          this.$1.getNumber('catchup_timeout_after_play_sec') === 0 ||
          Date.now() - ((b = this.$11) != null ? b : 0) <
            this.$1.getNumber('catchup_timeout_after_play_sec') * 1e3;
        if (
          b &&
          this.$1.getNumber('pdash_download_cursor_catchup_threshold_sec') ===
            0 &&
          e !== 0 &&
          c !== 0 &&
          a - this.$2.currentTime > c
        ) {
          b = [];
          for (c = 0; c < this.$2.buffered.length; c++)
            b.push({
              startTime: this.$2.buffered.start(c),
              endTime: this.$2.buffered.end(c),
            });
          c = d(
            'oz-player/utils/OzBufferingUtils',
          ).getBufferAheadFromCurrentTime(this.$2.currentTime, b);
          this.$6 = this.$2.currentTime + Math.min(c, e);
          b = { startTime: this.$6, endTime: a - e };
          this.$16
            .getOperationLogger('latency_manager')
            .setInitiator('time_range_manager')
            .setReason('blocked_range')
            .setLength(b.endTime - b.startTime)
            .setUserInfo({
              blockedRangeStart: String(b.startTime),
              blockedRangeEnd: String(b.endTime),
            })
            .log();
          this.$3.blockTimeRange(b);
        }
      };
      b.destroy = function () {
        this.$4 != null && (this.$4.remove(), (this.$4 = null)),
          this.$15.release();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/LiveheadSeekaheadStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 0.05;
    function a(a, b) {
      b = Math.max.apply(
        Math,
        b.map(function (a) {
          return a.startTime;
        }),
      );
      return b - a > 0 ? b - a + g : 0;
    }
    f.computeSeekAhead = a;
  },
  66,
);
__d(
  'oz-player/utils/OzTimelineGapUtil',
  ['oz-player/utils/OzNumericalHelper', 'oz-player/utils/OzNumericalRangeUtil'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1.5;
    function a(a, b, c, e) {
      b = b.map(function (a) {
        return { rangeStart: a.startTime, rangeEnd: a.endTime };
      });
      return (
        d('oz-player/utils/OzNumericalRangeUtil').findCurrentRangeIndex(
          c,
          a,
          b,
          e,
        ) === -1
      );
    }
    function b(a, b, c, e, f) {
      f === void 0 && (f = h);
      var g = b.map(function (a) {
        return { rangeStart: a.startTime, rangeEnd: a.endTime };
      });
      c = d('oz-player/utils/OzNumericalRangeUtil').findCurrentRangeIndex(
        c,
        a,
        g,
        e,
      );
      if (c !== -1) {
        g = b[c];
        return (
          d('oz-player/utils/OzNumericalHelper').lessThanOrEqual(
            a,
            g.endTime,
          ) && g.endTime - a < f
        );
      }
      return !1;
    }
    g.isInGap = a;
    g.isNearGap = b;
  },
  98,
);
__d(
  'oz-player/playback_controls/OzPlayheadManager',
  [
    'oz-player/shims/OzDOMEventListener',
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/shims/ozThrottle',
    'oz-player/shims/ozvariant',
    'oz-player/strategies/LiveheadSeekaheadStrategy',
    'oz-player/utils/OzNumericalRangeUtil',
    'oz-player/utils/OzSourceBufferUtil',
    'oz-player/utils/OzTimelineGapUtil',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function () {
        function a(a) {
          (this.$1 = a.perfLoggerProvider),
            (this.$2 = a.video),
            (this.$4 = a.config);
        }
        var b = a.prototype;
        b.markState = function (a, b) {
          var c = d(
              'oz-player/utils/OzSourceBufferUtil',
            ).convertToBufferedTimeRangeArray(this.$2.buffered),
            e = this.$3;
          if (e == null) {
            this.$3 = c;
            return;
          }
          var f = d(
            'oz-player/utils/OzSourceBufferUtil',
          ).getBufferAheadInBufferedRanges(c, b.getCurrentTime(), this.$4);
          e = d(
            'oz-player/utils/OzSourceBufferUtil',
          ).getBufferAheadInBufferedRanges(e, b.getCurrentTime(), this.$4);
          e.bufferedOffset !== -1 &&
            f.bufferedOffset === -1 &&
            this.$1
              .getOperationLogger('playhead_adjustment')
              .setError('buffer_deleted')
              .setResult('failed')
              .setUserInfo({
                vidSeeking: String(this.$2.seeking),
                vidErrCode: this.$2.error ? String(this.$2.error.code) : null,
              })
              .setInitiator(a)
              .log();
          this.$3 = c;
        };
        return a;
      })(),
      i = (function () {
        function a(a) {
          (this.$5 = !1),
            (this.$6 = {}),
            (this.$1 = a.perfLoggerProvider),
            (this.$2 = a.video);
        }
        var b = a.prototype;
        b.markState = function (a, b) {
          var c = this;
          if (this.$2.paused) {
            this.$3 = null;
            this.$4 = null;
            this.$5 = !1;
            this.$6 = {};
            return;
          }
          (this.$3 == null || this.$2.currentTime > this.$3) &&
            ((this.$4 = Date.now()),
            (this.$3 = this.$2.currentTime),
            (this.$5 = !1),
            (this.$6 = {}));
          this.$6[a] = this.$6[a] == null ? 1 : this.$6[a] + 1;
          var d = this.$4;
          if (
            !this.$5 &&
            !this.$2.paused &&
            d != null &&
            d + 1e4 < Date.now()
          ) {
            this.$5 = !0;
            var e = {};
            Object.keys(this.$6).forEach(function (a) {
              e[a] = String(c.$6[a]);
            });
            this.$1
              .getOperationLogger('playhead_adjustment')
              .setError('not_advancing')
              .setResult('failed')
              .setLength(Date.now() - d)
              .setUserInfo(
                babelHelpers['extends']({}, e, b, {
                  lastCurrentTime: String(this.$3),
                  lastCurrentTimeChanged: String(d - Date.now()),
                  vidSeeking: String(this.$2.seeking),
                  vidErrCode: this.$2.error ? String(this.$2.error.code) : null,
                }),
              )
              .setInitiator(a)
              .log();
          }
        };
        return a;
      })();
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this) || this;
        e.$OzPlayheadManager2 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        e.$OzPlayheadManager3 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        e.$OzPlayheadManager4 = new Set();
        e.$OzPlayheadManager10 = new Set();
        e.$OzPlayheadManager12 = function (a) {
          e.$OzPlayheadManager1.currentTime = a;
        };
        e.$OzPlayheadManager14 = !1;
        e.$OzPlayheadManager15 = !1;
        e.$OzPlayheadManager16 = !0;
        e.$OzPlayheadManager17 = !1;
        e.$OzPlayheadManager23 = function (a, b) {
          b === void 0 && (b = null);
          if (
            e.$OzPlayheadManager20 != null
              ? !e.$OzPlayheadManager20.shouldEnableManifestTimeRangeCatchup()
              : !1
          )
            return;
          var c = e.$OzPlayheadManager9;
          if (c && c.isEnabled(e.$OzPlayheadManager1, e.$OzPlayheadManager8)) {
            c = c.computeNewPlayheadPosition(
              e.$OzPlayheadManager1,
              e.$OzPlayheadManager8,
            );
            if (typeof c === 'number') {
              e.$OzPlayheadManager27(c, 'live_catch_up_strategy', a, b);
              return;
            }
          }
          c = e.$OzPlayheadManager6.getNumber('auto_seek_playhead_slack');
          if (c === 0) return;
          var f = e.$OzPlayheadManager5;
          if (!f) return;
          var g = e.$OzPlayheadManager7.getCurrentTime(),
            h = f.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            }),
            i = d('oz-player/utils/OzNumericalRangeUtil').findNextRangeIndex(
              g,
              h,
            );
          if (
            (d('oz-player/utils/OzTimelineGapUtil').isNearGap(
              g,
              f.getTimeRanges(),
              e.$OzPlayheadManager6,
            ) ||
              d('oz-player/utils/OzTimelineGapUtil').isInGap(
                g,
                f.getTimeRanges(),
                e.$OzPlayheadManager6,
              )) &&
            i !== -1
          ) {
            g = h[i];
            e.$OzPlayheadManager27(
              g.rangeStart + c,
              'jump_over_timeline_gap',
              a,
              b,
            );
          }
        };
        var f = b.video,
          g = b.mpd,
          j = b.playheadCatchup,
          k = b.playbackState,
          l = b.config,
          m = b.perfLoggerProvider,
          n = b.seekHandler,
          o = b.initialPlaybackPosition,
          p = b.canSupportSkipVideobufferGaps,
          q = b.liveLatencyManager;
        b = b.dynamicVideoLibrary;
        e.$OzPlayheadManager1 = f;
        e.$OzPlayheadManager6 = l;
        e.$OzPlayheadManager7 = k;
        e.$OzPlayheadManager8 = g;
        e.$OzPlayheadManager9 = j;
        e.$OzPlayheadManager11 = m;
        n && (e.$OzPlayheadManager12 = n);
        e.$OzPlayheadManager17 = p;
        e.$OzPlayheadManager20 = q;
        e.$OzPlayheadManager13 = o;
        e.$OzPlayheadManager21 = b;
        e.$OzPlayheadManager18 = new i({ video: f, perfLoggerProvider: m });
        e.$OzPlayheadManager19 = new h({
          video: f,
          perfLoggerProvider: m,
          config: l,
        });
        e.$OzPlayheadManager2.addSubscriptions(
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            e.$OzPlayheadManager1,
            'durationchange',
            function () {
              e.setPlaybackPositionOnFirstDurationChange(
                'durationchange',
                e.$OzPlayheadManager1.duration,
              ),
                e.$OzPlayheadManager23('durationchange'),
                e.$OzPlayheadManager24('durationchange');
            },
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            e.$OzPlayheadManager1,
            'pause',
            function () {
              e.$OzPlayheadManager23('pause');
            },
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            e.$OzPlayheadManager1,
            'play',
            function () {
              e.$OzPlayheadManager23('play');
            },
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            e.$OzPlayheadManager1,
            'playing',
            function () {
              e.$OzPlayheadManager23('playing');
            },
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            e.$OzPlayheadManager1,
            'waiting',
            function () {
              e.$OzPlayheadManager23.bind(
                babelHelpers.assertThisInitialized(e),
                'waiting',
              ),
                e.$OzPlayheadManager24('waiting');
            },
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            e.$OzPlayheadManager1,
            'timeupdate',
            c('oz-player/shims/ozThrottle')(function () {
              e.$OzPlayheadManager23('timeupdate'),
                e.$OzPlayheadManager6.getBool(
                  'playhead_manager_buffered_timerange_update_on_timeupdate',
                ) && e.$OzPlayheadManager24('timeupdate');
            }, e.$OzPlayheadManager6.getNumber(
              'playhead_manager_timeupdate_throttle_ms',
            )),
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            e.$OzPlayheadManager1,
            'seeking',
            function () {
              e.$OzPlayheadManager22 = Date.now();
            },
          ),
        );
        return e;
      }
      var e = b.prototype;
      e.$OzPlayheadManager25 = function () {
        return this.$OzPlayheadManager1.playbackRate === 0;
      };
      e.observeSourceBufferState = function (a, b) {
        var d = this;
        this.$OzPlayheadManager4.has(a) &&
          c('oz-player/shims/ozvariant')(0, 4179);
        this.$OzPlayheadManager4.add(a);
        this.$OzPlayheadManager2.addSubscriptions(
          a.addEventListener('buffer_updated', function () {
            d.$OzPlayheadManager26(a, b),
              d.$OzPlayheadManager6.getBool(
                'skip_videobuffer_gaps_on_buffer_updated',
              ) &&
                d.$OzPlayheadManager17 &&
                d.$OzPlayheadManager24('buffer_updated');
          }),
        );
      };
      e.$OzPlayheadManager26 = function (a, b) {
        var c = [];
        this.$OzPlayheadManager4.forEach(function (a) {
          a = a.getBufferedRanges();
          a.length && c.push(a[0]);
        });
        c.length > 0 && this.$OzPlayheadManager10.add(a);
        a = this.$OzPlayheadManager1.currentTime;
        a = d(
          'oz-player/strategies/LiveheadSeekaheadStrategy',
        ).computeSeekAhead(a, c);
        var e = this.$OzPlayheadManager6.getNumber('timeline_offset_threshold');
        a > 0 &&
          (e === 0 || a < e) &&
          this.$OzPlayheadManager27(
            this.$OzPlayheadManager1.currentTime + a,
            'first_available_buffer',
            'source_buffer',
            b,
          );
      };
      e.setTimeRangeProvider = function (a) {
        var b = this;
        this.$OzPlayheadManager3.release();
        this.$OzPlayheadManager3.engage();
        this.$OzPlayheadManager3.addSubscriptions(
          a.addUpdateListener(function () {
            b.$OzPlayheadManager23('time_range_updated');
          }),
        );
        this.$OzPlayheadManager5 = a;
        this.$OzPlayheadManager23('time_range_set');
      };
      e.resetCurrentTime = function () {
        (this.$OzPlayheadManager15 = !1),
          this.setPlaybackPositionOnFirstDurationChange(
            'reset',
            this.$OzPlayheadManager1.duration,
          );
      };
      e.setPlaybackPositionOnFirstDurationChange = function (a, b) {
        if (
          this.$OzPlayheadManager13 !== 0 &&
          !this.$OzPlayheadManager15 &&
          !isNaN(b) &&
          b !== Infinity
        ) {
          b =
            this.$OzPlayheadManager13 > 0
              ? this.$OzPlayheadManager13
              : b + this.$OzPlayheadManager13;
          if (this.$OzPlayheadManager20 != null) {
            var c;
            b =
              (c = this.$OzPlayheadManager20) == null
                ? void 0
                : c.getInitialPlayHeadPosition();
          }
          this.$OzPlayheadManager15 = !0;
          if (
            this.$OzPlayheadManager6.getBool(
              'playhead_manager_clamp_initial_playback_position',
            )
          ) {
            c =
              (c = this.$OzPlayheadManager5) == null
                ? void 0
                : c.getTimeRanges();
            c != null &&
              c.length > 0 &&
              c[0].startTime > b &&
              (b = c[0].startTime);
          }
          this.$OzPlayheadManager27(b, 'initial_playback_position', a);
          this.emit('initialPlaybackPositionSet', b);
        }
      };
      e.$OzPlayheadManager24 = function (a) {
        var b,
          c,
          e = this;
        if (!this.$OzPlayheadManager6.getBool('skip_videobuffer_gaps')) return;
        if (!this.$OzPlayheadManager17) return;
        var f = this.$OzPlayheadManager6.getNumber(
          'playhead_manager_buffered_auto_seek_playhead_slack',
        );
        if (f === 0) return;
        var g = this.$OzPlayheadManager7.getCurrentTime(),
          h = [];
        for (var i = 0; i < this.$OzPlayheadManager1.buffered.length; i++)
          h.push({
            startTime: this.$OzPlayheadManager1.buffered.start(i),
            endTime: this.$OzPlayheadManager1.buffered.end(i),
          });
        i = h.map(function (a) {
          return { rangeStart: a.startTime, rangeEnd: a.endTime };
        });
        this.$OzPlayheadManager19 &&
          this.$OzPlayheadManager19.markState(a, this.$OzPlayheadManager7);
        var j = d('oz-player/utils/OzNumericalRangeUtil').findNextRangeIndex(
            g,
            i,
          ),
          k = d('oz-player/utils/OzNumericalRangeUtil').findCurrentRangeIndex(
            this.$OzPlayheadManager6,
            g,
            i,
          ),
          l = this.$OzPlayheadManager16
            ? 0
            : this.$OzPlayheadManager6.getNumber(
                'skip_videobuffer_gaps_max_gap_size_sec',
              ),
          m = this.$OzPlayheadManager6.getNumber(
            'playhead_manager_buffered_is_near_gap_threshold',
          ),
          n = this.$OzPlayheadManager6.getNumber(
            'playhead_manager_buffered_numerical_error',
          );
        b =
          (b = this.$OzPlayheadManager21) == null
            ? void 0
            : b.getLastSegmentStartPTS();
        var o = b != null ? b / 1e3 : null,
          p =
            (c = this.$OzPlayheadManager21) == null
              ? void 0
              : c.getLast200RequestedUrlDecisionMinTime();
        c =
          o != null
            ? d('oz-player/utils/OzNumericalRangeUtil').findCurrentRangeIndex(
                this.$OzPlayheadManager6,
                o,
                i,
              )
            : -1;
        var q = c >= 0 ? i[c] : null,
          r = function (b) {
            var c =
              e.$OzPlayheadManager22 == null ||
              p == null ||
              e.$OzPlayheadManager22 < p;
            !c &&
              b != null &&
              e.$OzPlayheadManager11
                .getOperationLogger('playhead_adjustment')
                .setError('ignore_before_seek_main_' + b)
                .setResult('failed')
                .setInitiator(a)
                .setUserInfo({
                  last200RequestedUrlDecisionMinTime: String(p),
                  lastSeekTime: String(e.$OzPlayheadManager22),
                })
                .log();
            return c;
          };
        if (
          o != null &&
          this.$OzPlayheadManager25() &&
          this.$OzPlayheadManager16 == !1 &&
          r('buf')
        ) {
          if (
            o < g &&
            q != null &&
            q.rangeStart <= o &&
            q.rangeEnd != null &&
            q.rangeEnd > o
          ) {
            this.$OzPlayheadManager27(
              o,
              'reverse_jump_over_buffer_gap',
              a,
              null,
              {
                lastSegmentStartPTS: String(b),
                last200RequestedUrlDecisionMinTime: String(p),
                lastSeekTime: String(this.$OzPlayheadManager22),
              },
            );
            return;
          }
          if (q != null && c != k) {
            this.$OzPlayheadManager27(
              q.rangeStart,
              'jump_over_buffer_gap_last_dl_range',
              a,
              null,
              {
                lastSegmentStartPTS: String(b),
                last200RequestedUrlDecisionMinTime: String(p),
                lastSeekTime: String(this.$OzPlayheadManager22),
              },
            );
            return;
          }
        }
        if (
          (d('oz-player/utils/OzTimelineGapUtil').isNearGap(
            g,
            h,
            this.$OzPlayheadManager6,
            n,
            m,
          ) ||
            d('oz-player/utils/OzTimelineGapUtil').isInGap(
              g,
              h,
              this.$OzPlayheadManager6,
              n,
            )) &&
          j !== -1 &&
          (l === 0 || i[j].rangeStart - g < l) &&
          (!this.$OzPlayheadManager6.getBool(
            'playheadman_dont_skip_ahead_past_last_fetched',
          ) ||
            (o != null && i[j].rangeStart + f < o)) &&
          (this.$OzPlayheadManager16 == !0 || r('main'))
        ) {
          c = i[j];
          this.$OzPlayheadManager27(
            c.rangeStart + f,
            'jump_over_buffer_gap',
            a,
            null,
            {
              lastSegmentStartPTS: String(b),
              last200RequestedUrlDecisionMinTime: String(p),
              lastSeekTime: String(this.$OzPlayheadManager22),
            },
          );
          return;
        }
        this.$OzPlayheadManager18 &&
          this.$OzPlayheadManager18.markState(a, {
            nextBufferedRangeIndex: String(j),
            limitMaxGapSize: String(l),
            rangeStart: j !== -1 ? String(i[j].rangeStart) : null,
            isNearGapThreshold: String(m),
            numericalError: String(n),
          });
      };
      e.setEnableLiveheadCatchup = function (a) {
        this.$OzPlayheadManager16 = a;
      };
      e.destroy = function () {
        this.$OzPlayheadManager2.release(),
          this.$OzPlayheadManager3.release(),
          this.$OzPlayheadManager4.clear();
      };
      e.$OzPlayheadManager27 = function (a, b, c, d, e) {
        var f = a - this.$OzPlayheadManager1.currentTime,
          g = this.$OzPlayheadManager6.getNumber('seek_ahead_epsilon');
        if (g > 0 && Math.abs(f) <= g) return;
        this.$OzPlayheadManager11
          .getOperationLogger('playhead_adjustment')
          .setLength(Math.round(a * 1e3))
          .setReason(b)
          .setInitiator(c)
          .setType(d)
          .setUserInfo(
            babelHelpers['extends']({}, e, {
              seekAdjustment: String(Math.round(f * 1e3)),
            }),
          )
          .log();
        this.$OzPlayheadManager12(a);
        b === 'initial_playback_position' && (this.$OzPlayheadManager14 = !0);
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/media_source/OzMSESourceBufferImpl',
  ['oz-player/shims/OzDOMEventListener'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.registerOnUpdateStartListener = function (a) {
        return c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
          this.$1,
          'updatestart',
          a,
        );
      };
      b.registerOnUpdateEndListener = function (a) {
        return c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
          this.$1,
          'updateend',
          a,
        );
      };
      b.registerOnUpdateListener = function (a) {
        return c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
          this.$1,
          'update',
          a,
        );
      };
      b.registerOnErrorListener = function (a) {
        return c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
          this.$1,
          'error',
          a,
        );
      };
      b.getIsUpdating = function () {
        return this.$1.updating;
      };
      b.getBuffered = function () {
        return this.$1.buffered;
      };
      b.setAppendWindowEnd = function (a) {
        this.$1.appendWindowEnd = a;
      };
      b.appendBuffer = function (a) {
        this.$1.appendBuffer(a);
      };
      b.abort = function () {
        this.$1.abort();
      };
      b.remove = function (a, b) {
        this.$1.remove(a, b);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/media_source/OzMediaErrorProvider',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.hasError = function () {
        return this.$1.error !== null;
      };
      b.getMediaErrorName = function () {
        var a = this.$1.error;
        return a && a.message ? this.$2(a.message) : null;
      };
      b.getErrorCode = function () {
        var a = this.$1.error;
        return a && a.code ? a.code : null;
      };
      b.getVideoNode = function () {
        return this.$1;
      };
      b.$2 = function (a) {
        return a.replace(/([0-9]{2,})/g, function (a) {
          var b = '';
          while (b.length < a.length) b += '#';
          return b;
        });
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/shims/www/OzSourceBufferManagerWWW',
  ['cr:3493'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g.OzSourceBufferManager = b('cr:3493');
  },
  98,
);
__d(
  'oz-player/shims/OzSourceBufferManager',
  ['oz-player/shims/www/OzSourceBufferManagerWWW'],
  function (a, b, c, d, e, f) {
    'use strict';
    Object.keys(
      importNamespace('oz-player/shims/www/OzSourceBufferManagerWWW'),
    ).forEach(function (a) {
      if (a === 'default' || a === '__esModule') return;
      f[a] = importNamespace('oz-player/shims/www/OzSourceBufferManagerWWW')[a];
    });
  },
  null,
);
__d(
  'oz-player/shims/www/getOzVTTSourceBufferImplWWW',
  ['cr:3142'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = b('cr:3142');
  },
  98,
);
__d(
  'oz-player/shims/getOzVTTSourceBufferImpl',
  ['oz-player/shims/www/getOzVTTSourceBufferImplWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/getOzVTTSourceBufferImplWWW');
  },
  98,
);
__d(
  'oz-player/shims/www/OzVideoDecoder',
  ['Promise'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = a.VideoDecoder;
    function c(a) {
      try {
        if (g)
          return g.isConfigSupported(a).then(function (a) {
            return a.supported;
          });
      } catch (a) {
        return b('Promise').resolve(void 0);
      }
      return b('Promise').resolve(void 0);
    }
    f.isConfigSupported = c;
  },
  66,
);
__d(
  'oz-player/utils/ozGetErrorNameFromMediaErrorCode',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      switch (a) {
        case 1:
          return 'MEDIA_ERR_ABORTED';
        case 2:
          return 'MEDIA_ERR_NETWORK';
        case 3:
          return 'MEDIA_ERR_DECODE';
        case 4:
          return 'MEDIA_ERR_SRC_NOT_SUPPORTED';
        default:
      }
      return 'MEDIA_ERR_UNKNOWN';
    }
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/utils/OzFakeEventTarget',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.dispatchEvent = function (a) {
        if (this.$1[a] == null) return;
        this.$1[a].forEach(function (a) {
          return a();
        });
      };
      b.addEventListener = function (a, b) {
        var c = this;
        this.$1[a] === void 0 && (this.$1[a] = new Set());
        this.$1[a].add(b);
        return {
          remove: function () {
            c.removeEventListener(a, b);
          },
        };
      };
      b.removeEventListener = function (a, b) {
        if (!this.$1[a]) return;
        this.$1[a]['delete'](b);
      };
      b.destroy = function () {
        this.$1 = {};
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/workers/OzProxyVideoNode',
  ['oz-player/utils/OzFakeEventTarget'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        var e;
        e = a.call(this) || this;
        e.$OzProxyVideoNode1 = 0;
        e.$OzProxyVideoNode2 = 0;
        e.$OzProxyVideoNode3 = !1;
        e.$OzProxyVideoNode4 = !1;
        e.$OzProxyVideoNode5 = 1;
        e.$OzProxyVideoNode6 = null;
        e.$OzProxyVideoNode7 = b;
        e.$OzProxyVideoNode8 = c;
        e.$OzProxyVideoNode9 = d;
        Object.defineProperty(
          babelHelpers.assertThisInitialized(e),
          'currentTime',
          {
            get: function () {
              return e.$OzProxyVideoNode1;
            },
            set: function (a) {
              e.$OzProxyVideoNode9(a);
            },
            configurable: !0,
            enumerable: !0,
          },
        );
        Object.defineProperty(
          babelHelpers.assertThisInitialized(e),
          'duration',
          {
            get: function () {
              return e.$OzProxyVideoNode2;
            },
            set: function (a) {
              throw new Error('Unimplemented: cannot set video duration');
            },
            configurable: !0,
            enumerable: !0,
          },
        );
        Object.defineProperty(
          babelHelpers.assertThisInitialized(e),
          'seeking',
          {
            get: function () {
              return e.$OzProxyVideoNode3;
            },
            set: function (a) {
              throw new Error('Unimplemented: cannot set video seeking');
            },
            configurable: !0,
            enumerable: !0,
          },
        );
        Object.defineProperty(babelHelpers.assertThisInitialized(e), 'paused', {
          get: function () {
            return e.$OzProxyVideoNode4;
          },
          set: function (a) {
            throw new Error('Unimplemented: cannot set video paused');
          },
          configurable: !0,
          enumerable: !0,
        });
        Object.defineProperty(
          babelHelpers.assertThisInitialized(e),
          'playbackRate',
          {
            get: function () {
              return e.$OzProxyVideoNode5;
            },
            set: function (a) {
              throw new Error('Unimplemented: cannot set video playbackRate');
            },
            configurable: !0,
            enumerable: !0,
          },
        );
        Object.defineProperty(babelHelpers.assertThisInitialized(e), 'error', {
          get: function () {
            return e.$OzProxyVideoNode6;
          },
          set: function (a) {
            throw new Error('Unimplemented: cannot set video error');
          },
          configurable: !0,
          enumerable: !0,
        });
        return e;
      }
      var c = b.prototype;
      c.setMediaSource = function (a) {
        if (a) {
          a = a.handle;
          this.$OzProxyVideoNode7(a);
        } else this.$OzProxyVideoNode7(null);
      };
      c.play = function () {
        this.$OzProxyVideoNode8();
      };
      c.setState = function (a) {
        this.$OzProxyVideoNode1 = a.currentTime;
        this.$OzProxyVideoNode2 = a.duration;
        this.$OzProxyVideoNode3 = a.seeking;
        this.$OzProxyVideoNode4 = a.paused;
        this.$OzProxyVideoNode5 = a.playbackRate;
        this.$OzProxyVideoNode6 = (a = a.error) != null ? a : null;
      };
      return b;
    })(c('oz-player/utils/OzFakeEventTarget'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/workers/mirroring/OzMediaSourceMirroring',
  ['oz-player/shims/OzDOMEventListener'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      return { readyState: a.readyState };
    }
    function a(a, b) {
      var d = ['sourceclose', 'sourceended', 'sourceopen'];
      d.forEach(function (d) {
        c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
          a,
          d,
          function (c) {
            b(d, h(a));
          },
        );
      });
      return h(a);
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/media_source/MediaSourceManager',
  [
    'oz-player/loggings/OzMultiDestinationPerfLogger',
    'oz-player/media_source/OzMSESourceBufferImpl',
    'oz-player/media_source/OzMediaErrorProvider',
    'oz-player/shims/OzDOMEventListener',
    'oz-player/shims/OzDeferred',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/shims/OzSourceBufferManager',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/shims/getOzVTTSourceBufferImpl',
    'oz-player/shims/ozClearTimeout',
    'oz-player/shims/ozReportUnexpectedError',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
    'oz-player/shims/ozThrottle',
    'oz-player/shims/www/OzVideoDecoder',
    'oz-player/utils/OzCustomErrorCode',
    'oz-player/utils/OzError',
    'oz-player/utils/OzErrorEmitter',
    'oz-player/utils/OzMimeUtil',
    'oz-player/utils/ozGetErrorNameFromMediaErrorCode',
    'oz-player/workers/OzProxyVideoNode',
    'oz-player/workers/mirroring/OzMediaSourceMirroring',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b, d) {
      if (a instanceof EventTarget)
        return c('oz-player/shims/OzDOMEventListener').listenDOMEvent(a, b, d);
      else {
        a.addEventListener(b, d);
        return {
          remove: function () {
            a.removeEventListener(b, d);
          },
        };
      }
    }
    a = (function () {
      function a(a) {
        var b = this,
          e = a.videoNode,
          f = a.config,
          g = a.perfLoggerProvider;
        g =
          g === void 0
            ? new (d(
                'oz-player/loggings/OzMultiDestinationPerfLogger',
              ).OzMultiDestinationPerfLoggerProvider)([])
            : g;
        var i = a.handleVttCaptionsUpdated,
          j = a.onClearVideoNodeError,
          k = a.onRetryVideoElementError;
        a = a.onMediaSourceEvent;
        this.$3 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$4 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$6 = [];
        this.$7 = new Map();
        this.$8 = [];
        this.$10 = !1;
        this.$12 = !1;
        this.$13 = !1;
        this.$14 = !1;
        this.$15 = !1;
        this.$19 = null;
        this.$20 = null;
        this.$21 = new (c('oz-player/utils/OzErrorEmitter'))();
        this.$23 = 'undetected';
        this.$30 = function () {
          b.$32() || (b.$10 = !1);
          if (!b.$33()) return;
          var a = b.$8.shift();
          a && (a(b.$2), (b.$10 = !0));
        };
        this.$5 = g;
        this.$11 = f;
        this.$1 = e;
        this.$22 = i;
        this.$16 = j;
        this.$17 = k;
        this.$18 = a;
        this.$9 = new (c('oz-player/media_source/OzMediaErrorProvider'))(
          this.$1,
        );
        this.$11.getBool('av1_check_hardware_support') && this.$24();
        this.$3.addSubscriptions(
          h(this.$1, 'error', function () {
            var a;
            b.$5
              .getOperationLogger('media_element_error')
              .setError((a = b.$9.getMediaErrorName()) != null ? a : void 0)
              .setCode(b.$9.getErrorCode())
              .setResult('failed')
              .setUserInfo({ av1HardwareSupport: b.$23 })
              .log();
            b.$8 = [];
            b.$6 = [];
            b.$4.release();
            b.$4 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
            b.$15 = b.$15 || b.$14 || b.$13;
            a = b.$1.error;
            var d = (a == null ? void 0 : a.code) || 0,
              e = new (c('oz-player/utils/OzError'))({
                type: c('oz-player/utils/ozGetErrorNameFromMediaErrorCode')(d),
                description:
                  (a == null ? void 0 : a.message) != null ? a.message : '',
                extra: { originalError: a, code: String(d) },
              });
            if (b.$20 != null) {
              b.$5
                .getOperationLogger('media_element_error')
                .setError(a)
                .setCode(d)
                .setReason('mitigation_failed')
                .setResult('failed')
                .setUserInfo({ av1HardwareSupport: b.$23 })
                .log();
              b.$21.emitError(e);
              return;
            }
            b.$20 = b.$1.currentTime;
            b.$19 == null &&
              (b.$19 = c('oz-player/shims/ozSetTimeoutAcrossTransitions')(
                function () {
                  (b.$19 = null),
                    b.$11.getBool('retry_video_element_error') &&
                      (b.$17 != null && b.$17(e), b.$25());
                },
                0,
              ));
          }),
          h(this.$1, 'play', function () {
            b.$14 = !0;
          }),
          h(this.$1, 'playing', function () {
            (b.$14 = !1), (b.$15 = !1), (b.$20 = null), (b.$13 = !0);
          }),
          h(this.$1, 'pause', function () {
            (b.$14 = !1), (b.$13 = !1), (b.$15 = !!b.$1.error);
          }),
          h(this.$1, 'ended', function () {
            (b.$14 = !1), (b.$13 = !1);
          }),
        );
        this.$2 = new MediaSource();
        this.$5.getOperationLogger('media_source_new').log();
        this.$3.addSubscriptions(
          h(this.$2, 'sourceopen', function () {
            b.$5.getOperationLogger('media_source_open').log();
          }),
          h(this.$2, 'sourceended', function () {
            b.$5.getOperationLogger('media_source_ended').log();
          }),
          h(this.$2, 'sourceclose', function () {
            b.$5.getOperationLogger('media_source_close').log();
          }),
        );
        this.$18 &&
          c('oz-player/workers/mirroring/OzMediaSourceMirroring')(
            this.$2,
            this.$18,
          );
        this.$26(this.$2);
      }
      var b = a.prototype;
      b.$26 = function (a) {
        var b = this.$1;
        if (b instanceof c('oz-player/workers/OzProxyVideoNode'))
          b.setMediaSource(a);
        else {
          var d = b.src;
          d !== '' && URL.revokeObjectURL(d);
          if (a)
            if (
              this.$11.getBool('use_src_object_for_media_source') &&
              'srcObject' in b
            )
              try {
                b.srcObject = a;
              } catch (c) {
                if (c.name !== 'TypeError') throw c;
                b.src = URL.createObjectURL(a);
              }
            else b.src = URL.createObjectURL(a);
          else b.removeAttribute('src'), b.removeAttribute('srcObject');
        }
      };
      b.$25 = function () {
        var a = this;
        this.$7.forEach(function (a) {
          a.cancelOperationAndCleanQueue();
        });
        if (this.$11.getBool('abort_clear_video_node_on_detach') && this.$12)
          return;
        this.$2 = new MediaSource();
        this.$18 &&
          c('oz-player/workers/mirroring/OzMediaSourceMirroring')(
            this.$2,
            this.$18,
          );
        this.$26(this.$2);
        this.$7.forEach(function (a, b) {
          a.setSourceBuffer(null);
        });
        var b = this.$27().then(function () {
          var b = [];
          a.$7.forEach(function (c, d) {
            var e = a.$28(d).then(function (b) {
              c.setSourceBuffer(b), a.$29(b, d);
            });
            b.push(e);
          });
          return c('oz-player/shims/OzMaybeNativePromise').all(b);
        });
        b.then(function () {
          if (a.$11.getBool('abort_clear_video_node_on_detach') && a.$12)
            return;
          a.$16 && a.$16();
          a.$20 != null && (a.$1.currentTime = a.$20);
          if (a.$15) {
            var b = a.$1.play();
            return b == null ? void 0 : b['catch'](function () {});
          }
        })['catch'](function (b) {
          if (a.$11.getBool('abort_clear_video_node_on_detach') && a.$12)
            return;
          a.$21.emitError(b);
        });
      };
      b.$27 = function () {
        var a = this;
        if (this.$2.readyState === 'open')
          return c('oz-player/shims/OzMaybeNativePromise').resolve();
        var b = new (c('oz-player/shims/OzDeferred'))(
          c('oz-player/shims/OzMaybeNativePromise'),
        );
        this.$3.addSubscriptions(
          h(this.$2, 'sourceopen', function () {
            b.resolve(), a.$30();
          }),
        );
        return b.getPromise();
      };
      b.$28 = function (a) {
        var b = this,
          e;
        try {
          a.includes('vtt')
            ? (e = this.$31(a))
            : (e = this.$27().then(function () {
                return new (c('oz-player/media_source/OzMSESourceBufferImpl'))(
                  b.$2.addSourceBuffer(a),
                );
              }));
          return e.then(function (c) {
            if (b.$11.getBool('stub_safari_source_buffer_abort'))
              try {
                var e = c.abort,
                  f = function () {
                    b.$13 && e.call(c);
                  };
                c.abort = function () {
                  f();
                };
              } catch (a) {}
            b.$6.push(c);
            c.registerOnUpdateListener(function () {
              b.$5
                .cloneContext()
                .getOperationLogger('source_buffer_update_start')
                .setType(d('oz-player/utils/OzMimeUtil').getMimeType(a))
                .setMediaSourceSourceBuffer(
                  d('oz-player/utils/OzMimeUtil').getMimeType(a),
                  c,
                )
                .setType(d('oz-player/utils/OzMimeUtil').getMimeType(a))
                .log();
            });
            b.$5
              .getOperationLogger('add_source_buffer')
              .setMediaSourceSourceBuffer(
                d('oz-player/utils/OzMimeUtil').getMimeType(a),
                c,
              )
              .log();
            return c;
          });
        } catch (b) {
          e = new (c('oz-player/utils/OzError'))({
            type: 'OZ_SOURCE_BUFFER',
            description:
              'Failed to addSourceBuffer("' +
              a +
              '"): ' +
              (b.message || String(b)),
            extra: {
              originalError: b,
              code: c(
                'oz-player/utils/OzCustomErrorCode',
              ).SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR.toString(),
            },
          });
          throw e;
        }
      };
      b.$29 = function (a, b) {
        var c = this;
        this.$4.addSubscriptions(
          a.registerOnUpdateEndListener(function () {
            c.$30();
          }),
        );
      };
      b.$31 = function (a) {
        var b = this;
        return c('oz-player/shims/getOzVTTSourceBufferImpl')().then(function (
          d,
        ) {
          if (b.$22 != null) {
            var e = new d({ onCaptionsChanged: b.$22 }),
              f = c('oz-player/shims/ozThrottle')(function () {
                e.setCurrentVideoTime(b.$1.currentTime);
              }, 200);
            b.$3.addSubscriptions(
              h(b.$1, 'timeupdate', function () {
                f();
              }),
              {
                remove: function () {
                  f = function () {};
                },
              },
            );
            return e;
          } else
            throw new (c('oz-player/utils/OzError'))({
              type: 'OZ_SOURCE_BUFFER',
              description:
                'Failed to addSourceBuffer("' +
                a +
                '"): No handleVttCaptionsUpdated callback provided',
              extra: {
                code: c(
                  'oz-player/utils/OzCustomErrorCode',
                ).SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR.toString(),
              },
            });
        });
      };
      b.$24 = function () {
        var a = this;
        d('oz-player/shims/www/OzVideoDecoder')
          .isConfigSupported({
            codec: 'av01.0.04M.08',
            hardwareAcceleration: 'prefer-hardware',
          })
          .then(function (b) {
            a.$23 = (function () {
              switch (b) {
                case !0:
                  return 'supported';
                case !1:
                  return 'unsupported';
                default:
                  return 'unknown';
              }
            })();
          })
          ['catch'](function () {
            a.$23 = 'failed';
          });
      };
      b.createSourceBufferManager = function (a, b, e) {
        var f = this;
        return c('oz-player/shims/OzMaybeNativePromise')
          .all([this.$27(), this.$28(a)])
          .then(function (b) {
            b[0];
            b = b[1];
            var c = new (d(
              'oz-player/shims/OzSourceBufferManager',
            ).OzSourceBufferManager)(
              b,
              f.$11,
              f.$9,
              function (a) {
                return f.$2.readyState !== 'closed' && !0;
              },
              function () {
                return f.$2.readyState;
              },
              f.$5
                .cloneContext()
                .setType(d('oz-player/utils/OzMimeUtil').getMimeType(a)),
            );
            f.$29(b, a);
            f.$7.set(a, c);
            return c;
          })
          ['catch'](function (a) {
            if (a instanceof c('oz-player/utils/OzError')) throw a;
            else {
              a = new (c('oz-player/utils/OzError'))({
                type: 'OZ_SOURCE_BUFFER',
                description:
                  'Failed to create SBM: ' +
                  (a.message || String(a)) +
                  ', support AAC-LC=' +
                  (MediaSource.isTypeSupported('audio/mp4; codecs=mp4a.40.2')
                    ? 'true'
                    : 'false') +
                  ', readyState=' +
                  f.$2.readyState,
                extra: {
                  originalError: a,
                  code: c(
                    'oz-player/utils/OzCustomErrorCode',
                  ).SOURCE_BUFFER_MANAGER_CREATE_ERROR.toString(),
                },
              });
              throw a;
            }
          });
      };
      b.getReadyState = function () {
        return this.$2.readyState;
      };
      b.getMediaSource = function () {
        return this.$2;
      };
      b.notifyEndOfStream = function (a, b) {
        var d = this,
          e = new (c('oz-player/shims/OzDeferred'))(
            c('oz-player/shims/OzMaybeNativePromise'),
          );
        this.$3.addSubscriptions(
          h(this.$2, 'sourceended', function () {
            e.resolve();
          }),
        );
        this.$8.push(function (c) {
          if (c.readyState === 'open') {
            var e = d.$5.getOperationLogger('end_of_stream');
            e.setInitiator(a).setReason(b);
            e.log();
            c.endOfStream();
          }
        });
        this.$30();
        return e.getPromise();
      };
      b.updateDuration = function (a, b) {
        var d = this,
          e = this.$2.duration;
        if (Number.isFinite(e) && (!b || e >= a)) return;
        this.$8.push(function (b) {
          b.duration !== e &&
            !(isNaN(b.duration) && isNaN(e)) &&
            c('oz-player/shims/ozReportUnexpectedError')(
              new Error('mediaSource duration discrepancy'),
              b.duration + ' != ' + e,
              'warn',
            );
          if (a < b.duration) return;
          d.$5
            .getOperationLogger('media_source_update_duration')
            .setMediaSourcePreviousDuration(b.duration)
            .setMediaSourceNewDuration(a)
            .log();
          b.duration = a;
        });
        this.$30();
        return;
      };
      b.detach = function () {
        this.$19 &&
          (c('oz-player/shims/ozClearTimeout')(this.$19), (this.$19 = null));
        this.$5
          .getOperationLogger('source_buffer_detach')
          .unsetMediaSourceSourceBuffers();
        this.$26(null);
        for (var a = 0; a < this.$2.sourceBuffers.length; a++) {
          var b = this.$2.sourceBuffers[a];
          this.$2.removeSourceBuffer(b);
        }
        this.$3.release();
        this.$3.engage();
        this.$4.release();
        this.$4.engage();
        this.$8 = [];
        this.$10 = !1;
        this.$12 = !0;
      };
      b.$33 = function () {
        return (
          !this.$32() && this.$2.readyState === 'open' && !this.$10 && !this.$12
        );
      };
      b.$32 = function () {
        return this.$6.some(function (a) {
          return a.getIsUpdating();
        });
      };
      b.onError = function (a) {
        return this.$21.onError(a);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/workers/OzMainThreadFallbackClient',
  [
    'oz-player/media_source/MediaSourceManager',
    'oz-player/networks/FetchWithTimeout',
    'oz-player/shims/interfaces/IOzWorkerClient',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = a.videoNode,
          c = a.config,
          d = a.perfLoggerProvider,
          e = a.handleVttCaptionsUpdated,
          f = a.onClearVideoNodeError,
          g = a.onRetryVideoElementError,
          h = a.errorHandler;
        a.networkRequestStreamRetryHandler;
        this.$1 = c;
        this.$2 = b;
        this.$3 = d;
        this.$4 = e;
        this.$5 = f;
        this.$6 = g;
        this.$7 = h;
      }
      var b = a.prototype;
      b.fetchAndMaybeAppend = function (a, b, e, f) {
        return c('oz-player/networks/FetchWithTimeout')(a, b, e).then(function (
          a,
        ) {
          return new (d(
            'oz-player/shims/interfaces/IOzWorkerClient',
          ).ResponseAndMetadata)({ response: a });
        });
      };
      b.createMediaSourceManager = function () {
        var a = new (c('oz-player/media_source/MediaSourceManager'))({
          videoNode: this.$2,
          config: this.$1,
          perfLoggerProvider: this.$3,
          handleVttCaptionsUpdated: this.$4,
          onClearVideoNodeError: this.$5,
          onRetryVideoElementError: this.$6,
        });
        a.onError(this.$7);
        return a;
      };
      b.setPlayheadManager = function (a) {};
      b.resetStream = function (a) {};
      b.destroy = function () {};
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/www/OzCreateWorkerClientWWW',
  ['cr:1514', 'oz-player/workers/OzMainThreadFallbackClient'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (b('cr:1514') !== null && b('cr:1514').isSupported())
        return new (b('cr:1514'))(a);
      else return new (c('oz-player/workers/OzMainThreadFallbackClient'))(a);
    }
    g.createWorkerClient = a;
  },
  98,
);
__d(
  'oz-player/shims/OzCreateWorkerClient',
  ['oz-player/shims/www/OzCreateWorkerClientWWW'],
  function (a, b, c, d, e, f) {
    'use strict';
    Object.keys(
      importNamespace('oz-player/shims/www/OzCreateWorkerClientWWW'),
    ).forEach(function (a) {
      if (a === 'default' || a === '__esModule') return;
      f[a] = importNamespace('oz-player/shims/www/OzCreateWorkerClientWWW')[a];
    });
  },
  null,
);
__d(
  'oz-player/shims/www/UuidWWW',
  ['uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('uuid');
  },
  98,
);
__d(
  'oz-player/shims/OzUuid',
  ['oz-player/shims/www/UuidWWW'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/shims/www/UuidWWW');
  },
  98,
);
__d(
  'oz-player/states/OzObservedPlaybackState',
  [
    'oz-player/loggings/OzMultiDestinationPerfLogger',
    'oz-player/shims/OzDOMEventListener',
    'oz-player/shims/OzSubscriptionsHandler',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, e) {
        var f = this;
        e === void 0 &&
          (e = new (d(
            'oz-player/loggings/OzMultiDestinationPerfLogger',
          ).OzMultiDestinationPerfLoggerProvider)([]));
        this.$2 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$4 = function () {
          f.$3.getOperationLogger('pause').setState('paused').log();
        };
        this.$5 = function () {
          f.$3.getOperationLogger('playing').setState('playing').log();
        };
        this.$1 = b;
        this.$3 = e;
        this.$2.addSubscriptions(
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            this.$1,
            'pause',
            this.$4,
          ),
          c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
            this.$1,
            'playing',
            this.$5,
          ),
        );
      }
      var b = a.prototype;
      b.isPlaying = function () {
        return !this.$1.paused;
      };
      b.getCurrentTime = function () {
        return this.$1.currentTime;
      };
      b.getCurrentTimeUpdateTime = function () {
        return Date.now();
      };
      b.getDuration = function () {
        return this.$1.duration;
      };
      b.addEventListener = function (a, b) {
        return c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
          this.$1,
          a,
          b,
        );
      };
      b.destroy = function () {
        this.$2.release();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/OzPositionToViewportUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c) {
      b = b
        .filter(function (a) {
          a = a.position;
          if (a == null) return !1;
          var b = a.y - window.scrollY;
          return b >= 0 || (a.height + b) / a.height > c;
        })
        .sort(function (a, b) {
          return a.position == null || b.position == null
            ? 0
            : a.position.y - b.position.y;
        });
      return b.findIndex(function (b) {
        return b.video === a;
      });
    }
    f.determinePositionIndexOfVideoFromViewportVertically = a;
  },
  66,
);
__d(
  'oz-player/states/OzPositionToViewportTracker',
  [
    'oz-player/shims/OzEventEmitter',
    'oz-player/utils/OzPositionToViewportUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = null,
      i = 0.5;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.$OzPositionToViewportTracker1 = [];
        c.$OzPositionToViewportTracker5 = function (a) {
          a.forEach(function (a) {
            var b = c.$OzPositionToViewportTracker1.find(function (b) {
              return a.target === b.video;
            });
            b != null &&
              (a.isIntersecting
                ? (b.position = c.$OzPositionToViewportTracker7(a))
                : c.$OzPositionToViewportTracker1.map(function (b) {
                    a.target === b.video && (b.position = null);
                  }));
            c.$OzPositionToViewportTracker1.forEach(function (a) {
              a.positionIndexToViewportVertically =
                c.$OzPositionToViewportTracker6(a.video);
            });
          }),
            c.emit('state_changed');
        };
        c.$OzPositionToViewportTracker2 = b;
        return c;
      }
      var c = b.prototype;
      c.$OzPositionToViewportTracker4 = function () {
        if (this.$OzPositionToViewportTracker3 != null) return;
        this.$OzPositionToViewportTracker3 = new IntersectionObserver(
          this.$OzPositionToViewportTracker5,
          {
            rootMargin:
              this.$OzPositionToViewportTracker2.getNumber(
                'pixels_above_viewport_to_observe',
              ) +
              'px 0px ' +
              this.$OzPositionToViewportTracker2.getNumber(
                'pixels_below_viewport_to_observe',
              ) +
              'px 0px',
            threshold: 0,
          },
        );
      };
      c.registerVideo = function (a) {
        this.$OzPositionToViewportTracker1.push({
          video: a,
          position: null,
          positionIndexToViewportVertically: -1,
        }),
          this.$OzPositionToViewportTracker4(),
          this.$OzPositionToViewportTracker3 != null &&
            this.$OzPositionToViewportTracker3.observe(a);
      };
      c.getPositionIndexOfVideoFromViewportVertically = function (a) {
        var b = this.$OzPositionToViewportTracker1.find(function (b) {
          return b.video === a;
        });
        return b != null ? b.positionIndexToViewportVertically : -1;
      };
      c.$OzPositionToViewportTracker6 = function (a) {
        return d(
          'oz-player/utils/OzPositionToViewportUtils',
        ).determinePositionIndexOfVideoFromViewportVertically(
          a,
          this.$OzPositionToViewportTracker1,
          i,
        );
      };
      c.$OzPositionToViewportTracker7 = function (a) {
        a = a.boundingClientRect;
        return {
          x: a.x + window.scrollX,
          y: a.y + window.scrollY,
          width: a.width,
          height: a.height,
        };
      };
      b.getInstance = function (a) {
        h == null && (h = new b(a));
        return h;
      };
      c.unregisterVideo = function (a) {
        var b = this,
          c = [];
        this.$OzPositionToViewportTracker1.forEach(function (d) {
          d.video === a && b.$OzPositionToViewportTracker3 != null
            ? b.$OzPositionToViewportTracker3.unobserve(a)
            : c.push(d);
        });
        this.$OzPositionToViewportTracker1 = c;
        this.$OzPositionToViewportTracker1.length === 0 &&
          this.$OzPositionToViewportTracker3 != null &&
          (this.$OzPositionToViewportTracker3.disconnect(),
          (this.$OzPositionToViewportTracker3 = null));
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/states/OzPositionToViewport',
  [
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/states/OzPositionToViewportTracker',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$OzPositionToViewport1 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        e.$OzPositionToViewport3 = b;
        e.$OzPositionToViewport2 = c(
          'oz-player/states/OzPositionToViewportTracker',
        ).getInstance(d);
        e.$OzPositionToViewport2.registerVideo(b);
        e.$OzPositionToViewport1.addSubscriptions(
          e.$OzPositionToViewport2.addListener('state_changed', function () {
            e.emit('state_changed');
          }),
        );
        return e;
      }
      var d = b.prototype;
      d.getPositionIndexOfVideoFromViewportVertically = function () {
        return this.$OzPositionToViewport3 != null
          ? this.$OzPositionToViewport2.getPositionIndexOfVideoFromViewportVertically(
              this.$OzPositionToViewport3,
            )
          : -1;
      };
      d.destroy = function () {
        this.$OzPositionToViewport3 != null &&
          this.$OzPositionToViewport2.unregisterVideo(
            this.$OzPositionToViewport3,
          ),
          (this.$OzPositionToViewport3 = null);
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzPlaybackConfidenceUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 0.8;
    function a(a, b, c, d, e, f) {
      f = Math.min(1, c / d);
      c = 1 + (1 - f) * e;
      d = a.getBandwidth() * c;
      return d > b ? g * (b / d) : 1 - ((1 - g) * d) / b;
    }
    f.getPlaybackConfidence = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzAbrManager',
  [
    'oz-player/networks/OzBandwidthEstimator',
    'oz-player/strategies/OzPlaybackConfidenceUtils',
    'oz-player/utils/OzAbrUtils',
    'oz-player/utils/OzBufferingUtils',
    'oz-player/utils/OzPlaybackRestrictionsUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, c, d, e, f, g, h) {
        (this.$2 = 0),
          (this.$3 = Date.now()),
          (this.$4 = !1),
          (this.$10 = null),
          (this.$1 = a),
          (this.$5 = b),
          (this.$6 = this.$14(b, c)),
          (this.$7 = d),
          (this.$8 = e),
          (this.$11 = f),
          (this.$12 = g),
          (this.$13 = h);
      }
      var b = a.prototype;
      b.setSourceBuffer = function (a) {
        this.$9 = a;
      };
      b.$14 = function (a, b) {
        var c = this.$1.getNumber('abr_restrict_from_index'),
          d = this.$1.getNumber('abr_restrict_to_index');
        if (d === 0 && c === 0) return b;
        var e = b.findIndex(function (b) {
          return a.getID() === b.getID();
        });
        return e === -1
          ? b
          : b.filter(function (a, b) {
              return b - e >= c && b - e <= d;
            });
      };
      b.$15 = function (a) {
        a = d('oz-player/utils/OzAbrUtils').excludeLargeRepresentations(
          this.$1,
          a,
          this.$12(),
          this.$11,
        );
        a = d(
          'oz-player/utils/OzPlaybackRestrictionsUtils',
        ).applyVideoPlaybackRestrictions(this.$1, this.$7, this.$12(), a);
        return a;
      };
      b.getBestRepresentation = function (a) {
        a = (a = a == null ? void 0 : a.length) != null ? a : null;
        var b = d(
            'oz-player/utils/OzBufferingUtils',
          ).getBufferAheadFromPlaybackStates(this.$9, this.$8),
          e = d('oz-player/utils/OzAbrUtils').getReasonToPreventEvaluation(
            this.$1,
            this.$4,
            b,
            c('oz-player/networks/OzBandwidthEstimator').getSampleCount(),
            this.$2,
            this.$3,
          );
        if (e != null) {
          this.$10 = e;
          return this.$5;
        }
        e = Date.now();
        this.$2 = e;
        var f = c(
            'oz-player/networks/OzBandwidthEstimator',
          ).getAdjustedBandwidth(this.$1.getLegacyConfig()),
          g = this.$15(this.$6);
        f = this.$16(g, f, b, a);
        a = g[0];
        f = f || a;
        if (this.$17(b, f)) {
          this.$10 = 'high_buffer';
          return this.$5;
        }
        this.$5 !== f && ((this.$4 = !0), (this.$3 = e), (this.$5 = f));
        this.$10 = 'bandwidth';
        return f;
      };
      b.$16 = function (a, b, c, e) {
        e === void 0 && (e = null);
        var f = null;
        for (var g = 0; g < a.length; g++) {
          var h = d(
            'oz-player/strategies/OzPlaybackConfidenceUtils',
          ).getPlaybackConfidence(
            a[g],
            b,
            c,
            this.$1.getNumber('low_buffer_bandwidth_target_threshold'),
            this.$1.getNumber('low_buffer_bandwidth_target_increase_factor'),
            e,
          );
          h > this.$1.getNumber('abr_confidence_threshold') &&
            (!f || f.getBandwidth() < a[g].getBandwidth()) &&
            (f = a[g]);
        }
        return f;
      };
      b.$17 = function (a, b) {
        var c = this.$1.getNumber('abr_prevent_down_switch_buffer_threshold');
        return c > 0 && a >= c && this.$5.getBandwidth() > b.getBandwidth()
          ? !0
          : !1;
      };
      b.getLastEvaluationReason = function () {
        return this.$10;
      };
      b.updateRepresentations = function (a) {
        var b = this;
        this.$6 = a;
        a = this.$6.find(function (a) {
          return a.getQualityLabel() === b.$5.getQualityLabel();
        });
        this.$5 = (a = a) != null ? a : this.$6[0];
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzAudioIBRManager',
  ['oz-player/networks/OzBandwidthEstimator'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.getInitialAudioRepresentation = function (a) {
        var b = c(
          'oz-player/networks/OzBandwidthEstimator',
        ).getAdjustedBandwidth(this.$1.getLegacyConfig());
        a = a.slice(0);
        a.sort(function (a, b) {
          return a.getBandwidth() - b.getBandwidth();
        });
        var d = this.$1.getNumber('live_audio_ibr_bandwidth_percentage');
        d = b * d;
        for (var e = a.length - 1; e >= 0; e--)
          if (a[e].getBandwidth() <= d) {
            this.$2
              .getOperationLogger('audio_ibr_success')
              .setRepresentationID(a[e].getID())
              .setReason(b.toString())
              .log();
            return a[e];
          }
        this.$2
          .getOperationLogger('audio_ibr_no_op')
          .setReason(b.toString())
          .log();
        return null;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/getSegmentsCount',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c, d) {
      var e = 0,
        f = a.getTimeRange().startTime;
      a = a;
      var g = a.getTimeRange().startTime;
      while (a !== null && g < c + f) {
        var h = g;
        e++;
        a = b.getSegmentAfter(a);
        if (a) g = a.getTimeRange().startTime;
        else break;
        if (g <= h) return d;
      }
      return Math.max(e, 1);
    }
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzStaticStreamSegmentsStrategy',
  ['oz-player/strategies/getSegmentsCount'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.isActive = function () {
        return !0;
      };
      b.getSegmentsCount = function (a, b, d) {
        a = this.$1.getNumber('seconds_to_stream');
        var e = this.$1.getNumber('segments_to_stream');
        a > 0 && (e = c('oz-player/strategies/getSegmentsCount')(b, d, a, e));
        return e;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy',
  [
    'oz-player/networks/OzBandwidthEstimator',
    'oz-player/strategies/OzStaticStreamSegmentsStrategy',
    'oz-player/strategies/getSegmentsCount',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = new (c(
            'oz-player/strategies/OzStaticStreamSegmentsStrategy',
          ))(a));
      }
      var b = a.prototype;
      b.isActive = function (a) {
        return !0;
      };
      b.getSegmentsCount = function (a, b, d) {
        var e = c('oz-player/networks/OzBandwidthEstimator').getBandwidth(
            this.$1.getLegacyConfig(),
          ),
          f = c(
            'oz-player/networks/OzBandwidthEstimator',
          ).getStandardDeviationOfBandwidth(),
          g = this.$1.getNumber('bandwidth_boundary_standard_deviation_factor'),
          h = this.$2.some(function (a) {
            a = a.getBandwidth();
            return Math.abs(a - e) < f * g;
          });
        h = h ? this.$4(a, b, d) : this.$3.getSegmentsCount(a, b, d);
        a = this.$5(b, e);
        return Math.min(h, a);
      };
      b.$4 = function (a, b, d) {
        a = this.$1.getNumber('seconds_to_stream_near_bandwidth_boundary');
        var e = this.$1.getNumber('segments_to_stream_near_bandwidth_boundary');
        a > 0 && (e = c('oz-player/strategies/getSegmentsCount')(b, d, a, e));
        return e;
      };
      b.$5 = function (a, b) {
        var c = Infinity;
        a = a.getByteRange();
        if (a) {
          var d = a.endByte;
          if (d != null) {
            var e = this.$1.getNumber('per_stream_duration_target');
            d = d - a.startByte;
            e > 1e-5 && d !== 0 && (c = Math.ceil((e * b) / (d * 8)));
          }
        }
        return c;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzBlockedRepresentationsManager',
  [
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/ozClearTimeout',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
    'oz-player/utils/OzError',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        (this.$2 = new Map()),
          (this.$3 = new Set()),
          (this.$4 = new Set()),
          (this.$5 = new (c('oz-player/shims/OzEventEmitter'))()),
          this.$6(a),
          this.$7(a);
      }
      var b = a.prototype;
      b.isBlocked = function (a) {
        return this.$3.has(a);
      };
      b.handleError = function (a, b) {
        if (this.$1 != null && this.$3.size === this.$1 - 1) return !1;
        if (
          b instanceof c('oz-player/utils/OzError') &&
          b.getType() === 'OZ_NETWORK'
        ) {
          b = Number(b.getExtra().code);
          if (!isNaN(b) && this.$2.has(b)) {
            this.$3.has(a) || this.$8(a, b);
            return !0;
          }
        }
        return !1;
      };
      b.$8 = function (a, b) {
        var d,
          e = this;
        this.$3.add(a);
        (d = this.$5) == null ? void 0 : d.emit('representation_blocked', a);
        d = this.$2.get(b) || 0;
        if (d > 0) {
          var f = c('oz-player/shims/ozSetTimeoutAcrossTransitions')(
            function () {
              e.$3['delete'](a), e.$4['delete'](f);
            },
            d,
          );
          this.$4.add(f);
        }
      };
      b.applyRestriction = function (a, b) {
        var c = this;
        return a.filter(function (a) {
          return !c.$3.has(a.getID());
        });
      };
      b.onRepresentationBlocked = function (a) {
        return this.$5
          ? this.$5.addListener('representation_blocked', a)
          : { remove: function () {} };
      };
      b.setAvailableRepresentationsCount = function (a) {
        this.$1 = a;
      };
      b.destroy = function () {
        var a;
        (a = this.$5) == null ? void 0 : a.removeAllListeners();
        this.$5 = null;
        for (
          var a = this.$4,
            b = Array.isArray(a),
            d = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (b) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          c('oz-player/shims/ozClearTimeout')(e);
        }
        this.$4.clear();
      };
      b.$6 = function (a) {
        var b = this;
        try {
          a = JSON.parse(a.getString('block_representation_status_codes_json'));
          Array.isArray(a) &&
            a.forEach(function (a) {
              a = parseInt(a, 10);
              isNaN(a) || b.$2.set(a, -1);
            });
        } catch (a) {}
      };
      b.$7 = function (a) {
        var b = this;
        try {
          a = JSON.parse(
            a.getString('block_representation_status_codes_temporarily_json'),
          );
          Object.entries(a).forEach(function (a) {
            var c = a[0];
            a = a[1];
            c = parseInt(c, 10);
            a = parseInt(a, 10);
            !isNaN(c) && !isNaN(a) && b.$2.set(c, a);
          });
        } catch (a) {}
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzBufferAheadPriorityStrategy',
  [
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/shims/ozThrottle',
    'oz-player/utils/OzBufferingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 6,
      i = 1e3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$OzBufferAheadPriorityStrategy3 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        e.$OzBufferAheadPriorityStrategy5 = function () {
          e.emit('state_changed');
        };
        e.$OzBufferAheadPriorityStrategy4 = b;
        e.$OzBufferAheadPriorityStrategy1 = d;
        e.$OzBufferAheadPriorityStrategy3.addSubscriptions(
          e.$OzBufferAheadPriorityStrategy1.addEventListener(
            'progress',
            c('oz-player/shims/ozThrottle')(
              e.$OzBufferAheadPriorityStrategy5,
              i,
            ),
          ),
          e.$OzBufferAheadPriorityStrategy1.addEventListener(
            'timeupdate',
            c('oz-player/shims/ozThrottle')(
              e.$OzBufferAheadPriorityStrategy5,
              i,
            ),
          ),
        );
        return e;
      }
      var e = b.prototype;
      e.getName = function () {
        return 'buffer_ahead';
      };
      e.setSourceBufferState = function (a) {
        if (this.$OzBufferAheadPriorityStrategy2) return;
        this.$OzBufferAheadPriorityStrategy2 = a;
        this.$OzBufferAheadPriorityStrategy3.addSubscriptions(
          a.addEventListener(
            'buffer_updated',
            c('oz-player/shims/ozThrottle')(
              this.$OzBufferAheadPriorityStrategy5,
              i,
            ),
          ),
        );
      };
      e.isActive = function () {
        return !0;
      };
      e.getPriority = function () {
        var a = this.$OzBufferAheadPriorityStrategy2;
        if (!a) return 1;
        var b = this.$OzBufferAheadPriorityStrategy1.getCurrentTime();
        a = a.getBufferedRanges();
        b = d('oz-player/utils/OzBufferingUtils').getBufferAheadFromCurrentTime(
          b,
          a,
        );
        return b >= h ? 0 : 1;
      };
      e.destroy = function () {
        this.$OzBufferAheadPriorityStrategy3.release();
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzBufferAheadTargetStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.isActive = function () {
        return !0;
      };
      b.getBufferTarget = function () {
        return this.$1.getNumber('buffer_ahead_target');
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzBufferEndLimitStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.isActive = function () {
        return !0;
      };
      b.getBufferTarget = function () {
        var a = this.$3();
        return this.$2 >= a ? this.$2 - a : 0;
      };
      b.$3 = function () {
        return this.$1.buffered.length === 0 ? 0 : this.$1.buffered.end(0);
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.isActive = function (a) {
        return !a.isPlaying();
      };
      b.getSegmentsCount = function (a, b, c) {
        a = a.getCurrentTime();
        var d = this.$1.computeBufferTarget(),
          e = 1,
          f = b;
        b = b.getTimeRange().startTime;
        while (f !== null && b < d + a) {
          f = c.getSegmentAfter(f);
          if (!f) break;
          b = f.getTimeRange().startTime;
          e++;
        }
        return e;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzBufferTargetCalculator',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = 0), (this.$2 = a), (this.$3 = b);
      }
      var b = a.prototype;
      b.computeBufferTarget = function () {
        var a = this.$1;
        for (
          var b = this.$2,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          if (e.isActive()) {
            a = e.getBufferTarget();
            break;
          }
        }
        for (
          e = this.$3,
            d = Array.isArray(e),
            c = 0,
            e = d
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (d) {
            if (c >= e.length) break;
            b = e[c++];
          } else {
            c = e.next();
            if (c.done) break;
            b = c.value;
          }
          b = b;
          a = b.adjustBufferTargetInSeconds(a);
        }
        this.$1 = a;
        return a;
      };
      b.handleEvent = function (a) {
        for (
          var b = this.$3,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e.handleEvent(a);
        }
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = a.config;
        a = a.minimumBufferTargetSec;
        this.$2 = 1;
        this.$1 = b;
        this.$3 = a;
      }
      var b = a.prototype;
      b.adjustBufferTargetInSeconds = function (a) {
        var b;
        return Math.max(
          (b = this.$3) != null
            ? b
            : this.$1.getNumber('buffer_target_constraint_minimum_sec'),
          a * this.$2,
        );
      };
      b.handleEvent = function (a) {
        var b = this.$2;
        switch (a) {
          case 'append_succeeded':
            b = Math.max(
              0,
              Math.min(
                1,
                b +
                  this.$1.getNumber(
                    'buffer_target_constraint_append_succeeded_reward',
                  ),
              ),
            );
            break;
          case 'append_quota_exceeded':
            b = Math.max(
              0,
              Math.min(
                1,
                b -
                  this.$1.getNumber(
                    'buffer_target_constraint_quota_exceeded_penalty',
                  ),
              ),
            );
            break;
          default:
            a;
        }
        this.$2 = b;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzPausedStreamSegmentsCountStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.isActive = function () {
        return !this.$1.isPlaying();
      };
      b.getSegmentsCount = function (a, b, c) {
        return this.$2.getNumber('paused_stream_segments_count');
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzPlayheadAtInterruptionDetector',
  [
    'oz-player/shims/OzDOMEventListener',
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzSubscriptionsHandler',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$OzPlayheadAtInterruptionDetector2 = null;
        e.$OzPlayheadAtInterruptionDetector3 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        e.$OzPlayheadAtInterruptionDetector4 = null;
        e.$OzPlayheadAtInterruptionDetector1 = b;
        b = d
          ? d.addListener('enterBuffering', function () {
              e.$OzPlayheadAtInterruptionDetector5();
            })
          : c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
              e.$OzPlayheadAtInterruptionDetector1,
              'waiting',
              function () {
                e.$OzPlayheadAtInterruptionDetector5();
              },
            );
        e.$OzPlayheadAtInterruptionDetector3.addSubscriptions(b);
        e.$OzPlayheadAtInterruptionDetector4 = d;
        return e;
      }
      var d = b.prototype;
      d.notifyStreamInterrupted = function (a) {
        (this.$OzPlayheadAtInterruptionDetector2 = a),
          this.$OzPlayheadAtInterruptionDetector5();
      };
      d.notifyStreamResumed = function () {
        this.$OzPlayheadAtInterruptionDetector2 = null;
      };
      d.$OzPlayheadAtInterruptionDetector5 = function () {
        if (this.$OzPlayheadAtInterruptionDetector2 != null) {
          var a = this.$OzPlayheadAtInterruptionDetector2 || 0;
          Math.abs(this.$OzPlayheadAtInterruptionDetector1.currentTime - a) <
            h && this.emit('playheadAtInterruption', a);
        }
      };
      d.destroy = function () {
        this.$OzPlayheadAtInterruptionDetector3.release(),
          (this.$OzPlayheadAtInterruptionDetector4 = null);
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzPlayingStatePriorityStrategy',
  ['oz-player/shims/OzEventEmitter', 'oz-player/shims/OzSubscriptionsHandler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this) || this;
        d.$OzPlayingStatePriorityStrategy1 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        d.$OzPlayingStatePriorityStrategy3 = function () {
          d.emit('state_changed');
        };
        d.$OzPlayingStatePriorityStrategy2 = b;
        d.$OzPlayingStatePriorityStrategy1.addSubscriptions(
          d.$OzPlayingStatePriorityStrategy2.addEventListener(
            'playing',
            d.$OzPlayingStatePriorityStrategy3,
          ),
          d.$OzPlayingStatePriorityStrategy2.addEventListener(
            'play',
            d.$OzPlayingStatePriorityStrategy3,
          ),
          d.$OzPlayingStatePriorityStrategy2.addEventListener(
            'pause',
            d.$OzPlayingStatePriorityStrategy3,
          ),
        );
        return d;
      }
      var d = b.prototype;
      d.isActive = function () {
        return !0;
      };
      d.getName = function () {
        return 'playing_state';
      };
      d.setSourceBufferState = function (a) {};
      d.getPriority = function () {
        return this.$OzPlayingStatePriorityStrategy2.isPlaying() ? 1 : 0;
      };
      d.destroy = function () {
        this.$OzPlayingStatePriorityStrategy1.release();
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzPositionToViewportPriorityStrategy',
  ['oz-player/shims/OzEventEmitter', 'oz-player/shims/OzSubscriptionsHandler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$OzPositionToViewportPriorityStrategy3 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        e.$OzPositionToViewportPriorityStrategy4 = function () {
          e.emit('state_changed');
        };
        e.$OzPositionToViewportPriorityStrategy2 = b;
        e.$OzPositionToViewportPriorityStrategy1 = d;
        e.$OzPositionToViewportPriorityStrategy3.addSubscriptions(
          b.addListener(
            'state_changed',
            e.$OzPositionToViewportPriorityStrategy4,
          ),
        );
        return e;
      }
      var d = b.prototype;
      d.isActive = function () {
        return !0;
      };
      d.getName = function () {
        return 'position_to_viewport';
      };
      d.setSourceBufferState = function (a) {};
      d.getPriority = function () {
        var a = this.$OzPositionToViewportPriorityStrategy1.getNumber(
            'prioritize_by_viewport_static_penalty',
          ),
          b =
            this.$OzPositionToViewportPriorityStrategy2.getPositionIndexOfVideoFromViewportVertically();
        return a > 0 ? (b === -1 ? a * -1 : 0) : b === -1 ? -Infinity : -1 * b;
      };
      d.destroy = function () {
        this.$OzPositionToViewportPriorityStrategy3.release();
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzPriorityCalculator',
  ['oz-player/shims/OzEventEmitter', 'oz-player/shims/OzSubscriptionsHandler'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this) || this;
        d.$OzPriorityCalculator2 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        d.$OzPriorityCalculator1 = b;
        (b = d.$OzPriorityCalculator2).addSubscriptions.apply(
          b,
          d.$OzPriorityCalculator1.map(function (a) {
            return a.addListener('state_changed', function () {
              d.emit('state_changed', d.compute(), a.getName());
            });
          }),
        );
        return d;
      }
      var d = b.prototype;
      d.setSourceBufferState = function (a) {
        this.$OzPriorityCalculator1.forEach(function (b) {
          return b.setSourceBufferState(a);
        }),
          this.emit('state_changed', this.compute(), 'source_buffer');
      };
      d.compute = function () {
        var a = this.$OzPriorityCalculator1.reduce(function (a, b) {
          b = b.isActive() ? b.getPriority() : 0;
          return a + b;
        }, 0);
        return Math.max(a, 0);
      };
      d.destroy = function () {
        this.$OzPriorityCalculator2.release();
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzSingleCodecRestriction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.applyRestriction = function (a, b) {
        if (a.length <= 0) return a;
        b = new Set(
          a.map(function (a) {
            return g(a);
          }),
        );
        var c = 'av01',
          d = b.has(c) ? c : b.values().next().value;
        return d == null
          ? a
          : a.filter(function (a) {
              return g(a) === d;
            });
      };
      return a;
    })();
    function g(a) {
      return a.getMimeCodecs().replace(/\..*$/, '');
    }
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzStaleManifestBufferTargetStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = b), (this.$2 = a);
      }
      var b = a.prototype;
      b.isActive = function () {
        return (
          this.$2.getRefreshDate() == null &&
          this.$1.getNumber('stale_mpd_buffer_ahead_target') > 0
        );
      };
      b.getBufferTarget = function () {
        return this.$1.getNumber('stale_mpd_buffer_ahead_target');
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzStartupBufferTargetStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$3 = b);
      }
      var b = a.prototype;
      b.isActive = function () {
        var a = this.$1.isPlaying();
        a && (this.$2 = !0);
        return !this.$2;
      };
      b.getBufferTarget = function () {
        return this.$3.getNumber('pre_start_buffer_ahead_target');
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzStreamSegmentsCountCalculator',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 1;
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.computeMin = function (a, b, c) {
        var d = Number.MAX_VALUE;
        for (
          var e = this.$1,
            f = Array.isArray(e),
            h = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var i;
          if (f) {
            if (h >= e.length) break;
            i = e[h++];
          } else {
            h = e.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          i.isActive(a) && (d = Math.min(d, i.getSegmentsCount(a, b, c)));
        }
        return d === Number.MAX_VALUE ? g : Math.max(d, g);
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/strategies/OzSupportedMimeCodecsRestriction',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.applyRestriction = function (a, b) {
        return a.filter(function (a) {
          a = MediaSource.isTypeSupported(a.getMimeCodecs());
          return !!a;
        });
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/streams/OzEndOfStreamWatcher',
  ['oz-player/shims/OzEventEmitter', 'oz-player/shims/ozvariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this) || this;
        d.$OzEndOfStreamWatcher1 = new Map();
        d.$OzEndOfStreamWatcher4 = !1;
        d.$OzEndOfStreamWatcher2 = b;
        d.$OzEndOfStreamWatcher3 = c;
        return d;
      }
      var d = b.prototype;
      d.registerMediaStream = function (a) {
        this.$OzEndOfStreamWatcher1.has(a) &&
          c('oz-player/shims/ozvariant')(0, 5191),
          this.$OzEndOfStreamWatcher1.set(a, !1);
      };
      d.notifyRepresentationSwitched = function (a) {
        this.$OzEndOfStreamWatcher1.has(a) ||
          c('oz-player/shims/ozvariant')(0, 5192),
          this.$OzEndOfStreamWatcher5(
            'end_of_stream_watcher',
            'representation_switched',
          );
      };
      d.notifyMediaStreamEnded = function (a) {
        this.$OzEndOfStreamWatcher1.has(a) ||
          c('oz-player/shims/ozvariant')(0, 5192),
          this.$OzEndOfStreamWatcher1.set(a, !0),
          this.$OzEndOfStreamWatcher5(
            'end_of_stream_watcher',
            'media_stream_ended',
          );
      };
      d.$OzEndOfStreamWatcher5 = function (a, b) {
        var c = this;
        if (this.$OzEndOfStreamWatcher3.getBool('do_not_end_stream')) {
          !this.$OzEndOfStreamWatcher4 &&
            this.$OzEndOfStreamWatcher6() &&
            ((this.$OzEndOfStreamWatcher4 = !0), this.emit('streamEnd'));
          return;
        }
        var d = this.$OzEndOfStreamWatcher2.getReadyState();
        d === 'open' &&
          this.$OzEndOfStreamWatcher6() &&
          this.$OzEndOfStreamWatcher2
            .notifyEndOfStream(a, b)
            .then(function () {
              c.emit('streamEnd');
            })
            ['catch'](function () {
              c.emit('streamEnd');
            });
      };
      d.$OzEndOfStreamWatcher6 = function () {
        if (this.$OzEndOfStreamWatcher1.size === 0) return !1;
        for (
          var a = this.$OzEndOfStreamWatcher1.values(),
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
          if (!d) return !1;
        }
        return !0;
      };
      d.destroy = function () {
        this.$OzEndOfStreamWatcher1.clear();
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/streams/OzHandleUserRepresentationSwitch',
  ['oz-player/shims/OzSubscriptionsHandler', 'oz-player/utils/OzErrorEmitter'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d, e, f, g) {
        var h = this;
        this.$2 = new (c('oz-player/utils/OzErrorEmitter'))();
        this.$5 = null;
        this.$6 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$1 = a;
        this.$3 = b;
        this.$4 = d;
        this.$7 = e;
        this.$8 = g;
        f.then(function (a) {
          h.$5 = a;
        });
        this.$6.addSubscriptions(
          e.addListener('switchRepresentation', function (a, b) {
            h.$9(a, b);
          }),
        );
      }
      var b = a.prototype;
      b.cleanup = function () {
        this.$6.release(), this.$6.engage();
      };
      b.onError = function (a) {
        return this.$2.onError(a);
      };
      b.$9 = function (a, b) {
        if (a !== 'user') return;
        a = this.$5;
        if (a == null) return;
        var c = this.$7.getRepresentationIDAtTime(this.$3.getCurrentTime()),
          d;
        for (var e = 0; e < this.$4.length; e++)
          this.$4[e].getID() === c && (d = this.$4[e]);
        if (d && b && (this.$8 || d.getBandwidth() < b.getBandwidth())) {
          c = d.getSegmentByTime(this.$3.getCurrentTime());
          c &&
            a
              .clearRangeWithWait([
                {
                  fromTime: this.$3.getCurrentTime(),
                  toTime: this.$3.getDuration(),
                },
              ])
              ['catch'](function (a) {});
        }
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/manifests/IOzSegment',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      return (
        ((a == null ? void 0 : a.getSequenceNumber()) || 0) ===
        ((b == null ? void 0 : b.getSequenceNumber()) || 0)
      );
    }
    function b(a, b) {
      return (
        ((a == null ? void 0 : a.getSequenceNumber()) || 0) >=
        ((b == null ? void 0 : b.getSequenceNumber()) || 0)
      );
    }
    f.isSequenceNumberEqual = a;
    f.isSequenceNumberGreaterOrEqual = b;
  },
  66,
);
__d(
  'oz-player/networks/OzReadableStreamDataReader',
  [
    'oz-player/networks/OzTransformStream',
    'oz-player/utils/ozConcatUint8Arrays',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.$OzReadableStreamDataReader1 = [];
        c.$OzReadableStreamDataReader2 = b;
        return c;
      }
      var d = b.prototype;
      d.onDataWritten = function (a) {
        this.$OzReadableStreamDataReader1.push(a);
      };
      d.onClose = function () {
        var a = this.$OzReadableStreamDataReader1,
          b = c('oz-player/utils/ozConcatUint8Arrays')(a);
        b = b.buffer;
        a.length = 0;
        this.$OzReadableStreamDataReader2(b);
      };
      return b;
    })(c('oz-player/networks/OzTransformStream'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/OzStreamingTask',
  [
    'oz-player/loggings/OzLoggingUtils',
    'oz-player/shims/OzDeferred',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/shims/OzPerformance',
    'oz-player/utils/OzError',
    'oz-player/utils/OzNetworkRequestLoggingUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d) {
        (this.$3 = new (c('oz-player/shims/OzDeferred'))(
          c('oz-player/shims/OzMaybeNativePromise'),
        )),
          (this.$5 = !1),
          (this.$9 = null),
          (this.$1 = this.$2 =
            new (c('oz-player/shims/OzDeferred'))(
              c('oz-player/shims/OzMaybeNativePromise'),
            )),
          (this.$6 = c('oz-player/shims/OzPerformance').now()),
          (this.$7 = b),
          (this.$8 = a),
          (this.$9 = d);
      }
      var b = a.prototype;
      b.run = function () {
        var a = this.$3.getPromise(),
          b = this.$7;
        if (b) {
          var e = c('oz-player/shims/OzPerformance').now() - this.$6;
          d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
            a,
            b,
            'streaming_task',
            function () {},
            function (a) {
              a.setTimeToRequestSent(Math.floor(e));
            },
          );
        }
        this.$2.resolve();
        return a;
      };
      b.getPromise = function () {
        return this.$3.getPromise();
      };
      b.cancel = function () {
        this.$3.getPromise()['catch'](function () {}),
          this.$3.reject(
            new (c('oz-player/utils/OzError'))({
              type: 'OZ_STREAMING_TASK',
              description: 'task cancelled',
              extra: { code: 'OZ_ST-1' },
            }),
          ),
          (this.$5 = !0);
      };
      b.finish = function () {
        this.$3.resolve();
      };
      b.isCancelled = function () {
        return this.$5;
      };
      b.addStreamDeferred = function (a, b) {
        var d = new (c('oz-player/shims/OzDeferred'))(
            c('oz-player/shims/OzMaybeNativePromise'),
          ),
          e = new (c('oz-player/shims/OzDeferred'))(
            c('oz-player/shims/OzMaybeNativePromise'),
          );
        this.$10({
          createStreamResult: a,
          changeStatusDeferred: d,
          createStreamDeferred: e,
          loggerProviderWithStreamContext: b,
        });
        b = function () {
          return e.getPromise();
        };
        return {
          genStream: b,
          cancel: function () {
            if (a) {
              var b = a.pausableStream;
              return b.pauseStream();
            }
          },
          getStatusChangePromise: function () {
            return d.getPromise();
          },
        };
      };
      b.$10 = function (a) {
        var b = this,
          e = a.createStreamResult,
          f = a.changeStatusDeferred,
          g = a.createStreamDeferred,
          h = a.loggerProviderWithStreamContext,
          i = a.loggingPayloads;
        a = this.$1.getPromise();
        var j = c('oz-player/shims/OzPerformance').now(),
          k = (this.$1 = new (c('oz-player/shims/OzDeferred'))(
            c('oz-player/shims/OzMaybeNativePromise'),
          ));
        k.getPromise()['catch'](function () {});
        a.then(function () {
          if (e) {
            var a = e.pausableStream;
            e.loggingPayloads && (i = e.loggingPayloads);
            g.resolve(a.getStream());
            b.$4 = a;
            var f = c('oz-player/shims/OzPerformance').now(),
              k = b.$11(a.startStream());
            h &&
              d(
                'oz-player/loggings/OzLoggingUtils',
              ).monitorPromiseAndLogOperation(
                k,
                h,
                'fetch_stream',
                function () {},
                function (c) {
                  if (i) {
                    d(
                      'oz-player/utils/OzNetworkRequestLoggingUtils',
                    ).setFetchStreamLoggingAttributes(
                      c,
                      i.getRequestUrl(),
                      i.isPrefetch(),
                      i.segments,
                      f - j,
                      a.getBytesStreamed(),
                      i.getResponse(),
                    );
                    var e = b.$9;
                    e && e(c, i.getRequestUrl(), i.getResponse());
                  }
                },
              );
            return k;
          }
          return null;
        })
          .then(function (a) {
            (b.$4 = null), k.resolve(), f.resolve(a || 'cancelled');
          })
          ['catch'](function (a) {
            (b.$4 = null), b.$3.reject(a), k.reject(a), f.reject(a);
          });
      };
      b.$11 = function (a) {
        return a.then(function (a) {
          a = a.statusPromise;
          return a.then(function (a) {
            return a === 'stream_done' ? 'done' : 'error';
          });
        });
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/scheduling/OzRoundRobinPriorityTaskQueue',
  ['oz-player/shims/ozReportUnexpectedError'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        b === void 0 && (b = -1),
          (this.$3 = function () {}),
          (this.$4 = []),
          (this.$5 = new Map()),
          (this.$1 = a),
          (this.$2 = b);
      }
      var b = a.prototype;
      b.getHighestPriority = function () {
        return Math.max.apply(
          Math,
          this.$4.map(function (a) {
            return a.queue.length ? a.priority : -Infinity;
          }),
        );
      };
      b.enqueue = function (a, b) {
        var d = this;
        b = b;
        b = this.$6(b);
        var e = this.$5.get(a);
        if (e === b) return;
        this.$5.has(a) && this.remove(a);
        e = this.$7(b);
        var f = this.$4[e];
        (f && f.priority === b) ||
          ((f = { priority: b, queue: [] }), this.$4.splice(e, 0, f));
        this.$5.set(a, b);
        f.queue.push(a);
        a.getPromise()
          .then(
            function () {
              d.remove(a);
            },
            function () {
              d.remove(a);
            },
          )
          ['catch'](function (a) {
            c('oz-player/shims/ozReportUnexpectedError')(
              a,
              'OzRoundRobinPriorityTaskQueue remove after task run',
            );
          });
        this.$3(a, b >= this.$1 ? 'immediate' : 'normal');
      };
      b.updatePriority = function (a, b) {
        if (!this.$5.has(a)) return;
        this.enqueue(a, b);
      };
      b.dequeue = function () {
        for (var a = 0; a < this.$4.length; a++) {
          var b = this.$4[a];
          if (b.queue.length) {
            b = b.queue.shift();
            this.$5['delete'](b);
            return b;
          }
        }
        return null;
      };
      b.remove = function (a) {
        var b = this.$5.get(a);
        if (b !== void 0) {
          b = this.$7(b);
          b = this.$4[b];
          if (b && b.queue) {
            var c = b.queue.findIndex(function (b) {
              return b === a;
            });
            c > -1 && b.queue.splice(c, 1);
          }
          this.$5['delete'](a);
        }
      };
      b.setOnTaskUpdated = function (a) {
        this.$3 = a;
      };
      b.clearOnTaskUpdated = function () {
        this.setOnTaskUpdated(function () {});
      };
      b.getLength = function () {
        return this.$5.size;
      };
      b.test_isEmpty = function () {
        return (
          this.$5.size === 0 &&
          this.$4.every(function (a) {
            return a.queue.length === 0;
          })
        );
      };
      b.$7 = function (a) {
        a = a;
        a = this.$6(a);
        var b;
        for (b = 0; b < this.$4.length; b++)
          if (a >= this.$4[b].priority) return b;
        return b;
      };
      b.$6 = function (a) {
        a = a;
        this.$2 >= 0 && (a = Number.parseFloat(a.toFixed(this.$2)));
        return a;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/scheduling/OzSequentialTaskScheduler',
  [
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/shims/ozReportUnexpectedError',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        this.$3 = 0;
        this.$1 = a;
        a = b || {};
        b = a.taskTimeout;
        this.$4 = b || 0;
      }
      var b = a.prototype;
      b.start = function () {
        this.$1.setOnTaskUpdated(this.$5.bind(this));
        var a = this.$1.dequeue();
        a && this.$6(a, 'immediate');
      };
      b.destroy = function () {
        this.$2 && this.$2.cancel(), this.$1.clearOnTaskUpdated();
      };
      b.$5 = function (a, b) {
        b = this.$6(a, b);
        b && this.$1.remove(a);
      };
      b.$6 = function (a, b) {
        var d = this;
        if (this.$2 && b !== 'immediate') return !1;
        this.$2 && this.$2.cancel();
        b = a.run()['catch'](function (a) {});
        this.$4 > 0 &&
          (b = c('oz-player/shims/OzMaybeNativePromise').race([
            b,
            new (c('oz-player/shims/OzMaybeNativePromise'))(function (a, b) {
              c('oz-player/shims/ozSetTimeoutAcrossTransitions')(a, d.$4);
            }),
          ]));
        this.$3++;
        this.$2 = a;
        b = b.then(function () {
          d.$3--;
          d.$2 === a && (d.$2 = null);
          if (d.$3 === 0) {
            var b = d.$1.dequeue();
            b && d.$6(b, 'immediate');
          }
        });
        b['catch'](function (a) {
          c('oz-player/shims/ozReportUnexpectedError')(
            a,
            'OzSequentialTaskScheduler task complete',
          );
        });
        return !0;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/networks/OzStreamingTaskQueueProvider',
  [
    'oz-player/scheduling/OzRoundRobinPriorityTaskQueue',
    'oz-player/scheduling/OzSequentialTaskScheduler',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Map(),
      i = new Map(),
      j = 2,
      k = 2,
      l = 6e4;
    function a(a) {
      var b = h.get(a);
      if (!b) {
        b = new (c('oz-player/scheduling/OzRoundRobinPriorityTaskQueue'))(j, k);
        var d = new (c('oz-player/scheduling/OzSequentialTaskScheduler'))(b, {
          taskTimeout: l,
        });
        h.set(a, b);
        i.set(a, d);
        d.start();
      }
      return b;
    }
    g.OZ_QUEUE_MAX_PRIORITY = j;
    g.getQueue = a;
  },
  98,
);
__d(
  'oz-player/networks/OzStreamingTaskStateManager',
  [
    'Promise',
    'oz-player/networks/OzStreamingTask',
    'oz-player/networks/OzStreamingTaskQueueProvider',
    'oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter',
    'oz-player/shims/OzSubscriptionsHandler',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        var b = this;
        this.$3 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$4 = 0;
        this.$9 = !1;
        this.$10 = null;
        var e = a.mimeType,
          f = a.priorityCalculator,
          g = a.loggerProvider,
          h = a.setCustomFetchStreamLoggingAttributes;
        a = a.config;
        this.$5 = e;
        this.$1 = f;
        this.$6 = d('oz-player/networks/OzStreamingTaskQueueProvider').getQueue(
          this.$5,
        );
        this.$7 = g;
        this.$8 = a;
        this.$10 = h;
        this.$3.addSubscriptions(
          this.$1.addListener('state_changed', function (a, c) {
            b.$11(a, c), b.$2 && b.$6.updatePriority(b.$2, b.$4);
          }),
        );
      }
      var e = a.prototype;
      e.$12 = function () {
        var a = [];
        a.push(
          c('oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter')(
            this.$5,
          ),
        );
        return a;
      };
      e.startStreamDeferred = function (a) {
        var b = a.segments,
          c = a.networkManager,
          d = a.segmentsLoggerProvider,
          e = a.mediaStreamType,
          f = a.dataAppendedCallback;
        a = a.dataAppendedErrorCallback;
        var g = this.$13(d),
          h = this.$12();
        b.length > 0
          ? (c = c.createPausableStream(b, h, d, e, f, a))
          : (c = null);
        this.$9 = !0;
        b = g.addStreamDeferred(c, d);
        return {
          genStream: b.genStream,
          cancel: b.cancel,
          getStatusChangePromise: this.$14(b.getStatusChangePromise),
        };
      };
      e.$13 = function (a) {
        var b = this.$2;
        this.$11(this.$1.compute(), 'start_stream');
        !b || b.isCancelled()
          ? ((b = this.$2 =
              new (c('oz-player/networks/OzStreamingTask'))(
                this.$8,
                a,
                this.$10,
              )),
            this.$6.enqueue(b, this.$4))
          : this.$6.updatePriority(b, this.$4);
        return b;
      };
      e.$14 = function (a) {
        var c = this;
        return function () {
          return a()
            .then(function (a) {
              c.$15();
              return a;
            })
            ['catch'](function (a) {
              c.$15();
              return b('Promise').reject(a);
            });
        };
      };
      e.finishTaskIfNoOngoingStream = function () {
        this.$9 || this.$16();
      };
      e.destroy = function () {
        this.$3.release();
        var a = this.$2;
        this.$2 = null;
        a && this.$6.remove(a);
      };
      e.$15 = function () {
        (this.$9 = !1),
          this.$11(this.$1.compute(), 'end_stream'),
          this.$4 <
            d('oz-player/networks/OzStreamingTaskQueueProvider')
              .OZ_QUEUE_MAX_PRIORITY && this.$16();
      };
      e.$16 = function () {
        this.$2 && (this.$2.finish(), (this.$2 = null));
      };
      e.$11 = function (a, b) {
        if (a === this.$4) return;
        this.$4 = a;
        this.$7 &&
          this.$7
            .getOperationLogger('priority_changed')
            .setPriorityFloat(this.$4)
            .setInitiator(b)
            .log();
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/strategies/OzStreamLengthStrategy',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b, c, d, e) {
      b = b;
      e = e;
      var f = a.getNumber('segments_to_stream_under_playhead_threshold');
      a = a.getNumber('low_segment_stream_playhead_threshold');
      f > 0 && d.getCurrentTime() < a && (b = f);
      d = [];
      d.push(e);
      for (a = 1; a < b; a++) {
        f = c.getSegmentAfter(e);
        if (!f) break;
        e = f;
        d.push(e);
      }
      return d;
    }
    f.getStreamingSegments = a;
  },
  66,
);
__d(
  'oz-player/streams/OzMediaStreamLoopDriver',
  [
    'oz-player/shims/ozClearTimeout',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b) {
        var d = this;
        this.$2 = null;
        this.$3 = !1;
        this.$6 = function () {
          var a;
          d.$7();
          if (d.$3) return;
          (a = d.$5) == null ? void 0 : a.start();
          a = d.$1.execute();
          var b = d.$1.getLoopInterval();
          b &&
            (d.$2 = c('oz-player/shims/ozSetTimeoutAcrossTransitions')(
              function () {
                d.$6();
              },
              b,
            ));
          a &&
            a.then(d.$6)['catch'](function (b) {
              d.$7();
              var a = d.$1.handleError(b);
              if (a)
                d.$2 = c('oz-player/shims/ozSetTimeoutAcrossTransitions')(
                  d.$6,
                  a,
                );
              else {
                (a = d.$5) == null ? void 0 : a.setError(b);
                (a = d.$5) == null ? void 0 : a.log();
                d.$5 = null;
                d.$3 = !0;
              }
            });
        };
        this.$1 = a;
        this.$4 = b;
      }
      var b = a.prototype;
      b.start = function () {
        if (this.$3) throw new Error('restart is not implemented');
        this.$5 = this.$4.getOperationLogger('media_stream').start();
        this.$6();
      };
      b.stop = function () {
        var a;
        this.$7();
        this.$3 = !0;
        (a = this.$5) == null ? void 0 : a.log();
        this.$5 = null;
      };
      b.$7 = function () {
        this.$2 &&
          (c('oz-player/shims/ozClearTimeout')(this.$2), (this.$2 = null));
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/utils/OzRangeUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      b = b.filter(function (b) {
        return b.startTime <= a && b.endTime >= a;
      });
      return b != null && b.length > 0 ? b[0] : null;
    }
    f.getRangeForTime = a;
  },
  66,
);
__d(
  'oz-player/streams/OzSegmentLocator',
  ['oz-player/utils/OzNumericalRangeUtil', 'oz-player/utils/OzRangeUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      a = a.getEndingSegment();
      return a != null && a.getSequenceNumber() != null
        ? a.getSequenceNumber()
        : 0;
    }
    var h = function (a, b) {
        a = a.getCurrentTime();
        return b
          ? d('oz-player/utils/OzRangeUtils').getRangeForTime(
              a,
              b.getBufferedRanges(),
            )
          : null;
      },
      i = function (a, b, c) {
        b = h(a, b);
        c = c ? c.getTimeRange().endTime : 0;
        a = a.getCurrentTime() || 0;
        c ? (a = c) : b && (a = b.endTime);
        return a;
      };
    b = function (a, b, c, e, f, g, h, j) {
      h = a.getPredictedSegmentAfter(g);
      if (h && b.isPlaying()) return h;
      j = i(b, e, g);
      h = f.getTimeRanges();
      e = d('oz-player/utils/OzNumericalRangeUtil').findDiffCoveredByRanges(
        b.getCurrentTime(),
        j,
        h.map(function (a) {
          return { rangeStart: a.startTime, rangeEnd: a.endTime };
        }),
      );
      if (e > c) return null;
      g = a.getSegment(0);
      g && g.getTimeRange().startTime > j && (j = g.getTimeRange().startTime);
      return a.getSegmentByTime(j);
    };
    g.getEndingSequenceNumber = a;
    g.getTimeToQuery = i;
    g.getSegment = b;
  },
  98,
);
__d(
  'oz-player/streams/OzSegmentUtils',
  ['oz-player/manifests/OzSegmentOptions', 'oz-player/shims/OzURI'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      return a.reduce(function (a, b) {
        var c;
        return ((c = b == null ? void 0 : b.getSequenceNumber()) != null
          ? c
          : 0) >
          ((c = a == null ? void 0 : a.getSequenceNumber()) != null ? c : 0)
          ? b
          : a;
      });
    }
    function b(a, b) {
      var d = new (c('oz-player/manifests/OzSegmentOptions'))();
      return a.getPredictedSegmentAfter({
        getData: function () {
          return null;
        },
        getByteRange: function () {
          return null;
        },
        getSequenceNumber: function () {
          return b - 1;
        },
        getTimeRange: function () {
          return { endTime: 0, startTime: 0 };
        },
        getURI: function () {
          return new (c('oz-player/shims/OzURI'))('');
        },
        getOptions: function () {
          return d;
        },
      });
    }
    function d(a) {
      a.getOptions().setSegmentNumDecisionTime(Date.now());
      return a;
    }
    g.getMaxSegment = a;
    g.getSegmentForSequenceNumber = b;
    g.markSegmentCreateTime = d;
  },
  98,
);
__d(
  'oz-player/utils/OzTaggedTimeRanges',
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        (this.$1 = []),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = a
            ? a
            : function (a, b) {
                return a === b;
              });
      }
      var b = a.prototype;
      b.add = function (a, b, c) {
        if (b < a) return;
        if (b === a) return;
        if (this.$1.length === 0) {
          this.$1.push({ startTime: a, endTime: b, tag: c });
          return;
        }
        var d = 0,
          e = 0;
        for (var f = 0; f < this.$1.length; f++) {
          if (a === this.$1[f].startTime && b === this.$1[f].endTime) {
            d = f;
            e = f + 1;
            break;
          }
          a >= this.$1[f].startTime && (d = f + 1);
          b <= this.$1[f].endTime && (e = f);
          if (b < this.$1[f].startTime) break;
        }
        this.$1.splice(d, e - d, { startTime: a, endTime: b, tag: c });
        this.$5(d);
      };
      b.$5 = function (a) {
        a = a;
        var b = this.$1[a],
          c = null;
        a !== 0 && (c = this.$1[a - 1]);
        c !== null &&
          (this.$4(c.tag, b.tag)
            ? c.endTime >= b.startTime &&
              (this.$1.splice(a - 1, 2, {
                startTime: c.startTime,
                endTime: Math.max(b.endTime, c.endTime),
                tag: b.tag,
              }),
              a--)
            : (c.endTime > b.startTime && c.startTime === b.startTime
                ? (this.$1.splice(a - 1, 1), a--)
                : c.endTime > b.startTime &&
                  this.$1.splice(a - 1, 1, {
                    startTime: c.startTime,
                    endTime: b.startTime,
                    tag: c.tag,
                  }),
              c.endTime > b.endTime &&
                this.$1.splice(a + 1, 0, {
                  startTime: b.endTime,
                  endTime: c.endTime,
                  tag: c.tag,
                })));
        c = null;
        a !== this.$1.length - 1 && (c = this.$1[a + 1]);
        c &&
          (this.$4(c.tag, b.tag)
            ? c.startTime <= b.endTime &&
              this.$1.splice(a, 2, {
                startTime: b.startTime,
                endTime: Math.max(c.endTime, b.endTime),
                tag: b.tag,
              })
            : c.startTime <= b.endTime &&
              (c.endTime < b.endTime
                ? (this.$1.splice(a, 1, {
                    startTime: b.startTime,
                    endTime: c.startTime,
                    tag: b.tag,
                  }),
                  this.$1.push({
                    startTime: c.endTime,
                    endTime: b.endTime,
                    tag: b.tag,
                  }))
                : this.$1.splice(a + 1, 1, {
                    startTime: b.endTime,
                    endTime: c.endTime,
                    tag: c.tag,
                  })));
      };
      b.get = function (a) {
        var b = a >= this.$3 ? this.$2 : 0,
          c = null;
        for (b = b; b < this.$1.length; b++)
          if (this.$1[b].startTime <= a && a < this.$1[b].endTime) {
            c = b;
            break;
          }
        this.$2 = c === null ? 0 : c;
        this.$3 = a;
        return c === null ? null : this.$1[c].tag;
      };
      b.getLength = function () {
        return this.$1.length;
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
__d(
  'oz-player/streams/OzMediaStream',
  [
    'gkx',
    'oz-player/manifests/IOzSegment',
    'oz-player/networks/OzNetworkManager',
    'oz-player/networks/OzReadableStreamDataReader',
    'oz-player/networks/OzStreamingTaskStateManager',
    'oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter',
    'oz-player/shims/OzDeferred',
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/shims/OzNetworkDiagnostics',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/shims/ozClearTimeout',
    'oz-player/shims/ozReportUnexpectedError',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
    'oz-player/shims/ozvariant',
    'oz-player/strategies/OzStreamLengthStrategy',
    'oz-player/streams/OzMediaStreamLoopDriver',
    'oz-player/streams/OzSegmentLocator',
    'oz-player/streams/OzSegmentUtils',
    'oz-player/utils/OzBufferingUtils',
    'oz-player/utils/OzCustomErrorCode',
    'oz-player/utils/OzError',
    'oz-player/utils/OzErrorEmitter',
    'oz-player/utils/OzErrorUtils',
    'oz-player/utils/OzMimeUtil',
    'oz-player/utils/OzTaggedTimeRanges',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1e3,
      i = 0.2,
      j = { AUDIO: 1, CAPTION: 3, VIDEO: 0 };
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this) || this;
        e.$OzMediaStream2 = 0;
        e.$OzMediaStream3 = 0;
        e.$OzMediaStream4 = null;
        e.$OzMediaStream13 = null;
        e.$OzMediaStream15 = !1;
        e.$OzMediaStream16 = null;
        e.$OzMediaStream17 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        e.$OzMediaStream19 = [];
        e.$OzMediaStream22 = 0;
        e.$OzMediaStream29 = !0;
        e.$OzMediaStream31 = !1;
        e.$OzMediaStream32 = null;
        e.$OzMediaStream33 = new (c('oz-player/utils/OzErrorEmitter'))();
        e.$OzMediaStream35 = !0;
        e.$OzMediaStream38 = 0;
        e.$OzMediaStream39 = null;
        e.$OzMediaStream40 = null;
        e.$OzMediaStream46 = !1;
        var f = b.config,
          g = b.sourceBufferManagerPromise,
          h = b.networkManager,
          i = b.playbackState,
          j = b.endOfStreamWatcher,
          k = b.bufferTargetCalculator,
          l = b.priorityCalculator,
          m = b.streamSegmentsCountCalculator,
          n = b.abrManager,
          o = b.representation,
          p = b.loggerProvider,
          q = b.segmentLocator,
          r = b.setCustomFetchStreamLoggingAttributes,
          s = b.blockedRepresentationsManager,
          t = b.dynamicVideoLibrary,
          u = b.shouldAppendOncePerStream,
          v = b.mediaStreamType;
        b = b.workerClient;
        e.$OzMediaStream1 = f;
        e.$OzMediaStream5 = g;
        e.$OzMediaStream5.then(function (a) {
          (e.$OzMediaStream6 = a),
            e.$OzMediaStream16 && e.$OzMediaStream16.setSourceBuffer(a),
            e.$OzMediaStream27.setSourceBufferState(a.getSourceBufferState()),
            e.$OzMediaStream47();
        });
        e.$OzMediaStream12 = h;
        e.$OzMediaStream7 = i;
        e.$OzMediaStream14 = j;
        (f = e.$OzMediaStream14) == null
          ? void 0
          : f.registerMediaStream(babelHelpers.assertThisInitialized(e));
        e.$OzMediaStream26 = k;
        e.$OzMediaStream27 = l;
        e.$OzMediaStream28 = m;
        e.$OzMediaStream16 = n;
        e.$OzMediaStream18 = p.cloneContext();
        e.$OzMediaStream36 = q;
        e.$OzMediaStream25 = new (c('oz-player/utils/OzTaggedTimeRanges'))(
          function (a, b) {
            return a.id === b.id;
          },
        );
        e.$OzMediaStream39 = r;
        e.$OzMediaStream40 = s;
        e.$OzMediaStream42 = t;
        e.$OzMediaStream43 = u;
        e.$OzMediaStream44 = v;
        e.$OzMediaStream45 = b;
        e.$OzMediaStream17.addSubscriptions(
          e.$OzMediaStream7.addEventListener('seeking', function () {
            var a = i.getCurrentTime(),
              b = null;
            e.$OzMediaStream1.getBool(
              'ignore_reset_after_seek_if_bufferahead',
            ) &&
            e.$OzMediaStream8.canPredict() &&
            (e.$OzMediaStream6
              ? d(
                  'oz-player/utils/OzBufferingUtils',
                ).getBufferAheadFromCurrentTime(
                  a,
                  e.$OzMediaStream6.getSourceBufferState().getBufferedRanges(),
                ) > 0
              : !1)
              ? (b = 'no_reset_anchor')
              : ((b = 'reset_anchor'),
                (e.$OzMediaStream41 = Date.now()),
                e.$OzMediaStream9 != null &&
                  (e.$OzMediaStream48(),
                  (e.$OzMediaStream31 = !1),
                  e.$OzMediaStream24 && e.$OzMediaStream24.resolve(),
                  e.$OzMediaStream1.getBool(
                    'media_stream_tracker_cancel_on_seek',
                  ) &&
                    e.$OzMediaStream13 &&
                    e.$OzMediaStream13.cancel()));
            e.$OzMediaStream18
              .cloneContext()
              .getOperationLogger('media_element_event')
              .setInitiator('seeking')
              .setLength(a * 1e3)
              .setReason(b)
              .setUserInfo({
                streamAnchorSegmentNumber: String(
                  (a = e.$OzMediaStream9) == null
                    ? void 0
                    : a.getSequenceNumber(),
                ),
              })
              .log();
          }),
        );
        e.$OzMediaStream40 != null &&
          e.$OzMediaStream17.addSubscriptions(
            e.$OzMediaStream40.onRepresentationBlocked(function (a) {
              return e.$OzMediaStream49(a);
            }),
          );
        e.$OzMediaStream21 = d('oz-player/utils/OzMimeUtil').getMimeType(
          o.getMimeCodecs(),
        );
        e.$OzMediaStream30 = new (c(
          'oz-player/networks/OzStreamingTaskStateManager',
        ))({
          mimeType: e.$OzMediaStream21,
          priorityCalculator: e.$OzMediaStream27,
          loggerProvider: e.$OzMediaStream18,
          setCustomFetchStreamLoggingAttributes: e.$OzMediaStream39,
          config: e.$OzMediaStream1,
        });
        e.$OzMediaStream23 = new (c(
          'oz-player/streams/OzMediaStreamLoopDriver',
        ))(babelHelpers.assertThisInitialized(e), e.$OzMediaStream18);
        e.$OzMediaStream50(o);
        return e;
      }
      var e = b.prototype;
      e.start = function () {
        this.$OzMediaStream23.start();
      };
      e.getCurrentRepresentation = function () {
        return this.$OzMediaStream8;
      };
      e.switchRepresentation = function (a) {
        this.$OzMediaStream50(a, 'user');
      };
      e.onError = function (a) {
        return this.$OzMediaStream33.onError(a);
      };
      e.updateRunTimeConfigs = function (a) {
        var b = a.streamDataHandler;
        a = a.resetStreamAnchor;
        b !== void 0 && (this.$OzMediaStream34 = b);
        a === !0 &&
          this.$OzMediaStream8.canApproximateId() &&
          (this.$OzMediaStream48(), (this.$OzMediaStream10 = null));
      };
      e.$OzMediaStream50 = function (a, b) {
        var d,
          e = this;
        b === void 0 && (b = 'internal');
        b === 'user' && this.$OzMediaStream48();
        (d = this.$OzMediaStream20) == null ? void 0 : d.remove();
        this.$OzMediaStream20 = null;
        d = this.$OzMediaStream18
          .cloneContext()
          .setType(this.$OzMediaStream21 + ';init');
        var f = d.cloneContext().setRepresentationID(a.getID()),
          g = a.getInitSegment(),
          h = g.getData(),
          i = d
            .getOperationLogger('stream_switch')
            .setPreviousRepresentationID(
              this.$OzMediaStream8 ? this.$OzMediaStream8.getID() : null,
            )
            .setInitiator(b)
            .setRepresentationID(a.getID())
            .setReason(
              b === 'internal'
                ? this.$OzMediaStream16 &&
                    this.$OzMediaStream16.getLastEvaluationReason()
                : b,
            )
            .start();
        this.$OzMediaStream8 = a;
        d = function () {
          var a;
          i.log();
          e.$OzMediaStream26.handleEvent('append_succeeded');
          e.emit('initAppended');
          (a = e.$OzMediaStream14) == null
            ? void 0
            : a.notifyRepresentationSwitched(e);
        };
        var j = function (b) {
          var c;
          i.setError(b).log();
          e.$OzMediaStream51(b);
          (c = e.$OzMediaStream40) == null
            ? void 0
            : c.handleError(a.getID(), b);
          if (a.getID() !== e.$OzMediaStream8.getID()) {
            (c = e.$OzMediaStream24) == null ? void 0 : c.resolve();
          }
        };
        if (h == null) {
          g = this.$OzMediaStream12.request(
            [g],
            [
              c(
                'oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter',
              )(this.$OzMediaStream21),
            ],
            f,
            null,
            this.$OzMediaStream44,
            d,
            j,
          );
          h = g.getStream();
        }
        this.emit('switchRepresentation', b, a);
        this.$OzMediaStream52({
          data: h,
          dataAppendedCallback: d,
          dataAppendedErrorCallback: j,
          loggerProvider: f.cloneContext(),
          appendTarget: 0,
        });
      };
      e.getLoopInterval = function () {
        return this.$OzMediaStream22;
      };
      e.execute = function () {
        var a = this.$OzMediaStream53();
        if (a) {
          var b = (this.$OzMediaStream24 = new (c(
            'oz-player/shims/OzDeferred',
          ))(c('oz-player/shims/OzMaybeNativePromise')));
          a.then(function () {
            return b.resolve();
          })['catch'](function (a) {
            return b.reject(a);
          });
          return b.getPromise();
        }
        return null;
      };
      e.$OzMediaStream54 = function (a) {
        if (
          this.$OzMediaStream16 &&
          this.$OzMediaStream29 &&
          this.$OzMediaStream15
        ) {
          a = this.$OzMediaStream16.getBestRepresentation(a);
          if (this.$OzMediaStream8 !== a) return a;
        }
        return null;
      };
      e.$OzMediaStream55 = function (a) {
        var b = this.$OzMediaStream6
            ? this.$OzMediaStream6.getSourceBufferState()
            : null,
          c = this.$OzMediaStream26.computeBufferTarget();
        if (c <= 0) return null;
        var e = null;
        a && (e = this.$OzMediaStream8.getCustomFieldFirstSegment());
        if (
          !e &&
          this.$OzMediaStream8.canPredict() &&
          this.$OzMediaStream36 != null
        ) {
          a = this.$OzMediaStream35 && this.$OzMediaStream7.isPlaying();
          return this.$OzMediaStream36.getSegment(
            this.$OzMediaStream8,
            this.$OzMediaStream7,
            c,
            b,
            this.$OzMediaStream9,
            this.$OzMediaStream10,
            this.$OzMediaStream1,
            a,
            this.$OzMediaStream21,
          );
        } else {
          e ||
            (e = d('oz-player/streams/OzSegmentLocator').getSegment(
              this.$OzMediaStream8,
              this.$OzMediaStream7,
              c,
              b,
              this.$OzMediaStream8,
              this.$OzMediaStream9,
              this.$OzMediaStream1,
              this.$OzMediaStream32,
            ));
          if (this.$OzMediaStream8.canPredict()) {
            a =
              (this.$OzMediaStream10 &&
                this.$OzMediaStream10.getSequenceNumber()) ||
              0;
            c = (e && e.getSequenceNumber()) || 0;
            if (e && this.$OzMediaStream10 && a >= c) {
              c = d(
                'oz-player/streams/OzSegmentLocator',
              ).getEndingSequenceNumber(this.$OzMediaStream8);
              return (c || 0) >= a ? this.$OzMediaStream10 : null;
            }
          }
        }
        if (!e && !this.$OzMediaStream56()) {
          c = this.$OzMediaStream8.getEndingSegment();
          if (c && this.$OzMediaStream8.isEndingSegment(c)) {
            a = c.getTimeRange().endTime;
            b = d('oz-player/streams/OzSegmentLocator').getTimeToQuery(
              this.$OzMediaStream7,
              b,
              this.$OzMediaStream9,
            );
            b >= a && !this.$OzMediaStream56() && (e = c);
          }
        }
        return e;
      };
      e.$OzMediaStream57 = function () {
        return !this.$OzMediaStream15;
      };
      e.$OzMediaStream58 = function (a, b) {
        var e;
        e = (e = b.fetchSingleSegment) != null ? e : !1;
        b = (b = b.preventRepresentationSwitch) != null ? b : !1;
        var f = [];
        if (e) f = [a];
        else {
          e = this.$OzMediaStream28.computeMin(
            this.$OzMediaStream7,
            a,
            this.$OzMediaStream8,
          );
          f = d(
            'oz-player/strategies/OzStreamLengthStrategy',
          ).getStreamingSegments(
            this.$OzMediaStream1,
            e,
            this.$OzMediaStream8,
            this.$OzMediaStream7,
            a,
          );
          f = c(
            'oz-player/networks/OzNetworkManager',
          ).getStreamableSegmentsRange(f);
          if (!b) {
            e = this.$OzMediaStream54(f);
            if (e) {
              this.$OzMediaStream50(e);
              a = this.$OzMediaStream55(!1);
              if (!a) return [];
              else
                return this.$OzMediaStream58(a, {
                  fetchSingleSegment: !1,
                  preventRepresentationSwitch: !0,
                });
            }
          }
        }
        return f;
      };
      e.$OzMediaStream59 = function () {
        var a = this,
          b = function (b) {
            b == null ? void 0 : b.remove(),
              a.$OzMediaStream20 === b && (a.$OzMediaStream20 = null);
          };
        b(this.$OzMediaStream20);
        var d = null;
        return new (c('oz-player/shims/OzMaybeNativePromise'))(function (c, e) {
          (d = a.getCurrentRepresentation().addUpdateListener(function () {
            b(d), c();
          })),
            (a.$OzMediaStream20 = d);
        })['catch'](function (a) {
          b(d);
          throw a;
        });
      };
      e.$OzMediaStream60 = function (a, b) {
        b = this.$OzMediaStream55(a);
        if (b == null) return [];
        else return this.$OzMediaStream58(b, { fetchSingleSegment: a });
      };
      e.$OzMediaStream53 = function () {
        var a = this,
          b = this.$OzMediaStream6
            ? this.$OzMediaStream6.getSourceBufferState()
            : null;
        if (
          this.$OzMediaStream8.canPredict() &&
          this.$OzMediaStream10 &&
          this.$OzMediaStream8.isEndingSegment(this.$OzMediaStream10)
        ) {
          this.endStream();
          this.$OzMediaStream18
            .cloneContext()
            .getOperationLogger('media_loop_end')
            .setInitiator('end1')
            .setRepresentationID(this.$OzMediaStream8.getID())
            .log();
          return;
        }
        if (
          this.$OzMediaStream8.canPredict() &&
          this.$OzMediaStream9 &&
          this.$OzMediaStream8.isEndingSegment(this.$OzMediaStream9)
        ) {
          this.endStream();
          this.$OzMediaStream18
            .cloneContext()
            .getOperationLogger('media_loop_end')
            .setInitiator('end2')
            .setRepresentationID(this.$OzMediaStream8.getID())
            .log();
          return;
        }
        var e = this.$OzMediaStream57(),
          f = this.$OzMediaStream55(e);
        if (
          this.$OzMediaStream8.canPredict() &&
          this.$OzMediaStream11 != null &&
          d('oz-player/manifests/IOzSegment').isSequenceNumberGreaterOrEqual(
            f,
            this.$OzMediaStream11,
          )
        ) {
          this.$OzMediaStream18
            .cloneContext()
            .getOperationLogger('media_loop_end')
            .setInitiator('segment_end')
            .setRepresentationID(this.$OzMediaStream8.getID())
            .log();
          return;
        }
        d('oz-player/manifests/IOzSegment').isSequenceNumberEqual(
          f,
          this.$OzMediaStream37,
        )
          ? this.$OzMediaStream38++
          : (this.$OzMediaStream38 = 0);
        this.$OzMediaStream37 = f;
        this.$OzMediaStream7.isPlaying() &&
          this.$OzMediaStream38 > 0 &&
          this.$OzMediaStream18
            .cloneContext()
            .getOperationLogger('get_segment_to_stream_same_segment')
            .setReason(
              (f == null ? void 0 : f.getSequenceNumber()) != null
                ? String(f == null ? void 0 : f.getSequenceNumber())
                : null,
            )
            .setLength(this.$OzMediaStream38)
            .setRepresentationID(this.$OzMediaStream8.getID())
            .setSegmentStartTime(
              f == null ? void 0 : f.getTimeRange().startTime,
            )
            .setSegmentEndTime(f == null ? void 0 : f.getTimeRange().endTime)
            .log();
        if (this.$OzMediaStream31) {
          var g;
          this.$OzMediaStream22 = h;
          this.$OzMediaStream18
            .cloneContext()
            .getOperationLogger('media_loop_end')
            .setInitiator('ongoing_stream')
            .setReason(
              ((g = this.$OzMediaStream9) == null
                ? void 0
                : g.getSequenceNumber()) != null
                ? String(
                    (g = this.$OzMediaStream9) == null
                      ? void 0
                      : g.getSequenceNumber(),
                  )
                : null,
            )
            .setRepresentationID(this.$OzMediaStream8.getID())
            .log();
          return null;
        }
        if (!f || this.$OzMediaStream31) {
          if (
            this.$OzMediaStream8.canPredict() &&
            this.$OzMediaStream1.getBool('ms_promise_for_null')
          ) {
            var i = this.$OzMediaStream1.getNumber('ms_promise_for_null_ms');
            return new (c('oz-player/shims/OzMaybeNativePromise'))(function (
              b,
              d,
            ) {
              var e = c('oz-player/shims/ozSetTimeoutAcrossTransitions')(
                function () {
                  c('oz-player/shims/ozClearTimeout')(e), b();
                },
                i ? i : (a.$OzMediaStream8.getMaxGopSec() || 1) * 1e3,
              );
            });
          }
          this.$OzMediaStream22 = h;
          this.$OzMediaStream31 ||
            this.$OzMediaStream30.finishTaskIfNoOngoingStream();
          return this.$OzMediaStream59();
        }
        this.$OzMediaStream22 = 0;
        var j = this.$OzMediaStream58(f, { fetchSingleSegment: e });
        if (j.length === 0) {
          this.$OzMediaStream18
            .cloneContext()
            .getOperationLogger('media_loop_end')
            .setInitiator('no_stream_segments')
            .setReason(
              ((g = this.$OzMediaStream9) == null
                ? void 0
                : g.getSequenceNumber()) != null
                ? String(
                    (f = this.$OzMediaStream9) == null
                      ? void 0
                      : f.getSequenceNumber(),
                  )
                : null,
            )
            .setRepresentationID(this.$OzMediaStream8.getID())
            .log();
          return this.$OzMediaStream59();
        }
        this.$OzMediaStream15 = !0;
        var k = j[j.length - 1] || null,
          l = this.$OzMediaStream8,
          m = function () {
            return l.isEndingSegment(k);
          };
        j.length !== 0 || c('oz-player/shims/ozvariant')(0, 23148);
        g = j[0];
        f = g.getTimeRange().startTime;
        var n = k.getTimeRange().endTime,
          o = {
            startTime: f,
            endTime: n,
            tag: { id: this.$OzMediaStream8.getID() },
          },
          p = function (b) {
            v.setAppendedBufferMs(Math.round(b.appendedSec * 1e3)),
              v.log(),
              a.$OzMediaStream26.handleEvent('append_succeeded'),
              j.forEach(function (b) {
                a.emit('SegmentAppended', a.$OzMediaStream61(b, o));
              }),
              m() && a.endStream(),
              a.$OzMediaStream62(o, b);
          },
          q = function (b) {
            v.setError(b).log();
            var c = t || s;
            c && c.cancel();
            a.$OzMediaStream51(b);
          },
          r = this.$OzMediaStream18.cloneContext();
        r.setRepresentationID(this.$OzMediaStream8.getID());
        r.setSegmentStartTime(f).setSegmentEndTime(n);
        var s, t;
        !e
          ? ((t = this.$OzMediaStream30.startStreamDeferred({
              segments: this.$OzMediaStream60(e, j),
              networkManager: this.$OzMediaStream12,
              sourceBufferState: b,
              playbackState: this.$OzMediaStream7,
              segmentsLoggerProvider: r.cloneContext(),
              mediaStreamType: this.$OzMediaStream44,
              dataAppendedCallback: p,
              dataAppendedErrorCallback: q,
            })),
            this.$OzMediaStream1.getBool('media_stream_tracker_cancel_on_seek')
              ? (this.$OzMediaStream13 = t)
              : (this.$OzMediaStream13 = s))
          : ((s = this.$OzMediaStream12.request(
              j,
              [
                c(
                  'oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter',
                )(this.$OzMediaStream21),
              ],
              r.cloneContext(),
              null,
              this.$OzMediaStream44,
              p,
              q,
            )),
            (this.$OzMediaStream13 = s));
        this.$OzMediaStream31 = !0;
        var u = this.$OzMediaStream63(g, k, j.length),
          v = r.getOperationLogger('queued_append');
        v.start().setReason(
          this.$OzMediaStream16 &&
            this.$OzMediaStream16.getLastEvaluationReason(),
        );
        var w = function (b) {
            a.$OzMediaStream52({
              data: b,
              dataAppendedCallback: p,
              dataAppendedErrorCallback: q,
              loggerProvider: r.cloneContext(),
              appendTarget: u,
            });
          },
          x;
        !!t || !!s || c('oz-player/shims/ozvariant')(0, 23147);
        t
          ? (t
              .genStream()
              .then(function (a) {
                return w(a);
              })
              ['catch'](function (b) {
                return a.$OzMediaStream33.emitError(b);
              }),
            (x = t.getStatusChangePromise()))
          : s && (w(s.getStream()), (x = s.getStatusChangePromise()));
        !x && c('oz-player/shims/ozvariant')(0, 51928);
        f = x
          .then(function (b) {
            a.$OzMediaStream64(b, k);
            return a.$OzMediaStream65();
          })
          .then(function () {
            a.$OzMediaStream2 = 0;
          });
        return f['catch'](function (b) {
          var c,
            d = a.$OzMediaStream9;
          a.$OzMediaStream66(k);
          (c = a.$OzMediaStream40) == null
            ? void 0
            : c.handleError(l.getID(), b);
          return a.$OzMediaStream67(b, k, d);
        });
      };
      e.handleError = function (a) {
        var b = this.$OzMediaStream18.getOperationLogger(
          'media_stream_loop_error',
        );
        b.setError(a).setResult('failed').log();
        return this.$OzMediaStream1.getNumber(
          'loop_body_handle_error_interval_ms',
        );
      };
      e.$OzMediaStream67 = function (a, b, e) {
        var f = this;
        this.$OzMediaStream31 = !1;
        var g = new (c('oz-player/shims/OzDeferred'))(
            c('oz-player/shims/OzMaybeNativePromise'),
          ),
          h = d('oz-player/utils/OzErrorUtils').getNormalizedErrorAndCode(a),
          i = h[0],
          j = h[1],
          k = d('oz-player/utils/OzErrorUtils').getOzErrorWithMIMEType(
            i,
            this.$OzMediaStream21,
          ),
          l = function (b) {
            f.$OzMediaStream2++;
            f.$OzMediaStream18
              .getOperationLogger('media_stream')
              .setInitiator(
                'fetch_stream_' + (b.behavior != null ? b.behavior : 'default'),
              )
              .setLength(b.timeoutMs)
              .setReason('' + k.getDescription())
              .setError(k)
              .setCode(j.length > 0 ? Number.parseInt(j, 10) : null)
              .setType(f.$OzMediaStream21)
              .log();
            if (b.behavior === 'retry_failed_request') f.$OzMediaStream9 = e;
            else if (
              b.behavior === 'recover_failed_request' &&
              a instanceof c('oz-player/utils/OzError')
            ) {
              var h;
              h = (h = a.getExtra()) == null ? void 0 : h.headers;
              h = c(
                'oz-player/shims/OzNetworkDiagnostics',
              ).getNextValidSegmentId(h);
              h != null &&
                (f.$OzMediaStream9 = d(
                  'oz-player/streams/OzSegmentUtils',
                ).getSegmentForSequenceNumber(f.$OzMediaStream8, h - 1));
            }
            c('oz-player/shims/ozSetTimeoutAcrossTransitions')(function () {
              f.emit('streamErrorRetry', k);
              return g.resolve();
            }, b.timeoutMs);
          };
        this.$OzMediaStream4 !== j
          ? ((this.$OzMediaStream4 = j), (this.$OzMediaStream3 = 1))
          : this.$OzMediaStream3++;
        h = !0;
        var m = function () {
          h = !1;
        };
        i = {
          consecutiveFailuresForErrorCode: this.$OzMediaStream3,
          endStream: function () {
            m(),
              (f.$OzMediaStream10 = b),
              (f.$OzMediaStream11 = b),
              f.endStream(),
              g.resolve();
          },
          error: k,
          isInitialRequest: !1,
          retry: function (a) {
            var b;
            m();
            l({
              timeoutMs: (b = a == null ? void 0 : a.waitMs) != null ? b : 0,
              behavior: a == null ? void 0 : a.behavior,
            });
          },
          retryAttemptCount: this.$OzMediaStream2,
        };
        this.emit('streamError', i);
        h &&
          (this.$OzMediaStream33.emitError(k),
          (this.$OzMediaStream2 = 0),
          g.resolve());
        return g.getPromise();
      };
      e.$OzMediaStream66 = function (a) {
        this.$OzMediaStream48();
        this.$OzMediaStream10 = a;
        this.$OzMediaStream30.finishTaskIfNoOngoingStream();
        a = this.$OzMediaStream6;
        a && a.cancelOperationAndCleanQueue(this.$OzMediaStream18);
      };
      e.$OzMediaStream64 = function (a, b) {
        if (a === 'done') {
          a =
            (a = this.$OzMediaStream42) == null
              ? void 0
              : a.getLast200RequestedUrlDecisionTimeByMimeType(
                  this.$OzMediaStream21,
                );
          if (
            this.$OzMediaStream1.getBool(
              'media_stream_buffer_gaps_ignore_before_seek',
            ) &&
            this.$OzMediaStream8.canPredict() &&
            this.$OzMediaStream35 == !1 &&
            this.$OzMediaStream9 == null &&
            this.$OzMediaStream41 != null &&
            a != null &&
            this.$OzMediaStream41 >= a
          )
            return;
          this.$OzMediaStream9 = b;
        }
      };
      e.$OzMediaStream65 = function () {
        this.$OzMediaStream31 = !1;
      };
      e.$OzMediaStream52 = function (a) {
        this.$OzMediaStream19.push(a),
          this.$OzMediaStream6 && this.$OzMediaStream47();
      };
      e.$OzMediaStream62 = function (a, b) {
        if (a == null) return;
        this.$OzMediaStream8.canPredict() &&
        b.startTime_UNSAFE &&
        b.endTime_UNSAFE
          ? this.$OzMediaStream25.add(
              b.startTime_UNSAFE,
              b.endTime_UNSAFE,
              a.tag,
            )
          : this.$OzMediaStream25.add(a.startTime, a.endTime, a.tag);
      };
      e.$OzMediaStream47 = function () {
        var a = this;
        if (
          this.$OzMediaStream46 &&
          this.$OzMediaStream1.getBool('do_not_flush_data_queue_after_destroy')
        )
          return;
        this.$OzMediaStream19.forEach(function (b) {
          var d = b.data,
            e = b.dataAppendedCallback,
            f = b.dataAppendedErrorCallback,
            g = b.loggerProvider;
          b = b.appendTarget;
          d =
            d instanceof Uint8Array || a.$OzMediaStream34 == null
              ? d
              : d.pipeThrough(
                  new (c('oz-player/networks/OzReadableStreamDataReader'))(
                    a.$OzMediaStream34.bind(a, a.$OzMediaStream8),
                  ),
                );
          a.$OzMediaStream6 &&
            a.$OzMediaStream6
              .queueData(d, g, b)
              .then(function (a) {
                if (!a) return;
                e(a);
              })
              ['catch'](function (a) {
                f(a);
              });
        });
        this.$OzMediaStream19 = [];
      };
      e.$OzMediaStream68 = function () {
        var a = this.$OzMediaStream6;
        if (!a) return c('oz-player/shims/OzMaybeNativePromise').resolve();
        var b = this.$OzMediaStream7.getCurrentTime(),
          d = [{ fromTime: 0, toTime: b }],
          e = this.$OzMediaStream1.getNumber(
            'clear_buffer_around_playhead_boundary_ms',
          );
        if (e > 0) {
          e = e / 1e3;
          var f = a.getSourceBufferState();
          f = f.getBufferedRanges();
          f = f.length >= 1 ? f[f.length - 1].endTime : b;
          d = [{ fromTime: 0, toTime: Math.max(0, b - e) }];
          b + e < f && d.push({ fromTime: b + e, toTime: f });
        }
        return a.clearRangeWithWait(d);
      };
      e.$OzMediaStream69 = function (a) {
        return a instanceof c('oz-player/utils/OzError') &&
          a.getType() === 'OZ_ALLOCATION_FAILURE' &&
          c('gkx')('3459')
          ? !0
          : !1;
      };
      e.$OzMediaStream51 = function (a) {
        var b = this;
        if (
          a instanceof c('oz-player/utils/OzError') &&
          a.getType() === 'OZ_SOURCE_BUFFER_QUOTA_EXCEEDED'
        ) {
          this.emit(
            'streamErrorRetry',
            d('oz-player/utils/OzErrorUtils').getOzErrorWithMIMEType(
              a,
              this.$OzMediaStream21,
            ),
          );
          this.$OzMediaStream26.handleEvent('append_quota_exceeded');
          var e = this.$OzMediaStream68();
          e.then(function () {
            b.restartLoopBody();
          })['catch'](function (a) {
            a = new (c('oz-player/utils/OzError'))({
              type: 'OZ_STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR',
              description: a.name + ': ' + a.message,
              extra: {
                originalError: a,
                code: c('oz-player/utils/OzCustomErrorCode')
                  .STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR,
              },
            });
            b.$OzMediaStream33.emitError(a);
          });
        } else
          c('oz-player/shims/ozReportUnexpectedError')(
            a,
            'OzMediaStream append error callback',
            'warn',
          ),
            this.$OzMediaStream69(a) && this.$OzMediaStream33.emitError(a);
      };
      e.$OzMediaStream63 = function (a, b, c) {
        var d = 0;
        if (this.$OzMediaStream43) return Infinity;
        var e = this.$OzMediaStream1.getNumber('appends_per_segment');
        if (e > 0) {
          a = a.getByteRange();
          b = b.getByteRange();
          a &&
            b &&
            b.endByte != null &&
            (d = Math.ceil((b.endByte - a.startByte + 1) / (c * e)));
        }
        d === 0 &&
          (d = this.$OzMediaStream1.getNumber(
            'append_byte_target_without_range',
          ));
        return d;
      };
      e.getIsAdaptationEnabled = function () {
        return this.$OzMediaStream29;
      };
      e.enableAdaptation = function () {
        this.$OzMediaStream29 = !0;
      };
      e.disableAdaptation = function () {
        this.$OzMediaStream29 = !1;
      };
      e.cleanup = function () {
        (this.$OzMediaStream46 = !0),
          this.$OzMediaStream23.stop(),
          this.$OzMediaStream5.then(function (a) {
            a.destroy();
          }),
          this.$OzMediaStream30.destroy(),
          this.$OzMediaStream17.release(),
          this.$OzMediaStream17.engage(),
          this.removeAllListeners(),
          this.$OzMediaStream20 &&
            (this.$OzMediaStream20.remove(), (this.$OzMediaStream20 = null));
      };
      e.getRepresentationIDAtTime = function (a) {
        var b = this.$OzMediaStream25.get(a);
        if (!b) {
          var c = this.$OzMediaStream8.getTimeRanges();
          c = c[c.length - 1];
          var d = 0.001;
          c &&
            a >= c.endTime &&
            a <= this.$OzMediaStream7.getDuration() + d &&
            (b = this.$OzMediaStream25.get(c.endTime - d));
        }
        return b ? b.id : null;
      };
      e.endStream = function () {
        var a;
        (a = this.$OzMediaStream14) == null
          ? void 0
          : a.notifyMediaStreamEnded(this);
        this.$OzMediaStream70();
      };
      e.endStreamIfBufferedToEndTime = function () {
        var a = this.$OzMediaStream8.getTimeRanges();
        if (a.length > 0) {
          a = a[a.length - 1].endTime;
          if (this.$OzMediaStream6) {
            var b = this.$OzMediaStream6
              .getSourceBufferState()
              .getBufferedRanges();
            b.length > 0 &&
              Math.abs(b[b.length - 1].endTime - a) < i &&
              this.endStream();
          }
        }
      };
      e.$OzMediaStream61 = function (a, b) {
        return {
          type:
            this.$OzMediaStream21.indexOf('audio') === 0
              ? j.AUDIO
              : this.$OzMediaStream21.indexOf('video') === 0
              ? j.VIDEO
              : j.CAPTION,
          segment: a,
          sourceBuffer:
            (a =
              (a = this.$OzMediaStream6) == null
                ? void 0
                : (a = a.getDebug()) == null
                ? void 0
                : a.SourceBuffer) != null
              ? a
              : null,
          timeRange: b,
        };
      };
      e.$OzMediaStream48 = function () {
        this.$OzMediaStream9 = null;
      };
      e.restartLoopBody = function () {
        this.$OzMediaStream45 &&
          this.$OzMediaStream45.resetStream(this.$OzMediaStream44),
          this.$OzMediaStream48(),
          (this.$OzMediaStream31 = !1),
          this.$OzMediaStream13 && this.$OzMediaStream13.cancel(),
          this.$OzMediaStream22 !== 0 &&
            this.$OzMediaStream24 &&
            this.$OzMediaStream24.resolve();
      };
      e.$OzMediaStream70 = function () {
        if (this.$OzMediaStream6) {
          var a = this.$OzMediaStream6
            .getSourceBufferState()
            .getBufferedRanges();
          a.length > 0 && (this.$OzMediaStream32 = a[a.length - 1].endTime);
        }
      };
      e.$OzMediaStream56 = function () {
        return this.$OzMediaStream32 !== null;
      };
      e.$OzMediaStream49 = function (a) {
        this.$OzMediaStream8.getID() === a &&
          this.$OzMediaStream16 != null &&
          this.$OzMediaStream50(this.$OzMediaStream16.getBestRepresentation());
      };
      e.setEnableLiveheadCatchup = function (a) {
        this.$OzMediaStream35 = a;
      };
      e.clearSourceBufferRange = function (a, b) {
        var d = this.$OzMediaStream6;
        return d
          ? d.clearRangeWithWait([{ fromTime: a, toTime: b }])
          : c('oz-player/shims/OzMaybeNativePromise').resolve();
      };
      e.getDebug = function () {
        return {
          SourceBufferManager: this.$OzMediaStream6,
          MediaStreamAbrManager: this.$OzMediaStream16,
        };
      };
      return b;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/streams/OzPredictedSegmentLocator',
  [
    'oz-player/streams/OzSegmentLocator',
    'oz-player/streams/OzSegmentUtils',
    'oz-player/utils/OzSourceBufferUtil',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      var c = 0;
      for (var d in a) {
        var e;
        if (d === b) continue;
        c = Math.max(c, (e = a[d].lastSkippedToSegmentNumber) != null ? e : 0);
      }
      return c;
    }
    function i(a, b) {
      var c = null;
      for (var d in a) {
        if (d === b) continue;
        a[d].inBufferAheadTimeSince != null &&
          (c =
            c != null
              ? Math.min(c, a[d].inBufferAheadTimeSince)
              : a[d].inBufferAheadTimeSince);
      }
      return c;
    }
    a = (function () {
      function a(a) {
        this.$5 = {};
        var b = a.videoNode,
          c = a.liveLatencyManager,
          d = a.loggerProvider;
        a = a.dynamicVideoLibrary;
        this.$1 = b;
        this.$2 = c;
        this.$3 = d;
        this.$4 = a;
      }
      var b = a.prototype;
      b.getSegment = function (a, b, c, d, e, f, g, h, i) {
        var j;
        this.$5[i] == null &&
          (this.$5[i] = {
            lastSkippedToSegmentNumber: null,
            inBufferAheadTimeSince: null,
          });
        (j = this.$2) == null ? void 0 : j.setEnableCatchup(h);
        j = this.$6(a, b, c, d, e, f, g, h, i);
        (a = j.segment) == null
          ? void 0
          : a.getOptions().setSegmentNumDecisionTime(Date.now());
        j.segment === null &&
          this.$3
            .getOperationLogger('segment_locator')
            .setInitiator(j.initiator)
            .setReason(j.reason)
            .setType(i)
            .setUserInfo(j.userInfo)
            .log();
        b = this.$4;
        if (j.segment && b != null) {
          c = j.segment.getOptions();
          c.setIsDVLEnabled(b.shouldRequestDynamicInfo(i));
        }
        return j.segment;
      };
      b.$6 = function (a, b, c, e, f, g, j, k, l) {
        var m,
          n = b.getCurrentTime(),
          o = this.$2 == null ? !1 : this.$2.shouldEnableCursorBasedCatchup(),
          p =
            e != null
              ? d(
                  'oz-player/utils/OzSourceBufferUtil',
                ).getTotalBufferAheadOfPosition(
                  e.getBufferedRanges(),
                  b.getCurrentTime(),
                  j,
                )
              : { bufferAheadSec: 0, bufferedOffset: 0 },
          q = p.bufferAheadSec;
        p = p.bufferedOffset;
        var r = null,
          s = null,
          t = this.$2 ? this.$2.enabled() : !0,
          u = a.getPredictedSegmentAfter(f),
          v = d('oz-player/streams/OzSegmentUtils').getSegmentForSequenceNumber(
            a,
            j.getNumber('pdash_download_cursor_between_catchups_seg') > 0
              ? h(this.$5)
              : h(this.$5, l),
          ),
          w = !0,
          x = null;
        if (
          o &&
          k &&
          ((m = u) == null ? void 0 : m.getSequenceNumber()) != null &&
          ((m = (m = u) == null ? void 0 : m.getSequenceNumber()) != null
            ? m
            : 0) <=
            ((m = v == null ? void 0 : v.getSequenceNumber()) != null ? m : 0)
        ) {
          u = v;
          r = 'paired_catchup';
          this.$3
            .getOperationLogger('segment_locator')
            .setInitiator(r)
            .setUserInfo({
              bufferAheadSec: String(q),
              bufferedOffset: String(p),
            })
            .setLength(
              ((m = v == null ? void 0 : v.getSequenceNumber()) != null
                ? m
                : 0) -
                ((m = (m = u) == null ? void 0 : m.getSequenceNumber()) != null
                  ? m
                  : 0),
            )
            .setType(l)
            .log();
          w = !1;
          x = r;
        } else if (
          o &&
          k &&
          t &&
          u != null &&
          ((m = this.$2) == null
            ? void 0
            : m.isBehindPreferredLiveHeadLatencyWithTolerance())
        ) {
          if (this.$2 && q > this.$2.getPreferredLiveHeadLatencySec() && p == 0)
            return {
              segment: null,
              initiator: 'catchup_pause',
              userInfo: {
                bufferAheadSec: String(q),
                bufferedOffset: String(p),
              },
            };
          o = a.getEndingSegment();
          m = d('oz-player/streams/OzSegmentUtils').getMaxSegment([o, u]);
          o =
            j.getNumber('pdash_download_cursor_between_catchups_seg') === 0 ||
            ((v = v == null ? void 0 : v.getSequenceNumber()) != null ? v : 0) +
              j.getNumber('pdash_download_cursor_between_catchups_seg') <
              ((v = o == null ? void 0 : o.getSequenceNumber()) != null
                ? v
                : 0);
          if (o) {
            if (
              ((v = m == null ? void 0 : m.getSequenceNumber()) != null
                ? v
                : 0) >
              ((v = (o = u) == null ? void 0 : o.getSequenceNumber()) != null
                ? v
                : 0)
            ) {
              this.$5[l].lastSkippedToSegmentNumber =
                (o = m == null ? void 0 : m.getSequenceNumber()) != null
                  ? o
                  : 0;
              this.$3
                .getOperationLogger('segment_locator')
                .setInitiator('catchup')
                .setUserInfo({
                  bufferAheadSec: String(q),
                  bufferedOffset: String(p),
                })
                .setLength(
                  ((v = m == null ? void 0 : m.getSequenceNumber()) != null
                    ? v
                    : 0) -
                    ((v = (o = u) == null ? void 0 : o.getSequenceNumber()) !=
                    null
                      ? v
                      : 0),
                )
                .setType(l)
                .log();
            }
            u = m;
            r = 'catchup';
            w = !1;
            x = r;
          }
        } else if (f == null) {
          u = a.getSegmentByTime(n);
          r = '1st_run';
          o = a.getTimeRanges();
          s = {
            approx: String(a.canApproximateId()),
            ranges: String(o.length),
            mpdStartTime:
              o.length > 0 ? String(o[o.length - 1].startTime) : null,
            mpdEndTime: o.length > 0 ? String(o[o.length - 1].endTime) : null,
          };
          this.$5[l].lastSkippedToSegmentNumber =
            (m = (v = u) == null ? void 0 : v.getSequenceNumber()) != null
              ? m
              : 0;
        }
        w &&
          (!j.getBool('download_cursor_disable_buffer_ahead_rule_lr_on') ||
            k) &&
          ((w = t), (x = 'stream_state'));
        if (w && q > c) {
          this.$5[l].inBufferAheadTimeSince == null &&
            (this.$5[l].inBufferAheadTimeSince = Date.now());
          return {
            segment: null,
            initiator: 'buffer_ahead_rule',
            userInfo: {
              bufferAheadSec: String(q),
              bufferedOffset: String(p),
              lastMaxSegNum: String(h(this.$5, l)),
              segment: u ? String(u.getSequenceNumber()) : null,
              computedBufferAheadTarget: String(c),
            },
          };
        } else
          !w &&
            q > c &&
            this.$3
              .getOperationLogger('segment_locator')
              .setUserInfo({
                bufferAheadSec: String(q),
                bufferedOffset: String(p),
                computedBufferAheadTarget: String(c),
              })
              .setReason('disabled_buffer_ahead_rule:' + (x || ''))
              .setType(l)
              .log();
        f = (g && g.getSequenceNumber()) || 0;
        n = (u && u.getSequenceNumber()) || 0;
        if (u && g && f >= n) {
          o = d('oz-player/streams/OzSegmentLocator').getEndingSequenceNumber(
            a,
          );
          return (o || 0) >= f
            ? { segment: g }
            : {
                segment: null,
                initiator: 'mpd_refresh',
                userInfo: { leSegNum: String(f) },
              };
        }
        v = e
          ? d('oz-player/utils/OzSourceBufferUtil').getTotalInBufferedRanges(
              e.getBufferedRanges(),
            )
          : 0;
        m = e
          ? d(
              'oz-player/utils/OzSourceBufferUtil',
            ).getTotalBufferAheadOfPosition(
              e.getBufferedRanges(),
              b.getCurrentTime(),
              j,
            ).bufferAheadSec
          : 0;
        k = i(this.$5, l);
        t = Date.now();
        if (
          (j.getNumber('download_cursor_total_buffer_max_sec') != 0 &&
            j.getNumber('download_cursor_total_buffer_max_sec') < m) ||
          (j.getNumber('download_cursor_buffer_ahead_time_max_sec') != 0 &&
            k != null &&
            j.getNumber('download_cursor_buffer_ahead_time_max_sec') <
              (t - k) / 1e3)
        ) {
          this.$5[l].lastSkippedToSegmentNumber =
            (x = (w = u) == null ? void 0 : w.getSequenceNumber()) != null
              ? x
              : 0;
          this.$3
            .getOperationLogger('segment_locator')
            .setUserInfo({
              bufferAheadSec: String(q),
              bufferedOffset: String(p),
              totalBufferedSec: String(v),
              computedBufferAheadTarget: String(c),
              inBufferAheadElapsedTime: String(
                (t - ((n = k) != null ? n : 0)) / 1e3,
              ),
            })
            .setReason('force_paired_catchup')
            .setType(l)
            .log();
        }
        this.$5[l].inBufferAheadTimeSince = null;
        return {
          segment: u,
          initiator: r ? r : void 0,
          userInfo: s ? s : void 0,
        };
      };
      return a;
    })();
    g.OzPredictedSegmentLocator = a;
  },
  98,
);
__d(
  'oz-player/utils/getRepresentationInCache',
  ['oz-player/networks/RequestParamCreator'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new (c('oz-player/networks/RequestParamCreator'))();
    function a(a, b) {
      b === void 0 && (b = null);
      return (
        a.find(function (a) {
          a = a.getInitSegment();
          var c = a && a.getByteRange();
          return a && c && b
            ? b.hasCacheValue(
                h.createRequestParam(a.getURI(), c).uri.toString(),
              )
            : !1;
        }) || null
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/Player',
  [
    'Promise',
    'gkx',
    'oz-player/configs/OzPlayerConfig',
    'oz-player/drm/OzDrmManager',
    'oz-player/loggings/OzDevConsolePerfLogger',
    'oz-player/loggings/OzLoggingUtils',
    'oz-player/loggings/OzMultiDestinationPerfLogger',
    'oz-player/loggings/OzOperationLoggerObserver',
    'oz-player/manifests/OzDynamicVideoLibrary',
    'oz-player/manifests/OzVideoRepresentation',
    'oz-player/media_source/OzMediaSeekableRangeManager',
    'oz-player/networks/OzClientClock',
    'oz-player/networks/OzNetworkManager',
    'oz-player/parsers/OzMpdParser',
    'oz-player/parsers/OzMpdUpdater',
    'oz-player/parsers/OzXmlParserImplDOMParser',
    'oz-player/playback_controls/OzClearSourceBufferOnSeekManager',
    'oz-player/playback_controls/OzLiveLatencyManager',
    'oz-player/playback_controls/OzPlaybackTimeRangeManager',
    'oz-player/playback_controls/OzPlayheadManager',
    'oz-player/shims/OzCreateWorkerClient',
    'oz-player/shims/OzEventEmitter',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/shims/OzPerformance',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/shims/OzUuid',
    'oz-player/shims/ozClearTimeout',
    'oz-player/shims/ozReportUnexpectedError',
    'oz-player/shims/ozSetTimeoutAcrossTransitions',
    'oz-player/shims/ozvariant',
    'oz-player/states/OzObservedPlaybackState',
    'oz-player/states/OzPositionToViewport',
    'oz-player/strategies/OzAbrManager',
    'oz-player/strategies/OzAudioIBRManager',
    'oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy',
    'oz-player/strategies/OzBlockedRepresentationsManager',
    'oz-player/strategies/OzBufferAheadPriorityStrategy',
    'oz-player/strategies/OzBufferAheadTargetStrategy',
    'oz-player/strategies/OzBufferEndLimitStrategy',
    'oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy',
    'oz-player/strategies/OzBufferTargetCalculator',
    'oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint',
    'oz-player/strategies/OzBufferingDetector',
    'oz-player/strategies/OzPausedStreamSegmentsCountStrategy',
    'oz-player/strategies/OzPlayheadAtInterruptionDetector',
    'oz-player/strategies/OzPlayingStatePriorityStrategy',
    'oz-player/strategies/OzPositionToViewportPriorityStrategy',
    'oz-player/strategies/OzPriorityCalculator',
    'oz-player/strategies/OzSingleCodecRestriction',
    'oz-player/strategies/OzStaleManifestBufferTargetStrategy',
    'oz-player/strategies/OzStartupBufferTargetStrategy',
    'oz-player/strategies/OzStaticStreamSegmentsStrategy',
    'oz-player/strategies/OzStreamSegmentsCountCalculator',
    'oz-player/strategies/OzSupportedMimeCodecsRestriction',
    'oz-player/streams/OzEndOfStreamWatcher',
    'oz-player/streams/OzHandleUserRepresentationSwitch',
    'oz-player/streams/OzMediaStream',
    'oz-player/streams/OzPredictedSegmentLocator',
    'oz-player/utils/OzCustomErrorCode',
    'oz-player/utils/OzError',
    'oz-player/utils/OzErrorEmitter',
    'oz-player/utils/OzMpdUtils',
    'oz-player/utils/OzPlaybackRestrictionsUtils',
    'oz-player/utils/OzReadableStreamUtils',
    'oz-player/utils/getRepresentationInCache',
    'oz-player/workers/OzMainThreadFallbackClient',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      a || c('oz-player/shims/ozvariant')(0, 21876);
      return a;
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b) {
        var e;
        e = a.call(this) || this;
        e.$Player5 = new Map();
        e.$Player6 = new Map();
        e.$Player9 = void 0;
        e.$Player10 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        e.$Player11 = new (c('oz-player/utils/OzErrorEmitter'))();
        e.$Player24 = [];
        e.$Player31 = null;
        e.$Player32 = null;
        e.$Player41 = null;
        e.$Player49 = !1;
        e.$Player52 = 0;
        e.$Player53 = null;
        e.$Player54 = null;
        e.$Player55 = 0;
        e.$Player56 = null;
        e.$Player57 = null;
        e.$Player58 = !1;
        e.$Player61 = null;
        e.$Player69 = !1;
        e.$Player70 = !1;
        e.$Player71 = !1;
        e.$Player82 = function () {
          var a = new (c('oz-player/parsers/OzXmlParserImplDOMParser'))();
          return a;
        };
        e.$Player84 = function () {
          e.$Player5.forEach(function (a) {
            return a.endStreamIfBufferedToEndTime();
          });
        };
        e.$Player85 = function () {
          e.$Player5.forEach(function (a) {
            return a.endStream();
          });
        };
        var f = b.audioOnly;
        f = f === void 0 ? !1 : f;
        var g = b.bufferingDetector,
          h = b.videoNode,
          i = b.config,
          j = b.configMap,
          k = b.rawMpdXml,
          l = b.mpdUrl;
        l = l === void 0 ? null : l;
        var m = b.loggerConfig;
        m =
          m === void 0
            ? {
                perfLoggerProviders: [],
                observedOperationLoggers: [],
                isOzDevConsoleEnabled: !1,
              }
            : m;
        var n = b.customVTTBufferTargetStrategies;
        n = n === void 0 ? null : n;
        var o = b.prefetchCache;
        o = o === void 0 ? null : o;
        var p = b.getOverrideOzRequestImplementation;
        p = p === void 0 ? null : p;
        var q = b.networkRequestStreamHandlers,
          r = b.networkRequestStreamRetryHandler,
          s = b.getShouldIncludeCredentials;
        s = s === void 0 ? null : s;
        var t = b.getCustomRequestParametersForURI;
        t = t === void 0 ? null : t;
        var u = b.initialRepresentationIDs;
        u = u === void 0 ? [] : u;
        var v = b.debugCreateInitiator;
        v = v === void 0 ? null : v;
        var w = b.customParsers;
        w = w === void 0 ? new Map() : w;
        var x = b.videoPlaybackRestrictions;
        x = x === void 0 ? [] : x;
        var y = b.customSegmentTimelineParser;
        y = y === void 0 ? null : y;
        var z = b.customRepresentationParsers;
        z = z === void 0 ? {} : z;
        var A = b.videoAbrManagerFactory;
        A = A === void 0 ? null : A;
        var B = b.seekHandler;
        B = B === void 0 ? null : B;
        var C = b.initialPlaybackPositionForDynamicMpd;
        C = C === void 0 ? -20 : C;
        var D = b.liveheadFallBehindBlockThreshold;
        D = D === void 0 ? 30 : D;
        var E = b.liveheadFallBehindBlockMargin;
        E = E === void 0 ? 5.9 : E;
        var F = b.startTimeStamp;
        F = F === void 0 ? 0 : F;
        var G = b.drmProviders;
        G = G === void 0 ? [] : G;
        var H = b.getVideoDimensions;
        H = H === void 0 ? null : H;
        var I = b.setCustomFetchStreamLoggingAttributes;
        I = I === void 0 ? null : I;
        var J = b.bufferEndLimit;
        J = J === void 0 ? null : J;
        var K = b.configureCustomRequestParametersForSegment;
        K = K === void 0 ? null : K;
        var L = b.isClientTriggeredTraceEnabled;
        L = L === void 0 ? !1 : L;
        b = b.enableImmediateQualityDownSwitch;
        b = b === void 0 ? !1 : b;
        e.$Player1 = n;
        e.$Player47 = v;
        n = m.perfLoggerProviders;
        v = m.observedOperationLoggers;
        m = m.isOzDevConsoleEnabled;
        e.$Player16 = m || !1;
        e.$Player15 = new (d(
          'oz-player/loggings/OzMultiDestinationPerfLogger',
        ).OzMultiDestinationPerfLoggerProvider)(e.$Player72().concat(n));
        e.$Player2 = f;
        e.$Player4 =
          (m = i) != null
            ? m
            : new (c('oz-player/configs/OzPlayerConfig'))(
                (n = j) != null ? n : {},
              );
        e.$Player21 = new (c('oz-player/loggings/OzOperationLoggerObserver'))();
        e.$Player21.observe(v, e.$Player15);
        e.$Player15
          .getOperationLogger('player_initialization')
          .setInitiator('player-' + c('oz-player/shims/OzUuid')())
          .log();
        e.$Player51 = p;
        e.$Player27 = w;
        e.$Player65 = new (c(
          'oz-player/strategies/OzBlockedRepresentationsManager',
        ))(e.$Player4);
        e.$Player10.addSubscriptions(
          e.$Player65.onRepresentationBlocked(function (a) {
            e.emit('representationBlocked', a);
          }),
        );
        e.$Player30 = [
          e.$Player65,
          new (c('oz-player/strategies/OzSupportedMimeCodecsRestriction'))(),
        ].concat(x);
        e.$Player4.getBool('single_codec_restriction_enabled') &&
          e.$Player30.push(
            new (c('oz-player/strategies/OzSingleCodecRestriction'))(),
          );
        e.$Player28 = z;
        e.$Player29 = y;
        e.$Player34 = A;
        e.$Player35 = B;
        e.$Player36 = F;
        e.$Player37 = C;
        e.$Player38 = D;
        e.$Player40 = E;
        e.$Player64 = J;
        e.$Player68 = L;
        e.$Player70 = b;
        e.$Player45 = G;
        e.$Player61 = I;
        e.$Player3 = h;
        e.$Player67 = d(
          'oz-player/shims/OzCreateWorkerClient',
        ).createWorkerClient({
          videoNode: e.$Player3,
          config: e.$Player4,
          perfLoggerProvider: e.$Player15,
          networkRequestStreamRetryHandler: r,
          handleVttCaptionsUpdated: function (a) {
            if (e.$Player4.getBool('emit_captions_changed_event')) {
              var b;
              b =
                (b = e.$Player5.get('caption')) == null
                  ? void 0
                  : (b = b.getCurrentRepresentation()) == null
                  ? void 0
                  : b.getLang();
              e.emit('vttCaptionsUpdated', a, b);
            }
          },
          onClearVideoNodeError: function () {
            e.$Player73();
          },
          onRetryVideoElementError: function (a) {
            e.emit('videoNodeErrorRetry', a);
          },
          errorHandler: function (a) {
            e.$Player11.emitError(a);
          },
        });
        e.$Player7 = e.$Player67.createMediaSourceManager();
        e.$Player62 = new (c(
          'oz-player/playback_controls/OzClearSourceBufferOnSeekManager',
        ))(e.$Player3, e.$Player4, e.$Player5, e.$Player15);
        e.$Player62.maybeOverwriteVideoCurrentTimeProperty();
        e.$Player23 =
          e.$Player67 instanceof
          c('oz-player/workers/OzMainThreadFallbackClient')
            ? o
            : null;
        f = e.$Player23 && e.$Player23.getCachedRepresentations();
        e.$Player24 = f || u;
        e.$Player10.addSubscriptions(
          e.$Player62.onError(e.$Player11.emitError),
        );
        e.$Player63 = new (c('oz-player/manifests/OzDynamicVideoLibrary'))({
          config: e.$Player4,
        });
        e.$Player42 = q;
        e.$Player43 = s;
        e.$Player44 = t;
        e.$Player66 = K;
        e.$Player12 = new (c('oz-player/networks/OzNetworkManager'))({
          config: e.$Player4,
          prefetchCache: e.$Player23,
          networkRequestStreamHandlers: e.$Player42,
          getOverrideOzRequestImplementation: e.$Player51,
          getShouldIncludeCredentials: e.$Player43,
          getCustomRequestParametersForURI: e.$Player44,
          networkRequestStreamRetryHandler: r,
          setCustomFetchStreamLoggingAttributes: e.$Player61,
          dynamicVideoLibrary: e.$Player63,
          configureCustomRequestParametersForSegment: e.$Player66,
          workerClient: e.$Player67,
          onResourceTimingBufferFull: function () {
            e.$Player74();
          },
        });
        e.$Player17 = l;
        e.$Player8 = k;
        e.$Player13 = new (c('oz-player/states/OzObservedPlaybackState'))(
          e.$Player4,
          e.$Player3,
          e.$Player15,
        );
        e.$Player50 = H;
        e.$Player14 = new (c('oz-player/streams/OzEndOfStreamWatcher'))(
          e.$Player7,
          e.$Player4,
        );
        e.$Player10.addSubscriptions(
          e.$Player14.addListener('streamEnd', function () {
            (e.$Player49 = !0), e.emit('streamEnd');
          }),
        );
        e.$Player48 = (i = g) != null ? i : e.$Player75();
        e.$Player4.getNumber('pixels_below_viewport_to_observe') > 0 &&
          (e.$Player59 = new (c('oz-player/states/OzPositionToViewport'))(
            e.$Player3,
            e.$Player4,
          ));
        return e;
      }
      var f = e.prototype;
      f.$Player74 = function () {
        if (this.$Player69) return;
        c('oz-player/shims/ozReportUnexpectedError')(
          new Error('ResourceTiming buffer is full'),
          'ResourceTiming buffer is full',
          'warn',
        );
        this.$Player69 = !0;
      };
      f.$Player76 = function (a) {
        var b = this;
        this.$Player77();
        try {
          var e = d('oz-player/loggings/OzLoggingUtils').executeOperationAndLog(
            this.$Player15.cloneContext().setInitiator(this.$Player47),
            'parse_manifest',
            function (e) {
              var f,
                g,
                c = b.$Player78(a);
              f = String(
                (f = c.getCustomField('currentServerTimeMs')) != null ? f : '',
              );
              g = String(
                (g = c.getCustomField('lastVideoFrameTs')) != null ? g : '',
              );
              f = {
                currentServerTimeMs: f,
                ingestLastVideoFrameTs: g,
                nowMs: String(Date.now()),
              };
              g = d('oz-player/utils/OzMpdUtils').getMpdLastTimeRange(
                c,
                b.$Player4,
              );
              g = g && g.endTime != 0 ? g.endTime : null;
              e.setLiveheadPosition(g)
                .setLiveheadSeqNumMpd(
                  d('oz-player/utils/OzMpdUtils').getMpdLastSequenceNumber(c),
                )
                .setManifestType(c.isStaticMpd() ? 'static' : 'dynamic')
                .setIsTemplatedManifest(
                  Boolean(c.getCustomField('isLiveTemplated')),
                )
                .setUserInfo(f);
              return c;
            },
          );
          this.$Player79(e);
        } catch (a) {
          e = a;
          if (e instanceof c('oz-player/utils/OzError'))
            this.$Player11.emitError(e);
          else throw e;
        }
      };
      f.$Player79 = function (a) {
        var b = this;
        this.$Player9 = h(a);
        this.$Player4.getBool('player_emit_mpdparsed_early') &&
          this.emit('mpdParsed', a);
        this.$Player25 = this.$Player80();
        this.$Player26 = this.$Player81();
        this.$Player65.setAvailableRepresentationsCount(
          a.getVideoRepresentations().length,
        );
        if (this.$Player17 != null) {
          var d = new (c('oz-player/parsers/OzMpdUpdater'))(
            this.$Player4,
            a,
            this.$Player12,
            this.$Player13,
            this.$Player15,
            {
              mpdUrl: null,
              createXmlParser: this.$Player82,
              customParsers: this.$Player27,
              customRepresentationParsers: this.$Player28,
              customSegmentTimelineParser: this.$Player29,
            },
            this.$Player46,
            this.$Player68,
          );
          this.$Player83(d);
          this.$Player10.addSubscriptions(
            d.onError(this.$Player11.emitError),
            d.addListener('manifestFetchError', function (a) {
              return b.emit('manifestFetchError', a);
            }),
            d.addListener('manifestFetchErrorRetry', function (a) {
              return b.emit('manifestFetchErrorRetry', a);
            }),
            d.addListener('streamTransitionToStatic', this.$Player84),
            d.addListener('streamGone', this.$Player85),
          );
          d.setupUpdateLoop();
          this.$Player20 = d;
        }
        this.$Player4.getBool('use_live_latency_manager')
          ? !a.isStaticMpd()
            ? ((this.$Player39 = new (c(
                'oz-player/playback_controls/OzLiveLatencyManager',
              ))({
                config: this.$Player4,
                mpd: a,
                playbackState: this.$Player13,
                bufferingDetector: this.$Player48,
                video: this.$Player3,
                loggerProvider: this.$Player15,
              })),
              (this.$Player36 =
                this.$Player39.getPreferredLiveHeadLatencySec() * -1))
            : (this.$Player36 = this.$Player36)
          : (this.$Player36 = a.isStaticMpd()
              ? this.$Player36
              : this.$Player86(a));
        this.$Player18 = new (c(
          'oz-player/playback_controls/OzPlayheadManager',
        ))({
          video: this.$Player3,
          mpd: a,
          dynamicVideoLibrary: this.$Player63,
          playheadCatchup: this.$Player33,
          playbackState: this.$Player13,
          config: this.$Player4,
          perfLoggerProvider: this.$Player15,
          seekHandler: this.$Player35,
          initialPlaybackPosition: this.$Player36,
          canSupportSkipVideobufferGaps:
            this.$Player62.getCurrentTimePropertyOverwriteSuccess(),
          liveLatencyManager: this.$Player39,
        });
        this.$Player67.setPlayheadManager(this.$Player18);
        this.$Player19 = new (c(
          'oz-player/playback_controls/OzPlaybackTimeRangeManager',
        ))({
          config: this.$Player4,
          video: this.$Player3,
          mpd: a,
          liveheadFallBehindBlockThreshold: this.$Player38,
          liveheadFallBehindBlockMargin: this.$Player40,
          playbackState: this.$Player13,
          perfLoggerProvider: this.$Player15,
        });
        this.$Player87()['catch'](function (a) {
          if (a instanceof c('oz-player/utils/OzError'))
            b.$Player11.emitError(a);
          else {
            var d =
              typeof a === 'object' &&
              a != null &&
              a.message != null &&
              a.message !== ''
                ? String(a.message)
                : String(a);
            b.$Player11.emitError(
              new (c('oz-player/utils/OzError'))({
                type: 'OZ_INITIALIZATION',
                description: 'Failed to setup streams: ' + d,
                extra: {
                  originalError: a,
                  code: c(
                    'oz-player/utils/OzCustomErrorCode',
                  ).SETUP_STREAMS_PROMISE_REJECTION.toString(),
                },
              }),
            );
          }
        });
        this.emit('mpdReady', a);
      };
      f.load = function (a) {
        var b = this;
        this.$Player17 = a;
        try {
          var d = this.$Player8;
          d != null
            ? this.$Player76(d)
            : a != null
            ? this.$Player88(a)
                .then(function (a) {
                  if (b.$Player58) {
                    b.$Player58 = !1;
                    b.load(b.$Player17);
                    return;
                  }
                  b.$Player8 = a;
                  b.$Player52 = 0;
                  b.$Player76(a);
                })
                ['catch'](function (d) {
                  var e;
                  if (b.$Player58) {
                    b.$Player58 = !1;
                    b.load(b.$Player17);
                    return;
                  }
                  e =
                    d instanceof c('oz-player/utils/OzError')
                      ? d
                      : new (c('oz-player/utils/OzError'))({
                          type: 'OZ_INITIALIZATION',
                          description:
                            'Unknown mpd url load failure; errorMessage: ' +
                            d.message +
                            '; errorDescription: ' +
                            ((e = d.description) != null ? e : '') +
                            ';',
                          extra: { originalError: d, url: a },
                        });
                  b.$Player89(e, a);
                })
            : this.$Player11.emitError(
                new (c('oz-player/utils/OzError'))({
                  type: 'OZ_INITIALIZATION',
                  description:
                    'Cannot start Oz without a raw mpd xml or mpd url',
                }),
              );
        } catch (a) {
          d =
            a instanceof c('oz-player/utils/OzError')
              ? a
              : new (c('oz-player/utils/OzError'))({
                  type: 'OZ_INITIALIZATION',
                  description:
                    'Failed to call load' +
                    ('; errorMessage: ' +
                      a.message +
                      '; errorDescription: ' +
                      ((d = a.description) != null ? d : '') +
                      ';'),
                });
          this.$Player11.emitError(d);
        }
      };
      f.$Player86 = function (a) {
        var b;
        b = (b = a.getVideoRepresentations()[0].getMaxGopSec()) != null ? b : 0;
        a =
          (a = a.getVideoRepresentations()[0].getEndingSegment()) == null
            ? void 0
            : a.getTimeRange();
        a = a != null ? a.endTime - a.startTime : 0;
        a > 0 && (b = a);
        return Math.min(
          this.$Player37 +
            this.$Player4.getNumber(
              'dynamic_mpd_initial_playback_position_offset_modifier',
            ),
          -1 *
            b *
            this.$Player4.getNumber(
              'pdash_download_cursor_catchup_threshold_gop_multiplier',
            ),
        );
      };
      f.$Player88 = function (a) {
        this.$Player52++;
        a = this.$Player12.requestRawUrl(a, null, this.$Player15);
        a = a.getStream().getReader();
        return d('oz-player/utils/OzReadableStreamUtils').pumpString(a);
      };
      f.$Player90 = function () {
        this.$Player53 != null &&
          (c('oz-player/shims/ozClearTimeout')(this.$Player53),
          (this.$Player53 = null));
      };
      f.$Player89 = function (a, b) {
        var d = this,
          e = !0,
          f = this.$Player52 - 1,
          g = a.getExtra().code;
        this.$Player54 !== g
          ? ((this.$Player54 = g), (this.$Player55 = 1))
          : this.$Player55++;
        var h = function () {
          e = !1;
        };
        g = {
          endStream: function () {
            if (
              d.$Player4.getBool('emit_stream_gone_on_end_stream_before_start')
            )
              h(), (d.$Player49 = !0), d.emit('streamGoneBeforeStart');
            else
              throw new (c('oz-player/utils/OzError'))({
                type: 'OZ_INITIALIZATION',
                description: 'Cannot call endStream before stream is started',
              });
          },
          consecutiveFailuresForErrorCode: this.$Player55,
          error: a,
          isInitialRequest: !0,
          retry: function (a) {
            h(),
              d.$Player90(),
              (d.$Player53 = c('oz-player/shims/ozSetTimeoutAcrossTransitions')(
                function () {
                  d.$Player90(), d.load(b);
                },
                (a == null ? void 0 : a.waitMs) != null
                  ? a == null
                    ? void 0
                    : a.waitMs
                  : 1e3,
              ));
          },
          retryAttemptCount: f,
        };
        this.$Player4.getNumber('initial_manifest_request_retry_count') > 0 &&
          this.emit('manifestFetchError', g);
        e && this.$Player11.emitError(a);
      };
      f.updatePlayerRunTimeConfig = function (a) {
        var b = a.manifestUrl,
          c = a.audioStreamDataHandler,
          d = a.videoStreamDataHandler,
          e = a.applicationStreamDataHandler;
        a = a.resetStreamAnchor;
        if (d !== void 0) {
          var f = this.$Player5.get('video');
          f && f.updateRunTimeConfigs({ streamDataHandler: d });
        }
        if (a !== void 0) {
          f = this.$Player5.get('video');
          f && f.updateRunTimeConfigs({ resetStreamAnchor: a });
          d = this.$Player5.get('audio');
          d && d.updateRunTimeConfigs({ resetStreamAnchor: a });
          this.$Player18.resetCurrentTime();
        }
        if (c !== void 0) {
          f = this.$Player5.get('audio');
          f && f.updateRunTimeConfigs({ streamDataHandler: c });
        }
        if (e !== void 0) {
          d = this.$Player5.get('caption');
          d &&
            d.updateRunTimeConfigs({
              streamDataHandler: e,
              resetStreamAnchor: a,
            });
        }
        b != null && b !== '' && this.$Player91(b);
      };
      f.$Player92 = function (a, b) {
        var c = this,
          e = a.getMimeCodecs();
        e = this.$Player7.createSourceBufferManager(
          e,
          b,
          a.getInitSegment().getData(),
        );
        this.$Player93(e, b, a);
        a = e.then(function (a) {
          c.$Player48 &&
            b !== 'caption' &&
            c.$Player48.setSourceBufferState(b, a.getSourceBufferState());
          return a;
        });
        d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
          a,
          this.$Player15,
          'source_attach',
          function (a) {
            a.setType(b);
          },
        );
        return a.then(function (a) {
          b !== 'caption' &&
            c.$Player18.observeSourceBufferState(a.getSourceBufferState(), b);
        });
      };
      f.isDrm = function () {
        var a = this.$Player46;
        if (a != null) {
          a = a.hasContentProtections();
          return a != null ? a : !1;
        }
        return !1;
      };
      f.$Player77 = function () {
        if (this.$Player45.length > 0) {
          var a = (this.$Player46 = new (d(
            'oz-player/drm/OzDrmManager',
          ).OzDrmManager)(this.$Player15, this.$Player3, {
            maxStartEMEAttempts: this.$Player4.getNumber(
              'max_start_eme_attempts',
            ),
            throwNoLicenseError: this.$Player4.getBool(
              'throw_no_license_error',
            ),
          }));
          a.onError(this.$Player11.emitError);
          this.$Player45 &&
            this.$Player45.forEach(function (b) {
              a.addProvider(b);
            });
          this.$Player28.drmProtections &&
            this.$Player11.emitError(
              new (c('oz-player/utils/OzError'))({
                type: 'OZ_DRM_MANAGER',
                description:
                  '"drmProtections" is a reserved parser name for "customRepresentationParsers". Please rename your parser.',
              }),
            );
          this.$Player28.drmProtections = function (b) {
            return a.parseContentProtectionForRepresentation(b);
          };
        }
      };
      f.$Player94 = function (a) {
        var b = this,
          d = h(this.$Player9);
        a = [
          this.$Player4,
          a,
          d.getVideoRepresentations(),
          this.$Player30,
          this.$Player13,
          window.devicePixelRatio || 1,
          function () {
            return b.$Player95();
          },
          d.isStaticMpd() ? 'static' : 'dynamic',
        ];
        d = this.$Player34 && this.$Player34.apply(this, a);
        return (d = d) != null
          ? d
          : babelHelpers.construct(c('oz-player/strategies/OzAbrManager'), a);
      };
      f.$Player96 = function (a) {
        return a === 'caption'
          ? this.$Player4.getBool('append_once_per_stream_in_caption_stream')
          : this.$Player4.getBool(
              'append_once_per_stream_in_application_stream',
            );
      };
      f.$Player93 = function (a, b, e) {
        var f = this,
          g = h(this.$Player9),
          i = this.$Player6.get(b),
          j = new (c('oz-player/streams/OzMediaStream'))({
            config: this.$Player4,
            sourceBufferManagerPromise: a,
            networkManager: this.$Player12,
            playbackState: this.$Player13,
            endOfStreamWatcher:
              !this.$Player4.getBool(
                'disable_end_of_stream_in_caption_stream',
              ) || b !== 'caption'
                ? this.$Player14
                : null,
            bufferTargetCalculator: this.$Player97(b),
            priorityCalculator: this.$Player98(),
            streamSegmentsCountCalculator: this.$Player99(b),
            abrManager: i,
            representation: e,
            loggerProvider: this.$Player15.cloneContext().setType(b),
            segmentLocator: this.$Player60,
            setCustomFetchStreamLoggingAttributes: this.$Player61,
            blockedRepresentationsManager: this.$Player65,
            dynamicVideoLibrary: this.$Player63,
            shouldAppendOncePerStream: this.$Player96(b),
            mediaStreamType: b,
            workerClient: this.$Player67,
          });
        if (this.$Player36 === 0) j.start();
        else {
          i = h(this.$Player9);
          i.isStaticMpd() && c('gkx')('7013')
            ? ((this.$Player71 = !0), j.start())
            : this.$Player10.addSubscriptions(
                this.$Player18.addListener(
                  'initialPlaybackPositionSet',
                  function () {
                    j.start();
                  },
                ),
              );
        }
        this.$Player10.addSubscriptions(j.onError(this.$Player11.emitError));
        this.$Player22 &&
          this.$Player10.addSubscriptions(
            this.$Player22.listenToMediaStreamInitAppended(j),
          );
        b === 'video' &&
          ((this.$Player32 = new (c(
            'oz-player/streams/OzHandleUserRepresentationSwitch',
          ))(
            this.$Player4,
            this.$Player13,
            d(
              'oz-player/utils/OzPlaybackRestrictionsUtils',
            ).applyVideoPlaybackRestrictions(
              this.$Player4,
              this.$Player30,
              this.$Player95(),
              g.getVideoRepresentations(),
            ),
            j,
            a,
            this.$Player70,
          )),
          this.$Player10.addSubscriptions(
            this.$Player32.onError(this.$Player11.emitError),
          ));
        this.$Player5.set(b, j);
        this.$Player10.addSubscriptions(
          j.addListener('switchRepresentation', function () {
            var c,
              a = j.getCurrentRepresentation();
            (c = f.$Player22) == null ? void 0 : c.setTimeRangeProvider(a);
            f.$Player18.setTimeRangeProvider(a);
            f.$Player19 != null && f.$Player19.setTimeRangeProvider(a);
            b === 'video' && f.emit('switchVideoRepresentation');
          }),
          j.addListener('SegmentAppended', function (a) {
            f.$Player100('SegmentAppended', a);
          }),
          j.addListener('streamError', function (a) {
            f.emit('streamError', a);
          }),
          j.addListener('streamErrorRetry', function (a) {
            f.emit('streamErrorRetry', a);
          }),
        );
      };
      f.$Player101 = function () {
        if (this.$Player64 != null)
          return [
            new (c('oz-player/strategies/OzBufferEndLimitStrategy'))(
              this.$Player3,
              this.$Player64,
            ),
          ];
        else
          return [
            new (c('oz-player/strategies/OzStaleManifestBufferTargetStrategy'))(
              h(this.$Player9),
              this.$Player4,
            ),
            new (c('oz-player/strategies/OzStartupBufferTargetStrategy'))(
              this.$Player13,
              this.$Player4,
            ),
            new (c('oz-player/strategies/OzBufferAheadTargetStrategy'))(
              this.$Player4,
            ),
          ];
      };
      f.$Player102 = function () {
        return this.$Player64 == null
          ? [
              new (c(
                'oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint',
              ))({
                config: this.$Player4,
                minimumBufferTargetSec: this.$Player4.getNumber(
                  'buffer_target_constraint_minimum_sec',
                ),
              }),
            ]
          : [];
      };
      f.$Player103 = function () {
        return this.$Player64 == null
          ? [
              new (c(
                'oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint',
              ))({ config: this.$Player4, minimumBufferTargetSec: 0 }),
            ]
          : [];
      };
      f.$Player80 = function () {
        return new (c('oz-player/strategies/OzBufferTargetCalculator'))(
          this.$Player101(),
          this.$Player102(),
        );
      };
      f.$Player81 = function () {
        return this.$Player1 != null
          ? new (c('oz-player/strategies/OzBufferTargetCalculator'))(
              [].concat(this.$Player1, this.$Player101()),
              this.$Player103(),
            )
          : this.$Player80();
      };
      f.$Player97 = function (a) {
        return a === 'caption' ? this.$Player26 : this.$Player25;
      };
      f.$Player83 = function (a) {
        var b = this;
        if (
          this.$Player4.getNumber(
            'stream_interrupt_check_mpd_stale_count_threshold',
          ) > 0
        ) {
          var d = this.$Player48,
            e = new (c(
              'oz-player/strategies/OzPlayheadAtInterruptionDetector',
            ))(this.$Player3, d);
          this.$Player10.addSubscriptions(
            e.addListener('playheadAtInterruption', function (a) {
              b.$Player15.getOperationLogger('stream_interrupted').log(),
                b.emit('streamInterruptAt', a);
            }),
            a.addListener('streamInterruptAt', function (a) {
              var c;
              (c = b.$Player48) == null ? void 0 : c.notifyStreamInterrupted();
              e.notifyStreamInterrupted(a);
            }),
            a.addListener('streamResumedAt', function (a) {
              var c;
              b.$Player15.getOperationLogger('stream_resumed').log();
              (c = b.$Player48) == null ? void 0 : c.notifyStreamResumed();
              e.notifyStreamResumed();
              b.emit('streamResumedAt', a);
            }),
          );
          this.$Player31 = e;
        }
      };
      f.$Player98 = function () {
        var a = [
          new (c('oz-player/strategies/OzPlayingStatePriorityStrategy'))(
            this.$Player13,
          ),
          new (c('oz-player/strategies/OzBufferAheadPriorityStrategy'))(
            this.$Player4,
            this.$Player13,
          ),
        ].concat(
          this.$Player4.getNumber('pixels_below_viewport_to_observe') > 0 &&
            this.$Player59 != null
            ? new (c(
                'oz-player/strategies/OzPositionToViewportPriorityStrategy',
              ))(this.$Player59, this.$Player4)
            : [],
        );
        return new (c('oz-player/strategies/OzPriorityCalculator'))(a);
      };
      f.$Player99 = function (a) {
        var b = [
          new (c('oz-player/strategies/OzStaticStreamSegmentsStrategy'))(
            this.$Player4,
          ),
          new (c(
            'oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy',
          ))(this.$Player97(a), this.$Player4),
        ];
        this.$Player4.getNumber('paused_stream_segments_count') !== 0 &&
          b.push(
            new (c('oz-player/strategies/OzPausedStreamSegmentsCountStrategy'))(
              this.$Player13,
              this.$Player4,
            ),
          );
        if (a === 'video') {
          a = h(this.$Player9);
          b.push(
            new (c(
              'oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy',
            ))(this.$Player4, a.getVideoRepresentations()),
          );
        }
        return new (c('oz-player/strategies/OzStreamSegmentsCountCalculator'))(
          b,
        );
      };
      f.onError = function (a) {
        return this.$Player11.onError(a);
      };
      f.getSelectedVideoQuality = function () {
        var a = this.$Player9;
        if (!a || this.$Player2) return '';
        var b = this.$Player5.get('video');
        b = b && b.getCurrentRepresentation();
        if (b instanceof c('oz-player/manifests/OzVideoRepresentation'))
          return b.getQualityLabel();
        b = a.getVideoRepresentations();
        a = b[0];
        if (a) return a.getQualityLabel();
        a || c('oz-player/shims/ozvariant')(0, 19857);
        return '';
      };
      f.switchToVideoQuality = function (a) {
        var b = h(this.$Player9);
        b = b.getVideoRepresentations().find(function (b) {
          return b.getQualityLabel() === a;
        });
        if (b) {
          var c = this.$Player5.get('video');
          c && (c.switchRepresentation(b), c.disableAdaptation());
        }
      };
      f.getIsVideoQualityAdaptationEnabled = function () {
        var a = this.$Player5.get('video');
        return a ? a.getIsAdaptationEnabled() : !1;
      };
      f.enableVideoQualityAdaptation = function () {
        var a = this.$Player5.get('video');
        a && a.enableAdaptation();
      };
      f.getVideoQualities = function () {
        var a = this,
          b = this.$Player9;
        return !b
          ? []
          : b
              .getVideoRepresentations()
              .filter(function (b) {
                var c;
                return !((c = a.$Player65) == null
                  ? void 0
                  : c.isBlocked(b.getID()));
              })
              .map(function (a) {
                return a.getQualityLabel();
              });
      };
      f.setEnableLiveheadCatchup = function (a) {
        this.$Player19 &&
          (a
            ? this.$Player15
                .getOperationLogger('live_catchup_enabled')
                .setIsLatencyCachupEnabled(!0)
                .log()
            : this.$Player15
                .getOperationLogger('live_catchup_disabled')
                .setIsLatencyCachupEnabled(!1)
                .log(),
          this.$Player19.setTimelineBlockingEnabled(a)),
          this.$Player5.forEach(function (b) {
            b.setEnableLiveheadCatchup(a);
          }),
          this.$Player18.setEnableLiveheadCatchup(a);
      };
      f.$Player87 = function () {
        var a = this,
          c = h(this.$Player9);
        c = c.getVideoRepresentations()[0];
        this.$Player60 =
          (c &&
            c.canPredict() &&
            this.$Player4.getBool('pdash_use_pdash_segmentlocator')) ||
          (c && c.canApproximateId())
            ? new (d(
                'oz-player/streams/OzPredictedSegmentLocator',
              ).OzPredictedSegmentLocator)({
                videoNode: this.$Player3,
                liveLatencyManager: this.$Player39,
                loggerProvider: this.$Player15,
                dynamicVideoLibrary: this.$Player63,
              })
            : null;
        c = this.$Player2
          ? [
              this.$Player104({ liveConfigsFromAudioStream: !0 }),
              this.$Player105(),
            ]
          : [this.$Player106(), this.$Player104({}), this.$Player105()];
        var e = [];
        return b('Promise')
          .all(c)
          .then(function () {
            var b = a.$Player5.get('video'),
              c = a.$Player5.get('audio'),
              d = a.$Player5.get('caption');
            b && e.push(b.getCurrentRepresentation());
            c && e.push(c.getCurrentRepresentation());
            d && e.push(d.getCurrentRepresentation());
            e.forEach(function (b) {
              a.$Player10.addSubscriptions(
                b.addUpdateListener(function () {
                  a.$Player100('SegmentIndexesUpdated', e);
                }),
              );
            });
            a.$Player100('InitialSegmentIndexes', e);
            a.$Player3 &&
              a.$Player3.style &&
              (a.$Player3.style.display = a.$Player2 ? 'none' : 'block');
          });
      };
      f.$Player107 = function (a) {
        if (this.$Player71) return;
        if (!a.getTimeRanges().length) {
          this.$Player15
            .getOperationLogger('playhead_adjustment')
            .setInitiator('setup_initial_duration')
            .setResult('failed')
            .log();
          return;
        }
        a = a.getTimeRanges()[a.getTimeRanges().length - 1].endTime;
        this.$Player7.updateDuration(a, !0);
      };
      f.$Player108 = function (a) {
        var b;
        this.$Player22 = new (c(
          'oz-player/media_source/OzMediaSeekableRangeManager',
        ))(this.$Player7, this.$Player4);
        this.$Player107(a);
        (b = this.$Player22) == null ? void 0 : b.setTimeRangeProvider(a);
        this.$Player18.setTimeRangeProvider(a);
        this.$Player19 != null && this.$Player19.setTimeRangeProvider(a);
      };
      f.$Player106 = function () {
        var a = h(this.$Player9);
        a = a.getVideoRepresentations();
        if (!a.length)
          return c('oz-player/shims/OzMaybeNativePromise').reject(
            new Error('no video representations in the manifest.'),
          );
        var b = d(
          'oz-player/utils/OzPlaybackRestrictionsUtils',
        ).applyVideoPlaybackRestrictions(
          this.$Player4,
          this.$Player30,
          this.$Player95(),
          a,
        );
        if (!b.length) {
          a = a.map(function (a) {
            return (
              a.getQualityLabel() +
              '@' +
              a.getWidth() +
              'x' +
              a.getHeight() +
              '(' +
              a.getMimeCodecs() +
              ')'
            );
          });
          return c('oz-player/shims/OzMaybeNativePromise').reject(
            new Error('restricted all video representations: ' + a.join(', ')),
          );
        }
        this.$Player108(b[0]);
        a = this.$Player109(b);
        var e = this.$Player94(a || b[0]);
        this.$Player6.set('video', e);
        a || (a = e.getBestRepresentation());
        return this.$Player92(a || b[0], 'video');
      };
      f.$Player104 = function (a) {
        a = a.liveConfigsFromAudioStream;
        a = a === void 0 ? !1 : a;
        var b = h(this.$Player9);
        b = b.getAudioRepresentations();
        a && this.$Player108(b[0]);
        return b.length
          ? this.$Player92(this.$Player110(b) || b[0], 'audio')
          : c('oz-player/shims/OzMaybeNativePromise').resolve();
      };
      f.$Player105 = function () {
        var a = h(this.$Player9);
        a = a.getApplicationRepresentations();
        return a.length
          ? this.$Player92(this.$Player111(a) || a[0], 'caption')
          : c('oz-player/shims/OzMaybeNativePromise').resolve();
      };
      f.getMpd = function () {
        return this.$Player9;
      };
      f.destroy = function (a) {
        var c,
          d = this;
        a = this.$Player15.getOperationLogger('unload').setInitiator(a).start();
        this.$Player67.destroy();
        this.$Player62.destroy();
        this.$Player90();
        this.$Player5.forEach(function (a) {
          a.cleanup();
        });
        this.$Player32 && this.$Player32.cleanup();
        this.$Player5 = new Map();
        this.$Player10.release();
        this.$Player10.engage();
        this.$Player13.destroy();
        this.$Player18 && this.$Player18.destroy();
        this.$Player39 && (this.$Player39.destroy(), (this.$Player39 = null));
        this.$Player19 && (this.$Player19.destroy(), (this.$Player19 = null));
        this.$Player46 && this.$Player46.destroy();
        this.$Player59 && this.$Player59.destroy();
        this.$Player12 && this.$Player12.destroy();
        this.$Player50 && (this.$Player50 = null);
        this.$Player7 && this.$Player7.detach();
        var e = b('Promise').resolve();
        this.$Player3.pause();
        this.$Player3.removeAttribute('src');
        this.$Player3.removeAttribute('srcObject');
        'function' === typeof this.$Player3.setMediaKeys &&
          (e = this.$Player3.setMediaKeys(null));
        this.$Player20 && this.$Player20.destroy();
        this.$Player31 && this.$Player31.destroy();
        this.$Player21.destroy();
        (c = this.$Player22) == null ? void 0 : c.destroy();
        this.$Player48 && this.$Player48.destroy();
        this.$Player65 && this.$Player65.destroy();
        a.log();
        this.emit('destroyed');
        c = [e];
        return b('Promise')
          .all(c)
          .then(function () {
            d.$Player3.load();
          });
      };
      f.$Player109 = function (a) {
        var b = this,
          d;
        d = a.find(function (a) {
          return b.$Player24.indexOf(a.getID()) !== -1;
        });
        d ||
          (d = c('oz-player/utils/getRepresentationInCache')(
            a,
            this.$Player23,
          ));
        return d || null;
      };
      f.$Player110 = function (a) {
        var b = this,
          d = h(this.$Player9),
          e;
        e = a.find(function (a) {
          return b.$Player24.indexOf(a.getID()) !== -1;
        });
        e ||
          (e = c('oz-player/utils/getRepresentationInCache')(
            a,
            this.$Player23,
          ));
        if (
          !e &&
          !d.isStaticMpd() &&
          a.length > 1 &&
          this.$Player4.getBool('live_audio_ibr')
        ) {
          d = new (c('oz-player/strategies/OzAudioIBRManager'))(
            this.$Player4,
            this.$Player15,
          );
          e = d.getInitialAudioRepresentation(a);
        }
        return e || null;
      };
      f.$Player111 = function (a) {
        return null;
      };
      f.$Player78 = function (a) {
        var b = new (c('oz-player/parsers/OzMpdParser'))(
          this.$Player4,
          {
            mpdUrl: this.$Player17,
            createXmlParser: this.$Player82,
            customParsers: this.$Player27,
            customRepresentationParsers: this.$Player28,
            customSegmentTimelineParser: this.$Player29,
          },
          this.$Player12,
          this.$Player15,
          this.$Player46,
          this.$Player24,
          this.$Player65,
        );
        this.$Player10.addSubscriptions(b.onError(this.$Player11.emitError));
        return b.parse(a);
      };
      f.$Player72 = function () {
        var a = [];
        this.$Player16 &&
          a.push(
            new (d(
              'oz-player/loggings/OzDevConsolePerfLogger',
            ).OzDevConsolePerfLoggerProvider)(),
          );
        return a;
      };
      f.$Player112 = function (a, b) {
        b = this.$Player5.get(b);
        return b ? b.getRepresentationIDAtTime(a) : null;
      };
      f.getAudioRepresentationIDAtTime = function (a) {
        return this.$Player112(a, 'audio');
      };
      f.getVideoRepresentationIDAtTime = function (a) {
        return this.$Player112(a, 'video');
      };
      f.getCurrentVideoRepresentation = function () {
        return this.$Player113('video');
      };
      f.getCurrentAudioRepresentation = function () {
        return this.$Player113('audio');
      };
      f.$Player113 = function (a) {
        var b = this.$Player112(this.$Player13.getCurrentTime(), a),
          c = this.$Player9;
        if (!c) return null;
        var d = [];
        a === 'audio'
          ? (d = c.getAudioRepresentations())
          : a === 'video' && (d = c.getVideoRepresentations());
        return (a = d.find(function (a) {
          return a.getID() === b;
        })) != null
          ? a
          : null;
      };
      f.getSelectedVideoRepresentation = function () {
        var a = this.$Player5.get('video');
        return a != null ? a.getCurrentRepresentation() : null;
      };
      f.getSelectedAudioRepresentation = function () {
        var a = this.$Player5.get('audio');
        return a != null ? a.getCurrentRepresentation() : null;
      };
      f.getDebug = function () {
        var a = this,
          b = this.$Player5.get('video'),
          c = this.$Player5.get('audio'),
          d = this.$Player5.get('caption'),
          e,
          f,
          g,
          i,
          j,
          k,
          l;
        if (b) {
          var m;
          e = (m = b.getDebug()) == null ? void 0 : m.MediaStreamAbrManager;
          f = (m = b.getDebug()) == null ? void 0 : m.SourceBufferManager;
          if (f) {
            g = (m = f.getDebug()) == null ? void 0 : m.SourceBuffer;
          }
        }
        if (c) {
          i = (m = c.getDebug()) == null ? void 0 : m.SourceBufferManager;
          if (i) {
            j = (m = i.getDebug()) == null ? void 0 : m.SourceBuffer;
          }
        }
        if (d) {
          k = (m = d.getDebug()) == null ? void 0 : m.SourceBufferManager;
          if (k) {
            l = (m = k.getDebug()) == null ? void 0 : m.SourceBuffer;
          }
        }
        return {
          getManifest: function () {
            return h(a.$Player9);
          },
          indentifiersIntact: !0,
          VideoSourceStream: b,
          VideoAbrManager: e,
          VideoBufferManager: f,
          VideoSourceBuffer: g,
          AudioSourceStream: c,
          AudioBufferManager: i,
          AudioSourceBuffer: j,
          CaptionSourceStream: d,
          CaptionBufferManager: k,
          CaptionSourceBuffer: l,
        };
      };
      f.injectExternalDebugEvent = function (a, b) {
        this.$Player100(a, b);
      };
      f.$Player100 = function (a, b) {
        this.emit('debug/dashPlayerEvent', { detail: { type: a, event: b } });
      };
      f.$Player75 = function () {
        var a = this,
          b = new (c('oz-player/strategies/OzBufferingDetector'))(
            this.$Player3,
            this.$Player4.getLegacyConfig(),
            function () {
              return a.$Player49 ? a.$Player3.duration : Infinity;
            },
          );
        b.attachPerfLoggerProvider(this.$Player15);
        this.$Player10.addSubscriptions(
          b.addListener('enterBuffering', function (b) {
            a.emit('enterBuffering', b);
          }),
          b.addListener('leaveBuffering', function (b) {
            a.emit('leaveBuffering', b);
          }),
        );
        return b;
      };
      f.$Player95 = function () {
        var a = this.$Player50
          ? this.$Player50()
          : {
              width: this.$Player3.offsetWidth,
              height: this.$Player3.offsetHeight,
            };
        return a;
      };
      f.getMpdUrl = function () {
        return this.$Player17;
      };
      f.$Player91 = function (a) {
        var b = this;
        this.$Player17 = a;
        var c = this.$Player9;
        if (!c) {
          this.$Player58 = !0;
          return;
        } else {
          c.updateLocation(a);
          this.$Player41 &&
            (this.$Player10.releaseOne(this.$Player41),
            (this.$Player41 = null));
          a = function () {
            b.$Player41 &&
              (b.$Player10.releaseOne(b.$Player41), (b.$Player41 = null)),
              b.$Player5.forEach(function (a, d) {
                var e = a.getCurrentRepresentation(),
                  f = e.getQualityLabel();
                e = (
                  d === 'video'
                    ? c.getVideoRepresentations()
                    : c.getAudioRepresentations()
                ).slice();
                if (d === 'video') {
                  d = b.$Player6.get(d);
                  d && d.updateRepresentations(c.getVideoRepresentations());
                }
                d = e[0];
                e.forEach(function (a) {
                  var b = a.getQualityLabel();
                  b === f && (d = a);
                });
                a.switchRepresentation(d);
                a.restartLoopBody();
              });
          };
          this.$Player41 = c.addListener('updated', a);
          this.$Player10.addSubscriptions(this.$Player41);
        }
      };
      f.getPerfLoggerProvider = function () {
        return this.$Player15;
      };
      f.getApproximateFBLSToPlayerDisplayLatency = function () {
        var a, b;
        a = Number(
          (a =
            (a = this.$Player9) == null
              ? void 0
              : a.getCustomField('lastVideoFrameTs')) != null
            ? a
            : void 0,
        );
        b = Number(
          (b =
            (b = this.$Player9) == null
              ? void 0
              : b.getCustomField('currentServerTimeMs')) != null
            ? b
            : void 0,
        );
        var c = this.$Player114(a, b);
        a = this.$Player115(a, b);
        return { latencyFromClockSync: a, latencyFromMpdUpdate: c };
      };
      f.$Player114 = function (a, b) {
        if (!this.$Player13.getCurrentTime() || isNaN(a) || isNaN(b))
          return null;
        b = 0;
        this.$Player56 === a
          ? (b =
              (c('oz-player/shims/OzPerformance').now() -
                Number(this.$Player57)) /
              1e3)
          : ((this.$Player57 = c('oz-player/shims/OzPerformance').now()),
            (this.$Player56 = a));
        a = a / 1e3 + b - this.$Player13.getCurrentTime();
        return a;
      };
      f.$Player115 = function (a, b) {
        var d;
        if (
          !this.$Player13.getCurrentTime() ||
          isNaN(a) ||
          isNaN(b) ||
          c('oz-player/networks/OzClientClock').getClientClockOffsetMs() ==
            null ||
          !c('oz-player/networks/OzClientClock').getClientClockOffsetMs()
        )
          return null;
        d =
          this.$Player13.getCurrentTimeUpdateTime() +
          ((d = c(
            'oz-player/networks/OzClientClock',
          ).getClientClockOffsetMs()) != null
            ? d
            : 0);
        b = b;
        var e = this.$Player13.getCurrentTime() * 1e3;
        a = a;
        d = (d - b - (e - a)) / 1e3;
        return d;
      };
      f.$Player73 = function () {
        this.$Player5.forEach(function (a) {
          a.restartLoopBody();
          var b = a.getCurrentRepresentation();
          a.switchRepresentation(b);
        });
      };
      return e;
    })(c('oz-player/shims/OzEventEmitter'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player',
  ['oz-player/Player'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = c('oz-player/Player');
  },
  98,
);
__d(
  'oz-player/media_source/SourceBufferManagerUtils',
  ['oz-player/utils/OzSourceBufferUtil'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, c) {
      var e = d('oz-player/utils/OzSourceBufferUtil').getEndBufferedTime(b);
      return function () {
        var a = d('oz-player/utils/OzSourceBufferUtil').getEndBufferedTime(b);
        return { startTime: e, endTime: a };
      };
    }
    g.startMeasuringAppendedBuffer = a;
  },
  98,
);
__d(
  'oz-player/states/OzObservedSourceBufferState',
  [
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/utils/OzFakeEventTarget',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$OzObservedSourceBufferState2 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        e.$OzObservedSourceBufferState3 = [];
        e.$OzObservedSourceBufferState6 = function () {
          var a;
          try {
            a = e.$OzObservedSourceBufferState1.getBuffered();
          } catch (a) {
            if (a.name === 'InvalidStateError') {
              e.$OzObservedSourceBufferState3 = [];
              return;
            } else throw a;
          }
          var b = [];
          for (var c = 0; c < a.length; c++)
            b.push({ startTime: a.start(c), endTime: a.end(c) });
          e.$OzObservedSourceBufferState3 = b;
        };
        e.$OzObservedSourceBufferState1 = b;
        e.$OzObservedSourceBufferState4 = d;
        e.$OzObservedSourceBufferState5();
        return e;
      }
      var d = b.prototype;
      d.$OzObservedSourceBufferState5 = function () {
        var a = this;
        this.$OzObservedSourceBufferState2.release();
        this.$OzObservedSourceBufferState2 = new (c(
          'oz-player/shims/OzSubscriptionsHandler',
        ))();
        this.$OzObservedSourceBufferState2.addSubscriptions(
          this.$OzObservedSourceBufferState1.registerOnUpdateEndListener(
            function () {
              a.$OzObservedSourceBufferState6(),
                a.dispatchEvent('buffer_updated');
            },
          ),
          this.$OzObservedSourceBufferState1.registerOnErrorListener(
            this.$OzObservedSourceBufferState6,
          ),
        );
      };
      d.setSourceBuffer = function (a) {
        (this.$OzObservedSourceBufferState1 = a),
          this.$OzObservedSourceBufferState5(),
          this.$OzObservedSourceBufferState6();
      };
      d.getBufferedRanges = function () {
        return this.$OzObservedSourceBufferState3;
      };
      d.destroy = function () {
        a.prototype.destroy.call(this),
          this.$OzObservedSourceBufferState2.release(),
          this.$OzObservedSourceBufferState2.engage();
      };
      return b;
    })(c('oz-player/utils/OzFakeEventTarget'));
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/media_source/SourceBufferManager',
  [
    'Promise',
    'oz-player/loggings/OzLoggingUtils',
    'oz-player/media_source/SourceBufferManagerUtils',
    'oz-player/shims/OzDOMEventListener',
    'oz-player/shims/OzDeferred',
    'oz-player/shims/OzMaybeNativePromise',
    'oz-player/shims/OzStreams',
    'oz-player/shims/OzSubscriptionsHandler',
    'oz-player/states/OzObservedSourceBufferState',
    'oz-player/utils/OzCustomErrorCode',
    'oz-player/utils/OzError',
    'oz-player/utils/ozConcatUint8Arrays',
    'oz-player/workers/OzProxyVideoNode',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a, b, d, e, f, g) {
        var h = this;
        g === void 0 && (g = null);
        this.$3 = null;
        this.$4 = new (c('oz-player/shims/OzSubscriptionsHandler'))();
        this.$6 = !1;
        this.$7 = [];
        this.$11 = !1;
        this.$12 = !1;
        this.$14 = 0;
        this.$27 = function () {
          if (h.$9.hasError()) {
            h.$12 = !1;
            h.$11 = !1;
            var a = h.$9.getMediaErrorName();
            a = a != null ? a : 'An unknown source buffer error occurred.';
            var b = h.$9.getErrorCode();
            b =
              b != null
                ? String(b)
                : c('oz-player/utils/OzCustomErrorCode')
                    .SOURCE_BUFFER_MANAGER_UPDATEEND_UNKNOWN_ERROR;
            a = new (c('oz-player/utils/OzError'))({
              type: 'OZ_SOURCE_BUFFER',
              description: a,
              extra: { code: b },
            });
            h.$3 && h.$3.reject(a);
            h.$3 = null;
            h.cancelOperationAndCleanQueue();
          } else if (!h.$12) {
            h.$12 = !0;
            var d = h.$9.getVideoNode(),
              e = h.$27;
            d instanceof c('oz-player/workers/OzProxyVideoNode')
              ? (d.addEventListener('error', e),
                (b = {
                  remove: function () {
                    d.removeEventListener('error', e);
                  },
                }))
              : (b = c('oz-player/shims/OzDOMEventListener').listenDOMEvent(
                  d,
                  'error',
                  e,
                ));
            h.$4.addSubscriptions(b);
          }
        };
        this.$17 = function () {
          var a = h.$1;
          if (a != null) {
            a.getOperationLogger('source_buffer_updateend')
              .setError((a = h.$9.getMediaErrorName()) != null ? a : void 0)
              .setCode(h.$9.getErrorCode())
              .setResult(h.$11 ? 'failed' : 'success')
              .log();
          }
          a = h.$3;
          a && (h.$11 ? h.$27() : (a.resolve(), h.$3 && (h.$3 = null)));
        };
        this.$18 = function () {
          var a = h.$1;
          if (a != null) {
            a.getOperationLogger('source_buffer_error')
              .setError((a = h.$9.getMediaErrorName()) != null ? a : void 0)
              .setCode(h.$9.getErrorCode())
              .setResult('failed')
              .log();
          }
          h.$11 = !0;
        };
        this.$1 = g;
        this.$2 = a;
        this.$10 = b;
        this.$16();
        this.$8 = new (c('oz-player/states/OzObservedSourceBufferState'))(
          this.$2,
          this.$10,
        );
        this.$9 = d;
        this.$13 = e;
        this.$15 = f;
      }
      var e = a.prototype;
      e.$16 = function () {
        this.$4.release(),
          (this.$4 = new (c('oz-player/shims/OzSubscriptionsHandler'))()),
          this.$4.addSubscriptions(
            this.$2.registerOnUpdateEndListener(this.$17),
            this.$2.registerOnErrorListener(this.$18),
          );
      };
      e.setSourceBuffer = function (a) {
        if (a == null) return;
        this.cancelOperationAndCleanQueue();
        this.$2 = a;
        this.$16();
        this.$8.setSourceBuffer(a);
      };
      e.queueData = function (a, b, d) {
        b === void 0 && (b = null);
        d === void 0 && (d = 0);
        var e = new (c('oz-player/shims/OzDeferred'))(
          c('oz-player/shims/OzMaybeNativePromise'),
        );
        this.$7.push({
          data: a,
          deferred: e,
          loggerProvider: b,
          appendTarget: d,
        });
        a = e.getPromise();
        this.$6 || this.$19()['catch'](function (a) {});
        return a;
      };
      e.cancelOperationAndCleanQueue = function (a) {
        a === void 0 && (a = null);
        a &&
          a
            .cloneContext()
            .getOperationLogger('source_buffer_cancel_and_clean')
            .log();
        var b = this.$20('cancel and clean');
        this.$7.forEach(function (a) {
          a = a.deferred;
          a.reject(b);
        });
        this.$7 = [];
        try {
          this.$13(this.$2) && (this.$9.hasError() || this.$2.abort());
        } catch (b) {
          var c = b;
          a &&
            a
              .cloneContext()
              .getOperationLogger('cancel_operation_abort_failed')
              .setError(c)
              .setReason(this.$15 ? this.$15() : null)
              .log();
        }
        a = this.$3;
        a && a.reject(b);
        this.$5 && (this.$5.reject(b), (this.$5 = null));
      };
      e.getSourceBufferState = function () {
        return this.$8;
      };
      e.$21 = function (a, b) {
        a = Math.max(a, 0);
        b > 0 && b > a && this.$2.remove(a, b);
      };
      e.$22 = function (a, b) {
        a = Math.max(a, 0);
        if (b > 0 && b > a) {
          var d = this.$23();
          this.$21(a, b);
          return d;
        }
        return c('oz-player/shims/OzMaybeNativePromise').resolve();
      };
      e.clearRangeWithWait = function (a) {
        var c = this;
        this.cancelOperationAndCleanQueue();
        return a.reduce(function (a, b) {
          var d = b.fromTime,
            e = b.toTime;
          return a.then(function () {
            return c.$22(d, e);
          });
        }, b('Promise').resolve());
      };
      e.$23 = function (a) {
        var b = (this.$3 = new (c('oz-player/shims/OzDeferred'))(
          c('oz-player/shims/OzMaybeNativePromise'),
        ));
        b = b.getPromise();
        a &&
          d('oz-player/loggings/OzLoggingUtils').monitorPromiseAndLogOperation(
            b,
            a,
            'wait_for_source_buffer',
          );
        return b;
      };
      e.$24 = function (a, b, e) {
        var f = this,
          g = function () {
            var g = (f.$3 = new (c('oz-player/shims/OzDeferred'))(
                c('oz-player/shims/OzMaybeNativePromise'),
              )),
              h = !1,
              i = !0;
            try {
              i = !!f.$2.getBuffered();
            } catch (a) {
              i = !1;
            }
            try {
              h = f.$2.getIsUpdating();
              if (i) f.$2.appendBuffer(a);
              else {
                g.resolve();
                return g.getPromise();
              }
            } catch (a) {
              i = a;
              var j = c(
                  'oz-player/utils/OzCustomErrorCode',
                ).APPEND_BUFFER_UNKNOWN_ERROR,
                k = i.name,
                l = i.message;
              k === 'QuotaExceededError'
                ? (j = c(
                    'oz-player/utils/OzCustomErrorCode',
                  ).APPEND_BUFFER_QUOTA_EXCEEDED_ERROR)
                : f.$9.hasError()
                ? (j = c(
                    'oz-player/utils/OzCustomErrorCode',
                  ).APPEND_BUFFER_MEDIA_ERROR_ATTRIBUTE_NOT_NULL)
                : h
                ? (j = c(
                    'oz-player/utils/OzCustomErrorCode',
                  ).APPEND_BUFFER_SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE)
                : k === 'InvalidStateError' &&
                  typeof l === 'string' &&
                  /SourceBuffer has been removed/.test(l)
                ? (j = c(
                    'oz-player/utils/OzCustomErrorCode',
                  ).APPEND_BUFFER_INVALID_STATE_ERROR_SOURCE_BUFFER_HAS_BEEN_REMOVED)
                : k === 'InvalidStateError' &&
                  (j = c(
                    'oz-player/utils/OzCustomErrorCode',
                  ).APPEND_BUFFER_INVALID_STATE_ERROR);
              h = new (c('oz-player/utils/OzError'))({
                type:
                  k === 'QuotaExceededError'
                    ? 'OZ_SOURCE_BUFFER_QUOTA_EXCEEDED'
                    : 'OZ_SOURCE_BUFFER',
                description: String(l),
                extra: { originalError: i, code: j },
              });
              f.$3 = null;
              g.reject(h);
            }
            k = g.getPromise();
            b &&
              d(
                'oz-player/loggings/OzLoggingUtils',
              ).monitorPromiseAndLogOperation(k, b, 'append', function (b) {
                var c;
                b.setLength(a.byteLength);
                c =
                  (c = e == null ? void 0 : e.appendTarget) != null ? c : null;
                b.setAppendTarget(c);
              });
            return k;
          };
        if (this.$2.getIsUpdating())
          return this.$23(b)
            .then(g)
            ['catch'](function (a) {
              throw a;
            });
        this.$14 += a.byteLength;
        return g();
      };
      e.$19 = function () {
        var a = this;
        if (this.$6)
          return c('oz-player/shims/OzMaybeNativePromise').reject(
            this.$25('Another unit of queued data is being appended.'),
          );
        var b = this.$7.shift();
        if (!b) {
          this.$6 = !1;
          return c('oz-player/shims/OzMaybeNativePromise').resolve();
        }
        var e = b.data,
          f = b.deferred,
          g = b.loggerProvider;
        b = b.appendTarget;
        this.$6 = !0;
        e =
          e instanceof d('oz-player/shims/OzStreams').OzReadableStream
            ? this.$26(e, g, b)
            : this.$24(e, g, { appendTarget: b });
        var h = d(
          'oz-player/media_source/SourceBufferManagerUtils',
        ).startMeasuringAppendedBuffer(this.$10, this.$2, this.$8);
        return e['catch'](function (a) {
          f.reject(a);
        }).then(function () {
          var b = h(),
            c = b.startTime;
          b = b.endTime;
          f.resolve({
            startTime_UNSAFE: c,
            endTime_UNSAFE: b,
            appendedSec: b - c,
          });
          a.$6 = !1;
          a.$19()['catch'](function (a) {});
        });
      };
      e.$26 = function (a, b, d) {
        var e = this,
          f = [],
          g = 0,
          h = a.getReader();
        a = function a() {
          var i = new (c('oz-player/shims/OzDeferred'))(
            c('oz-player/shims/OzMaybeNativePromise'),
          );
          e.$5 = i;
          h.read()
            .then(function (a) {
              i.resolve(a), (e.$5 = null);
            })
            ['catch'](function (a) {
              i.reject(a), (e.$5 = null);
            });
          return i.getPromise().then(
            function (h) {
              if (h.done) {
                var i = c('oz-player/utils/ozConcatUint8Arrays')(f);
                i = i.buffer;
                f.length = 0;
                g = 0;
                return i.byteLength > 0
                  ? e.$24(i, b, { appendTarget: d })
                  : c('oz-player/shims/OzMaybeNativePromise').resolve();
              }
              i = h.value;
              h = i;
              if (d > 0) {
                i = i instanceof Uint8Array ? i : new Uint8Array(i);
                f.push(i);
                g += i.byteLength;
                if (g >= d) {
                  i = c('oz-player/utils/ozConcatUint8Arrays')(f);
                  i = i.buffer;
                  f.length = 0;
                  g = 0;
                  h = i;
                }
              }
              return h && h.byteLength >= d
                ? e.$24(h, b, { appendTarget: d }).then(function () {
                    return a();
                  })
                : a();
            },
            function (a) {
              e.$2.abort();
              return c('oz-player/shims/OzMaybeNativePromise').reject(a);
            },
          );
        };
        return a();
      };
      e.$25 = function (a) {
        var b = this.$1;
        b != null &&
          b
            .getOperationLogger('source_buffer_invariant')
            .setError(a)
            .setResult('failed')
            .log();
        b = new Error(a);
        b.name = 'invariant_violation';
        return b;
      };
      e.$20 = function (a) {
        a = new Error('operation is cancelled: ' + a);
        a.name = 'cancelled';
        return a;
      };
      e.destroy = function () {
        var a = this,
          b = this.$1;
        b && b.cloneContext().getOperationLogger('source_buffer_destroy').log();
        b = this.$3;
        b &&
          (!this.$12
            ? (b.reject(this.$20('destroyed')),
              (this.$3 = null),
              this.$4.release(),
              (this.$4 = new (c('oz-player/shims/OzSubscriptionsHandler'))()))
            : b.getPromise()['catch'](function () {
                (a.$3 = null),
                  a.$4.release(),
                  (a.$4 = new (c('oz-player/shims/OzSubscriptionsHandler'))());
              }));
        this.$8.destroy();
      };
      e.getDebug = function () {
        return { SourceBuffer: this.$2 };
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
__d(
  'oz-player/shims/www/getOzVTTSourceBufferImplLazyWWW',
  ['JSResourceForInteraction'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('JSResourceForInteraction')('OzVTTSourceBufferImpl').__setRef(
      'oz-player/shims/www/getOzVTTSourceBufferImplLazyWWW',
    );
    function a() {
      return h.load();
    }
    g['default'] = a;
  },
  98,
);
__d(
  'MaybeNativePromise',
  ['Promise'],
  function (a, b, c, d, e, f) {
    'use strict';
    c = a.Promise || b('Promise');
    b('Promise').resolve();
    d = c;
    f['default'] = d;
  },
  66,
);
