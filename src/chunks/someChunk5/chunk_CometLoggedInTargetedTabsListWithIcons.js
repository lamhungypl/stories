__d(
  'CometLoggedInTargetedTabsListWithIcons',
  [
    'CometIconControllerGaming.react',
    'CometIconControllerGamingFilled.react',
    'CometIconEvents.react',
    'CometIconEventsFilled.react',
    'CometIconFeed.react',
    'CometIconFeedFilled.react',
    'CometIconFriends.react',
    'CometIconFriendsFilled.react',
    'CometIconGaming.react',
    'CometIconGamingFilled.react',
    'CometIconGroups.react',
    'CometIconGroupsFilled.react',
    'CometIconMarketplace.react',
    'CometIconMarketplaceFilled.react',
    'CometIconMegaphone.react',
    'CometIconMegaphoneFilled.react',
    'CometIconMoreFilled.react',
    'CometIconNews.react',
    'CometIconNewsClock.react',
    'CometIconNewsClockFilled.react',
    'CometIconNewsFilled.react',
    'CometIconPages.react',
    'CometIconPagesFilled.react',
    'CometIconProfessionalDashboard.react',
    'CometIconProfessionalDashboardFilled.react',
    'CometIconWatch.react',
    'CometIconWatchFilled.react',
    'CometLoggedInTargetedTabsList',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    a = '4748854339';
    b = '1606854132932955';
    d = '2392950137';
    e = '2361831622';
    f = '2356318349';
    var i = '250100865708545',
      j = '192618159033122',
      k = '513746992167374',
      l = '2344061033',
      m = '2166827706737654',
      n = '608920319153834',
      o = '1146105192114219',
      p =
        ((h = {}),
        (h[o] = {
          activeIcon: c('CometIconMegaphoneFilled.react'),
          icon: c('CometIconMegaphone.react'),
        }),
        (h[m] = {
          activeIcon: c('CometIconNewsFilled.react'),
          icon: c('CometIconNews.react'),
        }),
        (h[l] = {
          activeIcon: c('CometIconEventsFilled.react'),
          icon: c('CometIconEvents.react'),
        }),
        (h[f] = {
          activeIcon: c('CometIconFriendsFilled.react'),
          icon: c('CometIconFriends.react'),
        }),
        (h[k] = {
          activeIcon:
            c('gkx')('6755') === !0
              ? c('CometIconControllerGamingFilled.react')
              : c('CometIconGamingFilled.react'),
          icon:
            c('gkx')('6755') === !0
              ? c('CometIconControllerGaming.react')
              : c('CometIconGaming.react'),
        }),
        (h[e] = {
          activeIcon: c('CometIconGroupsFilled.react'),
          icon: c('CometIconGroups.react'),
        }),
        (h[b] = {
          activeIcon: c('CometIconMarketplaceFilled.react'),
          icon: c('CometIconMarketplace.react'),
        }),
        (h.More = {
          activeIcon: c('CometIconMoreFilled.react'),
          icon: c('CometIconMoreFilled.react'),
        }),
        (h[n] = {
          activeIcon: c('CometIconNewsClockFilled.react'),
          icon: c('CometIconNewsClock.react'),
        }),
        (h[a] = {
          activeIcon: c('CometIconFeedFilled.react'),
          icon: c('CometIconFeed.react'),
        }),
        (h[i] = {
          activeIcon: c('CometIconPagesFilled.react'),
          icon: c('CometIconPages.react'),
        }),
        (h[j] = {
          activeIcon: c('CometIconProfessionalDashboardFilled.react'),
          icon: c('CometIconProfessionalDashboard.react'),
        }),
        (h[d] = {
          activeIcon: c('CometIconWatchFilled.react'),
          icon: c('CometIconWatch.react'),
        }),
        h),
      q = new Map([]);
    c('CometLoggedInTargetedTabsList').forEach(function (a, b) {
      q.set(b, a);
      if (p[b] != null) {
        a = babelHelpers['extends']({}, q.get(b), p[b]);
        q.set(b, a);
      }
    });
    o = q;
    g['default'] = o;
  },
  98,
);
