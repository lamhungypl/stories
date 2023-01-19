__d(
  'useCometPlaceholderImpl',
  [
    'CometSSRHydrationMarkerUtils',
    'CometSuspenseHUD.react',
    'ExecutionEnvironment',
    'gkx',
    'hero-tracing-placeholder',
    'react',
    'requireDeferred',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useRef,
      k = c('requireDeferred')('CometSuspenseFalcoEvent').__setRef(
        'useCometPlaceholderImpl',
      ),
      l = 5;
    function m(a) {
      var b = a.cb,
        d = j(!1);
      c('useLayoutEffect_SAFE_FOR_SSR')(function () {
        d.current || (b(), (d.current = !0));
      });
      return null;
    }
    function b(b) {
      var e = b.children,
        f = b.fallback,
        g = b.name,
        n = b.unstable_avoidThisFallback,
        o = b.unstable_onSuspense,
        p = c('useStable')(function () {
          return c('CometSuspenseHUD.react') &&
            c('ExecutionEnvironment').canUseDOM
            ? a.document.createElement('div')
            : null;
        }),
        q = j(0),
        r = j(null),
        s = j(!1);
      b = e;
      e = f;
      d('CometSSRHydrationMarkerUtils').addMarkersToChildren != null &&
        d('CometSSRHydrationMarkerUtils').addMarkersToFallback != null &&
        ((b = d('CometSSRHydrationMarkerUtils').addMarkersToChildren(b)),
        (e = d('CometSSRHydrationMarkerUtils').addMarkersToFallback(e)));
      f = i(
        function (a) {
          p != null && (p.textContent = a), (r.current = a), o && o(a);
        },
        [p, o],
      );
      var t = null;
      p != null &&
        c('CometSuspenseHUD.react') != null &&
        (t = h.jsx(c('CometSuspenseHUD.react'), { desc: p }));
      var u = i(
          function () {
            (q.current += 1),
              c('gkx')('1863055') &&
                s.current &&
                q.current <= l &&
                k.onReady(function (a) {
                  a.log(function () {
                    return {
                      event: 'unexpected_suspense',
                      is_backup_placeholder: n === !0,
                      placeholder_name: g,
                      promise_name: r.current,
                      suspense_count: String(q.current),
                    };
                  });
                });
          },
          [g, n],
        ),
        v = i(function () {
          s.current = !0;
        }, []);
      return h.jsxs(d('hero-tracing-placeholder').HeroPlaceholder, {
        fallback: h.jsxs(h.Fragment, { children: [e, h.jsx(m, { cb: u }), t] }),
        name: g,
        unstable_avoidThisFallback: n,
        unstable_onSuspense: f,
        children: [h.jsx(m, { cb: v }), b],
      });
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    g['default'] = b;
  },
  98,
);
