__d(
  'CometLeftRailAndMainContentContainer.react',
  [
    'BaseHeadingContext',
    'BaseRow.react',
    'BaseRowItem.react',
    'CometLeftRailLayoutContext',
    'CometLeftRailPrimaryContext',
    'CometRouterFocusRegion.react',
    'gkx',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = {
        container: {
          display: 'x78zum5',
          flexGrow: 'x1iyjqo2',
          minHeight: 'x1t2pt76',
          position: 'x1n2onr6',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        containerWithMinWidth: { minWidth: 'x1h6rjhl', $$css: !0 },
        contentArea: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          minHeight: 'x1t2pt76',
          minWidth: 'xeuugli',
          position: 'x1n2onr6',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        contentAreaWithLeftRailPrimary: {
          '@media (max-width: 899px)_display': 'x1daaz14',
          $$css: !0,
        },
        hideLeftRail: { display: 'x1s85apg', $$css: !0 },
        leftRail: {
          flexShrink: 'x2lah0s',
          minHeight: 'x1t2pt76',
          overflowAnchor: 'x1xzczws',
          width: 'x1cvmir6',
          zIndex: 'x1vjfegm',
          $$css: !0,
        },
        leftRailPrimaryResponsive: {
          '@media (max-width: 899px)_width': 'xwn1f64',
          $$css: !0,
        },
        leftRailSecondaryResponsive: {
          '@media (max-width: 899px)_display': 'x1daaz14',
          $$css: !0,
        },
        mainContent: { display: 'x78zum5', minHeight: 'x1t2pt76', $$css: !0 },
      };
    function a(a) {
      var b = a.hideLeftRail;
      b = b === void 0 ? !1 : b;
      var d = a.isLeftRailResponsive;
      d = d === void 0 ? !1 : d;
      var e = a.leftRailContent,
        f = a.leftRailHeading,
        g = a.leftRailPrimary;
      g = g === void 0 ? !1 : g;
      var k = a.leftRailRole;
      k = k === void 0 ? 'navigation' : k;
      var l = a.mainContent,
        m = a.mainContentHeading;
      a = a.testid;
      a = i(c('BaseHeadingContext'));
      a = h.jsx('div', {
        className:
          'x78zum5 xdt5ytf x1iyjqo2 x1t2pt76 xeuugli x1n2onr6 x1ja2u2z' +
          (g === !0 ? ' x1daaz14' : ''),
        children: h.jsx(c('CometLeftRailLayoutContext').Provider, {
          value: !0,
          children: h.jsx(c('BaseHeadingContext').Provider, {
            value: a + 1,
            children: l,
          }),
        }),
      });
      l = k === 'main';
      return h.jsx(c('BaseRow.react'), {
        align: 'start',
        testid: void 0,
        xstyle: [j.container, !d && j.containerWithMinWidth],
        children: h.jsxs(c('CometLeftRailPrimaryContext').Provider, {
          value: g,
          children: [
            h.jsx(c('BaseRowItem.react'), {
              'aria-label': f,
              role: k,
              suppressHydrationWarning: !c('gkx')('708253'),
              xstyle: [
                j.leftRail,
                d && !l && j.leftRailSecondaryResponsive,
                d && l && j.leftRailPrimaryResponsive,
                b && j.hideLeftRail,
              ],
              children: l
                ? h.jsx(c('CometRouterFocusRegion.react'), { children: e })
                : e,
            }),
            h.jsx(c('BaseRowItem.react'), {
              'aria-label': m,
              expanding: !0,
              role: l ? 'complementary' : 'main',
              suppressHydrationWarning: !c('gkx')('708253'),
              xstyle: j.mainContent,
              children: l
                ? a
                : h.jsx(c('CometRouterFocusRegion.react'), { children: a }),
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
