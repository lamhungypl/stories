__d(
  'CometEntryPointDialogTrigger.react',
  ['react', 'useCometEntryPointDialog'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    b = d('react');
    var h = b.useCallback,
      i = b.useRef;
    function a(a) {
      var b = a.children,
        d = a.dialogEntryPoint,
        e = a.fallback,
        f = a.onHide,
        g = a.onShow,
        j = a.otherProps,
        k = a.preloadParams,
        l = a.preloadTrigger,
        m = a.tracePolicy;
      i(null);
      a = c('useCometEntryPointDialog')(d, k, l, e);
      var n = a[0];
      d = a[1];
      k = a[2];
      l = a[3];
      e = h(
        function () {
          n(j, f, m), g == null ? void 0 : g();
        },
        [n, j, f, m, g],
      );
      return b(e, d, k, l);
    }
    g['default'] = a;
  },
  98,
);
