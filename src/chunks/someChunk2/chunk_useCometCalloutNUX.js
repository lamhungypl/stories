__d(
  'useCometCalloutNUX',
  [
    'react',
    'useCometCallout',
    'useCometNUXInlineSurvey',
    'useMergeRefs',
    'useNUX',
    'useRefEffect',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useMemo,
      j = { arrowStyle: 'inset', hasCloseButton: !0, type: 'accent' };
    function a(a, b, d) {
      d === void 0 && (d = !0);
      var e = b.onClose,
        f = b.onHelpful,
        g = b.onHide,
        k = b.onNotHelpful,
        l = b.onShow;
      a = c('useNUX')(a, d);
      d = a[0];
      var m = a[1],
        n = h(
          function () {
            m.onDismiss(), e && e();
          },
          [m, e],
        ),
        o = h(
          function () {
            m.onRemoved(), m.onHidden(), g && g();
          },
          [m, g],
        ),
        p = h(
          function () {
            m.onVisible(), l && l();
          },
          [m, l],
        ),
        q = h(
          function () {
            m.onHelpful(), f && f();
          },
          [m, f],
        ),
        r = h(
          function () {
            m.onNotHelpful(), k && k();
          },
          [m, k],
        ),
        s = c('useCometNUXInlineSurvey')();
      a = c('useRefEffect')(
        function (a) {
          var b = function () {
            m.onDismiss();
          };
          a.addEventListener('click', b, { passive: !0 });
          return function () {
            return a.removeEventListener('click', b, { passive: !0 });
          };
        },
        [m],
      );
      d = c('useCometCallout')(
        i(
          function () {
            return babelHelpers['extends']({}, j, b, {
              inlineSurvey: s,
              onClose: n,
              onHelpful: q,
              onHide: o,
              onNotHelpful: r,
              onShow: p,
            });
          },
          [b, s, n, q, o, r, p],
        ),
        d,
      );
      return c('useMergeRefs')(d, a);
    }
    g['default'] = a;
  },
  98,
);
