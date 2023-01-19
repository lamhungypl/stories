__d(
  'CometLoggedInTargetedTabsList',
  [
    'fbt',
    'CurrentUser',
    'FriendingCometFriendRequestSubscriptionHelper',
    'InstantGamesNavigationUtils.entrypoint',
    'XCometBookmarksControllerRouteBuilder',
    'XCometEventsHomeControllerRouteBuilder',
    'XCometFriendingControllerRouteBuilder',
    'XCometGamingControllerRouteBuilder',
    'XCometGroupsTabControllerRouteBuilder',
    'XCometHomeControllerRouteBuilder',
    'XCometInstantGamesHubControllerRouteBuilder',
    'XCometMarketplaceControllerRouteBuilder',
    'XCometNewsCompassControllerRouteBuilder',
    'XCometPageBrowserControllerRouteBuilder',
    'XCometProfessionalDashboardOverviewV2ControllerRouteBuilder',
    'XCometProfileVanityAdCenterControllerRouteBuilder',
    'XCometWatchControllerRouteBuilder',
    'deferredLoadComponent',
    'gkx',
    'qex',
    'react',
    'requireDeferredForDisplay',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    d('react');
    a = c('deferredLoadComponent')(
      c('requireDeferredForDisplay')('CometTopNavTabBadge.react').__setRef(
        'CometLoggedInTargetedTabsList',
      ),
    );
    e = (b = c('qex')._('46')) != null ? b : !1;
    b = (f = c('qex')._('998')) != null ? f : !1;
    f = '4748854339';
    var i = '1606854132932955',
      j = '2392950137',
      k = '2361831622',
      l = '2356318349',
      m = '250100865708545',
      n = '192618159033122',
      o = '513746992167374',
      p = '2344061033',
      q = '2166827706737654',
      r = '608920319153834',
      s = '1146105192114219';
    f = new Map([
      [
        f,
        {
          appID: f,
          badgeComponent: a,
          entityMatcherFunction: function (a) {
            return a.entity_type === 'home' && a.section === 'news_feed';
          },
          label: h._('__JHASH__xK5_18QQ5oN__JHASH__'),
          maintain: !0,
          prefetchQueriesEligible: !0,
          tabKey: 'home',
          testid: 'NewsFeedTabLink',
          url: c('XCometHomeControllerRouteBuilder').buildURL({}),
        },
      ],
      [
        l,
        {
          appID: l,
          badgeComponent: a,
          badgeSubscriptionCallbackForTargetedTabs: d(
            'FriendingCometFriendRequestSubscriptionHelper',
          ).setupFriendingSubscription,
          badgeTestID: 'friends_tab_badge',
          label: h._('__JHASH__5Hn0gclZ8NR__JHASH__'),
          passthroughProps: { ref: 'FRIENDING_TAB_OPEN' },
          tabKey: 'friends',
          testid: 'FriendsCometTabLink',
          url: c('XCometFriendingControllerRouteBuilder').buildURL({}),
        },
      ],
      [
        m,
        {
          appID: m,
          badgeComponent: a,
          label: h._('__JHASH__dvSsTv9qTya__JHASH__'),
          tabKey: 'pages',
          testid: 'PagesCometTabLink',
          url: c('XCometPageBrowserControllerRouteBuilder').buildURL({
            category: 'your_pages',
            ref: 'bookmarks',
          }),
        },
      ],
      [
        n,
        {
          appID: n,
          badgeComponent: a,
          label: h._('__JHASH__yXuSG5gZ5au__JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'pro_dash',
          testid: 'ProDashTabLink',
          url: c(
            'XCometProfessionalDashboardOverviewV2ControllerRouteBuilder',
          ).buildURL({}),
        },
      ],
      [
        j,
        {
          appID: j,
          badgeComponent: a,
          label: h._('__JHASH__WnQwZCaF2uZ__JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'watch',
          testid: 'WatchTabLink',
          url: c('XCometWatchControllerRouteBuilder').buildURL({ ref: 'tab' }),
        },
      ],
      [
        i,
        {
          appID: i,
          badgeComponent: a,
          label: h._('__JHASH__kdYMN3uUpx___JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'marketplace',
          testid: 'MarketplaceTabLink',
          url: c('XCometMarketplaceControllerRouteBuilder').buildURL({
            ref: 'app_tab',
          }),
        },
      ],
      [
        k,
        {
          appID: k,
          badgeComponent: a,
          badgeTestID: 'groups-badge-count',
          label: e
            ? h._('__JHASH__OW0AdYVip9M__JHASH__')
            : h._('__JHASH__A7uED15-1Ps__JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'groups',
          testid: 'GroupsTabLink',
          url: c('XCometGroupsTabControllerRouteBuilder').buildURL({}),
        },
      ],
      [
        o,
        {
          appID: o,
          badgeComponent: a,
          label: h._('__JHASH__TlgcTW4oYfY__JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'gaming',
          testid: 'GamingTabLink',
          url:
            d(
              'InstantGamesNavigationUtils.entrypoint',
            ).isPlayOnlyOnCometExperience() || c('gkx')('7376')
              ? c('XCometInstantGamesHubControllerRouteBuilder').buildURL({
                  store_visit_source: 'gaming_tab',
                })
              : c('XCometGamingControllerRouteBuilder').buildURL({
                  ref: 'games_tab',
                }),
        },
      ],
      [
        p,
        {
          appID: p,
          badgeComponent: a,
          label: h._('__JHASH__bcQ0wms6Q_n__JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'events',
          testid: 'EventsTabLink',
          url: c('XCometEventsHomeControllerRouteBuilder').buildURL({}),
        },
      ],
      [
        q,
        {
          appID: q,
          badgeComponent: a,
          label: h._('__JHASH__Fn1gEPr670T__JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'news',
          testid: 'NewsTabLink',
          url: c('XCometNewsCompassControllerRouteBuilder').buildURL({}),
        },
      ],
      [
        r,
        {
          appID: r,
          badgeComponent: a,
          label: b
            ? h._('__JHASH__twORZ-0Bk9j__JHASH__')
            : h._('__JHASH__BCNvZFOHKie__JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'most_recent_feed',
          testid: 'FeedsTabLink',
          url: c('XCometHomeControllerRouteBuilder').buildURL({
            filter: 'all',
            sk: 'h_chr',
          }),
        },
      ],
      [
        s,
        {
          appID: s,
          badgeComponent: a,
          label: h._('__JHASH__RCVI1xGZG68__JHASH__'),
          prefetchQueriesEligible: !0,
          tabKey: 'ad_center',
          testid: 'AdCenterTabLink',
          url: c('XCometProfileVanityAdCenterControllerRouteBuilder').buildURL({
            vanity: c('CurrentUser').getID(),
          }),
        },
      ],
      [
        'More',
        {
          label: h._('__JHASH__CLcaTM6spQp__JHASH__'),
          tabKey: 'more',
          testid: 'MoreTabLink',
          url: c('XCometBookmarksControllerRouteBuilder').buildURL({}),
        },
      ],
    ]);
    g['default'] = f;
  },
  98,
);
