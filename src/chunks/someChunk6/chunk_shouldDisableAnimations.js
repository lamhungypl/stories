__d(
  'shouldDisableAnimations',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 4;
    function a() {
      return (
        navigator != null &&
        navigator.hardwareConcurrency != null &&
        navigator.hardwareConcurrency < g
      );
    }
    f['default'] = a;
  },
  66,
);
