__d(
  'SchedulerFb-Internals_DO_NOT_USE',
  [
    'Scheduler-dev.classic',
    'Scheduler-profiling.classic',
    'ifRequireable',
    'requestAnimationFramePolyfill',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a.requestAnimationFrame === void 0 &&
      (a.requestAnimationFrame = b('requestAnimationFramePolyfill'));
    var g;
    g = b('Scheduler-profiling.classic');
    e.exports = {
      unstable_ImmediatePriority: g.unstable_ImmediatePriority,
      unstable_UserBlockingPriority: g.unstable_UserBlockingPriority,
      unstable_NormalPriority: g.unstable_NormalPriority,
      unstable_LowPriority: g.unstable_LowPriority,
      unstable_IdlePriority: g.unstable_IdlePriority,
      unstable_getCurrentPriorityLevel: g.unstable_getCurrentPriorityLevel,
      unstable_runWithPriority: g.unstable_runWithPriority,
      unstable_now: g.unstable_now,
      unstable_scheduleCallback: function (a, c, d) {
        var e = b('ifRequireable')(
          'TimeSlice',
          function (a) {
            return a.guard(c, 'unstable_scheduleCallback', {
              propagationType: a.PropagationType.CONTINUATION,
              registerCallStack: !0,
            });
          },
          function () {
            return c;
          },
        );
        return g.unstable_scheduleCallback(a, e, d);
      },
      unstable_cancelCallback: function (a) {
        return g.unstable_cancelCallback(a);
      },
      unstable_wrapCallback: function (a) {
        var c = b('ifRequireable')(
          'TimeSlice',
          function (b) {
            return b.guard(a, 'unstable_wrapCallback', {
              propagationType: b.PropagationType.CONTINUATION,
              registerCallStack: !0,
            });
          },
          function () {
            return a;
          },
        );
        return g.unstable_wrapCallback(c);
      },
      unstable_pauseExecution: function () {
        return g.unstable_pauseExecution();
      },
      unstable_continueExecution: function () {
        return g.unstable_continueExecution();
      },
      unstable_shouldYield: g.unstable_shouldYield,
      unstable_requestPaint: g.unstable_requestPaint,
      unstable_forceFrameRate: g.unstable_forceFrameRate,
      unstable_Profiling: g.unstable_Profiling,
    };
  },
  null,
);
