__d(
  'CometTopNavTab.react',
  [
    'CometPassiveGetRouterStateContext',
    'CometProductAttribution',
    'CometRelay',
    'CometRouteMatch',
    'HiddenSubtreePassiveContext',
    'WebSession',
    'getCometEntityKey',
    'getTopMostRoute',
    'react',
    'requireDeferred',
    'unrecoverableViolation',
    'useCometRoute',
    'useCometRouterState',
    'useShouldPrefetchQueriesBasedOnLastUsedTimestamp',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useRef,
      m = c('requireDeferred')('CometRecordProductUsageMutation').__setRef(
        'CometTopNavTab.react',
      ),
      n = c('requireDeferred')('CometTopnavItemClickFalcoEvent').__setRef(
        'CometTopNavTab.react',
      ),
      o = c('requireDeferred')('CometTopnavItemImpressionFalcoEvent').__setRef(
        'CometTopNavTab.react',
      ),
      p = c('requireDeferred')('logCometTopNavTabPress').__setRef(
        'CometTopNavTab.react',
      ),
      q = function (a) {
        var b = a.badgeUpdate,
          c = a.badgeValue,
          e = a.navItemId,
          f = a.navItemName,
          g = a.passiveGetRouterState,
          h = a.position;
        a = a.selected;
        return {
          bt: 'number',
          bu: (b = b) != null ? b : !1,
          bv: c,
          nii: e,
          nin: f,
          nip: (b = h) != null ? b : -1,
          nit: 'tab',
          pa: d(
            'CometProductAttribution',
          ).getMinifiedTopMostRouteProductAttribution(g),
          sel: a,
          si: d('WebSession').getId(),
        };
      };
    function a(a) {
      var b = a.appID,
        e = a.badgeCount;
      a.entityMatcherFunction;
      var f = a.hideSelected,
        g = a.isActiveTabOverride,
        r = a.lastUsedTimestamp,
        s = a.onPress,
        t = a.passthroughProps,
        u = a.pendingTabKey,
        v = a.position,
        w = a.prefetchQueriesEligible,
        x = a.preload,
        y = a.preventLocalNavigation,
        z = y === void 0 ? !1 : y,
        A = a.selected;
      y = a.selectedRoot;
      var B = a.setIsPendingTab,
        C = a.tabKey,
        D = a.tabRenderer,
        E = a.url;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'appID',
        'badgeCount',
        'entityMatcherFunction',
        'hideSelected',
        'isActiveTabOverride',
        'lastUsedTimestamp',
        'onPress',
        'passthroughProps',
        'pendingTabKey',
        'position',
        'prefetchQueriesEligible',
        'preload',
        'preventLocalNavigation',
        'selected',
        'selectedRoot',
        'setIsPendingTab',
        'tabKey',
        'tabRenderer',
        'url',
      ]);
      var F = j(c('HiddenSubtreePassiveContext')),
        G = l(!1),
        H = l(null),
        I = j(c('CometPassiveGetRouterStateContext'));
      g = (g = g) != null ? g : y && f !== !0;
      var J = i(
          function (a) {
            return q({
              badgeUpdate: a,
              badgeValue: String(e),
              navItemId: b,
              navItemName: C,
              passiveGetRouterState: I,
              position: v,
              selected: A,
            });
          },
          [I, e, b, C, v, A],
        ),
        K = l(J);
      k(function () {
        K.current = J;
      });
      var L = i(function () {
          return K.current();
        }, []),
        M = i(
          function (a, b) {
            if (a) return;
            o.onReady(function (a) {
              a.log(function () {
                return J(b);
              });
            });
          },
          [J],
        ),
        N = l(e);
      k(
        function () {
          N.current !== e && M(G.current, !0), (N.current = e);
        },
        [M, e],
      );
      k(
        function () {
          var a = d('WebSession').getId();
          !G.current && a !== H.current && ((H.current = a), M(!1));
          var b = F.subscribeToChanges(function (a) {
            G.current = a.hiddenOrBackgrounded_FIXME;
          });
          return function () {
            return b.remove();
          };
        },
        [M, F],
      );
      var O = d('CometRelay').useRelayEnvironment();
      y = function () {
        s && s(),
          z || B(!0, C),
          n.onReady(function (a) {
            a.log(function () {
              return L();
            });
          }),
          m.onReady(function (a) {
            b != null && a.updateProductUsage(O, b, b);
          });
      };
      f = function () {
        B(!1, C),
          p.onReadyImmediately(function (a) {
            return a(C, (a = e) != null ? a : 0, b);
          });
      };
      w = c('useShouldPrefetchQueriesBasedOnLastUsedTimestamp')(w, r);
      f = {
        onNavigate: f,
        passthroughProps: t,
        prefetchQueriesOnHover: !A && w,
        preloadCodeOnMount: x,
        preventLocalNavigation: z,
        productAttribution: { tap_point: 'tap_tabbar' },
        traceParams: { navigation_source: 'tab_click' },
        url: (r = E) != null ? r : '#',
      };
      return h.jsx(
        D,
        babelHelpers['extends']({}, a, {
          badgeCount: (t = e) != null ? t : 0,
          isActiveTab: g,
          isPendingTab: u === C,
          linkProps: f,
          onPress: y,
          position: v,
          selected: A,
          tabKey: C,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    var r = h.memo(a);
    function b(a) {
      var b = a.entityMatcherFunction,
        e = a.tabKey,
        f = a.url;
      if (f == null)
        throw c('unrecoverableViolation')(
          'Must provide a URL to CometTopNavTab',
          'comet_infra',
        );
      var g = c('useCometRoute')(f),
        i = c('useCometRouterState')(),
        j = i != null ? c('getTopMostRoute')(i) : null,
        k = j ? c('getCometEntityKey')(j) : null;
      i = i != null && (i == null ? void 0 : i.main.route.tabKey) === e;
      e =
        j != null &&
        (b != null && k != null
          ? b(k)
          : g != null
          ? d('CometRouteMatch').MatchFunctions.routeMatchFunction(g, j)
          : d('CometRouteMatch').MatchFunctions.urlMatchFunction(f, j));
      return h.jsx(
        r,
        babelHelpers['extends']({ selected: e, selectedRoot: i }, a),
      );
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    g['default'] = b;
  },
  98,
);
