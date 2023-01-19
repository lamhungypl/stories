__d(
  'useUnsafeRef_DEPRECATED',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a(a) {
      return h(function () {
        return { current: a };
      }, []);
    }
    g['default'] = a;
  },
  98,
);
