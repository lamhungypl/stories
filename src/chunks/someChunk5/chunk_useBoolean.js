__d(
  'useBoolean',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useState;
    function a(a) {
      a = i(a);
      var b = a[0],
        c = a[1];
      return {
        value: b,
        set: c,
        toggle: h(function () {
          return c(function (a) {
            return !a;
          });
        }, []),
        setTrue: h(function () {
          return c(!0);
        }, []),
        setFalse: h(function () {
          return c(!1);
        }, []),
      };
    }
    g['default'] = a;
  },
  98,
);
