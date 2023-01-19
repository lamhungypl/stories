__d(
  'processRelayPrefetchURIsPayload',
  ['ExecutionEnvironment'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (!c('ExecutionEnvironment').canUseDOM) return;
      a.forEach(function (a) {
        a = a.uri;
        if (typeof a === 'string') {
          var b = new Image();
          b.src = a;
        }
      });
    }
    g['default'] = a;
  },
  98,
);
