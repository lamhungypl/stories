__d(
  'MemoryUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g() {
      return window.performance && window.performance.memory;
    }
    function a() {
      return (
        window.performance &&
        typeof window.performance.measureMemory === 'function'
      );
    }
    function b() {
      if (g()) {
        typeof window.gc === 'function' && window.gc();
        var a = window.performance.memory;
        return { usedJSHeapSize: a.usedJSHeapSize };
      }
      return { usedJSHeapSize: null };
    }
    f.isMemoryAPISupported = g;
    f.isMeasureMemoryOriginTrialSupported = a;
    f.getCurrentMemory = b;
  },
  66,
);
