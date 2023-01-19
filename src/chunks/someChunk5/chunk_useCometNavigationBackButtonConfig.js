__d(
  'useCometNavigationBackButtonConfig',
  [
    'CometRouterPushViewStackContext',
    'react',
    'useCometRouterDispatcher',
    'usePrevious',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = c('useCometRouterDispatcher')(),
        b = h(
          function () {
            a != null && a.goBack();
          },
          [a],
        ),
        d = h(
          function () {
            a != null && a.popPushView();
          },
          [a],
        ),
        e = i(c('CometRouterPushViewStackContext')),
        f = e != null && e.length > 0;
      e = e != null ? e[e.length - 1] : null;
      var g = c('usePrevious')(e);
      f = f;
      g =
        (e =
          e == null
            ? g == null
              ? void 0
              : (g = g.route) == null
              ? void 0
              : g.useCloseButton
            : e == null
            ? void 0
            : (g = e.route) == null
            ? void 0
            : g.useCloseButton) != null
          ? e
          : !1;
      return {
        onPressBackButton: g ? d : b,
        shouldUseCloseButton: g,
        showBackButton: f,
      };
    }
    g['default'] = a;
  },
  98,
);
