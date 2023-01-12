__d(
  'CometRouteMatch',
  [
    'ConstUriUtils',
    'getCometRouteKey',
    'normalizeCometRouterUrl',
    'useCurrentRoute',
    'useHostedRoute',
    'useParentRoute',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function () {
      return !1;
    };
    function i(a, b) {
      return a == null
        ? h
        : function (c) {
            return b(c, a);
          };
    }
    function j(a, b) {
      return (
        a != null &&
        b != null &&
        c('normalizeCometRouterUrl')(a) === c('normalizeCometRouterUrl')(b)
      );
    }
    function k(a, b) {
      return (
        a != null &&
        b != null &&
        j(
          (a = d('ConstUriUtils').getUri(a)) == null ? void 0 : a.getPath(),
          (a = d('ConstUriUtils').getUri(b)) == null ? void 0 : a.getPath(),
        )
      );
    }
    f = function (a, b) {
      return c('getCometRouteKey')(a) === c('getCometRouteKey')(b);
    };
    var l = function (a, b) {
        return j(a, b.url);
      },
      m = function (a, b) {
        return k(a, b.url);
      },
      n = function (a, b) {
        return k(a, (a = b.canonicalUrl) != null ? a : b.url);
      };
    n = {
      canonicalPathMatchFunction: n,
      pathMatchFunction: m,
      routeMatchFunction: f,
      urlMatchFunction: l,
    };
    function a(a) {
      var b = c('useCurrentRoute')();
      return i(b, a);
    }
    function b(a) {
      var b = c('useHostedRoute')();
      return i(b, a);
    }
    function e(a) {
      var b = c('useParentRoute')();
      return i(b, a);
    }
    g.MatchFunctions = n;
    g.useCurrentRouteMatcher = a;
    g.useHostedRouteMatcher = b;
    g.useParentRouteMatcher = e;
  },
  98,
); /*FB_PKG_DELIM*/
