__d(
  'ExecutionEnvironment',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    b = !!(a !== void 0 && a.document && a.document.createElement);
    c = typeof WorkerGlobalScope === 'function';
    d = {
      canUseDOM: b,
      canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
      canUseViewport: b && !!window.screen,
      canUseWorkers: typeof Worker !== 'undefined',
      isInBrowser: b || c,
      isInWorker: c,
    };
    e = d;
    f['default'] = e;
  },
  66,
);
