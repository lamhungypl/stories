__d(
  'useShouldPrefetchQueriesBasedOnLastUsedTimestamp',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo,
      i = 7 * 24 * 60 * 60;
    function a(a, b) {
      return h(
        function () {
          if (a !== !0 || b == null) return !1;
          var c = Date.now() / 1e3;
          return c - b < i;
        },
        [b, a],
      );
    }
    g['default'] = a;
  },
  98,
);
