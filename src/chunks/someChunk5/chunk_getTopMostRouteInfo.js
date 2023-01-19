__d(
  'getTopMostRouteInfo',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = a.hosted,
        c = a.main;
      a = a.pushViewStack;
      if (a && a.length > 0) {
        a = a[a.length - 1];
        a.depth;
        a.key;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['depth', 'key']);
        return a;
      }
      return b ? b : c;
    }
    f['default'] = a;
  },
  66,
);
