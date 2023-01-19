__d(
  'useCometAriaID',
  ['react', 'useCometUniqueID', 'useSetAttributeRef'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a(a) {
      var b = c('useCometUniqueID')(),
        d = c('useSetAttributeRef')('id', b),
        e = c('useSetAttributeRef')(a, b);
      return h(
        function () {
          var c;
          return [
            [{ id: b, suppressHydrationWarning: !0 }, d],
            [((c = {}), (c[a] = b), (c.suppressHydrationWarning = !0), c), e],
          ];
        },
        [a, b, d, e],
      );
    }
    g['default'] = a;
  },
  98,
);
