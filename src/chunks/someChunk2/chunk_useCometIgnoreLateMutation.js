__d(
  'useCometIgnoreLateMutation',
  ['InteractionTracing', 'InteractionTracingMetrics', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a) {
      return h(
        function (b) {
          b &&
            a &&
            c('InteractionTracing')
              .getPendingInteractions()
              .forEach(function (a) {
                a = c('InteractionTracingMetrics').get(a.getTraceId());
                a != null && a.lateMutationIgnoreElements.add(b);
              });
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
