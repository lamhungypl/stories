__d(
  'useTopNavigationLogging',
  [
    'CometPassiveGetRouterStateContext',
    'CometProductAttribution',
    'WebSession',
    'react',
    'requireDeferred',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    var h = a.useCallback,
      i = a.useContext,
      j = a.useMemo,
      k = c('requireDeferred')('CometTopnavItemClickFalcoEvent').__setRef(
        'useTopNavigationLogging',
      ),
      l = c('requireDeferred')('CometTopnavItemImpressionFalcoEvent').__setRef(
        'useTopNavigationLogging',
      ),
      m = function (a) {
        var b = a.badgeValue;
        b = b === void 0 ? '' : b;
        var c = a.itemKey,
          e = a.navItemType,
          f = a.passiveGetRouterState,
          g = a.position;
        g = g === void 0 ? 0 : g;
        a = a.selected;
        a = a === void 0 ? !1 : a;
        return {
          bt: 'number',
          bv: b,
          nii: null,
          nin: c,
          nip: g,
          nit: e,
          pa: d(
            'CometProductAttribution',
          ).getMinifiedTopMostRouteProductAttribution(f),
          sel: a,
          si: d('WebSession').getId(),
        };
      },
      n = function (a) {
        return h(
          function () {
            k.onReady(function (b) {
              b.log(function () {
                return m(a);
              });
            });
          },
          [a],
        );
      },
      o = function (a) {
        var b = h(
          function () {
            l.onReady(function (b) {
              b.log(function () {
                return m(a);
              });
            });
          },
          [a],
        );
        return c('useVisibilityObserver')({ onVisible: b });
      },
      p = function (a) {
        var b = a.badgeValue,
          d = b === void 0 ? '' : b,
          e = a.itemKey,
          f = a.navItemType,
          g = a.position;
        b = a.selected;
        var h = b === void 0 ? !1 : b,
          k = i(c('CometPassiveGetRouterStateContext'));
        a = j(
          function () {
            return {
              badgeValue: d,
              itemKey: e,
              navItemType: f,
              passiveGetRouterState: k,
              position: g,
              selected: h,
            };
          },
          [k, d, e, f, g, h],
        );
        return [n(a), o(a)];
      };
    b = function () {
      return p({ itemKey: 'logo', navItemType: 'logo' });
    };
    e = function () {
      return p({ itemKey: 'create-button', navItemType: 'create' });
    };
    f = function () {
      return p({
        itemKey: 'unified-creation-jewel',
        navItemType: 'unified_creation',
      });
    };
    a = function (a, b) {
      return p({ itemKey: a, navItemType: 'unified_creation', position: b });
    };
    var q = function () {
        return p({ itemKey: 'mega-menu-jewel', navItemType: 'mega_menu' });
      },
      r = function (a, b) {
        return p({ itemKey: a, navItemType: 'create', position: b });
      },
      s = function () {
        return p({ itemKey: 'settings-button', navItemType: 'jewel' });
      },
      t = function () {
        return p({ itemKey: 'home-link', navItemType: 'topnav-link' });
      },
      u = function () {
        return p({ itemKey: 'profile-link', navItemType: 'topnav-link' });
      },
      v = function () {
        return p({ itemKey: 'find-friends', navItemType: 'topnav-link' });
      },
      w = function (a, b, c) {
        return p({
          itemKey: a,
          navItemType: 'settings',
          position: b,
          selected: c,
        });
      },
      x = function () {
        return p({ itemKey: 'messenger-jewel', navItemType: 'jewel' });
      },
      y = function () {
        return p({ itemKey: 'friends-jewel', navItemType: 'jewel' });
      },
      z = function (a) {
        return p({
          badgeValue: a,
          itemKey: 'notifications-jewel',
          navItemType: 'jewel',
        });
      },
      A = function () {
        return p({ itemKey: 'birthdays', navItemType: 'birthdays' });
      },
      B = function () {
        return p({
          itemKey: 'inline-friends-rhc',
          navItemType: 'inline_friends_rhc',
        });
      },
      C = function () {
        return p({ itemKey: 'pages-rhc', navItemType: 'pages_rhc' });
      },
      D = function () {
        return p({
          itemKey: 'friends-count-rhc',
          navItemType: 'friend_count_rhc',
        });
      },
      E = function () {
        return p({ itemKey: 'event', navItemType: 'events' });
      },
      F = function () {
        return p({ itemKey: 'live-video-rhc', navItemType: 'live_video_rhc' });
      },
      G = function () {
        return p({
          itemKey: 'watch-video-rhc',
          navItemType: 'watch_video_rhc',
        });
      };
    g.useLogoLoggingCallbacks = b;
    g.useCreateButtonLoggingCallbacks = e;
    g.useUnifiedCreationButtonLoggingCallbacks = f;
    g.useUnifiedCreationItemLoggingCallbacks = a;
    g.useMegaMenuLoggingCallbacks = q;
    g.useCreateItemLoggingCallbacks = r;
    g.useSettingsButtonLoggingCallbacks = s;
    g.useHomeLinkLoggingCallbacks = t;
    g.useProfileLinkLoggingCallbacks = u;
    g.useFindFriendsLinkLoggingCallbacks = v;
    g.useSettingsItemLoggingCallbacks = w;
    g.useMessengerButtonLoggingCallbacks = x;
    g.useFriendsButtonLoggingCallbacks = y;
    g.useNotificationsButtonLoggingCallbacks = z;
    g.useBirthdaysButtonLoggingCallbacks = A;
    g.useInlineFriendRequestsRHCLoggingCallbacks = B;
    g.usePagesRHCLoggingCallbacks = C;
    g.useFriendRequestsCountRHCLoggingCallbacks = D;
    g.useEventsButtonLoggingCallbacks = E;
    g.useLiveVideoRHCLoggingCallbacks = F;
    g.useWatchVideoRHCLoggingCallbacks = G;
  },
  98,
);
