__d(
  'CometProfilePhoto.react',
  [
    'BaseSvgImage.react',
    'CometErrorBoundary.react',
    'CometImage.react',
    'CometLoadingAnimation.react',
    'CometPlaceholder.react',
    'CometPressable.react',
    'CometPressableChildrenWithOverlay.react',
    'CometPressableOverlay.react',
    'CometProfilePhotoAvailabilityBadge.react',
    'CometProfilePhotoLastActiveTimeBadge.react',
    'CometProfilePhotoNotificationBadge.react',
    'CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react',
    'CometSSRSuspendOnServer.react',
    'CometTrackingNodeProvider.react',
    'CometVisualCompletionAttributes',
    'LazyCometProfileVideoSection.react',
    'profilePhotoUtils',
    'react',
    'stylex',
    'useCometUniqueID',
    'useSetAttributeRef',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        activityBadge: {
          alignItems: 'x6s0dn4',
          borderBottomStyle: 'x1q0q8m5',
          borderBottomWidth: 'x1qhh985',
          borderEndStyle: 'xu3j5b3',
          borderEndWidth: 'xcfux6l',
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          borderStartStyle: 'x26u7qi',
          borderStartWidth: 'xm0m39n',
          borderTopStyle: 'x13fuv20',
          borderTopWidth: 'x972fbf',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          flexShrink: 'xs83m0k',
          justifyContent: 'xl56j7k',
          marginBottom: 'xat24cr',
          marginEnd: 'x11i5rnm',
          marginStart: 'x1mh8g0r',
          marginTop: 'xdj266r',
          minHeight: 'x2lwn1j',
          minWidth: 'xeuugli',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          paddingBottom: 'x18d9i69',
          paddingEnd: 'x4uap5',
          paddingStart: 'xkhd6sd',
          paddingTop: 'xexx8yu',
          position: 'x1n2onr6',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        activityIcon10: {
          height: 'x17rw0jw',
          paddingTop: 'x123j3cw',
          paddingEnd: 'x1mpkggp',
          paddingBottom: 'xs9asl8',
          paddingStart: 'x1t2a60a',
          width: 'x17z2i9w',
          $$css: !0,
        },
        activityIcon16: {
          height: 'xd7y6wv',
          paddingTop: 'x123j3cw',
          paddingEnd: 'x1mpkggp',
          paddingBottom: 'xs9asl8',
          paddingStart: 'x1t2a60a',
          width: 'x23j0i4',
          $$css: !0,
        },
        activityIcon8: { height: 'x1v9usgg', width: 'x6jxa94', $$css: !0 },
        badge: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          position: 'x10l6tqk',
          zIndex: 'xhtitgo',
          $$css: !0,
        },
        badgeWithBorder: {
          borderTopColor: 'x1aoij9j',
          borderEndColor: 'xxpsvdv',
          borderBottomColor: 'x2e7n7m',
          borderStartColor: 'x9387xi',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          $$css: !0,
        },
        badgeWithLastActiveTime: {
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          end: 'xds687c',
          justifyContent: 'x13a6bvl',
          start: 'x17qophe',
          $$css: !0,
        },
        badgeWithShadow: { boxShadow: 'x14ihvte', $$css: !0 },
        insetSVG: {
          fill: 'xbh8q5q',
          stroke: 'x1pwv2dq',
          strokeWidth: 'xvlca1e',
          $$css: !0,
        },
        photo: { verticalAlign: 'x3ajldb', $$css: !0 },
        photoCircle: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          $$css: !0,
        },
        photoRoundedRect: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          $$css: !0,
        },
        pressable: { color: 'xzsf02u', display: 'x1rg5ohu', $$css: !0 },
        pressed: { transform: 'x1n5d1j9', $$css: !0 },
        storyRingBlue: { stroke: 'x1p5r69i', $$css: !0 },
        storyRingGray: { stroke: 'x1tbtn3x', $$css: !0 },
        storyRingGreen: { stroke: 'x1cm6qz0', $$css: !0 },
        storyRingRed: { stroke: 'x1c97i5p', $$css: !0 },
        storyRingSize2: { strokeWidth: 'xvlca1e', $$css: !0 },
        storyRingSize3: { strokeWidth: 'xqjr0vm', $$css: !0 },
        storyRingSize4: { strokeWidth: 'x17ld789', $$css: !0 },
        svgOverlay: { fill: 'x1tgjyoi', $$css: !0 },
        videoContainer: {
          WebkitMaskImage: 'x1u31j2f',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          $$css: !0,
        },
        videoContainerRectRounded: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          $$css: !0,
        },
        videoContainerRounded: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          $$css: !0,
        },
        wrapper: {
          display: 'x1rg5ohu',
          position: 'x1n2onr6',
          verticalAlign: 'x3ajldb',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
      };
    function a(a, b) {
      var e = a.addOn,
        f = a.addOnTopEnd,
        g = a.alt,
        k = a.children,
        l = a.cursorDisabled,
        m = a.isOverlapped,
        n = m === void 0 ? !1 : m,
        o = a.linkProps,
        p = a.onHoverIn,
        q = a.onHoverOut,
        r = a.onPress,
        s = a.onPressIn;
      m = a.overlayDisabled;
      m = m === void 0 ? !1 : m;
      a.preview;
      var t = a.profileVideo,
        u = a.shape,
        v = u === void 0 ? 'circle' : u;
      u = a.shouldShowCloseFriendsBadge;
      var w = u === void 0 ? !1 : u,
        x = a.size,
        y = a.source;
      u = a.storyStatus;
      var z = u === void 0 ? 'none' : u;
      u = a.testid;
      u = a.testOnly_pressed;
      a.testOnly_previewDelay;
      var A = babelHelpers.objectWithoutPropertiesLoose(a, [
          'addOn',
          'addOnTopEnd',
          'alt',
          'children',
          'cursorDisabled',
          'isOverlapped',
          'linkProps',
          'onHoverIn',
          'onHoverOut',
          'onPress',
          'onPressIn',
          'overlayDisabled',
          'preview',
          'profileVideo',
          'shape',
          'shouldShowCloseFriendsBadge',
          'size',
          'source',
          'storyStatus',
          'testid',
          'testOnly_pressed',
          'testOnly_previewDelay',
        ]),
        B = c('useCometUniqueID')(),
        C = c('useSetAttributeRef')('id', B),
        D = 'url(#' + B + ')',
        E = c('useSetAttributeRef')('mask', D),
        F = function (a, b) {
          var l,
            m = a.overlay;
          a = a.pressed;
          var u = z !== 'none' ? d('profilePhotoUtils').getStoryRingSize(x) : 0,
            F = d('profilePhotoUtils').getBadgePosition(x / 2, !0),
            G = d('profilePhotoUtils').getBadgeSizeAndStrokeWidth(
              x,
              e == null ? void 0 : e.type,
            ),
            H = G[0];
          G = G[1];
          var I = t != null ? { borderWidth: G } : {},
            J =
              (e == null ? void 0 : e.type) === 'lastActiveTimeBadge' && x > 28,
            K = J ? {} : d('profilePhotoUtils').getBadgePosition(x / 2, !1);
          J =
            e != null
              ? h.jsx(
                  'div',
                  babelHelpers['extends'](
                    {
                      className:
                        'x14yjl9h xudhj91 x18nykt9 xww2gxu x10l6tqk xhtitgo' +
                        ((e.type === 'activityBadge' &&
                        (t != null || e.withBorder)
                          ? ' x1aoij9j xxpsvdv x2e7n7m x9387xi x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi'
                          : '' +
                            (x === 60 && e.type === 'activityBadge'
                              ? ''
                              : '' + (J ? '' : ''))) +
                          ((J
                            ? ' x1ey2m1c x78zum5 xds687c x13a6bvl x17qophe'
                            : '') +
                            (x === 60 && e.type === 'activityBadge'
                              ? ' x14ihvte'
                              : ''))),
                    },
                    c('CometVisualCompletionAttributes').IGNORE,
                    {
                      style: babelHelpers['extends']({}, K, I),
                      children: h.jsx(j, { addOn: e, pressed: a, size: x }),
                    },
                  ),
                )
              : null;
          I =
            f != null
              ? h.jsx('div', {
                  className:
                    'x14yjl9h xudhj91 x18nykt9 xww2gxu x10l6tqk xhtitgo',
                  'data-testid': void 0,
                  style: babelHelpers['extends']({}, F),
                  children: h.jsx(
                    c('CometProfilePhotoNotificationBadge.react'),
                    { number: f.number },
                  ),
                })
              : null;
          var L =
            typeof y.uri === 'string'
              ? h.jsx(c('BaseSvgImage.react'), {
                  src: y.uri,
                  style: { height: x - u * 4, width: x - u * 4 },
                  x: 2 * u,
                  y: 2 * u,
                })
              : h.jsx(c('CometImage.react'), {
                  alt: g,
                  height: x - 4 * u,
                  src: y.uri,
                  testid: void 0,
                  width: x - 4 * u,
                  xstyle: [
                    i.photo,
                    v === 'circle' && i.photoCircle,
                    v === 'roundedRect' && i.photoRoundedRect,
                  ],
                });
          H =
            typeof y.uri === 'string'
              ? h.jsxs(
                  'svg',
                  babelHelpers['extends'](
                    {
                      'aria-hidden': g == null ? !0 : void 0,
                      'aria-label': g,
                      className: 'x3ajldb',
                    },
                    c('CometVisualCompletionAttributes').IGNORE_DYNAMIC,
                    {
                      role: g != null ? 'img' : 'none',
                      style: { height: x, width: x },
                      children: [
                        h.jsxs('mask', {
                          id: B,
                          ref: C,
                          suppressHydrationWarning: !0,
                          children: [
                            v === 'circle'
                              ? h.jsx('circle', {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: 'white',
                                  r: x / 2,
                                })
                              : h.jsx('rect', {
                                  cy: x / 2,
                                  fill: 'white',
                                  height: x,
                                  rx: v === 'square' ? 0 : 8,
                                  ry: v === 'square' ? 0 : 8,
                                  width: x,
                                  x: 0,
                                  y: 0,
                                }),
                            h.jsx(
                              c(
                                'CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react',
                              ),
                              {
                                useSuspenseDirectlyForSVG: !0,
                                children:
                                  J != null &&
                                  (e == null ? void 0 : e.type) !== 'trigger' &&
                                  (e == null ? void 0 : e.type) !==
                                    'lastActiveTimeBadge' &&
                                  (e == null ? void 0 : e.backgroundColor) !==
                                    'none' &&
                                  h.jsx(
                                    'circle',
                                    babelHelpers['extends'](
                                      {
                                        cx:
                                          (l = K.left) != null
                                            ? l
                                            : x -
                                              ((l = K.right) != null ? l : 0),
                                        cy:
                                          (l = K.top) != null
                                            ? l
                                            : x -
                                              ((l = K.bottom) != null ? l : 0),
                                      },
                                      c('CometVisualCompletionAttributes')
                                        .IGNORE,
                                      {
                                        fill: 'black',
                                        r: Math.max(
                                          (e == null ? void 0 : e.type) ===
                                            'activityBadge'
                                            ? 8
                                            : 0,
                                          H / 2 + G,
                                        ),
                                      },
                                    ),
                                  ),
                              },
                            ),
                            I != null &&
                              f != null &&
                              f.type === 'notificationBadge' &&
                              h.jsx('rect', {
                                height: 22,
                                rx: 11,
                                ry: 11,
                                width:
                                  f.number <= 9 ? 22 : f.number <= 99 ? 33 : 44,
                                x:
                                  F.left != null
                                    ? F.left -
                                      (f.number <= 9
                                        ? 11
                                        : f.number <= 99
                                        ? 22
                                        : 33)
                                    : x - ((K = F.right) != null ? K : 0) - 11,
                                y:
                                  F.top != null
                                    ? F.top - 11
                                    : x - ((l = F.bottom) != null ? l : 0) - 11,
                              }),
                            z === 'uploading' && (x === 36 || x === 60)
                              ? h.jsx('circle', {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: 'transparent',
                                  r: x / 2 - 1 * u,
                                  stroke: 'black',
                                  strokeWidth: u * 2,
                                })
                              : z !== 'none' &&
                                u > 0 &&
                                h.jsx('circle', {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: 'transparent',
                                  r: x / 2 - 1.5 * u,
                                  stroke: 'black',
                                  strokeWidth: u,
                                }),
                            n &&
                              h.jsx('circle', {
                                cx: -x / 2 + 4,
                                cy: x / 2,
                                fill: 'black',
                                r: x / 2 + 2,
                              }),
                          ],
                        }),
                        h.jsxs('g', {
                          mask: D,
                          ref: E,
                          suppressHydrationWarning: !0,
                          children: [
                            t != null
                              ? h.jsx(c('CometErrorBoundary.react'), {
                                  fallback: function () {
                                    return L;
                                  },
                                  children: h.jsx(c('CometPlaceholder.react'), {
                                    fallback: L,
                                    children: h.jsx(
                                      c('CometSSRSuspendOnServer.react'),
                                      {
                                        children: h.jsx('foreignObject', {
                                          height: '100%',
                                          width: '100%',
                                          x: 2 * u,
                                          y: 2 * u,
                                          children: h.jsx('div', {
                                            className:
                                              'x1u31j2f x6ikm8r x10wlt62' +
                                              (v === 'circle'
                                                ? ' x14yjl9h xudhj91 x18nykt9 xww2gxu'
                                                : '' +
                                                  (v === 'roundedRect'
                                                    ? ' x1lq5wgf xgqcy7u x30kzoy x9jhf4c'
                                                    : '')),
                                            style: {
                                              height: x - u * 4,
                                              width: x - u * 4,
                                            },
                                            children: h.jsx(
                                              c(
                                                'LazyCometProfileVideoSection.react',
                                              ),
                                              babelHelpers['extends'](
                                                {
                                                  linkProps: o,
                                                  onHoverIn: p,
                                                  onHoverOut: q,
                                                  onPress: r,
                                                  onPressIn: s,
                                                  profileVideo: t,
                                                  size: x - u * 4,
                                                  thumbnailUri: y.uri,
                                                },
                                                A,
                                              ),
                                            ),
                                          }),
                                        }),
                                      },
                                    ),
                                  }),
                                })
                              : L,
                            v === 'circle'
                              ? h.jsx('circle', {
                                  className:
                                    'x1pwv2dq xvlca1e' +
                                    (a ? ' x1tgjyoi' : ' xbh8q5q'),
                                  cx: x / 2,
                                  cy: x / 2,
                                  r: x / 2,
                                })
                              : h.jsx('rect', {
                                  className:
                                    'x1pwv2dq xvlca1e' +
                                    (a ? ' x1tgjyoi' : ' xbh8q5q'),
                                  cy: x / 2,
                                  fill: 'white',
                                  height: x,
                                  rx: v === 'square' ? 0 : 8,
                                  ry: v === 'square' ? 0 : 8,
                                  width: x,
                                  x: 0,
                                  y: 0,
                                }),
                            z === 'uploading' && (x === 36 || x === 60)
                              ? null
                              : z !== 'none' &&
                                u > 0 &&
                                h.jsx('circle', {
                                  className: c('stylex')(
                                    z === 'unseen' &&
                                      (w ? i.storyRingGreen : i.storyRingBlue),
                                    z === 'seen' && i.storyRingGray,
                                    z === 'live' && i.storyRingRed,
                                    u === 4 && i.storyRingSize4,
                                    u === 3 && i.storyRingSize3,
                                    u === 2 && i.storyRingSize2,
                                  ),
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: 'transparent',
                                  r: x / 2 - u / 2,
                                  stroke: 'var(--accent)',
                                  strokeWidth: u,
                                }),
                          ],
                        }),
                        z === 'uploading' &&
                          (x === 36 || x === 60) &&
                          h.jsx('g', {
                            style: {
                              transform:
                                'scale(' + (x - Math.floor(x / 30)) / x + ')',
                            },
                            children: h.jsx(c('CometLoadingAnimation.react'), {
                              size: x,
                            }),
                          }),
                      ],
                    },
                  ),
                )
              : L;
          return h.jsxs('div', {
            className: 'x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z',
            ref: b,
            children: [
              H,
              k,
              m,
              h.jsx(
                c(
                  'CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react',
                ),
                { children: J },
              ),
              I,
            ],
          });
        };
      return !r && !o && u !== !0
        ? F({ pressed: !1 }, b)
        : h.jsx(c('CometTrackingNodeProvider.react'), {
            trackingNode: 3,
            children: h.jsx(
              c('CometPressable.react'),
              babelHelpers['extends']({}, A, {
                cursorDisabled: l,
                linkProps: o,
                onHoverIn: p,
                onHoverOut: q,
                onPress: r,
                onPressIn: s,
                overlayDisabled: m,
                overlayRadius:
                  v === 'circle' ? '50%' : v === 'roundedRect' ? 8 : 0,
                ref: b,
                testOnly_pressed: u,
                testid: void 0,
                xstyle: function (a) {
                  a = a.pressed;
                  return [i.pressable, a && i.pressed];
                },
                children: function (a) {
                  var b = a.overlay;
                  a = a.pressed;
                  return F({ overlay: b, pressed: a }, null);
                },
              }),
            ),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function j(a) {
      var b = a.addOn,
        e = a.pressed;
      a = a.size;
      switch (b.type) {
        case 'availabilityBadge':
          a = d('profilePhotoUtils').getBadgeSizeAndStrokeWidth(
            a,
            b == null ? void 0 : b.type,
          );
          a = a[0];
          return h.jsx(c('CometProfilePhotoAvailabilityBadge.react'), {
            pressed: e,
            size: a,
          });
        case 'lastActiveTimeBadge':
          return h.jsx(c('CometProfilePhotoLastActiveTimeBadge.react'), {
            border: b.border,
            pressed: e,
            time: b.time,
          });
        case 'activityBadge':
          return h.jsx(k, {
            backgroundColor: b.backgroundColor,
            icon: b.icon,
            overflow: b.overflow,
            pressed: e,
            size: b.size,
          });
        case 'trigger':
          return b.icon;
        case 'multipleVoicesForAction':
          return b.badge;
        default:
          return null;
      }
    }
    j.displayName = j.name + ' [from ' + f.id + ']';
    function k(a) {
      var b = a.backgroundColor;
      b = b === void 0 ? 'white' : b;
      var d = a.icon,
        e = a.overflow,
        f = a.pressed;
      a = a.size;
      return h.jsx(c('CometPressableChildrenWithOverlay.react'), {
        overlay: h.jsx(c('CometPressableOverlay.react'), {
          offset: 0,
          pressed: f,
          radius: '50%',
        }),
        children: h.jsx('div', {
          className:
            'x6s0dn4 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x14yjl9h xudhj91 x18nykt9 xww2gxu x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xl56j7k xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x6ikm8r x10wlt62 x1n2onr6 x1ja2u2z' +
            (a === 16
              ? ' xs9asl8 x1mpkggp x1t2a60a x123j3cw xd7y6wv x23j0i4'
              : '' +
                (a === 10
                  ? ' xs9asl8 x1mpkggp x1t2a60a x123j3cw x17rw0jw x17z2i9w'
                  : ' x18d9i69 x4uap5 xkhd6sd xexx8yu' +
                    (a === 8 ? ' x1v9usgg x6jxa94' : ''))),
          style: { backgroundColor: b, overflow: e },
          children: d,
        }),
      });
    }
    k.displayName = k.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
