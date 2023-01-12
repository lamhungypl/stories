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
