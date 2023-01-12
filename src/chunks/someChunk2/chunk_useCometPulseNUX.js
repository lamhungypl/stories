__d(
  'useCometPulseNUX',
  [
    'react',
    'useCometCallout',
    'useCometNUXInlineSurvey',
    'useCometPulseBase',
    'useCometPulseBaseProps',
    'useMergeRefs',
    'useNUX',
    'useRefEffect',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useMemo;
    function a(a, b, d) {
      var e = b.calloutProps,
        f = b.contextualLayerProps,
        g = b.pulseProps,
        j = e.onClose,
        k = e.onHelpful,
        l = e.onHide,
        m = e.onNotHelpful,
        n = e.onShow;
      b = c('useNUX')(a, d);
      a = b[0];
      var o = b[1],
        p = h(
          function () {
            o.onDismiss(), j && j();
          },
          [o, j],
        ),
        q = h(
          function () {
            o.onRemoved(), o.onHidden(), l && l();
          },
          [o, l],
        ),
        r = h(
          function () {
            o.onVisible(), n && n();
          },
          [o, n],
        ),
        s = h(
          function () {
            o.onHelpful(), k && k();
          },
          [o, k],
        ),
        t = h(
          function () {
            o.onNotHelpful(), m && m();
          },
          [o, m],
        ),
        u = c('useCometNUXInlineSurvey')();
      d = i(
        function () {
          return babelHelpers['extends'](
            { arrowStyle: 'inset', type: 'accent' },
            e,
            {
              hasCloseButton: !0,
              inlineSurvey: u,
              onClose: p,
              onHelpful: s,
              onHide: q,
              onNotHelpful: t,
              onShow: r,
            },
          );
        },
        [e, u, p, s, q, t, r],
      );
      var v = c('useVisibilityObserver')({ onVisible: o.onVisible });
      b = i(
        function () {
          return babelHelpers['extends']({}, g, { ref: v });
        },
        [g, v],
      );
      d = c('useCometPulseBaseProps')({ calloutProps: d, pulseProps: b });
      b = d[0];
      var w = d[1];
      d = d[2];
      var x = d[0];
      d = d[1];
      var y = c('useRefEffect')(
        function (a) {
          var b = function () {
            o.onDismiss();
          };
          a.addEventListener('click', b, { passive: !0 });
          return function () {
            return a.removeEventListener('click', b, { passive: !0 });
          };
        },
        [o],
      );
      x = c('useCometCallout')(x, a && d);
      d = c('useCometPulseBase')({
        additionalPulseProps: w,
        calloutRef: x,
        contextualLayerProps: f,
        shouldShowPulse: b,
      });
      w = d.targetRef;
      x = d.view;
      return {
        dismissNux: o.onDismiss,
        targetRef: c('useMergeRefs')(y, w),
        view: a ? x : null,
      };
    }
    g['default'] = a;
  },
  98,
);
