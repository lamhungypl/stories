__d(
  'useCometPrerendererImpl',
  ['emptyFunction', 'react', 'useCometPreloader'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    var h = a.useCallback,
      i = a.useState;
    b = function (a, b, d, e, f) {
      var g = i(!1),
        j = g[0],
        k = g[1];
      g = i(!1);
      var l = g[0],
        m = g[1];
      g = c('useCometPreloader')(a, d, e, f);
      var n = g[0],
        o = g[1],
        p = g[2],
        q = g[3];
      d = h(
        function (b) {
          var c = function () {
              a === 'tooltip' && k(!0);
            },
            d = function () {
              a === 'button_aggressive' && k(!0);
            };
          n(b, c, d);
        },
        [n, a],
      );
      e = h(
        function () {
          o(), k(!1);
        },
        [o],
      );
      f = h(
        function (b) {
          p(b), (a === 'button' || a === 'button_aggressive') && k(!0);
        },
        [p, a],
      );
      g = h(
        function (a) {
          q(a), m(a);
        },
        [q],
      );
      if (a == null)
        return [
          { isVisible: b, shouldPrerender: !1 },
          c('emptyFunction'),
          c('emptyFunction'),
          c('emptyFunction'),
          c('emptyFunction'),
        ];
      b = { isVisible: b, shouldPrerender: j || l };
      return [b, d, e, f, g];
    };
    e = b;
    g['default'] = e;
  },
  98,
); /*FB_PKG_DELIM*/
