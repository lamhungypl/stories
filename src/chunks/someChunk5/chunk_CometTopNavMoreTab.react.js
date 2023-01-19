__d(
  'CometTopNavMoreTab.react',
  [
    'CometTopNavTab.react',
    'XCometHomeControllerRouteBuilder',
    'getTopMostRouteInfo',
    'react',
    'useCometRouterDispatcher',
    'useCometRouterState',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = c('useCometRouterState')(),
        d = c('useCometRouterDispatcher')(),
        e = b != null ? c('getTopMostRouteInfo')(b) : null;
      b =
        (e == null ? void 0 : (b = e.route) == null ? void 0 : b.tabKey) ===
        'more';
      b =
        b && d
          ? {
              onPress: function () {
                var a;
                (e == null
                  ? void 0
                  : (a = e.referrer) == null
                  ? void 0
                  : a.navigationType) !== 'initial'
                  ? d.goBack()
                  : d.go(
                      c('XCometHomeControllerRouteBuilder').buildURL({}),
                      {},
                    );
              },
              preventLocalNavigation: !0,
            }
          : null;
      return h.jsx(
        c('CometTopNavTab.react'),
        babelHelpers['extends']({}, b, a),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
