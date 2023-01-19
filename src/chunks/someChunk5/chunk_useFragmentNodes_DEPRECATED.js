__d(
  'useFragmentNodes_DEPRECATED',
  [
    'mapObject',
    'react',
    'react-relay/relay-hooks/FragmentResource',
    'react-relay/relay-hooks/useRelayEnvironment',
    'relay-runtime',
    'useUnsafeRef_DEPRECATED',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function a(a, b, e) {
      var f = c('react-relay/relay-hooks/useRelayEnvironment')(),
        g = d(
          'react-relay/relay-hooks/FragmentResource',
        ).getFragmentResourceForEnvironment(f),
        m = i(!1),
        n = j(0),
        o = n[1];
      n = l(a, b);
      var p = c('useUnsafeRef_DEPRECATED')(0),
        q = c('useUnsafeRef_DEPRECATED')(0);
      f = k(f);
      n = k(n);
      f = f || n;
      n = j(b);
      var r = n[0];
      n = n[1];
      var s = Object.keys(b).filter(function (b) {
          return !Object.prototype.hasOwnProperty.call(a, b);
        }),
        t = s.some(function (a) {
          return r[a] !== b[a];
        });
      s = s.some(function (a) {
        return !d('relay-runtime').isScalarAndEqual(r[a], b[a]);
      });
      s = f || s;
      s && q.current++;
      f && p.current++;
      t && n(b);
      var u = g.readSpec(a, b, e),
        v = i(!0);
      function w() {
        v.current = !0;
        var a = g.checkMissedUpdatesSpec(u);
        a && y();
      }
      function x() {
        v.current = !1;
      }
      function y() {
        var a;
        if (m.current === !1 || v.current === !1) return;
        q.current = ((a = q.current) != null ? a : 0) + 1;
        o(function (a) {
          return a + 1;
        });
      }
      h(
        function () {
          m.current = !0;
          var a = g.subscribeSpec(u, y);
          return function () {
            (m.current = !1), a.dispose();
          };
        },
        [p.current],
      );
      s = c('mapObject')(u, function (a, b) {
        return a.data;
      });
      return {
        data: s,
        disableStoreUpdates: x,
        enableStoreUpdates: w,
        shouldUpdateGeneration: q.current,
      };
    }
    function k(a) {
      var b = j(a),
        c = b[0];
      b = b[1];
      c = c !== a;
      c && b(a);
      return c;
    }
    function l(a, b) {
      return JSON.stringify(
        d('relay-runtime').stableCopy(
          c('mapObject')(a, function (a, c) {
            c = b[c];
            return d('relay-runtime').getFragmentIdentifier(a, c);
          }),
        ),
      );
    }
    g['default'] = a;
  },
  98,
);
