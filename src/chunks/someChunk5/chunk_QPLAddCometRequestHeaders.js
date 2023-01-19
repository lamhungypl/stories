__d(
  'QPLAddCometRequestHeaders',
  ['QuickPerformanceLogger', 'cometAsyncRequestHeaders'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      d('cometAsyncRequestHeaders').registerHeaderProvider(function () {
        var a = c('QuickPerformanceLogger').getActiveMarkerIds({ type: 2 });
        if (a.length > 0) {
          var b = {};
          b['X-FB-QPL-Active-Flows'] = a.sort().join(',');
          return b;
        }
        return {};
      });
    }
    g['default'] = a;
  },
  98,
);
