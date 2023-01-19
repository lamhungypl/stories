__d(
  'useGetComposingState',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef;
    function a() {
      var a = j(!1),
        b = h(
          function (b) {
            a.current = !0;
          },
          [a],
        ),
        c = h(
          function (b) {
            a.current = !1;
          },
          [a],
        );
      i(
        function () {
          window.addEventListener('compositionstart', b);
          window.addEventListener('compositionend', c);
          return function () {
            window.removeEventListener('compositionstart', b),
              window.removeEventListener('compositionend', c);
          };
        },
        [c, b],
      );
      return function (b) {
        return b.isComposing || a.current;
      };
    }
    g['default'] = a;
  },
  98,
);
