__d(
  'FocusInertRegion.react',
  ['react', 'setElementCanTab', 'useLayoutEffect_SAFE_FOR_SSR'],
  function (a, b, c, d, e, f, g) {
    var h = d('react'),
      i = d('react').useRef,
      j = h.unstable_Scope;
    function a(a) {
      var b = a.children,
        e = a.disabled,
        f = e === void 0 ? !1 : e,
        g = a.focusQuery,
        k = i(null);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var a = k.current;
          if (g && a != null) {
            a = a.DO_NOT_USE_queryAllNodes(g);
            if (a !== null)
              for (var b = 0; b < a.length; b++) {
                var c = a[b];
                d('setElementCanTab').setElementCanTab(c, f);
              }
          }
        },
        [f, g],
      );
      return h.jsx(j, { ref: k, children: b });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
