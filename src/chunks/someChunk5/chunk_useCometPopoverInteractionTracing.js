__d(
  'useCometPopoverInteractionTracing',
  ['CometInteractionTracingQPLConfigContext', 'useCometInteractionTracing'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e) {
      var f = d(
        'CometInteractionTracingQPLConfigContext',
      ).usePopoverTraceQPLEvent();
      return c('useCometInteractionTracing')(
        f,
        'fluid',
        'INTERACTION',
        a,
        babelHelpers['extends'](
          { interaction_type: 'popover', load_type: b },
          e != null ? { preload_trigger: e } : null,
        ),
      );
    }
    g['default'] = a;
  },
  98,
);
