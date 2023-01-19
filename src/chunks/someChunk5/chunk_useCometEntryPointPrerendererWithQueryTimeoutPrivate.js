__d(
  'useCometEntryPointPrerendererWithQueryTimeoutPrivate',
  [
    'CometRelay',
    'clearTimeout',
    'react',
    'requireDeferred',
    'setTimeout',
    'stableStringify',
    'useCometPrerenderer',
    'useCometRelayEntrypointContextualEnvironmentProvider',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = c('requireDeferred')('CometRelayEF').__setRef(
        'useCometEntryPointPrerendererWithQueryTimeoutPrivate',
      ),
      l = 3e4;
    function a(a, b, e, f) {
      var g = j(null),
        m = c('stableStringify')(b),
        n = j(null),
        o = h(function () {
          if (n.current == null) return;
          c('clearTimeout')(n.current);
          n.current = null;
        }, []),
        p = h(
          function () {
            var a;
            o();
            a =
              (a = g.current) == null
                ? void 0
                : (a = a.preloadedEntryPoint) == null
                ? void 0
                : a.dispose;
            a && a();
            g.current = null;
          },
          [o],
        ),
        q = h(
          function () {
            n.current = c('setTimeout')(function () {
              p();
            }, l);
          },
          [p],
        );
      i(
        function () {
          return p;
        },
        [p],
      );
      var r = c('useCometRelayEntrypointContextualEnvironmentProvider')(),
        s = h(
          function () {
            o();
            if (b == null) return;
            if (
              g.current == null ||
              g.current.entryPoint !== a ||
              g.current.preloadParamsHash !== m
            ) {
              p();
              g.current = {
                entryPoint: a,
                preloadedEntryPoint: d('CometRelay').loadEntryPoint(r, a, b),
                preloadParamsHash: m,
              };
              var c = k.getModuleIfRequireable();
              c && a && c.fetchPredictedResources(a, b);
            }
            return (c = g.current) == null ? void 0 : c.preloadedEntryPoint;
          },
          [o, a, p, r, m],
        ),
        t = h(
          function () {
            var c = k.getModuleIfRequireable();
            b && c && c.fetchPredictions(a, b);
            a.root.preload();
            Boolean(
              f == null
                ? void 0
                : f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            ) && s();
          },
          [
            a,
            f == null ? void 0 : f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            b,
            s,
          ],
        );
      e = c('useCometPrerenderer')(e, !1, t, s, q);
      e[0];
      t = e[1];
      q = e[2];
      var u = e[3];
      e = e[4];
      var v = h(
        function () {
          var a = s();
          a != null && (g.current = null);
          return a;
        },
        [s],
      );
      return [
        v,
        { onHighIntent: e, onHoverIn: t, onHoverOut: q, onPressIn: u },
      ];
    }
    g['default'] = a;
  },
  98,
);
