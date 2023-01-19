__d(
  'CometInteractionVC',
  [
    'CometVCTracker',
    'InteractionTracing',
    'InteractionTracingMetrics',
    'JSScheduler',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
      defer_expensive_calculation: function (a) {
        d('JSScheduler').scheduleLoggingPriCallback(a);
      },
      observeTextMutation: !1,
      retain_element_reference:
        c('gkx')('950768') || c('gkx')('1293035') || c('gkx')('1537962'),
      use_image_download_tracker: c('gkx')('6017'),
      vc_deep_cleanup: c('gkx')('2654'),
    };
    function a(a, b) {
      a = c('InteractionTracingMetrics').get(a);
      a = a && a.vcTracker;
      a && a.addMutationRoot(b);
    }
    function b(a, b) {
      c('InteractionTracing')
        .getPendingInteractions()
        .forEach(function (c) {
          c = c.getTrace();
          c && c.vcTracker && c.type === b && c.vcTracker.addMutationRoot(a);
        });
    }
    function e(a, b) {
      a = c('InteractionTracingMetrics').get(a);
      a && a.vcTracker && a.vcTracker.observeMutation(b);
    }
    function f(a, b, d) {
      return new (c('CometVCTracker').VisualCompletionTraceForInteraction)(
        b,
        0,
        a,
        d,
        h,
      );
    }
    function i(a) {
      var b = [];
      c('InteractionTracing')
        .getPendingInteractions()
        .forEach(function (c) {
          c = c.getTrace();
          c && c.vcTracker && b.push(c.vcTracker.waitLoadingState(a));
        });
      return b;
    }
    g.addMutationRootForTraceId = a;
    g.addMutationRootForTraceType = b;
    g.observeMutation = e;
    g.startVisualCompletionTrace = f;
    g.trackLoadingState = i;
  },
  98,
);
