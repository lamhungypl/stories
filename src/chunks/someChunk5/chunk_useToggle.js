__d(
  'useToggle',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useState;
    function a(a) {
      a === void 0 && (a = !1);
      a = i(a);
      var b = a[0],
        c = a[1];
      a = h(function (a) {
        c(
          a == null
            ? function (a) {
                return !a;
              }
            : a,
        );
      }, []);
      return [b, a];
    }
    g['default'] = a;
  },
  98,
);
