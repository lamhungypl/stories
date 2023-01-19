__d(
  'CometUsabilityTaskReducer',
  [
    'DateConsts',
    'clearTimeout',
    'recoverableViolation',
    'requireDeferred',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')('CometUBTLogger').__setRef(
      'CometUsabilityTaskReducer',
    );
    function a(a, b) {
      switch (b.type) {
        case 'SET_TASK_RESULT':
          h.onReadyImmediately(function (a) {
            return a.addTaskResultLogging(b.value);
          });
          b.value === 'SUCCESS' &&
            h.onReadyImmediately(function (b) {
              return b.addSuccessLogging(a.taskStartTimeMs, a.navigationSteps);
            });
          return babelHelpers['extends']({}, a, { taskResult: b.value });
        case 'SET_USER_RESULT':
          return babelHelpers['extends']({}, a, { userResult: b.value });
        case 'SET_TASK_STATE':
          b.value === 'ENDED' &&
            a.taskResult !== 'NOT_STARTED' &&
            h.onReadyImmediately(function (b) {
              return b.addCompletionLogging(
                a.taskStartTimeMs,
                a.navigationSteps,
              );
            });
          return babelHelpers['extends']({}, a, { taskState: b.value });
        case 'SET_TASK_INFO':
          return babelHelpers['extends']({}, a, { taskInfo: b.value });
        case 'SET_SUCCESS_MARKERS':
          return babelHelpers['extends']({}, a, { successMarkers: b.value });
        case 'SET_SUCCESS_MARKER_HAS_EXTRA_DATA':
          return babelHelpers['extends']({}, a, {
            successMarkerHasExtraData: b.value,
          });
        case 'SET_LIGHTBULB_TEXT':
          return babelHelpers['extends']({}, a, { lightbulbText: b.value });
        case 'START_TIMER':
          return babelHelpers['extends']({}, a, {
            taskStartTimeMs: Date.now(),
            timer: c('setTimeout')(function () {
              h.onReadyImmediately(function (b) {
                return b.addNavStepsLogging(a.navigationSteps);
              }),
                b.value.onTimeout();
            }, b.value.timeoutSeconds * d('DateConsts').MS_PER_SEC),
          });
        case 'STOP_TIMER':
          a.timer != null && c('clearTimeout')(a.timer);
          return babelHelpers['extends']({}, a);
        case 'LOG_NAVIGATION_STEP':
          return babelHelpers['extends']({}, a, {
            navigationSteps: a.navigationSteps + 1,
          });
        default:
          c('recoverableViolation')('Action not implemented!', 'events');
      }
      return a;
    }
    g.reducer = a;
  },
  98,
);
