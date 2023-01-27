__d(
  'cancelAnimationFramePolyfill',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    b =
      a.__fbNativeCancelAnimationFrame ||
      a.cancelAnimationFrame ||
      a.webkitCancelAnimationFrame ||
      a.mozCancelAnimationFrame ||
      a.oCancelAnimationFrame ||
      a.msCancelAnimationFrame ||
      a.clearTimeout;
    c = b;
    f['default'] = c;
  },
  66,
);
