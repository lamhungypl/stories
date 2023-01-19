__d(
  'CometSettingsBadgeWrapper.react',
  [
    'BaseView.react',
    'CometErrorBoundary.react',
    'CometGlobalPanelLayoutContext',
    'CometPlaceholder.react',
    'CometPressable.react',
    'PredictionThresholds',
    'gkx',
    'killswitch',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useRef,
      l = {
        badgeContainer: { position: 'x10l6tqk', zIndex: 'x1vjfegm', $$css: !0 },
      };
    function a(a) {
      var b = a.badgeXStyle,
        e = a.children,
        f = a.deferredBadgeCount,
        g = a.label,
        m = a.onBadgeCount,
        n = a.onHighIntentPrerenderer,
        o = a.onHoverIn,
        p = a.onHoverOut,
        q = a.onPress,
        r = a.onPressIn,
        s = a.tracePolicy;
      a = j(c('CometGlobalPanelLayoutContext'));
      var t = f,
        u = k(null),
        v = i(
          function (a) {
            m && m(a);
            if (u.current === a) return;
            u.current = a;
            a >= d('PredictionThresholds').MIN_JEWEL_BADGE &&
            a <= d('PredictionThresholds').MAX_JEWEL_BADGE &&
            ((s === 'comet.jewel.messenger' &&
              !c('killswitch')('COMET_PRERENDER_MESSENGER')) ||
              (s === 'comet.jewel.notification' && c('gkx')('1820189')))
              ? n(!0)
              : n(!1);
          },
          [m, n, s],
        );
      return h.jsxs(c('BaseView.react'), {
        children: [
          e,
          f != null &&
            h.jsx(c('CometErrorBoundary.react'), {
              children: h.jsx(c('CometPlaceholder.react'), {
                fallback: h.jsx('span', {}),
                children: h.jsx(c('CometPressable.react'), {
                  'aria-hidden': !0,
                  focusable: !1,
                  hideHoverOverlay: !0,
                  label: g,
                  onHoverIn: o,
                  onHoverOut: p,
                  onPress: q,
                  onPressIn: r,
                  overlayRadius: '50%',
                  xstyle: [l.badgeContainer, b],
                  children: h.jsx(t, {
                    overflow: a ? 9 : 20,
                    setBadgeCount: v,
                  }),
                }),
              }),
            }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
