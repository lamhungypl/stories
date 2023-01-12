__d(
  'useCometTooltipQP',
  [
    'CometRelay',
    'react',
    'useCometCallout',
    'useCometTooltipQP_quickPromotion.graphql',
    'useQP',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    e = d('react');
    var i = e.useCallback,
      j = e.useMemo,
      k = { arrowStyle: 'inset', hasCloseButton: !0, type: 'accent' };
    function a(a, e) {
      var f;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('useCometTooltipQP_quickPromotion.graphql')),
        a,
      );
      var g =
        a == null
          ? void 0
          : (f = a.promotion_creatives) == null
          ? void 0
          : (f = f[0]) == null
          ? void 0
          : f.title_text;
      f = c('useQP')(a);
      a = f[0];
      var l = f[1],
        m = (e == null ? void 0 : e.hasCloseButton) === !1,
        n = i(
          function () {
            m || l.onDismiss(),
              e == null ? void 0 : e.onClose == null ? void 0 : e.onClose();
          },
          [e, m, l],
        ),
        o = i(
          function () {
            m && l.onDismiss(),
              e == null ? void 0 : e.onHide == null ? void 0 : e.onHide();
          },
          [e, m, l],
        ),
        p = i(
          function () {
            l.onVisible(),
              e == null ? void 0 : e.onShow == null ? void 0 : e.onShow();
          },
          [e, l],
        );
      f = j(
        function () {
          var a;
          return babelHelpers['extends']({}, k, e, {
            label: (a = g) != null ? a : '',
            onClose: n,
            onHide: o,
            onShow: p,
          });
        },
        [e, g, n, o, p],
      );
      return c('useCometCallout')(f, a && g != null);
    }
    g['default'] = a;
  },
  98,
);
