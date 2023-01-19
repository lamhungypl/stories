__d(
  'CometAppLoggedInNavigation.react',
  [
    'CometAppNavigationEndSection.react',
    'CometAppNavigationEndSectionItem.react',
    'CometAppNavigationTabBarContentWrapper.react',
    'CometBaseAppNavigation.react',
    'CometErrorBoundary.react',
    'CometMediaViewerFullscreenContext',
    'CometProfilePlusAPPageInboxMessageButton.react',
    'CometRouterPushViewStackContext',
    'CometSettingsDropdownTriggerWrapper.react',
    'CometTopNavLogoWithBackButton.react',
    'MWJewelDropdownTrigger.react',
    'ProfilePlusMessaging',
    'cr:12331',
    'cr:1266079',
    'cr:1528736',
    'cr:2026784',
    'cr:2351',
    'cr:2672',
    'getGlobalSearchQueryFromRouterState',
    'getTopMostRoute',
    'gkx',
    'react',
    'unrecoverableViolation',
    'useCometNavigationBackButtonConfig',
    'useCometRouterState',
    'useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome',
    'useShouldRenderFullTopNav',
    'useShouldShowMessagingEntrypointInCometRoot',
    'withAppLoggedInNavigationSwitcher',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    d = d('react');
    var i = d.useContext,
      j = d.useState,
      k = c('gkx')('1890030'),
      l = (d = c('ProfilePlusMessaging').mailboxID) != null ? d : '',
      m = c('ProfilePlusMessaging').shouldRedirectMessagesForAP && l !== null,
      n = h.memo(a);
    function a() {
      return m
        ? h.jsx(c('CometProfilePlusAPPageInboxMessageButton.react'), {
            mailboxID: l,
          })
        : h.jsx(c('MWJewelDropdownTrigger.react'), {});
    }
    function o(a) {
      a = a.profileSwitcherConfig;
      var d = c('useCometRouterState')();
      if (d == null)
        throw c('unrecoverableViolation')(
          'Cannot render comet app with no route provider',
          'comet_infra',
        );
      var e = j(!1),
        f = e[0],
        g = e[1];
      e = c('useShouldShowMessagingEntrypointInCometRoot')('JEWEL');
      var l = d.main.route.tabKey === 'home',
        m = d.main.route.tabKey === 'notifications',
        o = c('getTopMostRoute')(d).tabKey === 'profile',
        p = c('getTopMostRoute')(d).tabKey === 'friends',
        q = i(c('CometMediaViewerFullscreenContext')),
        r = c('useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome')(),
        s = c('useCometNavigationBackButtonConfig')(),
        t = s.onPressBackButton,
        u = s.shouldUseCloseButton;
      s = s.showBackButton;
      var v = i(c('CometRouterPushViewStackContext'));
      v = v != null && v.length > 0;
      d = (d = c('getGlobalSearchQueryFromRouterState')(d)) != null ? d : '';
      var w = c('useShouldRenderFullTopNav')(),
        x = function () {
          return g(!0);
        },
        y = function () {
          return g(!1);
        },
        z = null;
      a.hideProfileNavigationLink === !0 &&
        (z = a.profilePictureUriForSettings);
      return h.jsx(c('CometBaseAppNavigation.react'), {
        endSection:
          v && q
            ? void 0
            : h.jsxs(c('CometAppNavigationEndSection.react'), {
                children: [
                  h.jsx(c('CometAppNavigationEndSectionItem.react'), {
                    noWrapper: !0,
                    children: h.jsx(c('CometErrorBoundary.react'), {
                      children: h.jsx(
                        c('CometSettingsDropdownTriggerWrapper.react'),
                        { profilePictureUri: z },
                      ),
                    }),
                  }),
                  w && b('cr:1266079') != null
                    ? h.jsx(c('CometAppNavigationEndSectionItem.react'), {
                        children: h.jsx(b('cr:1266079'), {
                          isNotifications: m,
                        }),
                      })
                    : null,
                  e
                    ? h.jsx(c('CometAppNavigationEndSectionItem.react'), {
                        children: h.jsx(n, {}),
                      })
                    : null,
                  w && b('cr:2026784') != null
                    ? h.jsx(c('CometAppNavigationEndSectionItem.react'), {
                        children: h.jsx(b('cr:2026784'), {}),
                      })
                    : null,
                  w &&
                  b('cr:2672') != null &&
                  a.hideProfileNavigationLink !== !0
                    ? h.jsx(c('CometAppNavigationEndSectionItem.react'), {
                        displayNone: v,
                        widePivotLink: !0,
                        children: h.jsx(b('cr:2672'), { isProfileTab: o }),
                      })
                    : null,
                  b('cr:2351') != null && k
                    ? h.jsx(c('CometAppNavigationEndSectionItem.react'), {
                        displayNone: v,
                        widePivotLink: !0,
                        children: h.jsx(b('cr:2351'), { isActive: p }),
                      })
                    : null,
                ],
              }),
        searchSection:
          w && b('cr:1528736')
            ? h.jsx(b('cr:1528736'), {
                handleCloseSearch: y,
                handleOpenSearch: x,
                initialGlobalSearchQuery: d,
                isHome: l,
                isSearchOpened: f,
                shouldHideGlobalTypeahead: v,
                showGlobalTypeaheadExpandedOutsideHome: r,
              })
            : null,
        startButtons: h.jsx(c('CometTopNavLogoWithBackButton.react'), {
          logoHidden: f,
          logoWithShadow: v,
          onPressBackButton: t,
          shouldUseCloseButton: u,
          showBackButton: s,
        }),
        tabBar: h.jsx(c('CometAppNavigationTabBarContentWrapper.react'), {
          inert: v,
          children: h.jsx(b('cr:12331'), {}),
        }),
      });
    }
    o.displayName = o.name + ' [from ' + f.id + ']';
    var p = c('withAppLoggedInNavigationSwitcher')(o);
    function e(a) {
      a = a.profileSwitcherConfigQuery;
      return a
        ? h.jsx(p, { profileSwitcherConfigQuery: a })
        : h.jsx(o, {
            profileSwitcherConfig: {
              hideProfileNavigationLink: !1,
              profilePictureUriForSettings: null,
            },
          });
    }
    e.displayName = e.name + ' [from ' + f.id + ']';
    g['default'] = e;
  },
  98,
);
