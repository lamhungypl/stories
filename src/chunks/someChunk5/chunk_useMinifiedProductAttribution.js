__d(
  'useMinifiedProductAttribution',
  ['CometProductAttribution', 'useRouteProductAttribution'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = c('useRouteProductAttribution')();
      return a != null
        ? d('CometProductAttribution').minifyProductAttributionV2(a)
        : null;
    }
    g['default'] = a;
  },
  98,
);
