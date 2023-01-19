__d(
  'ReactKeyboardEvent.react',
  ['ReactUseEvent.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useEffect,
      i = { passive: !0 };
    function a(a, b) {
      var d = b.disabled,
        e = d === void 0 ? !1 : d,
        f = b.onKeyDown,
        g = b.onKeyUp,
        j = c('ReactUseEvent.react')('keydown'),
        k = c('ReactUseEvent.react')('keyup', i);
      h(
        function () {
          var b = a.current;
          b !== null &&
            (j.setListener(b, (!e && f) || null),
            k.setListener(b, (!e && g) || null));
        },
        [e, f, j, k, a, g],
      );
    }
    g.useKeyboard = a;
  },
  98,
);
