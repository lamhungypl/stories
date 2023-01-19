__d(
  'react-relay/relay-hooks/useLazyLoadQueryNode',
  [
    'react',
    'react-relay/relay-hooks/ProfilerContext',
    'react-relay/relay-hooks/QueryResource',
    'react-relay/relay-hooks/useFetchTrackingRef',
    'react-relay/relay-hooks/useFragmentNode',
    'react-relay/relay-hooks/useRelayEnvironment',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('react-relay/relay-hooks/QueryResource').getQueryCacheIdentifier,
      i = b(
        'react-relay/relay-hooks/QueryResource',
      ).getQueryResourceForEnvironment;
    c = g || (g = b('react'));
    var j = c.useContext,
      k = c.useEffect,
      l = c.useState,
      m = c.useRef;
    function a(a) {
      var c = a.query,
        d = a.componentDisplayName,
        e = a.fetchObservable,
        f = a.fetchPolicy,
        g = a.fetchKey,
        n = a.renderPolicy;
      a = b('react-relay/relay-hooks/useRelayEnvironment')();
      var o = j(b('react-relay/relay-hooks/ProfilerContext')),
        p = i(a),
        q = l(0),
        r = q[0],
        s = q[1];
      q = b('react-relay/relay-hooks/useFetchTrackingRef')();
      var t = q.startFetch,
        u = q.completeFetch;
      r = r + '-' + ((q = g) != null ? q : '');
      var v = h(a, c, f, n, r),
        w = o.wrapPrepareQueryResource(function () {
          return p.prepareWithIdentifier(
            v,
            c,
            e,
            f,
            n,
            { start: t, complete: u, error: u },
            o,
          );
        }),
        x = m(!1);
      k(function () {
        return function () {
          x.current = !0;
        };
      }, []);
      k(
        function () {
          if (x.current === !0) {
            x.current = !1;
            s(function (a) {
              return a + 1;
            });
            return;
          }
          var a = p.retain(w, o);
          return function () {
            a.dispose();
          };
        },
        [a, v],
      );
      k(function () {
        p.releaseTemporaryRetain(w);
      });
      g = w.fragmentNode;
      q = w.fragmentRef;
      r = b('react-relay/relay-hooks/useFragmentNode')(g, q, d);
      a = r.data;
      return a;
    }
    e.exports = a;
  },
  null,
);
