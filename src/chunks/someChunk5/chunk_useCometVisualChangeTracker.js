__d(
  'useCometVisualChangeTracker',
  ['cr:683059', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    c = d('react');
    var h = c.useCallback,
      i = c.useEffect,
      j = c.useRef;
    function a() {
      var a = j(null),
        c = j(null);
      i(function () {
        return function () {
          c.current && c.current(), (c.current = null), (a.current = null);
        };
      }, []);
      return h(function (d) {
        if (a.current !== d) {
          c.current && (c.current(), (c.current = null));
          a.current = d;
          if (d && b('cr:683059')) {
            var e = b('cr:683059').getCurrentNavigationTrace();
            e && (c.current = e.addMutationRoot(d));
          }
        }
      }, []);
    }
    g['default'] = a;
  },
  98,
);
