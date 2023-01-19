__d(
  'CometNotificationsDropdownTrigger.react',
  [
    'fbt',
    'CometIconNotificationsFilled.react',
    'CometNotificationsDropdown.entrypoint',
    'CometNotificationsListLoadingState.react',
    'CometSettingsBadgedDropdownTrigger.react',
    'SVGIcon',
    'XCometNotificationsControllerRouteBuilder',
    'deferredLoadComponent',
    'react',
    'requireDeferredForDisplay',
    'useTopNavigationLogging',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useState,
      k = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')(
          'CometNotificationsBadgeCount.react',
        ).__setRef('CometNotificationsDropdownTrigger.react'),
      );
    function a(a) {
      var b = a.dropdownPosition;
      b = b === void 0 ? 'below' : b;
      a = a.isNotifications;
      var e = j(0),
        f = e[0];
      e = e[1];
      var g = d(
          'useTopNavigationLogging',
        ).useNotificationsButtonLoggingCallbacks(f.toString()),
        l = g[0];
      g = g[1];
      var m =
        f === 0
          ? h._('__JHASH__8gAbffuAS0s__JHASH__')
          : h._('__JHASH__M2eDrcP_btG__JHASH__', [h._param('badge count', f)]);
      return i.jsx(c('CometSettingsBadgedDropdownTrigger.react'), {
        badgeCount: f,
        deferredBadgeCount: k,
        disabled: a,
        dropdownEntryPoint: c('CometNotificationsDropdown.entrypoint'),
        dropdownPosition: b,
        fallback: i.jsx(c('CometNotificationsListLoadingState.react'), {}),
        forceActive: a,
        icon: d('SVGIcon').legacySVGIcon(
          c('CometIconNotificationsFilled.react'),
        ),
        label: m,
        linkProps: {
          preventLocalNavigation: !0,
          url: c('XCometNotificationsControllerRouteBuilder').buildURL({}),
        },
        loggingRef: g,
        onBadgeCount: e,
        onPress: l,
        preloadTrigger: 'tooltip',
        testid: void 0,
        tooltipLabel: h._('__JHASH__PhsYpvQCnZJ__JHASH__'),
        tracePolicy: 'comet.jewel.notification',
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = i.memo(a);
    g['default'] = b;
  },
  98,
);
