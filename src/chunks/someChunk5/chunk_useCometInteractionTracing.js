__d(
  'useCometInteractionTracing',
  [
    'CometInteractionTracingConfig',
    'InteractionTracing',
    'forEachObject',
    'react',
    'useCometRouteTracePolicy',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback,
      i = 0;
    function j() {
      return i++;
    }
    function a(a, b, e, f, g) {
      var i = (f = f) != null ? f : c('useCometRouteTracePolicy')(),
        k = '' + j();
      return h(
        function (f, h, j, l, m) {
          var n = c('uuid')(),
            o = (l = l) != null ? l : i,
            p = o + '_' + k + (m != null ? '_' + m : '');
          c('InteractionTracing').trace(
            a,
            function (a) {
              var b = c('InteractionTracing').checkAndMarkRevisit(o),
                d = c('InteractionTracing').checkAndMarkRevisit(p);
              a.addMetadata('revisit', b ? 1 : 0);
              a.addMetadata('instance_revisit', d ? 1 : 0);
              g != null &&
                c('forEachObject')(g, function (b, c) {
                  c != null && b != null && a.addMetadata(c, b);
                });
              f(a);
            },
            b,
            e,
            o,
            n,
            h,
            j,
            d('CometInteractionTracingConfig').tracingConfig,
          );
        },
        [a, b, e, i],
      );
    }
    g['default'] = a;
  },
  98,
);
