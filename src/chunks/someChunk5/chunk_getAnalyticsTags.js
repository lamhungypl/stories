__d(
  'getAnalyticsTags',
  ['relay-runtime', 'requireWeak'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      var a = [];
      c('requireWeak')('QPLUserFlow', function (b) {
        b = b.getActiveFlowIDs();
        b.length > 0 && a.push('qpl_active_flow_ids=' + b.sort().join(','));
      });
      return d('relay-runtime').Observable.from(a);
    }
    g['default'] = a;
  },
  98,
);
