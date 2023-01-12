__d(
  'useCometNUXInlineSurvey',
  ['Random', 'react', 'useUnsafeRef_DEPRECATED'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useMemo,
      i = b.useRef,
      j = 100,
      k = Object.freeze({});
    function a(a) {
      a === void 0 && (a = k);
      a = a;
      var b = a.persistAfterAnswering,
        e = b === void 0 ? !1 : b;
      b = a.inlineSurveySampleRate_testOnlyDONOTUSE;
      var f = b === void 0 ? j : b,
        g = c('useUnsafeRef_DEPRECATED')(!1),
        l = i(null);
      return h(
        function () {
          return {
            getShouldShowInlineSurvey: function () {
              if (e === !1 && g.current === !0) return !1;
              l.current == null && (l.current = d('Random').coinflip(f));
              return l.current;
            },
            initialHasAnsweredSurvey: function () {
              return g.current;
            },
            onAnswer:
              g.current === !0
                ? void 0
                : function () {
                    g.current = !0;
                  },
          };
        },
        [f, e],
      );
    }
    g['default'] = a;
  },
  98,
);
