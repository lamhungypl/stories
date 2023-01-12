__d(
  'useHeroErrorMetadata',
  [
    'InteractionTracingMetrics',
    'QPLEvent',
    'fb-error',
    'hero-tracing-placeholder',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = i(
          d('hero-tracing-placeholder').HeroCurrentInteractionForLoggingContext,
        ),
        b = i(d('hero-tracing-placeholder').HeroInteractionContext.Context),
        e = b.pageletStack;
      return h(
        function (b) {
          var f;
          f =
            (f = b.metadata) != null ? f : new (c('fb-error').ErrorMetadata)();
          b.metadata = f;
          b = (b = a.current) == null ? void 0 : b.interactionUUID;
          if (b != null) {
            b = c('InteractionTracingMetrics').get(b);
            e != null &&
              f.addEntry(
                'COMET_INFRA',
                'INTERACTION_PAGELET_STACK',
                e.join(','),
              );
            b != null &&
              b.qplAction == null &&
              (b.qplEvent != null &&
                f.addEntry(
                  'COMET_INFRA',
                  'INTERACTION_QPL_EVENT',
                  String(d('QPLEvent').getMarkerId(b.qplEvent)),
                ),
              b.tracePolicy != null &&
                f.addEntry(
                  'COMET_INFRA',
                  'INTERACTION_TRACE_POLICY',
                  b.tracePolicy,
                ));
          }
        },
        [a, e],
      );
    }
    g['default'] = a;
  },
  98,
);
