__d(
  'CometTopNavTabRenderer.react',
  [
    'fbt',
    'CometErrorBoundary.react',
    'CometPlaceholder.react',
    'CometPressable.react',
    'CometTooltip.react',
    'qex',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = {
        badgeContainer: {
          position: 'x10l6tqk',
          start: 'x11f4b5y',
          top: 'x1v4kod4',
          $$css: !0,
        },
        hideMore: { display: 'x1s85apg', $$css: !0 },
        iconContainer: { position: 'x1n2onr6', $$css: !0 },
        link: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          height: 'x5yr21d',
          justifyContent: 'xl56j7k',
          position: 'x1n2onr6',
          width: 'xh8yej3',
          $$css: !0,
        },
        linkOverlayPressed: { backgroundColor: 'x1iutvsz', $$css: !0 },
        linkUnderline: {
          backgroundColor: 'xtvsq51',
          borderTopEndRadius: 'x11t77rh',
          borderTopStartRadius: 'x146dn1l',
          bottom: 'x1ey2m1c',
          end: 'x177n6bx',
          height: 'xuoj239',
          position: 'x10l6tqk',
          start: 'xb1c2wi',
          transform: 'xxa6egd',
          transformOrigin: 'xhmqdbg',
          transitionDuration: 'x1k90msu',
          transitionProperty: 'x11xpdln',
          transitionTimingFunction: 'x1qfuztq',
          $$css: !0,
        },
        linkUnderlineSelected: { transform: 'x1c071of', $$css: !0 },
        linkWrapper: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          height: 'x1s65kcs',
          position: 'x1n2onr6',
          $$css: !0,
        },
        moreTab: { '@media (min-width: 1100px)_display': 'xma1kzc', $$css: !0 },
        tab: {
          flexGrow: 'x1iyjqo2',
          maxWidth: 'xmlsiyf',
          minWidth: 'x1hxoosp',
          $$css: !0,
        },
        tab500: { maxWidth: 'xrb9xsn', $$css: !0 },
        tab584: { maxWidth: 'xrrss0q', $$css: !0 },
        tabHiddenAtLargeViewport: {
          '@media (max-width: 1099px)_display': 'x9e5oc1',
          $$css: !0,
        },
        tabHiddenAtSmallViewport: {
          '@media (max-width: 700px)_display': 'x1gz44f',
          $$css: !0,
        },
        tabResponsive: {
          '@media (max-width: 1099px)_maxWidth': 'x1l38jg0',
          '@media (min-width: 1100px) and (max-height: 789px), (min-width: 1100px) and (max-width: 1379px)_maxWidth':
            'x1awlv9s',
          $$css: !0,
        },
        tabSpacing: { marginStart: 'x1i64zmx', $$css: !0 },
        tabStyles1: {
          '@media (max-width: 999px)_display': 'x11yr7xz',
          $$css: !0,
        },
        tabStyles2: {
          '@media (max-width: 899px)_display': 'x1daaz14',
          $$css: !0,
        },
        tabStyles3: {
          '@media (max-width: 799px)_display': 'xte6x5b',
          $$css: !0,
        },
        tabStyles4: {
          '@media (max-width: 699px)_display': 'x1t782dm',
          $$css: !0,
        },
        tabStyles5: {
          '@media (max-width: 599px)_display': 'xjwlzi0',
          $$css: !0,
        },
      },
      k = 9;
    function a(a) {
      var b = a.activeIcon,
        d = a.badgeCount,
        e = a.badgeRenderer,
        f = a.icon,
        g = a.isActiveTab,
        l = a.isBadgeHidden;
      l = l === void 0 ? !1 : l;
      var m = a.isPendingTab,
        n = a.label,
        o = a.linkProps,
        p = a.nuxRef,
        q = a.onPress,
        r = a.position,
        s = a.responsiveStyle,
        t = a.selected,
        u = a.tabKey;
      a = a.testid;
      a = null;
      if (f != null && b != null) {
        b = g ? b : f;
        a = i.jsxs('span', {
          className: 'x1n2onr6',
          children: [
            i.jsx(b, { color: g ? 'active-tab' : 'inactive-tab', size: 28 }),
            e != null &&
              i.jsx(c('CometErrorBoundary.react'), {
                fallback: function () {
                  return i.jsx('span', {});
                },
                children: i.jsx(c('CometPlaceholder.react'), {
                  fallback: i.jsx('span', {}),
                  children: i.jsx('span', {
                    className: 'x10l6tqk x11f4b5y x1v4kod4',
                    children: e({ isBadgeHidden: l, isTab: !0, overflow: k }),
                  }),
                }),
              }),
          ],
        });
      }
      f =
        d > 0
          ? h._('__JHASH__8R80vfw61_2__JHASH__', [
              h._plural(d, 'number'),
              h._param('label', n),
            ])
          : n;
      b = i.jsxs('div', {
        className: 'x6s0dn4 x78zum5 x1s65kcs x1n2onr6',
        children: [
          i.jsx('div', {
            className:
              'xtvsq51 x11t77rh x146dn1l x1ey2m1c x177n6bx xuoj239 x10l6tqk xb1c2wi xhmqdbg x1k90msu x11xpdln x1qfuztq' +
              (g ? ' x1c071of' : ' xxa6egd'),
          }),
          i.jsx(c('CometPressable.react'), {
            'aria-current': g ? 'page' : void 0,
            'aria-label': f,
            display: 'inline',
            linkProps: o,
            onPress: q,
            overlayDisabled: t,
            overlayHoveredStyle: m ? j.linkOverlayPressed : void 0,
            overlayOffset: { bottom: -4, left: 0, right: 0, top: -4 },
            overlayRadius: 8,
            testid: void 0,
            xstyle: j.link,
            children: a,
          }),
        ],
      });
      e =
        s === !0
          ? [
              r != null && r < 4 && j.tabHiddenAtSmallViewport,
              r != null && r === 4 && j.tabHiddenAtLargeViewport,
              u === 'more' && j.moreTab,
            ]
          : [
              r != null && r === 0 && j.tabStyles1,
              r != null && r === 1 && j.tabStyles2,
              r != null && r === 2 && j.tabStyles3,
              r != null && r === 3 && j.tabStyles4,
              r != null && r === 4 && j.tabStyles5,
              u === 'more' && j.hideMore,
            ];
      l = null;
      switch (c('qex')._('1008')) {
        case '500':
          l = j.tab500;
          break;
        case '584':
          l = j.tab584;
          break;
      }
      g = (d = c('qex')._('1246')) != null ? d : !1;
      f =
        u === 'home'
          ? p == null
            ? void 0
            : p.apNux
          : u === 'most_recent_feed' && g
          ? p == null
            ? void 0
            : p.feedsNux
          : void 0;
      return i.jsx('li', {
        className: c('stylex')(
          j.tab,
          j.tabResponsive,
          l,
          r !== 0 && j.tabSpacing,
          e,
        ),
        ref: f,
        children: i.jsx(c('CometTooltip.react'), {
          align: 'middle',
          tooltip: n,
          children: b,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = i.memo(a);
    g['default'] = b;
  },
  98,
);
