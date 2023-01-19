__d(
  'CometTopNavTabComponentShared.react',
  ['CometTopNavMoreTab.react', 'CometTopNavTab.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.activeSpriteIcon,
        d = a.badgeCount,
        e = a.badgeRenderer,
        f = a.customIcon,
        g = a.isActiveTabOverride,
        i = a.lastUsedTimestamp,
        j = a.nuxRef,
        k = a.pendingTabKey,
        l = a.position,
        m = a.setIsPendingTab,
        n = a.spriteIcon,
        o = a.tabConfig;
      a = a.tabRenderer;
      var p = o.activeIcon,
        q = o.appID,
        r = o.entityMatcherFunction,
        s = o.hidden,
        t = o.icon,
        u = o.label,
        v = o.passthroughProps,
        w = o.prefetchQueriesEligible,
        x = o.preload,
        y = o.tabKey,
        z = o.testid;
      o = o.url;
      if (s === !0) return null;
      s = {
        activeIcon: p,
        activeSpriteIcon: b,
        appID: q,
        badgeCount: d,
        badgeRenderer: e,
        customIcon: f,
        entityMatcherFunction: r,
        icon: t,
        isActiveTabOverride: g,
        label: u,
        lastUsedTimestamp: i,
        nuxRef: j,
        passthroughProps: v,
        pendingTabKey: k,
        position: l,
        prefetchQueriesEligible: w,
        preload: x,
        setIsPendingTab: m,
        spriteIcon: n,
        tabKey: y,
        tabRenderer: a,
        testid: z,
        url: o,
      };
      p =
        y === 'more'
          ? c('CometTopNavMoreTab.react')
          : c('CometTopNavTab.react');
      return h.jsx(p, babelHelpers['extends']({ responsiveStyle: !0 }, s));
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.memo(a);
    g['default'] = b;
  },
  98,
);
