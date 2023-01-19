__d(
  'pointerEventDistance',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 1,
      h = 5;
    function i(a, b, c, d) {
      return Math.sqrt(Math.pow(d - b, 2) + Math.pow(c - a, 2));
    }
    function j(a, b) {
      return i(a.clientX, a.clientY, b.clientX, b.clientY);
    }
    function a(a, b) {
      var c = b.pointerType === 'touch' || b.pointerType === 'pen' ? h : g;
      a = j(a, b);
      return a <= c;
    }
    f.isWithinThreshold = a;
  },
  66,
);
