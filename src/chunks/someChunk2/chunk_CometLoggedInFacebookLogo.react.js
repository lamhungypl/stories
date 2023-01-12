__d(
  'CometLoggedInFacebookLogo.react',
  [
    'fbt',
    'CometIconLogo.react',
    'CometPressable.react',
    'XCometHomeControllerRouteBuilder',
    'react',
    'useTopNavigationLogging',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = c('XCometHomeControllerRouteBuilder').buildURL({});
    function a(a) {
      var b = a['aria-hidden'],
        e = a.withShadow;
      e = e === void 0 ? !1 : e;
      a = a.xstyle;
      var f = d('useTopNavigationLogging').useLogoLoggingCallbacks(),
        g = f[0];
      f = f[1];
      return i.jsx(c('CometPressable.react'), {
        'aria-hidden': b,
        'aria-label': h._('__JHASH__TlJCmSOrUbl__JHASH__'),
        expanding: !0,
        linkProps: {
          prefetchQueriesOnHover: !0,
          productAttribution: { tap_point: 'logo' },
          traceParams: { navigation_source: 'logo_click' },
          url: j,
        },
        onPress: g,
        overlayDisabled: !0,
        ref: f,
        testid: void 0,
        xstyle: a,
        children: i.jsx(c('CometIconLogo.react'), { shadow: e, size: 40 }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
