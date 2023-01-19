__d(
  'useLayoutAnimationEvents',
  ['LayoutAnimationBoundaryContext', 'LayoutAnimationEvents', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = h(c('LayoutAnimationBoundaryContext')),
        e = j([]);
      i(
        function () {
          var c = (b == null ? void 0 : b.animationEventTargets) || [];
          c.forEach(function (b) {
            b = b.addListener(
              d('LayoutAnimationEvents').LAYOUT_ANIMATION_EVENT,
              a,
            );
            e.current = [].concat(e.current, [b]);
          });
          return function () {
            e.current.forEach(function (a) {
              a.remove();
            }),
              (e.current = []);
          };
        },
        [a, b],
      );
    }
    g['default'] = a;
  },
  98,
);
