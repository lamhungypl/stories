__d(
  'CometRelayQueryProfiler',
  ['InteractionTracing', 'emptyFunction', 'performanceNow', 'relay-runtime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      if (!b) return c('emptyFunction');
      var d = c('performanceNow')();
      return function (a) {
        var e = { usedCache: b.usedCache, usedPrefetcher: b.usedPrefetcher };
        a && (e.error = a.message);
        c('InteractionTracing')
          .getPendingInteractions()
          .forEach(function (a) {
            a.addSubspan(
              'Relay_' + b.queryName,
              'RelayQuery',
              d,
              c('performanceNow')(),
              e,
            );
          });
      };
    }
    var i = !1;
    function a() {
      if (i) return;
      d('relay-runtime').RelayProfiler.attachProfileHandler(
        'fetchRelayQuery',
        h,
      );
      i = !0;
    }
    g.install = a;
  },
  98,
);
