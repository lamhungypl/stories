__d(
  'CometAppNavigationTargetedTabBarContent.react',
  [
    'CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql',
    'CometLoggedInTargetedTabsListWithIcons',
    'CometLoggedOutTargetedTabsList',
    'CometPlaceholder.react',
    'CometProfilePlusAdminEducationNuxTourStrings',
    'CometRelay',
    'CometTargetedTabsGlimmers.react',
    'CometTopNavTabRenderer.react',
    'CometTopNavTargetedTabWrapper.react',
    'qex',
    'react',
    'unrecoverableViolation',
    'useCometNUXTourTarget',
    'useCometTooltipQP',
    'useShouldRenderFullTopNav',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = d('react'),
      k = j.useCallback,
      l = j.useState,
      m = { calloutWidth: { maxWidth: 'xw5ewwj', $$css: !0 } };
    function a() {
      return i.jsx(c('CometPlaceholder.react'), {
        fallback: i.jsx(c('CometTargetedTabsGlimmers.react'), {}),
        children: i.jsx(n, {}),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    var n = i.memo(e);
    function e() {
      var a, e, f;
      a = d('CometRelay').useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b(
              'CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql',
            )),
        { enableFeedsTabNux: (a = c('qex')._('1246')) != null ? a : !1 },
      );
      var g =
        (e =
          a == null
            ? void 0
            : (e = a.viewer) == null
            ? void 0
            : (e = e.actor) == null
            ? void 0
            : e.id) != null
          ? e
          : '';
      e =
        a == null
          ? void 0
          : (e = a.viewer) == null
          ? void 0
          : (e = e.actor) == null
          ? void 0
          : e.name;
      f =
        a == null
          ? void 0
          : (f = a.viewer) == null
          ? void 0
          : (f = f.tab_bookmarks) == null
          ? void 0
          : f.edges;
      var j = l(null),
        n = j[0],
        o = j[1],
        p = c('useCometNUXTourTarget')({
          description: d(
            'CometProfilePlusAdminEducationNuxTourStrings',
          ).getNewsfeedNuxBody(e),
          targetKey: 'NEWSFEED_TAB_STEP',
          title: d(
            'CometProfilePlusAdminEducationNuxTourStrings',
          ).getNewsfeedNuxTitle(),
        });
      j =
        a == null
          ? void 0
          : (j = a.viewer) == null
          ? void 0
          : (e = j.feeds_tab_tooltip) == null
          ? void 0
          : (a = e.nodes) == null
          ? void 0
          : a[0];
      e = c('useCometTooltipQP')(j, {
        position: 'below',
        xstyle: m.calloutWidth,
      });
      a = l({ apNux: p, feedsNux: e });
      var q = a[0],
        r = a[1],
        s = k(
          function (a, b) {
            o(a ? b : null),
              b === 'most_recent_feed' && r({ apNux: p, feedsNux: void 0 });
          },
          [o, r, p],
        );
      j = c('useShouldRenderFullTopNav')();
      var t = j
        ? c('CometLoggedInTargetedTabsListWithIcons')
        : c('CometLoggedOutTargetedTabsList');
      if (f == null || f.length === 0)
        throw c('unrecoverableViolation')(
          'Targeted tabs return null or emtpy array',
          'comet_ui',
        );
      e = t.get('More');
      a = f
        .map(function (a, b) {
          var d, e;
          d =
            a == null
              ? void 0
              : (d = a.node) == null
              ? void 0
              : (d = d.bookmarked_node) == null
              ? void 0
              : d.id;
          e =
            a == null
              ? void 0
              : (e = a.node) == null
              ? void 0
              : e.last_used_timestamp;
          if (d == null) return null;
          d = t.get(d);
          if (d == null) return;
          var f = d.badgeComponent,
            h = d.badgeSubscriptionCallbackForTargetedTabs,
            j = d.badgeTestID;
          d = babelHelpers.objectWithoutPropertiesLoose(d, [
            'badgeComponent',
            'badgeSubscriptionCallbackForTargetedTabs',
            'badgeTestID',
          ]);
          return i.jsx(
            c('CometTopNavTargetedTabWrapper.react'),
            {
              actorID: g,
              badgeComponent: f,
              badgeCount:
                (a =
                  a == null
                    ? void 0
                    : (f = a.node) == null
                    ? void 0
                    : f.unread_count) != null
                  ? a
                  : 0,
              badgeSubscriptionCallback: h,
              badgeTestID: j,
              lastUsedTimestamp: e,
              nuxRef: q,
              pendingTabKey: n,
              position: b,
              setIsPendingTab: s,
              tabConfig: d,
              tabRenderer: c('CometTopNavTabRenderer.react'),
            },
            d.url,
          );
        })
        .filter(Boolean);
      if (e != null) {
        e.badgeComponent;
        e.badgeSubscriptionCallbackForTargetedTabs;
        e.badgeTestID;
        j = babelHelpers.objectWithoutPropertiesLoose(e, [
          'badgeComponent',
          'badgeSubscriptionCallbackForTargetedTabs',
          'badgeTestID',
        ]);
        a.push(
          i.jsx(
            c('CometTopNavTargetedTabWrapper.react'),
            {
              actorID: g,
              pendingTabKey: n,
              position: f.length,
              setIsPendingTab: s,
              tabConfig: j,
              tabRenderer: c('CometTopNavTabRenderer.react'),
            },
            'more_tab',
          ),
        );
      }
      return a;
    }
    j = i.memo(a);
    g['default'] = j;
  },
  98,
);
