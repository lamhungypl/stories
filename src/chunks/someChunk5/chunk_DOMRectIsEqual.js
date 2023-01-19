__d(
  'DOMRectIsEqual',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      if (!a && !b) return !0;
      else if (!a || !b) return !1;
      return (
        a.x === b.x &&
        a.y === b.y &&
        a.width === b.width &&
        a.height === b.height
      );
    }
    f['default'] = a;
  },
  66,
);
