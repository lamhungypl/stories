__d(
  'useQP',
  [
    'CometQuickPromotionManagerContext.react',
    'CometRelay',
    'react',
    'useQP_quickPromotion.graphql',
    'useQuickPromotionFalcoEvent',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    e = d('react');
    var i = e.useContext,
      j = e.useEffect,
      k = e.useMemo,
      l = e.useRef,
      m = e.useState;
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('useQP_quickPromotion.graphql')),
        a,
      );
      a = (a = a) != null ? a : {};
      var e = a.encrypted_logging_data,
        f = a.id,
        g = a.surface_id;
      a = a.trigger;
      var n = m(!1),
        o = n[0],
        p = n[1];
      n = i(c('CometQuickPromotionManagerContext.react'));
      var q = n.registerQP,
        r = n.removeQP;
      n = c('useQuickPromotionFalcoEvent')({
        context_surface_id: (n = g) != null ? n : 10707,
        context_trigger: (g = a) != null ? g : 'newsfeed',
      });
      var s = n.logAction,
        t = n.logImpression;
      j(
        function () {
          if (f == null) return;
          return q(f, p);
        },
        [f, q],
      );
      var u = l({ visible: !1 });
      a = k(
        function () {
          return {
            onDismiss: function (a) {
              if (f == null) return;
              r(f);
              s('dismiss', f, e, a);
            },
            onPrimaryAction: function (a) {
              if (f == null) return;
              s('primary', f, e, a);
            },
            onSecondaryAction: function (a) {
              if (f == null) return;
              s('secondary', f, e, a);
            },
            onVisible: function (a) {
              if (f == null || u.current.visible) return;
              u.current.visible = !0;
              t(f, e, a);
            },
          };
        },
        [e, s, t, f, r],
      );
      return [o, a];
    }
    g['default'] = a;
  },
  98,
);
