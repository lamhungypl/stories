__d(
  'CometInfiniteScrollTrigger.react',
  ['mergeRefs', 'react', 'stylex', 'useAfterPaint', 'useVisibilityObserver'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.startTransition,
      j = b.useCallback,
      k = b.useMemo,
      l = b.useRef;
    function a(a) {
      var b = a.children,
        d = a.hasMore,
        e = a.isLoading,
        f = a.onLoadMore,
        g = a.rootMargin;
      a = a.xstyle;
      var m = l(!1),
        n = l(null),
        o = j(
          function () {
            i(function () {
              f(n);
            });
          },
          [f, i, n],
        ),
        p = j(
          function () {
            d && !e && m.current && o();
          },
          [o, e, d],
        );
      c('useAfterPaint')(p);
      p = j(
        function () {
          var a = m.current;
          m.current = !0;
          !a && d && !e && o();
        },
        [d, e, o],
      );
      var q = j(function () {
          m.current = !1;
        }, []),
        r = c('useVisibilityObserver')({
          onHidden: q,
          onVisible: p,
          options: { rootMargin: (q = g) != null ? q : 0 },
        });
      p = k(
        function () {
          return c('mergeRefs')(r, n);
        },
        [r, n],
      );
      return d || e
        ? h.jsx('div', { className: c('stylex')(a), ref: p, children: b })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
