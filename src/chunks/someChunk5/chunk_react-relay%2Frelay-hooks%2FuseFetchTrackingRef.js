__d(
  'react-relay/relay-hooks/useFetchTrackingRef',
  ['react', 'react-relay/relay-hooks/useUnsafeRef_DEPRECATED'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    var h = c.useCallback,
      i = c.useEffect;
    function a() {
      var a = b('react-relay/relay-hooks/useUnsafeRef_DEPRECATED')(null),
        c = b('react-relay/relay-hooks/useUnsafeRef_DEPRECATED')(!1),
        d = h(function () {
          a.current != null && (a.current.unsubscribe(), (a.current = null)),
            (c.current = !1);
        }, []),
        e = h(function (b) {
          (a.current = b), (c.current = !0);
        }, []),
        f = h(function () {
          (a.current = null), (c.current = !1);
        }, []);
      i(
        function () {
          return d;
        },
        [d],
      );
      return {
        isFetchingRef: c,
        startFetch: e,
        disposeFetch: d,
        completeFetch: f,
      };
    }
    e.exports = a;
  },
  null,
);
