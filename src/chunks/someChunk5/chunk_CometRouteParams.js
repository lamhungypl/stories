__d(
  'CometRouteParams',
  ['CometRouteURL', 'useCurrentRoute'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h() {
      var a = c('useCurrentRoute')();
      if (a != null) return a.params;
      else {
        return (a = d('CometRouteURL').getWindowURLParams()) != null ? a : {};
      }
    }
    function a(a) {
      return a(h());
    }
    g.useRouteParams = h;
    g.useCometRefinedRouteParams = a;
  },
  98,
);
