__d(
  'BaseToasterStateManager',
  [
    'CometMaxEnqueuedToastsSitevarConfig',
    'JSScheduler',
    'XPlatReactToasterStateManager',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    function h(a) {
      d('JSScheduler').scheduleNormalPriCallback(function () {
        a();
      });
    }
    a = {
      getInstance: function () {
        return c('XPlatReactToasterStateManager').getInstance({
          callbackScheduler: h,
          maxQueuedToasts: c('CometMaxEnqueuedToastsSitevarConfig').max,
        });
      },
      resetInstance_DO_NOT_USE: function () {
        c('XPlatReactToasterStateManager').resetInstance_DO_NOT_USE();
      },
    };
    g['default'] = a;
  },
  98,
);
