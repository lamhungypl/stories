__d(
  'passiveEventListenerUtil',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    b = !1;
    try {
      c = Object.defineProperty({}, 'passive', {
        get: function () {
          b = !0;
        },
      });
      window.addEventListener('test', null, c);
    } catch (a) {}
    var g = b;
    function a(a) {
      return g ? a : typeof a === 'boolean' ? a : a.capture || !1;
    }
    f.isPassiveEventListenerSupported = g;
    f.makeEventOptions = a;
  },
  66,
);
