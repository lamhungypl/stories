__d(
  'react-relay/relay-hooks/useFragmentNode',
  [
    'react',
    'react-relay/relay-hooks/FragmentResource',
    'react-relay/relay-hooks/useRelayEnvironment',
    'react-relay/relay-hooks/useUnsafeRef_DEPRECATED',
    'relay-runtime',
    'warning',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b(
        'react-relay/relay-hooks/FragmentResource',
      ).getFragmentResourceForEnvironment;
    c = g || (g = b('react'));
    var i = c.useEffect,
      j = c.useState,
      k = b('relay-runtime').getFragmentIdentifier;
    function a(a, c, d) {
      var e = b('react-relay/relay-hooks/useRelayEnvironment')(),
        f = h(e),
        g = b('react-relay/relay-hooks/useUnsafeRef_DEPRECATED')(!1),
        l = j(0),
        m = l[1];
      l = k(a, c);
      var n = f.readWithIdentifier(a, c, l, d),
        o = b('react-relay/relay-hooks/useUnsafeRef_DEPRECATED')(!0);
      function p() {
        o.current = !0;
        var a = f.checkMissedUpdates(n)[0];
        a && r();
      }
      function q() {
        o.current = !1;
      }
      function r() {
        if (g.current === !1 || o.current === !1) return;
        m(function (a) {
          return a + 1;
        });
      }
      i(
        function () {
          g.current = !0;
          var a = f.subscribe(n, r);
          return function () {
            (g.current = !1), a.dispose();
          };
        },
        [e, l],
      );
      return { data: n.data, disableStoreUpdates: q, enableStoreUpdates: p };
    }
    e.exports = a;
  },
  null,
);
