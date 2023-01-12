__d(
  'useStoriesCreateObjectMoveMouse',
  ['react', 'useGlobalEventListener'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a) {
      var b = a.isKeyboard,
        d = a.isMoving,
        e = a.onMove,
        f = a.setKeyboard,
        g = a.setMoving;
      a = h(
        function (a) {
          if (b) {
            f(!1);
            g(!1);
            return;
          }
          e(a, a.clientX, a.clientY);
        },
        [b, e, f, g],
      );
      var i = h(
        function (a) {
          d && g(!1), a.preventDefault();
        },
        [d, g],
      );
      c('useGlobalEventListener')('mousemove', d ? a : null, { capture: !0 });
      c('useGlobalEventListener')('mouseup', i, { capture: !0 });
    }
    g['default'] = a;
  },
  98,
);
